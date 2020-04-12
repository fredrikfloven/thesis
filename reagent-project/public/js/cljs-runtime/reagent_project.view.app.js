goog.provide('reagent_project.view.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent_project.view.style');
goog.require('reagent_project.view.components.button');
reagent_project.view.app.form_1_component = (function reagent_project$view$app$form_1_component(this_component_id,last_id,shared_value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_component_id,last_id)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),reagent_project.view.style.component_style()], null),shared_value], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),reagent_project.view.style.component_style()], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_project.view.app.form_1_component,(this_component_id + (1)),last_id,shared_value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(this_component_id + (1))], null))], null);
}
});
if((typeof reagent_project !== 'undefined') && (typeof reagent_project.view !== 'undefined') && (typeof reagent_project.view.app !== 'undefined') && (typeof reagent_project.view.app.state_atom !== 'undefined')){
} else {
reagent_project.view.app.state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"components","components",-1073188942),(32),new cljs.core.Keyword(null,"depth","depth",1768663640),(32),new cljs.core.Keyword(null,"shared-value","shared-value",360537419),(0)], null));
}
reagent_project.view.app.slider = (function reagent_project$view$app$slider(param,value,min,max,step){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_project.view.app.state_atom,cljs.core.assoc,param,e.target.value);
})], null)], null);
});
reagent_project.view.app.double_up = (function reagent_project$view$app$double_up(value){
return ((2) * value);
});
reagent_project.view.app.text_and_buttons = (function reagent_project$view$app$text_and_buttons(components,depth){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Reagent Application State Measurement (Inherited) "], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Components ",components], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_project.view.app.slider,new cljs.core.Keyword(null,"components","components",-1073188942),(components | (0)),(1),(2048),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_project.view.components.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Double the components",new cljs.core.Keyword(null,"button-type","button-type",646960816),new cljs.core.Keyword(null,"filled","filled",1908725116),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_project.view.app.state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942)], null),reagent_project.view.app.double_up);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Depth ",depth], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_project.view.app.slider,new cljs.core.Keyword(null,"depth","depth",1768663640),(depth | (0)),(1),(2048),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_project.view.components.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Double the depth",new cljs.core.Keyword(null,"button-type","button-type",646960816),new cljs.core.Keyword(null,"filled","filled",1908725116),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_project.view.app.state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"depth","depth",1768663640)], null),reagent_project.view.app.double_up);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Affected leaf components: ",((function (){var G__38498 = (components / depth);
return Math.floor(G__38498);
})() | (0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_project.view.components.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Increment Shared",new cljs.core.Keyword(null,"button-type","button-type",646960816),new cljs.core.Keyword(null,"filled","filled",1908725116),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent_project.view.app.state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shared-value","shared-value",360537419)], null),cljs.core.inc);
})], null)], null)], null);
});
reagent_project.view.app.component_tree = (function reagent_project$view$app$component_tree(components,depth,shared_value){
var component_ids = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),((components | (0)) + (1)));
var partitionedIds = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((depth | (0)),component_ids);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (component_ids,partitionedIds){
return (function (child_component_ids){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_project.view.app.form_1_component,cljs.core.first(child_component_ids),cljs.core.last(child_component_ids),shared_value], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(child_component_ids)], null));
});})(component_ids,partitionedIds))
,partitionedIds));
});
reagent_project.view.app.root = (function reagent_project$view$app$root(){
var vec__38499 = cljs.core.vals(cljs.core.deref(reagent_project.view.app.state_atom));
var components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38499,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38499,(1),null);
var shared_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38499,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#root","div#root",-1019801613),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_project.view.app.text_and_buttons,components,depth], null),reagent_project.view.app.component_tree(components,depth,shared_value)], null);
});

//# sourceMappingURL=reagent_project.view.app.js.map
