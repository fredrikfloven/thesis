goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40820){
var map__40821 = p__40820;
var map__40821__$1 = (((((!((map__40821 == null))))?(((((map__40821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40821):map__40821);
var m = map__40821__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40821__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40821__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__40831_41004 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40832_41005 = null;
var count__40833_41006 = (0);
var i__40834_41007 = (0);
while(true){
if((i__40834_41007 < count__40833_41006)){
var f_41008 = chunk__40832_41005.cljs$core$IIndexed$_nth$arity$2(null,i__40834_41007);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41008], 0));


var G__41009 = seq__40831_41004;
var G__41010 = chunk__40832_41005;
var G__41011 = count__40833_41006;
var G__41012 = (i__40834_41007 + (1));
seq__40831_41004 = G__41009;
chunk__40832_41005 = G__41010;
count__40833_41006 = G__41011;
i__40834_41007 = G__41012;
continue;
} else {
var temp__5720__auto___41013 = cljs.core.seq(seq__40831_41004);
if(temp__5720__auto___41013){
var seq__40831_41015__$1 = temp__5720__auto___41013;
if(cljs.core.chunked_seq_QMARK_(seq__40831_41015__$1)){
var c__4550__auto___41016 = cljs.core.chunk_first(seq__40831_41015__$1);
var G__41017 = cljs.core.chunk_rest(seq__40831_41015__$1);
var G__41018 = c__4550__auto___41016;
var G__41019 = cljs.core.count(c__4550__auto___41016);
var G__41020 = (0);
seq__40831_41004 = G__41017;
chunk__40832_41005 = G__41018;
count__40833_41006 = G__41019;
i__40834_41007 = G__41020;
continue;
} else {
var f_41021 = cljs.core.first(seq__40831_41015__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41021], 0));


var G__41022 = cljs.core.next(seq__40831_41015__$1);
var G__41023 = null;
var G__41024 = (0);
var G__41025 = (0);
seq__40831_41004 = G__41022;
chunk__40832_41005 = G__41023;
count__40833_41006 = G__41024;
i__40834_41007 = G__41025;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41026 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_41026], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_41026)))?cljs.core.second(arglists_41026):arglists_41026)], 0));
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
var seq__40851_41029 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40852_41030 = null;
var count__40853_41031 = (0);
var i__40854_41032 = (0);
while(true){
if((i__40854_41032 < count__40853_41031)){
var vec__40869_41033 = chunk__40852_41030.cljs$core$IIndexed$_nth$arity$2(null,i__40854_41032);
var name_41034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40869_41033,(0),null);
var map__40872_41035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40869_41033,(1),null);
var map__40872_41036__$1 = (((((!((map__40872_41035 == null))))?(((((map__40872_41035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40872_41035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40872_41035):map__40872_41035);
var doc_41037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40872_41036__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40872_41036__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41034], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41038], 0));

if(cljs.core.truth_(doc_41037)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41037], 0));
} else {
}


var G__41042 = seq__40851_41029;
var G__41043 = chunk__40852_41030;
var G__41044 = count__40853_41031;
var G__41045 = (i__40854_41032 + (1));
seq__40851_41029 = G__41042;
chunk__40852_41030 = G__41043;
count__40853_41031 = G__41044;
i__40854_41032 = G__41045;
continue;
} else {
var temp__5720__auto___41046 = cljs.core.seq(seq__40851_41029);
if(temp__5720__auto___41046){
var seq__40851_41047__$1 = temp__5720__auto___41046;
if(cljs.core.chunked_seq_QMARK_(seq__40851_41047__$1)){
var c__4550__auto___41048 = cljs.core.chunk_first(seq__40851_41047__$1);
var G__41049 = cljs.core.chunk_rest(seq__40851_41047__$1);
var G__41050 = c__4550__auto___41048;
var G__41051 = cljs.core.count(c__4550__auto___41048);
var G__41052 = (0);
seq__40851_41029 = G__41049;
chunk__40852_41030 = G__41050;
count__40853_41031 = G__41051;
i__40854_41032 = G__41052;
continue;
} else {
var vec__40875_41053 = cljs.core.first(seq__40851_41047__$1);
var name_41054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40875_41053,(0),null);
var map__40878_41055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40875_41053,(1),null);
var map__40878_41056__$1 = (((((!((map__40878_41055 == null))))?(((((map__40878_41055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40878_41055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40878_41055):map__40878_41055);
var doc_41057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40878_41056__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40878_41056__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41054], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41058], 0));

if(cljs.core.truth_(doc_41057)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41057], 0));
} else {
}


var G__41066 = cljs.core.next(seq__40851_41047__$1);
var G__41067 = null;
var G__41068 = (0);
var G__41069 = (0);
seq__40851_41029 = G__41066;
chunk__40852_41030 = G__41067;
count__40853_41031 = G__41068;
i__40854_41032 = G__41069;
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

var seq__40880 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40882 = null;
var count__40884 = (0);
var i__40885 = (0);
while(true){
if((i__40885 < count__40884)){
var role = chunk__40882.cljs$core$IIndexed$_nth$arity$2(null,i__40885);
var temp__5720__auto___41071__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___41071__$1)){
var spec_41072 = temp__5720__auto___41071__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41072)], 0));
} else {
}


var G__41075 = seq__40880;
var G__41076 = chunk__40882;
var G__41077 = count__40884;
var G__41078 = (i__40885 + (1));
seq__40880 = G__41075;
chunk__40882 = G__41076;
count__40884 = G__41077;
i__40885 = G__41078;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__40880);
if(temp__5720__auto____$1){
var seq__40880__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40880__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40880__$1);
var G__41081 = cljs.core.chunk_rest(seq__40880__$1);
var G__41082 = c__4550__auto__;
var G__41083 = cljs.core.count(c__4550__auto__);
var G__41084 = (0);
seq__40880 = G__41081;
chunk__40882 = G__41082;
count__40884 = G__41083;
i__40885 = G__41084;
continue;
} else {
var role = cljs.core.first(seq__40880__$1);
var temp__5720__auto___41086__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___41086__$2)){
var spec_41087 = temp__5720__auto___41086__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41087)], 0));
} else {
}


var G__41090 = cljs.core.next(seq__40880__$1);
var G__41091 = null;
var G__41092 = (0);
var G__41093 = (0);
seq__40880 = G__41090;
chunk__40882 = G__41091;
count__40884 = G__41092;
i__40885 = G__41093;
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
var G__41097 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__41098 = cljs.core.ex_cause(t);
via = G__41097;
t = G__41098;
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
var map__40917 = datafied_throwable;
var map__40917__$1 = (((((!((map__40917 == null))))?(((((map__40917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40917):map__40917);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40917__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40917__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40917__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40918 = cljs.core.last(via);
var map__40918__$1 = (((((!((map__40918 == null))))?(((((map__40918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40918):map__40918);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40918__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40918__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40918__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40919 = data;
var map__40919__$1 = (((((!((map__40919 == null))))?(((((map__40919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40919):map__40919);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40919__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40919__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40919__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40920 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40920__$1 = (((((!((map__40920 == null))))?(((((map__40920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40920):map__40920);
var top_data = map__40920__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40920__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40928 = phase;
var G__40928__$1 = (((G__40928 instanceof cljs.core.Keyword))?G__40928.fqn:null);
switch (G__40928__$1) {
case "read-source":
var map__40929 = data;
var map__40929__$1 = (((((!((map__40929 == null))))?(((((map__40929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40929):map__40929);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40929__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40929__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40931 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40931__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40931,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40931);
var G__40931__$2 = (cljs.core.truth_((function (){var fexpr__40933 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40933.cljs$core$IFn$_invoke$arity$1 ? fexpr__40933.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40933.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40931__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40931__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40931__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40931__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40934 = top_data;
var G__40934__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40934,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40934);
var G__40934__$2 = (cljs.core.truth_((function (){var fexpr__40936 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40936.cljs$core$IFn$_invoke$arity$1 ? fexpr__40936.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40936.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40934__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40934__$1);
var G__40934__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40934__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40934__$2);
var G__40934__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40934__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40934__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40934__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40934__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40938 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40938,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40938,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40938,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40938,(3),null);
var G__40941 = top_data;
var G__40941__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40941,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40941);
var G__40941__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40941__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40941__$1);
var G__40941__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40941__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40941__$2);
var G__40941__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40941__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40941__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40941__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40941__$4;
}

break;
case "execution":
var vec__40942 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40942,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40942,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40942,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40942,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__40942,source__$1,method,file,line,G__40928,G__40928__$1,map__40917,map__40917__$1,via,trace,phase,map__40918,map__40918__$1,type,message,data,map__40919,map__40919__$1,problems,fn,caller,map__40920,map__40920__$1,top_data,source){
return (function (p1__40914_SHARP_){
var or__4131__auto__ = (p1__40914_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__40950 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40950.cljs$core$IFn$_invoke$arity$1 ? fexpr__40950.cljs$core$IFn$_invoke$arity$1(p1__40914_SHARP_) : fexpr__40950.call(null,p1__40914_SHARP_));
}
});})(vec__40942,source__$1,method,file,line,G__40928,G__40928__$1,map__40917,map__40917__$1,via,trace,phase,map__40918,map__40918__$1,type,message,data,map__40919,map__40919__$1,problems,fn,caller,map__40920,map__40920__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__40951 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40951__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40951,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40951);
var G__40951__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40951__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40951__$1);
var G__40951__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40951__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40951__$2);
var G__40951__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40951__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40951__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40951__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40951__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40928__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40955){
var map__40956 = p__40955;
var map__40956__$1 = (((((!((map__40956 == null))))?(((((map__40956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40956):map__40956);
var triage_data = map__40956__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40956__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40956__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40956__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40956__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40956__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40956__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40956__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40956__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__40961 = phase;
var G__40961__$1 = (((G__40961 instanceof cljs.core.Keyword))?G__40961.fqn:null);
switch (G__40961__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40962 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40963 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40964 = loc;
var G__40965 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40966_41159 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40967_41160 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40968_41161 = true;
var _STAR_print_fn_STAR__temp_val__40969_41162 = ((function (_STAR_print_newline_STAR__orig_val__40966_41159,_STAR_print_fn_STAR__orig_val__40967_41160,_STAR_print_newline_STAR__temp_val__40968_41161,sb__4661__auto__,G__40962,G__40963,G__40964,G__40961,G__40961__$1,loc,class_name,simple_class,cause_type,format,map__40956,map__40956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__40966_41159,_STAR_print_fn_STAR__orig_val__40967_41160,_STAR_print_newline_STAR__temp_val__40968_41161,sb__4661__auto__,G__40962,G__40963,G__40964,G__40961,G__40961__$1,loc,class_name,simple_class,cause_type,format,map__40956,map__40956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40968_41161;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40969_41162;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__40966_41159,_STAR_print_fn_STAR__orig_val__40967_41160,_STAR_print_newline_STAR__temp_val__40968_41161,_STAR_print_fn_STAR__temp_val__40969_41162,sb__4661__auto__,G__40962,G__40963,G__40964,G__40961,G__40961__$1,loc,class_name,simple_class,cause_type,format,map__40956,map__40956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__40966_41159,_STAR_print_fn_STAR__orig_val__40967_41160,_STAR_print_newline_STAR__temp_val__40968_41161,_STAR_print_fn_STAR__temp_val__40969_41162,sb__4661__auto__,G__40962,G__40963,G__40964,G__40961,G__40961__$1,loc,class_name,simple_class,cause_type,format,map__40956,map__40956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__40952_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40952_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__40966_41159,_STAR_print_fn_STAR__orig_val__40967_41160,_STAR_print_newline_STAR__temp_val__40968_41161,_STAR_print_fn_STAR__temp_val__40969_41162,sb__4661__auto__,G__40962,G__40963,G__40964,G__40961,G__40961__$1,loc,class_name,simple_class,cause_type,format,map__40956,map__40956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__40966_41159,_STAR_print_fn_STAR__orig_val__40967_41160,_STAR_print_newline_STAR__temp_val__40968_41161,_STAR_print_fn_STAR__temp_val__40969_41162,sb__4661__auto__,G__40962,G__40963,G__40964,G__40961,G__40961__$1,loc,class_name,simple_class,cause_type,format,map__40956,map__40956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40967_41160;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40966_41159;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40962,G__40963,G__40964,G__40965) : format.call(null,G__40962,G__40963,G__40964,G__40965));

break;
case "macroexpansion":
var G__40970 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40971 = cause_type;
var G__40972 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40973 = loc;
var G__40974 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40970,G__40971,G__40972,G__40973,G__40974) : format.call(null,G__40970,G__40971,G__40972,G__40973,G__40974));

break;
case "compile-syntax-check":
var G__40975 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40976 = cause_type;
var G__40977 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40978 = loc;
var G__40979 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40975,G__40976,G__40977,G__40978,G__40979) : format.call(null,G__40975,G__40976,G__40977,G__40978,G__40979));

break;
case "compilation":
var G__40980 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40981 = cause_type;
var G__40982 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40983 = loc;
var G__40984 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40980,G__40981,G__40982,G__40983,G__40984) : format.call(null,G__40980,G__40981,G__40982,G__40983,G__40984));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40985 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40986 = symbol;
var G__40987 = loc;
var G__40988 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40989_41183 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40990_41184 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40991_41185 = true;
var _STAR_print_fn_STAR__temp_val__40992_41186 = ((function (_STAR_print_newline_STAR__orig_val__40989_41183,_STAR_print_fn_STAR__orig_val__40990_41184,_STAR_print_newline_STAR__temp_val__40991_41185,sb__4661__auto__,G__40985,G__40986,G__40987,G__40961,G__40961__$1,loc,class_name,simple_class,cause_type,format,map__40956,map__40956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__40989_41183,_STAR_print_fn_STAR__orig_val__40990_41184,_STAR_print_newline_STAR__temp_val__40991_41185,sb__4661__auto__,G__40985,G__40986,G__40987,G__40961,G__40961__$1,loc,class_name,simple_class,cause_type,format,map__40956,map__40956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40991_41185;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40992_41186;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__40989_41183,_STAR_print_fn_STAR__orig_val__40990_41184,_STAR_print_newline_STAR__temp_val__40991_41185,_STAR_print_fn_STAR__temp_val__40992_41186,sb__4661__auto__,G__40985,G__40986,G__40987,G__40961,G__40961__$1,loc,class_name,simple_class,cause_type,format,map__40956,map__40956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__40989_41183,_STAR_print_fn_STAR__orig_val__40990_41184,_STAR_print_newline_STAR__temp_val__40991_41185,_STAR_print_fn_STAR__temp_val__40992_41186,sb__4661__auto__,G__40985,G__40986,G__40987,G__40961,G__40961__$1,loc,class_name,simple_class,cause_type,format,map__40956,map__40956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__40953_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40953_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__40989_41183,_STAR_print_fn_STAR__orig_val__40990_41184,_STAR_print_newline_STAR__temp_val__40991_41185,_STAR_print_fn_STAR__temp_val__40992_41186,sb__4661__auto__,G__40985,G__40986,G__40987,G__40961,G__40961__$1,loc,class_name,simple_class,cause_type,format,map__40956,map__40956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__40989_41183,_STAR_print_fn_STAR__orig_val__40990_41184,_STAR_print_newline_STAR__temp_val__40991_41185,_STAR_print_fn_STAR__temp_val__40992_41186,sb__4661__auto__,G__40985,G__40986,G__40987,G__40961,G__40961__$1,loc,class_name,simple_class,cause_type,format,map__40956,map__40956__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40990_41184;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40989_41183;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40985,G__40986,G__40987,G__40988) : format.call(null,G__40985,G__40986,G__40987,G__40988));
} else {
var G__40993 = "Execution error%s at %s(%s).\n%s\n";
var G__40994 = cause_type;
var G__40995 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40996 = loc;
var G__40997 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40993,G__40994,G__40995,G__40996,G__40997) : format.call(null,G__40993,G__40994,G__40995,G__40996,G__40997));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40961__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
