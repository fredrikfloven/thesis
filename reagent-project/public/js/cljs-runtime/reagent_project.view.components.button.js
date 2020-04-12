goog.provide('reagent_project.view.components.button');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent_project.view.style');
reagent_project.view.components.button.get_style = (function reagent_project$view$components$button$get_style(button_type){
var pred__38592 = cljs.core._EQ_;
var expr__38593 = button_type;
if(cljs.core.truth_((function (){var G__38595 = new cljs.core.Keyword(null,"secondary","secondary",-669381460);
var G__38596 = expr__38593;
return (pred__38592.cljs$core$IFn$_invoke$arity$2 ? pred__38592.cljs$core$IFn$_invoke$arity$2(G__38595,G__38596) : pred__38592.call(null,G__38595,G__38596));
})())){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.5rem","none",reagent_project.view.style.navy,"1.125rem","all 200ms","bold",reagent_project.view.style.transparent,"pointer","2px","4px 13px 4px 13px",reagent_project.view.style.navy,reagent_project.view.style.font]);
} else {
if(cljs.core.truth_((function (){var G__38597 = new cljs.core.Keyword(null,"warning","warning",-1685650671);
var G__38598 = expr__38593;
return (pred__38592.cljs$core$IFn$_invoke$arity$2 ? pred__38592.cljs$core$IFn$_invoke$arity$2(G__38597,G__38598) : pred__38592.call(null,G__38597,G__38598));
})())){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.5rem","none",reagent_project.view.style.white,"1.125rem","all 200ms","bold",reagent_project.view.style.darker_red,"pointer","2px","4px 13px 4px 13px",reagent_project.view.style.darkest_red,reagent_project.view.style.font]);
} else {
if(cljs.core.truth_((function (){var G__38599 = new cljs.core.Keyword(null,"filled","filled",1908725116);
var G__38600 = expr__38593;
return (pred__38592.cljs$core$IFn$_invoke$arity$2 ? pred__38592.cljs$core$IFn$_invoke$arity$2(G__38599,G__38600) : pred__38592.call(null,G__38599,G__38600));
})())){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.5rem",reagent_project.view.style.white,"1.125rem","all 200ms","bold",reagent_project.view.style.navy,"100%","pointer","6px 13px 6px 13px",reagent_project.view.style.font]);
} else {
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.5rem",reagent_project.view.style.white,"1.125rem","all 200ms","bold",reagent_project.view.style.navy,"pointer","6px 13px 6px 13px",reagent_project.view.style.font]);
}
}
}
});
reagent_project.view.components.button.button = (function reagent_project$view$components$button$button(p__38601){
var map__38602 = p__38601;
var map__38602__$1 = (((((!((map__38602 == null))))?(((((map__38602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38602):map__38602);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38602__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38602__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38602__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var button_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38602__$1,new cljs.core.Keyword(null,"button-type","button-type",646960816));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(type)?type:"button"),new cljs.core.Keyword(null,"style","style",-496642736),reagent_project.view.components.button.get_style(button_type),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),label], null);
});

//# sourceMappingURL=reagent_project.view.components.button.js.map
