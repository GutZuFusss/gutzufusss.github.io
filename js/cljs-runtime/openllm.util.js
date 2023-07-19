goog.provide('openllm.util');
/**
 * Converts a chat history to a string representation. Basically, it joins
 * the user name and the text of each entry with a colon. The entries are
 * separated by a newline.
 * Useful for building a chat prompt or exporting the chat history to a
 * file.
 * Returns the chat history as a string.
 */
openllm.util.chat_history__GT_string = (function openllm$util$chat_history__GT_string(chat_history){
var entry__GT_chat_line = (function (current_entry){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(current_entry)),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(current_entry)], null));
});
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(entry__GT_chat_line,chat_history));
});

//# sourceMappingURL=openllm.util.js.map
