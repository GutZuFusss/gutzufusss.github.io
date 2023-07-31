goog.provide('openllm.api.persistence');
openllm.api.persistence.idb_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db-name","db-name",1157928745),"OpenLLM_clj_GutZuFusss",new cljs.core.Keyword(null,"db-version","db-version",2088342971),(1)], null);
openllm.api.persistence.idb_table_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"chat-history",new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"user",new cljs.core.Keyword(null,"unique","unique",329397282),false], null)], null)], null);
openllm.api.persistence.obj_store_fqn = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db-name","db-name",1157928745),cljs.core.get.cljs$core$IFn$_invoke$arity$2(openllm.api.persistence.idb_info,new cljs.core.Keyword(null,"db-name","db-name",1157928745)),new cljs.core.Keyword(null,"os-name","os-name",-2109973734),cljs.core.get.cljs$core$IFn$_invoke$arity$2(openllm.api.persistence.idb_table_info,new cljs.core.Keyword(null,"name","name",1843675177))], null);
/**
 * Passed as the callback function to `idb/initialize!` to set the
 * :idb key in the app-db.
 * 
 * This function also dispatches the `::sync-chat-history` event to
 * populate the chat history in the app-db with the data from the
 * IndexedDB database.
 */
openllm.api.persistence.on_db_initialized = (function openllm$api$persistence$on_db_initialized(){
openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["IndexedDB database initialized"], 0));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.api.persistence","sync-chat-history","openllm.api.persistence/sync-chat-history",779634504)], null));
});
/**
 * Initializes the IndexedDB database and creates the object store
 * if it does not exist.
 * 
 * This function notably registers the `on-db-initialized` function
 * as a callback function to be called when the IndexedDB database
 * is initialized.
 */
openllm.api.persistence.init_idb = (function openllm$api$persistence$init_idb(){
openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing IndexedDB database..."], 0));

return openllm.api.indexed_db.core.initialize_BANG_.cljs$core$IFn$_invoke$arity$3(openllm.api.persistence.idb_info,openllm.api.persistence.idb_table_info,openllm.api.persistence.on_db_initialized);
});
/**
 * Takes the chat history from the IndexedDB database and cleans it
 * up to be used in the app-db.
 * 
 * First, the `:id` key is removed from each message, and then the
 * values belonging to the `:user` keys are converted to a keyword.
 * Finally, the chat history is converted to a vector.
 */
openllm.api.persistence.chat_history__GT_sanitized = (function openllm$api$persistence$chat_history__GT_sanitized(chat_history){
var mapping_fn = (function (message){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(message,new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(message)));
});
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mapping_fn,chat_history));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.api.persistence","add-to-indexed-db-history","openllm.api.persistence/add-to-indexed-db-history",-504590727),cljs.core.PersistentVector.EMPTY,(function (_,p__39204){
var vec__39205 = p__39204;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39205,(0),null);
var timestamp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39205,(1),null);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39205,(2),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39205,(3),null);
return openllm.api.indexed_db.core.os_add_BANG_(openllm.api.persistence.obj_store_fqn,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"text","text",-1790561697),message,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),timestamp], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("openllm.api.persistence","set-chat-history-app-db","openllm.api.persistence/set-chat-history-app-db",-1452723315),(function (db,p__39208){
var vec__39209 = p__39208;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39209,(0),null);
var chat_history = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39209,(1),null);
var clean_chat_history = openllm.api.persistence.chat_history__GT_sanitized(chat_history);
openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"debug","debug",-1608172596),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Synchronized chat history with IndexedDB database, loaded",cljs.core.count(clean_chat_history),"messages."], 0));

return cljs.core.assoc_in(db,openllm.components.chat.db.key_seq.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chat-history","chat-history",912746146)], 0)),clean_chat_history);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.api.persistence","sync-chat-history","openllm.api.persistence/sync-chat-history",779634504),cljs.core.PersistentVector.EMPTY,(function (_,p__39213){
var vec__39214 = p__39213;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39214,(0),null);
var callback_fn = (function (result){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.api.persistence","set-chat-history-app-db","openllm.api.persistence/set-chat-history-app-db",-1452723315),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], null));
});
return openllm.api.indexed_db.core.os_get_all(openllm.api.persistence.obj_store_fqn,callback_fn);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("openllm.api.persistence","clear-chat-history","openllm.api.persistence/clear-chat-history",908737784),cljs.core.PersistentVector.EMPTY,(function (_,p__39217){
var vec__39219 = p__39217;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39219,(0),null);
return openllm.api.indexed_db.core.wipe_object_store_BANG_(openllm.api.persistence.obj_store_fqn);
}));

//# sourceMappingURL=openllm.api.persistence.js.map
