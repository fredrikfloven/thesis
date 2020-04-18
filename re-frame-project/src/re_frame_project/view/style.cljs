(ns re-frame-project.view.style)

(def invalid-red "rgb(227,6,19)")

(def red "rgb(173,16,21)")
(def darker-red "rgb(145,12,25)")
(def darkest-red "rgb(126, 11, 22)")

(def green "rgb(50,205,50)")

(def darkest-grey "rgb(116, 117, 120)")
(def darker-grey "rgb(217, 217, 217)")
(def grey "rgb(236,236,236)")
(def light-grey "rgb(243,243,243)")
(def lighter-grey "rgb(251,251,251)")

(def blue "rgb(0,90,160)")
(def navy "rgb(0,66,122)")
(def dark-blue "rgb(0,50,92)")
(def light-blue "rgb(242,247,251)")
(def orange "#f9b233")
(def white "#fff")
(def transparent "transparent")

(def font "Intro Cond Arial, Helvetica Neue, sans-serif")

(defn component-style
  []
  {:padding      "5px"
   :margin       "auto"
   :border       "solid"
   :border-color "black"
   :border-width "3px"
   :width        "97%"
   :text-align   "center"})