goog.provide('openllm.components.nav_bar.events');
/**
 * Starts the download of a file.
 */
openllm.components.nav_bar.events.start_download_BANG_ = (function openllm$components$nav_bar$events$start_download_BANG_(file_name,content){
var blob = (new Blob([content],({"type": "text/plain"})));
var link = document.createElement("a");
(link.href = window.URL.createObjectURL(blob));

(link.download = file_name);

(link.target = "_blank");

return link.click();
});
/**
 * Returns the contents of the playground export file.
 */
openllm.components.nav_bar.events.build_playground_export_contents = (function openllm$components$nav_bar$events$build_playground_export_contents(prompt,response){
return ["Prompt: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prompt),"\n\n\n","Response: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join('');
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("openllm.components.nav-bar.events","export-button-clicked","openllm.components.nav-bar.events/export-button-clicked",-821141632),(function (cofx,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-sync","dispatch-sync",1664398243),true,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (){var active_screen = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"screen-id","screen-id",9826069)], null));
var pred__28478 = cljs.core._EQ_;
var expr__28479 = active_screen;
if(cljs.core.truth_((pred__28478.cljs$core$IFn$_invoke$arity$2 ? pred__28478.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"playground","playground",688158191),expr__28479) : pred__28478.call(null,new cljs.core.Keyword(null,"playground","playground",688158191),expr__28479)))){
var input_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"playground-input-value","playground-input-value",1271962687)], null));
var response_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"playground-last-response","playground-last-response",952245930)], null));
return openllm.components.nav_bar.events.start_download_BANG_("export-playground.txt",openllm.components.nav_bar.events.build_playground_export_contents(input_value,response_value));
} else {
if(cljs.core.truth_((pred__28478.cljs$core$IFn$_invoke$arity$2 ? pred__28478.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chat","chat",-518268339),expr__28479) : pred__28478.call(null,new cljs.core.Keyword(null,"chat","chat",-518268339),expr__28479)))){
var chat_history = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cofx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"chat-history","chat-history",912746146)], null));
return openllm.components.nav_bar.events.start_download_BANG_("export-chat.txt",openllm.util.chat_history__GT_string(chat_history));
} else {
return openllm.api.log4cljs.core.log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Export button clicked in unknown screen."], 0));
}
}
})()], null);
}));

//# sourceMappingURL=openllm.components.nav_bar.events.js.map
