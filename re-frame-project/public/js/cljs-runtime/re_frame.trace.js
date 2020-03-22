goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__51489){
var map__51490 = p__51489;
var map__51490__$1 = (((((!((map__51490 == null))))?(((((map__51490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51490):map__51490);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51490__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51490__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51490__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51490__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__51492_51519 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__51493_51520 = null;
var count__51494_51521 = (0);
var i__51495_51522 = (0);
while(true){
if((i__51495_51522 < count__51494_51521)){
var vec__51506_51523 = chunk__51493_51520.cljs$core$IIndexed$_nth$arity$2(null,i__51495_51522);
var k_51524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51506_51523,(0),null);
var cb_51525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51506_51523,(1),null);
try{var G__51510_51526 = cljs.core.deref(re_frame.trace.traces);
(cb_51525.cljs$core$IFn$_invoke$arity$1 ? cb_51525.cljs$core$IFn$_invoke$arity$1(G__51510_51526) : cb_51525.call(null,G__51510_51526));
}catch (e51509){var e_51527 = e51509;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51524,"while storing",cljs.core.deref(re_frame.trace.traces),e_51527], 0));
}

var G__51528 = seq__51492_51519;
var G__51529 = chunk__51493_51520;
var G__51530 = count__51494_51521;
var G__51531 = (i__51495_51522 + (1));
seq__51492_51519 = G__51528;
chunk__51493_51520 = G__51529;
count__51494_51521 = G__51530;
i__51495_51522 = G__51531;
continue;
} else {
var temp__5720__auto___51532 = cljs.core.seq(seq__51492_51519);
if(temp__5720__auto___51532){
var seq__51492_51533__$1 = temp__5720__auto___51532;
if(cljs.core.chunked_seq_QMARK_(seq__51492_51533__$1)){
var c__4550__auto___51534 = cljs.core.chunk_first(seq__51492_51533__$1);
var G__51535 = cljs.core.chunk_rest(seq__51492_51533__$1);
var G__51536 = c__4550__auto___51534;
var G__51537 = cljs.core.count(c__4550__auto___51534);
var G__51538 = (0);
seq__51492_51519 = G__51535;
chunk__51493_51520 = G__51536;
count__51494_51521 = G__51537;
i__51495_51522 = G__51538;
continue;
} else {
var vec__51511_51539 = cljs.core.first(seq__51492_51533__$1);
var k_51540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51511_51539,(0),null);
var cb_51541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51511_51539,(1),null);
try{var G__51515_51543 = cljs.core.deref(re_frame.trace.traces);
(cb_51541.cljs$core$IFn$_invoke$arity$1 ? cb_51541.cljs$core$IFn$_invoke$arity$1(G__51515_51543) : cb_51541.call(null,G__51515_51543));
}catch (e51514){var e_51548 = e51514;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51540,"while storing",cljs.core.deref(re_frame.trace.traces),e_51548], 0));
}

var G__51549 = cljs.core.next(seq__51492_51533__$1);
var G__51550 = null;
var G__51551 = (0);
var G__51552 = (0);
seq__51492_51519 = G__51549;
chunk__51493_51520 = G__51550;
count__51494_51521 = G__51551;
i__51495_51522 = G__51552;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
