goog.provide('openllm.components.side_bar.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.side-bar.subs","side-bar-open?","openllm.components.side-bar.subs/side-bar-open?",1372785530),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.subs","side-bar-db","openllm.components.subs/side-bar-db",1251430751)], null),(function (side_bar_db,_){
return new cljs.core.Keyword(null,"side-bar-open?","side-bar-open?",-842217809).cljs$core$IFn$_invoke$arity$1(side_bar_db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.side-bar.subs","model-selection-db","openllm.components.side-bar.subs/model-selection-db",1775732399),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.subs","side-bar-db","openllm.components.subs/side-bar-db",1251430751)], null),(function (side_bar_db,_){
return new cljs.core.Keyword(null,"model-selection-db","model-selection-db",232338294).cljs$core$IFn$_invoke$arity$1(side_bar_db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.side-bar.subs","model-params-db","openllm.components.side-bar.subs/model-params-db",627352530),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.subs","side-bar-db","openllm.components.subs/side-bar-db",1251430751)], null),(function (side_bar_db,_){
return new cljs.core.Keyword(null,"model-params-db","model-params-db",-916825849).cljs$core$IFn$_invoke$arity$1(side_bar_db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.side-bar.subs","tooltip-text-collapse-sidebar","openllm.components.side-bar.subs/tooltip-text-collapse-sidebar",-949577152),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.subs","side-bar-open?","openllm.components.side-bar.subs/side-bar-open?",1372785530)], null),(function (side_bar_open_QMARK_,_){
return [(cljs.core.truth_(side_bar_open_QMARK_)?"Collapse":"Expand")," side bar"].join('');
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("openllm.components.side-bar.subs","collapse-icon","openllm.components.side-bar.subs/collapse-icon",372002502),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("openllm.components.side-bar.subs","side-bar-open?","openllm.components.side-bar.subs/side-bar-open?",1372785530)], null),(function (side_bar_open_QMARK_,_){
if(cljs.core.truth_(side_bar_open_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.keyboard_double_arrow_right.keyboard_double_arrow_right,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px"], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.icons.keyboard_double_arrow_left.keyboard_double_arrow_left,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px"], null)], null)], null);
}
})], 0));

//# sourceMappingURL=openllm.components.side_bar.subs.js.map
