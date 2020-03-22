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
return cljs.core.cons((coll[idx]),(function (){var G__46005 = coll;
var G__46006 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46005,G__46006) : shadow.dom.lazy_native_coll_seq.call(null,G__46005,G__46006));
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
var G__46061 = arguments.length;
switch (G__46061) {
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
var G__46081 = arguments.length;
switch (G__46081) {
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
var G__46096 = arguments.length;
switch (G__46096) {
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
var G__46108 = arguments.length;
switch (G__46108) {
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
var G__46129 = arguments.length;
switch (G__46129) {
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
var G__46132 = document;
var G__46133 = shadow.dom.dom_node(el);
return goog.dom.contains(G__46132,G__46133);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__46135 = shadow.dom.dom_node(parent);
var G__46136 = shadow.dom.dom_node(el);
return goog.dom.contains(G__46135,G__46136);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__46139 = shadow.dom.dom_node(el);
var G__46140 = cls;
return goog.dom.classlist.add(G__46139,G__46140);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__46141 = shadow.dom.dom_node(el);
var G__46142 = cls;
return goog.dom.classlist.remove(G__46141,G__46142);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46145 = arguments.length;
switch (G__46145) {
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
var G__46147 = shadow.dom.dom_node(el);
var G__46148 = cls;
return goog.dom.classlist.toggle(G__46147,G__46148);
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
}catch (e46159){if((e46159 instanceof Object)){
var e = e46159;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46159;

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
var seq__46171 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46172 = null;
var count__46173 = (0);
var i__46174 = (0);
while(true){
if((i__46174 < count__46173)){
var el = chunk__46172.cljs$core$IIndexed$_nth$arity$2(null,i__46174);
var handler_46957__$1 = ((function (seq__46171,chunk__46172,count__46173,i__46174,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46171,chunk__46172,count__46173,i__46174,el))
;
var G__46192_46958 = el;
var G__46193_46959 = cljs.core.name(ev);
var G__46194_46960 = handler_46957__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__46192_46958,G__46193_46959,G__46194_46960) : shadow.dom.dom_listen.call(null,G__46192_46958,G__46193_46959,G__46194_46960));


var G__46961 = seq__46171;
var G__46962 = chunk__46172;
var G__46963 = count__46173;
var G__46964 = (i__46174 + (1));
seq__46171 = G__46961;
chunk__46172 = G__46962;
count__46173 = G__46963;
i__46174 = G__46964;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46171);
if(temp__5720__auto__){
var seq__46171__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46171__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46171__$1);
var G__46965 = cljs.core.chunk_rest(seq__46171__$1);
var G__46966 = c__4550__auto__;
var G__46967 = cljs.core.count(c__4550__auto__);
var G__46968 = (0);
seq__46171 = G__46965;
chunk__46172 = G__46966;
count__46173 = G__46967;
i__46174 = G__46968;
continue;
} else {
var el = cljs.core.first(seq__46171__$1);
var handler_46969__$1 = ((function (seq__46171,chunk__46172,count__46173,i__46174,el,seq__46171__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46171,chunk__46172,count__46173,i__46174,el,seq__46171__$1,temp__5720__auto__))
;
var G__46199_46970 = el;
var G__46200_46971 = cljs.core.name(ev);
var G__46201_46972 = handler_46969__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__46199_46970,G__46200_46971,G__46201_46972) : shadow.dom.dom_listen.call(null,G__46199_46970,G__46200_46971,G__46201_46972));


var G__46973 = cljs.core.next(seq__46171__$1);
var G__46974 = null;
var G__46975 = (0);
var G__46976 = (0);
seq__46171 = G__46973;
chunk__46172 = G__46974;
count__46173 = G__46975;
i__46174 = G__46976;
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
var G__46221 = arguments.length;
switch (G__46221) {
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
var G__46228 = shadow.dom.dom_node(el);
var G__46229 = cljs.core.name(ev);
var G__46230 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__46228,G__46229,G__46230) : shadow.dom.dom_listen.call(null,G__46228,G__46229,G__46230));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__46232 = shadow.dom.dom_node(el);
var G__46233 = cljs.core.name(ev);
var G__46234 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__46232,G__46233,G__46234) : shadow.dom.dom_listen_remove.call(null,G__46232,G__46233,G__46234));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__46237 = cljs.core.seq(events);
var chunk__46238 = null;
var count__46239 = (0);
var i__46240 = (0);
while(true){
if((i__46240 < count__46239)){
var vec__46252 = chunk__46238.cljs$core$IIndexed$_nth$arity$2(null,i__46240);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46252,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46252,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46980 = seq__46237;
var G__46981 = chunk__46238;
var G__46982 = count__46239;
var G__46983 = (i__46240 + (1));
seq__46237 = G__46980;
chunk__46238 = G__46981;
count__46239 = G__46982;
i__46240 = G__46983;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46237);
if(temp__5720__auto__){
var seq__46237__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46237__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46237__$1);
var G__46984 = cljs.core.chunk_rest(seq__46237__$1);
var G__46985 = c__4550__auto__;
var G__46986 = cljs.core.count(c__4550__auto__);
var G__46987 = (0);
seq__46237 = G__46984;
chunk__46238 = G__46985;
count__46239 = G__46986;
i__46240 = G__46987;
continue;
} else {
var vec__46259 = cljs.core.first(seq__46237__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46259,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46259,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46988 = cljs.core.next(seq__46237__$1);
var G__46989 = null;
var G__46990 = (0);
var G__46991 = (0);
seq__46237 = G__46988;
chunk__46238 = G__46989;
count__46239 = G__46990;
i__46240 = G__46991;
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
var seq__46265 = cljs.core.seq(styles);
var chunk__46266 = null;
var count__46267 = (0);
var i__46268 = (0);
while(true){
if((i__46268 < count__46267)){
var vec__46288 = chunk__46266.cljs$core$IIndexed$_nth$arity$2(null,i__46268);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46288,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46288,(1),null);
var G__46291_46992 = dom;
var G__46292_46993 = cljs.core.name(k);
var G__46293_46994 = (((v == null))?"":v);
goog.style.setStyle(G__46291_46992,G__46292_46993,G__46293_46994);


var G__46995 = seq__46265;
var G__46996 = chunk__46266;
var G__46997 = count__46267;
var G__46998 = (i__46268 + (1));
seq__46265 = G__46995;
chunk__46266 = G__46996;
count__46267 = G__46997;
i__46268 = G__46998;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46265);
if(temp__5720__auto__){
var seq__46265__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46265__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46265__$1);
var G__46999 = cljs.core.chunk_rest(seq__46265__$1);
var G__47000 = c__4550__auto__;
var G__47001 = cljs.core.count(c__4550__auto__);
var G__47002 = (0);
seq__46265 = G__46999;
chunk__46266 = G__47000;
count__46267 = G__47001;
i__46268 = G__47002;
continue;
} else {
var vec__46296 = cljs.core.first(seq__46265__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46296,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46296,(1),null);
var G__46300_47004 = dom;
var G__46301_47005 = cljs.core.name(k);
var G__46302_47006 = (((v == null))?"":v);
goog.style.setStyle(G__46300_47004,G__46301_47005,G__46302_47006);


var G__47008 = cljs.core.next(seq__46265__$1);
var G__47009 = null;
var G__47010 = (0);
var G__47011 = (0);
seq__46265 = G__47008;
chunk__46266 = G__47009;
count__46267 = G__47010;
i__46268 = G__47011;
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
var G__46311_47012 = key;
var G__46311_47013__$1 = (((G__46311_47012 instanceof cljs.core.Keyword))?G__46311_47012.fqn:null);
switch (G__46311_47013__$1) {
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
var ks_47018 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_47018,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_47018,"aria-");
}
})())){
el.setAttribute(ks_47018,value);
} else {
(el[ks_47018] = value);
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
var G__46339 = shadow.dom.dom_node(el);
var G__46340 = cls;
return goog.dom.classlist.contains(G__46339,G__46340);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46349){
var map__46350 = p__46349;
var map__46350__$1 = (((((!((map__46350 == null))))?(((((map__46350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46350):map__46350);
var props = map__46350__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46350__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46354 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46354,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46354,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46354,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46357 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46357,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46357;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46360 = arguments.length;
switch (G__46360) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46365){
var vec__46367 = p__46365;
var seq__46368 = cljs.core.seq(vec__46367);
var first__46369 = cljs.core.first(seq__46368);
var seq__46368__$1 = cljs.core.next(seq__46368);
var nn = first__46369;
var first__46369__$1 = cljs.core.first(seq__46368__$1);
var seq__46368__$2 = cljs.core.next(seq__46368__$1);
var np = first__46369__$1;
var nc = seq__46368__$2;
var node = vec__46367;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46375 = nn;
var G__46376 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46375,G__46376) : create_fn.call(null,G__46375,G__46376));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46379 = nn;
var G__46380 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46379,G__46380) : create_fn.call(null,G__46379,G__46380));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46392 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46392,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46392,(1),null);
var seq__46396_47045 = cljs.core.seq(node_children);
var chunk__46397_47046 = null;
var count__46398_47047 = (0);
var i__46399_47048 = (0);
while(true){
if((i__46399_47048 < count__46398_47047)){
var child_struct_47049 = chunk__46397_47046.cljs$core$IIndexed$_nth$arity$2(null,i__46399_47048);
var children_47050 = shadow.dom.dom_node(child_struct_47049);
if(cljs.core.seq_QMARK_(children_47050)){
var seq__46434_47051 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47050));
var chunk__46436_47052 = null;
var count__46437_47053 = (0);
var i__46438_47054 = (0);
while(true){
if((i__46438_47054 < count__46437_47053)){
var child_47056 = chunk__46436_47052.cljs$core$IIndexed$_nth$arity$2(null,i__46438_47054);
if(cljs.core.truth_(child_47056)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47056);


var G__47058 = seq__46434_47051;
var G__47059 = chunk__46436_47052;
var G__47060 = count__46437_47053;
var G__47061 = (i__46438_47054 + (1));
seq__46434_47051 = G__47058;
chunk__46436_47052 = G__47059;
count__46437_47053 = G__47060;
i__46438_47054 = G__47061;
continue;
} else {
var G__47062 = seq__46434_47051;
var G__47063 = chunk__46436_47052;
var G__47064 = count__46437_47053;
var G__47065 = (i__46438_47054 + (1));
seq__46434_47051 = G__47062;
chunk__46436_47052 = G__47063;
count__46437_47053 = G__47064;
i__46438_47054 = G__47065;
continue;
}
} else {
var temp__5720__auto___47066 = cljs.core.seq(seq__46434_47051);
if(temp__5720__auto___47066){
var seq__46434_47067__$1 = temp__5720__auto___47066;
if(cljs.core.chunked_seq_QMARK_(seq__46434_47067__$1)){
var c__4550__auto___47069 = cljs.core.chunk_first(seq__46434_47067__$1);
var G__47070 = cljs.core.chunk_rest(seq__46434_47067__$1);
var G__47071 = c__4550__auto___47069;
var G__47072 = cljs.core.count(c__4550__auto___47069);
var G__47073 = (0);
seq__46434_47051 = G__47070;
chunk__46436_47052 = G__47071;
count__46437_47053 = G__47072;
i__46438_47054 = G__47073;
continue;
} else {
var child_47075 = cljs.core.first(seq__46434_47067__$1);
if(cljs.core.truth_(child_47075)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47075);


var G__47077 = cljs.core.next(seq__46434_47067__$1);
var G__47078 = null;
var G__47079 = (0);
var G__47080 = (0);
seq__46434_47051 = G__47077;
chunk__46436_47052 = G__47078;
count__46437_47053 = G__47079;
i__46438_47054 = G__47080;
continue;
} else {
var G__47082 = cljs.core.next(seq__46434_47067__$1);
var G__47083 = null;
var G__47084 = (0);
var G__47085 = (0);
seq__46434_47051 = G__47082;
chunk__46436_47052 = G__47083;
count__46437_47053 = G__47084;
i__46438_47054 = G__47085;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47050);
}


var G__47086 = seq__46396_47045;
var G__47087 = chunk__46397_47046;
var G__47088 = count__46398_47047;
var G__47089 = (i__46399_47048 + (1));
seq__46396_47045 = G__47086;
chunk__46397_47046 = G__47087;
count__46398_47047 = G__47088;
i__46399_47048 = G__47089;
continue;
} else {
var temp__5720__auto___47090 = cljs.core.seq(seq__46396_47045);
if(temp__5720__auto___47090){
var seq__46396_47091__$1 = temp__5720__auto___47090;
if(cljs.core.chunked_seq_QMARK_(seq__46396_47091__$1)){
var c__4550__auto___47092 = cljs.core.chunk_first(seq__46396_47091__$1);
var G__47093 = cljs.core.chunk_rest(seq__46396_47091__$1);
var G__47094 = c__4550__auto___47092;
var G__47095 = cljs.core.count(c__4550__auto___47092);
var G__47096 = (0);
seq__46396_47045 = G__47093;
chunk__46397_47046 = G__47094;
count__46398_47047 = G__47095;
i__46399_47048 = G__47096;
continue;
} else {
var child_struct_47100 = cljs.core.first(seq__46396_47091__$1);
var children_47101 = shadow.dom.dom_node(child_struct_47100);
if(cljs.core.seq_QMARK_(children_47101)){
var seq__46446_47102 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47101));
var chunk__46448_47103 = null;
var count__46449_47104 = (0);
var i__46450_47105 = (0);
while(true){
if((i__46450_47105 < count__46449_47104)){
var child_47107 = chunk__46448_47103.cljs$core$IIndexed$_nth$arity$2(null,i__46450_47105);
if(cljs.core.truth_(child_47107)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47107);


var G__47109 = seq__46446_47102;
var G__47110 = chunk__46448_47103;
var G__47111 = count__46449_47104;
var G__47112 = (i__46450_47105 + (1));
seq__46446_47102 = G__47109;
chunk__46448_47103 = G__47110;
count__46449_47104 = G__47111;
i__46450_47105 = G__47112;
continue;
} else {
var G__47113 = seq__46446_47102;
var G__47114 = chunk__46448_47103;
var G__47115 = count__46449_47104;
var G__47116 = (i__46450_47105 + (1));
seq__46446_47102 = G__47113;
chunk__46448_47103 = G__47114;
count__46449_47104 = G__47115;
i__46450_47105 = G__47116;
continue;
}
} else {
var temp__5720__auto___47117__$1 = cljs.core.seq(seq__46446_47102);
if(temp__5720__auto___47117__$1){
var seq__46446_47118__$1 = temp__5720__auto___47117__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46446_47118__$1)){
var c__4550__auto___47119 = cljs.core.chunk_first(seq__46446_47118__$1);
var G__47120 = cljs.core.chunk_rest(seq__46446_47118__$1);
var G__47121 = c__4550__auto___47119;
var G__47122 = cljs.core.count(c__4550__auto___47119);
var G__47123 = (0);
seq__46446_47102 = G__47120;
chunk__46448_47103 = G__47121;
count__46449_47104 = G__47122;
i__46450_47105 = G__47123;
continue;
} else {
var child_47125 = cljs.core.first(seq__46446_47118__$1);
if(cljs.core.truth_(child_47125)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47125);


var G__47130 = cljs.core.next(seq__46446_47118__$1);
var G__47131 = null;
var G__47132 = (0);
var G__47133 = (0);
seq__46446_47102 = G__47130;
chunk__46448_47103 = G__47131;
count__46449_47104 = G__47132;
i__46450_47105 = G__47133;
continue;
} else {
var G__47134 = cljs.core.next(seq__46446_47118__$1);
var G__47135 = null;
var G__47136 = (0);
var G__47137 = (0);
seq__46446_47102 = G__47134;
chunk__46448_47103 = G__47135;
count__46449_47104 = G__47136;
i__46450_47105 = G__47137;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47101);
}


var G__47138 = cljs.core.next(seq__46396_47091__$1);
var G__47139 = null;
var G__47140 = (0);
var G__47141 = (0);
seq__46396_47045 = G__47138;
chunk__46397_47046 = G__47139;
count__46398_47047 = G__47140;
i__46399_47048 = G__47141;
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
var G__46464 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__46464);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46473 = cljs.core.seq(node);
var chunk__46474 = null;
var count__46475 = (0);
var i__46476 = (0);
while(true){
if((i__46476 < count__46475)){
var n = chunk__46474.cljs$core$IIndexed$_nth$arity$2(null,i__46476);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47148 = seq__46473;
var G__47149 = chunk__46474;
var G__47150 = count__46475;
var G__47151 = (i__46476 + (1));
seq__46473 = G__47148;
chunk__46474 = G__47149;
count__46475 = G__47150;
i__46476 = G__47151;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46473);
if(temp__5720__auto__){
var seq__46473__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46473__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46473__$1);
var G__47153 = cljs.core.chunk_rest(seq__46473__$1);
var G__47154 = c__4550__auto__;
var G__47155 = cljs.core.count(c__4550__auto__);
var G__47156 = (0);
seq__46473 = G__47153;
chunk__46474 = G__47154;
count__46475 = G__47155;
i__46476 = G__47156;
continue;
} else {
var n = cljs.core.first(seq__46473__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47162 = cljs.core.next(seq__46473__$1);
var G__47163 = null;
var G__47164 = (0);
var G__47165 = (0);
seq__46473 = G__47162;
chunk__46474 = G__47163;
count__46475 = G__47164;
i__46476 = G__47165;
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
var G__46483 = shadow.dom.dom_node(new$);
var G__46484 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__46483,G__46484);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46487 = arguments.length;
switch (G__46487) {
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
var G__46493 = arguments.length;
switch (G__46493) {
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
var G__46502 = arguments.length;
switch (G__46502) {
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
var len__4730__auto___47181 = arguments.length;
var i__4731__auto___47182 = (0);
while(true){
if((i__4731__auto___47182 < len__4730__auto___47181)){
args__4736__auto__.push((arguments[i__4731__auto___47182]));

var G__47186 = (i__4731__auto___47182 + (1));
i__4731__auto___47182 = G__47186;
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
var seq__46518_47188 = cljs.core.seq(nodes);
var chunk__46519_47189 = null;
var count__46520_47190 = (0);
var i__46521_47191 = (0);
while(true){
if((i__46521_47191 < count__46520_47190)){
var node_47192 = chunk__46519_47189.cljs$core$IIndexed$_nth$arity$2(null,i__46521_47191);
fragment.appendChild(shadow.dom._to_dom(node_47192));


var G__47193 = seq__46518_47188;
var G__47194 = chunk__46519_47189;
var G__47195 = count__46520_47190;
var G__47196 = (i__46521_47191 + (1));
seq__46518_47188 = G__47193;
chunk__46519_47189 = G__47194;
count__46520_47190 = G__47195;
i__46521_47191 = G__47196;
continue;
} else {
var temp__5720__auto___47197 = cljs.core.seq(seq__46518_47188);
if(temp__5720__auto___47197){
var seq__46518_47198__$1 = temp__5720__auto___47197;
if(cljs.core.chunked_seq_QMARK_(seq__46518_47198__$1)){
var c__4550__auto___47200 = cljs.core.chunk_first(seq__46518_47198__$1);
var G__47201 = cljs.core.chunk_rest(seq__46518_47198__$1);
var G__47202 = c__4550__auto___47200;
var G__47203 = cljs.core.count(c__4550__auto___47200);
var G__47204 = (0);
seq__46518_47188 = G__47201;
chunk__46519_47189 = G__47202;
count__46520_47190 = G__47203;
i__46521_47191 = G__47204;
continue;
} else {
var node_47205 = cljs.core.first(seq__46518_47198__$1);
fragment.appendChild(shadow.dom._to_dom(node_47205));


var G__47206 = cljs.core.next(seq__46518_47198__$1);
var G__47207 = null;
var G__47208 = (0);
var G__47209 = (0);
seq__46518_47188 = G__47206;
chunk__46519_47189 = G__47207;
count__46520_47190 = G__47208;
i__46521_47191 = G__47209;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq46514){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46514));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46534_47212 = cljs.core.seq(scripts);
var chunk__46535_47213 = null;
var count__46536_47214 = (0);
var i__46537_47215 = (0);
while(true){
if((i__46537_47215 < count__46536_47214)){
var vec__46548_47217 = chunk__46535_47213.cljs$core$IIndexed$_nth$arity$2(null,i__46537_47215);
var script_tag_47218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46548_47217,(0),null);
var script_body_47219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46548_47217,(1),null);
eval(script_body_47219);


var G__47223 = seq__46534_47212;
var G__47224 = chunk__46535_47213;
var G__47225 = count__46536_47214;
var G__47226 = (i__46537_47215 + (1));
seq__46534_47212 = G__47223;
chunk__46535_47213 = G__47224;
count__46536_47214 = G__47225;
i__46537_47215 = G__47226;
continue;
} else {
var temp__5720__auto___47227 = cljs.core.seq(seq__46534_47212);
if(temp__5720__auto___47227){
var seq__46534_47228__$1 = temp__5720__auto___47227;
if(cljs.core.chunked_seq_QMARK_(seq__46534_47228__$1)){
var c__4550__auto___47229 = cljs.core.chunk_first(seq__46534_47228__$1);
var G__47230 = cljs.core.chunk_rest(seq__46534_47228__$1);
var G__47231 = c__4550__auto___47229;
var G__47232 = cljs.core.count(c__4550__auto___47229);
var G__47233 = (0);
seq__46534_47212 = G__47230;
chunk__46535_47213 = G__47231;
count__46536_47214 = G__47232;
i__46537_47215 = G__47233;
continue;
} else {
var vec__46551_47236 = cljs.core.first(seq__46534_47228__$1);
var script_tag_47237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46551_47236,(0),null);
var script_body_47238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46551_47236,(1),null);
eval(script_body_47238);


var G__47240 = cljs.core.next(seq__46534_47228__$1);
var G__47241 = null;
var G__47242 = (0);
var G__47243 = (0);
seq__46534_47212 = G__47240;
chunk__46535_47213 = G__47241;
count__46536_47214 = G__47242;
i__46537_47215 = G__47243;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__46555){
var vec__46557 = p__46555;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46557,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46557,(1),null);
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
var G__46564 = shadow.dom.dom_node(el);
var G__46565 = cls;
return goog.dom.getAncestorByClass(G__46564,G__46565);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46567 = arguments.length;
switch (G__46567) {
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
var G__46568 = shadow.dom.dom_node(el);
var G__46569 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__46568,G__46569);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__46570 = shadow.dom.dom_node(el);
var G__46571 = cljs.core.name(tag);
var G__46572 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__46570,G__46571,G__46572);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__46574 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__46574);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__46575 = shadow.dom.dom_node(dom);
var G__46576 = value;
return goog.dom.forms.setValue(G__46575,G__46576);
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
var seq__46582 = cljs.core.seq(style_keys);
var chunk__46583 = null;
var count__46584 = (0);
var i__46585 = (0);
while(true){
if((i__46585 < count__46584)){
var it = chunk__46583.cljs$core$IIndexed$_nth$arity$2(null,i__46585);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47254 = seq__46582;
var G__47255 = chunk__46583;
var G__47256 = count__46584;
var G__47257 = (i__46585 + (1));
seq__46582 = G__47254;
chunk__46583 = G__47255;
count__46584 = G__47256;
i__46585 = G__47257;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46582);
if(temp__5720__auto__){
var seq__46582__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46582__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46582__$1);
var G__47260 = cljs.core.chunk_rest(seq__46582__$1);
var G__47262 = c__4550__auto__;
var G__47263 = cljs.core.count(c__4550__auto__);
var G__47264 = (0);
seq__46582 = G__47260;
chunk__46583 = G__47262;
count__46584 = G__47263;
i__46585 = G__47264;
continue;
} else {
var it = cljs.core.first(seq__46582__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__47265 = cljs.core.next(seq__46582__$1);
var G__47266 = null;
var G__47267 = (0);
var G__47268 = (0);
seq__46582 = G__47265;
chunk__46583 = G__47266;
count__46584 = G__47267;
i__46585 = G__47268;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k46591,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__46597 = k46591;
var G__46597__$1 = (((G__46597 instanceof cljs.core.Keyword))?G__46597.fqn:null);
switch (G__46597__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46591,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__46598){
var vec__46599 = p__46598;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46599,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46599,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46590){
var self__ = this;
var G__46590__$1 = this;
return (new cljs.core.RecordIter((0),G__46590__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__46605 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__46605(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46592,other46593){
var self__ = this;
var this46592__$1 = this;
return (((!((other46593 == null)))) && ((this46592__$1.constructor === other46593.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46592__$1.x,other46593.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46592__$1.y,other46593.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46592__$1.__extmap,other46593.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__46590){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__46614 = cljs.core.keyword_identical_QMARK_;
var expr__46615 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__46617 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__46618 = expr__46615;
return (pred__46614.cljs$core$IFn$_invoke$arity$2 ? pred__46614.cljs$core$IFn$_invoke$arity$2(G__46617,G__46618) : pred__46614.call(null,G__46617,G__46618));
})())){
return (new shadow.dom.Coordinate(G__46590,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__46620 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__46621 = expr__46615;
return (pred__46614.cljs$core$IFn$_invoke$arity$2 ? pred__46614.cljs$core$IFn$_invoke$arity$2(G__46620,G__46621) : pred__46614.call(null,G__46620,G__46621));
})())){
return (new shadow.dom.Coordinate(self__.x,G__46590,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__46590),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__46590){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46590,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46594){
var extmap__4424__auto__ = (function (){var G__46631 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46594,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46594)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46631);
} else {
return G__46631;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46594),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46594),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__46635 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__46635);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__46637 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__46637);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__46642 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__46642);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k46645,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__46653 = k46645;
var G__46653__$1 = (((G__46653 instanceof cljs.core.Keyword))?G__46653.fqn:null);
switch (G__46653__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46645,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__46660){
var vec__46664 = p__46660;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46664,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46664,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46644){
var self__ = this;
var G__46644__$1 = this;
return (new cljs.core.RecordIter((0),G__46644__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__46719 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__46719(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46646,other46647){
var self__ = this;
var this46646__$1 = this;
return (((!((other46647 == null)))) && ((this46646__$1.constructor === other46647.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46646__$1.w,other46647.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46646__$1.h,other46647.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46646__$1.__extmap,other46647.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__46644){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__46733 = cljs.core.keyword_identical_QMARK_;
var expr__46734 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__46738 = new cljs.core.Keyword(null,"w","w",354169001);
var G__46739 = expr__46734;
return (pred__46733.cljs$core$IFn$_invoke$arity$2 ? pred__46733.cljs$core$IFn$_invoke$arity$2(G__46738,G__46739) : pred__46733.call(null,G__46738,G__46739));
})())){
return (new shadow.dom.Size(G__46644,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__46741 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__46742 = expr__46734;
return (pred__46733.cljs$core$IFn$_invoke$arity$2 ? pred__46733.cljs$core$IFn$_invoke$arity$2(G__46741,G__46742) : pred__46733.call(null,G__46741,G__46742));
})())){
return (new shadow.dom.Size(self__.w,G__46644,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__46644),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__46644){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46644,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46648){
var extmap__4424__auto__ = (function (){var G__46748 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46648,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46648)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46748);
} else {
return G__46748;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46648),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46648),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__46750 = shadow.dom.dom_node(el);
return goog.style.getSize(G__46750);
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
var G__47342 = (i + (1));
var G__47343 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__47342;
ret = G__47343;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46766){
var vec__46769 = p__46766;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46769,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46769,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46775 = arguments.length;
switch (G__46775) {
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
var G__46779_47357 = new_node;
var G__46780_47358 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__46779_47357,G__46780_47358);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__46782_47366 = new_node;
var G__46783_47367 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__46782_47366,G__46783_47367);

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
var G__47373 = ps;
var G__47374 = (i + (1));
el__$1 = G__47373;
i = G__47374;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__46787 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__46787);
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
var G__46791 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__46791);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__46794 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__46794);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46798 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46798,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46798,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46798,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46803_47390 = cljs.core.seq(props);
var chunk__46804_47391 = null;
var count__46805_47392 = (0);
var i__46806_47393 = (0);
while(true){
if((i__46806_47393 < count__46805_47392)){
var vec__46819_47394 = chunk__46804_47391.cljs$core$IIndexed$_nth$arity$2(null,i__46806_47393);
var k_47395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46819_47394,(0),null);
var v_47396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46819_47394,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_47395);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47395),v_47396);


var G__47404 = seq__46803_47390;
var G__47405 = chunk__46804_47391;
var G__47406 = count__46805_47392;
var G__47407 = (i__46806_47393 + (1));
seq__46803_47390 = G__47404;
chunk__46804_47391 = G__47405;
count__46805_47392 = G__47406;
i__46806_47393 = G__47407;
continue;
} else {
var temp__5720__auto___47408 = cljs.core.seq(seq__46803_47390);
if(temp__5720__auto___47408){
var seq__46803_47409__$1 = temp__5720__auto___47408;
if(cljs.core.chunked_seq_QMARK_(seq__46803_47409__$1)){
var c__4550__auto___47410 = cljs.core.chunk_first(seq__46803_47409__$1);
var G__47411 = cljs.core.chunk_rest(seq__46803_47409__$1);
var G__47412 = c__4550__auto___47410;
var G__47413 = cljs.core.count(c__4550__auto___47410);
var G__47414 = (0);
seq__46803_47390 = G__47411;
chunk__46804_47391 = G__47412;
count__46805_47392 = G__47413;
i__46806_47393 = G__47414;
continue;
} else {
var vec__46823_47415 = cljs.core.first(seq__46803_47409__$1);
var k_47416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46823_47415,(0),null);
var v_47417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46823_47415,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_47416);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47416),v_47417);


var G__47418 = cljs.core.next(seq__46803_47409__$1);
var G__47419 = null;
var G__47420 = (0);
var G__47421 = (0);
seq__46803_47390 = G__47418;
chunk__46804_47391 = G__47419;
count__46805_47392 = G__47420;
i__46806_47393 = G__47421;
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
var vec__46832 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46832,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46832,(1),null);
var seq__46836_47426 = cljs.core.seq(node_children);
var chunk__46838_47427 = null;
var count__46839_47428 = (0);
var i__46840_47429 = (0);
while(true){
if((i__46840_47429 < count__46839_47428)){
var child_struct_47430 = chunk__46838_47427.cljs$core$IIndexed$_nth$arity$2(null,i__46840_47429);
if((!((child_struct_47430 == null)))){
if(typeof child_struct_47430 === 'string'){
var text_47432 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47432),child_struct_47430].join(''));
} else {
var children_47433 = shadow.dom.svg_node(child_struct_47430);
if(cljs.core.seq_QMARK_(children_47433)){
var seq__46867_47434 = cljs.core.seq(children_47433);
var chunk__46869_47435 = null;
var count__46870_47436 = (0);
var i__46871_47437 = (0);
while(true){
if((i__46871_47437 < count__46870_47436)){
var child_47438 = chunk__46869_47435.cljs$core$IIndexed$_nth$arity$2(null,i__46871_47437);
if(cljs.core.truth_(child_47438)){
node.appendChild(child_47438);


var G__47439 = seq__46867_47434;
var G__47440 = chunk__46869_47435;
var G__47441 = count__46870_47436;
var G__47442 = (i__46871_47437 + (1));
seq__46867_47434 = G__47439;
chunk__46869_47435 = G__47440;
count__46870_47436 = G__47441;
i__46871_47437 = G__47442;
continue;
} else {
var G__47443 = seq__46867_47434;
var G__47444 = chunk__46869_47435;
var G__47445 = count__46870_47436;
var G__47446 = (i__46871_47437 + (1));
seq__46867_47434 = G__47443;
chunk__46869_47435 = G__47444;
count__46870_47436 = G__47445;
i__46871_47437 = G__47446;
continue;
}
} else {
var temp__5720__auto___47447 = cljs.core.seq(seq__46867_47434);
if(temp__5720__auto___47447){
var seq__46867_47448__$1 = temp__5720__auto___47447;
if(cljs.core.chunked_seq_QMARK_(seq__46867_47448__$1)){
var c__4550__auto___47449 = cljs.core.chunk_first(seq__46867_47448__$1);
var G__47450 = cljs.core.chunk_rest(seq__46867_47448__$1);
var G__47451 = c__4550__auto___47449;
var G__47452 = cljs.core.count(c__4550__auto___47449);
var G__47453 = (0);
seq__46867_47434 = G__47450;
chunk__46869_47435 = G__47451;
count__46870_47436 = G__47452;
i__46871_47437 = G__47453;
continue;
} else {
var child_47454 = cljs.core.first(seq__46867_47448__$1);
if(cljs.core.truth_(child_47454)){
node.appendChild(child_47454);


var G__47455 = cljs.core.next(seq__46867_47448__$1);
var G__47456 = null;
var G__47457 = (0);
var G__47458 = (0);
seq__46867_47434 = G__47455;
chunk__46869_47435 = G__47456;
count__46870_47436 = G__47457;
i__46871_47437 = G__47458;
continue;
} else {
var G__47459 = cljs.core.next(seq__46867_47448__$1);
var G__47460 = null;
var G__47461 = (0);
var G__47462 = (0);
seq__46867_47434 = G__47459;
chunk__46869_47435 = G__47460;
count__46870_47436 = G__47461;
i__46871_47437 = G__47462;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47433);
}
}


var G__47464 = seq__46836_47426;
var G__47465 = chunk__46838_47427;
var G__47466 = count__46839_47428;
var G__47467 = (i__46840_47429 + (1));
seq__46836_47426 = G__47464;
chunk__46838_47427 = G__47465;
count__46839_47428 = G__47466;
i__46840_47429 = G__47467;
continue;
} else {
var G__47468 = seq__46836_47426;
var G__47469 = chunk__46838_47427;
var G__47470 = count__46839_47428;
var G__47471 = (i__46840_47429 + (1));
seq__46836_47426 = G__47468;
chunk__46838_47427 = G__47469;
count__46839_47428 = G__47470;
i__46840_47429 = G__47471;
continue;
}
} else {
var temp__5720__auto___47472 = cljs.core.seq(seq__46836_47426);
if(temp__5720__auto___47472){
var seq__46836_47473__$1 = temp__5720__auto___47472;
if(cljs.core.chunked_seq_QMARK_(seq__46836_47473__$1)){
var c__4550__auto___47474 = cljs.core.chunk_first(seq__46836_47473__$1);
var G__47475 = cljs.core.chunk_rest(seq__46836_47473__$1);
var G__47476 = c__4550__auto___47474;
var G__47477 = cljs.core.count(c__4550__auto___47474);
var G__47478 = (0);
seq__46836_47426 = G__47475;
chunk__46838_47427 = G__47476;
count__46839_47428 = G__47477;
i__46840_47429 = G__47478;
continue;
} else {
var child_struct_47479 = cljs.core.first(seq__46836_47473__$1);
if((!((child_struct_47479 == null)))){
if(typeof child_struct_47479 === 'string'){
var text_47480 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47480),child_struct_47479].join(''));
} else {
var children_47481 = shadow.dom.svg_node(child_struct_47479);
if(cljs.core.seq_QMARK_(children_47481)){
var seq__46879_47482 = cljs.core.seq(children_47481);
var chunk__46881_47483 = null;
var count__46882_47484 = (0);
var i__46883_47485 = (0);
while(true){
if((i__46883_47485 < count__46882_47484)){
var child_47486 = chunk__46881_47483.cljs$core$IIndexed$_nth$arity$2(null,i__46883_47485);
if(cljs.core.truth_(child_47486)){
node.appendChild(child_47486);


var G__47487 = seq__46879_47482;
var G__47488 = chunk__46881_47483;
var G__47489 = count__46882_47484;
var G__47490 = (i__46883_47485 + (1));
seq__46879_47482 = G__47487;
chunk__46881_47483 = G__47488;
count__46882_47484 = G__47489;
i__46883_47485 = G__47490;
continue;
} else {
var G__47491 = seq__46879_47482;
var G__47492 = chunk__46881_47483;
var G__47493 = count__46882_47484;
var G__47494 = (i__46883_47485 + (1));
seq__46879_47482 = G__47491;
chunk__46881_47483 = G__47492;
count__46882_47484 = G__47493;
i__46883_47485 = G__47494;
continue;
}
} else {
var temp__5720__auto___47495__$1 = cljs.core.seq(seq__46879_47482);
if(temp__5720__auto___47495__$1){
var seq__46879_47496__$1 = temp__5720__auto___47495__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46879_47496__$1)){
var c__4550__auto___47497 = cljs.core.chunk_first(seq__46879_47496__$1);
var G__47498 = cljs.core.chunk_rest(seq__46879_47496__$1);
var G__47499 = c__4550__auto___47497;
var G__47500 = cljs.core.count(c__4550__auto___47497);
var G__47501 = (0);
seq__46879_47482 = G__47498;
chunk__46881_47483 = G__47499;
count__46882_47484 = G__47500;
i__46883_47485 = G__47501;
continue;
} else {
var child_47502 = cljs.core.first(seq__46879_47496__$1);
if(cljs.core.truth_(child_47502)){
node.appendChild(child_47502);


var G__47503 = cljs.core.next(seq__46879_47496__$1);
var G__47504 = null;
var G__47505 = (0);
var G__47506 = (0);
seq__46879_47482 = G__47503;
chunk__46881_47483 = G__47504;
count__46882_47484 = G__47505;
i__46883_47485 = G__47506;
continue;
} else {
var G__47507 = cljs.core.next(seq__46879_47496__$1);
var G__47508 = null;
var G__47509 = (0);
var G__47510 = (0);
seq__46879_47482 = G__47507;
chunk__46881_47483 = G__47508;
count__46882_47484 = G__47509;
i__46883_47485 = G__47510;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47481);
}
}


var G__47515 = cljs.core.next(seq__46836_47473__$1);
var G__47516 = null;
var G__47517 = (0);
var G__47518 = (0);
seq__46836_47426 = G__47515;
chunk__46838_47427 = G__47516;
count__46839_47428 = G__47517;
i__46840_47429 = G__47518;
continue;
} else {
var G__47521 = cljs.core.next(seq__46836_47473__$1);
var G__47522 = null;
var G__47523 = (0);
var G__47524 = (0);
seq__46836_47426 = G__47521;
chunk__46838_47427 = G__47522;
count__46839_47428 = G__47523;
i__46840_47429 = G__47524;
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

var G__46892_47525 = shadow.dom._to_svg;
var G__46893_47526 = "string";
var G__46894_47527 = ((function (G__46892_47525,G__46893_47526){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__46892_47525,G__46893_47526))
;
goog.object.set(G__46892_47525,G__46893_47526,G__46894_47527);

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

var G__46897_47530 = shadow.dom._to_svg;
var G__46898_47531 = "null";
var G__46899_47532 = ((function (G__46897_47530,G__46898_47531){
return (function (_){
return null;
});})(G__46897_47530,G__46898_47531))
;
goog.object.set(G__46897_47530,G__46898_47531,G__46899_47532);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47533 = arguments.length;
var i__4731__auto___47534 = (0);
while(true){
if((i__4731__auto___47534 < len__4730__auto___47533)){
args__4736__auto__.push((arguments[i__4731__auto___47534]));

var G__47535 = (i__4731__auto___47534 + (1));
i__4731__auto___47534 = G__47535;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq46900){
var G__46901 = cljs.core.first(seq46900);
var seq46900__$1 = cljs.core.next(seq46900);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46901,seq46900__$1);
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
var G__46908 = arguments.length;
switch (G__46908) {
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
var G__46911_47541 = shadow.dom.dom_node(el);
var G__46912_47542 = cljs.core.name(event);
var G__46913_47543 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__46911_47541,G__46912_47542,G__46913_47543) : shadow.dom.dom_listen.call(null,G__46911_47541,G__46912_47542,G__46913_47543));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__43429__auto___47544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___47544,buf,chan,event_fn){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___47544,buf,chan,event_fn){
return (function (state_46918){
var state_val_46919 = (state_46918[(1)]);
if((state_val_46919 === (1))){
var state_46918__$1 = state_46918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46918__$1,(2),once_or_cleanup);
} else {
if((state_val_46919 === (2))){
var inst_46915 = (state_46918[(2)]);
var inst_46916 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46918__$1 = (function (){var statearr_46923 = state_46918;
(statearr_46923[(7)] = inst_46915);

return statearr_46923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46918__$1,inst_46916);
} else {
return null;
}
}
});})(c__43429__auto___47544,buf,chan,event_fn))
;
return ((function (switch__43155__auto__,c__43429__auto___47544,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__43156__auto__ = null;
var shadow$dom$state_machine__43156__auto____0 = (function (){
var statearr_46925 = [null,null,null,null,null,null,null,null];
(statearr_46925[(0)] = shadow$dom$state_machine__43156__auto__);

(statearr_46925[(1)] = (1));

return statearr_46925;
});
var shadow$dom$state_machine__43156__auto____1 = (function (state_46918){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_46918);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e46926){if((e46926 instanceof Object)){
var ex__43159__auto__ = e46926;
var statearr_46927_47549 = state_46918;
(statearr_46927_47549[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46926;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47550 = state_46918;
state_46918 = G__47550;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
shadow$dom$state_machine__43156__auto__ = function(state_46918){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43156__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43156__auto____1.call(this,state_46918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43156__auto____0;
shadow$dom$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43156__auto____1;
return shadow$dom$state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___47544,buf,chan,event_fn))
})();
var state__43431__auto__ = (function (){var statearr_46930 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_46930[(6)] = c__43429__auto___47544);

return statearr_46930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___47544,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
