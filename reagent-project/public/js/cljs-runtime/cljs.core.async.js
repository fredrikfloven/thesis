goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43512 = arguments.length;
switch (G__43512) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43514 = (function (f,blockable,meta43515){
this.f = f;
this.blockable = blockable;
this.meta43515 = meta43515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43516,meta43515__$1){
var self__ = this;
var _43516__$1 = this;
return (new cljs.core.async.t_cljs$core$async43514(self__.f,self__.blockable,meta43515__$1));
});

cljs.core.async.t_cljs$core$async43514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43516){
var self__ = this;
var _43516__$1 = this;
return self__.meta43515;
});

cljs.core.async.t_cljs$core$async43514.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43514.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43515","meta43515",-1019453316,null)], null);
});

cljs.core.async.t_cljs$core$async43514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43514";

cljs.core.async.t_cljs$core$async43514.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43514");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43514.
 */
cljs.core.async.__GT_t_cljs$core$async43514 = (function cljs$core$async$__GT_t_cljs$core$async43514(f__$1,blockable__$1,meta43515){
return (new cljs.core.async.t_cljs$core$async43514(f__$1,blockable__$1,meta43515));
});

}

return (new cljs.core.async.t_cljs$core$async43514(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__43542 = arguments.length;
switch (G__43542) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43556 = arguments.length;
switch (G__43556) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43566 = arguments.length;
switch (G__43566) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_45842 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45842) : fn1.call(null,val_45842));
} else {
cljs.core.async.impl.dispatch.run(((function (val_45842,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45842) : fn1.call(null,val_45842));
});})(val_45842,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43587 = arguments.length;
switch (G__43587) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___45869 = n;
var x_45870 = (0);
while(true){
if((x_45870 < n__4607__auto___45869)){
(a[x_45870] = x_45870);

var G__45872 = (x_45870 + (1));
x_45870 = G__45872;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43620 = (function (flag,meta43621){
this.flag = flag;
this.meta43621 = meta43621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43622,meta43621__$1){
var self__ = this;
var _43622__$1 = this;
return (new cljs.core.async.t_cljs$core$async43620(self__.flag,meta43621__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43622){
var self__ = this;
var _43622__$1 = this;
return self__.meta43621;
});})(flag))
;

cljs.core.async.t_cljs$core$async43620.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43620.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43620.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43621","meta43621",2005776100,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43620";

cljs.core.async.t_cljs$core$async43620.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43620");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43620.
 */
cljs.core.async.__GT_t_cljs$core$async43620 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43620(flag__$1,meta43621){
return (new cljs.core.async.t_cljs$core$async43620(flag__$1,meta43621));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43620(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43654 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43654 = (function (flag,cb,meta43655){
this.flag = flag;
this.cb = cb;
this.meta43655 = meta43655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43656,meta43655__$1){
var self__ = this;
var _43656__$1 = this;
return (new cljs.core.async.t_cljs$core$async43654(self__.flag,self__.cb,meta43655__$1));
});

cljs.core.async.t_cljs$core$async43654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43656){
var self__ = this;
var _43656__$1 = this;
return self__.meta43655;
});

cljs.core.async.t_cljs$core$async43654.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async43654.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43655","meta43655",-428310788,null)], null);
});

cljs.core.async.t_cljs$core$async43654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43654";

cljs.core.async.t_cljs$core$async43654.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async43654");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43654.
 */
cljs.core.async.__GT_t_cljs$core$async43654 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43654(flag__$1,cb__$1,meta43655){
return (new cljs.core.async.t_cljs$core$async43654(flag__$1,cb__$1,meta43655));
});

}

return (new cljs.core.async.t_cljs$core$async43654(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43667_SHARP_){
var G__43680 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43667_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43680) : fret.call(null,G__43680));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43668_SHARP_){
var G__43682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43668_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43682) : fret.call(null,G__43682));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45927 = (i + (1));
i = G__45927;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45935 = arguments.length;
var i__4731__auto___45936 = (0);
while(true){
if((i__4731__auto___45936 < len__4730__auto___45935)){
args__4736__auto__.push((arguments[i__4731__auto___45936]));

var G__45938 = (i__4731__auto___45936 + (1));
i__4731__auto___45936 = G__45938;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43704){
var map__43705 = p__43704;
var map__43705__$1 = (((((!((map__43705 == null))))?(((((map__43705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43705):map__43705);
var opts = map__43705__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43692){
var G__43693 = cljs.core.first(seq43692);
var seq43692__$1 = cljs.core.next(seq43692);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43693,seq43692__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43723 = arguments.length;
switch (G__43723) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43429__auto___45964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___45964){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___45964){
return (function (state_43791){
var state_val_43792 = (state_43791[(1)]);
if((state_val_43792 === (7))){
var inst_43787 = (state_43791[(2)]);
var state_43791__$1 = state_43791;
var statearr_43793_45968 = state_43791__$1;
(statearr_43793_45968[(2)] = inst_43787);

(statearr_43793_45968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43792 === (1))){
var state_43791__$1 = state_43791;
var statearr_43794_45969 = state_43791__$1;
(statearr_43794_45969[(2)] = null);

(statearr_43794_45969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43792 === (4))){
var inst_43766 = (state_43791[(7)]);
var inst_43766__$1 = (state_43791[(2)]);
var inst_43770 = (inst_43766__$1 == null);
var state_43791__$1 = (function (){var statearr_43798 = state_43791;
(statearr_43798[(7)] = inst_43766__$1);

return statearr_43798;
})();
if(cljs.core.truth_(inst_43770)){
var statearr_43799_45973 = state_43791__$1;
(statearr_43799_45973[(1)] = (5));

} else {
var statearr_43800_45974 = state_43791__$1;
(statearr_43800_45974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43792 === (13))){
var state_43791__$1 = state_43791;
var statearr_43801_45976 = state_43791__$1;
(statearr_43801_45976[(2)] = null);

(statearr_43801_45976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43792 === (6))){
var inst_43766 = (state_43791[(7)]);
var state_43791__$1 = state_43791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43791__$1,(11),to,inst_43766);
} else {
if((state_val_43792 === (3))){
var inst_43789 = (state_43791[(2)]);
var state_43791__$1 = state_43791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43791__$1,inst_43789);
} else {
if((state_val_43792 === (12))){
var state_43791__$1 = state_43791;
var statearr_43802_45980 = state_43791__$1;
(statearr_43802_45980[(2)] = null);

(statearr_43802_45980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43792 === (2))){
var state_43791__$1 = state_43791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43791__$1,(4),from);
} else {
if((state_val_43792 === (11))){
var inst_43780 = (state_43791[(2)]);
var state_43791__$1 = state_43791;
if(cljs.core.truth_(inst_43780)){
var statearr_43803_45982 = state_43791__$1;
(statearr_43803_45982[(1)] = (12));

} else {
var statearr_43804_45983 = state_43791__$1;
(statearr_43804_45983[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43792 === (9))){
var state_43791__$1 = state_43791;
var statearr_43805_45985 = state_43791__$1;
(statearr_43805_45985[(2)] = null);

(statearr_43805_45985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43792 === (5))){
var state_43791__$1 = state_43791;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43810_45988 = state_43791__$1;
(statearr_43810_45988[(1)] = (8));

} else {
var statearr_43811_45989 = state_43791__$1;
(statearr_43811_45989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43792 === (14))){
var inst_43785 = (state_43791[(2)]);
var state_43791__$1 = state_43791;
var statearr_43816_45990 = state_43791__$1;
(statearr_43816_45990[(2)] = inst_43785);

(statearr_43816_45990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43792 === (10))){
var inst_43777 = (state_43791[(2)]);
var state_43791__$1 = state_43791;
var statearr_43821_45991 = state_43791__$1;
(statearr_43821_45991[(2)] = inst_43777);

(statearr_43821_45991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43792 === (8))){
var inst_43774 = cljs.core.async.close_BANG_(to);
var state_43791__$1 = state_43791;
var statearr_43822_45997 = state_43791__$1;
(statearr_43822_45997[(2)] = inst_43774);

(statearr_43822_45997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto___45964))
;
return ((function (switch__43155__auto__,c__43429__auto___45964){
return (function() {
var cljs$core$async$state_machine__43156__auto__ = null;
var cljs$core$async$state_machine__43156__auto____0 = (function (){
var statearr_43823 = [null,null,null,null,null,null,null,null];
(statearr_43823[(0)] = cljs$core$async$state_machine__43156__auto__);

(statearr_43823[(1)] = (1));

return statearr_43823;
});
var cljs$core$async$state_machine__43156__auto____1 = (function (state_43791){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_43791);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e43824){if((e43824 instanceof Object)){
var ex__43159__auto__ = e43824;
var statearr_43825_46007 = state_43791;
(statearr_43825_46007[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46008 = state_43791;
state_43791 = G__46008;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$state_machine__43156__auto__ = function(state_43791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43156__auto____1.call(this,state_43791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43156__auto____0;
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43156__auto____1;
return cljs$core$async$state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___45964))
})();
var state__43431__auto__ = (function (){var statearr_43835 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_43835[(6)] = c__43429__auto___45964);

return statearr_43835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___45964))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__43843){
var vec__43844 = p__43843;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43844,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43844,(1),null);
var job = vec__43844;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43429__auto___46019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___46019,res,vec__43844,v,p,job,jobs,results){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___46019,res,vec__43844,v,p,job,jobs,results){
return (function (state_43851){
var state_val_43852 = (state_43851[(1)]);
if((state_val_43852 === (1))){
var state_43851__$1 = state_43851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43851__$1,(2),res,v);
} else {
if((state_val_43852 === (2))){
var inst_43848 = (state_43851[(2)]);
var inst_43849 = cljs.core.async.close_BANG_(res);
var state_43851__$1 = (function (){var statearr_43854 = state_43851;
(statearr_43854[(7)] = inst_43848);

return statearr_43854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43851__$1,inst_43849);
} else {
return null;
}
}
});})(c__43429__auto___46019,res,vec__43844,v,p,job,jobs,results))
;
return ((function (switch__43155__auto__,c__43429__auto___46019,res,vec__43844,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0 = (function (){
var statearr_43855 = [null,null,null,null,null,null,null,null];
(statearr_43855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__);

(statearr_43855[(1)] = (1));

return statearr_43855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1 = (function (state_43851){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_43851);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e43856){if((e43856 instanceof Object)){
var ex__43159__auto__ = e43856;
var statearr_43857_46030 = state_43851;
(statearr_43857_46030[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43856;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46032 = state_43851;
state_43851 = G__46032;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__ = function(state_43851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1.call(this,state_43851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___46019,res,vec__43844,v,p,job,jobs,results))
})();
var state__43431__auto__ = (function (){var statearr_43858 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_43858[(6)] = c__43429__auto___46019);

return statearr_43858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___46019,res,vec__43844,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43859){
var vec__43860 = p__43859;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43860,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43860,(1),null);
var job = vec__43860;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___46044 = n;
var __46045 = (0);
while(true){
if((__46045 < n__4607__auto___46044)){
var G__43863_46046 = type;
var G__43863_46047__$1 = (((G__43863_46046 instanceof cljs.core.Keyword))?G__43863_46046.fqn:null);
switch (G__43863_46047__$1) {
case "compute":
var c__43429__auto___46049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46045,c__43429__auto___46049,G__43863_46046,G__43863_46047__$1,n__4607__auto___46044,jobs,results,process,async){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (__46045,c__43429__auto___46049,G__43863_46046,G__43863_46047__$1,n__4607__auto___46044,jobs,results,process,async){
return (function (state_43876){
var state_val_43877 = (state_43876[(1)]);
if((state_val_43877 === (1))){
var state_43876__$1 = state_43876;
var statearr_43878_46059 = state_43876__$1;
(statearr_43878_46059[(2)] = null);

(statearr_43878_46059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43877 === (2))){
var state_43876__$1 = state_43876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43876__$1,(4),jobs);
} else {
if((state_val_43877 === (3))){
var inst_43874 = (state_43876[(2)]);
var state_43876__$1 = state_43876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43876__$1,inst_43874);
} else {
if((state_val_43877 === (4))){
var inst_43866 = (state_43876[(2)]);
var inst_43867 = process(inst_43866);
var state_43876__$1 = state_43876;
if(cljs.core.truth_(inst_43867)){
var statearr_43880_46063 = state_43876__$1;
(statearr_43880_46063[(1)] = (5));

} else {
var statearr_43881_46064 = state_43876__$1;
(statearr_43881_46064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43877 === (5))){
var state_43876__$1 = state_43876;
var statearr_43883_46067 = state_43876__$1;
(statearr_43883_46067[(2)] = null);

(statearr_43883_46067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43877 === (6))){
var state_43876__$1 = state_43876;
var statearr_43884_46068 = state_43876__$1;
(statearr_43884_46068[(2)] = null);

(statearr_43884_46068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43877 === (7))){
var inst_43872 = (state_43876[(2)]);
var state_43876__$1 = state_43876;
var statearr_43885_46075 = state_43876__$1;
(statearr_43885_46075[(2)] = inst_43872);

(statearr_43885_46075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46045,c__43429__auto___46049,G__43863_46046,G__43863_46047__$1,n__4607__auto___46044,jobs,results,process,async))
;
return ((function (__46045,switch__43155__auto__,c__43429__auto___46049,G__43863_46046,G__43863_46047__$1,n__4607__auto___46044,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0 = (function (){
var statearr_43886 = [null,null,null,null,null,null,null];
(statearr_43886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__);

(statearr_43886[(1)] = (1));

return statearr_43886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1 = (function (state_43876){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_43876);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e43887){if((e43887 instanceof Object)){
var ex__43159__auto__ = e43887;
var statearr_43888_46085 = state_43876;
(statearr_43888_46085[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43887;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46089 = state_43876;
state_43876 = G__46089;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__ = function(state_43876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1.call(this,state_43876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__;
})()
;})(__46045,switch__43155__auto__,c__43429__auto___46049,G__43863_46046,G__43863_46047__$1,n__4607__auto___46044,jobs,results,process,async))
})();
var state__43431__auto__ = (function (){var statearr_43889 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_43889[(6)] = c__43429__auto___46049);

return statearr_43889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(__46045,c__43429__auto___46049,G__43863_46046,G__43863_46047__$1,n__4607__auto___46044,jobs,results,process,async))
);


break;
case "async":
var c__43429__auto___46094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46045,c__43429__auto___46094,G__43863_46046,G__43863_46047__$1,n__4607__auto___46044,jobs,results,process,async){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (__46045,c__43429__auto___46094,G__43863_46046,G__43863_46047__$1,n__4607__auto___46044,jobs,results,process,async){
return (function (state_43902){
var state_val_43903 = (state_43902[(1)]);
if((state_val_43903 === (1))){
var state_43902__$1 = state_43902;
var statearr_43904_46097 = state_43902__$1;
(statearr_43904_46097[(2)] = null);

(statearr_43904_46097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (2))){
var state_43902__$1 = state_43902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43902__$1,(4),jobs);
} else {
if((state_val_43903 === (3))){
var inst_43900 = (state_43902[(2)]);
var state_43902__$1 = state_43902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43902__$1,inst_43900);
} else {
if((state_val_43903 === (4))){
var inst_43892 = (state_43902[(2)]);
var inst_43893 = async(inst_43892);
var state_43902__$1 = state_43902;
if(cljs.core.truth_(inst_43893)){
var statearr_43908_46101 = state_43902__$1;
(statearr_43908_46101[(1)] = (5));

} else {
var statearr_43909_46102 = state_43902__$1;
(statearr_43909_46102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (5))){
var state_43902__$1 = state_43902;
var statearr_43910_46104 = state_43902__$1;
(statearr_43910_46104[(2)] = null);

(statearr_43910_46104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (6))){
var state_43902__$1 = state_43902;
var statearr_43911_46105 = state_43902__$1;
(statearr_43911_46105[(2)] = null);

(statearr_43911_46105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43903 === (7))){
var inst_43898 = (state_43902[(2)]);
var state_43902__$1 = state_43902;
var statearr_43913_46107 = state_43902__$1;
(statearr_43913_46107[(2)] = inst_43898);

(statearr_43913_46107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46045,c__43429__auto___46094,G__43863_46046,G__43863_46047__$1,n__4607__auto___46044,jobs,results,process,async))
;
return ((function (__46045,switch__43155__auto__,c__43429__auto___46094,G__43863_46046,G__43863_46047__$1,n__4607__auto___46044,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0 = (function (){
var statearr_43915 = [null,null,null,null,null,null,null];
(statearr_43915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__);

(statearr_43915[(1)] = (1));

return statearr_43915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1 = (function (state_43902){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_43902);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e43916){if((e43916 instanceof Object)){
var ex__43159__auto__ = e43916;
var statearr_43918_46112 = state_43902;
(statearr_43918_46112[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46113 = state_43902;
state_43902 = G__46113;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__ = function(state_43902){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1.call(this,state_43902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__;
})()
;})(__46045,switch__43155__auto__,c__43429__auto___46094,G__43863_46046,G__43863_46047__$1,n__4607__auto___46044,jobs,results,process,async))
})();
var state__43431__auto__ = (function (){var statearr_43919 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_43919[(6)] = c__43429__auto___46094);

return statearr_43919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(__46045,c__43429__auto___46094,G__43863_46046,G__43863_46047__$1,n__4607__auto___46044,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43863_46047__$1)].join('')));

}

var G__46119 = (__46045 + (1));
__46045 = G__46119;
continue;
} else {
}
break;
}

var c__43429__auto___46122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___46122,jobs,results,process,async){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___46122,jobs,results,process,async){
return (function (state_43941){
var state_val_43942 = (state_43941[(1)]);
if((state_val_43942 === (7))){
var inst_43937 = (state_43941[(2)]);
var state_43941__$1 = state_43941;
var statearr_43943_46124 = state_43941__$1;
(statearr_43943_46124[(2)] = inst_43937);

(statearr_43943_46124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43942 === (1))){
var state_43941__$1 = state_43941;
var statearr_43944_46127 = state_43941__$1;
(statearr_43944_46127[(2)] = null);

(statearr_43944_46127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43942 === (4))){
var inst_43922 = (state_43941[(7)]);
var inst_43922__$1 = (state_43941[(2)]);
var inst_43923 = (inst_43922__$1 == null);
var state_43941__$1 = (function (){var statearr_43945 = state_43941;
(statearr_43945[(7)] = inst_43922__$1);

return statearr_43945;
})();
if(cljs.core.truth_(inst_43923)){
var statearr_43946_46130 = state_43941__$1;
(statearr_43946_46130[(1)] = (5));

} else {
var statearr_43947_46131 = state_43941__$1;
(statearr_43947_46131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43942 === (6))){
var inst_43927 = (state_43941[(8)]);
var inst_43922 = (state_43941[(7)]);
var inst_43927__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43929 = [inst_43922,inst_43927__$1];
var inst_43930 = (new cljs.core.PersistentVector(null,2,(5),inst_43928,inst_43929,null));
var state_43941__$1 = (function (){var statearr_43951 = state_43941;
(statearr_43951[(8)] = inst_43927__$1);

return statearr_43951;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43941__$1,(8),jobs,inst_43930);
} else {
if((state_val_43942 === (3))){
var inst_43939 = (state_43941[(2)]);
var state_43941__$1 = state_43941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43941__$1,inst_43939);
} else {
if((state_val_43942 === (2))){
var state_43941__$1 = state_43941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43941__$1,(4),from);
} else {
if((state_val_43942 === (9))){
var inst_43934 = (state_43941[(2)]);
var state_43941__$1 = (function (){var statearr_43952 = state_43941;
(statearr_43952[(9)] = inst_43934);

return statearr_43952;
})();
var statearr_43953_46137 = state_43941__$1;
(statearr_43953_46137[(2)] = null);

(statearr_43953_46137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43942 === (5))){
var inst_43925 = cljs.core.async.close_BANG_(jobs);
var state_43941__$1 = state_43941;
var statearr_43954_46138 = state_43941__$1;
(statearr_43954_46138[(2)] = inst_43925);

(statearr_43954_46138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43942 === (8))){
var inst_43927 = (state_43941[(8)]);
var inst_43932 = (state_43941[(2)]);
var state_43941__$1 = (function (){var statearr_43955 = state_43941;
(statearr_43955[(10)] = inst_43932);

return statearr_43955;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43941__$1,(9),results,inst_43927);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__43429__auto___46122,jobs,results,process,async))
;
return ((function (switch__43155__auto__,c__43429__auto___46122,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0 = (function (){
var statearr_43956 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43956[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__);

(statearr_43956[(1)] = (1));

return statearr_43956;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1 = (function (state_43941){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_43941);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e43957){if((e43957 instanceof Object)){
var ex__43159__auto__ = e43957;
var statearr_43958_46146 = state_43941;
(statearr_43958_46146[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43957;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46149 = state_43941;
state_43941 = G__46149;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__ = function(state_43941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1.call(this,state_43941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___46122,jobs,results,process,async))
})();
var state__43431__auto__ = (function (){var statearr_43960 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_43960[(6)] = c__43429__auto___46122);

return statearr_43960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___46122,jobs,results,process,async))
);


var c__43429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto__,jobs,results,process,async){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto__,jobs,results,process,async){
return (function (state_44000){
var state_val_44001 = (state_44000[(1)]);
if((state_val_44001 === (7))){
var inst_43996 = (state_44000[(2)]);
var state_44000__$1 = state_44000;
var statearr_44008_46154 = state_44000__$1;
(statearr_44008_46154[(2)] = inst_43996);

(statearr_44008_46154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (20))){
var state_44000__$1 = state_44000;
var statearr_44010_46156 = state_44000__$1;
(statearr_44010_46156[(2)] = null);

(statearr_44010_46156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (1))){
var state_44000__$1 = state_44000;
var statearr_44011_46157 = state_44000__$1;
(statearr_44011_46157[(2)] = null);

(statearr_44011_46157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (4))){
var inst_43963 = (state_44000[(7)]);
var inst_43963__$1 = (state_44000[(2)]);
var inst_43964 = (inst_43963__$1 == null);
var state_44000__$1 = (function (){var statearr_44012 = state_44000;
(statearr_44012[(7)] = inst_43963__$1);

return statearr_44012;
})();
if(cljs.core.truth_(inst_43964)){
var statearr_44013_46158 = state_44000__$1;
(statearr_44013_46158[(1)] = (5));

} else {
var statearr_44014_46160 = state_44000__$1;
(statearr_44014_46160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (15))){
var inst_43976 = (state_44000[(8)]);
var state_44000__$1 = state_44000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44000__$1,(18),to,inst_43976);
} else {
if((state_val_44001 === (21))){
var inst_43991 = (state_44000[(2)]);
var state_44000__$1 = state_44000;
var statearr_44017_46162 = state_44000__$1;
(statearr_44017_46162[(2)] = inst_43991);

(statearr_44017_46162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (13))){
var inst_43993 = (state_44000[(2)]);
var state_44000__$1 = (function (){var statearr_44018 = state_44000;
(statearr_44018[(9)] = inst_43993);

return statearr_44018;
})();
var statearr_44019_46165 = state_44000__$1;
(statearr_44019_46165[(2)] = null);

(statearr_44019_46165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (6))){
var inst_43963 = (state_44000[(7)]);
var state_44000__$1 = state_44000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44000__$1,(11),inst_43963);
} else {
if((state_val_44001 === (17))){
var inst_43986 = (state_44000[(2)]);
var state_44000__$1 = state_44000;
if(cljs.core.truth_(inst_43986)){
var statearr_44020_46167 = state_44000__$1;
(statearr_44020_46167[(1)] = (19));

} else {
var statearr_44021_46178 = state_44000__$1;
(statearr_44021_46178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (3))){
var inst_43998 = (state_44000[(2)]);
var state_44000__$1 = state_44000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44000__$1,inst_43998);
} else {
if((state_val_44001 === (12))){
var inst_43973 = (state_44000[(10)]);
var state_44000__$1 = state_44000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44000__$1,(14),inst_43973);
} else {
if((state_val_44001 === (2))){
var state_44000__$1 = state_44000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44000__$1,(4),results);
} else {
if((state_val_44001 === (19))){
var state_44000__$1 = state_44000;
var statearr_44022_46185 = state_44000__$1;
(statearr_44022_46185[(2)] = null);

(statearr_44022_46185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (11))){
var inst_43973 = (state_44000[(2)]);
var state_44000__$1 = (function (){var statearr_44023 = state_44000;
(statearr_44023[(10)] = inst_43973);

return statearr_44023;
})();
var statearr_44024_46189 = state_44000__$1;
(statearr_44024_46189[(2)] = null);

(statearr_44024_46189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (9))){
var state_44000__$1 = state_44000;
var statearr_44025_46191 = state_44000__$1;
(statearr_44025_46191[(2)] = null);

(statearr_44025_46191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (5))){
var state_44000__$1 = state_44000;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44026_46195 = state_44000__$1;
(statearr_44026_46195[(1)] = (8));

} else {
var statearr_44027_46196 = state_44000__$1;
(statearr_44027_46196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (14))){
var inst_43978 = (state_44000[(11)]);
var inst_43976 = (state_44000[(8)]);
var inst_43976__$1 = (state_44000[(2)]);
var inst_43977 = (inst_43976__$1 == null);
var inst_43978__$1 = cljs.core.not(inst_43977);
var state_44000__$1 = (function (){var statearr_44028 = state_44000;
(statearr_44028[(11)] = inst_43978__$1);

(statearr_44028[(8)] = inst_43976__$1);

return statearr_44028;
})();
if(inst_43978__$1){
var statearr_44029_46197 = state_44000__$1;
(statearr_44029_46197[(1)] = (15));

} else {
var statearr_44030_46198 = state_44000__$1;
(statearr_44030_46198[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (16))){
var inst_43978 = (state_44000[(11)]);
var state_44000__$1 = state_44000;
var statearr_44031_46206 = state_44000__$1;
(statearr_44031_46206[(2)] = inst_43978);

(statearr_44031_46206[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (10))){
var inst_43970 = (state_44000[(2)]);
var state_44000__$1 = state_44000;
var statearr_44032_46208 = state_44000__$1;
(statearr_44032_46208[(2)] = inst_43970);

(statearr_44032_46208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (18))){
var inst_43983 = (state_44000[(2)]);
var state_44000__$1 = state_44000;
var statearr_44033_46213 = state_44000__$1;
(statearr_44033_46213[(2)] = inst_43983);

(statearr_44033_46213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44001 === (8))){
var inst_43967 = cljs.core.async.close_BANG_(to);
var state_44000__$1 = state_44000;
var statearr_44034_46220 = state_44000__$1;
(statearr_44034_46220[(2)] = inst_43967);

(statearr_44034_46220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto__,jobs,results,process,async))
;
return ((function (switch__43155__auto__,c__43429__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0 = (function (){
var statearr_44035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__);

(statearr_44035[(1)] = (1));

return statearr_44035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1 = (function (state_44000){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_44000);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e44037){if((e44037 instanceof Object)){
var ex__43159__auto__ = e44037;
var statearr_44038_46226 = state_44000;
(statearr_44038_46226[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44037;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46227 = state_44000;
state_44000 = G__46227;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__ = function(state_44000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1.call(this,state_44000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43156__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto__,jobs,results,process,async))
})();
var state__43431__auto__ = (function (){var statearr_44039 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_44039[(6)] = c__43429__auto__);

return statearr_44039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto__,jobs,results,process,async))
);

return c__43429__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44041 = arguments.length;
switch (G__44041) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44043 = arguments.length;
switch (G__44043) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44046 = arguments.length;
switch (G__44046) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43429__auto___46263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___46263,tc,fc){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___46263,tc,fc){
return (function (state_44075){
var state_val_44076 = (state_44075[(1)]);
if((state_val_44076 === (7))){
var inst_44070 = (state_44075[(2)]);
var state_44075__$1 = state_44075;
var statearr_44078_46264 = state_44075__$1;
(statearr_44078_46264[(2)] = inst_44070);

(statearr_44078_46264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44076 === (1))){
var state_44075__$1 = state_44075;
var statearr_44080_46269 = state_44075__$1;
(statearr_44080_46269[(2)] = null);

(statearr_44080_46269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44076 === (4))){
var inst_44051 = (state_44075[(7)]);
var inst_44051__$1 = (state_44075[(2)]);
var inst_44052 = (inst_44051__$1 == null);
var state_44075__$1 = (function (){var statearr_44081 = state_44075;
(statearr_44081[(7)] = inst_44051__$1);

return statearr_44081;
})();
if(cljs.core.truth_(inst_44052)){
var statearr_44082_46276 = state_44075__$1;
(statearr_44082_46276[(1)] = (5));

} else {
var statearr_44083_46277 = state_44075__$1;
(statearr_44083_46277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44076 === (13))){
var state_44075__$1 = state_44075;
var statearr_44084_46278 = state_44075__$1;
(statearr_44084_46278[(2)] = null);

(statearr_44084_46278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44076 === (6))){
var inst_44051 = (state_44075[(7)]);
var inst_44057 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44051) : p.call(null,inst_44051));
var state_44075__$1 = state_44075;
if(cljs.core.truth_(inst_44057)){
var statearr_44085_46279 = state_44075__$1;
(statearr_44085_46279[(1)] = (9));

} else {
var statearr_44086_46283 = state_44075__$1;
(statearr_44086_46283[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44076 === (3))){
var inst_44072 = (state_44075[(2)]);
var state_44075__$1 = state_44075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44075__$1,inst_44072);
} else {
if((state_val_44076 === (12))){
var state_44075__$1 = state_44075;
var statearr_44089_46287 = state_44075__$1;
(statearr_44089_46287[(2)] = null);

(statearr_44089_46287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44076 === (2))){
var state_44075__$1 = state_44075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44075__$1,(4),ch);
} else {
if((state_val_44076 === (11))){
var inst_44051 = (state_44075[(7)]);
var inst_44061 = (state_44075[(2)]);
var state_44075__$1 = state_44075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44075__$1,(8),inst_44061,inst_44051);
} else {
if((state_val_44076 === (9))){
var state_44075__$1 = state_44075;
var statearr_44090_46294 = state_44075__$1;
(statearr_44090_46294[(2)] = tc);

(statearr_44090_46294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44076 === (5))){
var inst_44054 = cljs.core.async.close_BANG_(tc);
var inst_44055 = cljs.core.async.close_BANG_(fc);
var state_44075__$1 = (function (){var statearr_44091 = state_44075;
(statearr_44091[(8)] = inst_44054);

return statearr_44091;
})();
var statearr_44093_46295 = state_44075__$1;
(statearr_44093_46295[(2)] = inst_44055);

(statearr_44093_46295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44076 === (14))){
var inst_44068 = (state_44075[(2)]);
var state_44075__$1 = state_44075;
var statearr_44095_46299 = state_44075__$1;
(statearr_44095_46299[(2)] = inst_44068);

(statearr_44095_46299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44076 === (10))){
var state_44075__$1 = state_44075;
var statearr_44096_46303 = state_44075__$1;
(statearr_44096_46303[(2)] = fc);

(statearr_44096_46303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44076 === (8))){
var inst_44063 = (state_44075[(2)]);
var state_44075__$1 = state_44075;
if(cljs.core.truth_(inst_44063)){
var statearr_44097_46304 = state_44075__$1;
(statearr_44097_46304[(1)] = (12));

} else {
var statearr_44098_46305 = state_44075__$1;
(statearr_44098_46305[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto___46263,tc,fc))
;
return ((function (switch__43155__auto__,c__43429__auto___46263,tc,fc){
return (function() {
var cljs$core$async$state_machine__43156__auto__ = null;
var cljs$core$async$state_machine__43156__auto____0 = (function (){
var statearr_44100 = [null,null,null,null,null,null,null,null,null];
(statearr_44100[(0)] = cljs$core$async$state_machine__43156__auto__);

(statearr_44100[(1)] = (1));

return statearr_44100;
});
var cljs$core$async$state_machine__43156__auto____1 = (function (state_44075){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_44075);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e44101){if((e44101 instanceof Object)){
var ex__43159__auto__ = e44101;
var statearr_44102_46315 = state_44075;
(statearr_44102_46315[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44101;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46318 = state_44075;
state_44075 = G__46318;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$state_machine__43156__auto__ = function(state_44075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43156__auto____1.call(this,state_44075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43156__auto____0;
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43156__auto____1;
return cljs$core$async$state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___46263,tc,fc))
})();
var state__43431__auto__ = (function (){var statearr_44103 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_44103[(6)] = c__43429__auto___46263);

return statearr_44103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___46263,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto__){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto__){
return (function (state_44124){
var state_val_44125 = (state_44124[(1)]);
if((state_val_44125 === (7))){
var inst_44120 = (state_44124[(2)]);
var state_44124__$1 = state_44124;
var statearr_44126_46322 = state_44124__$1;
(statearr_44126_46322[(2)] = inst_44120);

(statearr_44126_46322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44125 === (1))){
var inst_44104 = init;
var state_44124__$1 = (function (){var statearr_44128 = state_44124;
(statearr_44128[(7)] = inst_44104);

return statearr_44128;
})();
var statearr_44129_46327 = state_44124__$1;
(statearr_44129_46327[(2)] = null);

(statearr_44129_46327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44125 === (4))){
var inst_44107 = (state_44124[(8)]);
var inst_44107__$1 = (state_44124[(2)]);
var inst_44108 = (inst_44107__$1 == null);
var state_44124__$1 = (function (){var statearr_44130 = state_44124;
(statearr_44130[(8)] = inst_44107__$1);

return statearr_44130;
})();
if(cljs.core.truth_(inst_44108)){
var statearr_44131_46332 = state_44124__$1;
(statearr_44131_46332[(1)] = (5));

} else {
var statearr_44132_46333 = state_44124__$1;
(statearr_44132_46333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44125 === (6))){
var inst_44107 = (state_44124[(8)]);
var inst_44104 = (state_44124[(7)]);
var inst_44111 = (state_44124[(9)]);
var inst_44111__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44104,inst_44107) : f.call(null,inst_44104,inst_44107));
var inst_44112 = cljs.core.reduced_QMARK_(inst_44111__$1);
var state_44124__$1 = (function (){var statearr_44133 = state_44124;
(statearr_44133[(9)] = inst_44111__$1);

return statearr_44133;
})();
if(inst_44112){
var statearr_44134_46338 = state_44124__$1;
(statearr_44134_46338[(1)] = (8));

} else {
var statearr_44136_46341 = state_44124__$1;
(statearr_44136_46341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44125 === (3))){
var inst_44122 = (state_44124[(2)]);
var state_44124__$1 = state_44124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44124__$1,inst_44122);
} else {
if((state_val_44125 === (2))){
var state_44124__$1 = state_44124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44124__$1,(4),ch);
} else {
if((state_val_44125 === (9))){
var inst_44111 = (state_44124[(9)]);
var inst_44104 = inst_44111;
var state_44124__$1 = (function (){var statearr_44137 = state_44124;
(statearr_44137[(7)] = inst_44104);

return statearr_44137;
})();
var statearr_44138_46342 = state_44124__$1;
(statearr_44138_46342[(2)] = null);

(statearr_44138_46342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44125 === (5))){
var inst_44104 = (state_44124[(7)]);
var state_44124__$1 = state_44124;
var statearr_44139_46343 = state_44124__$1;
(statearr_44139_46343[(2)] = inst_44104);

(statearr_44139_46343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44125 === (10))){
var inst_44118 = (state_44124[(2)]);
var state_44124__$1 = state_44124;
var statearr_44140_46344 = state_44124__$1;
(statearr_44140_46344[(2)] = inst_44118);

(statearr_44140_46344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44125 === (8))){
var inst_44111 = (state_44124[(9)]);
var inst_44114 = cljs.core.deref(inst_44111);
var state_44124__$1 = state_44124;
var statearr_44141_46345 = state_44124__$1;
(statearr_44141_46345[(2)] = inst_44114);

(statearr_44141_46345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto__))
;
return ((function (switch__43155__auto__,c__43429__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__43156__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43156__auto____0 = (function (){
var statearr_44142 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44142[(0)] = cljs$core$async$reduce_$_state_machine__43156__auto__);

(statearr_44142[(1)] = (1));

return statearr_44142;
});
var cljs$core$async$reduce_$_state_machine__43156__auto____1 = (function (state_44124){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_44124);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e44143){if((e44143 instanceof Object)){
var ex__43159__auto__ = e44143;
var statearr_44145_46351 = state_44124;
(statearr_44145_46351[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46353 = state_44124;
state_44124 = G__46353;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43156__auto__ = function(state_44124){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43156__auto____1.call(this,state_44124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43156__auto____0;
cljs$core$async$reduce_$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43156__auto____1;
return cljs$core$async$reduce_$_state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto__))
})();
var state__43431__auto__ = (function (){var statearr_44147 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_44147[(6)] = c__43429__auto__);

return statearr_44147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto__))
);

return c__43429__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto__,f__$1){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto__,f__$1){
return (function (state_44153){
var state_val_44154 = (state_44153[(1)]);
if((state_val_44154 === (1))){
var inst_44148 = cljs.core.async.reduce(f__$1,init,ch);
var state_44153__$1 = state_44153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44153__$1,(2),inst_44148);
} else {
if((state_val_44154 === (2))){
var inst_44150 = (state_44153[(2)]);
var inst_44151 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44150) : f__$1.call(null,inst_44150));
var state_44153__$1 = state_44153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44153__$1,inst_44151);
} else {
return null;
}
}
});})(c__43429__auto__,f__$1))
;
return ((function (switch__43155__auto__,c__43429__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__43156__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43156__auto____0 = (function (){
var statearr_44155 = [null,null,null,null,null,null,null];
(statearr_44155[(0)] = cljs$core$async$transduce_$_state_machine__43156__auto__);

(statearr_44155[(1)] = (1));

return statearr_44155;
});
var cljs$core$async$transduce_$_state_machine__43156__auto____1 = (function (state_44153){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_44153);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e44156){if((e44156 instanceof Object)){
var ex__43159__auto__ = e44156;
var statearr_44157_46361 = state_44153;
(statearr_44157_46361[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46362 = state_44153;
state_44153 = G__46362;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43156__auto__ = function(state_44153){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43156__auto____1.call(this,state_44153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43156__auto____0;
cljs$core$async$transduce_$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43156__auto____1;
return cljs$core$async$transduce_$_state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto__,f__$1))
})();
var state__43431__auto__ = (function (){var statearr_44158 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_44158[(6)] = c__43429__auto__);

return statearr_44158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto__,f__$1))
);

return c__43429__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44163 = arguments.length;
switch (G__44163) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto__){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto__){
return (function (state_44188){
var state_val_44189 = (state_44188[(1)]);
if((state_val_44189 === (7))){
var inst_44170 = (state_44188[(2)]);
var state_44188__$1 = state_44188;
var statearr_44190_46364 = state_44188__$1;
(statearr_44190_46364[(2)] = inst_44170);

(statearr_44190_46364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (1))){
var inst_44164 = cljs.core.seq(coll);
var inst_44165 = inst_44164;
var state_44188__$1 = (function (){var statearr_44192 = state_44188;
(statearr_44192[(7)] = inst_44165);

return statearr_44192;
})();
var statearr_44199_46366 = state_44188__$1;
(statearr_44199_46366[(2)] = null);

(statearr_44199_46366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (4))){
var inst_44165 = (state_44188[(7)]);
var inst_44168 = cljs.core.first(inst_44165);
var state_44188__$1 = state_44188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44188__$1,(7),ch,inst_44168);
} else {
if((state_val_44189 === (13))){
var inst_44182 = (state_44188[(2)]);
var state_44188__$1 = state_44188;
var statearr_44210_46370 = state_44188__$1;
(statearr_44210_46370[(2)] = inst_44182);

(statearr_44210_46370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (6))){
var inst_44173 = (state_44188[(2)]);
var state_44188__$1 = state_44188;
if(cljs.core.truth_(inst_44173)){
var statearr_44214_46377 = state_44188__$1;
(statearr_44214_46377[(1)] = (8));

} else {
var statearr_44215_46378 = state_44188__$1;
(statearr_44215_46378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (3))){
var inst_44186 = (state_44188[(2)]);
var state_44188__$1 = state_44188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44188__$1,inst_44186);
} else {
if((state_val_44189 === (12))){
var state_44188__$1 = state_44188;
var statearr_44218_46385 = state_44188__$1;
(statearr_44218_46385[(2)] = null);

(statearr_44218_46385[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (2))){
var inst_44165 = (state_44188[(7)]);
var state_44188__$1 = state_44188;
if(cljs.core.truth_(inst_44165)){
var statearr_44219_46390 = state_44188__$1;
(statearr_44219_46390[(1)] = (4));

} else {
var statearr_44220_46391 = state_44188__$1;
(statearr_44220_46391[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (11))){
var inst_44179 = cljs.core.async.close_BANG_(ch);
var state_44188__$1 = state_44188;
var statearr_44221_46395 = state_44188__$1;
(statearr_44221_46395[(2)] = inst_44179);

(statearr_44221_46395[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (9))){
var state_44188__$1 = state_44188;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44223_46400 = state_44188__$1;
(statearr_44223_46400[(1)] = (11));

} else {
var statearr_44225_46401 = state_44188__$1;
(statearr_44225_46401[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (5))){
var inst_44165 = (state_44188[(7)]);
var state_44188__$1 = state_44188;
var statearr_44227_46408 = state_44188__$1;
(statearr_44227_46408[(2)] = inst_44165);

(statearr_44227_46408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (10))){
var inst_44184 = (state_44188[(2)]);
var state_44188__$1 = state_44188;
var statearr_44229_46409 = state_44188__$1;
(statearr_44229_46409[(2)] = inst_44184);

(statearr_44229_46409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44189 === (8))){
var inst_44165 = (state_44188[(7)]);
var inst_44175 = cljs.core.next(inst_44165);
var inst_44165__$1 = inst_44175;
var state_44188__$1 = (function (){var statearr_44231 = state_44188;
(statearr_44231[(7)] = inst_44165__$1);

return statearr_44231;
})();
var statearr_44232_46411 = state_44188__$1;
(statearr_44232_46411[(2)] = null);

(statearr_44232_46411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto__))
;
return ((function (switch__43155__auto__,c__43429__auto__){
return (function() {
var cljs$core$async$state_machine__43156__auto__ = null;
var cljs$core$async$state_machine__43156__auto____0 = (function (){
var statearr_44238 = [null,null,null,null,null,null,null,null];
(statearr_44238[(0)] = cljs$core$async$state_machine__43156__auto__);

(statearr_44238[(1)] = (1));

return statearr_44238;
});
var cljs$core$async$state_machine__43156__auto____1 = (function (state_44188){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_44188);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e44243){if((e44243 instanceof Object)){
var ex__43159__auto__ = e44243;
var statearr_44244_46415 = state_44188;
(statearr_44244_46415[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46416 = state_44188;
state_44188 = G__46416;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$state_machine__43156__auto__ = function(state_44188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43156__auto____1.call(this,state_44188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43156__auto____0;
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43156__auto____1;
return cljs$core$async$state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto__))
})();
var state__43431__auto__ = (function (){var statearr_44250 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_44250[(6)] = c__43429__auto__);

return statearr_44250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto__))
);

return c__43429__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44280 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44280 = (function (ch,cs,meta44281){
this.ch = ch;
this.cs = cs;
this.meta44281 = meta44281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44282,meta44281__$1){
var self__ = this;
var _44282__$1 = this;
return (new cljs.core.async.t_cljs$core$async44280(self__.ch,self__.cs,meta44281__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44282){
var self__ = this;
var _44282__$1 = this;
return self__.meta44281;
});})(cs))
;

cljs.core.async.t_cljs$core$async44280.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44280.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44280.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44280.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44280.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44280.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44280.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44281","meta44281",-141054792,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44280";

cljs.core.async.t_cljs$core$async44280.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44280");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44280.
 */
cljs.core.async.__GT_t_cljs$core$async44280 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44280(ch__$1,cs__$1,meta44281){
return (new cljs.core.async.t_cljs$core$async44280(ch__$1,cs__$1,meta44281));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44280(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__43429__auto___46455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___46455,cs,m,dchan,dctr,done){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___46455,cs,m,dchan,dctr,done){
return (function (state_44445){
var state_val_44446 = (state_44445[(1)]);
if((state_val_44446 === (7))){
var inst_44430 = (state_44445[(2)]);
var state_44445__$1 = state_44445;
var statearr_44453_46456 = state_44445__$1;
(statearr_44453_46456[(2)] = inst_44430);

(statearr_44453_46456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (20))){
var inst_44322 = (state_44445[(7)]);
var inst_44335 = cljs.core.first(inst_44322);
var inst_44336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44335,(0),null);
var inst_44337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44335,(1),null);
var state_44445__$1 = (function (){var statearr_44454 = state_44445;
(statearr_44454[(8)] = inst_44336);

return statearr_44454;
})();
if(cljs.core.truth_(inst_44337)){
var statearr_44455_46457 = state_44445__$1;
(statearr_44455_46457[(1)] = (22));

} else {
var statearr_44456_46458 = state_44445__$1;
(statearr_44456_46458[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (27))){
var inst_44291 = (state_44445[(9)]);
var inst_44374 = (state_44445[(10)]);
var inst_44367 = (state_44445[(11)]);
var inst_44369 = (state_44445[(12)]);
var inst_44374__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44367,inst_44369);
var inst_44375 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44374__$1,inst_44291,done);
var state_44445__$1 = (function (){var statearr_44457 = state_44445;
(statearr_44457[(10)] = inst_44374__$1);

return statearr_44457;
})();
if(cljs.core.truth_(inst_44375)){
var statearr_44460_46462 = state_44445__$1;
(statearr_44460_46462[(1)] = (30));

} else {
var statearr_44461_46463 = state_44445__$1;
(statearr_44461_46463[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (1))){
var state_44445__$1 = state_44445;
var statearr_44462_46468 = state_44445__$1;
(statearr_44462_46468[(2)] = null);

(statearr_44462_46468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (24))){
var inst_44322 = (state_44445[(7)]);
var inst_44342 = (state_44445[(2)]);
var inst_44343 = cljs.core.next(inst_44322);
var inst_44300 = inst_44343;
var inst_44301 = null;
var inst_44302 = (0);
var inst_44303 = (0);
var state_44445__$1 = (function (){var statearr_44463 = state_44445;
(statearr_44463[(13)] = inst_44303);

(statearr_44463[(14)] = inst_44301);

(statearr_44463[(15)] = inst_44300);

(statearr_44463[(16)] = inst_44342);

(statearr_44463[(17)] = inst_44302);

return statearr_44463;
})();
var statearr_44464_46477 = state_44445__$1;
(statearr_44464_46477[(2)] = null);

(statearr_44464_46477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (39))){
var state_44445__$1 = state_44445;
var statearr_44468_46478 = state_44445__$1;
(statearr_44468_46478[(2)] = null);

(statearr_44468_46478[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (4))){
var inst_44291 = (state_44445[(9)]);
var inst_44291__$1 = (state_44445[(2)]);
var inst_44292 = (inst_44291__$1 == null);
var state_44445__$1 = (function (){var statearr_44469 = state_44445;
(statearr_44469[(9)] = inst_44291__$1);

return statearr_44469;
})();
if(cljs.core.truth_(inst_44292)){
var statearr_44470_46479 = state_44445__$1;
(statearr_44470_46479[(1)] = (5));

} else {
var statearr_44471_46480 = state_44445__$1;
(statearr_44471_46480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (15))){
var inst_44303 = (state_44445[(13)]);
var inst_44301 = (state_44445[(14)]);
var inst_44300 = (state_44445[(15)]);
var inst_44302 = (state_44445[(17)]);
var inst_44318 = (state_44445[(2)]);
var inst_44319 = (inst_44303 + (1));
var tmp44465 = inst_44301;
var tmp44466 = inst_44300;
var tmp44467 = inst_44302;
var inst_44300__$1 = tmp44466;
var inst_44301__$1 = tmp44465;
var inst_44302__$1 = tmp44467;
var inst_44303__$1 = inst_44319;
var state_44445__$1 = (function (){var statearr_44472 = state_44445;
(statearr_44472[(13)] = inst_44303__$1);

(statearr_44472[(14)] = inst_44301__$1);

(statearr_44472[(15)] = inst_44300__$1);

(statearr_44472[(18)] = inst_44318);

(statearr_44472[(17)] = inst_44302__$1);

return statearr_44472;
})();
var statearr_44473_46481 = state_44445__$1;
(statearr_44473_46481[(2)] = null);

(statearr_44473_46481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (21))){
var inst_44348 = (state_44445[(2)]);
var state_44445__$1 = state_44445;
var statearr_44477_46482 = state_44445__$1;
(statearr_44477_46482[(2)] = inst_44348);

(statearr_44477_46482[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (31))){
var inst_44374 = (state_44445[(10)]);
var inst_44378 = done(null);
var inst_44379 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44374);
var state_44445__$1 = (function (){var statearr_44478 = state_44445;
(statearr_44478[(19)] = inst_44378);

return statearr_44478;
})();
var statearr_44479_46485 = state_44445__$1;
(statearr_44479_46485[(2)] = inst_44379);

(statearr_44479_46485[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (32))){
var inst_44368 = (state_44445[(20)]);
var inst_44366 = (state_44445[(21)]);
var inst_44367 = (state_44445[(11)]);
var inst_44369 = (state_44445[(12)]);
var inst_44381 = (state_44445[(2)]);
var inst_44382 = (inst_44369 + (1));
var tmp44474 = inst_44368;
var tmp44475 = inst_44366;
var tmp44476 = inst_44367;
var inst_44366__$1 = tmp44475;
var inst_44367__$1 = tmp44476;
var inst_44368__$1 = tmp44474;
var inst_44369__$1 = inst_44382;
var state_44445__$1 = (function (){var statearr_44483 = state_44445;
(statearr_44483[(20)] = inst_44368__$1);

(statearr_44483[(21)] = inst_44366__$1);

(statearr_44483[(22)] = inst_44381);

(statearr_44483[(11)] = inst_44367__$1);

(statearr_44483[(12)] = inst_44369__$1);

return statearr_44483;
})();
var statearr_44484_46488 = state_44445__$1;
(statearr_44484_46488[(2)] = null);

(statearr_44484_46488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (40))){
var inst_44397 = (state_44445[(23)]);
var inst_44405 = done(null);
var inst_44406 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44397);
var state_44445__$1 = (function (){var statearr_44485 = state_44445;
(statearr_44485[(24)] = inst_44405);

return statearr_44485;
})();
var statearr_44486_46489 = state_44445__$1;
(statearr_44486_46489[(2)] = inst_44406);

(statearr_44486_46489[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (33))){
var inst_44386 = (state_44445[(25)]);
var inst_44390 = cljs.core.chunked_seq_QMARK_(inst_44386);
var state_44445__$1 = state_44445;
if(inst_44390){
var statearr_44496_46490 = state_44445__$1;
(statearr_44496_46490[(1)] = (36));

} else {
var statearr_44497_46492 = state_44445__$1;
(statearr_44497_46492[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (13))){
var inst_44312 = (state_44445[(26)]);
var inst_44315 = cljs.core.async.close_BANG_(inst_44312);
var state_44445__$1 = state_44445;
var statearr_44500_46494 = state_44445__$1;
(statearr_44500_46494[(2)] = inst_44315);

(statearr_44500_46494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (22))){
var inst_44336 = (state_44445[(8)]);
var inst_44339 = cljs.core.async.close_BANG_(inst_44336);
var state_44445__$1 = state_44445;
var statearr_44501_46495 = state_44445__$1;
(statearr_44501_46495[(2)] = inst_44339);

(statearr_44501_46495[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (36))){
var inst_44386 = (state_44445[(25)]);
var inst_44392 = cljs.core.chunk_first(inst_44386);
var inst_44393 = cljs.core.chunk_rest(inst_44386);
var inst_44394 = cljs.core.count(inst_44392);
var inst_44366 = inst_44393;
var inst_44367 = inst_44392;
var inst_44368 = inst_44394;
var inst_44369 = (0);
var state_44445__$1 = (function (){var statearr_44502 = state_44445;
(statearr_44502[(20)] = inst_44368);

(statearr_44502[(21)] = inst_44366);

(statearr_44502[(11)] = inst_44367);

(statearr_44502[(12)] = inst_44369);

return statearr_44502;
})();
var statearr_44503_46496 = state_44445__$1;
(statearr_44503_46496[(2)] = null);

(statearr_44503_46496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (41))){
var inst_44386 = (state_44445[(25)]);
var inst_44408 = (state_44445[(2)]);
var inst_44409 = cljs.core.next(inst_44386);
var inst_44366 = inst_44409;
var inst_44367 = null;
var inst_44368 = (0);
var inst_44369 = (0);
var state_44445__$1 = (function (){var statearr_44504 = state_44445;
(statearr_44504[(20)] = inst_44368);

(statearr_44504[(27)] = inst_44408);

(statearr_44504[(21)] = inst_44366);

(statearr_44504[(11)] = inst_44367);

(statearr_44504[(12)] = inst_44369);

return statearr_44504;
})();
var statearr_44505_46497 = state_44445__$1;
(statearr_44505_46497[(2)] = null);

(statearr_44505_46497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (43))){
var state_44445__$1 = state_44445;
var statearr_44506_46498 = state_44445__$1;
(statearr_44506_46498[(2)] = null);

(statearr_44506_46498[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (29))){
var inst_44418 = (state_44445[(2)]);
var state_44445__$1 = state_44445;
var statearr_44507_46499 = state_44445__$1;
(statearr_44507_46499[(2)] = inst_44418);

(statearr_44507_46499[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (44))){
var inst_44427 = (state_44445[(2)]);
var state_44445__$1 = (function (){var statearr_44510 = state_44445;
(statearr_44510[(28)] = inst_44427);

return statearr_44510;
})();
var statearr_44513_46500 = state_44445__$1;
(statearr_44513_46500[(2)] = null);

(statearr_44513_46500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (6))){
var inst_44358 = (state_44445[(29)]);
var inst_44357 = cljs.core.deref(cs);
var inst_44358__$1 = cljs.core.keys(inst_44357);
var inst_44359 = cljs.core.count(inst_44358__$1);
var inst_44360 = cljs.core.reset_BANG_(dctr,inst_44359);
var inst_44365 = cljs.core.seq(inst_44358__$1);
var inst_44366 = inst_44365;
var inst_44367 = null;
var inst_44368 = (0);
var inst_44369 = (0);
var state_44445__$1 = (function (){var statearr_44514 = state_44445;
(statearr_44514[(20)] = inst_44368);

(statearr_44514[(29)] = inst_44358__$1);

(statearr_44514[(21)] = inst_44366);

(statearr_44514[(30)] = inst_44360);

(statearr_44514[(11)] = inst_44367);

(statearr_44514[(12)] = inst_44369);

return statearr_44514;
})();
var statearr_44517_46503 = state_44445__$1;
(statearr_44517_46503[(2)] = null);

(statearr_44517_46503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (28))){
var inst_44366 = (state_44445[(21)]);
var inst_44386 = (state_44445[(25)]);
var inst_44386__$1 = cljs.core.seq(inst_44366);
var state_44445__$1 = (function (){var statearr_44518 = state_44445;
(statearr_44518[(25)] = inst_44386__$1);

return statearr_44518;
})();
if(inst_44386__$1){
var statearr_44519_46504 = state_44445__$1;
(statearr_44519_46504[(1)] = (33));

} else {
var statearr_44520_46505 = state_44445__$1;
(statearr_44520_46505[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (25))){
var inst_44368 = (state_44445[(20)]);
var inst_44369 = (state_44445[(12)]);
var inst_44371 = (inst_44369 < inst_44368);
var inst_44372 = inst_44371;
var state_44445__$1 = state_44445;
if(cljs.core.truth_(inst_44372)){
var statearr_44523_46506 = state_44445__$1;
(statearr_44523_46506[(1)] = (27));

} else {
var statearr_44525_46507 = state_44445__$1;
(statearr_44525_46507[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (34))){
var state_44445__$1 = state_44445;
var statearr_44526_46508 = state_44445__$1;
(statearr_44526_46508[(2)] = null);

(statearr_44526_46508[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (17))){
var state_44445__$1 = state_44445;
var statearr_44527_46509 = state_44445__$1;
(statearr_44527_46509[(2)] = null);

(statearr_44527_46509[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (3))){
var inst_44432 = (state_44445[(2)]);
var state_44445__$1 = state_44445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44445__$1,inst_44432);
} else {
if((state_val_44446 === (12))){
var inst_44353 = (state_44445[(2)]);
var state_44445__$1 = state_44445;
var statearr_44528_46510 = state_44445__$1;
(statearr_44528_46510[(2)] = inst_44353);

(statearr_44528_46510[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (2))){
var state_44445__$1 = state_44445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44445__$1,(4),ch);
} else {
if((state_val_44446 === (23))){
var state_44445__$1 = state_44445;
var statearr_44529_46511 = state_44445__$1;
(statearr_44529_46511[(2)] = null);

(statearr_44529_46511[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (35))){
var inst_44416 = (state_44445[(2)]);
var state_44445__$1 = state_44445;
var statearr_44530_46512 = state_44445__$1;
(statearr_44530_46512[(2)] = inst_44416);

(statearr_44530_46512[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (19))){
var inst_44322 = (state_44445[(7)]);
var inst_44327 = cljs.core.chunk_first(inst_44322);
var inst_44328 = cljs.core.chunk_rest(inst_44322);
var inst_44329 = cljs.core.count(inst_44327);
var inst_44300 = inst_44328;
var inst_44301 = inst_44327;
var inst_44302 = inst_44329;
var inst_44303 = (0);
var state_44445__$1 = (function (){var statearr_44531 = state_44445;
(statearr_44531[(13)] = inst_44303);

(statearr_44531[(14)] = inst_44301);

(statearr_44531[(15)] = inst_44300);

(statearr_44531[(17)] = inst_44302);

return statearr_44531;
})();
var statearr_44532_46513 = state_44445__$1;
(statearr_44532_46513[(2)] = null);

(statearr_44532_46513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (11))){
var inst_44300 = (state_44445[(15)]);
var inst_44322 = (state_44445[(7)]);
var inst_44322__$1 = cljs.core.seq(inst_44300);
var state_44445__$1 = (function (){var statearr_44533 = state_44445;
(statearr_44533[(7)] = inst_44322__$1);

return statearr_44533;
})();
if(inst_44322__$1){
var statearr_44534_46515 = state_44445__$1;
(statearr_44534_46515[(1)] = (16));

} else {
var statearr_44535_46516 = state_44445__$1;
(statearr_44535_46516[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (9))){
var inst_44355 = (state_44445[(2)]);
var state_44445__$1 = state_44445;
var statearr_44536_46517 = state_44445__$1;
(statearr_44536_46517[(2)] = inst_44355);

(statearr_44536_46517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (5))){
var inst_44298 = cljs.core.deref(cs);
var inst_44299 = cljs.core.seq(inst_44298);
var inst_44300 = inst_44299;
var inst_44301 = null;
var inst_44302 = (0);
var inst_44303 = (0);
var state_44445__$1 = (function (){var statearr_44539 = state_44445;
(statearr_44539[(13)] = inst_44303);

(statearr_44539[(14)] = inst_44301);

(statearr_44539[(15)] = inst_44300);

(statearr_44539[(17)] = inst_44302);

return statearr_44539;
})();
var statearr_44542_46522 = state_44445__$1;
(statearr_44542_46522[(2)] = null);

(statearr_44542_46522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (14))){
var state_44445__$1 = state_44445;
var statearr_44545_46523 = state_44445__$1;
(statearr_44545_46523[(2)] = null);

(statearr_44545_46523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (45))){
var inst_44424 = (state_44445[(2)]);
var state_44445__$1 = state_44445;
var statearr_44546_46524 = state_44445__$1;
(statearr_44546_46524[(2)] = inst_44424);

(statearr_44546_46524[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (26))){
var inst_44358 = (state_44445[(29)]);
var inst_44420 = (state_44445[(2)]);
var inst_44421 = cljs.core.seq(inst_44358);
var state_44445__$1 = (function (){var statearr_44547 = state_44445;
(statearr_44547[(31)] = inst_44420);

return statearr_44547;
})();
if(inst_44421){
var statearr_44548_46525 = state_44445__$1;
(statearr_44548_46525[(1)] = (42));

} else {
var statearr_44549_46526 = state_44445__$1;
(statearr_44549_46526[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (16))){
var inst_44322 = (state_44445[(7)]);
var inst_44325 = cljs.core.chunked_seq_QMARK_(inst_44322);
var state_44445__$1 = state_44445;
if(inst_44325){
var statearr_44551_46527 = state_44445__$1;
(statearr_44551_46527[(1)] = (19));

} else {
var statearr_44552_46528 = state_44445__$1;
(statearr_44552_46528[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (38))){
var inst_44412 = (state_44445[(2)]);
var state_44445__$1 = state_44445;
var statearr_44553_46529 = state_44445__$1;
(statearr_44553_46529[(2)] = inst_44412);

(statearr_44553_46529[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (30))){
var state_44445__$1 = state_44445;
var statearr_44555_46530 = state_44445__$1;
(statearr_44555_46530[(2)] = null);

(statearr_44555_46530[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (10))){
var inst_44303 = (state_44445[(13)]);
var inst_44301 = (state_44445[(14)]);
var inst_44311 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44301,inst_44303);
var inst_44312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44311,(0),null);
var inst_44313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44311,(1),null);
var state_44445__$1 = (function (){var statearr_44563 = state_44445;
(statearr_44563[(26)] = inst_44312);

return statearr_44563;
})();
if(cljs.core.truth_(inst_44313)){
var statearr_44564_46531 = state_44445__$1;
(statearr_44564_46531[(1)] = (13));

} else {
var statearr_44565_46532 = state_44445__$1;
(statearr_44565_46532[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (18))){
var inst_44351 = (state_44445[(2)]);
var state_44445__$1 = state_44445;
var statearr_44566_46533 = state_44445__$1;
(statearr_44566_46533[(2)] = inst_44351);

(statearr_44566_46533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (42))){
var state_44445__$1 = state_44445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44445__$1,(45),dchan);
} else {
if((state_val_44446 === (37))){
var inst_44397 = (state_44445[(23)]);
var inst_44386 = (state_44445[(25)]);
var inst_44291 = (state_44445[(9)]);
var inst_44397__$1 = cljs.core.first(inst_44386);
var inst_44398 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44397__$1,inst_44291,done);
var state_44445__$1 = (function (){var statearr_44567 = state_44445;
(statearr_44567[(23)] = inst_44397__$1);

return statearr_44567;
})();
if(cljs.core.truth_(inst_44398)){
var statearr_44568_46541 = state_44445__$1;
(statearr_44568_46541[(1)] = (39));

} else {
var statearr_44569_46542 = state_44445__$1;
(statearr_44569_46542[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44446 === (8))){
var inst_44303 = (state_44445[(13)]);
var inst_44302 = (state_44445[(17)]);
var inst_44305 = (inst_44303 < inst_44302);
var inst_44306 = inst_44305;
var state_44445__$1 = state_44445;
if(cljs.core.truth_(inst_44306)){
var statearr_44570_46543 = state_44445__$1;
(statearr_44570_46543[(1)] = (10));

} else {
var statearr_44571_46547 = state_44445__$1;
(statearr_44571_46547[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto___46455,cs,m,dchan,dctr,done))
;
return ((function (switch__43155__auto__,c__43429__auto___46455,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__43156__auto__ = null;
var cljs$core$async$mult_$_state_machine__43156__auto____0 = (function (){
var statearr_44572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44572[(0)] = cljs$core$async$mult_$_state_machine__43156__auto__);

(statearr_44572[(1)] = (1));

return statearr_44572;
});
var cljs$core$async$mult_$_state_machine__43156__auto____1 = (function (state_44445){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_44445);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e44573){if((e44573 instanceof Object)){
var ex__43159__auto__ = e44573;
var statearr_44574_46554 = state_44445;
(statearr_44574_46554[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44573;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46556 = state_44445;
state_44445 = G__46556;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43156__auto__ = function(state_44445){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43156__auto____1.call(this,state_44445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43156__auto____0;
cljs$core$async$mult_$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43156__auto____1;
return cljs$core$async$mult_$_state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___46455,cs,m,dchan,dctr,done))
})();
var state__43431__auto__ = (function (){var statearr_44582 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_44582[(6)] = c__43429__auto___46455);

return statearr_44582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___46455,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44584 = arguments.length;
switch (G__44584) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46577 = arguments.length;
var i__4731__auto___46578 = (0);
while(true){
if((i__4731__auto___46578 < len__4730__auto___46577)){
args__4736__auto__.push((arguments[i__4731__auto___46578]));

var G__46579 = (i__4731__auto___46578 + (1));
i__4731__auto___46578 = G__46579;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44591){
var map__44592 = p__44591;
var map__44592__$1 = (((((!((map__44592 == null))))?(((((map__44592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44592):map__44592);
var opts = map__44592__$1;
var statearr_44594_46580 = state;
(statearr_44594_46580[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__44592,map__44592__$1,opts){
return (function (val){
var statearr_44595_46581 = state;
(statearr_44595_46581[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__44592,map__44592__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_44596_46586 = state;
(statearr_44596_46586[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44587){
var G__44588 = cljs.core.first(seq44587);
var seq44587__$1 = cljs.core.next(seq44587);
var G__44589 = cljs.core.first(seq44587__$1);
var seq44587__$2 = cljs.core.next(seq44587__$1);
var G__44590 = cljs.core.first(seq44587__$2);
var seq44587__$3 = cljs.core.next(seq44587__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44588,G__44589,G__44590,seq44587__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44599 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44600){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44600 = meta44600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44601,meta44600__$1){
var self__ = this;
var _44601__$1 = this;
return (new cljs.core.async.t_cljs$core$async44599(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44600__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44601){
var self__ = this;
var _44601__$1 = this;
return self__.meta44600;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44600","meta44600",1900924735,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44599";

cljs.core.async.t_cljs$core$async44599.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44599");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44599.
 */
cljs.core.async.__GT_t_cljs$core$async44599 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44599(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44600){
return (new cljs.core.async.t_cljs$core$async44599(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44600));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44599(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43429__auto___46609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___46609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___46609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44705){
var state_val_44706 = (state_44705[(1)]);
if((state_val_44706 === (7))){
var inst_44620 = (state_44705[(2)]);
var state_44705__$1 = state_44705;
var statearr_44707_46612 = state_44705__$1;
(statearr_44707_46612[(2)] = inst_44620);

(statearr_44707_46612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (20))){
var inst_44632 = (state_44705[(7)]);
var state_44705__$1 = state_44705;
var statearr_44708_46619 = state_44705__$1;
(statearr_44708_46619[(2)] = inst_44632);

(statearr_44708_46619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (27))){
var state_44705__$1 = state_44705;
var statearr_44709_46622 = state_44705__$1;
(statearr_44709_46622[(2)] = null);

(statearr_44709_46622[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (1))){
var inst_44607 = (state_44705[(8)]);
var inst_44607__$1 = calc_state();
var inst_44609 = (inst_44607__$1 == null);
var inst_44610 = cljs.core.not(inst_44609);
var state_44705__$1 = (function (){var statearr_44710 = state_44705;
(statearr_44710[(8)] = inst_44607__$1);

return statearr_44710;
})();
if(inst_44610){
var statearr_44711_46623 = state_44705__$1;
(statearr_44711_46623[(1)] = (2));

} else {
var statearr_44712_46624 = state_44705__$1;
(statearr_44712_46624[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (24))){
var inst_44679 = (state_44705[(9)]);
var inst_44665 = (state_44705[(10)]);
var inst_44656 = (state_44705[(11)]);
var inst_44679__$1 = (inst_44656.cljs$core$IFn$_invoke$arity$1 ? inst_44656.cljs$core$IFn$_invoke$arity$1(inst_44665) : inst_44656.call(null,inst_44665));
var state_44705__$1 = (function (){var statearr_44716 = state_44705;
(statearr_44716[(9)] = inst_44679__$1);

return statearr_44716;
})();
if(cljs.core.truth_(inst_44679__$1)){
var statearr_44717_46625 = state_44705__$1;
(statearr_44717_46625[(1)] = (29));

} else {
var statearr_44718_46626 = state_44705__$1;
(statearr_44718_46626[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (4))){
var inst_44623 = (state_44705[(2)]);
var state_44705__$1 = state_44705;
if(cljs.core.truth_(inst_44623)){
var statearr_44720_46627 = state_44705__$1;
(statearr_44720_46627[(1)] = (8));

} else {
var statearr_44721_46628 = state_44705__$1;
(statearr_44721_46628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (15))){
var inst_44650 = (state_44705[(2)]);
var state_44705__$1 = state_44705;
if(cljs.core.truth_(inst_44650)){
var statearr_44722_46629 = state_44705__$1;
(statearr_44722_46629[(1)] = (19));

} else {
var statearr_44723_46630 = state_44705__$1;
(statearr_44723_46630[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (21))){
var inst_44655 = (state_44705[(12)]);
var inst_44655__$1 = (state_44705[(2)]);
var inst_44656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44655__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44655__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44655__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44705__$1 = (function (){var statearr_44724 = state_44705;
(statearr_44724[(13)] = inst_44657);

(statearr_44724[(12)] = inst_44655__$1);

(statearr_44724[(11)] = inst_44656);

return statearr_44724;
})();
return cljs.core.async.ioc_alts_BANG_(state_44705__$1,(22),inst_44658);
} else {
if((state_val_44706 === (31))){
var inst_44687 = (state_44705[(2)]);
var state_44705__$1 = state_44705;
if(cljs.core.truth_(inst_44687)){
var statearr_44725_46633 = state_44705__$1;
(statearr_44725_46633[(1)] = (32));

} else {
var statearr_44726_46634 = state_44705__$1;
(statearr_44726_46634[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (32))){
var inst_44664 = (state_44705[(14)]);
var state_44705__$1 = state_44705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44705__$1,(35),out,inst_44664);
} else {
if((state_val_44706 === (33))){
var inst_44655 = (state_44705[(12)]);
var inst_44632 = inst_44655;
var state_44705__$1 = (function (){var statearr_44729 = state_44705;
(statearr_44729[(7)] = inst_44632);

return statearr_44729;
})();
var statearr_44730_46636 = state_44705__$1;
(statearr_44730_46636[(2)] = null);

(statearr_44730_46636[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (13))){
var inst_44632 = (state_44705[(7)]);
var inst_44639 = inst_44632.cljs$lang$protocol_mask$partition0$;
var inst_44640 = (inst_44639 & (64));
var inst_44641 = inst_44632.cljs$core$ISeq$;
var inst_44642 = (cljs.core.PROTOCOL_SENTINEL === inst_44641);
var inst_44643 = ((inst_44640) || (inst_44642));
var state_44705__$1 = state_44705;
if(cljs.core.truth_(inst_44643)){
var statearr_44732_46638 = state_44705__$1;
(statearr_44732_46638[(1)] = (16));

} else {
var statearr_44733_46641 = state_44705__$1;
(statearr_44733_46641[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (22))){
var inst_44665 = (state_44705[(10)]);
var inst_44664 = (state_44705[(14)]);
var inst_44663 = (state_44705[(2)]);
var inst_44664__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44663,(0),null);
var inst_44665__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44663,(1),null);
var inst_44666 = (inst_44664__$1 == null);
var inst_44667 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44665__$1,change);
var inst_44668 = ((inst_44666) || (inst_44667));
var state_44705__$1 = (function (){var statearr_44735 = state_44705;
(statearr_44735[(10)] = inst_44665__$1);

(statearr_44735[(14)] = inst_44664__$1);

return statearr_44735;
})();
if(cljs.core.truth_(inst_44668)){
var statearr_44736_46649 = state_44705__$1;
(statearr_44736_46649[(1)] = (23));

} else {
var statearr_44737_46650 = state_44705__$1;
(statearr_44737_46650[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (36))){
var inst_44655 = (state_44705[(12)]);
var inst_44632 = inst_44655;
var state_44705__$1 = (function (){var statearr_44738 = state_44705;
(statearr_44738[(7)] = inst_44632);

return statearr_44738;
})();
var statearr_44739_46651 = state_44705__$1;
(statearr_44739_46651[(2)] = null);

(statearr_44739_46651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (29))){
var inst_44679 = (state_44705[(9)]);
var state_44705__$1 = state_44705;
var statearr_44740_46652 = state_44705__$1;
(statearr_44740_46652[(2)] = inst_44679);

(statearr_44740_46652[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (6))){
var state_44705__$1 = state_44705;
var statearr_44741_46654 = state_44705__$1;
(statearr_44741_46654[(2)] = false);

(statearr_44741_46654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (28))){
var inst_44675 = (state_44705[(2)]);
var inst_44676 = calc_state();
var inst_44632 = inst_44676;
var state_44705__$1 = (function (){var statearr_44742 = state_44705;
(statearr_44742[(15)] = inst_44675);

(statearr_44742[(7)] = inst_44632);

return statearr_44742;
})();
var statearr_44743_46659 = state_44705__$1;
(statearr_44743_46659[(2)] = null);

(statearr_44743_46659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (25))){
var inst_44701 = (state_44705[(2)]);
var state_44705__$1 = state_44705;
var statearr_44750_46667 = state_44705__$1;
(statearr_44750_46667[(2)] = inst_44701);

(statearr_44750_46667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (34))){
var inst_44699 = (state_44705[(2)]);
var state_44705__$1 = state_44705;
var statearr_44751_46671 = state_44705__$1;
(statearr_44751_46671[(2)] = inst_44699);

(statearr_44751_46671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (17))){
var state_44705__$1 = state_44705;
var statearr_44752_46677 = state_44705__$1;
(statearr_44752_46677[(2)] = false);

(statearr_44752_46677[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (3))){
var state_44705__$1 = state_44705;
var statearr_44753_46680 = state_44705__$1;
(statearr_44753_46680[(2)] = false);

(statearr_44753_46680[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (12))){
var inst_44703 = (state_44705[(2)]);
var state_44705__$1 = state_44705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44705__$1,inst_44703);
} else {
if((state_val_44706 === (2))){
var inst_44607 = (state_44705[(8)]);
var inst_44612 = inst_44607.cljs$lang$protocol_mask$partition0$;
var inst_44613 = (inst_44612 & (64));
var inst_44614 = inst_44607.cljs$core$ISeq$;
var inst_44615 = (cljs.core.PROTOCOL_SENTINEL === inst_44614);
var inst_44616 = ((inst_44613) || (inst_44615));
var state_44705__$1 = state_44705;
if(cljs.core.truth_(inst_44616)){
var statearr_44754_46691 = state_44705__$1;
(statearr_44754_46691[(1)] = (5));

} else {
var statearr_44755_46696 = state_44705__$1;
(statearr_44755_46696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (23))){
var inst_44664 = (state_44705[(14)]);
var inst_44670 = (inst_44664 == null);
var state_44705__$1 = state_44705;
if(cljs.core.truth_(inst_44670)){
var statearr_44759_46701 = state_44705__$1;
(statearr_44759_46701[(1)] = (26));

} else {
var statearr_44760_46702 = state_44705__$1;
(statearr_44760_46702[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (35))){
var inst_44690 = (state_44705[(2)]);
var state_44705__$1 = state_44705;
if(cljs.core.truth_(inst_44690)){
var statearr_44762_46704 = state_44705__$1;
(statearr_44762_46704[(1)] = (36));

} else {
var statearr_44763_46709 = state_44705__$1;
(statearr_44763_46709[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (19))){
var inst_44632 = (state_44705[(7)]);
var inst_44652 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44632);
var state_44705__$1 = state_44705;
var statearr_44764_46713 = state_44705__$1;
(statearr_44764_46713[(2)] = inst_44652);

(statearr_44764_46713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (11))){
var inst_44632 = (state_44705[(7)]);
var inst_44636 = (inst_44632 == null);
var inst_44637 = cljs.core.not(inst_44636);
var state_44705__$1 = state_44705;
if(inst_44637){
var statearr_44765_46720 = state_44705__$1;
(statearr_44765_46720[(1)] = (13));

} else {
var statearr_44766_46725 = state_44705__$1;
(statearr_44766_46725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (9))){
var inst_44607 = (state_44705[(8)]);
var state_44705__$1 = state_44705;
var statearr_44767_46726 = state_44705__$1;
(statearr_44767_46726[(2)] = inst_44607);

(statearr_44767_46726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (5))){
var state_44705__$1 = state_44705;
var statearr_44769_46727 = state_44705__$1;
(statearr_44769_46727[(2)] = true);

(statearr_44769_46727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (14))){
var state_44705__$1 = state_44705;
var statearr_44771_46728 = state_44705__$1;
(statearr_44771_46728[(2)] = false);

(statearr_44771_46728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (26))){
var inst_44665 = (state_44705[(10)]);
var inst_44672 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44665);
var state_44705__$1 = state_44705;
var statearr_44772_46729 = state_44705__$1;
(statearr_44772_46729[(2)] = inst_44672);

(statearr_44772_46729[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (16))){
var state_44705__$1 = state_44705;
var statearr_44773_46730 = state_44705__$1;
(statearr_44773_46730[(2)] = true);

(statearr_44773_46730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (38))){
var inst_44695 = (state_44705[(2)]);
var state_44705__$1 = state_44705;
var statearr_44778_46731 = state_44705__$1;
(statearr_44778_46731[(2)] = inst_44695);

(statearr_44778_46731[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (30))){
var inst_44665 = (state_44705[(10)]);
var inst_44657 = (state_44705[(13)]);
var inst_44656 = (state_44705[(11)]);
var inst_44682 = cljs.core.empty_QMARK_(inst_44656);
var inst_44683 = (inst_44657.cljs$core$IFn$_invoke$arity$1 ? inst_44657.cljs$core$IFn$_invoke$arity$1(inst_44665) : inst_44657.call(null,inst_44665));
var inst_44684 = cljs.core.not(inst_44683);
var inst_44685 = ((inst_44682) && (inst_44684));
var state_44705__$1 = state_44705;
var statearr_44779_46743 = state_44705__$1;
(statearr_44779_46743[(2)] = inst_44685);

(statearr_44779_46743[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (10))){
var inst_44607 = (state_44705[(8)]);
var inst_44628 = (state_44705[(2)]);
var inst_44629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44628,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44628,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44628,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44632 = inst_44607;
var state_44705__$1 = (function (){var statearr_44782 = state_44705;
(statearr_44782[(16)] = inst_44631);

(statearr_44782[(17)] = inst_44629);

(statearr_44782[(18)] = inst_44630);

(statearr_44782[(7)] = inst_44632);

return statearr_44782;
})();
var statearr_44783_46744 = state_44705__$1;
(statearr_44783_46744[(2)] = null);

(statearr_44783_46744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (18))){
var inst_44647 = (state_44705[(2)]);
var state_44705__$1 = state_44705;
var statearr_44786_46745 = state_44705__$1;
(statearr_44786_46745[(2)] = inst_44647);

(statearr_44786_46745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (37))){
var state_44705__$1 = state_44705;
var statearr_44787_46746 = state_44705__$1;
(statearr_44787_46746[(2)] = null);

(statearr_44787_46746[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44706 === (8))){
var inst_44607 = (state_44705[(8)]);
var inst_44625 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44607);
var state_44705__$1 = state_44705;
var statearr_44788_46747 = state_44705__$1;
(statearr_44788_46747[(2)] = inst_44625);

(statearr_44788_46747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto___46609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__43155__auto__,c__43429__auto___46609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__43156__auto__ = null;
var cljs$core$async$mix_$_state_machine__43156__auto____0 = (function (){
var statearr_44789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44789[(0)] = cljs$core$async$mix_$_state_machine__43156__auto__);

(statearr_44789[(1)] = (1));

return statearr_44789;
});
var cljs$core$async$mix_$_state_machine__43156__auto____1 = (function (state_44705){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_44705);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e44790){if((e44790 instanceof Object)){
var ex__43159__auto__ = e44790;
var statearr_44791_46749 = state_44705;
(statearr_44791_46749[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44790;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46751 = state_44705;
state_44705 = G__46751;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43156__auto__ = function(state_44705){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43156__auto____1.call(this,state_44705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43156__auto____0;
cljs$core$async$mix_$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43156__auto____1;
return cljs$core$async$mix_$_state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___46609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__43431__auto__ = (function (){var statearr_44792 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_44792[(6)] = c__43429__auto___46609);

return statearr_44792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___46609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44822 = arguments.length;
switch (G__44822) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__44827 = arguments.length;
switch (G__44827) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__44823_SHARP_){
if(cljs.core.truth_((p1__44823_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44823_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44823_SHARP_.call(null,topic)))){
return p1__44823_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44823_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44831 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44831 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44832){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44832 = meta44832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44833,meta44832__$1){
var self__ = this;
var _44833__$1 = this;
return (new cljs.core.async.t_cljs$core$async44831(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44832__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44833){
var self__ = this;
var _44833__$1 = this;
return self__.meta44832;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44831.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44831.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44831.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44831.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44831.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44831.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44831.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44831.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44832","meta44832",1919092,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44831.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44831";

cljs.core.async.t_cljs$core$async44831.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44831");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44831.
 */
cljs.core.async.__GT_t_cljs$core$async44831 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44831(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44832){
return (new cljs.core.async.t_cljs$core$async44831(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44832));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44831(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43429__auto___46788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___46788,mults,ensure_mult,p){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___46788,mults,ensure_mult,p){
return (function (state_44917){
var state_val_44918 = (state_44917[(1)]);
if((state_val_44918 === (7))){
var inst_44913 = (state_44917[(2)]);
var state_44917__$1 = state_44917;
var statearr_44919_46789 = state_44917__$1;
(statearr_44919_46789[(2)] = inst_44913);

(statearr_44919_46789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (20))){
var state_44917__$1 = state_44917;
var statearr_44920_46790 = state_44917__$1;
(statearr_44920_46790[(2)] = null);

(statearr_44920_46790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (1))){
var state_44917__$1 = state_44917;
var statearr_44921_46792 = state_44917__$1;
(statearr_44921_46792[(2)] = null);

(statearr_44921_46792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (24))){
var inst_44894 = (state_44917[(7)]);
var inst_44905 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44894);
var state_44917__$1 = state_44917;
var statearr_44922_46793 = state_44917__$1;
(statearr_44922_46793[(2)] = inst_44905);

(statearr_44922_46793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (4))){
var inst_44841 = (state_44917[(8)]);
var inst_44841__$1 = (state_44917[(2)]);
var inst_44842 = (inst_44841__$1 == null);
var state_44917__$1 = (function (){var statearr_44923 = state_44917;
(statearr_44923[(8)] = inst_44841__$1);

return statearr_44923;
})();
if(cljs.core.truth_(inst_44842)){
var statearr_44924_46795 = state_44917__$1;
(statearr_44924_46795[(1)] = (5));

} else {
var statearr_44925_46796 = state_44917__$1;
(statearr_44925_46796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (15))){
var inst_44888 = (state_44917[(2)]);
var state_44917__$1 = state_44917;
var statearr_44926_46797 = state_44917__$1;
(statearr_44926_46797[(2)] = inst_44888);

(statearr_44926_46797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (21))){
var inst_44910 = (state_44917[(2)]);
var state_44917__$1 = (function (){var statearr_44927 = state_44917;
(statearr_44927[(9)] = inst_44910);

return statearr_44927;
})();
var statearr_44928_46802 = state_44917__$1;
(statearr_44928_46802[(2)] = null);

(statearr_44928_46802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (13))){
var inst_44870 = (state_44917[(10)]);
var inst_44872 = cljs.core.chunked_seq_QMARK_(inst_44870);
var state_44917__$1 = state_44917;
if(inst_44872){
var statearr_44929_46807 = state_44917__$1;
(statearr_44929_46807[(1)] = (16));

} else {
var statearr_44930_46808 = state_44917__$1;
(statearr_44930_46808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (22))){
var inst_44900 = (state_44917[(2)]);
var state_44917__$1 = state_44917;
if(cljs.core.truth_(inst_44900)){
var statearr_44931_46812 = state_44917__$1;
(statearr_44931_46812[(1)] = (23));

} else {
var statearr_44932_46813 = state_44917__$1;
(statearr_44932_46813[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (6))){
var inst_44841 = (state_44917[(8)]);
var inst_44896 = (state_44917[(11)]);
var inst_44894 = (state_44917[(7)]);
var inst_44894__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44841) : topic_fn.call(null,inst_44841));
var inst_44895 = cljs.core.deref(mults);
var inst_44896__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44895,inst_44894__$1);
var state_44917__$1 = (function (){var statearr_44934 = state_44917;
(statearr_44934[(11)] = inst_44896__$1);

(statearr_44934[(7)] = inst_44894__$1);

return statearr_44934;
})();
if(cljs.core.truth_(inst_44896__$1)){
var statearr_44935_46817 = state_44917__$1;
(statearr_44935_46817[(1)] = (19));

} else {
var statearr_44936_46818 = state_44917__$1;
(statearr_44936_46818[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (25))){
var inst_44907 = (state_44917[(2)]);
var state_44917__$1 = state_44917;
var statearr_44942_46822 = state_44917__$1;
(statearr_44942_46822[(2)] = inst_44907);

(statearr_44942_46822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (17))){
var inst_44870 = (state_44917[(10)]);
var inst_44879 = cljs.core.first(inst_44870);
var inst_44880 = cljs.core.async.muxch_STAR_(inst_44879);
var inst_44881 = cljs.core.async.close_BANG_(inst_44880);
var inst_44882 = cljs.core.next(inst_44870);
var inst_44851 = inst_44882;
var inst_44852 = null;
var inst_44853 = (0);
var inst_44854 = (0);
var state_44917__$1 = (function (){var statearr_44943 = state_44917;
(statearr_44943[(12)] = inst_44852);

(statearr_44943[(13)] = inst_44881);

(statearr_44943[(14)] = inst_44854);

(statearr_44943[(15)] = inst_44851);

(statearr_44943[(16)] = inst_44853);

return statearr_44943;
})();
var statearr_44944_46826 = state_44917__$1;
(statearr_44944_46826[(2)] = null);

(statearr_44944_46826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (3))){
var inst_44915 = (state_44917[(2)]);
var state_44917__$1 = state_44917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44917__$1,inst_44915);
} else {
if((state_val_44918 === (12))){
var inst_44890 = (state_44917[(2)]);
var state_44917__$1 = state_44917;
var statearr_44945_46827 = state_44917__$1;
(statearr_44945_46827[(2)] = inst_44890);

(statearr_44945_46827[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (2))){
var state_44917__$1 = state_44917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44917__$1,(4),ch);
} else {
if((state_val_44918 === (23))){
var state_44917__$1 = state_44917;
var statearr_44946_46830 = state_44917__$1;
(statearr_44946_46830[(2)] = null);

(statearr_44946_46830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (19))){
var inst_44841 = (state_44917[(8)]);
var inst_44896 = (state_44917[(11)]);
var inst_44898 = cljs.core.async.muxch_STAR_(inst_44896);
var state_44917__$1 = state_44917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44917__$1,(22),inst_44898,inst_44841);
} else {
if((state_val_44918 === (11))){
var inst_44870 = (state_44917[(10)]);
var inst_44851 = (state_44917[(15)]);
var inst_44870__$1 = cljs.core.seq(inst_44851);
var state_44917__$1 = (function (){var statearr_44951 = state_44917;
(statearr_44951[(10)] = inst_44870__$1);

return statearr_44951;
})();
if(inst_44870__$1){
var statearr_44954_46835 = state_44917__$1;
(statearr_44954_46835[(1)] = (13));

} else {
var statearr_44956_46842 = state_44917__$1;
(statearr_44956_46842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (9))){
var inst_44892 = (state_44917[(2)]);
var state_44917__$1 = state_44917;
var statearr_44960_46843 = state_44917__$1;
(statearr_44960_46843[(2)] = inst_44892);

(statearr_44960_46843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (5))){
var inst_44848 = cljs.core.deref(mults);
var inst_44849 = cljs.core.vals(inst_44848);
var inst_44850 = cljs.core.seq(inst_44849);
var inst_44851 = inst_44850;
var inst_44852 = null;
var inst_44853 = (0);
var inst_44854 = (0);
var state_44917__$1 = (function (){var statearr_44981 = state_44917;
(statearr_44981[(12)] = inst_44852);

(statearr_44981[(14)] = inst_44854);

(statearr_44981[(15)] = inst_44851);

(statearr_44981[(16)] = inst_44853);

return statearr_44981;
})();
var statearr_44983_46850 = state_44917__$1;
(statearr_44983_46850[(2)] = null);

(statearr_44983_46850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (14))){
var state_44917__$1 = state_44917;
var statearr_44987_46851 = state_44917__$1;
(statearr_44987_46851[(2)] = null);

(statearr_44987_46851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (16))){
var inst_44870 = (state_44917[(10)]);
var inst_44874 = cljs.core.chunk_first(inst_44870);
var inst_44875 = cljs.core.chunk_rest(inst_44870);
var inst_44876 = cljs.core.count(inst_44874);
var inst_44851 = inst_44875;
var inst_44852 = inst_44874;
var inst_44853 = inst_44876;
var inst_44854 = (0);
var state_44917__$1 = (function (){var statearr_44989 = state_44917;
(statearr_44989[(12)] = inst_44852);

(statearr_44989[(14)] = inst_44854);

(statearr_44989[(15)] = inst_44851);

(statearr_44989[(16)] = inst_44853);

return statearr_44989;
})();
var statearr_44990_46852 = state_44917__$1;
(statearr_44990_46852[(2)] = null);

(statearr_44990_46852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (10))){
var inst_44852 = (state_44917[(12)]);
var inst_44854 = (state_44917[(14)]);
var inst_44851 = (state_44917[(15)]);
var inst_44853 = (state_44917[(16)]);
var inst_44864 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44852,inst_44854);
var inst_44865 = cljs.core.async.muxch_STAR_(inst_44864);
var inst_44866 = cljs.core.async.close_BANG_(inst_44865);
var inst_44867 = (inst_44854 + (1));
var tmp44984 = inst_44852;
var tmp44985 = inst_44851;
var tmp44986 = inst_44853;
var inst_44851__$1 = tmp44985;
var inst_44852__$1 = tmp44984;
var inst_44853__$1 = tmp44986;
var inst_44854__$1 = inst_44867;
var state_44917__$1 = (function (){var statearr_44991 = state_44917;
(statearr_44991[(17)] = inst_44866);

(statearr_44991[(12)] = inst_44852__$1);

(statearr_44991[(14)] = inst_44854__$1);

(statearr_44991[(15)] = inst_44851__$1);

(statearr_44991[(16)] = inst_44853__$1);

return statearr_44991;
})();
var statearr_44992_46853 = state_44917__$1;
(statearr_44992_46853[(2)] = null);

(statearr_44992_46853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (18))){
var inst_44885 = (state_44917[(2)]);
var state_44917__$1 = state_44917;
var statearr_44993_46854 = state_44917__$1;
(statearr_44993_46854[(2)] = inst_44885);

(statearr_44993_46854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44918 === (8))){
var inst_44854 = (state_44917[(14)]);
var inst_44853 = (state_44917[(16)]);
var inst_44858 = (inst_44854 < inst_44853);
var inst_44859 = inst_44858;
var state_44917__$1 = state_44917;
if(cljs.core.truth_(inst_44859)){
var statearr_44994_46861 = state_44917__$1;
(statearr_44994_46861[(1)] = (10));

} else {
var statearr_44995_46862 = state_44917__$1;
(statearr_44995_46862[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto___46788,mults,ensure_mult,p))
;
return ((function (switch__43155__auto__,c__43429__auto___46788,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__43156__auto__ = null;
var cljs$core$async$state_machine__43156__auto____0 = (function (){
var statearr_45001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45001[(0)] = cljs$core$async$state_machine__43156__auto__);

(statearr_45001[(1)] = (1));

return statearr_45001;
});
var cljs$core$async$state_machine__43156__auto____1 = (function (state_44917){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_44917);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e45002){if((e45002 instanceof Object)){
var ex__43159__auto__ = e45002;
var statearr_45003_46863 = state_44917;
(statearr_45003_46863[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45002;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46864 = state_44917;
state_44917 = G__46864;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$state_machine__43156__auto__ = function(state_44917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43156__auto____1.call(this,state_44917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43156__auto____0;
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43156__auto____1;
return cljs$core$async$state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___46788,mults,ensure_mult,p))
})();
var state__43431__auto__ = (function (){var statearr_45005 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_45005[(6)] = c__43429__auto___46788);

return statearr_45005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___46788,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45007 = arguments.length;
switch (G__45007) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45012 = arguments.length;
switch (G__45012) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45014 = arguments.length;
switch (G__45014) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43429__auto___46874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___46874,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___46874,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45059){
var state_val_45062 = (state_45059[(1)]);
if((state_val_45062 === (7))){
var state_45059__$1 = state_45059;
var statearr_45063_46875 = state_45059__$1;
(statearr_45063_46875[(2)] = null);

(statearr_45063_46875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (1))){
var state_45059__$1 = state_45059;
var statearr_45064_46876 = state_45059__$1;
(statearr_45064_46876[(2)] = null);

(statearr_45064_46876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (4))){
var inst_45020 = (state_45059[(7)]);
var inst_45022 = (inst_45020 < cnt);
var state_45059__$1 = state_45059;
if(cljs.core.truth_(inst_45022)){
var statearr_45068_46877 = state_45059__$1;
(statearr_45068_46877[(1)] = (6));

} else {
var statearr_45069_46878 = state_45059__$1;
(statearr_45069_46878[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (15))){
var inst_45055 = (state_45059[(2)]);
var state_45059__$1 = state_45059;
var statearr_45070_46885 = state_45059__$1;
(statearr_45070_46885[(2)] = inst_45055);

(statearr_45070_46885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (13))){
var inst_45048 = cljs.core.async.close_BANG_(out);
var state_45059__$1 = state_45059;
var statearr_45071_46886 = state_45059__$1;
(statearr_45071_46886[(2)] = inst_45048);

(statearr_45071_46886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (6))){
var state_45059__$1 = state_45059;
var statearr_45072_46887 = state_45059__$1;
(statearr_45072_46887[(2)] = null);

(statearr_45072_46887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (3))){
var inst_45057 = (state_45059[(2)]);
var state_45059__$1 = state_45059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45059__$1,inst_45057);
} else {
if((state_val_45062 === (12))){
var inst_45045 = (state_45059[(8)]);
var inst_45045__$1 = (state_45059[(2)]);
var inst_45046 = cljs.core.some(cljs.core.nil_QMARK_,inst_45045__$1);
var state_45059__$1 = (function (){var statearr_45075 = state_45059;
(statearr_45075[(8)] = inst_45045__$1);

return statearr_45075;
})();
if(cljs.core.truth_(inst_45046)){
var statearr_45076_46888 = state_45059__$1;
(statearr_45076_46888[(1)] = (13));

} else {
var statearr_45077_46889 = state_45059__$1;
(statearr_45077_46889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (2))){
var inst_45019 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45020 = (0);
var state_45059__$1 = (function (){var statearr_45081 = state_45059;
(statearr_45081[(7)] = inst_45020);

(statearr_45081[(9)] = inst_45019);

return statearr_45081;
})();
var statearr_45082_46891 = state_45059__$1;
(statearr_45082_46891[(2)] = null);

(statearr_45082_46891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (11))){
var inst_45020 = (state_45059[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_45059,(10),Object,null,(9));
var inst_45032 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45020) : chs__$1.call(null,inst_45020));
var inst_45033 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45020) : done.call(null,inst_45020));
var inst_45034 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45032,inst_45033);
var state_45059__$1 = state_45059;
var statearr_45084_46895 = state_45059__$1;
(statearr_45084_46895[(2)] = inst_45034);


cljs.core.async.impl.ioc_helpers.process_exception(state_45059__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (9))){
var inst_45020 = (state_45059[(7)]);
var inst_45036 = (state_45059[(2)]);
var inst_45037 = (inst_45020 + (1));
var inst_45020__$1 = inst_45037;
var state_45059__$1 = (function (){var statearr_45085 = state_45059;
(statearr_45085[(7)] = inst_45020__$1);

(statearr_45085[(10)] = inst_45036);

return statearr_45085;
})();
var statearr_45086_46896 = state_45059__$1;
(statearr_45086_46896[(2)] = null);

(statearr_45086_46896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (5))){
var inst_45043 = (state_45059[(2)]);
var state_45059__$1 = (function (){var statearr_45087 = state_45059;
(statearr_45087[(11)] = inst_45043);

return statearr_45087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45059__$1,(12),dchan);
} else {
if((state_val_45062 === (14))){
var inst_45045 = (state_45059[(8)]);
var inst_45050 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45045);
var state_45059__$1 = state_45059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45059__$1,(16),out,inst_45050);
} else {
if((state_val_45062 === (16))){
var inst_45052 = (state_45059[(2)]);
var state_45059__$1 = (function (){var statearr_45088 = state_45059;
(statearr_45088[(12)] = inst_45052);

return statearr_45088;
})();
var statearr_45089_46902 = state_45059__$1;
(statearr_45089_46902[(2)] = null);

(statearr_45089_46902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (10))){
var inst_45027 = (state_45059[(2)]);
var inst_45028 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45059__$1 = (function (){var statearr_45090 = state_45059;
(statearr_45090[(13)] = inst_45027);

return statearr_45090;
})();
var statearr_45091_46903 = state_45059__$1;
(statearr_45091_46903[(2)] = inst_45028);


cljs.core.async.impl.ioc_helpers.process_exception(state_45059__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45062 === (8))){
var inst_45041 = (state_45059[(2)]);
var state_45059__$1 = state_45059;
var statearr_45092_46904 = state_45059__$1;
(statearr_45092_46904[(2)] = inst_45041);

(statearr_45092_46904[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto___46874,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__43155__auto__,c__43429__auto___46874,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__43156__auto__ = null;
var cljs$core$async$state_machine__43156__auto____0 = (function (){
var statearr_45093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45093[(0)] = cljs$core$async$state_machine__43156__auto__);

(statearr_45093[(1)] = (1));

return statearr_45093;
});
var cljs$core$async$state_machine__43156__auto____1 = (function (state_45059){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_45059);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e45097){if((e45097 instanceof Object)){
var ex__43159__auto__ = e45097;
var statearr_45098_46905 = state_45059;
(statearr_45098_46905[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46907 = state_45059;
state_45059 = G__46907;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$state_machine__43156__auto__ = function(state_45059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43156__auto____1.call(this,state_45059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43156__auto____0;
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43156__auto____1;
return cljs$core$async$state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___46874,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__43431__auto__ = (function (){var statearr_45099 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_45099[(6)] = c__43429__auto___46874);

return statearr_45099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___46874,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45109 = arguments.length;
switch (G__45109) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43429__auto___46910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___46910,out){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___46910,out){
return (function (state_45145){
var state_val_45146 = (state_45145[(1)]);
if((state_val_45146 === (7))){
var inst_45125 = (state_45145[(7)]);
var inst_45124 = (state_45145[(8)]);
var inst_45124__$1 = (state_45145[(2)]);
var inst_45125__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45124__$1,(0),null);
var inst_45126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45124__$1,(1),null);
var inst_45127 = (inst_45125__$1 == null);
var state_45145__$1 = (function (){var statearr_45147 = state_45145;
(statearr_45147[(7)] = inst_45125__$1);

(statearr_45147[(9)] = inst_45126);

(statearr_45147[(8)] = inst_45124__$1);

return statearr_45147;
})();
if(cljs.core.truth_(inst_45127)){
var statearr_45148_46920 = state_45145__$1;
(statearr_45148_46920[(1)] = (8));

} else {
var statearr_45149_46921 = state_45145__$1;
(statearr_45149_46921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (1))){
var inst_45114 = cljs.core.vec(chs);
var inst_45115 = inst_45114;
var state_45145__$1 = (function (){var statearr_45150 = state_45145;
(statearr_45150[(10)] = inst_45115);

return statearr_45150;
})();
var statearr_45151_46922 = state_45145__$1;
(statearr_45151_46922[(2)] = null);

(statearr_45151_46922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (4))){
var inst_45115 = (state_45145[(10)]);
var state_45145__$1 = state_45145;
return cljs.core.async.ioc_alts_BANG_(state_45145__$1,(7),inst_45115);
} else {
if((state_val_45146 === (6))){
var inst_45141 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45152_46924 = state_45145__$1;
(statearr_45152_46924[(2)] = inst_45141);

(statearr_45152_46924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (3))){
var inst_45143 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45145__$1,inst_45143);
} else {
if((state_val_45146 === (2))){
var inst_45115 = (state_45145[(10)]);
var inst_45117 = cljs.core.count(inst_45115);
var inst_45118 = (inst_45117 > (0));
var state_45145__$1 = state_45145;
if(cljs.core.truth_(inst_45118)){
var statearr_45154_46928 = state_45145__$1;
(statearr_45154_46928[(1)] = (4));

} else {
var statearr_45155_46929 = state_45145__$1;
(statearr_45155_46929[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (11))){
var inst_45115 = (state_45145[(10)]);
var inst_45134 = (state_45145[(2)]);
var tmp45153 = inst_45115;
var inst_45115__$1 = tmp45153;
var state_45145__$1 = (function (){var statearr_45156 = state_45145;
(statearr_45156[(10)] = inst_45115__$1);

(statearr_45156[(11)] = inst_45134);

return statearr_45156;
})();
var statearr_45157_46931 = state_45145__$1;
(statearr_45157_46931[(2)] = null);

(statearr_45157_46931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (9))){
var inst_45125 = (state_45145[(7)]);
var state_45145__$1 = state_45145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45145__$1,(11),out,inst_45125);
} else {
if((state_val_45146 === (5))){
var inst_45139 = cljs.core.async.close_BANG_(out);
var state_45145__$1 = state_45145;
var statearr_45159_46932 = state_45145__$1;
(statearr_45159_46932[(2)] = inst_45139);

(statearr_45159_46932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (10))){
var inst_45137 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45160_46933 = state_45145__$1;
(statearr_45160_46933[(2)] = inst_45137);

(statearr_45160_46933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (8))){
var inst_45115 = (state_45145[(10)]);
var inst_45125 = (state_45145[(7)]);
var inst_45126 = (state_45145[(9)]);
var inst_45124 = (state_45145[(8)]);
var inst_45129 = (function (){var cs = inst_45115;
var vec__45120 = inst_45124;
var v = inst_45125;
var c = inst_45126;
return ((function (cs,vec__45120,v,c,inst_45115,inst_45125,inst_45126,inst_45124,state_val_45146,c__43429__auto___46910,out){
return (function (p1__45106_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45106_SHARP_);
});
;})(cs,vec__45120,v,c,inst_45115,inst_45125,inst_45126,inst_45124,state_val_45146,c__43429__auto___46910,out))
})();
var inst_45130 = cljs.core.filterv(inst_45129,inst_45115);
var inst_45115__$1 = inst_45130;
var state_45145__$1 = (function (){var statearr_45164 = state_45145;
(statearr_45164[(10)] = inst_45115__$1);

return statearr_45164;
})();
var statearr_45165_46934 = state_45145__$1;
(statearr_45165_46934[(2)] = null);

(statearr_45165_46934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto___46910,out))
;
return ((function (switch__43155__auto__,c__43429__auto___46910,out){
return (function() {
var cljs$core$async$state_machine__43156__auto__ = null;
var cljs$core$async$state_machine__43156__auto____0 = (function (){
var statearr_45166 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45166[(0)] = cljs$core$async$state_machine__43156__auto__);

(statearr_45166[(1)] = (1));

return statearr_45166;
});
var cljs$core$async$state_machine__43156__auto____1 = (function (state_45145){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_45145);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e45167){if((e45167 instanceof Object)){
var ex__43159__auto__ = e45167;
var statearr_45168_46935 = state_45145;
(statearr_45168_46935[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45167;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46936 = state_45145;
state_45145 = G__46936;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$state_machine__43156__auto__ = function(state_45145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43156__auto____1.call(this,state_45145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43156__auto____0;
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43156__auto____1;
return cljs$core$async$state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___46910,out))
})();
var state__43431__auto__ = (function (){var statearr_45169 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_45169[(6)] = c__43429__auto___46910);

return statearr_45169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___46910,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45171 = arguments.length;
switch (G__45171) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43429__auto___46938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___46938,out){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___46938,out){
return (function (state_45195){
var state_val_45196 = (state_45195[(1)]);
if((state_val_45196 === (7))){
var inst_45177 = (state_45195[(7)]);
var inst_45177__$1 = (state_45195[(2)]);
var inst_45178 = (inst_45177__$1 == null);
var inst_45179 = cljs.core.not(inst_45178);
var state_45195__$1 = (function (){var statearr_45197 = state_45195;
(statearr_45197[(7)] = inst_45177__$1);

return statearr_45197;
})();
if(inst_45179){
var statearr_45198_46940 = state_45195__$1;
(statearr_45198_46940[(1)] = (8));

} else {
var statearr_45199_46941 = state_45195__$1;
(statearr_45199_46941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45196 === (1))){
var inst_45172 = (0);
var state_45195__$1 = (function (){var statearr_45200 = state_45195;
(statearr_45200[(8)] = inst_45172);

return statearr_45200;
})();
var statearr_45201_46942 = state_45195__$1;
(statearr_45201_46942[(2)] = null);

(statearr_45201_46942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45196 === (4))){
var state_45195__$1 = state_45195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45195__$1,(7),ch);
} else {
if((state_val_45196 === (6))){
var inst_45190 = (state_45195[(2)]);
var state_45195__$1 = state_45195;
var statearr_45206_46944 = state_45195__$1;
(statearr_45206_46944[(2)] = inst_45190);

(statearr_45206_46944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45196 === (3))){
var inst_45192 = (state_45195[(2)]);
var inst_45193 = cljs.core.async.close_BANG_(out);
var state_45195__$1 = (function (){var statearr_45212 = state_45195;
(statearr_45212[(9)] = inst_45192);

return statearr_45212;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45195__$1,inst_45193);
} else {
if((state_val_45196 === (2))){
var inst_45172 = (state_45195[(8)]);
var inst_45174 = (inst_45172 < n);
var state_45195__$1 = state_45195;
if(cljs.core.truth_(inst_45174)){
var statearr_45217_46946 = state_45195__$1;
(statearr_45217_46946[(1)] = (4));

} else {
var statearr_45218_46947 = state_45195__$1;
(statearr_45218_46947[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45196 === (11))){
var inst_45172 = (state_45195[(8)]);
var inst_45182 = (state_45195[(2)]);
var inst_45183 = (inst_45172 + (1));
var inst_45172__$1 = inst_45183;
var state_45195__$1 = (function (){var statearr_45223 = state_45195;
(statearr_45223[(10)] = inst_45182);

(statearr_45223[(8)] = inst_45172__$1);

return statearr_45223;
})();
var statearr_45224_46949 = state_45195__$1;
(statearr_45224_46949[(2)] = null);

(statearr_45224_46949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45196 === (9))){
var state_45195__$1 = state_45195;
var statearr_45225_46950 = state_45195__$1;
(statearr_45225_46950[(2)] = null);

(statearr_45225_46950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45196 === (5))){
var state_45195__$1 = state_45195;
var statearr_45230_46951 = state_45195__$1;
(statearr_45230_46951[(2)] = null);

(statearr_45230_46951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45196 === (10))){
var inst_45187 = (state_45195[(2)]);
var state_45195__$1 = state_45195;
var statearr_45231_46953 = state_45195__$1;
(statearr_45231_46953[(2)] = inst_45187);

(statearr_45231_46953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45196 === (8))){
var inst_45177 = (state_45195[(7)]);
var state_45195__$1 = state_45195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45195__$1,(11),out,inst_45177);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto___46938,out))
;
return ((function (switch__43155__auto__,c__43429__auto___46938,out){
return (function() {
var cljs$core$async$state_machine__43156__auto__ = null;
var cljs$core$async$state_machine__43156__auto____0 = (function (){
var statearr_45236 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45236[(0)] = cljs$core$async$state_machine__43156__auto__);

(statearr_45236[(1)] = (1));

return statearr_45236;
});
var cljs$core$async$state_machine__43156__auto____1 = (function (state_45195){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_45195);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e45237){if((e45237 instanceof Object)){
var ex__43159__auto__ = e45237;
var statearr_45240_46954 = state_45195;
(statearr_45240_46954[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46956 = state_45195;
state_45195 = G__46956;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$state_machine__43156__auto__ = function(state_45195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43156__auto____1.call(this,state_45195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43156__auto____0;
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43156__auto____1;
return cljs$core$async$state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___46938,out))
})();
var state__43431__auto__ = (function (){var statearr_45241 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_45241[(6)] = c__43429__auto___46938);

return statearr_45241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___46938,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45243 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45243 = (function (f,ch,meta45244){
this.f = f;
this.ch = ch;
this.meta45244 = meta45244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45245,meta45244__$1){
var self__ = this;
var _45245__$1 = this;
return (new cljs.core.async.t_cljs$core$async45243(self__.f,self__.ch,meta45244__$1));
});

cljs.core.async.t_cljs$core$async45243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45245){
var self__ = this;
var _45245__$1 = this;
return self__.meta45244;
});

cljs.core.async.t_cljs$core$async45243.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45243.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async45243.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async45243.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45243.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45246 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45246 = (function (f,ch,meta45244,_,fn1,meta45247){
this.f = f;
this.ch = ch;
this.meta45244 = meta45244;
this._ = _;
this.fn1 = fn1;
this.meta45247 = meta45247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45248,meta45247__$1){
var self__ = this;
var _45248__$1 = this;
return (new cljs.core.async.t_cljs$core$async45246(self__.f,self__.ch,self__.meta45244,self__._,self__.fn1,meta45247__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45248){
var self__ = this;
var _45248__$1 = this;
return self__.meta45247;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45246.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45246.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45246.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45246.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45242_SHARP_){
var G__45251 = (((p1__45242_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45242_SHARP_) : self__.f.call(null,p1__45242_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45251) : f1.call(null,G__45251));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45246.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45244","meta45244",-1943718661,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45243","cljs.core.async/t_cljs$core$async45243",321772678,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45247","meta45247",-853915541,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45246";

cljs.core.async.t_cljs$core$async45246.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45246");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45246.
 */
cljs.core.async.__GT_t_cljs$core$async45246 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45246(f__$1,ch__$1,meta45244__$1,___$2,fn1__$1,meta45247){
return (new cljs.core.async.t_cljs$core$async45246(f__$1,ch__$1,meta45244__$1,___$2,fn1__$1,meta45247));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45246(self__.f,self__.ch,self__.meta45244,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45253 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45253) : self__.f.call(null,G__45253));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45243.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45243.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45244","meta45244",-1943718661,null)], null);
});

cljs.core.async.t_cljs$core$async45243.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45243";

cljs.core.async.t_cljs$core$async45243.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45243");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45243.
 */
cljs.core.async.__GT_t_cljs$core$async45243 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45243(f__$1,ch__$1,meta45244){
return (new cljs.core.async.t_cljs$core$async45243(f__$1,ch__$1,meta45244));
});

}

return (new cljs.core.async.t_cljs$core$async45243(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45262 = (function (f,ch,meta45263){
this.f = f;
this.ch = ch;
this.meta45263 = meta45263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45264,meta45263__$1){
var self__ = this;
var _45264__$1 = this;
return (new cljs.core.async.t_cljs$core$async45262(self__.f,self__.ch,meta45263__$1));
});

cljs.core.async.t_cljs$core$async45262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45264){
var self__ = this;
var _45264__$1 = this;
return self__.meta45263;
});

cljs.core.async.t_cljs$core$async45262.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45262.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async45262.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45262.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45262.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45262.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async45262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45263","meta45263",-1213527839,null)], null);
});

cljs.core.async.t_cljs$core$async45262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45262";

cljs.core.async.t_cljs$core$async45262.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45262");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45262.
 */
cljs.core.async.__GT_t_cljs$core$async45262 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45262(f__$1,ch__$1,meta45263){
return (new cljs.core.async.t_cljs$core$async45262(f__$1,ch__$1,meta45263));
});

}

return (new cljs.core.async.t_cljs$core$async45262(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45277 = (function (p,ch,meta45278){
this.p = p;
this.ch = ch;
this.meta45278 = meta45278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45279,meta45278__$1){
var self__ = this;
var _45279__$1 = this;
return (new cljs.core.async.t_cljs$core$async45277(self__.p,self__.ch,meta45278__$1));
});

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45279){
var self__ = this;
var _45279__$1 = this;
return self__.meta45278;
});

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45277.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45278","meta45278",1297532003,null)], null);
});

cljs.core.async.t_cljs$core$async45277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45277";

cljs.core.async.t_cljs$core$async45277.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45277");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45277.
 */
cljs.core.async.__GT_t_cljs$core$async45277 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45277(p__$1,ch__$1,meta45278){
return (new cljs.core.async.t_cljs$core$async45277(p__$1,ch__$1,meta45278));
});

}

return (new cljs.core.async.t_cljs$core$async45277(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45303 = arguments.length;
switch (G__45303) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43429__auto___47019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___47019,out){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___47019,out){
return (function (state_45328){
var state_val_45329 = (state_45328[(1)]);
if((state_val_45329 === (7))){
var inst_45324 = (state_45328[(2)]);
var state_45328__$1 = state_45328;
var statearr_45330_47020 = state_45328__$1;
(statearr_45330_47020[(2)] = inst_45324);

(statearr_45330_47020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (1))){
var state_45328__$1 = state_45328;
var statearr_45332_47021 = state_45328__$1;
(statearr_45332_47021[(2)] = null);

(statearr_45332_47021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (4))){
var inst_45310 = (state_45328[(7)]);
var inst_45310__$1 = (state_45328[(2)]);
var inst_45311 = (inst_45310__$1 == null);
var state_45328__$1 = (function (){var statearr_45333 = state_45328;
(statearr_45333[(7)] = inst_45310__$1);

return statearr_45333;
})();
if(cljs.core.truth_(inst_45311)){
var statearr_45334_47022 = state_45328__$1;
(statearr_45334_47022[(1)] = (5));

} else {
var statearr_45335_47023 = state_45328__$1;
(statearr_45335_47023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (6))){
var inst_45310 = (state_45328[(7)]);
var inst_45315 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45310) : p.call(null,inst_45310));
var state_45328__$1 = state_45328;
if(cljs.core.truth_(inst_45315)){
var statearr_45337_47025 = state_45328__$1;
(statearr_45337_47025[(1)] = (8));

} else {
var statearr_45338_47026 = state_45328__$1;
(statearr_45338_47026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (3))){
var inst_45326 = (state_45328[(2)]);
var state_45328__$1 = state_45328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45328__$1,inst_45326);
} else {
if((state_val_45329 === (2))){
var state_45328__$1 = state_45328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45328__$1,(4),ch);
} else {
if((state_val_45329 === (11))){
var inst_45318 = (state_45328[(2)]);
var state_45328__$1 = state_45328;
var statearr_45339_47027 = state_45328__$1;
(statearr_45339_47027[(2)] = inst_45318);

(statearr_45339_47027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (9))){
var state_45328__$1 = state_45328;
var statearr_45340_47028 = state_45328__$1;
(statearr_45340_47028[(2)] = null);

(statearr_45340_47028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (5))){
var inst_45313 = cljs.core.async.close_BANG_(out);
var state_45328__$1 = state_45328;
var statearr_45341_47031 = state_45328__$1;
(statearr_45341_47031[(2)] = inst_45313);

(statearr_45341_47031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (10))){
var inst_45321 = (state_45328[(2)]);
var state_45328__$1 = (function (){var statearr_45342 = state_45328;
(statearr_45342[(8)] = inst_45321);

return statearr_45342;
})();
var statearr_45343_47032 = state_45328__$1;
(statearr_45343_47032[(2)] = null);

(statearr_45343_47032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45329 === (8))){
var inst_45310 = (state_45328[(7)]);
var state_45328__$1 = state_45328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45328__$1,(11),out,inst_45310);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto___47019,out))
;
return ((function (switch__43155__auto__,c__43429__auto___47019,out){
return (function() {
var cljs$core$async$state_machine__43156__auto__ = null;
var cljs$core$async$state_machine__43156__auto____0 = (function (){
var statearr_45344 = [null,null,null,null,null,null,null,null,null];
(statearr_45344[(0)] = cljs$core$async$state_machine__43156__auto__);

(statearr_45344[(1)] = (1));

return statearr_45344;
});
var cljs$core$async$state_machine__43156__auto____1 = (function (state_45328){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_45328);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e45345){if((e45345 instanceof Object)){
var ex__43159__auto__ = e45345;
var statearr_45346_47035 = state_45328;
(statearr_45346_47035[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45345;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47036 = state_45328;
state_45328 = G__47036;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$state_machine__43156__auto__ = function(state_45328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43156__auto____1.call(this,state_45328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43156__auto____0;
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43156__auto____1;
return cljs$core$async$state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___47019,out))
})();
var state__43431__auto__ = (function (){var statearr_45347 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_45347[(6)] = c__43429__auto___47019);

return statearr_45347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___47019,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45352 = arguments.length;
switch (G__45352) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43429__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto__){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto__){
return (function (state_45416){
var state_val_45417 = (state_45416[(1)]);
if((state_val_45417 === (7))){
var inst_45412 = (state_45416[(2)]);
var state_45416__$1 = state_45416;
var statearr_45418_47044 = state_45416__$1;
(statearr_45418_47044[(2)] = inst_45412);

(statearr_45418_47044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (20))){
var inst_45382 = (state_45416[(7)]);
var inst_45393 = (state_45416[(2)]);
var inst_45394 = cljs.core.next(inst_45382);
var inst_45367 = inst_45394;
var inst_45368 = null;
var inst_45369 = (0);
var inst_45370 = (0);
var state_45416__$1 = (function (){var statearr_45419 = state_45416;
(statearr_45419[(8)] = inst_45393);

(statearr_45419[(9)] = inst_45369);

(statearr_45419[(10)] = inst_45367);

(statearr_45419[(11)] = inst_45368);

(statearr_45419[(12)] = inst_45370);

return statearr_45419;
})();
var statearr_45420_47055 = state_45416__$1;
(statearr_45420_47055[(2)] = null);

(statearr_45420_47055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (1))){
var state_45416__$1 = state_45416;
var statearr_45421_47057 = state_45416__$1;
(statearr_45421_47057[(2)] = null);

(statearr_45421_47057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (4))){
var inst_45356 = (state_45416[(13)]);
var inst_45356__$1 = (state_45416[(2)]);
var inst_45357 = (inst_45356__$1 == null);
var state_45416__$1 = (function (){var statearr_45425 = state_45416;
(statearr_45425[(13)] = inst_45356__$1);

return statearr_45425;
})();
if(cljs.core.truth_(inst_45357)){
var statearr_45426_47068 = state_45416__$1;
(statearr_45426_47068[(1)] = (5));

} else {
var statearr_45427_47074 = state_45416__$1;
(statearr_45427_47074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (15))){
var state_45416__$1 = state_45416;
var statearr_45431_47076 = state_45416__$1;
(statearr_45431_47076[(2)] = null);

(statearr_45431_47076[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (21))){
var state_45416__$1 = state_45416;
var statearr_45435_47081 = state_45416__$1;
(statearr_45435_47081[(2)] = null);

(statearr_45435_47081[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (13))){
var inst_45369 = (state_45416[(9)]);
var inst_45367 = (state_45416[(10)]);
var inst_45368 = (state_45416[(11)]);
var inst_45370 = (state_45416[(12)]);
var inst_45377 = (state_45416[(2)]);
var inst_45379 = (inst_45370 + (1));
var tmp45428 = inst_45369;
var tmp45429 = inst_45367;
var tmp45430 = inst_45368;
var inst_45367__$1 = tmp45429;
var inst_45368__$1 = tmp45430;
var inst_45369__$1 = tmp45428;
var inst_45370__$1 = inst_45379;
var state_45416__$1 = (function (){var statearr_45436 = state_45416;
(statearr_45436[(9)] = inst_45369__$1);

(statearr_45436[(10)] = inst_45367__$1);

(statearr_45436[(11)] = inst_45368__$1);

(statearr_45436[(14)] = inst_45377);

(statearr_45436[(12)] = inst_45370__$1);

return statearr_45436;
})();
var statearr_45437_47106 = state_45416__$1;
(statearr_45437_47106[(2)] = null);

(statearr_45437_47106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (22))){
var state_45416__$1 = state_45416;
var statearr_45440_47108 = state_45416__$1;
(statearr_45440_47108[(2)] = null);

(statearr_45440_47108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (6))){
var inst_45356 = (state_45416[(13)]);
var inst_45365 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45356) : f.call(null,inst_45356));
var inst_45366 = cljs.core.seq(inst_45365);
var inst_45367 = inst_45366;
var inst_45368 = null;
var inst_45369 = (0);
var inst_45370 = (0);
var state_45416__$1 = (function (){var statearr_45442 = state_45416;
(statearr_45442[(9)] = inst_45369);

(statearr_45442[(10)] = inst_45367);

(statearr_45442[(11)] = inst_45368);

(statearr_45442[(12)] = inst_45370);

return statearr_45442;
})();
var statearr_45443_47124 = state_45416__$1;
(statearr_45443_47124[(2)] = null);

(statearr_45443_47124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (17))){
var inst_45382 = (state_45416[(7)]);
var inst_45386 = cljs.core.chunk_first(inst_45382);
var inst_45387 = cljs.core.chunk_rest(inst_45382);
var inst_45388 = cljs.core.count(inst_45386);
var inst_45367 = inst_45387;
var inst_45368 = inst_45386;
var inst_45369 = inst_45388;
var inst_45370 = (0);
var state_45416__$1 = (function (){var statearr_45444 = state_45416;
(statearr_45444[(9)] = inst_45369);

(statearr_45444[(10)] = inst_45367);

(statearr_45444[(11)] = inst_45368);

(statearr_45444[(12)] = inst_45370);

return statearr_45444;
})();
var statearr_45445_47142 = state_45416__$1;
(statearr_45445_47142[(2)] = null);

(statearr_45445_47142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (3))){
var inst_45414 = (state_45416[(2)]);
var state_45416__$1 = state_45416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45416__$1,inst_45414);
} else {
if((state_val_45417 === (12))){
var inst_45402 = (state_45416[(2)]);
var state_45416__$1 = state_45416;
var statearr_45446_47143 = state_45416__$1;
(statearr_45446_47143[(2)] = inst_45402);

(statearr_45446_47143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (2))){
var state_45416__$1 = state_45416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45416__$1,(4),in$);
} else {
if((state_val_45417 === (23))){
var inst_45410 = (state_45416[(2)]);
var state_45416__$1 = state_45416;
var statearr_45449_47144 = state_45416__$1;
(statearr_45449_47144[(2)] = inst_45410);

(statearr_45449_47144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (19))){
var inst_45397 = (state_45416[(2)]);
var state_45416__$1 = state_45416;
var statearr_45450_47145 = state_45416__$1;
(statearr_45450_47145[(2)] = inst_45397);

(statearr_45450_47145[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (11))){
var inst_45367 = (state_45416[(10)]);
var inst_45382 = (state_45416[(7)]);
var inst_45382__$1 = cljs.core.seq(inst_45367);
var state_45416__$1 = (function (){var statearr_45451 = state_45416;
(statearr_45451[(7)] = inst_45382__$1);

return statearr_45451;
})();
if(inst_45382__$1){
var statearr_45452_47146 = state_45416__$1;
(statearr_45452_47146[(1)] = (14));

} else {
var statearr_45453_47147 = state_45416__$1;
(statearr_45453_47147[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (9))){
var inst_45404 = (state_45416[(2)]);
var inst_45405 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45416__$1 = (function (){var statearr_45454 = state_45416;
(statearr_45454[(15)] = inst_45404);

return statearr_45454;
})();
if(cljs.core.truth_(inst_45405)){
var statearr_45456_47152 = state_45416__$1;
(statearr_45456_47152[(1)] = (21));

} else {
var statearr_45457_47157 = state_45416__$1;
(statearr_45457_47157[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (5))){
var inst_45359 = cljs.core.async.close_BANG_(out);
var state_45416__$1 = state_45416;
var statearr_45458_47166 = state_45416__$1;
(statearr_45458_47166[(2)] = inst_45359);

(statearr_45458_47166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (14))){
var inst_45382 = (state_45416[(7)]);
var inst_45384 = cljs.core.chunked_seq_QMARK_(inst_45382);
var state_45416__$1 = state_45416;
if(inst_45384){
var statearr_45459_47167 = state_45416__$1;
(statearr_45459_47167[(1)] = (17));

} else {
var statearr_45460_47168 = state_45416__$1;
(statearr_45460_47168[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (16))){
var inst_45400 = (state_45416[(2)]);
var state_45416__$1 = state_45416;
var statearr_45461_47170 = state_45416__$1;
(statearr_45461_47170[(2)] = inst_45400);

(statearr_45461_47170[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45417 === (10))){
var inst_45368 = (state_45416[(11)]);
var inst_45370 = (state_45416[(12)]);
var inst_45375 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45368,inst_45370);
var state_45416__$1 = state_45416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45416__$1,(13),out,inst_45375);
} else {
if((state_val_45417 === (18))){
var inst_45382 = (state_45416[(7)]);
var inst_45391 = cljs.core.first(inst_45382);
var state_45416__$1 = state_45416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45416__$1,(20),out,inst_45391);
} else {
if((state_val_45417 === (8))){
var inst_45369 = (state_45416[(9)]);
var inst_45370 = (state_45416[(12)]);
var inst_45372 = (inst_45370 < inst_45369);
var inst_45373 = inst_45372;
var state_45416__$1 = state_45416;
if(cljs.core.truth_(inst_45373)){
var statearr_45474_47172 = state_45416__$1;
(statearr_45474_47172[(1)] = (10));

} else {
var statearr_45475_47173 = state_45416__$1;
(statearr_45475_47173[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto__))
;
return ((function (switch__43155__auto__,c__43429__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43156__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43156__auto____0 = (function (){
var statearr_45476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45476[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43156__auto__);

(statearr_45476[(1)] = (1));

return statearr_45476;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43156__auto____1 = (function (state_45416){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_45416);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e45477){if((e45477 instanceof Object)){
var ex__43159__auto__ = e45477;
var statearr_45478_47178 = state_45416;
(statearr_45478_47178[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45477;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47179 = state_45416;
state_45416 = G__47179;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43156__auto__ = function(state_45416){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43156__auto____1.call(this,state_45416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43156__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43156__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto__))
})();
var state__43431__auto__ = (function (){var statearr_45479 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_45479[(6)] = c__43429__auto__);

return statearr_45479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto__))
);

return c__43429__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45482 = arguments.length;
switch (G__45482) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45484 = arguments.length;
switch (G__45484) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45490 = arguments.length;
switch (G__45490) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43429__auto___47210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___47210,out){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___47210,out){
return (function (state_45523){
var state_val_45524 = (state_45523[(1)]);
if((state_val_45524 === (7))){
var inst_45518 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
var statearr_45525_47211 = state_45523__$1;
(statearr_45525_47211[(2)] = inst_45518);

(statearr_45525_47211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (1))){
var inst_45496 = null;
var state_45523__$1 = (function (){var statearr_45526 = state_45523;
(statearr_45526[(7)] = inst_45496);

return statearr_45526;
})();
var statearr_45527_47222 = state_45523__$1;
(statearr_45527_47222[(2)] = null);

(statearr_45527_47222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (4))){
var inst_45500 = (state_45523[(8)]);
var inst_45500__$1 = (state_45523[(2)]);
var inst_45501 = (inst_45500__$1 == null);
var inst_45502 = cljs.core.not(inst_45501);
var state_45523__$1 = (function (){var statearr_45528 = state_45523;
(statearr_45528[(8)] = inst_45500__$1);

return statearr_45528;
})();
if(inst_45502){
var statearr_45529_47234 = state_45523__$1;
(statearr_45529_47234[(1)] = (5));

} else {
var statearr_45531_47235 = state_45523__$1;
(statearr_45531_47235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (6))){
var state_45523__$1 = state_45523;
var statearr_45532_47239 = state_45523__$1;
(statearr_45532_47239[(2)] = null);

(statearr_45532_47239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (3))){
var inst_45520 = (state_45523[(2)]);
var inst_45521 = cljs.core.async.close_BANG_(out);
var state_45523__$1 = (function (){var statearr_45533 = state_45523;
(statearr_45533[(9)] = inst_45520);

return statearr_45533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45523__$1,inst_45521);
} else {
if((state_val_45524 === (2))){
var state_45523__$1 = state_45523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45523__$1,(4),ch);
} else {
if((state_val_45524 === (11))){
var inst_45500 = (state_45523[(8)]);
var inst_45512 = (state_45523[(2)]);
var inst_45496 = inst_45500;
var state_45523__$1 = (function (){var statearr_45534 = state_45523;
(statearr_45534[(10)] = inst_45512);

(statearr_45534[(7)] = inst_45496);

return statearr_45534;
})();
var statearr_45535_47244 = state_45523__$1;
(statearr_45535_47244[(2)] = null);

(statearr_45535_47244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (9))){
var inst_45500 = (state_45523[(8)]);
var state_45523__$1 = state_45523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45523__$1,(11),out,inst_45500);
} else {
if((state_val_45524 === (5))){
var inst_45500 = (state_45523[(8)]);
var inst_45496 = (state_45523[(7)]);
var inst_45507 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45500,inst_45496);
var state_45523__$1 = state_45523;
if(inst_45507){
var statearr_45537_47246 = state_45523__$1;
(statearr_45537_47246[(1)] = (8));

} else {
var statearr_45538_47247 = state_45523__$1;
(statearr_45538_47247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (10))){
var inst_45515 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
var statearr_45540_47248 = state_45523__$1;
(statearr_45540_47248[(2)] = inst_45515);

(statearr_45540_47248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (8))){
var inst_45496 = (state_45523[(7)]);
var tmp45536 = inst_45496;
var inst_45496__$1 = tmp45536;
var state_45523__$1 = (function (){var statearr_45542 = state_45523;
(statearr_45542[(7)] = inst_45496__$1);

return statearr_45542;
})();
var statearr_45543_47249 = state_45523__$1;
(statearr_45543_47249[(2)] = null);

(statearr_45543_47249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto___47210,out))
;
return ((function (switch__43155__auto__,c__43429__auto___47210,out){
return (function() {
var cljs$core$async$state_machine__43156__auto__ = null;
var cljs$core$async$state_machine__43156__auto____0 = (function (){
var statearr_45544 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45544[(0)] = cljs$core$async$state_machine__43156__auto__);

(statearr_45544[(1)] = (1));

return statearr_45544;
});
var cljs$core$async$state_machine__43156__auto____1 = (function (state_45523){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_45523);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e45545){if((e45545 instanceof Object)){
var ex__43159__auto__ = e45545;
var statearr_45546_47250 = state_45523;
(statearr_45546_47250[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45545;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47253 = state_45523;
state_45523 = G__47253;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$state_machine__43156__auto__ = function(state_45523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43156__auto____1.call(this,state_45523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43156__auto____0;
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43156__auto____1;
return cljs$core$async$state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___47210,out))
})();
var state__43431__auto__ = (function (){var statearr_45547 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_45547[(6)] = c__43429__auto___47210);

return statearr_45547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___47210,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45553 = arguments.length;
switch (G__45553) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43429__auto___47269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___47269,out){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___47269,out){
return (function (state_45599){
var state_val_45600 = (state_45599[(1)]);
if((state_val_45600 === (7))){
var inst_45595 = (state_45599[(2)]);
var state_45599__$1 = state_45599;
var statearr_45605_47270 = state_45599__$1;
(statearr_45605_47270[(2)] = inst_45595);

(statearr_45605_47270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45600 === (1))){
var inst_45562 = (new Array(n));
var inst_45563 = inst_45562;
var inst_45564 = (0);
var state_45599__$1 = (function (){var statearr_45608 = state_45599;
(statearr_45608[(7)] = inst_45563);

(statearr_45608[(8)] = inst_45564);

return statearr_45608;
})();
var statearr_45609_47272 = state_45599__$1;
(statearr_45609_47272[(2)] = null);

(statearr_45609_47272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45600 === (4))){
var inst_45567 = (state_45599[(9)]);
var inst_45567__$1 = (state_45599[(2)]);
var inst_45568 = (inst_45567__$1 == null);
var inst_45569 = cljs.core.not(inst_45568);
var state_45599__$1 = (function (){var statearr_45612 = state_45599;
(statearr_45612[(9)] = inst_45567__$1);

return statearr_45612;
})();
if(inst_45569){
var statearr_45613_47280 = state_45599__$1;
(statearr_45613_47280[(1)] = (5));

} else {
var statearr_45614_47281 = state_45599__$1;
(statearr_45614_47281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45600 === (15))){
var inst_45589 = (state_45599[(2)]);
var state_45599__$1 = state_45599;
var statearr_45615_47282 = state_45599__$1;
(statearr_45615_47282[(2)] = inst_45589);

(statearr_45615_47282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45600 === (13))){
var state_45599__$1 = state_45599;
var statearr_45619_47283 = state_45599__$1;
(statearr_45619_47283[(2)] = null);

(statearr_45619_47283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45600 === (6))){
var inst_45564 = (state_45599[(8)]);
var inst_45585 = (inst_45564 > (0));
var state_45599__$1 = state_45599;
if(cljs.core.truth_(inst_45585)){
var statearr_45621_47284 = state_45599__$1;
(statearr_45621_47284[(1)] = (12));

} else {
var statearr_45622_47285 = state_45599__$1;
(statearr_45622_47285[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45600 === (3))){
var inst_45597 = (state_45599[(2)]);
var state_45599__$1 = state_45599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45599__$1,inst_45597);
} else {
if((state_val_45600 === (12))){
var inst_45563 = (state_45599[(7)]);
var inst_45587 = cljs.core.vec(inst_45563);
var state_45599__$1 = state_45599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45599__$1,(15),out,inst_45587);
} else {
if((state_val_45600 === (2))){
var state_45599__$1 = state_45599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45599__$1,(4),ch);
} else {
if((state_val_45600 === (11))){
var inst_45579 = (state_45599[(2)]);
var inst_45580 = (new Array(n));
var inst_45563 = inst_45580;
var inst_45564 = (0);
var state_45599__$1 = (function (){var statearr_45628 = state_45599;
(statearr_45628[(10)] = inst_45579);

(statearr_45628[(7)] = inst_45563);

(statearr_45628[(8)] = inst_45564);

return statearr_45628;
})();
var statearr_45630_47289 = state_45599__$1;
(statearr_45630_47289[(2)] = null);

(statearr_45630_47289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45600 === (9))){
var inst_45563 = (state_45599[(7)]);
var inst_45577 = cljs.core.vec(inst_45563);
var state_45599__$1 = state_45599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45599__$1,(11),out,inst_45577);
} else {
if((state_val_45600 === (5))){
var inst_45563 = (state_45599[(7)]);
var inst_45567 = (state_45599[(9)]);
var inst_45572 = (state_45599[(11)]);
var inst_45564 = (state_45599[(8)]);
var inst_45571 = (inst_45563[inst_45564] = inst_45567);
var inst_45572__$1 = (inst_45564 + (1));
var inst_45573 = (inst_45572__$1 < n);
var state_45599__$1 = (function (){var statearr_45633 = state_45599;
(statearr_45633[(12)] = inst_45571);

(statearr_45633[(11)] = inst_45572__$1);

return statearr_45633;
})();
if(cljs.core.truth_(inst_45573)){
var statearr_45634_47293 = state_45599__$1;
(statearr_45634_47293[(1)] = (8));

} else {
var statearr_45635_47294 = state_45599__$1;
(statearr_45635_47294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45600 === (14))){
var inst_45592 = (state_45599[(2)]);
var inst_45593 = cljs.core.async.close_BANG_(out);
var state_45599__$1 = (function (){var statearr_45637 = state_45599;
(statearr_45637[(13)] = inst_45592);

return statearr_45637;
})();
var statearr_45638_47295 = state_45599__$1;
(statearr_45638_47295[(2)] = inst_45593);

(statearr_45638_47295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45600 === (10))){
var inst_45583 = (state_45599[(2)]);
var state_45599__$1 = state_45599;
var statearr_45639_47296 = state_45599__$1;
(statearr_45639_47296[(2)] = inst_45583);

(statearr_45639_47296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45600 === (8))){
var inst_45563 = (state_45599[(7)]);
var inst_45572 = (state_45599[(11)]);
var tmp45636 = inst_45563;
var inst_45563__$1 = tmp45636;
var inst_45564 = inst_45572;
var state_45599__$1 = (function (){var statearr_45640 = state_45599;
(statearr_45640[(7)] = inst_45563__$1);

(statearr_45640[(8)] = inst_45564);

return statearr_45640;
})();
var statearr_45641_47297 = state_45599__$1;
(statearr_45641_47297[(2)] = null);

(statearr_45641_47297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto___47269,out))
;
return ((function (switch__43155__auto__,c__43429__auto___47269,out){
return (function() {
var cljs$core$async$state_machine__43156__auto__ = null;
var cljs$core$async$state_machine__43156__auto____0 = (function (){
var statearr_45646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45646[(0)] = cljs$core$async$state_machine__43156__auto__);

(statearr_45646[(1)] = (1));

return statearr_45646;
});
var cljs$core$async$state_machine__43156__auto____1 = (function (state_45599){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_45599);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e45649){if((e45649 instanceof Object)){
var ex__43159__auto__ = e45649;
var statearr_45650_47302 = state_45599;
(statearr_45650_47302[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45649;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47303 = state_45599;
state_45599 = G__47303;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$state_machine__43156__auto__ = function(state_45599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43156__auto____1.call(this,state_45599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43156__auto____0;
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43156__auto____1;
return cljs$core$async$state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___47269,out))
})();
var state__43431__auto__ = (function (){var statearr_45658 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_45658[(6)] = c__43429__auto___47269);

return statearr_45658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___47269,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45664 = arguments.length;
switch (G__45664) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43429__auto___47309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__43429__auto___47309,out){
return (function (){
var f__43430__auto__ = (function (){var switch__43155__auto__ = ((function (c__43429__auto___47309,out){
return (function (state_45715){
var state_val_45716 = (state_45715[(1)]);
if((state_val_45716 === (7))){
var inst_45711 = (state_45715[(2)]);
var state_45715__$1 = state_45715;
var statearr_45724_47310 = state_45715__$1;
(statearr_45724_47310[(2)] = inst_45711);

(statearr_45724_47310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45716 === (1))){
var inst_45669 = [];
var inst_45670 = inst_45669;
var inst_45671 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45715__$1 = (function (){var statearr_45725 = state_45715;
(statearr_45725[(7)] = inst_45671);

(statearr_45725[(8)] = inst_45670);

return statearr_45725;
})();
var statearr_45726_47312 = state_45715__$1;
(statearr_45726_47312[(2)] = null);

(statearr_45726_47312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45716 === (4))){
var inst_45677 = (state_45715[(9)]);
var inst_45677__$1 = (state_45715[(2)]);
var inst_45678 = (inst_45677__$1 == null);
var inst_45679 = cljs.core.not(inst_45678);
var state_45715__$1 = (function (){var statearr_45728 = state_45715;
(statearr_45728[(9)] = inst_45677__$1);

return statearr_45728;
})();
if(inst_45679){
var statearr_45733_47313 = state_45715__$1;
(statearr_45733_47313[(1)] = (5));

} else {
var statearr_45734_47314 = state_45715__$1;
(statearr_45734_47314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45716 === (15))){
var inst_45705 = (state_45715[(2)]);
var state_45715__$1 = state_45715;
var statearr_45736_47315 = state_45715__$1;
(statearr_45736_47315[(2)] = inst_45705);

(statearr_45736_47315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45716 === (13))){
var state_45715__$1 = state_45715;
var statearr_45737_47316 = state_45715__$1;
(statearr_45737_47316[(2)] = null);

(statearr_45737_47316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45716 === (6))){
var inst_45670 = (state_45715[(8)]);
var inst_45700 = inst_45670.length;
var inst_45701 = (inst_45700 > (0));
var state_45715__$1 = state_45715;
if(cljs.core.truth_(inst_45701)){
var statearr_45738_47317 = state_45715__$1;
(statearr_45738_47317[(1)] = (12));

} else {
var statearr_45739_47318 = state_45715__$1;
(statearr_45739_47318[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45716 === (3))){
var inst_45713 = (state_45715[(2)]);
var state_45715__$1 = state_45715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45715__$1,inst_45713);
} else {
if((state_val_45716 === (12))){
var inst_45670 = (state_45715[(8)]);
var inst_45703 = cljs.core.vec(inst_45670);
var state_45715__$1 = state_45715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45715__$1,(15),out,inst_45703);
} else {
if((state_val_45716 === (2))){
var state_45715__$1 = state_45715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45715__$1,(4),ch);
} else {
if((state_val_45716 === (11))){
var inst_45677 = (state_45715[(9)]);
var inst_45682 = (state_45715[(10)]);
var inst_45693 = (state_45715[(2)]);
var inst_45694 = [];
var inst_45695 = inst_45694.push(inst_45677);
var inst_45670 = inst_45694;
var inst_45671 = inst_45682;
var state_45715__$1 = (function (){var statearr_45741 = state_45715;
(statearr_45741[(11)] = inst_45693);

(statearr_45741[(12)] = inst_45695);

(statearr_45741[(7)] = inst_45671);

(statearr_45741[(8)] = inst_45670);

return statearr_45741;
})();
var statearr_45742_47322 = state_45715__$1;
(statearr_45742_47322[(2)] = null);

(statearr_45742_47322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45716 === (9))){
var inst_45670 = (state_45715[(8)]);
var inst_45691 = cljs.core.vec(inst_45670);
var state_45715__$1 = state_45715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45715__$1,(11),out,inst_45691);
} else {
if((state_val_45716 === (5))){
var inst_45677 = (state_45715[(9)]);
var inst_45682 = (state_45715[(10)]);
var inst_45671 = (state_45715[(7)]);
var inst_45682__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45677) : f.call(null,inst_45677));
var inst_45684 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45682__$1,inst_45671);
var inst_45685 = cljs.core.keyword_identical_QMARK_(inst_45671,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45686 = ((inst_45684) || (inst_45685));
var state_45715__$1 = (function (){var statearr_45743 = state_45715;
(statearr_45743[(10)] = inst_45682__$1);

return statearr_45743;
})();
if(cljs.core.truth_(inst_45686)){
var statearr_45744_47324 = state_45715__$1;
(statearr_45744_47324[(1)] = (8));

} else {
var statearr_45745_47325 = state_45715__$1;
(statearr_45745_47325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45716 === (14))){
var inst_45708 = (state_45715[(2)]);
var inst_45709 = cljs.core.async.close_BANG_(out);
var state_45715__$1 = (function (){var statearr_45747 = state_45715;
(statearr_45747[(13)] = inst_45708);

return statearr_45747;
})();
var statearr_45752_47326 = state_45715__$1;
(statearr_45752_47326[(2)] = inst_45709);

(statearr_45752_47326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45716 === (10))){
var inst_45698 = (state_45715[(2)]);
var state_45715__$1 = state_45715;
var statearr_45753_47329 = state_45715__$1;
(statearr_45753_47329[(2)] = inst_45698);

(statearr_45753_47329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45716 === (8))){
var inst_45677 = (state_45715[(9)]);
var inst_45682 = (state_45715[(10)]);
var inst_45670 = (state_45715[(8)]);
var inst_45688 = inst_45670.push(inst_45677);
var tmp45746 = inst_45670;
var inst_45670__$1 = tmp45746;
var inst_45671 = inst_45682;
var state_45715__$1 = (function (){var statearr_45755 = state_45715;
(statearr_45755[(14)] = inst_45688);

(statearr_45755[(7)] = inst_45671);

(statearr_45755[(8)] = inst_45670__$1);

return statearr_45755;
})();
var statearr_45757_47333 = state_45715__$1;
(statearr_45757_47333[(2)] = null);

(statearr_45757_47333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43429__auto___47309,out))
;
return ((function (switch__43155__auto__,c__43429__auto___47309,out){
return (function() {
var cljs$core$async$state_machine__43156__auto__ = null;
var cljs$core$async$state_machine__43156__auto____0 = (function (){
var statearr_45760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45760[(0)] = cljs$core$async$state_machine__43156__auto__);

(statearr_45760[(1)] = (1));

return statearr_45760;
});
var cljs$core$async$state_machine__43156__auto____1 = (function (state_45715){
while(true){
var ret_value__43157__auto__ = (function (){try{while(true){
var result__43158__auto__ = switch__43155__auto__(state_45715);
if(cljs.core.keyword_identical_QMARK_(result__43158__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43158__auto__;
}
break;
}
}catch (e45763){if((e45763 instanceof Object)){
var ex__43159__auto__ = e45763;
var statearr_45765_47337 = state_45715;
(statearr_45765_47337[(5)] = ex__43159__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45763;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43157__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47338 = state_45715;
state_45715 = G__47338;
continue;
} else {
return ret_value__43157__auto__;
}
break;
}
});
cljs$core$async$state_machine__43156__auto__ = function(state_45715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43156__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43156__auto____1.call(this,state_45715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43156__auto____0;
cljs$core$async$state_machine__43156__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43156__auto____1;
return cljs$core$async$state_machine__43156__auto__;
})()
;})(switch__43155__auto__,c__43429__auto___47309,out))
})();
var state__43431__auto__ = (function (){var statearr_45768 = (f__43430__auto__.cljs$core$IFn$_invoke$arity$0 ? f__43430__auto__.cljs$core$IFn$_invoke$arity$0() : f__43430__auto__.call(null));
(statearr_45768[(6)] = c__43429__auto___47309);

return statearr_45768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43431__auto__);
});})(c__43429__auto___47309,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
