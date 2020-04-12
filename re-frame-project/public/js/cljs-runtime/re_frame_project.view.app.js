goog.provide('re_frame_project.view.app');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame_project.view.style');
goog.require('re_frame_project.view.components.button');
re_frame_project.view.app.form_1_component = (function re_frame_project$view$app$form_1_component(this_component_id,last_id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_component_id,last_id)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),re_frame_project.view.style.component_style()], null),cljs.core.deref((function (){var G__39999 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-shared-value","get-shared-value",580317207)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__39999) : re_frame.core.subscribe.call(null,G__39999));
})())], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),re_frame_project.view.style.component_style()], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_project.view.app.form_1_component,(this_component_id + (1)),last_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(this_component_id + (1))], null))], null);
}
});
re_frame_project.view.app.slider = (function re_frame_project$view$app$slider(param,value,min,max,step){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var G__40000 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",-1163046502),param,e.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40000) : re_frame.core.dispatch.call(null,G__40000));
})], null)], null);
});
re_frame_project.view.app.double_up = (function re_frame_project$view$app$double_up(value){
return ((2) * value);
});
re_frame_project.view.app.text_and_buttons = (function re_frame_project$view$app$text_and_buttons(){
var components = cljs.core.deref((function (){var G__40001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-components","get-components",1441763033)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__40001) : re_frame.core.subscribe.call(null,G__40001));
})());
var depth = cljs.core.deref((function (){var G__40002 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-depth","get-depth",470870773)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__40002) : re_frame.core.subscribe.call(null,G__40002));
})());
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container-for-buttons","div#container-for-buttons",930800768),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Re-Frame Application State Measurement (Independent)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Components ",components], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_project.view.app.slider,new cljs.core.Keyword(null,"components","components",-1073188942),(components | (0)),(1),(2048),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_project.view.components.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Double components",new cljs.core.Keyword(null,"button-type","button-type",646960816),new cljs.core.Keyword(null,"filled","filled",1908725116),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (components,depth){
return (function (){
var G__40003 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"double-up","double-up",508965479),new cljs.core.Keyword(null,"components","components",-1073188942),re_frame_project.view.app.double_up], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40003) : re_frame.core.dispatch.call(null,G__40003));
});})(components,depth))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Depth ",depth], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_project.view.app.slider,new cljs.core.Keyword(null,"depth","depth",1768663640),(depth | (0)),(1),(2048),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_project.view.components.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Double depth",new cljs.core.Keyword(null,"button-type","button-type",646960816),new cljs.core.Keyword(null,"filled","filled",1908725116),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (components,depth){
return (function (){
var G__40004 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"double-up","double-up",508965479),new cljs.core.Keyword(null,"depth","depth",1768663640),re_frame_project.view.app.double_up], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40004) : re_frame.core.dispatch.call(null,G__40004));
});})(components,depth))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Affected leaf components: ",((function (){var G__40005 = (components / depth);
return Math.floor(G__40005);
})() | (0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_project.view.components.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Increment Shared",new cljs.core.Keyword(null,"button-type","button-type",646960816),new cljs.core.Keyword(null,"filled","filled",1908725116),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (components,depth){
return (function (){
var G__40006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"increment-shared-value","increment-shared-value",205536452)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40006) : re_frame.core.dispatch.call(null,G__40006));
});})(components,depth))
], null)], null)], null);
});
re_frame_project.view.app.component_tree = (function re_frame_project$view$app$component_tree(){
var vec__40007 = cljs.core.vals(cljs.core.deref((function (){var G__40010 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-state","get-state",1572463657)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__40010) : re_frame.core.subscribe.call(null,G__40010));
})()));
var components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40007,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40007,(1),null);
var component_ids = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),((components | (0)) + (1)));
var partitionedIds = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((depth | (0)),component_ids);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__40007,components,depth,component_ids,partitionedIds){
return (function (child_component_ids){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_project.view.app.form_1_component,cljs.core.first(child_component_ids),cljs.core.last(child_component_ids)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(child_component_ids)], null));
});})(vec__40007,components,depth,component_ids,partitionedIds))
,partitionedIds));
});
re_frame_project.view.app.root = (function re_frame_project$view$app$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#root-div","div#root-div",1299321125),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_project.view.app.text_and_buttons], null),re_frame_project.view.app.component_tree()], null);
});

//# sourceMappingURL=re_frame_project.view.app.js.map
