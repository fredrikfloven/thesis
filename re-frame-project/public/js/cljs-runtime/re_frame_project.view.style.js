goog.provide('re_frame_project.view.style');
goog.require('cljs.core');
re_frame_project.view.style.invalid_red = "rgb(227,6,19)";
re_frame_project.view.style.red = "rgb(173,16,21)";
re_frame_project.view.style.darker_red = "rgb(145,12,25)";
re_frame_project.view.style.darkest_red = "rgb(126, 11, 22)";
re_frame_project.view.style.green = "rgb(50,205,50)";
re_frame_project.view.style.darkest_grey = "rgb(116, 117, 120)";
re_frame_project.view.style.darker_grey = "rgb(217, 217, 217)";
re_frame_project.view.style.grey = "rgb(236,236,236)";
re_frame_project.view.style.light_grey = "rgb(243,243,243)";
re_frame_project.view.style.lighter_grey = "rgb(251,251,251)";
re_frame_project.view.style.blue = "rgb(0,90,160)";
re_frame_project.view.style.navy = "rgb(0,66,122)";
re_frame_project.view.style.dark_blue = "rgb(0,50,92)";
re_frame_project.view.style.light_blue = "rgb(242,247,251)";
re_frame_project.view.style.orange = "#f9b233";
re_frame_project.view.style.white = "#fff";
re_frame_project.view.style.transparent = "transparent";
re_frame_project.view.style.font = "Intro Cond Arial, Helvetica Neue, sans-serif";
re_frame_project.view.style.info_text = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),re_frame_project.view.style.darkest_grey,new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(400),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"17px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"4px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"15px"], null);
re_frame_project.view.style.invalid_text = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),re_frame_project.view.style.invalid_red,new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(700),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"17px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"4px"], null);
re_frame_project.view.style.form_item_label = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(700),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.3rem",new cljs.core.Keyword(null,"-webkit-font-smoothing","-webkit-font-smoothing",2011296782),"antialiased"], null);
re_frame_project.view.style.component_style = (function re_frame_project$view$style$component_style(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"border","border",1444987323),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"black",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"3px",new cljs.core.Keyword(null,"width","width",-384071477),"97%",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null);
});
re_frame_project.view.style.wide_style = (function re_frame_project$view$style$wide_style(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"5%",new cljs.core.Keyword(null,"display","display",242065432),"inline-flex"], null),re_frame_project.view.style.component_style()], 0));
});
re_frame_project.view.style.leaf_style = (function re_frame_project$view$style$leaf_style(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null),re_frame_project.view.style.component_style()], 0));
});

//# sourceMappingURL=re_frame_project.view.style.js.map
