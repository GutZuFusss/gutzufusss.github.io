goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39853 = arguments.length;
var i__5770__auto___39854 = (0);
while(true){
if((i__5770__auto___39854 < len__5769__auto___39853)){
args__5775__auto__.push((arguments[i__5770__auto___39854]));

var G__39855 = (i__5770__auto___39854 + (1));
i__5770__auto___39854 = G__39855;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq39792){
var G__39793 = cljs.core.first(seq39792);
var seq39792__$1 = cljs.core.next(seq39792);
var G__39794 = cljs.core.first(seq39792__$1);
var seq39792__$2 = cljs.core.next(seq39792__$1);
var G__39795 = cljs.core.first(seq39792__$2);
var seq39792__$3 = cljs.core.next(seq39792__$2);
var G__39796 = cljs.core.first(seq39792__$3);
var seq39792__$4 = cljs.core.next(seq39792__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39793,G__39794,G__39795,G__39796,seq39792__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39858 = arguments.length;
var i__5770__auto___39859 = (0);
while(true){
if((i__5770__auto___39859 < len__5769__auto___39858)){
args__5775__auto__.push((arguments[i__5770__auto___39859]));

var G__39860 = (i__5770__auto___39859 + (1));
i__5770__auto___39859 = G__39860;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__39757__auto__,rest__39758__auto__){
var convert_case__39759__auto__ = (function (p1__39756__39760__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__39756__39760__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39758__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39757__auto__,convert_case__39759__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq39797){
var G__39798 = cljs.core.first(seq39797);
var seq39797__$1 = cljs.core.next(seq39797);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39798,seq39797__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39865 = arguments.length;
var i__5770__auto___39866 = (0);
while(true){
if((i__5770__auto___39866 < len__5769__auto___39865)){
args__5775__auto__.push((arguments[i__5770__auto___39866]));

var G__39867 = (i__5770__auto___39866 + (1));
i__5770__auto___39866 = G__39867;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq39799){
var G__39800 = cljs.core.first(seq39799);
var seq39799__$1 = cljs.core.next(seq39799);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39800,seq39799__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39868 = arguments.length;
var i__5770__auto___39869 = (0);
while(true){
if((i__5770__auto___39869 < len__5769__auto___39868)){
args__5775__auto__.push((arguments[i__5770__auto___39869]));

var G__39871 = (i__5770__auto___39869 + (1));
i__5770__auto___39869 = G__39871;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq39801){
var G__39802 = cljs.core.first(seq39801);
var seq39801__$1 = cljs.core.next(seq39801);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39802,seq39801__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39875 = arguments.length;
var i__5770__auto___39876 = (0);
while(true){
if((i__5770__auto___39876 < len__5769__auto___39875)){
args__5775__auto__.push((arguments[i__5770__auto___39876]));

var G__39877 = (i__5770__auto___39876 + (1));
i__5770__auto___39876 = G__39877;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq39803){
var G__39804 = cljs.core.first(seq39803);
var seq39803__$1 = cljs.core.next(seq39803);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39804,seq39803__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39878 = arguments.length;
var i__5770__auto___39880 = (0);
while(true){
if((i__5770__auto___39880 < len__5769__auto___39878)){
args__5775__auto__.push((arguments[i__5770__auto___39880]));

var G__39881 = (i__5770__auto___39880 + (1));
i__5770__auto___39880 = G__39881;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__39757__auto__,rest__39758__auto__){
var convert_case__39759__auto__ = (function (p1__39756__39760__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__39756__39760__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39758__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39757__auto__,convert_case__39759__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq39805){
var G__39806 = cljs.core.first(seq39805);
var seq39805__$1 = cljs.core.next(seq39805);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39806,seq39805__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39885 = arguments.length;
var i__5770__auto___39887 = (0);
while(true){
if((i__5770__auto___39887 < len__5769__auto___39885)){
args__5775__auto__.push((arguments[i__5770__auto___39887]));

var G__39888 = (i__5770__auto___39887 + (1));
i__5770__auto___39887 = G__39888;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq39807){
var G__39808 = cljs.core.first(seq39807);
var seq39807__$1 = cljs.core.next(seq39807);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39808,seq39807__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39889 = arguments.length;
var i__5770__auto___39890 = (0);
while(true){
if((i__5770__auto___39890 < len__5769__auto___39889)){
args__5775__auto__.push((arguments[i__5770__auto___39890]));

var G__39891 = (i__5770__auto___39890 + (1));
i__5770__auto___39890 = G__39891;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq39809){
var G__39810 = cljs.core.first(seq39809);
var seq39809__$1 = cljs.core.next(seq39809);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39810,seq39809__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39896 = arguments.length;
var i__5770__auto___39897 = (0);
while(true){
if((i__5770__auto___39897 < len__5769__auto___39896)){
args__5775__auto__.push((arguments[i__5770__auto___39897]));

var G__39898 = (i__5770__auto___39897 + (1));
i__5770__auto___39897 = G__39898;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq39811){
var G__39812 = cljs.core.first(seq39811);
var seq39811__$1 = cljs.core.next(seq39811);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39812,seq39811__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39903 = arguments.length;
var i__5770__auto___39904 = (0);
while(true){
if((i__5770__auto___39904 < len__5769__auto___39903)){
args__5775__auto__.push((arguments[i__5770__auto___39904]));

var G__39905 = (i__5770__auto___39904 + (1));
i__5770__auto___39904 = G__39905;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__39757__auto__,rest__39758__auto__){
var convert_case__39759__auto__ = (function (p1__39756__39760__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__39756__39760__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39758__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39757__auto__,convert_case__39759__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq39813){
var G__39814 = cljs.core.first(seq39813);
var seq39813__$1 = cljs.core.next(seq39813);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39814,seq39813__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39912 = arguments.length;
var i__5770__auto___39914 = (0);
while(true){
if((i__5770__auto___39914 < len__5769__auto___39912)){
args__5775__auto__.push((arguments[i__5770__auto___39914]));

var G__39916 = (i__5770__auto___39914 + (1));
i__5770__auto___39914 = G__39916;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq39815){
var G__39816 = cljs.core.first(seq39815);
var seq39815__$1 = cljs.core.next(seq39815);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39816,seq39815__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39919 = arguments.length;
var i__5770__auto___39920 = (0);
while(true){
if((i__5770__auto___39920 < len__5769__auto___39919)){
args__5775__auto__.push((arguments[i__5770__auto___39920]));

var G__39921 = (i__5770__auto___39920 + (1));
i__5770__auto___39920 = G__39921;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq39817){
var G__39818 = cljs.core.first(seq39817);
var seq39817__$1 = cljs.core.next(seq39817);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39818,seq39817__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39926 = arguments.length;
var i__5770__auto___39927 = (0);
while(true){
if((i__5770__auto___39927 < len__5769__auto___39926)){
args__5775__auto__.push((arguments[i__5770__auto___39927]));

var G__39929 = (i__5770__auto___39927 + (1));
i__5770__auto___39927 = G__39929;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq39819){
var G__39820 = cljs.core.first(seq39819);
var seq39819__$1 = cljs.core.next(seq39819);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39820,seq39819__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39932 = arguments.length;
var i__5770__auto___39933 = (0);
while(true){
if((i__5770__auto___39933 < len__5769__auto___39932)){
args__5775__auto__.push((arguments[i__5770__auto___39933]));

var G__39936 = (i__5770__auto___39933 + (1));
i__5770__auto___39933 = G__39936;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__39757__auto__,rest__39758__auto__){
var convert_case__39759__auto__ = (function (p1__39756__39760__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__39756__39760__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39758__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39757__auto__,convert_case__39759__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq39821){
var G__39822 = cljs.core.first(seq39821);
var seq39821__$1 = cljs.core.next(seq39821);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39822,seq39821__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39942 = arguments.length;
var i__5770__auto___39943 = (0);
while(true){
if((i__5770__auto___39943 < len__5769__auto___39942)){
args__5775__auto__.push((arguments[i__5770__auto___39943]));

var G__39944 = (i__5770__auto___39943 + (1));
i__5770__auto___39943 = G__39944;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq39823){
var G__39824 = cljs.core.first(seq39823);
var seq39823__$1 = cljs.core.next(seq39823);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39824,seq39823__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39946 = arguments.length;
var i__5770__auto___39949 = (0);
while(true){
if((i__5770__auto___39949 < len__5769__auto___39946)){
args__5775__auto__.push((arguments[i__5770__auto___39949]));

var G__39950 = (i__5770__auto___39949 + (1));
i__5770__auto___39949 = G__39950;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq39825){
var G__39826 = cljs.core.first(seq39825);
var seq39825__$1 = cljs.core.next(seq39825);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39826,seq39825__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39960 = arguments.length;
var i__5770__auto___39961 = (0);
while(true){
if((i__5770__auto___39961 < len__5769__auto___39960)){
args__5775__auto__.push((arguments[i__5770__auto___39961]));

var G__39962 = (i__5770__auto___39961 + (1));
i__5770__auto___39961 = G__39962;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq39827){
var G__39828 = cljs.core.first(seq39827);
var seq39827__$1 = cljs.core.next(seq39827);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39828,seq39827__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39963 = arguments.length;
var i__5770__auto___39964 = (0);
while(true){
if((i__5770__auto___39964 < len__5769__auto___39963)){
args__5775__auto__.push((arguments[i__5770__auto___39964]));

var G__39966 = (i__5770__auto___39964 + (1));
i__5770__auto___39964 = G__39966;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__39757__auto__,rest__39758__auto__){
var convert_case__39759__auto__ = (function (p1__39756__39760__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__39756__39760__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39758__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39757__auto__,convert_case__39759__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq39829){
var G__39830 = cljs.core.first(seq39829);
var seq39829__$1 = cljs.core.next(seq39829);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39830,seq39829__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39967 = arguments.length;
var i__5770__auto___39968 = (0);
while(true){
if((i__5770__auto___39968 < len__5769__auto___39967)){
args__5775__auto__.push((arguments[i__5770__auto___39968]));

var G__39969 = (i__5770__auto___39968 + (1));
i__5770__auto___39968 = G__39969;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq39831){
var G__39832 = cljs.core.first(seq39831);
var seq39831__$1 = cljs.core.next(seq39831);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39832,seq39831__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39974 = arguments.length;
var i__5770__auto___39975 = (0);
while(true){
if((i__5770__auto___39975 < len__5769__auto___39974)){
args__5775__auto__.push((arguments[i__5770__auto___39975]));

var G__39976 = (i__5770__auto___39975 + (1));
i__5770__auto___39975 = G__39976;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq39833){
var G__39834 = cljs.core.first(seq39833);
var seq39833__$1 = cljs.core.next(seq39833);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39834,seq39833__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39977 = arguments.length;
var i__5770__auto___39978 = (0);
while(true){
if((i__5770__auto___39978 < len__5769__auto___39977)){
args__5775__auto__.push((arguments[i__5770__auto___39978]));

var G__39979 = (i__5770__auto___39978 + (1));
i__5770__auto___39978 = G__39979;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq39835){
var G__39836 = cljs.core.first(seq39835);
var seq39835__$1 = cljs.core.next(seq39835);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39836,seq39835__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39980 = arguments.length;
var i__5770__auto___39981 = (0);
while(true){
if((i__5770__auto___39981 < len__5769__auto___39980)){
args__5775__auto__.push((arguments[i__5770__auto___39981]));

var G__39982 = (i__5770__auto___39981 + (1));
i__5770__auto___39981 = G__39982;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__39757__auto__,rest__39758__auto__){
var convert_case__39759__auto__ = (function (p1__39756__39760__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__39756__39760__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39758__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39757__auto__,convert_case__39759__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq39837){
var G__39838 = cljs.core.first(seq39837);
var seq39837__$1 = cljs.core.next(seq39837);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39838,seq39837__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39983 = arguments.length;
var i__5770__auto___39984 = (0);
while(true){
if((i__5770__auto___39984 < len__5769__auto___39983)){
args__5775__auto__.push((arguments[i__5770__auto___39984]));

var G__39985 = (i__5770__auto___39984 + (1));
i__5770__auto___39984 = G__39985;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq39839){
var G__39840 = cljs.core.first(seq39839);
var seq39839__$1 = cljs.core.next(seq39839);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39840,seq39839__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39986 = arguments.length;
var i__5770__auto___39987 = (0);
while(true){
if((i__5770__auto___39987 < len__5769__auto___39986)){
args__5775__auto__.push((arguments[i__5770__auto___39987]));

var G__39988 = (i__5770__auto___39987 + (1));
i__5770__auto___39987 = G__39988;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq39841){
var G__39842 = cljs.core.first(seq39841);
var seq39841__$1 = cljs.core.next(seq39841);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39842,seq39841__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39989 = arguments.length;
var i__5770__auto___39990 = (0);
while(true){
if((i__5770__auto___39990 < len__5769__auto___39989)){
args__5775__auto__.push((arguments[i__5770__auto___39990]));

var G__39991 = (i__5770__auto___39990 + (1));
i__5770__auto___39990 = G__39991;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq39843){
var G__39844 = cljs.core.first(seq39843);
var seq39843__$1 = cljs.core.next(seq39843);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39844,seq39843__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39993 = arguments.length;
var i__5770__auto___39994 = (0);
while(true){
if((i__5770__auto___39994 < len__5769__auto___39993)){
args__5775__auto__.push((arguments[i__5770__auto___39994]));

var G__39995 = (i__5770__auto___39994 + (1));
i__5770__auto___39994 = G__39995;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__39757__auto__,rest__39758__auto__){
var convert_case__39759__auto__ = (function (p1__39756__39760__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__39756__39760__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39758__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39757__auto__,convert_case__39759__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq39845){
var G__39846 = cljs.core.first(seq39845);
var seq39845__$1 = cljs.core.next(seq39845);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39846,seq39845__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39996 = arguments.length;
var i__5770__auto___39997 = (0);
while(true){
if((i__5770__auto___39997 < len__5769__auto___39996)){
args__5775__auto__.push((arguments[i__5770__auto___39997]));

var G__39998 = (i__5770__auto___39997 + (1));
i__5770__auto___39997 = G__39998;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq39847){
var G__39848 = cljs.core.first(seq39847);
var seq39847__$1 = cljs.core.next(seq39847);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39848,seq39847__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39999 = arguments.length;
var i__5770__auto___40000 = (0);
while(true){
if((i__5770__auto___40000 < len__5769__auto___39999)){
args__5775__auto__.push((arguments[i__5770__auto___40000]));

var G__40001 = (i__5770__auto___40000 + (1));
i__5770__auto___40000 = G__40001;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq39849){
var G__39850 = cljs.core.first(seq39849);
var seq39849__$1 = cljs.core.next(seq39849);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39850,seq39849__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40002 = arguments.length;
var i__5770__auto___40003 = (0);
while(true){
if((i__5770__auto___40003 < len__5769__auto___40002)){
args__5775__auto__.push((arguments[i__5770__auto___40003]));

var G__40004 = (i__5770__auto___40003 + (1));
i__5770__auto___40003 = G__40004;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39762__auto__,rest__39763__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__39762__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39763__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq39851){
var G__39852 = cljs.core.first(seq39851);
var seq39851__$1 = cljs.core.next(seq39851);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39852,seq39851__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
