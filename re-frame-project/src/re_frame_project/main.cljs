(ns re-frame-project.main
  (:require
   [reagent.core :refer [render]]
   [re-frame.core :refer [ dispatch-sync]]
   [re-frame-project.view.app :refer [global-state-app]]
   [re-frame-project.interop :refer [get-element-by-id!]]
   [re-frame-project.query]
   [re-frame-project.event-handlers]
   ))

(defn do-render
  []
  (render [global-state-app] (get-element-by-id! "app")))      ; render the component in the app element

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
  (dispatch-sync [:initialize])
  (do-render))
