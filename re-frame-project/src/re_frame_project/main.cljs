(ns re-frame-project.main
  (:require
   [reagent.core :refer [render]]
   [re-frame.core :refer [dispatch-sync]]
   [re-frame-project.view.app :refer [root]]
   [re-frame-project.query]
   [re-frame-project.event-handlers]))

(defn get-element-by-id!
  [id]
  (js/document.getElementById id))

(defn do-render
  []
  (render [root] (get-element-by-id! "app")))

(defn reload
  {:dev/after-load true}
  []
  (do-render))

(defn main!
  []
  (dispatch-sync [:initialize])
  (do-render))