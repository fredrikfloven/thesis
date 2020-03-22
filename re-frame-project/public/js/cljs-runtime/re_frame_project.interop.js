goog.provide('re_frame_project.interop');
goog.require('cljs.core');
re_frame_project.interop.scroll_into_view_BANG_ = (function re_frame_project$interop$scroll_into_view_BANG_(element){
return element.scrollIntoView();
});
re_frame_project.interop.scroll_to_BANG_ = (function re_frame_project$interop$scroll_to_BANG_(x,y){
return window.scrollTo(x,y);
});
re_frame_project.interop.scroll_y_BANG_ = (function re_frame_project$interop$scroll_y_BANG_(){
return window.scrollY;
});
re_frame_project.interop.get_bounding_client_rect_BANG_ = (function re_frame_project$interop$get_bounding_client_rect_BANG_(element){
var bounding_client_rect = element.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),bounding_client_rect.top], null);
});
re_frame_project.interop.focus_BANG_ = (function re_frame_project$interop$focus_BANG_(element){
return element.focus();
});
re_frame_project.interop.get_element_by_id_BANG_ = (function re_frame_project$interop$get_element_by_id_BANG_(id){
return document.getElementById(id);
});
re_frame_project.interop.query_selector_BANG_ = (function re_frame_project$interop$query_selector_BANG_(selector){
return document.querySelector(selector);
});
re_frame_project.interop.parse_int = (function re_frame_project$interop$parse_int(value){
return parseInt(value);
});
re_frame_project.interop.get_attribute = (function re_frame_project$interop$get_attribute(element,attribute_name){
return element.getAttribute(attribute_name);
});
re_frame_project.interop.prevent_default_BANG_ = (function re_frame_project$interop$prevent_default_BANG_(e){
return e.preventDefault();
});
re_frame_project.interop.e__GT_checked = (function re_frame_project$interop$e__GT_checked(e){
return e.target.checked;
});
re_frame_project.interop.e__GT_value = (function re_frame_project$interop$e__GT_value(e){
return e.target.value;
});
re_frame_project.interop.sqrt = (function re_frame_project$interop$sqrt(value){
return Math.sqrt(value);
});
re_frame_project.interop.p_mark = (function re_frame_project$interop$p_mark(name){
return performance.mark(name);
});
re_frame_project.interop.p_measure = (function re_frame_project$interop$p_measure(name,startMark,endMark){
return performance.measure(name,startMark,endMark);
});
re_frame_project.interop.p_get_entries = (function re_frame_project$interop$p_get_entries(){
return performance.getEntries();
});
re_frame_project.interop.p_get_entry_by_name = (function re_frame_project$interop$p_get_entry_by_name(name){
return performance.getEntriesByName(name);
});
re_frame_project.interop.p_entry_type = (function re_frame_project$interop$p_entry_type(name){
return name.entryType();
});
re_frame_project.interop.p_entry_json = (function re_frame_project$interop$p_entry_json(entry){
return entry.toJSON();
});
re_frame_project.interop.clear_marks = (function re_frame_project$interop$clear_marks(){
return performance.clearMarks();
});
re_frame_project.interop.clear_measures = (function re_frame_project$interop$clear_measures(){
return performance.clearMeasures();
});
re_frame_project.interop.get_all_perf = (function re_frame_project$interop$get_all_perf(type){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
return e.toJSON();
}),performance.getEntriesByType(type));
});
re_frame_project.interop.get_all_perf_names = (function re_frame_project$interop$get_all_perf_names(type){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
return e.toJSON().name;
}),performance.getEntriesByType(type));
});
re_frame_project.interop.get_all_perf_durations = (function re_frame_project$interop$get_all_perf_durations(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (e){
return e.toJSON().duration;
}),performance.getEntriesByType("measure"));
});
re_frame_project.interop.get_last_perf_duration = (function re_frame_project$interop$get_last_perf_duration(){
return cljs.core.last(re_frame_project.interop.get_all_perf_durations());
});
re_frame_project.interop.get_last_mark_name = (function re_frame_project$interop$get_last_mark_name(){
return cljs.core.last(re_frame_project.interop.get_all_perf_names("mark"));
});
re_frame_project.interop.get_last_measurement = (function re_frame_project$interop$get_last_measurement(){
return cljs.core.last(re_frame_project.interop.get_all_perf("measure"));
});
re_frame_project.interop.print_all_perf = (function re_frame_project$interop$print_all_perf(type){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_frame_project.interop.get_all_perf(type)], 0));
});
re_frame_project.interop.print_last_perf = (function re_frame_project$interop$print_last_perf(type){
var last_measure = cljs.core.last(re_frame_project.interop.get_all_perf(type));
var name = last_measure.name;
var start_time = last_measure.startTime;
var duration = last_measure.duration;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Action name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", Start time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_time),", Duration: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration)].join('')], 0));
});

//# sourceMappingURL=re_frame_project.interop.js.map
