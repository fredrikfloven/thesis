goog.provide('reagent_project.interop');
goog.require('cljs.core');
reagent_project.interop.scroll_into_view_BANG_ = (function reagent_project$interop$scroll_into_view_BANG_(element){
return element.scrollIntoView();
});
reagent_project.interop.scroll_to_BANG_ = (function reagent_project$interop$scroll_to_BANG_(x,y){
return window.scrollTo(x,y);
});
reagent_project.interop.scroll_y_BANG_ = (function reagent_project$interop$scroll_y_BANG_(){
return window.scrollY;
});
reagent_project.interop.get_bounding_client_rect_BANG_ = (function reagent_project$interop$get_bounding_client_rect_BANG_(element){
var bounding_client_rect = element.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),bounding_client_rect.top], null);
});
reagent_project.interop.focus_BANG_ = (function reagent_project$interop$focus_BANG_(element){
return element.focus();
});
reagent_project.interop.get_element_by_id_BANG_ = (function reagent_project$interop$get_element_by_id_BANG_(id){
return document.getElementById(id);
});
reagent_project.interop.query_selector_BANG_ = (function reagent_project$interop$query_selector_BANG_(selector){
return document.querySelector(selector);
});
reagent_project.interop.parse_int = (function reagent_project$interop$parse_int(value){
return parseInt(value);
});
reagent_project.interop.get_attribute = (function reagent_project$interop$get_attribute(element,attribute_name){
return element.getAttribute(attribute_name);
});
reagent_project.interop.prevent_default_BANG_ = (function reagent_project$interop$prevent_default_BANG_(e){
return e.preventDefault();
});
reagent_project.interop.e__GT_checked = (function reagent_project$interop$e__GT_checked(e){
return e.target.checked;
});
reagent_project.interop.e__GT_value = (function reagent_project$interop$e__GT_value(e){
return e.target.value;
});
reagent_project.interop.sqrt = (function reagent_project$interop$sqrt(value){
return Math.sqrt(value);
});

//# sourceMappingURL=reagent_project.interop.js.map
