(ns re-frame-project.event-handlers
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-event-db
  :initialize
  (fn [_ _]
    {:state        {:components   32
                    :depth        32
                    :shared-value 0}}))

(re-frame/reg-event-db
  :double-up
  (fn [db [_ param func]]
    (update-in db [:state param] func)))

(re-frame/reg-event-db
  :increment-shared-value
  (fn [db [_ _]]
    (update-in db [:state :shared-value] inc)))

(re-frame/reg-event-db
  :change
  (fn [db [_ param func]]
    (assoc-in db [:state param] func)))