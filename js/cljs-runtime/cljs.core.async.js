goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29837 = (function (f,blockable,meta29838){
this.f = f;
this.blockable = blockable;
this.meta29838 = meta29838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29839,meta29838__$1){
var self__ = this;
var _29839__$1 = this;
return (new cljs.core.async.t_cljs$core$async29837(self__.f,self__.blockable,meta29838__$1));
}));

(cljs.core.async.t_cljs$core$async29837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29839){
var self__ = this;
var _29839__$1 = this;
return self__.meta29838;
}));

(cljs.core.async.t_cljs$core$async29837.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29837.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29838","meta29838",1811277902,null)], null);
}));

(cljs.core.async.t_cljs$core$async29837.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29837");

(cljs.core.async.t_cljs$core$async29837.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29837");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29837.
 */
cljs.core.async.__GT_t_cljs$core$async29837 = (function cljs$core$async$__GT_t_cljs$core$async29837(f,blockable,meta29838){
return (new cljs.core.async.t_cljs$core$async29837(f,blockable,meta29838));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29836 = arguments.length;
switch (G__29836) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async29837(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
var G__29865 = arguments.length;
switch (G__29865) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29877 = arguments.length;
switch (G__29877) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__29879 = arguments.length;
switch (G__29879) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32841 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32841) : fn1.call(null,val_32841));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32841) : fn1.call(null,val_32841));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
var G__29881 = arguments.length;
switch (G__29881) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___32849 = n;
var x_32850 = (0);
while(true){
if((x_32850 < n__5636__auto___32849)){
(a[x_32850] = x_32850);

var G__32852 = (x_32850 + (1));
x_32850 = G__32852;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29883 = (function (flag,meta29884){
this.flag = flag;
this.meta29884 = meta29884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29885,meta29884__$1){
var self__ = this;
var _29885__$1 = this;
return (new cljs.core.async.t_cljs$core$async29883(self__.flag,meta29884__$1));
}));

(cljs.core.async.t_cljs$core$async29883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29885){
var self__ = this;
var _29885__$1 = this;
return self__.meta29884;
}));

(cljs.core.async.t_cljs$core$async29883.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29883.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29884","meta29884",-1142316730,null)], null);
}));

(cljs.core.async.t_cljs$core$async29883.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29883");

(cljs.core.async.t_cljs$core$async29883.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29883");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29883.
 */
cljs.core.async.__GT_t_cljs$core$async29883 = (function cljs$core$async$__GT_t_cljs$core$async29883(flag,meta29884){
return (new cljs.core.async.t_cljs$core$async29883(flag,meta29884));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async29883(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29886 = (function (flag,cb,meta29887){
this.flag = flag;
this.cb = cb;
this.meta29887 = meta29887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29888,meta29887__$1){
var self__ = this;
var _29888__$1 = this;
return (new cljs.core.async.t_cljs$core$async29886(self__.flag,self__.cb,meta29887__$1));
}));

(cljs.core.async.t_cljs$core$async29886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29888){
var self__ = this;
var _29888__$1 = this;
return self__.meta29887;
}));

(cljs.core.async.t_cljs$core$async29886.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29886.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29887","meta29887",-1630016489,null)], null);
}));

(cljs.core.async.t_cljs$core$async29886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29886");

(cljs.core.async.t_cljs$core$async29886.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29886.
 */
cljs.core.async.__GT_t_cljs$core$async29886 = (function cljs$core$async$__GT_t_cljs$core$async29886(flag,cb,meta29887){
return (new cljs.core.async.t_cljs$core$async29886(flag,cb,meta29887));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async29886(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__29893_SHARP_){
var G__29895 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29893_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29895) : fret.call(null,G__29895));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29894_SHARP_){
var G__29896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29894_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29896) : fret.call(null,G__29896));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32873 = (i + (1));
i = G__32873;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___32876 = arguments.length;
var i__5770__auto___32877 = (0);
while(true){
if((i__5770__auto___32877 < len__5769__auto___32876)){
args__5775__auto__.push((arguments[i__5770__auto___32877]));

var G__32879 = (i__5770__auto___32877 + (1));
i__5770__auto___32877 = G__32879;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29905){
var map__29906 = p__29905;
var map__29906__$1 = cljs.core.__destructure_map(map__29906);
var opts = map__29906__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29903){
var G__29904 = cljs.core.first(seq29903);
var seq29903__$1 = cljs.core.next(seq29903);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29904,seq29903__$1);
}));

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
var G__29912 = arguments.length;
switch (G__29912) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29713__auto___32884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_29944){
var state_val_29945 = (state_29944[(1)]);
if((state_val_29945 === (7))){
var inst_29940 = (state_29944[(2)]);
var state_29944__$1 = state_29944;
var statearr_29948_32886 = state_29944__$1;
(statearr_29948_32886[(2)] = inst_29940);

(statearr_29948_32886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29945 === (1))){
var state_29944__$1 = state_29944;
var statearr_29950_32888 = state_29944__$1;
(statearr_29950_32888[(2)] = null);

(statearr_29950_32888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29945 === (4))){
var inst_29921 = (state_29944[(7)]);
var inst_29921__$1 = (state_29944[(2)]);
var inst_29922 = (inst_29921__$1 == null);
var state_29944__$1 = (function (){var statearr_29951 = state_29944;
(statearr_29951[(7)] = inst_29921__$1);

return statearr_29951;
})();
if(cljs.core.truth_(inst_29922)){
var statearr_29953_32892 = state_29944__$1;
(statearr_29953_32892[(1)] = (5));

} else {
var statearr_29954_32893 = state_29944__$1;
(statearr_29954_32893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29945 === (13))){
var state_29944__$1 = state_29944;
var statearr_29955_32899 = state_29944__$1;
(statearr_29955_32899[(2)] = null);

(statearr_29955_32899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29945 === (6))){
var inst_29921 = (state_29944[(7)]);
var state_29944__$1 = state_29944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29944__$1,(11),to,inst_29921);
} else {
if((state_val_29945 === (3))){
var inst_29942 = (state_29944[(2)]);
var state_29944__$1 = state_29944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29944__$1,inst_29942);
} else {
if((state_val_29945 === (12))){
var state_29944__$1 = state_29944;
var statearr_29962_32900 = state_29944__$1;
(statearr_29962_32900[(2)] = null);

(statearr_29962_32900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29945 === (2))){
var state_29944__$1 = state_29944;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29944__$1,(4),from);
} else {
if((state_val_29945 === (11))){
var inst_29931 = (state_29944[(2)]);
var state_29944__$1 = state_29944;
if(cljs.core.truth_(inst_29931)){
var statearr_29966_32901 = state_29944__$1;
(statearr_29966_32901[(1)] = (12));

} else {
var statearr_29967_32903 = state_29944__$1;
(statearr_29967_32903[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29945 === (9))){
var state_29944__$1 = state_29944;
var statearr_29972_32904 = state_29944__$1;
(statearr_29972_32904[(2)] = null);

(statearr_29972_32904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29945 === (5))){
var state_29944__$1 = state_29944;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29973_32906 = state_29944__$1;
(statearr_29973_32906[(1)] = (8));

} else {
var statearr_29974_32908 = state_29944__$1;
(statearr_29974_32908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29945 === (14))){
var inst_29938 = (state_29944[(2)]);
var state_29944__$1 = state_29944;
var statearr_29977_32911 = state_29944__$1;
(statearr_29977_32911[(2)] = inst_29938);

(statearr_29977_32911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29945 === (10))){
var inst_29928 = (state_29944[(2)]);
var state_29944__$1 = state_29944;
var statearr_29978_32912 = state_29944__$1;
(statearr_29978_32912[(2)] = inst_29928);

(statearr_29978_32912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29945 === (8))){
var inst_29925 = cljs.core.async.close_BANG_(to);
var state_29944__$1 = state_29944;
var statearr_29979_32913 = state_29944__$1;
(statearr_29979_32913[(2)] = inst_29925);

(statearr_29979_32913[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__29505__auto__ = null;
var cljs$core$async$state_machine__29505__auto____0 = (function (){
var statearr_29983 = [null,null,null,null,null,null,null,null];
(statearr_29983[(0)] = cljs$core$async$state_machine__29505__auto__);

(statearr_29983[(1)] = (1));

return statearr_29983;
});
var cljs$core$async$state_machine__29505__auto____1 = (function (state_29944){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_29944);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e29985){var ex__29509__auto__ = e29985;
var statearr_29986_32915 = state_29944;
(statearr_29986_32915[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_29944[(4)]))){
var statearr_29988_32919 = state_29944;
(statearr_29988_32919[(1)] = cljs.core.first((state_29944[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32920 = state_29944;
state_29944 = G__32920;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$state_machine__29505__auto__ = function(state_29944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29505__auto____1.call(this,state_29944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29505__auto____0;
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29505__auto____1;
return cljs$core$async$state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_29992 = f__29714__auto__();
(statearr_29992[(6)] = c__29713__auto___32884);

return statearr_29992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__29999){
var vec__30002 = p__29999;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30002,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30002,(1),null);
var job = vec__30002;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29713__auto___32924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_30010){
var state_val_30011 = (state_30010[(1)]);
if((state_val_30011 === (1))){
var state_30010__$1 = state_30010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30010__$1,(2),res,v);
} else {
if((state_val_30011 === (2))){
var inst_30006 = (state_30010[(2)]);
var inst_30008 = cljs.core.async.close_BANG_(res);
var state_30010__$1 = (function (){var statearr_30024 = state_30010;
(statearr_30024[(7)] = inst_30006);

return statearr_30024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30010__$1,inst_30008);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0 = (function (){
var statearr_30025 = [null,null,null,null,null,null,null,null];
(statearr_30025[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__);

(statearr_30025[(1)] = (1));

return statearr_30025;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1 = (function (state_30010){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_30010);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e30028){var ex__29509__auto__ = e30028;
var statearr_30037_32925 = state_30010;
(statearr_30037_32925[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_30010[(4)]))){
var statearr_30041_32926 = state_30010;
(statearr_30041_32926[(1)] = cljs.core.first((state_30010[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32927 = state_30010;
state_30010 = G__32927;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__ = function(state_30010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1.call(this,state_30010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_30045 = f__29714__auto__();
(statearr_30045[(6)] = c__29713__auto___32924);

return statearr_30045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30048){
var vec__30049 = p__30048;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30049,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30049,(1),null);
var job = vec__30049;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___32928 = n;
var __32929 = (0);
while(true){
if((__32929 < n__5636__auto___32928)){
var G__30054_32930 = type;
var G__30054_32931__$1 = (((G__30054_32930 instanceof cljs.core.Keyword))?G__30054_32930.fqn:null);
switch (G__30054_32931__$1) {
case "compute":
var c__29713__auto___32933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32929,c__29713__auto___32933,G__30054_32930,G__30054_32931__$1,n__5636__auto___32928,jobs,results,process__$1,async){
return (function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = ((function (__32929,c__29713__auto___32933,G__30054_32930,G__30054_32931__$1,n__5636__auto___32928,jobs,results,process__$1,async){
return (function (state_30075){
var state_val_30076 = (state_30075[(1)]);
if((state_val_30076 === (1))){
var state_30075__$1 = state_30075;
var statearr_30077_32934 = state_30075__$1;
(statearr_30077_32934[(2)] = null);

(statearr_30077_32934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (2))){
var state_30075__$1 = state_30075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30075__$1,(4),jobs);
} else {
if((state_val_30076 === (3))){
var inst_30073 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30075__$1,inst_30073);
} else {
if((state_val_30076 === (4))){
var inst_30064 = (state_30075[(2)]);
var inst_30066 = process__$1(inst_30064);
var state_30075__$1 = state_30075;
if(cljs.core.truth_(inst_30066)){
var statearr_30083_32966 = state_30075__$1;
(statearr_30083_32966[(1)] = (5));

} else {
var statearr_30084_32967 = state_30075__$1;
(statearr_30084_32967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (5))){
var state_30075__$1 = state_30075;
var statearr_30088_32968 = state_30075__$1;
(statearr_30088_32968[(2)] = null);

(statearr_30088_32968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (6))){
var state_30075__$1 = state_30075;
var statearr_30091_32969 = state_30075__$1;
(statearr_30091_32969[(2)] = null);

(statearr_30091_32969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30076 === (7))){
var inst_30071 = (state_30075[(2)]);
var state_30075__$1 = state_30075;
var statearr_30093_32970 = state_30075__$1;
(statearr_30093_32970[(2)] = inst_30071);

(statearr_30093_32970[(1)] = (3));


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
});})(__32929,c__29713__auto___32933,G__30054_32930,G__30054_32931__$1,n__5636__auto___32928,jobs,results,process__$1,async))
;
return ((function (__32929,switch__29503__auto__,c__29713__auto___32933,G__30054_32930,G__30054_32931__$1,n__5636__auto___32928,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0 = (function (){
var statearr_30100 = [null,null,null,null,null,null,null];
(statearr_30100[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__);

(statearr_30100[(1)] = (1));

return statearr_30100;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1 = (function (state_30075){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_30075);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e30102){var ex__29509__auto__ = e30102;
var statearr_30103_32971 = state_30075;
(statearr_30103_32971[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_30075[(4)]))){
var statearr_30106_32972 = state_30075;
(statearr_30106_32972[(1)] = cljs.core.first((state_30075[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32974 = state_30075;
state_30075 = G__32974;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__ = function(state_30075){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1.call(this,state_30075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__;
})()
;})(__32929,switch__29503__auto__,c__29713__auto___32933,G__30054_32930,G__30054_32931__$1,n__5636__auto___32928,jobs,results,process__$1,async))
})();
var state__29715__auto__ = (function (){var statearr_30110 = f__29714__auto__();
(statearr_30110[(6)] = c__29713__auto___32933);

return statearr_30110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
});})(__32929,c__29713__auto___32933,G__30054_32930,G__30054_32931__$1,n__5636__auto___32928,jobs,results,process__$1,async))
);


break;
case "async":
var c__29713__auto___32975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32929,c__29713__auto___32975,G__30054_32930,G__30054_32931__$1,n__5636__auto___32928,jobs,results,process__$1,async){
return (function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = ((function (__32929,c__29713__auto___32975,G__30054_32930,G__30054_32931__$1,n__5636__auto___32928,jobs,results,process__$1,async){
return (function (state_30127){
var state_val_30128 = (state_30127[(1)]);
if((state_val_30128 === (1))){
var state_30127__$1 = state_30127;
var statearr_30136_32976 = state_30127__$1;
(statearr_30136_32976[(2)] = null);

(statearr_30136_32976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (2))){
var state_30127__$1 = state_30127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30127__$1,(4),jobs);
} else {
if((state_val_30128 === (3))){
var inst_30125 = (state_30127[(2)]);
var state_30127__$1 = state_30127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30127__$1,inst_30125);
} else {
if((state_val_30128 === (4))){
var inst_30116 = (state_30127[(2)]);
var inst_30117 = async(inst_30116);
var state_30127__$1 = state_30127;
if(cljs.core.truth_(inst_30117)){
var statearr_30139_32978 = state_30127__$1;
(statearr_30139_32978[(1)] = (5));

} else {
var statearr_30141_32979 = state_30127__$1;
(statearr_30141_32979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (5))){
var state_30127__$1 = state_30127;
var statearr_30144_32980 = state_30127__$1;
(statearr_30144_32980[(2)] = null);

(statearr_30144_32980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (6))){
var state_30127__$1 = state_30127;
var statearr_30152_32981 = state_30127__$1;
(statearr_30152_32981[(2)] = null);

(statearr_30152_32981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30128 === (7))){
var inst_30122 = (state_30127[(2)]);
var state_30127__$1 = state_30127;
var statearr_30154_32985 = state_30127__$1;
(statearr_30154_32985[(2)] = inst_30122);

(statearr_30154_32985[(1)] = (3));


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
});})(__32929,c__29713__auto___32975,G__30054_32930,G__30054_32931__$1,n__5636__auto___32928,jobs,results,process__$1,async))
;
return ((function (__32929,switch__29503__auto__,c__29713__auto___32975,G__30054_32930,G__30054_32931__$1,n__5636__auto___32928,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0 = (function (){
var statearr_30158 = [null,null,null,null,null,null,null];
(statearr_30158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__);

(statearr_30158[(1)] = (1));

return statearr_30158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1 = (function (state_30127){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_30127);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e30160){var ex__29509__auto__ = e30160;
var statearr_30165_32986 = state_30127;
(statearr_30165_32986[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_30127[(4)]))){
var statearr_30167_32987 = state_30127;
(statearr_30167_32987[(1)] = cljs.core.first((state_30127[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32988 = state_30127;
state_30127 = G__32988;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__ = function(state_30127){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1.call(this,state_30127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__;
})()
;})(__32929,switch__29503__auto__,c__29713__auto___32975,G__30054_32930,G__30054_32931__$1,n__5636__auto___32928,jobs,results,process__$1,async))
})();
var state__29715__auto__ = (function (){var statearr_30174 = f__29714__auto__();
(statearr_30174[(6)] = c__29713__auto___32975);

return statearr_30174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
});})(__32929,c__29713__auto___32975,G__30054_32930,G__30054_32931__$1,n__5636__auto___32928,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30054_32931__$1)].join('')));

}

var G__32989 = (__32929 + (1));
__32929 = G__32989;
continue;
} else {
}
break;
}

var c__29713__auto___32990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_30204){
var state_val_30206 = (state_30204[(1)]);
if((state_val_30206 === (7))){
var inst_30200 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
var statearr_30223_32991 = state_30204__$1;
(statearr_30223_32991[(2)] = inst_30200);

(statearr_30223_32991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (1))){
var state_30204__$1 = state_30204;
var statearr_30226_32992 = state_30204__$1;
(statearr_30226_32992[(2)] = null);

(statearr_30226_32992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (4))){
var inst_30180 = (state_30204[(7)]);
var inst_30180__$1 = (state_30204[(2)]);
var inst_30182 = (inst_30180__$1 == null);
var state_30204__$1 = (function (){var statearr_30230 = state_30204;
(statearr_30230[(7)] = inst_30180__$1);

return statearr_30230;
})();
if(cljs.core.truth_(inst_30182)){
var statearr_30232_32993 = state_30204__$1;
(statearr_30232_32993[(1)] = (5));

} else {
var statearr_30234_32995 = state_30204__$1;
(statearr_30234_32995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (6))){
var inst_30180 = (state_30204[(7)]);
var inst_30188 = (state_30204[(8)]);
var inst_30188__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30190 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30191 = [inst_30180,inst_30188__$1];
var inst_30192 = (new cljs.core.PersistentVector(null,2,(5),inst_30190,inst_30191,null));
var state_30204__$1 = (function (){var statearr_30243 = state_30204;
(statearr_30243[(8)] = inst_30188__$1);

return statearr_30243;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30204__$1,(8),jobs,inst_30192);
} else {
if((state_val_30206 === (3))){
var inst_30202 = (state_30204[(2)]);
var state_30204__$1 = state_30204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30204__$1,inst_30202);
} else {
if((state_val_30206 === (2))){
var state_30204__$1 = state_30204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30204__$1,(4),from);
} else {
if((state_val_30206 === (9))){
var inst_30196 = (state_30204[(2)]);
var state_30204__$1 = (function (){var statearr_30249 = state_30204;
(statearr_30249[(9)] = inst_30196);

return statearr_30249;
})();
var statearr_30250_33040 = state_30204__$1;
(statearr_30250_33040[(2)] = null);

(statearr_30250_33040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (5))){
var inst_30184 = cljs.core.async.close_BANG_(jobs);
var state_30204__$1 = state_30204;
var statearr_30254_33042 = state_30204__$1;
(statearr_30254_33042[(2)] = inst_30184);

(statearr_30254_33042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30206 === (8))){
var inst_30188 = (state_30204[(8)]);
var inst_30194 = (state_30204[(2)]);
var state_30204__$1 = (function (){var statearr_30256 = state_30204;
(statearr_30256[(10)] = inst_30194);

return statearr_30256;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30204__$1,(9),results,inst_30188);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0 = (function (){
var statearr_30264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30264[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__);

(statearr_30264[(1)] = (1));

return statearr_30264;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1 = (function (state_30204){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_30204);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e30265){var ex__29509__auto__ = e30265;
var statearr_30266_33048 = state_30204;
(statearr_30266_33048[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_30204[(4)]))){
var statearr_30267_33049 = state_30204;
(statearr_30267_33049[(1)] = cljs.core.first((state_30204[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33050 = state_30204;
state_30204 = G__33050;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__ = function(state_30204){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1.call(this,state_30204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_30277 = f__29714__auto__();
(statearr_30277[(6)] = c__29713__auto___32990);

return statearr_30277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));


var c__29713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_30324){
var state_val_30325 = (state_30324[(1)]);
if((state_val_30325 === (7))){
var inst_30318 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30327_33053 = state_30324__$1;
(statearr_30327_33053[(2)] = inst_30318);

(statearr_30327_33053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (20))){
var state_30324__$1 = state_30324;
var statearr_30328_33055 = state_30324__$1;
(statearr_30328_33055[(2)] = null);

(statearr_30328_33055[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (1))){
var state_30324__$1 = state_30324;
var statearr_30331_33058 = state_30324__$1;
(statearr_30331_33058[(2)] = null);

(statearr_30331_33058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (4))){
var inst_30285 = (state_30324[(7)]);
var inst_30285__$1 = (state_30324[(2)]);
var inst_30286 = (inst_30285__$1 == null);
var state_30324__$1 = (function (){var statearr_30333 = state_30324;
(statearr_30333[(7)] = inst_30285__$1);

return statearr_30333;
})();
if(cljs.core.truth_(inst_30286)){
var statearr_30334_33059 = state_30324__$1;
(statearr_30334_33059[(1)] = (5));

} else {
var statearr_30335_33060 = state_30324__$1;
(statearr_30335_33060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (15))){
var inst_30298 = (state_30324[(8)]);
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30324__$1,(18),to,inst_30298);
} else {
if((state_val_30325 === (21))){
var inst_30312 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30341_33061 = state_30324__$1;
(statearr_30341_33061[(2)] = inst_30312);

(statearr_30341_33061[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (13))){
var inst_30314 = (state_30324[(2)]);
var state_30324__$1 = (function (){var statearr_30342 = state_30324;
(statearr_30342[(9)] = inst_30314);

return statearr_30342;
})();
var statearr_30346_33062 = state_30324__$1;
(statearr_30346_33062[(2)] = null);

(statearr_30346_33062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (6))){
var inst_30285 = (state_30324[(7)]);
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30324__$1,(11),inst_30285);
} else {
if((state_val_30325 === (17))){
var inst_30307 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
if(cljs.core.truth_(inst_30307)){
var statearr_30350_33066 = state_30324__$1;
(statearr_30350_33066[(1)] = (19));

} else {
var statearr_30351_33067 = state_30324__$1;
(statearr_30351_33067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (3))){
var inst_30320 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30324__$1,inst_30320);
} else {
if((state_val_30325 === (12))){
var inst_30295 = (state_30324[(10)]);
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30324__$1,(14),inst_30295);
} else {
if((state_val_30325 === (2))){
var state_30324__$1 = state_30324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30324__$1,(4),results);
} else {
if((state_val_30325 === (19))){
var state_30324__$1 = state_30324;
var statearr_30356_33076 = state_30324__$1;
(statearr_30356_33076[(2)] = null);

(statearr_30356_33076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (11))){
var inst_30295 = (state_30324[(2)]);
var state_30324__$1 = (function (){var statearr_30357 = state_30324;
(statearr_30357[(10)] = inst_30295);

return statearr_30357;
})();
var statearr_30358_33077 = state_30324__$1;
(statearr_30358_33077[(2)] = null);

(statearr_30358_33077[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (9))){
var state_30324__$1 = state_30324;
var statearr_30371_33079 = state_30324__$1;
(statearr_30371_33079[(2)] = null);

(statearr_30371_33079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (5))){
var state_30324__$1 = state_30324;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30380_33080 = state_30324__$1;
(statearr_30380_33080[(1)] = (8));

} else {
var statearr_30381_33081 = state_30324__$1;
(statearr_30381_33081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (14))){
var inst_30300 = (state_30324[(11)]);
var inst_30298 = (state_30324[(8)]);
var inst_30298__$1 = (state_30324[(2)]);
var inst_30299 = (inst_30298__$1 == null);
var inst_30300__$1 = cljs.core.not(inst_30299);
var state_30324__$1 = (function (){var statearr_30382 = state_30324;
(statearr_30382[(11)] = inst_30300__$1);

(statearr_30382[(8)] = inst_30298__$1);

return statearr_30382;
})();
if(inst_30300__$1){
var statearr_30383_33082 = state_30324__$1;
(statearr_30383_33082[(1)] = (15));

} else {
var statearr_30384_33083 = state_30324__$1;
(statearr_30384_33083[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (16))){
var inst_30300 = (state_30324[(11)]);
var state_30324__$1 = state_30324;
var statearr_30385_33086 = state_30324__$1;
(statearr_30385_33086[(2)] = inst_30300);

(statearr_30385_33086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (10))){
var inst_30292 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30387_33090 = state_30324__$1;
(statearr_30387_33090[(2)] = inst_30292);

(statearr_30387_33090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (18))){
var inst_30304 = (state_30324[(2)]);
var state_30324__$1 = state_30324;
var statearr_30388_33094 = state_30324__$1;
(statearr_30388_33094[(2)] = inst_30304);

(statearr_30388_33094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30325 === (8))){
var inst_30289 = cljs.core.async.close_BANG_(to);
var state_30324__$1 = state_30324;
var statearr_30390_33095 = state_30324__$1;
(statearr_30390_33095[(2)] = inst_30289);

(statearr_30390_33095[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0 = (function (){
var statearr_30393 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__);

(statearr_30393[(1)] = (1));

return statearr_30393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1 = (function (state_30324){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_30324);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e30396){var ex__29509__auto__ = e30396;
var statearr_30397_33096 = state_30324;
(statearr_30397_33096[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_30324[(4)]))){
var statearr_30398_33097 = state_30324;
(statearr_30398_33097[(1)] = cljs.core.first((state_30324[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33098 = state_30324;
state_30324 = G__33098;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__ = function(state_30324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1.call(this,state_30324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29505__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_30400 = f__29714__auto__();
(statearr_30400[(6)] = c__29713__auto__);

return statearr_30400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));

return c__29713__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30405 = arguments.length;
switch (G__30405) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__30430 = arguments.length;
switch (G__30430) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__30440 = arguments.length;
switch (G__30440) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29713__auto___33103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_30476){
var state_val_30477 = (state_30476[(1)]);
if((state_val_30477 === (7))){
var inst_30470 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
var statearr_30481_33105 = state_30476__$1;
(statearr_30481_33105[(2)] = inst_30470);

(statearr_30481_33105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (1))){
var state_30476__$1 = state_30476;
var statearr_30483_33106 = state_30476__$1;
(statearr_30483_33106[(2)] = null);

(statearr_30483_33106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (4))){
var inst_30449 = (state_30476[(7)]);
var inst_30449__$1 = (state_30476[(2)]);
var inst_30450 = (inst_30449__$1 == null);
var state_30476__$1 = (function (){var statearr_30484 = state_30476;
(statearr_30484[(7)] = inst_30449__$1);

return statearr_30484;
})();
if(cljs.core.truth_(inst_30450)){
var statearr_30485_33107 = state_30476__$1;
(statearr_30485_33107[(1)] = (5));

} else {
var statearr_30487_33108 = state_30476__$1;
(statearr_30487_33108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (13))){
var state_30476__$1 = state_30476;
var statearr_30491_33109 = state_30476__$1;
(statearr_30491_33109[(2)] = null);

(statearr_30491_33109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (6))){
var inst_30449 = (state_30476[(7)]);
var inst_30457 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30449) : p.call(null,inst_30449));
var state_30476__$1 = state_30476;
if(cljs.core.truth_(inst_30457)){
var statearr_30494_33110 = state_30476__$1;
(statearr_30494_33110[(1)] = (9));

} else {
var statearr_30495_33111 = state_30476__$1;
(statearr_30495_33111[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (3))){
var inst_30474 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30476__$1,inst_30474);
} else {
if((state_val_30477 === (12))){
var state_30476__$1 = state_30476;
var statearr_30496_33112 = state_30476__$1;
(statearr_30496_33112[(2)] = null);

(statearr_30496_33112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (2))){
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30476__$1,(4),ch);
} else {
if((state_val_30477 === (11))){
var inst_30449 = (state_30476[(7)]);
var inst_30461 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30476__$1,(8),inst_30461,inst_30449);
} else {
if((state_val_30477 === (9))){
var state_30476__$1 = state_30476;
var statearr_30503_33113 = state_30476__$1;
(statearr_30503_33113[(2)] = tc);

(statearr_30503_33113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (5))){
var inst_30452 = cljs.core.async.close_BANG_(tc);
var inst_30454 = cljs.core.async.close_BANG_(fc);
var state_30476__$1 = (function (){var statearr_30523 = state_30476;
(statearr_30523[(8)] = inst_30452);

return statearr_30523;
})();
var statearr_30528_33114 = state_30476__$1;
(statearr_30528_33114[(2)] = inst_30454);

(statearr_30528_33114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (14))){
var inst_30468 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
var statearr_30529_33115 = state_30476__$1;
(statearr_30529_33115[(2)] = inst_30468);

(statearr_30529_33115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (10))){
var state_30476__$1 = state_30476;
var statearr_30538_33116 = state_30476__$1;
(statearr_30538_33116[(2)] = fc);

(statearr_30538_33116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30477 === (8))){
var inst_30463 = (state_30476[(2)]);
var state_30476__$1 = state_30476;
if(cljs.core.truth_(inst_30463)){
var statearr_30539_33117 = state_30476__$1;
(statearr_30539_33117[(1)] = (12));

} else {
var statearr_30540_33118 = state_30476__$1;
(statearr_30540_33118[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__29505__auto__ = null;
var cljs$core$async$state_machine__29505__auto____0 = (function (){
var statearr_30546 = [null,null,null,null,null,null,null,null,null];
(statearr_30546[(0)] = cljs$core$async$state_machine__29505__auto__);

(statearr_30546[(1)] = (1));

return statearr_30546;
});
var cljs$core$async$state_machine__29505__auto____1 = (function (state_30476){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_30476);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e30547){var ex__29509__auto__ = e30547;
var statearr_30548_33119 = state_30476;
(statearr_30548_33119[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_30476[(4)]))){
var statearr_30550_33120 = state_30476;
(statearr_30550_33120[(1)] = cljs.core.first((state_30476[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33121 = state_30476;
state_30476 = G__33121;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$state_machine__29505__auto__ = function(state_30476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29505__auto____1.call(this,state_30476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29505__auto____0;
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29505__auto____1;
return cljs$core$async$state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_30555 = f__29714__auto__();
(statearr_30555[(6)] = c__29713__auto___33103);

return statearr_30555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_30606){
var state_val_30607 = (state_30606[(1)]);
if((state_val_30607 === (7))){
var inst_30602 = (state_30606[(2)]);
var state_30606__$1 = state_30606;
var statearr_30629_33122 = state_30606__$1;
(statearr_30629_33122[(2)] = inst_30602);

(statearr_30629_33122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (1))){
var inst_30584 = init;
var inst_30585 = inst_30584;
var state_30606__$1 = (function (){var statearr_30630 = state_30606;
(statearr_30630[(7)] = inst_30585);

return statearr_30630;
})();
var statearr_30636_33123 = state_30606__$1;
(statearr_30636_33123[(2)] = null);

(statearr_30636_33123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (4))){
var inst_30589 = (state_30606[(8)]);
var inst_30589__$1 = (state_30606[(2)]);
var inst_30590 = (inst_30589__$1 == null);
var state_30606__$1 = (function (){var statearr_30643 = state_30606;
(statearr_30643[(8)] = inst_30589__$1);

return statearr_30643;
})();
if(cljs.core.truth_(inst_30590)){
var statearr_30644_33132 = state_30606__$1;
(statearr_30644_33132[(1)] = (5));

} else {
var statearr_30647_33139 = state_30606__$1;
(statearr_30647_33139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (6))){
var inst_30593 = (state_30606[(9)]);
var inst_30585 = (state_30606[(7)]);
var inst_30589 = (state_30606[(8)]);
var inst_30593__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30585,inst_30589) : f.call(null,inst_30585,inst_30589));
var inst_30594 = cljs.core.reduced_QMARK_(inst_30593__$1);
var state_30606__$1 = (function (){var statearr_30653 = state_30606;
(statearr_30653[(9)] = inst_30593__$1);

return statearr_30653;
})();
if(inst_30594){
var statearr_30656_33140 = state_30606__$1;
(statearr_30656_33140[(1)] = (8));

} else {
var statearr_30661_33147 = state_30606__$1;
(statearr_30661_33147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (3))){
var inst_30604 = (state_30606[(2)]);
var state_30606__$1 = state_30606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30606__$1,inst_30604);
} else {
if((state_val_30607 === (2))){
var state_30606__$1 = state_30606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30606__$1,(4),ch);
} else {
if((state_val_30607 === (9))){
var inst_30593 = (state_30606[(9)]);
var inst_30585 = inst_30593;
var state_30606__$1 = (function (){var statearr_30663 = state_30606;
(statearr_30663[(7)] = inst_30585);

return statearr_30663;
})();
var statearr_30666_33149 = state_30606__$1;
(statearr_30666_33149[(2)] = null);

(statearr_30666_33149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (5))){
var inst_30585 = (state_30606[(7)]);
var state_30606__$1 = state_30606;
var statearr_30668_33150 = state_30606__$1;
(statearr_30668_33150[(2)] = inst_30585);

(statearr_30668_33150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (10))){
var inst_30600 = (state_30606[(2)]);
var state_30606__$1 = state_30606;
var statearr_30669_33151 = state_30606__$1;
(statearr_30669_33151[(2)] = inst_30600);

(statearr_30669_33151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30607 === (8))){
var inst_30593 = (state_30606[(9)]);
var inst_30596 = cljs.core.deref(inst_30593);
var state_30606__$1 = state_30606;
var statearr_30673_33152 = state_30606__$1;
(statearr_30673_33152[(2)] = inst_30596);

(statearr_30673_33152[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29505__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29505__auto____0 = (function (){
var statearr_30674 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30674[(0)] = cljs$core$async$reduce_$_state_machine__29505__auto__);

(statearr_30674[(1)] = (1));

return statearr_30674;
});
var cljs$core$async$reduce_$_state_machine__29505__auto____1 = (function (state_30606){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_30606);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e30676){var ex__29509__auto__ = e30676;
var statearr_30677_33157 = state_30606;
(statearr_30677_33157[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_30606[(4)]))){
var statearr_30681_33158 = state_30606;
(statearr_30681_33158[(1)] = cljs.core.first((state_30606[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33159 = state_30606;
state_30606 = G__33159;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29505__auto__ = function(state_30606){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29505__auto____1.call(this,state_30606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29505__auto____0;
cljs$core$async$reduce_$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29505__auto____1;
return cljs$core$async$reduce_$_state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_30684 = f__29714__auto__();
(statearr_30684[(6)] = c__29713__auto__);

return statearr_30684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));

return c__29713__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_30706){
var state_val_30707 = (state_30706[(1)]);
if((state_val_30707 === (1))){
var inst_30701 = cljs.core.async.reduce(f__$1,init,ch);
var state_30706__$1 = state_30706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30706__$1,(2),inst_30701);
} else {
if((state_val_30707 === (2))){
var inst_30703 = (state_30706[(2)]);
var inst_30704 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30703) : f__$1.call(null,inst_30703));
var state_30706__$1 = state_30706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30706__$1,inst_30704);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29505__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29505__auto____0 = (function (){
var statearr_30708 = [null,null,null,null,null,null,null];
(statearr_30708[(0)] = cljs$core$async$transduce_$_state_machine__29505__auto__);

(statearr_30708[(1)] = (1));

return statearr_30708;
});
var cljs$core$async$transduce_$_state_machine__29505__auto____1 = (function (state_30706){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_30706);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e30711){var ex__29509__auto__ = e30711;
var statearr_30712_33168 = state_30706;
(statearr_30712_33168[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_30706[(4)]))){
var statearr_30714_33169 = state_30706;
(statearr_30714_33169[(1)] = cljs.core.first((state_30706[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33170 = state_30706;
state_30706 = G__33170;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29505__auto__ = function(state_30706){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29505__auto____1.call(this,state_30706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29505__auto____0;
cljs$core$async$transduce_$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29505__auto____1;
return cljs$core$async$transduce_$_state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_30715 = f__29714__auto__();
(statearr_30715[(6)] = c__29713__auto__);

return statearr_30715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));

return c__29713__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30718 = arguments.length;
switch (G__30718) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_30748){
var state_val_30749 = (state_30748[(1)]);
if((state_val_30749 === (7))){
var inst_30730 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30751_33199 = state_30748__$1;
(statearr_30751_33199[(2)] = inst_30730);

(statearr_30751_33199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (1))){
var inst_30724 = cljs.core.seq(coll);
var inst_30725 = inst_30724;
var state_30748__$1 = (function (){var statearr_30753 = state_30748;
(statearr_30753[(7)] = inst_30725);

return statearr_30753;
})();
var statearr_30754_33200 = state_30748__$1;
(statearr_30754_33200[(2)] = null);

(statearr_30754_33200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (4))){
var inst_30725 = (state_30748[(7)]);
var inst_30728 = cljs.core.first(inst_30725);
var state_30748__$1 = state_30748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30748__$1,(7),ch,inst_30728);
} else {
if((state_val_30749 === (13))){
var inst_30742 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30755_33201 = state_30748__$1;
(statearr_30755_33201[(2)] = inst_30742);

(statearr_30755_33201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (6))){
var inst_30733 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30733)){
var statearr_30756_33202 = state_30748__$1;
(statearr_30756_33202[(1)] = (8));

} else {
var statearr_30759_33203 = state_30748__$1;
(statearr_30759_33203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (3))){
var inst_30746 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30748__$1,inst_30746);
} else {
if((state_val_30749 === (12))){
var state_30748__$1 = state_30748;
var statearr_30762_33204 = state_30748__$1;
(statearr_30762_33204[(2)] = null);

(statearr_30762_33204[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (2))){
var inst_30725 = (state_30748[(7)]);
var state_30748__$1 = state_30748;
if(cljs.core.truth_(inst_30725)){
var statearr_30763_33205 = state_30748__$1;
(statearr_30763_33205[(1)] = (4));

} else {
var statearr_30764_33207 = state_30748__$1;
(statearr_30764_33207[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (11))){
var inst_30739 = cljs.core.async.close_BANG_(ch);
var state_30748__$1 = state_30748;
var statearr_30766_33208 = state_30748__$1;
(statearr_30766_33208[(2)] = inst_30739);

(statearr_30766_33208[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (9))){
var state_30748__$1 = state_30748;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30770_33210 = state_30748__$1;
(statearr_30770_33210[(1)] = (11));

} else {
var statearr_30771_33211 = state_30748__$1;
(statearr_30771_33211[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (5))){
var inst_30725 = (state_30748[(7)]);
var state_30748__$1 = state_30748;
var statearr_30772_33212 = state_30748__$1;
(statearr_30772_33212[(2)] = inst_30725);

(statearr_30772_33212[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (10))){
var inst_30744 = (state_30748[(2)]);
var state_30748__$1 = state_30748;
var statearr_30773_33213 = state_30748__$1;
(statearr_30773_33213[(2)] = inst_30744);

(statearr_30773_33213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30749 === (8))){
var inst_30725 = (state_30748[(7)]);
var inst_30735 = cljs.core.next(inst_30725);
var inst_30725__$1 = inst_30735;
var state_30748__$1 = (function (){var statearr_30775 = state_30748;
(statearr_30775[(7)] = inst_30725__$1);

return statearr_30775;
})();
var statearr_30776_33214 = state_30748__$1;
(statearr_30776_33214[(2)] = null);

(statearr_30776_33214[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29505__auto__ = null;
var cljs$core$async$state_machine__29505__auto____0 = (function (){
var statearr_30778 = [null,null,null,null,null,null,null,null];
(statearr_30778[(0)] = cljs$core$async$state_machine__29505__auto__);

(statearr_30778[(1)] = (1));

return statearr_30778;
});
var cljs$core$async$state_machine__29505__auto____1 = (function (state_30748){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_30748);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e30783){var ex__29509__auto__ = e30783;
var statearr_30785_33215 = state_30748;
(statearr_30785_33215[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_30748[(4)]))){
var statearr_30786_33216 = state_30748;
(statearr_30786_33216[(1)] = cljs.core.first((state_30748[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33217 = state_30748;
state_30748 = G__33217;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$state_machine__29505__auto__ = function(state_30748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29505__auto____1.call(this,state_30748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29505__auto____0;
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29505__auto____1;
return cljs$core$async$state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_30788 = f__29714__auto__();
(statearr_30788[(6)] = c__29713__auto__);

return statearr_30788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));

return c__29713__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30794 = arguments.length;
switch (G__30794) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33222 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33222(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33225 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33225(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33226 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33226(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33228 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33228(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30816 = (function (ch,cs,meta30817){
this.ch = ch;
this.cs = cs;
this.meta30817 = meta30817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30818,meta30817__$1){
var self__ = this;
var _30818__$1 = this;
return (new cljs.core.async.t_cljs$core$async30816(self__.ch,self__.cs,meta30817__$1));
}));

(cljs.core.async.t_cljs$core$async30816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30818){
var self__ = this;
var _30818__$1 = this;
return self__.meta30817;
}));

(cljs.core.async.t_cljs$core$async30816.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30816.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30816.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30816.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30816.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30816.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30817","meta30817",510109742,null)], null);
}));

(cljs.core.async.t_cljs$core$async30816.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30816");

(cljs.core.async.t_cljs$core$async30816.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30816");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30816.
 */
cljs.core.async.__GT_t_cljs$core$async30816 = (function cljs$core$async$__GT_t_cljs$core$async30816(ch,cs,meta30817){
return (new cljs.core.async.t_cljs$core$async30816(ch,cs,meta30817));
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
var m = (new cljs.core.async.t_cljs$core$async30816(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29713__auto___33243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_30957){
var state_val_30958 = (state_30957[(1)]);
if((state_val_30958 === (7))){
var inst_30953 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_30960_33245 = state_30957__$1;
(statearr_30960_33245[(2)] = inst_30953);

(statearr_30960_33245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (20))){
var inst_30852 = (state_30957[(7)]);
var inst_30866 = cljs.core.first(inst_30852);
var inst_30867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30866,(0),null);
var inst_30868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30866,(1),null);
var state_30957__$1 = (function (){var statearr_30961 = state_30957;
(statearr_30961[(8)] = inst_30867);

return statearr_30961;
})();
if(cljs.core.truth_(inst_30868)){
var statearr_30962_33246 = state_30957__$1;
(statearr_30962_33246[(1)] = (22));

} else {
var statearr_30966_33247 = state_30957__$1;
(statearr_30966_33247[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (27))){
var inst_30898 = (state_30957[(9)]);
var inst_30905 = (state_30957[(10)]);
var inst_30821 = (state_30957[(11)]);
var inst_30896 = (state_30957[(12)]);
var inst_30905__$1 = cljs.core._nth(inst_30896,inst_30898);
var inst_30908 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30905__$1,inst_30821,done);
var state_30957__$1 = (function (){var statearr_30967 = state_30957;
(statearr_30967[(10)] = inst_30905__$1);

return statearr_30967;
})();
if(cljs.core.truth_(inst_30908)){
var statearr_30968_33248 = state_30957__$1;
(statearr_30968_33248[(1)] = (30));

} else {
var statearr_30969_33250 = state_30957__$1;
(statearr_30969_33250[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (1))){
var state_30957__$1 = state_30957;
var statearr_30970_33251 = state_30957__$1;
(statearr_30970_33251[(2)] = null);

(statearr_30970_33251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (24))){
var inst_30852 = (state_30957[(7)]);
var inst_30873 = (state_30957[(2)]);
var inst_30874 = cljs.core.next(inst_30852);
var inst_30830 = inst_30874;
var inst_30831 = null;
var inst_30832 = (0);
var inst_30833 = (0);
var state_30957__$1 = (function (){var statearr_30973 = state_30957;
(statearr_30973[(13)] = inst_30830);

(statearr_30973[(14)] = inst_30833);

(statearr_30973[(15)] = inst_30873);

(statearr_30973[(16)] = inst_30831);

(statearr_30973[(17)] = inst_30832);

return statearr_30973;
})();
var statearr_30974_33254 = state_30957__$1;
(statearr_30974_33254[(2)] = null);

(statearr_30974_33254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (39))){
var state_30957__$1 = state_30957;
var statearr_30982_33260 = state_30957__$1;
(statearr_30982_33260[(2)] = null);

(statearr_30982_33260[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (4))){
var inst_30821 = (state_30957[(11)]);
var inst_30821__$1 = (state_30957[(2)]);
var inst_30822 = (inst_30821__$1 == null);
var state_30957__$1 = (function (){var statearr_30983 = state_30957;
(statearr_30983[(11)] = inst_30821__$1);

return statearr_30983;
})();
if(cljs.core.truth_(inst_30822)){
var statearr_30984_33264 = state_30957__$1;
(statearr_30984_33264[(1)] = (5));

} else {
var statearr_30985_33265 = state_30957__$1;
(statearr_30985_33265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (15))){
var inst_30830 = (state_30957[(13)]);
var inst_30833 = (state_30957[(14)]);
var inst_30831 = (state_30957[(16)]);
var inst_30832 = (state_30957[(17)]);
var inst_30848 = (state_30957[(2)]);
var inst_30849 = (inst_30833 + (1));
var tmp30975 = inst_30830;
var tmp30976 = inst_30831;
var tmp30977 = inst_30832;
var inst_30830__$1 = tmp30975;
var inst_30831__$1 = tmp30976;
var inst_30832__$1 = tmp30977;
var inst_30833__$1 = inst_30849;
var state_30957__$1 = (function (){var statearr_30986 = state_30957;
(statearr_30986[(13)] = inst_30830__$1);

(statearr_30986[(14)] = inst_30833__$1);

(statearr_30986[(18)] = inst_30848);

(statearr_30986[(16)] = inst_30831__$1);

(statearr_30986[(17)] = inst_30832__$1);

return statearr_30986;
})();
var statearr_30987_33270 = state_30957__$1;
(statearr_30987_33270[(2)] = null);

(statearr_30987_33270[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (21))){
var inst_30877 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_30991_33273 = state_30957__$1;
(statearr_30991_33273[(2)] = inst_30877);

(statearr_30991_33273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (31))){
var inst_30905 = (state_30957[(10)]);
var inst_30911 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30905);
var state_30957__$1 = state_30957;
var statearr_30992_33275 = state_30957__$1;
(statearr_30992_33275[(2)] = inst_30911);

(statearr_30992_33275[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (32))){
var inst_30897 = (state_30957[(19)]);
var inst_30895 = (state_30957[(20)]);
var inst_30898 = (state_30957[(9)]);
var inst_30896 = (state_30957[(12)]);
var inst_30913 = (state_30957[(2)]);
var inst_30914 = (inst_30898 + (1));
var tmp30988 = inst_30897;
var tmp30989 = inst_30895;
var tmp30990 = inst_30896;
var inst_30895__$1 = tmp30989;
var inst_30896__$1 = tmp30990;
var inst_30897__$1 = tmp30988;
var inst_30898__$1 = inst_30914;
var state_30957__$1 = (function (){var statearr_30997 = state_30957;
(statearr_30997[(19)] = inst_30897__$1);

(statearr_30997[(20)] = inst_30895__$1);

(statearr_30997[(9)] = inst_30898__$1);

(statearr_30997[(12)] = inst_30896__$1);

(statearr_30997[(21)] = inst_30913);

return statearr_30997;
})();
var statearr_31000_33277 = state_30957__$1;
(statearr_31000_33277[(2)] = null);

(statearr_31000_33277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (40))){
var inst_30926 = (state_30957[(22)]);
var inst_30930 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30926);
var state_30957__$1 = state_30957;
var statearr_31005_33280 = state_30957__$1;
(statearr_31005_33280[(2)] = inst_30930);

(statearr_31005_33280[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (33))){
var inst_30917 = (state_30957[(23)]);
var inst_30919 = cljs.core.chunked_seq_QMARK_(inst_30917);
var state_30957__$1 = state_30957;
if(inst_30919){
var statearr_31009_33281 = state_30957__$1;
(statearr_31009_33281[(1)] = (36));

} else {
var statearr_31010_33282 = state_30957__$1;
(statearr_31010_33282[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (13))){
var inst_30842 = (state_30957[(24)]);
var inst_30845 = cljs.core.async.close_BANG_(inst_30842);
var state_30957__$1 = state_30957;
var statearr_31012_33285 = state_30957__$1;
(statearr_31012_33285[(2)] = inst_30845);

(statearr_31012_33285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (22))){
var inst_30867 = (state_30957[(8)]);
var inst_30870 = cljs.core.async.close_BANG_(inst_30867);
var state_30957__$1 = state_30957;
var statearr_31018_33287 = state_30957__$1;
(statearr_31018_33287[(2)] = inst_30870);

(statearr_31018_33287[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (36))){
var inst_30917 = (state_30957[(23)]);
var inst_30921 = cljs.core.chunk_first(inst_30917);
var inst_30922 = cljs.core.chunk_rest(inst_30917);
var inst_30923 = cljs.core.count(inst_30921);
var inst_30895 = inst_30922;
var inst_30896 = inst_30921;
var inst_30897 = inst_30923;
var inst_30898 = (0);
var state_30957__$1 = (function (){var statearr_31019 = state_30957;
(statearr_31019[(19)] = inst_30897);

(statearr_31019[(20)] = inst_30895);

(statearr_31019[(9)] = inst_30898);

(statearr_31019[(12)] = inst_30896);

return statearr_31019;
})();
var statearr_31021_33292 = state_30957__$1;
(statearr_31021_33292[(2)] = null);

(statearr_31021_33292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (41))){
var inst_30917 = (state_30957[(23)]);
var inst_30932 = (state_30957[(2)]);
var inst_30933 = cljs.core.next(inst_30917);
var inst_30895 = inst_30933;
var inst_30896 = null;
var inst_30897 = (0);
var inst_30898 = (0);
var state_30957__$1 = (function (){var statearr_31022 = state_30957;
(statearr_31022[(19)] = inst_30897);

(statearr_31022[(20)] = inst_30895);

(statearr_31022[(9)] = inst_30898);

(statearr_31022[(12)] = inst_30896);

(statearr_31022[(25)] = inst_30932);

return statearr_31022;
})();
var statearr_31023_33293 = state_30957__$1;
(statearr_31023_33293[(2)] = null);

(statearr_31023_33293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (43))){
var state_30957__$1 = state_30957;
var statearr_31024_33294 = state_30957__$1;
(statearr_31024_33294[(2)] = null);

(statearr_31024_33294[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (29))){
var inst_30941 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31025_33295 = state_30957__$1;
(statearr_31025_33295[(2)] = inst_30941);

(statearr_31025_33295[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (44))){
var inst_30950 = (state_30957[(2)]);
var state_30957__$1 = (function (){var statearr_31028 = state_30957;
(statearr_31028[(26)] = inst_30950);

return statearr_31028;
})();
var statearr_31029_33296 = state_30957__$1;
(statearr_31029_33296[(2)] = null);

(statearr_31029_33296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (6))){
var inst_30887 = (state_30957[(27)]);
var inst_30886 = cljs.core.deref(cs);
var inst_30887__$1 = cljs.core.keys(inst_30886);
var inst_30888 = cljs.core.count(inst_30887__$1);
var inst_30889 = cljs.core.reset_BANG_(dctr,inst_30888);
var inst_30894 = cljs.core.seq(inst_30887__$1);
var inst_30895 = inst_30894;
var inst_30896 = null;
var inst_30897 = (0);
var inst_30898 = (0);
var state_30957__$1 = (function (){var statearr_31033 = state_30957;
(statearr_31033[(28)] = inst_30889);

(statearr_31033[(19)] = inst_30897);

(statearr_31033[(20)] = inst_30895);

(statearr_31033[(27)] = inst_30887__$1);

(statearr_31033[(9)] = inst_30898);

(statearr_31033[(12)] = inst_30896);

return statearr_31033;
})();
var statearr_31034_33297 = state_30957__$1;
(statearr_31034_33297[(2)] = null);

(statearr_31034_33297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (28))){
var inst_30895 = (state_30957[(20)]);
var inst_30917 = (state_30957[(23)]);
var inst_30917__$1 = cljs.core.seq(inst_30895);
var state_30957__$1 = (function (){var statearr_31035 = state_30957;
(statearr_31035[(23)] = inst_30917__$1);

return statearr_31035;
})();
if(inst_30917__$1){
var statearr_31037_33299 = state_30957__$1;
(statearr_31037_33299[(1)] = (33));

} else {
var statearr_31038_33300 = state_30957__$1;
(statearr_31038_33300[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (25))){
var inst_30897 = (state_30957[(19)]);
var inst_30898 = (state_30957[(9)]);
var inst_30900 = (inst_30898 < inst_30897);
var inst_30901 = inst_30900;
var state_30957__$1 = state_30957;
if(cljs.core.truth_(inst_30901)){
var statearr_31040_33302 = state_30957__$1;
(statearr_31040_33302[(1)] = (27));

} else {
var statearr_31041_33303 = state_30957__$1;
(statearr_31041_33303[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (34))){
var state_30957__$1 = state_30957;
var statearr_31042_33304 = state_30957__$1;
(statearr_31042_33304[(2)] = null);

(statearr_31042_33304[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (17))){
var state_30957__$1 = state_30957;
var statearr_31043_33305 = state_30957__$1;
(statearr_31043_33305[(2)] = null);

(statearr_31043_33305[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (3))){
var inst_30955 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30957__$1,inst_30955);
} else {
if((state_val_30958 === (12))){
var inst_30882 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31044_33306 = state_30957__$1;
(statearr_31044_33306[(2)] = inst_30882);

(statearr_31044_33306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (2))){
var state_30957__$1 = state_30957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30957__$1,(4),ch);
} else {
if((state_val_30958 === (23))){
var state_30957__$1 = state_30957;
var statearr_31045_33307 = state_30957__$1;
(statearr_31045_33307[(2)] = null);

(statearr_31045_33307[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (35))){
var inst_30939 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31046_33308 = state_30957__$1;
(statearr_31046_33308[(2)] = inst_30939);

(statearr_31046_33308[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (19))){
var inst_30852 = (state_30957[(7)]);
var inst_30858 = cljs.core.chunk_first(inst_30852);
var inst_30859 = cljs.core.chunk_rest(inst_30852);
var inst_30860 = cljs.core.count(inst_30858);
var inst_30830 = inst_30859;
var inst_30831 = inst_30858;
var inst_30832 = inst_30860;
var inst_30833 = (0);
var state_30957__$1 = (function (){var statearr_31047 = state_30957;
(statearr_31047[(13)] = inst_30830);

(statearr_31047[(14)] = inst_30833);

(statearr_31047[(16)] = inst_30831);

(statearr_31047[(17)] = inst_30832);

return statearr_31047;
})();
var statearr_31048_33319 = state_30957__$1;
(statearr_31048_33319[(2)] = null);

(statearr_31048_33319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (11))){
var inst_30830 = (state_30957[(13)]);
var inst_30852 = (state_30957[(7)]);
var inst_30852__$1 = cljs.core.seq(inst_30830);
var state_30957__$1 = (function (){var statearr_31050 = state_30957;
(statearr_31050[(7)] = inst_30852__$1);

return statearr_31050;
})();
if(inst_30852__$1){
var statearr_31051_33320 = state_30957__$1;
(statearr_31051_33320[(1)] = (16));

} else {
var statearr_31052_33323 = state_30957__$1;
(statearr_31052_33323[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (9))){
var inst_30884 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31056_33325 = state_30957__$1;
(statearr_31056_33325[(2)] = inst_30884);

(statearr_31056_33325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (5))){
var inst_30828 = cljs.core.deref(cs);
var inst_30829 = cljs.core.seq(inst_30828);
var inst_30830 = inst_30829;
var inst_30831 = null;
var inst_30832 = (0);
var inst_30833 = (0);
var state_30957__$1 = (function (){var statearr_31061 = state_30957;
(statearr_31061[(13)] = inst_30830);

(statearr_31061[(14)] = inst_30833);

(statearr_31061[(16)] = inst_30831);

(statearr_31061[(17)] = inst_30832);

return statearr_31061;
})();
var statearr_31062_33326 = state_30957__$1;
(statearr_31062_33326[(2)] = null);

(statearr_31062_33326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (14))){
var state_30957__$1 = state_30957;
var statearr_31063_33327 = state_30957__$1;
(statearr_31063_33327[(2)] = null);

(statearr_31063_33327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (45))){
var inst_30947 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31064_33328 = state_30957__$1;
(statearr_31064_33328[(2)] = inst_30947);

(statearr_31064_33328[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (26))){
var inst_30887 = (state_30957[(27)]);
var inst_30943 = (state_30957[(2)]);
var inst_30944 = cljs.core.seq(inst_30887);
var state_30957__$1 = (function (){var statearr_31065 = state_30957;
(statearr_31065[(29)] = inst_30943);

return statearr_31065;
})();
if(inst_30944){
var statearr_31066_33336 = state_30957__$1;
(statearr_31066_33336[(1)] = (42));

} else {
var statearr_31067_33337 = state_30957__$1;
(statearr_31067_33337[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (16))){
var inst_30852 = (state_30957[(7)]);
var inst_30856 = cljs.core.chunked_seq_QMARK_(inst_30852);
var state_30957__$1 = state_30957;
if(inst_30856){
var statearr_31068_33342 = state_30957__$1;
(statearr_31068_33342[(1)] = (19));

} else {
var statearr_31069_33348 = state_30957__$1;
(statearr_31069_33348[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (38))){
var inst_30936 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31070_33355 = state_30957__$1;
(statearr_31070_33355[(2)] = inst_30936);

(statearr_31070_33355[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (30))){
var state_30957__$1 = state_30957;
var statearr_31071_33362 = state_30957__$1;
(statearr_31071_33362[(2)] = null);

(statearr_31071_33362[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (10))){
var inst_30833 = (state_30957[(14)]);
var inst_30831 = (state_30957[(16)]);
var inst_30841 = cljs.core._nth(inst_30831,inst_30833);
var inst_30842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30841,(0),null);
var inst_30843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30841,(1),null);
var state_30957__$1 = (function (){var statearr_31073 = state_30957;
(statearr_31073[(24)] = inst_30842);

return statearr_31073;
})();
if(cljs.core.truth_(inst_30843)){
var statearr_31074_33371 = state_30957__$1;
(statearr_31074_33371[(1)] = (13));

} else {
var statearr_31075_33373 = state_30957__$1;
(statearr_31075_33373[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (18))){
var inst_30880 = (state_30957[(2)]);
var state_30957__$1 = state_30957;
var statearr_31076_33378 = state_30957__$1;
(statearr_31076_33378[(2)] = inst_30880);

(statearr_31076_33378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (42))){
var state_30957__$1 = state_30957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30957__$1,(45),dchan);
} else {
if((state_val_30958 === (37))){
var inst_30821 = (state_30957[(11)]);
var inst_30926 = (state_30957[(22)]);
var inst_30917 = (state_30957[(23)]);
var inst_30926__$1 = cljs.core.first(inst_30917);
var inst_30927 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30926__$1,inst_30821,done);
var state_30957__$1 = (function (){var statearr_31080 = state_30957;
(statearr_31080[(22)] = inst_30926__$1);

return statearr_31080;
})();
if(cljs.core.truth_(inst_30927)){
var statearr_31081_33394 = state_30957__$1;
(statearr_31081_33394[(1)] = (39));

} else {
var statearr_31082_33395 = state_30957__$1;
(statearr_31082_33395[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30958 === (8))){
var inst_30833 = (state_30957[(14)]);
var inst_30832 = (state_30957[(17)]);
var inst_30835 = (inst_30833 < inst_30832);
var inst_30836 = inst_30835;
var state_30957__$1 = state_30957;
if(cljs.core.truth_(inst_30836)){
var statearr_31088_33399 = state_30957__$1;
(statearr_31088_33399[(1)] = (10));

} else {
var statearr_31089_33401 = state_30957__$1;
(statearr_31089_33401[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__29505__auto__ = null;
var cljs$core$async$mult_$_state_machine__29505__auto____0 = (function (){
var statearr_31094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31094[(0)] = cljs$core$async$mult_$_state_machine__29505__auto__);

(statearr_31094[(1)] = (1));

return statearr_31094;
});
var cljs$core$async$mult_$_state_machine__29505__auto____1 = (function (state_30957){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_30957);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e31096){var ex__29509__auto__ = e31096;
var statearr_31097_33405 = state_30957;
(statearr_31097_33405[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_30957[(4)]))){
var statearr_31098_33409 = state_30957;
(statearr_31098_33409[(1)] = cljs.core.first((state_30957[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33410 = state_30957;
state_30957 = G__33410;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29505__auto__ = function(state_30957){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29505__auto____1.call(this,state_30957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29505__auto____0;
cljs$core$async$mult_$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29505__auto____1;
return cljs$core$async$mult_$_state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_31100 = f__29714__auto__();
(statearr_31100[(6)] = c__29713__auto___33243);

return statearr_31100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31106 = arguments.length;
switch (G__31106) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_33428 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33428(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33433 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33433(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33434 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33434(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33436 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33436(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33443 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33443(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33445 = arguments.length;
var i__5770__auto___33446 = (0);
while(true){
if((i__5770__auto___33446 < len__5769__auto___33445)){
args__5775__auto__.push((arguments[i__5770__auto___33446]));

var G__33451 = (i__5770__auto___33446 + (1));
i__5770__auto___33446 = G__33451;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31179){
var map__31181 = p__31179;
var map__31181__$1 = cljs.core.__destructure_map(map__31181);
var opts = map__31181__$1;
var statearr_31182_33452 = state;
(statearr_31182_33452[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31186_33453 = state;
(statearr_31186_33453[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31190_33454 = state;
(statearr_31190_33454[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31170){
var G__31171 = cljs.core.first(seq31170);
var seq31170__$1 = cljs.core.next(seq31170);
var G__31172 = cljs.core.first(seq31170__$1);
var seq31170__$2 = cljs.core.next(seq31170__$1);
var G__31173 = cljs.core.first(seq31170__$2);
var seq31170__$3 = cljs.core.next(seq31170__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31171,G__31172,G__31173,seq31170__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31201 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31202){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31202 = meta31202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31203,meta31202__$1){
var self__ = this;
var _31203__$1 = this;
return (new cljs.core.async.t_cljs$core$async31201(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31202__$1));
}));

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31203){
var self__ = this;
var _31203__$1 = this;
return self__.meta31202;
}));

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31201.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31202","meta31202",-202890703,null)], null);
}));

(cljs.core.async.t_cljs$core$async31201.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31201");

(cljs.core.async.t_cljs$core$async31201.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31201");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31201.
 */
cljs.core.async.__GT_t_cljs$core$async31201 = (function cljs$core$async$__GT_t_cljs$core$async31201(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31202){
return (new cljs.core.async.t_cljs$core$async31201(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31202));
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async31201(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__29713__auto___33472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_31314){
var state_val_31315 = (state_31314[(1)]);
if((state_val_31315 === (7))){
var inst_31272 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
if(cljs.core.truth_(inst_31272)){
var statearr_31335_33473 = state_31314__$1;
(statearr_31335_33473[(1)] = (8));

} else {
var statearr_31336_33474 = state_31314__$1;
(statearr_31336_33474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (20))){
var inst_31265 = (state_31314[(7)]);
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31314__$1,(23),out,inst_31265);
} else {
if((state_val_31315 === (1))){
var inst_31246 = calc_state();
var inst_31247 = cljs.core.__destructure_map(inst_31246);
var inst_31248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31247,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31247,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31247,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31251 = inst_31246;
var state_31314__$1 = (function (){var statearr_31346 = state_31314;
(statearr_31346[(8)] = inst_31251);

(statearr_31346[(9)] = inst_31249);

(statearr_31346[(10)] = inst_31248);

(statearr_31346[(11)] = inst_31250);

return statearr_31346;
})();
var statearr_31348_33480 = state_31314__$1;
(statearr_31348_33480[(2)] = null);

(statearr_31348_33480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (24))){
var inst_31254 = (state_31314[(12)]);
var inst_31251 = inst_31254;
var state_31314__$1 = (function (){var statearr_31350 = state_31314;
(statearr_31350[(8)] = inst_31251);

return statearr_31350;
})();
var statearr_31352_33481 = state_31314__$1;
(statearr_31352_33481[(2)] = null);

(statearr_31352_33481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (4))){
var inst_31265 = (state_31314[(7)]);
var inst_31267 = (state_31314[(13)]);
var inst_31264 = (state_31314[(2)]);
var inst_31265__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31264,(0),null);
var inst_31266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31264,(1),null);
var inst_31267__$1 = (inst_31265__$1 == null);
var state_31314__$1 = (function (){var statearr_31357 = state_31314;
(statearr_31357[(7)] = inst_31265__$1);

(statearr_31357[(13)] = inst_31267__$1);

(statearr_31357[(14)] = inst_31266);

return statearr_31357;
})();
if(cljs.core.truth_(inst_31267__$1)){
var statearr_31358_33483 = state_31314__$1;
(statearr_31358_33483[(1)] = (5));

} else {
var statearr_31359_33484 = state_31314__$1;
(statearr_31359_33484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (15))){
var inst_31255 = (state_31314[(15)]);
var inst_31287 = (state_31314[(16)]);
var inst_31287__$1 = cljs.core.empty_QMARK_(inst_31255);
var state_31314__$1 = (function (){var statearr_31360 = state_31314;
(statearr_31360[(16)] = inst_31287__$1);

return statearr_31360;
})();
if(inst_31287__$1){
var statearr_31361_33490 = state_31314__$1;
(statearr_31361_33490[(1)] = (17));

} else {
var statearr_31362_33491 = state_31314__$1;
(statearr_31362_33491[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (21))){
var inst_31254 = (state_31314[(12)]);
var inst_31251 = inst_31254;
var state_31314__$1 = (function (){var statearr_31364 = state_31314;
(statearr_31364[(8)] = inst_31251);

return statearr_31364;
})();
var statearr_31365_33492 = state_31314__$1;
(statearr_31365_33492[(2)] = null);

(statearr_31365_33492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (13))){
var inst_31280 = (state_31314[(2)]);
var inst_31281 = calc_state();
var inst_31251 = inst_31281;
var state_31314__$1 = (function (){var statearr_31366 = state_31314;
(statearr_31366[(8)] = inst_31251);

(statearr_31366[(17)] = inst_31280);

return statearr_31366;
})();
var statearr_31373_33493 = state_31314__$1;
(statearr_31373_33493[(2)] = null);

(statearr_31373_33493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (22))){
var inst_31307 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31375_33494 = state_31314__$1;
(statearr_31375_33494[(2)] = inst_31307);

(statearr_31375_33494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (6))){
var inst_31266 = (state_31314[(14)]);
var inst_31270 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31266,change);
var state_31314__$1 = state_31314;
var statearr_31382_33495 = state_31314__$1;
(statearr_31382_33495[(2)] = inst_31270);

(statearr_31382_33495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (25))){
var state_31314__$1 = state_31314;
var statearr_31383_33496 = state_31314__$1;
(statearr_31383_33496[(2)] = null);

(statearr_31383_33496[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (17))){
var inst_31266 = (state_31314[(14)]);
var inst_31256 = (state_31314[(18)]);
var inst_31289 = (inst_31256.cljs$core$IFn$_invoke$arity$1 ? inst_31256.cljs$core$IFn$_invoke$arity$1(inst_31266) : inst_31256.call(null,inst_31266));
var inst_31290 = cljs.core.not(inst_31289);
var state_31314__$1 = state_31314;
var statearr_31384_33497 = state_31314__$1;
(statearr_31384_33497[(2)] = inst_31290);

(statearr_31384_33497[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (3))){
var inst_31311 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31314__$1,inst_31311);
} else {
if((state_val_31315 === (12))){
var state_31314__$1 = state_31314;
var statearr_31387_33498 = state_31314__$1;
(statearr_31387_33498[(2)] = null);

(statearr_31387_33498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (2))){
var inst_31251 = (state_31314[(8)]);
var inst_31254 = (state_31314[(12)]);
var inst_31254__$1 = cljs.core.__destructure_map(inst_31251);
var inst_31255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31254__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31254__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31254__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31314__$1 = (function (){var statearr_31389 = state_31314;
(statearr_31389[(15)] = inst_31255);

(statearr_31389[(18)] = inst_31256);

(statearr_31389[(12)] = inst_31254__$1);

return statearr_31389;
})();
return cljs.core.async.ioc_alts_BANG_(state_31314__$1,(4),inst_31257);
} else {
if((state_val_31315 === (23))){
var inst_31298 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
if(cljs.core.truth_(inst_31298)){
var statearr_31390_33499 = state_31314__$1;
(statearr_31390_33499[(1)] = (24));

} else {
var statearr_31391_33500 = state_31314__$1;
(statearr_31391_33500[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (19))){
var inst_31293 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31392_33501 = state_31314__$1;
(statearr_31392_33501[(2)] = inst_31293);

(statearr_31392_33501[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (11))){
var inst_31266 = (state_31314[(14)]);
var inst_31277 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31266);
var state_31314__$1 = state_31314;
var statearr_31393_33502 = state_31314__$1;
(statearr_31393_33502[(2)] = inst_31277);

(statearr_31393_33502[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (9))){
var inst_31255 = (state_31314[(15)]);
var inst_31266 = (state_31314[(14)]);
var inst_31284 = (state_31314[(19)]);
var inst_31284__$1 = (inst_31255.cljs$core$IFn$_invoke$arity$1 ? inst_31255.cljs$core$IFn$_invoke$arity$1(inst_31266) : inst_31255.call(null,inst_31266));
var state_31314__$1 = (function (){var statearr_31394 = state_31314;
(statearr_31394[(19)] = inst_31284__$1);

return statearr_31394;
})();
if(cljs.core.truth_(inst_31284__$1)){
var statearr_31395_33505 = state_31314__$1;
(statearr_31395_33505[(1)] = (14));

} else {
var statearr_31397_33506 = state_31314__$1;
(statearr_31397_33506[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (5))){
var inst_31267 = (state_31314[(13)]);
var state_31314__$1 = state_31314;
var statearr_31398_33511 = state_31314__$1;
(statearr_31398_33511[(2)] = inst_31267);

(statearr_31398_33511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (14))){
var inst_31284 = (state_31314[(19)]);
var state_31314__$1 = state_31314;
var statearr_31399_33514 = state_31314__$1;
(statearr_31399_33514[(2)] = inst_31284);

(statearr_31399_33514[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (26))){
var inst_31303 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31400_33516 = state_31314__$1;
(statearr_31400_33516[(2)] = inst_31303);

(statearr_31400_33516[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (16))){
var inst_31295 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
if(cljs.core.truth_(inst_31295)){
var statearr_31402_33517 = state_31314__$1;
(statearr_31402_33517[(1)] = (20));

} else {
var statearr_31403_33518 = state_31314__$1;
(statearr_31403_33518[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (10))){
var inst_31309 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31404_33520 = state_31314__$1;
(statearr_31404_33520[(2)] = inst_31309);

(statearr_31404_33520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (18))){
var inst_31287 = (state_31314[(16)]);
var state_31314__$1 = state_31314;
var statearr_31417_33522 = state_31314__$1;
(statearr_31417_33522[(2)] = inst_31287);

(statearr_31417_33522[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (8))){
var inst_31265 = (state_31314[(7)]);
var inst_31275 = (inst_31265 == null);
var state_31314__$1 = state_31314;
if(cljs.core.truth_(inst_31275)){
var statearr_31418_33523 = state_31314__$1;
(statearr_31418_33523[(1)] = (11));

} else {
var statearr_31421_33524 = state_31314__$1;
(statearr_31421_33524[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__29505__auto__ = null;
var cljs$core$async$mix_$_state_machine__29505__auto____0 = (function (){
var statearr_31423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31423[(0)] = cljs$core$async$mix_$_state_machine__29505__auto__);

(statearr_31423[(1)] = (1));

return statearr_31423;
});
var cljs$core$async$mix_$_state_machine__29505__auto____1 = (function (state_31314){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_31314);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e31425){var ex__29509__auto__ = e31425;
var statearr_31426_33528 = state_31314;
(statearr_31426_33528[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_31314[(4)]))){
var statearr_31427_33529 = state_31314;
(statearr_31427_33529[(1)] = cljs.core.first((state_31314[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33541 = state_31314;
state_31314 = G__33541;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29505__auto__ = function(state_31314){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29505__auto____1.call(this,state_31314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29505__auto____0;
cljs$core$async$mix_$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29505__auto____1;
return cljs$core$async$mix_$_state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_31433 = f__29714__auto__();
(statearr_31433[(6)] = c__29713__auto___33472);

return statearr_31433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_33547 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33547(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33556 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33556(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33568 = (function() {
var G__33569 = null;
var G__33569__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33569__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33569 = function(p,v){
switch(arguments.length){
case 1:
return G__33569__1.call(this,p);
case 2:
return G__33569__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33569.cljs$core$IFn$_invoke$arity$1 = G__33569__1;
G__33569.cljs$core$IFn$_invoke$arity$2 = G__33569__2;
return G__33569;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31482 = arguments.length;
switch (G__31482) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33568(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33568(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31503 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31504){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31504 = meta31504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31505,meta31504__$1){
var self__ = this;
var _31505__$1 = this;
return (new cljs.core.async.t_cljs$core$async31503(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31504__$1));
}));

(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31505){
var self__ = this;
var _31505__$1 = this;
return self__.meta31504;
}));

(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31504","meta31504",307888486,null)], null);
}));

(cljs.core.async.t_cljs$core$async31503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31503");

(cljs.core.async.t_cljs$core$async31503.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31503.
 */
cljs.core.async.__GT_t_cljs$core$async31503 = (function cljs$core$async$__GT_t_cljs$core$async31503(ch,topic_fn,buf_fn,mults,ensure_mult,meta31504){
return (new cljs.core.async.t_cljs$core$async31503(ch,topic_fn,buf_fn,mults,ensure_mult,meta31504));
});


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
var G__31501 = arguments.length;
switch (G__31501) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31496_SHARP_){
if(cljs.core.truth_((p1__31496_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31496_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31496_SHARP_.call(null,topic)))){
return p1__31496_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31496_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async31503(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__29713__auto___33580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_31589){
var state_val_31590 = (state_31589[(1)]);
if((state_val_31590 === (7))){
var inst_31585 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
var statearr_31591_33587 = state_31589__$1;
(statearr_31591_33587[(2)] = inst_31585);

(statearr_31591_33587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (20))){
var state_31589__$1 = state_31589;
var statearr_31592_33588 = state_31589__$1;
(statearr_31592_33588[(2)] = null);

(statearr_31592_33588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (1))){
var state_31589__$1 = state_31589;
var statearr_31593_33589 = state_31589__$1;
(statearr_31593_33589[(2)] = null);

(statearr_31593_33589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (24))){
var inst_31567 = (state_31589[(7)]);
var inst_31576 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31567);
var state_31589__$1 = state_31589;
var statearr_31594_33590 = state_31589__$1;
(statearr_31594_33590[(2)] = inst_31576);

(statearr_31594_33590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (4))){
var inst_31516 = (state_31589[(8)]);
var inst_31516__$1 = (state_31589[(2)]);
var inst_31520 = (inst_31516__$1 == null);
var state_31589__$1 = (function (){var statearr_31595 = state_31589;
(statearr_31595[(8)] = inst_31516__$1);

return statearr_31595;
})();
if(cljs.core.truth_(inst_31520)){
var statearr_31597_33591 = state_31589__$1;
(statearr_31597_33591[(1)] = (5));

} else {
var statearr_31598_33592 = state_31589__$1;
(statearr_31598_33592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (15))){
var inst_31561 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
var statearr_31599_33593 = state_31589__$1;
(statearr_31599_33593[(2)] = inst_31561);

(statearr_31599_33593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (21))){
var inst_31581 = (state_31589[(2)]);
var state_31589__$1 = (function (){var statearr_31600 = state_31589;
(statearr_31600[(9)] = inst_31581);

return statearr_31600;
})();
var statearr_31601_33594 = state_31589__$1;
(statearr_31601_33594[(2)] = null);

(statearr_31601_33594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (13))){
var inst_31543 = (state_31589[(10)]);
var inst_31545 = cljs.core.chunked_seq_QMARK_(inst_31543);
var state_31589__$1 = state_31589;
if(inst_31545){
var statearr_31603_33595 = state_31589__$1;
(statearr_31603_33595[(1)] = (16));

} else {
var statearr_31604_33596 = state_31589__$1;
(statearr_31604_33596[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (22))){
var inst_31573 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
if(cljs.core.truth_(inst_31573)){
var statearr_31606_33597 = state_31589__$1;
(statearr_31606_33597[(1)] = (23));

} else {
var statearr_31607_33598 = state_31589__$1;
(statearr_31607_33598[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (6))){
var inst_31567 = (state_31589[(7)]);
var inst_31516 = (state_31589[(8)]);
var inst_31569 = (state_31589[(11)]);
var inst_31567__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31516) : topic_fn.call(null,inst_31516));
var inst_31568 = cljs.core.deref(mults);
var inst_31569__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31568,inst_31567__$1);
var state_31589__$1 = (function (){var statearr_31610 = state_31589;
(statearr_31610[(7)] = inst_31567__$1);

(statearr_31610[(11)] = inst_31569__$1);

return statearr_31610;
})();
if(cljs.core.truth_(inst_31569__$1)){
var statearr_31613_33599 = state_31589__$1;
(statearr_31613_33599[(1)] = (19));

} else {
var statearr_31616_33600 = state_31589__$1;
(statearr_31616_33600[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (25))){
var inst_31578 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
var statearr_31617_33601 = state_31589__$1;
(statearr_31617_33601[(2)] = inst_31578);

(statearr_31617_33601[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (17))){
var inst_31543 = (state_31589[(10)]);
var inst_31552 = cljs.core.first(inst_31543);
var inst_31553 = cljs.core.async.muxch_STAR_(inst_31552);
var inst_31554 = cljs.core.async.close_BANG_(inst_31553);
var inst_31555 = cljs.core.next(inst_31543);
var inst_31529 = inst_31555;
var inst_31530 = null;
var inst_31531 = (0);
var inst_31532 = (0);
var state_31589__$1 = (function (){var statearr_31623 = state_31589;
(statearr_31623[(12)] = inst_31554);

(statearr_31623[(13)] = inst_31532);

(statearr_31623[(14)] = inst_31530);

(statearr_31623[(15)] = inst_31529);

(statearr_31623[(16)] = inst_31531);

return statearr_31623;
})();
var statearr_31624_33602 = state_31589__$1;
(statearr_31624_33602[(2)] = null);

(statearr_31624_33602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (3))){
var inst_31587 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31589__$1,inst_31587);
} else {
if((state_val_31590 === (12))){
var inst_31563 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
var statearr_31625_33603 = state_31589__$1;
(statearr_31625_33603[(2)] = inst_31563);

(statearr_31625_33603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (2))){
var state_31589__$1 = state_31589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31589__$1,(4),ch);
} else {
if((state_val_31590 === (23))){
var state_31589__$1 = state_31589;
var statearr_31627_33605 = state_31589__$1;
(statearr_31627_33605[(2)] = null);

(statearr_31627_33605[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (19))){
var inst_31516 = (state_31589[(8)]);
var inst_31569 = (state_31589[(11)]);
var inst_31571 = cljs.core.async.muxch_STAR_(inst_31569);
var state_31589__$1 = state_31589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31589__$1,(22),inst_31571,inst_31516);
} else {
if((state_val_31590 === (11))){
var inst_31543 = (state_31589[(10)]);
var inst_31529 = (state_31589[(15)]);
var inst_31543__$1 = cljs.core.seq(inst_31529);
var state_31589__$1 = (function (){var statearr_31635 = state_31589;
(statearr_31635[(10)] = inst_31543__$1);

return statearr_31635;
})();
if(inst_31543__$1){
var statearr_31638_33607 = state_31589__$1;
(statearr_31638_33607[(1)] = (13));

} else {
var statearr_31639_33608 = state_31589__$1;
(statearr_31639_33608[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (9))){
var inst_31565 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
var statearr_31640_33609 = state_31589__$1;
(statearr_31640_33609[(2)] = inst_31565);

(statearr_31640_33609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (5))){
var inst_31526 = cljs.core.deref(mults);
var inst_31527 = cljs.core.vals(inst_31526);
var inst_31528 = cljs.core.seq(inst_31527);
var inst_31529 = inst_31528;
var inst_31530 = null;
var inst_31531 = (0);
var inst_31532 = (0);
var state_31589__$1 = (function (){var statearr_31641 = state_31589;
(statearr_31641[(13)] = inst_31532);

(statearr_31641[(14)] = inst_31530);

(statearr_31641[(15)] = inst_31529);

(statearr_31641[(16)] = inst_31531);

return statearr_31641;
})();
var statearr_31643_33610 = state_31589__$1;
(statearr_31643_33610[(2)] = null);

(statearr_31643_33610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (14))){
var state_31589__$1 = state_31589;
var statearr_31647_33611 = state_31589__$1;
(statearr_31647_33611[(2)] = null);

(statearr_31647_33611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (16))){
var inst_31543 = (state_31589[(10)]);
var inst_31547 = cljs.core.chunk_first(inst_31543);
var inst_31548 = cljs.core.chunk_rest(inst_31543);
var inst_31549 = cljs.core.count(inst_31547);
var inst_31529 = inst_31548;
var inst_31530 = inst_31547;
var inst_31531 = inst_31549;
var inst_31532 = (0);
var state_31589__$1 = (function (){var statearr_31648 = state_31589;
(statearr_31648[(13)] = inst_31532);

(statearr_31648[(14)] = inst_31530);

(statearr_31648[(15)] = inst_31529);

(statearr_31648[(16)] = inst_31531);

return statearr_31648;
})();
var statearr_31649_33612 = state_31589__$1;
(statearr_31649_33612[(2)] = null);

(statearr_31649_33612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (10))){
var inst_31532 = (state_31589[(13)]);
var inst_31530 = (state_31589[(14)]);
var inst_31529 = (state_31589[(15)]);
var inst_31531 = (state_31589[(16)]);
var inst_31537 = cljs.core._nth(inst_31530,inst_31532);
var inst_31538 = cljs.core.async.muxch_STAR_(inst_31537);
var inst_31539 = cljs.core.async.close_BANG_(inst_31538);
var inst_31540 = (inst_31532 + (1));
var tmp31644 = inst_31530;
var tmp31645 = inst_31529;
var tmp31646 = inst_31531;
var inst_31529__$1 = tmp31645;
var inst_31530__$1 = tmp31644;
var inst_31531__$1 = tmp31646;
var inst_31532__$1 = inst_31540;
var state_31589__$1 = (function (){var statearr_31650 = state_31589;
(statearr_31650[(13)] = inst_31532__$1);

(statearr_31650[(14)] = inst_31530__$1);

(statearr_31650[(15)] = inst_31529__$1);

(statearr_31650[(16)] = inst_31531__$1);

(statearr_31650[(17)] = inst_31539);

return statearr_31650;
})();
var statearr_31655_33622 = state_31589__$1;
(statearr_31655_33622[(2)] = null);

(statearr_31655_33622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (18))){
var inst_31558 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
var statearr_31656_33623 = state_31589__$1;
(statearr_31656_33623[(2)] = inst_31558);

(statearr_31656_33623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (8))){
var inst_31532 = (state_31589[(13)]);
var inst_31531 = (state_31589[(16)]);
var inst_31534 = (inst_31532 < inst_31531);
var inst_31535 = inst_31534;
var state_31589__$1 = state_31589;
if(cljs.core.truth_(inst_31535)){
var statearr_31664_33624 = state_31589__$1;
(statearr_31664_33624[(1)] = (10));

} else {
var statearr_31665_33625 = state_31589__$1;
(statearr_31665_33625[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__29505__auto__ = null;
var cljs$core$async$state_machine__29505__auto____0 = (function (){
var statearr_31666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31666[(0)] = cljs$core$async$state_machine__29505__auto__);

(statearr_31666[(1)] = (1));

return statearr_31666;
});
var cljs$core$async$state_machine__29505__auto____1 = (function (state_31589){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_31589);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e31667){var ex__29509__auto__ = e31667;
var statearr_31668_33626 = state_31589;
(statearr_31668_33626[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_31589[(4)]))){
var statearr_31669_33627 = state_31589;
(statearr_31669_33627[(1)] = cljs.core.first((state_31589[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33628 = state_31589;
state_31589 = G__33628;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$state_machine__29505__auto__ = function(state_31589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29505__auto____1.call(this,state_31589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29505__auto____0;
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29505__auto____1;
return cljs$core$async$state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_31671 = f__29714__auto__();
(statearr_31671[(6)] = c__29713__auto___33580);

return statearr_31671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31678 = arguments.length;
switch (G__31678) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__31686 = arguments.length;
switch (G__31686) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__31689 = arguments.length;
switch (G__31689) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__29713__auto___33641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_31736){
var state_val_31737 = (state_31736[(1)]);
if((state_val_31737 === (7))){
var state_31736__$1 = state_31736;
var statearr_31738_33642 = state_31736__$1;
(statearr_31738_33642[(2)] = null);

(statearr_31738_33642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (1))){
var state_31736__$1 = state_31736;
var statearr_31739_33643 = state_31736__$1;
(statearr_31739_33643[(2)] = null);

(statearr_31739_33643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (4))){
var inst_31694 = (state_31736[(7)]);
var inst_31695 = (state_31736[(8)]);
var inst_31697 = (inst_31695 < inst_31694);
var state_31736__$1 = state_31736;
if(cljs.core.truth_(inst_31697)){
var statearr_31741_33644 = state_31736__$1;
(statearr_31741_33644[(1)] = (6));

} else {
var statearr_31742_33645 = state_31736__$1;
(statearr_31742_33645[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (15))){
var inst_31721 = (state_31736[(9)]);
var inst_31726 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31721);
var state_31736__$1 = state_31736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31736__$1,(17),out,inst_31726);
} else {
if((state_val_31737 === (13))){
var inst_31721 = (state_31736[(9)]);
var inst_31721__$1 = (state_31736[(2)]);
var inst_31722 = cljs.core.some(cljs.core.nil_QMARK_,inst_31721__$1);
var state_31736__$1 = (function (){var statearr_31745 = state_31736;
(statearr_31745[(9)] = inst_31721__$1);

return statearr_31745;
})();
if(cljs.core.truth_(inst_31722)){
var statearr_31746_33646 = state_31736__$1;
(statearr_31746_33646[(1)] = (14));

} else {
var statearr_31747_33647 = state_31736__$1;
(statearr_31747_33647[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (6))){
var state_31736__$1 = state_31736;
var statearr_31748_33648 = state_31736__$1;
(statearr_31748_33648[(2)] = null);

(statearr_31748_33648[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (17))){
var inst_31728 = (state_31736[(2)]);
var state_31736__$1 = (function (){var statearr_31750 = state_31736;
(statearr_31750[(10)] = inst_31728);

return statearr_31750;
})();
var statearr_31751_33649 = state_31736__$1;
(statearr_31751_33649[(2)] = null);

(statearr_31751_33649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (3))){
var inst_31733 = (state_31736[(2)]);
var state_31736__$1 = state_31736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31736__$1,inst_31733);
} else {
if((state_val_31737 === (12))){
var _ = (function (){var statearr_31752 = state_31736;
(statearr_31752[(4)] = cljs.core.rest((state_31736[(4)])));

return statearr_31752;
})();
var state_31736__$1 = state_31736;
var ex31749 = (state_31736__$1[(2)]);
var statearr_31753_33654 = state_31736__$1;
(statearr_31753_33654[(5)] = ex31749);


if((ex31749 instanceof Object)){
var statearr_31756_33655 = state_31736__$1;
(statearr_31756_33655[(1)] = (11));

(statearr_31756_33655[(5)] = null);

} else {
throw ex31749;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (2))){
var inst_31693 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31694 = cnt;
var inst_31695 = (0);
var state_31736__$1 = (function (){var statearr_31761 = state_31736;
(statearr_31761[(7)] = inst_31694);

(statearr_31761[(8)] = inst_31695);

(statearr_31761[(11)] = inst_31693);

return statearr_31761;
})();
var statearr_31762_33656 = state_31736__$1;
(statearr_31762_33656[(2)] = null);

(statearr_31762_33656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (11))){
var inst_31700 = (state_31736[(2)]);
var inst_31701 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31736__$1 = (function (){var statearr_31764 = state_31736;
(statearr_31764[(12)] = inst_31700);

return statearr_31764;
})();
var statearr_31765_33657 = state_31736__$1;
(statearr_31765_33657[(2)] = inst_31701);

(statearr_31765_33657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (9))){
var inst_31695 = (state_31736[(8)]);
var _ = (function (){var statearr_31768 = state_31736;
(statearr_31768[(4)] = cljs.core.cons((12),(state_31736[(4)])));

return statearr_31768;
})();
var inst_31707 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31695) : chs__$1.call(null,inst_31695));
var inst_31708 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31695) : done.call(null,inst_31695));
var inst_31709 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31707,inst_31708);
var ___$1 = (function (){var statearr_31769 = state_31736;
(statearr_31769[(4)] = cljs.core.rest((state_31736[(4)])));

return statearr_31769;
})();
var state_31736__$1 = state_31736;
var statearr_31770_33658 = state_31736__$1;
(statearr_31770_33658[(2)] = inst_31709);

(statearr_31770_33658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (5))){
var inst_31719 = (state_31736[(2)]);
var state_31736__$1 = (function (){var statearr_31773 = state_31736;
(statearr_31773[(13)] = inst_31719);

return statearr_31773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31736__$1,(13),dchan);
} else {
if((state_val_31737 === (14))){
var inst_31724 = cljs.core.async.close_BANG_(out);
var state_31736__$1 = state_31736;
var statearr_31774_33659 = state_31736__$1;
(statearr_31774_33659[(2)] = inst_31724);

(statearr_31774_33659[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (16))){
var inst_31731 = (state_31736[(2)]);
var state_31736__$1 = state_31736;
var statearr_31775_33660 = state_31736__$1;
(statearr_31775_33660[(2)] = inst_31731);

(statearr_31775_33660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (10))){
var inst_31695 = (state_31736[(8)]);
var inst_31712 = (state_31736[(2)]);
var inst_31713 = (inst_31695 + (1));
var inst_31695__$1 = inst_31713;
var state_31736__$1 = (function (){var statearr_31777 = state_31736;
(statearr_31777[(14)] = inst_31712);

(statearr_31777[(8)] = inst_31695__$1);

return statearr_31777;
})();
var statearr_31778_33661 = state_31736__$1;
(statearr_31778_33661[(2)] = null);

(statearr_31778_33661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31737 === (8))){
var inst_31717 = (state_31736[(2)]);
var state_31736__$1 = state_31736;
var statearr_31779_33662 = state_31736__$1;
(statearr_31779_33662[(2)] = inst_31717);

(statearr_31779_33662[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__29505__auto__ = null;
var cljs$core$async$state_machine__29505__auto____0 = (function (){
var statearr_31780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31780[(0)] = cljs$core$async$state_machine__29505__auto__);

(statearr_31780[(1)] = (1));

return statearr_31780;
});
var cljs$core$async$state_machine__29505__auto____1 = (function (state_31736){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_31736);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e31782){var ex__29509__auto__ = e31782;
var statearr_31783_33663 = state_31736;
(statearr_31783_33663[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_31736[(4)]))){
var statearr_31784_33664 = state_31736;
(statearr_31784_33664[(1)] = cljs.core.first((state_31736[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33665 = state_31736;
state_31736 = G__33665;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$state_machine__29505__auto__ = function(state_31736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29505__auto____1.call(this,state_31736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29505__auto____0;
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29505__auto____1;
return cljs$core$async$state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_31786 = f__29714__auto__();
(statearr_31786[(6)] = c__29713__auto___33641);

return statearr_31786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31789 = arguments.length;
switch (G__31789) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29713__auto___33673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_31825){
var state_val_31826 = (state_31825[(1)]);
if((state_val_31826 === (7))){
var inst_31805 = (state_31825[(7)]);
var inst_31804 = (state_31825[(8)]);
var inst_31804__$1 = (state_31825[(2)]);
var inst_31805__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31804__$1,(0),null);
var inst_31806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31804__$1,(1),null);
var inst_31807 = (inst_31805__$1 == null);
var state_31825__$1 = (function (){var statearr_31833 = state_31825;
(statearr_31833[(7)] = inst_31805__$1);

(statearr_31833[(9)] = inst_31806);

(statearr_31833[(8)] = inst_31804__$1);

return statearr_31833;
})();
if(cljs.core.truth_(inst_31807)){
var statearr_31834_33674 = state_31825__$1;
(statearr_31834_33674[(1)] = (8));

} else {
var statearr_31835_33675 = state_31825__$1;
(statearr_31835_33675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (1))){
var inst_31793 = cljs.core.vec(chs);
var inst_31795 = inst_31793;
var state_31825__$1 = (function (){var statearr_31836 = state_31825;
(statearr_31836[(10)] = inst_31795);

return statearr_31836;
})();
var statearr_31838_33677 = state_31825__$1;
(statearr_31838_33677[(2)] = null);

(statearr_31838_33677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (4))){
var inst_31795 = (state_31825[(10)]);
var state_31825__$1 = state_31825;
return cljs.core.async.ioc_alts_BANG_(state_31825__$1,(7),inst_31795);
} else {
if((state_val_31826 === (6))){
var inst_31821 = (state_31825[(2)]);
var state_31825__$1 = state_31825;
var statearr_31847_33678 = state_31825__$1;
(statearr_31847_33678[(2)] = inst_31821);

(statearr_31847_33678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (3))){
var inst_31823 = (state_31825[(2)]);
var state_31825__$1 = state_31825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31825__$1,inst_31823);
} else {
if((state_val_31826 === (2))){
var inst_31795 = (state_31825[(10)]);
var inst_31797 = cljs.core.count(inst_31795);
var inst_31798 = (inst_31797 > (0));
var state_31825__$1 = state_31825;
if(cljs.core.truth_(inst_31798)){
var statearr_31858_33679 = state_31825__$1;
(statearr_31858_33679[(1)] = (4));

} else {
var statearr_31859_33680 = state_31825__$1;
(statearr_31859_33680[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (11))){
var inst_31795 = (state_31825[(10)]);
var inst_31814 = (state_31825[(2)]);
var tmp31853 = inst_31795;
var inst_31795__$1 = tmp31853;
var state_31825__$1 = (function (){var statearr_31860 = state_31825;
(statearr_31860[(11)] = inst_31814);

(statearr_31860[(10)] = inst_31795__$1);

return statearr_31860;
})();
var statearr_31861_33681 = state_31825__$1;
(statearr_31861_33681[(2)] = null);

(statearr_31861_33681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (9))){
var inst_31805 = (state_31825[(7)]);
var state_31825__$1 = state_31825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31825__$1,(11),out,inst_31805);
} else {
if((state_val_31826 === (5))){
var inst_31819 = cljs.core.async.close_BANG_(out);
var state_31825__$1 = state_31825;
var statearr_31862_33684 = state_31825__$1;
(statearr_31862_33684[(2)] = inst_31819);

(statearr_31862_33684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (10))){
var inst_31817 = (state_31825[(2)]);
var state_31825__$1 = state_31825;
var statearr_31864_33685 = state_31825__$1;
(statearr_31864_33685[(2)] = inst_31817);

(statearr_31864_33685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31826 === (8))){
var inst_31805 = (state_31825[(7)]);
var inst_31806 = (state_31825[(9)]);
var inst_31804 = (state_31825[(8)]);
var inst_31795 = (state_31825[(10)]);
var inst_31809 = (function (){var cs = inst_31795;
var vec__31800 = inst_31804;
var v = inst_31805;
var c = inst_31806;
return (function (p1__31787_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31787_SHARP_);
});
})();
var inst_31810 = cljs.core.filterv(inst_31809,inst_31795);
var inst_31795__$1 = inst_31810;
var state_31825__$1 = (function (){var statearr_31868 = state_31825;
(statearr_31868[(10)] = inst_31795__$1);

return statearr_31868;
})();
var statearr_31869_33686 = state_31825__$1;
(statearr_31869_33686[(2)] = null);

(statearr_31869_33686[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29505__auto__ = null;
var cljs$core$async$state_machine__29505__auto____0 = (function (){
var statearr_31870 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31870[(0)] = cljs$core$async$state_machine__29505__auto__);

(statearr_31870[(1)] = (1));

return statearr_31870;
});
var cljs$core$async$state_machine__29505__auto____1 = (function (state_31825){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_31825);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e31873){var ex__29509__auto__ = e31873;
var statearr_31874_33687 = state_31825;
(statearr_31874_33687[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_31825[(4)]))){
var statearr_31878_33689 = state_31825;
(statearr_31878_33689[(1)] = cljs.core.first((state_31825[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33691 = state_31825;
state_31825 = G__33691;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$state_machine__29505__auto__ = function(state_31825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29505__auto____1.call(this,state_31825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29505__auto____0;
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29505__auto____1;
return cljs$core$async$state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_31880 = f__29714__auto__();
(statearr_31880[(6)] = c__29713__auto___33673);

return statearr_31880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__31886 = arguments.length;
switch (G__31886) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29713__auto___33710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_31914){
var state_val_31915 = (state_31914[(1)]);
if((state_val_31915 === (7))){
var inst_31896 = (state_31914[(7)]);
var inst_31896__$1 = (state_31914[(2)]);
var inst_31897 = (inst_31896__$1 == null);
var inst_31898 = cljs.core.not(inst_31897);
var state_31914__$1 = (function (){var statearr_31918 = state_31914;
(statearr_31918[(7)] = inst_31896__$1);

return statearr_31918;
})();
if(inst_31898){
var statearr_31919_33711 = state_31914__$1;
(statearr_31919_33711[(1)] = (8));

} else {
var statearr_31920_33712 = state_31914__$1;
(statearr_31920_33712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (1))){
var inst_31891 = (0);
var state_31914__$1 = (function (){var statearr_31921 = state_31914;
(statearr_31921[(8)] = inst_31891);

return statearr_31921;
})();
var statearr_31922_33718 = state_31914__$1;
(statearr_31922_33718[(2)] = null);

(statearr_31922_33718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (4))){
var state_31914__$1 = state_31914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31914__$1,(7),ch);
} else {
if((state_val_31915 === (6))){
var inst_31909 = (state_31914[(2)]);
var state_31914__$1 = state_31914;
var statearr_31925_33722 = state_31914__$1;
(statearr_31925_33722[(2)] = inst_31909);

(statearr_31925_33722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (3))){
var inst_31911 = (state_31914[(2)]);
var inst_31912 = cljs.core.async.close_BANG_(out);
var state_31914__$1 = (function (){var statearr_31928 = state_31914;
(statearr_31928[(9)] = inst_31911);

return statearr_31928;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31914__$1,inst_31912);
} else {
if((state_val_31915 === (2))){
var inst_31891 = (state_31914[(8)]);
var inst_31893 = (inst_31891 < n);
var state_31914__$1 = state_31914;
if(cljs.core.truth_(inst_31893)){
var statearr_31931_33723 = state_31914__$1;
(statearr_31931_33723[(1)] = (4));

} else {
var statearr_31932_33724 = state_31914__$1;
(statearr_31932_33724[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (11))){
var inst_31891 = (state_31914[(8)]);
var inst_31901 = (state_31914[(2)]);
var inst_31902 = (inst_31891 + (1));
var inst_31891__$1 = inst_31902;
var state_31914__$1 = (function (){var statearr_31933 = state_31914;
(statearr_31933[(8)] = inst_31891__$1);

(statearr_31933[(10)] = inst_31901);

return statearr_31933;
})();
var statearr_31934_33725 = state_31914__$1;
(statearr_31934_33725[(2)] = null);

(statearr_31934_33725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (9))){
var state_31914__$1 = state_31914;
var statearr_31935_33726 = state_31914__$1;
(statearr_31935_33726[(2)] = null);

(statearr_31935_33726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (5))){
var state_31914__$1 = state_31914;
var statearr_31936_33727 = state_31914__$1;
(statearr_31936_33727[(2)] = null);

(statearr_31936_33727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (10))){
var inst_31906 = (state_31914[(2)]);
var state_31914__$1 = state_31914;
var statearr_31942_33740 = state_31914__$1;
(statearr_31942_33740[(2)] = inst_31906);

(statearr_31942_33740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (8))){
var inst_31896 = (state_31914[(7)]);
var state_31914__$1 = state_31914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31914__$1,(11),out,inst_31896);
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
});
return (function() {
var cljs$core$async$state_machine__29505__auto__ = null;
var cljs$core$async$state_machine__29505__auto____0 = (function (){
var statearr_31944 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31944[(0)] = cljs$core$async$state_machine__29505__auto__);

(statearr_31944[(1)] = (1));

return statearr_31944;
});
var cljs$core$async$state_machine__29505__auto____1 = (function (state_31914){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_31914);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e31945){var ex__29509__auto__ = e31945;
var statearr_31946_33748 = state_31914;
(statearr_31946_33748[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_31914[(4)]))){
var statearr_31947_33749 = state_31914;
(statearr_31947_33749[(1)] = cljs.core.first((state_31914[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33750 = state_31914;
state_31914 = G__33750;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$state_machine__29505__auto__ = function(state_31914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29505__auto____1.call(this,state_31914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29505__auto____0;
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29505__auto____1;
return cljs$core$async$state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_31948 = f__29714__auto__();
(statearr_31948[(6)] = c__29713__auto___33710);

return statearr_31948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31961 = (function (f,ch,meta31953,_,fn1,meta31962){
this.f = f;
this.ch = ch;
this.meta31953 = meta31953;
this._ = _;
this.fn1 = fn1;
this.meta31962 = meta31962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31963,meta31962__$1){
var self__ = this;
var _31963__$1 = this;
return (new cljs.core.async.t_cljs$core$async31961(self__.f,self__.ch,self__.meta31953,self__._,self__.fn1,meta31962__$1));
}));

(cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31963){
var self__ = this;
var _31963__$1 = this;
return self__.meta31962;
}));

(cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31951_SHARP_){
var G__31969 = (((p1__31951_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31951_SHARP_) : self__.f.call(null,p1__31951_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31969) : f1.call(null,G__31969));
});
}));

(cljs.core.async.t_cljs$core$async31961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31953","meta31953",1151916088,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31952","cljs.core.async/t_cljs$core$async31952",-247037796,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31962","meta31962",328271802,null)], null);
}));

(cljs.core.async.t_cljs$core$async31961.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31961");

(cljs.core.async.t_cljs$core$async31961.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31961");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31961.
 */
cljs.core.async.__GT_t_cljs$core$async31961 = (function cljs$core$async$__GT_t_cljs$core$async31961(f,ch,meta31953,_,fn1,meta31962){
return (new cljs.core.async.t_cljs$core$async31961(f,ch,meta31953,_,fn1,meta31962));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31952 = (function (f,ch,meta31953){
this.f = f;
this.ch = ch;
this.meta31953 = meta31953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31954,meta31953__$1){
var self__ = this;
var _31954__$1 = this;
return (new cljs.core.async.t_cljs$core$async31952(self__.f,self__.ch,meta31953__$1));
}));

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31954){
var self__ = this;
var _31954__$1 = this;
return self__.meta31953;
}));

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async31961(self__.f,self__.ch,self__.meta31953,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31970 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31970) : self__.f.call(null,G__31970));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31953","meta31953",1151916088,null)], null);
}));

(cljs.core.async.t_cljs$core$async31952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31952");

(cljs.core.async.t_cljs$core$async31952.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31952.
 */
cljs.core.async.__GT_t_cljs$core$async31952 = (function cljs$core$async$__GT_t_cljs$core$async31952(f,ch,meta31953){
return (new cljs.core.async.t_cljs$core$async31952(f,ch,meta31953));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async31952(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31978 = (function (f,ch,meta31979){
this.f = f;
this.ch = ch;
this.meta31979 = meta31979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31980,meta31979__$1){
var self__ = this;
var _31980__$1 = this;
return (new cljs.core.async.t_cljs$core$async31978(self__.f,self__.ch,meta31979__$1));
}));

(cljs.core.async.t_cljs$core$async31978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31980){
var self__ = this;
var _31980__$1 = this;
return self__.meta31979;
}));

(cljs.core.async.t_cljs$core$async31978.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31978.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31978.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31978.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31978.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31978.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31979","meta31979",-1149354127,null)], null);
}));

(cljs.core.async.t_cljs$core$async31978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31978");

(cljs.core.async.t_cljs$core$async31978.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31978.
 */
cljs.core.async.__GT_t_cljs$core$async31978 = (function cljs$core$async$__GT_t_cljs$core$async31978(f,ch,meta31979){
return (new cljs.core.async.t_cljs$core$async31978(f,ch,meta31979));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async31978(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31988 = (function (p,ch,meta31989){
this.p = p;
this.ch = ch;
this.meta31989 = meta31989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31990,meta31989__$1){
var self__ = this;
var _31990__$1 = this;
return (new cljs.core.async.t_cljs$core$async31988(self__.p,self__.ch,meta31989__$1));
}));

(cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31990){
var self__ = this;
var _31990__$1 = this;
return self__.meta31989;
}));

(cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31988.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31989","meta31989",1411291826,null)], null);
}));

(cljs.core.async.t_cljs$core$async31988.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31988");

(cljs.core.async.t_cljs$core$async31988.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31988");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31988.
 */
cljs.core.async.__GT_t_cljs$core$async31988 = (function cljs$core$async$__GT_t_cljs$core$async31988(p,ch,meta31989){
return (new cljs.core.async.t_cljs$core$async31988(p,ch,meta31989));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async31988(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32025 = arguments.length;
switch (G__32025) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29713__auto___33771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_32057){
var state_val_32058 = (state_32057[(1)]);
if((state_val_32058 === (7))){
var inst_32051 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32064_33772 = state_32057__$1;
(statearr_32064_33772[(2)] = inst_32051);

(statearr_32064_33772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (1))){
var state_32057__$1 = state_32057;
var statearr_32065_33773 = state_32057__$1;
(statearr_32065_33773[(2)] = null);

(statearr_32065_33773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (4))){
var inst_32036 = (state_32057[(7)]);
var inst_32036__$1 = (state_32057[(2)]);
var inst_32038 = (inst_32036__$1 == null);
var state_32057__$1 = (function (){var statearr_32067 = state_32057;
(statearr_32067[(7)] = inst_32036__$1);

return statearr_32067;
})();
if(cljs.core.truth_(inst_32038)){
var statearr_32070_33774 = state_32057__$1;
(statearr_32070_33774[(1)] = (5));

} else {
var statearr_32072_33775 = state_32057__$1;
(statearr_32072_33775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (6))){
var inst_32036 = (state_32057[(7)]);
var inst_32042 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32036) : p.call(null,inst_32036));
var state_32057__$1 = state_32057;
if(cljs.core.truth_(inst_32042)){
var statearr_32074_33780 = state_32057__$1;
(statearr_32074_33780[(1)] = (8));

} else {
var statearr_32075_33781 = state_32057__$1;
(statearr_32075_33781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (3))){
var inst_32053 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32057__$1,inst_32053);
} else {
if((state_val_32058 === (2))){
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32057__$1,(4),ch);
} else {
if((state_val_32058 === (11))){
var inst_32045 = (state_32057[(2)]);
var state_32057__$1 = state_32057;
var statearr_32088_33785 = state_32057__$1;
(statearr_32088_33785[(2)] = inst_32045);

(statearr_32088_33785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (9))){
var state_32057__$1 = state_32057;
var statearr_32097_33786 = state_32057__$1;
(statearr_32097_33786[(2)] = null);

(statearr_32097_33786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (5))){
var inst_32040 = cljs.core.async.close_BANG_(out);
var state_32057__$1 = state_32057;
var statearr_32099_33787 = state_32057__$1;
(statearr_32099_33787[(2)] = inst_32040);

(statearr_32099_33787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (10))){
var inst_32048 = (state_32057[(2)]);
var state_32057__$1 = (function (){var statearr_32105 = state_32057;
(statearr_32105[(8)] = inst_32048);

return statearr_32105;
})();
var statearr_32107_33788 = state_32057__$1;
(statearr_32107_33788[(2)] = null);

(statearr_32107_33788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32058 === (8))){
var inst_32036 = (state_32057[(7)]);
var state_32057__$1 = state_32057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32057__$1,(11),out,inst_32036);
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
});
return (function() {
var cljs$core$async$state_machine__29505__auto__ = null;
var cljs$core$async$state_machine__29505__auto____0 = (function (){
var statearr_32111 = [null,null,null,null,null,null,null,null,null];
(statearr_32111[(0)] = cljs$core$async$state_machine__29505__auto__);

(statearr_32111[(1)] = (1));

return statearr_32111;
});
var cljs$core$async$state_machine__29505__auto____1 = (function (state_32057){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_32057);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e32115){var ex__29509__auto__ = e32115;
var statearr_32116_33793 = state_32057;
(statearr_32116_33793[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_32057[(4)]))){
var statearr_32118_33794 = state_32057;
(statearr_32118_33794[(1)] = cljs.core.first((state_32057[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33795 = state_32057;
state_32057 = G__33795;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$state_machine__29505__auto__ = function(state_32057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29505__auto____1.call(this,state_32057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29505__auto____0;
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29505__auto____1;
return cljs$core$async$state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_32119 = f__29714__auto__();
(statearr_32119[(6)] = c__29713__auto___33771);

return statearr_32119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32124 = arguments.length;
switch (G__32124) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_32217){
var state_val_32218 = (state_32217[(1)]);
if((state_val_32218 === (7))){
var inst_32211 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
var statearr_32226_33800 = state_32217__$1;
(statearr_32226_33800[(2)] = inst_32211);

(statearr_32226_33800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (20))){
var inst_32177 = (state_32217[(7)]);
var inst_32191 = (state_32217[(2)]);
var inst_32192 = cljs.core.next(inst_32177);
var inst_32153 = inst_32192;
var inst_32154 = null;
var inst_32155 = (0);
var inst_32156 = (0);
var state_32217__$1 = (function (){var statearr_32234 = state_32217;
(statearr_32234[(8)] = inst_32153);

(statearr_32234[(9)] = inst_32191);

(statearr_32234[(10)] = inst_32156);

(statearr_32234[(11)] = inst_32155);

(statearr_32234[(12)] = inst_32154);

return statearr_32234;
})();
var statearr_32238_33801 = state_32217__$1;
(statearr_32238_33801[(2)] = null);

(statearr_32238_33801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (1))){
var state_32217__$1 = state_32217;
var statearr_32243_33802 = state_32217__$1;
(statearr_32243_33802[(2)] = null);

(statearr_32243_33802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (4))){
var inst_32140 = (state_32217[(13)]);
var inst_32140__$1 = (state_32217[(2)]);
var inst_32141 = (inst_32140__$1 == null);
var state_32217__$1 = (function (){var statearr_32246 = state_32217;
(statearr_32246[(13)] = inst_32140__$1);

return statearr_32246;
})();
if(cljs.core.truth_(inst_32141)){
var statearr_32256_33806 = state_32217__$1;
(statearr_32256_33806[(1)] = (5));

} else {
var statearr_32257_33808 = state_32217__$1;
(statearr_32257_33808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (15))){
var state_32217__$1 = state_32217;
var statearr_32262_33809 = state_32217__$1;
(statearr_32262_33809[(2)] = null);

(statearr_32262_33809[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (21))){
var state_32217__$1 = state_32217;
var statearr_32267_33810 = state_32217__$1;
(statearr_32267_33810[(2)] = null);

(statearr_32267_33810[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (13))){
var inst_32153 = (state_32217[(8)]);
var inst_32156 = (state_32217[(10)]);
var inst_32155 = (state_32217[(11)]);
var inst_32154 = (state_32217[(12)]);
var inst_32168 = (state_32217[(2)]);
var inst_32174 = (inst_32156 + (1));
var tmp32258 = inst_32153;
var tmp32259 = inst_32155;
var tmp32260 = inst_32154;
var inst_32153__$1 = tmp32258;
var inst_32154__$1 = tmp32260;
var inst_32155__$1 = tmp32259;
var inst_32156__$1 = inst_32174;
var state_32217__$1 = (function (){var statearr_32294 = state_32217;
(statearr_32294[(8)] = inst_32153__$1);

(statearr_32294[(10)] = inst_32156__$1);

(statearr_32294[(11)] = inst_32155__$1);

(statearr_32294[(12)] = inst_32154__$1);

(statearr_32294[(14)] = inst_32168);

return statearr_32294;
})();
var statearr_32296_33817 = state_32217__$1;
(statearr_32296_33817[(2)] = null);

(statearr_32296_33817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (22))){
var state_32217__$1 = state_32217;
var statearr_32301_33822 = state_32217__$1;
(statearr_32301_33822[(2)] = null);

(statearr_32301_33822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (6))){
var inst_32140 = (state_32217[(13)]);
var inst_32150 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32140) : f.call(null,inst_32140));
var inst_32151 = cljs.core.seq(inst_32150);
var inst_32153 = inst_32151;
var inst_32154 = null;
var inst_32155 = (0);
var inst_32156 = (0);
var state_32217__$1 = (function (){var statearr_32303 = state_32217;
(statearr_32303[(8)] = inst_32153);

(statearr_32303[(10)] = inst_32156);

(statearr_32303[(11)] = inst_32155);

(statearr_32303[(12)] = inst_32154);

return statearr_32303;
})();
var statearr_32304_33826 = state_32217__$1;
(statearr_32304_33826[(2)] = null);

(statearr_32304_33826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (17))){
var inst_32177 = (state_32217[(7)]);
var inst_32184 = cljs.core.chunk_first(inst_32177);
var inst_32185 = cljs.core.chunk_rest(inst_32177);
var inst_32186 = cljs.core.count(inst_32184);
var inst_32153 = inst_32185;
var inst_32154 = inst_32184;
var inst_32155 = inst_32186;
var inst_32156 = (0);
var state_32217__$1 = (function (){var statearr_32305 = state_32217;
(statearr_32305[(8)] = inst_32153);

(statearr_32305[(10)] = inst_32156);

(statearr_32305[(11)] = inst_32155);

(statearr_32305[(12)] = inst_32154);

return statearr_32305;
})();
var statearr_32306_33832 = state_32217__$1;
(statearr_32306_33832[(2)] = null);

(statearr_32306_33832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (3))){
var inst_32213 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32217__$1,inst_32213);
} else {
if((state_val_32218 === (12))){
var inst_32201 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
var statearr_32307_33834 = state_32217__$1;
(statearr_32307_33834[(2)] = inst_32201);

(statearr_32307_33834[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (2))){
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32217__$1,(4),in$);
} else {
if((state_val_32218 === (23))){
var inst_32209 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
var statearr_32311_33839 = state_32217__$1;
(statearr_32311_33839[(2)] = inst_32209);

(statearr_32311_33839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (19))){
var inst_32195 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
var statearr_32313_33843 = state_32217__$1;
(statearr_32313_33843[(2)] = inst_32195);

(statearr_32313_33843[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (11))){
var inst_32153 = (state_32217[(8)]);
var inst_32177 = (state_32217[(7)]);
var inst_32177__$1 = cljs.core.seq(inst_32153);
var state_32217__$1 = (function (){var statearr_32315 = state_32217;
(statearr_32315[(7)] = inst_32177__$1);

return statearr_32315;
})();
if(inst_32177__$1){
var statearr_32318_33844 = state_32217__$1;
(statearr_32318_33844[(1)] = (14));

} else {
var statearr_32320_33845 = state_32217__$1;
(statearr_32320_33845[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (9))){
var inst_32203 = (state_32217[(2)]);
var inst_32204 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32217__$1 = (function (){var statearr_32323 = state_32217;
(statearr_32323[(15)] = inst_32203);

return statearr_32323;
})();
if(cljs.core.truth_(inst_32204)){
var statearr_32325_33849 = state_32217__$1;
(statearr_32325_33849[(1)] = (21));

} else {
var statearr_32326_33850 = state_32217__$1;
(statearr_32326_33850[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (5))){
var inst_32143 = cljs.core.async.close_BANG_(out);
var state_32217__$1 = state_32217;
var statearr_32331_33852 = state_32217__$1;
(statearr_32331_33852[(2)] = inst_32143);

(statearr_32331_33852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (14))){
var inst_32177 = (state_32217[(7)]);
var inst_32181 = cljs.core.chunked_seq_QMARK_(inst_32177);
var state_32217__$1 = state_32217;
if(inst_32181){
var statearr_32333_33853 = state_32217__$1;
(statearr_32333_33853[(1)] = (17));

} else {
var statearr_32334_33854 = state_32217__$1;
(statearr_32334_33854[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (16))){
var inst_32198 = (state_32217[(2)]);
var state_32217__$1 = state_32217;
var statearr_32343_33855 = state_32217__$1;
(statearr_32343_33855[(2)] = inst_32198);

(statearr_32343_33855[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32218 === (10))){
var inst_32156 = (state_32217[(10)]);
var inst_32154 = (state_32217[(12)]);
var inst_32166 = cljs.core._nth(inst_32154,inst_32156);
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32217__$1,(13),out,inst_32166);
} else {
if((state_val_32218 === (18))){
var inst_32177 = (state_32217[(7)]);
var inst_32189 = cljs.core.first(inst_32177);
var state_32217__$1 = state_32217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32217__$1,(20),out,inst_32189);
} else {
if((state_val_32218 === (8))){
var inst_32156 = (state_32217[(10)]);
var inst_32155 = (state_32217[(11)]);
var inst_32159 = (inst_32156 < inst_32155);
var inst_32160 = inst_32159;
var state_32217__$1 = state_32217;
if(cljs.core.truth_(inst_32160)){
var statearr_32348_33857 = state_32217__$1;
(statearr_32348_33857[(1)] = (10));

} else {
var statearr_32349_33862 = state_32217__$1;
(statearr_32349_33862[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29505__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29505__auto____0 = (function (){
var statearr_32356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32356[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29505__auto__);

(statearr_32356[(1)] = (1));

return statearr_32356;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29505__auto____1 = (function (state_32217){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_32217);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e32358){var ex__29509__auto__ = e32358;
var statearr_32359_33867 = state_32217;
(statearr_32359_33867[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_32217[(4)]))){
var statearr_32363_33873 = state_32217;
(statearr_32363_33873[(1)] = cljs.core.first((state_32217[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33874 = state_32217;
state_32217 = G__33874;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29505__auto__ = function(state_32217){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29505__auto____1.call(this,state_32217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29505__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29505__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_32369 = f__29714__auto__();
(statearr_32369[(6)] = c__29713__auto__);

return statearr_32369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));

return c__29713__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32376 = arguments.length;
switch (G__32376) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32396 = arguments.length;
switch (G__32396) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32423 = arguments.length;
switch (G__32423) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29713__auto___33878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_32460){
var state_val_32461 = (state_32460[(1)]);
if((state_val_32461 === (7))){
var inst_32455 = (state_32460[(2)]);
var state_32460__$1 = state_32460;
var statearr_32462_33879 = state_32460__$1;
(statearr_32462_33879[(2)] = inst_32455);

(statearr_32462_33879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (1))){
var inst_32433 = null;
var state_32460__$1 = (function (){var statearr_32463 = state_32460;
(statearr_32463[(7)] = inst_32433);

return statearr_32463;
})();
var statearr_32464_33880 = state_32460__$1;
(statearr_32464_33880[(2)] = null);

(statearr_32464_33880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (4))){
var inst_32436 = (state_32460[(8)]);
var inst_32436__$1 = (state_32460[(2)]);
var inst_32440 = (inst_32436__$1 == null);
var inst_32441 = cljs.core.not(inst_32440);
var state_32460__$1 = (function (){var statearr_32465 = state_32460;
(statearr_32465[(8)] = inst_32436__$1);

return statearr_32465;
})();
if(inst_32441){
var statearr_32466_33886 = state_32460__$1;
(statearr_32466_33886[(1)] = (5));

} else {
var statearr_32469_33887 = state_32460__$1;
(statearr_32469_33887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (6))){
var state_32460__$1 = state_32460;
var statearr_32472_33889 = state_32460__$1;
(statearr_32472_33889[(2)] = null);

(statearr_32472_33889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (3))){
var inst_32457 = (state_32460[(2)]);
var inst_32458 = cljs.core.async.close_BANG_(out);
var state_32460__$1 = (function (){var statearr_32475 = state_32460;
(statearr_32475[(9)] = inst_32457);

return statearr_32475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32460__$1,inst_32458);
} else {
if((state_val_32461 === (2))){
var state_32460__$1 = state_32460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32460__$1,(4),ch);
} else {
if((state_val_32461 === (11))){
var inst_32436 = (state_32460[(8)]);
var inst_32449 = (state_32460[(2)]);
var inst_32433 = inst_32436;
var state_32460__$1 = (function (){var statearr_32481 = state_32460;
(statearr_32481[(7)] = inst_32433);

(statearr_32481[(10)] = inst_32449);

return statearr_32481;
})();
var statearr_32482_33893 = state_32460__$1;
(statearr_32482_33893[(2)] = null);

(statearr_32482_33893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (9))){
var inst_32436 = (state_32460[(8)]);
var state_32460__$1 = state_32460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32460__$1,(11),out,inst_32436);
} else {
if((state_val_32461 === (5))){
var inst_32436 = (state_32460[(8)]);
var inst_32433 = (state_32460[(7)]);
var inst_32444 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32436,inst_32433);
var state_32460__$1 = state_32460;
if(inst_32444){
var statearr_32484_33897 = state_32460__$1;
(statearr_32484_33897[(1)] = (8));

} else {
var statearr_32485_33898 = state_32460__$1;
(statearr_32485_33898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (10))){
var inst_32452 = (state_32460[(2)]);
var state_32460__$1 = state_32460;
var statearr_32486_33899 = state_32460__$1;
(statearr_32486_33899[(2)] = inst_32452);

(statearr_32486_33899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (8))){
var inst_32433 = (state_32460[(7)]);
var tmp32483 = inst_32433;
var inst_32433__$1 = tmp32483;
var state_32460__$1 = (function (){var statearr_32487 = state_32460;
(statearr_32487[(7)] = inst_32433__$1);

return statearr_32487;
})();
var statearr_32489_33904 = state_32460__$1;
(statearr_32489_33904[(2)] = null);

(statearr_32489_33904[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29505__auto__ = null;
var cljs$core$async$state_machine__29505__auto____0 = (function (){
var statearr_32493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32493[(0)] = cljs$core$async$state_machine__29505__auto__);

(statearr_32493[(1)] = (1));

return statearr_32493;
});
var cljs$core$async$state_machine__29505__auto____1 = (function (state_32460){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_32460);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e32498){var ex__29509__auto__ = e32498;
var statearr_32499_33906 = state_32460;
(statearr_32499_33906[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_32460[(4)]))){
var statearr_32504_33907 = state_32460;
(statearr_32504_33907[(1)] = cljs.core.first((state_32460[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33908 = state_32460;
state_32460 = G__33908;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$state_machine__29505__auto__ = function(state_32460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29505__auto____1.call(this,state_32460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29505__auto____0;
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29505__auto____1;
return cljs$core$async$state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_32510 = f__29714__auto__();
(statearr_32510[(6)] = c__29713__auto___33878);

return statearr_32510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32513 = arguments.length;
switch (G__32513) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29713__auto___33913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_32553){
var state_val_32554 = (state_32553[(1)]);
if((state_val_32554 === (7))){
var inst_32549 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32559_33914 = state_32553__$1;
(statearr_32559_33914[(2)] = inst_32549);

(statearr_32559_33914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (1))){
var inst_32514 = (new Array(n));
var inst_32515 = inst_32514;
var inst_32516 = (0);
var state_32553__$1 = (function (){var statearr_32569 = state_32553;
(statearr_32569[(7)] = inst_32515);

(statearr_32569[(8)] = inst_32516);

return statearr_32569;
})();
var statearr_32571_33915 = state_32553__$1;
(statearr_32571_33915[(2)] = null);

(statearr_32571_33915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (4))){
var inst_32520 = (state_32553[(9)]);
var inst_32520__$1 = (state_32553[(2)]);
var inst_32521 = (inst_32520__$1 == null);
var inst_32522 = cljs.core.not(inst_32521);
var state_32553__$1 = (function (){var statearr_32572 = state_32553;
(statearr_32572[(9)] = inst_32520__$1);

return statearr_32572;
})();
if(inst_32522){
var statearr_32576_33916 = state_32553__$1;
(statearr_32576_33916[(1)] = (5));

} else {
var statearr_32577_33917 = state_32553__$1;
(statearr_32577_33917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (15))){
var inst_32543 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32578_33918 = state_32553__$1;
(statearr_32578_33918[(2)] = inst_32543);

(statearr_32578_33918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (13))){
var state_32553__$1 = state_32553;
var statearr_32579_33919 = state_32553__$1;
(statearr_32579_33919[(2)] = null);

(statearr_32579_33919[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (6))){
var inst_32516 = (state_32553[(8)]);
var inst_32539 = (inst_32516 > (0));
var state_32553__$1 = state_32553;
if(cljs.core.truth_(inst_32539)){
var statearr_32581_33920 = state_32553__$1;
(statearr_32581_33920[(1)] = (12));

} else {
var statearr_32582_33921 = state_32553__$1;
(statearr_32582_33921[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (3))){
var inst_32551 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32553__$1,inst_32551);
} else {
if((state_val_32554 === (12))){
var inst_32515 = (state_32553[(7)]);
var inst_32541 = cljs.core.vec(inst_32515);
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32553__$1,(15),out,inst_32541);
} else {
if((state_val_32554 === (2))){
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32553__$1,(4),ch);
} else {
if((state_val_32554 === (11))){
var inst_32533 = (state_32553[(2)]);
var inst_32534 = (new Array(n));
var inst_32515 = inst_32534;
var inst_32516 = (0);
var state_32553__$1 = (function (){var statearr_32587 = state_32553;
(statearr_32587[(7)] = inst_32515);

(statearr_32587[(10)] = inst_32533);

(statearr_32587[(8)] = inst_32516);

return statearr_32587;
})();
var statearr_32589_33922 = state_32553__$1;
(statearr_32589_33922[(2)] = null);

(statearr_32589_33922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (9))){
var inst_32515 = (state_32553[(7)]);
var inst_32531 = cljs.core.vec(inst_32515);
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32553__$1,(11),out,inst_32531);
} else {
if((state_val_32554 === (5))){
var inst_32515 = (state_32553[(7)]);
var inst_32516 = (state_32553[(8)]);
var inst_32525 = (state_32553[(11)]);
var inst_32520 = (state_32553[(9)]);
var inst_32524 = (inst_32515[inst_32516] = inst_32520);
var inst_32525__$1 = (inst_32516 + (1));
var inst_32526 = (inst_32525__$1 < n);
var state_32553__$1 = (function (){var statearr_32594 = state_32553;
(statearr_32594[(12)] = inst_32524);

(statearr_32594[(11)] = inst_32525__$1);

return statearr_32594;
})();
if(cljs.core.truth_(inst_32526)){
var statearr_32595_33925 = state_32553__$1;
(statearr_32595_33925[(1)] = (8));

} else {
var statearr_32596_33926 = state_32553__$1;
(statearr_32596_33926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (14))){
var inst_32546 = (state_32553[(2)]);
var inst_32547 = cljs.core.async.close_BANG_(out);
var state_32553__$1 = (function (){var statearr_32600 = state_32553;
(statearr_32600[(13)] = inst_32546);

return statearr_32600;
})();
var statearr_32601_33927 = state_32553__$1;
(statearr_32601_33927[(2)] = inst_32547);

(statearr_32601_33927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (10))){
var inst_32537 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32605_33928 = state_32553__$1;
(statearr_32605_33928[(2)] = inst_32537);

(statearr_32605_33928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32554 === (8))){
var inst_32515 = (state_32553[(7)]);
var inst_32525 = (state_32553[(11)]);
var tmp32599 = inst_32515;
var inst_32515__$1 = tmp32599;
var inst_32516 = inst_32525;
var state_32553__$1 = (function (){var statearr_32614 = state_32553;
(statearr_32614[(7)] = inst_32515__$1);

(statearr_32614[(8)] = inst_32516);

return statearr_32614;
})();
var statearr_32623_33933 = state_32553__$1;
(statearr_32623_33933[(2)] = null);

(statearr_32623_33933[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29505__auto__ = null;
var cljs$core$async$state_machine__29505__auto____0 = (function (){
var statearr_32628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32628[(0)] = cljs$core$async$state_machine__29505__auto__);

(statearr_32628[(1)] = (1));

return statearr_32628;
});
var cljs$core$async$state_machine__29505__auto____1 = (function (state_32553){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_32553);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e32630){var ex__29509__auto__ = e32630;
var statearr_32631_33935 = state_32553;
(statearr_32631_33935[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_32553[(4)]))){
var statearr_32632_33936 = state_32553;
(statearr_32632_33936[(1)] = cljs.core.first((state_32553[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33937 = state_32553;
state_32553 = G__33937;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$state_machine__29505__auto__ = function(state_32553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29505__auto____1.call(this,state_32553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29505__auto____0;
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29505__auto____1;
return cljs$core$async$state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_32640 = f__29714__auto__();
(statearr_32640[(6)] = c__29713__auto___33913);

return statearr_32640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32647 = arguments.length;
switch (G__32647) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29713__auto___33943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29714__auto__ = (function (){var switch__29503__auto__ = (function (state_32704){
var state_val_32706 = (state_32704[(1)]);
if((state_val_32706 === (7))){
var inst_32700 = (state_32704[(2)]);
var state_32704__$1 = state_32704;
var statearr_32707_33944 = state_32704__$1;
(statearr_32707_33944[(2)] = inst_32700);

(statearr_32707_33944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (1))){
var inst_32654 = [];
var inst_32655 = inst_32654;
var inst_32656 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32704__$1 = (function (){var statearr_32708 = state_32704;
(statearr_32708[(7)] = inst_32655);

(statearr_32708[(8)] = inst_32656);

return statearr_32708;
})();
var statearr_32709_33966 = state_32704__$1;
(statearr_32709_33966[(2)] = null);

(statearr_32709_33966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (4))){
var inst_32660 = (state_32704[(9)]);
var inst_32660__$1 = (state_32704[(2)]);
var inst_32664 = (inst_32660__$1 == null);
var inst_32665 = cljs.core.not(inst_32664);
var state_32704__$1 = (function (){var statearr_32718 = state_32704;
(statearr_32718[(9)] = inst_32660__$1);

return statearr_32718;
})();
if(inst_32665){
var statearr_32719_33967 = state_32704__$1;
(statearr_32719_33967[(1)] = (5));

} else {
var statearr_32721_33968 = state_32704__$1;
(statearr_32721_33968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (15))){
var inst_32655 = (state_32704[(7)]);
var inst_32692 = cljs.core.vec(inst_32655);
var state_32704__$1 = state_32704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32704__$1,(18),out,inst_32692);
} else {
if((state_val_32706 === (13))){
var inst_32687 = (state_32704[(2)]);
var state_32704__$1 = state_32704;
var statearr_32722_33969 = state_32704__$1;
(statearr_32722_33969[(2)] = inst_32687);

(statearr_32722_33969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (6))){
var inst_32655 = (state_32704[(7)]);
var inst_32689 = inst_32655.length;
var inst_32690 = (inst_32689 > (0));
var state_32704__$1 = state_32704;
if(cljs.core.truth_(inst_32690)){
var statearr_32727_33970 = state_32704__$1;
(statearr_32727_33970[(1)] = (15));

} else {
var statearr_32729_33977 = state_32704__$1;
(statearr_32729_33977[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (17))){
var inst_32697 = (state_32704[(2)]);
var inst_32698 = cljs.core.async.close_BANG_(out);
var state_32704__$1 = (function (){var statearr_32730 = state_32704;
(statearr_32730[(10)] = inst_32697);

return statearr_32730;
})();
var statearr_32731_33985 = state_32704__$1;
(statearr_32731_33985[(2)] = inst_32698);

(statearr_32731_33985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (3))){
var inst_32702 = (state_32704[(2)]);
var state_32704__$1 = state_32704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32704__$1,inst_32702);
} else {
if((state_val_32706 === (12))){
var inst_32655 = (state_32704[(7)]);
var inst_32680 = cljs.core.vec(inst_32655);
var state_32704__$1 = state_32704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32704__$1,(14),out,inst_32680);
} else {
if((state_val_32706 === (2))){
var state_32704__$1 = state_32704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32704__$1,(4),ch);
} else {
if((state_val_32706 === (11))){
var inst_32668 = (state_32704[(11)]);
var inst_32655 = (state_32704[(7)]);
var inst_32660 = (state_32704[(9)]);
var inst_32677 = inst_32655.push(inst_32660);
var tmp32736 = inst_32655;
var inst_32655__$1 = tmp32736;
var inst_32656 = inst_32668;
var state_32704__$1 = (function (){var statearr_32737 = state_32704;
(statearr_32737[(7)] = inst_32655__$1);

(statearr_32737[(8)] = inst_32656);

(statearr_32737[(12)] = inst_32677);

return statearr_32737;
})();
var statearr_32738_33986 = state_32704__$1;
(statearr_32738_33986[(2)] = null);

(statearr_32738_33986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (9))){
var inst_32656 = (state_32704[(8)]);
var inst_32673 = cljs.core.keyword_identical_QMARK_(inst_32656,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32704__$1 = state_32704;
var statearr_32744_33988 = state_32704__$1;
(statearr_32744_33988[(2)] = inst_32673);

(statearr_32744_33988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (5))){
var inst_32668 = (state_32704[(11)]);
var inst_32656 = (state_32704[(8)]);
var inst_32670 = (state_32704[(13)]);
var inst_32660 = (state_32704[(9)]);
var inst_32668__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32660) : f.call(null,inst_32660));
var inst_32670__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32668__$1,inst_32656);
var state_32704__$1 = (function (){var statearr_32746 = state_32704;
(statearr_32746[(11)] = inst_32668__$1);

(statearr_32746[(13)] = inst_32670__$1);

return statearr_32746;
})();
if(inst_32670__$1){
var statearr_32747_33989 = state_32704__$1;
(statearr_32747_33989[(1)] = (8));

} else {
var statearr_32748_33990 = state_32704__$1;
(statearr_32748_33990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (14))){
var inst_32668 = (state_32704[(11)]);
var inst_32660 = (state_32704[(9)]);
var inst_32682 = (state_32704[(2)]);
var inst_32683 = [];
var inst_32684 = inst_32683.push(inst_32660);
var inst_32655 = inst_32683;
var inst_32656 = inst_32668;
var state_32704__$1 = (function (){var statearr_32749 = state_32704;
(statearr_32749[(14)] = inst_32682);

(statearr_32749[(7)] = inst_32655);

(statearr_32749[(15)] = inst_32684);

(statearr_32749[(8)] = inst_32656);

return statearr_32749;
})();
var statearr_32750_33994 = state_32704__$1;
(statearr_32750_33994[(2)] = null);

(statearr_32750_33994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (16))){
var state_32704__$1 = state_32704;
var statearr_32751_33995 = state_32704__$1;
(statearr_32751_33995[(2)] = null);

(statearr_32751_33995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (10))){
var inst_32675 = (state_32704[(2)]);
var state_32704__$1 = state_32704;
if(cljs.core.truth_(inst_32675)){
var statearr_32757_34002 = state_32704__$1;
(statearr_32757_34002[(1)] = (11));

} else {
var statearr_32762_34004 = state_32704__$1;
(statearr_32762_34004[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (18))){
var inst_32694 = (state_32704[(2)]);
var state_32704__$1 = state_32704;
var statearr_32764_34008 = state_32704__$1;
(statearr_32764_34008[(2)] = inst_32694);

(statearr_32764_34008[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (8))){
var inst_32670 = (state_32704[(13)]);
var state_32704__$1 = state_32704;
var statearr_32765_34009 = state_32704__$1;
(statearr_32765_34009[(2)] = inst_32670);

(statearr_32765_34009[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__29505__auto__ = null;
var cljs$core$async$state_machine__29505__auto____0 = (function (){
var statearr_32770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32770[(0)] = cljs$core$async$state_machine__29505__auto__);

(statearr_32770[(1)] = (1));

return statearr_32770;
});
var cljs$core$async$state_machine__29505__auto____1 = (function (state_32704){
while(true){
var ret_value__29506__auto__ = (function (){try{while(true){
var result__29507__auto__ = switch__29503__auto__(state_32704);
if(cljs.core.keyword_identical_QMARK_(result__29507__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29507__auto__;
}
break;
}
}catch (e32772){var ex__29509__auto__ = e32772;
var statearr_32773_34010 = state_32704;
(statearr_32773_34010[(2)] = ex__29509__auto__);


if(cljs.core.seq((state_32704[(4)]))){
var statearr_32774_34011 = state_32704;
(statearr_32774_34011[(1)] = cljs.core.first((state_32704[(4)])));

} else {
throw ex__29509__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29506__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34014 = state_32704;
state_32704 = G__34014;
continue;
} else {
return ret_value__29506__auto__;
}
break;
}
});
cljs$core$async$state_machine__29505__auto__ = function(state_32704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29505__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29505__auto____1.call(this,state_32704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29505__auto____0;
cljs$core$async$state_machine__29505__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29505__auto____1;
return cljs$core$async$state_machine__29505__auto__;
})()
})();
var state__29715__auto__ = (function (){var statearr_32779 = f__29714__auto__();
(statearr_32779[(6)] = c__29713__auto___33943);

return statearr_32779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29715__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
