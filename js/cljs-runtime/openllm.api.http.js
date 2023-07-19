goog.provide('openllm.api.http');
openllm.api.http.api_base_url = "http://localhost:3000";
/**
 * Returns the URI for the given endpoint.
 */
openllm.api.http.get_uri = (function openllm$api$http$get_uri(endpoint){
return [openllm.api.http.api_base_url,cljs.core.str.cljs$core$IFn$_invoke$arity$1(endpoint)].join('');
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.api.http","v1-generate","openllm.api.http/v1-generate",1611535773),cljs.core.PersistentVector.EMPTY,(function (_,p__39940){
var vec__39941 = p__39940;
var seq__39942 = cljs.core.seq(vec__39941);
var first__39943 = cljs.core.first(seq__39942);
var seq__39942__$1 = cljs.core.next(seq__39942);
var ___$1 = first__39943;
var first__39943__$1 = cljs.core.first(seq__39942__$1);
var seq__39942__$2 = cljs.core.next(seq__39942__$1);
var prompt = first__39943__$1;
var first__39943__$2 = cljs.core.first(seq__39942__$2);
var seq__39942__$3 = cljs.core.next(seq__39942__$2);
var llm_config = first__39943__$2;
var map__39944 = seq__39942__$3;
var map__39944__$1 = cljs.core.__destructure_map(map__39944);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39944__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39944__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),openllm.api.http.get_uri("/v1/generate"),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prompt","prompt",-78109487),prompt,new cljs.core.Keyword(null,"llm_config","llm_config",2014551170),llm_config], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.api.http","v1-metadata","openllm.api.http/v1-metadata",1130086212),cljs.core.PersistentVector.EMPTY,(function (_,p__39945){
var vec__39946 = p__39945;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39946,(0),null);
var json = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39946,(1),null);
var map__39949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39946,(2),null);
var map__39949__$1 = cljs.core.__destructure_map(map__39949);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39949__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39949__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),openllm.api.http.get_uri("/v1/metadata"),new cljs.core.Keyword(null,"params","params",710516235),json,new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.text_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure], null)], null);
}));

//# sourceMappingURL=openllm.api.http.js.map
