goog.provide('re_frame_project.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frame_project.view.app');
goog.require('re_frame_project.interop');
goog.require('re_frame_project.query');
goog.require('re_frame_project.event_handlers');
re_frame_project.main.do_render = (function re_frame_project$main$do_render(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_project.view.app.global_state_app], null),re_frame_project.interop.get_element_by_id_BANG_("app"));
});
re_frame_project.main.reload = (function re_frame_project$main$reload(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Dev Reload"], 0));

return re_frame_project.main.do_render();
});
re_frame_project.main.main_BANG_ = (function re_frame_project$main$main_BANG_(){
var G__52023_52024 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__52023_52024) : re_frame.core.dispatch_sync.call(null,G__52023_52024));

return re_frame_project.main.do_render();
});

//# sourceMappingURL=re_frame_project.main.js.map
