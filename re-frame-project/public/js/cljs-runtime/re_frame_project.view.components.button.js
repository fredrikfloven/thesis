goog.provide('re_frame_project.view.components.button');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame_project.view.style');
re_frame_project.view.components.button.get_style = (function re_frame_project$view$components$button$get_style(button_type){
var pred__39609 = cljs.core._EQ_;
var expr__39610 = button_type;
if(cljs.core.truth_((function (){var G__39612 = new cljs.core.Keyword(null,"secondary","secondary",-669381460);
var G__39613 = expr__39610;
return (pred__39609.cljs$core$IFn$_invoke$arity$2 ? pred__39609.cljs$core$IFn$_invoke$arity$2(G__39612,G__39613) : pred__39609.call(null,G__39612,G__39613));
})())){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.5rem","none",re_frame_project.view.style.navy,"1.125rem","all 200ms","bold",re_frame_project.view.style.transparent,"pointer","2px","4px 13px 4px 13px",re_frame_project.view.style.navy,re_frame_project.view.style.font]);
} else {
if(cljs.core.truth_((function (){var G__39614 = new cljs.core.Keyword(null,"warning","warning",-1685650671);
var G__39615 = expr__39610;
return (pred__39609.cljs$core$IFn$_invoke$arity$2 ? pred__39609.cljs$core$IFn$_invoke$arity$2(G__39614,G__39615) : pred__39609.call(null,G__39614,G__39615));
})())){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.5rem","none",re_frame_project.view.style.white,"1.125rem","all 200ms","bold",re_frame_project.view.style.darker_red,"pointer","2px","4px 13px 4px 13px",re_frame_project.view.style.darkest_red,re_frame_project.view.style.font]);
} else {
if(cljs.core.truth_((function (){var G__39616 = new cljs.core.Keyword(null,"filled","filled",1908725116);
var G__39617 = expr__39610;
return (pred__39609.cljs$core$IFn$_invoke$arity$2 ? pred__39609.cljs$core$IFn$_invoke$arity$2(G__39616,G__39617) : pred__39609.call(null,G__39616,G__39617));
})())){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.5rem",re_frame_project.view.style.white,"1.125rem","all 200ms","bold",re_frame_project.view.style.navy,"100%","pointer","6px 13px 6px 13px",re_frame_project.view.style.font]);
} else {
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.5rem",re_frame_project.view.style.white,"1.125rem","all 200ms","bold",re_frame_project.view.style.navy,"pointer","6px 13px 6px 13px",re_frame_project.view.style.font]);
}
}
}
});
re_frame_project.view.components.button.button = (function re_frame_project$view$components$button$button(p__39618){
var map__39619 = p__39618;
var map__39619__$1 = (((((!((map__39619 == null))))?(((((map__39619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39619):map__39619);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var button_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39619__$1,new cljs.core.Keyword(null,"button-type","button-type",646960816));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(type)?type:"button"),new cljs.core.Keyword(null,"style","style",-496642736),re_frame_project.view.components.button.get_style(button_type),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),label], null);
});

//# sourceMappingURL=re_frame_project.view.components.button.js.map
