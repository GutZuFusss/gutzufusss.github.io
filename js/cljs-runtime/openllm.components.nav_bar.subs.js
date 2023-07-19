goog.provide('openllm.components.nav_bar.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.nav-bar.subs","chat-history-empty?","openllm.components.nav-bar.subs/chat-history-empty?",-2147195040),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.chat.subs","chat-history","openllm.components.chat.subs/chat-history",-1501250194)], null),(function (chat_history,_){
return cljs.core.empty_QMARK_(chat_history);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.nav-bar.subs","tooltip-text-export","openllm.components.nav-bar.subs/tooltip-text-export",814891237),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-id","screen-id",9826069)], null),(function (screen_id,_){
return ["Export ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen_id,new cljs.core.Keyword(null,"playground","playground",688158191)))?"playground data":"chat history")].join('');
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.nav-bar.subs","tooltip-text-collapse-sidebar","openllm.components.nav-bar.subs/tooltip-text-collapse-sidebar",-60265758),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.subs","side-bar-open?","openllm.components.side-bar.subs/side-bar-open?",1372785530)], null),(function (side_bar_open_QMARK_,_){
return [(cljs.core.truth_(side_bar_open_QMARK_)?"Collapse":"Expand")," side bar"].join('');
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.nav-bar.subs","collapse-icon","openllm.components.nav-bar.subs/collapse-icon",1090158744),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.subs","side-bar-open?","openllm.components.side-bar.subs/side-bar-open?",1372785530)], null),(function (side_bar_open_QMARK_,_){
if(cljs.core.truth_(side_bar_open_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.keyboard_double_arrow_right.keyboard_double_arrow_right], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.keyboard_double_arrow_left.keyboard_double_arrow_left], null);
}
})], 0));

//# sourceMappingURL=openllm.components.nav_bar.subs.js.map
