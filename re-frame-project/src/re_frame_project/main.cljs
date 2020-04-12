(ns re-frame-project.main
  (:require
   [reagent.core :refer [render]]
   [re-frame.core :refer [dispatch-sync]]
   [re-frame-project.view.app :refer [root]]
   [re-frame-project.interop :refer [get-element-by-id!]]
   [re-frame-project.query]
   [re-frame-project.event-handlers]))

(defn do-render
  []
  (render [root] (get-element-by-id! "app")))

(defn reload
  {:dev/after-load true}
  []
  (do-render))

; Entry point
(defn main!
  []
  (dispatch-sync [:initialize])
  (do-render))
