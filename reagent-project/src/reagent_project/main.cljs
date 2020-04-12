(ns reagent-project.main
  (:require
    [reagent.core :refer [render]]
    [reagent-project.view.app :refer [root]]
    [reagent-project.interop :refer [get-element-by-id!]]))

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
