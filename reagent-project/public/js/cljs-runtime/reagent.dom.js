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
var _STAR_always_update_STAR__orig_val__49044 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__49045 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__49045;

try{var G__49049 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__49050 = container;
var G__49051 = ((function (G__49049,G__49050,_STAR_always_update_STAR__orig_val__49044,_STAR_always_update_STAR__temp_val__49045){
return (function (){
var _STAR_always_update_STAR__orig_val__49052 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__49053 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__49053;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__49052;
}});})(G__49049,G__49050,_STAR_always_update_STAR__orig_val__49044,_STAR_always_update_STAR__temp_val__49045))
;
return module$node_modules$react_dom$index.render(G__49049,G__49050,G__49051);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__49044;
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
var G__49061 = arguments.length;
switch (G__49061) {
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

var seq__49062_49070 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__49063_49071 = null;
var count__49064_49072 = (0);
var i__49065_49073 = (0);
while(true){
if((i__49065_49073 < count__49064_49072)){
var v_49074 = chunk__49063_49071.cljs$core$IIndexed$_nth$arity$2(null,i__49065_49073);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_49074);


var G__49076 = seq__49062_49070;
var G__49077 = chunk__49063_49071;
var G__49078 = count__49064_49072;
var G__49079 = (i__49065_49073 + (1));
seq__49062_49070 = G__49076;
chunk__49063_49071 = G__49077;
count__49064_49072 = G__49078;
i__49065_49073 = G__49079;
continue;
} else {
var temp__5720__auto___49081 = cljs.core.seq(seq__49062_49070);
if(temp__5720__auto___49081){
var seq__49062_49082__$1 = temp__5720__auto___49081;
if(cljs.core.chunked_seq_QMARK_(seq__49062_49082__$1)){
var c__4550__auto___49083 = cljs.core.chunk_first(seq__49062_49082__$1);
var G__49084 = cljs.core.chunk_rest(seq__49062_49082__$1);
var G__49085 = c__4550__auto___49083;
var G__49086 = cljs.core.count(c__4550__auto___49083);
var G__49087 = (0);
seq__49062_49070 = G__49084;
chunk__49063_49071 = G__49085;
count__49064_49072 = G__49086;
i__49065_49073 = G__49087;
continue;
} else {
var v_49088 = cljs.core.first(seq__49062_49082__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_49088);


var G__49089 = cljs.core.next(seq__49062_49082__$1);
var G__49090 = null;
var G__49091 = (0);
var G__49092 = (0);
seq__49062_49070 = G__49089;
chunk__49063_49071 = G__49090;
count__49064_49072 = G__49091;
i__49065_49073 = G__49092;
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
