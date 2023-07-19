goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34209){
var map__34210 = p__34209;
var map__34210__$1 = cljs.core.__destructure_map(map__34210);
var m = map__34210__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34210__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34210__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34214_34672 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34215_34673 = null;
var count__34216_34674 = (0);
var i__34217_34675 = (0);
while(true){
if((i__34217_34675 < count__34216_34674)){
var f_34677 = chunk__34215_34673.cljs$core$IIndexed$_nth$arity$2(null,i__34217_34675);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34677], 0));


var G__34678 = seq__34214_34672;
var G__34679 = chunk__34215_34673;
var G__34680 = count__34216_34674;
var G__34681 = (i__34217_34675 + (1));
seq__34214_34672 = G__34678;
chunk__34215_34673 = G__34679;
count__34216_34674 = G__34680;
i__34217_34675 = G__34681;
continue;
} else {
var temp__5804__auto___34683 = cljs.core.seq(seq__34214_34672);
if(temp__5804__auto___34683){
var seq__34214_34684__$1 = temp__5804__auto___34683;
if(cljs.core.chunked_seq_QMARK_(seq__34214_34684__$1)){
var c__5568__auto___34686 = cljs.core.chunk_first(seq__34214_34684__$1);
var G__34688 = cljs.core.chunk_rest(seq__34214_34684__$1);
var G__34689 = c__5568__auto___34686;
var G__34690 = cljs.core.count(c__5568__auto___34686);
var G__34691 = (0);
seq__34214_34672 = G__34688;
chunk__34215_34673 = G__34689;
count__34216_34674 = G__34690;
i__34217_34675 = G__34691;
continue;
} else {
var f_34696 = cljs.core.first(seq__34214_34684__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34696], 0));


var G__34698 = cljs.core.next(seq__34214_34684__$1);
var G__34699 = null;
var G__34700 = (0);
var G__34701 = (0);
seq__34214_34672 = G__34698;
chunk__34215_34673 = G__34699;
count__34216_34674 = G__34700;
i__34217_34675 = G__34701;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34702 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34702], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34702)))?cljs.core.second(arglists_34702):arglists_34702)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34244_34710 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34245_34711 = null;
var count__34246_34712 = (0);
var i__34247_34713 = (0);
while(true){
if((i__34247_34713 < count__34246_34712)){
var vec__34278_34714 = chunk__34245_34711.cljs$core$IIndexed$_nth$arity$2(null,i__34247_34713);
var name_34715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34278_34714,(0),null);
var map__34281_34716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34278_34714,(1),null);
var map__34281_34717__$1 = cljs.core.__destructure_map(map__34281_34716);
var doc_34718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34281_34717__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34281_34717__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34715], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34719], 0));

if(cljs.core.truth_(doc_34718)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34718], 0));
} else {
}


var G__34722 = seq__34244_34710;
var G__34723 = chunk__34245_34711;
var G__34724 = count__34246_34712;
var G__34725 = (i__34247_34713 + (1));
seq__34244_34710 = G__34722;
chunk__34245_34711 = G__34723;
count__34246_34712 = G__34724;
i__34247_34713 = G__34725;
continue;
} else {
var temp__5804__auto___34726 = cljs.core.seq(seq__34244_34710);
if(temp__5804__auto___34726){
var seq__34244_34728__$1 = temp__5804__auto___34726;
if(cljs.core.chunked_seq_QMARK_(seq__34244_34728__$1)){
var c__5568__auto___34729 = cljs.core.chunk_first(seq__34244_34728__$1);
var G__34730 = cljs.core.chunk_rest(seq__34244_34728__$1);
var G__34731 = c__5568__auto___34729;
var G__34732 = cljs.core.count(c__5568__auto___34729);
var G__34733 = (0);
seq__34244_34710 = G__34730;
chunk__34245_34711 = G__34731;
count__34246_34712 = G__34732;
i__34247_34713 = G__34733;
continue;
} else {
var vec__34292_34734 = cljs.core.first(seq__34244_34728__$1);
var name_34735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34292_34734,(0),null);
var map__34295_34736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34292_34734,(1),null);
var map__34295_34737__$1 = cljs.core.__destructure_map(map__34295_34736);
var doc_34738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34295_34737__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34295_34737__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34735], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34739], 0));

if(cljs.core.truth_(doc_34738)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34738], 0));
} else {
}


var G__34741 = cljs.core.next(seq__34244_34728__$1);
var G__34742 = null;
var G__34743 = (0);
var G__34744 = (0);
seq__34244_34710 = G__34741;
chunk__34245_34711 = G__34742;
count__34246_34712 = G__34743;
i__34247_34713 = G__34744;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34312 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34313 = null;
var count__34314 = (0);
var i__34315 = (0);
while(true){
if((i__34315 < count__34314)){
var role = chunk__34313.cljs$core$IIndexed$_nth$arity$2(null,i__34315);
var temp__5804__auto___34752__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___34752__$1)){
var spec_34756 = temp__5804__auto___34752__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34756)], 0));
} else {
}


var G__34759 = seq__34312;
var G__34760 = chunk__34313;
var G__34761 = count__34314;
var G__34762 = (i__34315 + (1));
seq__34312 = G__34759;
chunk__34313 = G__34760;
count__34314 = G__34761;
i__34315 = G__34762;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__34312);
if(temp__5804__auto____$1){
var seq__34312__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34312__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34312__$1);
var G__34764 = cljs.core.chunk_rest(seq__34312__$1);
var G__34765 = c__5568__auto__;
var G__34766 = cljs.core.count(c__5568__auto__);
var G__34767 = (0);
seq__34312 = G__34764;
chunk__34313 = G__34765;
count__34314 = G__34766;
i__34315 = G__34767;
continue;
} else {
var role = cljs.core.first(seq__34312__$1);
var temp__5804__auto___34768__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___34768__$2)){
var spec_34770 = temp__5804__auto___34768__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34770)], 0));
} else {
}


var G__34776 = cljs.core.next(seq__34312__$1);
var G__34777 = null;
var G__34778 = (0);
var G__34779 = (0);
seq__34312 = G__34776;
chunk__34313 = G__34777;
count__34314 = G__34778;
i__34315 = G__34779;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34785 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34786 = cljs.core.ex_cause(t);
via = G__34785;
t = G__34786;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34357 = datafied_throwable;
var map__34357__$1 = cljs.core.__destructure_map(map__34357);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34357__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34357__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34357__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34358 = cljs.core.last(via);
var map__34358__$1 = cljs.core.__destructure_map(map__34358);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34358__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34358__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34358__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34359 = data;
var map__34359__$1 = cljs.core.__destructure_map(map__34359);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34359__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34359__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34359__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34364 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34364__$1 = cljs.core.__destructure_map(map__34364);
var top_data = map__34364__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34364__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34378 = phase;
var G__34378__$1 = (((G__34378 instanceof cljs.core.Keyword))?G__34378.fqn:null);
switch (G__34378__$1) {
case "read-source":
var map__34387 = data;
var map__34387__$1 = cljs.core.__destructure_map(map__34387);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34387__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34387__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34394 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34394__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34394,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34394);
var G__34394__$2 = (cljs.core.truth_((function (){var fexpr__34398 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34398.cljs$core$IFn$_invoke$arity$1 ? fexpr__34398.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34398.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34394__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34394__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34394__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34394__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34417 = top_data;
var G__34417__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34417,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34417);
var G__34417__$2 = (cljs.core.truth_((function (){var fexpr__34422 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34422.cljs$core$IFn$_invoke$arity$1 ? fexpr__34422.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34422.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34417__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34417__$1);
var G__34417__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34417__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34417__$2);
var G__34417__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34417__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34417__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34417__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34417__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34445 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34445,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34445,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34445,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34445,(3),null);
var G__34459 = top_data;
var G__34459__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34459,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34459);
var G__34459__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34459__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34459__$1);
var G__34459__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34459__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34459__$2);
var G__34459__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34459__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34459__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34459__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34459__$4;
}

break;
case "execution":
var vec__34477 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34477,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34477,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34477,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34477,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34356_SHARP_){
var or__5045__auto__ = (p1__34356_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__34493 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34493.cljs$core$IFn$_invoke$arity$1 ? fexpr__34493.cljs$core$IFn$_invoke$arity$1(p1__34356_SHARP_) : fexpr__34493.call(null,p1__34356_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__34507 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34507__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34507,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34507);
var G__34507__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34507__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34507__$1);
var G__34507__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34507__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34507__$2);
var G__34507__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34507__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34507__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34507__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34507__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34378__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34544){
var map__34546 = p__34544;
var map__34546__$1 = cljs.core.__destructure_map(map__34546);
var triage_data = map__34546__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34546__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34546__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34546__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34546__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34546__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34546__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34546__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34546__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34571 = phase;
var G__34571__$1 = (((G__34571 instanceof cljs.core.Keyword))?G__34571.fqn:null);
switch (G__34571__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34579 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34580 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34581 = loc;
var G__34582 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34590_34818 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34591_34819 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34592_34820 = true;
var _STAR_print_fn_STAR__temp_val__34593_34821 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34592_34820);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34593_34821);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34535_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34535_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34591_34819);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34590_34818);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34579,G__34580,G__34581,G__34582) : format.call(null,G__34579,G__34580,G__34581,G__34582));

break;
case "macroexpansion":
var G__34600 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34601 = cause_type;
var G__34602 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34603 = loc;
var G__34604 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34600,G__34601,G__34602,G__34603,G__34604) : format.call(null,G__34600,G__34601,G__34602,G__34603,G__34604));

break;
case "compile-syntax-check":
var G__34606 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34607 = cause_type;
var G__34608 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34609 = loc;
var G__34610 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34606,G__34607,G__34608,G__34609,G__34610) : format.call(null,G__34606,G__34607,G__34608,G__34609,G__34610));

break;
case "compilation":
var G__34615 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34616 = cause_type;
var G__34617 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34618 = loc;
var G__34619 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34615,G__34616,G__34617,G__34618,G__34619) : format.call(null,G__34615,G__34616,G__34617,G__34618,G__34619));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34622 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34623 = symbol;
var G__34624 = loc;
var G__34625 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34628_34825 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34629_34826 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34630_34827 = true;
var _STAR_print_fn_STAR__temp_val__34631_34828 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34630_34827);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34631_34828);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34540_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34540_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34629_34826);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34628_34825);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34622,G__34623,G__34624,G__34625) : format.call(null,G__34622,G__34623,G__34624,G__34625));
} else {
var G__34639 = "Execution error%s at %s(%s).\n%s\n";
var G__34640 = cause_type;
var G__34641 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34642 = loc;
var G__34643 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34639,G__34640,G__34641,G__34642,G__34643) : format.call(null,G__34639,G__34640,G__34641,G__34642,G__34643));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34571__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
