goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__48080__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__48080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48081__i = 0, G__48081__a = new Array(arguments.length -  0);
while (G__48081__i < G__48081__a.length) {G__48081__a[G__48081__i] = arguments[G__48081__i + 0]; ++G__48081__i;}
  args = new cljs.core.IndexedSeq(G__48081__a,0,null);
} 
return G__48080__delegate.call(this,args);};
G__48080.cljs$lang$maxFixedArity = 0;
G__48080.cljs$lang$applyTo = (function (arglist__48082){
var args = cljs.core.seq(arglist__48082);
return G__48080__delegate(args);
});
G__48080.cljs$core$IFn$_invoke$arity$variadic = G__48080__delegate;
return G__48080;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__48083__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__48083 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48086__i = 0, G__48086__a = new Array(arguments.length -  0);
while (G__48086__i < G__48086__a.length) {G__48086__a[G__48086__i] = arguments[G__48086__i + 0]; ++G__48086__i;}
  args = new cljs.core.IndexedSeq(G__48086__a,0,null);
} 
return G__48083__delegate.call(this,args);};
G__48083.cljs$lang$maxFixedArity = 0;
G__48083.cljs$lang$applyTo = (function (arglist__48087){
var args = cljs.core.seq(arglist__48087);
return G__48083__delegate(args);
});
G__48083.cljs$core$IFn$_invoke$arity$variadic = G__48083__delegate;
return G__48083;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
