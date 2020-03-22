goog.provide('re_frame_project.event_handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"components","components",-1073188942),(32),new cljs.core.Keyword(null,"depth","depth",1768663640),(32),new cljs.core.Keyword(null,"shared-value","shared-value",360537419),(0)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"double-up","double-up",508965479),(function (db,p__51956){
var vec__51957 = p__51956;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51957,(0),null);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51957,(1),null);
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51957,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),param], null),func);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"increment-shared-value","increment-shared-value",205536452),(function (db,p__51964){
var vec__51967 = p__51964;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51967,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51967,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared-value","shared-value",360537419)], null),cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"change","change",-1163046502),(function (db,p__51972){
var vec__51973 = p__51972;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51973,(0),null);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51973,(1),null);
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51973,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),param], null),func);
}));

//# sourceMappingURL=re_frame_project.event_handlers.js.map
