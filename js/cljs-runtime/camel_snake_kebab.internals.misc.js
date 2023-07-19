goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38867 = arguments.length;
var i__5770__auto___38868 = (0);
while(true){
if((i__5770__auto___38868 < len__5769__auto___38867)){
args__5775__auto__.push((arguments[i__5770__auto___38868]));

var G__38869 = (i__5770__auto___38868 + (1));
i__5770__auto___38868 = G__38869;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__38834){
var map__38835 = p__38834;
var map__38835__$1 = cljs.core.__destructure_map(map__38835);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38835__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var temp__5802__auto__ = cljs.core.seq(camel_snake_kebab.internals.string_separator.split(separator,s));
if(temp__5802__auto__){
var vec__38842 = temp__5802__auto__;
var seq__38843 = cljs.core.seq(vec__38842);
var first__38844 = cljs.core.first(seq__38843);
var seq__38843__$1 = cljs.core.next(seq__38843);
var first = first__38844;
var rest = seq__38843__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
} else {
return "";
}
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq38826){
var G__38827 = cljs.core.first(seq38826);
var seq38826__$1 = cljs.core.next(seq38826);
var G__38828 = cljs.core.first(seq38826__$1);
var seq38826__$2 = cljs.core.next(seq38826__$1);
var G__38829 = cljs.core.first(seq38826__$2);
var seq38826__$3 = cljs.core.next(seq38826__$2);
var G__38830 = cljs.core.first(seq38826__$3);
var seq38826__$4 = cljs.core.next(seq38826__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38827,G__38828,G__38829,G__38830,seq38826__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__5045__auto__ = (function (){var G__38863 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__38863) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__38863));
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
