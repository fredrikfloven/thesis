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
var G__48551__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__48551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48552__i = 0, G__48552__a = new Array(arguments.length -  0);
while (G__48552__i < G__48552__a.length) {G__48552__a[G__48552__i] = arguments[G__48552__i + 0]; ++G__48552__i;}
  args = new cljs.core.IndexedSeq(G__48552__a,0,null);
} 
return G__48551__delegate.call(this,args);};
G__48551.cljs$lang$maxFixedArity = 0;
G__48551.cljs$lang$applyTo = (function (arglist__48553){
var args = cljs.core.seq(arglist__48553);
return G__48551__delegate(args);
});
G__48551.cljs$core$IFn$_invoke$arity$variadic = G__48551__delegate;
return G__48551;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__48554__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__48554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48555__i = 0, G__48555__a = new Array(arguments.length -  0);
while (G__48555__i < G__48555__a.length) {G__48555__a[G__48555__i] = arguments[G__48555__i + 0]; ++G__48555__i;}
  args = new cljs.core.IndexedSeq(G__48555__a,0,null);
} 
return G__48554__delegate.call(this,args);};
G__48554.cljs$lang$maxFixedArity = 0;
G__48554.cljs$lang$applyTo = (function (arglist__48556){
var args = cljs.core.seq(arglist__48556);
return G__48554__delegate(args);
});
G__48554.cljs$core$IFn$_invoke$arity$variadic = G__48554__delegate;
return G__48554;
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
