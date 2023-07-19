goog.provide('openllm.components.model_selection.db');
openllm.components.model_selection.db.key_seq = (function openllm$components$model_selection$db$key_seq(var_args){
var args__5775__auto__ = [];
var len__5769__auto___29441 = arguments.length;
var i__5770__auto___29442 = (0);
while(true){
if((i__5770__auto___29442 < len__5769__auto___29441)){
args__5775__auto__.push((arguments[i__5770__auto___29442]));

var G__29443 = (i__5770__auto___29442 + (1));
i__5770__auto___29442 = G__29443;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return openllm.components.model_selection.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(openllm.components.model_selection.db.key_seq.cljs$core$IFn$_invoke$arity$variadic = (function (more_keys){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components-db","components-db",502469729),new cljs.core.Keyword(null,"model-selection-db","model-selection-db",232338294)], null),more_keys);
}));

(openllm.components.model_selection.db.key_seq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(openllm.components.model_selection.db.key_seq.cljs$lang$applyTo = (function (seq29432){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29432));
}));

openllm.components.model_selection.db.loading_text = "Loading...";
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.model-selection.db","vec-of-runtimes?","openllm.components.model-selection.db/vec-of-runtimes?",-1418473189),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29433#","p1__29433#",369690602,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"p1__29433#","p1__29433#",369690602,null),"pt"),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"p1__29433#","p1__29433#",369690602,null),"flax"),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"p1__29433#","p1__29433#",369690602,null),"tf")))),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","and","s/and",668634387,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29433#","p1__29433#",369690602,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__29433#","p1__29433#",369690602,null),"pt"),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__29433#","p1__29433#",369690602,null),"flax"),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__29433#","p1__29433#",369690602,null),"tf")))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),"pt"),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),"flax"),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),"tf")))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__29433_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__29433_SHARP_,"pt")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__29433_SHARP_,"flax")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__29433_SHARP_,"tf")))));
})], null),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29433#","p1__29433#",369690602,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"p1__29433#","p1__29433#",369690602,null),"pt"),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"p1__29433#","p1__29433#",369690602,null),"flax"),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"p1__29433#","p1__29433#",369690602,null),"tf")))),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__29434){
return cljs.core.vector_QMARK_(G__29434);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.model-selection.db","model_id","openllm.components.model-selection.db/model_id",578738244),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),cljs.core.string_QMARK_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__29435){
return cljs.core.vector_QMARK_(G__29435);
})], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.model-selection.db","url","openllm.components.model-selection.db/url",-404105337),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.model-selection.db","requires_gpu","openllm.components.model-selection.db/requires_gpu",819903899),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.model-selection.db","runtime_impl","openllm.components.model-selection.db/runtime_impl",119957754),new cljs.core.Keyword("openllm.components.model-selection.db","vec-of-runtimes?","openllm.components.model-selection.db/vec-of-runtimes?",-1418473189),new cljs.core.Keyword("openllm.components.model-selection.db","vec-of-runtimes?","openllm.components.model-selection.db/vec-of-runtimes?",-1418473189));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.model-selection.db","installation","openllm.components.model-selection.db/installation",459631815),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.model-selection.db","model-spec","openllm.components.model-selection.db/model-spec",-206090576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.model-selection.db","model_id","openllm.components.model-selection.db/model_id",578738244),new cljs.core.Keyword("openllm.components.model-selection.db","url","openllm.components.model-selection.db/url",-404105337),new cljs.core.Keyword("openllm.components.model-selection.db","requires_gpu","openllm.components.model-selection.db/requires_gpu",819903899),new cljs.core.Keyword("openllm.components.model-selection.db","runtime_impl","openllm.components.model-selection.db/runtime_impl",119957754),new cljs.core.Keyword("openllm.components.model-selection.db","installation","openllm.components.model-selection.db/installation",459631815)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.model-selection.db","model_id","openllm.components.model-selection.db/model_id",578738244),new cljs.core.Keyword("openllm.components.model-selection.db","url","openllm.components.model-selection.db/url",-404105337),new cljs.core.Keyword("openllm.components.model-selection.db","requires_gpu","openllm.components.model-selection.db/requires_gpu",819903899),new cljs.core.Keyword("openllm.components.model-selection.db","runtime_impl","openllm.components.model-selection.db/runtime_impl",119957754),new cljs.core.Keyword("openllm.components.model-selection.db","installation","openllm.components.model-selection.db/installation",459631815)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29436){
return cljs.core.map_QMARK_(G__29436);
}),(function (G__29436){
return cljs.core.contains_QMARK_(G__29436,new cljs.core.Keyword(null,"model_id","model_id",-2010580717));
}),(function (G__29436){
return cljs.core.contains_QMARK_(G__29436,new cljs.core.Keyword(null,"url","url",276297046));
}),(function (G__29436){
return cljs.core.contains_QMARK_(G__29436,new cljs.core.Keyword(null,"requires_gpu","requires_gpu",1445518316));
}),(function (G__29436){
return cljs.core.contains_QMARK_(G__29436,new cljs.core.Keyword(null,"runtime_impl","runtime_impl",1383361259));
}),(function (G__29436){
return cljs.core.contains_QMARK_(G__29436,new cljs.core.Keyword(null,"installation","installation",943147954));
})], null),(function (G__29436){
return ((cljs.core.map_QMARK_(G__29436)) && (((cljs.core.contains_QMARK_(G__29436,new cljs.core.Keyword(null,"model_id","model_id",-2010580717))) && (((cljs.core.contains_QMARK_(G__29436,new cljs.core.Keyword(null,"url","url",276297046))) && (((cljs.core.contains_QMARK_(G__29436,new cljs.core.Keyword(null,"requires_gpu","requires_gpu",1445518316))) && (((cljs.core.contains_QMARK_(G__29436,new cljs.core.Keyword(null,"runtime_impl","runtime_impl",1383361259))) && (cljs.core.contains_QMARK_(G__29436,new cljs.core.Keyword(null,"installation","installation",943147954))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.model-selection.db","model_id","openllm.components.model-selection.db/model_id",578738244),new cljs.core.Keyword("openllm.components.model-selection.db","url","openllm.components.model-selection.db/url",-404105337),new cljs.core.Keyword("openllm.components.model-selection.db","requires_gpu","openllm.components.model-selection.db/requires_gpu",819903899),new cljs.core.Keyword("openllm.components.model-selection.db","runtime_impl","openllm.components.model-selection.db/runtime_impl",119957754),new cljs.core.Keyword("openllm.components.model-selection.db","installation","openllm.components.model-selection.db/installation",459631815)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model_id","model_id",-2010580717),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"requires_gpu","requires_gpu",1445518316),new cljs.core.Keyword(null,"runtime_impl","runtime_impl",1383361259),new cljs.core.Keyword(null,"installation","installation",943147954)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"model_id","model_id",-2010580717))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"url","url",276297046))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"requires_gpu","requires_gpu",1445518316))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"runtime_impl","runtime_impl",1383361259))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"installation","installation",943147954)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.model-selection.db","all-models","openllm.components.model-selection.db/all-models",30540436),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),new cljs.core.Symbol("openllm.components.model-selection.db","loading-text","openllm.components.model-selection.db/loading-text",-933080985,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("openllm.components.model-selection.db","model-spec","openllm.components.model-selection.db/model-spec",-206090576)))),(function (){
var or__5045__auto__ = openllm.components.model_selection.db.loading_text;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("openllm.components.model-selection.db","model-spec","openllm.components.model-selection.db/model-spec",-206090576)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("openllm.components.model-selection.db","model-spec","openllm.components.model-selection.db/model-spec",-206090576)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("openllm.components.model-selection.db","model-spec","openllm.components.model-selection.db/model-spec",-206090576)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13252__auto__,v__13253__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13253__auto__,(0));
}),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("openllm.components.model-selection.db","model-spec","openllm.components.model-selection.db/model-spec",-206090576)),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__29437){
return cljs.core.map_QMARK_(G__29437);
})], null),null);
}
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.model-selection.db","selected-model","openllm.components.model-selection.db/selected-model",2098301685),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.model-selection.db","model-type","openllm.components.model-selection.db/model-type",-206863101),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29438#","p1__29438#",466753002,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"p1__29438#","p1__29438#",466753002,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"p1__29438#","p1__29438#",466753002,null),new cljs.core.Symbol("openllm.components.model-selection.db","loading-text","openllm.components.model-selection.db/loading-text",-933080985,null)))),new cljs.core.Keyword("openllm.components.model-selection.db","model-id","openllm.components.model-selection.db/model-id",-1094224369),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.model-selection.db","model-type","openllm.components.model-selection.db/model-type",-206863101),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29438#","p1__29438#",466753002,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"p1__29438#","p1__29438#",466753002,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"p1__29438#","p1__29438#",466753002,null),new cljs.core.Symbol(null,"loading-text","loading-text",751858356,null)))),new cljs.core.Keyword("openllm.components.model-selection.db","model-id","openllm.components.model-selection.db/model-id",-1094224369),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29439){
return cljs.core.map_QMARK_(G__29439);
}),(function (G__29439){
return cljs.core.contains_QMARK_(G__29439,new cljs.core.Keyword(null,"model-type","model-type",398058196));
}),(function (G__29439){
return (function (p1__29438_SHARP_){
return (((p1__29438_SHARP_ instanceof cljs.core.Keyword)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__29438_SHARP_,openllm.components.model_selection.db.loading_text)));
});
}),(function (G__29439){
return cljs.core.contains_QMARK_(G__29439,new cljs.core.Keyword(null,"model-id","model-id",-467101728));
}),(function (G__29439){
return cljs.core.string_QMARK_;
})], null),(function (G__29439){
var and__5043__auto__ = cljs.core.map_QMARK_(G__29439);
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core.contains_QMARK_(G__29439,new cljs.core.Keyword(null,"model-type","model-type",398058196));
if(and__5043__auto____$1){
var and__5043__auto____$2 = (function (p1__29438_SHARP_){
return (((p1__29438_SHARP_ instanceof cljs.core.Keyword)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__29438_SHARP_,openllm.components.model_selection.db.loading_text)));
});
if(cljs.core.truth_(and__5043__auto____$2)){
return ((cljs.core.contains_QMARK_(G__29439,new cljs.core.Keyword(null,"model-id","model-id",-467101728))) && (cljs.core.string_QMARK_));
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.model-selection.db","model-type","openllm.components.model-selection.db/model-type",-206863101),new cljs.core.Keyword("openllm.components.model-selection.db","model-id","openllm.components.model-selection.db/model-id",-1094224369)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model-type","model-type",398058196),new cljs.core.Keyword(null,"model-id","model-id",-467101728)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"model-type","model-type",398058196))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol("openllm.components.model-selection.db","loading-text","openllm.components.model-selection.db/loading-text",-933080985,null))))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"model-id","model-id",-467101728))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("openllm.components.model-selection.db","model-selection-db","openllm.components.model-selection.db/model-selection-db",-1450240699),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.model-selection.db","all-models","openllm.components.model-selection.db/all-models",30540436),new cljs.core.Keyword("openllm.components.model-selection.db","selected-model","openllm.components.model-selection.db/selected-model",2098301685)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.model-selection.db","all-models","openllm.components.model-selection.db/all-models",30540436),new cljs.core.Keyword("openllm.components.model-selection.db","selected-model","openllm.components.model-selection.db/selected-model",2098301685)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29440){
return cljs.core.map_QMARK_(G__29440);
}),(function (G__29440){
return cljs.core.contains_QMARK_(G__29440,new cljs.core.Keyword(null,"all-models","all-models",-326178653));
}),(function (G__29440){
return cljs.core.contains_QMARK_(G__29440,new cljs.core.Keyword(null,"selected-model","selected-model",1480568100));
})], null),(function (G__29440){
return ((cljs.core.map_QMARK_(G__29440)) && (((cljs.core.contains_QMARK_(G__29440,new cljs.core.Keyword(null,"all-models","all-models",-326178653))) && (cljs.core.contains_QMARK_(G__29440,new cljs.core.Keyword(null,"selected-model","selected-model",1480568100))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.model-selection.db","all-models","openllm.components.model-selection.db/all-models",30540436),new cljs.core.Keyword("openllm.components.model-selection.db","selected-model","openllm.components.model-selection.db/selected-model",2098301685)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-models","all-models",-326178653),new cljs.core.Keyword(null,"selected-model","selected-model",1480568100)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"all-models","all-models",-326178653))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"selected-model","selected-model",1480568100)))], null),null])));
openllm.components.model_selection.db.initial_db = (function openllm$components$model_selection$db$initial_db(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slurp-model-data-json","slurp-model-data-json",1104761607)], null));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all-models","all-models",-326178653),openllm.components.model_selection.db.loading_text,new cljs.core.Keyword(null,"selected-model","selected-model",1480568100),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"model-type","model-type",398058196),new cljs.core.Keyword(null,"chatglm","chatglm",1121395416),new cljs.core.Keyword(null,"model-id","model-id",-467101728),"thudm/chatglm"], null)], null);
});

//# sourceMappingURL=openllm.components.model_selection.db.js.map