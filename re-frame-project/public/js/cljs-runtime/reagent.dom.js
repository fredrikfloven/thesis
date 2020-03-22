goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__50517 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__50518 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__50518;

try{var G__50523 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__50524 = container;
var G__50525 = ((function (G__50523,G__50524,_STAR_always_update_STAR__orig_val__50517,_STAR_always_update_STAR__temp_val__50518){
return (function (){
var _STAR_always_update_STAR__orig_val__50527 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__50528 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__50528;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__50527;
}});})(G__50523,G__50524,_STAR_always_update_STAR__orig_val__50517,_STAR_always_update_STAR__temp_val__50518))
;
return module$node_modules$react_dom$index.render(G__50523,G__50524,G__50525);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__50517;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__50545 = arguments.length;
switch (G__50545) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__50557_50582 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__50558_50583 = null;
var count__50559_50584 = (0);
var i__50560_50585 = (0);
while(true){
if((i__50560_50585 < count__50559_50584)){
var v_50587 = chunk__50558_50583.cljs$core$IIndexed$_nth$arity$2(null,i__50560_50585);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_50587);


var G__50589 = seq__50557_50582;
var G__50590 = chunk__50558_50583;
var G__50591 = count__50559_50584;
var G__50592 = (i__50560_50585 + (1));
seq__50557_50582 = G__50589;
chunk__50558_50583 = G__50590;
count__50559_50584 = G__50591;
i__50560_50585 = G__50592;
continue;
} else {
var temp__5720__auto___50593 = cljs.core.seq(seq__50557_50582);
if(temp__5720__auto___50593){
var seq__50557_50595__$1 = temp__5720__auto___50593;
if(cljs.core.chunked_seq_QMARK_(seq__50557_50595__$1)){
var c__4550__auto___50596 = cljs.core.chunk_first(seq__50557_50595__$1);
var G__50598 = cljs.core.chunk_rest(seq__50557_50595__$1);
var G__50599 = c__4550__auto___50596;
var G__50600 = cljs.core.count(c__4550__auto___50596);
var G__50601 = (0);
seq__50557_50582 = G__50598;
chunk__50558_50583 = G__50599;
count__50559_50584 = G__50600;
i__50560_50585 = G__50601;
continue;
} else {
var v_50602 = cljs.core.first(seq__50557_50595__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_50602);


var G__50603 = cljs.core.next(seq__50557_50595__$1);
var G__50604 = null;
var G__50605 = (0);
var G__50606 = (0);
seq__50557_50582 = G__50603;
chunk__50558_50583 = G__50604;
count__50559_50584 = G__50605;
i__50560_50585 = G__50606;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=reagent.dom.js.map
