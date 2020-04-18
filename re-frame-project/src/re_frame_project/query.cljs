(ns re-frame-project.query
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
  :state
  (fn [db _]
    (get db :state)))

(re-frame/reg-sub
  :components
  (fn [db _]
    (get-in db [:state :components])))

(re-frame/reg-sub
  :depth
  (fn [db _]
    (get-in db [:state :depth])))

(re-frame/reg-sub
  :shared-value
  (fn [db _]
    (get-in db [:state :shared-value])))