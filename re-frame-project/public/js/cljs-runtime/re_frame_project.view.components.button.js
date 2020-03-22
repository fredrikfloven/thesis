goog.provide('re_frame_project.view.components.button');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame_project.view.style');
re_frame_project.view.components.button.get_style = (function re_frame_project$view$components$button$get_style(button_type,pressed,hovered){
var pred__51720 = cljs.core._EQ_;
var expr__51721 = button_type;
if(cljs.core.truth_((function (){var G__51723 = new cljs.core.Keyword(null,"secondary","secondary",-669381460);
var G__51724 = expr__51721;
return (pred__51720.cljs$core$IFn$_invoke$arity$2 ? pred__51720.cljs$core$IFn$_invoke$arity$2(G__51723,G__51724) : pred__51720.call(null,G__51723,G__51724));
})())){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.5rem",(cljs.core.truth_(pressed)?"inset 0 0 0 1px #00325c":(cljs.core.truth_(hovered)?"inset 0 0 0 1px #00427a":"none"
)),(cljs.core.truth_(pressed)?re_frame_project.view.style.dark_blue:(cljs.core.truth_(hovered)?re_frame_project.view.style.navy:re_frame_project.view.style.navy
)),"1.125rem","all 200ms","bold",(cljs.core.truth_(pressed)?re_frame_project.view.style.light_blue:(cljs.core.truth_(hovered)?re_frame_project.view.style.transparent:re_frame_project.view.style.transparent
)),"pointer","2px","4px 13px 4px 13px",(cljs.core.truth_(pressed)?re_frame_project.view.style.light_blue:(cljs.core.truth_(hovered)?re_frame_project.view.style.navy:re_frame_project.view.style.navy
)),re_frame_project.view.style.font]);
} else {
if(cljs.core.truth_((function (){var G__51728 = new cljs.core.Keyword(null,"warning","warning",-1685650671);
var G__51729 = expr__51721;
return (pred__51720.cljs$core$IFn$_invoke$arity$2 ? pred__51720.cljs$core$IFn$_invoke$arity$2(G__51728,G__51729) : pred__51720.call(null,G__51728,G__51729));
})())){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.5rem",(cljs.core.truth_(pressed)?"inset 0 0 0 1px #00325c":(cljs.core.truth_(hovered)?"inset 0 0 0 1px #00427a":"none"
)),re_frame_project.view.style.white,"1.125rem","all 200ms","bold",(cljs.core.truth_(pressed)?re_frame_project.view.style.red:re_frame_project.view.style.darker_red
),"pointer","2px","4px 13px 4px 13px",re_frame_project.view.style.darkest_red,re_frame_project.view.style.font]);
} else {
if(cljs.core.truth_((function (){var G__51730 = new cljs.core.Keyword(null,"filled","filled",1908725116);
var G__51731 = expr__51721;
return (pred__51720.cljs$core$IFn$_invoke$arity$2 ? pred__51720.cljs$core$IFn$_invoke$arity$2(G__51730,G__51731) : pred__51720.call(null,G__51730,G__51731));
})())){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.5rem",re_frame_project.view.style.white,"1.125rem","all 200ms","bold",(cljs.core.truth_(pressed)?re_frame_project.view.style.darker_red:(cljs.core.truth_(hovered)?re_frame_project.view.style.dark_blue:re_frame_project.view.style.navy
)),"100%","pointer","6px 13px 6px 13px",re_frame_project.view.style.font]);
} else {
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.5rem",re_frame_project.view.style.white,"1.125rem","all 200ms","bold",(cljs.core.truth_(pressed)?re_frame_project.view.style.darker_red:(cljs.core.truth_(hovered)?re_frame_project.view.style.dark_blue:re_frame_project.view.style.navy
)),"pointer","6px 13px 6px 13px",re_frame_project.view.style.font]);
}
}
}
});
re_frame_project.view.components.button.button = (function re_frame_project$view$components$button$button(arg_map){
var local_state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hovered","hovered",399068143),false,new cljs.core.Keyword(null,"pressed","pressed",1100937946),false], null));
return ((function (local_state_atom){
return (function (p__51751){
var map__51752 = p__51751;
var map__51752__$1 = (((((!((map__51752 == null))))?(((((map__51752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51752):map__51752);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51752__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51752__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51752__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var button_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51752__$1,new cljs.core.Keyword(null,"button-type","button-type",646960816));
var local_state = cljs.core.deref(local_state_atom);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528)],[((function (local_state,map__51752,map__51752__$1,label,on_click,type,button_type,local_state_atom){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"hovered","hovered",399068143),true);
});})(local_state,map__51752,map__51752__$1,label,on_click,type,button_type,local_state_atom))
,((function (local_state,map__51752,map__51752__$1,label,on_click,type,button_type,local_state_atom){
return (function (e){
return console.log(e);
});})(local_state,map__51752,map__51752__$1,label,on_click,type,button_type,local_state_atom))
,((function (local_state,map__51752,map__51752__$1,label,on_click,type,button_type,local_state_atom){
return (function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["blur"], 0));
});})(local_state,map__51752,map__51752__$1,label,on_click,type,button_type,local_state_atom))
,(cljs.core.truth_(type)?type:"button"),((function (local_state,map__51752,map__51752__$1,label,on_click,type,button_type,local_state_atom){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pressed","pressed",1100937946),true);
});})(local_state,map__51752,map__51752__$1,label,on_click,type,button_type,local_state_atom))
,on_click,re_frame_project.view.components.button.get_style(button_type,new cljs.core.Keyword(null,"pressed","pressed",1100937946).cljs$core$IFn$_invoke$arity$1(local_state),new cljs.core.Keyword(null,"hovered","hovered",399068143).cljs$core$IFn$_invoke$arity$1(local_state)),((function (local_state,map__51752,map__51752__$1,label,on_click,type,button_type,local_state_atom){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pressed","pressed",1100937946),false);
});})(local_state,map__51752,map__51752__$1,label,on_click,type,button_type,local_state_atom))
,((function (local_state,map__51752,map__51752__$1,label,on_click,type,button_type,local_state_atom){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"hovered","hovered",399068143),false);
});})(local_state,map__51752,map__51752__$1,label,on_click,type,button_type,local_state_atom))
]),label], null);
});
;})(local_state_atom))
});

//# sourceMappingURL=re_frame_project.view.components.button.js.map
