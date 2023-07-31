goog.provide('openllm.api.log4cljs.core');
var out_36079 = console;
openllm.api.log4cljs.core.kw__GT_js_log_fn = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"debug","debug",-1608172596),out_36079.debug,new cljs.core.Keyword(null,"info","info",-317069002),out_36079.info,new cljs.core.Keyword(null,"warn","warn",-436710552),out_36079.warn,new cljs.core.Keyword(null,"error","error",-978969032),out_36079.error,new cljs.core.Keyword(null,"log","log",-1595516004),out_36079.log], null);
/**
 * Log a message to the browser's console. It can log to the levels
 * `:debug`, `:info`, `:warn` and `:error`. Additionally you can use
 * `:log` to log to the `log` level, although you can do that with
 * clojure's `print` function as well, assuming you have enabled
 * console printing with `enable-console-print!`.
 * 
 * It is a consideration to also persist any incoming messages to the
 * database in the future. This could be done using IndexedDB API and
 * offering a possibility to download (archived?) logs.
 * 
 * Returns `nil`.
 */
openllm.api.log4cljs.core.log = (function openllm$api$log4cljs$core$log(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36081 = arguments.length;
var i__5770__auto___36082 = (0);
while(true){
if((i__5770__auto___36082 < len__5769__auto___36081)){
args__5775__auto__.push((arguments[i__5770__auto___36082]));

var G__36083 = (i__5770__auto___36082 + (1));
i__5770__auto___36082 = G__36083;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){
var log_fn_36084 = (openllm.api.log4cljs.core.kw__GT_js_log_fn.cljs$core$IFn$_invoke$arity$1 ? openllm.api.log4cljs.core.kw__GT_js_log_fn.cljs$core$IFn$_invoke$arity$1(level) : openllm.api.log4cljs.core.kw__GT_js_log_fn.call(null,level));
if((log_fn_36084 == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid log level. Valid log levels are :debug, :info, :warn, :error and :log.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"original-args","original-args",231888061),args], null));
} else {
}

cljs.core.apply.cljs$core$IFn$_invoke$arity$2(log_fn_36084,args);

return null;
}));

(openllm.api.log4cljs.core.log.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(openllm.api.log4cljs.core.log.cljs$lang$applyTo = (function (seq36070){
var G__36071 = cljs.core.first(seq36070);
var seq36070__$1 = cljs.core.next(seq36070);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36071,seq36070__$1);
}));


//# sourceMappingURL=openllm.api.log4cljs.core.js.map
