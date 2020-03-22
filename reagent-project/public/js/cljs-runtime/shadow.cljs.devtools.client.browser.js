goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48656 = arguments.length;
var i__4731__auto___48657 = (0);
while(true){
if((i__4731__auto___48657 < len__4730__auto___48656)){
args__4736__auto__.push((arguments[i__4731__auto___48657]));

var G__48658 = (i__4731__auto___48657 + (1));
i__4731__auto___48657 = G__48658;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq48408){
var G__48409 = cljs.core.first(seq48408);
var seq48408__$1 = cljs.core.next(seq48408);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48409,seq48408__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__48423){
var map__48425 = p__48423;
var map__48425__$1 = (((((!((map__48425 == null))))?(((((map__48425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48425):map__48425);
var src = map__48425__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48425__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48425__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__48428 = cljs.core.seq(sources);
var chunk__48429 = null;
var count__48430 = (0);
var i__48431 = (0);
while(true){
if((i__48431 < count__48430)){
var map__48437 = chunk__48429.cljs$core$IIndexed$_nth$arity$2(null,i__48431);
var map__48437__$1 = (((((!((map__48437 == null))))?(((((map__48437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48437):map__48437);
var src = map__48437__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48437__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48437__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48437__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48437__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__48661 = seq__48428;
var G__48662 = chunk__48429;
var G__48663 = count__48430;
var G__48664 = (i__48431 + (1));
seq__48428 = G__48661;
chunk__48429 = G__48662;
count__48430 = G__48663;
i__48431 = G__48664;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48428);
if(temp__5720__auto__){
var seq__48428__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48428__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48428__$1);
var G__48665 = cljs.core.chunk_rest(seq__48428__$1);
var G__48666 = c__4550__auto__;
var G__48667 = cljs.core.count(c__4550__auto__);
var G__48668 = (0);
seq__48428 = G__48665;
chunk__48429 = G__48666;
count__48430 = G__48667;
i__48431 = G__48668;
continue;
} else {
var map__48439 = cljs.core.first(seq__48428__$1);
var map__48439__$1 = (((((!((map__48439 == null))))?(((((map__48439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48439):map__48439);
var src = map__48439__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48439__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48439__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48439__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48439__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__48671 = cljs.core.next(seq__48428__$1);
var G__48672 = null;
var G__48673 = (0);
var G__48674 = (0);
seq__48428 = G__48671;
chunk__48429 = G__48672;
count__48430 = G__48673;
i__48431 = G__48674;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__48445 = cljs.core.seq(js_requires);
var chunk__48446 = null;
var count__48447 = (0);
var i__48448 = (0);
while(true){
if((i__48448 < count__48447)){
var js_ns = chunk__48446.cljs$core$IIndexed$_nth$arity$2(null,i__48448);
var require_str_48675 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48675);


var G__48676 = seq__48445;
var G__48677 = chunk__48446;
var G__48678 = count__48447;
var G__48679 = (i__48448 + (1));
seq__48445 = G__48676;
chunk__48446 = G__48677;
count__48447 = G__48678;
i__48448 = G__48679;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48445);
if(temp__5720__auto__){
var seq__48445__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48445__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48445__$1);
var G__48680 = cljs.core.chunk_rest(seq__48445__$1);
var G__48681 = c__4550__auto__;
var G__48682 = cljs.core.count(c__4550__auto__);
var G__48683 = (0);
seq__48445 = G__48680;
chunk__48446 = G__48681;
count__48447 = G__48682;
i__48448 = G__48683;
continue;
} else {
var js_ns = cljs.core.first(seq__48445__$1);
var require_str_48684 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48684);


var G__48685 = cljs.core.next(seq__48445__$1);
var G__48686 = null;
var G__48687 = (0);
var G__48688 = (0);
seq__48445 = G__48685;
chunk__48446 = G__48686;
count__48447 = G__48687;
i__48448 = G__48688;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__48451 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__48451) : callback.call(null,G__48451));
} else {
var G__48452 = shadow.cljs.devtools.client.env.files_url();
var G__48453 = ((function (G__48452){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__48452))
;
var G__48454 = "POST";
var G__48455 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__48456 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__48452,G__48453,G__48454,G__48455,G__48456);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__48458){
var map__48459 = p__48458;
var map__48459__$1 = (((((!((map__48459 == null))))?(((((map__48459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48459):map__48459);
var msg = map__48459__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48459__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48459__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__48461 = info;
var map__48461__$1 = (((((!((map__48461 == null))))?(((((map__48461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48461):map__48461);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48461__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48461__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__48461,map__48461__$1,sources,compiled,map__48459,map__48459__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48463(s__48464){
return (new cljs.core.LazySeq(null,((function (map__48461,map__48461__$1,sources,compiled,map__48459,map__48459__$1,msg,info,reload_info){
return (function (){
var s__48464__$1 = s__48464;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48464__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__48471 = cljs.core.first(xs__6277__auto__);
var map__48471__$1 = (((((!((map__48471 == null))))?(((((map__48471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48471):map__48471);
var src = map__48471__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48471__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48471__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__48464__$1,map__48471,map__48471__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__48461,map__48461__$1,sources,compiled,map__48459,map__48459__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48463_$_iter__48465(s__48466){
return (new cljs.core.LazySeq(null,((function (s__48464__$1,map__48471,map__48471__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__48461,map__48461__$1,sources,compiled,map__48459,map__48459__$1,msg,info,reload_info){
return (function (){
var s__48466__$1 = s__48466;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48466__$1);
if(temp__5720__auto____$1){
var s__48466__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48466__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48466__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48468 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48467 = (0);
while(true){
if((i__48467 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48467);
cljs.core.chunk_append(b__48468,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48697 = (i__48467 + (1));
i__48467 = G__48697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48468),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48463_$_iter__48465(cljs.core.chunk_rest(s__48466__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48468),null);
}
} else {
var warning = cljs.core.first(s__48466__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48463_$_iter__48465(cljs.core.rest(s__48466__$2)));
}
} else {
return null;
}
break;
}
});})(s__48464__$1,map__48471,map__48471__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__48461,map__48461__$1,sources,compiled,map__48459,map__48459__$1,msg,info,reload_info))
,null,null));
});})(s__48464__$1,map__48471,map__48471__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__48461,map__48461__$1,sources,compiled,map__48459,map__48459__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__48463(cljs.core.rest(s__48464__$1)));
} else {
var G__48698 = cljs.core.rest(s__48464__$1);
s__48464__$1 = G__48698;
continue;
}
} else {
var G__48699 = cljs.core.rest(s__48464__$1);
s__48464__$1 = G__48699;
continue;
}
} else {
return null;
}
break;
}
});})(map__48461,map__48461__$1,sources,compiled,map__48459,map__48459__$1,msg,info,reload_info))
,null,null));
});})(map__48461,map__48461__$1,sources,compiled,map__48459,map__48459__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__48475_48700 = cljs.core.seq(warnings);
var chunk__48476_48701 = null;
var count__48477_48702 = (0);
var i__48478_48703 = (0);
while(true){
if((i__48478_48703 < count__48477_48702)){
var map__48489_48704 = chunk__48476_48701.cljs$core$IIndexed$_nth$arity$2(null,i__48478_48703);
var map__48489_48705__$1 = (((((!((map__48489_48704 == null))))?(((((map__48489_48704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48489_48704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48489_48704):map__48489_48704);
var w_48706 = map__48489_48705__$1;
var msg_48707__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48489_48705__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48489_48705__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48489_48705__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48489_48705__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48710)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48708),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48709),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48707__$1)].join(''));


var G__48712 = seq__48475_48700;
var G__48713 = chunk__48476_48701;
var G__48714 = count__48477_48702;
var G__48715 = (i__48478_48703 + (1));
seq__48475_48700 = G__48712;
chunk__48476_48701 = G__48713;
count__48477_48702 = G__48714;
i__48478_48703 = G__48715;
continue;
} else {
var temp__5720__auto___48717 = cljs.core.seq(seq__48475_48700);
if(temp__5720__auto___48717){
var seq__48475_48718__$1 = temp__5720__auto___48717;
if(cljs.core.chunked_seq_QMARK_(seq__48475_48718__$1)){
var c__4550__auto___48719 = cljs.core.chunk_first(seq__48475_48718__$1);
var G__48720 = cljs.core.chunk_rest(seq__48475_48718__$1);
var G__48721 = c__4550__auto___48719;
var G__48722 = cljs.core.count(c__4550__auto___48719);
var G__48723 = (0);
seq__48475_48700 = G__48720;
chunk__48476_48701 = G__48721;
count__48477_48702 = G__48722;
i__48478_48703 = G__48723;
continue;
} else {
var map__48494_48724 = cljs.core.first(seq__48475_48718__$1);
var map__48494_48725__$1 = (((((!((map__48494_48724 == null))))?(((((map__48494_48724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48494_48724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48494_48724):map__48494_48724);
var w_48726 = map__48494_48725__$1;
var msg_48727__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48494_48725__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48494_48725__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48494_48725__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48494_48725__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48730)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48728),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48729),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48727__$1)].join(''));


var G__48731 = cljs.core.next(seq__48475_48718__$1);
var G__48732 = null;
var G__48733 = (0);
var G__48734 = (0);
seq__48475_48700 = G__48731;
chunk__48476_48701 = G__48732;
count__48477_48702 = G__48733;
i__48478_48703 = G__48734;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__48461,map__48461__$1,sources,compiled,warnings,map__48459,map__48459__$1,msg,info,reload_info){
return (function (p__48499){
var map__48502 = p__48499;
var map__48502__$1 = (((((!((map__48502 == null))))?(((((map__48502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48502):map__48502);
var src = map__48502__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48502__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48502__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__48461,map__48461__$1,sources,compiled,warnings,map__48459,map__48459__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__48461,map__48461__$1,sources,compiled,warnings,map__48459,map__48459__$1,msg,info,reload_info){
return (function (p__48509){
var map__48510 = p__48509;
var map__48510__$1 = (((((!((map__48510 == null))))?(((((map__48510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48510):map__48510);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48510__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__48461,map__48461__$1,sources,compiled,warnings,map__48459,map__48459__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__48461,map__48461__$1,sources,compiled,warnings,map__48459,map__48459__$1,msg,info,reload_info){
return (function (p__48516){
var map__48517 = p__48516;
var map__48517__$1 = (((((!((map__48517 == null))))?(((((map__48517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48517):map__48517);
var rc = map__48517__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48517__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__48461,map__48461__$1,sources,compiled,warnings,map__48459,map__48459__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__48461,map__48461__$1,sources,compiled,warnings,map__48459,map__48459__$1,msg,info,reload_info){
return (function (p1__48457_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__48457_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__48461,map__48461__$1,sources,compiled,warnings,map__48459,map__48459__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__48532){
var map__48533 = p__48532;
var map__48533__$1 = (((((!((map__48533 == null))))?(((((map__48533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48533):map__48533);
var msg = map__48533__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48533__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__48536 = cljs.core.seq(updates);
var chunk__48540 = null;
var count__48541 = (0);
var i__48542 = (0);
while(true){
if((i__48542 < count__48541)){
var path = chunk__48540.cljs$core$IIndexed$_nth$arity$2(null,i__48542);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48578_48735 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48581_48736 = null;
var count__48582_48737 = (0);
var i__48583_48738 = (0);
while(true){
if((i__48583_48738 < count__48582_48737)){
var node_48739 = chunk__48581_48736.cljs$core$IIndexed$_nth$arity$2(null,i__48583_48738);
var path_match_48740 = shadow.cljs.devtools.client.browser.match_paths(node_48739.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48740)){
var new_link_48741 = (function (){var G__48588 = node_48739.cloneNode(true);
G__48588.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48740),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48588;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48740], 0));

goog.dom.insertSiblingAfter(new_link_48741,node_48739);

goog.dom.removeNode(node_48739);


var G__48742 = seq__48578_48735;
var G__48743 = chunk__48581_48736;
var G__48744 = count__48582_48737;
var G__48745 = (i__48583_48738 + (1));
seq__48578_48735 = G__48742;
chunk__48581_48736 = G__48743;
count__48582_48737 = G__48744;
i__48583_48738 = G__48745;
continue;
} else {
var G__48746 = seq__48578_48735;
var G__48747 = chunk__48581_48736;
var G__48748 = count__48582_48737;
var G__48749 = (i__48583_48738 + (1));
seq__48578_48735 = G__48746;
chunk__48581_48736 = G__48747;
count__48582_48737 = G__48748;
i__48583_48738 = G__48749;
continue;
}
} else {
var temp__5720__auto___48750 = cljs.core.seq(seq__48578_48735);
if(temp__5720__auto___48750){
var seq__48578_48751__$1 = temp__5720__auto___48750;
if(cljs.core.chunked_seq_QMARK_(seq__48578_48751__$1)){
var c__4550__auto___48752 = cljs.core.chunk_first(seq__48578_48751__$1);
var G__48753 = cljs.core.chunk_rest(seq__48578_48751__$1);
var G__48754 = c__4550__auto___48752;
var G__48755 = cljs.core.count(c__4550__auto___48752);
var G__48756 = (0);
seq__48578_48735 = G__48753;
chunk__48581_48736 = G__48754;
count__48582_48737 = G__48755;
i__48583_48738 = G__48756;
continue;
} else {
var node_48757 = cljs.core.first(seq__48578_48751__$1);
var path_match_48758 = shadow.cljs.devtools.client.browser.match_paths(node_48757.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48758)){
var new_link_48759 = (function (){var G__48589 = node_48757.cloneNode(true);
G__48589.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48758),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48589;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48758], 0));

goog.dom.insertSiblingAfter(new_link_48759,node_48757);

goog.dom.removeNode(node_48757);


var G__48760 = cljs.core.next(seq__48578_48751__$1);
var G__48761 = null;
var G__48762 = (0);
var G__48763 = (0);
seq__48578_48735 = G__48760;
chunk__48581_48736 = G__48761;
count__48582_48737 = G__48762;
i__48583_48738 = G__48763;
continue;
} else {
var G__48764 = cljs.core.next(seq__48578_48751__$1);
var G__48765 = null;
var G__48766 = (0);
var G__48767 = (0);
seq__48578_48735 = G__48764;
chunk__48581_48736 = G__48765;
count__48582_48737 = G__48766;
i__48583_48738 = G__48767;
continue;
}
}
} else {
}
}
break;
}


var G__48768 = seq__48536;
var G__48769 = chunk__48540;
var G__48770 = count__48541;
var G__48771 = (i__48542 + (1));
seq__48536 = G__48768;
chunk__48540 = G__48769;
count__48541 = G__48770;
i__48542 = G__48771;
continue;
} else {
var G__48772 = seq__48536;
var G__48773 = chunk__48540;
var G__48774 = count__48541;
var G__48775 = (i__48542 + (1));
seq__48536 = G__48772;
chunk__48540 = G__48773;
count__48541 = G__48774;
i__48542 = G__48775;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48536);
if(temp__5720__auto__){
var seq__48536__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48536__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48536__$1);
var G__48776 = cljs.core.chunk_rest(seq__48536__$1);
var G__48777 = c__4550__auto__;
var G__48778 = cljs.core.count(c__4550__auto__);
var G__48779 = (0);
seq__48536 = G__48776;
chunk__48540 = G__48777;
count__48541 = G__48778;
i__48542 = G__48779;
continue;
} else {
var path = cljs.core.first(seq__48536__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48594_48782 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48597_48783 = null;
var count__48598_48784 = (0);
var i__48599_48785 = (0);
while(true){
if((i__48599_48785 < count__48598_48784)){
var node_48786 = chunk__48597_48783.cljs$core$IIndexed$_nth$arity$2(null,i__48599_48785);
var path_match_48787 = shadow.cljs.devtools.client.browser.match_paths(node_48786.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48787)){
var new_link_48788 = (function (){var G__48610 = node_48786.cloneNode(true);
G__48610.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48787),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48610;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48787], 0));

goog.dom.insertSiblingAfter(new_link_48788,node_48786);

goog.dom.removeNode(node_48786);


var G__48789 = seq__48594_48782;
var G__48790 = chunk__48597_48783;
var G__48791 = count__48598_48784;
var G__48792 = (i__48599_48785 + (1));
seq__48594_48782 = G__48789;
chunk__48597_48783 = G__48790;
count__48598_48784 = G__48791;
i__48599_48785 = G__48792;
continue;
} else {
var G__48793 = seq__48594_48782;
var G__48794 = chunk__48597_48783;
var G__48795 = count__48598_48784;
var G__48796 = (i__48599_48785 + (1));
seq__48594_48782 = G__48793;
chunk__48597_48783 = G__48794;
count__48598_48784 = G__48795;
i__48599_48785 = G__48796;
continue;
}
} else {
var temp__5720__auto___48797__$1 = cljs.core.seq(seq__48594_48782);
if(temp__5720__auto___48797__$1){
var seq__48594_48798__$1 = temp__5720__auto___48797__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48594_48798__$1)){
var c__4550__auto___48799 = cljs.core.chunk_first(seq__48594_48798__$1);
var G__48801 = cljs.core.chunk_rest(seq__48594_48798__$1);
var G__48802 = c__4550__auto___48799;
var G__48803 = cljs.core.count(c__4550__auto___48799);
var G__48804 = (0);
seq__48594_48782 = G__48801;
chunk__48597_48783 = G__48802;
count__48598_48784 = G__48803;
i__48599_48785 = G__48804;
continue;
} else {
var node_48808 = cljs.core.first(seq__48594_48798__$1);
var path_match_48809 = shadow.cljs.devtools.client.browser.match_paths(node_48808.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48809)){
var new_link_48810 = (function (){var G__48611 = node_48808.cloneNode(true);
G__48611.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48809),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48611;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48809], 0));

goog.dom.insertSiblingAfter(new_link_48810,node_48808);

goog.dom.removeNode(node_48808);


var G__48811 = cljs.core.next(seq__48594_48798__$1);
var G__48812 = null;
var G__48813 = (0);
var G__48814 = (0);
seq__48594_48782 = G__48811;
chunk__48597_48783 = G__48812;
count__48598_48784 = G__48813;
i__48599_48785 = G__48814;
continue;
} else {
var G__48815 = cljs.core.next(seq__48594_48798__$1);
var G__48816 = null;
var G__48817 = (0);
var G__48818 = (0);
seq__48594_48782 = G__48815;
chunk__48597_48783 = G__48816;
count__48598_48784 = G__48817;
i__48599_48785 = G__48818;
continue;
}
}
} else {
}
}
break;
}


var G__48819 = cljs.core.next(seq__48536__$1);
var G__48820 = null;
var G__48821 = (0);
var G__48822 = (0);
seq__48536 = G__48819;
chunk__48540 = G__48820;
count__48541 = G__48821;
i__48542 = G__48822;
continue;
} else {
var G__48823 = cljs.core.next(seq__48536__$1);
var G__48824 = null;
var G__48825 = (0);
var G__48826 = (0);
seq__48536 = G__48823;
chunk__48540 = G__48824;
count__48541 = G__48825;
i__48542 = G__48826;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__48612){
var map__48613 = p__48612;
var map__48613__$1 = (((((!((map__48613 == null))))?(((((map__48613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48613):map__48613);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48613__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48613__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__48613,map__48613__$1,id,js){
return (function (){
return eval(js);
});})(map__48613,map__48613__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__48619){
var map__48620 = p__48619;
var map__48620__$1 = (((((!((map__48620 == null))))?(((((map__48620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48620):map__48620);
var msg = map__48620__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48620__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48620__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48620__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48620__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__48620,map__48620__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__48622){
var map__48623 = p__48622;
var map__48623__$1 = (((((!((map__48623 == null))))?(((((map__48623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48623):map__48623);
var src = map__48623__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48623__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__48620,map__48620__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__48620,map__48620__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__48620,map__48620__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__48625){
var map__48626 = p__48625;
var map__48626__$1 = (((((!((map__48626 == null))))?(((((map__48626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48626):map__48626);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48626__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48626__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__48626,map__48626__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__48626,map__48626__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__48632){
var map__48633 = p__48632;
var map__48633__$1 = (((((!((map__48633 == null))))?(((((map__48633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48633):map__48633);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48633__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48633__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__48638){
var map__48639 = p__48638;
var map__48639__$1 = (((((!((map__48639 == null))))?(((((map__48639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48639):map__48639);
var msg = map__48639__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48639__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__48641 = type;
var G__48641__$1 = (((G__48641 instanceof cljs.core.Keyword))?G__48641.fqn:null);
switch (G__48641__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__48642 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__48643 = ((function (G__48642){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__48642))
;
var G__48644 = "POST";
var G__48645 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__48646 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__48642,G__48643,G__48644,G__48645,G__48646);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e48650){var e = e48650;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___48836 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___48836)){
var s_48837 = temp__5720__auto___48836;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_48837.onclose = ((function (s_48837,temp__5720__auto___48836){
return (function (e){
return null;
});})(s_48837,temp__5720__auto___48836))
;

s_48837.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
