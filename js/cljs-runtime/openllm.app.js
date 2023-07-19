goog.provide('openllm.app');
openllm.app.openllm_theme = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(reagent_mui.colors.common),new cljs.core.Keyword(null,"light","light",1918998747),cljs.core.get.cljs$core$IFn$_invoke$arity$2(reagent_mui.colors.grey,(800)),new cljs.core.Keyword(null,"dark","dark",1818973999),cljs.core.get.cljs$core$IFn$_invoke$arity$2(reagent_mui.colors.deep_purple,(900))], null),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"white","white",-483998618).cljs$core$IFn$_invoke$arity$1(reagent_mui.colors.common),new cljs.core.Keyword(null,"light","light",1918998747),cljs.core.get.cljs$core$IFn$_invoke$arity$2(reagent_mui.colors.grey,(200)),new cljs.core.Keyword(null,"dark","dark",1818973999),cljs.core.get.cljs$core$IFn$_invoke$arity$2(reagent_mui.colors.grey,(800))], null),new cljs.core.Keyword(null,"error","error",-978969032),reagent_mui.colors.red], null)], null);
/**
 * The main app component, which is rendered into the DOM. This component
 * just wraps the dashboard component, which is the effective root
 * component of the application.
 */
openllm.app.app = (function openllm$app$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.css_baseline.css_baseline], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.styles.theme_provider,reagent_mui.styles.create_theme(openllm.app.openllm_theme),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.views.dashboard], null)], null)], null);
});
if((typeof openllm !== 'undefined') && (typeof openllm.app !== 'undefined') && (typeof openllm.app.root !== 'undefined')){
} else {
openllm.app.root = reagent.dom.client.create_root(document.getElementById("app"));
}
/**
 * Starts the app by rendering the app component into the DOM. This
 * function is the root rendering function, and is called by the
 * `init` function right after the databases are initialized.
 */
openllm.app.start = (function openllm$app$start(){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(openllm.app.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [openllm.app.app], null));
});
/**
 * This init function is called exactly once when the page loads.
 * Responsible for initializing the app-db as well as the IndexedDB
 * (persistent) database.
 * 
 * This marks the entry point of the application, and is called by shadow-cljs
 * directly.
 */
openllm.app.init = (function openllm$app$init(){
cljs.core.enable_console_print_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null));

openllm.api.persistence.init_idb();

return openllm.app.start();
});

//# sourceMappingURL=openllm.app.js.map
