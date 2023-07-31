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
cljs.core.async.t_cljs$core$async30344 = (function (f,blockable,meta30345){
this.f = f;
this.blockable = blockable;
this.meta30345 = meta30345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30346,meta30345__$1){
var self__ = this;
var _30346__$1 = this;
return (new cljs.core.async.t_cljs$core$async30344(self__.f,self__.blockable,meta30345__$1));
}));

(cljs.core.async.t_cljs$core$async30344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30346){
var self__ = this;
var _30346__$1 = this;
return self__.meta30345;
}));

(cljs.core.async.t_cljs$core$async30344.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30345","meta30345",561797256,null)], null);
}));

(cljs.core.async.t_cljs$core$async30344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30344");

(cljs.core.async.t_cljs$core$async30344.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30344.
 */
cljs.core.async.__GT_t_cljs$core$async30344 = (function cljs$core$async$__GT_t_cljs$core$async30344(f,blockable,meta30345){
return (new cljs.core.async.t_cljs$core$async30344(f,blockable,meta30345));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30342 = arguments.length;
switch (G__30342) {
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
return (new cljs.core.async.t_cljs$core$async30344(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30363 = arguments.length;
switch (G__30363) {
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
var G__30377 = arguments.length;
switch (G__30377) {
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
var G__30396 = arguments.length;
switch (G__30396) {
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
var val_33704 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33704) : fn1.call(null,val_33704));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33704) : fn1.call(null,val_33704));
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
var G__30417 = arguments.length;
switch (G__30417) {
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
var n__5636__auto___33706 = n;
var x_33707 = (0);
while(true){
if((x_33707 < n__5636__auto___33706)){
(a[x_33707] = x_33707);

var G__33708 = (x_33707 + (1));
x_33707 = G__33708;
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
cljs.core.async.t_cljs$core$async30434 = (function (flag,meta30435){
this.flag = flag;
this.meta30435 = meta30435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30436,meta30435__$1){
var self__ = this;
var _30436__$1 = this;
return (new cljs.core.async.t_cljs$core$async30434(self__.flag,meta30435__$1));
}));

(cljs.core.async.t_cljs$core$async30434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30436){
var self__ = this;
var _30436__$1 = this;
return self__.meta30435;
}));

(cljs.core.async.t_cljs$core$async30434.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30434.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30434.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30434.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30435","meta30435",504488228,null)], null);
}));

(cljs.core.async.t_cljs$core$async30434.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30434");

(cljs.core.async.t_cljs$core$async30434.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30434");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30434.
 */
cljs.core.async.__GT_t_cljs$core$async30434 = (function cljs$core$async$__GT_t_cljs$core$async30434(flag,meta30435){
return (new cljs.core.async.t_cljs$core$async30434(flag,meta30435));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async30434(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30439 = (function (flag,cb,meta30440){
this.flag = flag;
this.cb = cb;
this.meta30440 = meta30440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30441,meta30440__$1){
var self__ = this;
var _30441__$1 = this;
return (new cljs.core.async.t_cljs$core$async30439(self__.flag,self__.cb,meta30440__$1));
}));

(cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30441){
var self__ = this;
var _30441__$1 = this;
return self__.meta30440;
}));

(cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30440","meta30440",940484674,null)], null);
}));

(cljs.core.async.t_cljs$core$async30439.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30439");

(cljs.core.async.t_cljs$core$async30439.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30439");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30439.
 */
cljs.core.async.__GT_t_cljs$core$async30439 = (function cljs$core$async$__GT_t_cljs$core$async30439(flag,cb,meta30440){
return (new cljs.core.async.t_cljs$core$async30439(flag,cb,meta30440));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async30439(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30445_SHARP_){
var G__30453 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30445_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30453) : fret.call(null,G__30453));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30446_SHARP_){
var G__30454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30446_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30454) : fret.call(null,G__30454));
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
var G__33713 = (i + (1));
i = G__33713;
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
var len__5769__auto___33714 = arguments.length;
var i__5770__auto___33715 = (0);
while(true){
if((i__5770__auto___33715 < len__5769__auto___33714)){
args__5775__auto__.push((arguments[i__5770__auto___33715]));

var G__33716 = (i__5770__auto___33715 + (1));
i__5770__auto___33715 = G__33716;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30469){
var map__30470 = p__30469;
var map__30470__$1 = cljs.core.__destructure_map(map__30470);
var opts = map__30470__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30462){
var G__30463 = cljs.core.first(seq30462);
var seq30462__$1 = cljs.core.next(seq30462);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30463,seq30462__$1);
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
var G__30489 = arguments.length;
switch (G__30489) {
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
var c__30242__auto___33721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_30551){
var state_val_30553 = (state_30551[(1)]);
if((state_val_30553 === (7))){
var inst_30539 = (state_30551[(2)]);
var state_30551__$1 = state_30551;
var statearr_30569_33722 = state_30551__$1;
(statearr_30569_33722[(2)] = inst_30539);

(statearr_30569_33722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (1))){
var state_30551__$1 = state_30551;
var statearr_30572_33723 = state_30551__$1;
(statearr_30572_33723[(2)] = null);

(statearr_30572_33723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (4))){
var inst_30515 = (state_30551[(7)]);
var inst_30515__$1 = (state_30551[(2)]);
var inst_30517 = (inst_30515__$1 == null);
var state_30551__$1 = (function (){var statearr_30578 = state_30551;
(statearr_30578[(7)] = inst_30515__$1);

return statearr_30578;
})();
if(cljs.core.truth_(inst_30517)){
var statearr_30579_33724 = state_30551__$1;
(statearr_30579_33724[(1)] = (5));

} else {
var statearr_30580_33725 = state_30551__$1;
(statearr_30580_33725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (13))){
var state_30551__$1 = state_30551;
var statearr_30582_33727 = state_30551__$1;
(statearr_30582_33727[(2)] = null);

(statearr_30582_33727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (6))){
var inst_30515 = (state_30551[(7)]);
var state_30551__$1 = state_30551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30551__$1,(11),to,inst_30515);
} else {
if((state_val_30553 === (3))){
var inst_30542 = (state_30551[(2)]);
var state_30551__$1 = state_30551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30551__$1,inst_30542);
} else {
if((state_val_30553 === (12))){
var state_30551__$1 = state_30551;
var statearr_30587_33732 = state_30551__$1;
(statearr_30587_33732[(2)] = null);

(statearr_30587_33732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (2))){
var state_30551__$1 = state_30551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30551__$1,(4),from);
} else {
if((state_val_30553 === (11))){
var inst_30532 = (state_30551[(2)]);
var state_30551__$1 = state_30551;
if(cljs.core.truth_(inst_30532)){
var statearr_30592_33735 = state_30551__$1;
(statearr_30592_33735[(1)] = (12));

} else {
var statearr_30593_33738 = state_30551__$1;
(statearr_30593_33738[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (9))){
var state_30551__$1 = state_30551;
var statearr_30595_33741 = state_30551__$1;
(statearr_30595_33741[(2)] = null);

(statearr_30595_33741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (5))){
var state_30551__$1 = state_30551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30599_33743 = state_30551__$1;
(statearr_30599_33743[(1)] = (8));

} else {
var statearr_30602_33744 = state_30551__$1;
(statearr_30602_33744[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (14))){
var inst_30537 = (state_30551[(2)]);
var state_30551__$1 = state_30551;
var statearr_30605_33745 = state_30551__$1;
(statearr_30605_33745[(2)] = inst_30537);

(statearr_30605_33745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (10))){
var inst_30528 = (state_30551[(2)]);
var state_30551__$1 = state_30551;
var statearr_30609_33746 = state_30551__$1;
(statearr_30609_33746[(2)] = inst_30528);

(statearr_30609_33746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30553 === (8))){
var inst_30523 = cljs.core.async.close_BANG_(to);
var state_30551__$1 = state_30551;
var statearr_30612_33747 = state_30551__$1;
(statearr_30612_33747[(2)] = inst_30523);

(statearr_30612_33747[(1)] = (10));


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
var cljs$core$async$state_machine__29200__auto__ = null;
var cljs$core$async$state_machine__29200__auto____0 = (function (){
var statearr_30617 = [null,null,null,null,null,null,null,null];
(statearr_30617[(0)] = cljs$core$async$state_machine__29200__auto__);

(statearr_30617[(1)] = (1));

return statearr_30617;
});
var cljs$core$async$state_machine__29200__auto____1 = (function (state_30551){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_30551);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e30620){var ex__29203__auto__ = e30620;
var statearr_30621_33749 = state_30551;
(statearr_30621_33749[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_30551[(4)]))){
var statearr_30622_33750 = state_30551;
(statearr_30622_33750[(1)] = cljs.core.first((state_30551[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33752 = state_30551;
state_30551 = G__33752;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$state_machine__29200__auto__ = function(state_30551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29200__auto____1.call(this,state_30551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29200__auto____0;
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29200__auto____1;
return cljs$core$async$state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_30626 = f__30243__auto__();
(statearr_30626[(6)] = c__30242__auto___33721);

return statearr_30626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
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
var process__$1 = (function (p__30635){
var vec__30636 = p__30635;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30636,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30636,(1),null);
var job = vec__30636;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30242__auto___33756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_30656){
var state_val_30657 = (state_30656[(1)]);
if((state_val_30657 === (1))){
var state_30656__$1 = state_30656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30656__$1,(2),res,v);
} else {
if((state_val_30657 === (2))){
var inst_30649 = (state_30656[(2)]);
var inst_30654 = cljs.core.async.close_BANG_(res);
var state_30656__$1 = (function (){var statearr_30664 = state_30656;
(statearr_30664[(7)] = inst_30649);

return statearr_30664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30656__$1,inst_30654);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0 = (function (){
var statearr_30668 = [null,null,null,null,null,null,null,null];
(statearr_30668[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__);

(statearr_30668[(1)] = (1));

return statearr_30668;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1 = (function (state_30656){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_30656);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e30669){var ex__29203__auto__ = e30669;
var statearr_30670_33772 = state_30656;
(statearr_30670_33772[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_30656[(4)]))){
var statearr_30673_33773 = state_30656;
(statearr_30673_33773[(1)] = cljs.core.first((state_30656[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33775 = state_30656;
state_30656 = G__33775;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__ = function(state_30656){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1.call(this,state_30656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_30674 = f__30243__auto__();
(statearr_30674[(6)] = c__30242__auto___33756);

return statearr_30674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30682){
var vec__30684 = p__30682;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30684,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30684,(1),null);
var job = vec__30684;
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
var n__5636__auto___33778 = n;
var __33779 = (0);
while(true){
if((__33779 < n__5636__auto___33778)){
var G__30688_33780 = type;
var G__30688_33781__$1 = (((G__30688_33780 instanceof cljs.core.Keyword))?G__30688_33780.fqn:null);
switch (G__30688_33781__$1) {
case "compute":
var c__30242__auto___33783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33779,c__30242__auto___33783,G__30688_33780,G__30688_33781__$1,n__5636__auto___33778,jobs,results,process__$1,async){
return (function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = ((function (__33779,c__30242__auto___33783,G__30688_33780,G__30688_33781__$1,n__5636__auto___33778,jobs,results,process__$1,async){
return (function (state_30701){
var state_val_30702 = (state_30701[(1)]);
if((state_val_30702 === (1))){
var state_30701__$1 = state_30701;
var statearr_30707_33784 = state_30701__$1;
(statearr_30707_33784[(2)] = null);

(statearr_30707_33784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (2))){
var state_30701__$1 = state_30701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30701__$1,(4),jobs);
} else {
if((state_val_30702 === (3))){
var inst_30699 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30701__$1,inst_30699);
} else {
if((state_val_30702 === (4))){
var inst_30691 = (state_30701[(2)]);
var inst_30692 = process__$1(inst_30691);
var state_30701__$1 = state_30701;
if(cljs.core.truth_(inst_30692)){
var statearr_30709_33789 = state_30701__$1;
(statearr_30709_33789[(1)] = (5));

} else {
var statearr_30710_33792 = state_30701__$1;
(statearr_30710_33792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (5))){
var state_30701__$1 = state_30701;
var statearr_30711_33793 = state_30701__$1;
(statearr_30711_33793[(2)] = null);

(statearr_30711_33793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (6))){
var state_30701__$1 = state_30701;
var statearr_30712_33794 = state_30701__$1;
(statearr_30712_33794[(2)] = null);

(statearr_30712_33794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30702 === (7))){
var inst_30697 = (state_30701[(2)]);
var state_30701__$1 = state_30701;
var statearr_30715_33799 = state_30701__$1;
(statearr_30715_33799[(2)] = inst_30697);

(statearr_30715_33799[(1)] = (3));


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
});})(__33779,c__30242__auto___33783,G__30688_33780,G__30688_33781__$1,n__5636__auto___33778,jobs,results,process__$1,async))
;
return ((function (__33779,switch__29199__auto__,c__30242__auto___33783,G__30688_33780,G__30688_33781__$1,n__5636__auto___33778,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0 = (function (){
var statearr_30717 = [null,null,null,null,null,null,null];
(statearr_30717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__);

(statearr_30717[(1)] = (1));

return statearr_30717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1 = (function (state_30701){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_30701);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e30725){var ex__29203__auto__ = e30725;
var statearr_30726_33805 = state_30701;
(statearr_30726_33805[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_30701[(4)]))){
var statearr_30728_33806 = state_30701;
(statearr_30728_33806[(1)] = cljs.core.first((state_30701[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33808 = state_30701;
state_30701 = G__33808;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__ = function(state_30701){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1.call(this,state_30701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__;
})()
;})(__33779,switch__29199__auto__,c__30242__auto___33783,G__30688_33780,G__30688_33781__$1,n__5636__auto___33778,jobs,results,process__$1,async))
})();
var state__30244__auto__ = (function (){var statearr_30730 = f__30243__auto__();
(statearr_30730[(6)] = c__30242__auto___33783);

return statearr_30730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
});})(__33779,c__30242__auto___33783,G__30688_33780,G__30688_33781__$1,n__5636__auto___33778,jobs,results,process__$1,async))
);


break;
case "async":
var c__30242__auto___33810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33779,c__30242__auto___33810,G__30688_33780,G__30688_33781__$1,n__5636__auto___33778,jobs,results,process__$1,async){
return (function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = ((function (__33779,c__30242__auto___33810,G__30688_33780,G__30688_33781__$1,n__5636__auto___33778,jobs,results,process__$1,async){
return (function (state_30746){
var state_val_30747 = (state_30746[(1)]);
if((state_val_30747 === (1))){
var state_30746__$1 = state_30746;
var statearr_30750_33811 = state_30746__$1;
(statearr_30750_33811[(2)] = null);

(statearr_30750_33811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (2))){
var state_30746__$1 = state_30746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30746__$1,(4),jobs);
} else {
if((state_val_30747 === (3))){
var inst_30744 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30746__$1,inst_30744);
} else {
if((state_val_30747 === (4))){
var inst_30736 = (state_30746[(2)]);
var inst_30737 = async(inst_30736);
var state_30746__$1 = state_30746;
if(cljs.core.truth_(inst_30737)){
var statearr_30755_33812 = state_30746__$1;
(statearr_30755_33812[(1)] = (5));

} else {
var statearr_30756_33813 = state_30746__$1;
(statearr_30756_33813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (5))){
var state_30746__$1 = state_30746;
var statearr_30758_33814 = state_30746__$1;
(statearr_30758_33814[(2)] = null);

(statearr_30758_33814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (6))){
var state_30746__$1 = state_30746;
var statearr_30759_33816 = state_30746__$1;
(statearr_30759_33816[(2)] = null);

(statearr_30759_33816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (7))){
var inst_30742 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
var statearr_30762_33819 = state_30746__$1;
(statearr_30762_33819[(2)] = inst_30742);

(statearr_30762_33819[(1)] = (3));


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
});})(__33779,c__30242__auto___33810,G__30688_33780,G__30688_33781__$1,n__5636__auto___33778,jobs,results,process__$1,async))
;
return ((function (__33779,switch__29199__auto__,c__30242__auto___33810,G__30688_33780,G__30688_33781__$1,n__5636__auto___33778,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0 = (function (){
var statearr_30767 = [null,null,null,null,null,null,null];
(statearr_30767[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__);

(statearr_30767[(1)] = (1));

return statearr_30767;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1 = (function (state_30746){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_30746);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e30768){var ex__29203__auto__ = e30768;
var statearr_30769_33820 = state_30746;
(statearr_30769_33820[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_30746[(4)]))){
var statearr_30770_33821 = state_30746;
(statearr_30770_33821[(1)] = cljs.core.first((state_30746[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33822 = state_30746;
state_30746 = G__33822;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__ = function(state_30746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1.call(this,state_30746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__;
})()
;})(__33779,switch__29199__auto__,c__30242__auto___33810,G__30688_33780,G__30688_33781__$1,n__5636__auto___33778,jobs,results,process__$1,async))
})();
var state__30244__auto__ = (function (){var statearr_30777 = f__30243__auto__();
(statearr_30777[(6)] = c__30242__auto___33810);

return statearr_30777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
});})(__33779,c__30242__auto___33810,G__30688_33780,G__30688_33781__$1,n__5636__auto___33778,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30688_33781__$1)].join('')));

}

var G__33825 = (__33779 + (1));
__33779 = G__33825;
continue;
} else {
}
break;
}

var c__30242__auto___33826 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_30805){
var state_val_30806 = (state_30805[(1)]);
if((state_val_30806 === (7))){
var inst_30801 = (state_30805[(2)]);
var state_30805__$1 = state_30805;
var statearr_30817_33827 = state_30805__$1;
(statearr_30817_33827[(2)] = inst_30801);

(statearr_30817_33827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30806 === (1))){
var state_30805__$1 = state_30805;
var statearr_30818_33828 = state_30805__$1;
(statearr_30818_33828[(2)] = null);

(statearr_30818_33828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30806 === (4))){
var inst_30781 = (state_30805[(7)]);
var inst_30781__$1 = (state_30805[(2)]);
var inst_30782 = (inst_30781__$1 == null);
var state_30805__$1 = (function (){var statearr_30821 = state_30805;
(statearr_30821[(7)] = inst_30781__$1);

return statearr_30821;
})();
if(cljs.core.truth_(inst_30782)){
var statearr_30824_33832 = state_30805__$1;
(statearr_30824_33832[(1)] = (5));

} else {
var statearr_30826_33833 = state_30805__$1;
(statearr_30826_33833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30806 === (6))){
var inst_30786 = (state_30805[(8)]);
var inst_30781 = (state_30805[(7)]);
var inst_30786__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30790 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30791 = [inst_30781,inst_30786__$1];
var inst_30792 = (new cljs.core.PersistentVector(null,2,(5),inst_30790,inst_30791,null));
var state_30805__$1 = (function (){var statearr_30827 = state_30805;
(statearr_30827[(8)] = inst_30786__$1);

return statearr_30827;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30805__$1,(8),jobs,inst_30792);
} else {
if((state_val_30806 === (3))){
var inst_30803 = (state_30805[(2)]);
var state_30805__$1 = state_30805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30805__$1,inst_30803);
} else {
if((state_val_30806 === (2))){
var state_30805__$1 = state_30805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30805__$1,(4),from);
} else {
if((state_val_30806 === (9))){
var inst_30798 = (state_30805[(2)]);
var state_30805__$1 = (function (){var statearr_30831 = state_30805;
(statearr_30831[(9)] = inst_30798);

return statearr_30831;
})();
var statearr_30834_33841 = state_30805__$1;
(statearr_30834_33841[(2)] = null);

(statearr_30834_33841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30806 === (5))){
var inst_30784 = cljs.core.async.close_BANG_(jobs);
var state_30805__$1 = state_30805;
var statearr_30835_33842 = state_30805__$1;
(statearr_30835_33842[(2)] = inst_30784);

(statearr_30835_33842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30806 === (8))){
var inst_30786 = (state_30805[(8)]);
var inst_30795 = (state_30805[(2)]);
var state_30805__$1 = (function (){var statearr_30836 = state_30805;
(statearr_30836[(10)] = inst_30795);

return statearr_30836;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30805__$1,(9),results,inst_30786);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0 = (function (){
var statearr_30837 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30837[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__);

(statearr_30837[(1)] = (1));

return statearr_30837;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1 = (function (state_30805){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_30805);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e30839){var ex__29203__auto__ = e30839;
var statearr_30840_33846 = state_30805;
(statearr_30840_33846[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_30805[(4)]))){
var statearr_30841_33847 = state_30805;
(statearr_30841_33847[(1)] = cljs.core.first((state_30805[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33848 = state_30805;
state_30805 = G__33848;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__ = function(state_30805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1.call(this,state_30805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_30847 = f__30243__auto__();
(statearr_30847[(6)] = c__30242__auto___33826);

return statearr_30847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
}));


var c__30242__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_30895){
var state_val_30896 = (state_30895[(1)]);
if((state_val_30896 === (7))){
var inst_30888 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
var statearr_30899_33850 = state_30895__$1;
(statearr_30899_33850[(2)] = inst_30888);

(statearr_30899_33850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (20))){
var state_30895__$1 = state_30895;
var statearr_30903_33851 = state_30895__$1;
(statearr_30903_33851[(2)] = null);

(statearr_30903_33851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (1))){
var state_30895__$1 = state_30895;
var statearr_30905_33853 = state_30895__$1;
(statearr_30905_33853[(2)] = null);

(statearr_30905_33853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (4))){
var inst_30850 = (state_30895[(7)]);
var inst_30850__$1 = (state_30895[(2)]);
var inst_30851 = (inst_30850__$1 == null);
var state_30895__$1 = (function (){var statearr_30909 = state_30895;
(statearr_30909[(7)] = inst_30850__$1);

return statearr_30909;
})();
if(cljs.core.truth_(inst_30851)){
var statearr_30911_33854 = state_30895__$1;
(statearr_30911_33854[(1)] = (5));

} else {
var statearr_30913_33855 = state_30895__$1;
(statearr_30913_33855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (15))){
var inst_30865 = (state_30895[(8)]);
var state_30895__$1 = state_30895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30895__$1,(18),to,inst_30865);
} else {
if((state_val_30896 === (21))){
var inst_30882 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
var statearr_30920_33857 = state_30895__$1;
(statearr_30920_33857[(2)] = inst_30882);

(statearr_30920_33857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (13))){
var inst_30884 = (state_30895[(2)]);
var state_30895__$1 = (function (){var statearr_30923 = state_30895;
(statearr_30923[(9)] = inst_30884);

return statearr_30923;
})();
var statearr_30925_33859 = state_30895__$1;
(statearr_30925_33859[(2)] = null);

(statearr_30925_33859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (6))){
var inst_30850 = (state_30895[(7)]);
var state_30895__$1 = state_30895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30895__$1,(11),inst_30850);
} else {
if((state_val_30896 === (17))){
var inst_30877 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
if(cljs.core.truth_(inst_30877)){
var statearr_30932_33863 = state_30895__$1;
(statearr_30932_33863[(1)] = (19));

} else {
var statearr_30933_33864 = state_30895__$1;
(statearr_30933_33864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (3))){
var inst_30891 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30895__$1,inst_30891);
} else {
if((state_val_30896 === (12))){
var inst_30861 = (state_30895[(10)]);
var state_30895__$1 = state_30895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30895__$1,(14),inst_30861);
} else {
if((state_val_30896 === (2))){
var state_30895__$1 = state_30895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30895__$1,(4),results);
} else {
if((state_val_30896 === (19))){
var state_30895__$1 = state_30895;
var statearr_30937_33866 = state_30895__$1;
(statearr_30937_33866[(2)] = null);

(statearr_30937_33866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (11))){
var inst_30861 = (state_30895[(2)]);
var state_30895__$1 = (function (){var statearr_30938 = state_30895;
(statearr_30938[(10)] = inst_30861);

return statearr_30938;
})();
var statearr_30940_33869 = state_30895__$1;
(statearr_30940_33869[(2)] = null);

(statearr_30940_33869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (9))){
var state_30895__$1 = state_30895;
var statearr_30946_33870 = state_30895__$1;
(statearr_30946_33870[(2)] = null);

(statearr_30946_33870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (5))){
var state_30895__$1 = state_30895;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30948_33871 = state_30895__$1;
(statearr_30948_33871[(1)] = (8));

} else {
var statearr_30949_33872 = state_30895__$1;
(statearr_30949_33872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (14))){
var inst_30865 = (state_30895[(8)]);
var inst_30871 = (state_30895[(11)]);
var inst_30865__$1 = (state_30895[(2)]);
var inst_30870 = (inst_30865__$1 == null);
var inst_30871__$1 = cljs.core.not(inst_30870);
var state_30895__$1 = (function (){var statearr_30953 = state_30895;
(statearr_30953[(8)] = inst_30865__$1);

(statearr_30953[(11)] = inst_30871__$1);

return statearr_30953;
})();
if(inst_30871__$1){
var statearr_30954_33873 = state_30895__$1;
(statearr_30954_33873[(1)] = (15));

} else {
var statearr_30955_33874 = state_30895__$1;
(statearr_30955_33874[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (16))){
var inst_30871 = (state_30895[(11)]);
var state_30895__$1 = state_30895;
var statearr_30961_33875 = state_30895__$1;
(statearr_30961_33875[(2)] = inst_30871);

(statearr_30961_33875[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (10))){
var inst_30858 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
var statearr_30963_33881 = state_30895__$1;
(statearr_30963_33881[(2)] = inst_30858);

(statearr_30963_33881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (18))){
var inst_30874 = (state_30895[(2)]);
var state_30895__$1 = state_30895;
var statearr_30964_33885 = state_30895__$1;
(statearr_30964_33885[(2)] = inst_30874);

(statearr_30964_33885[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30896 === (8))){
var inst_30855 = cljs.core.async.close_BANG_(to);
var state_30895__$1 = state_30895;
var statearr_30967_33891 = state_30895__$1;
(statearr_30967_33891[(2)] = inst_30855);

(statearr_30967_33891[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0 = (function (){
var statearr_30970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__);

(statearr_30970[(1)] = (1));

return statearr_30970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1 = (function (state_30895){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_30895);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e30973){var ex__29203__auto__ = e30973;
var statearr_30974_33907 = state_30895;
(statearr_30974_33907[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_30895[(4)]))){
var statearr_30977_33914 = state_30895;
(statearr_30977_33914[(1)] = cljs.core.first((state_30895[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33921 = state_30895;
state_30895 = G__33921;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__ = function(state_30895){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1.call(this,state_30895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29200__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_30981 = f__30243__auto__();
(statearr_30981[(6)] = c__30242__auto__);

return statearr_30981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
}));

return c__30242__auto__;
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
var G__30986 = arguments.length;
switch (G__30986) {
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
var G__30990 = arguments.length;
switch (G__30990) {
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
var G__31005 = arguments.length;
switch (G__31005) {
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
var c__30242__auto___33956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_31035){
var state_val_31036 = (state_31035[(1)]);
if((state_val_31036 === (7))){
var inst_31031 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31045_33958 = state_31035__$1;
(statearr_31045_33958[(2)] = inst_31031);

(statearr_31045_33958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (1))){
var state_31035__$1 = state_31035;
var statearr_31046_33960 = state_31035__$1;
(statearr_31046_33960[(2)] = null);

(statearr_31046_33960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (4))){
var inst_31012 = (state_31035[(7)]);
var inst_31012__$1 = (state_31035[(2)]);
var inst_31013 = (inst_31012__$1 == null);
var state_31035__$1 = (function (){var statearr_31047 = state_31035;
(statearr_31047[(7)] = inst_31012__$1);

return statearr_31047;
})();
if(cljs.core.truth_(inst_31013)){
var statearr_31048_33961 = state_31035__$1;
(statearr_31048_33961[(1)] = (5));

} else {
var statearr_31049_33962 = state_31035__$1;
(statearr_31049_33962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (13))){
var state_31035__$1 = state_31035;
var statearr_31050_33963 = state_31035__$1;
(statearr_31050_33963[(2)] = null);

(statearr_31050_33963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (6))){
var inst_31012 = (state_31035[(7)]);
var inst_31018 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31012) : p.call(null,inst_31012));
var state_31035__$1 = state_31035;
if(cljs.core.truth_(inst_31018)){
var statearr_31053_33965 = state_31035__$1;
(statearr_31053_33965[(1)] = (9));

} else {
var statearr_31054_33966 = state_31035__$1;
(statearr_31054_33966[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (3))){
var inst_31033 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31035__$1,inst_31033);
} else {
if((state_val_31036 === (12))){
var state_31035__$1 = state_31035;
var statearr_31059_33970 = state_31035__$1;
(statearr_31059_33970[(2)] = null);

(statearr_31059_33970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (2))){
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31035__$1,(4),ch);
} else {
if((state_val_31036 === (11))){
var inst_31012 = (state_31035[(7)]);
var inst_31022 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31035__$1,(8),inst_31022,inst_31012);
} else {
if((state_val_31036 === (9))){
var state_31035__$1 = state_31035;
var statearr_31063_33979 = state_31035__$1;
(statearr_31063_33979[(2)] = tc);

(statearr_31063_33979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (5))){
var inst_31015 = cljs.core.async.close_BANG_(tc);
var inst_31016 = cljs.core.async.close_BANG_(fc);
var state_31035__$1 = (function (){var statearr_31065 = state_31035;
(statearr_31065[(8)] = inst_31015);

return statearr_31065;
})();
var statearr_31069_33984 = state_31035__$1;
(statearr_31069_33984[(2)] = inst_31016);

(statearr_31069_33984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (14))){
var inst_31029 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
var statearr_31070_33985 = state_31035__$1;
(statearr_31070_33985[(2)] = inst_31029);

(statearr_31070_33985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (10))){
var state_31035__$1 = state_31035;
var statearr_31072_33986 = state_31035__$1;
(statearr_31072_33986[(2)] = fc);

(statearr_31072_33986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31036 === (8))){
var inst_31024 = (state_31035[(2)]);
var state_31035__$1 = state_31035;
if(cljs.core.truth_(inst_31024)){
var statearr_31074_33988 = state_31035__$1;
(statearr_31074_33988[(1)] = (12));

} else {
var statearr_31075_33989 = state_31035__$1;
(statearr_31075_33989[(1)] = (13));

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
var cljs$core$async$state_machine__29200__auto__ = null;
var cljs$core$async$state_machine__29200__auto____0 = (function (){
var statearr_31078 = [null,null,null,null,null,null,null,null,null];
(statearr_31078[(0)] = cljs$core$async$state_machine__29200__auto__);

(statearr_31078[(1)] = (1));

return statearr_31078;
});
var cljs$core$async$state_machine__29200__auto____1 = (function (state_31035){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_31035);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e31083){var ex__29203__auto__ = e31083;
var statearr_31088_33990 = state_31035;
(statearr_31088_33990[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_31035[(4)]))){
var statearr_31091_33991 = state_31035;
(statearr_31091_33991[(1)] = cljs.core.first((state_31035[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33992 = state_31035;
state_31035 = G__33992;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$state_machine__29200__auto__ = function(state_31035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29200__auto____1.call(this,state_31035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29200__auto____0;
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29200__auto____1;
return cljs$core$async$state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_31095 = f__30243__auto__();
(statearr_31095[(6)] = c__30242__auto___33956);

return statearr_31095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
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
var c__30242__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_31132){
var state_val_31134 = (state_31132[(1)]);
if((state_val_31134 === (7))){
var inst_31125 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31137_33993 = state_31132__$1;
(statearr_31137_33993[(2)] = inst_31125);

(statearr_31137_33993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (1))){
var inst_31105 = init;
var inst_31108 = inst_31105;
var state_31132__$1 = (function (){var statearr_31142 = state_31132;
(statearr_31142[(7)] = inst_31108);

return statearr_31142;
})();
var statearr_31143_33994 = state_31132__$1;
(statearr_31143_33994[(2)] = null);

(statearr_31143_33994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (4))){
var inst_31111 = (state_31132[(8)]);
var inst_31111__$1 = (state_31132[(2)]);
var inst_31112 = (inst_31111__$1 == null);
var state_31132__$1 = (function (){var statearr_31152 = state_31132;
(statearr_31152[(8)] = inst_31111__$1);

return statearr_31152;
})();
if(cljs.core.truth_(inst_31112)){
var statearr_31155_33996 = state_31132__$1;
(statearr_31155_33996[(1)] = (5));

} else {
var statearr_31158_33997 = state_31132__$1;
(statearr_31158_33997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (6))){
var inst_31116 = (state_31132[(9)]);
var inst_31111 = (state_31132[(8)]);
var inst_31108 = (state_31132[(7)]);
var inst_31116__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31108,inst_31111) : f.call(null,inst_31108,inst_31111));
var inst_31117 = cljs.core.reduced_QMARK_(inst_31116__$1);
var state_31132__$1 = (function (){var statearr_31161 = state_31132;
(statearr_31161[(9)] = inst_31116__$1);

return statearr_31161;
})();
if(inst_31117){
var statearr_31162_34005 = state_31132__$1;
(statearr_31162_34005[(1)] = (8));

} else {
var statearr_31163_34010 = state_31132__$1;
(statearr_31163_34010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (3))){
var inst_31127 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31132__$1,inst_31127);
} else {
if((state_val_31134 === (2))){
var state_31132__$1 = state_31132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31132__$1,(4),ch);
} else {
if((state_val_31134 === (9))){
var inst_31116 = (state_31132[(9)]);
var inst_31108 = inst_31116;
var state_31132__$1 = (function (){var statearr_31170 = state_31132;
(statearr_31170[(7)] = inst_31108);

return statearr_31170;
})();
var statearr_31171_34011 = state_31132__$1;
(statearr_31171_34011[(2)] = null);

(statearr_31171_34011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (5))){
var inst_31108 = (state_31132[(7)]);
var state_31132__$1 = state_31132;
var statearr_31175_34013 = state_31132__$1;
(statearr_31175_34013[(2)] = inst_31108);

(statearr_31175_34013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (10))){
var inst_31123 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31177_34014 = state_31132__$1;
(statearr_31177_34014[(2)] = inst_31123);

(statearr_31177_34014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (8))){
var inst_31116 = (state_31132[(9)]);
var inst_31119 = cljs.core.deref(inst_31116);
var state_31132__$1 = state_31132;
var statearr_31182_34015 = state_31132__$1;
(statearr_31182_34015[(2)] = inst_31119);

(statearr_31182_34015[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29200__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29200__auto____0 = (function (){
var statearr_31187 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31187[(0)] = cljs$core$async$reduce_$_state_machine__29200__auto__);

(statearr_31187[(1)] = (1));

return statearr_31187;
});
var cljs$core$async$reduce_$_state_machine__29200__auto____1 = (function (state_31132){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_31132);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e31190){var ex__29203__auto__ = e31190;
var statearr_31193_34022 = state_31132;
(statearr_31193_34022[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_31132[(4)]))){
var statearr_31197_34023 = state_31132;
(statearr_31197_34023[(1)] = cljs.core.first((state_31132[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34024 = state_31132;
state_31132 = G__34024;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29200__auto__ = function(state_31132){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29200__auto____1.call(this,state_31132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29200__auto____0;
cljs$core$async$reduce_$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29200__auto____1;
return cljs$core$async$reduce_$_state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_31201 = f__30243__auto__();
(statearr_31201[(6)] = c__30242__auto__);

return statearr_31201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
}));

return c__30242__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30242__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_31216){
var state_val_31217 = (state_31216[(1)]);
if((state_val_31217 === (1))){
var inst_31211 = cljs.core.async.reduce(f__$1,init,ch);
var state_31216__$1 = state_31216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31216__$1,(2),inst_31211);
} else {
if((state_val_31217 === (2))){
var inst_31213 = (state_31216[(2)]);
var inst_31214 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31213) : f__$1.call(null,inst_31213));
var state_31216__$1 = state_31216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31216__$1,inst_31214);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29200__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29200__auto____0 = (function (){
var statearr_31223 = [null,null,null,null,null,null,null];
(statearr_31223[(0)] = cljs$core$async$transduce_$_state_machine__29200__auto__);

(statearr_31223[(1)] = (1));

return statearr_31223;
});
var cljs$core$async$transduce_$_state_machine__29200__auto____1 = (function (state_31216){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_31216);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e31227){var ex__29203__auto__ = e31227;
var statearr_31228_34037 = state_31216;
(statearr_31228_34037[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_31216[(4)]))){
var statearr_31229_34039 = state_31216;
(statearr_31229_34039[(1)] = cljs.core.first((state_31216[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34040 = state_31216;
state_31216 = G__34040;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29200__auto__ = function(state_31216){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29200__auto____1.call(this,state_31216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29200__auto____0;
cljs$core$async$transduce_$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29200__auto____1;
return cljs$core$async$transduce_$_state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_31236 = f__30243__auto__();
(statearr_31236[(6)] = c__30242__auto__);

return statearr_31236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
}));

return c__30242__auto__;
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
var G__31245 = arguments.length;
switch (G__31245) {
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
var c__30242__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_31280){
var state_val_31281 = (state_31280[(1)]);
if((state_val_31281 === (7))){
var inst_31259 = (state_31280[(2)]);
var state_31280__$1 = state_31280;
var statearr_31288_34055 = state_31280__$1;
(statearr_31288_34055[(2)] = inst_31259);

(statearr_31288_34055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31281 === (1))){
var inst_31250 = cljs.core.seq(coll);
var inst_31251 = inst_31250;
var state_31280__$1 = (function (){var statearr_31295 = state_31280;
(statearr_31295[(7)] = inst_31251);

return statearr_31295;
})();
var statearr_31296_34056 = state_31280__$1;
(statearr_31296_34056[(2)] = null);

(statearr_31296_34056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31281 === (4))){
var inst_31251 = (state_31280[(7)]);
var inst_31257 = cljs.core.first(inst_31251);
var state_31280__$1 = state_31280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31280__$1,(7),ch,inst_31257);
} else {
if((state_val_31281 === (13))){
var inst_31271 = (state_31280[(2)]);
var state_31280__$1 = state_31280;
var statearr_31300_34058 = state_31280__$1;
(statearr_31300_34058[(2)] = inst_31271);

(statearr_31300_34058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31281 === (6))){
var inst_31262 = (state_31280[(2)]);
var state_31280__$1 = state_31280;
if(cljs.core.truth_(inst_31262)){
var statearr_31302_34060 = state_31280__$1;
(statearr_31302_34060[(1)] = (8));

} else {
var statearr_31304_34061 = state_31280__$1;
(statearr_31304_34061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31281 === (3))){
var inst_31275 = (state_31280[(2)]);
var state_31280__$1 = state_31280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31280__$1,inst_31275);
} else {
if((state_val_31281 === (12))){
var state_31280__$1 = state_31280;
var statearr_31308_34062 = state_31280__$1;
(statearr_31308_34062[(2)] = null);

(statearr_31308_34062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31281 === (2))){
var inst_31251 = (state_31280[(7)]);
var state_31280__$1 = state_31280;
if(cljs.core.truth_(inst_31251)){
var statearr_31311_34063 = state_31280__$1;
(statearr_31311_34063[(1)] = (4));

} else {
var statearr_31313_34064 = state_31280__$1;
(statearr_31313_34064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31281 === (11))){
var inst_31268 = cljs.core.async.close_BANG_(ch);
var state_31280__$1 = state_31280;
var statearr_31315_34065 = state_31280__$1;
(statearr_31315_34065[(2)] = inst_31268);

(statearr_31315_34065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31281 === (9))){
var state_31280__$1 = state_31280;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31320_34066 = state_31280__$1;
(statearr_31320_34066[(1)] = (11));

} else {
var statearr_31321_34067 = state_31280__$1;
(statearr_31321_34067[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31281 === (5))){
var inst_31251 = (state_31280[(7)]);
var state_31280__$1 = state_31280;
var statearr_31323_34068 = state_31280__$1;
(statearr_31323_34068[(2)] = inst_31251);

(statearr_31323_34068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31281 === (10))){
var inst_31273 = (state_31280[(2)]);
var state_31280__$1 = state_31280;
var statearr_31324_34070 = state_31280__$1;
(statearr_31324_34070[(2)] = inst_31273);

(statearr_31324_34070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31281 === (8))){
var inst_31251 = (state_31280[(7)]);
var inst_31264 = cljs.core.next(inst_31251);
var inst_31251__$1 = inst_31264;
var state_31280__$1 = (function (){var statearr_31331 = state_31280;
(statearr_31331[(7)] = inst_31251__$1);

return statearr_31331;
})();
var statearr_31332_34071 = state_31280__$1;
(statearr_31332_34071[(2)] = null);

(statearr_31332_34071[(1)] = (2));


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
var cljs$core$async$state_machine__29200__auto__ = null;
var cljs$core$async$state_machine__29200__auto____0 = (function (){
var statearr_31335 = [null,null,null,null,null,null,null,null];
(statearr_31335[(0)] = cljs$core$async$state_machine__29200__auto__);

(statearr_31335[(1)] = (1));

return statearr_31335;
});
var cljs$core$async$state_machine__29200__auto____1 = (function (state_31280){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_31280);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e31337){var ex__29203__auto__ = e31337;
var statearr_31339_34079 = state_31280;
(statearr_31339_34079[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_31280[(4)]))){
var statearr_31342_34080 = state_31280;
(statearr_31342_34080[(1)] = cljs.core.first((state_31280[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34081 = state_31280;
state_31280 = G__34081;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$state_machine__29200__auto__ = function(state_31280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29200__auto____1.call(this,state_31280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29200__auto____0;
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29200__auto____1;
return cljs$core$async$state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_31344 = f__30243__auto__();
(statearr_31344[(6)] = c__30242__auto__);

return statearr_31344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
}));

return c__30242__auto__;
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
var G__31359 = arguments.length;
switch (G__31359) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_34083 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_34083(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34087 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_34087(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34090 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_34090(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34092 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_34092(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31412 = (function (ch,cs,meta31413){
this.ch = ch;
this.cs = cs;
this.meta31413 = meta31413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31414,meta31413__$1){
var self__ = this;
var _31414__$1 = this;
return (new cljs.core.async.t_cljs$core$async31412(self__.ch,self__.cs,meta31413__$1));
}));

(cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31414){
var self__ = this;
var _31414__$1 = this;
return self__.meta31413;
}));

(cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31412.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31413","meta31413",-576419831,null)], null);
}));

(cljs.core.async.t_cljs$core$async31412.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31412");

(cljs.core.async.t_cljs$core$async31412.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31412");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31412.
 */
cljs.core.async.__GT_t_cljs$core$async31412 = (function cljs$core$async$__GT_t_cljs$core$async31412(ch,cs,meta31413){
return (new cljs.core.async.t_cljs$core$async31412(ch,cs,meta31413));
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
var m = (new cljs.core.async.t_cljs$core$async31412(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30242__auto___34107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_31590){
var state_val_31591 = (state_31590[(1)]);
if((state_val_31591 === (7))){
var inst_31585 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31596_34113 = state_31590__$1;
(statearr_31596_34113[(2)] = inst_31585);

(statearr_31596_34113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (20))){
var inst_31481 = (state_31590[(7)]);
var inst_31496 = cljs.core.first(inst_31481);
var inst_31497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31496,(0),null);
var inst_31498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31496,(1),null);
var state_31590__$1 = (function (){var statearr_31597 = state_31590;
(statearr_31597[(8)] = inst_31497);

return statearr_31597;
})();
if(cljs.core.truth_(inst_31498)){
var statearr_31598_34122 = state_31590__$1;
(statearr_31598_34122[(1)] = (22));

} else {
var statearr_31599_34123 = state_31590__$1;
(statearr_31599_34123[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (27))){
var inst_31528 = (state_31590[(9)]);
var inst_31446 = (state_31590[(10)]);
var inst_31526 = (state_31590[(11)]);
var inst_31534 = (state_31590[(12)]);
var inst_31534__$1 = cljs.core._nth(inst_31526,inst_31528);
var inst_31535 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31534__$1,inst_31446,done);
var state_31590__$1 = (function (){var statearr_31600 = state_31590;
(statearr_31600[(12)] = inst_31534__$1);

return statearr_31600;
})();
if(cljs.core.truth_(inst_31535)){
var statearr_31601_34128 = state_31590__$1;
(statearr_31601_34128[(1)] = (30));

} else {
var statearr_31602_34130 = state_31590__$1;
(statearr_31602_34130[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (1))){
var state_31590__$1 = state_31590;
var statearr_31603_34131 = state_31590__$1;
(statearr_31603_34131[(2)] = null);

(statearr_31603_34131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (24))){
var inst_31481 = (state_31590[(7)]);
var inst_31503 = (state_31590[(2)]);
var inst_31504 = cljs.core.next(inst_31481);
var inst_31458 = inst_31504;
var inst_31459 = null;
var inst_31460 = (0);
var inst_31461 = (0);
var state_31590__$1 = (function (){var statearr_31604 = state_31590;
(statearr_31604[(13)] = inst_31461);

(statearr_31604[(14)] = inst_31458);

(statearr_31604[(15)] = inst_31459);

(statearr_31604[(16)] = inst_31503);

(statearr_31604[(17)] = inst_31460);

return statearr_31604;
})();
var statearr_31607_34136 = state_31590__$1;
(statearr_31607_34136[(2)] = null);

(statearr_31607_34136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (39))){
var state_31590__$1 = state_31590;
var statearr_31612_34137 = state_31590__$1;
(statearr_31612_34137[(2)] = null);

(statearr_31612_34137[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (4))){
var inst_31446 = (state_31590[(10)]);
var inst_31446__$1 = (state_31590[(2)]);
var inst_31447 = (inst_31446__$1 == null);
var state_31590__$1 = (function (){var statearr_31613 = state_31590;
(statearr_31613[(10)] = inst_31446__$1);

return statearr_31613;
})();
if(cljs.core.truth_(inst_31447)){
var statearr_31615_34141 = state_31590__$1;
(statearr_31615_34141[(1)] = (5));

} else {
var statearr_31616_34142 = state_31590__$1;
(statearr_31616_34142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (15))){
var inst_31461 = (state_31590[(13)]);
var inst_31458 = (state_31590[(14)]);
var inst_31459 = (state_31590[(15)]);
var inst_31460 = (state_31590[(17)]);
var inst_31477 = (state_31590[(2)]);
var inst_31478 = (inst_31461 + (1));
var tmp31608 = inst_31458;
var tmp31609 = inst_31459;
var tmp31610 = inst_31460;
var inst_31458__$1 = tmp31608;
var inst_31459__$1 = tmp31609;
var inst_31460__$1 = tmp31610;
var inst_31461__$1 = inst_31478;
var state_31590__$1 = (function (){var statearr_31622 = state_31590;
(statearr_31622[(13)] = inst_31461__$1);

(statearr_31622[(14)] = inst_31458__$1);

(statearr_31622[(18)] = inst_31477);

(statearr_31622[(15)] = inst_31459__$1);

(statearr_31622[(17)] = inst_31460__$1);

return statearr_31622;
})();
var statearr_31624_34144 = state_31590__$1;
(statearr_31624_34144[(2)] = null);

(statearr_31624_34144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (21))){
var inst_31507 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31628_34149 = state_31590__$1;
(statearr_31628_34149[(2)] = inst_31507);

(statearr_31628_34149[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (31))){
var inst_31534 = (state_31590[(12)]);
var inst_31538 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31534);
var state_31590__$1 = state_31590;
var statearr_31635_34152 = state_31590__$1;
(statearr_31635_34152[(2)] = inst_31538);

(statearr_31635_34152[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (32))){
var inst_31525 = (state_31590[(19)]);
var inst_31528 = (state_31590[(9)]);
var inst_31527 = (state_31590[(20)]);
var inst_31526 = (state_31590[(11)]);
var inst_31540 = (state_31590[(2)]);
var inst_31542 = (inst_31528 + (1));
var tmp31625 = inst_31525;
var tmp31626 = inst_31527;
var tmp31627 = inst_31526;
var inst_31525__$1 = tmp31625;
var inst_31526__$1 = tmp31627;
var inst_31527__$1 = tmp31626;
var inst_31528__$1 = inst_31542;
var state_31590__$1 = (function (){var statearr_31636 = state_31590;
(statearr_31636[(19)] = inst_31525__$1);

(statearr_31636[(9)] = inst_31528__$1);

(statearr_31636[(21)] = inst_31540);

(statearr_31636[(20)] = inst_31527__$1);

(statearr_31636[(11)] = inst_31526__$1);

return statearr_31636;
})();
var statearr_31637_34162 = state_31590__$1;
(statearr_31637_34162[(2)] = null);

(statearr_31637_34162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (40))){
var inst_31554 = (state_31590[(22)]);
var inst_31562 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31554);
var state_31590__$1 = state_31590;
var statearr_31638_34163 = state_31590__$1;
(statearr_31638_34163[(2)] = inst_31562);

(statearr_31638_34163[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (33))){
var inst_31545 = (state_31590[(23)]);
var inst_31547 = cljs.core.chunked_seq_QMARK_(inst_31545);
var state_31590__$1 = state_31590;
if(inst_31547){
var statearr_31639_34167 = state_31590__$1;
(statearr_31639_34167[(1)] = (36));

} else {
var statearr_31640_34168 = state_31590__$1;
(statearr_31640_34168[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (13))){
var inst_31471 = (state_31590[(24)]);
var inst_31474 = cljs.core.async.close_BANG_(inst_31471);
var state_31590__$1 = state_31590;
var statearr_31643_34169 = state_31590__$1;
(statearr_31643_34169[(2)] = inst_31474);

(statearr_31643_34169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (22))){
var inst_31497 = (state_31590[(8)]);
var inst_31500 = cljs.core.async.close_BANG_(inst_31497);
var state_31590__$1 = state_31590;
var statearr_31644_34170 = state_31590__$1;
(statearr_31644_34170[(2)] = inst_31500);

(statearr_31644_34170[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (36))){
var inst_31545 = (state_31590[(23)]);
var inst_31549 = cljs.core.chunk_first(inst_31545);
var inst_31550 = cljs.core.chunk_rest(inst_31545);
var inst_31551 = cljs.core.count(inst_31549);
var inst_31525 = inst_31550;
var inst_31526 = inst_31549;
var inst_31527 = inst_31551;
var inst_31528 = (0);
var state_31590__$1 = (function (){var statearr_31645 = state_31590;
(statearr_31645[(19)] = inst_31525);

(statearr_31645[(9)] = inst_31528);

(statearr_31645[(20)] = inst_31527);

(statearr_31645[(11)] = inst_31526);

return statearr_31645;
})();
var statearr_31647_34171 = state_31590__$1;
(statearr_31647_34171[(2)] = null);

(statearr_31647_34171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (41))){
var inst_31545 = (state_31590[(23)]);
var inst_31564 = (state_31590[(2)]);
var inst_31565 = cljs.core.next(inst_31545);
var inst_31525 = inst_31565;
var inst_31526 = null;
var inst_31527 = (0);
var inst_31528 = (0);
var state_31590__$1 = (function (){var statearr_31649 = state_31590;
(statearr_31649[(19)] = inst_31525);

(statearr_31649[(9)] = inst_31528);

(statearr_31649[(20)] = inst_31527);

(statearr_31649[(11)] = inst_31526);

(statearr_31649[(25)] = inst_31564);

return statearr_31649;
})();
var statearr_31650_34175 = state_31590__$1;
(statearr_31650_34175[(2)] = null);

(statearr_31650_34175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (43))){
var state_31590__$1 = state_31590;
var statearr_31651_34176 = state_31590__$1;
(statearr_31651_34176[(2)] = null);

(statearr_31651_34176[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (29))){
var inst_31573 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31652_34177 = state_31590__$1;
(statearr_31652_34177[(2)] = inst_31573);

(statearr_31652_34177[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (44))){
var inst_31582 = (state_31590[(2)]);
var state_31590__$1 = (function (){var statearr_31653 = state_31590;
(statearr_31653[(26)] = inst_31582);

return statearr_31653;
})();
var statearr_31654_34181 = state_31590__$1;
(statearr_31654_34181[(2)] = null);

(statearr_31654_34181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (6))){
var inst_31517 = (state_31590[(27)]);
var inst_31516 = cljs.core.deref(cs);
var inst_31517__$1 = cljs.core.keys(inst_31516);
var inst_31518 = cljs.core.count(inst_31517__$1);
var inst_31519 = cljs.core.reset_BANG_(dctr,inst_31518);
var inst_31524 = cljs.core.seq(inst_31517__$1);
var inst_31525 = inst_31524;
var inst_31526 = null;
var inst_31527 = (0);
var inst_31528 = (0);
var state_31590__$1 = (function (){var statearr_31655 = state_31590;
(statearr_31655[(19)] = inst_31525);

(statearr_31655[(9)] = inst_31528);

(statearr_31655[(20)] = inst_31527);

(statearr_31655[(27)] = inst_31517__$1);

(statearr_31655[(28)] = inst_31519);

(statearr_31655[(11)] = inst_31526);

return statearr_31655;
})();
var statearr_31656_34182 = state_31590__$1;
(statearr_31656_34182[(2)] = null);

(statearr_31656_34182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (28))){
var inst_31525 = (state_31590[(19)]);
var inst_31545 = (state_31590[(23)]);
var inst_31545__$1 = cljs.core.seq(inst_31525);
var state_31590__$1 = (function (){var statearr_31662 = state_31590;
(statearr_31662[(23)] = inst_31545__$1);

return statearr_31662;
})();
if(inst_31545__$1){
var statearr_31663_34186 = state_31590__$1;
(statearr_31663_34186[(1)] = (33));

} else {
var statearr_31664_34187 = state_31590__$1;
(statearr_31664_34187[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (25))){
var inst_31528 = (state_31590[(9)]);
var inst_31527 = (state_31590[(20)]);
var inst_31530 = (inst_31528 < inst_31527);
var inst_31531 = inst_31530;
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31531)){
var statearr_31665_34189 = state_31590__$1;
(statearr_31665_34189[(1)] = (27));

} else {
var statearr_31666_34191 = state_31590__$1;
(statearr_31666_34191[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (34))){
var state_31590__$1 = state_31590;
var statearr_31667_34192 = state_31590__$1;
(statearr_31667_34192[(2)] = null);

(statearr_31667_34192[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (17))){
var state_31590__$1 = state_31590;
var statearr_31668_34193 = state_31590__$1;
(statearr_31668_34193[(2)] = null);

(statearr_31668_34193[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (3))){
var inst_31587 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31590__$1,inst_31587);
} else {
if((state_val_31591 === (12))){
var inst_31512 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31669_34194 = state_31590__$1;
(statearr_31669_34194[(2)] = inst_31512);

(statearr_31669_34194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (2))){
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31590__$1,(4),ch);
} else {
if((state_val_31591 === (23))){
var state_31590__$1 = state_31590;
var statearr_31670_34195 = state_31590__$1;
(statearr_31670_34195[(2)] = null);

(statearr_31670_34195[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (35))){
var inst_31571 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31671_34197 = state_31590__$1;
(statearr_31671_34197[(2)] = inst_31571);

(statearr_31671_34197[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (19))){
var inst_31481 = (state_31590[(7)]);
var inst_31488 = cljs.core.chunk_first(inst_31481);
var inst_31489 = cljs.core.chunk_rest(inst_31481);
var inst_31490 = cljs.core.count(inst_31488);
var inst_31458 = inst_31489;
var inst_31459 = inst_31488;
var inst_31460 = inst_31490;
var inst_31461 = (0);
var state_31590__$1 = (function (){var statearr_31673 = state_31590;
(statearr_31673[(13)] = inst_31461);

(statearr_31673[(14)] = inst_31458);

(statearr_31673[(15)] = inst_31459);

(statearr_31673[(17)] = inst_31460);

return statearr_31673;
})();
var statearr_31675_34200 = state_31590__$1;
(statearr_31675_34200[(2)] = null);

(statearr_31675_34200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (11))){
var inst_31458 = (state_31590[(14)]);
var inst_31481 = (state_31590[(7)]);
var inst_31481__$1 = cljs.core.seq(inst_31458);
var state_31590__$1 = (function (){var statearr_31676 = state_31590;
(statearr_31676[(7)] = inst_31481__$1);

return statearr_31676;
})();
if(inst_31481__$1){
var statearr_31677_34202 = state_31590__$1;
(statearr_31677_34202[(1)] = (16));

} else {
var statearr_31678_34203 = state_31590__$1;
(statearr_31678_34203[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (9))){
var inst_31514 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31679_34204 = state_31590__$1;
(statearr_31679_34204[(2)] = inst_31514);

(statearr_31679_34204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (5))){
var inst_31453 = cljs.core.deref(cs);
var inst_31454 = cljs.core.seq(inst_31453);
var inst_31458 = inst_31454;
var inst_31459 = null;
var inst_31460 = (0);
var inst_31461 = (0);
var state_31590__$1 = (function (){var statearr_31682 = state_31590;
(statearr_31682[(13)] = inst_31461);

(statearr_31682[(14)] = inst_31458);

(statearr_31682[(15)] = inst_31459);

(statearr_31682[(17)] = inst_31460);

return statearr_31682;
})();
var statearr_31683_34206 = state_31590__$1;
(statearr_31683_34206[(2)] = null);

(statearr_31683_34206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (14))){
var state_31590__$1 = state_31590;
var statearr_31684_34207 = state_31590__$1;
(statearr_31684_34207[(2)] = null);

(statearr_31684_34207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (45))){
var inst_31579 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31685_34211 = state_31590__$1;
(statearr_31685_34211[(2)] = inst_31579);

(statearr_31685_34211[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (26))){
var inst_31517 = (state_31590[(27)]);
var inst_31575 = (state_31590[(2)]);
var inst_31576 = cljs.core.seq(inst_31517);
var state_31590__$1 = (function (){var statearr_31692 = state_31590;
(statearr_31692[(29)] = inst_31575);

return statearr_31692;
})();
if(inst_31576){
var statearr_31693_34216 = state_31590__$1;
(statearr_31693_34216[(1)] = (42));

} else {
var statearr_31694_34217 = state_31590__$1;
(statearr_31694_34217[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (16))){
var inst_31481 = (state_31590[(7)]);
var inst_31484 = cljs.core.chunked_seq_QMARK_(inst_31481);
var state_31590__$1 = state_31590;
if(inst_31484){
var statearr_31703_34218 = state_31590__$1;
(statearr_31703_34218[(1)] = (19));

} else {
var statearr_31704_34219 = state_31590__$1;
(statearr_31704_34219[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (38))){
var inst_31568 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31705_34221 = state_31590__$1;
(statearr_31705_34221[(2)] = inst_31568);

(statearr_31705_34221[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (30))){
var state_31590__$1 = state_31590;
var statearr_31706_34222 = state_31590__$1;
(statearr_31706_34222[(2)] = null);

(statearr_31706_34222[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (10))){
var inst_31461 = (state_31590[(13)]);
var inst_31459 = (state_31590[(15)]);
var inst_31470 = cljs.core._nth(inst_31459,inst_31461);
var inst_31471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31470,(0),null);
var inst_31472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31470,(1),null);
var state_31590__$1 = (function (){var statearr_31710 = state_31590;
(statearr_31710[(24)] = inst_31471);

return statearr_31710;
})();
if(cljs.core.truth_(inst_31472)){
var statearr_31711_34223 = state_31590__$1;
(statearr_31711_34223[(1)] = (13));

} else {
var statearr_31716_34224 = state_31590__$1;
(statearr_31716_34224[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (18))){
var inst_31510 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31720_34226 = state_31590__$1;
(statearr_31720_34226[(2)] = inst_31510);

(statearr_31720_34226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (42))){
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31590__$1,(45),dchan);
} else {
if((state_val_31591 === (37))){
var inst_31554 = (state_31590[(22)]);
var inst_31545 = (state_31590[(23)]);
var inst_31446 = (state_31590[(10)]);
var inst_31554__$1 = cljs.core.first(inst_31545);
var inst_31558 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31554__$1,inst_31446,done);
var state_31590__$1 = (function (){var statearr_31722 = state_31590;
(statearr_31722[(22)] = inst_31554__$1);

return statearr_31722;
})();
if(cljs.core.truth_(inst_31558)){
var statearr_31726_34227 = state_31590__$1;
(statearr_31726_34227[(1)] = (39));

} else {
var statearr_31727_34229 = state_31590__$1;
(statearr_31727_34229[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (8))){
var inst_31461 = (state_31590[(13)]);
var inst_31460 = (state_31590[(17)]);
var inst_31464 = (inst_31461 < inst_31460);
var inst_31465 = inst_31464;
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31465)){
var statearr_31729_34231 = state_31590__$1;
(statearr_31729_34231[(1)] = (10));

} else {
var statearr_31730_34232 = state_31590__$1;
(statearr_31730_34232[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29200__auto__ = null;
var cljs$core$async$mult_$_state_machine__29200__auto____0 = (function (){
var statearr_31736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31736[(0)] = cljs$core$async$mult_$_state_machine__29200__auto__);

(statearr_31736[(1)] = (1));

return statearr_31736;
});
var cljs$core$async$mult_$_state_machine__29200__auto____1 = (function (state_31590){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_31590);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e31742){var ex__29203__auto__ = e31742;
var statearr_31743_34233 = state_31590;
(statearr_31743_34233[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_31590[(4)]))){
var statearr_31747_34234 = state_31590;
(statearr_31747_34234[(1)] = cljs.core.first((state_31590[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34235 = state_31590;
state_31590 = G__34235;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29200__auto__ = function(state_31590){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29200__auto____1.call(this,state_31590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29200__auto____0;
cljs$core$async$mult_$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29200__auto____1;
return cljs$core$async$mult_$_state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_31749 = f__30243__auto__();
(statearr_31749[(6)] = c__30242__auto___34107);

return statearr_31749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
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
var G__31752 = arguments.length;
switch (G__31752) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34244 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_34244(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34249 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_34249(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34251 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34251(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34256 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_34256(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34257 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34257(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34259 = arguments.length;
var i__5770__auto___34260 = (0);
while(true){
if((i__5770__auto___34260 < len__5769__auto___34259)){
args__5775__auto__.push((arguments[i__5770__auto___34260]));

var G__34261 = (i__5770__auto___34260 + (1));
i__5770__auto___34260 = G__34261;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31806){
var map__31807 = p__31806;
var map__31807__$1 = cljs.core.__destructure_map(map__31807);
var opts = map__31807__$1;
var statearr_31808_34262 = state;
(statearr_31808_34262[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31810_34267 = state;
(statearr_31810_34267[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_31811_34270 = state;
(statearr_31811_34270[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31799){
var G__31800 = cljs.core.first(seq31799);
var seq31799__$1 = cljs.core.next(seq31799);
var G__31801 = cljs.core.first(seq31799__$1);
var seq31799__$2 = cljs.core.next(seq31799__$1);
var G__31802 = cljs.core.first(seq31799__$2);
var seq31799__$3 = cljs.core.next(seq31799__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31800,G__31801,G__31802,seq31799__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31833 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31834){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31834 = meta31834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31835,meta31834__$1){
var self__ = this;
var _31835__$1 = this;
return (new cljs.core.async.t_cljs$core$async31833(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31834__$1));
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31835){
var self__ = this;
var _31835__$1 = this;
return self__.meta31834;
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31833.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31834","meta31834",1360667107,null)], null);
}));

(cljs.core.async.t_cljs$core$async31833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31833");

(cljs.core.async.t_cljs$core$async31833.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31833.
 */
cljs.core.async.__GT_t_cljs$core$async31833 = (function cljs$core$async$__GT_t_cljs$core$async31833(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31834){
return (new cljs.core.async.t_cljs$core$async31833(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31834));
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
var m = (new cljs.core.async.t_cljs$core$async31833(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__30242__auto___34331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_31960){
var state_val_31961 = (state_31960[(1)]);
if((state_val_31961 === (7))){
var inst_31914 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31914)){
var statearr_31962_34338 = state_31960__$1;
(statearr_31962_34338[(1)] = (8));

} else {
var statearr_31963_34351 = state_31960__$1;
(statearr_31963_34351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (20))){
var inst_31905 = (state_31960[(7)]);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31960__$1,(23),out,inst_31905);
} else {
if((state_val_31961 === (1))){
var inst_31886 = calc_state();
var inst_31887 = cljs.core.__destructure_map(inst_31886);
var inst_31888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31887,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31887,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31887,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31891 = inst_31886;
var state_31960__$1 = (function (){var statearr_31964 = state_31960;
(statearr_31964[(8)] = inst_31889);

(statearr_31964[(9)] = inst_31888);

(statearr_31964[(10)] = inst_31891);

(statearr_31964[(11)] = inst_31890);

return statearr_31964;
})();
var statearr_31965_34363 = state_31960__$1;
(statearr_31965_34363[(2)] = null);

(statearr_31965_34363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (24))){
var inst_31894 = (state_31960[(12)]);
var inst_31891 = inst_31894;
var state_31960__$1 = (function (){var statearr_31966 = state_31960;
(statearr_31966[(10)] = inst_31891);

return statearr_31966;
})();
var statearr_31967_34388 = state_31960__$1;
(statearr_31967_34388[(2)] = null);

(statearr_31967_34388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (4))){
var inst_31905 = (state_31960[(7)]);
var inst_31908 = (state_31960[(13)]);
var inst_31904 = (state_31960[(2)]);
var inst_31905__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31904,(0),null);
var inst_31907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31904,(1),null);
var inst_31908__$1 = (inst_31905__$1 == null);
var state_31960__$1 = (function (){var statearr_31968 = state_31960;
(statearr_31968[(14)] = inst_31907);

(statearr_31968[(7)] = inst_31905__$1);

(statearr_31968[(13)] = inst_31908__$1);

return statearr_31968;
})();
if(cljs.core.truth_(inst_31908__$1)){
var statearr_31969_34393 = state_31960__$1;
(statearr_31969_34393[(1)] = (5));

} else {
var statearr_31970_34394 = state_31960__$1;
(statearr_31970_34394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (15))){
var inst_31897 = (state_31960[(15)]);
var inst_31934 = (state_31960[(16)]);
var inst_31934__$1 = cljs.core.empty_QMARK_(inst_31897);
var state_31960__$1 = (function (){var statearr_31971 = state_31960;
(statearr_31971[(16)] = inst_31934__$1);

return statearr_31971;
})();
if(inst_31934__$1){
var statearr_31972_34402 = state_31960__$1;
(statearr_31972_34402[(1)] = (17));

} else {
var statearr_31973_34403 = state_31960__$1;
(statearr_31973_34403[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (21))){
var inst_31894 = (state_31960[(12)]);
var inst_31891 = inst_31894;
var state_31960__$1 = (function (){var statearr_31977 = state_31960;
(statearr_31977[(10)] = inst_31891);

return statearr_31977;
})();
var statearr_31978_34409 = state_31960__$1;
(statearr_31978_34409[(2)] = null);

(statearr_31978_34409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (13))){
var inst_31923 = (state_31960[(2)]);
var inst_31925 = calc_state();
var inst_31891 = inst_31925;
var state_31960__$1 = (function (){var statearr_31987 = state_31960;
(statearr_31987[(17)] = inst_31923);

(statearr_31987[(10)] = inst_31891);

return statearr_31987;
})();
var statearr_31988_34423 = state_31960__$1;
(statearr_31988_34423[(2)] = null);

(statearr_31988_34423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (22))){
var inst_31954 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31993_34424 = state_31960__$1;
(statearr_31993_34424[(2)] = inst_31954);

(statearr_31993_34424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (6))){
var inst_31907 = (state_31960[(14)]);
var inst_31912 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31907,change);
var state_31960__$1 = state_31960;
var statearr_31994_34439 = state_31960__$1;
(statearr_31994_34439[(2)] = inst_31912);

(statearr_31994_34439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (25))){
var state_31960__$1 = state_31960;
var statearr_31997_34440 = state_31960__$1;
(statearr_31997_34440[(2)] = null);

(statearr_31997_34440[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (17))){
var inst_31898 = (state_31960[(18)]);
var inst_31907 = (state_31960[(14)]);
var inst_31936 = (inst_31898.cljs$core$IFn$_invoke$arity$1 ? inst_31898.cljs$core$IFn$_invoke$arity$1(inst_31907) : inst_31898.call(null,inst_31907));
var inst_31937 = cljs.core.not(inst_31936);
var state_31960__$1 = state_31960;
var statearr_31999_34445 = state_31960__$1;
(statearr_31999_34445[(2)] = inst_31937);

(statearr_31999_34445[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (3))){
var inst_31958 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31960__$1,inst_31958);
} else {
if((state_val_31961 === (12))){
var state_31960__$1 = state_31960;
var statearr_32001_34450 = state_31960__$1;
(statearr_32001_34450[(2)] = null);

(statearr_32001_34450[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (2))){
var inst_31891 = (state_31960[(10)]);
var inst_31894 = (state_31960[(12)]);
var inst_31894__$1 = cljs.core.__destructure_map(inst_31891);
var inst_31897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31894__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31894__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31894__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31960__$1 = (function (){var statearr_32003 = state_31960;
(statearr_32003[(18)] = inst_31898);

(statearr_32003[(15)] = inst_31897);

(statearr_32003[(12)] = inst_31894__$1);

return statearr_32003;
})();
return cljs.core.async.ioc_alts_BANG_(state_31960__$1,(4),inst_31899);
} else {
if((state_val_31961 === (23))){
var inst_31945 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31945)){
var statearr_32008_34456 = state_31960__$1;
(statearr_32008_34456[(1)] = (24));

} else {
var statearr_32009_34457 = state_31960__$1;
(statearr_32009_34457[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (19))){
var inst_31940 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_32013_34459 = state_31960__$1;
(statearr_32013_34459[(2)] = inst_31940);

(statearr_32013_34459[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (11))){
var inst_31907 = (state_31960[(14)]);
var inst_31920 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31907);
var state_31960__$1 = state_31960;
var statearr_32017_34464 = state_31960__$1;
(statearr_32017_34464[(2)] = inst_31920);

(statearr_32017_34464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (9))){
var inst_31907 = (state_31960[(14)]);
var inst_31897 = (state_31960[(15)]);
var inst_31928 = (state_31960[(19)]);
var inst_31928__$1 = (inst_31897.cljs$core$IFn$_invoke$arity$1 ? inst_31897.cljs$core$IFn$_invoke$arity$1(inst_31907) : inst_31897.call(null,inst_31907));
var state_31960__$1 = (function (){var statearr_32019 = state_31960;
(statearr_32019[(19)] = inst_31928__$1);

return statearr_32019;
})();
if(cljs.core.truth_(inst_31928__$1)){
var statearr_32020_34466 = state_31960__$1;
(statearr_32020_34466[(1)] = (14));

} else {
var statearr_32022_34467 = state_31960__$1;
(statearr_32022_34467[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (5))){
var inst_31908 = (state_31960[(13)]);
var state_31960__$1 = state_31960;
var statearr_32023_34469 = state_31960__$1;
(statearr_32023_34469[(2)] = inst_31908);

(statearr_32023_34469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (14))){
var inst_31928 = (state_31960[(19)]);
var state_31960__$1 = state_31960;
var statearr_32024_34470 = state_31960__$1;
(statearr_32024_34470[(2)] = inst_31928);

(statearr_32024_34470[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (26))){
var inst_31950 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_32031_34471 = state_31960__$1;
(statearr_32031_34471[(2)] = inst_31950);

(statearr_32031_34471[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (16))){
var inst_31942 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31942)){
var statearr_32034_34476 = state_31960__$1;
(statearr_32034_34476[(1)] = (20));

} else {
var statearr_32035_34477 = state_31960__$1;
(statearr_32035_34477[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (10))){
var inst_31956 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_32037_34478 = state_31960__$1;
(statearr_32037_34478[(2)] = inst_31956);

(statearr_32037_34478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (18))){
var inst_31934 = (state_31960[(16)]);
var state_31960__$1 = state_31960;
var statearr_32038_34479 = state_31960__$1;
(statearr_32038_34479[(2)] = inst_31934);

(statearr_32038_34479[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (8))){
var inst_31905 = (state_31960[(7)]);
var inst_31916 = (inst_31905 == null);
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31916)){
var statearr_32039_34486 = state_31960__$1;
(statearr_32039_34486[(1)] = (11));

} else {
var statearr_32040_34487 = state_31960__$1;
(statearr_32040_34487[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__29200__auto__ = null;
var cljs$core$async$mix_$_state_machine__29200__auto____0 = (function (){
var statearr_32046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32046[(0)] = cljs$core$async$mix_$_state_machine__29200__auto__);

(statearr_32046[(1)] = (1));

return statearr_32046;
});
var cljs$core$async$mix_$_state_machine__29200__auto____1 = (function (state_31960){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_31960);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e32051){var ex__29203__auto__ = e32051;
var statearr_32052_34491 = state_31960;
(statearr_32052_34491[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_31960[(4)]))){
var statearr_32054_34492 = state_31960;
(statearr_32054_34492[(1)] = cljs.core.first((state_31960[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34493 = state_31960;
state_31960 = G__34493;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29200__auto__ = function(state_31960){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29200__auto____1.call(this,state_31960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29200__auto____0;
cljs$core$async$mix_$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29200__auto____1;
return cljs$core$async$mix_$_state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_32056 = f__30243__auto__();
(statearr_32056[(6)] = c__30242__auto___34331);

return statearr_32056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34496 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_34496(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34503 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_34503(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34508 = (function() {
var G__34509 = null;
var G__34509__1 = (function (p){
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
var G__34509__2 = (function (p,v){
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
G__34509 = function(p,v){
switch(arguments.length){
case 1:
return G__34509__1.call(this,p);
case 2:
return G__34509__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34509.cljs$core$IFn$_invoke$arity$1 = G__34509__1;
G__34509.cljs$core$IFn$_invoke$arity$2 = G__34509__2;
return G__34509;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32100 = arguments.length;
switch (G__32100) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34508(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34508(p,v);
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
cljs.core.async.t_cljs$core$async32147 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32148){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32148 = meta32148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32149,meta32148__$1){
var self__ = this;
var _32149__$1 = this;
return (new cljs.core.async.t_cljs$core$async32147(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32148__$1));
}));

(cljs.core.async.t_cljs$core$async32147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32149){
var self__ = this;
var _32149__$1 = this;
return self__.meta32148;
}));

(cljs.core.async.t_cljs$core$async32147.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32147.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32147.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32147.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32147.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32147.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32147.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32148","meta32148",313724864,null)], null);
}));

(cljs.core.async.t_cljs$core$async32147.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32147");

(cljs.core.async.t_cljs$core$async32147.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32147");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32147.
 */
cljs.core.async.__GT_t_cljs$core$async32147 = (function cljs$core$async$__GT_t_cljs$core$async32147(ch,topic_fn,buf_fn,mults,ensure_mult,meta32148){
return (new cljs.core.async.t_cljs$core$async32147(ch,topic_fn,buf_fn,mults,ensure_mult,meta32148));
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
var G__32129 = arguments.length;
switch (G__32129) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32114_SHARP_){
if(cljs.core.truth_((p1__32114_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32114_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32114_SHARP_.call(null,topic)))){
return p1__32114_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32114_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async32147(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__30242__auto___34551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_32252){
var state_val_32254 = (state_32252[(1)]);
if((state_val_32254 === (7))){
var inst_32248 = (state_32252[(2)]);
var state_32252__$1 = state_32252;
var statearr_32256_34557 = state_32252__$1;
(statearr_32256_34557[(2)] = inst_32248);

(statearr_32256_34557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (20))){
var state_32252__$1 = state_32252;
var statearr_32257_34560 = state_32252__$1;
(statearr_32257_34560[(2)] = null);

(statearr_32257_34560[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (1))){
var state_32252__$1 = state_32252;
var statearr_32261_34561 = state_32252__$1;
(statearr_32261_34561[(2)] = null);

(statearr_32261_34561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (24))){
var inst_32228 = (state_32252[(7)]);
var inst_32239 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32228);
var state_32252__$1 = state_32252;
var statearr_32262_34566 = state_32252__$1;
(statearr_32262_34566[(2)] = inst_32239);

(statearr_32262_34566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (4))){
var inst_32170 = (state_32252[(8)]);
var inst_32170__$1 = (state_32252[(2)]);
var inst_32171 = (inst_32170__$1 == null);
var state_32252__$1 = (function (){var statearr_32263 = state_32252;
(statearr_32263[(8)] = inst_32170__$1);

return statearr_32263;
})();
if(cljs.core.truth_(inst_32171)){
var statearr_32264_34567 = state_32252__$1;
(statearr_32264_34567[(1)] = (5));

} else {
var statearr_32265_34568 = state_32252__$1;
(statearr_32265_34568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (15))){
var inst_32222 = (state_32252[(2)]);
var state_32252__$1 = state_32252;
var statearr_32266_34570 = state_32252__$1;
(statearr_32266_34570[(2)] = inst_32222);

(statearr_32266_34570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (21))){
var inst_32245 = (state_32252[(2)]);
var state_32252__$1 = (function (){var statearr_32273 = state_32252;
(statearr_32273[(9)] = inst_32245);

return statearr_32273;
})();
var statearr_32274_34576 = state_32252__$1;
(statearr_32274_34576[(2)] = null);

(statearr_32274_34576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (13))){
var inst_32195 = (state_32252[(10)]);
var inst_32200 = cljs.core.chunked_seq_QMARK_(inst_32195);
var state_32252__$1 = state_32252;
if(inst_32200){
var statearr_32276_34579 = state_32252__$1;
(statearr_32276_34579[(1)] = (16));

} else {
var statearr_32277_34580 = state_32252__$1;
(statearr_32277_34580[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (22))){
var inst_32236 = (state_32252[(2)]);
var state_32252__$1 = state_32252;
if(cljs.core.truth_(inst_32236)){
var statearr_32279_34582 = state_32252__$1;
(statearr_32279_34582[(1)] = (23));

} else {
var statearr_32280_34583 = state_32252__$1;
(statearr_32280_34583[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (6))){
var inst_32228 = (state_32252[(7)]);
var inst_32170 = (state_32252[(8)]);
var inst_32230 = (state_32252[(11)]);
var inst_32228__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32170) : topic_fn.call(null,inst_32170));
var inst_32229 = cljs.core.deref(mults);
var inst_32230__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32229,inst_32228__$1);
var state_32252__$1 = (function (){var statearr_32292 = state_32252;
(statearr_32292[(7)] = inst_32228__$1);

(statearr_32292[(11)] = inst_32230__$1);

return statearr_32292;
})();
if(cljs.core.truth_(inst_32230__$1)){
var statearr_32293_34585 = state_32252__$1;
(statearr_32293_34585[(1)] = (19));

} else {
var statearr_32294_34587 = state_32252__$1;
(statearr_32294_34587[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (25))){
var inst_32241 = (state_32252[(2)]);
var state_32252__$1 = state_32252;
var statearr_32295_34589 = state_32252__$1;
(statearr_32295_34589[(2)] = inst_32241);

(statearr_32295_34589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (17))){
var inst_32195 = (state_32252[(10)]);
var inst_32207 = cljs.core.first(inst_32195);
var inst_32208 = cljs.core.async.muxch_STAR_(inst_32207);
var inst_32209 = cljs.core.async.close_BANG_(inst_32208);
var inst_32212 = cljs.core.next(inst_32195);
var inst_32180 = inst_32212;
var inst_32181 = null;
var inst_32182 = (0);
var inst_32183 = (0);
var state_32252__$1 = (function (){var statearr_32296 = state_32252;
(statearr_32296[(12)] = inst_32181);

(statearr_32296[(13)] = inst_32182);

(statearr_32296[(14)] = inst_32209);

(statearr_32296[(15)] = inst_32180);

(statearr_32296[(16)] = inst_32183);

return statearr_32296;
})();
var statearr_32297_34592 = state_32252__$1;
(statearr_32297_34592[(2)] = null);

(statearr_32297_34592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (3))){
var inst_32250 = (state_32252[(2)]);
var state_32252__$1 = state_32252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32252__$1,inst_32250);
} else {
if((state_val_32254 === (12))){
var inst_32224 = (state_32252[(2)]);
var state_32252__$1 = state_32252;
var statearr_32305_34593 = state_32252__$1;
(statearr_32305_34593[(2)] = inst_32224);

(statearr_32305_34593[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (2))){
var state_32252__$1 = state_32252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32252__$1,(4),ch);
} else {
if((state_val_32254 === (23))){
var state_32252__$1 = state_32252;
var statearr_32309_34598 = state_32252__$1;
(statearr_32309_34598[(2)] = null);

(statearr_32309_34598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (19))){
var inst_32170 = (state_32252[(8)]);
var inst_32230 = (state_32252[(11)]);
var inst_32234 = cljs.core.async.muxch_STAR_(inst_32230);
var state_32252__$1 = state_32252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32252__$1,(22),inst_32234,inst_32170);
} else {
if((state_val_32254 === (11))){
var inst_32195 = (state_32252[(10)]);
var inst_32180 = (state_32252[(15)]);
var inst_32195__$1 = cljs.core.seq(inst_32180);
var state_32252__$1 = (function (){var statearr_32313 = state_32252;
(statearr_32313[(10)] = inst_32195__$1);

return statearr_32313;
})();
if(inst_32195__$1){
var statearr_32314_34602 = state_32252__$1;
(statearr_32314_34602[(1)] = (13));

} else {
var statearr_32315_34603 = state_32252__$1;
(statearr_32315_34603[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (9))){
var inst_32226 = (state_32252[(2)]);
var state_32252__$1 = state_32252;
var statearr_32316_34604 = state_32252__$1;
(statearr_32316_34604[(2)] = inst_32226);

(statearr_32316_34604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (5))){
var inst_32177 = cljs.core.deref(mults);
var inst_32178 = cljs.core.vals(inst_32177);
var inst_32179 = cljs.core.seq(inst_32178);
var inst_32180 = inst_32179;
var inst_32181 = null;
var inst_32182 = (0);
var inst_32183 = (0);
var state_32252__$1 = (function (){var statearr_32320 = state_32252;
(statearr_32320[(12)] = inst_32181);

(statearr_32320[(13)] = inst_32182);

(statearr_32320[(15)] = inst_32180);

(statearr_32320[(16)] = inst_32183);

return statearr_32320;
})();
var statearr_32326_34608 = state_32252__$1;
(statearr_32326_34608[(2)] = null);

(statearr_32326_34608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (14))){
var state_32252__$1 = state_32252;
var statearr_32330_34609 = state_32252__$1;
(statearr_32330_34609[(2)] = null);

(statearr_32330_34609[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (16))){
var inst_32195 = (state_32252[(10)]);
var inst_32202 = cljs.core.chunk_first(inst_32195);
var inst_32203 = cljs.core.chunk_rest(inst_32195);
var inst_32204 = cljs.core.count(inst_32202);
var inst_32180 = inst_32203;
var inst_32181 = inst_32202;
var inst_32182 = inst_32204;
var inst_32183 = (0);
var state_32252__$1 = (function (){var statearr_32332 = state_32252;
(statearr_32332[(12)] = inst_32181);

(statearr_32332[(13)] = inst_32182);

(statearr_32332[(15)] = inst_32180);

(statearr_32332[(16)] = inst_32183);

return statearr_32332;
})();
var statearr_32333_34620 = state_32252__$1;
(statearr_32333_34620[(2)] = null);

(statearr_32333_34620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (10))){
var inst_32181 = (state_32252[(12)]);
var inst_32182 = (state_32252[(13)]);
var inst_32180 = (state_32252[(15)]);
var inst_32183 = (state_32252[(16)]);
var inst_32188 = cljs.core._nth(inst_32181,inst_32183);
var inst_32189 = cljs.core.async.muxch_STAR_(inst_32188);
var inst_32190 = cljs.core.async.close_BANG_(inst_32189);
var inst_32191 = (inst_32183 + (1));
var tmp32327 = inst_32181;
var tmp32328 = inst_32182;
var tmp32329 = inst_32180;
var inst_32180__$1 = tmp32329;
var inst_32181__$1 = tmp32327;
var inst_32182__$1 = tmp32328;
var inst_32183__$1 = inst_32191;
var state_32252__$1 = (function (){var statearr_32343 = state_32252;
(statearr_32343[(12)] = inst_32181__$1);

(statearr_32343[(13)] = inst_32182__$1);

(statearr_32343[(15)] = inst_32180__$1);

(statearr_32343[(17)] = inst_32190);

(statearr_32343[(16)] = inst_32183__$1);

return statearr_32343;
})();
var statearr_32344_34623 = state_32252__$1;
(statearr_32344_34623[(2)] = null);

(statearr_32344_34623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (18))){
var inst_32219 = (state_32252[(2)]);
var state_32252__$1 = state_32252;
var statearr_32345_34628 = state_32252__$1;
(statearr_32345_34628[(2)] = inst_32219);

(statearr_32345_34628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32254 === (8))){
var inst_32182 = (state_32252[(13)]);
var inst_32183 = (state_32252[(16)]);
var inst_32185 = (inst_32183 < inst_32182);
var inst_32186 = inst_32185;
var state_32252__$1 = state_32252;
if(cljs.core.truth_(inst_32186)){
var statearr_32346_34629 = state_32252__$1;
(statearr_32346_34629[(1)] = (10));

} else {
var statearr_32347_34630 = state_32252__$1;
(statearr_32347_34630[(1)] = (11));

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
var cljs$core$async$state_machine__29200__auto__ = null;
var cljs$core$async$state_machine__29200__auto____0 = (function (){
var statearr_32348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32348[(0)] = cljs$core$async$state_machine__29200__auto__);

(statearr_32348[(1)] = (1));

return statearr_32348;
});
var cljs$core$async$state_machine__29200__auto____1 = (function (state_32252){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_32252);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e32349){var ex__29203__auto__ = e32349;
var statearr_32350_34634 = state_32252;
(statearr_32350_34634[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_32252[(4)]))){
var statearr_32351_34635 = state_32252;
(statearr_32351_34635[(1)] = cljs.core.first((state_32252[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34636 = state_32252;
state_32252 = G__34636;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$state_machine__29200__auto__ = function(state_32252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29200__auto____1.call(this,state_32252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29200__auto____0;
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29200__auto____1;
return cljs$core$async$state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_32352 = f__30243__auto__();
(statearr_32352[(6)] = c__30242__auto___34551);

return statearr_32352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
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
var G__32356 = arguments.length;
switch (G__32356) {
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
var G__32367 = arguments.length;
switch (G__32367) {
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
var G__32373 = arguments.length;
switch (G__32373) {
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
var c__30242__auto___34645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_32440){
var state_val_32441 = (state_32440[(1)]);
if((state_val_32441 === (7))){
var state_32440__$1 = state_32440;
var statearr_32442_34647 = state_32440__$1;
(statearr_32442_34647[(2)] = null);

(statearr_32442_34647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (1))){
var state_32440__$1 = state_32440;
var statearr_32443_34652 = state_32440__$1;
(statearr_32443_34652[(2)] = null);

(statearr_32443_34652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (4))){
var inst_32382 = (state_32440[(7)]);
var inst_32381 = (state_32440[(8)]);
var inst_32385 = (inst_32382 < inst_32381);
var state_32440__$1 = state_32440;
if(cljs.core.truth_(inst_32385)){
var statearr_32444_34653 = state_32440__$1;
(statearr_32444_34653[(1)] = (6));

} else {
var statearr_32445_34656 = state_32440__$1;
(statearr_32445_34656[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (15))){
var inst_32422 = (state_32440[(9)]);
var inst_32431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32422);
var state_32440__$1 = state_32440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32440__$1,(17),out,inst_32431);
} else {
if((state_val_32441 === (13))){
var inst_32422 = (state_32440[(9)]);
var inst_32422__$1 = (state_32440[(2)]);
var inst_32427 = cljs.core.some(cljs.core.nil_QMARK_,inst_32422__$1);
var state_32440__$1 = (function (){var statearr_32446 = state_32440;
(statearr_32446[(9)] = inst_32422__$1);

return statearr_32446;
})();
if(cljs.core.truth_(inst_32427)){
var statearr_32447_34660 = state_32440__$1;
(statearr_32447_34660[(1)] = (14));

} else {
var statearr_32448_34661 = state_32440__$1;
(statearr_32448_34661[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (6))){
var state_32440__$1 = state_32440;
var statearr_32449_34662 = state_32440__$1;
(statearr_32449_34662[(2)] = null);

(statearr_32449_34662[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (17))){
var inst_32433 = (state_32440[(2)]);
var state_32440__$1 = (function (){var statearr_32454 = state_32440;
(statearr_32454[(10)] = inst_32433);

return statearr_32454;
})();
var statearr_32455_34663 = state_32440__$1;
(statearr_32455_34663[(2)] = null);

(statearr_32455_34663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (3))){
var inst_32438 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32440__$1,inst_32438);
} else {
if((state_val_32441 === (12))){
var _ = (function (){var statearr_32456 = state_32440;
(statearr_32456[(4)] = cljs.core.rest((state_32440[(4)])));

return statearr_32456;
})();
var state_32440__$1 = state_32440;
var ex32453 = (state_32440__$1[(2)]);
var statearr_32459_34669 = state_32440__$1;
(statearr_32459_34669[(5)] = ex32453);


if((ex32453 instanceof Object)){
var statearr_32462_34676 = state_32440__$1;
(statearr_32462_34676[(1)] = (11));

(statearr_32462_34676[(5)] = null);

} else {
throw ex32453;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (2))){
var inst_32379 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32381 = cnt;
var inst_32382 = (0);
var state_32440__$1 = (function (){var statearr_32465 = state_32440;
(statearr_32465[(7)] = inst_32382);

(statearr_32465[(11)] = inst_32379);

(statearr_32465[(8)] = inst_32381);

return statearr_32465;
})();
var statearr_32468_34682 = state_32440__$1;
(statearr_32468_34682[(2)] = null);

(statearr_32468_34682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (11))){
var inst_32393 = (state_32440[(2)]);
var inst_32394 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32440__$1 = (function (){var statearr_32469 = state_32440;
(statearr_32469[(12)] = inst_32393);

return statearr_32469;
})();
var statearr_32470_34690 = state_32440__$1;
(statearr_32470_34690[(2)] = inst_32394);

(statearr_32470_34690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (9))){
var inst_32382 = (state_32440[(7)]);
var _ = (function (){var statearr_32471 = state_32440;
(statearr_32471[(4)] = cljs.core.cons((12),(state_32440[(4)])));

return statearr_32471;
})();
var inst_32404 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32382) : chs__$1.call(null,inst_32382));
var inst_32405 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32382) : done.call(null,inst_32382));
var inst_32406 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32404,inst_32405);
var ___$1 = (function (){var statearr_32472 = state_32440;
(statearr_32472[(4)] = cljs.core.rest((state_32440[(4)])));

return statearr_32472;
})();
var state_32440__$1 = state_32440;
var statearr_32473_34704 = state_32440__$1;
(statearr_32473_34704[(2)] = inst_32406);

(statearr_32473_34704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (5))){
var inst_32420 = (state_32440[(2)]);
var state_32440__$1 = (function (){var statearr_32474 = state_32440;
(statearr_32474[(13)] = inst_32420);

return statearr_32474;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32440__$1,(13),dchan);
} else {
if((state_val_32441 === (14))){
var inst_32429 = cljs.core.async.close_BANG_(out);
var state_32440__$1 = state_32440;
var statearr_32475_34709 = state_32440__$1;
(statearr_32475_34709[(2)] = inst_32429);

(statearr_32475_34709[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (16))){
var inst_32436 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32476_34714 = state_32440__$1;
(statearr_32476_34714[(2)] = inst_32436);

(statearr_32476_34714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (10))){
var inst_32382 = (state_32440[(7)]);
var inst_32413 = (state_32440[(2)]);
var inst_32414 = (inst_32382 + (1));
var inst_32382__$1 = inst_32414;
var state_32440__$1 = (function (){var statearr_32477 = state_32440;
(statearr_32477[(7)] = inst_32382__$1);

(statearr_32477[(14)] = inst_32413);

return statearr_32477;
})();
var statearr_32479_34715 = state_32440__$1;
(statearr_32479_34715[(2)] = null);

(statearr_32479_34715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (8))){
var inst_32418 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32480_34716 = state_32440__$1;
(statearr_32480_34716[(2)] = inst_32418);

(statearr_32480_34716[(1)] = (5));


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
var cljs$core$async$state_machine__29200__auto__ = null;
var cljs$core$async$state_machine__29200__auto____0 = (function (){
var statearr_32481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32481[(0)] = cljs$core$async$state_machine__29200__auto__);

(statearr_32481[(1)] = (1));

return statearr_32481;
});
var cljs$core$async$state_machine__29200__auto____1 = (function (state_32440){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_32440);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e32482){var ex__29203__auto__ = e32482;
var statearr_32483_34723 = state_32440;
(statearr_32483_34723[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_32440[(4)]))){
var statearr_32486_34724 = state_32440;
(statearr_32486_34724[(1)] = cljs.core.first((state_32440[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34725 = state_32440;
state_32440 = G__34725;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$state_machine__29200__auto__ = function(state_32440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29200__auto____1.call(this,state_32440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29200__auto____0;
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29200__auto____1;
return cljs$core$async$state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_32490 = f__30243__auto__();
(statearr_32490[(6)] = c__30242__auto___34645);

return statearr_32490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
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
var G__32496 = arguments.length;
switch (G__32496) {
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
var c__30242__auto___34734 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_32531){
var state_val_32532 = (state_32531[(1)]);
if((state_val_32532 === (7))){
var inst_32510 = (state_32531[(7)]);
var inst_32511 = (state_32531[(8)]);
var inst_32510__$1 = (state_32531[(2)]);
var inst_32511__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32510__$1,(0),null);
var inst_32512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32510__$1,(1),null);
var inst_32513 = (inst_32511__$1 == null);
var state_32531__$1 = (function (){var statearr_32537 = state_32531;
(statearr_32537[(7)] = inst_32510__$1);

(statearr_32537[(9)] = inst_32512);

(statearr_32537[(8)] = inst_32511__$1);

return statearr_32537;
})();
if(cljs.core.truth_(inst_32513)){
var statearr_32538_34738 = state_32531__$1;
(statearr_32538_34738[(1)] = (8));

} else {
var statearr_32539_34739 = state_32531__$1;
(statearr_32539_34739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (1))){
var inst_32500 = cljs.core.vec(chs);
var inst_32501 = inst_32500;
var state_32531__$1 = (function (){var statearr_32542 = state_32531;
(statearr_32542[(10)] = inst_32501);

return statearr_32542;
})();
var statearr_32543_34756 = state_32531__$1;
(statearr_32543_34756[(2)] = null);

(statearr_32543_34756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (4))){
var inst_32501 = (state_32531[(10)]);
var state_32531__$1 = state_32531;
return cljs.core.async.ioc_alts_BANG_(state_32531__$1,(7),inst_32501);
} else {
if((state_val_32532 === (6))){
var inst_32527 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32545_34764 = state_32531__$1;
(statearr_32545_34764[(2)] = inst_32527);

(statearr_32545_34764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (3))){
var inst_32529 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32531__$1,inst_32529);
} else {
if((state_val_32532 === (2))){
var inst_32501 = (state_32531[(10)]);
var inst_32503 = cljs.core.count(inst_32501);
var inst_32504 = (inst_32503 > (0));
var state_32531__$1 = state_32531;
if(cljs.core.truth_(inst_32504)){
var statearr_32547_34773 = state_32531__$1;
(statearr_32547_34773[(1)] = (4));

} else {
var statearr_32548_34774 = state_32531__$1;
(statearr_32548_34774[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (11))){
var inst_32501 = (state_32531[(10)]);
var inst_32520 = (state_32531[(2)]);
var tmp32546 = inst_32501;
var inst_32501__$1 = tmp32546;
var state_32531__$1 = (function (){var statearr_32549 = state_32531;
(statearr_32549[(10)] = inst_32501__$1);

(statearr_32549[(11)] = inst_32520);

return statearr_32549;
})();
var statearr_32550_34784 = state_32531__$1;
(statearr_32550_34784[(2)] = null);

(statearr_32550_34784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (9))){
var inst_32511 = (state_32531[(8)]);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32531__$1,(11),out,inst_32511);
} else {
if((state_val_32532 === (5))){
var inst_32525 = cljs.core.async.close_BANG_(out);
var state_32531__$1 = state_32531;
var statearr_32554_34787 = state_32531__$1;
(statearr_32554_34787[(2)] = inst_32525);

(statearr_32554_34787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (10))){
var inst_32523 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32555_34788 = state_32531__$1;
(statearr_32555_34788[(2)] = inst_32523);

(statearr_32555_34788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (8))){
var inst_32501 = (state_32531[(10)]);
var inst_32510 = (state_32531[(7)]);
var inst_32512 = (state_32531[(9)]);
var inst_32511 = (state_32531[(8)]);
var inst_32515 = (function (){var cs = inst_32501;
var vec__32506 = inst_32510;
var v = inst_32511;
var c = inst_32512;
return (function (p1__32494_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32494_SHARP_);
});
})();
var inst_32516 = cljs.core.filterv(inst_32515,inst_32501);
var inst_32501__$1 = inst_32516;
var state_32531__$1 = (function (){var statearr_32557 = state_32531;
(statearr_32557[(10)] = inst_32501__$1);

return statearr_32557;
})();
var statearr_32566_34803 = state_32531__$1;
(statearr_32566_34803[(2)] = null);

(statearr_32566_34803[(1)] = (2));


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
var cljs$core$async$state_machine__29200__auto__ = null;
var cljs$core$async$state_machine__29200__auto____0 = (function (){
var statearr_32573 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32573[(0)] = cljs$core$async$state_machine__29200__auto__);

(statearr_32573[(1)] = (1));

return statearr_32573;
});
var cljs$core$async$state_machine__29200__auto____1 = (function (state_32531){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_32531);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e32580){var ex__29203__auto__ = e32580;
var statearr_32581_34809 = state_32531;
(statearr_32581_34809[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_32531[(4)]))){
var statearr_32582_34812 = state_32531;
(statearr_32582_34812[(1)] = cljs.core.first((state_32531[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34819 = state_32531;
state_32531 = G__34819;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$state_machine__29200__auto__ = function(state_32531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29200__auto____1.call(this,state_32531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29200__auto____0;
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29200__auto____1;
return cljs$core$async$state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_32589 = f__30243__auto__();
(statearr_32589[(6)] = c__30242__auto___34734);

return statearr_32589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
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
var G__32611 = arguments.length;
switch (G__32611) {
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
var c__30242__auto___34835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_32638){
var state_val_32639 = (state_32638[(1)]);
if((state_val_32639 === (7))){
var inst_32620 = (state_32638[(7)]);
var inst_32620__$1 = (state_32638[(2)]);
var inst_32621 = (inst_32620__$1 == null);
var inst_32622 = cljs.core.not(inst_32621);
var state_32638__$1 = (function (){var statearr_32643 = state_32638;
(statearr_32643[(7)] = inst_32620__$1);

return statearr_32643;
})();
if(inst_32622){
var statearr_32644_34842 = state_32638__$1;
(statearr_32644_34842[(1)] = (8));

} else {
var statearr_32645_34847 = state_32638__$1;
(statearr_32645_34847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (1))){
var inst_32615 = (0);
var state_32638__$1 = (function (){var statearr_32649 = state_32638;
(statearr_32649[(8)] = inst_32615);

return statearr_32649;
})();
var statearr_32651_34850 = state_32638__$1;
(statearr_32651_34850[(2)] = null);

(statearr_32651_34850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (4))){
var state_32638__$1 = state_32638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32638__$1,(7),ch);
} else {
if((state_val_32639 === (6))){
var inst_32633 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
var statearr_32660_34858 = state_32638__$1;
(statearr_32660_34858[(2)] = inst_32633);

(statearr_32660_34858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (3))){
var inst_32635 = (state_32638[(2)]);
var inst_32636 = cljs.core.async.close_BANG_(out);
var state_32638__$1 = (function (){var statearr_32663 = state_32638;
(statearr_32663[(9)] = inst_32635);

return statearr_32663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32638__$1,inst_32636);
} else {
if((state_val_32639 === (2))){
var inst_32615 = (state_32638[(8)]);
var inst_32617 = (inst_32615 < n);
var state_32638__$1 = state_32638;
if(cljs.core.truth_(inst_32617)){
var statearr_32664_34863 = state_32638__$1;
(statearr_32664_34863[(1)] = (4));

} else {
var statearr_32665_34864 = state_32638__$1;
(statearr_32665_34864[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (11))){
var inst_32615 = (state_32638[(8)]);
var inst_32625 = (state_32638[(2)]);
var inst_32626 = (inst_32615 + (1));
var inst_32615__$1 = inst_32626;
var state_32638__$1 = (function (){var statearr_32669 = state_32638;
(statearr_32669[(8)] = inst_32615__$1);

(statearr_32669[(10)] = inst_32625);

return statearr_32669;
})();
var statearr_32670_34867 = state_32638__$1;
(statearr_32670_34867[(2)] = null);

(statearr_32670_34867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (9))){
var state_32638__$1 = state_32638;
var statearr_32671_34868 = state_32638__$1;
(statearr_32671_34868[(2)] = null);

(statearr_32671_34868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (5))){
var state_32638__$1 = state_32638;
var statearr_32672_34870 = state_32638__$1;
(statearr_32672_34870[(2)] = null);

(statearr_32672_34870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (10))){
var inst_32630 = (state_32638[(2)]);
var state_32638__$1 = state_32638;
var statearr_32673_34875 = state_32638__$1;
(statearr_32673_34875[(2)] = inst_32630);

(statearr_32673_34875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32639 === (8))){
var inst_32620 = (state_32638[(7)]);
var state_32638__$1 = state_32638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32638__$1,(11),out,inst_32620);
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
var cljs$core$async$state_machine__29200__auto__ = null;
var cljs$core$async$state_machine__29200__auto____0 = (function (){
var statearr_32680 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32680[(0)] = cljs$core$async$state_machine__29200__auto__);

(statearr_32680[(1)] = (1));

return statearr_32680;
});
var cljs$core$async$state_machine__29200__auto____1 = (function (state_32638){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_32638);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e32681){var ex__29203__auto__ = e32681;
var statearr_32682_34876 = state_32638;
(statearr_32682_34876[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_32638[(4)]))){
var statearr_32683_34877 = state_32638;
(statearr_32683_34877[(1)] = cljs.core.first((state_32638[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34878 = state_32638;
state_32638 = G__34878;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$state_machine__29200__auto__ = function(state_32638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29200__auto____1.call(this,state_32638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29200__auto____0;
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29200__auto____1;
return cljs$core$async$state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_32684 = f__30243__auto__();
(statearr_32684[(6)] = c__30242__auto___34835);

return statearr_32684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
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
cljs.core.async.t_cljs$core$async32706 = (function (f,ch,meta32691,_,fn1,meta32707){
this.f = f;
this.ch = ch;
this.meta32691 = meta32691;
this._ = _;
this.fn1 = fn1;
this.meta32707 = meta32707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32708,meta32707__$1){
var self__ = this;
var _32708__$1 = this;
return (new cljs.core.async.t_cljs$core$async32706(self__.f,self__.ch,self__.meta32691,self__._,self__.fn1,meta32707__$1));
}));

(cljs.core.async.t_cljs$core$async32706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32708){
var self__ = this;
var _32708__$1 = this;
return self__.meta32707;
}));

(cljs.core.async.t_cljs$core$async32706.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32706.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32706.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32706.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32685_SHARP_){
var G__32712 = (((p1__32685_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32685_SHARP_) : self__.f.call(null,p1__32685_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32712) : f1.call(null,G__32712));
});
}));

(cljs.core.async.t_cljs$core$async32706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32691","meta32691",-790894872,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32690","cljs.core.async/t_cljs$core$async32690",-1672741986,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32707","meta32707",2085932312,null)], null);
}));

(cljs.core.async.t_cljs$core$async32706.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32706");

(cljs.core.async.t_cljs$core$async32706.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32706");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32706.
 */
cljs.core.async.__GT_t_cljs$core$async32706 = (function cljs$core$async$__GT_t_cljs$core$async32706(f,ch,meta32691,_,fn1,meta32707){
return (new cljs.core.async.t_cljs$core$async32706(f,ch,meta32691,_,fn1,meta32707));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32690 = (function (f,ch,meta32691){
this.f = f;
this.ch = ch;
this.meta32691 = meta32691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32692,meta32691__$1){
var self__ = this;
var _32692__$1 = this;
return (new cljs.core.async.t_cljs$core$async32690(self__.f,self__.ch,meta32691__$1));
}));

(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32692){
var self__ = this;
var _32692__$1 = this;
return self__.meta32691;
}));

(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async32706(self__.f,self__.ch,self__.meta32691,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32735 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32735) : self__.f.call(null,G__32735));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32690.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32691","meta32691",-790894872,null)], null);
}));

(cljs.core.async.t_cljs$core$async32690.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32690");

(cljs.core.async.t_cljs$core$async32690.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32690");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32690.
 */
cljs.core.async.__GT_t_cljs$core$async32690 = (function cljs$core$async$__GT_t_cljs$core$async32690(f,ch,meta32691){
return (new cljs.core.async.t_cljs$core$async32690(f,ch,meta32691));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32690(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32751 = (function (f,ch,meta32752){
this.f = f;
this.ch = ch;
this.meta32752 = meta32752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32753,meta32752__$1){
var self__ = this;
var _32753__$1 = this;
return (new cljs.core.async.t_cljs$core$async32751(self__.f,self__.ch,meta32752__$1));
}));

(cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32753){
var self__ = this;
var _32753__$1 = this;
return self__.meta32752;
}));

(cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32751.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32752","meta32752",1018348881,null)], null);
}));

(cljs.core.async.t_cljs$core$async32751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32751");

(cljs.core.async.t_cljs$core$async32751.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32751.
 */
cljs.core.async.__GT_t_cljs$core$async32751 = (function cljs$core$async$__GT_t_cljs$core$async32751(f,ch,meta32752){
return (new cljs.core.async.t_cljs$core$async32751(f,ch,meta32752));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async32751(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32779 = (function (p,ch,meta32780){
this.p = p;
this.ch = ch;
this.meta32780 = meta32780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32781,meta32780__$1){
var self__ = this;
var _32781__$1 = this;
return (new cljs.core.async.t_cljs$core$async32779(self__.p,self__.ch,meta32780__$1));
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32781){
var self__ = this;
var _32781__$1 = this;
return self__.meta32780;
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32780","meta32780",1515446176,null)], null);
}));

(cljs.core.async.t_cljs$core$async32779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32779");

(cljs.core.async.t_cljs$core$async32779.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32779.
 */
cljs.core.async.__GT_t_cljs$core$async32779 = (function cljs$core$async$__GT_t_cljs$core$async32779(p,ch,meta32780){
return (new cljs.core.async.t_cljs$core$async32779(p,ch,meta32780));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async32779(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32795 = arguments.length;
switch (G__32795) {
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
var c__30242__auto___34904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_32834){
var state_val_32835 = (state_32834[(1)]);
if((state_val_32835 === (7))){
var inst_32830 = (state_32834[(2)]);
var state_32834__$1 = state_32834;
var statearr_32839_34907 = state_32834__$1;
(statearr_32839_34907[(2)] = inst_32830);

(statearr_32839_34907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32835 === (1))){
var state_32834__$1 = state_32834;
var statearr_32840_34909 = state_32834__$1;
(statearr_32840_34909[(2)] = null);

(statearr_32840_34909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32835 === (4))){
var inst_32811 = (state_32834[(7)]);
var inst_32811__$1 = (state_32834[(2)]);
var inst_32812 = (inst_32811__$1 == null);
var state_32834__$1 = (function (){var statearr_32844 = state_32834;
(statearr_32844[(7)] = inst_32811__$1);

return statearr_32844;
})();
if(cljs.core.truth_(inst_32812)){
var statearr_32849_34910 = state_32834__$1;
(statearr_32849_34910[(1)] = (5));

} else {
var statearr_32854_34911 = state_32834__$1;
(statearr_32854_34911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32835 === (6))){
var inst_32811 = (state_32834[(7)]);
var inst_32821 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32811) : p.call(null,inst_32811));
var state_32834__$1 = state_32834;
if(cljs.core.truth_(inst_32821)){
var statearr_32859_34912 = state_32834__$1;
(statearr_32859_34912[(1)] = (8));

} else {
var statearr_32860_34913 = state_32834__$1;
(statearr_32860_34913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32835 === (3))){
var inst_32832 = (state_32834[(2)]);
var state_32834__$1 = state_32834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32834__$1,inst_32832);
} else {
if((state_val_32835 === (2))){
var state_32834__$1 = state_32834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32834__$1,(4),ch);
} else {
if((state_val_32835 === (11))){
var inst_32824 = (state_32834[(2)]);
var state_32834__$1 = state_32834;
var statearr_32861_34918 = state_32834__$1;
(statearr_32861_34918[(2)] = inst_32824);

(statearr_32861_34918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32835 === (9))){
var state_32834__$1 = state_32834;
var statearr_32869_34919 = state_32834__$1;
(statearr_32869_34919[(2)] = null);

(statearr_32869_34919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32835 === (5))){
var inst_32817 = cljs.core.async.close_BANG_(out);
var state_32834__$1 = state_32834;
var statearr_32876_34920 = state_32834__$1;
(statearr_32876_34920[(2)] = inst_32817);

(statearr_32876_34920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32835 === (10))){
var inst_32827 = (state_32834[(2)]);
var state_32834__$1 = (function (){var statearr_32877 = state_32834;
(statearr_32877[(8)] = inst_32827);

return statearr_32877;
})();
var statearr_32878_34921 = state_32834__$1;
(statearr_32878_34921[(2)] = null);

(statearr_32878_34921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32835 === (8))){
var inst_32811 = (state_32834[(7)]);
var state_32834__$1 = state_32834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32834__$1,(11),out,inst_32811);
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
var cljs$core$async$state_machine__29200__auto__ = null;
var cljs$core$async$state_machine__29200__auto____0 = (function (){
var statearr_32884 = [null,null,null,null,null,null,null,null,null];
(statearr_32884[(0)] = cljs$core$async$state_machine__29200__auto__);

(statearr_32884[(1)] = (1));

return statearr_32884;
});
var cljs$core$async$state_machine__29200__auto____1 = (function (state_32834){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_32834);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e32888){var ex__29203__auto__ = e32888;
var statearr_32889_34927 = state_32834;
(statearr_32889_34927[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_32834[(4)]))){
var statearr_32893_34936 = state_32834;
(statearr_32893_34936[(1)] = cljs.core.first((state_32834[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34937 = state_32834;
state_32834 = G__34937;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$state_machine__29200__auto__ = function(state_32834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29200__auto____1.call(this,state_32834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29200__auto____0;
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29200__auto____1;
return cljs$core$async$state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_32896 = f__30243__auto__();
(statearr_32896[(6)] = c__30242__auto___34904);

return statearr_32896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32916 = arguments.length;
switch (G__32916) {
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
var c__30242__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_33015){
var state_val_33016 = (state_33015[(1)]);
if((state_val_33016 === (7))){
var inst_33011 = (state_33015[(2)]);
var state_33015__$1 = state_33015;
var statearr_33017_34940 = state_33015__$1;
(statearr_33017_34940[(2)] = inst_33011);

(statearr_33017_34940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (20))){
var inst_32969 = (state_33015[(7)]);
var inst_32988 = (state_33015[(2)]);
var inst_32989 = cljs.core.next(inst_32969);
var inst_32955 = inst_32989;
var inst_32956 = null;
var inst_32957 = (0);
var inst_32958 = (0);
var state_33015__$1 = (function (){var statearr_33018 = state_33015;
(statearr_33018[(8)] = inst_32957);

(statearr_33018[(9)] = inst_32958);

(statearr_33018[(10)] = inst_32988);

(statearr_33018[(11)] = inst_32955);

(statearr_33018[(12)] = inst_32956);

return statearr_33018;
})();
var statearr_33022_34943 = state_33015__$1;
(statearr_33022_34943[(2)] = null);

(statearr_33022_34943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (1))){
var state_33015__$1 = state_33015;
var statearr_33023_34948 = state_33015__$1;
(statearr_33023_34948[(2)] = null);

(statearr_33023_34948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (4))){
var inst_32935 = (state_33015[(13)]);
var inst_32935__$1 = (state_33015[(2)]);
var inst_32936 = (inst_32935__$1 == null);
var state_33015__$1 = (function (){var statearr_33024 = state_33015;
(statearr_33024[(13)] = inst_32935__$1);

return statearr_33024;
})();
if(cljs.core.truth_(inst_32936)){
var statearr_33026_34949 = state_33015__$1;
(statearr_33026_34949[(1)] = (5));

} else {
var statearr_33027_34950 = state_33015__$1;
(statearr_33027_34950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (15))){
var state_33015__$1 = state_33015;
var statearr_33031_34955 = state_33015__$1;
(statearr_33031_34955[(2)] = null);

(statearr_33031_34955[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (21))){
var state_33015__$1 = state_33015;
var statearr_33035_34956 = state_33015__$1;
(statearr_33035_34956[(2)] = null);

(statearr_33035_34956[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (13))){
var inst_32957 = (state_33015[(8)]);
var inst_32958 = (state_33015[(9)]);
var inst_32955 = (state_33015[(11)]);
var inst_32956 = (state_33015[(12)]);
var inst_32965 = (state_33015[(2)]);
var inst_32966 = (inst_32958 + (1));
var tmp33028 = inst_32957;
var tmp33029 = inst_32955;
var tmp33030 = inst_32956;
var inst_32955__$1 = tmp33029;
var inst_32956__$1 = tmp33030;
var inst_32957__$1 = tmp33028;
var inst_32958__$1 = inst_32966;
var state_33015__$1 = (function (){var statearr_33036 = state_33015;
(statearr_33036[(8)] = inst_32957__$1);

(statearr_33036[(9)] = inst_32958__$1);

(statearr_33036[(14)] = inst_32965);

(statearr_33036[(11)] = inst_32955__$1);

(statearr_33036[(12)] = inst_32956__$1);

return statearr_33036;
})();
var statearr_33040_34960 = state_33015__$1;
(statearr_33040_34960[(2)] = null);

(statearr_33040_34960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (22))){
var state_33015__$1 = state_33015;
var statearr_33043_34961 = state_33015__$1;
(statearr_33043_34961[(2)] = null);

(statearr_33043_34961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (6))){
var inst_32935 = (state_33015[(13)]);
var inst_32953 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32935) : f.call(null,inst_32935));
var inst_32954 = cljs.core.seq(inst_32953);
var inst_32955 = inst_32954;
var inst_32956 = null;
var inst_32957 = (0);
var inst_32958 = (0);
var state_33015__$1 = (function (){var statearr_33050 = state_33015;
(statearr_33050[(8)] = inst_32957);

(statearr_33050[(9)] = inst_32958);

(statearr_33050[(11)] = inst_32955);

(statearr_33050[(12)] = inst_32956);

return statearr_33050;
})();
var statearr_33053_34962 = state_33015__$1;
(statearr_33053_34962[(2)] = null);

(statearr_33053_34962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (17))){
var inst_32969 = (state_33015[(7)]);
var inst_32977 = cljs.core.chunk_first(inst_32969);
var inst_32978 = cljs.core.chunk_rest(inst_32969);
var inst_32979 = cljs.core.count(inst_32977);
var inst_32955 = inst_32978;
var inst_32956 = inst_32977;
var inst_32957 = inst_32979;
var inst_32958 = (0);
var state_33015__$1 = (function (){var statearr_33064 = state_33015;
(statearr_33064[(8)] = inst_32957);

(statearr_33064[(9)] = inst_32958);

(statearr_33064[(11)] = inst_32955);

(statearr_33064[(12)] = inst_32956);

return statearr_33064;
})();
var statearr_33067_34963 = state_33015__$1;
(statearr_33067_34963[(2)] = null);

(statearr_33067_34963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (3))){
var inst_33013 = (state_33015[(2)]);
var state_33015__$1 = state_33015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33015__$1,inst_33013);
} else {
if((state_val_33016 === (12))){
var inst_32997 = (state_33015[(2)]);
var state_33015__$1 = state_33015;
var statearr_33069_34965 = state_33015__$1;
(statearr_33069_34965[(2)] = inst_32997);

(statearr_33069_34965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (2))){
var state_33015__$1 = state_33015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33015__$1,(4),in$);
} else {
if((state_val_33016 === (23))){
var inst_33009 = (state_33015[(2)]);
var state_33015__$1 = state_33015;
var statearr_33083_34966 = state_33015__$1;
(statearr_33083_34966[(2)] = inst_33009);

(statearr_33083_34966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (19))){
var inst_32992 = (state_33015[(2)]);
var state_33015__$1 = state_33015;
var statearr_33084_34968 = state_33015__$1;
(statearr_33084_34968[(2)] = inst_32992);

(statearr_33084_34968[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (11))){
var inst_32969 = (state_33015[(7)]);
var inst_32955 = (state_33015[(11)]);
var inst_32969__$1 = cljs.core.seq(inst_32955);
var state_33015__$1 = (function (){var statearr_33087 = state_33015;
(statearr_33087[(7)] = inst_32969__$1);

return statearr_33087;
})();
if(inst_32969__$1){
var statearr_33090_34969 = state_33015__$1;
(statearr_33090_34969[(1)] = (14));

} else {
var statearr_33092_34973 = state_33015__$1;
(statearr_33092_34973[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (9))){
var inst_33003 = (state_33015[(2)]);
var inst_33004 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33015__$1 = (function (){var statearr_33097 = state_33015;
(statearr_33097[(15)] = inst_33003);

return statearr_33097;
})();
if(cljs.core.truth_(inst_33004)){
var statearr_33098_34977 = state_33015__$1;
(statearr_33098_34977[(1)] = (21));

} else {
var statearr_33100_34978 = state_33015__$1;
(statearr_33100_34978[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (5))){
var inst_32947 = cljs.core.async.close_BANG_(out);
var state_33015__$1 = state_33015;
var statearr_33110_34979 = state_33015__$1;
(statearr_33110_34979[(2)] = inst_32947);

(statearr_33110_34979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (14))){
var inst_32969 = (state_33015[(7)]);
var inst_32975 = cljs.core.chunked_seq_QMARK_(inst_32969);
var state_33015__$1 = state_33015;
if(inst_32975){
var statearr_33112_34980 = state_33015__$1;
(statearr_33112_34980[(1)] = (17));

} else {
var statearr_33116_34981 = state_33015__$1;
(statearr_33116_34981[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (16))){
var inst_32995 = (state_33015[(2)]);
var state_33015__$1 = state_33015;
var statearr_33117_34982 = state_33015__$1;
(statearr_33117_34982[(2)] = inst_32995);

(statearr_33117_34982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33016 === (10))){
var inst_32958 = (state_33015[(9)]);
var inst_32956 = (state_33015[(12)]);
var inst_32963 = cljs.core._nth(inst_32956,inst_32958);
var state_33015__$1 = state_33015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33015__$1,(13),out,inst_32963);
} else {
if((state_val_33016 === (18))){
var inst_32969 = (state_33015[(7)]);
var inst_32986 = cljs.core.first(inst_32969);
var state_33015__$1 = state_33015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33015__$1,(20),out,inst_32986);
} else {
if((state_val_33016 === (8))){
var inst_32957 = (state_33015[(8)]);
var inst_32958 = (state_33015[(9)]);
var inst_32960 = (inst_32958 < inst_32957);
var inst_32961 = inst_32960;
var state_33015__$1 = state_33015;
if(cljs.core.truth_(inst_32961)){
var statearr_33118_34983 = state_33015__$1;
(statearr_33118_34983[(1)] = (10));

} else {
var statearr_33122_34984 = state_33015__$1;
(statearr_33122_34984[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29200__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29200__auto____0 = (function (){
var statearr_33125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33125[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29200__auto__);

(statearr_33125[(1)] = (1));

return statearr_33125;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29200__auto____1 = (function (state_33015){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_33015);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e33126){var ex__29203__auto__ = e33126;
var statearr_33127_34985 = state_33015;
(statearr_33127_34985[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_33015[(4)]))){
var statearr_33128_34987 = state_33015;
(statearr_33128_34987[(1)] = cljs.core.first((state_33015[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34988 = state_33015;
state_33015 = G__34988;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29200__auto__ = function(state_33015){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29200__auto____1.call(this,state_33015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29200__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29200__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_33132 = f__30243__auto__();
(statearr_33132[(6)] = c__30242__auto__);

return statearr_33132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
}));

return c__30242__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33135 = arguments.length;
switch (G__33135) {
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
var G__33143 = arguments.length;
switch (G__33143) {
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
var G__33157 = arguments.length;
switch (G__33157) {
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
var c__30242__auto___34993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_33187){
var state_val_33188 = (state_33187[(1)]);
if((state_val_33188 === (7))){
var inst_33182 = (state_33187[(2)]);
var state_33187__$1 = state_33187;
var statearr_33192_34994 = state_33187__$1;
(statearr_33192_34994[(2)] = inst_33182);

(statearr_33192_34994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (1))){
var inst_33164 = null;
var state_33187__$1 = (function (){var statearr_33195 = state_33187;
(statearr_33195[(7)] = inst_33164);

return statearr_33195;
})();
var statearr_33196_34996 = state_33187__$1;
(statearr_33196_34996[(2)] = null);

(statearr_33196_34996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (4))){
var inst_33167 = (state_33187[(8)]);
var inst_33167__$1 = (state_33187[(2)]);
var inst_33168 = (inst_33167__$1 == null);
var inst_33169 = cljs.core.not(inst_33168);
var state_33187__$1 = (function (){var statearr_33197 = state_33187;
(statearr_33197[(8)] = inst_33167__$1);

return statearr_33197;
})();
if(inst_33169){
var statearr_33198_34997 = state_33187__$1;
(statearr_33198_34997[(1)] = (5));

} else {
var statearr_33199_34998 = state_33187__$1;
(statearr_33199_34998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (6))){
var state_33187__$1 = state_33187;
var statearr_33204_34999 = state_33187__$1;
(statearr_33204_34999[(2)] = null);

(statearr_33204_34999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (3))){
var inst_33184 = (state_33187[(2)]);
var inst_33185 = cljs.core.async.close_BANG_(out);
var state_33187__$1 = (function (){var statearr_33208 = state_33187;
(statearr_33208[(9)] = inst_33184);

return statearr_33208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33187__$1,inst_33185);
} else {
if((state_val_33188 === (2))){
var state_33187__$1 = state_33187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33187__$1,(4),ch);
} else {
if((state_val_33188 === (11))){
var inst_33167 = (state_33187[(8)]);
var inst_33176 = (state_33187[(2)]);
var inst_33164 = inst_33167;
var state_33187__$1 = (function (){var statearr_33211 = state_33187;
(statearr_33211[(7)] = inst_33164);

(statearr_33211[(10)] = inst_33176);

return statearr_33211;
})();
var statearr_33212_35000 = state_33187__$1;
(statearr_33212_35000[(2)] = null);

(statearr_33212_35000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (9))){
var inst_33167 = (state_33187[(8)]);
var state_33187__$1 = state_33187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33187__$1,(11),out,inst_33167);
} else {
if((state_val_33188 === (5))){
var inst_33164 = (state_33187[(7)]);
var inst_33167 = (state_33187[(8)]);
var inst_33171 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33167,inst_33164);
var state_33187__$1 = state_33187;
if(inst_33171){
var statearr_33215_35005 = state_33187__$1;
(statearr_33215_35005[(1)] = (8));

} else {
var statearr_33216_35006 = state_33187__$1;
(statearr_33216_35006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (10))){
var inst_33179 = (state_33187[(2)]);
var state_33187__$1 = state_33187;
var statearr_33218_35007 = state_33187__$1;
(statearr_33218_35007[(2)] = inst_33179);

(statearr_33218_35007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (8))){
var inst_33164 = (state_33187[(7)]);
var tmp33213 = inst_33164;
var inst_33164__$1 = tmp33213;
var state_33187__$1 = (function (){var statearr_33220 = state_33187;
(statearr_33220[(7)] = inst_33164__$1);

return statearr_33220;
})();
var statearr_33221_35009 = state_33187__$1;
(statearr_33221_35009[(2)] = null);

(statearr_33221_35009[(1)] = (2));


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
var cljs$core$async$state_machine__29200__auto__ = null;
var cljs$core$async$state_machine__29200__auto____0 = (function (){
var statearr_33235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33235[(0)] = cljs$core$async$state_machine__29200__auto__);

(statearr_33235[(1)] = (1));

return statearr_33235;
});
var cljs$core$async$state_machine__29200__auto____1 = (function (state_33187){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_33187);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e33236){var ex__29203__auto__ = e33236;
var statearr_33237_35010 = state_33187;
(statearr_33237_35010[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_33187[(4)]))){
var statearr_33240_35011 = state_33187;
(statearr_33240_35011[(1)] = cljs.core.first((state_33187[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35012 = state_33187;
state_33187 = G__35012;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$state_machine__29200__auto__ = function(state_33187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29200__auto____1.call(this,state_33187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29200__auto____0;
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29200__auto____1;
return cljs$core$async$state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_33241 = f__30243__auto__();
(statearr_33241[(6)] = c__30242__auto___34993);

return statearr_33241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33251 = arguments.length;
switch (G__33251) {
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
var c__30242__auto___35021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_33312){
var state_val_33313 = (state_33312[(1)]);
if((state_val_33313 === (7))){
var inst_33302 = (state_33312[(2)]);
var state_33312__$1 = state_33312;
var statearr_33315_35024 = state_33312__$1;
(statearr_33315_35024[(2)] = inst_33302);

(statearr_33315_35024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33313 === (1))){
var inst_33263 = (new Array(n));
var inst_33264 = inst_33263;
var inst_33265 = (0);
var state_33312__$1 = (function (){var statearr_33317 = state_33312;
(statearr_33317[(7)] = inst_33264);

(statearr_33317[(8)] = inst_33265);

return statearr_33317;
})();
var statearr_33319_35025 = state_33312__$1;
(statearr_33319_35025[(2)] = null);

(statearr_33319_35025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33313 === (4))){
var inst_33270 = (state_33312[(9)]);
var inst_33270__$1 = (state_33312[(2)]);
var inst_33273 = (inst_33270__$1 == null);
var inst_33274 = cljs.core.not(inst_33273);
var state_33312__$1 = (function (){var statearr_33322 = state_33312;
(statearr_33322[(9)] = inst_33270__$1);

return statearr_33322;
})();
if(inst_33274){
var statearr_33326_35026 = state_33312__$1;
(statearr_33326_35026[(1)] = (5));

} else {
var statearr_33329_35028 = state_33312__$1;
(statearr_33329_35028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33313 === (15))){
var inst_33295 = (state_33312[(2)]);
var state_33312__$1 = state_33312;
var statearr_33330_35032 = state_33312__$1;
(statearr_33330_35032[(2)] = inst_33295);

(statearr_33330_35032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33313 === (13))){
var state_33312__$1 = state_33312;
var statearr_33332_35033 = state_33312__$1;
(statearr_33332_35033[(2)] = null);

(statearr_33332_35033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33313 === (6))){
var inst_33265 = (state_33312[(8)]);
var inst_33290 = (inst_33265 > (0));
var state_33312__$1 = state_33312;
if(cljs.core.truth_(inst_33290)){
var statearr_33337_35034 = state_33312__$1;
(statearr_33337_35034[(1)] = (12));

} else {
var statearr_33338_35035 = state_33312__$1;
(statearr_33338_35035[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33313 === (3))){
var inst_33310 = (state_33312[(2)]);
var state_33312__$1 = state_33312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33312__$1,inst_33310);
} else {
if((state_val_33313 === (12))){
var inst_33264 = (state_33312[(7)]);
var inst_33293 = cljs.core.vec(inst_33264);
var state_33312__$1 = state_33312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33312__$1,(15),out,inst_33293);
} else {
if((state_val_33313 === (2))){
var state_33312__$1 = state_33312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33312__$1,(4),ch);
} else {
if((state_val_33313 === (11))){
var inst_33284 = (state_33312[(2)]);
var inst_33285 = (new Array(n));
var inst_33264 = inst_33285;
var inst_33265 = (0);
var state_33312__$1 = (function (){var statearr_33347 = state_33312;
(statearr_33347[(7)] = inst_33264);

(statearr_33347[(8)] = inst_33265);

(statearr_33347[(10)] = inst_33284);

return statearr_33347;
})();
var statearr_33348_35040 = state_33312__$1;
(statearr_33348_35040[(2)] = null);

(statearr_33348_35040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33313 === (9))){
var inst_33264 = (state_33312[(7)]);
var inst_33282 = cljs.core.vec(inst_33264);
var state_33312__$1 = state_33312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33312__$1,(11),out,inst_33282);
} else {
if((state_val_33313 === (5))){
var inst_33277 = (state_33312[(11)]);
var inst_33270 = (state_33312[(9)]);
var inst_33264 = (state_33312[(7)]);
var inst_33265 = (state_33312[(8)]);
var inst_33276 = (inst_33264[inst_33265] = inst_33270);
var inst_33277__$1 = (inst_33265 + (1));
var inst_33278 = (inst_33277__$1 < n);
var state_33312__$1 = (function (){var statearr_33350 = state_33312;
(statearr_33350[(11)] = inst_33277__$1);

(statearr_33350[(12)] = inst_33276);

return statearr_33350;
})();
if(cljs.core.truth_(inst_33278)){
var statearr_33352_35044 = state_33312__$1;
(statearr_33352_35044[(1)] = (8));

} else {
var statearr_33353_35045 = state_33312__$1;
(statearr_33353_35045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33313 === (14))){
var inst_33298 = (state_33312[(2)]);
var inst_33300 = cljs.core.async.close_BANG_(out);
var state_33312__$1 = (function (){var statearr_33356 = state_33312;
(statearr_33356[(13)] = inst_33298);

return statearr_33356;
})();
var statearr_33359_35046 = state_33312__$1;
(statearr_33359_35046[(2)] = inst_33300);

(statearr_33359_35046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33313 === (10))){
var inst_33288 = (state_33312[(2)]);
var state_33312__$1 = state_33312;
var statearr_33368_35053 = state_33312__$1;
(statearr_33368_35053[(2)] = inst_33288);

(statearr_33368_35053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33313 === (8))){
var inst_33277 = (state_33312[(11)]);
var inst_33264 = (state_33312[(7)]);
var tmp33355 = inst_33264;
var inst_33264__$1 = tmp33355;
var inst_33265 = inst_33277;
var state_33312__$1 = (function (){var statearr_33373 = state_33312;
(statearr_33373[(7)] = inst_33264__$1);

(statearr_33373[(8)] = inst_33265);

return statearr_33373;
})();
var statearr_33374_35054 = state_33312__$1;
(statearr_33374_35054[(2)] = null);

(statearr_33374_35054[(1)] = (2));


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
var cljs$core$async$state_machine__29200__auto__ = null;
var cljs$core$async$state_machine__29200__auto____0 = (function (){
var statearr_33378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33378[(0)] = cljs$core$async$state_machine__29200__auto__);

(statearr_33378[(1)] = (1));

return statearr_33378;
});
var cljs$core$async$state_machine__29200__auto____1 = (function (state_33312){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_33312);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e33382){var ex__29203__auto__ = e33382;
var statearr_33386_35055 = state_33312;
(statearr_33386_35055[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_33312[(4)]))){
var statearr_33388_35060 = state_33312;
(statearr_33388_35060[(1)] = cljs.core.first((state_33312[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35061 = state_33312;
state_33312 = G__35061;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$state_machine__29200__auto__ = function(state_33312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29200__auto____1.call(this,state_33312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29200__auto____0;
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29200__auto____1;
return cljs$core$async$state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_33390 = f__30243__auto__();
(statearr_33390[(6)] = c__30242__auto___35021);

return statearr_33390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33401 = arguments.length;
switch (G__33401) {
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
var c__30242__auto___35069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30243__auto__ = (function (){var switch__29199__auto__ = (function (state_33459){
var state_val_33460 = (state_33459[(1)]);
if((state_val_33460 === (7))){
var inst_33453 = (state_33459[(2)]);
var state_33459__$1 = state_33459;
var statearr_33469_35070 = state_33459__$1;
(statearr_33469_35070[(2)] = inst_33453);

(statearr_33469_35070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33460 === (1))){
var inst_33409 = [];
var inst_33410 = inst_33409;
var inst_33411 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33459__$1 = (function (){var statearr_33470 = state_33459;
(statearr_33470[(7)] = inst_33411);

(statearr_33470[(8)] = inst_33410);

return statearr_33470;
})();
var statearr_33471_35071 = state_33459__$1;
(statearr_33471_35071[(2)] = null);

(statearr_33471_35071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33460 === (4))){
var inst_33414 = (state_33459[(9)]);
var inst_33414__$1 = (state_33459[(2)]);
var inst_33415 = (inst_33414__$1 == null);
var inst_33416 = cljs.core.not(inst_33415);
var state_33459__$1 = (function (){var statearr_33475 = state_33459;
(statearr_33475[(9)] = inst_33414__$1);

return statearr_33475;
})();
if(inst_33416){
var statearr_33476_35074 = state_33459__$1;
(statearr_33476_35074[(1)] = (5));

} else {
var statearr_33481_35078 = state_33459__$1;
(statearr_33481_35078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33460 === (15))){
var inst_33410 = (state_33459[(8)]);
var inst_33445 = cljs.core.vec(inst_33410);
var state_33459__$1 = state_33459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33459__$1,(18),out,inst_33445);
} else {
if((state_val_33460 === (13))){
var inst_33438 = (state_33459[(2)]);
var state_33459__$1 = state_33459;
var statearr_33487_35079 = state_33459__$1;
(statearr_33487_35079[(2)] = inst_33438);

(statearr_33487_35079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33460 === (6))){
var inst_33410 = (state_33459[(8)]);
var inst_33440 = inst_33410.length;
var inst_33442 = (inst_33440 > (0));
var state_33459__$1 = state_33459;
if(cljs.core.truth_(inst_33442)){
var statearr_33493_35083 = state_33459__$1;
(statearr_33493_35083[(1)] = (15));

} else {
var statearr_33497_35084 = state_33459__$1;
(statearr_33497_35084[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33460 === (17))){
var inst_33450 = (state_33459[(2)]);
var inst_33451 = cljs.core.async.close_BANG_(out);
var state_33459__$1 = (function (){var statearr_33499 = state_33459;
(statearr_33499[(10)] = inst_33450);

return statearr_33499;
})();
var statearr_33500_35085 = state_33459__$1;
(statearr_33500_35085[(2)] = inst_33451);

(statearr_33500_35085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33460 === (3))){
var inst_33455 = (state_33459[(2)]);
var state_33459__$1 = state_33459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33459__$1,inst_33455);
} else {
if((state_val_33460 === (12))){
var inst_33410 = (state_33459[(8)]);
var inst_33430 = cljs.core.vec(inst_33410);
var state_33459__$1 = state_33459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33459__$1,(14),out,inst_33430);
} else {
if((state_val_33460 === (2))){
var state_33459__$1 = state_33459;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33459__$1,(4),ch);
} else {
if((state_val_33460 === (11))){
var inst_33414 = (state_33459[(9)]);
var inst_33410 = (state_33459[(8)]);
var inst_33418 = (state_33459[(11)]);
var inst_33427 = inst_33410.push(inst_33414);
var tmp33509 = inst_33410;
var inst_33410__$1 = tmp33509;
var inst_33411 = inst_33418;
var state_33459__$1 = (function (){var statearr_33523 = state_33459;
(statearr_33523[(12)] = inst_33427);

(statearr_33523[(7)] = inst_33411);

(statearr_33523[(8)] = inst_33410__$1);

return statearr_33523;
})();
var statearr_33527_35086 = state_33459__$1;
(statearr_33527_35086[(2)] = null);

(statearr_33527_35086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33460 === (9))){
var inst_33411 = (state_33459[(7)]);
var inst_33422 = cljs.core.keyword_identical_QMARK_(inst_33411,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33459__$1 = state_33459;
var statearr_33529_35087 = state_33459__$1;
(statearr_33529_35087[(2)] = inst_33422);

(statearr_33529_35087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33460 === (5))){
var inst_33411 = (state_33459[(7)]);
var inst_33414 = (state_33459[(9)]);
var inst_33418 = (state_33459[(11)]);
var inst_33419 = (state_33459[(13)]);
var inst_33418__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33414) : f.call(null,inst_33414));
var inst_33419__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33418__$1,inst_33411);
var state_33459__$1 = (function (){var statearr_33536 = state_33459;
(statearr_33536[(11)] = inst_33418__$1);

(statearr_33536[(13)] = inst_33419__$1);

return statearr_33536;
})();
if(inst_33419__$1){
var statearr_33540_35088 = state_33459__$1;
(statearr_33540_35088[(1)] = (8));

} else {
var statearr_33541_35089 = state_33459__$1;
(statearr_33541_35089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33460 === (14))){
var inst_33414 = (state_33459[(9)]);
var inst_33418 = (state_33459[(11)]);
var inst_33432 = (state_33459[(2)]);
var inst_33434 = [];
var inst_33435 = inst_33434.push(inst_33414);
var inst_33410 = inst_33434;
var inst_33411 = inst_33418;
var state_33459__$1 = (function (){var statearr_33542 = state_33459;
(statearr_33542[(7)] = inst_33411);

(statearr_33542[(14)] = inst_33432);

(statearr_33542[(8)] = inst_33410);

(statearr_33542[(15)] = inst_33435);

return statearr_33542;
})();
var statearr_33549_35090 = state_33459__$1;
(statearr_33549_35090[(2)] = null);

(statearr_33549_35090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33460 === (16))){
var state_33459__$1 = state_33459;
var statearr_33550_35091 = state_33459__$1;
(statearr_33550_35091[(2)] = null);

(statearr_33550_35091[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33460 === (10))){
var inst_33424 = (state_33459[(2)]);
var state_33459__$1 = state_33459;
if(cljs.core.truth_(inst_33424)){
var statearr_33551_35092 = state_33459__$1;
(statearr_33551_35092[(1)] = (11));

} else {
var statearr_33552_35093 = state_33459__$1;
(statearr_33552_35093[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33460 === (18))){
var inst_33447 = (state_33459[(2)]);
var state_33459__$1 = state_33459;
var statearr_33559_35094 = state_33459__$1;
(statearr_33559_35094[(2)] = inst_33447);

(statearr_33559_35094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33460 === (8))){
var inst_33419 = (state_33459[(13)]);
var state_33459__$1 = state_33459;
var statearr_33560_35095 = state_33459__$1;
(statearr_33560_35095[(2)] = inst_33419);

(statearr_33560_35095[(1)] = (10));


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
var cljs$core$async$state_machine__29200__auto__ = null;
var cljs$core$async$state_machine__29200__auto____0 = (function (){
var statearr_33562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33562[(0)] = cljs$core$async$state_machine__29200__auto__);

(statearr_33562[(1)] = (1));

return statearr_33562;
});
var cljs$core$async$state_machine__29200__auto____1 = (function (state_33459){
while(true){
var ret_value__29201__auto__ = (function (){try{while(true){
var result__29202__auto__ = switch__29199__auto__(state_33459);
if(cljs.core.keyword_identical_QMARK_(result__29202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29202__auto__;
}
break;
}
}catch (e33563){var ex__29203__auto__ = e33563;
var statearr_33564_35097 = state_33459;
(statearr_33564_35097[(2)] = ex__29203__auto__);


if(cljs.core.seq((state_33459[(4)]))){
var statearr_33566_35098 = state_33459;
(statearr_33566_35098[(1)] = cljs.core.first((state_33459[(4)])));

} else {
throw ex__29203__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35099 = state_33459;
state_33459 = G__35099;
continue;
} else {
return ret_value__29201__auto__;
}
break;
}
});
cljs$core$async$state_machine__29200__auto__ = function(state_33459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29200__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29200__auto____1.call(this,state_33459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29200__auto____0;
cljs$core$async$state_machine__29200__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29200__auto____1;
return cljs$core$async$state_machine__29200__auto__;
})()
})();
var state__30244__auto__ = (function (){var statearr_33568 = f__30243__auto__();
(statearr_33568[(6)] = c__30242__auto___35069);

return statearr_33568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30244__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
