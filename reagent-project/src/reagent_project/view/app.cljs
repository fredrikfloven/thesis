(ns reagent-project.view.app
  (:require
   [reagent.core :as r]
   [reagent-project.view.style :refer [component-style]]
   [reagent-project.view.components.button :refer [button]]))

(defn form-1-component
  [this-component-id last-id shared-value]
  (if (= this-component-id last-id)
    [:div {:style (component-style)}
     (+ this-component-id shared-value)]
    [:div {:style (component-style)}
     ^{:key (inc this-component-id)}
     [form-1-component
      (inc this-component-id)
      last-id
      shared-value]]))


(defn test-component
  [shared-value]
  [:div {:style (component-style)}
   shared-value])


(defonce state-atom (r/atom {:components   2
                                        :depth        2
                                        :shared-value 0}))

(defn slider [param value min max step]
  [:input {:type      "range" :value value :min min :max max :step step
           :style     {:width "100%"}
           :on-change (fn [e]
                        (swap! state-atom assoc param (.. e -target -value)))}])

(defn double-up
  [value]
  (* 2 value))

(defn text-and-buttons
  [components depth]
  [:div
   [:h1 {:style {:text-align "center"}} "Reagent Application State Measurement (Inherited) "]

   [:div {:style {:text-align "center"}} "Components " components]
   [slider :components (int components) 1 5000 1]
   [button {:label       "Double components"
            :button-type :filled
            :on-click    #(swap! state-atom update-in [:components] double-up)}]

   [:div {:style {:text-align "center"}} "Depth " depth]
   [slider :depth (int depth) 1 5000 1]
   [button {:label       "Double depth"
            :button-type :filled
            :on-click    #(swap! state-atom update-in [:depth] double-up)}]

   [:div {:style {:text-align "center"}} "Affected leaf components: " (int (Math/floor (/ components depth)))]

   [button {:label       "Increment Shared"
            :button-type :filled
            :on-click    #(swap! state-atom update-in [:shared-value] inc)}]])

(defn relative-state-app
  []
  (let [[components depth shared-value] (vals (deref state-atom))
        component-ids (range 1 (inc (int components)))]
    [:div#root

     [text-and-buttons components depth]

     (->> (partition-all (int depth) component-ids)
          (map (fn [child-component-ids]
                 ^{:key (first child-component-ids)}
                 [form-1-component
                  (first child-component-ids)
                  (last child-component-ids)
                  shared-value]))
          (doall)
          )]
    )
  )