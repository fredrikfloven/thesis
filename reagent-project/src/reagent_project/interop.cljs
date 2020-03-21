(ns reagent-project.interop)

(defn scroll-into-view!
  [element]
  (.scrollIntoView element))

(defn scroll-to!
  [x y]
  (js/window.scrollTo x y))

(defn scroll-y! []
  (.-scrollY js/window))

(defn get-bounding-client-rect!
  [element]
  (let [bounding-client-rect (.getBoundingClientRect element)]
    {:top (.-top bounding-client-rect)}))

(defn focus!
  [element]
  (.focus element))

(defn get-element-by-id!
  [id]
  (js/document.getElementById id))

(defn query-selector!
  [selector]
  (js/document.querySelector selector))

(defn parse-int
  [value]
  (js/parseInt value))

(defn get-attribute
  [element attribute-name]
  (.getAttribute element attribute-name))



(defn prevent-default!
  [e]
  (.preventDefault e))

(defn e->checked
  [e]
  (-> (.-target e)
      (.-checked)))

(defn e->value
  [e]
  (-> (.-target e)
      (.-value)))

(defn sqrt
  [value]
  (js/Math.sqrt value))