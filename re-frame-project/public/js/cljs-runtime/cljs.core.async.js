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
var G__46584 = arguments.length;
switch (G__46584) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46585 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46585 = (function (f,blockable,meta46586){
this.f = f;
this.blockable = blockable;
this.meta46586 = meta46586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46587,meta46586__$1){
var self__ = this;
var _46587__$1 = this;
return (new cljs.core.async.t_cljs$core$async46585(self__.f,self__.blockable,meta46586__$1));
});

cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46587){
var self__ = this;
var _46587__$1 = this;
return self__.meta46586;
});

cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46586","meta46586",213826587,null)], null);
});

cljs.core.async.t_cljs$core$async46585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46585";

cljs.core.async.t_cljs$core$async46585.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46585");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46585.
 */
cljs.core.async.__GT_t_cljs$core$async46585 = (function cljs$core$async$__GT_t_cljs$core$async46585(f__$1,blockable__$1,meta46586){
return (new cljs.core.async.t_cljs$core$async46585(f__$1,blockable__$1,meta46586));
});

}

return (new cljs.core.async.t_cljs$core$async46585(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46590 = arguments.length;
switch (G__46590) {
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
var G__46592 = arguments.length;
switch (G__46592) {
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
var G__46594 = arguments.length;
switch (G__46594) {
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
var val_48041 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48041) : fn1.call(null,val_48041));
} else {
cljs.core.async.impl.dispatch.run(((function (val_48041,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48041) : fn1.call(null,val_48041));
});})(val_48041,ret))
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
var G__46596 = arguments.length;
switch (G__46596) {
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
var n__4607__auto___48056 = n;
var x_48059 = (0);
while(true){
if((x_48059 < n__4607__auto___48056)){
(a[x_48059] = x_48059);

var G__48060 = (x_48059 + (1));
x_48059 = G__48060;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46597 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46597 = (function (flag,meta46598){
this.flag = flag;
this.meta46598 = meta46598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46599,meta46598__$1){
var self__ = this;
var _46599__$1 = this;
return (new cljs.core.async.t_cljs$core$async46597(self__.flag,meta46598__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46599){
var self__ = this;
var _46599__$1 = this;
return self__.meta46598;
});})(flag))
;

cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46597.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46597.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46598","meta46598",1104093729,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46597";

cljs.core.async.t_cljs$core$async46597.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46597");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46597.
 */
cljs.core.async.__GT_t_cljs$core$async46597 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46597(flag__$1,meta46598){
return (new cljs.core.async.t_cljs$core$async46597(flag__$1,meta46598));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46597(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46600 = (function (flag,cb,meta46601){
this.flag = flag;
this.cb = cb;
this.meta46601 = meta46601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46602,meta46601__$1){
var self__ = this;
var _46602__$1 = this;
return (new cljs.core.async.t_cljs$core$async46600(self__.flag,self__.cb,meta46601__$1));
});

cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46602){
var self__ = this;
var _46602__$1 = this;
return self__.meta46601;
});

cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46601","meta46601",404800969,null)], null);
});

cljs.core.async.t_cljs$core$async46600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46600";

cljs.core.async.t_cljs$core$async46600.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46600");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46600.
 */
cljs.core.async.__GT_t_cljs$core$async46600 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46600(flag__$1,cb__$1,meta46601){
return (new cljs.core.async.t_cljs$core$async46600(flag__$1,cb__$1,meta46601));
});

}

return (new cljs.core.async.t_cljs$core$async46600(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46603_SHARP_){
var G__46605 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46603_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46605) : fret.call(null,G__46605));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46604_SHARP_){
var G__46606 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46604_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46606) : fret.call(null,G__46606));
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
var G__48084 = (i + (1));
i = G__48084;
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
var len__4730__auto___48088 = arguments.length;
var i__4731__auto___48089 = (0);
while(true){
if((i__4731__auto___48089 < len__4730__auto___48088)){
args__4736__auto__.push((arguments[i__4731__auto___48089]));

var G__48091 = (i__4731__auto___48089 + (1));
i__4731__auto___48089 = G__48091;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46609){
var map__46610 = p__46609;
var map__46610__$1 = (((((!((map__46610 == null))))?(((((map__46610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46610):map__46610);
var opts = map__46610__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46607){
var G__46608 = cljs.core.first(seq46607);
var seq46607__$1 = cljs.core.next(seq46607);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46608,seq46607__$1);
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
var G__46613 = arguments.length;
switch (G__46613) {
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
var c__46524__auto___48101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___48101){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___48101){
return (function (state_46637){
var state_val_46638 = (state_46637[(1)]);
if((state_val_46638 === (7))){
var inst_46633 = (state_46637[(2)]);
var state_46637__$1 = state_46637;
var statearr_46639_48102 = state_46637__$1;
(statearr_46639_48102[(2)] = inst_46633);

(statearr_46639_48102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (1))){
var state_46637__$1 = state_46637;
var statearr_46640_48103 = state_46637__$1;
(statearr_46640_48103[(2)] = null);

(statearr_46640_48103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (4))){
var inst_46616 = (state_46637[(7)]);
var inst_46616__$1 = (state_46637[(2)]);
var inst_46617 = (inst_46616__$1 == null);
var state_46637__$1 = (function (){var statearr_46641 = state_46637;
(statearr_46641[(7)] = inst_46616__$1);

return statearr_46641;
})();
if(cljs.core.truth_(inst_46617)){
var statearr_46642_48107 = state_46637__$1;
(statearr_46642_48107[(1)] = (5));

} else {
var statearr_46643_48108 = state_46637__$1;
(statearr_46643_48108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (13))){
var state_46637__$1 = state_46637;
var statearr_46644_48110 = state_46637__$1;
(statearr_46644_48110[(2)] = null);

(statearr_46644_48110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (6))){
var inst_46616 = (state_46637[(7)]);
var state_46637__$1 = state_46637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46637__$1,(11),to,inst_46616);
} else {
if((state_val_46638 === (3))){
var inst_46635 = (state_46637[(2)]);
var state_46637__$1 = state_46637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46637__$1,inst_46635);
} else {
if((state_val_46638 === (12))){
var state_46637__$1 = state_46637;
var statearr_46645_48121 = state_46637__$1;
(statearr_46645_48121[(2)] = null);

(statearr_46645_48121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (2))){
var state_46637__$1 = state_46637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46637__$1,(4),from);
} else {
if((state_val_46638 === (11))){
var inst_46626 = (state_46637[(2)]);
var state_46637__$1 = state_46637;
if(cljs.core.truth_(inst_46626)){
var statearr_46646_48126 = state_46637__$1;
(statearr_46646_48126[(1)] = (12));

} else {
var statearr_46647_48127 = state_46637__$1;
(statearr_46647_48127[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (9))){
var state_46637__$1 = state_46637;
var statearr_46648_48128 = state_46637__$1;
(statearr_46648_48128[(2)] = null);

(statearr_46648_48128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (5))){
var state_46637__$1 = state_46637;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46649_48129 = state_46637__$1;
(statearr_46649_48129[(1)] = (8));

} else {
var statearr_46650_48130 = state_46637__$1;
(statearr_46650_48130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (14))){
var inst_46631 = (state_46637[(2)]);
var state_46637__$1 = state_46637;
var statearr_46651_48131 = state_46637__$1;
(statearr_46651_48131[(2)] = inst_46631);

(statearr_46651_48131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (10))){
var inst_46623 = (state_46637[(2)]);
var state_46637__$1 = state_46637;
var statearr_46652_48132 = state_46637__$1;
(statearr_46652_48132[(2)] = inst_46623);

(statearr_46652_48132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (8))){
var inst_46620 = cljs.core.async.close_BANG_(to);
var state_46637__$1 = state_46637;
var statearr_46653_48133 = state_46637__$1;
(statearr_46653_48133[(2)] = inst_46620);

(statearr_46653_48133[(1)] = (10));


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
});})(c__46524__auto___48101))
;
return ((function (switch__46423__auto__,c__46524__auto___48101){
return (function() {
var cljs$core$async$state_machine__46424__auto__ = null;
var cljs$core$async$state_machine__46424__auto____0 = (function (){
var statearr_46654 = [null,null,null,null,null,null,null,null];
(statearr_46654[(0)] = cljs$core$async$state_machine__46424__auto__);

(statearr_46654[(1)] = (1));

return statearr_46654;
});
var cljs$core$async$state_machine__46424__auto____1 = (function (state_46637){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_46637);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e46655){if((e46655 instanceof Object)){
var ex__46427__auto__ = e46655;
var statearr_46656_48134 = state_46637;
(statearr_46656_48134[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48135 = state_46637;
state_46637 = G__48135;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$state_machine__46424__auto__ = function(state_46637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46424__auto____1.call(this,state_46637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46424__auto____0;
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46424__auto____1;
return cljs$core$async$state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___48101))
})();
var state__46526__auto__ = (function (){var statearr_46657 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_46657[(6)] = c__46524__auto___48101);

return statearr_46657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___48101))
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
return (function (p__46658){
var vec__46659 = p__46658;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46659,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46659,(1),null);
var job = vec__46659;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46524__auto___48136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___48136,res,vec__46659,v,p,job,jobs,results){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___48136,res,vec__46659,v,p,job,jobs,results){
return (function (state_46666){
var state_val_46667 = (state_46666[(1)]);
if((state_val_46667 === (1))){
var state_46666__$1 = state_46666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46666__$1,(2),res,v);
} else {
if((state_val_46667 === (2))){
var inst_46663 = (state_46666[(2)]);
var inst_46664 = cljs.core.async.close_BANG_(res);
var state_46666__$1 = (function (){var statearr_46668 = state_46666;
(statearr_46668[(7)] = inst_46663);

return statearr_46668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46666__$1,inst_46664);
} else {
return null;
}
}
});})(c__46524__auto___48136,res,vec__46659,v,p,job,jobs,results))
;
return ((function (switch__46423__auto__,c__46524__auto___48136,res,vec__46659,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0 = (function (){
var statearr_46669 = [null,null,null,null,null,null,null,null];
(statearr_46669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__);

(statearr_46669[(1)] = (1));

return statearr_46669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1 = (function (state_46666){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_46666);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e46670){if((e46670 instanceof Object)){
var ex__46427__auto__ = e46670;
var statearr_46671_48140 = state_46666;
(statearr_46671_48140[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48144 = state_46666;
state_46666 = G__48144;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__ = function(state_46666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1.call(this,state_46666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___48136,res,vec__46659,v,p,job,jobs,results))
})();
var state__46526__auto__ = (function (){var statearr_46672 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_46672[(6)] = c__46524__auto___48136);

return statearr_46672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___48136,res,vec__46659,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46673){
var vec__46674 = p__46673;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46674,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46674,(1),null);
var job = vec__46674;
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
var n__4607__auto___48146 = n;
var __48147 = (0);
while(true){
if((__48147 < n__4607__auto___48146)){
var G__46677_48148 = type;
var G__46677_48149__$1 = (((G__46677_48148 instanceof cljs.core.Keyword))?G__46677_48148.fqn:null);
switch (G__46677_48149__$1) {
case "compute":
var c__46524__auto___48151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48147,c__46524__auto___48151,G__46677_48148,G__46677_48149__$1,n__4607__auto___48146,jobs,results,process,async){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (__48147,c__46524__auto___48151,G__46677_48148,G__46677_48149__$1,n__4607__auto___48146,jobs,results,process,async){
return (function (state_46690){
var state_val_46691 = (state_46690[(1)]);
if((state_val_46691 === (1))){
var state_46690__$1 = state_46690;
var statearr_46692_48153 = state_46690__$1;
(statearr_46692_48153[(2)] = null);

(statearr_46692_48153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (2))){
var state_46690__$1 = state_46690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46690__$1,(4),jobs);
} else {
if((state_val_46691 === (3))){
var inst_46688 = (state_46690[(2)]);
var state_46690__$1 = state_46690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46690__$1,inst_46688);
} else {
if((state_val_46691 === (4))){
var inst_46680 = (state_46690[(2)]);
var inst_46681 = process(inst_46680);
var state_46690__$1 = state_46690;
if(cljs.core.truth_(inst_46681)){
var statearr_46693_48155 = state_46690__$1;
(statearr_46693_48155[(1)] = (5));

} else {
var statearr_46694_48156 = state_46690__$1;
(statearr_46694_48156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (5))){
var state_46690__$1 = state_46690;
var statearr_46695_48157 = state_46690__$1;
(statearr_46695_48157[(2)] = null);

(statearr_46695_48157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (6))){
var state_46690__$1 = state_46690;
var statearr_46696_48158 = state_46690__$1;
(statearr_46696_48158[(2)] = null);

(statearr_46696_48158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46691 === (7))){
var inst_46686 = (state_46690[(2)]);
var state_46690__$1 = state_46690;
var statearr_46697_48159 = state_46690__$1;
(statearr_46697_48159[(2)] = inst_46686);

(statearr_46697_48159[(1)] = (3));


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
});})(__48147,c__46524__auto___48151,G__46677_48148,G__46677_48149__$1,n__4607__auto___48146,jobs,results,process,async))
;
return ((function (__48147,switch__46423__auto__,c__46524__auto___48151,G__46677_48148,G__46677_48149__$1,n__4607__auto___48146,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0 = (function (){
var statearr_46698 = [null,null,null,null,null,null,null];
(statearr_46698[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__);

(statearr_46698[(1)] = (1));

return statearr_46698;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1 = (function (state_46690){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_46690);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e46699){if((e46699 instanceof Object)){
var ex__46427__auto__ = e46699;
var statearr_46700_48160 = state_46690;
(statearr_46700_48160[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46699;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48164 = state_46690;
state_46690 = G__48164;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__ = function(state_46690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1.call(this,state_46690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__;
})()
;})(__48147,switch__46423__auto__,c__46524__auto___48151,G__46677_48148,G__46677_48149__$1,n__4607__auto___48146,jobs,results,process,async))
})();
var state__46526__auto__ = (function (){var statearr_46701 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_46701[(6)] = c__46524__auto___48151);

return statearr_46701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(__48147,c__46524__auto___48151,G__46677_48148,G__46677_48149__$1,n__4607__auto___48146,jobs,results,process,async))
);


break;
case "async":
var c__46524__auto___48166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48147,c__46524__auto___48166,G__46677_48148,G__46677_48149__$1,n__4607__auto___48146,jobs,results,process,async){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (__48147,c__46524__auto___48166,G__46677_48148,G__46677_48149__$1,n__4607__auto___48146,jobs,results,process,async){
return (function (state_46714){
var state_val_46715 = (state_46714[(1)]);
if((state_val_46715 === (1))){
var state_46714__$1 = state_46714;
var statearr_46716_48168 = state_46714__$1;
(statearr_46716_48168[(2)] = null);

(statearr_46716_48168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (2))){
var state_46714__$1 = state_46714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46714__$1,(4),jobs);
} else {
if((state_val_46715 === (3))){
var inst_46712 = (state_46714[(2)]);
var state_46714__$1 = state_46714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46714__$1,inst_46712);
} else {
if((state_val_46715 === (4))){
var inst_46704 = (state_46714[(2)]);
var inst_46705 = async(inst_46704);
var state_46714__$1 = state_46714;
if(cljs.core.truth_(inst_46705)){
var statearr_46717_48173 = state_46714__$1;
(statearr_46717_48173[(1)] = (5));

} else {
var statearr_46718_48174 = state_46714__$1;
(statearr_46718_48174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (5))){
var state_46714__$1 = state_46714;
var statearr_46719_48176 = state_46714__$1;
(statearr_46719_48176[(2)] = null);

(statearr_46719_48176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (6))){
var state_46714__$1 = state_46714;
var statearr_46720_48177 = state_46714__$1;
(statearr_46720_48177[(2)] = null);

(statearr_46720_48177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46715 === (7))){
var inst_46710 = (state_46714[(2)]);
var state_46714__$1 = state_46714;
var statearr_46721_48178 = state_46714__$1;
(statearr_46721_48178[(2)] = inst_46710);

(statearr_46721_48178[(1)] = (3));


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
});})(__48147,c__46524__auto___48166,G__46677_48148,G__46677_48149__$1,n__4607__auto___48146,jobs,results,process,async))
;
return ((function (__48147,switch__46423__auto__,c__46524__auto___48166,G__46677_48148,G__46677_48149__$1,n__4607__auto___48146,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0 = (function (){
var statearr_46722 = [null,null,null,null,null,null,null];
(statearr_46722[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__);

(statearr_46722[(1)] = (1));

return statearr_46722;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1 = (function (state_46714){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_46714);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e46723){if((e46723 instanceof Object)){
var ex__46427__auto__ = e46723;
var statearr_46724_48181 = state_46714;
(statearr_46724_48181[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46723;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48182 = state_46714;
state_46714 = G__48182;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__ = function(state_46714){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1.call(this,state_46714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__;
})()
;})(__48147,switch__46423__auto__,c__46524__auto___48166,G__46677_48148,G__46677_48149__$1,n__4607__auto___48146,jobs,results,process,async))
})();
var state__46526__auto__ = (function (){var statearr_46725 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_46725[(6)] = c__46524__auto___48166);

return statearr_46725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(__48147,c__46524__auto___48166,G__46677_48148,G__46677_48149__$1,n__4607__auto___48146,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46677_48149__$1)].join('')));

}

var G__48184 = (__48147 + (1));
__48147 = G__48184;
continue;
} else {
}
break;
}

var c__46524__auto___48185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___48185,jobs,results,process,async){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___48185,jobs,results,process,async){
return (function (state_46747){
var state_val_46748 = (state_46747[(1)]);
if((state_val_46748 === (7))){
var inst_46743 = (state_46747[(2)]);
var state_46747__$1 = state_46747;
var statearr_46749_48187 = state_46747__$1;
(statearr_46749_48187[(2)] = inst_46743);

(statearr_46749_48187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (1))){
var state_46747__$1 = state_46747;
var statearr_46750_48188 = state_46747__$1;
(statearr_46750_48188[(2)] = null);

(statearr_46750_48188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (4))){
var inst_46728 = (state_46747[(7)]);
var inst_46728__$1 = (state_46747[(2)]);
var inst_46729 = (inst_46728__$1 == null);
var state_46747__$1 = (function (){var statearr_46751 = state_46747;
(statearr_46751[(7)] = inst_46728__$1);

return statearr_46751;
})();
if(cljs.core.truth_(inst_46729)){
var statearr_46752_48189 = state_46747__$1;
(statearr_46752_48189[(1)] = (5));

} else {
var statearr_46753_48192 = state_46747__$1;
(statearr_46753_48192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (6))){
var inst_46728 = (state_46747[(7)]);
var inst_46733 = (state_46747[(8)]);
var inst_46733__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46734 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46735 = [inst_46728,inst_46733__$1];
var inst_46736 = (new cljs.core.PersistentVector(null,2,(5),inst_46734,inst_46735,null));
var state_46747__$1 = (function (){var statearr_46754 = state_46747;
(statearr_46754[(8)] = inst_46733__$1);

return statearr_46754;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46747__$1,(8),jobs,inst_46736);
} else {
if((state_val_46748 === (3))){
var inst_46745 = (state_46747[(2)]);
var state_46747__$1 = state_46747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46747__$1,inst_46745);
} else {
if((state_val_46748 === (2))){
var state_46747__$1 = state_46747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46747__$1,(4),from);
} else {
if((state_val_46748 === (9))){
var inst_46740 = (state_46747[(2)]);
var state_46747__$1 = (function (){var statearr_46755 = state_46747;
(statearr_46755[(9)] = inst_46740);

return statearr_46755;
})();
var statearr_46756_48193 = state_46747__$1;
(statearr_46756_48193[(2)] = null);

(statearr_46756_48193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (5))){
var inst_46731 = cljs.core.async.close_BANG_(jobs);
var state_46747__$1 = state_46747;
var statearr_46757_48194 = state_46747__$1;
(statearr_46757_48194[(2)] = inst_46731);

(statearr_46757_48194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46748 === (8))){
var inst_46733 = (state_46747[(8)]);
var inst_46738 = (state_46747[(2)]);
var state_46747__$1 = (function (){var statearr_46758 = state_46747;
(statearr_46758[(10)] = inst_46738);

return statearr_46758;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46747__$1,(9),results,inst_46733);
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
});})(c__46524__auto___48185,jobs,results,process,async))
;
return ((function (switch__46423__auto__,c__46524__auto___48185,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0 = (function (){
var statearr_46759 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46759[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__);

(statearr_46759[(1)] = (1));

return statearr_46759;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1 = (function (state_46747){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_46747);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e46760){if((e46760 instanceof Object)){
var ex__46427__auto__ = e46760;
var statearr_46761_48195 = state_46747;
(statearr_46761_48195[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48196 = state_46747;
state_46747 = G__48196;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__ = function(state_46747){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1.call(this,state_46747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___48185,jobs,results,process,async))
})();
var state__46526__auto__ = (function (){var statearr_46762 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_46762[(6)] = c__46524__auto___48185);

return statearr_46762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___48185,jobs,results,process,async))
);


var c__46524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto__,jobs,results,process,async){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto__,jobs,results,process,async){
return (function (state_46800){
var state_val_46801 = (state_46800[(1)]);
if((state_val_46801 === (7))){
var inst_46796 = (state_46800[(2)]);
var state_46800__$1 = state_46800;
var statearr_46802_48197 = state_46800__$1;
(statearr_46802_48197[(2)] = inst_46796);

(statearr_46802_48197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (20))){
var state_46800__$1 = state_46800;
var statearr_46803_48199 = state_46800__$1;
(statearr_46803_48199[(2)] = null);

(statearr_46803_48199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (1))){
var state_46800__$1 = state_46800;
var statearr_46804_48201 = state_46800__$1;
(statearr_46804_48201[(2)] = null);

(statearr_46804_48201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (4))){
var inst_46765 = (state_46800[(7)]);
var inst_46765__$1 = (state_46800[(2)]);
var inst_46766 = (inst_46765__$1 == null);
var state_46800__$1 = (function (){var statearr_46805 = state_46800;
(statearr_46805[(7)] = inst_46765__$1);

return statearr_46805;
})();
if(cljs.core.truth_(inst_46766)){
var statearr_46806_48202 = state_46800__$1;
(statearr_46806_48202[(1)] = (5));

} else {
var statearr_46807_48203 = state_46800__$1;
(statearr_46807_48203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (15))){
var inst_46778 = (state_46800[(8)]);
var state_46800__$1 = state_46800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46800__$1,(18),to,inst_46778);
} else {
if((state_val_46801 === (21))){
var inst_46791 = (state_46800[(2)]);
var state_46800__$1 = state_46800;
var statearr_46808_48206 = state_46800__$1;
(statearr_46808_48206[(2)] = inst_46791);

(statearr_46808_48206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (13))){
var inst_46793 = (state_46800[(2)]);
var state_46800__$1 = (function (){var statearr_46809 = state_46800;
(statearr_46809[(9)] = inst_46793);

return statearr_46809;
})();
var statearr_46810_48209 = state_46800__$1;
(statearr_46810_48209[(2)] = null);

(statearr_46810_48209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (6))){
var inst_46765 = (state_46800[(7)]);
var state_46800__$1 = state_46800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46800__$1,(11),inst_46765);
} else {
if((state_val_46801 === (17))){
var inst_46786 = (state_46800[(2)]);
var state_46800__$1 = state_46800;
if(cljs.core.truth_(inst_46786)){
var statearr_46811_48210 = state_46800__$1;
(statearr_46811_48210[(1)] = (19));

} else {
var statearr_46812_48213 = state_46800__$1;
(statearr_46812_48213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (3))){
var inst_46798 = (state_46800[(2)]);
var state_46800__$1 = state_46800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46800__$1,inst_46798);
} else {
if((state_val_46801 === (12))){
var inst_46775 = (state_46800[(10)]);
var state_46800__$1 = state_46800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46800__$1,(14),inst_46775);
} else {
if((state_val_46801 === (2))){
var state_46800__$1 = state_46800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46800__$1,(4),results);
} else {
if((state_val_46801 === (19))){
var state_46800__$1 = state_46800;
var statearr_46813_48216 = state_46800__$1;
(statearr_46813_48216[(2)] = null);

(statearr_46813_48216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (11))){
var inst_46775 = (state_46800[(2)]);
var state_46800__$1 = (function (){var statearr_46814 = state_46800;
(statearr_46814[(10)] = inst_46775);

return statearr_46814;
})();
var statearr_46815_48219 = state_46800__$1;
(statearr_46815_48219[(2)] = null);

(statearr_46815_48219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (9))){
var state_46800__$1 = state_46800;
var statearr_46816_48220 = state_46800__$1;
(statearr_46816_48220[(2)] = null);

(statearr_46816_48220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (5))){
var state_46800__$1 = state_46800;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46817_48221 = state_46800__$1;
(statearr_46817_48221[(1)] = (8));

} else {
var statearr_46818_48222 = state_46800__$1;
(statearr_46818_48222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (14))){
var inst_46780 = (state_46800[(11)]);
var inst_46778 = (state_46800[(8)]);
var inst_46778__$1 = (state_46800[(2)]);
var inst_46779 = (inst_46778__$1 == null);
var inst_46780__$1 = cljs.core.not(inst_46779);
var state_46800__$1 = (function (){var statearr_46819 = state_46800;
(statearr_46819[(11)] = inst_46780__$1);

(statearr_46819[(8)] = inst_46778__$1);

return statearr_46819;
})();
if(inst_46780__$1){
var statearr_46820_48225 = state_46800__$1;
(statearr_46820_48225[(1)] = (15));

} else {
var statearr_46821_48226 = state_46800__$1;
(statearr_46821_48226[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (16))){
var inst_46780 = (state_46800[(11)]);
var state_46800__$1 = state_46800;
var statearr_46822_48227 = state_46800__$1;
(statearr_46822_48227[(2)] = inst_46780);

(statearr_46822_48227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (10))){
var inst_46772 = (state_46800[(2)]);
var state_46800__$1 = state_46800;
var statearr_46823_48228 = state_46800__$1;
(statearr_46823_48228[(2)] = inst_46772);

(statearr_46823_48228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (18))){
var inst_46783 = (state_46800[(2)]);
var state_46800__$1 = state_46800;
var statearr_46824_48229 = state_46800__$1;
(statearr_46824_48229[(2)] = inst_46783);

(statearr_46824_48229[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46801 === (8))){
var inst_46769 = cljs.core.async.close_BANG_(to);
var state_46800__$1 = state_46800;
var statearr_46825_48230 = state_46800__$1;
(statearr_46825_48230[(2)] = inst_46769);

(statearr_46825_48230[(1)] = (10));


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
});})(c__46524__auto__,jobs,results,process,async))
;
return ((function (switch__46423__auto__,c__46524__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0 = (function (){
var statearr_46826 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__);

(statearr_46826[(1)] = (1));

return statearr_46826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1 = (function (state_46800){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_46800);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e46827){if((e46827 instanceof Object)){
var ex__46427__auto__ = e46827;
var statearr_46828_48232 = state_46800;
(statearr_46828_48232[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48233 = state_46800;
state_46800 = G__48233;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__ = function(state_46800){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1.call(this,state_46800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46424__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto__,jobs,results,process,async))
})();
var state__46526__auto__ = (function (){var statearr_46829 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_46829[(6)] = c__46524__auto__);

return statearr_46829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto__,jobs,results,process,async))
);

return c__46524__auto__;
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
var G__46831 = arguments.length;
switch (G__46831) {
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
var G__46833 = arguments.length;
switch (G__46833) {
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
var G__46835 = arguments.length;
switch (G__46835) {
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
var c__46524__auto___48253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___48253,tc,fc){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___48253,tc,fc){
return (function (state_46861){
var state_val_46862 = (state_46861[(1)]);
if((state_val_46862 === (7))){
var inst_46857 = (state_46861[(2)]);
var state_46861__$1 = state_46861;
var statearr_46863_48254 = state_46861__$1;
(statearr_46863_48254[(2)] = inst_46857);

(statearr_46863_48254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (1))){
var state_46861__$1 = state_46861;
var statearr_46864_48256 = state_46861__$1;
(statearr_46864_48256[(2)] = null);

(statearr_46864_48256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (4))){
var inst_46838 = (state_46861[(7)]);
var inst_46838__$1 = (state_46861[(2)]);
var inst_46839 = (inst_46838__$1 == null);
var state_46861__$1 = (function (){var statearr_46865 = state_46861;
(statearr_46865[(7)] = inst_46838__$1);

return statearr_46865;
})();
if(cljs.core.truth_(inst_46839)){
var statearr_46866_48258 = state_46861__$1;
(statearr_46866_48258[(1)] = (5));

} else {
var statearr_46867_48259 = state_46861__$1;
(statearr_46867_48259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (13))){
var state_46861__$1 = state_46861;
var statearr_46868_48260 = state_46861__$1;
(statearr_46868_48260[(2)] = null);

(statearr_46868_48260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (6))){
var inst_46838 = (state_46861[(7)]);
var inst_46844 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46838) : p.call(null,inst_46838));
var state_46861__$1 = state_46861;
if(cljs.core.truth_(inst_46844)){
var statearr_46869_48261 = state_46861__$1;
(statearr_46869_48261[(1)] = (9));

} else {
var statearr_46870_48262 = state_46861__$1;
(statearr_46870_48262[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (3))){
var inst_46859 = (state_46861[(2)]);
var state_46861__$1 = state_46861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46861__$1,inst_46859);
} else {
if((state_val_46862 === (12))){
var state_46861__$1 = state_46861;
var statearr_46871_48263 = state_46861__$1;
(statearr_46871_48263[(2)] = null);

(statearr_46871_48263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (2))){
var state_46861__$1 = state_46861;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46861__$1,(4),ch);
} else {
if((state_val_46862 === (11))){
var inst_46838 = (state_46861[(7)]);
var inst_46848 = (state_46861[(2)]);
var state_46861__$1 = state_46861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46861__$1,(8),inst_46848,inst_46838);
} else {
if((state_val_46862 === (9))){
var state_46861__$1 = state_46861;
var statearr_46872_48267 = state_46861__$1;
(statearr_46872_48267[(2)] = tc);

(statearr_46872_48267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (5))){
var inst_46841 = cljs.core.async.close_BANG_(tc);
var inst_46842 = cljs.core.async.close_BANG_(fc);
var state_46861__$1 = (function (){var statearr_46873 = state_46861;
(statearr_46873[(8)] = inst_46841);

return statearr_46873;
})();
var statearr_46874_48271 = state_46861__$1;
(statearr_46874_48271[(2)] = inst_46842);

(statearr_46874_48271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (14))){
var inst_46855 = (state_46861[(2)]);
var state_46861__$1 = state_46861;
var statearr_46875_48272 = state_46861__$1;
(statearr_46875_48272[(2)] = inst_46855);

(statearr_46875_48272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (10))){
var state_46861__$1 = state_46861;
var statearr_46876_48273 = state_46861__$1;
(statearr_46876_48273[(2)] = fc);

(statearr_46876_48273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46862 === (8))){
var inst_46850 = (state_46861[(2)]);
var state_46861__$1 = state_46861;
if(cljs.core.truth_(inst_46850)){
var statearr_46877_48278 = state_46861__$1;
(statearr_46877_48278[(1)] = (12));

} else {
var statearr_46878_48279 = state_46861__$1;
(statearr_46878_48279[(1)] = (13));

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
});})(c__46524__auto___48253,tc,fc))
;
return ((function (switch__46423__auto__,c__46524__auto___48253,tc,fc){
return (function() {
var cljs$core$async$state_machine__46424__auto__ = null;
var cljs$core$async$state_machine__46424__auto____0 = (function (){
var statearr_46879 = [null,null,null,null,null,null,null,null,null];
(statearr_46879[(0)] = cljs$core$async$state_machine__46424__auto__);

(statearr_46879[(1)] = (1));

return statearr_46879;
});
var cljs$core$async$state_machine__46424__auto____1 = (function (state_46861){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_46861);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e46880){if((e46880 instanceof Object)){
var ex__46427__auto__ = e46880;
var statearr_46881_48283 = state_46861;
(statearr_46881_48283[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48284 = state_46861;
state_46861 = G__48284;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$state_machine__46424__auto__ = function(state_46861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46424__auto____1.call(this,state_46861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46424__auto____0;
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46424__auto____1;
return cljs$core$async$state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___48253,tc,fc))
})();
var state__46526__auto__ = (function (){var statearr_46882 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_46882[(6)] = c__46524__auto___48253);

return statearr_46882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___48253,tc,fc))
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
var c__46524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto__){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto__){
return (function (state_46903){
var state_val_46904 = (state_46903[(1)]);
if((state_val_46904 === (7))){
var inst_46899 = (state_46903[(2)]);
var state_46903__$1 = state_46903;
var statearr_46905_48288 = state_46903__$1;
(statearr_46905_48288[(2)] = inst_46899);

(statearr_46905_48288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (1))){
var inst_46883 = init;
var state_46903__$1 = (function (){var statearr_46906 = state_46903;
(statearr_46906[(7)] = inst_46883);

return statearr_46906;
})();
var statearr_46907_48292 = state_46903__$1;
(statearr_46907_48292[(2)] = null);

(statearr_46907_48292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (4))){
var inst_46886 = (state_46903[(8)]);
var inst_46886__$1 = (state_46903[(2)]);
var inst_46887 = (inst_46886__$1 == null);
var state_46903__$1 = (function (){var statearr_46908 = state_46903;
(statearr_46908[(8)] = inst_46886__$1);

return statearr_46908;
})();
if(cljs.core.truth_(inst_46887)){
var statearr_46909_48293 = state_46903__$1;
(statearr_46909_48293[(1)] = (5));

} else {
var statearr_46910_48294 = state_46903__$1;
(statearr_46910_48294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (6))){
var inst_46886 = (state_46903[(8)]);
var inst_46883 = (state_46903[(7)]);
var inst_46890 = (state_46903[(9)]);
var inst_46890__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46883,inst_46886) : f.call(null,inst_46883,inst_46886));
var inst_46891 = cljs.core.reduced_QMARK_(inst_46890__$1);
var state_46903__$1 = (function (){var statearr_46911 = state_46903;
(statearr_46911[(9)] = inst_46890__$1);

return statearr_46911;
})();
if(inst_46891){
var statearr_46912_48298 = state_46903__$1;
(statearr_46912_48298[(1)] = (8));

} else {
var statearr_46913_48299 = state_46903__$1;
(statearr_46913_48299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (3))){
var inst_46901 = (state_46903[(2)]);
var state_46903__$1 = state_46903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46903__$1,inst_46901);
} else {
if((state_val_46904 === (2))){
var state_46903__$1 = state_46903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46903__$1,(4),ch);
} else {
if((state_val_46904 === (9))){
var inst_46890 = (state_46903[(9)]);
var inst_46883 = inst_46890;
var state_46903__$1 = (function (){var statearr_46914 = state_46903;
(statearr_46914[(7)] = inst_46883);

return statearr_46914;
})();
var statearr_46915_48307 = state_46903__$1;
(statearr_46915_48307[(2)] = null);

(statearr_46915_48307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (5))){
var inst_46883 = (state_46903[(7)]);
var state_46903__$1 = state_46903;
var statearr_46916_48311 = state_46903__$1;
(statearr_46916_48311[(2)] = inst_46883);

(statearr_46916_48311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (10))){
var inst_46897 = (state_46903[(2)]);
var state_46903__$1 = state_46903;
var statearr_46917_48312 = state_46903__$1;
(statearr_46917_48312[(2)] = inst_46897);

(statearr_46917_48312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (8))){
var inst_46890 = (state_46903[(9)]);
var inst_46893 = cljs.core.deref(inst_46890);
var state_46903__$1 = state_46903;
var statearr_46918_48313 = state_46903__$1;
(statearr_46918_48313[(2)] = inst_46893);

(statearr_46918_48313[(1)] = (10));


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
});})(c__46524__auto__))
;
return ((function (switch__46423__auto__,c__46524__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__46424__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46424__auto____0 = (function (){
var statearr_46919 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46919[(0)] = cljs$core$async$reduce_$_state_machine__46424__auto__);

(statearr_46919[(1)] = (1));

return statearr_46919;
});
var cljs$core$async$reduce_$_state_machine__46424__auto____1 = (function (state_46903){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_46903);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e46920){if((e46920 instanceof Object)){
var ex__46427__auto__ = e46920;
var statearr_46921_48322 = state_46903;
(statearr_46921_48322[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46920;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48325 = state_46903;
state_46903 = G__48325;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46424__auto__ = function(state_46903){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46424__auto____1.call(this,state_46903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46424__auto____0;
cljs$core$async$reduce_$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46424__auto____1;
return cljs$core$async$reduce_$_state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto__))
})();
var state__46526__auto__ = (function (){var statearr_46922 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_46922[(6)] = c__46524__auto__);

return statearr_46922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto__))
);

return c__46524__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto__,f__$1){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto__,f__$1){
return (function (state_46928){
var state_val_46929 = (state_46928[(1)]);
if((state_val_46929 === (1))){
var inst_46923 = cljs.core.async.reduce(f__$1,init,ch);
var state_46928__$1 = state_46928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46928__$1,(2),inst_46923);
} else {
if((state_val_46929 === (2))){
var inst_46925 = (state_46928[(2)]);
var inst_46926 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46925) : f__$1.call(null,inst_46925));
var state_46928__$1 = state_46928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46928__$1,inst_46926);
} else {
return null;
}
}
});})(c__46524__auto__,f__$1))
;
return ((function (switch__46423__auto__,c__46524__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__46424__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46424__auto____0 = (function (){
var statearr_46930 = [null,null,null,null,null,null,null];
(statearr_46930[(0)] = cljs$core$async$transduce_$_state_machine__46424__auto__);

(statearr_46930[(1)] = (1));

return statearr_46930;
});
var cljs$core$async$transduce_$_state_machine__46424__auto____1 = (function (state_46928){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_46928);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e46931){if((e46931 instanceof Object)){
var ex__46427__auto__ = e46931;
var statearr_46932_48337 = state_46928;
(statearr_46932_48337[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46931;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48343 = state_46928;
state_46928 = G__48343;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46424__auto__ = function(state_46928){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46424__auto____1.call(this,state_46928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46424__auto____0;
cljs$core$async$transduce_$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46424__auto____1;
return cljs$core$async$transduce_$_state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto__,f__$1))
})();
var state__46526__auto__ = (function (){var statearr_46933 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_46933[(6)] = c__46524__auto__);

return statearr_46933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto__,f__$1))
);

return c__46524__auto__;
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
var G__46935 = arguments.length;
switch (G__46935) {
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
var c__46524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto__){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto__){
return (function (state_46960){
var state_val_46961 = (state_46960[(1)]);
if((state_val_46961 === (7))){
var inst_46942 = (state_46960[(2)]);
var state_46960__$1 = state_46960;
var statearr_46962_48348 = state_46960__$1;
(statearr_46962_48348[(2)] = inst_46942);

(statearr_46962_48348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46961 === (1))){
var inst_46936 = cljs.core.seq(coll);
var inst_46937 = inst_46936;
var state_46960__$1 = (function (){var statearr_46963 = state_46960;
(statearr_46963[(7)] = inst_46937);

return statearr_46963;
})();
var statearr_46964_48350 = state_46960__$1;
(statearr_46964_48350[(2)] = null);

(statearr_46964_48350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46961 === (4))){
var inst_46937 = (state_46960[(7)]);
var inst_46940 = cljs.core.first(inst_46937);
var state_46960__$1 = state_46960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46960__$1,(7),ch,inst_46940);
} else {
if((state_val_46961 === (13))){
var inst_46954 = (state_46960[(2)]);
var state_46960__$1 = state_46960;
var statearr_46965_48353 = state_46960__$1;
(statearr_46965_48353[(2)] = inst_46954);

(statearr_46965_48353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46961 === (6))){
var inst_46945 = (state_46960[(2)]);
var state_46960__$1 = state_46960;
if(cljs.core.truth_(inst_46945)){
var statearr_46966_48356 = state_46960__$1;
(statearr_46966_48356[(1)] = (8));

} else {
var statearr_46967_48357 = state_46960__$1;
(statearr_46967_48357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46961 === (3))){
var inst_46958 = (state_46960[(2)]);
var state_46960__$1 = state_46960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46960__$1,inst_46958);
} else {
if((state_val_46961 === (12))){
var state_46960__$1 = state_46960;
var statearr_46968_48358 = state_46960__$1;
(statearr_46968_48358[(2)] = null);

(statearr_46968_48358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46961 === (2))){
var inst_46937 = (state_46960[(7)]);
var state_46960__$1 = state_46960;
if(cljs.core.truth_(inst_46937)){
var statearr_46969_48359 = state_46960__$1;
(statearr_46969_48359[(1)] = (4));

} else {
var statearr_46970_48360 = state_46960__$1;
(statearr_46970_48360[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46961 === (11))){
var inst_46951 = cljs.core.async.close_BANG_(ch);
var state_46960__$1 = state_46960;
var statearr_46971_48362 = state_46960__$1;
(statearr_46971_48362[(2)] = inst_46951);

(statearr_46971_48362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46961 === (9))){
var state_46960__$1 = state_46960;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46972_48363 = state_46960__$1;
(statearr_46972_48363[(1)] = (11));

} else {
var statearr_46973_48365 = state_46960__$1;
(statearr_46973_48365[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46961 === (5))){
var inst_46937 = (state_46960[(7)]);
var state_46960__$1 = state_46960;
var statearr_46974_48368 = state_46960__$1;
(statearr_46974_48368[(2)] = inst_46937);

(statearr_46974_48368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46961 === (10))){
var inst_46956 = (state_46960[(2)]);
var state_46960__$1 = state_46960;
var statearr_46975_48370 = state_46960__$1;
(statearr_46975_48370[(2)] = inst_46956);

(statearr_46975_48370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46961 === (8))){
var inst_46937 = (state_46960[(7)]);
var inst_46947 = cljs.core.next(inst_46937);
var inst_46937__$1 = inst_46947;
var state_46960__$1 = (function (){var statearr_46976 = state_46960;
(statearr_46976[(7)] = inst_46937__$1);

return statearr_46976;
})();
var statearr_46977_48374 = state_46960__$1;
(statearr_46977_48374[(2)] = null);

(statearr_46977_48374[(1)] = (2));


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
});})(c__46524__auto__))
;
return ((function (switch__46423__auto__,c__46524__auto__){
return (function() {
var cljs$core$async$state_machine__46424__auto__ = null;
var cljs$core$async$state_machine__46424__auto____0 = (function (){
var statearr_46978 = [null,null,null,null,null,null,null,null];
(statearr_46978[(0)] = cljs$core$async$state_machine__46424__auto__);

(statearr_46978[(1)] = (1));

return statearr_46978;
});
var cljs$core$async$state_machine__46424__auto____1 = (function (state_46960){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_46960);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e46979){if((e46979 instanceof Object)){
var ex__46427__auto__ = e46979;
var statearr_46980_48379 = state_46960;
(statearr_46980_48379[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46979;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48380 = state_46960;
state_46960 = G__48380;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$state_machine__46424__auto__ = function(state_46960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46424__auto____1.call(this,state_46960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46424__auto____0;
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46424__auto____1;
return cljs$core$async$state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto__))
})();
var state__46526__auto__ = (function (){var statearr_46981 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_46981[(6)] = c__46524__auto__);

return statearr_46981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto__))
);

return c__46524__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46982 = (function (ch,cs,meta46983){
this.ch = ch;
this.cs = cs;
this.meta46983 = meta46983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46984,meta46983__$1){
var self__ = this;
var _46984__$1 = this;
return (new cljs.core.async.t_cljs$core$async46982(self__.ch,self__.cs,meta46983__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46984){
var self__ = this;
var _46984__$1 = this;
return self__.meta46983;
});})(cs))
;

cljs.core.async.t_cljs$core$async46982.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46982.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46982.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46982.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46982.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46982.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46982.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46983","meta46983",-235635035,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46982";

cljs.core.async.t_cljs$core$async46982.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46982");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46982.
 */
cljs.core.async.__GT_t_cljs$core$async46982 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46982(ch__$1,cs__$1,meta46983){
return (new cljs.core.async.t_cljs$core$async46982(ch__$1,cs__$1,meta46983));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46982(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46524__auto___48405 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___48405,cs,m,dchan,dctr,done){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___48405,cs,m,dchan,dctr,done){
return (function (state_47119){
var state_val_47120 = (state_47119[(1)]);
if((state_val_47120 === (7))){
var inst_47115 = (state_47119[(2)]);
var state_47119__$1 = state_47119;
var statearr_47121_48406 = state_47119__$1;
(statearr_47121_48406[(2)] = inst_47115);

(statearr_47121_48406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (20))){
var inst_47018 = (state_47119[(7)]);
var inst_47030 = cljs.core.first(inst_47018);
var inst_47031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47030,(0),null);
var inst_47032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47030,(1),null);
var state_47119__$1 = (function (){var statearr_47122 = state_47119;
(statearr_47122[(8)] = inst_47031);

return statearr_47122;
})();
if(cljs.core.truth_(inst_47032)){
var statearr_47123_48407 = state_47119__$1;
(statearr_47123_48407[(1)] = (22));

} else {
var statearr_47124_48408 = state_47119__$1;
(statearr_47124_48408[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (27))){
var inst_47062 = (state_47119[(9)]);
var inst_47060 = (state_47119[(10)]);
var inst_47067 = (state_47119[(11)]);
var inst_46987 = (state_47119[(12)]);
var inst_47067__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47060,inst_47062);
var inst_47068 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47067__$1,inst_46987,done);
var state_47119__$1 = (function (){var statearr_47125 = state_47119;
(statearr_47125[(11)] = inst_47067__$1);

return statearr_47125;
})();
if(cljs.core.truth_(inst_47068)){
var statearr_47126_48413 = state_47119__$1;
(statearr_47126_48413[(1)] = (30));

} else {
var statearr_47127_48414 = state_47119__$1;
(statearr_47127_48414[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (1))){
var state_47119__$1 = state_47119;
var statearr_47128_48415 = state_47119__$1;
(statearr_47128_48415[(2)] = null);

(statearr_47128_48415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (24))){
var inst_47018 = (state_47119[(7)]);
var inst_47037 = (state_47119[(2)]);
var inst_47038 = cljs.core.next(inst_47018);
var inst_46996 = inst_47038;
var inst_46997 = null;
var inst_46998 = (0);
var inst_46999 = (0);
var state_47119__$1 = (function (){var statearr_47129 = state_47119;
(statearr_47129[(13)] = inst_46999);

(statearr_47129[(14)] = inst_47037);

(statearr_47129[(15)] = inst_46997);

(statearr_47129[(16)] = inst_46996);

(statearr_47129[(17)] = inst_46998);

return statearr_47129;
})();
var statearr_47130_48418 = state_47119__$1;
(statearr_47130_48418[(2)] = null);

(statearr_47130_48418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (39))){
var state_47119__$1 = state_47119;
var statearr_47134_48421 = state_47119__$1;
(statearr_47134_48421[(2)] = null);

(statearr_47134_48421[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (4))){
var inst_46987 = (state_47119[(12)]);
var inst_46987__$1 = (state_47119[(2)]);
var inst_46988 = (inst_46987__$1 == null);
var state_47119__$1 = (function (){var statearr_47135 = state_47119;
(statearr_47135[(12)] = inst_46987__$1);

return statearr_47135;
})();
if(cljs.core.truth_(inst_46988)){
var statearr_47136_48422 = state_47119__$1;
(statearr_47136_48422[(1)] = (5));

} else {
var statearr_47137_48423 = state_47119__$1;
(statearr_47137_48423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (15))){
var inst_46999 = (state_47119[(13)]);
var inst_46997 = (state_47119[(15)]);
var inst_46996 = (state_47119[(16)]);
var inst_46998 = (state_47119[(17)]);
var inst_47014 = (state_47119[(2)]);
var inst_47015 = (inst_46999 + (1));
var tmp47131 = inst_46997;
var tmp47132 = inst_46996;
var tmp47133 = inst_46998;
var inst_46996__$1 = tmp47132;
var inst_46997__$1 = tmp47131;
var inst_46998__$1 = tmp47133;
var inst_46999__$1 = inst_47015;
var state_47119__$1 = (function (){var statearr_47138 = state_47119;
(statearr_47138[(13)] = inst_46999__$1);

(statearr_47138[(18)] = inst_47014);

(statearr_47138[(15)] = inst_46997__$1);

(statearr_47138[(16)] = inst_46996__$1);

(statearr_47138[(17)] = inst_46998__$1);

return statearr_47138;
})();
var statearr_47139_48432 = state_47119__$1;
(statearr_47139_48432[(2)] = null);

(statearr_47139_48432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (21))){
var inst_47041 = (state_47119[(2)]);
var state_47119__$1 = state_47119;
var statearr_47143_48433 = state_47119__$1;
(statearr_47143_48433[(2)] = inst_47041);

(statearr_47143_48433[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (31))){
var inst_47067 = (state_47119[(11)]);
var inst_47071 = done(null);
var inst_47072 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47067);
var state_47119__$1 = (function (){var statearr_47144 = state_47119;
(statearr_47144[(19)] = inst_47071);

return statearr_47144;
})();
var statearr_47145_48441 = state_47119__$1;
(statearr_47145_48441[(2)] = inst_47072);

(statearr_47145_48441[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (32))){
var inst_47062 = (state_47119[(9)]);
var inst_47059 = (state_47119[(20)]);
var inst_47060 = (state_47119[(10)]);
var inst_47061 = (state_47119[(21)]);
var inst_47074 = (state_47119[(2)]);
var inst_47075 = (inst_47062 + (1));
var tmp47140 = inst_47059;
var tmp47141 = inst_47060;
var tmp47142 = inst_47061;
var inst_47059__$1 = tmp47140;
var inst_47060__$1 = tmp47141;
var inst_47061__$1 = tmp47142;
var inst_47062__$1 = inst_47075;
var state_47119__$1 = (function (){var statearr_47146 = state_47119;
(statearr_47146[(9)] = inst_47062__$1);

(statearr_47146[(20)] = inst_47059__$1);

(statearr_47146[(10)] = inst_47060__$1);

(statearr_47146[(22)] = inst_47074);

(statearr_47146[(21)] = inst_47061__$1);

return statearr_47146;
})();
var statearr_47147_48444 = state_47119__$1;
(statearr_47147_48444[(2)] = null);

(statearr_47147_48444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (40))){
var inst_47087 = (state_47119[(23)]);
var inst_47091 = done(null);
var inst_47092 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47087);
var state_47119__$1 = (function (){var statearr_47148 = state_47119;
(statearr_47148[(24)] = inst_47091);

return statearr_47148;
})();
var statearr_47149_48447 = state_47119__$1;
(statearr_47149_48447[(2)] = inst_47092);

(statearr_47149_48447[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (33))){
var inst_47078 = (state_47119[(25)]);
var inst_47080 = cljs.core.chunked_seq_QMARK_(inst_47078);
var state_47119__$1 = state_47119;
if(inst_47080){
var statearr_47150_48449 = state_47119__$1;
(statearr_47150_48449[(1)] = (36));

} else {
var statearr_47151_48452 = state_47119__$1;
(statearr_47151_48452[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (13))){
var inst_47008 = (state_47119[(26)]);
var inst_47011 = cljs.core.async.close_BANG_(inst_47008);
var state_47119__$1 = state_47119;
var statearr_47152_48461 = state_47119__$1;
(statearr_47152_48461[(2)] = inst_47011);

(statearr_47152_48461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (22))){
var inst_47031 = (state_47119[(8)]);
var inst_47034 = cljs.core.async.close_BANG_(inst_47031);
var state_47119__$1 = state_47119;
var statearr_47153_48464 = state_47119__$1;
(statearr_47153_48464[(2)] = inst_47034);

(statearr_47153_48464[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (36))){
var inst_47078 = (state_47119[(25)]);
var inst_47082 = cljs.core.chunk_first(inst_47078);
var inst_47083 = cljs.core.chunk_rest(inst_47078);
var inst_47084 = cljs.core.count(inst_47082);
var inst_47059 = inst_47083;
var inst_47060 = inst_47082;
var inst_47061 = inst_47084;
var inst_47062 = (0);
var state_47119__$1 = (function (){var statearr_47154 = state_47119;
(statearr_47154[(9)] = inst_47062);

(statearr_47154[(20)] = inst_47059);

(statearr_47154[(10)] = inst_47060);

(statearr_47154[(21)] = inst_47061);

return statearr_47154;
})();
var statearr_47155_48466 = state_47119__$1;
(statearr_47155_48466[(2)] = null);

(statearr_47155_48466[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (41))){
var inst_47078 = (state_47119[(25)]);
var inst_47094 = (state_47119[(2)]);
var inst_47095 = cljs.core.next(inst_47078);
var inst_47059 = inst_47095;
var inst_47060 = null;
var inst_47061 = (0);
var inst_47062 = (0);
var state_47119__$1 = (function (){var statearr_47156 = state_47119;
(statearr_47156[(9)] = inst_47062);

(statearr_47156[(20)] = inst_47059);

(statearr_47156[(10)] = inst_47060);

(statearr_47156[(21)] = inst_47061);

(statearr_47156[(27)] = inst_47094);

return statearr_47156;
})();
var statearr_47157_48469 = state_47119__$1;
(statearr_47157_48469[(2)] = null);

(statearr_47157_48469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (43))){
var state_47119__$1 = state_47119;
var statearr_47158_48470 = state_47119__$1;
(statearr_47158_48470[(2)] = null);

(statearr_47158_48470[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (29))){
var inst_47103 = (state_47119[(2)]);
var state_47119__$1 = state_47119;
var statearr_47159_48473 = state_47119__$1;
(statearr_47159_48473[(2)] = inst_47103);

(statearr_47159_48473[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (44))){
var inst_47112 = (state_47119[(2)]);
var state_47119__$1 = (function (){var statearr_47160 = state_47119;
(statearr_47160[(28)] = inst_47112);

return statearr_47160;
})();
var statearr_47161_48474 = state_47119__$1;
(statearr_47161_48474[(2)] = null);

(statearr_47161_48474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (6))){
var inst_47051 = (state_47119[(29)]);
var inst_47050 = cljs.core.deref(cs);
var inst_47051__$1 = cljs.core.keys(inst_47050);
var inst_47052 = cljs.core.count(inst_47051__$1);
var inst_47053 = cljs.core.reset_BANG_(dctr,inst_47052);
var inst_47058 = cljs.core.seq(inst_47051__$1);
var inst_47059 = inst_47058;
var inst_47060 = null;
var inst_47061 = (0);
var inst_47062 = (0);
var state_47119__$1 = (function (){var statearr_47162 = state_47119;
(statearr_47162[(9)] = inst_47062);

(statearr_47162[(20)] = inst_47059);

(statearr_47162[(10)] = inst_47060);

(statearr_47162[(21)] = inst_47061);

(statearr_47162[(29)] = inst_47051__$1);

(statearr_47162[(30)] = inst_47053);

return statearr_47162;
})();
var statearr_47163_48484 = state_47119__$1;
(statearr_47163_48484[(2)] = null);

(statearr_47163_48484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (28))){
var inst_47059 = (state_47119[(20)]);
var inst_47078 = (state_47119[(25)]);
var inst_47078__$1 = cljs.core.seq(inst_47059);
var state_47119__$1 = (function (){var statearr_47164 = state_47119;
(statearr_47164[(25)] = inst_47078__$1);

return statearr_47164;
})();
if(inst_47078__$1){
var statearr_47165_48487 = state_47119__$1;
(statearr_47165_48487[(1)] = (33));

} else {
var statearr_47166_48488 = state_47119__$1;
(statearr_47166_48488[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (25))){
var inst_47062 = (state_47119[(9)]);
var inst_47061 = (state_47119[(21)]);
var inst_47064 = (inst_47062 < inst_47061);
var inst_47065 = inst_47064;
var state_47119__$1 = state_47119;
if(cljs.core.truth_(inst_47065)){
var statearr_47167_48490 = state_47119__$1;
(statearr_47167_48490[(1)] = (27));

} else {
var statearr_47168_48491 = state_47119__$1;
(statearr_47168_48491[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (34))){
var state_47119__$1 = state_47119;
var statearr_47169_48492 = state_47119__$1;
(statearr_47169_48492[(2)] = null);

(statearr_47169_48492[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (17))){
var state_47119__$1 = state_47119;
var statearr_47170_48493 = state_47119__$1;
(statearr_47170_48493[(2)] = null);

(statearr_47170_48493[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (3))){
var inst_47117 = (state_47119[(2)]);
var state_47119__$1 = state_47119;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47119__$1,inst_47117);
} else {
if((state_val_47120 === (12))){
var inst_47046 = (state_47119[(2)]);
var state_47119__$1 = state_47119;
var statearr_47171_48496 = state_47119__$1;
(statearr_47171_48496[(2)] = inst_47046);

(statearr_47171_48496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (2))){
var state_47119__$1 = state_47119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47119__$1,(4),ch);
} else {
if((state_val_47120 === (23))){
var state_47119__$1 = state_47119;
var statearr_47172_48499 = state_47119__$1;
(statearr_47172_48499[(2)] = null);

(statearr_47172_48499[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (35))){
var inst_47101 = (state_47119[(2)]);
var state_47119__$1 = state_47119;
var statearr_47173_48500 = state_47119__$1;
(statearr_47173_48500[(2)] = inst_47101);

(statearr_47173_48500[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (19))){
var inst_47018 = (state_47119[(7)]);
var inst_47022 = cljs.core.chunk_first(inst_47018);
var inst_47023 = cljs.core.chunk_rest(inst_47018);
var inst_47024 = cljs.core.count(inst_47022);
var inst_46996 = inst_47023;
var inst_46997 = inst_47022;
var inst_46998 = inst_47024;
var inst_46999 = (0);
var state_47119__$1 = (function (){var statearr_47174 = state_47119;
(statearr_47174[(13)] = inst_46999);

(statearr_47174[(15)] = inst_46997);

(statearr_47174[(16)] = inst_46996);

(statearr_47174[(17)] = inst_46998);

return statearr_47174;
})();
var statearr_47175_48508 = state_47119__$1;
(statearr_47175_48508[(2)] = null);

(statearr_47175_48508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (11))){
var inst_47018 = (state_47119[(7)]);
var inst_46996 = (state_47119[(16)]);
var inst_47018__$1 = cljs.core.seq(inst_46996);
var state_47119__$1 = (function (){var statearr_47176 = state_47119;
(statearr_47176[(7)] = inst_47018__$1);

return statearr_47176;
})();
if(inst_47018__$1){
var statearr_47177_48509 = state_47119__$1;
(statearr_47177_48509[(1)] = (16));

} else {
var statearr_47178_48511 = state_47119__$1;
(statearr_47178_48511[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (9))){
var inst_47048 = (state_47119[(2)]);
var state_47119__$1 = state_47119;
var statearr_47179_48513 = state_47119__$1;
(statearr_47179_48513[(2)] = inst_47048);

(statearr_47179_48513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (5))){
var inst_46994 = cljs.core.deref(cs);
var inst_46995 = cljs.core.seq(inst_46994);
var inst_46996 = inst_46995;
var inst_46997 = null;
var inst_46998 = (0);
var inst_46999 = (0);
var state_47119__$1 = (function (){var statearr_47180 = state_47119;
(statearr_47180[(13)] = inst_46999);

(statearr_47180[(15)] = inst_46997);

(statearr_47180[(16)] = inst_46996);

(statearr_47180[(17)] = inst_46998);

return statearr_47180;
})();
var statearr_47181_48516 = state_47119__$1;
(statearr_47181_48516[(2)] = null);

(statearr_47181_48516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (14))){
var state_47119__$1 = state_47119;
var statearr_47182_48517 = state_47119__$1;
(statearr_47182_48517[(2)] = null);

(statearr_47182_48517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (45))){
var inst_47109 = (state_47119[(2)]);
var state_47119__$1 = state_47119;
var statearr_47183_48518 = state_47119__$1;
(statearr_47183_48518[(2)] = inst_47109);

(statearr_47183_48518[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (26))){
var inst_47051 = (state_47119[(29)]);
var inst_47105 = (state_47119[(2)]);
var inst_47106 = cljs.core.seq(inst_47051);
var state_47119__$1 = (function (){var statearr_47184 = state_47119;
(statearr_47184[(31)] = inst_47105);

return statearr_47184;
})();
if(inst_47106){
var statearr_47185_48520 = state_47119__$1;
(statearr_47185_48520[(1)] = (42));

} else {
var statearr_47186_48521 = state_47119__$1;
(statearr_47186_48521[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (16))){
var inst_47018 = (state_47119[(7)]);
var inst_47020 = cljs.core.chunked_seq_QMARK_(inst_47018);
var state_47119__$1 = state_47119;
if(inst_47020){
var statearr_47187_48524 = state_47119__$1;
(statearr_47187_48524[(1)] = (19));

} else {
var statearr_47188_48525 = state_47119__$1;
(statearr_47188_48525[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (38))){
var inst_47098 = (state_47119[(2)]);
var state_47119__$1 = state_47119;
var statearr_47189_48526 = state_47119__$1;
(statearr_47189_48526[(2)] = inst_47098);

(statearr_47189_48526[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (30))){
var state_47119__$1 = state_47119;
var statearr_47190_48529 = state_47119__$1;
(statearr_47190_48529[(2)] = null);

(statearr_47190_48529[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (10))){
var inst_46999 = (state_47119[(13)]);
var inst_46997 = (state_47119[(15)]);
var inst_47007 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46997,inst_46999);
var inst_47008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47007,(0),null);
var inst_47009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47007,(1),null);
var state_47119__$1 = (function (){var statearr_47191 = state_47119;
(statearr_47191[(26)] = inst_47008);

return statearr_47191;
})();
if(cljs.core.truth_(inst_47009)){
var statearr_47192_48530 = state_47119__$1;
(statearr_47192_48530[(1)] = (13));

} else {
var statearr_47193_48531 = state_47119__$1;
(statearr_47193_48531[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (18))){
var inst_47044 = (state_47119[(2)]);
var state_47119__$1 = state_47119;
var statearr_47194_48533 = state_47119__$1;
(statearr_47194_48533[(2)] = inst_47044);

(statearr_47194_48533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (42))){
var state_47119__$1 = state_47119;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47119__$1,(45),dchan);
} else {
if((state_val_47120 === (37))){
var inst_47078 = (state_47119[(25)]);
var inst_46987 = (state_47119[(12)]);
var inst_47087 = (state_47119[(23)]);
var inst_47087__$1 = cljs.core.first(inst_47078);
var inst_47088 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47087__$1,inst_46987,done);
var state_47119__$1 = (function (){var statearr_47195 = state_47119;
(statearr_47195[(23)] = inst_47087__$1);

return statearr_47195;
})();
if(cljs.core.truth_(inst_47088)){
var statearr_47196_48536 = state_47119__$1;
(statearr_47196_48536[(1)] = (39));

} else {
var statearr_47197_48537 = state_47119__$1;
(statearr_47197_48537[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47120 === (8))){
var inst_46999 = (state_47119[(13)]);
var inst_46998 = (state_47119[(17)]);
var inst_47001 = (inst_46999 < inst_46998);
var inst_47002 = inst_47001;
var state_47119__$1 = state_47119;
if(cljs.core.truth_(inst_47002)){
var statearr_47198_48540 = state_47119__$1;
(statearr_47198_48540[(1)] = (10));

} else {
var statearr_47199_48541 = state_47119__$1;
(statearr_47199_48541[(1)] = (11));

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
});})(c__46524__auto___48405,cs,m,dchan,dctr,done))
;
return ((function (switch__46423__auto__,c__46524__auto___48405,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__46424__auto__ = null;
var cljs$core$async$mult_$_state_machine__46424__auto____0 = (function (){
var statearr_47200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47200[(0)] = cljs$core$async$mult_$_state_machine__46424__auto__);

(statearr_47200[(1)] = (1));

return statearr_47200;
});
var cljs$core$async$mult_$_state_machine__46424__auto____1 = (function (state_47119){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_47119);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e47201){if((e47201 instanceof Object)){
var ex__46427__auto__ = e47201;
var statearr_47202_48542 = state_47119;
(statearr_47202_48542[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47201;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48543 = state_47119;
state_47119 = G__48543;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46424__auto__ = function(state_47119){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46424__auto____1.call(this,state_47119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46424__auto____0;
cljs$core$async$mult_$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46424__auto____1;
return cljs$core$async$mult_$_state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___48405,cs,m,dchan,dctr,done))
})();
var state__46526__auto__ = (function (){var statearr_47203 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_47203[(6)] = c__46524__auto___48405);

return statearr_47203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___48405,cs,m,dchan,dctr,done))
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
var G__47205 = arguments.length;
switch (G__47205) {
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
var len__4730__auto___48563 = arguments.length;
var i__4731__auto___48564 = (0);
while(true){
if((i__4731__auto___48564 < len__4730__auto___48563)){
args__4736__auto__.push((arguments[i__4731__auto___48564]));

var G__48565 = (i__4731__auto___48564 + (1));
i__4731__auto___48564 = G__48565;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47210){
var map__47211 = p__47210;
var map__47211__$1 = (((((!((map__47211 == null))))?(((((map__47211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47211):map__47211);
var opts = map__47211__$1;
var statearr_47213_48566 = state;
(statearr_47213_48566[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__47211,map__47211__$1,opts){
return (function (val){
var statearr_47214_48567 = state;
(statearr_47214_48567[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__47211,map__47211__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_47215_48568 = state;
(statearr_47215_48568[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47206){
var G__47207 = cljs.core.first(seq47206);
var seq47206__$1 = cljs.core.next(seq47206);
var G__47208 = cljs.core.first(seq47206__$1);
var seq47206__$2 = cljs.core.next(seq47206__$1);
var G__47209 = cljs.core.first(seq47206__$2);
var seq47206__$3 = cljs.core.next(seq47206__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47207,G__47208,G__47209,seq47206__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47216 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47217){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47217 = meta47217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47218,meta47217__$1){
var self__ = this;
var _47218__$1 = this;
return (new cljs.core.async.t_cljs$core$async47216(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47217__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47216.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47218){
var self__ = this;
var _47218__$1 = this;
return self__.meta47217;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47216.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47216.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47216.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47216.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47216.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47216.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47216.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47216.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async47216.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47217","meta47217",-162331863,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47216.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47216";

cljs.core.async.t_cljs$core$async47216.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47216");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47216.
 */
cljs.core.async.__GT_t_cljs$core$async47216 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47216(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47217){
return (new cljs.core.async.t_cljs$core$async47216(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47217));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47216(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46524__auto___48582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___48582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___48582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47320){
var state_val_47321 = (state_47320[(1)]);
if((state_val_47321 === (7))){
var inst_47235 = (state_47320[(2)]);
var state_47320__$1 = state_47320;
var statearr_47322_48583 = state_47320__$1;
(statearr_47322_48583[(2)] = inst_47235);

(statearr_47322_48583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (20))){
var inst_47247 = (state_47320[(7)]);
var state_47320__$1 = state_47320;
var statearr_47323_48584 = state_47320__$1;
(statearr_47323_48584[(2)] = inst_47247);

(statearr_47323_48584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (27))){
var state_47320__$1 = state_47320;
var statearr_47324_48589 = state_47320__$1;
(statearr_47324_48589[(2)] = null);

(statearr_47324_48589[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (1))){
var inst_47222 = (state_47320[(8)]);
var inst_47222__$1 = calc_state();
var inst_47224 = (inst_47222__$1 == null);
var inst_47225 = cljs.core.not(inst_47224);
var state_47320__$1 = (function (){var statearr_47325 = state_47320;
(statearr_47325[(8)] = inst_47222__$1);

return statearr_47325;
})();
if(inst_47225){
var statearr_47326_48593 = state_47320__$1;
(statearr_47326_48593[(1)] = (2));

} else {
var statearr_47327_48594 = state_47320__$1;
(statearr_47327_48594[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (24))){
var inst_47271 = (state_47320[(9)]);
var inst_47294 = (state_47320[(10)]);
var inst_47280 = (state_47320[(11)]);
var inst_47294__$1 = (inst_47271.cljs$core$IFn$_invoke$arity$1 ? inst_47271.cljs$core$IFn$_invoke$arity$1(inst_47280) : inst_47271.call(null,inst_47280));
var state_47320__$1 = (function (){var statearr_47328 = state_47320;
(statearr_47328[(10)] = inst_47294__$1);

return statearr_47328;
})();
if(cljs.core.truth_(inst_47294__$1)){
var statearr_47329_48598 = state_47320__$1;
(statearr_47329_48598[(1)] = (29));

} else {
var statearr_47330_48599 = state_47320__$1;
(statearr_47330_48599[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (4))){
var inst_47238 = (state_47320[(2)]);
var state_47320__$1 = state_47320;
if(cljs.core.truth_(inst_47238)){
var statearr_47331_48604 = state_47320__$1;
(statearr_47331_48604[(1)] = (8));

} else {
var statearr_47332_48605 = state_47320__$1;
(statearr_47332_48605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (15))){
var inst_47265 = (state_47320[(2)]);
var state_47320__$1 = state_47320;
if(cljs.core.truth_(inst_47265)){
var statearr_47333_48607 = state_47320__$1;
(statearr_47333_48607[(1)] = (19));

} else {
var statearr_47334_48611 = state_47320__$1;
(statearr_47334_48611[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (21))){
var inst_47270 = (state_47320[(12)]);
var inst_47270__$1 = (state_47320[(2)]);
var inst_47271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47270__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47270__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47270__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47320__$1 = (function (){var statearr_47335 = state_47320;
(statearr_47335[(9)] = inst_47271);

(statearr_47335[(13)] = inst_47272);

(statearr_47335[(12)] = inst_47270__$1);

return statearr_47335;
})();
return cljs.core.async.ioc_alts_BANG_(state_47320__$1,(22),inst_47273);
} else {
if((state_val_47321 === (31))){
var inst_47302 = (state_47320[(2)]);
var state_47320__$1 = state_47320;
if(cljs.core.truth_(inst_47302)){
var statearr_47336_48618 = state_47320__$1;
(statearr_47336_48618[(1)] = (32));

} else {
var statearr_47337_48619 = state_47320__$1;
(statearr_47337_48619[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (32))){
var inst_47279 = (state_47320[(14)]);
var state_47320__$1 = state_47320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47320__$1,(35),out,inst_47279);
} else {
if((state_val_47321 === (33))){
var inst_47270 = (state_47320[(12)]);
var inst_47247 = inst_47270;
var state_47320__$1 = (function (){var statearr_47338 = state_47320;
(statearr_47338[(7)] = inst_47247);

return statearr_47338;
})();
var statearr_47339_48620 = state_47320__$1;
(statearr_47339_48620[(2)] = null);

(statearr_47339_48620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (13))){
var inst_47247 = (state_47320[(7)]);
var inst_47254 = inst_47247.cljs$lang$protocol_mask$partition0$;
var inst_47255 = (inst_47254 & (64));
var inst_47256 = inst_47247.cljs$core$ISeq$;
var inst_47257 = (cljs.core.PROTOCOL_SENTINEL === inst_47256);
var inst_47258 = ((inst_47255) || (inst_47257));
var state_47320__$1 = state_47320;
if(cljs.core.truth_(inst_47258)){
var statearr_47340_48624 = state_47320__$1;
(statearr_47340_48624[(1)] = (16));

} else {
var statearr_47341_48625 = state_47320__$1;
(statearr_47341_48625[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (22))){
var inst_47279 = (state_47320[(14)]);
var inst_47280 = (state_47320[(11)]);
var inst_47278 = (state_47320[(2)]);
var inst_47279__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47278,(0),null);
var inst_47280__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47278,(1),null);
var inst_47281 = (inst_47279__$1 == null);
var inst_47282 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47280__$1,change);
var inst_47283 = ((inst_47281) || (inst_47282));
var state_47320__$1 = (function (){var statearr_47342 = state_47320;
(statearr_47342[(14)] = inst_47279__$1);

(statearr_47342[(11)] = inst_47280__$1);

return statearr_47342;
})();
if(cljs.core.truth_(inst_47283)){
var statearr_47343_48628 = state_47320__$1;
(statearr_47343_48628[(1)] = (23));

} else {
var statearr_47344_48629 = state_47320__$1;
(statearr_47344_48629[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (36))){
var inst_47270 = (state_47320[(12)]);
var inst_47247 = inst_47270;
var state_47320__$1 = (function (){var statearr_47345 = state_47320;
(statearr_47345[(7)] = inst_47247);

return statearr_47345;
})();
var statearr_47346_48630 = state_47320__$1;
(statearr_47346_48630[(2)] = null);

(statearr_47346_48630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (29))){
var inst_47294 = (state_47320[(10)]);
var state_47320__$1 = state_47320;
var statearr_47347_48633 = state_47320__$1;
(statearr_47347_48633[(2)] = inst_47294);

(statearr_47347_48633[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (6))){
var state_47320__$1 = state_47320;
var statearr_47348_48637 = state_47320__$1;
(statearr_47348_48637[(2)] = false);

(statearr_47348_48637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (28))){
var inst_47290 = (state_47320[(2)]);
var inst_47291 = calc_state();
var inst_47247 = inst_47291;
var state_47320__$1 = (function (){var statearr_47349 = state_47320;
(statearr_47349[(15)] = inst_47290);

(statearr_47349[(7)] = inst_47247);

return statearr_47349;
})();
var statearr_47350_48638 = state_47320__$1;
(statearr_47350_48638[(2)] = null);

(statearr_47350_48638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (25))){
var inst_47316 = (state_47320[(2)]);
var state_47320__$1 = state_47320;
var statearr_47351_48640 = state_47320__$1;
(statearr_47351_48640[(2)] = inst_47316);

(statearr_47351_48640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (34))){
var inst_47314 = (state_47320[(2)]);
var state_47320__$1 = state_47320;
var statearr_47352_48641 = state_47320__$1;
(statearr_47352_48641[(2)] = inst_47314);

(statearr_47352_48641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (17))){
var state_47320__$1 = state_47320;
var statearr_47353_48642 = state_47320__$1;
(statearr_47353_48642[(2)] = false);

(statearr_47353_48642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (3))){
var state_47320__$1 = state_47320;
var statearr_47354_48645 = state_47320__$1;
(statearr_47354_48645[(2)] = false);

(statearr_47354_48645[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (12))){
var inst_47318 = (state_47320[(2)]);
var state_47320__$1 = state_47320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47320__$1,inst_47318);
} else {
if((state_val_47321 === (2))){
var inst_47222 = (state_47320[(8)]);
var inst_47227 = inst_47222.cljs$lang$protocol_mask$partition0$;
var inst_47228 = (inst_47227 & (64));
var inst_47229 = inst_47222.cljs$core$ISeq$;
var inst_47230 = (cljs.core.PROTOCOL_SENTINEL === inst_47229);
var inst_47231 = ((inst_47228) || (inst_47230));
var state_47320__$1 = state_47320;
if(cljs.core.truth_(inst_47231)){
var statearr_47355_48646 = state_47320__$1;
(statearr_47355_48646[(1)] = (5));

} else {
var statearr_47356_48647 = state_47320__$1;
(statearr_47356_48647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (23))){
var inst_47279 = (state_47320[(14)]);
var inst_47285 = (inst_47279 == null);
var state_47320__$1 = state_47320;
if(cljs.core.truth_(inst_47285)){
var statearr_47357_48648 = state_47320__$1;
(statearr_47357_48648[(1)] = (26));

} else {
var statearr_47358_48649 = state_47320__$1;
(statearr_47358_48649[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (35))){
var inst_47305 = (state_47320[(2)]);
var state_47320__$1 = state_47320;
if(cljs.core.truth_(inst_47305)){
var statearr_47359_48650 = state_47320__$1;
(statearr_47359_48650[(1)] = (36));

} else {
var statearr_47360_48651 = state_47320__$1;
(statearr_47360_48651[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (19))){
var inst_47247 = (state_47320[(7)]);
var inst_47267 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47247);
var state_47320__$1 = state_47320;
var statearr_47361_48652 = state_47320__$1;
(statearr_47361_48652[(2)] = inst_47267);

(statearr_47361_48652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (11))){
var inst_47247 = (state_47320[(7)]);
var inst_47251 = (inst_47247 == null);
var inst_47252 = cljs.core.not(inst_47251);
var state_47320__$1 = state_47320;
if(inst_47252){
var statearr_47362_48653 = state_47320__$1;
(statearr_47362_48653[(1)] = (13));

} else {
var statearr_47363_48654 = state_47320__$1;
(statearr_47363_48654[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (9))){
var inst_47222 = (state_47320[(8)]);
var state_47320__$1 = state_47320;
var statearr_47364_48655 = state_47320__$1;
(statearr_47364_48655[(2)] = inst_47222);

(statearr_47364_48655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (5))){
var state_47320__$1 = state_47320;
var statearr_47365_48657 = state_47320__$1;
(statearr_47365_48657[(2)] = true);

(statearr_47365_48657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (14))){
var state_47320__$1 = state_47320;
var statearr_47366_48661 = state_47320__$1;
(statearr_47366_48661[(2)] = false);

(statearr_47366_48661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (26))){
var inst_47280 = (state_47320[(11)]);
var inst_47287 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47280);
var state_47320__$1 = state_47320;
var statearr_47367_48662 = state_47320__$1;
(statearr_47367_48662[(2)] = inst_47287);

(statearr_47367_48662[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (16))){
var state_47320__$1 = state_47320;
var statearr_47368_48663 = state_47320__$1;
(statearr_47368_48663[(2)] = true);

(statearr_47368_48663[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (38))){
var inst_47310 = (state_47320[(2)]);
var state_47320__$1 = state_47320;
var statearr_47369_48664 = state_47320__$1;
(statearr_47369_48664[(2)] = inst_47310);

(statearr_47369_48664[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (30))){
var inst_47271 = (state_47320[(9)]);
var inst_47280 = (state_47320[(11)]);
var inst_47272 = (state_47320[(13)]);
var inst_47297 = cljs.core.empty_QMARK_(inst_47271);
var inst_47298 = (inst_47272.cljs$core$IFn$_invoke$arity$1 ? inst_47272.cljs$core$IFn$_invoke$arity$1(inst_47280) : inst_47272.call(null,inst_47280));
var inst_47299 = cljs.core.not(inst_47298);
var inst_47300 = ((inst_47297) && (inst_47299));
var state_47320__$1 = state_47320;
var statearr_47370_48665 = state_47320__$1;
(statearr_47370_48665[(2)] = inst_47300);

(statearr_47370_48665[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (10))){
var inst_47222 = (state_47320[(8)]);
var inst_47243 = (state_47320[(2)]);
var inst_47244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47243,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47243,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47243,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47247 = inst_47222;
var state_47320__$1 = (function (){var statearr_47371 = state_47320;
(statearr_47371[(7)] = inst_47247);

(statearr_47371[(16)] = inst_47246);

(statearr_47371[(17)] = inst_47245);

(statearr_47371[(18)] = inst_47244);

return statearr_47371;
})();
var statearr_47372_48666 = state_47320__$1;
(statearr_47372_48666[(2)] = null);

(statearr_47372_48666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (18))){
var inst_47262 = (state_47320[(2)]);
var state_47320__$1 = state_47320;
var statearr_47373_48671 = state_47320__$1;
(statearr_47373_48671[(2)] = inst_47262);

(statearr_47373_48671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (37))){
var state_47320__$1 = state_47320;
var statearr_47374_48672 = state_47320__$1;
(statearr_47374_48672[(2)] = null);

(statearr_47374_48672[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47321 === (8))){
var inst_47222 = (state_47320[(8)]);
var inst_47240 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47222);
var state_47320__$1 = state_47320;
var statearr_47375_48674 = state_47320__$1;
(statearr_47375_48674[(2)] = inst_47240);

(statearr_47375_48674[(1)] = (10));


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
});})(c__46524__auto___48582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__46423__auto__,c__46524__auto___48582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__46424__auto__ = null;
var cljs$core$async$mix_$_state_machine__46424__auto____0 = (function (){
var statearr_47376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47376[(0)] = cljs$core$async$mix_$_state_machine__46424__auto__);

(statearr_47376[(1)] = (1));

return statearr_47376;
});
var cljs$core$async$mix_$_state_machine__46424__auto____1 = (function (state_47320){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_47320);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e47377){if((e47377 instanceof Object)){
var ex__46427__auto__ = e47377;
var statearr_47378_48675 = state_47320;
(statearr_47378_48675[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47377;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48677 = state_47320;
state_47320 = G__48677;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46424__auto__ = function(state_47320){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46424__auto____1.call(this,state_47320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46424__auto____0;
cljs$core$async$mix_$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46424__auto____1;
return cljs$core$async$mix_$_state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___48582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__46526__auto__ = (function (){var statearr_47379 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_47379[(6)] = c__46524__auto___48582);

return statearr_47379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___48582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__47381 = arguments.length;
switch (G__47381) {
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
var G__47384 = arguments.length;
switch (G__47384) {
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
return (function (p1__47382_SHARP_){
if(cljs.core.truth_((p1__47382_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47382_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47382_SHARP_.call(null,topic)))){
return p1__47382_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47382_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47385 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47386){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47386 = meta47386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47387,meta47386__$1){
var self__ = this;
var _47387__$1 = this;
return (new cljs.core.async.t_cljs$core$async47385(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47386__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47385.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47387){
var self__ = this;
var _47387__$1 = this;
return self__.meta47386;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47385.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47385.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47385.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47385.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47385.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async47385.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47385.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47385.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47386","meta47386",669887892,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47385.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47385";

cljs.core.async.t_cljs$core$async47385.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47385");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47385.
 */
cljs.core.async.__GT_t_cljs$core$async47385 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47385(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47386){
return (new cljs.core.async.t_cljs$core$async47385(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47386));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47385(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46524__auto___48692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___48692,mults,ensure_mult,p){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___48692,mults,ensure_mult,p){
return (function (state_47459){
var state_val_47460 = (state_47459[(1)]);
if((state_val_47460 === (7))){
var inst_47455 = (state_47459[(2)]);
var state_47459__$1 = state_47459;
var statearr_47461_48693 = state_47459__$1;
(statearr_47461_48693[(2)] = inst_47455);

(statearr_47461_48693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (20))){
var state_47459__$1 = state_47459;
var statearr_47462_48694 = state_47459__$1;
(statearr_47462_48694[(2)] = null);

(statearr_47462_48694[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (1))){
var state_47459__$1 = state_47459;
var statearr_47463_48696 = state_47459__$1;
(statearr_47463_48696[(2)] = null);

(statearr_47463_48696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (24))){
var inst_47438 = (state_47459[(7)]);
var inst_47447 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47438);
var state_47459__$1 = state_47459;
var statearr_47464_48697 = state_47459__$1;
(statearr_47464_48697[(2)] = inst_47447);

(statearr_47464_48697[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (4))){
var inst_47390 = (state_47459[(8)]);
var inst_47390__$1 = (state_47459[(2)]);
var inst_47391 = (inst_47390__$1 == null);
var state_47459__$1 = (function (){var statearr_47465 = state_47459;
(statearr_47465[(8)] = inst_47390__$1);

return statearr_47465;
})();
if(cljs.core.truth_(inst_47391)){
var statearr_47466_48704 = state_47459__$1;
(statearr_47466_48704[(1)] = (5));

} else {
var statearr_47467_48705 = state_47459__$1;
(statearr_47467_48705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (15))){
var inst_47432 = (state_47459[(2)]);
var state_47459__$1 = state_47459;
var statearr_47468_48707 = state_47459__$1;
(statearr_47468_48707[(2)] = inst_47432);

(statearr_47468_48707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (21))){
var inst_47452 = (state_47459[(2)]);
var state_47459__$1 = (function (){var statearr_47469 = state_47459;
(statearr_47469[(9)] = inst_47452);

return statearr_47469;
})();
var statearr_47470_48708 = state_47459__$1;
(statearr_47470_48708[(2)] = null);

(statearr_47470_48708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (13))){
var inst_47414 = (state_47459[(10)]);
var inst_47416 = cljs.core.chunked_seq_QMARK_(inst_47414);
var state_47459__$1 = state_47459;
if(inst_47416){
var statearr_47471_48710 = state_47459__$1;
(statearr_47471_48710[(1)] = (16));

} else {
var statearr_47472_48711 = state_47459__$1;
(statearr_47472_48711[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (22))){
var inst_47444 = (state_47459[(2)]);
var state_47459__$1 = state_47459;
if(cljs.core.truth_(inst_47444)){
var statearr_47473_48716 = state_47459__$1;
(statearr_47473_48716[(1)] = (23));

} else {
var statearr_47474_48717 = state_47459__$1;
(statearr_47474_48717[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (6))){
var inst_47440 = (state_47459[(11)]);
var inst_47438 = (state_47459[(7)]);
var inst_47390 = (state_47459[(8)]);
var inst_47438__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47390) : topic_fn.call(null,inst_47390));
var inst_47439 = cljs.core.deref(mults);
var inst_47440__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47439,inst_47438__$1);
var state_47459__$1 = (function (){var statearr_47475 = state_47459;
(statearr_47475[(11)] = inst_47440__$1);

(statearr_47475[(7)] = inst_47438__$1);

return statearr_47475;
})();
if(cljs.core.truth_(inst_47440__$1)){
var statearr_47476_48719 = state_47459__$1;
(statearr_47476_48719[(1)] = (19));

} else {
var statearr_47477_48720 = state_47459__$1;
(statearr_47477_48720[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (25))){
var inst_47449 = (state_47459[(2)]);
var state_47459__$1 = state_47459;
var statearr_47478_48721 = state_47459__$1;
(statearr_47478_48721[(2)] = inst_47449);

(statearr_47478_48721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (17))){
var inst_47414 = (state_47459[(10)]);
var inst_47423 = cljs.core.first(inst_47414);
var inst_47424 = cljs.core.async.muxch_STAR_(inst_47423);
var inst_47425 = cljs.core.async.close_BANG_(inst_47424);
var inst_47426 = cljs.core.next(inst_47414);
var inst_47400 = inst_47426;
var inst_47401 = null;
var inst_47402 = (0);
var inst_47403 = (0);
var state_47459__$1 = (function (){var statearr_47479 = state_47459;
(statearr_47479[(12)] = inst_47401);

(statearr_47479[(13)] = inst_47400);

(statearr_47479[(14)] = inst_47425);

(statearr_47479[(15)] = inst_47402);

(statearr_47479[(16)] = inst_47403);

return statearr_47479;
})();
var statearr_47480_48722 = state_47459__$1;
(statearr_47480_48722[(2)] = null);

(statearr_47480_48722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (3))){
var inst_47457 = (state_47459[(2)]);
var state_47459__$1 = state_47459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47459__$1,inst_47457);
} else {
if((state_val_47460 === (12))){
var inst_47434 = (state_47459[(2)]);
var state_47459__$1 = state_47459;
var statearr_47481_48724 = state_47459__$1;
(statearr_47481_48724[(2)] = inst_47434);

(statearr_47481_48724[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (2))){
var state_47459__$1 = state_47459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47459__$1,(4),ch);
} else {
if((state_val_47460 === (23))){
var state_47459__$1 = state_47459;
var statearr_47482_48726 = state_47459__$1;
(statearr_47482_48726[(2)] = null);

(statearr_47482_48726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (19))){
var inst_47440 = (state_47459[(11)]);
var inst_47390 = (state_47459[(8)]);
var inst_47442 = cljs.core.async.muxch_STAR_(inst_47440);
var state_47459__$1 = state_47459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47459__$1,(22),inst_47442,inst_47390);
} else {
if((state_val_47460 === (11))){
var inst_47400 = (state_47459[(13)]);
var inst_47414 = (state_47459[(10)]);
var inst_47414__$1 = cljs.core.seq(inst_47400);
var state_47459__$1 = (function (){var statearr_47483 = state_47459;
(statearr_47483[(10)] = inst_47414__$1);

return statearr_47483;
})();
if(inst_47414__$1){
var statearr_47484_48730 = state_47459__$1;
(statearr_47484_48730[(1)] = (13));

} else {
var statearr_47485_48731 = state_47459__$1;
(statearr_47485_48731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (9))){
var inst_47436 = (state_47459[(2)]);
var state_47459__$1 = state_47459;
var statearr_47486_48733 = state_47459__$1;
(statearr_47486_48733[(2)] = inst_47436);

(statearr_47486_48733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (5))){
var inst_47397 = cljs.core.deref(mults);
var inst_47398 = cljs.core.vals(inst_47397);
var inst_47399 = cljs.core.seq(inst_47398);
var inst_47400 = inst_47399;
var inst_47401 = null;
var inst_47402 = (0);
var inst_47403 = (0);
var state_47459__$1 = (function (){var statearr_47487 = state_47459;
(statearr_47487[(12)] = inst_47401);

(statearr_47487[(13)] = inst_47400);

(statearr_47487[(15)] = inst_47402);

(statearr_47487[(16)] = inst_47403);

return statearr_47487;
})();
var statearr_47488_48738 = state_47459__$1;
(statearr_47488_48738[(2)] = null);

(statearr_47488_48738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (14))){
var state_47459__$1 = state_47459;
var statearr_47492_48739 = state_47459__$1;
(statearr_47492_48739[(2)] = null);

(statearr_47492_48739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (16))){
var inst_47414 = (state_47459[(10)]);
var inst_47418 = cljs.core.chunk_first(inst_47414);
var inst_47419 = cljs.core.chunk_rest(inst_47414);
var inst_47420 = cljs.core.count(inst_47418);
var inst_47400 = inst_47419;
var inst_47401 = inst_47418;
var inst_47402 = inst_47420;
var inst_47403 = (0);
var state_47459__$1 = (function (){var statearr_47493 = state_47459;
(statearr_47493[(12)] = inst_47401);

(statearr_47493[(13)] = inst_47400);

(statearr_47493[(15)] = inst_47402);

(statearr_47493[(16)] = inst_47403);

return statearr_47493;
})();
var statearr_47494_48741 = state_47459__$1;
(statearr_47494_48741[(2)] = null);

(statearr_47494_48741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (10))){
var inst_47401 = (state_47459[(12)]);
var inst_47400 = (state_47459[(13)]);
var inst_47402 = (state_47459[(15)]);
var inst_47403 = (state_47459[(16)]);
var inst_47408 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47401,inst_47403);
var inst_47409 = cljs.core.async.muxch_STAR_(inst_47408);
var inst_47410 = cljs.core.async.close_BANG_(inst_47409);
var inst_47411 = (inst_47403 + (1));
var tmp47489 = inst_47401;
var tmp47490 = inst_47400;
var tmp47491 = inst_47402;
var inst_47400__$1 = tmp47490;
var inst_47401__$1 = tmp47489;
var inst_47402__$1 = tmp47491;
var inst_47403__$1 = inst_47411;
var state_47459__$1 = (function (){var statearr_47495 = state_47459;
(statearr_47495[(12)] = inst_47401__$1);

(statearr_47495[(13)] = inst_47400__$1);

(statearr_47495[(15)] = inst_47402__$1);

(statearr_47495[(16)] = inst_47403__$1);

(statearr_47495[(17)] = inst_47410);

return statearr_47495;
})();
var statearr_47496_48749 = state_47459__$1;
(statearr_47496_48749[(2)] = null);

(statearr_47496_48749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (18))){
var inst_47429 = (state_47459[(2)]);
var state_47459__$1 = state_47459;
var statearr_47497_48752 = state_47459__$1;
(statearr_47497_48752[(2)] = inst_47429);

(statearr_47497_48752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47460 === (8))){
var inst_47402 = (state_47459[(15)]);
var inst_47403 = (state_47459[(16)]);
var inst_47405 = (inst_47403 < inst_47402);
var inst_47406 = inst_47405;
var state_47459__$1 = state_47459;
if(cljs.core.truth_(inst_47406)){
var statearr_47498_48753 = state_47459__$1;
(statearr_47498_48753[(1)] = (10));

} else {
var statearr_47499_48754 = state_47459__$1;
(statearr_47499_48754[(1)] = (11));

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
});})(c__46524__auto___48692,mults,ensure_mult,p))
;
return ((function (switch__46423__auto__,c__46524__auto___48692,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__46424__auto__ = null;
var cljs$core$async$state_machine__46424__auto____0 = (function (){
var statearr_47500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47500[(0)] = cljs$core$async$state_machine__46424__auto__);

(statearr_47500[(1)] = (1));

return statearr_47500;
});
var cljs$core$async$state_machine__46424__auto____1 = (function (state_47459){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_47459);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e47501){if((e47501 instanceof Object)){
var ex__46427__auto__ = e47501;
var statearr_47502_48755 = state_47459;
(statearr_47502_48755[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48756 = state_47459;
state_47459 = G__48756;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$state_machine__46424__auto__ = function(state_47459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46424__auto____1.call(this,state_47459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46424__auto____0;
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46424__auto____1;
return cljs$core$async$state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___48692,mults,ensure_mult,p))
})();
var state__46526__auto__ = (function (){var statearr_47503 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_47503[(6)] = c__46524__auto___48692);

return statearr_47503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___48692,mults,ensure_mult,p))
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
var G__47505 = arguments.length;
switch (G__47505) {
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
var G__47507 = arguments.length;
switch (G__47507) {
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
var G__47509 = arguments.length;
switch (G__47509) {
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
var c__46524__auto___48763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___48763,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___48763,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47548){
var state_val_47549 = (state_47548[(1)]);
if((state_val_47549 === (7))){
var state_47548__$1 = state_47548;
var statearr_47550_48764 = state_47548__$1;
(statearr_47550_48764[(2)] = null);

(statearr_47550_48764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (1))){
var state_47548__$1 = state_47548;
var statearr_47551_48765 = state_47548__$1;
(statearr_47551_48765[(2)] = null);

(statearr_47551_48765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (4))){
var inst_47512 = (state_47548[(7)]);
var inst_47514 = (inst_47512 < cnt);
var state_47548__$1 = state_47548;
if(cljs.core.truth_(inst_47514)){
var statearr_47552_48766 = state_47548__$1;
(statearr_47552_48766[(1)] = (6));

} else {
var statearr_47553_48767 = state_47548__$1;
(statearr_47553_48767[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (15))){
var inst_47544 = (state_47548[(2)]);
var state_47548__$1 = state_47548;
var statearr_47554_48768 = state_47548__$1;
(statearr_47554_48768[(2)] = inst_47544);

(statearr_47554_48768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (13))){
var inst_47537 = cljs.core.async.close_BANG_(out);
var state_47548__$1 = state_47548;
var statearr_47555_48769 = state_47548__$1;
(statearr_47555_48769[(2)] = inst_47537);

(statearr_47555_48769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (6))){
var state_47548__$1 = state_47548;
var statearr_47556_48770 = state_47548__$1;
(statearr_47556_48770[(2)] = null);

(statearr_47556_48770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (3))){
var inst_47546 = (state_47548[(2)]);
var state_47548__$1 = state_47548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47548__$1,inst_47546);
} else {
if((state_val_47549 === (12))){
var inst_47534 = (state_47548[(8)]);
var inst_47534__$1 = (state_47548[(2)]);
var inst_47535 = cljs.core.some(cljs.core.nil_QMARK_,inst_47534__$1);
var state_47548__$1 = (function (){var statearr_47557 = state_47548;
(statearr_47557[(8)] = inst_47534__$1);

return statearr_47557;
})();
if(cljs.core.truth_(inst_47535)){
var statearr_47558_48771 = state_47548__$1;
(statearr_47558_48771[(1)] = (13));

} else {
var statearr_47559_48772 = state_47548__$1;
(statearr_47559_48772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (2))){
var inst_47511 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47512 = (0);
var state_47548__$1 = (function (){var statearr_47560 = state_47548;
(statearr_47560[(7)] = inst_47512);

(statearr_47560[(9)] = inst_47511);

return statearr_47560;
})();
var statearr_47561_48777 = state_47548__$1;
(statearr_47561_48777[(2)] = null);

(statearr_47561_48777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (11))){
var inst_47512 = (state_47548[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47548,(10),Object,null,(9));
var inst_47521 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47512) : chs__$1.call(null,inst_47512));
var inst_47522 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47512) : done.call(null,inst_47512));
var inst_47523 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47521,inst_47522);
var state_47548__$1 = state_47548;
var statearr_47562_48782 = state_47548__$1;
(statearr_47562_48782[(2)] = inst_47523);


cljs.core.async.impl.ioc_helpers.process_exception(state_47548__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (9))){
var inst_47512 = (state_47548[(7)]);
var inst_47525 = (state_47548[(2)]);
var inst_47526 = (inst_47512 + (1));
var inst_47512__$1 = inst_47526;
var state_47548__$1 = (function (){var statearr_47563 = state_47548;
(statearr_47563[(10)] = inst_47525);

(statearr_47563[(7)] = inst_47512__$1);

return statearr_47563;
})();
var statearr_47564_48783 = state_47548__$1;
(statearr_47564_48783[(2)] = null);

(statearr_47564_48783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (5))){
var inst_47532 = (state_47548[(2)]);
var state_47548__$1 = (function (){var statearr_47565 = state_47548;
(statearr_47565[(11)] = inst_47532);

return statearr_47565;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47548__$1,(12),dchan);
} else {
if((state_val_47549 === (14))){
var inst_47534 = (state_47548[(8)]);
var inst_47539 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47534);
var state_47548__$1 = state_47548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47548__$1,(16),out,inst_47539);
} else {
if((state_val_47549 === (16))){
var inst_47541 = (state_47548[(2)]);
var state_47548__$1 = (function (){var statearr_47566 = state_47548;
(statearr_47566[(12)] = inst_47541);

return statearr_47566;
})();
var statearr_47567_48786 = state_47548__$1;
(statearr_47567_48786[(2)] = null);

(statearr_47567_48786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (10))){
var inst_47516 = (state_47548[(2)]);
var inst_47517 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47548__$1 = (function (){var statearr_47568 = state_47548;
(statearr_47568[(13)] = inst_47516);

return statearr_47568;
})();
var statearr_47569_48787 = state_47548__$1;
(statearr_47569_48787[(2)] = inst_47517);


cljs.core.async.impl.ioc_helpers.process_exception(state_47548__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47549 === (8))){
var inst_47530 = (state_47548[(2)]);
var state_47548__$1 = state_47548;
var statearr_47570_48788 = state_47548__$1;
(statearr_47570_48788[(2)] = inst_47530);

(statearr_47570_48788[(1)] = (5));


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
});})(c__46524__auto___48763,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__46423__auto__,c__46524__auto___48763,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__46424__auto__ = null;
var cljs$core$async$state_machine__46424__auto____0 = (function (){
var statearr_47571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47571[(0)] = cljs$core$async$state_machine__46424__auto__);

(statearr_47571[(1)] = (1));

return statearr_47571;
});
var cljs$core$async$state_machine__46424__auto____1 = (function (state_47548){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_47548);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e47572){if((e47572 instanceof Object)){
var ex__46427__auto__ = e47572;
var statearr_47573_48791 = state_47548;
(statearr_47573_48791[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48792 = state_47548;
state_47548 = G__48792;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$state_machine__46424__auto__ = function(state_47548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46424__auto____1.call(this,state_47548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46424__auto____0;
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46424__auto____1;
return cljs$core$async$state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___48763,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__46526__auto__ = (function (){var statearr_47574 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_47574[(6)] = c__46524__auto___48763);

return statearr_47574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___48763,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__47577 = arguments.length;
switch (G__47577) {
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
var c__46524__auto___48796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___48796,out){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___48796,out){
return (function (state_47609){
var state_val_47610 = (state_47609[(1)]);
if((state_val_47610 === (7))){
var inst_47589 = (state_47609[(7)]);
var inst_47588 = (state_47609[(8)]);
var inst_47588__$1 = (state_47609[(2)]);
var inst_47589__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47588__$1,(0),null);
var inst_47590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47588__$1,(1),null);
var inst_47591 = (inst_47589__$1 == null);
var state_47609__$1 = (function (){var statearr_47611 = state_47609;
(statearr_47611[(7)] = inst_47589__$1);

(statearr_47611[(8)] = inst_47588__$1);

(statearr_47611[(9)] = inst_47590);

return statearr_47611;
})();
if(cljs.core.truth_(inst_47591)){
var statearr_47612_48797 = state_47609__$1;
(statearr_47612_48797[(1)] = (8));

} else {
var statearr_47613_48799 = state_47609__$1;
(statearr_47613_48799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (1))){
var inst_47578 = cljs.core.vec(chs);
var inst_47579 = inst_47578;
var state_47609__$1 = (function (){var statearr_47614 = state_47609;
(statearr_47614[(10)] = inst_47579);

return statearr_47614;
})();
var statearr_47615_48800 = state_47609__$1;
(statearr_47615_48800[(2)] = null);

(statearr_47615_48800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (4))){
var inst_47579 = (state_47609[(10)]);
var state_47609__$1 = state_47609;
return cljs.core.async.ioc_alts_BANG_(state_47609__$1,(7),inst_47579);
} else {
if((state_val_47610 === (6))){
var inst_47605 = (state_47609[(2)]);
var state_47609__$1 = state_47609;
var statearr_47616_48801 = state_47609__$1;
(statearr_47616_48801[(2)] = inst_47605);

(statearr_47616_48801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (3))){
var inst_47607 = (state_47609[(2)]);
var state_47609__$1 = state_47609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47609__$1,inst_47607);
} else {
if((state_val_47610 === (2))){
var inst_47579 = (state_47609[(10)]);
var inst_47581 = cljs.core.count(inst_47579);
var inst_47582 = (inst_47581 > (0));
var state_47609__$1 = state_47609;
if(cljs.core.truth_(inst_47582)){
var statearr_47618_48803 = state_47609__$1;
(statearr_47618_48803[(1)] = (4));

} else {
var statearr_47619_48804 = state_47609__$1;
(statearr_47619_48804[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (11))){
var inst_47579 = (state_47609[(10)]);
var inst_47598 = (state_47609[(2)]);
var tmp47617 = inst_47579;
var inst_47579__$1 = tmp47617;
var state_47609__$1 = (function (){var statearr_47620 = state_47609;
(statearr_47620[(11)] = inst_47598);

(statearr_47620[(10)] = inst_47579__$1);

return statearr_47620;
})();
var statearr_47621_48806 = state_47609__$1;
(statearr_47621_48806[(2)] = null);

(statearr_47621_48806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (9))){
var inst_47589 = (state_47609[(7)]);
var state_47609__$1 = state_47609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47609__$1,(11),out,inst_47589);
} else {
if((state_val_47610 === (5))){
var inst_47603 = cljs.core.async.close_BANG_(out);
var state_47609__$1 = state_47609;
var statearr_47622_48807 = state_47609__$1;
(statearr_47622_48807[(2)] = inst_47603);

(statearr_47622_48807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (10))){
var inst_47601 = (state_47609[(2)]);
var state_47609__$1 = state_47609;
var statearr_47623_48808 = state_47609__$1;
(statearr_47623_48808[(2)] = inst_47601);

(statearr_47623_48808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47610 === (8))){
var inst_47589 = (state_47609[(7)]);
var inst_47588 = (state_47609[(8)]);
var inst_47590 = (state_47609[(9)]);
var inst_47579 = (state_47609[(10)]);
var inst_47593 = (function (){var cs = inst_47579;
var vec__47584 = inst_47588;
var v = inst_47589;
var c = inst_47590;
return ((function (cs,vec__47584,v,c,inst_47589,inst_47588,inst_47590,inst_47579,state_val_47610,c__46524__auto___48796,out){
return (function (p1__47575_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47575_SHARP_);
});
;})(cs,vec__47584,v,c,inst_47589,inst_47588,inst_47590,inst_47579,state_val_47610,c__46524__auto___48796,out))
})();
var inst_47594 = cljs.core.filterv(inst_47593,inst_47579);
var inst_47579__$1 = inst_47594;
var state_47609__$1 = (function (){var statearr_47624 = state_47609;
(statearr_47624[(10)] = inst_47579__$1);

return statearr_47624;
})();
var statearr_47625_48816 = state_47609__$1;
(statearr_47625_48816[(2)] = null);

(statearr_47625_48816[(1)] = (2));


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
});})(c__46524__auto___48796,out))
;
return ((function (switch__46423__auto__,c__46524__auto___48796,out){
return (function() {
var cljs$core$async$state_machine__46424__auto__ = null;
var cljs$core$async$state_machine__46424__auto____0 = (function (){
var statearr_47626 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47626[(0)] = cljs$core$async$state_machine__46424__auto__);

(statearr_47626[(1)] = (1));

return statearr_47626;
});
var cljs$core$async$state_machine__46424__auto____1 = (function (state_47609){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_47609);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e47627){if((e47627 instanceof Object)){
var ex__46427__auto__ = e47627;
var statearr_47628_48820 = state_47609;
(statearr_47628_48820[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48821 = state_47609;
state_47609 = G__48821;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$state_machine__46424__auto__ = function(state_47609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46424__auto____1.call(this,state_47609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46424__auto____0;
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46424__auto____1;
return cljs$core$async$state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___48796,out))
})();
var state__46526__auto__ = (function (){var statearr_47629 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_47629[(6)] = c__46524__auto___48796);

return statearr_47629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___48796,out))
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
var G__47631 = arguments.length;
switch (G__47631) {
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
var c__46524__auto___48829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___48829,out){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___48829,out){
return (function (state_47655){
var state_val_47656 = (state_47655[(1)]);
if((state_val_47656 === (7))){
var inst_47637 = (state_47655[(7)]);
var inst_47637__$1 = (state_47655[(2)]);
var inst_47638 = (inst_47637__$1 == null);
var inst_47639 = cljs.core.not(inst_47638);
var state_47655__$1 = (function (){var statearr_47657 = state_47655;
(statearr_47657[(7)] = inst_47637__$1);

return statearr_47657;
})();
if(inst_47639){
var statearr_47658_48833 = state_47655__$1;
(statearr_47658_48833[(1)] = (8));

} else {
var statearr_47659_48834 = state_47655__$1;
(statearr_47659_48834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (1))){
var inst_47632 = (0);
var state_47655__$1 = (function (){var statearr_47660 = state_47655;
(statearr_47660[(8)] = inst_47632);

return statearr_47660;
})();
var statearr_47661_48835 = state_47655__$1;
(statearr_47661_48835[(2)] = null);

(statearr_47661_48835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (4))){
var state_47655__$1 = state_47655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47655__$1,(7),ch);
} else {
if((state_val_47656 === (6))){
var inst_47650 = (state_47655[(2)]);
var state_47655__$1 = state_47655;
var statearr_47662_48837 = state_47655__$1;
(statearr_47662_48837[(2)] = inst_47650);

(statearr_47662_48837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (3))){
var inst_47652 = (state_47655[(2)]);
var inst_47653 = cljs.core.async.close_BANG_(out);
var state_47655__$1 = (function (){var statearr_47663 = state_47655;
(statearr_47663[(9)] = inst_47652);

return statearr_47663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47655__$1,inst_47653);
} else {
if((state_val_47656 === (2))){
var inst_47632 = (state_47655[(8)]);
var inst_47634 = (inst_47632 < n);
var state_47655__$1 = state_47655;
if(cljs.core.truth_(inst_47634)){
var statearr_47664_48838 = state_47655__$1;
(statearr_47664_48838[(1)] = (4));

} else {
var statearr_47665_48839 = state_47655__$1;
(statearr_47665_48839[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (11))){
var inst_47632 = (state_47655[(8)]);
var inst_47642 = (state_47655[(2)]);
var inst_47643 = (inst_47632 + (1));
var inst_47632__$1 = inst_47643;
var state_47655__$1 = (function (){var statearr_47666 = state_47655;
(statearr_47666[(10)] = inst_47642);

(statearr_47666[(8)] = inst_47632__$1);

return statearr_47666;
})();
var statearr_47667_48845 = state_47655__$1;
(statearr_47667_48845[(2)] = null);

(statearr_47667_48845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (9))){
var state_47655__$1 = state_47655;
var statearr_47668_48850 = state_47655__$1;
(statearr_47668_48850[(2)] = null);

(statearr_47668_48850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (5))){
var state_47655__$1 = state_47655;
var statearr_47669_48851 = state_47655__$1;
(statearr_47669_48851[(2)] = null);

(statearr_47669_48851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (10))){
var inst_47647 = (state_47655[(2)]);
var state_47655__$1 = state_47655;
var statearr_47670_48852 = state_47655__$1;
(statearr_47670_48852[(2)] = inst_47647);

(statearr_47670_48852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47656 === (8))){
var inst_47637 = (state_47655[(7)]);
var state_47655__$1 = state_47655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47655__$1,(11),out,inst_47637);
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
});})(c__46524__auto___48829,out))
;
return ((function (switch__46423__auto__,c__46524__auto___48829,out){
return (function() {
var cljs$core$async$state_machine__46424__auto__ = null;
var cljs$core$async$state_machine__46424__auto____0 = (function (){
var statearr_47671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47671[(0)] = cljs$core$async$state_machine__46424__auto__);

(statearr_47671[(1)] = (1));

return statearr_47671;
});
var cljs$core$async$state_machine__46424__auto____1 = (function (state_47655){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_47655);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e47672){if((e47672 instanceof Object)){
var ex__46427__auto__ = e47672;
var statearr_47673_48859 = state_47655;
(statearr_47673_48859[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48860 = state_47655;
state_47655 = G__48860;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$state_machine__46424__auto__ = function(state_47655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46424__auto____1.call(this,state_47655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46424__auto____0;
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46424__auto____1;
return cljs$core$async$state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___48829,out))
})();
var state__46526__auto__ = (function (){var statearr_47674 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_47674[(6)] = c__46524__auto___48829);

return statearr_47674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___48829,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47676 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47676 = (function (f,ch,meta47677){
this.f = f;
this.ch = ch;
this.meta47677 = meta47677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47678,meta47677__$1){
var self__ = this;
var _47678__$1 = this;
return (new cljs.core.async.t_cljs$core$async47676(self__.f,self__.ch,meta47677__$1));
});

cljs.core.async.t_cljs$core$async47676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47678){
var self__ = this;
var _47678__$1 = this;
return self__.meta47677;
});

cljs.core.async.t_cljs$core$async47676.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47676.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async47676.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47679 = (function (f,ch,meta47677,_,fn1,meta47680){
this.f = f;
this.ch = ch;
this.meta47677 = meta47677;
this._ = _;
this.fn1 = fn1;
this.meta47680 = meta47680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47681,meta47680__$1){
var self__ = this;
var _47681__$1 = this;
return (new cljs.core.async.t_cljs$core$async47679(self__.f,self__.ch,self__.meta47677,self__._,self__.fn1,meta47680__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47681){
var self__ = this;
var _47681__$1 = this;
return self__.meta47680;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47679.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47679.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47675_SHARP_){
var G__47682 = (((p1__47675_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47675_SHARP_) : self__.f.call(null,p1__47675_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47682) : f1.call(null,G__47682));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47679.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47677","meta47677",714683996,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47676","cljs.core.async/t_cljs$core$async47676",1542780948,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47680","meta47680",-1651089329,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47679";

cljs.core.async.t_cljs$core$async47679.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47679");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47679.
 */
cljs.core.async.__GT_t_cljs$core$async47679 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47679(f__$1,ch__$1,meta47677__$1,___$2,fn1__$1,meta47680){
return (new cljs.core.async.t_cljs$core$async47679(f__$1,ch__$1,meta47677__$1,___$2,fn1__$1,meta47680));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47679(self__.f,self__.ch,self__.meta47677,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47683 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47683) : self__.f.call(null,G__47683));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47676.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47677","meta47677",714683996,null)], null);
});

cljs.core.async.t_cljs$core$async47676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47676";

cljs.core.async.t_cljs$core$async47676.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47676");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47676.
 */
cljs.core.async.__GT_t_cljs$core$async47676 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47676(f__$1,ch__$1,meta47677){
return (new cljs.core.async.t_cljs$core$async47676(f__$1,ch__$1,meta47677));
});

}

return (new cljs.core.async.t_cljs$core$async47676(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47684 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47684 = (function (f,ch,meta47685){
this.f = f;
this.ch = ch;
this.meta47685 = meta47685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47686,meta47685__$1){
var self__ = this;
var _47686__$1 = this;
return (new cljs.core.async.t_cljs$core$async47684(self__.f,self__.ch,meta47685__$1));
});

cljs.core.async.t_cljs$core$async47684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47686){
var self__ = this;
var _47686__$1 = this;
return self__.meta47685;
});

cljs.core.async.t_cljs$core$async47684.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47684.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47684.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47684.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47684.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47684.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async47684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47685","meta47685",-723482107,null)], null);
});

cljs.core.async.t_cljs$core$async47684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47684";

cljs.core.async.t_cljs$core$async47684.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47684");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47684.
 */
cljs.core.async.__GT_t_cljs$core$async47684 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47684(f__$1,ch__$1,meta47685){
return (new cljs.core.async.t_cljs$core$async47684(f__$1,ch__$1,meta47685));
});

}

return (new cljs.core.async.t_cljs$core$async47684(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47687 = (function (p,ch,meta47688){
this.p = p;
this.ch = ch;
this.meta47688 = meta47688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47689,meta47688__$1){
var self__ = this;
var _47689__$1 = this;
return (new cljs.core.async.t_cljs$core$async47687(self__.p,self__.ch,meta47688__$1));
});

cljs.core.async.t_cljs$core$async47687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47689){
var self__ = this;
var _47689__$1 = this;
return self__.meta47688;
});

cljs.core.async.t_cljs$core$async47687.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47687.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47687.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async47687.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47687.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47687.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47687.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47688","meta47688",229591307,null)], null);
});

cljs.core.async.t_cljs$core$async47687.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47687";

cljs.core.async.t_cljs$core$async47687.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47687");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47687.
 */
cljs.core.async.__GT_t_cljs$core$async47687 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47687(p__$1,ch__$1,meta47688){
return (new cljs.core.async.t_cljs$core$async47687(p__$1,ch__$1,meta47688));
});

}

return (new cljs.core.async.t_cljs$core$async47687(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47691 = arguments.length;
switch (G__47691) {
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
var c__46524__auto___48884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___48884,out){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___48884,out){
return (function (state_47712){
var state_val_47713 = (state_47712[(1)]);
if((state_val_47713 === (7))){
var inst_47708 = (state_47712[(2)]);
var state_47712__$1 = state_47712;
var statearr_47714_48885 = state_47712__$1;
(statearr_47714_48885[(2)] = inst_47708);

(statearr_47714_48885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (1))){
var state_47712__$1 = state_47712;
var statearr_47715_48887 = state_47712__$1;
(statearr_47715_48887[(2)] = null);

(statearr_47715_48887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (4))){
var inst_47694 = (state_47712[(7)]);
var inst_47694__$1 = (state_47712[(2)]);
var inst_47695 = (inst_47694__$1 == null);
var state_47712__$1 = (function (){var statearr_47716 = state_47712;
(statearr_47716[(7)] = inst_47694__$1);

return statearr_47716;
})();
if(cljs.core.truth_(inst_47695)){
var statearr_47717_48890 = state_47712__$1;
(statearr_47717_48890[(1)] = (5));

} else {
var statearr_47718_48891 = state_47712__$1;
(statearr_47718_48891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (6))){
var inst_47694 = (state_47712[(7)]);
var inst_47699 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47694) : p.call(null,inst_47694));
var state_47712__$1 = state_47712;
if(cljs.core.truth_(inst_47699)){
var statearr_47719_48893 = state_47712__$1;
(statearr_47719_48893[(1)] = (8));

} else {
var statearr_47720_48894 = state_47712__$1;
(statearr_47720_48894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (3))){
var inst_47710 = (state_47712[(2)]);
var state_47712__$1 = state_47712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47712__$1,inst_47710);
} else {
if((state_val_47713 === (2))){
var state_47712__$1 = state_47712;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47712__$1,(4),ch);
} else {
if((state_val_47713 === (11))){
var inst_47702 = (state_47712[(2)]);
var state_47712__$1 = state_47712;
var statearr_47721_48898 = state_47712__$1;
(statearr_47721_48898[(2)] = inst_47702);

(statearr_47721_48898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (9))){
var state_47712__$1 = state_47712;
var statearr_47722_48899 = state_47712__$1;
(statearr_47722_48899[(2)] = null);

(statearr_47722_48899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (5))){
var inst_47697 = cljs.core.async.close_BANG_(out);
var state_47712__$1 = state_47712;
var statearr_47723_48900 = state_47712__$1;
(statearr_47723_48900[(2)] = inst_47697);

(statearr_47723_48900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (10))){
var inst_47705 = (state_47712[(2)]);
var state_47712__$1 = (function (){var statearr_47724 = state_47712;
(statearr_47724[(8)] = inst_47705);

return statearr_47724;
})();
var statearr_47725_48901 = state_47712__$1;
(statearr_47725_48901[(2)] = null);

(statearr_47725_48901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (8))){
var inst_47694 = (state_47712[(7)]);
var state_47712__$1 = state_47712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47712__$1,(11),out,inst_47694);
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
});})(c__46524__auto___48884,out))
;
return ((function (switch__46423__auto__,c__46524__auto___48884,out){
return (function() {
var cljs$core$async$state_machine__46424__auto__ = null;
var cljs$core$async$state_machine__46424__auto____0 = (function (){
var statearr_47726 = [null,null,null,null,null,null,null,null,null];
(statearr_47726[(0)] = cljs$core$async$state_machine__46424__auto__);

(statearr_47726[(1)] = (1));

return statearr_47726;
});
var cljs$core$async$state_machine__46424__auto____1 = (function (state_47712){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_47712);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e47727){if((e47727 instanceof Object)){
var ex__46427__auto__ = e47727;
var statearr_47728_48905 = state_47712;
(statearr_47728_48905[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47727;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48906 = state_47712;
state_47712 = G__48906;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$state_machine__46424__auto__ = function(state_47712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46424__auto____1.call(this,state_47712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46424__auto____0;
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46424__auto____1;
return cljs$core$async$state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___48884,out))
})();
var state__46526__auto__ = (function (){var statearr_47729 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_47729[(6)] = c__46524__auto___48884);

return statearr_47729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___48884,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47731 = arguments.length;
switch (G__47731) {
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
var c__46524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto__){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto__){
return (function (state_47793){
var state_val_47794 = (state_47793[(1)]);
if((state_val_47794 === (7))){
var inst_47789 = (state_47793[(2)]);
var state_47793__$1 = state_47793;
var statearr_47795_48910 = state_47793__$1;
(statearr_47795_48910[(2)] = inst_47789);

(statearr_47795_48910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (20))){
var inst_47759 = (state_47793[(7)]);
var inst_47770 = (state_47793[(2)]);
var inst_47771 = cljs.core.next(inst_47759);
var inst_47745 = inst_47771;
var inst_47746 = null;
var inst_47747 = (0);
var inst_47748 = (0);
var state_47793__$1 = (function (){var statearr_47796 = state_47793;
(statearr_47796[(8)] = inst_47748);

(statearr_47796[(9)] = inst_47747);

(statearr_47796[(10)] = inst_47746);

(statearr_47796[(11)] = inst_47745);

(statearr_47796[(12)] = inst_47770);

return statearr_47796;
})();
var statearr_47797_48912 = state_47793__$1;
(statearr_47797_48912[(2)] = null);

(statearr_47797_48912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (1))){
var state_47793__$1 = state_47793;
var statearr_47798_48914 = state_47793__$1;
(statearr_47798_48914[(2)] = null);

(statearr_47798_48914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (4))){
var inst_47734 = (state_47793[(13)]);
var inst_47734__$1 = (state_47793[(2)]);
var inst_47735 = (inst_47734__$1 == null);
var state_47793__$1 = (function (){var statearr_47799 = state_47793;
(statearr_47799[(13)] = inst_47734__$1);

return statearr_47799;
})();
if(cljs.core.truth_(inst_47735)){
var statearr_47800_48915 = state_47793__$1;
(statearr_47800_48915[(1)] = (5));

} else {
var statearr_47801_48916 = state_47793__$1;
(statearr_47801_48916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (15))){
var state_47793__$1 = state_47793;
var statearr_47805_48917 = state_47793__$1;
(statearr_47805_48917[(2)] = null);

(statearr_47805_48917[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (21))){
var state_47793__$1 = state_47793;
var statearr_47806_48918 = state_47793__$1;
(statearr_47806_48918[(2)] = null);

(statearr_47806_48918[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (13))){
var inst_47748 = (state_47793[(8)]);
var inst_47747 = (state_47793[(9)]);
var inst_47746 = (state_47793[(10)]);
var inst_47745 = (state_47793[(11)]);
var inst_47755 = (state_47793[(2)]);
var inst_47756 = (inst_47748 + (1));
var tmp47802 = inst_47747;
var tmp47803 = inst_47746;
var tmp47804 = inst_47745;
var inst_47745__$1 = tmp47804;
var inst_47746__$1 = tmp47803;
var inst_47747__$1 = tmp47802;
var inst_47748__$1 = inst_47756;
var state_47793__$1 = (function (){var statearr_47807 = state_47793;
(statearr_47807[(8)] = inst_47748__$1);

(statearr_47807[(9)] = inst_47747__$1);

(statearr_47807[(10)] = inst_47746__$1);

(statearr_47807[(11)] = inst_47745__$1);

(statearr_47807[(14)] = inst_47755);

return statearr_47807;
})();
var statearr_47808_48919 = state_47793__$1;
(statearr_47808_48919[(2)] = null);

(statearr_47808_48919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (22))){
var state_47793__$1 = state_47793;
var statearr_47809_48920 = state_47793__$1;
(statearr_47809_48920[(2)] = null);

(statearr_47809_48920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (6))){
var inst_47734 = (state_47793[(13)]);
var inst_47743 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47734) : f.call(null,inst_47734));
var inst_47744 = cljs.core.seq(inst_47743);
var inst_47745 = inst_47744;
var inst_47746 = null;
var inst_47747 = (0);
var inst_47748 = (0);
var state_47793__$1 = (function (){var statearr_47810 = state_47793;
(statearr_47810[(8)] = inst_47748);

(statearr_47810[(9)] = inst_47747);

(statearr_47810[(10)] = inst_47746);

(statearr_47810[(11)] = inst_47745);

return statearr_47810;
})();
var statearr_47811_48924 = state_47793__$1;
(statearr_47811_48924[(2)] = null);

(statearr_47811_48924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (17))){
var inst_47759 = (state_47793[(7)]);
var inst_47763 = cljs.core.chunk_first(inst_47759);
var inst_47764 = cljs.core.chunk_rest(inst_47759);
var inst_47765 = cljs.core.count(inst_47763);
var inst_47745 = inst_47764;
var inst_47746 = inst_47763;
var inst_47747 = inst_47765;
var inst_47748 = (0);
var state_47793__$1 = (function (){var statearr_47812 = state_47793;
(statearr_47812[(8)] = inst_47748);

(statearr_47812[(9)] = inst_47747);

(statearr_47812[(10)] = inst_47746);

(statearr_47812[(11)] = inst_47745);

return statearr_47812;
})();
var statearr_47813_48931 = state_47793__$1;
(statearr_47813_48931[(2)] = null);

(statearr_47813_48931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (3))){
var inst_47791 = (state_47793[(2)]);
var state_47793__$1 = state_47793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47793__$1,inst_47791);
} else {
if((state_val_47794 === (12))){
var inst_47779 = (state_47793[(2)]);
var state_47793__$1 = state_47793;
var statearr_47814_48932 = state_47793__$1;
(statearr_47814_48932[(2)] = inst_47779);

(statearr_47814_48932[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (2))){
var state_47793__$1 = state_47793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47793__$1,(4),in$);
} else {
if((state_val_47794 === (23))){
var inst_47787 = (state_47793[(2)]);
var state_47793__$1 = state_47793;
var statearr_47815_48933 = state_47793__$1;
(statearr_47815_48933[(2)] = inst_47787);

(statearr_47815_48933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (19))){
var inst_47774 = (state_47793[(2)]);
var state_47793__$1 = state_47793;
var statearr_47816_48935 = state_47793__$1;
(statearr_47816_48935[(2)] = inst_47774);

(statearr_47816_48935[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (11))){
var inst_47759 = (state_47793[(7)]);
var inst_47745 = (state_47793[(11)]);
var inst_47759__$1 = cljs.core.seq(inst_47745);
var state_47793__$1 = (function (){var statearr_47817 = state_47793;
(statearr_47817[(7)] = inst_47759__$1);

return statearr_47817;
})();
if(inst_47759__$1){
var statearr_47818_48937 = state_47793__$1;
(statearr_47818_48937[(1)] = (14));

} else {
var statearr_47819_48938 = state_47793__$1;
(statearr_47819_48938[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (9))){
var inst_47781 = (state_47793[(2)]);
var inst_47782 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47793__$1 = (function (){var statearr_47820 = state_47793;
(statearr_47820[(15)] = inst_47781);

return statearr_47820;
})();
if(cljs.core.truth_(inst_47782)){
var statearr_47821_48940 = state_47793__$1;
(statearr_47821_48940[(1)] = (21));

} else {
var statearr_47822_48941 = state_47793__$1;
(statearr_47822_48941[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (5))){
var inst_47737 = cljs.core.async.close_BANG_(out);
var state_47793__$1 = state_47793;
var statearr_47823_48943 = state_47793__$1;
(statearr_47823_48943[(2)] = inst_47737);

(statearr_47823_48943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (14))){
var inst_47759 = (state_47793[(7)]);
var inst_47761 = cljs.core.chunked_seq_QMARK_(inst_47759);
var state_47793__$1 = state_47793;
if(inst_47761){
var statearr_47824_48944 = state_47793__$1;
(statearr_47824_48944[(1)] = (17));

} else {
var statearr_47825_48945 = state_47793__$1;
(statearr_47825_48945[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (16))){
var inst_47777 = (state_47793[(2)]);
var state_47793__$1 = state_47793;
var statearr_47826_48947 = state_47793__$1;
(statearr_47826_48947[(2)] = inst_47777);

(statearr_47826_48947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47794 === (10))){
var inst_47748 = (state_47793[(8)]);
var inst_47746 = (state_47793[(10)]);
var inst_47753 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47746,inst_47748);
var state_47793__$1 = state_47793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47793__$1,(13),out,inst_47753);
} else {
if((state_val_47794 === (18))){
var inst_47759 = (state_47793[(7)]);
var inst_47768 = cljs.core.first(inst_47759);
var state_47793__$1 = state_47793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47793__$1,(20),out,inst_47768);
} else {
if((state_val_47794 === (8))){
var inst_47748 = (state_47793[(8)]);
var inst_47747 = (state_47793[(9)]);
var inst_47750 = (inst_47748 < inst_47747);
var inst_47751 = inst_47750;
var state_47793__$1 = state_47793;
if(cljs.core.truth_(inst_47751)){
var statearr_47827_48948 = state_47793__$1;
(statearr_47827_48948[(1)] = (10));

} else {
var statearr_47828_48949 = state_47793__$1;
(statearr_47828_48949[(1)] = (11));

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
});})(c__46524__auto__))
;
return ((function (switch__46423__auto__,c__46524__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__46424__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46424__auto____0 = (function (){
var statearr_47829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47829[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46424__auto__);

(statearr_47829[(1)] = (1));

return statearr_47829;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46424__auto____1 = (function (state_47793){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_47793);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e47830){if((e47830 instanceof Object)){
var ex__46427__auto__ = e47830;
var statearr_47831_48950 = state_47793;
(statearr_47831_48950[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47830;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48951 = state_47793;
state_47793 = G__48951;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46424__auto__ = function(state_47793){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46424__auto____1.call(this,state_47793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46424__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46424__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto__))
})();
var state__46526__auto__ = (function (){var statearr_47832 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_47832[(6)] = c__46524__auto__);

return statearr_47832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto__))
);

return c__46524__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47834 = arguments.length;
switch (G__47834) {
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
var G__47836 = arguments.length;
switch (G__47836) {
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
var G__47838 = arguments.length;
switch (G__47838) {
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
var c__46524__auto___48955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___48955,out){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___48955,out){
return (function (state_47862){
var state_val_47863 = (state_47862[(1)]);
if((state_val_47863 === (7))){
var inst_47857 = (state_47862[(2)]);
var state_47862__$1 = state_47862;
var statearr_47864_48956 = state_47862__$1;
(statearr_47864_48956[(2)] = inst_47857);

(statearr_47864_48956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47863 === (1))){
var inst_47839 = null;
var state_47862__$1 = (function (){var statearr_47865 = state_47862;
(statearr_47865[(7)] = inst_47839);

return statearr_47865;
})();
var statearr_47866_48957 = state_47862__$1;
(statearr_47866_48957[(2)] = null);

(statearr_47866_48957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47863 === (4))){
var inst_47842 = (state_47862[(8)]);
var inst_47842__$1 = (state_47862[(2)]);
var inst_47843 = (inst_47842__$1 == null);
var inst_47844 = cljs.core.not(inst_47843);
var state_47862__$1 = (function (){var statearr_47867 = state_47862;
(statearr_47867[(8)] = inst_47842__$1);

return statearr_47867;
})();
if(inst_47844){
var statearr_47868_48958 = state_47862__$1;
(statearr_47868_48958[(1)] = (5));

} else {
var statearr_47869_48959 = state_47862__$1;
(statearr_47869_48959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47863 === (6))){
var state_47862__$1 = state_47862;
var statearr_47870_48960 = state_47862__$1;
(statearr_47870_48960[(2)] = null);

(statearr_47870_48960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47863 === (3))){
var inst_47859 = (state_47862[(2)]);
var inst_47860 = cljs.core.async.close_BANG_(out);
var state_47862__$1 = (function (){var statearr_47871 = state_47862;
(statearr_47871[(9)] = inst_47859);

return statearr_47871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47862__$1,inst_47860);
} else {
if((state_val_47863 === (2))){
var state_47862__$1 = state_47862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47862__$1,(4),ch);
} else {
if((state_val_47863 === (11))){
var inst_47842 = (state_47862[(8)]);
var inst_47851 = (state_47862[(2)]);
var inst_47839 = inst_47842;
var state_47862__$1 = (function (){var statearr_47872 = state_47862;
(statearr_47872[(7)] = inst_47839);

(statearr_47872[(10)] = inst_47851);

return statearr_47872;
})();
var statearr_47873_48962 = state_47862__$1;
(statearr_47873_48962[(2)] = null);

(statearr_47873_48962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47863 === (9))){
var inst_47842 = (state_47862[(8)]);
var state_47862__$1 = state_47862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47862__$1,(11),out,inst_47842);
} else {
if((state_val_47863 === (5))){
var inst_47839 = (state_47862[(7)]);
var inst_47842 = (state_47862[(8)]);
var inst_47846 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47842,inst_47839);
var state_47862__$1 = state_47862;
if(inst_47846){
var statearr_47875_48964 = state_47862__$1;
(statearr_47875_48964[(1)] = (8));

} else {
var statearr_47876_48965 = state_47862__$1;
(statearr_47876_48965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47863 === (10))){
var inst_47854 = (state_47862[(2)]);
var state_47862__$1 = state_47862;
var statearr_47877_48967 = state_47862__$1;
(statearr_47877_48967[(2)] = inst_47854);

(statearr_47877_48967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47863 === (8))){
var inst_47839 = (state_47862[(7)]);
var tmp47874 = inst_47839;
var inst_47839__$1 = tmp47874;
var state_47862__$1 = (function (){var statearr_47878 = state_47862;
(statearr_47878[(7)] = inst_47839__$1);

return statearr_47878;
})();
var statearr_47879_48969 = state_47862__$1;
(statearr_47879_48969[(2)] = null);

(statearr_47879_48969[(1)] = (2));


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
});})(c__46524__auto___48955,out))
;
return ((function (switch__46423__auto__,c__46524__auto___48955,out){
return (function() {
var cljs$core$async$state_machine__46424__auto__ = null;
var cljs$core$async$state_machine__46424__auto____0 = (function (){
var statearr_47880 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47880[(0)] = cljs$core$async$state_machine__46424__auto__);

(statearr_47880[(1)] = (1));

return statearr_47880;
});
var cljs$core$async$state_machine__46424__auto____1 = (function (state_47862){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_47862);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e47881){if((e47881 instanceof Object)){
var ex__46427__auto__ = e47881;
var statearr_47882_48970 = state_47862;
(statearr_47882_48970[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47881;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48972 = state_47862;
state_47862 = G__48972;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$state_machine__46424__auto__ = function(state_47862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46424__auto____1.call(this,state_47862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46424__auto____0;
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46424__auto____1;
return cljs$core$async$state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___48955,out))
})();
var state__46526__auto__ = (function (){var statearr_47883 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_47883[(6)] = c__46524__auto___48955);

return statearr_47883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___48955,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47885 = arguments.length;
switch (G__47885) {
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
var c__46524__auto___48975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___48975,out){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___48975,out){
return (function (state_47923){
var state_val_47924 = (state_47923[(1)]);
if((state_val_47924 === (7))){
var inst_47919 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
var statearr_47925_48976 = state_47923__$1;
(statearr_47925_48976[(2)] = inst_47919);

(statearr_47925_48976[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (1))){
var inst_47886 = (new Array(n));
var inst_47887 = inst_47886;
var inst_47888 = (0);
var state_47923__$1 = (function (){var statearr_47926 = state_47923;
(statearr_47926[(7)] = inst_47887);

(statearr_47926[(8)] = inst_47888);

return statearr_47926;
})();
var statearr_47927_48977 = state_47923__$1;
(statearr_47927_48977[(2)] = null);

(statearr_47927_48977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (4))){
var inst_47891 = (state_47923[(9)]);
var inst_47891__$1 = (state_47923[(2)]);
var inst_47892 = (inst_47891__$1 == null);
var inst_47893 = cljs.core.not(inst_47892);
var state_47923__$1 = (function (){var statearr_47928 = state_47923;
(statearr_47928[(9)] = inst_47891__$1);

return statearr_47928;
})();
if(inst_47893){
var statearr_47929_48978 = state_47923__$1;
(statearr_47929_48978[(1)] = (5));

} else {
var statearr_47930_48979 = state_47923__$1;
(statearr_47930_48979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (15))){
var inst_47913 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
var statearr_47931_48980 = state_47923__$1;
(statearr_47931_48980[(2)] = inst_47913);

(statearr_47931_48980[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (13))){
var state_47923__$1 = state_47923;
var statearr_47932_48981 = state_47923__$1;
(statearr_47932_48981[(2)] = null);

(statearr_47932_48981[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (6))){
var inst_47888 = (state_47923[(8)]);
var inst_47909 = (inst_47888 > (0));
var state_47923__$1 = state_47923;
if(cljs.core.truth_(inst_47909)){
var statearr_47933_48982 = state_47923__$1;
(statearr_47933_48982[(1)] = (12));

} else {
var statearr_47934_48984 = state_47923__$1;
(statearr_47934_48984[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (3))){
var inst_47921 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47923__$1,inst_47921);
} else {
if((state_val_47924 === (12))){
var inst_47887 = (state_47923[(7)]);
var inst_47911 = cljs.core.vec(inst_47887);
var state_47923__$1 = state_47923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47923__$1,(15),out,inst_47911);
} else {
if((state_val_47924 === (2))){
var state_47923__$1 = state_47923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47923__$1,(4),ch);
} else {
if((state_val_47924 === (11))){
var inst_47903 = (state_47923[(2)]);
var inst_47904 = (new Array(n));
var inst_47887 = inst_47904;
var inst_47888 = (0);
var state_47923__$1 = (function (){var statearr_47935 = state_47923;
(statearr_47935[(7)] = inst_47887);

(statearr_47935[(10)] = inst_47903);

(statearr_47935[(8)] = inst_47888);

return statearr_47935;
})();
var statearr_47936_48997 = state_47923__$1;
(statearr_47936_48997[(2)] = null);

(statearr_47936_48997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (9))){
var inst_47887 = (state_47923[(7)]);
var inst_47901 = cljs.core.vec(inst_47887);
var state_47923__$1 = state_47923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47923__$1,(11),out,inst_47901);
} else {
if((state_val_47924 === (5))){
var inst_47896 = (state_47923[(11)]);
var inst_47887 = (state_47923[(7)]);
var inst_47888 = (state_47923[(8)]);
var inst_47891 = (state_47923[(9)]);
var inst_47895 = (inst_47887[inst_47888] = inst_47891);
var inst_47896__$1 = (inst_47888 + (1));
var inst_47897 = (inst_47896__$1 < n);
var state_47923__$1 = (function (){var statearr_47937 = state_47923;
(statearr_47937[(11)] = inst_47896__$1);

(statearr_47937[(12)] = inst_47895);

return statearr_47937;
})();
if(cljs.core.truth_(inst_47897)){
var statearr_47938_49006 = state_47923__$1;
(statearr_47938_49006[(1)] = (8));

} else {
var statearr_47939_49007 = state_47923__$1;
(statearr_47939_49007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (14))){
var inst_47916 = (state_47923[(2)]);
var inst_47917 = cljs.core.async.close_BANG_(out);
var state_47923__$1 = (function (){var statearr_47941 = state_47923;
(statearr_47941[(13)] = inst_47916);

return statearr_47941;
})();
var statearr_47942_49008 = state_47923__$1;
(statearr_47942_49008[(2)] = inst_47917);

(statearr_47942_49008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (10))){
var inst_47907 = (state_47923[(2)]);
var state_47923__$1 = state_47923;
var statearr_47943_49009 = state_47923__$1;
(statearr_47943_49009[(2)] = inst_47907);

(statearr_47943_49009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47924 === (8))){
var inst_47896 = (state_47923[(11)]);
var inst_47887 = (state_47923[(7)]);
var tmp47940 = inst_47887;
var inst_47887__$1 = tmp47940;
var inst_47888 = inst_47896;
var state_47923__$1 = (function (){var statearr_47944 = state_47923;
(statearr_47944[(7)] = inst_47887__$1);

(statearr_47944[(8)] = inst_47888);

return statearr_47944;
})();
var statearr_47945_49010 = state_47923__$1;
(statearr_47945_49010[(2)] = null);

(statearr_47945_49010[(1)] = (2));


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
});})(c__46524__auto___48975,out))
;
return ((function (switch__46423__auto__,c__46524__auto___48975,out){
return (function() {
var cljs$core$async$state_machine__46424__auto__ = null;
var cljs$core$async$state_machine__46424__auto____0 = (function (){
var statearr_47946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47946[(0)] = cljs$core$async$state_machine__46424__auto__);

(statearr_47946[(1)] = (1));

return statearr_47946;
});
var cljs$core$async$state_machine__46424__auto____1 = (function (state_47923){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_47923);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e47947){if((e47947 instanceof Object)){
var ex__46427__auto__ = e47947;
var statearr_47948_49019 = state_47923;
(statearr_47948_49019[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47947;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49020 = state_47923;
state_47923 = G__49020;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$state_machine__46424__auto__ = function(state_47923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46424__auto____1.call(this,state_47923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46424__auto____0;
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46424__auto____1;
return cljs$core$async$state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___48975,out))
})();
var state__46526__auto__ = (function (){var statearr_47949 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_47949[(6)] = c__46524__auto___48975);

return statearr_47949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___48975,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47951 = arguments.length;
switch (G__47951) {
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
var c__46524__auto___49029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__46524__auto___49029,out){
return (function (){
var f__46525__auto__ = (function (){var switch__46423__auto__ = ((function (c__46524__auto___49029,out){
return (function (state_47993){
var state_val_47994 = (state_47993[(1)]);
if((state_val_47994 === (7))){
var inst_47989 = (state_47993[(2)]);
var state_47993__$1 = state_47993;
var statearr_47995_49040 = state_47993__$1;
(statearr_47995_49040[(2)] = inst_47989);

(statearr_47995_49040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (1))){
var inst_47952 = [];
var inst_47953 = inst_47952;
var inst_47954 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47993__$1 = (function (){var statearr_47996 = state_47993;
(statearr_47996[(7)] = inst_47954);

(statearr_47996[(8)] = inst_47953);

return statearr_47996;
})();
var statearr_47997_49044 = state_47993__$1;
(statearr_47997_49044[(2)] = null);

(statearr_47997_49044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (4))){
var inst_47957 = (state_47993[(9)]);
var inst_47957__$1 = (state_47993[(2)]);
var inst_47958 = (inst_47957__$1 == null);
var inst_47959 = cljs.core.not(inst_47958);
var state_47993__$1 = (function (){var statearr_47998 = state_47993;
(statearr_47998[(9)] = inst_47957__$1);

return statearr_47998;
})();
if(inst_47959){
var statearr_47999_49051 = state_47993__$1;
(statearr_47999_49051[(1)] = (5));

} else {
var statearr_48000_49053 = state_47993__$1;
(statearr_48000_49053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (15))){
var inst_47983 = (state_47993[(2)]);
var state_47993__$1 = state_47993;
var statearr_48001_49054 = state_47993__$1;
(statearr_48001_49054[(2)] = inst_47983);

(statearr_48001_49054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (13))){
var state_47993__$1 = state_47993;
var statearr_48002_49055 = state_47993__$1;
(statearr_48002_49055[(2)] = null);

(statearr_48002_49055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (6))){
var inst_47953 = (state_47993[(8)]);
var inst_47978 = inst_47953.length;
var inst_47979 = (inst_47978 > (0));
var state_47993__$1 = state_47993;
if(cljs.core.truth_(inst_47979)){
var statearr_48003_49056 = state_47993__$1;
(statearr_48003_49056[(1)] = (12));

} else {
var statearr_48004_49057 = state_47993__$1;
(statearr_48004_49057[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (3))){
var inst_47991 = (state_47993[(2)]);
var state_47993__$1 = state_47993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47993__$1,inst_47991);
} else {
if((state_val_47994 === (12))){
var inst_47953 = (state_47993[(8)]);
var inst_47981 = cljs.core.vec(inst_47953);
var state_47993__$1 = state_47993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47993__$1,(15),out,inst_47981);
} else {
if((state_val_47994 === (2))){
var state_47993__$1 = state_47993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47993__$1,(4),ch);
} else {
if((state_val_47994 === (11))){
var inst_47961 = (state_47993[(10)]);
var inst_47957 = (state_47993[(9)]);
var inst_47971 = (state_47993[(2)]);
var inst_47972 = [];
var inst_47973 = inst_47972.push(inst_47957);
var inst_47953 = inst_47972;
var inst_47954 = inst_47961;
var state_47993__$1 = (function (){var statearr_48005 = state_47993;
(statearr_48005[(11)] = inst_47973);

(statearr_48005[(7)] = inst_47954);

(statearr_48005[(12)] = inst_47971);

(statearr_48005[(8)] = inst_47953);

return statearr_48005;
})();
var statearr_48006_49059 = state_47993__$1;
(statearr_48006_49059[(2)] = null);

(statearr_48006_49059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (9))){
var inst_47953 = (state_47993[(8)]);
var inst_47969 = cljs.core.vec(inst_47953);
var state_47993__$1 = state_47993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47993__$1,(11),out,inst_47969);
} else {
if((state_val_47994 === (5))){
var inst_47954 = (state_47993[(7)]);
var inst_47961 = (state_47993[(10)]);
var inst_47957 = (state_47993[(9)]);
var inst_47961__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47957) : f.call(null,inst_47957));
var inst_47962 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47961__$1,inst_47954);
var inst_47963 = cljs.core.keyword_identical_QMARK_(inst_47954,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47964 = ((inst_47962) || (inst_47963));
var state_47993__$1 = (function (){var statearr_48007 = state_47993;
(statearr_48007[(10)] = inst_47961__$1);

return statearr_48007;
})();
if(cljs.core.truth_(inst_47964)){
var statearr_48008_49064 = state_47993__$1;
(statearr_48008_49064[(1)] = (8));

} else {
var statearr_48009_49065 = state_47993__$1;
(statearr_48009_49065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (14))){
var inst_47986 = (state_47993[(2)]);
var inst_47987 = cljs.core.async.close_BANG_(out);
var state_47993__$1 = (function (){var statearr_48011 = state_47993;
(statearr_48011[(13)] = inst_47986);

return statearr_48011;
})();
var statearr_48012_49067 = state_47993__$1;
(statearr_48012_49067[(2)] = inst_47987);

(statearr_48012_49067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (10))){
var inst_47976 = (state_47993[(2)]);
var state_47993__$1 = state_47993;
var statearr_48013_49068 = state_47993__$1;
(statearr_48013_49068[(2)] = inst_47976);

(statearr_48013_49068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47994 === (8))){
var inst_47961 = (state_47993[(10)]);
var inst_47953 = (state_47993[(8)]);
var inst_47957 = (state_47993[(9)]);
var inst_47966 = inst_47953.push(inst_47957);
var tmp48010 = inst_47953;
var inst_47953__$1 = tmp48010;
var inst_47954 = inst_47961;
var state_47993__$1 = (function (){var statearr_48014 = state_47993;
(statearr_48014[(7)] = inst_47954);

(statearr_48014[(8)] = inst_47953__$1);

(statearr_48014[(14)] = inst_47966);

return statearr_48014;
})();
var statearr_48015_49070 = state_47993__$1;
(statearr_48015_49070[(2)] = null);

(statearr_48015_49070[(1)] = (2));


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
});})(c__46524__auto___49029,out))
;
return ((function (switch__46423__auto__,c__46524__auto___49029,out){
return (function() {
var cljs$core$async$state_machine__46424__auto__ = null;
var cljs$core$async$state_machine__46424__auto____0 = (function (){
var statearr_48016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48016[(0)] = cljs$core$async$state_machine__46424__auto__);

(statearr_48016[(1)] = (1));

return statearr_48016;
});
var cljs$core$async$state_machine__46424__auto____1 = (function (state_47993){
while(true){
var ret_value__46425__auto__ = (function (){try{while(true){
var result__46426__auto__ = switch__46423__auto__(state_47993);
if(cljs.core.keyword_identical_QMARK_(result__46426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46426__auto__;
}
break;
}
}catch (e48017){if((e48017 instanceof Object)){
var ex__46427__auto__ = e48017;
var statearr_48018_49072 = state_47993;
(statearr_48018_49072[(5)] = ex__46427__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48017;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46425__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49073 = state_47993;
state_47993 = G__49073;
continue;
} else {
return ret_value__46425__auto__;
}
break;
}
});
cljs$core$async$state_machine__46424__auto__ = function(state_47993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46424__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46424__auto____1.call(this,state_47993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46424__auto____0;
cljs$core$async$state_machine__46424__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46424__auto____1;
return cljs$core$async$state_machine__46424__auto__;
})()
;})(switch__46423__auto__,c__46524__auto___49029,out))
})();
var state__46526__auto__ = (function (){var statearr_48019 = (f__46525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46525__auto__.cljs$core$IFn$_invoke$arity$0() : f__46525__auto__.call(null));
(statearr_48019[(6)] = c__46524__auto___49029);

return statearr_48019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46526__auto__);
});})(c__46524__auto___49029,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
