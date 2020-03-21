(ns re-frame-project.state_modification
  (:require
    [re-frame.core :refer [dispatch]]))


(defn reset-or-set-amount
  ([]
   (dispatch [:set-amount 10]))
  ([new-amount]
   (dispatch [:set-amount new-amount])))

(defn add-node
  [id]
  (dispatch [:create-node id {:value  id}]))

(defn add-nodes
  [amount current-amount-of-nodes]
  (let [latest-id current-amount-of-nodes
        to-be-newest-id (+ latest-id amount)]
    (dorun (map add-node (range (inc latest-id) (inc to-be-newest-id))))))


(defn change-one-node
  [node-id]
  (dispatch [:increment-node-value node-id]))

(defn change-each-node
  [nodes]
  (->> nodes
       (map (fn [node] (change-one-node (key node))))
       (dorun)))

(defn change-each-node-with-reduce
  [nodes]
  (let [new-nodes (reduce
                    (fn [r [k v]] (assoc r k (update-in v [:value] inc))) (hash-map) nodes)]
    (dispatch [:update-nodes new-nodes])))


(defn modify
  [state type-of-modification]
  (let [nodes (:nodes state)
        count-nodes (count nodes)]
    (case type-of-modification
      :first (change-one-node 1)
      :middle (change-one-node (int (/ count-nodes 2)))
      :last (change-one-node count-nodes)
      :each (change-each-node nodes)
      :each-reduce (change-each-node-with-reduce nodes)
      :shared (dispatch [:increment-shared-value])
      nil)))

