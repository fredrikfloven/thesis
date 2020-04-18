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
     (deref (subscribe [:get-shared-value]))]
    [:div {:style (component-style)}
     ^{:key (inc this-component-id)}
     [form-1-component
      (inc this-component-id)
      last-id]]))

(defn slider [param value min max step]
  [:input {:type      "range" :value value :min min :max max :step step
           :style     {:width "100%"}
           :on-change (fn [e]
                        (dispatch [:change param (.. e -target -value)]))}])

(defn text-and-buttons
  []
  (let [components (deref (subscribe [:get-components]))
        depth (deref (subscribe [:get-depth]))]
  [:div#container-for-buttons
   [:h1 {:style {:text-align "center"}} "Re-Frame Application State Measurement (Independent)"]

   [:div {:style {:text-align "center"}} "Components " components]
   [slider :components (int components) 1 2048 1]
   [button {:label       "Double components"
            :button-type :filled
            :on-click    #(dispatch [:double-up :components (* 2 value)])}]

   [:div {:style {:text-align "center"}} "Depth " depth]
   [slider :depth (int depth) 1 2048 1]
   [button {:label       "Double depth"
            :button-type :filled
            :on-click    #(dispatch [:double-up :depth (* 2 value)])}]

   [:div {:style {:text-align "center"}} "Affected leaf components: " (int (Math/floor (/ components depth)))]

   [button {:label       "Increment Shared"
            :button-type :filled
            :on-click    #(dispatch [:increment-shared-value])}]]))

(defn component-tree
  [components depth]
  (let [component-ids (range 1 (inc (int components)))
        partitionedIds (partition-all (int depth) component-ids)]
        (doall 
          (map (fn [child-component-ids]
                  ^{:key (first child-component-ids)}
                  [form-1-component
                    (first child-component-ids)
                    (last child-component-ids)]) 
                partitionedIds))))

(defn root
  []
  (let [[components depth] (vals (deref (subscribe [:get-state])))]
    [:div#root-div
        [text-and-buttons]
        (component-tree components depth)]))