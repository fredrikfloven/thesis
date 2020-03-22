goog.provide('reagent_project.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent_project.view.app');
goog.require('reagent_project.interop');
reagent_project.main.do_render = (function reagent_project$main$do_render(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_project.view.app.relative_state_app], null),reagent_project.interop.get_element_by_id_BANG_("app"));
});
reagent_project.main.reload = (function reagent_project$main$reload(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Dev Reload"], 0));

return reagent_project.main.do_render();
});
reagent_project.main.main_BANG_ = (function reagent_project$main$main_BANG_(){
return reagent_project.main.do_render();
});

//# sourceMappingURL=reagent_project.main.js.map
