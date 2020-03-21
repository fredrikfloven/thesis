(ns re-frame-project.view.components.button
  (:require [reagent.core :as reagent]
            [re-frame-project.view.style :as style]))

(defn get-style
  [button-type pressed hovered]
  (condp = button-type
    :secondary {:border-width     "2px"
                :cursor           "pointer"
                :font-family      style/font
                :font-weight      "bold"
                :font-size        "1.125rem"
                :line-height      "1.5rem"
                :padding          "4px 13px 4px 13px"
                :transition       "all 200ms"
                :background-color (cond
                                    pressed style/light-blue
                                    hovered style/transparent
                                    :else style/transparent)
                :border-color     (cond
                                    pressed style/light-blue
                                    hovered style/navy
                                    :else style/navy)
                :box-shadow       (cond
                                    pressed "inset 0 0 0 1px #00325c"
                                    hovered "inset 0 0 0 1px #00427a"
                                    :else "none")
                :color            (cond
                                    pressed style/dark-blue
                                    hovered style/navy
                                    :else style/navy)}
    :warning {:border-width     "2px"
                :cursor           "pointer"
                :font-family      style/font
                :font-weight      "bold"
                :font-size        "1.125rem"
                :line-height      "1.5rem"
                :padding          "4px 13px 4px 13px"
                :transition       "all 200ms"
                :background-color (cond
                                    pressed style/red
                                    :else style/darker-red)
                :border-color     style/darkest-red
                :box-shadow       (cond
                                    pressed "inset 0 0 0 1px #00325c"
                                    hovered "inset 0 0 0 1px #00427a"
                                    :else "none")
                :color            style/white}
    :filled {:width "100%"
             :color            style/white
             :cursor           "pointer"
             :font-family      style/font
             :font-weight      "bold"
             :font-size        "1.125rem"
             :line-height      "1.5rem"
             :padding          "6px 13px 6px 13px"
             :transition       "all 200ms"
             :background-color (cond
                                 pressed style/darker-red
                                 hovered style/dark-blue
                                 :else style/navy)
             }
    ; default to primary button
    {                                                       ;:border           "none"
     :color            style/white
     :cursor           "pointer"
     :font-family      style/font
     :font-weight      "bold"
     :font-size        "1.125rem"
     :line-height      "1.5rem"
     :padding          "6px 13px 6px 13px"
     :transition       "all 200ms"
     :background-color (cond
                         pressed style/darker-red
                         hovered style/dark-blue
                         :else style/navy)}))

(defn button [arg-map]
  (let [local-state-atom (reagent/atom {:hovered false
                                        :pressed false})]
    (fn [{label :label on-click :on-click type :type button-type :button-type}]
      (let [local-state (deref local-state-atom)]
        [:button {:type (if type type "button")
                  :style (get-style button-type (:pressed local-state) (:hovered local-state))
                        :on-focus (fn [e] (js/console.log e))
                        :on-blur (fn [] (println "blur"))
                        :on-mouse-enter (fn [] (swap! local-state-atom assoc :hovered true))
                        :on-mouse-leave (fn [] (swap! local-state-atom assoc :hovered false))
                        :on-mouse-down (fn [] (swap! local-state-atom assoc :pressed true))
                        :on-mouse-up (fn [] (swap! local-state-atom assoc :pressed false))
                        :on-click on-click} label]))))

