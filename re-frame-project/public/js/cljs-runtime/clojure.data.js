goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__38806){
var vec__38807 = p__38806;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38807,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38807,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__38817 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38817,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38817,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38817,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__38845 = arguments.length;
switch (G__38845) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__38896_39093 = clojure.data.equality_partition;
var G__38897_39094 = "null";
var G__38898_39095 = ((function (G__38896_39093,G__38897_39094){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__38896_39093,G__38897_39094))
;
goog.object.set(G__38896_39093,G__38897_39094,G__38898_39095);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__38900_39098 = clojure.data.equality_partition;
var G__38901_39099 = "string";
var G__38902_39100 = ((function (G__38900_39098,G__38901_39099){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__38900_39098,G__38901_39099))
;
goog.object.set(G__38900_39098,G__38901_39099,G__38902_39100);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__38905_39111 = clojure.data.equality_partition;
var G__38906_39112 = "number";
var G__38907_39113 = ((function (G__38905_39111,G__38906_39112){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__38905_39111,G__38906_39112))
;
goog.object.set(G__38905_39111,G__38906_39112,G__38907_39113);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__38910_39114 = clojure.data.equality_partition;
var G__38911_39115 = "array";
var G__38912_39116 = ((function (G__38910_39114,G__38911_39115){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__38910_39114,G__38911_39115))
;
goog.object.set(G__38910_39114,G__38911_39115,G__38912_39116);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__38915_39117 = clojure.data.equality_partition;
var G__38916_39118 = "function";
var G__38917_39119 = ((function (G__38915_39117,G__38916_39118){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__38915_39117,G__38916_39118))
;
goog.object.set(G__38915_39117,G__38916_39118,G__38917_39119);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__38926_39126 = clojure.data.equality_partition;
var G__38927_39127 = "boolean";
var G__38928_39128 = ((function (G__38926_39126,G__38927_39127){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__38926_39126,G__38927_39127))
;
goog.object.set(G__38926_39126,G__38927_39127,G__38928_39128);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__38934_39130 = clojure.data.equality_partition;
var G__38935_39131 = "_";
var G__38936_39132 = ((function (G__38934_39130,G__38935_39131){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__38934_39130,G__38935_39131))
;
goog.object.set(G__38934_39130,G__38935_39131,G__38936_39132);
goog.object.set(clojure.data.Diff,"null",true);

var G__38956_39148 = clojure.data.diff_similar;
var G__38957_39149 = "null";
var G__38958_39150 = ((function (G__38956_39148,G__38957_39149){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__38956_39148,G__38957_39149))
;
goog.object.set(G__38956_39148,G__38957_39149,G__38958_39150);

goog.object.set(clojure.data.Diff,"string",true);

var G__38961_39153 = clojure.data.diff_similar;
var G__38962_39154 = "string";
var G__38963_39155 = ((function (G__38961_39153,G__38962_39154){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__38961_39153,G__38962_39154))
;
goog.object.set(G__38961_39153,G__38962_39154,G__38963_39155);

goog.object.set(clojure.data.Diff,"number",true);

var G__38967_39175 = clojure.data.diff_similar;
var G__38968_39176 = "number";
var G__38969_39177 = ((function (G__38967_39175,G__38968_39176){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__38967_39175,G__38968_39176))
;
goog.object.set(G__38967_39175,G__38968_39176,G__38969_39177);

goog.object.set(clojure.data.Diff,"array",true);

var G__38975_39180 = clojure.data.diff_similar;
var G__38976_39181 = "array";
var G__38977_39182 = ((function (G__38975_39180,G__38976_39181){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__38975_39180,G__38976_39181))
;
goog.object.set(G__38975_39180,G__38976_39181,G__38977_39182);

goog.object.set(clojure.data.Diff,"function",true);

var G__38980_39190 = clojure.data.diff_similar;
var G__38981_39191 = "function";
var G__38982_39192 = ((function (G__38980_39190,G__38981_39191){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__38980_39190,G__38981_39191))
;
goog.object.set(G__38980_39190,G__38981_39191,G__38982_39192);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__38986_39195 = clojure.data.diff_similar;
var G__38987_39196 = "boolean";
var G__38988_39197 = ((function (G__38986_39195,G__38987_39196){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__38986_39195,G__38987_39196))
;
goog.object.set(G__38986_39195,G__38987_39196,G__38988_39197);

goog.object.set(clojure.data.Diff,"_",true);

var G__38993_39200 = clojure.data.diff_similar;
var G__38994_39201 = "_";
var G__38995_39202 = ((function (G__38993_39200,G__38994_39201){
return (function (a,b){
var fexpr__38999 = (function (){var G__39000 = clojure.data.equality_partition(a);
var G__39000__$1 = (((G__39000 instanceof cljs.core.Keyword))?G__39000.fqn:null);
switch (G__39000__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39000__$1)].join('')));

}
})();
return (fexpr__38999.cljs$core$IFn$_invoke$arity$2 ? fexpr__38999.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__38999.call(null,a,b));
});})(G__38993_39200,G__38994_39201))
;
goog.object.set(G__38993_39200,G__38994_39201,G__38995_39202);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
