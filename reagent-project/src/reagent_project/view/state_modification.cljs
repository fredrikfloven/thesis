(ns reagent-project.view.state-modification
  (:require
    [reagent.core :as r]))

(defn initial-state
  []
  {:shared-value       10})

(def initialize-state-atom
  (r/atom (initial-state)))

(defn reset-or-set-amount
  ([state]
   (swap! state assoc :amount 10))
  ([state new-amount]
   (swap! state assoc :amount new-amount)))


(defn node-style
  [id]
  {:value id})

(defn create-nodes
  [ids]
  (reduce (fn [new-node-map id] (assoc new-node-map id (node-style id))) (hash-map) ids)
  )

(defn create-new-node-map
  [nodes last-id amount]
  (let [next-id (inc last-id)
        newest-id (+ amount next-id)]
    (merge nodes (create-nodes (range next-id newest-id)))))

(defn add-nodes
  [state amount]
  (let [nodes (:nodes @state)
        last-id (count nodes)]
    (swap! state assoc :nodes (create-new-node-map nodes last-id amount))))

(defn change-one-node
  [state-atom nodes node-id]
  (swap! state-atom assoc :nodes (update-in nodes [node-id :value] inc)))


(defn change-each-node-with-reduce
  [state-atom]
  (let [nodes (:nodes @state-atom)]
    (->> (reduce
           (fn [r [k v]] (assoc r k (update-in v [:value] inc))) (hash-map) nodes)
         (swap! state-atom assoc :nodes))))

(defn change-shared-attribute
  [state-atom]
  (swap! state-atom update-in [:shared-value] inc))

(defn modify
  [state-atom modification]
  (let [nodes (:nodes @state-atom)
        last-id (count nodes)]
    (case modification
      :first (change-one-node state-atom nodes 1)
      :middle (change-one-node state-atom nodes (int (/ last-id 2)))
      :last (change-one-node state-atom nodes last-id)
      :each (change-each-node-with-reduce state-atom)
      :shared (change-shared-attribute state-atom)
      nil)))



