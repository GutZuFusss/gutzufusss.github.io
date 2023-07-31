goog.provide('openllm.components.model_selection.events');
re_frame.core.reg_cofx(new cljs.core.Keyword("openllm.components.model-selection.events","model-data-json-parsed","openllm.components.model-selection.events/model-data-json-parsed",-1707646491),(function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"model-data-json-parsed","model-data-json-parsed",2013443817),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse("{\r\n  \"flan-t5\": {\r\n    \"model_id\": [\r\n      \"google/flan-t5-small\",\r\n      \"google/flan-t5-base\",\r\n      \"google/flan-t5-large\",\r\n      \"google/flan-t5-xl\",\r\n      \"google/flan-t5-xxl\"\r\n    ],\r\n    \"url\": \"https://huggingface.co/docs/transformers/model_doc/flan-t5\",\r\n    \"requires_gpu\": false,\r\n    \"runtime_impl\": [\r\n      \"pt\",\r\n      \"flax\",\r\n      \"tf\"\r\n    ],\r\n    \"installation\": \"pip install \\\"openllm[flan-t5]\\\"\"\r\n  },\r\n  \"dolly-v2\": {\r\n    \"model_id\": [\r\n      \"databricks/dolly-v2-3b\",\r\n      \"databricks/dolly-v2-7b\",\r\n      \"databricks/dolly-v2-12b\"\r\n    ],\r\n    \"url\": \"https://github.com/databrickslabs/dolly\",\r\n    \"requires_gpu\": false,\r\n    \"runtime_impl\": [\r\n      \"pt\"\r\n    ],\r\n    \"installation\": \"pip install openllm\"\r\n  },\r\n  \"chatglm\": {\r\n    \"model_id\": [\r\n      \"thudm/chatglm-6b\",\r\n      \"thudm/chatglm-6b-int8\",\r\n      \"thudm/chatglm-6b-int4\"\r\n    ],\r\n    \"url\": \"https://github.com/THUDM/ChatGLM-6B\",\r\n    \"requires_gpu\": true,\r\n    \"runtime_impl\": [\r\n      \"pt\"\r\n    ],\r\n    \"installation\": \"pip install \\\"openllm[chatglm]\\\"\"\r\n  },\r\n  \"starcoder\": {\r\n    \"model_id\": [\r\n      \"bigcode/starcoder\",\r\n      \"bigcode/starcoderbase\"\r\n    ],\r\n    \"url\": \"https://github.com/bigcode-project/starcoder\",\r\n    \"requires_gpu\": true,\r\n    \"runtime_impl\": [\r\n      \"pt\"\r\n    ],\r\n    \"installation\": \"pip install \\\"openllm[starcoder]\\\"\"\r\n  },\r\n  \"falcon\": {\r\n    \"model_id\": [\r\n      \"tiiuae/falcon-7b\",\r\n      \"tiiuae/falcon-40b\",\r\n      \"tiiuae/falcon-7b-instruct\",\r\n      \"tiiuae/falcon-40b-instruct\"\r\n    ],\r\n    \"url\": \"https://falconllm.tii.ae/\",\r\n    \"requires_gpu\": true,\r\n    \"runtime_impl\": [\r\n      \"pt\"\r\n    ],\r\n    \"installation\": \"pip install \\\"openllm[falcon]\\\"\"\r\n  },\r\n  \"stablelm\": {\r\n    \"model_id\": [\r\n      \"stabilityai/stablelm-tuned-alpha-3b\",\r\n      \"stabilityai/stablelm-tuned-alpha-7b\",\r\n      \"stabilityai/stablelm-base-alpha-3b\",\r\n      \"stabilityai/stablelm-base-alpha-7b\"\r\n    ],\r\n    \"url\": \"https://github.com/Stability-AI/StableLM\",\r\n    \"requires_gpu\": false,\r\n    \"runtime_impl\": [\r\n      \"pt\"\r\n    ],\r\n    \"installation\": \"pip install openllm\"\r\n  },\r\n  \"opt\": {\r\n    \"model_id\": [\r\n      \"facebook/opt-125m\",\r\n      \"facebook/opt-350m\",\r\n      \"facebook/opt-1.3b\",\r\n      \"facebook/opt-2.7b\",\r\n      \"facebook/opt-6.7b\",\r\n      \"facebook/opt-66b\"\r\n    ],\r\n    \"url\": \"https://huggingface.co/docs/transformers/model_doc/opt\",\r\n    \"requires_gpu\": false,\r\n    \"runtime_impl\": [\r\n      \"pt\",\r\n      \"flax\",\r\n      \"tf\"\r\n    ],\r\n    \"installation\": \"pip install openllm\"\r\n  }\r\n}\r\n"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.model-selection.events","set-model-type","openllm.components.model-selection.events/set-model-type",-1504629845),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__30994){
var vec__31005 = p__30994;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31005,(0),null);
var model_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31005,(1),null);
var ks = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(openllm.components.model_selection.db.key_seq,new cljs.core.Keyword(null,"selected-model","selected-model",1480568100));
var all_model_ids = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,openllm.components.model_selection.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-models","all-models",-326178653),model_type,new cljs.core.Keyword(null,"model_id","model_id",-2010580717)], 0)));
return cljs.core.assoc_in(cljs.core.assoc_in(db,ks(new cljs.core.Keyword(null,"model-type","model-type",398058196)),model_type),ks(new cljs.core.Keyword(null,"model-id","model-id",-467101728)),cljs.core.first(all_model_ids));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.components.model-selection.events","set-model-id","openllm.components.model-selection.events/set-model-id",1920127833),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__31018){
var vec__31019 = p__31018;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31019,(0),null);
var model_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31019,(1),null);
return cljs.core.assoc_in(db,openllm.components.model_selection.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected-model","selected-model",1480568100),new cljs.core.Keyword(null,"model-id","model-id",-467101728)], 0)),model_id);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"slurp-model-data-json","slurp-model-data-json",1104761607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor,re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("openllm.components.model-selection.events","model-data-json-parsed","openllm.components.model-selection.events/model-data-json-parsed",-1707646491))], null),(function (p__31027,_){
var map__31028 = p__31027;
var map__31028__$1 = cljs.core.__destructure_map(map__31028);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31028__$1,new cljs.core.Keyword(null,"db","db",993250759));
var model_data_json_parsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31028__$1,new cljs.core.Keyword(null,"model-data-json-parsed","model-data-json-parsed",2013443817));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var all_models = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,openllm.components.model_selection.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-models","all-models",-326178653)], 0)));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(openllm.components.model_selection.db.loading_text,all_models)) || ((all_models == null)))){
return cljs.core.assoc_in(db,openllm.components.model_selection.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"all-models","all-models",-326178653)], 0)),model_data_json_parsed);
} else {
openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Attempted to slurp and parse model data json, but the db already contained data:",all_models], 0));

return db;
}
})()], null);
}));

//# sourceMappingURL=openllm.components.model_selection.events.js.map
