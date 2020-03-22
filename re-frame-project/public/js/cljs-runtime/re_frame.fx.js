goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__51788 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__51789 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__51789;

try{try{var seq__51790 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51791 = null;
var count__51792 = (0);
var i__51793 = (0);
while(true){
if((i__51793 < count__51792)){
var vec__51800 = chunk__51791.cljs$core$IIndexed$_nth$arity$2(null,i__51793);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51800,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51800,(1),null);
var temp__5718__auto___51847 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___51847)){
var effect_fn_51848 = temp__5718__auto___51847;
(effect_fn_51848.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51848.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51848.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51849 = seq__51790;
var G__51850 = chunk__51791;
var G__51851 = count__51792;
var G__51852 = (i__51793 + (1));
seq__51790 = G__51849;
chunk__51791 = G__51850;
count__51792 = G__51851;
i__51793 = G__51852;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__51790);
if(temp__5720__auto__){
var seq__51790__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51790__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51790__$1);
var G__51857 = cljs.core.chunk_rest(seq__51790__$1);
var G__51858 = c__4550__auto__;
var G__51859 = cljs.core.count(c__4550__auto__);
var G__51860 = (0);
seq__51790 = G__51857;
chunk__51791 = G__51858;
count__51792 = G__51859;
i__51793 = G__51860;
continue;
} else {
var vec__51803 = cljs.core.first(seq__51790__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51803,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51803,(1),null);
var temp__5718__auto___51869 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___51869)){
var effect_fn_51870 = temp__5718__auto___51869;
(effect_fn_51870.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51870.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51870.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51871 = cljs.core.next(seq__51790__$1);
var G__51872 = null;
var G__51873 = (0);
var G__51874 = (0);
seq__51790 = G__51871;
chunk__51791 = G__51872;
count__51792 = G__51873;
i__51793 = G__51874;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51469__auto___51875 = re_frame.interop.now();
var duration__51470__auto___51876 = (end__51469__auto___51875 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51470__auto___51876,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51469__auto___51875);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__51788;
}} else {
var seq__51806 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__51807 = null;
var count__51808 = (0);
var i__51809 = (0);
while(true){
if((i__51809 < count__51808)){
var vec__51816 = chunk__51807.cljs$core$IIndexed$_nth$arity$2(null,i__51809);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51816,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51816,(1),null);
var temp__5718__auto___51877 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___51877)){
var effect_fn_51878 = temp__5718__auto___51877;
(effect_fn_51878.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51878.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51878.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51879 = seq__51806;
var G__51880 = chunk__51807;
var G__51881 = count__51808;
var G__51882 = (i__51809 + (1));
seq__51806 = G__51879;
chunk__51807 = G__51880;
count__51808 = G__51881;
i__51809 = G__51882;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__51806);
if(temp__5720__auto__){
var seq__51806__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51806__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51806__$1);
var G__51883 = cljs.core.chunk_rest(seq__51806__$1);
var G__51884 = c__4550__auto__;
var G__51885 = cljs.core.count(c__4550__auto__);
var G__51886 = (0);
seq__51806 = G__51883;
chunk__51807 = G__51884;
count__51808 = G__51885;
i__51809 = G__51886;
continue;
} else {
var vec__51819 = cljs.core.first(seq__51806__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51819,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51819,(1),null);
var temp__5718__auto___51887 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___51887)){
var effect_fn_51888 = temp__5718__auto___51887;
(effect_fn_51888.cljs$core$IFn$_invoke$arity$1 ? effect_fn_51888.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_51888.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__51889 = cljs.core.next(seq__51806__$1);
var G__51890 = null;
var G__51891 = (0);
var G__51892 = (0);
seq__51806 = G__51889;
chunk__51807 = G__51890;
count__51808 = G__51891;
i__51809 = G__51892;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__51823 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51824 = null;
var count__51825 = (0);
var i__51826 = (0);
while(true){
if((i__51826 < count__51825)){
var map__51831 = chunk__51824.cljs$core$IIndexed$_nth$arity$2(null,i__51826);
var map__51831__$1 = (((((!((map__51831 == null))))?(((((map__51831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51831):map__51831);
var effect = map__51831__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51831__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51831__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51823,chunk__51824,count__51825,i__51826,map__51831,map__51831__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51823,chunk__51824,count__51825,i__51826,map__51831,map__51831__$1,effect,ms,dispatch))
,ms);
}


var G__51895 = seq__51823;
var G__51896 = chunk__51824;
var G__51897 = count__51825;
var G__51898 = (i__51826 + (1));
seq__51823 = G__51895;
chunk__51824 = G__51896;
count__51825 = G__51897;
i__51826 = G__51898;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__51823);
if(temp__5720__auto__){
var seq__51823__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51823__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51823__$1);
var G__51899 = cljs.core.chunk_rest(seq__51823__$1);
var G__51900 = c__4550__auto__;
var G__51901 = cljs.core.count(c__4550__auto__);
var G__51902 = (0);
seq__51823 = G__51899;
chunk__51824 = G__51900;
count__51825 = G__51901;
i__51826 = G__51902;
continue;
} else {
var map__51833 = cljs.core.first(seq__51823__$1);
var map__51833__$1 = (((((!((map__51833 == null))))?(((((map__51833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51833):map__51833);
var effect = map__51833__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51833__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51833__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__51823,chunk__51824,count__51825,i__51826,map__51833,map__51833__$1,effect,ms,dispatch,seq__51823__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__51823,chunk__51824,count__51825,i__51826,map__51833,map__51833__$1,effect,ms,dispatch,seq__51823__$1,temp__5720__auto__))
,ms);
}


var G__51904 = cljs.core.next(seq__51823__$1);
var G__51905 = null;
var G__51906 = (0);
var G__51907 = (0);
seq__51823 = G__51904;
chunk__51824 = G__51905;
count__51825 = G__51906;
i__51826 = G__51907;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__51836 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__51837 = null;
var count__51838 = (0);
var i__51839 = (0);
while(true){
if((i__51839 < count__51838)){
var event = chunk__51837.cljs$core$IIndexed$_nth$arity$2(null,i__51839);
re_frame.router.dispatch(event);


var G__51909 = seq__51836;
var G__51910 = chunk__51837;
var G__51911 = count__51838;
var G__51912 = (i__51839 + (1));
seq__51836 = G__51909;
chunk__51837 = G__51910;
count__51838 = G__51911;
i__51839 = G__51912;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__51836);
if(temp__5720__auto__){
var seq__51836__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51836__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51836__$1);
var G__51913 = cljs.core.chunk_rest(seq__51836__$1);
var G__51914 = c__4550__auto__;
var G__51915 = cljs.core.count(c__4550__auto__);
var G__51916 = (0);
seq__51836 = G__51913;
chunk__51837 = G__51914;
count__51838 = G__51915;
i__51839 = G__51916;
continue;
} else {
var event = cljs.core.first(seq__51836__$1);
re_frame.router.dispatch(event);


var G__51917 = cljs.core.next(seq__51836__$1);
var G__51918 = null;
var G__51919 = (0);
var G__51920 = (0);
seq__51836 = G__51917;
chunk__51837 = G__51918;
count__51838 = G__51919;
i__51839 = G__51920;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__51842 = cljs.core.seq(value);
var chunk__51843 = null;
var count__51844 = (0);
var i__51845 = (0);
while(true){
if((i__51845 < count__51844)){
var event = chunk__51843.cljs$core$IIndexed$_nth$arity$2(null,i__51845);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__51922 = seq__51842;
var G__51923 = chunk__51843;
var G__51924 = count__51844;
var G__51925 = (i__51845 + (1));
seq__51842 = G__51922;
chunk__51843 = G__51923;
count__51844 = G__51924;
i__51845 = G__51925;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__51842);
if(temp__5720__auto__){
var seq__51842__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51842__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51842__$1);
var G__51927 = cljs.core.chunk_rest(seq__51842__$1);
var G__51928 = c__4550__auto__;
var G__51929 = cljs.core.count(c__4550__auto__);
var G__51930 = (0);
seq__51842 = G__51927;
chunk__51843 = G__51928;
count__51844 = G__51929;
i__51845 = G__51930;
continue;
} else {
var event = cljs.core.first(seq__51842__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__51931 = cljs.core.next(seq__51842__$1);
var G__51932 = null;
var G__51933 = (0);
var G__51934 = (0);
seq__51842 = G__51931;
chunk__51843 = G__51932;
count__51844 = G__51933;
i__51845 = G__51934;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
