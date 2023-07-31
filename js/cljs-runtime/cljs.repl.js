goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34697){
var map__34698 = p__34697;
var map__34698__$1 = cljs.core.__destructure_map(map__34698);
var m = map__34698__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34698__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34698__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
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
var seq__34701_34847 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34702_34848 = null;
var count__34703_34849 = (0);
var i__34704_34850 = (0);
while(true){
if((i__34704_34850 < count__34703_34849)){
var f_34852 = chunk__34702_34848.cljs$core$IIndexed$_nth$arity$2(null,i__34704_34850);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34852], 0));


var G__34853 = seq__34701_34847;
var G__34854 = chunk__34702_34848;
var G__34855 = count__34703_34849;
var G__34856 = (i__34704_34850 + (1));
seq__34701_34847 = G__34853;
chunk__34702_34848 = G__34854;
count__34703_34849 = G__34855;
i__34704_34850 = G__34856;
continue;
} else {
var temp__5753__auto___34857 = cljs.core.seq(seq__34701_34847);
if(temp__5753__auto___34857){
var seq__34701_34858__$1 = temp__5753__auto___34857;
if(cljs.core.chunked_seq_QMARK_(seq__34701_34858__$1)){
var c__5568__auto___34859 = cljs.core.chunk_first(seq__34701_34858__$1);
var G__34860 = cljs.core.chunk_rest(seq__34701_34858__$1);
var G__34861 = c__5568__auto___34859;
var G__34862 = cljs.core.count(c__5568__auto___34859);
var G__34863 = (0);
seq__34701_34847 = G__34860;
chunk__34702_34848 = G__34861;
count__34703_34849 = G__34862;
i__34704_34850 = G__34863;
continue;
} else {
var f_34864 = cljs.core.first(seq__34701_34858__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34864], 0));


var G__34865 = cljs.core.next(seq__34701_34858__$1);
var G__34866 = null;
var G__34867 = (0);
var G__34868 = (0);
seq__34701_34847 = G__34865;
chunk__34702_34848 = G__34866;
count__34703_34849 = G__34867;
i__34704_34850 = G__34868;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34869 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34869], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34869)))?cljs.core.second(arglists_34869):arglists_34869)], 0));
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
var seq__34705_34871 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34706_34872 = null;
var count__34707_34873 = (0);
var i__34708_34874 = (0);
while(true){
if((i__34708_34874 < count__34707_34873)){
var vec__34717_34875 = chunk__34706_34872.cljs$core$IIndexed$_nth$arity$2(null,i__34708_34874);
var name_34876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34717_34875,(0),null);
var map__34720_34877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34717_34875,(1),null);
var map__34720_34878__$1 = cljs.core.__destructure_map(map__34720_34877);
var doc_34879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34720_34878__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34720_34878__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34876], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34880], 0));

if(cljs.core.truth_(doc_34879)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34879], 0));
} else {
}


var G__34881 = seq__34705_34871;
var G__34882 = chunk__34706_34872;
var G__34883 = count__34707_34873;
var G__34884 = (i__34708_34874 + (1));
seq__34705_34871 = G__34881;
chunk__34706_34872 = G__34882;
count__34707_34873 = G__34883;
i__34708_34874 = G__34884;
continue;
} else {
var temp__5753__auto___34885 = cljs.core.seq(seq__34705_34871);
if(temp__5753__auto___34885){
var seq__34705_34889__$1 = temp__5753__auto___34885;
if(cljs.core.chunked_seq_QMARK_(seq__34705_34889__$1)){
var c__5568__auto___34890 = cljs.core.chunk_first(seq__34705_34889__$1);
var G__34891 = cljs.core.chunk_rest(seq__34705_34889__$1);
var G__34892 = c__5568__auto___34890;
var G__34893 = cljs.core.count(c__5568__auto___34890);
var G__34894 = (0);
seq__34705_34871 = G__34891;
chunk__34706_34872 = G__34892;
count__34707_34873 = G__34893;
i__34708_34874 = G__34894;
continue;
} else {
var vec__34727_34895 = cljs.core.first(seq__34705_34889__$1);
var name_34896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34727_34895,(0),null);
var map__34730_34897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34727_34895,(1),null);
var map__34730_34898__$1 = cljs.core.__destructure_map(map__34730_34897);
var doc_34899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34730_34898__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34730_34898__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34896], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34900], 0));

if(cljs.core.truth_(doc_34899)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34899], 0));
} else {
}


var G__34901 = cljs.core.next(seq__34705_34889__$1);
var G__34902 = null;
var G__34903 = (0);
var G__34904 = (0);
seq__34705_34871 = G__34901;
chunk__34706_34872 = G__34902;
count__34707_34873 = G__34903;
i__34708_34874 = G__34904;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34731 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34732 = null;
var count__34733 = (0);
var i__34734 = (0);
while(true){
if((i__34734 < count__34733)){
var role = chunk__34732.cljs$core$IIndexed$_nth$arity$2(null,i__34734);
var temp__5753__auto___34905__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34905__$1)){
var spec_34906 = temp__5753__auto___34905__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34906)], 0));
} else {
}


var G__34907 = seq__34731;
var G__34908 = chunk__34732;
var G__34909 = count__34733;
var G__34910 = (i__34734 + (1));
seq__34731 = G__34907;
chunk__34732 = G__34908;
count__34733 = G__34909;
i__34734 = G__34910;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34731);
if(temp__5753__auto____$1){
var seq__34731__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34731__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34731__$1);
var G__34911 = cljs.core.chunk_rest(seq__34731__$1);
var G__34912 = c__5568__auto__;
var G__34913 = cljs.core.count(c__5568__auto__);
var G__34914 = (0);
seq__34731 = G__34911;
chunk__34732 = G__34912;
count__34733 = G__34913;
i__34734 = G__34914;
continue;
} else {
var role = cljs.core.first(seq__34731__$1);
var temp__5753__auto___34915__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___34915__$2)){
var spec_34920 = temp__5753__auto___34915__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34920)], 0));
} else {
}


var G__34921 = cljs.core.next(seq__34731__$1);
var G__34922 = null;
var G__34923 = (0);
var G__34924 = (0);
seq__34731 = G__34921;
chunk__34732 = G__34922;
count__34733 = G__34923;
i__34734 = G__34924;
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
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
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
var G__34925 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34926 = cljs.core.ex_cause(t);
via = G__34925;
t = G__34926;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
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
var map__34740 = datafied_throwable;
var map__34740__$1 = cljs.core.__destructure_map(map__34740);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34740__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34740__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34740__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34741 = cljs.core.last(via);
var map__34741__$1 = cljs.core.__destructure_map(map__34741);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34741__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34741__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34741__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34742 = data;
var map__34742__$1 = cljs.core.__destructure_map(map__34742);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34742__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34742__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34742__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34743 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34743__$1 = cljs.core.__destructure_map(map__34743);
var top_data = map__34743__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34743__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34750 = phase;
var G__34750__$1 = (((G__34750 instanceof cljs.core.Keyword))?G__34750.fqn:null);
switch (G__34750__$1) {
case "read-source":
var map__34751 = data;
var map__34751__$1 = cljs.core.__destructure_map(map__34751);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34751__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34751__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34752 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34752__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34752,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34752);
var G__34752__$2 = (cljs.core.truth_((function (){var fexpr__34753 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34753.cljs$core$IFn$_invoke$arity$1 ? fexpr__34753.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34753.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34752__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34752__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34752__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34752__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34766 = top_data;
var G__34766__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34766,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34766);
var G__34766__$2 = (cljs.core.truth_((function (){var fexpr__34767 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34767.cljs$core$IFn$_invoke$arity$1 ? fexpr__34767.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34767.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34766__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34766__$1);
var G__34766__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34766__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34766__$2);
var G__34766__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34766__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34766__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34766__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34766__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34768 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768,(3),null);
var G__34771 = top_data;
var G__34771__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34771,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34771);
var G__34771__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34771__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34771__$1);
var G__34771__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34771__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34771__$2);
var G__34771__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34771__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34771__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34771__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34771__$4;
}

break;
case "execution":
var vec__34772 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34739_SHARP_){
var or__5045__auto__ = (p1__34739_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__34775 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34775.cljs$core$IFn$_invoke$arity$1 ? fexpr__34775.cljs$core$IFn$_invoke$arity$1(p1__34739_SHARP_) : fexpr__34775.call(null,p1__34739_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__34776 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34776__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34776,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34776);
var G__34776__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34776__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34776__$1);
var G__34776__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34776__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34776__$2);
var G__34776__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34776__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34776__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34776__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34776__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34750__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34779){
var map__34780 = p__34779;
var map__34780__$1 = cljs.core.__destructure_map(map__34780);
var triage_data = map__34780__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__34781 = phase;
var G__34781__$1 = (((G__34781 instanceof cljs.core.Keyword))?G__34781.fqn:null);
switch (G__34781__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34782 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34783 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34784 = loc;
var G__34785 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34786_34936 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34787_34937 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34788_34938 = true;
var _STAR_print_fn_STAR__temp_val__34789_34939 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34788_34938);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34789_34939);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34777_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34777_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34787_34937);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34786_34936);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34782,G__34783,G__34784,G__34785) : format.call(null,G__34782,G__34783,G__34784,G__34785));

break;
case "macroexpansion":
var G__34809 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34810 = cause_type;
var G__34811 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34812 = loc;
var G__34813 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34809,G__34810,G__34811,G__34812,G__34813) : format.call(null,G__34809,G__34810,G__34811,G__34812,G__34813));

break;
case "compile-syntax-check":
var G__34814 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34815 = cause_type;
var G__34816 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34817 = loc;
var G__34818 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34814,G__34815,G__34816,G__34817,G__34818) : format.call(null,G__34814,G__34815,G__34816,G__34817,G__34818));

break;
case "compilation":
var G__34819 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34820 = cause_type;
var G__34821 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34822 = loc;
var G__34823 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34819,G__34820,G__34821,G__34822,G__34823) : format.call(null,G__34819,G__34820,G__34821,G__34822,G__34823));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34824 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34825 = symbol;
var G__34826 = loc;
var G__34827 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34828_34941 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34829_34942 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34830_34943 = true;
var _STAR_print_fn_STAR__temp_val__34831_34944 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34830_34943);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34831_34944);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34778_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34778_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34829_34942);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34828_34941);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34824,G__34825,G__34826,G__34827) : format.call(null,G__34824,G__34825,G__34826,G__34827));
} else {
var G__34833 = "Execution error%s at %s(%s).\n%s\n";
var G__34834 = cause_type;
var G__34835 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34836 = loc;
var G__34837 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34833,G__34834,G__34835,G__34836,G__34837) : format.call(null,G__34833,G__34834,G__34835,G__34836,G__34837));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34781__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
