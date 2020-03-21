(ns re-frame-project.view.app
  (:require
    [re-frame.core :refer [dispatch
                           subscribe]]
    [re-frame-project.view.style :refer [component-style]]
    [re-frame-project.view.components.button :refer [button]]))

(defn form-1-component
  [this-component-id last-id]
  (if (= this-component-id last-id)
    [:div {:style (component-style)}
     (+ this-component-id (deref (subscribe [:shared-value])))]
    [:div {:style (component-style)}
     ^{:key (inc this-component-id)}
     [form-1-component
      (inc this-component-id)
      last-id]]))

(defn test-component
  []
  [:div {:style (component-style)}
   (deref (subscribe [:shared-value]))])

(defn slider [param value min max step]
  [:input {:type      "range" :value value :min min :max max :step step
           :style     {:width "100%"}
           :on-change (fn [e]
                        (dispatch [:change param (.. e -target -value)]))}])

(defn double-up
  [value]
  (* 2 value))

(defn text-and-buttons
  [components depth]
  [:div
   [:h1 {:style {:text-align "center"}} "Re-Frame Application State Measurement (Independent)"]

   [:div {:style {:text-align "center"}} "Components " components]
   [slider :components (int components) 1 2048 1]
   [button {:label       "Double components"
            :button-type :filled
            :on-click    #(dispatch [:double-up :components double-up])}]

   [:div {:style {:text-align "center"}} "Depth " depth]
   [slider :depth (int depth) 1 2048 1]
   [button {:label       "Double depth"
            :button-type :filled
            :on-click    #(dispatch [:double-up :depth double-up])}]

   [:div {:style {:text-align "center"}} "Affected leaf components: " (int (Math/floor (/ components depth)))]

   [button {:label       "Increment Shared"
            :button-type :filled
            :on-click    #(dispatch [:increment-shared-value])}]])

(defn global-state-app
  []
  (let [[components depth] (vals (deref (subscribe [:state])))
        component-ids (range 1 (inc (int components)))]
    [:div#root

     [text-and-buttons components depth]

     (->> (partition-all (int depth) component-ids)
          (map (fn [child-component-ids]
                 ^{:key (first child-component-ids)}
                 [form-1-component
                  (first child-component-ids)
                  (last child-component-ids)]))
          (doall)
          )]
    ))