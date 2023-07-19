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
cljs.core.async.t_cljs$core$async29848 = (function (f,blockable,meta29849){
this.f = f;
this.blockable = blockable;
this.meta29849 = meta29849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29850,meta29849__$1){
var self__ = this;
var _29850__$1 = this;
return (new cljs.core.async.t_cljs$core$async29848(self__.f,self__.blockable,meta29849__$1));
}));

(cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29850){
var self__ = this;
var _29850__$1 = this;
return self__.meta29849;
}));

(cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29849","meta29849",639517567,null)], null);
}));

(cljs.core.async.t_cljs$core$async29848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29848");

(cljs.core.async.t_cljs$core$async29848.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29848.
 */
cljs.core.async.__GT_t_cljs$core$async29848 = (function cljs$core$async$__GT_t_cljs$core$async29848(f,blockable,meta29849){
return (new cljs.core.async.t_cljs$core$async29848(f,blockable,meta29849));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29846 = arguments.length;
switch (G__29846) {
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
return (new cljs.core.async.t_cljs$core$async29848(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29876 = arguments.length;
switch (G__29876) {
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
var G__29892 = arguments.length;
switch (G__29892) {
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
var G__29905 = arguments.length;
switch (G__29905) {
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
var val_33265 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33265) : fn1.call(null,val_33265));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33265) : fn1.call(null,val_33265));
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
var G__29930 = arguments.length;
switch (G__29930) {
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
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
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
var n__5636__auto___33280 = n;
var x_33281 = (0);
while(true){
if((x_33281 < n__5636__auto___33280)){
(a[x_33281] = x_33281);

var G__33283 = (x_33281 + (1));
x_33281 = G__33283;
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
cljs.core.async.t_cljs$core$async29989 = (function (flag,meta29990){
this.flag = flag;
this.meta29990 = meta29990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29991,meta29990__$1){
var self__ = this;
var _29991__$1 = this;
return (new cljs.core.async.t_cljs$core$async29989(self__.flag,meta29990__$1));
}));

(cljs.core.async.t_cljs$core$async29989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29991){
var self__ = this;
var _29991__$1 = this;
return self__.meta29990;
}));

(cljs.core.async.t_cljs$core$async29989.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29989.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29990","meta29990",484118672,null)], null);
}));

(cljs.core.async.t_cljs$core$async29989.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29989");

(cljs.core.async.t_cljs$core$async29989.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29989");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29989.
 */
cljs.core.async.__GT_t_cljs$core$async29989 = (function cljs$core$async$__GT_t_cljs$core$async29989(flag,meta29990){
return (new cljs.core.async.t_cljs$core$async29989(flag,meta29990));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async29989(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30015 = (function (flag,cb,meta30016){
this.flag = flag;
this.cb = cb;
this.meta30016 = meta30016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30017,meta30016__$1){
var self__ = this;
var _30017__$1 = this;
return (new cljs.core.async.t_cljs$core$async30015(self__.flag,self__.cb,meta30016__$1));
}));

(cljs.core.async.t_cljs$core$async30015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30017){
var self__ = this;
var _30017__$1 = this;
return self__.meta30016;
}));

(cljs.core.async.t_cljs$core$async30015.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30015.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30016","meta30016",168228373,null)], null);
}));

(cljs.core.async.t_cljs$core$async30015.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30015");

(cljs.core.async.t_cljs$core$async30015.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30015");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30015.
 */
cljs.core.async.__GT_t_cljs$core$async30015 = (function cljs$core$async$__GT_t_cljs$core$async30015(flag,cb,meta30016){
return (new cljs.core.async.t_cljs$core$async30015(flag,cb,meta30016));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async30015(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30094_SHARP_){
var G__30108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30094_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30108) : fret.call(null,G__30108));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30095_SHARP_){
var G__30109 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30095_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30109) : fret.call(null,G__30109));
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
var G__33305 = (i + (1));
i = G__33305;
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
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
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
var len__5769__auto___33310 = arguments.length;
var i__5770__auto___33311 = (0);
while(true){
if((i__5770__auto___33311 < len__5769__auto___33310)){
args__5775__auto__.push((arguments[i__5770__auto___33311]));

var G__33312 = (i__5770__auto___33311 + (1));
i__5770__auto___33311 = G__33312;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30158){
var map__30159 = p__30158;
var map__30159__$1 = cljs.core.__destructure_map(map__30159);
var opts = map__30159__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30137){
var G__30138 = cljs.core.first(seq30137);
var seq30137__$1 = cljs.core.next(seq30137);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30138,seq30137__$1);
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
var G__30217 = arguments.length;
switch (G__30217) {
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
var c__29736__auto___33326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_30292){
var state_val_30294 = (state_30292[(1)]);
if((state_val_30294 === (7))){
var inst_30285 = (state_30292[(2)]);
var state_30292__$1 = state_30292;
var statearr_30303_33327 = state_30292__$1;
(statearr_30303_33327[(2)] = inst_30285);

(statearr_30303_33327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (1))){
var state_30292__$1 = state_30292;
var statearr_30314_33329 = state_30292__$1;
(statearr_30314_33329[(2)] = null);

(statearr_30314_33329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (4))){
var inst_30261 = (state_30292[(7)]);
var inst_30261__$1 = (state_30292[(2)]);
var inst_30262 = (inst_30261__$1 == null);
var state_30292__$1 = (function (){var statearr_30321 = state_30292;
(statearr_30321[(7)] = inst_30261__$1);

return statearr_30321;
})();
if(cljs.core.truth_(inst_30262)){
var statearr_30323_33331 = state_30292__$1;
(statearr_30323_33331[(1)] = (5));

} else {
var statearr_30324_33332 = state_30292__$1;
(statearr_30324_33332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (13))){
var state_30292__$1 = state_30292;
var statearr_30329_33334 = state_30292__$1;
(statearr_30329_33334[(2)] = null);

(statearr_30329_33334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (6))){
var inst_30261 = (state_30292[(7)]);
var state_30292__$1 = state_30292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30292__$1,(11),to,inst_30261);
} else {
if((state_val_30294 === (3))){
var inst_30287 = (state_30292[(2)]);
var state_30292__$1 = state_30292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30292__$1,inst_30287);
} else {
if((state_val_30294 === (12))){
var state_30292__$1 = state_30292;
var statearr_30343_33337 = state_30292__$1;
(statearr_30343_33337[(2)] = null);

(statearr_30343_33337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (2))){
var state_30292__$1 = state_30292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30292__$1,(4),from);
} else {
if((state_val_30294 === (11))){
var inst_30275 = (state_30292[(2)]);
var state_30292__$1 = state_30292;
if(cljs.core.truth_(inst_30275)){
var statearr_30345_33342 = state_30292__$1;
(statearr_30345_33342[(1)] = (12));

} else {
var statearr_30346_33344 = state_30292__$1;
(statearr_30346_33344[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (9))){
var state_30292__$1 = state_30292;
var statearr_30348_33347 = state_30292__$1;
(statearr_30348_33347[(2)] = null);

(statearr_30348_33347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (5))){
var state_30292__$1 = state_30292;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30356_33349 = state_30292__$1;
(statearr_30356_33349[(1)] = (8));

} else {
var statearr_30358_33352 = state_30292__$1;
(statearr_30358_33352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (14))){
var inst_30283 = (state_30292[(2)]);
var state_30292__$1 = state_30292;
var statearr_30359_33354 = state_30292__$1;
(statearr_30359_33354[(2)] = inst_30283);

(statearr_30359_33354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (10))){
var inst_30272 = (state_30292[(2)]);
var state_30292__$1 = state_30292;
var statearr_30363_33355 = state_30292__$1;
(statearr_30363_33355[(2)] = inst_30272);

(statearr_30363_33355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30294 === (8))){
var inst_30269 = cljs.core.async.close_BANG_(to);
var state_30292__$1 = state_30292;
var statearr_30364_33356 = state_30292__$1;
(statearr_30364_33356[(2)] = inst_30269);

(statearr_30364_33356[(1)] = (10));


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
var cljs$core$async$state_machine__29095__auto__ = null;
var cljs$core$async$state_machine__29095__auto____0 = (function (){
var statearr_30370 = [null,null,null,null,null,null,null,null];
(statearr_30370[(0)] = cljs$core$async$state_machine__29095__auto__);

(statearr_30370[(1)] = (1));

return statearr_30370;
});
var cljs$core$async$state_machine__29095__auto____1 = (function (state_30292){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_30292);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e30371){var ex__29098__auto__ = e30371;
var statearr_30372_33365 = state_30292;
(statearr_30372_33365[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_30292[(4)]))){
var statearr_30373_33366 = state_30292;
(statearr_30373_33366[(1)] = cljs.core.first((state_30292[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33368 = state_30292;
state_30292 = G__33368;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$state_machine__29095__auto__ = function(state_30292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29095__auto____1.call(this,state_30292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29095__auto____0;
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29095__auto____1;
return cljs$core$async$state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30376 = f__29737__auto__();
(statearr_30376[(6)] = c__29736__auto___33326);

return statearr_30376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
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
var process__$1 = (function (p__30388){
var vec__30389 = p__30388;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30389,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30389,(1),null);
var job = vec__30389;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29736__auto___33373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_30400){
var state_val_30402 = (state_30400[(1)]);
if((state_val_30402 === (1))){
var state_30400__$1 = state_30400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30400__$1,(2),res,v);
} else {
if((state_val_30402 === (2))){
var inst_30397 = (state_30400[(2)]);
var inst_30398 = cljs.core.async.close_BANG_(res);
var state_30400__$1 = (function (){var statearr_30406 = state_30400;
(statearr_30406[(7)] = inst_30397);

return statearr_30406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30400__$1,inst_30398);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0 = (function (){
var statearr_30410 = [null,null,null,null,null,null,null,null];
(statearr_30410[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__);

(statearr_30410[(1)] = (1));

return statearr_30410;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1 = (function (state_30400){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_30400);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e30412){var ex__29098__auto__ = e30412;
var statearr_30413_33381 = state_30400;
(statearr_30413_33381[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_30400[(4)]))){
var statearr_30414_33382 = state_30400;
(statearr_30414_33382[(1)] = cljs.core.first((state_30400[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33386 = state_30400;
state_30400 = G__33386;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__ = function(state_30400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1.call(this,state_30400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30416 = f__29737__auto__();
(statearr_30416[(6)] = c__29736__auto___33373);

return statearr_30416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30418){
var vec__30419 = p__30418;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30419,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30419,(1),null);
var job = vec__30419;
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
var n__5636__auto___33400 = n;
var __33401 = (0);
while(true){
if((__33401 < n__5636__auto___33400)){
var G__30427_33403 = type;
var G__30427_33404__$1 = (((G__30427_33403 instanceof cljs.core.Keyword))?G__30427_33403.fqn:null);
switch (G__30427_33404__$1) {
case "compute":
var c__29736__auto___33408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33401,c__29736__auto___33408,G__30427_33403,G__30427_33404__$1,n__5636__auto___33400,jobs,results,process__$1,async){
return (function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = ((function (__33401,c__29736__auto___33408,G__30427_33403,G__30427_33404__$1,n__5636__auto___33400,jobs,results,process__$1,async){
return (function (state_30445){
var state_val_30446 = (state_30445[(1)]);
if((state_val_30446 === (1))){
var state_30445__$1 = state_30445;
var statearr_30449_33417 = state_30445__$1;
(statearr_30449_33417[(2)] = null);

(statearr_30449_33417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (2))){
var state_30445__$1 = state_30445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30445__$1,(4),jobs);
} else {
if((state_val_30446 === (3))){
var inst_30442 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30445__$1,inst_30442);
} else {
if((state_val_30446 === (4))){
var inst_30433 = (state_30445[(2)]);
var inst_30434 = process__$1(inst_30433);
var state_30445__$1 = state_30445;
if(cljs.core.truth_(inst_30434)){
var statearr_30453_33418 = state_30445__$1;
(statearr_30453_33418[(1)] = (5));

} else {
var statearr_30454_33419 = state_30445__$1;
(statearr_30454_33419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (5))){
var state_30445__$1 = state_30445;
var statearr_30456_33420 = state_30445__$1;
(statearr_30456_33420[(2)] = null);

(statearr_30456_33420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (6))){
var state_30445__$1 = state_30445;
var statearr_30457_33423 = state_30445__$1;
(statearr_30457_33423[(2)] = null);

(statearr_30457_33423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30446 === (7))){
var inst_30440 = (state_30445[(2)]);
var state_30445__$1 = state_30445;
var statearr_30460_33424 = state_30445__$1;
(statearr_30460_33424[(2)] = inst_30440);

(statearr_30460_33424[(1)] = (3));


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
});})(__33401,c__29736__auto___33408,G__30427_33403,G__30427_33404__$1,n__5636__auto___33400,jobs,results,process__$1,async))
;
return ((function (__33401,switch__29094__auto__,c__29736__auto___33408,G__30427_33403,G__30427_33404__$1,n__5636__auto___33400,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0 = (function (){
var statearr_30465 = [null,null,null,null,null,null,null];
(statearr_30465[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__);

(statearr_30465[(1)] = (1));

return statearr_30465;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1 = (function (state_30445){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_30445);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e30467){var ex__29098__auto__ = e30467;
var statearr_30468_33429 = state_30445;
(statearr_30468_33429[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_30445[(4)]))){
var statearr_30470_33430 = state_30445;
(statearr_30470_33430[(1)] = cljs.core.first((state_30445[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33432 = state_30445;
state_30445 = G__33432;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__ = function(state_30445){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1.call(this,state_30445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__;
})()
;})(__33401,switch__29094__auto__,c__29736__auto___33408,G__30427_33403,G__30427_33404__$1,n__5636__auto___33400,jobs,results,process__$1,async))
})();
var state__29738__auto__ = (function (){var statearr_30476 = f__29737__auto__();
(statearr_30476[(6)] = c__29736__auto___33408);

return statearr_30476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
});})(__33401,c__29736__auto___33408,G__30427_33403,G__30427_33404__$1,n__5636__auto___33400,jobs,results,process__$1,async))
);


break;
case "async":
var c__29736__auto___33439 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33401,c__29736__auto___33439,G__30427_33403,G__30427_33404__$1,n__5636__auto___33400,jobs,results,process__$1,async){
return (function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = ((function (__33401,c__29736__auto___33439,G__30427_33403,G__30427_33404__$1,n__5636__auto___33400,jobs,results,process__$1,async){
return (function (state_30495){
var state_val_30496 = (state_30495[(1)]);
if((state_val_30496 === (1))){
var state_30495__$1 = state_30495;
var statearr_30503_33442 = state_30495__$1;
(statearr_30503_33442[(2)] = null);

(statearr_30503_33442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (2))){
var state_30495__$1 = state_30495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30495__$1,(4),jobs);
} else {
if((state_val_30496 === (3))){
var inst_30492 = (state_30495[(2)]);
var state_30495__$1 = state_30495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30495__$1,inst_30492);
} else {
if((state_val_30496 === (4))){
var inst_30481 = (state_30495[(2)]);
var inst_30483 = async(inst_30481);
var state_30495__$1 = state_30495;
if(cljs.core.truth_(inst_30483)){
var statearr_30508_33446 = state_30495__$1;
(statearr_30508_33446[(1)] = (5));

} else {
var statearr_30509_33448 = state_30495__$1;
(statearr_30509_33448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (5))){
var state_30495__$1 = state_30495;
var statearr_30511_33449 = state_30495__$1;
(statearr_30511_33449[(2)] = null);

(statearr_30511_33449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (6))){
var state_30495__$1 = state_30495;
var statearr_30512_33450 = state_30495__$1;
(statearr_30512_33450[(2)] = null);

(statearr_30512_33450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30496 === (7))){
var inst_30489 = (state_30495[(2)]);
var state_30495__$1 = state_30495;
var statearr_30515_33452 = state_30495__$1;
(statearr_30515_33452[(2)] = inst_30489);

(statearr_30515_33452[(1)] = (3));


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
});})(__33401,c__29736__auto___33439,G__30427_33403,G__30427_33404__$1,n__5636__auto___33400,jobs,results,process__$1,async))
;
return ((function (__33401,switch__29094__auto__,c__29736__auto___33439,G__30427_33403,G__30427_33404__$1,n__5636__auto___33400,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0 = (function (){
var statearr_30524 = [null,null,null,null,null,null,null];
(statearr_30524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__);

(statearr_30524[(1)] = (1));

return statearr_30524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1 = (function (state_30495){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_30495);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e30526){var ex__29098__auto__ = e30526;
var statearr_30527_33456 = state_30495;
(statearr_30527_33456[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_30495[(4)]))){
var statearr_30530_33457 = state_30495;
(statearr_30530_33457[(1)] = cljs.core.first((state_30495[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33459 = state_30495;
state_30495 = G__33459;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__ = function(state_30495){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1.call(this,state_30495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__;
})()
;})(__33401,switch__29094__auto__,c__29736__auto___33439,G__30427_33403,G__30427_33404__$1,n__5636__auto___33400,jobs,results,process__$1,async))
})();
var state__29738__auto__ = (function (){var statearr_30534 = f__29737__auto__();
(statearr_30534[(6)] = c__29736__auto___33439);

return statearr_30534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
});})(__33401,c__29736__auto___33439,G__30427_33403,G__30427_33404__$1,n__5636__auto___33400,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30427_33404__$1)].join('')));

}

var G__33463 = (__33401 + (1));
__33401 = G__33463;
continue;
} else {
}
break;
}

var c__29736__auto___33464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_30564){
var state_val_30565 = (state_30564[(1)]);
if((state_val_30565 === (7))){
var inst_30560 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30574_33466 = state_30564__$1;
(statearr_30574_33466[(2)] = inst_30560);

(statearr_30574_33466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (1))){
var state_30564__$1 = state_30564;
var statearr_30576_33467 = state_30564__$1;
(statearr_30576_33467[(2)] = null);

(statearr_30576_33467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (4))){
var inst_30538 = (state_30564[(7)]);
var inst_30538__$1 = (state_30564[(2)]);
var inst_30540 = (inst_30538__$1 == null);
var state_30564__$1 = (function (){var statearr_30579 = state_30564;
(statearr_30579[(7)] = inst_30538__$1);

return statearr_30579;
})();
if(cljs.core.truth_(inst_30540)){
var statearr_30580_33469 = state_30564__$1;
(statearr_30580_33469[(1)] = (5));

} else {
var statearr_30581_33470 = state_30564__$1;
(statearr_30581_33470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (6))){
var inst_30548 = (state_30564[(8)]);
var inst_30538 = (state_30564[(7)]);
var inst_30548__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30550 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30551 = [inst_30538,inst_30548__$1];
var inst_30552 = (new cljs.core.PersistentVector(null,2,(5),inst_30550,inst_30551,null));
var state_30564__$1 = (function (){var statearr_30586 = state_30564;
(statearr_30586[(8)] = inst_30548__$1);

return statearr_30586;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30564__$1,(8),jobs,inst_30552);
} else {
if((state_val_30565 === (3))){
var inst_30562 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30564__$1,inst_30562);
} else {
if((state_val_30565 === (2))){
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30564__$1,(4),from);
} else {
if((state_val_30565 === (9))){
var inst_30557 = (state_30564[(2)]);
var state_30564__$1 = (function (){var statearr_30589 = state_30564;
(statearr_30589[(9)] = inst_30557);

return statearr_30589;
})();
var statearr_30590_33474 = state_30564__$1;
(statearr_30590_33474[(2)] = null);

(statearr_30590_33474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (5))){
var inst_30544 = cljs.core.async.close_BANG_(jobs);
var state_30564__$1 = state_30564;
var statearr_30591_33476 = state_30564__$1;
(statearr_30591_33476[(2)] = inst_30544);

(statearr_30591_33476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (8))){
var inst_30548 = (state_30564[(8)]);
var inst_30554 = (state_30564[(2)]);
var state_30564__$1 = (function (){var statearr_30597 = state_30564;
(statearr_30597[(10)] = inst_30554);

return statearr_30597;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30564__$1,(9),results,inst_30548);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0 = (function (){
var statearr_30610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30610[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__);

(statearr_30610[(1)] = (1));

return statearr_30610;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1 = (function (state_30564){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_30564);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e30611){var ex__29098__auto__ = e30611;
var statearr_30612_33484 = state_30564;
(statearr_30612_33484[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_30564[(4)]))){
var statearr_30613_33485 = state_30564;
(statearr_30613_33485[(1)] = cljs.core.first((state_30564[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33486 = state_30564;
state_30564 = G__33486;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__ = function(state_30564){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1.call(this,state_30564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30614 = f__29737__auto__();
(statearr_30614[(6)] = c__29736__auto___33464);

return statearr_30614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


var c__29736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_30657){
var state_val_30658 = (state_30657[(1)]);
if((state_val_30658 === (7))){
var inst_30653 = (state_30657[(2)]);
var state_30657__$1 = state_30657;
var statearr_30659_33493 = state_30657__$1;
(statearr_30659_33493[(2)] = inst_30653);

(statearr_30659_33493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (20))){
var state_30657__$1 = state_30657;
var statearr_30660_33494 = state_30657__$1;
(statearr_30660_33494[(2)] = null);

(statearr_30660_33494[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (1))){
var state_30657__$1 = state_30657;
var statearr_30663_33495 = state_30657__$1;
(statearr_30663_33495[(2)] = null);

(statearr_30663_33495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (4))){
var inst_30622 = (state_30657[(7)]);
var inst_30622__$1 = (state_30657[(2)]);
var inst_30623 = (inst_30622__$1 == null);
var state_30657__$1 = (function (){var statearr_30667 = state_30657;
(statearr_30667[(7)] = inst_30622__$1);

return statearr_30667;
})();
if(cljs.core.truth_(inst_30623)){
var statearr_30668_33499 = state_30657__$1;
(statearr_30668_33499[(1)] = (5));

} else {
var statearr_30669_33500 = state_30657__$1;
(statearr_30669_33500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (15))){
var inst_30635 = (state_30657[(8)]);
var state_30657__$1 = state_30657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30657__$1,(18),to,inst_30635);
} else {
if((state_val_30658 === (21))){
var inst_30648 = (state_30657[(2)]);
var state_30657__$1 = state_30657;
var statearr_30670_33502 = state_30657__$1;
(statearr_30670_33502[(2)] = inst_30648);

(statearr_30670_33502[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (13))){
var inst_30650 = (state_30657[(2)]);
var state_30657__$1 = (function (){var statearr_30671 = state_30657;
(statearr_30671[(9)] = inst_30650);

return statearr_30671;
})();
var statearr_30672_33509 = state_30657__$1;
(statearr_30672_33509[(2)] = null);

(statearr_30672_33509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (6))){
var inst_30622 = (state_30657[(7)]);
var state_30657__$1 = state_30657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30657__$1,(11),inst_30622);
} else {
if((state_val_30658 === (17))){
var inst_30643 = (state_30657[(2)]);
var state_30657__$1 = state_30657;
if(cljs.core.truth_(inst_30643)){
var statearr_30678_33513 = state_30657__$1;
(statearr_30678_33513[(1)] = (19));

} else {
var statearr_30679_33514 = state_30657__$1;
(statearr_30679_33514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (3))){
var inst_30655 = (state_30657[(2)]);
var state_30657__$1 = state_30657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30657__$1,inst_30655);
} else {
if((state_val_30658 === (12))){
var inst_30632 = (state_30657[(10)]);
var state_30657__$1 = state_30657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30657__$1,(14),inst_30632);
} else {
if((state_val_30658 === (2))){
var state_30657__$1 = state_30657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30657__$1,(4),results);
} else {
if((state_val_30658 === (19))){
var state_30657__$1 = state_30657;
var statearr_30680_33523 = state_30657__$1;
(statearr_30680_33523[(2)] = null);

(statearr_30680_33523[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (11))){
var inst_30632 = (state_30657[(2)]);
var state_30657__$1 = (function (){var statearr_30681 = state_30657;
(statearr_30681[(10)] = inst_30632);

return statearr_30681;
})();
var statearr_30682_33525 = state_30657__$1;
(statearr_30682_33525[(2)] = null);

(statearr_30682_33525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (9))){
var state_30657__$1 = state_30657;
var statearr_30683_33526 = state_30657__$1;
(statearr_30683_33526[(2)] = null);

(statearr_30683_33526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (5))){
var state_30657__$1 = state_30657;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30684_33531 = state_30657__$1;
(statearr_30684_33531[(1)] = (8));

} else {
var statearr_30685_33536 = state_30657__$1;
(statearr_30685_33536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (14))){
var inst_30637 = (state_30657[(11)]);
var inst_30635 = (state_30657[(8)]);
var inst_30635__$1 = (state_30657[(2)]);
var inst_30636 = (inst_30635__$1 == null);
var inst_30637__$1 = cljs.core.not(inst_30636);
var state_30657__$1 = (function (){var statearr_30686 = state_30657;
(statearr_30686[(11)] = inst_30637__$1);

(statearr_30686[(8)] = inst_30635__$1);

return statearr_30686;
})();
if(inst_30637__$1){
var statearr_30688_33545 = state_30657__$1;
(statearr_30688_33545[(1)] = (15));

} else {
var statearr_30689_33546 = state_30657__$1;
(statearr_30689_33546[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (16))){
var inst_30637 = (state_30657[(11)]);
var state_30657__$1 = state_30657;
var statearr_30692_33547 = state_30657__$1;
(statearr_30692_33547[(2)] = inst_30637);

(statearr_30692_33547[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (10))){
var inst_30629 = (state_30657[(2)]);
var state_30657__$1 = state_30657;
var statearr_30693_33548 = state_30657__$1;
(statearr_30693_33548[(2)] = inst_30629);

(statearr_30693_33548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (18))){
var inst_30640 = (state_30657[(2)]);
var state_30657__$1 = state_30657;
var statearr_30695_33554 = state_30657__$1;
(statearr_30695_33554[(2)] = inst_30640);

(statearr_30695_33554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30658 === (8))){
var inst_30626 = cljs.core.async.close_BANG_(to);
var state_30657__$1 = state_30657;
var statearr_30698_33555 = state_30657__$1;
(statearr_30698_33555[(2)] = inst_30626);

(statearr_30698_33555[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0 = (function (){
var statearr_30704 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__);

(statearr_30704[(1)] = (1));

return statearr_30704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1 = (function (state_30657){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_30657);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e30705){var ex__29098__auto__ = e30705;
var statearr_30707_33567 = state_30657;
(statearr_30707_33567[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_30657[(4)]))){
var statearr_30708_33568 = state_30657;
(statearr_30708_33568[(1)] = cljs.core.first((state_30657[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33569 = state_30657;
state_30657 = G__33569;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__ = function(state_30657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1.call(this,state_30657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29095__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30712 = f__29737__auto__();
(statearr_30712[(6)] = c__29736__auto__);

return statearr_30712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));

return c__29736__auto__;
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
var G__30720 = arguments.length;
switch (G__30720) {
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
var G__30727 = arguments.length;
switch (G__30727) {
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
var G__30736 = arguments.length;
switch (G__30736) {
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
var c__29736__auto___33581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_30777){
var state_val_30778 = (state_30777[(1)]);
if((state_val_30778 === (7))){
var inst_30771 = (state_30777[(2)]);
var state_30777__$1 = state_30777;
var statearr_30781_33591 = state_30777__$1;
(statearr_30781_33591[(2)] = inst_30771);

(statearr_30781_33591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (1))){
var state_30777__$1 = state_30777;
var statearr_30785_33600 = state_30777__$1;
(statearr_30785_33600[(2)] = null);

(statearr_30785_33600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (4))){
var inst_30749 = (state_30777[(7)]);
var inst_30749__$1 = (state_30777[(2)]);
var inst_30751 = (inst_30749__$1 == null);
var state_30777__$1 = (function (){var statearr_30787 = state_30777;
(statearr_30787[(7)] = inst_30749__$1);

return statearr_30787;
})();
if(cljs.core.truth_(inst_30751)){
var statearr_30788_33601 = state_30777__$1;
(statearr_30788_33601[(1)] = (5));

} else {
var statearr_30789_33602 = state_30777__$1;
(statearr_30789_33602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (13))){
var state_30777__$1 = state_30777;
var statearr_30791_33604 = state_30777__$1;
(statearr_30791_33604[(2)] = null);

(statearr_30791_33604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (6))){
var inst_30749 = (state_30777[(7)]);
var inst_30756 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30749) : p.call(null,inst_30749));
var state_30777__$1 = state_30777;
if(cljs.core.truth_(inst_30756)){
var statearr_30796_33607 = state_30777__$1;
(statearr_30796_33607[(1)] = (9));

} else {
var statearr_30797_33609 = state_30777__$1;
(statearr_30797_33609[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (3))){
var inst_30775 = (state_30777[(2)]);
var state_30777__$1 = state_30777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30777__$1,inst_30775);
} else {
if((state_val_30778 === (12))){
var state_30777__$1 = state_30777;
var statearr_30800_33610 = state_30777__$1;
(statearr_30800_33610[(2)] = null);

(statearr_30800_33610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (2))){
var state_30777__$1 = state_30777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30777__$1,(4),ch);
} else {
if((state_val_30778 === (11))){
var inst_30749 = (state_30777[(7)]);
var inst_30761 = (state_30777[(2)]);
var state_30777__$1 = state_30777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30777__$1,(8),inst_30761,inst_30749);
} else {
if((state_val_30778 === (9))){
var state_30777__$1 = state_30777;
var statearr_30804_33620 = state_30777__$1;
(statearr_30804_33620[(2)] = tc);

(statearr_30804_33620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (5))){
var inst_30753 = cljs.core.async.close_BANG_(tc);
var inst_30754 = cljs.core.async.close_BANG_(fc);
var state_30777__$1 = (function (){var statearr_30805 = state_30777;
(statearr_30805[(8)] = inst_30753);

return statearr_30805;
})();
var statearr_30807_33625 = state_30777__$1;
(statearr_30807_33625[(2)] = inst_30754);

(statearr_30807_33625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (14))){
var inst_30769 = (state_30777[(2)]);
var state_30777__$1 = state_30777;
var statearr_30809_33628 = state_30777__$1;
(statearr_30809_33628[(2)] = inst_30769);

(statearr_30809_33628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (10))){
var state_30777__$1 = state_30777;
var statearr_30814_33632 = state_30777__$1;
(statearr_30814_33632[(2)] = fc);

(statearr_30814_33632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30778 === (8))){
var inst_30763 = (state_30777[(2)]);
var state_30777__$1 = state_30777;
if(cljs.core.truth_(inst_30763)){
var statearr_30815_33633 = state_30777__$1;
(statearr_30815_33633[(1)] = (12));

} else {
var statearr_30816_33635 = state_30777__$1;
(statearr_30816_33635[(1)] = (13));

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
var cljs$core$async$state_machine__29095__auto__ = null;
var cljs$core$async$state_machine__29095__auto____0 = (function (){
var statearr_30820 = [null,null,null,null,null,null,null,null,null];
(statearr_30820[(0)] = cljs$core$async$state_machine__29095__auto__);

(statearr_30820[(1)] = (1));

return statearr_30820;
});
var cljs$core$async$state_machine__29095__auto____1 = (function (state_30777){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_30777);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e30824){var ex__29098__auto__ = e30824;
var statearr_30825_33648 = state_30777;
(statearr_30825_33648[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_30777[(4)]))){
var statearr_30827_33651 = state_30777;
(statearr_30827_33651[(1)] = cljs.core.first((state_30777[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33656 = state_30777;
state_30777 = G__33656;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$state_machine__29095__auto__ = function(state_30777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29095__auto____1.call(this,state_30777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29095__auto____0;
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29095__auto____1;
return cljs$core$async$state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30832 = f__29737__auto__();
(statearr_30832[(6)] = c__29736__auto___33581);

return statearr_30832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
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
var c__29736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_30867){
var state_val_30868 = (state_30867[(1)]);
if((state_val_30868 === (7))){
var inst_30863 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
var statearr_30870_33659 = state_30867__$1;
(statearr_30870_33659[(2)] = inst_30863);

(statearr_30870_33659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (1))){
var inst_30843 = init;
var inst_30844 = inst_30843;
var state_30867__$1 = (function (){var statearr_30872 = state_30867;
(statearr_30872[(7)] = inst_30844);

return statearr_30872;
})();
var statearr_30873_33661 = state_30867__$1;
(statearr_30873_33661[(2)] = null);

(statearr_30873_33661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (4))){
var inst_30850 = (state_30867[(8)]);
var inst_30850__$1 = (state_30867[(2)]);
var inst_30851 = (inst_30850__$1 == null);
var state_30867__$1 = (function (){var statearr_30874 = state_30867;
(statearr_30874[(8)] = inst_30850__$1);

return statearr_30874;
})();
if(cljs.core.truth_(inst_30851)){
var statearr_30876_33669 = state_30867__$1;
(statearr_30876_33669[(1)] = (5));

} else {
var statearr_30877_33670 = state_30867__$1;
(statearr_30877_33670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (6))){
var inst_30850 = (state_30867[(8)]);
var inst_30844 = (state_30867[(7)]);
var inst_30854 = (state_30867[(9)]);
var inst_30854__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30844,inst_30850) : f.call(null,inst_30844,inst_30850));
var inst_30855 = cljs.core.reduced_QMARK_(inst_30854__$1);
var state_30867__$1 = (function (){var statearr_30878 = state_30867;
(statearr_30878[(9)] = inst_30854__$1);

return statearr_30878;
})();
if(inst_30855){
var statearr_30879_33677 = state_30867__$1;
(statearr_30879_33677[(1)] = (8));

} else {
var statearr_30880_33681 = state_30867__$1;
(statearr_30880_33681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (3))){
var inst_30865 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30867__$1,inst_30865);
} else {
if((state_val_30868 === (2))){
var state_30867__$1 = state_30867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30867__$1,(4),ch);
} else {
if((state_val_30868 === (9))){
var inst_30854 = (state_30867[(9)]);
var inst_30844 = inst_30854;
var state_30867__$1 = (function (){var statearr_30883 = state_30867;
(statearr_30883[(7)] = inst_30844);

return statearr_30883;
})();
var statearr_30885_33689 = state_30867__$1;
(statearr_30885_33689[(2)] = null);

(statearr_30885_33689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (5))){
var inst_30844 = (state_30867[(7)]);
var state_30867__$1 = state_30867;
var statearr_30887_33690 = state_30867__$1;
(statearr_30887_33690[(2)] = inst_30844);

(statearr_30887_33690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (10))){
var inst_30861 = (state_30867[(2)]);
var state_30867__$1 = state_30867;
var statearr_30888_33694 = state_30867__$1;
(statearr_30888_33694[(2)] = inst_30861);

(statearr_30888_33694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30868 === (8))){
var inst_30854 = (state_30867[(9)]);
var inst_30857 = cljs.core.deref(inst_30854);
var state_30867__$1 = state_30867;
var statearr_30892_33701 = state_30867__$1;
(statearr_30892_33701[(2)] = inst_30857);

(statearr_30892_33701[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29095__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29095__auto____0 = (function (){
var statearr_30893 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30893[(0)] = cljs$core$async$reduce_$_state_machine__29095__auto__);

(statearr_30893[(1)] = (1));

return statearr_30893;
});
var cljs$core$async$reduce_$_state_machine__29095__auto____1 = (function (state_30867){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_30867);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e30898){var ex__29098__auto__ = e30898;
var statearr_30899_33705 = state_30867;
(statearr_30899_33705[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_30867[(4)]))){
var statearr_30900_33709 = state_30867;
(statearr_30900_33709[(1)] = cljs.core.first((state_30867[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33713 = state_30867;
state_30867 = G__33713;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29095__auto__ = function(state_30867){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29095__auto____1.call(this,state_30867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29095__auto____0;
cljs$core$async$reduce_$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29095__auto____1;
return cljs$core$async$reduce_$_state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30902 = f__29737__auto__();
(statearr_30902[(6)] = c__29736__auto__);

return statearr_30902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));

return c__29736__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_30916){
var state_val_30918 = (state_30916[(1)]);
if((state_val_30918 === (1))){
var inst_30911 = cljs.core.async.reduce(f__$1,init,ch);
var state_30916__$1 = state_30916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30916__$1,(2),inst_30911);
} else {
if((state_val_30918 === (2))){
var inst_30913 = (state_30916[(2)]);
var inst_30914 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30913) : f__$1.call(null,inst_30913));
var state_30916__$1 = state_30916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30916__$1,inst_30914);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29095__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29095__auto____0 = (function (){
var statearr_30924 = [null,null,null,null,null,null,null];
(statearr_30924[(0)] = cljs$core$async$transduce_$_state_machine__29095__auto__);

(statearr_30924[(1)] = (1));

return statearr_30924;
});
var cljs$core$async$transduce_$_state_machine__29095__auto____1 = (function (state_30916){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_30916);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e30926){var ex__29098__auto__ = e30926;
var statearr_30927_33720 = state_30916;
(statearr_30927_33720[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_30916[(4)]))){
var statearr_30928_33721 = state_30916;
(statearr_30928_33721[(1)] = cljs.core.first((state_30916[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33722 = state_30916;
state_30916 = G__33722;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29095__auto__ = function(state_30916){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29095__auto____1.call(this,state_30916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29095__auto____0;
cljs$core$async$transduce_$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29095__auto____1;
return cljs$core$async$transduce_$_state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_30933 = f__29737__auto__();
(statearr_30933[(6)] = c__29736__auto__);

return statearr_30933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));

return c__29736__auto__;
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
var G__30937 = arguments.length;
switch (G__30937) {
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
var c__29736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_30968){
var state_val_30969 = (state_30968[(1)]);
if((state_val_30969 === (7))){
var inst_30946 = (state_30968[(2)]);
var state_30968__$1 = state_30968;
var statearr_30972_33728 = state_30968__$1;
(statearr_30972_33728[(2)] = inst_30946);

(statearr_30972_33728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30969 === (1))){
var inst_30939 = cljs.core.seq(coll);
var inst_30940 = inst_30939;
var state_30968__$1 = (function (){var statearr_30973 = state_30968;
(statearr_30973[(7)] = inst_30940);

return statearr_30973;
})();
var statearr_30974_33729 = state_30968__$1;
(statearr_30974_33729[(2)] = null);

(statearr_30974_33729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30969 === (4))){
var inst_30940 = (state_30968[(7)]);
var inst_30944 = cljs.core.first(inst_30940);
var state_30968__$1 = state_30968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30968__$1,(7),ch,inst_30944);
} else {
if((state_val_30969 === (13))){
var inst_30960 = (state_30968[(2)]);
var state_30968__$1 = state_30968;
var statearr_30975_33730 = state_30968__$1;
(statearr_30975_33730[(2)] = inst_30960);

(statearr_30975_33730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30969 === (6))){
var inst_30949 = (state_30968[(2)]);
var state_30968__$1 = state_30968;
if(cljs.core.truth_(inst_30949)){
var statearr_30977_33731 = state_30968__$1;
(statearr_30977_33731[(1)] = (8));

} else {
var statearr_30978_33732 = state_30968__$1;
(statearr_30978_33732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30969 === (3))){
var inst_30964 = (state_30968[(2)]);
var state_30968__$1 = state_30968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30968__$1,inst_30964);
} else {
if((state_val_30969 === (12))){
var state_30968__$1 = state_30968;
var statearr_30980_33733 = state_30968__$1;
(statearr_30980_33733[(2)] = null);

(statearr_30980_33733[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30969 === (2))){
var inst_30940 = (state_30968[(7)]);
var state_30968__$1 = state_30968;
if(cljs.core.truth_(inst_30940)){
var statearr_30982_33734 = state_30968__$1;
(statearr_30982_33734[(1)] = (4));

} else {
var statearr_30983_33735 = state_30968__$1;
(statearr_30983_33735[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30969 === (11))){
var inst_30957 = cljs.core.async.close_BANG_(ch);
var state_30968__$1 = state_30968;
var statearr_30984_33736 = state_30968__$1;
(statearr_30984_33736[(2)] = inst_30957);

(statearr_30984_33736[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30969 === (9))){
var state_30968__$1 = state_30968;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30986_33737 = state_30968__$1;
(statearr_30986_33737[(1)] = (11));

} else {
var statearr_30987_33738 = state_30968__$1;
(statearr_30987_33738[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30969 === (5))){
var inst_30940 = (state_30968[(7)]);
var state_30968__$1 = state_30968;
var statearr_30993_33739 = state_30968__$1;
(statearr_30993_33739[(2)] = inst_30940);

(statearr_30993_33739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30969 === (10))){
var inst_30962 = (state_30968[(2)]);
var state_30968__$1 = state_30968;
var statearr_30997_33740 = state_30968__$1;
(statearr_30997_33740[(2)] = inst_30962);

(statearr_30997_33740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30969 === (8))){
var inst_30940 = (state_30968[(7)]);
var inst_30953 = cljs.core.next(inst_30940);
var inst_30940__$1 = inst_30953;
var state_30968__$1 = (function (){var statearr_30998 = state_30968;
(statearr_30998[(7)] = inst_30940__$1);

return statearr_30998;
})();
var statearr_30999_33741 = state_30968__$1;
(statearr_30999_33741[(2)] = null);

(statearr_30999_33741[(1)] = (2));


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
var cljs$core$async$state_machine__29095__auto__ = null;
var cljs$core$async$state_machine__29095__auto____0 = (function (){
var statearr_31000 = [null,null,null,null,null,null,null,null];
(statearr_31000[(0)] = cljs$core$async$state_machine__29095__auto__);

(statearr_31000[(1)] = (1));

return statearr_31000;
});
var cljs$core$async$state_machine__29095__auto____1 = (function (state_30968){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_30968);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e31001){var ex__29098__auto__ = e31001;
var statearr_31003_33742 = state_30968;
(statearr_31003_33742[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_30968[(4)]))){
var statearr_31005_33743 = state_30968;
(statearr_31005_33743[(1)] = cljs.core.first((state_30968[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33744 = state_30968;
state_30968 = G__33744;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$state_machine__29095__auto__ = function(state_30968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29095__auto____1.call(this,state_30968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29095__auto____0;
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29095__auto____1;
return cljs$core$async$state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_31010 = f__29737__auto__();
(statearr_31010[(6)] = c__29736__auto__);

return statearr_31010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));

return c__29736__auto__;
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
var G__31017 = arguments.length;
switch (G__31017) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33748 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33748(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33749 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33749(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33751 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33751(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33758 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33758(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31046 = (function (ch,cs,meta31047){
this.ch = ch;
this.cs = cs;
this.meta31047 = meta31047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31048,meta31047__$1){
var self__ = this;
var _31048__$1 = this;
return (new cljs.core.async.t_cljs$core$async31046(self__.ch,self__.cs,meta31047__$1));
}));

(cljs.core.async.t_cljs$core$async31046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31048){
var self__ = this;
var _31048__$1 = this;
return self__.meta31047;
}));

(cljs.core.async.t_cljs$core$async31046.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31046.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31046.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31046.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31046.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31046.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31047","meta31047",-1866129131,null)], null);
}));

(cljs.core.async.t_cljs$core$async31046.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31046");

(cljs.core.async.t_cljs$core$async31046.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31046");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31046.
 */
cljs.core.async.__GT_t_cljs$core$async31046 = (function cljs$core$async$__GT_t_cljs$core$async31046(ch,cs,meta31047){
return (new cljs.core.async.t_cljs$core$async31046(ch,cs,meta31047));
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
var m = (new cljs.core.async.t_cljs$core$async31046(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29736__auto___33765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_31210){
var state_val_31211 = (state_31210[(1)]);
if((state_val_31211 === (7))){
var inst_31203 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31212_33766 = state_31210__$1;
(statearr_31212_33766[(2)] = inst_31203);

(statearr_31212_33766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (20))){
var inst_31095 = (state_31210[(7)]);
var inst_31109 = cljs.core.first(inst_31095);
var inst_31110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31109,(0),null);
var inst_31111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31109,(1),null);
var state_31210__$1 = (function (){var statearr_31219 = state_31210;
(statearr_31219[(8)] = inst_31110);

return statearr_31219;
})();
if(cljs.core.truth_(inst_31111)){
var statearr_31221_33767 = state_31210__$1;
(statearr_31221_33767[(1)] = (22));

} else {
var statearr_31222_33768 = state_31210__$1;
(statearr_31222_33768[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (27))){
var inst_31059 = (state_31210[(9)]);
var inst_31144 = (state_31210[(10)]);
var inst_31150 = (state_31210[(11)]);
var inst_31142 = (state_31210[(12)]);
var inst_31150__$1 = cljs.core._nth(inst_31142,inst_31144);
var inst_31151 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31150__$1,inst_31059,done);
var state_31210__$1 = (function (){var statearr_31226 = state_31210;
(statearr_31226[(11)] = inst_31150__$1);

return statearr_31226;
})();
if(cljs.core.truth_(inst_31151)){
var statearr_31227_33769 = state_31210__$1;
(statearr_31227_33769[(1)] = (30));

} else {
var statearr_31228_33770 = state_31210__$1;
(statearr_31228_33770[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (1))){
var state_31210__$1 = state_31210;
var statearr_31232_33771 = state_31210__$1;
(statearr_31232_33771[(2)] = null);

(statearr_31232_33771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (24))){
var inst_31095 = (state_31210[(7)]);
var inst_31116 = (state_31210[(2)]);
var inst_31117 = cljs.core.next(inst_31095);
var inst_31068 = inst_31117;
var inst_31069 = null;
var inst_31070 = (0);
var inst_31071 = (0);
var state_31210__$1 = (function (){var statearr_31233 = state_31210;
(statearr_31233[(13)] = inst_31071);

(statearr_31233[(14)] = inst_31116);

(statearr_31233[(15)] = inst_31068);

(statearr_31233[(16)] = inst_31069);

(statearr_31233[(17)] = inst_31070);

return statearr_31233;
})();
var statearr_31234_33779 = state_31210__$1;
(statearr_31234_33779[(2)] = null);

(statearr_31234_33779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (39))){
var state_31210__$1 = state_31210;
var statearr_31238_33780 = state_31210__$1;
(statearr_31238_33780[(2)] = null);

(statearr_31238_33780[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (4))){
var inst_31059 = (state_31210[(9)]);
var inst_31059__$1 = (state_31210[(2)]);
var inst_31060 = (inst_31059__$1 == null);
var state_31210__$1 = (function (){var statearr_31242 = state_31210;
(statearr_31242[(9)] = inst_31059__$1);

return statearr_31242;
})();
if(cljs.core.truth_(inst_31060)){
var statearr_31246_33783 = state_31210__$1;
(statearr_31246_33783[(1)] = (5));

} else {
var statearr_31247_33784 = state_31210__$1;
(statearr_31247_33784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (15))){
var inst_31071 = (state_31210[(13)]);
var inst_31068 = (state_31210[(15)]);
var inst_31069 = (state_31210[(16)]);
var inst_31070 = (state_31210[(17)]);
var inst_31088 = (state_31210[(2)]);
var inst_31092 = (inst_31071 + (1));
var tmp31235 = inst_31068;
var tmp31236 = inst_31069;
var tmp31237 = inst_31070;
var inst_31068__$1 = tmp31235;
var inst_31069__$1 = tmp31236;
var inst_31070__$1 = tmp31237;
var inst_31071__$1 = inst_31092;
var state_31210__$1 = (function (){var statearr_31249 = state_31210;
(statearr_31249[(13)] = inst_31071__$1);

(statearr_31249[(15)] = inst_31068__$1);

(statearr_31249[(16)] = inst_31069__$1);

(statearr_31249[(18)] = inst_31088);

(statearr_31249[(17)] = inst_31070__$1);

return statearr_31249;
})();
var statearr_31253_33790 = state_31210__$1;
(statearr_31253_33790[(2)] = null);

(statearr_31253_33790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (21))){
var inst_31120 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31261_33794 = state_31210__$1;
(statearr_31261_33794[(2)] = inst_31120);

(statearr_31261_33794[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (31))){
var inst_31150 = (state_31210[(11)]);
var inst_31154 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31150);
var state_31210__$1 = state_31210;
var statearr_31267_33798 = state_31210__$1;
(statearr_31267_33798[(2)] = inst_31154);

(statearr_31267_33798[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (32))){
var inst_31143 = (state_31210[(19)]);
var inst_31144 = (state_31210[(10)]);
var inst_31141 = (state_31210[(20)]);
var inst_31142 = (state_31210[(12)]);
var inst_31156 = (state_31210[(2)]);
var inst_31158 = (inst_31144 + (1));
var tmp31256 = inst_31143;
var tmp31257 = inst_31141;
var tmp31258 = inst_31142;
var inst_31141__$1 = tmp31257;
var inst_31142__$1 = tmp31258;
var inst_31143__$1 = tmp31256;
var inst_31144__$1 = inst_31158;
var state_31210__$1 = (function (){var statearr_31272 = state_31210;
(statearr_31272[(19)] = inst_31143__$1);

(statearr_31272[(10)] = inst_31144__$1);

(statearr_31272[(21)] = inst_31156);

(statearr_31272[(20)] = inst_31141__$1);

(statearr_31272[(12)] = inst_31142__$1);

return statearr_31272;
})();
var statearr_31276_33807 = state_31210__$1;
(statearr_31276_33807[(2)] = null);

(statearr_31276_33807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (40))){
var inst_31175 = (state_31210[(22)]);
var inst_31179 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31175);
var state_31210__$1 = state_31210;
var statearr_31278_33814 = state_31210__$1;
(statearr_31278_33814[(2)] = inst_31179);

(statearr_31278_33814[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (33))){
var inst_31162 = (state_31210[(23)]);
var inst_31166 = cljs.core.chunked_seq_QMARK_(inst_31162);
var state_31210__$1 = state_31210;
if(inst_31166){
var statearr_31282_33816 = state_31210__$1;
(statearr_31282_33816[(1)] = (36));

} else {
var statearr_31283_33817 = state_31210__$1;
(statearr_31283_33817[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (13))){
var inst_31081 = (state_31210[(24)]);
var inst_31084 = cljs.core.async.close_BANG_(inst_31081);
var state_31210__$1 = state_31210;
var statearr_31285_33818 = state_31210__$1;
(statearr_31285_33818[(2)] = inst_31084);

(statearr_31285_33818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (22))){
var inst_31110 = (state_31210[(8)]);
var inst_31113 = cljs.core.async.close_BANG_(inst_31110);
var state_31210__$1 = state_31210;
var statearr_31289_33819 = state_31210__$1;
(statearr_31289_33819[(2)] = inst_31113);

(statearr_31289_33819[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (36))){
var inst_31162 = (state_31210[(23)]);
var inst_31170 = cljs.core.chunk_first(inst_31162);
var inst_31171 = cljs.core.chunk_rest(inst_31162);
var inst_31172 = cljs.core.count(inst_31170);
var inst_31141 = inst_31171;
var inst_31142 = inst_31170;
var inst_31143 = inst_31172;
var inst_31144 = (0);
var state_31210__$1 = (function (){var statearr_31291 = state_31210;
(statearr_31291[(19)] = inst_31143);

(statearr_31291[(10)] = inst_31144);

(statearr_31291[(20)] = inst_31141);

(statearr_31291[(12)] = inst_31142);

return statearr_31291;
})();
var statearr_31292_33820 = state_31210__$1;
(statearr_31292_33820[(2)] = null);

(statearr_31292_33820[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (41))){
var inst_31162 = (state_31210[(23)]);
var inst_31181 = (state_31210[(2)]);
var inst_31182 = cljs.core.next(inst_31162);
var inst_31141 = inst_31182;
var inst_31142 = null;
var inst_31143 = (0);
var inst_31144 = (0);
var state_31210__$1 = (function (){var statearr_31296 = state_31210;
(statearr_31296[(25)] = inst_31181);

(statearr_31296[(19)] = inst_31143);

(statearr_31296[(10)] = inst_31144);

(statearr_31296[(20)] = inst_31141);

(statearr_31296[(12)] = inst_31142);

return statearr_31296;
})();
var statearr_31298_33823 = state_31210__$1;
(statearr_31298_33823[(2)] = null);

(statearr_31298_33823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (43))){
var state_31210__$1 = state_31210;
var statearr_31303_33824 = state_31210__$1;
(statearr_31303_33824[(2)] = null);

(statearr_31303_33824[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (29))){
var inst_31190 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31304_33832 = state_31210__$1;
(statearr_31304_33832[(2)] = inst_31190);

(statearr_31304_33832[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (44))){
var inst_31199 = (state_31210[(2)]);
var state_31210__$1 = (function (){var statearr_31306 = state_31210;
(statearr_31306[(26)] = inst_31199);

return statearr_31306;
})();
var statearr_31307_33840 = state_31210__$1;
(statearr_31307_33840[(2)] = null);

(statearr_31307_33840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (6))){
var inst_31133 = (state_31210[(27)]);
var inst_31132 = cljs.core.deref(cs);
var inst_31133__$1 = cljs.core.keys(inst_31132);
var inst_31134 = cljs.core.count(inst_31133__$1);
var inst_31135 = cljs.core.reset_BANG_(dctr,inst_31134);
var inst_31140 = cljs.core.seq(inst_31133__$1);
var inst_31141 = inst_31140;
var inst_31142 = null;
var inst_31143 = (0);
var inst_31144 = (0);
var state_31210__$1 = (function (){var statearr_31315 = state_31210;
(statearr_31315[(27)] = inst_31133__$1);

(statearr_31315[(28)] = inst_31135);

(statearr_31315[(19)] = inst_31143);

(statearr_31315[(10)] = inst_31144);

(statearr_31315[(20)] = inst_31141);

(statearr_31315[(12)] = inst_31142);

return statearr_31315;
})();
var statearr_31316_33862 = state_31210__$1;
(statearr_31316_33862[(2)] = null);

(statearr_31316_33862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (28))){
var inst_31162 = (state_31210[(23)]);
var inst_31141 = (state_31210[(20)]);
var inst_31162__$1 = cljs.core.seq(inst_31141);
var state_31210__$1 = (function (){var statearr_31318 = state_31210;
(statearr_31318[(23)] = inst_31162__$1);

return statearr_31318;
})();
if(inst_31162__$1){
var statearr_31319_33863 = state_31210__$1;
(statearr_31319_33863[(1)] = (33));

} else {
var statearr_31320_33871 = state_31210__$1;
(statearr_31320_33871[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (25))){
var inst_31143 = (state_31210[(19)]);
var inst_31144 = (state_31210[(10)]);
var inst_31147 = (inst_31144 < inst_31143);
var inst_31148 = inst_31147;
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31148)){
var statearr_31325_33876 = state_31210__$1;
(statearr_31325_33876[(1)] = (27));

} else {
var statearr_31326_33880 = state_31210__$1;
(statearr_31326_33880[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (34))){
var state_31210__$1 = state_31210;
var statearr_31328_33881 = state_31210__$1;
(statearr_31328_33881[(2)] = null);

(statearr_31328_33881[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (17))){
var state_31210__$1 = state_31210;
var statearr_31330_33886 = state_31210__$1;
(statearr_31330_33886[(2)] = null);

(statearr_31330_33886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (3))){
var inst_31205 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31210__$1,inst_31205);
} else {
if((state_val_31211 === (12))){
var inst_31125 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31337_33891 = state_31210__$1;
(statearr_31337_33891[(2)] = inst_31125);

(statearr_31337_33891[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (2))){
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31210__$1,(4),ch);
} else {
if((state_val_31211 === (23))){
var state_31210__$1 = state_31210;
var statearr_31340_33892 = state_31210__$1;
(statearr_31340_33892[(2)] = null);

(statearr_31340_33892[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (35))){
var inst_31188 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31346_33893 = state_31210__$1;
(statearr_31346_33893[(2)] = inst_31188);

(statearr_31346_33893[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (19))){
var inst_31095 = (state_31210[(7)]);
var inst_31099 = cljs.core.chunk_first(inst_31095);
var inst_31100 = cljs.core.chunk_rest(inst_31095);
var inst_31101 = cljs.core.count(inst_31099);
var inst_31068 = inst_31100;
var inst_31069 = inst_31099;
var inst_31070 = inst_31101;
var inst_31071 = (0);
var state_31210__$1 = (function (){var statearr_31349 = state_31210;
(statearr_31349[(13)] = inst_31071);

(statearr_31349[(15)] = inst_31068);

(statearr_31349[(16)] = inst_31069);

(statearr_31349[(17)] = inst_31070);

return statearr_31349;
})();
var statearr_31351_33900 = state_31210__$1;
(statearr_31351_33900[(2)] = null);

(statearr_31351_33900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (11))){
var inst_31068 = (state_31210[(15)]);
var inst_31095 = (state_31210[(7)]);
var inst_31095__$1 = cljs.core.seq(inst_31068);
var state_31210__$1 = (function (){var statearr_31352 = state_31210;
(statearr_31352[(7)] = inst_31095__$1);

return statearr_31352;
})();
if(inst_31095__$1){
var statearr_31354_33901 = state_31210__$1;
(statearr_31354_33901[(1)] = (16));

} else {
var statearr_31356_33902 = state_31210__$1;
(statearr_31356_33902[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (9))){
var inst_31127 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31357_33903 = state_31210__$1;
(statearr_31357_33903[(2)] = inst_31127);

(statearr_31357_33903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (5))){
var inst_31066 = cljs.core.deref(cs);
var inst_31067 = cljs.core.seq(inst_31066);
var inst_31068 = inst_31067;
var inst_31069 = null;
var inst_31070 = (0);
var inst_31071 = (0);
var state_31210__$1 = (function (){var statearr_31362 = state_31210;
(statearr_31362[(13)] = inst_31071);

(statearr_31362[(15)] = inst_31068);

(statearr_31362[(16)] = inst_31069);

(statearr_31362[(17)] = inst_31070);

return statearr_31362;
})();
var statearr_31364_33904 = state_31210__$1;
(statearr_31364_33904[(2)] = null);

(statearr_31364_33904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (14))){
var state_31210__$1 = state_31210;
var statearr_31372_33905 = state_31210__$1;
(statearr_31372_33905[(2)] = null);

(statearr_31372_33905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (45))){
var inst_31196 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31376_33906 = state_31210__$1;
(statearr_31376_33906[(2)] = inst_31196);

(statearr_31376_33906[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (26))){
var inst_31133 = (state_31210[(27)]);
var inst_31192 = (state_31210[(2)]);
var inst_31193 = cljs.core.seq(inst_31133);
var state_31210__$1 = (function (){var statearr_31378 = state_31210;
(statearr_31378[(29)] = inst_31192);

return statearr_31378;
})();
if(inst_31193){
var statearr_31379_33916 = state_31210__$1;
(statearr_31379_33916[(1)] = (42));

} else {
var statearr_31382_33917 = state_31210__$1;
(statearr_31382_33917[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (16))){
var inst_31095 = (state_31210[(7)]);
var inst_31097 = cljs.core.chunked_seq_QMARK_(inst_31095);
var state_31210__$1 = state_31210;
if(inst_31097){
var statearr_31385_33918 = state_31210__$1;
(statearr_31385_33918[(1)] = (19));

} else {
var statearr_31386_33919 = state_31210__$1;
(statearr_31386_33919[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (38))){
var inst_31185 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31388_33920 = state_31210__$1;
(statearr_31388_33920[(2)] = inst_31185);

(statearr_31388_33920[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (30))){
var state_31210__$1 = state_31210;
var statearr_31392_33921 = state_31210__$1;
(statearr_31392_33921[(2)] = null);

(statearr_31392_33921[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (10))){
var inst_31071 = (state_31210[(13)]);
var inst_31069 = (state_31210[(16)]);
var inst_31080 = cljs.core._nth(inst_31069,inst_31071);
var inst_31081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31080,(0),null);
var inst_31082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31080,(1),null);
var state_31210__$1 = (function (){var statearr_31399 = state_31210;
(statearr_31399[(24)] = inst_31081);

return statearr_31399;
})();
if(cljs.core.truth_(inst_31082)){
var statearr_31400_33924 = state_31210__$1;
(statearr_31400_33924[(1)] = (13));

} else {
var statearr_31402_33925 = state_31210__$1;
(statearr_31402_33925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (18))){
var inst_31123 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31405_33926 = state_31210__$1;
(statearr_31405_33926[(2)] = inst_31123);

(statearr_31405_33926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (42))){
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31210__$1,(45),dchan);
} else {
if((state_val_31211 === (37))){
var inst_31162 = (state_31210[(23)]);
var inst_31059 = (state_31210[(9)]);
var inst_31175 = (state_31210[(22)]);
var inst_31175__$1 = cljs.core.first(inst_31162);
var inst_31176 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31175__$1,inst_31059,done);
var state_31210__$1 = (function (){var statearr_31413 = state_31210;
(statearr_31413[(22)] = inst_31175__$1);

return statearr_31413;
})();
if(cljs.core.truth_(inst_31176)){
var statearr_31415_33927 = state_31210__$1;
(statearr_31415_33927[(1)] = (39));

} else {
var statearr_31416_33930 = state_31210__$1;
(statearr_31416_33930[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (8))){
var inst_31071 = (state_31210[(13)]);
var inst_31070 = (state_31210[(17)]);
var inst_31074 = (inst_31071 < inst_31070);
var inst_31075 = inst_31074;
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31075)){
var statearr_31418_33931 = state_31210__$1;
(statearr_31418_33931[(1)] = (10));

} else {
var statearr_31420_33932 = state_31210__$1;
(statearr_31420_33932[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29095__auto__ = null;
var cljs$core$async$mult_$_state_machine__29095__auto____0 = (function (){
var statearr_31426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31426[(0)] = cljs$core$async$mult_$_state_machine__29095__auto__);

(statearr_31426[(1)] = (1));

return statearr_31426;
});
var cljs$core$async$mult_$_state_machine__29095__auto____1 = (function (state_31210){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_31210);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e31429){var ex__29098__auto__ = e31429;
var statearr_31430_33936 = state_31210;
(statearr_31430_33936[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_31210[(4)]))){
var statearr_31432_33937 = state_31210;
(statearr_31432_33937[(1)] = cljs.core.first((state_31210[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33938 = state_31210;
state_31210 = G__33938;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29095__auto__ = function(state_31210){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29095__auto____1.call(this,state_31210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29095__auto____0;
cljs$core$async$mult_$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29095__auto____1;
return cljs$core$async$mult_$_state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_31440 = f__29737__auto__();
(statearr_31440[(6)] = c__29736__auto___33765);

return statearr_31440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
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
var G__31451 = arguments.length;
switch (G__31451) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33948 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33948(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33950 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33950(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33957 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33957(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33958 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33958(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33971 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33971(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33989 = arguments.length;
var i__5770__auto___33991 = (0);
while(true){
if((i__5770__auto___33991 < len__5769__auto___33989)){
args__5775__auto__.push((arguments[i__5770__auto___33991]));

var G__33996 = (i__5770__auto___33991 + (1));
i__5770__auto___33991 = G__33996;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31524){
var map__31525 = p__31524;
var map__31525__$1 = cljs.core.__destructure_map(map__31525);
var opts = map__31525__$1;
var statearr_31528_34009 = state;
(statearr_31528_34009[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31530_34014 = state;
(statearr_31530_34014[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_31532_34015 = state;
(statearr_31532_34015[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31515){
var G__31516 = cljs.core.first(seq31515);
var seq31515__$1 = cljs.core.next(seq31515);
var G__31518 = cljs.core.first(seq31515__$1);
var seq31515__$2 = cljs.core.next(seq31515__$1);
var G__31519 = cljs.core.first(seq31515__$2);
var seq31515__$3 = cljs.core.next(seq31515__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31516,G__31518,G__31519,seq31515__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31582 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31583){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31583 = meta31583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31584,meta31583__$1){
var self__ = this;
var _31584__$1 = this;
return (new cljs.core.async.t_cljs$core$async31582(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31583__$1));
}));

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31584){
var self__ = this;
var _31584__$1 = this;
return self__.meta31583;
}));

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31583","meta31583",1517025545,null)], null);
}));

(cljs.core.async.t_cljs$core$async31582.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31582");

(cljs.core.async.t_cljs$core$async31582.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31582");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31582.
 */
cljs.core.async.__GT_t_cljs$core$async31582 = (function cljs$core$async$__GT_t_cljs$core$async31582(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31583){
return (new cljs.core.async.t_cljs$core$async31582(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31583));
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
var m = (new cljs.core.async.t_cljs$core$async31582(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__29736__auto___34039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_31688){
var state_val_31689 = (state_31688[(1)]);
if((state_val_31689 === (7))){
var inst_31642 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
if(cljs.core.truth_(inst_31642)){
var statearr_31695_34040 = state_31688__$1;
(statearr_31695_34040[(1)] = (8));

} else {
var statearr_31696_34041 = state_31688__$1;
(statearr_31696_34041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (20))){
var inst_31632 = (state_31688[(7)]);
var state_31688__$1 = state_31688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31688__$1,(23),out,inst_31632);
} else {
if((state_val_31689 === (1))){
var inst_31610 = calc_state();
var inst_31611 = cljs.core.__destructure_map(inst_31610);
var inst_31612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31611,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31611,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31611,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31615 = inst_31610;
var state_31688__$1 = (function (){var statearr_31702 = state_31688;
(statearr_31702[(8)] = inst_31614);

(statearr_31702[(9)] = inst_31612);

(statearr_31702[(10)] = inst_31615);

(statearr_31702[(11)] = inst_31613);

return statearr_31702;
})();
var statearr_31704_34042 = state_31688__$1;
(statearr_31704_34042[(2)] = null);

(statearr_31704_34042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (24))){
var inst_31618 = (state_31688[(12)]);
var inst_31615 = inst_31618;
var state_31688__$1 = (function (){var statearr_31705 = state_31688;
(statearr_31705[(10)] = inst_31615);

return statearr_31705;
})();
var statearr_31706_34043 = state_31688__$1;
(statearr_31706_34043[(2)] = null);

(statearr_31706_34043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (4))){
var inst_31632 = (state_31688[(7)]);
var inst_31637 = (state_31688[(13)]);
var inst_31631 = (state_31688[(2)]);
var inst_31632__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31631,(0),null);
var inst_31633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31631,(1),null);
var inst_31637__$1 = (inst_31632__$1 == null);
var state_31688__$1 = (function (){var statearr_31709 = state_31688;
(statearr_31709[(7)] = inst_31632__$1);

(statearr_31709[(14)] = inst_31633);

(statearr_31709[(13)] = inst_31637__$1);

return statearr_31709;
})();
if(cljs.core.truth_(inst_31637__$1)){
var statearr_31710_34047 = state_31688__$1;
(statearr_31710_34047[(1)] = (5));

} else {
var statearr_31711_34048 = state_31688__$1;
(statearr_31711_34048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (15))){
var inst_31657 = (state_31688[(15)]);
var inst_31619 = (state_31688[(16)]);
var inst_31657__$1 = cljs.core.empty_QMARK_(inst_31619);
var state_31688__$1 = (function (){var statearr_31712 = state_31688;
(statearr_31712[(15)] = inst_31657__$1);

return statearr_31712;
})();
if(inst_31657__$1){
var statearr_31713_34049 = state_31688__$1;
(statearr_31713_34049[(1)] = (17));

} else {
var statearr_31714_34050 = state_31688__$1;
(statearr_31714_34050[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (21))){
var inst_31618 = (state_31688[(12)]);
var inst_31615 = inst_31618;
var state_31688__$1 = (function (){var statearr_31720 = state_31688;
(statearr_31720[(10)] = inst_31615);

return statearr_31720;
})();
var statearr_31721_34052 = state_31688__$1;
(statearr_31721_34052[(2)] = null);

(statearr_31721_34052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (13))){
var inst_31650 = (state_31688[(2)]);
var inst_31651 = calc_state();
var inst_31615 = inst_31651;
var state_31688__$1 = (function (){var statearr_31727 = state_31688;
(statearr_31727[(17)] = inst_31650);

(statearr_31727[(10)] = inst_31615);

return statearr_31727;
})();
var statearr_31728_34053 = state_31688__$1;
(statearr_31728_34053[(2)] = null);

(statearr_31728_34053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (22))){
var inst_31678 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31729_34060 = state_31688__$1;
(statearr_31729_34060[(2)] = inst_31678);

(statearr_31729_34060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (6))){
var inst_31633 = (state_31688[(14)]);
var inst_31640 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31633,change);
var state_31688__$1 = state_31688;
var statearr_31734_34061 = state_31688__$1;
(statearr_31734_34061[(2)] = inst_31640);

(statearr_31734_34061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (25))){
var state_31688__$1 = state_31688;
var statearr_31736_34068 = state_31688__$1;
(statearr_31736_34068[(2)] = null);

(statearr_31736_34068[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (17))){
var inst_31633 = (state_31688[(14)]);
var inst_31620 = (state_31688[(18)]);
var inst_31659 = (inst_31620.cljs$core$IFn$_invoke$arity$1 ? inst_31620.cljs$core$IFn$_invoke$arity$1(inst_31633) : inst_31620.call(null,inst_31633));
var inst_31660 = cljs.core.not(inst_31659);
var state_31688__$1 = state_31688;
var statearr_31740_34072 = state_31688__$1;
(statearr_31740_34072[(2)] = inst_31660);

(statearr_31740_34072[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (3))){
var inst_31682 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31688__$1,inst_31682);
} else {
if((state_val_31689 === (12))){
var state_31688__$1 = state_31688;
var statearr_31748_34075 = state_31688__$1;
(statearr_31748_34075[(2)] = null);

(statearr_31748_34075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (2))){
var inst_31618 = (state_31688[(12)]);
var inst_31615 = (state_31688[(10)]);
var inst_31618__$1 = cljs.core.__destructure_map(inst_31615);
var inst_31619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31618__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31618__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31618__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31688__$1 = (function (){var statearr_31752 = state_31688;
(statearr_31752[(16)] = inst_31619);

(statearr_31752[(12)] = inst_31618__$1);

(statearr_31752[(18)] = inst_31620);

return statearr_31752;
})();
return cljs.core.async.ioc_alts_BANG_(state_31688__$1,(4),inst_31621);
} else {
if((state_val_31689 === (23))){
var inst_31668 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
if(cljs.core.truth_(inst_31668)){
var statearr_31754_34077 = state_31688__$1;
(statearr_31754_34077[(1)] = (24));

} else {
var statearr_31755_34078 = state_31688__$1;
(statearr_31755_34078[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (19))){
var inst_31663 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31756_34079 = state_31688__$1;
(statearr_31756_34079[(2)] = inst_31663);

(statearr_31756_34079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (11))){
var inst_31633 = (state_31688[(14)]);
var inst_31647 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31633);
var state_31688__$1 = state_31688;
var statearr_31758_34081 = state_31688__$1;
(statearr_31758_34081[(2)] = inst_31647);

(statearr_31758_34081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (9))){
var inst_31619 = (state_31688[(16)]);
var inst_31654 = (state_31688[(19)]);
var inst_31633 = (state_31688[(14)]);
var inst_31654__$1 = (inst_31619.cljs$core$IFn$_invoke$arity$1 ? inst_31619.cljs$core$IFn$_invoke$arity$1(inst_31633) : inst_31619.call(null,inst_31633));
var state_31688__$1 = (function (){var statearr_31759 = state_31688;
(statearr_31759[(19)] = inst_31654__$1);

return statearr_31759;
})();
if(cljs.core.truth_(inst_31654__$1)){
var statearr_31760_34084 = state_31688__$1;
(statearr_31760_34084[(1)] = (14));

} else {
var statearr_31762_34085 = state_31688__$1;
(statearr_31762_34085[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (5))){
var inst_31637 = (state_31688[(13)]);
var state_31688__$1 = state_31688;
var statearr_31767_34086 = state_31688__$1;
(statearr_31767_34086[(2)] = inst_31637);

(statearr_31767_34086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (14))){
var inst_31654 = (state_31688[(19)]);
var state_31688__$1 = state_31688;
var statearr_31773_34088 = state_31688__$1;
(statearr_31773_34088[(2)] = inst_31654);

(statearr_31773_34088[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (26))){
var inst_31674 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31777_34089 = state_31688__$1;
(statearr_31777_34089[(2)] = inst_31674);

(statearr_31777_34089[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (16))){
var inst_31665 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
if(cljs.core.truth_(inst_31665)){
var statearr_31779_34090 = state_31688__$1;
(statearr_31779_34090[(1)] = (20));

} else {
var statearr_31780_34091 = state_31688__$1;
(statearr_31780_34091[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (10))){
var inst_31680 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31785_34092 = state_31688__$1;
(statearr_31785_34092[(2)] = inst_31680);

(statearr_31785_34092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (18))){
var inst_31657 = (state_31688[(15)]);
var state_31688__$1 = state_31688;
var statearr_31786_34093 = state_31688__$1;
(statearr_31786_34093[(2)] = inst_31657);

(statearr_31786_34093[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (8))){
var inst_31632 = (state_31688[(7)]);
var inst_31645 = (inst_31632 == null);
var state_31688__$1 = state_31688;
if(cljs.core.truth_(inst_31645)){
var statearr_31790_34094 = state_31688__$1;
(statearr_31790_34094[(1)] = (11));

} else {
var statearr_31791_34095 = state_31688__$1;
(statearr_31791_34095[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__29095__auto__ = null;
var cljs$core$async$mix_$_state_machine__29095__auto____0 = (function (){
var statearr_31799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31799[(0)] = cljs$core$async$mix_$_state_machine__29095__auto__);

(statearr_31799[(1)] = (1));

return statearr_31799;
});
var cljs$core$async$mix_$_state_machine__29095__auto____1 = (function (state_31688){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_31688);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e31803){var ex__29098__auto__ = e31803;
var statearr_31804_34096 = state_31688;
(statearr_31804_34096[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_31688[(4)]))){
var statearr_31806_34097 = state_31688;
(statearr_31806_34097[(1)] = cljs.core.first((state_31688[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34098 = state_31688;
state_31688 = G__34098;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29095__auto__ = function(state_31688){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29095__auto____1.call(this,state_31688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29095__auto____0;
cljs$core$async$mix_$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29095__auto____1;
return cljs$core$async$mix_$_state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_31807 = f__29737__auto__();
(statearr_31807[(6)] = c__29736__auto___34039);

return statearr_31807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34100 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_34100(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34103 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_34103(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34108 = (function() {
var G__34109 = null;
var G__34109__1 = (function (p){
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
var G__34109__2 = (function (p,v){
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
G__34109 = function(p,v){
switch(arguments.length){
case 1:
return G__34109__1.call(this,p);
case 2:
return G__34109__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34109.cljs$core$IFn$_invoke$arity$1 = G__34109__1;
G__34109.cljs$core$IFn$_invoke$arity$2 = G__34109__2;
return G__34109;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31830 = arguments.length;
switch (G__31830) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34108(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34108(p,v);
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
cljs.core.async.t_cljs$core$async31838 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31839){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31839 = meta31839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31840,meta31839__$1){
var self__ = this;
var _31840__$1 = this;
return (new cljs.core.async.t_cljs$core$async31838(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31839__$1));
}));

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31840){
var self__ = this;
var _31840__$1 = this;
return self__.meta31839;
}));

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31838.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31839","meta31839",-1270264481,null)], null);
}));

(cljs.core.async.t_cljs$core$async31838.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31838");

(cljs.core.async.t_cljs$core$async31838.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31838");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31838.
 */
cljs.core.async.__GT_t_cljs$core$async31838 = (function cljs$core$async$__GT_t_cljs$core$async31838(ch,topic_fn,buf_fn,mults,ensure_mult,meta31839){
return (new cljs.core.async.t_cljs$core$async31838(ch,topic_fn,buf_fn,mults,ensure_mult,meta31839));
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
var G__31836 = arguments.length;
switch (G__31836) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31834_SHARP_){
if(cljs.core.truth_((p1__31834_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31834_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31834_SHARP_.call(null,topic)))){
return p1__31834_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31834_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async31838(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__29736__auto___34122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_31928){
var state_val_31933 = (state_31928[(1)]);
if((state_val_31933 === (7))){
var inst_31920 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31938_34124 = state_31928__$1;
(statearr_31938_34124[(2)] = inst_31920);

(statearr_31938_34124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (20))){
var state_31928__$1 = state_31928;
var statearr_31941_34125 = state_31928__$1;
(statearr_31941_34125[(2)] = null);

(statearr_31941_34125[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (1))){
var state_31928__$1 = state_31928;
var statearr_31943_34126 = state_31928__$1;
(statearr_31943_34126[(2)] = null);

(statearr_31943_34126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (24))){
var inst_31902 = (state_31928[(7)]);
var inst_31911 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31902);
var state_31928__$1 = state_31928;
var statearr_31944_34129 = state_31928__$1;
(statearr_31944_34129[(2)] = inst_31911);

(statearr_31944_34129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (4))){
var inst_31852 = (state_31928[(8)]);
var inst_31852__$1 = (state_31928[(2)]);
var inst_31853 = (inst_31852__$1 == null);
var state_31928__$1 = (function (){var statearr_31946 = state_31928;
(statearr_31946[(8)] = inst_31852__$1);

return statearr_31946;
})();
if(cljs.core.truth_(inst_31853)){
var statearr_31947_34131 = state_31928__$1;
(statearr_31947_34131[(1)] = (5));

} else {
var statearr_31948_34132 = state_31928__$1;
(statearr_31948_34132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (15))){
var inst_31896 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31949_34133 = state_31928__$1;
(statearr_31949_34133[(2)] = inst_31896);

(statearr_31949_34133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (21))){
var inst_31916 = (state_31928[(2)]);
var state_31928__$1 = (function (){var statearr_31950 = state_31928;
(statearr_31950[(9)] = inst_31916);

return statearr_31950;
})();
var statearr_31953_34136 = state_31928__$1;
(statearr_31953_34136[(2)] = null);

(statearr_31953_34136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (13))){
var inst_31876 = (state_31928[(10)]);
var inst_31879 = cljs.core.chunked_seq_QMARK_(inst_31876);
var state_31928__$1 = state_31928;
if(inst_31879){
var statearr_31958_34140 = state_31928__$1;
(statearr_31958_34140[(1)] = (16));

} else {
var statearr_31959_34141 = state_31928__$1;
(statearr_31959_34141[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (22))){
var inst_31908 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
if(cljs.core.truth_(inst_31908)){
var statearr_31962_34143 = state_31928__$1;
(statearr_31962_34143[(1)] = (23));

} else {
var statearr_31963_34144 = state_31928__$1;
(statearr_31963_34144[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (6))){
var inst_31902 = (state_31928[(7)]);
var inst_31852 = (state_31928[(8)]);
var inst_31904 = (state_31928[(11)]);
var inst_31902__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31852) : topic_fn.call(null,inst_31852));
var inst_31903 = cljs.core.deref(mults);
var inst_31904__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31903,inst_31902__$1);
var state_31928__$1 = (function (){var statearr_31964 = state_31928;
(statearr_31964[(7)] = inst_31902__$1);

(statearr_31964[(11)] = inst_31904__$1);

return statearr_31964;
})();
if(cljs.core.truth_(inst_31904__$1)){
var statearr_31990_34154 = state_31928__$1;
(statearr_31990_34154[(1)] = (19));

} else {
var statearr_31996_34155 = state_31928__$1;
(statearr_31996_34155[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (25))){
var inst_31913 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31998_34158 = state_31928__$1;
(statearr_31998_34158[(2)] = inst_31913);

(statearr_31998_34158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (17))){
var inst_31876 = (state_31928[(10)]);
var inst_31887 = cljs.core.first(inst_31876);
var inst_31888 = cljs.core.async.muxch_STAR_(inst_31887);
var inst_31889 = cljs.core.async.close_BANG_(inst_31888);
var inst_31890 = cljs.core.next(inst_31876);
var inst_31862 = inst_31890;
var inst_31863 = null;
var inst_31864 = (0);
var inst_31865 = (0);
var state_31928__$1 = (function (){var statearr_31999 = state_31928;
(statearr_31999[(12)] = inst_31862);

(statearr_31999[(13)] = inst_31889);

(statearr_31999[(14)] = inst_31864);

(statearr_31999[(15)] = inst_31863);

(statearr_31999[(16)] = inst_31865);

return statearr_31999;
})();
var statearr_32000_34162 = state_31928__$1;
(statearr_32000_34162[(2)] = null);

(statearr_32000_34162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (3))){
var inst_31922 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31928__$1,inst_31922);
} else {
if((state_val_31933 === (12))){
var inst_31898 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_32003_34163 = state_31928__$1;
(statearr_32003_34163[(2)] = inst_31898);

(statearr_32003_34163[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (2))){
var state_31928__$1 = state_31928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31928__$1,(4),ch);
} else {
if((state_val_31933 === (23))){
var state_31928__$1 = state_31928;
var statearr_32011_34164 = state_31928__$1;
(statearr_32011_34164[(2)] = null);

(statearr_32011_34164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (19))){
var inst_31852 = (state_31928[(8)]);
var inst_31904 = (state_31928[(11)]);
var inst_31906 = cljs.core.async.muxch_STAR_(inst_31904);
var state_31928__$1 = state_31928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31928__$1,(22),inst_31906,inst_31852);
} else {
if((state_val_31933 === (11))){
var inst_31862 = (state_31928[(12)]);
var inst_31876 = (state_31928[(10)]);
var inst_31876__$1 = cljs.core.seq(inst_31862);
var state_31928__$1 = (function (){var statearr_32022 = state_31928;
(statearr_32022[(10)] = inst_31876__$1);

return statearr_32022;
})();
if(inst_31876__$1){
var statearr_32026_34165 = state_31928__$1;
(statearr_32026_34165[(1)] = (13));

} else {
var statearr_32027_34167 = state_31928__$1;
(statearr_32027_34167[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (9))){
var inst_31900 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_32031_34171 = state_31928__$1;
(statearr_32031_34171[(2)] = inst_31900);

(statearr_32031_34171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (5))){
var inst_31859 = cljs.core.deref(mults);
var inst_31860 = cljs.core.vals(inst_31859);
var inst_31861 = cljs.core.seq(inst_31860);
var inst_31862 = inst_31861;
var inst_31863 = null;
var inst_31864 = (0);
var inst_31865 = (0);
var state_31928__$1 = (function (){var statearr_32033 = state_31928;
(statearr_32033[(12)] = inst_31862);

(statearr_32033[(14)] = inst_31864);

(statearr_32033[(15)] = inst_31863);

(statearr_32033[(16)] = inst_31865);

return statearr_32033;
})();
var statearr_32037_34172 = state_31928__$1;
(statearr_32037_34172[(2)] = null);

(statearr_32037_34172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (14))){
var state_31928__$1 = state_31928;
var statearr_32044_34177 = state_31928__$1;
(statearr_32044_34177[(2)] = null);

(statearr_32044_34177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (16))){
var inst_31876 = (state_31928[(10)]);
var inst_31882 = cljs.core.chunk_first(inst_31876);
var inst_31883 = cljs.core.chunk_rest(inst_31876);
var inst_31884 = cljs.core.count(inst_31882);
var inst_31862 = inst_31883;
var inst_31863 = inst_31882;
var inst_31864 = inst_31884;
var inst_31865 = (0);
var state_31928__$1 = (function (){var statearr_32051 = state_31928;
(statearr_32051[(12)] = inst_31862);

(statearr_32051[(14)] = inst_31864);

(statearr_32051[(15)] = inst_31863);

(statearr_32051[(16)] = inst_31865);

return statearr_32051;
})();
var statearr_32054_34181 = state_31928__$1;
(statearr_32054_34181[(2)] = null);

(statearr_32054_34181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (10))){
var inst_31862 = (state_31928[(12)]);
var inst_31864 = (state_31928[(14)]);
var inst_31863 = (state_31928[(15)]);
var inst_31865 = (state_31928[(16)]);
var inst_31870 = cljs.core._nth(inst_31863,inst_31865);
var inst_31871 = cljs.core.async.muxch_STAR_(inst_31870);
var inst_31872 = cljs.core.async.close_BANG_(inst_31871);
var inst_31873 = (inst_31865 + (1));
var tmp32041 = inst_31862;
var tmp32042 = inst_31864;
var tmp32043 = inst_31863;
var inst_31862__$1 = tmp32041;
var inst_31863__$1 = tmp32043;
var inst_31864__$1 = tmp32042;
var inst_31865__$1 = inst_31873;
var state_31928__$1 = (function (){var statearr_32063 = state_31928;
(statearr_32063[(12)] = inst_31862__$1);

(statearr_32063[(14)] = inst_31864__$1);

(statearr_32063[(15)] = inst_31863__$1);

(statearr_32063[(17)] = inst_31872);

(statearr_32063[(16)] = inst_31865__$1);

return statearr_32063;
})();
var statearr_32064_34182 = state_31928__$1;
(statearr_32064_34182[(2)] = null);

(statearr_32064_34182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (18))){
var inst_31893 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_32072_34186 = state_31928__$1;
(statearr_32072_34186[(2)] = inst_31893);

(statearr_32072_34186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (8))){
var inst_31864 = (state_31928[(14)]);
var inst_31865 = (state_31928[(16)]);
var inst_31867 = (inst_31865 < inst_31864);
var inst_31868 = inst_31867;
var state_31928__$1 = state_31928;
if(cljs.core.truth_(inst_31868)){
var statearr_32081_34187 = state_31928__$1;
(statearr_32081_34187[(1)] = (10));

} else {
var statearr_32082_34188 = state_31928__$1;
(statearr_32082_34188[(1)] = (11));

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
var cljs$core$async$state_machine__29095__auto__ = null;
var cljs$core$async$state_machine__29095__auto____0 = (function (){
var statearr_32089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32089[(0)] = cljs$core$async$state_machine__29095__auto__);

(statearr_32089[(1)] = (1));

return statearr_32089;
});
var cljs$core$async$state_machine__29095__auto____1 = (function (state_31928){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_31928);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e32091){var ex__29098__auto__ = e32091;
var statearr_32092_34196 = state_31928;
(statearr_32092_34196[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_31928[(4)]))){
var statearr_32093_34197 = state_31928;
(statearr_32093_34197[(1)] = cljs.core.first((state_31928[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34198 = state_31928;
state_31928 = G__34198;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$state_machine__29095__auto__ = function(state_31928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29095__auto____1.call(this,state_31928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29095__auto____0;
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29095__auto____1;
return cljs$core$async$state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_32095 = f__29737__auto__();
(statearr_32095[(6)] = c__29736__auto___34122);

return statearr_32095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
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
var G__32109 = arguments.length;
switch (G__32109) {
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
var G__32119 = arguments.length;
switch (G__32119) {
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
var G__32127 = arguments.length;
switch (G__32127) {
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
var c__29736__auto___34211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_32194){
var state_val_32195 = (state_32194[(1)]);
if((state_val_32195 === (7))){
var state_32194__$1 = state_32194;
var statearr_32196_34212 = state_32194__$1;
(statearr_32196_34212[(2)] = null);

(statearr_32196_34212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (1))){
var state_32194__$1 = state_32194;
var statearr_32197_34213 = state_32194__$1;
(statearr_32197_34213[(2)] = null);

(statearr_32197_34213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (4))){
var inst_32142 = (state_32194[(7)]);
var inst_32141 = (state_32194[(8)]);
var inst_32144 = (inst_32142 < inst_32141);
var state_32194__$1 = state_32194;
if(cljs.core.truth_(inst_32144)){
var statearr_32198_34218 = state_32194__$1;
(statearr_32198_34218[(1)] = (6));

} else {
var statearr_32199_34219 = state_32194__$1;
(statearr_32199_34219[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (15))){
var inst_32180 = (state_32194[(9)]);
var inst_32185 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32180);
var state_32194__$1 = state_32194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32194__$1,(17),out,inst_32185);
} else {
if((state_val_32195 === (13))){
var inst_32180 = (state_32194[(9)]);
var inst_32180__$1 = (state_32194[(2)]);
var inst_32181 = cljs.core.some(cljs.core.nil_QMARK_,inst_32180__$1);
var state_32194__$1 = (function (){var statearr_32203 = state_32194;
(statearr_32203[(9)] = inst_32180__$1);

return statearr_32203;
})();
if(cljs.core.truth_(inst_32181)){
var statearr_32204_34225 = state_32194__$1;
(statearr_32204_34225[(1)] = (14));

} else {
var statearr_32208_34226 = state_32194__$1;
(statearr_32208_34226[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (6))){
var state_32194__$1 = state_32194;
var statearr_32209_34227 = state_32194__$1;
(statearr_32209_34227[(2)] = null);

(statearr_32209_34227[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (17))){
var inst_32187 = (state_32194[(2)]);
var state_32194__$1 = (function (){var statearr_32214 = state_32194;
(statearr_32214[(10)] = inst_32187);

return statearr_32214;
})();
var statearr_32215_34229 = state_32194__$1;
(statearr_32215_34229[(2)] = null);

(statearr_32215_34229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (3))){
var inst_32192 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32194__$1,inst_32192);
} else {
if((state_val_32195 === (12))){
var _ = (function (){var statearr_32217 = state_32194;
(statearr_32217[(4)] = cljs.core.rest((state_32194[(4)])));

return statearr_32217;
})();
var state_32194__$1 = state_32194;
var ex32212 = (state_32194__$1[(2)]);
var statearr_32221_34231 = state_32194__$1;
(statearr_32221_34231[(5)] = ex32212);


if((ex32212 instanceof Object)){
var statearr_32222_34232 = state_32194__$1;
(statearr_32222_34232[(1)] = (11));

(statearr_32222_34232[(5)] = null);

} else {
throw ex32212;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (2))){
var inst_32140 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32141 = cnt;
var inst_32142 = (0);
var state_32194__$1 = (function (){var statearr_32227 = state_32194;
(statearr_32227[(7)] = inst_32142);

(statearr_32227[(11)] = inst_32140);

(statearr_32227[(8)] = inst_32141);

return statearr_32227;
})();
var statearr_32228_34233 = state_32194__$1;
(statearr_32228_34233[(2)] = null);

(statearr_32228_34233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (11))){
var inst_32153 = (state_32194[(2)]);
var inst_32156 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32194__$1 = (function (){var statearr_32229 = state_32194;
(statearr_32229[(12)] = inst_32153);

return statearr_32229;
})();
var statearr_32230_34234 = state_32194__$1;
(statearr_32230_34234[(2)] = inst_32156);

(statearr_32230_34234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (9))){
var inst_32142 = (state_32194[(7)]);
var _ = (function (){var statearr_32231 = state_32194;
(statearr_32231[(4)] = cljs.core.cons((12),(state_32194[(4)])));

return statearr_32231;
})();
var inst_32164 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32142) : chs__$1.call(null,inst_32142));
var inst_32165 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32142) : done.call(null,inst_32142));
var inst_32166 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32164,inst_32165);
var ___$1 = (function (){var statearr_32232 = state_32194;
(statearr_32232[(4)] = cljs.core.rest((state_32194[(4)])));

return statearr_32232;
})();
var state_32194__$1 = state_32194;
var statearr_32233_34236 = state_32194__$1;
(statearr_32233_34236[(2)] = inst_32166);

(statearr_32233_34236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (5))){
var inst_32178 = (state_32194[(2)]);
var state_32194__$1 = (function (){var statearr_32234 = state_32194;
(statearr_32234[(13)] = inst_32178);

return statearr_32234;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32194__$1,(13),dchan);
} else {
if((state_val_32195 === (14))){
var inst_32183 = cljs.core.async.close_BANG_(out);
var state_32194__$1 = state_32194;
var statearr_32241_34237 = state_32194__$1;
(statearr_32241_34237[(2)] = inst_32183);

(statearr_32241_34237[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (16))){
var inst_32190 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
var statearr_32242_34242 = state_32194__$1;
(statearr_32242_34242[(2)] = inst_32190);

(statearr_32242_34242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (10))){
var inst_32142 = (state_32194[(7)]);
var inst_32169 = (state_32194[(2)]);
var inst_32172 = (inst_32142 + (1));
var inst_32142__$1 = inst_32172;
var state_32194__$1 = (function (){var statearr_32243 = state_32194;
(statearr_32243[(7)] = inst_32142__$1);

(statearr_32243[(14)] = inst_32169);

return statearr_32243;
})();
var statearr_32244_34248 = state_32194__$1;
(statearr_32244_34248[(2)] = null);

(statearr_32244_34248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32195 === (8))){
var inst_32176 = (state_32194[(2)]);
var state_32194__$1 = state_32194;
var statearr_32245_34253 = state_32194__$1;
(statearr_32245_34253[(2)] = inst_32176);

(statearr_32245_34253[(1)] = (5));


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
var cljs$core$async$state_machine__29095__auto__ = null;
var cljs$core$async$state_machine__29095__auto____0 = (function (){
var statearr_32246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32246[(0)] = cljs$core$async$state_machine__29095__auto__);

(statearr_32246[(1)] = (1));

return statearr_32246;
});
var cljs$core$async$state_machine__29095__auto____1 = (function (state_32194){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_32194);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e32248){var ex__29098__auto__ = e32248;
var statearr_32249_34261 = state_32194;
(statearr_32249_34261[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_32194[(4)]))){
var statearr_32250_34266 = state_32194;
(statearr_32250_34266[(1)] = cljs.core.first((state_32194[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34268 = state_32194;
state_32194 = G__34268;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$state_machine__29095__auto__ = function(state_32194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29095__auto____1.call(this,state_32194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29095__auto____0;
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29095__auto____1;
return cljs$core$async$state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_32251 = f__29737__auto__();
(statearr_32251[(6)] = c__29736__auto___34211);

return statearr_32251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
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
var G__32258 = arguments.length;
switch (G__32258) {
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
var c__29736__auto___34277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_32300){
var state_val_32301 = (state_32300[(1)]);
if((state_val_32301 === (7))){
var inst_32274 = (state_32300[(7)]);
var inst_32275 = (state_32300[(8)]);
var inst_32274__$1 = (state_32300[(2)]);
var inst_32275__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32274__$1,(0),null);
var inst_32276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32274__$1,(1),null);
var inst_32277 = (inst_32275__$1 == null);
var state_32300__$1 = (function (){var statearr_32306 = state_32300;
(statearr_32306[(7)] = inst_32274__$1);

(statearr_32306[(9)] = inst_32276);

(statearr_32306[(8)] = inst_32275__$1);

return statearr_32306;
})();
if(cljs.core.truth_(inst_32277)){
var statearr_32308_34287 = state_32300__$1;
(statearr_32308_34287[(1)] = (8));

} else {
var statearr_32309_34288 = state_32300__$1;
(statearr_32309_34288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (1))){
var inst_32263 = cljs.core.vec(chs);
var inst_32264 = inst_32263;
var state_32300__$1 = (function (){var statearr_32310 = state_32300;
(statearr_32310[(10)] = inst_32264);

return statearr_32310;
})();
var statearr_32318_34289 = state_32300__$1;
(statearr_32318_34289[(2)] = null);

(statearr_32318_34289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (4))){
var inst_32264 = (state_32300[(10)]);
var state_32300__$1 = state_32300;
return cljs.core.async.ioc_alts_BANG_(state_32300__$1,(7),inst_32264);
} else {
if((state_val_32301 === (6))){
var inst_32295 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
var statearr_32320_34290 = state_32300__$1;
(statearr_32320_34290[(2)] = inst_32295);

(statearr_32320_34290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (3))){
var inst_32297 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32300__$1,inst_32297);
} else {
if((state_val_32301 === (2))){
var inst_32264 = (state_32300[(10)]);
var inst_32266 = cljs.core.count(inst_32264);
var inst_32267 = (inst_32266 > (0));
var state_32300__$1 = state_32300;
if(cljs.core.truth_(inst_32267)){
var statearr_32323_34296 = state_32300__$1;
(statearr_32323_34296[(1)] = (4));

} else {
var statearr_32324_34297 = state_32300__$1;
(statearr_32324_34297[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (11))){
var inst_32264 = (state_32300[(10)]);
var inst_32288 = (state_32300[(2)]);
var tmp32321 = inst_32264;
var inst_32264__$1 = tmp32321;
var state_32300__$1 = (function (){var statearr_32329 = state_32300;
(statearr_32329[(10)] = inst_32264__$1);

(statearr_32329[(11)] = inst_32288);

return statearr_32329;
})();
var statearr_32330_34298 = state_32300__$1;
(statearr_32330_34298[(2)] = null);

(statearr_32330_34298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (9))){
var inst_32275 = (state_32300[(8)]);
var state_32300__$1 = state_32300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32300__$1,(11),out,inst_32275);
} else {
if((state_val_32301 === (5))){
var inst_32293 = cljs.core.async.close_BANG_(out);
var state_32300__$1 = state_32300;
var statearr_32337_34311 = state_32300__$1;
(statearr_32337_34311[(2)] = inst_32293);

(statearr_32337_34311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (10))){
var inst_32291 = (state_32300[(2)]);
var state_32300__$1 = state_32300;
var statearr_32339_34316 = state_32300__$1;
(statearr_32339_34316[(2)] = inst_32291);

(statearr_32339_34316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32301 === (8))){
var inst_32274 = (state_32300[(7)]);
var inst_32276 = (state_32300[(9)]);
var inst_32275 = (state_32300[(8)]);
var inst_32264 = (state_32300[(10)]);
var inst_32282 = (function (){var cs = inst_32264;
var vec__32270 = inst_32274;
var v = inst_32275;
var c = inst_32276;
return (function (p1__32256_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32256_SHARP_);
});
})();
var inst_32283 = cljs.core.filterv(inst_32282,inst_32264);
var inst_32264__$1 = inst_32283;
var state_32300__$1 = (function (){var statearr_32344 = state_32300;
(statearr_32344[(10)] = inst_32264__$1);

return statearr_32344;
})();
var statearr_32345_34321 = state_32300__$1;
(statearr_32345_34321[(2)] = null);

(statearr_32345_34321[(1)] = (2));


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
var cljs$core$async$state_machine__29095__auto__ = null;
var cljs$core$async$state_machine__29095__auto____0 = (function (){
var statearr_32346 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32346[(0)] = cljs$core$async$state_machine__29095__auto__);

(statearr_32346[(1)] = (1));

return statearr_32346;
});
var cljs$core$async$state_machine__29095__auto____1 = (function (state_32300){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_32300);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e32347){var ex__29098__auto__ = e32347;
var statearr_32348_34322 = state_32300;
(statearr_32348_34322[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_32300[(4)]))){
var statearr_32349_34324 = state_32300;
(statearr_32349_34324[(1)] = cljs.core.first((state_32300[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34328 = state_32300;
state_32300 = G__34328;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$state_machine__29095__auto__ = function(state_32300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29095__auto____1.call(this,state_32300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29095__auto____0;
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29095__auto____1;
return cljs$core$async$state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_32351 = f__29737__auto__();
(statearr_32351[(6)] = c__29736__auto___34277);

return statearr_32351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
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
var G__32361 = arguments.length;
switch (G__32361) {
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
var c__29736__auto___34330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_32385){
var state_val_32386 = (state_32385[(1)]);
if((state_val_32386 === (7))){
var inst_32367 = (state_32385[(7)]);
var inst_32367__$1 = (state_32385[(2)]);
var inst_32368 = (inst_32367__$1 == null);
var inst_32369 = cljs.core.not(inst_32368);
var state_32385__$1 = (function (){var statearr_32390 = state_32385;
(statearr_32390[(7)] = inst_32367__$1);

return statearr_32390;
})();
if(inst_32369){
var statearr_32391_34333 = state_32385__$1;
(statearr_32391_34333[(1)] = (8));

} else {
var statearr_32392_34334 = state_32385__$1;
(statearr_32392_34334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (1))){
var inst_32362 = (0);
var state_32385__$1 = (function (){var statearr_32393 = state_32385;
(statearr_32393[(8)] = inst_32362);

return statearr_32393;
})();
var statearr_32394_34335 = state_32385__$1;
(statearr_32394_34335[(2)] = null);

(statearr_32394_34335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (4))){
var state_32385__$1 = state_32385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32385__$1,(7),ch);
} else {
if((state_val_32386 === (6))){
var inst_32380 = (state_32385[(2)]);
var state_32385__$1 = state_32385;
var statearr_32397_34336 = state_32385__$1;
(statearr_32397_34336[(2)] = inst_32380);

(statearr_32397_34336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (3))){
var inst_32382 = (state_32385[(2)]);
var inst_32383 = cljs.core.async.close_BANG_(out);
var state_32385__$1 = (function (){var statearr_32398 = state_32385;
(statearr_32398[(9)] = inst_32382);

return statearr_32398;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32385__$1,inst_32383);
} else {
if((state_val_32386 === (2))){
var inst_32362 = (state_32385[(8)]);
var inst_32364 = (inst_32362 < n);
var state_32385__$1 = state_32385;
if(cljs.core.truth_(inst_32364)){
var statearr_32403_34337 = state_32385__$1;
(statearr_32403_34337[(1)] = (4));

} else {
var statearr_32404_34339 = state_32385__$1;
(statearr_32404_34339[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (11))){
var inst_32362 = (state_32385[(8)]);
var inst_32372 = (state_32385[(2)]);
var inst_32373 = (inst_32362 + (1));
var inst_32362__$1 = inst_32373;
var state_32385__$1 = (function (){var statearr_32405 = state_32385;
(statearr_32405[(8)] = inst_32362__$1);

(statearr_32405[(10)] = inst_32372);

return statearr_32405;
})();
var statearr_32406_34343 = state_32385__$1;
(statearr_32406_34343[(2)] = null);

(statearr_32406_34343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (9))){
var state_32385__$1 = state_32385;
var statearr_32407_34344 = state_32385__$1;
(statearr_32407_34344[(2)] = null);

(statearr_32407_34344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (5))){
var state_32385__$1 = state_32385;
var statearr_32408_34345 = state_32385__$1;
(statearr_32408_34345[(2)] = null);

(statearr_32408_34345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (10))){
var inst_32377 = (state_32385[(2)]);
var state_32385__$1 = state_32385;
var statearr_32409_34347 = state_32385__$1;
(statearr_32409_34347[(2)] = inst_32377);

(statearr_32409_34347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32386 === (8))){
var inst_32367 = (state_32385[(7)]);
var state_32385__$1 = state_32385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32385__$1,(11),out,inst_32367);
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
var cljs$core$async$state_machine__29095__auto__ = null;
var cljs$core$async$state_machine__29095__auto____0 = (function (){
var statearr_32425 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32425[(0)] = cljs$core$async$state_machine__29095__auto__);

(statearr_32425[(1)] = (1));

return statearr_32425;
});
var cljs$core$async$state_machine__29095__auto____1 = (function (state_32385){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_32385);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e32433){var ex__29098__auto__ = e32433;
var statearr_32434_34349 = state_32385;
(statearr_32434_34349[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_32385[(4)]))){
var statearr_32435_34350 = state_32385;
(statearr_32435_34350[(1)] = cljs.core.first((state_32385[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34351 = state_32385;
state_32385 = G__34351;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$state_machine__29095__auto__ = function(state_32385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29095__auto____1.call(this,state_32385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29095__auto____0;
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29095__auto____1;
return cljs$core$async$state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_32436 = f__29737__auto__();
(statearr_32436[(6)] = c__29736__auto___34330);

return statearr_32436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
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
cljs.core.async.t_cljs$core$async32444 = (function (f,ch,meta32442,_,fn1,meta32445){
this.f = f;
this.ch = ch;
this.meta32442 = meta32442;
this._ = _;
this.fn1 = fn1;
this.meta32445 = meta32445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32446,meta32445__$1){
var self__ = this;
var _32446__$1 = this;
return (new cljs.core.async.t_cljs$core$async32444(self__.f,self__.ch,self__.meta32442,self__._,self__.fn1,meta32445__$1));
}));

(cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32446){
var self__ = this;
var _32446__$1 = this;
return self__.meta32445;
}));

(cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32440_SHARP_){
var G__32453 = (((p1__32440_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32440_SHARP_) : self__.f.call(null,p1__32440_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32453) : f1.call(null,G__32453));
});
}));

(cljs.core.async.t_cljs$core$async32444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32442","meta32442",-422501927,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32441","cljs.core.async/t_cljs$core$async32441",1286582520,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32445","meta32445",-1373296100,null)], null);
}));

(cljs.core.async.t_cljs$core$async32444.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32444");

(cljs.core.async.t_cljs$core$async32444.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32444");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32444.
 */
cljs.core.async.__GT_t_cljs$core$async32444 = (function cljs$core$async$__GT_t_cljs$core$async32444(f,ch,meta32442,_,fn1,meta32445){
return (new cljs.core.async.t_cljs$core$async32444(f,ch,meta32442,_,fn1,meta32445));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32441 = (function (f,ch,meta32442){
this.f = f;
this.ch = ch;
this.meta32442 = meta32442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32443,meta32442__$1){
var self__ = this;
var _32443__$1 = this;
return (new cljs.core.async.t_cljs$core$async32441(self__.f,self__.ch,meta32442__$1));
}));

(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32443){
var self__ = this;
var _32443__$1 = this;
return self__.meta32442;
}));

(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async32444(self__.f,self__.ch,self__.meta32442,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32462 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32462) : self__.f.call(null,G__32462));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32441.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32442","meta32442",-422501927,null)], null);
}));

(cljs.core.async.t_cljs$core$async32441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32441");

(cljs.core.async.t_cljs$core$async32441.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32441.
 */
cljs.core.async.__GT_t_cljs$core$async32441 = (function cljs$core$async$__GT_t_cljs$core$async32441(f,ch,meta32442){
return (new cljs.core.async.t_cljs$core$async32441(f,ch,meta32442));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32441(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32467 = (function (f,ch,meta32468){
this.f = f;
this.ch = ch;
this.meta32468 = meta32468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32469,meta32468__$1){
var self__ = this;
var _32469__$1 = this;
return (new cljs.core.async.t_cljs$core$async32467(self__.f,self__.ch,meta32468__$1));
}));

(cljs.core.async.t_cljs$core$async32467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32469){
var self__ = this;
var _32469__$1 = this;
return self__.meta32468;
}));

(cljs.core.async.t_cljs$core$async32467.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32467.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32467.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32467.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32467.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32467.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32468","meta32468",-345538196,null)], null);
}));

(cljs.core.async.t_cljs$core$async32467.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32467");

(cljs.core.async.t_cljs$core$async32467.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32467");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32467.
 */
cljs.core.async.__GT_t_cljs$core$async32467 = (function cljs$core$async$__GT_t_cljs$core$async32467(f,ch,meta32468){
return (new cljs.core.async.t_cljs$core$async32467(f,ch,meta32468));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32467(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32485 = (function (p,ch,meta32486){
this.p = p;
this.ch = ch;
this.meta32486 = meta32486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32487,meta32486__$1){
var self__ = this;
var _32487__$1 = this;
return (new cljs.core.async.t_cljs$core$async32485(self__.p,self__.ch,meta32486__$1));
}));

(cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32487){
var self__ = this;
var _32487__$1 = this;
return self__.meta32486;
}));

(cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32485.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32486","meta32486",-880121618,null)], null);
}));

(cljs.core.async.t_cljs$core$async32485.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32485");

(cljs.core.async.t_cljs$core$async32485.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32485");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32485.
 */
cljs.core.async.__GT_t_cljs$core$async32485 = (function cljs$core$async$__GT_t_cljs$core$async32485(p,ch,meta32486){
return (new cljs.core.async.t_cljs$core$async32485(p,ch,meta32486));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async32485(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32520 = arguments.length;
switch (G__32520) {
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
var c__29736__auto___34397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_32555){
var state_val_32556 = (state_32555[(1)]);
if((state_val_32556 === (7))){
var inst_32551 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32559_34411 = state_32555__$1;
(statearr_32559_34411[(2)] = inst_32551);

(statearr_32559_34411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (1))){
var state_32555__$1 = state_32555;
var statearr_32560_34418 = state_32555__$1;
(statearr_32560_34418[(2)] = null);

(statearr_32560_34418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (4))){
var inst_32537 = (state_32555[(7)]);
var inst_32537__$1 = (state_32555[(2)]);
var inst_32538 = (inst_32537__$1 == null);
var state_32555__$1 = (function (){var statearr_32561 = state_32555;
(statearr_32561[(7)] = inst_32537__$1);

return statearr_32561;
})();
if(cljs.core.truth_(inst_32538)){
var statearr_32562_34423 = state_32555__$1;
(statearr_32562_34423[(1)] = (5));

} else {
var statearr_32566_34425 = state_32555__$1;
(statearr_32566_34425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (6))){
var inst_32537 = (state_32555[(7)]);
var inst_32542 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32537) : p.call(null,inst_32537));
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32542)){
var statearr_32568_34434 = state_32555__$1;
(statearr_32568_34434[(1)] = (8));

} else {
var statearr_32570_34436 = state_32555__$1;
(statearr_32570_34436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (3))){
var inst_32553 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32555__$1,inst_32553);
} else {
if((state_val_32556 === (2))){
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32555__$1,(4),ch);
} else {
if((state_val_32556 === (11))){
var inst_32545 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32575_34437 = state_32555__$1;
(statearr_32575_34437[(2)] = inst_32545);

(statearr_32575_34437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (9))){
var state_32555__$1 = state_32555;
var statearr_32576_34439 = state_32555__$1;
(statearr_32576_34439[(2)] = null);

(statearr_32576_34439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (5))){
var inst_32540 = cljs.core.async.close_BANG_(out);
var state_32555__$1 = state_32555;
var statearr_32577_34457 = state_32555__$1;
(statearr_32577_34457[(2)] = inst_32540);

(statearr_32577_34457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (10))){
var inst_32548 = (state_32555[(2)]);
var state_32555__$1 = (function (){var statearr_32578 = state_32555;
(statearr_32578[(8)] = inst_32548);

return statearr_32578;
})();
var statearr_32579_34458 = state_32555__$1;
(statearr_32579_34458[(2)] = null);

(statearr_32579_34458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (8))){
var inst_32537 = (state_32555[(7)]);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32555__$1,(11),out,inst_32537);
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
var cljs$core$async$state_machine__29095__auto__ = null;
var cljs$core$async$state_machine__29095__auto____0 = (function (){
var statearr_32580 = [null,null,null,null,null,null,null,null,null];
(statearr_32580[(0)] = cljs$core$async$state_machine__29095__auto__);

(statearr_32580[(1)] = (1));

return statearr_32580;
});
var cljs$core$async$state_machine__29095__auto____1 = (function (state_32555){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_32555);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e32581){var ex__29098__auto__ = e32581;
var statearr_32582_34464 = state_32555;
(statearr_32582_34464[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_32555[(4)]))){
var statearr_32583_34469 = state_32555;
(statearr_32583_34469[(1)] = cljs.core.first((state_32555[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34470 = state_32555;
state_32555 = G__34470;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$state_machine__29095__auto__ = function(state_32555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29095__auto____1.call(this,state_32555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29095__auto____0;
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29095__auto____1;
return cljs$core$async$state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_32584 = f__29737__auto__();
(statearr_32584[(6)] = c__29736__auto___34397);

return statearr_32584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32586 = arguments.length;
switch (G__32586) {
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
var c__29736__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_32652){
var state_val_32653 = (state_32652[(1)]);
if((state_val_32653 === (7))){
var inst_32648 = (state_32652[(2)]);
var state_32652__$1 = state_32652;
var statearr_32654_34492 = state_32652__$1;
(statearr_32654_34492[(2)] = inst_32648);

(statearr_32654_34492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (20))){
var inst_32616 = (state_32652[(7)]);
var inst_32629 = (state_32652[(2)]);
var inst_32630 = cljs.core.next(inst_32616);
var inst_32601 = inst_32630;
var inst_32602 = null;
var inst_32603 = (0);
var inst_32604 = (0);
var state_32652__$1 = (function (){var statearr_32663 = state_32652;
(statearr_32663[(8)] = inst_32604);

(statearr_32663[(9)] = inst_32603);

(statearr_32663[(10)] = inst_32602);

(statearr_32663[(11)] = inst_32601);

(statearr_32663[(12)] = inst_32629);

return statearr_32663;
})();
var statearr_32673_34506 = state_32652__$1;
(statearr_32673_34506[(2)] = null);

(statearr_32673_34506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (1))){
var state_32652__$1 = state_32652;
var statearr_32677_34508 = state_32652__$1;
(statearr_32677_34508[(2)] = null);

(statearr_32677_34508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (4))){
var inst_32590 = (state_32652[(13)]);
var inst_32590__$1 = (state_32652[(2)]);
var inst_32591 = (inst_32590__$1 == null);
var state_32652__$1 = (function (){var statearr_32681 = state_32652;
(statearr_32681[(13)] = inst_32590__$1);

return statearr_32681;
})();
if(cljs.core.truth_(inst_32591)){
var statearr_32684_34517 = state_32652__$1;
(statearr_32684_34517[(1)] = (5));

} else {
var statearr_32685_34518 = state_32652__$1;
(statearr_32685_34518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (15))){
var state_32652__$1 = state_32652;
var statearr_32689_34520 = state_32652__$1;
(statearr_32689_34520[(2)] = null);

(statearr_32689_34520[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (21))){
var state_32652__$1 = state_32652;
var statearr_32690_34521 = state_32652__$1;
(statearr_32690_34521[(2)] = null);

(statearr_32690_34521[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (13))){
var inst_32604 = (state_32652[(8)]);
var inst_32603 = (state_32652[(9)]);
var inst_32602 = (state_32652[(10)]);
var inst_32601 = (state_32652[(11)]);
var inst_32611 = (state_32652[(2)]);
var inst_32612 = (inst_32604 + (1));
var tmp32686 = inst_32603;
var tmp32687 = inst_32602;
var tmp32688 = inst_32601;
var inst_32601__$1 = tmp32688;
var inst_32602__$1 = tmp32687;
var inst_32603__$1 = tmp32686;
var inst_32604__$1 = inst_32612;
var state_32652__$1 = (function (){var statearr_32694 = state_32652;
(statearr_32694[(8)] = inst_32604__$1);

(statearr_32694[(9)] = inst_32603__$1);

(statearr_32694[(10)] = inst_32602__$1);

(statearr_32694[(11)] = inst_32601__$1);

(statearr_32694[(14)] = inst_32611);

return statearr_32694;
})();
var statearr_32695_34522 = state_32652__$1;
(statearr_32695_34522[(2)] = null);

(statearr_32695_34522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (22))){
var state_32652__$1 = state_32652;
var statearr_32696_34524 = state_32652__$1;
(statearr_32696_34524[(2)] = null);

(statearr_32696_34524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (6))){
var inst_32590 = (state_32652[(13)]);
var inst_32599 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32590) : f.call(null,inst_32590));
var inst_32600 = cljs.core.seq(inst_32599);
var inst_32601 = inst_32600;
var inst_32602 = null;
var inst_32603 = (0);
var inst_32604 = (0);
var state_32652__$1 = (function (){var statearr_32699 = state_32652;
(statearr_32699[(8)] = inst_32604);

(statearr_32699[(9)] = inst_32603);

(statearr_32699[(10)] = inst_32602);

(statearr_32699[(11)] = inst_32601);

return statearr_32699;
})();
var statearr_32701_34531 = state_32652__$1;
(statearr_32701_34531[(2)] = null);

(statearr_32701_34531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (17))){
var inst_32616 = (state_32652[(7)]);
var inst_32622 = cljs.core.chunk_first(inst_32616);
var inst_32623 = cljs.core.chunk_rest(inst_32616);
var inst_32624 = cljs.core.count(inst_32622);
var inst_32601 = inst_32623;
var inst_32602 = inst_32622;
var inst_32603 = inst_32624;
var inst_32604 = (0);
var state_32652__$1 = (function (){var statearr_32702 = state_32652;
(statearr_32702[(8)] = inst_32604);

(statearr_32702[(9)] = inst_32603);

(statearr_32702[(10)] = inst_32602);

(statearr_32702[(11)] = inst_32601);

return statearr_32702;
})();
var statearr_32703_34539 = state_32652__$1;
(statearr_32703_34539[(2)] = null);

(statearr_32703_34539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (3))){
var inst_32650 = (state_32652[(2)]);
var state_32652__$1 = state_32652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32652__$1,inst_32650);
} else {
if((state_val_32653 === (12))){
var inst_32638 = (state_32652[(2)]);
var state_32652__$1 = state_32652;
var statearr_32712_34541 = state_32652__$1;
(statearr_32712_34541[(2)] = inst_32638);

(statearr_32712_34541[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (2))){
var state_32652__$1 = state_32652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32652__$1,(4),in$);
} else {
if((state_val_32653 === (23))){
var inst_32646 = (state_32652[(2)]);
var state_32652__$1 = state_32652;
var statearr_32716_34545 = state_32652__$1;
(statearr_32716_34545[(2)] = inst_32646);

(statearr_32716_34545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (19))){
var inst_32633 = (state_32652[(2)]);
var state_32652__$1 = state_32652;
var statearr_32719_34548 = state_32652__$1;
(statearr_32719_34548[(2)] = inst_32633);

(statearr_32719_34548[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (11))){
var inst_32616 = (state_32652[(7)]);
var inst_32601 = (state_32652[(11)]);
var inst_32616__$1 = cljs.core.seq(inst_32601);
var state_32652__$1 = (function (){var statearr_32722 = state_32652;
(statearr_32722[(7)] = inst_32616__$1);

return statearr_32722;
})();
if(inst_32616__$1){
var statearr_32727_34550 = state_32652__$1;
(statearr_32727_34550[(1)] = (14));

} else {
var statearr_32728_34551 = state_32652__$1;
(statearr_32728_34551[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (9))){
var inst_32640 = (state_32652[(2)]);
var inst_32641 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32652__$1 = (function (){var statearr_32729 = state_32652;
(statearr_32729[(15)] = inst_32640);

return statearr_32729;
})();
if(cljs.core.truth_(inst_32641)){
var statearr_32731_34552 = state_32652__$1;
(statearr_32731_34552[(1)] = (21));

} else {
var statearr_32732_34554 = state_32652__$1;
(statearr_32732_34554[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (5))){
var inst_32593 = cljs.core.async.close_BANG_(out);
var state_32652__$1 = state_32652;
var statearr_32737_34555 = state_32652__$1;
(statearr_32737_34555[(2)] = inst_32593);

(statearr_32737_34555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (14))){
var inst_32616 = (state_32652[(7)]);
var inst_32620 = cljs.core.chunked_seq_QMARK_(inst_32616);
var state_32652__$1 = state_32652;
if(inst_32620){
var statearr_32738_34556 = state_32652__$1;
(statearr_32738_34556[(1)] = (17));

} else {
var statearr_32743_34557 = state_32652__$1;
(statearr_32743_34557[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (16))){
var inst_32636 = (state_32652[(2)]);
var state_32652__$1 = state_32652;
var statearr_32749_34560 = state_32652__$1;
(statearr_32749_34560[(2)] = inst_32636);

(statearr_32749_34560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32653 === (10))){
var inst_32604 = (state_32652[(8)]);
var inst_32602 = (state_32652[(10)]);
var inst_32609 = cljs.core._nth(inst_32602,inst_32604);
var state_32652__$1 = state_32652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32652__$1,(13),out,inst_32609);
} else {
if((state_val_32653 === (18))){
var inst_32616 = (state_32652[(7)]);
var inst_32627 = cljs.core.first(inst_32616);
var state_32652__$1 = state_32652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32652__$1,(20),out,inst_32627);
} else {
if((state_val_32653 === (8))){
var inst_32604 = (state_32652[(8)]);
var inst_32603 = (state_32652[(9)]);
var inst_32606 = (inst_32604 < inst_32603);
var inst_32607 = inst_32606;
var state_32652__$1 = state_32652;
if(cljs.core.truth_(inst_32607)){
var statearr_32762_34572 = state_32652__$1;
(statearr_32762_34572[(1)] = (10));

} else {
var statearr_32764_34574 = state_32652__$1;
(statearr_32764_34574[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29095__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29095__auto____0 = (function (){
var statearr_32771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32771[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29095__auto__);

(statearr_32771[(1)] = (1));

return statearr_32771;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29095__auto____1 = (function (state_32652){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_32652);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e32773){var ex__29098__auto__ = e32773;
var statearr_32774_34594 = state_32652;
(statearr_32774_34594[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_32652[(4)]))){
var statearr_32775_34595 = state_32652;
(statearr_32775_34595[(1)] = cljs.core.first((state_32652[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34596 = state_32652;
state_32652 = G__34596;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29095__auto__ = function(state_32652){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29095__auto____1.call(this,state_32652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29095__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29095__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_32779 = f__29737__auto__();
(statearr_32779[(6)] = c__29736__auto__);

return statearr_32779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));

return c__29736__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32787 = arguments.length;
switch (G__32787) {
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
var G__32789 = arguments.length;
switch (G__32789) {
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
var G__32796 = arguments.length;
switch (G__32796) {
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
var c__29736__auto___34620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_32826){
var state_val_32827 = (state_32826[(1)]);
if((state_val_32827 === (7))){
var inst_32821 = (state_32826[(2)]);
var state_32826__$1 = state_32826;
var statearr_32831_34621 = state_32826__$1;
(statearr_32831_34621[(2)] = inst_32821);

(statearr_32831_34621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32827 === (1))){
var inst_32803 = null;
var state_32826__$1 = (function (){var statearr_32832 = state_32826;
(statearr_32832[(7)] = inst_32803);

return statearr_32832;
})();
var statearr_32833_34626 = state_32826__$1;
(statearr_32833_34626[(2)] = null);

(statearr_32833_34626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32827 === (4))){
var inst_32806 = (state_32826[(8)]);
var inst_32806__$1 = (state_32826[(2)]);
var inst_32807 = (inst_32806__$1 == null);
var inst_32808 = cljs.core.not(inst_32807);
var state_32826__$1 = (function (){var statearr_32840 = state_32826;
(statearr_32840[(8)] = inst_32806__$1);

return statearr_32840;
})();
if(inst_32808){
var statearr_32845_34632 = state_32826__$1;
(statearr_32845_34632[(1)] = (5));

} else {
var statearr_32846_34633 = state_32826__$1;
(statearr_32846_34633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32827 === (6))){
var state_32826__$1 = state_32826;
var statearr_32850_34634 = state_32826__$1;
(statearr_32850_34634[(2)] = null);

(statearr_32850_34634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32827 === (3))){
var inst_32823 = (state_32826[(2)]);
var inst_32824 = cljs.core.async.close_BANG_(out);
var state_32826__$1 = (function (){var statearr_32851 = state_32826;
(statearr_32851[(9)] = inst_32823);

return statearr_32851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32826__$1,inst_32824);
} else {
if((state_val_32827 === (2))){
var state_32826__$1 = state_32826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32826__$1,(4),ch);
} else {
if((state_val_32827 === (11))){
var inst_32806 = (state_32826[(8)]);
var inst_32815 = (state_32826[(2)]);
var inst_32803 = inst_32806;
var state_32826__$1 = (function (){var statearr_32857 = state_32826;
(statearr_32857[(7)] = inst_32803);

(statearr_32857[(10)] = inst_32815);

return statearr_32857;
})();
var statearr_32858_34638 = state_32826__$1;
(statearr_32858_34638[(2)] = null);

(statearr_32858_34638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32827 === (9))){
var inst_32806 = (state_32826[(8)]);
var state_32826__$1 = state_32826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32826__$1,(11),out,inst_32806);
} else {
if((state_val_32827 === (5))){
var inst_32803 = (state_32826[(7)]);
var inst_32806 = (state_32826[(8)]);
var inst_32810 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32806,inst_32803);
var state_32826__$1 = state_32826;
if(inst_32810){
var statearr_32860_34644 = state_32826__$1;
(statearr_32860_34644[(1)] = (8));

} else {
var statearr_32861_34649 = state_32826__$1;
(statearr_32861_34649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32827 === (10))){
var inst_32818 = (state_32826[(2)]);
var state_32826__$1 = state_32826;
var statearr_32862_34654 = state_32826__$1;
(statearr_32862_34654[(2)] = inst_32818);

(statearr_32862_34654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32827 === (8))){
var inst_32803 = (state_32826[(7)]);
var tmp32859 = inst_32803;
var inst_32803__$1 = tmp32859;
var state_32826__$1 = (function (){var statearr_32867 = state_32826;
(statearr_32867[(7)] = inst_32803__$1);

return statearr_32867;
})();
var statearr_32871_34656 = state_32826__$1;
(statearr_32871_34656[(2)] = null);

(statearr_32871_34656[(1)] = (2));


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
var cljs$core$async$state_machine__29095__auto__ = null;
var cljs$core$async$state_machine__29095__auto____0 = (function (){
var statearr_32875 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32875[(0)] = cljs$core$async$state_machine__29095__auto__);

(statearr_32875[(1)] = (1));

return statearr_32875;
});
var cljs$core$async$state_machine__29095__auto____1 = (function (state_32826){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_32826);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e32879){var ex__29098__auto__ = e32879;
var statearr_32884_34659 = state_32826;
(statearr_32884_34659[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_32826[(4)]))){
var statearr_32885_34663 = state_32826;
(statearr_32885_34663[(1)] = cljs.core.first((state_32826[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34664 = state_32826;
state_32826 = G__34664;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$state_machine__29095__auto__ = function(state_32826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29095__auto____1.call(this,state_32826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29095__auto____0;
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29095__auto____1;
return cljs$core$async$state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_32890 = f__29737__auto__();
(statearr_32890[(6)] = c__29736__auto___34620);

return statearr_32890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32902 = arguments.length;
switch (G__32902) {
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
var c__29736__auto___34667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_32952){
var state_val_32953 = (state_32952[(1)]);
if((state_val_32953 === (7))){
var inst_32947 = (state_32952[(2)]);
var state_32952__$1 = state_32952;
var statearr_32956_34668 = state_32952__$1;
(statearr_32956_34668[(2)] = inst_32947);

(statearr_32956_34668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32953 === (1))){
var inst_32910 = (new Array(n));
var inst_32911 = inst_32910;
var inst_32912 = (0);
var state_32952__$1 = (function (){var statearr_32957 = state_32952;
(statearr_32957[(7)] = inst_32911);

(statearr_32957[(8)] = inst_32912);

return statearr_32957;
})();
var statearr_32960_34669 = state_32952__$1;
(statearr_32960_34669[(2)] = null);

(statearr_32960_34669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32953 === (4))){
var inst_32919 = (state_32952[(9)]);
var inst_32919__$1 = (state_32952[(2)]);
var inst_32920 = (inst_32919__$1 == null);
var inst_32921 = cljs.core.not(inst_32920);
var state_32952__$1 = (function (){var statearr_32963 = state_32952;
(statearr_32963[(9)] = inst_32919__$1);

return statearr_32963;
})();
if(inst_32921){
var statearr_32977_34670 = state_32952__$1;
(statearr_32977_34670[(1)] = (5));

} else {
var statearr_32979_34671 = state_32952__$1;
(statearr_32979_34671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32953 === (15))){
var inst_32941 = (state_32952[(2)]);
var state_32952__$1 = state_32952;
var statearr_32981_34676 = state_32952__$1;
(statearr_32981_34676[(2)] = inst_32941);

(statearr_32981_34676[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32953 === (13))){
var state_32952__$1 = state_32952;
var statearr_32985_34682 = state_32952__$1;
(statearr_32985_34682[(2)] = null);

(statearr_32985_34682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32953 === (6))){
var inst_32912 = (state_32952[(8)]);
var inst_32937 = (inst_32912 > (0));
var state_32952__$1 = state_32952;
if(cljs.core.truth_(inst_32937)){
var statearr_32986_34685 = state_32952__$1;
(statearr_32986_34685[(1)] = (12));

} else {
var statearr_32987_34687 = state_32952__$1;
(statearr_32987_34687[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32953 === (3))){
var inst_32949 = (state_32952[(2)]);
var state_32952__$1 = state_32952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32952__$1,inst_32949);
} else {
if((state_val_32953 === (12))){
var inst_32911 = (state_32952[(7)]);
var inst_32939 = cljs.core.vec(inst_32911);
var state_32952__$1 = state_32952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32952__$1,(15),out,inst_32939);
} else {
if((state_val_32953 === (2))){
var state_32952__$1 = state_32952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32952__$1,(4),ch);
} else {
if((state_val_32953 === (11))){
var inst_32931 = (state_32952[(2)]);
var inst_32932 = (new Array(n));
var inst_32911 = inst_32932;
var inst_32912 = (0);
var state_32952__$1 = (function (){var statearr_32989 = state_32952;
(statearr_32989[(7)] = inst_32911);

(statearr_32989[(10)] = inst_32931);

(statearr_32989[(8)] = inst_32912);

return statearr_32989;
})();
var statearr_32990_34703 = state_32952__$1;
(statearr_32990_34703[(2)] = null);

(statearr_32990_34703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32953 === (9))){
var inst_32911 = (state_32952[(7)]);
var inst_32929 = cljs.core.vec(inst_32911);
var state_32952__$1 = state_32952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32952__$1,(11),out,inst_32929);
} else {
if((state_val_32953 === (5))){
var inst_32911 = (state_32952[(7)]);
var inst_32919 = (state_32952[(9)]);
var inst_32924 = (state_32952[(11)]);
var inst_32912 = (state_32952[(8)]);
var inst_32923 = (inst_32911[inst_32912] = inst_32919);
var inst_32924__$1 = (inst_32912 + (1));
var inst_32925 = (inst_32924__$1 < n);
var state_32952__$1 = (function (){var statearr_32991 = state_32952;
(statearr_32991[(11)] = inst_32924__$1);

(statearr_32991[(12)] = inst_32923);

return statearr_32991;
})();
if(cljs.core.truth_(inst_32925)){
var statearr_32992_34705 = state_32952__$1;
(statearr_32992_34705[(1)] = (8));

} else {
var statearr_32993_34706 = state_32952__$1;
(statearr_32993_34706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32953 === (14))){
var inst_32944 = (state_32952[(2)]);
var inst_32945 = cljs.core.async.close_BANG_(out);
var state_32952__$1 = (function (){var statearr_32995 = state_32952;
(statearr_32995[(13)] = inst_32944);

return statearr_32995;
})();
var statearr_32996_34707 = state_32952__$1;
(statearr_32996_34707[(2)] = inst_32945);

(statearr_32996_34707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32953 === (10))){
var inst_32935 = (state_32952[(2)]);
var state_32952__$1 = state_32952;
var statearr_33005_34708 = state_32952__$1;
(statearr_33005_34708[(2)] = inst_32935);

(statearr_33005_34708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32953 === (8))){
var inst_32911 = (state_32952[(7)]);
var inst_32924 = (state_32952[(11)]);
var tmp32994 = inst_32911;
var inst_32911__$1 = tmp32994;
var inst_32912 = inst_32924;
var state_32952__$1 = (function (){var statearr_33010 = state_32952;
(statearr_33010[(7)] = inst_32911__$1);

(statearr_33010[(8)] = inst_32912);

return statearr_33010;
})();
var statearr_33011_34709 = state_32952__$1;
(statearr_33011_34709[(2)] = null);

(statearr_33011_34709[(1)] = (2));


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
var cljs$core$async$state_machine__29095__auto__ = null;
var cljs$core$async$state_machine__29095__auto____0 = (function (){
var statearr_33012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33012[(0)] = cljs$core$async$state_machine__29095__auto__);

(statearr_33012[(1)] = (1));

return statearr_33012;
});
var cljs$core$async$state_machine__29095__auto____1 = (function (state_32952){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_32952);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e33013){var ex__29098__auto__ = e33013;
var statearr_33014_34720 = state_32952;
(statearr_33014_34720[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_32952[(4)]))){
var statearr_33015_34721 = state_32952;
(statearr_33015_34721[(1)] = cljs.core.first((state_32952[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34727 = state_32952;
state_32952 = G__34727;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$state_machine__29095__auto__ = function(state_32952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29095__auto____1.call(this,state_32952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29095__auto____0;
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29095__auto____1;
return cljs$core$async$state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_33023 = f__29737__auto__();
(statearr_33023[(6)] = c__29736__auto___34667);

return statearr_33023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33037 = arguments.length;
switch (G__33037) {
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
var c__29736__auto___34745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29737__auto__ = (function (){var switch__29094__auto__ = (function (state_33101){
var state_val_33102 = (state_33101[(1)]);
if((state_val_33102 === (7))){
var inst_33096 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
var statearr_33107_34746 = state_33101__$1;
(statearr_33107_34746[(2)] = inst_33096);

(statearr_33107_34746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (1))){
var inst_33040 = [];
var inst_33041 = inst_33040;
var inst_33042 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33101__$1 = (function (){var statearr_33110 = state_33101;
(statearr_33110[(7)] = inst_33042);

(statearr_33110[(8)] = inst_33041);

return statearr_33110;
})();
var statearr_33112_34750 = state_33101__$1;
(statearr_33112_34750[(2)] = null);

(statearr_33112_34750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (4))){
var inst_33045 = (state_33101[(9)]);
var inst_33045__$1 = (state_33101[(2)]);
var inst_33046 = (inst_33045__$1 == null);
var inst_33047 = cljs.core.not(inst_33046);
var state_33101__$1 = (function (){var statearr_33114 = state_33101;
(statearr_33114[(9)] = inst_33045__$1);

return statearr_33114;
})();
if(inst_33047){
var statearr_33115_34757 = state_33101__$1;
(statearr_33115_34757[(1)] = (5));

} else {
var statearr_33116_34758 = state_33101__$1;
(statearr_33116_34758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (15))){
var inst_33041 = (state_33101[(8)]);
var inst_33088 = cljs.core.vec(inst_33041);
var state_33101__$1 = state_33101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33101__$1,(18),out,inst_33088);
} else {
if((state_val_33102 === (13))){
var inst_33081 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
var statearr_33118_34763 = state_33101__$1;
(statearr_33118_34763[(2)] = inst_33081);

(statearr_33118_34763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (6))){
var inst_33041 = (state_33101[(8)]);
var inst_33085 = inst_33041.length;
var inst_33086 = (inst_33085 > (0));
var state_33101__$1 = state_33101;
if(cljs.core.truth_(inst_33086)){
var statearr_33119_34774 = state_33101__$1;
(statearr_33119_34774[(1)] = (15));

} else {
var statearr_33120_34775 = state_33101__$1;
(statearr_33120_34775[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (17))){
var inst_33093 = (state_33101[(2)]);
var inst_33094 = cljs.core.async.close_BANG_(out);
var state_33101__$1 = (function (){var statearr_33122 = state_33101;
(statearr_33122[(10)] = inst_33093);

return statearr_33122;
})();
var statearr_33123_34780 = state_33101__$1;
(statearr_33123_34780[(2)] = inst_33094);

(statearr_33123_34780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (3))){
var inst_33098 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33101__$1,inst_33098);
} else {
if((state_val_33102 === (12))){
var inst_33041 = (state_33101[(8)]);
var inst_33063 = cljs.core.vec(inst_33041);
var state_33101__$1 = state_33101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33101__$1,(14),out,inst_33063);
} else {
if((state_val_33102 === (2))){
var state_33101__$1 = state_33101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33101__$1,(4),ch);
} else {
if((state_val_33102 === (11))){
var inst_33041 = (state_33101[(8)]);
var inst_33049 = (state_33101[(11)]);
var inst_33045 = (state_33101[(9)]);
var inst_33060 = inst_33041.push(inst_33045);
var tmp33131 = inst_33041;
var inst_33041__$1 = tmp33131;
var inst_33042 = inst_33049;
var state_33101__$1 = (function (){var statearr_33134 = state_33101;
(statearr_33134[(7)] = inst_33042);

(statearr_33134[(8)] = inst_33041__$1);

(statearr_33134[(12)] = inst_33060);

return statearr_33134;
})();
var statearr_33137_34784 = state_33101__$1;
(statearr_33137_34784[(2)] = null);

(statearr_33137_34784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (9))){
var inst_33042 = (state_33101[(7)]);
var inst_33056 = cljs.core.keyword_identical_QMARK_(inst_33042,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33101__$1 = state_33101;
var statearr_33138_34787 = state_33101__$1;
(statearr_33138_34787[(2)] = inst_33056);

(statearr_33138_34787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (5))){
var inst_33042 = (state_33101[(7)]);
var inst_33051 = (state_33101[(13)]);
var inst_33049 = (state_33101[(11)]);
var inst_33045 = (state_33101[(9)]);
var inst_33049__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33045) : f.call(null,inst_33045));
var inst_33051__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33049__$1,inst_33042);
var state_33101__$1 = (function (){var statearr_33143 = state_33101;
(statearr_33143[(13)] = inst_33051__$1);

(statearr_33143[(11)] = inst_33049__$1);

return statearr_33143;
})();
if(inst_33051__$1){
var statearr_33146_34793 = state_33101__$1;
(statearr_33146_34793[(1)] = (8));

} else {
var statearr_33148_34794 = state_33101__$1;
(statearr_33148_34794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (14))){
var inst_33049 = (state_33101[(11)]);
var inst_33045 = (state_33101[(9)]);
var inst_33065 = (state_33101[(2)]);
var inst_33077 = [];
var inst_33078 = inst_33077.push(inst_33045);
var inst_33041 = inst_33077;
var inst_33042 = inst_33049;
var state_33101__$1 = (function (){var statearr_33149 = state_33101;
(statearr_33149[(14)] = inst_33065);

(statearr_33149[(7)] = inst_33042);

(statearr_33149[(8)] = inst_33041);

(statearr_33149[(15)] = inst_33078);

return statearr_33149;
})();
var statearr_33159_34796 = state_33101__$1;
(statearr_33159_34796[(2)] = null);

(statearr_33159_34796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (16))){
var state_33101__$1 = state_33101;
var statearr_33160_34797 = state_33101__$1;
(statearr_33160_34797[(2)] = null);

(statearr_33160_34797[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (10))){
var inst_33058 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
if(cljs.core.truth_(inst_33058)){
var statearr_33162_34798 = state_33101__$1;
(statearr_33162_34798[(1)] = (11));

} else {
var statearr_33163_34802 = state_33101__$1;
(statearr_33163_34802[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (18))){
var inst_33090 = (state_33101[(2)]);
var state_33101__$1 = state_33101;
var statearr_33169_34804 = state_33101__$1;
(statearr_33169_34804[(2)] = inst_33090);

(statearr_33169_34804[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33102 === (8))){
var inst_33051 = (state_33101[(13)]);
var state_33101__$1 = state_33101;
var statearr_33170_34806 = state_33101__$1;
(statearr_33170_34806[(2)] = inst_33051);

(statearr_33170_34806[(1)] = (10));


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
var cljs$core$async$state_machine__29095__auto__ = null;
var cljs$core$async$state_machine__29095__auto____0 = (function (){
var statearr_33172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33172[(0)] = cljs$core$async$state_machine__29095__auto__);

(statearr_33172[(1)] = (1));

return statearr_33172;
});
var cljs$core$async$state_machine__29095__auto____1 = (function (state_33101){
while(true){
var ret_value__29096__auto__ = (function (){try{while(true){
var result__29097__auto__ = switch__29094__auto__(state_33101);
if(cljs.core.keyword_identical_QMARK_(result__29097__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29097__auto__;
}
break;
}
}catch (e33173){var ex__29098__auto__ = e33173;
var statearr_33174_34807 = state_33101;
(statearr_33174_34807[(2)] = ex__29098__auto__);


if(cljs.core.seq((state_33101[(4)]))){
var statearr_33175_34808 = state_33101;
(statearr_33175_34808[(1)] = cljs.core.first((state_33101[(4)])));

} else {
throw ex__29098__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29096__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34809 = state_33101;
state_33101 = G__34809;
continue;
} else {
return ret_value__29096__auto__;
}
break;
}
});
cljs$core$async$state_machine__29095__auto__ = function(state_33101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29095__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29095__auto____1.call(this,state_33101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29095__auto____0;
cljs$core$async$state_machine__29095__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29095__auto____1;
return cljs$core$async$state_machine__29095__auto__;
})()
})();
var state__29738__auto__ = (function (){var statearr_33177 = f__29737__auto__();
(statearr_33177[(6)] = c__29736__auto___34745);

return statearr_33177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29738__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
