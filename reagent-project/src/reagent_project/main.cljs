(ns reagent-project.main
  (:require
    [reagent.core :refer [render]]
    [reagent-project.view.app :refer [root]]))

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

; Entry point
(defn main!
  []
  (do-render))
