goog.provide('openllm.events');
/**
 * Throws an exception if `db` does not match the Spec `a-spec`. Acts as a helper
 * for our spec checking interceptor.
 */
openllm.events.check_and_throw = (function openllm$events$check_and_throw(a_spec,db){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(a_spec,db)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["spec check failed: ",cljs.spec.alpha.explain_str(a_spec,db)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * The interceptor we will use to check the app-db after each event handler runs.
 * It will check that the app-db is valid against the spec `::db`.
 */
openllm.events.check_spec_interceptor = re_frame.core.after(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(openllm.events.check_and_throw,new cljs.core.Keyword("openllm.db","db","openllm.db/db",2117056544)));
re_frame.core.reg_cofx(new cljs.core.Keyword(null,"time-now","time-now",-206239031),(function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"time-now","time-now",-206239031),(new Date()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (_,___$1){
return openllm.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-screen-id","set-screen-id",1546638493),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__28632){
var vec__28633 = p__28632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28633,(0),null);
var new_screen_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28633,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"screen-id","screen-id",9826069),new_screen_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-api-base-url","set-api-base-url",1299802764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.events.check_spec_interceptor], null),(function (db,p__28636){
var vec__28637 = p__28636;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28637,(0),null);
var new_api_base_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28637,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"api-base-url","api-base-url",-307501116),new_api_base_url);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("openllm.events","open-link-in-new-tab","openllm.events/open-link-in-new-tab",661144162),(function (_,p__28640){
var vec__28641 = p__28640;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28641,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28641,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),window.open(url,"_blank")], null);
}));

//# sourceMappingURL=openllm.events.js.map
