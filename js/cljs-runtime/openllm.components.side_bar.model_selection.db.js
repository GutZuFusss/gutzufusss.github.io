goog.provide('openllm.components.side_bar.model_selection.db');
/**
 * Returns the key sequence to access the model-selection-db This is useful for
 * `assoc-in` and `get-in`. The `more-keys` argument is optional and can be
 * used to access a sub-key of the model-selection-db
 * Returns the key sequence to access the model-selection-db
 */
openllm.components.side_bar.model_selection.db.key_seq = (function openllm$components$side_bar$model_selection$db$key_seq(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28418 = arguments.length;
var i__5770__auto___28419 = (0);
while(true){
if((i__5770__auto___28419 < len__5769__auto___28418)){
args__5775__auto__.push((arguments[i__5770__auto___28419]));

var G__28420 = (i__5770__auto___28419 + (1));
i__5770__auto___28419 = G__28420;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return openllm.components.side_bar.model_selection.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(openllm.components.side_bar.model_selection.db.key_seq.cljs$core$IFn$_invoke$arity$variadic = (function (more_keys){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components-db","components-db",502469729),new cljs.core.Keyword(null,"side-bar-db","side-bar-db",1420625631),new cljs.core.Keyword(null,"model-selection-db","model-selection-db",232338294)], null),more_keys);
}));

(openllm.components.side_bar.model_selection.db.key_seq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(openllm.components.side_bar.model_selection.db.key_seq.cljs$lang$applyTo = (function (seq28393){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28393));
}));

openllm.components.side_bar.model_selection.db.loading_text = "Loading...";
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","vec-of-runtimes?","openllm.components.side-bar.model-selection.db/vec-of-runtimes?",1138718644),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__28402#","p1__28402#",60398882,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"p1__28402#","p1__28402#",60398882,null),"pt"),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"p1__28402#","p1__28402#",60398882,null),"flax"),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"p1__28402#","p1__28402#",60398882,null),"tf")))),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","and","s/and",668634387,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__28402#","p1__28402#",60398882,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__28402#","p1__28402#",60398882,null),"pt"),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__28402#","p1__28402#",60398882,null),"flax"),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__28402#","p1__28402#",60398882,null),"tf")))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),"pt"),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),"flax"),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),"tf")))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__28402_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28402_SHARP_,"pt")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28402_SHARP_,"flax")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28402_SHARP_,"tf")))));
})], null),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__28402#","p1__28402#",60398882,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"p1__28402#","p1__28402#",60398882,null),"pt"),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"p1__28402#","p1__28402#",60398882,null),"flax"),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"p1__28402#","p1__28402#",60398882,null),"tf")))),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__28411){
return cljs.core.vector_QMARK_(G__28411);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model_id","openllm.components.side-bar.model-selection.db/model_id",-870961989),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.string_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__28412){
return cljs.core.vector_QMARK_(G__28412);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","url","openllm.components.side-bar.model-selection.db/url",-596925954),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","requires_gpu","openllm.components.side-bar.model-selection.db/requires_gpu",-1453961164),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","runtime_impl","openllm.components.side-bar.model-selection.db/runtime_impl",-1902084173),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","vec-of-runtimes?","openllm.components.side-bar.model-selection.db/vec-of-runtimes?",1138718644),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","vec-of-runtimes?","openllm.components.side-bar.model-selection.db/vec-of-runtimes?",1138718644));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","installation","openllm.components.side-bar.model-selection.db/installation",1674286954),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-spec","openllm.components.side-bar.model-selection.db/model-spec",1811801143),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model_id","openllm.components.side-bar.model-selection.db/model_id",-870961989),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","url","openllm.components.side-bar.model-selection.db/url",-596925954),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","requires_gpu","openllm.components.side-bar.model-selection.db/requires_gpu",-1453961164),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","runtime_impl","openllm.components.side-bar.model-selection.db/runtime_impl",-1902084173),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","installation","openllm.components.side-bar.model-selection.db/installation",1674286954)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model_id","openllm.components.side-bar.model-selection.db/model_id",-870961989),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","url","openllm.components.side-bar.model-selection.db/url",-596925954),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","requires_gpu","openllm.components.side-bar.model-selection.db/requires_gpu",-1453961164),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","runtime_impl","openllm.components.side-bar.model-selection.db/runtime_impl",-1902084173),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","installation","openllm.components.side-bar.model-selection.db/installation",1674286954)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__28413){
return cljs.core.map_QMARK_(G__28413);
}),(function (G__28413){
return cljs.core.contains_QMARK_(G__28413,new cljs.core.Keyword(null,"model_id","model_id",-2010580717));
}),(function (G__28413){
return cljs.core.contains_QMARK_(G__28413,new cljs.core.Keyword(null,"url","url",276297046));
}),(function (G__28413){
return cljs.core.contains_QMARK_(G__28413,new cljs.core.Keyword(null,"requires_gpu","requires_gpu",1445518316));
}),(function (G__28413){
return cljs.core.contains_QMARK_(G__28413,new cljs.core.Keyword(null,"runtime_impl","runtime_impl",1383361259));
}),(function (G__28413){
return cljs.core.contains_QMARK_(G__28413,new cljs.core.Keyword(null,"installation","installation",943147954));
})], null),(function (G__28413){
return ((cljs.core.map_QMARK_(G__28413)) && (((cljs.core.contains_QMARK_(G__28413,new cljs.core.Keyword(null,"model_id","model_id",-2010580717))) && (((cljs.core.contains_QMARK_(G__28413,new cljs.core.Keyword(null,"url","url",276297046))) && (((cljs.core.contains_QMARK_(G__28413,new cljs.core.Keyword(null,"requires_gpu","requires_gpu",1445518316))) && (((cljs.core.contains_QMARK_(G__28413,new cljs.core.Keyword(null,"runtime_impl","runtime_impl",1383361259))) && (cljs.core.contains_QMARK_(G__28413,new cljs.core.Keyword(null,"installation","installation",943147954))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model_id","openllm.components.side-bar.model-selection.db/model_id",-870961989),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","url","openllm.components.side-bar.model-selection.db/url",-596925954),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","requires_gpu","openllm.components.side-bar.model-selection.db/requires_gpu",-1453961164),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","runtime_impl","openllm.components.side-bar.model-selection.db/runtime_impl",-1902084173),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","installation","openllm.components.side-bar.model-selection.db/installation",1674286954)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model_id","model_id",-2010580717),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"requires_gpu","requires_gpu",1445518316),new cljs.core.Keyword(null,"runtime_impl","runtime_impl",1383361259),new cljs.core.Keyword(null,"installation","installation",943147954)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"model_id","model_id",-2010580717))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"url","url",276297046))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"requires_gpu","requires_gpu",1445518316))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"runtime_impl","runtime_impl",1383361259))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"installation","installation",943147954)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","all-models","openllm.components.side-bar.model-selection.db/all-models",674928395),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),new cljs.core.Symbol("openllm.components.side-bar.model-selection.db","loading-text","openllm.components.side-bar.model-selection.db/loading-text",1625673468,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-spec","openllm.components.side-bar.model-selection.db/model-spec",1811801143)))),(function (){
var or__5045__auto__ = openllm.components.side_bar.model_selection.db.loading_text;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-spec","openllm.components.side-bar.model-selection.db/model-spec",1811801143)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-spec","openllm.components.side-bar.model-selection.db/model-spec",1811801143)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-spec","openllm.components.side-bar.model-selection.db/model-spec",1811801143)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13371__auto__,v__13372__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13372__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-spec","openllm.components.side-bar.model-selection.db/model-spec",1811801143)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__28414){
return cljs.core.map_QMARK_(G__28414);
})], null),null);
}
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","selected-model","openllm.components.side-bar.model-selection.db/selected-model",344654172),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-type","openllm.components.side-bar.model-selection.db/model-type",-601483396),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__28415#","p1__28415#",20316604,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"p1__28415#","p1__28415#",20316604,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"p1__28415#","p1__28415#",20316604,null),new cljs.core.Symbol("openllm.components.side-bar.model-selection.db","loading-text","openllm.components.side-bar.model-selection.db/loading-text",1625673468,null)))),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-id","openllm.components.side-bar.model-selection.db/model-id",1446825112),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-type","openllm.components.side-bar.model-selection.db/model-type",-601483396),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__28415#","p1__28415#",20316604,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"p1__28415#","p1__28415#",20316604,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__28415#","p1__28415#",20316604,null),new cljs.core.Symbol(null,"loading-text","loading-text",751858356,null)))),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-id","openllm.components.side-bar.model-selection.db/model-id",1446825112),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__28416){
return cljs.core.map_QMARK_(G__28416);
}),(function (G__28416){
return cljs.core.contains_QMARK_(G__28416,new cljs.core.Keyword(null,"model-type","model-type",398058196));
}),(function (G__28416){
return (function (p1__28415_SHARP_){
return (((p1__28415_SHARP_ instanceof cljs.core.Keyword)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28415_SHARP_,openllm.components.side_bar.model_selection.db.loading_text)));
});
}),(function (G__28416){
return cljs.core.contains_QMARK_(G__28416,new cljs.core.Keyword(null,"model-id","model-id",-467101728));
}),(function (G__28416){
return cljs.core.string_QMARK_;
})], null),(function (G__28416){
var and__5043__auto__ = cljs.core.map_QMARK_(G__28416);
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core.contains_QMARK_(G__28416,new cljs.core.Keyword(null,"model-type","model-type",398058196));
if(and__5043__auto____$1){
var and__5043__auto____$2 = (function (p1__28415_SHARP_){
return (((p1__28415_SHARP_ instanceof cljs.core.Keyword)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28415_SHARP_,openllm.components.side_bar.model_selection.db.loading_text)));
});
if(cljs.core.truth_(and__5043__auto____$2)){
return ((cljs.core.contains_QMARK_(G__28416,new cljs.core.Keyword(null,"model-id","model-id",-467101728))) && (cljs.core.string_QMARK_));
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-type","openllm.components.side-bar.model-selection.db/model-type",-601483396),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-id","openllm.components.side-bar.model-selection.db/model-id",1446825112)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model-type","model-type",398058196),new cljs.core.Keyword(null,"model-id","model-id",-467101728)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"model-type","model-type",398058196))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol("openllm.components.side-bar.model-selection.db","loading-text","openllm.components.side-bar.model-selection.db/loading-text",1625673468,null))))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"model-id","model-id",-467101728))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","model-selection-db","openllm.components.side-bar.model-selection.db/model-selection-db",1108706750),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","all-models","openllm.components.side-bar.model-selection.db/all-models",674928395),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","selected-model","openllm.components.side-bar.model-selection.db/selected-model",344654172)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","all-models","openllm.components.side-bar.model-selection.db/all-models",674928395),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","selected-model","openllm.components.side-bar.model-selection.db/selected-model",344654172)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__28417){
return cljs.core.map_QMARK_(G__28417);
}),(function (G__28417){
return cljs.core.contains_QMARK_(G__28417,new cljs.core.Keyword(null,"all-models","all-models",-326178653));
}),(function (G__28417){
return cljs.core.contains_QMARK_(G__28417,new cljs.core.Keyword(null,"selected-model","selected-model",1480568100));
})], null),(function (G__28417){
return ((cljs.core.map_QMARK_(G__28417)) && (((cljs.core.contains_QMARK_(G__28417,new cljs.core.Keyword(null,"all-models","all-models",-326178653))) && (cljs.core.contains_QMARK_(G__28417,new cljs.core.Keyword(null,"selected-model","selected-model",1480568100))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","all-models","openllm.components.side-bar.model-selection.db/all-models",674928395),new cljs.core.Keyword("openllm.components.side-bar.model-selection.db","selected-model","openllm.components.side-bar.model-selection.db/selected-model",344654172)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-models","all-models",-326178653),new cljs.core.Keyword(null,"selected-model","selected-model",1480568100)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"all-models","all-models",-326178653))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"selected-model","selected-model",1480568100)))], null),null])));
/**
 * Initial values for this branch of the app-db.
 * Triggers the loading of the model data by dispatching the `:slurp-model-data-json`
 * event.
 */
openllm.components.side_bar.model_selection.db.initial_db = (function openllm$components$side_bar$model_selection$db$initial_db(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slurp-model-data-json","slurp-model-data-json",1104761607)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-metadata-endpoint","fetch-metadata-endpoint",1197144079)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all-models","all-models",-326178653),openllm.components.side_bar.model_selection.db.loading_text,new cljs.core.Keyword(null,"selected-model","selected-model",1480568100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"model-type","model-type",398058196),openllm.components.side_bar.model_selection.db.loading_text,new cljs.core.Keyword(null,"model-id","model-id",-467101728),openllm.components.side_bar.model_selection.db.loading_text], null)], null);
});

//# sourceMappingURL=openllm.components.side_bar.model_selection.db.js.map
