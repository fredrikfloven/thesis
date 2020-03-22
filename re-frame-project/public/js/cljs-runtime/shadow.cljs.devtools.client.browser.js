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
var len__4730__auto___50815 = arguments.length;
var i__4731__auto___50816 = (0);
while(true){
if((i__4731__auto___50816 < len__4730__auto___50815)){
args__4736__auto__.push((arguments[i__4731__auto___50816]));

var G__50817 = (i__4731__auto___50816 + (1));
i__4731__auto___50816 = G__50817;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq50515){
var G__50516 = cljs.core.first(seq50515);
var seq50515__$1 = cljs.core.next(seq50515);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50516,seq50515__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__50552){
var map__50553 = p__50552;
var map__50553__$1 = (((((!((map__50553 == null))))?(((((map__50553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50553):map__50553);
var src = map__50553__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50553__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50553__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__50562 = cljs.core.seq(sources);
var chunk__50563 = null;
var count__50564 = (0);
var i__50565 = (0);
while(true){
if((i__50565 < count__50564)){
var map__50573 = chunk__50563.cljs$core$IIndexed$_nth$arity$2(null,i__50565);
var map__50573__$1 = (((((!((map__50573 == null))))?(((((map__50573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50573):map__50573);
var src = map__50573__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50573__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50573__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50573__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50573__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__50828 = seq__50562;
var G__50829 = chunk__50563;
var G__50830 = count__50564;
var G__50831 = (i__50565 + (1));
seq__50562 = G__50828;
chunk__50563 = G__50829;
count__50564 = G__50830;
i__50565 = G__50831;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50562);
if(temp__5720__auto__){
var seq__50562__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50562__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50562__$1);
var G__50834 = cljs.core.chunk_rest(seq__50562__$1);
var G__50835 = c__4550__auto__;
var G__50836 = cljs.core.count(c__4550__auto__);
var G__50837 = (0);
seq__50562 = G__50834;
chunk__50563 = G__50835;
count__50564 = G__50836;
i__50565 = G__50837;
continue;
} else {
var map__50576 = cljs.core.first(seq__50562__$1);
var map__50576__$1 = (((((!((map__50576 == null))))?(((((map__50576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50576):map__50576);
var src = map__50576__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50576__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__50839 = cljs.core.next(seq__50562__$1);
var G__50840 = null;
var G__50841 = (0);
var G__50842 = (0);
seq__50562 = G__50839;
chunk__50563 = G__50840;
count__50564 = G__50841;
i__50565 = G__50842;
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
var seq__50614 = cljs.core.seq(js_requires);
var chunk__50615 = null;
var count__50616 = (0);
var i__50617 = (0);
while(true){
if((i__50617 < count__50616)){
var js_ns = chunk__50615.cljs$core$IIndexed$_nth$arity$2(null,i__50617);
var require_str_50846 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50846);


var G__50847 = seq__50614;
var G__50848 = chunk__50615;
var G__50849 = count__50616;
var G__50850 = (i__50617 + (1));
seq__50614 = G__50847;
chunk__50615 = G__50848;
count__50616 = G__50849;
i__50617 = G__50850;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50614);
if(temp__5720__auto__){
var seq__50614__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50614__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50614__$1);
var G__50851 = cljs.core.chunk_rest(seq__50614__$1);
var G__50852 = c__4550__auto__;
var G__50853 = cljs.core.count(c__4550__auto__);
var G__50854 = (0);
seq__50614 = G__50851;
chunk__50615 = G__50852;
count__50616 = G__50853;
i__50617 = G__50854;
continue;
} else {
var js_ns = cljs.core.first(seq__50614__$1);
var require_str_50856 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50856);


var G__50859 = cljs.core.next(seq__50614__$1);
var G__50860 = null;
var G__50861 = (0);
var G__50862 = (0);
seq__50614 = G__50859;
chunk__50615 = G__50860;
count__50616 = G__50861;
i__50617 = G__50862;
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
var G__50630 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__50630) : callback.call(null,G__50630));
} else {
var G__50631 = shadow.cljs.devtools.client.env.files_url();
var G__50632 = ((function (G__50631){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__50631))
;
var G__50633 = "POST";
var G__50634 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__50635 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50631,G__50632,G__50633,G__50634,G__50635);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__50645){
var map__50646 = p__50645;
var map__50646__$1 = (((((!((map__50646 == null))))?(((((map__50646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50646):map__50646);
var msg = map__50646__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50646__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50646__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__50649 = info;
var map__50649__$1 = (((((!((map__50649 == null))))?(((((map__50649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50649):map__50649);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50649__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50649__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__50649,map__50649__$1,sources,compiled,map__50646,map__50646__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50651(s__50652){
return (new cljs.core.LazySeq(null,((function (map__50649,map__50649__$1,sources,compiled,map__50646,map__50646__$1,msg,info,reload_info){
return (function (){
var s__50652__$1 = s__50652;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__50652__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__50657 = cljs.core.first(xs__6277__auto__);
var map__50657__$1 = (((((!((map__50657 == null))))?(((((map__50657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50657):map__50657);
var src = map__50657__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50657__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50657__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__50652__$1,map__50657,map__50657__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__50649,map__50649__$1,sources,compiled,map__50646,map__50646__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50651_$_iter__50653(s__50654){
return (new cljs.core.LazySeq(null,((function (s__50652__$1,map__50657,map__50657__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__50649,map__50649__$1,sources,compiled,map__50646,map__50646__$1,msg,info,reload_info){
return (function (){
var s__50654__$1 = s__50654;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__50654__$1);
if(temp__5720__auto____$1){
var s__50654__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50654__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50654__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50656 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50655 = (0);
while(true){
if((i__50655 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50655);
cljs.core.chunk_append(b__50656,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50883 = (i__50655 + (1));
i__50655 = G__50883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50656),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50651_$_iter__50653(cljs.core.chunk_rest(s__50654__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50656),null);
}
} else {
var warning = cljs.core.first(s__50654__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50651_$_iter__50653(cljs.core.rest(s__50654__$2)));
}
} else {
return null;
}
break;
}
});})(s__50652__$1,map__50657,map__50657__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__50649,map__50649__$1,sources,compiled,map__50646,map__50646__$1,msg,info,reload_info))
,null,null));
});})(s__50652__$1,map__50657,map__50657__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__50649,map__50649__$1,sources,compiled,map__50646,map__50646__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__50651(cljs.core.rest(s__50652__$1)));
} else {
var G__50892 = cljs.core.rest(s__50652__$1);
s__50652__$1 = G__50892;
continue;
}
} else {
var G__50894 = cljs.core.rest(s__50652__$1);
s__50652__$1 = G__50894;
continue;
}
} else {
return null;
}
break;
}
});})(map__50649,map__50649__$1,sources,compiled,map__50646,map__50646__$1,msg,info,reload_info))
,null,null));
});})(map__50649,map__50649__$1,sources,compiled,map__50646,map__50646__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__50660_50896 = cljs.core.seq(warnings);
var chunk__50661_50897 = null;
var count__50662_50898 = (0);
var i__50663_50899 = (0);
while(true){
if((i__50663_50899 < count__50662_50898)){
var map__50668_50901 = chunk__50661_50897.cljs$core$IIndexed$_nth$arity$2(null,i__50663_50899);
var map__50668_50902__$1 = (((((!((map__50668_50901 == null))))?(((((map__50668_50901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50668_50901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50668_50901):map__50668_50901);
var w_50903 = map__50668_50902__$1;
var msg_50904__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50668_50902__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50668_50902__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50668_50902__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50668_50902__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50907)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50905),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50906),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50904__$1)].join(''));


var G__50909 = seq__50660_50896;
var G__50910 = chunk__50661_50897;
var G__50911 = count__50662_50898;
var G__50912 = (i__50663_50899 + (1));
seq__50660_50896 = G__50909;
chunk__50661_50897 = G__50910;
count__50662_50898 = G__50911;
i__50663_50899 = G__50912;
continue;
} else {
var temp__5720__auto___50916 = cljs.core.seq(seq__50660_50896);
if(temp__5720__auto___50916){
var seq__50660_50918__$1 = temp__5720__auto___50916;
if(cljs.core.chunked_seq_QMARK_(seq__50660_50918__$1)){
var c__4550__auto___50919 = cljs.core.chunk_first(seq__50660_50918__$1);
var G__50920 = cljs.core.chunk_rest(seq__50660_50918__$1);
var G__50921 = c__4550__auto___50919;
var G__50922 = cljs.core.count(c__4550__auto___50919);
var G__50923 = (0);
seq__50660_50896 = G__50920;
chunk__50661_50897 = G__50921;
count__50662_50898 = G__50922;
i__50663_50899 = G__50923;
continue;
} else {
var map__50670_50924 = cljs.core.first(seq__50660_50918__$1);
var map__50670_50925__$1 = (((((!((map__50670_50924 == null))))?(((((map__50670_50924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50670_50924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50670_50924):map__50670_50924);
var w_50926 = map__50670_50925__$1;
var msg_50927__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50670_50925__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50670_50925__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50670_50925__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50670_50925__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50930)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50928),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50929),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50927__$1)].join(''));


var G__50939 = cljs.core.next(seq__50660_50918__$1);
var G__50940 = null;
var G__50941 = (0);
var G__50942 = (0);
seq__50660_50896 = G__50939;
chunk__50661_50897 = G__50940;
count__50662_50898 = G__50941;
i__50663_50899 = G__50942;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__50649,map__50649__$1,sources,compiled,warnings,map__50646,map__50646__$1,msg,info,reload_info){
return (function (p__50674){
var map__50675 = p__50674;
var map__50675__$1 = (((((!((map__50675 == null))))?(((((map__50675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50675):map__50675);
var src = map__50675__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50675__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50675__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__50649,map__50649__$1,sources,compiled,warnings,map__50646,map__50646__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__50649,map__50649__$1,sources,compiled,warnings,map__50646,map__50646__$1,msg,info,reload_info){
return (function (p__50677){
var map__50678 = p__50677;
var map__50678__$1 = (((((!((map__50678 == null))))?(((((map__50678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50678):map__50678);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50678__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__50649,map__50649__$1,sources,compiled,warnings,map__50646,map__50646__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__50649,map__50649__$1,sources,compiled,warnings,map__50646,map__50646__$1,msg,info,reload_info){
return (function (p__50681){
var map__50682 = p__50681;
var map__50682__$1 = (((((!((map__50682 == null))))?(((((map__50682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50682):map__50682);
var rc = map__50682__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50682__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__50649,map__50649__$1,sources,compiled,warnings,map__50646,map__50646__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__50649,map__50649__$1,sources,compiled,warnings,map__50646,map__50646__$1,msg,info,reload_info){
return (function (p1__50643_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__50643_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__50649,map__50649__$1,sources,compiled,warnings,map__50646,map__50646__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__50685){
var map__50686 = p__50685;
var map__50686__$1 = (((((!((map__50686 == null))))?(((((map__50686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50686):map__50686);
var msg = map__50686__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50686__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__50688 = cljs.core.seq(updates);
var chunk__50690 = null;
var count__50691 = (0);
var i__50692 = (0);
while(true){
if((i__50692 < count__50691)){
var path = chunk__50690.cljs$core$IIndexed$_nth$arity$2(null,i__50692);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50730_50963 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50733_50964 = null;
var count__50734_50965 = (0);
var i__50735_50966 = (0);
while(true){
if((i__50735_50966 < count__50734_50965)){
var node_50967 = chunk__50733_50964.cljs$core$IIndexed$_nth$arity$2(null,i__50735_50966);
var path_match_50968 = shadow.cljs.devtools.client.browser.match_paths(node_50967.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50968)){
var new_link_50969 = (function (){var G__50744 = node_50967.cloneNode(true);
G__50744.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50968),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50744;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50968], 0));

goog.dom.insertSiblingAfter(new_link_50969,node_50967);

goog.dom.removeNode(node_50967);


var G__50971 = seq__50730_50963;
var G__50972 = chunk__50733_50964;
var G__50973 = count__50734_50965;
var G__50974 = (i__50735_50966 + (1));
seq__50730_50963 = G__50971;
chunk__50733_50964 = G__50972;
count__50734_50965 = G__50973;
i__50735_50966 = G__50974;
continue;
} else {
var G__50975 = seq__50730_50963;
var G__50976 = chunk__50733_50964;
var G__50977 = count__50734_50965;
var G__50978 = (i__50735_50966 + (1));
seq__50730_50963 = G__50975;
chunk__50733_50964 = G__50976;
count__50734_50965 = G__50977;
i__50735_50966 = G__50978;
continue;
}
} else {
var temp__5720__auto___50980 = cljs.core.seq(seq__50730_50963);
if(temp__5720__auto___50980){
var seq__50730_50981__$1 = temp__5720__auto___50980;
if(cljs.core.chunked_seq_QMARK_(seq__50730_50981__$1)){
var c__4550__auto___50982 = cljs.core.chunk_first(seq__50730_50981__$1);
var G__50983 = cljs.core.chunk_rest(seq__50730_50981__$1);
var G__50984 = c__4550__auto___50982;
var G__50985 = cljs.core.count(c__4550__auto___50982);
var G__50986 = (0);
seq__50730_50963 = G__50983;
chunk__50733_50964 = G__50984;
count__50734_50965 = G__50985;
i__50735_50966 = G__50986;
continue;
} else {
var node_50988 = cljs.core.first(seq__50730_50981__$1);
var path_match_50989 = shadow.cljs.devtools.client.browser.match_paths(node_50988.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50989)){
var new_link_50990 = (function (){var G__50745 = node_50988.cloneNode(true);
G__50745.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50989),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50745;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50989], 0));

goog.dom.insertSiblingAfter(new_link_50990,node_50988);

goog.dom.removeNode(node_50988);


var G__50991 = cljs.core.next(seq__50730_50981__$1);
var G__50992 = null;
var G__50993 = (0);
var G__50994 = (0);
seq__50730_50963 = G__50991;
chunk__50733_50964 = G__50992;
count__50734_50965 = G__50993;
i__50735_50966 = G__50994;
continue;
} else {
var G__50995 = cljs.core.next(seq__50730_50981__$1);
var G__50996 = null;
var G__50997 = (0);
var G__50998 = (0);
seq__50730_50963 = G__50995;
chunk__50733_50964 = G__50996;
count__50734_50965 = G__50997;
i__50735_50966 = G__50998;
continue;
}
}
} else {
}
}
break;
}


var G__50999 = seq__50688;
var G__51000 = chunk__50690;
var G__51001 = count__50691;
var G__51002 = (i__50692 + (1));
seq__50688 = G__50999;
chunk__50690 = G__51000;
count__50691 = G__51001;
i__50692 = G__51002;
continue;
} else {
var G__51003 = seq__50688;
var G__51004 = chunk__50690;
var G__51005 = count__50691;
var G__51006 = (i__50692 + (1));
seq__50688 = G__51003;
chunk__50690 = G__51004;
count__50691 = G__51005;
i__50692 = G__51006;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50688);
if(temp__5720__auto__){
var seq__50688__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50688__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50688__$1);
var G__51009 = cljs.core.chunk_rest(seq__50688__$1);
var G__51010 = c__4550__auto__;
var G__51011 = cljs.core.count(c__4550__auto__);
var G__51012 = (0);
seq__50688 = G__51009;
chunk__50690 = G__51010;
count__50691 = G__51011;
i__50692 = G__51012;
continue;
} else {
var path = cljs.core.first(seq__50688__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50746_51015 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50749_51016 = null;
var count__50750_51017 = (0);
var i__50751_51018 = (0);
while(true){
if((i__50751_51018 < count__50750_51017)){
var node_51021 = chunk__50749_51016.cljs$core$IIndexed$_nth$arity$2(null,i__50751_51018);
var path_match_51022 = shadow.cljs.devtools.client.browser.match_paths(node_51021.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51022)){
var new_link_51023 = (function (){var G__50758 = node_51021.cloneNode(true);
G__50758.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51022),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50758;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51022], 0));

goog.dom.insertSiblingAfter(new_link_51023,node_51021);

goog.dom.removeNode(node_51021);


var G__51024 = seq__50746_51015;
var G__51025 = chunk__50749_51016;
var G__51026 = count__50750_51017;
var G__51027 = (i__50751_51018 + (1));
seq__50746_51015 = G__51024;
chunk__50749_51016 = G__51025;
count__50750_51017 = G__51026;
i__50751_51018 = G__51027;
continue;
} else {
var G__51028 = seq__50746_51015;
var G__51029 = chunk__50749_51016;
var G__51030 = count__50750_51017;
var G__51031 = (i__50751_51018 + (1));
seq__50746_51015 = G__51028;
chunk__50749_51016 = G__51029;
count__50750_51017 = G__51030;
i__50751_51018 = G__51031;
continue;
}
} else {
var temp__5720__auto___51032__$1 = cljs.core.seq(seq__50746_51015);
if(temp__5720__auto___51032__$1){
var seq__50746_51033__$1 = temp__5720__auto___51032__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50746_51033__$1)){
var c__4550__auto___51034 = cljs.core.chunk_first(seq__50746_51033__$1);
var G__51035 = cljs.core.chunk_rest(seq__50746_51033__$1);
var G__51036 = c__4550__auto___51034;
var G__51037 = cljs.core.count(c__4550__auto___51034);
var G__51038 = (0);
seq__50746_51015 = G__51035;
chunk__50749_51016 = G__51036;
count__50750_51017 = G__51037;
i__50751_51018 = G__51038;
continue;
} else {
var node_51039 = cljs.core.first(seq__50746_51033__$1);
var path_match_51040 = shadow.cljs.devtools.client.browser.match_paths(node_51039.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51040)){
var new_link_51041 = (function (){var G__50763 = node_51039.cloneNode(true);
G__50763.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51040),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50763;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51040], 0));

goog.dom.insertSiblingAfter(new_link_51041,node_51039);

goog.dom.removeNode(node_51039);


var G__51042 = cljs.core.next(seq__50746_51033__$1);
var G__51043 = null;
var G__51044 = (0);
var G__51045 = (0);
seq__50746_51015 = G__51042;
chunk__50749_51016 = G__51043;
count__50750_51017 = G__51044;
i__50751_51018 = G__51045;
continue;
} else {
var G__51046 = cljs.core.next(seq__50746_51033__$1);
var G__51047 = null;
var G__51048 = (0);
var G__51049 = (0);
seq__50746_51015 = G__51046;
chunk__50749_51016 = G__51047;
count__50750_51017 = G__51048;
i__50751_51018 = G__51049;
continue;
}
}
} else {
}
}
break;
}


var G__51050 = cljs.core.next(seq__50688__$1);
var G__51051 = null;
var G__51052 = (0);
var G__51053 = (0);
seq__50688 = G__51050;
chunk__50690 = G__51051;
count__50691 = G__51052;
i__50692 = G__51053;
continue;
} else {
var G__51054 = cljs.core.next(seq__50688__$1);
var G__51055 = null;
var G__51056 = (0);
var G__51057 = (0);
seq__50688 = G__51054;
chunk__50690 = G__51055;
count__50691 = G__51056;
i__50692 = G__51057;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__50768){
var map__50769 = p__50768;
var map__50769__$1 = (((((!((map__50769 == null))))?(((((map__50769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50769):map__50769);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50769__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50769__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__50769,map__50769__$1,id,js){
return (function (){
return eval(js);
});})(map__50769,map__50769__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__50774){
var map__50775 = p__50774;
var map__50775__$1 = (((((!((map__50775 == null))))?(((((map__50775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50775):map__50775);
var msg = map__50775__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50775__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50775__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50775__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50775__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__50775,map__50775__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__50781){
var map__50782 = p__50781;
var map__50782__$1 = (((((!((map__50782 == null))))?(((((map__50782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50782):map__50782);
var src = map__50782__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50782__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__50775,map__50775__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__50775,map__50775__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__50775,map__50775__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__50785){
var map__50786 = p__50785;
var map__50786__$1 = (((((!((map__50786 == null))))?(((((map__50786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50786):map__50786);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50786__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50786__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__50786,map__50786__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__50786,map__50786__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__50788){
var map__50789 = p__50788;
var map__50789__$1 = (((((!((map__50789 == null))))?(((((map__50789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50789):map__50789);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50789__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50789__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__50792){
var map__50793 = p__50792;
var map__50793__$1 = (((((!((map__50793 == null))))?(((((map__50793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50793):map__50793);
var msg = map__50793__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50793__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__50796 = type;
var G__50796__$1 = (((G__50796 instanceof cljs.core.Keyword))?G__50796.fqn:null);
switch (G__50796__$1) {
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
var G__50802 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__50803 = ((function (G__50802){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__50802))
;
var G__50804 = "POST";
var G__50805 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__50806 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__50802,G__50803,G__50804,G__50805,G__50806);
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
}catch (e50811){var e = e50811;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___51119 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___51119)){
var s_51120 = temp__5720__auto___51119;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_51120.onclose = ((function (s_51120,temp__5720__auto___51119){
return (function (e){
return null;
});})(s_51120,temp__5720__auto___51119))
;

s_51120.close();

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
