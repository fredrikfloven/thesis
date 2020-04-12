(ns re-frame-project.view.components.button
  (:require [reagent.core :as reagent]
            [re-frame-project.view.style :as style]))

(defn get-style
  [button-type]
  (condp = button-type
    :secondary {:border-width     "2px"
                :cursor           "pointer"
                :font-family      style/font
                :font-weight      "bold"
                :font-size        "1.125rem"
                :line-height      "1.5rem"
                :padding          "4px 13px 4px 13px"
                :transition       "all 200ms"
                :background-color style/transparent
                :border-color     style/navy
                :box-shadow       "none"
                :color            style/navy}
    :warning {:border-width     "2px"
                :cursor           "pointer"
                :font-family      style/font
                :font-weight      "bold"
                :font-size        "1.125rem"
                :line-height      "1.5rem"
                :padding          "4px 13px 4px 13px"
                :transition       "all 200ms"
                :background-color style/darker-red
                :border-color     style/darkest-red
                :box-shadow       "none"
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
             :background-color style/navy
             }
    ; default to primary button
    {
     :color            style/white
     :cursor           "pointer"
     :font-family      style/font
     :font-weight      "bold"
     :font-size        "1.125rem"
     :line-height      "1.5rem"
     :padding          "6px 13px 6px 13px"
     :transition       "all 200ms"
     :background-color style/navy}))

(defn button 
  [{label :label on-click :on-click type :type button-type :button-type}]
      [:button {:type (if type type "button")
                  :style (get-style button-type)
                  :on-click on-click} label])

