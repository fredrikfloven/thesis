goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44737){
var map__44738 = p__44737;
var map__44738__$1 = (((((!((map__44738 == null))))?(((((map__44738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44738):map__44738);
var m = map__44738__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44738__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44738__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44744_44970 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44745_44971 = null;
var count__44746_44972 = (0);
var i__44747_44973 = (0);
while(true){
if((i__44747_44973 < count__44746_44972)){
var f_44974 = chunk__44745_44971.cljs$core$IIndexed$_nth$arity$2(null,i__44747_44973);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44974], 0));


var G__44975 = seq__44744_44970;
var G__44976 = chunk__44745_44971;
var G__44977 = count__44746_44972;
var G__44978 = (i__44747_44973 + (1));
seq__44744_44970 = G__44975;
chunk__44745_44971 = G__44976;
count__44746_44972 = G__44977;
i__44747_44973 = G__44978;
continue;
} else {
var temp__5720__auto___44979 = cljs.core.seq(seq__44744_44970);
if(temp__5720__auto___44979){
var seq__44744_44980__$1 = temp__5720__auto___44979;
if(cljs.core.chunked_seq_QMARK_(seq__44744_44980__$1)){
var c__4550__auto___44981 = cljs.core.chunk_first(seq__44744_44980__$1);
var G__44982 = cljs.core.chunk_rest(seq__44744_44980__$1);
var G__44983 = c__4550__auto___44981;
var G__44984 = cljs.core.count(c__4550__auto___44981);
var G__44985 = (0);
seq__44744_44970 = G__44982;
chunk__44745_44971 = G__44983;
count__44746_44972 = G__44984;
i__44747_44973 = G__44985;
continue;
} else {
var f_44986 = cljs.core.first(seq__44744_44980__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_44986], 0));


var G__44987 = cljs.core.next(seq__44744_44980__$1);
var G__44988 = null;
var G__44989 = (0);
var G__44990 = (0);
seq__44744_44970 = G__44987;
chunk__44745_44971 = G__44988;
count__44746_44972 = G__44989;
i__44747_44973 = G__44990;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44991 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_44991], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_44991)))?cljs.core.second(arglists_44991):arglists_44991)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__44757_44994 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44758_44995 = null;
var count__44759_44996 = (0);
var i__44760_44997 = (0);
while(true){
if((i__44760_44997 < count__44759_44996)){
var vec__44780_44998 = chunk__44758_44995.cljs$core$IIndexed$_nth$arity$2(null,i__44760_44997);
var name_44999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44780_44998,(0),null);
var map__44783_45000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44780_44998,(1),null);
var map__44783_45001__$1 = (((((!((map__44783_45000 == null))))?(((((map__44783_45000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44783_45000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44783_45000):map__44783_45000);
var doc_45002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44783_45001__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44783_45001__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_44999], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45003], 0));

if(cljs.core.truth_(doc_45002)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45002], 0));
} else {
}


var G__45009 = seq__44757_44994;
var G__45010 = chunk__44758_44995;
var G__45011 = count__44759_44996;
var G__45012 = (i__44760_44997 + (1));
seq__44757_44994 = G__45009;
chunk__44758_44995 = G__45010;
count__44759_44996 = G__45011;
i__44760_44997 = G__45012;
continue;
} else {
var temp__5720__auto___45013 = cljs.core.seq(seq__44757_44994);
if(temp__5720__auto___45013){
var seq__44757_45014__$1 = temp__5720__auto___45013;
if(cljs.core.chunked_seq_QMARK_(seq__44757_45014__$1)){
var c__4550__auto___45015 = cljs.core.chunk_first(seq__44757_45014__$1);
var G__45016 = cljs.core.chunk_rest(seq__44757_45014__$1);
var G__45017 = c__4550__auto___45015;
var G__45018 = cljs.core.count(c__4550__auto___45015);
var G__45019 = (0);
seq__44757_44994 = G__45016;
chunk__44758_44995 = G__45017;
count__44759_44996 = G__45018;
i__44760_44997 = G__45019;
continue;
} else {
var vec__44786_45020 = cljs.core.first(seq__44757_45014__$1);
var name_45021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44786_45020,(0),null);
var map__44789_45022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44786_45020,(1),null);
var map__44789_45023__$1 = (((((!((map__44789_45022 == null))))?(((((map__44789_45022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44789_45022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44789_45022):map__44789_45022);
var doc_45024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789_45023__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44789_45023__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45021], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45025], 0));

if(cljs.core.truth_(doc_45024)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45024], 0));
} else {
}


var G__45026 = cljs.core.next(seq__44757_45014__$1);
var G__45027 = null;
var G__45028 = (0);
var G__45029 = (0);
seq__44757_44994 = G__45026;
chunk__44758_44995 = G__45027;
count__44759_44996 = G__45028;
i__44760_44997 = G__45029;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__44797 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44798 = null;
var count__44799 = (0);
var i__44800 = (0);
while(true){
if((i__44800 < count__44799)){
var role = chunk__44798.cljs$core$IIndexed$_nth$arity$2(null,i__44800);
var temp__5720__auto___45030__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___45030__$1)){
var spec_45031 = temp__5720__auto___45030__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45031)], 0));
} else {
}


var G__45032 = seq__44797;
var G__45033 = chunk__44798;
var G__45034 = count__44799;
var G__45035 = (i__44800 + (1));
seq__44797 = G__45032;
chunk__44798 = G__45033;
count__44799 = G__45034;
i__44800 = G__45035;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__44797);
if(temp__5720__auto____$1){
var seq__44797__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__44797__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__44797__$1);
var G__45036 = cljs.core.chunk_rest(seq__44797__$1);
var G__45037 = c__4550__auto__;
var G__45038 = cljs.core.count(c__4550__auto__);
var G__45039 = (0);
seq__44797 = G__45036;
chunk__44798 = G__45037;
count__44799 = G__45038;
i__44800 = G__45039;
continue;
} else {
var role = cljs.core.first(seq__44797__$1);
var temp__5720__auto___45040__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___45040__$2)){
var spec_45041 = temp__5720__auto___45040__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45041)], 0));
} else {
}


var G__45042 = cljs.core.next(seq__44797__$1);
var G__45043 = null;
var G__45044 = (0);
var G__45045 = (0);
seq__44797 = G__45042;
chunk__44798 = G__45043;
count__44799 = G__45044;
i__44800 = G__45045;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45047 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45048 = cljs.core.ex_cause(t);
via = G__45047;
t = G__45048;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__44827 = datafied_throwable;
var map__44827__$1 = (((((!((map__44827 == null))))?(((((map__44827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44827):map__44827);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44827__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44827__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44827__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44828 = cljs.core.last(via);
var map__44828__$1 = (((((!((map__44828 == null))))?(((((map__44828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44828):map__44828);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44828__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44828__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44828__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44829 = data;
var map__44829__$1 = (((((!((map__44829 == null))))?(((((map__44829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44829):map__44829);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44829__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44829__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44829__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44830 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__44830__$1 = (((((!((map__44830 == null))))?(((((map__44830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44830):map__44830);
var top_data = map__44830__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44830__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__44840 = phase;
var G__44840__$1 = (((G__44840 instanceof cljs.core.Keyword))?G__44840.fqn:null);
switch (G__44840__$1) {
case "read-source":
var map__44841 = data;
var map__44841__$1 = (((((!((map__44841 == null))))?(((((map__44841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44841):map__44841);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44841__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44841__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44843 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__44843__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44843,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44843);
var G__44843__$2 = (cljs.core.truth_((function (){var fexpr__44844 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44844.cljs$core$IFn$_invoke$arity$1 ? fexpr__44844.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44844.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44843__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44843__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44843__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44843__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44845 = top_data;
var G__44845__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44845,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44845);
var G__44845__$2 = (cljs.core.truth_((function (){var fexpr__44849 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44849.cljs$core$IFn$_invoke$arity$1 ? fexpr__44849.cljs$core$IFn$_invoke$arity$1(source) : fexpr__44849.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__44845__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44845__$1);
var G__44845__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44845__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44845__$2);
var G__44845__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44845__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44845__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44845__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44845__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44850 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44850,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44850,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44850,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44850,(3),null);
var G__44853 = top_data;
var G__44853__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44853,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44853);
var G__44853__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44853__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44853__$1);
var G__44853__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44853__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44853__$2);
var G__44853__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44853__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44853__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44853__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44853__$4;
}

break;
case "execution":
var vec__44856 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44856,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44856,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44856,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44856,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__44856,source__$1,method,file,line,G__44840,G__44840__$1,map__44827,map__44827__$1,via,trace,phase,map__44828,map__44828__$1,type,message,data,map__44829,map__44829__$1,problems,fn,caller,map__44830,map__44830__$1,top_data,source){
return (function (p1__44821_SHARP_){
var or__4131__auto__ = (p1__44821_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__44862 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__44862.cljs$core$IFn$_invoke$arity$1 ? fexpr__44862.cljs$core$IFn$_invoke$arity$1(p1__44821_SHARP_) : fexpr__44862.call(null,p1__44821_SHARP_));
}
});})(vec__44856,source__$1,method,file,line,G__44840,G__44840__$1,map__44827,map__44827__$1,via,trace,phase,map__44828,map__44828__$1,type,message,data,map__44829,map__44829__$1,problems,fn,caller,map__44830,map__44830__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__44866 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44866__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44866,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44866);
var G__44866__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44866__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44866__$1);
var G__44866__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44866__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44866__$2);
var G__44866__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44866__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44866__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44866__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44866__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44840__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44872){
var map__44873 = p__44872;
var map__44873__$1 = (((((!((map__44873 == null))))?(((((map__44873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44873):map__44873);
var triage_data = map__44873__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44873__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44873__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44873__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44873__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44873__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44873__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44873__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44873__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__44898 = phase;
var G__44898__$1 = (((G__44898 instanceof cljs.core.Keyword))?G__44898.fqn:null);
switch (G__44898__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__44900 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__44901 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44902 = loc;
var G__44903 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44909_45077 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44910_45078 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44911_45079 = true;
var _STAR_print_fn_STAR__temp_val__44912_45080 = ((function (_STAR_print_newline_STAR__orig_val__44909_45077,_STAR_print_fn_STAR__orig_val__44910_45078,_STAR_print_newline_STAR__temp_val__44911_45079,sb__4661__auto__,G__44900,G__44901,G__44902,G__44898,G__44898__$1,loc,class_name,simple_class,cause_type,format,map__44873,map__44873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44909_45077,_STAR_print_fn_STAR__orig_val__44910_45078,_STAR_print_newline_STAR__temp_val__44911_45079,sb__4661__auto__,G__44900,G__44901,G__44902,G__44898,G__44898__$1,loc,class_name,simple_class,cause_type,format,map__44873,map__44873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44911_45079;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44912_45080;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44909_45077,_STAR_print_fn_STAR__orig_val__44910_45078,_STAR_print_newline_STAR__temp_val__44911_45079,_STAR_print_fn_STAR__temp_val__44912_45080,sb__4661__auto__,G__44900,G__44901,G__44902,G__44898,G__44898__$1,loc,class_name,simple_class,cause_type,format,map__44873,map__44873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__44909_45077,_STAR_print_fn_STAR__orig_val__44910_45078,_STAR_print_newline_STAR__temp_val__44911_45079,_STAR_print_fn_STAR__temp_val__44912_45080,sb__4661__auto__,G__44900,G__44901,G__44902,G__44898,G__44898__$1,loc,class_name,simple_class,cause_type,format,map__44873,map__44873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44870_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44870_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44909_45077,_STAR_print_fn_STAR__orig_val__44910_45078,_STAR_print_newline_STAR__temp_val__44911_45079,_STAR_print_fn_STAR__temp_val__44912_45080,sb__4661__auto__,G__44900,G__44901,G__44902,G__44898,G__44898__$1,loc,class_name,simple_class,cause_type,format,map__44873,map__44873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44909_45077,_STAR_print_fn_STAR__orig_val__44910_45078,_STAR_print_newline_STAR__temp_val__44911_45079,_STAR_print_fn_STAR__temp_val__44912_45080,sb__4661__auto__,G__44900,G__44901,G__44902,G__44898,G__44898__$1,loc,class_name,simple_class,cause_type,format,map__44873,map__44873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44910_45078;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44909_45077;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44900,G__44901,G__44902,G__44903) : format.call(null,G__44900,G__44901,G__44902,G__44903));

break;
case "macroexpansion":
var G__44933 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__44934 = cause_type;
var G__44935 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44936 = loc;
var G__44937 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44933,G__44934,G__44935,G__44936,G__44937) : format.call(null,G__44933,G__44934,G__44935,G__44936,G__44937));

break;
case "compile-syntax-check":
var G__44942 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__44943 = cause_type;
var G__44944 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44945 = loc;
var G__44946 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44942,G__44943,G__44944,G__44945,G__44946) : format.call(null,G__44942,G__44943,G__44944,G__44945,G__44946));

break;
case "compilation":
var G__44947 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__44948 = cause_type;
var G__44949 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44950 = loc;
var G__44951 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44947,G__44948,G__44949,G__44950,G__44951) : format.call(null,G__44947,G__44948,G__44949,G__44950,G__44951));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__44952 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__44953 = symbol;
var G__44954 = loc;
var G__44955 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44956_45087 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44957_45088 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44958_45089 = true;
var _STAR_print_fn_STAR__temp_val__44959_45090 = ((function (_STAR_print_newline_STAR__orig_val__44956_45087,_STAR_print_fn_STAR__orig_val__44957_45088,_STAR_print_newline_STAR__temp_val__44958_45089,sb__4661__auto__,G__44952,G__44953,G__44954,G__44898,G__44898__$1,loc,class_name,simple_class,cause_type,format,map__44873,map__44873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44956_45087,_STAR_print_fn_STAR__orig_val__44957_45088,_STAR_print_newline_STAR__temp_val__44958_45089,sb__4661__auto__,G__44952,G__44953,G__44954,G__44898,G__44898__$1,loc,class_name,simple_class,cause_type,format,map__44873,map__44873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44958_45089;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44959_45090;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44956_45087,_STAR_print_fn_STAR__orig_val__44957_45088,_STAR_print_newline_STAR__temp_val__44958_45089,_STAR_print_fn_STAR__temp_val__44959_45090,sb__4661__auto__,G__44952,G__44953,G__44954,G__44898,G__44898__$1,loc,class_name,simple_class,cause_type,format,map__44873,map__44873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__44956_45087,_STAR_print_fn_STAR__orig_val__44957_45088,_STAR_print_newline_STAR__temp_val__44958_45089,_STAR_print_fn_STAR__temp_val__44959_45090,sb__4661__auto__,G__44952,G__44953,G__44954,G__44898,G__44898__$1,loc,class_name,simple_class,cause_type,format,map__44873,map__44873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44871_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44871_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44956_45087,_STAR_print_fn_STAR__orig_val__44957_45088,_STAR_print_newline_STAR__temp_val__44958_45089,_STAR_print_fn_STAR__temp_val__44959_45090,sb__4661__auto__,G__44952,G__44953,G__44954,G__44898,G__44898__$1,loc,class_name,simple_class,cause_type,format,map__44873,map__44873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44956_45087,_STAR_print_fn_STAR__orig_val__44957_45088,_STAR_print_newline_STAR__temp_val__44958_45089,_STAR_print_fn_STAR__temp_val__44959_45090,sb__4661__auto__,G__44952,G__44953,G__44954,G__44898,G__44898__$1,loc,class_name,simple_class,cause_type,format,map__44873,map__44873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44957_45088;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44956_45087;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__44952,G__44953,G__44954,G__44955) : format.call(null,G__44952,G__44953,G__44954,G__44955));
} else {
var G__44960 = "Execution error%s at %s(%s).\n%s\n";
var G__44961 = cause_type;
var G__44962 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__44963 = loc;
var G__44964 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__44960,G__44961,G__44962,G__44963,G__44964) : format.call(null,G__44960,G__44961,G__44962,G__44963,G__44964));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44898__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
