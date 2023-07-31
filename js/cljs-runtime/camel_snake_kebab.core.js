goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39916 = arguments.length;
var i__5770__auto___39917 = (0);
while(true){
if((i__5770__auto___39917 < len__5769__auto___39916)){
args__5775__auto__.push((arguments[i__5770__auto___39917]));

var G__39918 = (i__5770__auto___39917 + (1));
i__5770__auto___39917 = G__39918;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq39815){
var G__39816 = cljs.core.first(seq39815);
var seq39815__$1 = cljs.core.next(seq39815);
var G__39817 = cljs.core.first(seq39815__$1);
var seq39815__$2 = cljs.core.next(seq39815__$1);
var G__39818 = cljs.core.first(seq39815__$2);
var seq39815__$3 = cljs.core.next(seq39815__$2);
var G__39819 = cljs.core.first(seq39815__$3);
var seq39815__$4 = cljs.core.next(seq39815__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39816,G__39817,G__39818,G__39819,seq39815__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
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
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__39775__auto__,rest__39776__auto__){
var convert_case__39777__auto__ = (function (p1__39774__39778__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__39774__39778__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39776__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39775__auto__,convert_case__39777__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq39825){
var G__39826 = cljs.core.first(seq39825);
var seq39825__$1 = cljs.core.next(seq39825);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39826,seq39825__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39922 = arguments.length;
var i__5770__auto___39923 = (0);
while(true){
if((i__5770__auto___39923 < len__5769__auto___39922)){
args__5775__auto__.push((arguments[i__5770__auto___39923]));

var G__39924 = (i__5770__auto___39923 + (1));
i__5770__auto___39923 = G__39924;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq39827){
var G__39828 = cljs.core.first(seq39827);
var seq39827__$1 = cljs.core.next(seq39827);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39828,seq39827__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39925 = arguments.length;
var i__5770__auto___39926 = (0);
while(true){
if((i__5770__auto___39926 < len__5769__auto___39925)){
args__5775__auto__.push((arguments[i__5770__auto___39926]));

var G__39927 = (i__5770__auto___39926 + (1));
i__5770__auto___39926 = G__39927;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq39829){
var G__39830 = cljs.core.first(seq39829);
var seq39829__$1 = cljs.core.next(seq39829);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39830,seq39829__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39928 = arguments.length;
var i__5770__auto___39929 = (0);
while(true){
if((i__5770__auto___39929 < len__5769__auto___39928)){
args__5775__auto__.push((arguments[i__5770__auto___39929]));

var G__39930 = (i__5770__auto___39929 + (1));
i__5770__auto___39929 = G__39930;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq39831){
var G__39832 = cljs.core.first(seq39831);
var seq39831__$1 = cljs.core.next(seq39831);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39832,seq39831__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39931 = arguments.length;
var i__5770__auto___39932 = (0);
while(true){
if((i__5770__auto___39932 < len__5769__auto___39931)){
args__5775__auto__.push((arguments[i__5770__auto___39932]));

var G__39933 = (i__5770__auto___39932 + (1));
i__5770__auto___39932 = G__39933;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__39775__auto__,rest__39776__auto__){
var convert_case__39777__auto__ = (function (p1__39774__39778__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__39774__39778__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39776__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39775__auto__,convert_case__39777__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq39833){
var G__39834 = cljs.core.first(seq39833);
var seq39833__$1 = cljs.core.next(seq39833);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39834,seq39833__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39934 = arguments.length;
var i__5770__auto___39935 = (0);
while(true){
if((i__5770__auto___39935 < len__5769__auto___39934)){
args__5775__auto__.push((arguments[i__5770__auto___39935]));

var G__39936 = (i__5770__auto___39935 + (1));
i__5770__auto___39935 = G__39936;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq39835){
var G__39836 = cljs.core.first(seq39835);
var seq39835__$1 = cljs.core.next(seq39835);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39836,seq39835__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39937 = arguments.length;
var i__5770__auto___39938 = (0);
while(true){
if((i__5770__auto___39938 < len__5769__auto___39937)){
args__5775__auto__.push((arguments[i__5770__auto___39938]));

var G__39939 = (i__5770__auto___39938 + (1));
i__5770__auto___39938 = G__39939;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq39837){
var G__39838 = cljs.core.first(seq39837);
var seq39837__$1 = cljs.core.next(seq39837);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39838,seq39837__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39940 = arguments.length;
var i__5770__auto___39941 = (0);
while(true){
if((i__5770__auto___39941 < len__5769__auto___39940)){
args__5775__auto__.push((arguments[i__5770__auto___39941]));

var G__39942 = (i__5770__auto___39941 + (1));
i__5770__auto___39941 = G__39942;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq39839){
var G__39840 = cljs.core.first(seq39839);
var seq39839__$1 = cljs.core.next(seq39839);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39840,seq39839__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39943 = arguments.length;
var i__5770__auto___39944 = (0);
while(true){
if((i__5770__auto___39944 < len__5769__auto___39943)){
args__5775__auto__.push((arguments[i__5770__auto___39944]));

var G__39945 = (i__5770__auto___39944 + (1));
i__5770__auto___39944 = G__39945;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__39775__auto__,rest__39776__auto__){
var convert_case__39777__auto__ = (function (p1__39774__39778__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__39774__39778__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39776__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39775__auto__,convert_case__39777__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq39841){
var G__39842 = cljs.core.first(seq39841);
var seq39841__$1 = cljs.core.next(seq39841);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39842,seq39841__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39946 = arguments.length;
var i__5770__auto___39947 = (0);
while(true){
if((i__5770__auto___39947 < len__5769__auto___39946)){
args__5775__auto__.push((arguments[i__5770__auto___39947]));

var G__39948 = (i__5770__auto___39947 + (1));
i__5770__auto___39947 = G__39948;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq39843){
var G__39844 = cljs.core.first(seq39843);
var seq39843__$1 = cljs.core.next(seq39843);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39844,seq39843__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39949 = arguments.length;
var i__5770__auto___39950 = (0);
while(true){
if((i__5770__auto___39950 < len__5769__auto___39949)){
args__5775__auto__.push((arguments[i__5770__auto___39950]));

var G__39951 = (i__5770__auto___39950 + (1));
i__5770__auto___39950 = G__39951;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq39845){
var G__39846 = cljs.core.first(seq39845);
var seq39845__$1 = cljs.core.next(seq39845);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39846,seq39845__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39952 = arguments.length;
var i__5770__auto___39953 = (0);
while(true){
if((i__5770__auto___39953 < len__5769__auto___39952)){
args__5775__auto__.push((arguments[i__5770__auto___39953]));

var G__39954 = (i__5770__auto___39953 + (1));
i__5770__auto___39953 = G__39954;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq39855){
var G__39856 = cljs.core.first(seq39855);
var seq39855__$1 = cljs.core.next(seq39855);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39856,seq39855__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39955 = arguments.length;
var i__5770__auto___39956 = (0);
while(true){
if((i__5770__auto___39956 < len__5769__auto___39955)){
args__5775__auto__.push((arguments[i__5770__auto___39956]));

var G__39957 = (i__5770__auto___39956 + (1));
i__5770__auto___39956 = G__39957;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__39775__auto__,rest__39776__auto__){
var convert_case__39777__auto__ = (function (p1__39774__39778__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__39774__39778__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39776__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39775__auto__,convert_case__39777__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq39866){
var G__39867 = cljs.core.first(seq39866);
var seq39866__$1 = cljs.core.next(seq39866);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39867,seq39866__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39958 = arguments.length;
var i__5770__auto___39959 = (0);
while(true){
if((i__5770__auto___39959 < len__5769__auto___39958)){
args__5775__auto__.push((arguments[i__5770__auto___39959]));

var G__39960 = (i__5770__auto___39959 + (1));
i__5770__auto___39959 = G__39960;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq39878){
var G__39879 = cljs.core.first(seq39878);
var seq39878__$1 = cljs.core.next(seq39878);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39879,seq39878__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39961 = arguments.length;
var i__5770__auto___39962 = (0);
while(true){
if((i__5770__auto___39962 < len__5769__auto___39961)){
args__5775__auto__.push((arguments[i__5770__auto___39962]));

var G__39963 = (i__5770__auto___39962 + (1));
i__5770__auto___39962 = G__39963;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq39888){
var G__39889 = cljs.core.first(seq39888);
var seq39888__$1 = cljs.core.next(seq39888);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39889,seq39888__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39964 = arguments.length;
var i__5770__auto___39965 = (0);
while(true){
if((i__5770__auto___39965 < len__5769__auto___39964)){
args__5775__auto__.push((arguments[i__5770__auto___39965]));

var G__39966 = (i__5770__auto___39965 + (1));
i__5770__auto___39965 = G__39966;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq39890){
var G__39891 = cljs.core.first(seq39890);
var seq39890__$1 = cljs.core.next(seq39890);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39891,seq39890__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
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
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__39775__auto__,rest__39776__auto__){
var convert_case__39777__auto__ = (function (p1__39774__39778__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__39774__39778__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39776__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39775__auto__,convert_case__39777__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq39892){
var G__39893 = cljs.core.first(seq39892);
var seq39892__$1 = cljs.core.next(seq39892);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39893,seq39892__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39970 = arguments.length;
var i__5770__auto___39971 = (0);
while(true){
if((i__5770__auto___39971 < len__5769__auto___39970)){
args__5775__auto__.push((arguments[i__5770__auto___39971]));

var G__39972 = (i__5770__auto___39971 + (1));
i__5770__auto___39971 = G__39972;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq39894){
var G__39895 = cljs.core.first(seq39894);
var seq39894__$1 = cljs.core.next(seq39894);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39895,seq39894__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39973 = arguments.length;
var i__5770__auto___39974 = (0);
while(true){
if((i__5770__auto___39974 < len__5769__auto___39973)){
args__5775__auto__.push((arguments[i__5770__auto___39974]));

var G__39975 = (i__5770__auto___39974 + (1));
i__5770__auto___39974 = G__39975;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq39896){
var G__39897 = cljs.core.first(seq39896);
var seq39896__$1 = cljs.core.next(seq39896);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39897,seq39896__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39976 = arguments.length;
var i__5770__auto___39977 = (0);
while(true){
if((i__5770__auto___39977 < len__5769__auto___39976)){
args__5775__auto__.push((arguments[i__5770__auto___39977]));

var G__39978 = (i__5770__auto___39977 + (1));
i__5770__auto___39977 = G__39978;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq39898){
var G__39899 = cljs.core.first(seq39898);
var seq39898__$1 = cljs.core.next(seq39898);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39899,seq39898__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39979 = arguments.length;
var i__5770__auto___39980 = (0);
while(true){
if((i__5770__auto___39980 < len__5769__auto___39979)){
args__5775__auto__.push((arguments[i__5770__auto___39980]));

var G__39981 = (i__5770__auto___39980 + (1));
i__5770__auto___39980 = G__39981;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__39775__auto__,rest__39776__auto__){
var convert_case__39777__auto__ = (function (p1__39774__39778__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__39774__39778__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39776__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39775__auto__,convert_case__39777__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq39900){
var G__39901 = cljs.core.first(seq39900);
var seq39900__$1 = cljs.core.next(seq39900);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39901,seq39900__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39982 = arguments.length;
var i__5770__auto___39983 = (0);
while(true){
if((i__5770__auto___39983 < len__5769__auto___39982)){
args__5775__auto__.push((arguments[i__5770__auto___39983]));

var G__39984 = (i__5770__auto___39983 + (1));
i__5770__auto___39983 = G__39984;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq39902){
var G__39903 = cljs.core.first(seq39902);
var seq39902__$1 = cljs.core.next(seq39902);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39903,seq39902__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39985 = arguments.length;
var i__5770__auto___39986 = (0);
while(true){
if((i__5770__auto___39986 < len__5769__auto___39985)){
args__5775__auto__.push((arguments[i__5770__auto___39986]));

var G__39987 = (i__5770__auto___39986 + (1));
i__5770__auto___39986 = G__39987;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq39904){
var G__39905 = cljs.core.first(seq39904);
var seq39904__$1 = cljs.core.next(seq39904);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39905,seq39904__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39988 = arguments.length;
var i__5770__auto___39989 = (0);
while(true){
if((i__5770__auto___39989 < len__5769__auto___39988)){
args__5775__auto__.push((arguments[i__5770__auto___39989]));

var G__39990 = (i__5770__auto___39989 + (1));
i__5770__auto___39989 = G__39990;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq39906){
var G__39907 = cljs.core.first(seq39906);
var seq39906__$1 = cljs.core.next(seq39906);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39907,seq39906__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39991 = arguments.length;
var i__5770__auto___39992 = (0);
while(true){
if((i__5770__auto___39992 < len__5769__auto___39991)){
args__5775__auto__.push((arguments[i__5770__auto___39992]));

var G__39993 = (i__5770__auto___39992 + (1));
i__5770__auto___39992 = G__39993;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__39775__auto__,rest__39776__auto__){
var convert_case__39777__auto__ = (function (p1__39774__39778__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__39774__39778__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39776__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39775__auto__,convert_case__39777__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq39908){
var G__39909 = cljs.core.first(seq39908);
var seq39908__$1 = cljs.core.next(seq39908);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39909,seq39908__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39994 = arguments.length;
var i__5770__auto___39995 = (0);
while(true){
if((i__5770__auto___39995 < len__5769__auto___39994)){
args__5775__auto__.push((arguments[i__5770__auto___39995]));

var G__39996 = (i__5770__auto___39995 + (1));
i__5770__auto___39995 = G__39996;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq39910){
var G__39911 = cljs.core.first(seq39910);
var seq39910__$1 = cljs.core.next(seq39910);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39911,seq39910__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39997 = arguments.length;
var i__5770__auto___39998 = (0);
while(true){
if((i__5770__auto___39998 < len__5769__auto___39997)){
args__5775__auto__.push((arguments[i__5770__auto___39998]));

var G__39999 = (i__5770__auto___39998 + (1));
i__5770__auto___39998 = G__39999;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq39912){
var G__39913 = cljs.core.first(seq39912);
var seq39912__$1 = cljs.core.next(seq39912);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39913,seq39912__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40000 = arguments.length;
var i__5770__auto___40001 = (0);
while(true){
if((i__5770__auto___40001 < len__5769__auto___40000)){
args__5775__auto__.push((arguments[i__5770__auto___40001]));

var G__40002 = (i__5770__auto___40001 + (1));
i__5770__auto___40001 = G__40002;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39780__auto__,rest__39781__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__39780__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39781__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq39914){
var G__39915 = cljs.core.first(seq39914);
var seq39914__$1 = cljs.core.next(seq39914);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39915,seq39914__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
