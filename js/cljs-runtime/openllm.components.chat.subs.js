goog.provide('openllm.components.chat.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.chat.subs","chat-input-value","openllm.components.chat.subs/chat-input-value",-1630109332),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.subs","chat-db","openllm.components.subs/chat-db",-680579303)], null),(function (chat_db,_){
return new cljs.core.Keyword(null,"chat-input-value","chat-input-value",790175504).cljs$core$IFn$_invoke$arity$1(chat_db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.chat.subs","chat-history","openllm.components.chat.subs/chat-history",-1501250194),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.subs","chat-db","openllm.components.subs/chat-db",-680579303)], null),(function (chat_db,_){
return new cljs.core.Keyword(null,"chat-history","chat-history",912746146).cljs$core$IFn$_invoke$arity$1(chat_db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.chat.subs","modal-open?","openllm.components.chat.subs/modal-open?",2097497535),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.subs","chat-db","openllm.components.subs/chat-db",-680579303)], null),(function (chat_db,_){
return new cljs.core.Keyword(null,"layout-modal-open?","layout-modal-open?",1071362944).cljs$core$IFn$_invoke$arity$1(chat_db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.chat.subs","prompt-layout","openllm.components.chat.subs/prompt-layout",-1833402282),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.subs","chat-db","openllm.components.subs/chat-db",-680579303)], null),(function (chat_db,_){
return new cljs.core.Keyword(null,"prompt-layout","prompt-layout",-476570062).cljs$core$IFn$_invoke$arity$1(chat_db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.chat.subs","prompt","openllm.components.chat.subs/prompt",-885374803),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.subs","prompt-layout","openllm.components.chat.subs/prompt-layout",-1833402282)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.subs","chat-input-value","openllm.components.chat.subs/chat-input-value",-1630109332)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.subs","chat-history","openllm.components.chat.subs/chat-history",-1501250194)], null),(function (p__28347,_){
var vec__28357 = p__28347;
var prompt_layout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28357,(0),null);
var chat_input_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28357,(1),null);
var chat_history = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28357,(2),null);
var conversation = openllm.util.chat_history__GT_string(chat_history);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prompt_layout),"\n",conversation,"\n","user: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(chat_input_value),"\n","model: "].join('');
})], 0));

//# sourceMappingURL=openllm.components.chat.subs.js.map
