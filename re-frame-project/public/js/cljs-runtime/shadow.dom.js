goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__48137 = coll;
var G__48138 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__48137,G__48138) : shadow.dom.lazy_native_coll_seq.call(null,G__48137,G__48138));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__48170 = arguments.length;
switch (G__48170) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__48180 = arguments.length;
switch (G__48180) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__48186 = arguments.length;
switch (G__48186) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__48191 = arguments.length;
switch (G__48191) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__48200 = arguments.length;
switch (G__48200) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__48204 = document;
var G__48205 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48204,G__48205);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__48207 = shadow.dom.dom_node(parent);
var G__48208 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48207,G__48208);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__48211 = shadow.dom.dom_node(el);
var G__48212 = cls;
return goog.dom.classlist.add(G__48211,G__48212);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__48214 = shadow.dom.dom_node(el);
var G__48215 = cls;
return goog.dom.classlist.remove(G__48214,G__48215);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48218 = arguments.length;
switch (G__48218) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__48223 = shadow.dom.dom_node(el);
var G__48224 = cls;
return goog.dom.classlist.toggle(G__48223,G__48224);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48231){if((e48231 instanceof Object)){
var e = e48231;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48231;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48235 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48236 = null;
var count__48237 = (0);
var i__48238 = (0);
while(true){
if((i__48238 < count__48237)){
var el = chunk__48236.cljs$core$IIndexed$_nth$arity$2(null,i__48238);
var handler_48983__$1 = ((function (seq__48235,chunk__48236,count__48237,i__48238,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48235,chunk__48236,count__48237,i__48238,el))
;
var G__48246_48985 = el;
var G__48247_48986 = cljs.core.name(ev);
var G__48248_48987 = handler_48983__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48246_48985,G__48247_48986,G__48248_48987) : shadow.dom.dom_listen.call(null,G__48246_48985,G__48247_48986,G__48248_48987));


var G__48988 = seq__48235;
var G__48989 = chunk__48236;
var G__48990 = count__48237;
var G__48991 = (i__48238 + (1));
seq__48235 = G__48988;
chunk__48236 = G__48989;
count__48237 = G__48990;
i__48238 = G__48991;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48235);
if(temp__5720__auto__){
var seq__48235__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48235__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48235__$1);
var G__48992 = cljs.core.chunk_rest(seq__48235__$1);
var G__48993 = c__4550__auto__;
var G__48994 = cljs.core.count(c__4550__auto__);
var G__48995 = (0);
seq__48235 = G__48992;
chunk__48236 = G__48993;
count__48237 = G__48994;
i__48238 = G__48995;
continue;
} else {
var el = cljs.core.first(seq__48235__$1);
var handler_48996__$1 = ((function (seq__48235,chunk__48236,count__48237,i__48238,el,seq__48235__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48235,chunk__48236,count__48237,i__48238,el,seq__48235__$1,temp__5720__auto__))
;
var G__48250_48998 = el;
var G__48251_48999 = cljs.core.name(ev);
var G__48252_49000 = handler_48996__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48250_48998,G__48251_48999,G__48252_49000) : shadow.dom.dom_listen.call(null,G__48250_48998,G__48251_48999,G__48252_49000));


var G__49001 = cljs.core.next(seq__48235__$1);
var G__49002 = null;
var G__49003 = (0);
var G__49004 = (0);
seq__48235 = G__49001;
chunk__48236 = G__49002;
count__48237 = G__49003;
i__48238 = G__49004;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__48257 = arguments.length;
switch (G__48257) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__48264 = shadow.dom.dom_node(el);
var G__48265 = cljs.core.name(ev);
var G__48266 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48264,G__48265,G__48266) : shadow.dom.dom_listen.call(null,G__48264,G__48265,G__48266));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__48268 = shadow.dom.dom_node(el);
var G__48269 = cljs.core.name(ev);
var G__48270 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__48268,G__48269,G__48270) : shadow.dom.dom_listen_remove.call(null,G__48268,G__48269,G__48270));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48274 = cljs.core.seq(events);
var chunk__48275 = null;
var count__48276 = (0);
var i__48277 = (0);
while(true){
if((i__48277 < count__48276)){
var vec__48289 = chunk__48275.cljs$core$IIndexed$_nth$arity$2(null,i__48277);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48289,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48289,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49011 = seq__48274;
var G__49012 = chunk__48275;
var G__49013 = count__48276;
var G__49014 = (i__48277 + (1));
seq__48274 = G__49011;
chunk__48275 = G__49012;
count__48276 = G__49013;
i__48277 = G__49014;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48274);
if(temp__5720__auto__){
var seq__48274__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48274__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48274__$1);
var G__49015 = cljs.core.chunk_rest(seq__48274__$1);
var G__49016 = c__4550__auto__;
var G__49017 = cljs.core.count(c__4550__auto__);
var G__49018 = (0);
seq__48274 = G__49015;
chunk__48275 = G__49016;
count__48276 = G__49017;
i__48277 = G__49018;
continue;
} else {
var vec__48295 = cljs.core.first(seq__48274__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48295,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48295,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49021 = cljs.core.next(seq__48274__$1);
var G__49022 = null;
var G__49023 = (0);
var G__49024 = (0);
seq__48274 = G__49021;
chunk__48275 = G__49022;
count__48276 = G__49023;
i__48277 = G__49024;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48300 = cljs.core.seq(styles);
var chunk__48301 = null;
var count__48302 = (0);
var i__48303 = (0);
while(true){
if((i__48303 < count__48302)){
var vec__48327 = chunk__48301.cljs$core$IIndexed$_nth$arity$2(null,i__48303);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48327,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48327,(1),null);
var G__48331_49026 = dom;
var G__48332_49027 = cljs.core.name(k);
var G__48333_49028 = (((v == null))?"":v);
goog.style.setStyle(G__48331_49026,G__48332_49027,G__48333_49028);


var G__49030 = seq__48300;
var G__49031 = chunk__48301;
var G__49032 = count__48302;
var G__49033 = (i__48303 + (1));
seq__48300 = G__49030;
chunk__48301 = G__49031;
count__48302 = G__49032;
i__48303 = G__49033;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48300);
if(temp__5720__auto__){
var seq__48300__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48300__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48300__$1);
var G__49036 = cljs.core.chunk_rest(seq__48300__$1);
var G__49037 = c__4550__auto__;
var G__49038 = cljs.core.count(c__4550__auto__);
var G__49039 = (0);
seq__48300 = G__49036;
chunk__48301 = G__49037;
count__48302 = G__49038;
i__48303 = G__49039;
continue;
} else {
var vec__48334 = cljs.core.first(seq__48300__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48334,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48334,(1),null);
var G__48339_49041 = dom;
var G__48340_49042 = cljs.core.name(k);
var G__48341_49043 = (((v == null))?"":v);
goog.style.setStyle(G__48339_49041,G__48340_49042,G__48341_49043);


var G__49045 = cljs.core.next(seq__48300__$1);
var G__49046 = null;
var G__49047 = (0);
var G__49048 = (0);
seq__48300 = G__49045;
chunk__48301 = G__49046;
count__48302 = G__49047;
i__48303 = G__49048;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48347_49049 = key;
var G__48347_49050__$1 = (((G__48347_49049 instanceof cljs.core.Keyword))?G__48347_49049.fqn:null);
switch (G__48347_49050__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_49058 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_49058,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_49058,"aria-");
}
})())){
el.setAttribute(ks_49058,value);
} else {
(el[ks_49058] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__48371 = shadow.dom.dom_node(el);
var G__48372 = cls;
return goog.dom.classlist.contains(G__48371,G__48372);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48386){
var map__48387 = p__48386;
var map__48387__$1 = (((((!((map__48387 == null))))?(((((map__48387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48387):map__48387);
var props = map__48387__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48387__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48390 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48390,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48390,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48390,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48397 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48397,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48397;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48400 = arguments.length;
switch (G__48400) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48409){
var vec__48410 = p__48409;
var seq__48411 = cljs.core.seq(vec__48410);
var first__48412 = cljs.core.first(seq__48411);
var seq__48411__$1 = cljs.core.next(seq__48411);
var nn = first__48412;
var first__48412__$1 = cljs.core.first(seq__48411__$1);
var seq__48411__$2 = cljs.core.next(seq__48411__$1);
var np = first__48412__$1;
var nc = seq__48411__$2;
var node = vec__48410;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48416 = nn;
var G__48417 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48416,G__48417) : create_fn.call(null,G__48416,G__48417));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48419 = nn;
var G__48420 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48419,G__48420) : create_fn.call(null,G__48419,G__48420));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48424 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48424,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48424,(1),null);
var seq__48428_49075 = cljs.core.seq(node_children);
var chunk__48429_49076 = null;
var count__48430_49077 = (0);
var i__48431_49078 = (0);
while(true){
if((i__48431_49078 < count__48430_49077)){
var child_struct_49079 = chunk__48429_49076.cljs$core$IIndexed$_nth$arity$2(null,i__48431_49078);
var children_49080 = shadow.dom.dom_node(child_struct_49079);
if(cljs.core.seq_QMARK_(children_49080)){
var seq__48475_49081 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49080));
var chunk__48477_49082 = null;
var count__48478_49083 = (0);
var i__48479_49084 = (0);
while(true){
if((i__48479_49084 < count__48478_49083)){
var child_49086 = chunk__48477_49082.cljs$core$IIndexed$_nth$arity$2(null,i__48479_49084);
if(cljs.core.truth_(child_49086)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49086);


var G__49089 = seq__48475_49081;
var G__49090 = chunk__48477_49082;
var G__49091 = count__48478_49083;
var G__49092 = (i__48479_49084 + (1));
seq__48475_49081 = G__49089;
chunk__48477_49082 = G__49090;
count__48478_49083 = G__49091;
i__48479_49084 = G__49092;
continue;
} else {
var G__49093 = seq__48475_49081;
var G__49094 = chunk__48477_49082;
var G__49095 = count__48478_49083;
var G__49096 = (i__48479_49084 + (1));
seq__48475_49081 = G__49093;
chunk__48477_49082 = G__49094;
count__48478_49083 = G__49095;
i__48479_49084 = G__49096;
continue;
}
} else {
var temp__5720__auto___49097 = cljs.core.seq(seq__48475_49081);
if(temp__5720__auto___49097){
var seq__48475_49098__$1 = temp__5720__auto___49097;
if(cljs.core.chunked_seq_QMARK_(seq__48475_49098__$1)){
var c__4550__auto___49099 = cljs.core.chunk_first(seq__48475_49098__$1);
var G__49100 = cljs.core.chunk_rest(seq__48475_49098__$1);
var G__49101 = c__4550__auto___49099;
var G__49102 = cljs.core.count(c__4550__auto___49099);
var G__49103 = (0);
seq__48475_49081 = G__49100;
chunk__48477_49082 = G__49101;
count__48478_49083 = G__49102;
i__48479_49084 = G__49103;
continue;
} else {
var child_49104 = cljs.core.first(seq__48475_49098__$1);
if(cljs.core.truth_(child_49104)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49104);


var G__49106 = cljs.core.next(seq__48475_49098__$1);
var G__49107 = null;
var G__49108 = (0);
var G__49109 = (0);
seq__48475_49081 = G__49106;
chunk__48477_49082 = G__49107;
count__48478_49083 = G__49108;
i__48479_49084 = G__49109;
continue;
} else {
var G__49112 = cljs.core.next(seq__48475_49098__$1);
var G__49113 = null;
var G__49114 = (0);
var G__49115 = (0);
seq__48475_49081 = G__49112;
chunk__48477_49082 = G__49113;
count__48478_49083 = G__49114;
i__48479_49084 = G__49115;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49080);
}


var G__49116 = seq__48428_49075;
var G__49117 = chunk__48429_49076;
var G__49118 = count__48430_49077;
var G__49119 = (i__48431_49078 + (1));
seq__48428_49075 = G__49116;
chunk__48429_49076 = G__49117;
count__48430_49077 = G__49118;
i__48431_49078 = G__49119;
continue;
} else {
var temp__5720__auto___49120 = cljs.core.seq(seq__48428_49075);
if(temp__5720__auto___49120){
var seq__48428_49121__$1 = temp__5720__auto___49120;
if(cljs.core.chunked_seq_QMARK_(seq__48428_49121__$1)){
var c__4550__auto___49123 = cljs.core.chunk_first(seq__48428_49121__$1);
var G__49124 = cljs.core.chunk_rest(seq__48428_49121__$1);
var G__49125 = c__4550__auto___49123;
var G__49126 = cljs.core.count(c__4550__auto___49123);
var G__49127 = (0);
seq__48428_49075 = G__49124;
chunk__48429_49076 = G__49125;
count__48430_49077 = G__49126;
i__48431_49078 = G__49127;
continue;
} else {
var child_struct_49129 = cljs.core.first(seq__48428_49121__$1);
var children_49130 = shadow.dom.dom_node(child_struct_49129);
if(cljs.core.seq_QMARK_(children_49130)){
var seq__48501_49132 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49130));
var chunk__48503_49133 = null;
var count__48504_49134 = (0);
var i__48505_49135 = (0);
while(true){
if((i__48505_49135 < count__48504_49134)){
var child_49136 = chunk__48503_49133.cljs$core$IIndexed$_nth$arity$2(null,i__48505_49135);
if(cljs.core.truth_(child_49136)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49136);


var G__49137 = seq__48501_49132;
var G__49138 = chunk__48503_49133;
var G__49139 = count__48504_49134;
var G__49140 = (i__48505_49135 + (1));
seq__48501_49132 = G__49137;
chunk__48503_49133 = G__49138;
count__48504_49134 = G__49139;
i__48505_49135 = G__49140;
continue;
} else {
var G__49141 = seq__48501_49132;
var G__49142 = chunk__48503_49133;
var G__49143 = count__48504_49134;
var G__49144 = (i__48505_49135 + (1));
seq__48501_49132 = G__49141;
chunk__48503_49133 = G__49142;
count__48504_49134 = G__49143;
i__48505_49135 = G__49144;
continue;
}
} else {
var temp__5720__auto___49145__$1 = cljs.core.seq(seq__48501_49132);
if(temp__5720__auto___49145__$1){
var seq__48501_49146__$1 = temp__5720__auto___49145__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48501_49146__$1)){
var c__4550__auto___49147 = cljs.core.chunk_first(seq__48501_49146__$1);
var G__49148 = cljs.core.chunk_rest(seq__48501_49146__$1);
var G__49149 = c__4550__auto___49147;
var G__49150 = cljs.core.count(c__4550__auto___49147);
var G__49151 = (0);
seq__48501_49132 = G__49148;
chunk__48503_49133 = G__49149;
count__48504_49134 = G__49150;
i__48505_49135 = G__49151;
continue;
} else {
var child_49152 = cljs.core.first(seq__48501_49146__$1);
if(cljs.core.truth_(child_49152)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49152);


var G__49153 = cljs.core.next(seq__48501_49146__$1);
var G__49154 = null;
var G__49155 = (0);
var G__49156 = (0);
seq__48501_49132 = G__49153;
chunk__48503_49133 = G__49154;
count__48504_49134 = G__49155;
i__48505_49135 = G__49156;
continue;
} else {
var G__49157 = cljs.core.next(seq__48501_49146__$1);
var G__49158 = null;
var G__49159 = (0);
var G__49160 = (0);
seq__48501_49132 = G__49157;
chunk__48503_49133 = G__49158;
count__48504_49134 = G__49159;
i__48505_49135 = G__49160;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49130);
}


var G__49163 = cljs.core.next(seq__48428_49121__$1);
var G__49164 = null;
var G__49165 = (0);
var G__49166 = (0);
seq__48428_49075 = G__49163;
chunk__48429_49076 = G__49164;
count__48430_49077 = G__49165;
i__48431_49078 = G__49166;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__48544 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48544);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48547 = cljs.core.seq(node);
var chunk__48548 = null;
var count__48549 = (0);
var i__48550 = (0);
while(true){
if((i__48550 < count__48549)){
var n = chunk__48548.cljs$core$IIndexed$_nth$arity$2(null,i__48550);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49172 = seq__48547;
var G__49173 = chunk__48548;
var G__49174 = count__48549;
var G__49175 = (i__48550 + (1));
seq__48547 = G__49172;
chunk__48548 = G__49173;
count__48549 = G__49174;
i__48550 = G__49175;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48547);
if(temp__5720__auto__){
var seq__48547__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48547__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48547__$1);
var G__49180 = cljs.core.chunk_rest(seq__48547__$1);
var G__49181 = c__4550__auto__;
var G__49182 = cljs.core.count(c__4550__auto__);
var G__49183 = (0);
seq__48547 = G__49180;
chunk__48548 = G__49181;
count__48549 = G__49182;
i__48550 = G__49183;
continue;
} else {
var n = cljs.core.first(seq__48547__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49184 = cljs.core.next(seq__48547__$1);
var G__49185 = null;
var G__49186 = (0);
var G__49187 = (0);
seq__48547 = G__49184;
chunk__48548 = G__49185;
count__48549 = G__49186;
i__48550 = G__49187;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__48557 = shadow.dom.dom_node(new$);
var G__48558 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48557,G__48558);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48560 = arguments.length;
switch (G__48560) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__48562 = arguments.length;
switch (G__48562) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__48570 = arguments.length;
switch (G__48570) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49195 = arguments.length;
var i__4731__auto___49196 = (0);
while(true){
if((i__4731__auto___49196 < len__4730__auto___49195)){
args__4736__auto__.push((arguments[i__4731__auto___49196]));

var G__49200 = (i__4731__auto___49196 + (1));
i__4731__auto___49196 = G__49200;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__48572_49201 = cljs.core.seq(nodes);
var chunk__48573_49202 = null;
var count__48574_49203 = (0);
var i__48575_49204 = (0);
while(true){
if((i__48575_49204 < count__48574_49203)){
var node_49205 = chunk__48573_49202.cljs$core$IIndexed$_nth$arity$2(null,i__48575_49204);
fragment.appendChild(shadow.dom._to_dom(node_49205));


var G__49206 = seq__48572_49201;
var G__49207 = chunk__48573_49202;
var G__49208 = count__48574_49203;
var G__49209 = (i__48575_49204 + (1));
seq__48572_49201 = G__49206;
chunk__48573_49202 = G__49207;
count__48574_49203 = G__49208;
i__48575_49204 = G__49209;
continue;
} else {
var temp__5720__auto___49210 = cljs.core.seq(seq__48572_49201);
if(temp__5720__auto___49210){
var seq__48572_49211__$1 = temp__5720__auto___49210;
if(cljs.core.chunked_seq_QMARK_(seq__48572_49211__$1)){
var c__4550__auto___49212 = cljs.core.chunk_first(seq__48572_49211__$1);
var G__49213 = cljs.core.chunk_rest(seq__48572_49211__$1);
var G__49214 = c__4550__auto___49212;
var G__49215 = cljs.core.count(c__4550__auto___49212);
var G__49216 = (0);
seq__48572_49201 = G__49213;
chunk__48573_49202 = G__49214;
count__48574_49203 = G__49215;
i__48575_49204 = G__49216;
continue;
} else {
var node_49217 = cljs.core.first(seq__48572_49211__$1);
fragment.appendChild(shadow.dom._to_dom(node_49217));


var G__49218 = cljs.core.next(seq__48572_49211__$1);
var G__49219 = null;
var G__49220 = (0);
var G__49221 = (0);
seq__48572_49201 = G__49218;
chunk__48573_49202 = G__49219;
count__48574_49203 = G__49220;
i__48575_49204 = G__49221;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq48571){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48571));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48585_49225 = cljs.core.seq(scripts);
var chunk__48586_49226 = null;
var count__48587_49227 = (0);
var i__48588_49228 = (0);
while(true){
if((i__48588_49228 < count__48587_49227)){
var vec__48601_49229 = chunk__48586_49226.cljs$core$IIndexed$_nth$arity$2(null,i__48588_49228);
var script_tag_49230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48601_49229,(0),null);
var script_body_49231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48601_49229,(1),null);
eval(script_body_49231);


var G__49232 = seq__48585_49225;
var G__49233 = chunk__48586_49226;
var G__49234 = count__48587_49227;
var G__49235 = (i__48588_49228 + (1));
seq__48585_49225 = G__49232;
chunk__48586_49226 = G__49233;
count__48587_49227 = G__49234;
i__48588_49228 = G__49235;
continue;
} else {
var temp__5720__auto___49236 = cljs.core.seq(seq__48585_49225);
if(temp__5720__auto___49236){
var seq__48585_49237__$1 = temp__5720__auto___49236;
if(cljs.core.chunked_seq_QMARK_(seq__48585_49237__$1)){
var c__4550__auto___49238 = cljs.core.chunk_first(seq__48585_49237__$1);
var G__49239 = cljs.core.chunk_rest(seq__48585_49237__$1);
var G__49240 = c__4550__auto___49238;
var G__49241 = cljs.core.count(c__4550__auto___49238);
var G__49242 = (0);
seq__48585_49225 = G__49239;
chunk__48586_49226 = G__49240;
count__48587_49227 = G__49241;
i__48588_49228 = G__49242;
continue;
} else {
var vec__48608_49243 = cljs.core.first(seq__48585_49237__$1);
var script_tag_49244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48608_49243,(0),null);
var script_body_49245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48608_49243,(1),null);
eval(script_body_49245);


var G__49246 = cljs.core.next(seq__48585_49237__$1);
var G__49247 = null;
var G__49248 = (0);
var G__49249 = (0);
seq__48585_49225 = G__49246;
chunk__48586_49226 = G__49247;
count__48587_49227 = G__49248;
i__48588_49228 = G__49249;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__48613){
var vec__48614 = p__48613;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48614,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48614,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__48622 = shadow.dom.dom_node(el);
var G__48623 = cls;
return goog.dom.getAncestorByClass(G__48622,G__48623);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48627 = arguments.length;
switch (G__48627) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__48631 = shadow.dom.dom_node(el);
var G__48632 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48631,G__48632);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48634 = shadow.dom.dom_node(el);
var G__48635 = cljs.core.name(tag);
var G__48636 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48634,G__48635,G__48636);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48639 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48639);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48643 = shadow.dom.dom_node(dom);
var G__48644 = value;
return goog.dom.forms.setValue(G__48643,G__48644);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48656 = cljs.core.seq(style_keys);
var chunk__48658 = null;
var count__48659 = (0);
var i__48660 = (0);
while(true){
if((i__48660 < count__48659)){
var it = chunk__48658.cljs$core$IIndexed$_nth$arity$2(null,i__48660);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49254 = seq__48656;
var G__49255 = chunk__48658;
var G__49256 = count__48659;
var G__49257 = (i__48660 + (1));
seq__48656 = G__49254;
chunk__48658 = G__49255;
count__48659 = G__49256;
i__48660 = G__49257;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__48656);
if(temp__5720__auto__){
var seq__48656__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48656__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48656__$1);
var G__49260 = cljs.core.chunk_rest(seq__48656__$1);
var G__49261 = c__4550__auto__;
var G__49262 = cljs.core.count(c__4550__auto__);
var G__49263 = (0);
seq__48656 = G__49260;
chunk__48658 = G__49261;
count__48659 = G__49262;
i__48660 = G__49263;
continue;
} else {
var it = cljs.core.first(seq__48656__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49267 = cljs.core.next(seq__48656__$1);
var G__49268 = null;
var G__49269 = (0);
var G__49270 = (0);
seq__48656 = G__49267;
chunk__48658 = G__49268;
count__48659 = G__49269;
i__48660 = G__49270;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48668,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48676 = k48668;
var G__48676__$1 = (((G__48676 instanceof cljs.core.Keyword))?G__48676.fqn:null);
switch (G__48676__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48668,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48678){
var vec__48679 = p__48678;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48679,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48679,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48667){
var self__ = this;
var G__48667__$1 = this;
return (new cljs.core.RecordIter((0),G__48667__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__48684 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48684(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48669,other48670){
var self__ = this;
var this48669__$1 = this;
return (((!((other48670 == null)))) && ((this48669__$1.constructor === other48670.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48669__$1.x,other48670.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48669__$1.y,other48670.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48669__$1.__extmap,other48670.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48667){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48685 = cljs.core.keyword_identical_QMARK_;
var expr__48686 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48688 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48689 = expr__48686;
return (pred__48685.cljs$core$IFn$_invoke$arity$2 ? pred__48685.cljs$core$IFn$_invoke$arity$2(G__48688,G__48689) : pred__48685.call(null,G__48688,G__48689));
})())){
return (new shadow.dom.Coordinate(G__48667,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48690 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48691 = expr__48686;
return (pred__48685.cljs$core$IFn$_invoke$arity$2 ? pred__48685.cljs$core$IFn$_invoke$arity$2(G__48690,G__48691) : pred__48685.call(null,G__48690,G__48691));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48667,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48667),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48667){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48667,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48673){
var extmap__4424__auto__ = (function (){var G__48695 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48673,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48673)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48695);
} else {
return G__48695;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48673),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48673),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48699 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48699);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48706 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48706);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48709 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48709);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48713,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48723 = k48713;
var G__48723__$1 = (((G__48723 instanceof cljs.core.Keyword))?G__48723.fqn:null);
switch (G__48723__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48713,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48725){
var vec__48727 = p__48725;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48727,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48727,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48712){
var self__ = this;
var G__48712__$1 = this;
return (new cljs.core.RecordIter((0),G__48712__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__48740 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48740(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48714,other48715){
var self__ = this;
var this48714__$1 = this;
return (((!((other48715 == null)))) && ((this48714__$1.constructor === other48715.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48714__$1.w,other48715.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48714__$1.h,other48715.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48714__$1.__extmap,other48715.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48712){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48742 = cljs.core.keyword_identical_QMARK_;
var expr__48743 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48745 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48746 = expr__48743;
return (pred__48742.cljs$core$IFn$_invoke$arity$2 ? pred__48742.cljs$core$IFn$_invoke$arity$2(G__48745,G__48746) : pred__48742.call(null,G__48745,G__48746));
})())){
return (new shadow.dom.Size(G__48712,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48747 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48748 = expr__48743;
return (pred__48742.cljs$core$IFn$_invoke$arity$2 ? pred__48742.cljs$core$IFn$_invoke$arity$2(G__48747,G__48748) : pred__48742.call(null,G__48747,G__48748));
})())){
return (new shadow.dom.Size(self__.w,G__48712,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48712),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48712){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48712,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48718){
var extmap__4424__auto__ = (function (){var G__48757 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48718,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48718)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48757);
} else {
return G__48757;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48718),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48718),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48760 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48760);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__49344 = (i + (1));
var G__49345 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49344;
ret = G__49345;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48778){
var vec__48779 = p__48778;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48779,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48779,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48785 = arguments.length;
switch (G__48785) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48789_49353 = new_node;
var G__48790_49354 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48789_49353,G__48790_49354);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48793_49355 = new_node;
var G__48794_49356 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48793_49355,G__48794_49356);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49357 = ps;
var G__49358 = (i + (1));
el__$1 = G__49357;
i = G__49358;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48798 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48798);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__48802 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48802);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48805 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48805);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48809 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48809,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48809,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48809,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48812_49370 = cljs.core.seq(props);
var chunk__48813_49371 = null;
var count__48814_49372 = (0);
var i__48815_49373 = (0);
while(true){
if((i__48815_49373 < count__48814_49372)){
var vec__48826_49374 = chunk__48813_49371.cljs$core$IIndexed$_nth$arity$2(null,i__48815_49373);
var k_49375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48826_49374,(0),null);
var v_49376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48826_49374,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_49375);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49375),v_49376);


var G__49377 = seq__48812_49370;
var G__49378 = chunk__48813_49371;
var G__49379 = count__48814_49372;
var G__49380 = (i__48815_49373 + (1));
seq__48812_49370 = G__49377;
chunk__48813_49371 = G__49378;
count__48814_49372 = G__49379;
i__48815_49373 = G__49380;
continue;
} else {
var temp__5720__auto___49381 = cljs.core.seq(seq__48812_49370);
if(temp__5720__auto___49381){
var seq__48812_49382__$1 = temp__5720__auto___49381;
if(cljs.core.chunked_seq_QMARK_(seq__48812_49382__$1)){
var c__4550__auto___49383 = cljs.core.chunk_first(seq__48812_49382__$1);
var G__49385 = cljs.core.chunk_rest(seq__48812_49382__$1);
var G__49386 = c__4550__auto___49383;
var G__49387 = cljs.core.count(c__4550__auto___49383);
var G__49388 = (0);
seq__48812_49370 = G__49385;
chunk__48813_49371 = G__49386;
count__48814_49372 = G__49387;
i__48815_49373 = G__49388;
continue;
} else {
var vec__48830_49389 = cljs.core.first(seq__48812_49382__$1);
var k_49390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48830_49389,(0),null);
var v_49391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48830_49389,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_49390);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49390),v_49391);


var G__49392 = cljs.core.next(seq__48812_49382__$1);
var G__49393 = null;
var G__49394 = (0);
var G__49395 = (0);
seq__48812_49370 = G__49392;
chunk__48813_49371 = G__49393;
count__48814_49372 = G__49394;
i__48815_49373 = G__49395;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48840 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48840,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48840,(1),null);
var seq__48843_49396 = cljs.core.seq(node_children);
var chunk__48846_49397 = null;
var count__48847_49398 = (0);
var i__48848_49399 = (0);
while(true){
if((i__48848_49399 < count__48847_49398)){
var child_struct_49400 = chunk__48846_49397.cljs$core$IIndexed$_nth$arity$2(null,i__48848_49399);
if((!((child_struct_49400 == null)))){
if(typeof child_struct_49400 === 'string'){
var text_49404 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49404),child_struct_49400].join(''));
} else {
var children_49407 = shadow.dom.svg_node(child_struct_49400);
if(cljs.core.seq_QMARK_(children_49407)){
var seq__48867_49410 = cljs.core.seq(children_49407);
var chunk__48869_49411 = null;
var count__48870_49412 = (0);
var i__48871_49413 = (0);
while(true){
if((i__48871_49413 < count__48870_49412)){
var child_49414 = chunk__48869_49411.cljs$core$IIndexed$_nth$arity$2(null,i__48871_49413);
if(cljs.core.truth_(child_49414)){
node.appendChild(child_49414);


var G__49415 = seq__48867_49410;
var G__49416 = chunk__48869_49411;
var G__49417 = count__48870_49412;
var G__49418 = (i__48871_49413 + (1));
seq__48867_49410 = G__49415;
chunk__48869_49411 = G__49416;
count__48870_49412 = G__49417;
i__48871_49413 = G__49418;
continue;
} else {
var G__49419 = seq__48867_49410;
var G__49420 = chunk__48869_49411;
var G__49421 = count__48870_49412;
var G__49422 = (i__48871_49413 + (1));
seq__48867_49410 = G__49419;
chunk__48869_49411 = G__49420;
count__48870_49412 = G__49421;
i__48871_49413 = G__49422;
continue;
}
} else {
var temp__5720__auto___49423 = cljs.core.seq(seq__48867_49410);
if(temp__5720__auto___49423){
var seq__48867_49424__$1 = temp__5720__auto___49423;
if(cljs.core.chunked_seq_QMARK_(seq__48867_49424__$1)){
var c__4550__auto___49425 = cljs.core.chunk_first(seq__48867_49424__$1);
var G__49426 = cljs.core.chunk_rest(seq__48867_49424__$1);
var G__49427 = c__4550__auto___49425;
var G__49428 = cljs.core.count(c__4550__auto___49425);
var G__49429 = (0);
seq__48867_49410 = G__49426;
chunk__48869_49411 = G__49427;
count__48870_49412 = G__49428;
i__48871_49413 = G__49429;
continue;
} else {
var child_49430 = cljs.core.first(seq__48867_49424__$1);
if(cljs.core.truth_(child_49430)){
node.appendChild(child_49430);


var G__49431 = cljs.core.next(seq__48867_49424__$1);
var G__49432 = null;
var G__49433 = (0);
var G__49434 = (0);
seq__48867_49410 = G__49431;
chunk__48869_49411 = G__49432;
count__48870_49412 = G__49433;
i__48871_49413 = G__49434;
continue;
} else {
var G__49435 = cljs.core.next(seq__48867_49424__$1);
var G__49436 = null;
var G__49437 = (0);
var G__49438 = (0);
seq__48867_49410 = G__49435;
chunk__48869_49411 = G__49436;
count__48870_49412 = G__49437;
i__48871_49413 = G__49438;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49407);
}
}


var G__49439 = seq__48843_49396;
var G__49440 = chunk__48846_49397;
var G__49441 = count__48847_49398;
var G__49442 = (i__48848_49399 + (1));
seq__48843_49396 = G__49439;
chunk__48846_49397 = G__49440;
count__48847_49398 = G__49441;
i__48848_49399 = G__49442;
continue;
} else {
var G__49443 = seq__48843_49396;
var G__49444 = chunk__48846_49397;
var G__49445 = count__48847_49398;
var G__49446 = (i__48848_49399 + (1));
seq__48843_49396 = G__49443;
chunk__48846_49397 = G__49444;
count__48847_49398 = G__49445;
i__48848_49399 = G__49446;
continue;
}
} else {
var temp__5720__auto___49447 = cljs.core.seq(seq__48843_49396);
if(temp__5720__auto___49447){
var seq__48843_49448__$1 = temp__5720__auto___49447;
if(cljs.core.chunked_seq_QMARK_(seq__48843_49448__$1)){
var c__4550__auto___49449 = cljs.core.chunk_first(seq__48843_49448__$1);
var G__49450 = cljs.core.chunk_rest(seq__48843_49448__$1);
var G__49451 = c__4550__auto___49449;
var G__49452 = cljs.core.count(c__4550__auto___49449);
var G__49453 = (0);
seq__48843_49396 = G__49450;
chunk__48846_49397 = G__49451;
count__48847_49398 = G__49452;
i__48848_49399 = G__49453;
continue;
} else {
var child_struct_49454 = cljs.core.first(seq__48843_49448__$1);
if((!((child_struct_49454 == null)))){
if(typeof child_struct_49454 === 'string'){
var text_49455 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49455),child_struct_49454].join(''));
} else {
var children_49456 = shadow.dom.svg_node(child_struct_49454);
if(cljs.core.seq_QMARK_(children_49456)){
var seq__48877_49458 = cljs.core.seq(children_49456);
var chunk__48879_49459 = null;
var count__48880_49460 = (0);
var i__48881_49461 = (0);
while(true){
if((i__48881_49461 < count__48880_49460)){
var child_49462 = chunk__48879_49459.cljs$core$IIndexed$_nth$arity$2(null,i__48881_49461);
if(cljs.core.truth_(child_49462)){
node.appendChild(child_49462);


var G__49463 = seq__48877_49458;
var G__49464 = chunk__48879_49459;
var G__49465 = count__48880_49460;
var G__49466 = (i__48881_49461 + (1));
seq__48877_49458 = G__49463;
chunk__48879_49459 = G__49464;
count__48880_49460 = G__49465;
i__48881_49461 = G__49466;
continue;
} else {
var G__49467 = seq__48877_49458;
var G__49468 = chunk__48879_49459;
var G__49469 = count__48880_49460;
var G__49470 = (i__48881_49461 + (1));
seq__48877_49458 = G__49467;
chunk__48879_49459 = G__49468;
count__48880_49460 = G__49469;
i__48881_49461 = G__49470;
continue;
}
} else {
var temp__5720__auto___49471__$1 = cljs.core.seq(seq__48877_49458);
if(temp__5720__auto___49471__$1){
var seq__48877_49472__$1 = temp__5720__auto___49471__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48877_49472__$1)){
var c__4550__auto___49473 = cljs.core.chunk_first(seq__48877_49472__$1);
var G__49474 = cljs.core.chunk_rest(seq__48877_49472__$1);
var G__49475 = c__4550__auto___49473;
var G__49476 = cljs.core.count(c__4550__auto___49473);
var G__49477 = (0);
seq__48877_49458 = G__49474;
chunk__48879_49459 = G__49475;
count__48880_49460 = G__49476;
i__48881_49461 = G__49477;
continue;
} else {
var child_49479 = cljs.core.first(seq__48877_49472__$1);
if(cljs.core.truth_(child_49479)){
node.appendChild(child_49479);


var G__49480 = cljs.core.next(seq__48877_49472__$1);
var G__49481 = null;
var G__49482 = (0);
var G__49483 = (0);
seq__48877_49458 = G__49480;
chunk__48879_49459 = G__49481;
count__48880_49460 = G__49482;
i__48881_49461 = G__49483;
continue;
} else {
var G__49484 = cljs.core.next(seq__48877_49472__$1);
var G__49485 = null;
var G__49486 = (0);
var G__49487 = (0);
seq__48877_49458 = G__49484;
chunk__48879_49459 = G__49485;
count__48880_49460 = G__49486;
i__48881_49461 = G__49487;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49456);
}
}


var G__49488 = cljs.core.next(seq__48843_49448__$1);
var G__49489 = null;
var G__49490 = (0);
var G__49491 = (0);
seq__48843_49396 = G__49488;
chunk__48846_49397 = G__49489;
count__48847_49398 = G__49490;
i__48848_49399 = G__49491;
continue;
} else {
var G__49492 = cljs.core.next(seq__48843_49448__$1);
var G__49493 = null;
var G__49494 = (0);
var G__49495 = (0);
seq__48843_49396 = G__49492;
chunk__48846_49397 = G__49493;
count__48847_49398 = G__49494;
i__48848_49399 = G__49495;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__48895_49496 = shadow.dom._to_svg;
var G__48896_49497 = "string";
var G__48897_49498 = ((function (G__48895_49496,G__48896_49497){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__48895_49496,G__48896_49497))
;
goog.object.set(G__48895_49496,G__48896_49497,G__48897_49498);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__48902_49499 = shadow.dom._to_svg;
var G__48903_49500 = "null";
var G__48904_49501 = ((function (G__48902_49499,G__48903_49500){
return (function (_){
return null;
});})(G__48902_49499,G__48903_49500))
;
goog.object.set(G__48902_49499,G__48903_49500,G__48904_49501);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49504 = arguments.length;
var i__4731__auto___49506 = (0);
while(true){
if((i__4731__auto___49506 < len__4730__auto___49504)){
args__4736__auto__.push((arguments[i__4731__auto___49506]));

var G__49507 = (i__4731__auto___49506 + (1));
i__4731__auto___49506 = G__49507;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq48907){
var G__48908 = cljs.core.first(seq48907);
var seq48907__$1 = cljs.core.next(seq48907);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48908,seq48907__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48913 = arguments.length;
switch (G__48913) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__48921_49513 = shadow.dom.dom_node(el);
var G__48922_49514 = cljs.core.name(event);
var G__48923_49515 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48921_49513,G__48922_49514,G__48923_49515) : shadow.dom.dom_listen.call(null,G__48921_49513,G__48922_49514,G__48923_49515));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__46524__auto___49516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___49516,buf,chan,event_fn){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___49516,buf,chan,event_fn){
return (function (state_48929){
var state_val_48930 = (state_48929[(1)]);
if((state_val_48930 === (1))){
var state_48929__$1 = state_48929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48929__$1,(2),once_or_cleanup);
} else {
if((state_val_48930 === (2))){
var inst_48926 = (state_48929[(2)]);
var inst_48927 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48929__$1 = (function (){var statearr_48934 = state_48929;
(statearr_48934[(7)] = inst_48926);

return statearr_48934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48929__$1,inst_48927);
} else {
return null;
}
}
});})(c__46524__auto___49516,buf,chan,event_fn))
;
return ((function (switch__46423__auto__,c__46524__auto___49516,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__46424__auto__ = null;
var shadow$dom$state_machine__46424__auto____0 = (function (){
var statearr_48936 = [null,null,null,null,null,null,null,null];
(statearr_48936[(0)] = shadow$dom$state_machine__46424__auto__);

(statearr_48936[(1)] = (1));

return statearr_48936;
});
var shadow$dom$state_machine__46424__auto____1 = (function (state_48929){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_48929);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e48939){if((e48939 instanceof Object)){
var ex__46427__auto__ = e48939;
var statearr_48942_49526 = state_48929;
(statearr_48942_49526[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48939;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49527 = state_48929;
state_48929 = G__49527;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
shadow$dom$state_machine__46424__auto__ = function(state_48929){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46424__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46424__auto____1.call(this,state_48929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46424__auto____0;
shadow$dom$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46424__auto____1;
return shadow$dom$state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___49516,buf,chan,event_fn))
})();
var state__46526__auto__ = (function (){var statearr_48946 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_48946[(6)] = c__46524__auto___49516);

return statearr_48946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___49516,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
