goog.provide('openllm.api.events');
openllm.api.events.api_base_url = "http://localhost:3000";
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.api.events","v1-generate","openllm.api.events/v1-generate",361425004),cljs.core.PersistentVector.EMPTY,(function (_,p__38079){
var vec__38080 = p__38079;
var seq__38081 = cljs.core.seq(vec__38080);
var first__38082 = cljs.core.first(seq__38081);
var seq__38081__$1 = cljs.core.next(seq__38081);
var ___$1 = first__38082;
var first__38082__$1 = cljs.core.first(seq__38081__$1);
var seq__38081__$2 = cljs.core.next(seq__38081__$1);
var prompt = first__38082__$1;
var first__38082__$2 = cljs.core.first(seq__38081__$2);
var seq__38081__$3 = cljs.core.next(seq__38081__$2);
var llm_config = first__38082__$2;
var map__38083 = seq__38081__$3;
var map__38083__$1 = cljs.core.__destructure_map(map__38083);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38083__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38083__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[openllm.api.events.api_base_url,"/v1/generate"].join(''),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prompt","prompt",-78109487),prompt,new cljs.core.Keyword(null,"llm_config","llm_config",2014551170),llm_config], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.api.events","v1-metadata","openllm.api.events/v1-metadata",-1427043565),cljs.core.PersistentVector.EMPTY,(function (_,p__38084){
var vec__38085 = p__38084;
var seq__38086 = cljs.core.seq(vec__38085);
var first__38087 = cljs.core.first(seq__38086);
var seq__38086__$1 = cljs.core.next(seq__38086);
var ___$1 = first__38087;
var map__38088 = seq__38086__$1;
var map__38088__$1 = cljs.core.__destructure_map(map__38088);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38088__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38088__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[openllm.api.events.api_base_url,"/v1/metadata"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure], null)], null);
}));

//# sourceMappingURL=openllm.api.events.js.map
