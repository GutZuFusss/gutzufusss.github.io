goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39371 = arguments.length;
var i__5770__auto___39373 = (0);
while(true){
if((i__5770__auto___39373 < len__5769__auto___39371)){
args__5775__auto__.push((arguments[i__5770__auto___39373]));

var G__39378 = (i__5770__auto___39373 + (1));
i__5770__auto___39373 = G__39378;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq39189){
var G__39190 = cljs.core.first(seq39189);
var seq39189__$1 = cljs.core.next(seq39189);
var G__39191 = cljs.core.first(seq39189__$1);
var seq39189__$2 = cljs.core.next(seq39189__$1);
var G__39192 = cljs.core.first(seq39189__$2);
var seq39189__$3 = cljs.core.next(seq39189__$2);
var G__39193 = cljs.core.first(seq39189__$3);
var seq39189__$4 = cljs.core.next(seq39189__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39190,G__39191,G__39192,G__39193,seq39189__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39380 = arguments.length;
var i__5770__auto___39381 = (0);
while(true){
if((i__5770__auto___39381 < len__5769__auto___39380)){
args__5775__auto__.push((arguments[i__5770__auto___39381]));

var G__39382 = (i__5770__auto___39381 + (1));
i__5770__auto___39381 = G__39382;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__39152__auto__,rest__39153__auto__){
var convert_case__39154__auto__ = (function (p1__39151__39155__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__39151__39155__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39153__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39152__auto__,convert_case__39154__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq39198){
var G__39199 = cljs.core.first(seq39198);
var seq39198__$1 = cljs.core.next(seq39198);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39199,seq39198__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39386 = arguments.length;
var i__5770__auto___39387 = (0);
while(true){
if((i__5770__auto___39387 < len__5769__auto___39386)){
args__5775__auto__.push((arguments[i__5770__auto___39387]));

var G__39388 = (i__5770__auto___39387 + (1));
i__5770__auto___39387 = G__39388;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq39202){
var G__39205 = cljs.core.first(seq39202);
var seq39202__$1 = cljs.core.next(seq39202);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39205,seq39202__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39392 = arguments.length;
var i__5770__auto___39393 = (0);
while(true){
if((i__5770__auto___39393 < len__5769__auto___39392)){
args__5775__auto__.push((arguments[i__5770__auto___39393]));

var G__39395 = (i__5770__auto___39393 + (1));
i__5770__auto___39393 = G__39395;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq39208){
var G__39209 = cljs.core.first(seq39208);
var seq39208__$1 = cljs.core.next(seq39208);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39209,seq39208__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39398 = arguments.length;
var i__5770__auto___39399 = (0);
while(true){
if((i__5770__auto___39399 < len__5769__auto___39398)){
args__5775__auto__.push((arguments[i__5770__auto___39399]));

var G__39401 = (i__5770__auto___39399 + (1));
i__5770__auto___39399 = G__39401;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq39212){
var G__39213 = cljs.core.first(seq39212);
var seq39212__$1 = cljs.core.next(seq39212);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39213,seq39212__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39403 = arguments.length;
var i__5770__auto___39404 = (0);
while(true){
if((i__5770__auto___39404 < len__5769__auto___39403)){
args__5775__auto__.push((arguments[i__5770__auto___39404]));

var G__39405 = (i__5770__auto___39404 + (1));
i__5770__auto___39404 = G__39405;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__39152__auto__,rest__39153__auto__){
var convert_case__39154__auto__ = (function (p1__39151__39155__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__39151__39155__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39153__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39152__auto__,convert_case__39154__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq39216){
var G__39217 = cljs.core.first(seq39216);
var seq39216__$1 = cljs.core.next(seq39216);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39217,seq39216__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39407 = arguments.length;
var i__5770__auto___39408 = (0);
while(true){
if((i__5770__auto___39408 < len__5769__auto___39407)){
args__5775__auto__.push((arguments[i__5770__auto___39408]));

var G__39409 = (i__5770__auto___39408 + (1));
i__5770__auto___39408 = G__39409;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq39220){
var G__39221 = cljs.core.first(seq39220);
var seq39220__$1 = cljs.core.next(seq39220);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39221,seq39220__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39410 = arguments.length;
var i__5770__auto___39411 = (0);
while(true){
if((i__5770__auto___39411 < len__5769__auto___39410)){
args__5775__auto__.push((arguments[i__5770__auto___39411]));

var G__39413 = (i__5770__auto___39411 + (1));
i__5770__auto___39411 = G__39413;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq39224){
var G__39225 = cljs.core.first(seq39224);
var seq39224__$1 = cljs.core.next(seq39224);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39225,seq39224__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39417 = arguments.length;
var i__5770__auto___39418 = (0);
while(true){
if((i__5770__auto___39418 < len__5769__auto___39417)){
args__5775__auto__.push((arguments[i__5770__auto___39418]));

var G__39419 = (i__5770__auto___39418 + (1));
i__5770__auto___39418 = G__39419;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq39227){
var G__39228 = cljs.core.first(seq39227);
var seq39227__$1 = cljs.core.next(seq39227);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39228,seq39227__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39421 = arguments.length;
var i__5770__auto___39422 = (0);
while(true){
if((i__5770__auto___39422 < len__5769__auto___39421)){
args__5775__auto__.push((arguments[i__5770__auto___39422]));

var G__39423 = (i__5770__auto___39422 + (1));
i__5770__auto___39422 = G__39423;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__39152__auto__,rest__39153__auto__){
var convert_case__39154__auto__ = (function (p1__39151__39155__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__39151__39155__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39153__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39152__auto__,convert_case__39154__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq39229){
var G__39230 = cljs.core.first(seq39229);
var seq39229__$1 = cljs.core.next(seq39229);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39230,seq39229__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39428 = arguments.length;
var i__5770__auto___39429 = (0);
while(true){
if((i__5770__auto___39429 < len__5769__auto___39428)){
args__5775__auto__.push((arguments[i__5770__auto___39429]));

var G__39430 = (i__5770__auto___39429 + (1));
i__5770__auto___39429 = G__39430;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq39234){
var G__39235 = cljs.core.first(seq39234);
var seq39234__$1 = cljs.core.next(seq39234);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39235,seq39234__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39434 = arguments.length;
var i__5770__auto___39435 = (0);
while(true){
if((i__5770__auto___39435 < len__5769__auto___39434)){
args__5775__auto__.push((arguments[i__5770__auto___39435]));

var G__39436 = (i__5770__auto___39435 + (1));
i__5770__auto___39435 = G__39436;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq39238){
var G__39239 = cljs.core.first(seq39238);
var seq39238__$1 = cljs.core.next(seq39238);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39239,seq39238__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39438 = arguments.length;
var i__5770__auto___39439 = (0);
while(true){
if((i__5770__auto___39439 < len__5769__auto___39438)){
args__5775__auto__.push((arguments[i__5770__auto___39439]));

var G__39440 = (i__5770__auto___39439 + (1));
i__5770__auto___39439 = G__39440;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq39241){
var G__39242 = cljs.core.first(seq39241);
var seq39241__$1 = cljs.core.next(seq39241);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39242,seq39241__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39445 = arguments.length;
var i__5770__auto___39446 = (0);
while(true){
if((i__5770__auto___39446 < len__5769__auto___39445)){
args__5775__auto__.push((arguments[i__5770__auto___39446]));

var G__39447 = (i__5770__auto___39446 + (1));
i__5770__auto___39446 = G__39447;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__39152__auto__,rest__39153__auto__){
var convert_case__39154__auto__ = (function (p1__39151__39155__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__39151__39155__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39153__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39152__auto__,convert_case__39154__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq39247){
var G__39248 = cljs.core.first(seq39247);
var seq39247__$1 = cljs.core.next(seq39247);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39248,seq39247__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39448 = arguments.length;
var i__5770__auto___39449 = (0);
while(true){
if((i__5770__auto___39449 < len__5769__auto___39448)){
args__5775__auto__.push((arguments[i__5770__auto___39449]));

var G__39450 = (i__5770__auto___39449 + (1));
i__5770__auto___39449 = G__39450;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq39249){
var G__39250 = cljs.core.first(seq39249);
var seq39249__$1 = cljs.core.next(seq39249);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39250,seq39249__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39459 = arguments.length;
var i__5770__auto___39460 = (0);
while(true){
if((i__5770__auto___39460 < len__5769__auto___39459)){
args__5775__auto__.push((arguments[i__5770__auto___39460]));

var G__39461 = (i__5770__auto___39460 + (1));
i__5770__auto___39460 = G__39461;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq39253){
var G__39254 = cljs.core.first(seq39253);
var seq39253__$1 = cljs.core.next(seq39253);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39254,seq39253__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39464 = arguments.length;
var i__5770__auto___39465 = (0);
while(true){
if((i__5770__auto___39465 < len__5769__auto___39464)){
args__5775__auto__.push((arguments[i__5770__auto___39465]));

var G__39466 = (i__5770__auto___39465 + (1));
i__5770__auto___39465 = G__39466;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq39256){
var G__39258 = cljs.core.first(seq39256);
var seq39256__$1 = cljs.core.next(seq39256);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39258,seq39256__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39474 = arguments.length;
var i__5770__auto___39475 = (0);
while(true){
if((i__5770__auto___39475 < len__5769__auto___39474)){
args__5775__auto__.push((arguments[i__5770__auto___39475]));

var G__39476 = (i__5770__auto___39475 + (1));
i__5770__auto___39475 = G__39476;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__39152__auto__,rest__39153__auto__){
var convert_case__39154__auto__ = (function (p1__39151__39155__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__39151__39155__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39153__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39152__auto__,convert_case__39154__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq39259){
var G__39260 = cljs.core.first(seq39259);
var seq39259__$1 = cljs.core.next(seq39259);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39260,seq39259__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39479 = arguments.length;
var i__5770__auto___39480 = (0);
while(true){
if((i__5770__auto___39480 < len__5769__auto___39479)){
args__5775__auto__.push((arguments[i__5770__auto___39480]));

var G__39483 = (i__5770__auto___39480 + (1));
i__5770__auto___39480 = G__39483;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq39265){
var G__39266 = cljs.core.first(seq39265);
var seq39265__$1 = cljs.core.next(seq39265);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39266,seq39265__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39487 = arguments.length;
var i__5770__auto___39488 = (0);
while(true){
if((i__5770__auto___39488 < len__5769__auto___39487)){
args__5775__auto__.push((arguments[i__5770__auto___39488]));

var G__39489 = (i__5770__auto___39488 + (1));
i__5770__auto___39488 = G__39489;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq39267){
var G__39268 = cljs.core.first(seq39267);
var seq39267__$1 = cljs.core.next(seq39267);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39268,seq39267__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39495 = arguments.length;
var i__5770__auto___39496 = (0);
while(true){
if((i__5770__auto___39496 < len__5769__auto___39495)){
args__5775__auto__.push((arguments[i__5770__auto___39496]));

var G__39497 = (i__5770__auto___39496 + (1));
i__5770__auto___39496 = G__39497;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq39271){
var G__39272 = cljs.core.first(seq39271);
var seq39271__$1 = cljs.core.next(seq39271);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39272,seq39271__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39505 = arguments.length;
var i__5770__auto___39506 = (0);
while(true){
if((i__5770__auto___39506 < len__5769__auto___39505)){
args__5775__auto__.push((arguments[i__5770__auto___39506]));

var G__39507 = (i__5770__auto___39506 + (1));
i__5770__auto___39506 = G__39507;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__39152__auto__,rest__39153__auto__){
var convert_case__39154__auto__ = (function (p1__39151__39155__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__39151__39155__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39153__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39152__auto__,convert_case__39154__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq39275){
var G__39276 = cljs.core.first(seq39275);
var seq39275__$1 = cljs.core.next(seq39275);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39276,seq39275__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39509 = arguments.length;
var i__5770__auto___39510 = (0);
while(true){
if((i__5770__auto___39510 < len__5769__auto___39509)){
args__5775__auto__.push((arguments[i__5770__auto___39510]));

var G__39511 = (i__5770__auto___39510 + (1));
i__5770__auto___39510 = G__39511;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq39277){
var G__39278 = cljs.core.first(seq39277);
var seq39277__$1 = cljs.core.next(seq39277);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39278,seq39277__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39514 = arguments.length;
var i__5770__auto___39515 = (0);
while(true){
if((i__5770__auto___39515 < len__5769__auto___39514)){
args__5775__auto__.push((arguments[i__5770__auto___39515]));

var G__39516 = (i__5770__auto___39515 + (1));
i__5770__auto___39515 = G__39516;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq39279){
var G__39280 = cljs.core.first(seq39279);
var seq39279__$1 = cljs.core.next(seq39279);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39280,seq39279__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39519 = arguments.length;
var i__5770__auto___39520 = (0);
while(true){
if((i__5770__auto___39520 < len__5769__auto___39519)){
args__5775__auto__.push((arguments[i__5770__auto___39520]));

var G__39521 = (i__5770__auto___39520 + (1));
i__5770__auto___39520 = G__39521;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq39284){
var G__39285 = cljs.core.first(seq39284);
var seq39284__$1 = cljs.core.next(seq39284);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39285,seq39284__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39522 = arguments.length;
var i__5770__auto___39523 = (0);
while(true){
if((i__5770__auto___39523 < len__5769__auto___39522)){
args__5775__auto__.push((arguments[i__5770__auto___39523]));

var G__39524 = (i__5770__auto___39523 + (1));
i__5770__auto___39523 = G__39524;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__39152__auto__,rest__39153__auto__){
var convert_case__39154__auto__ = (function (p1__39151__39155__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__39151__39155__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39153__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__39152__auto__,convert_case__39154__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq39311){
var G__39312 = cljs.core.first(seq39311);
var seq39311__$1 = cljs.core.next(seq39311);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39312,seq39311__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39525 = arguments.length;
var i__5770__auto___39526 = (0);
while(true){
if((i__5770__auto___39526 < len__5769__auto___39525)){
args__5775__auto__.push((arguments[i__5770__auto___39526]));

var G__39527 = (i__5770__auto___39526 + (1));
i__5770__auto___39526 = G__39527;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq39326){
var G__39328 = cljs.core.first(seq39326);
var seq39326__$1 = cljs.core.next(seq39326);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39328,seq39326__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39532 = arguments.length;
var i__5770__auto___39533 = (0);
while(true){
if((i__5770__auto___39533 < len__5769__auto___39532)){
args__5775__auto__.push((arguments[i__5770__auto___39533]));

var G__39534 = (i__5770__auto___39533 + (1));
i__5770__auto___39533 = G__39534;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq39337){
var G__39338 = cljs.core.first(seq39337);
var seq39337__$1 = cljs.core.next(seq39337);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39338,seq39337__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39535 = arguments.length;
var i__5770__auto___39536 = (0);
while(true){
if((i__5770__auto___39536 < len__5769__auto___39535)){
args__5775__auto__.push((arguments[i__5770__auto___39536]));

var G__39537 = (i__5770__auto___39536 + (1));
i__5770__auto___39536 = G__39537;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__39157__auto__,rest__39158__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__39157__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__39158__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq39343){
var G__39344 = cljs.core.first(seq39343);
var seq39343__$1 = cljs.core.next(seq39343);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39344,seq39343__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
