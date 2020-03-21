(ns re-frame-project.interop)

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


;PerformanceMark stuff

(defn p-mark
  [name]
  (js/performance.mark name))

(defn p-measure
  [name startMark endMark]
  (js/performance.measure name startMark endMark))

(defn p-get-entries
  []
  (js/performance.getEntries))

(defn p-get-entry-by-name
  [name]
  (js/performance.getEntriesByName name))

(defn p-entry-type
  [name]
  (.entryType name))

(defn p-entry-json
  [entry]
  (.toJSON entry))

(defn clear-marks
  []
  (js/performance.clearMarks))

(defn clear-measures
  []
  (js/performance.clearMeasures))



; Get all performanceMarks in ms
(defn get-all-perf
  [type]
  (->> (js/performance.getEntriesByType type)
       (map (fn [e] (->> e
                         (.toJSON)
                         ;(.-startTime)
                         )))
       ))

(defn get-all-perf-names
  [type]
  (->> (js/performance.getEntriesByType type)
       (map (fn [e] (->> e
                         (.toJSON)
                         (.-name)
                         )))
       ))

(defn get-all-perf-durations
  []
  (->> (js/performance.getEntriesByType "measure")
       (map (fn [e] (->> e
                         (.toJSON)
                         (.-duration)
                         )))
       ))

(defn get-last-perf-duration
  []
  (last (get-all-perf-durations)))

(defn get-last-mark-name
  []
  (->>
    (get-all-perf-names "mark")
    (last)
    ))

(defn get-last-measurement
  []
  (->>
    (get-all-perf "measure")
    (last)
    ))

(defn print-all-perf
  [type]
  (println (get-all-perf type)))

(defn print-last-perf
  [type]
  (let [last-measure (last (get-all-perf type))
        name (.-name last-measure)
        start-time (.-startTime last-measure)
        duration (.-duration last-measure)]
    (println (str "Action name: " name ", Start time: " start-time ", Duration: " duration))
    )
  )