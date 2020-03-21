(ns reagent-project.main
  (:require
    [reagent.core :refer [render]]
    [reagent-project.view.app :refer [relative-state-app]]
    [reagent-project.interop :refer [get-element-by-id!]]
    ))

(defn do-render
  []
  (render [relative-state-app] (get-element-by-id! "app")))      ; render the component in the app element

; Shadow-cljs dev-stuff...probably
(defn
  reload
  {:dev/after-load true}
  []
  (println "Dev Reload")
  (do-render))

; Entry point
(defn main!
  []
  (do-render))
