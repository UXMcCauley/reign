import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (24dff6d)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,Stack}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";const cycleOrder=["CV46UR47O","ONXpVoW_t"];const variantClassNames={"CV46UR47O":"framer-v-if00za","ONXpVoW_t":"framer-v-1yt5iw"};const humanReadableVariantMap={"Variant 1":"CV46UR47O","Variant 2":"ONXpVoW_t"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style:externalStyle={},className,width,height,layoutId,variant:outerVariant="CV46UR47O",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"CV46UR47O",variant,transitions,variantClassNames,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTapif00za=activeVariantCallback(async(...args)=>{setVariant("ONXpVoW_t");});const onTap1yt5iw=activeVariantCallback(async(...args)=>{setVariant("CV46UR47O");});const variantProps=React.useMemo(()=>({"ONXpVoW_t":{"CV46UR47O":{"center":false,"onTap":onTap1yt5iw,"data-framer-name":"Variant 2","__contentWrapperStyle":{"width":"auto","height":"auto","padding":"0px 0px 0px 0px"},"background":null,"data-highlight":true},"rF6637qe2":{"onTap":undefined,"data-highlight":false},"r1EpMJ3Uo":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Collapse</span><br></span></span>","fonts":["GF;Open Sans-regular"]}}}),[onTap1yt5iw]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const isDisplayed1=()=>{if(baseVariant==="ONXpVoW_t")return false;return true;};const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-wZJgI",classNames),style:{"display":"contents","pointerEvents":pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsx(Stack,{...restProps,layoutId:"CV46UR47O",className:cx("framer-if00za",className),style:{...style},background:null,direction:"horizontal",distribution:"start",alignment:"center",gap:10,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"auto","padding":"0px 0px 0px 0px"},center:false,"data-highlight":true,"data-framer-name":"Variant 1",onTap:onTapif00za,transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("CV46UR47O"),children:/*#__PURE__*/ _jsxs(motion.div,{layoutId:"mj52V621A",className:"framer-bs3zzm",style:{"borderBottomLeftRadius":9,"borderBottomRightRadius":9,"borderTopRightRadius":9,"borderTopLeftRadius":9,"backgroundColor":"rgba(0, 0, 0, 0.41)"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("mj52V621A"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"16px","--framer-letter-spacing":"0px","--framer-text-transform":"uppercase","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"RSeeUr5dX",className:"framer-u37sbf",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Project Hours</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("RSeeUr5dX")}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"mAAFwNSL5",className:"framer-qzb5da",style:{},background:null,direction:"vertical",distribution:"start",alignment:"end",gap:13,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("mAAFwNSL5"),children:[/*#__PURE__*/ _jsxs(Stack,{layoutId:"BmeCPd7Fc",className:"framer-nt71h5",style:{},background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:0,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("BmeCPd7Fc"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"IKRzpLnjV",className:"framer-19me736",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style='--framer-font-weight-increase: 300'>Andrist Commercial Building</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("IKRzpLnjV")}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"iASfXnF6T",className:"framer-h542ck",style:{},background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:10,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("iASfXnF6T"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"m_Rw2boW3",className:"framer-w64ey7",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>6 employees</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("m_Rw2boW3")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"HLI23PQ8H",className:"framer-1455iei",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>13 keycards</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("HLI23PQ8H")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"PIEKLnzgF",className:"framer-p119de",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>12,435 hours</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("PIEKLnzgF")})]})]}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"elAsAntxR",className:"framer-5skon9",style:{},background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:0,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("elAsAntxR"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"RcpRXBKLs",className:"framer-2bxwux",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style='--framer-font-weight-increase: 300'>ACME Warehouse</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("RcpRXBKLs")}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"lHoxXD4uf",className:"framer-1ixu7l",style:{},background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:10,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("lHoxXD4uf"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"A63XT_Ihl",className:"framer-pzavcp",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>6 employees</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("A63XT_Ihl")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"IP4_rWsSD",className:"framer-b8u5c1",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>13 keycards</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("IP4_rWsSD")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"IhfoxOGK9",className:"framer-k0hc1p",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>12,435 hours</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("IhfoxOGK9")})]})]}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"fwIQbeR6x",className:"framer-1d00tq6",style:{},background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:0,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("fwIQbeR6x"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"dBdJFTnU3",className:"framer-usp52t",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style='--framer-font-weight-increase: 300'>Kohls Department Store</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("dBdJFTnU3")}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"rpDVtDijM",className:"framer-19ukzcd",style:{},background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:10,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("rpDVtDijM"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"Gp7SEQ87m",className:"framer-my4u8j",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>6 employees</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("Gp7SEQ87m")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"JLNuefNMv",className:"framer-kj6faz",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>13 keycards</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("JLNuefNMv")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"ARjd3muYV",className:"framer-11mq1pt",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>12,435 hours</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("ARjd3muYV")})]})]}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"WJuSf0xxO",className:"framer-1i8mthq",style:{},background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:0,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("WJuSf0xxO"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"poWgswvBN",className:"framer-5t9vc6",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style='--framer-font-weight-increase: 300'>Mitchell Apartments</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("poWgswvBN")}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"ij9OqSRnR",className:"framer-1lnfsfl",style:{},background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:10,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("ij9OqSRnR"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"pVEkMytHh",className:"framer-1vcpv2g",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>6 employees</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("pVEkMytHh")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"aIWZZGjJR",className:"framer-nanei4",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>13 keycards</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("aIWZZGjJR")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"cI0vPUtxQ",className:"framer-1x8uurp",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>12,435 hours</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("cI0vPUtxQ")})]})]}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"kbmBoEPIQ",className:"framer-xac48v",style:{},background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:0,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("kbmBoEPIQ"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"N0pO_WuiV",className:"framer-pehtnr",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style='--framer-font-weight-increase: 300'>Andrist Residential Buildings</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("N0pO_WuiV")}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"QPHX6NN81",className:"framer-9o23in",style:{},background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:10,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("QPHX6NN81"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"DjIkDaF3f",className:"framer-x4qccn",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>6 employees</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("DjIkDaF3f")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"GB_gzn5gx",className:"framer-1p6ahsq",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>13 keycards</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("GB_gzn5gx")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"NHMjWyjA_",className:"framer-rv2ta2",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>12,435 hours</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("NHMjWyjA_")})]})]}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"pfJsqbvUj",className:"framer-1agep8p",style:{},background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:0,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("pfJsqbvUj"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"effBqqHRY",className:"framer-1yuuwps",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style='--framer-font-weight-increase: 300'>Internal Renovations</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("effBqqHRY")}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"PkuIn01w4",className:"framer-17108sq",style:{},background:null,direction:"horizontal",distribution:"space-between",alignment:"center",gap:10,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("PkuIn01w4"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"rNQsF8ZSg",className:"framer-1a1yzth",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>6 employees</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("rNQsF8ZSg")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"TtJu22NhR",className:"framer-hbglbv",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>13 keycards</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("TtJu22NhR")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"E48sp_mbQ",className:"framer-196yxok",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>12,435 hours</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("E48sp_mbQ")})]})]})]}),isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{layoutId:"FcfWZ63hL",className:"framer-1n35tr4",style:{"background":"linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("FcfWZ63hL")}),/*#__PURE__*/ _jsx(motion.div,{layoutId:"rF6637qe2",className:"framer-hpzx97",style:{},background:null,transition:transition,layoutDependency:layoutDependency,...addVariantProps("rF6637qe2"),children:/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"var(--token-71d8a967-9e44-445b-9fdd-bfbf0c5fef45, rgb(86, 168, 215))","--framer-font-size":"13px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"underline","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-regular"],center:true,layoutId:"r1EpMJ3Uo",className:"framer-uw0prp",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>More</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("r1EpMJ3Uo")})})]})})})}));});const css=[".framer-wZJgI [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-wZJgI * { box-sizing: border-box; }",".framer-wZJgI .framer-if00za { position: relative; cursor: pointer; overflow: visible; width: min-content; height: min-content; }",".framer-wZJgI .framer-bs3zzm { position: relative; overflow: hidden; width: 600px; height: 139px; flex: none; }",".framer-wZJgI .framer-u37sbf { position: absolute; width: auto; height: auto; left: 30px; top: 30px; flex: none; white-space: pre; }",".framer-wZJgI .framer-qzb5da { position: absolute; overflow: visible; width: min-content; height: min-content; left: 29px; top: 75px; flex: none; }",".framer-wZJgI .framer-nt71h5, .framer-wZJgI .framer-5skon9, .framer-wZJgI .framer-1d00tq6, .framer-wZJgI .framer-1i8mthq, .framer-wZJgI .framer-xac48v, .framer-wZJgI .framer-1agep8p { position: relative; overflow: visible; width: 542px; height: min-content; flex: none; }",".framer-wZJgI .framer-19me736, .framer-wZJgI .framer-w64ey7, .framer-wZJgI .framer-1455iei, .framer-wZJgI .framer-p119de, .framer-wZJgI .framer-2bxwux, .framer-wZJgI .framer-pzavcp, .framer-wZJgI .framer-b8u5c1, .framer-wZJgI .framer-k0hc1p, .framer-wZJgI .framer-usp52t, .framer-wZJgI .framer-my4u8j, .framer-wZJgI .framer-kj6faz, .framer-wZJgI .framer-11mq1pt, .framer-wZJgI .framer-5t9vc6, .framer-wZJgI .framer-1vcpv2g, .framer-wZJgI .framer-nanei4, .framer-wZJgI .framer-1x8uurp, .framer-wZJgI .framer-pehtnr, .framer-wZJgI .framer-x4qccn, .framer-wZJgI .framer-1p6ahsq, .framer-wZJgI .framer-rv2ta2, .framer-wZJgI .framer-1yuuwps, .framer-wZJgI .framer-1a1yzth, .framer-wZJgI .framer-hbglbv, .framer-wZJgI .framer-196yxok { position: relative; width: auto; height: auto; flex: none; white-space: pre; }",".framer-wZJgI .framer-h542ck, .framer-wZJgI .framer-1ixu7l, .framer-wZJgI .framer-19ukzcd, .framer-wZJgI .framer-1lnfsfl, .framer-wZJgI .framer-9o23in, .framer-wZJgI .framer-17108sq { position: relative; overflow: visible; width: 283px; height: min-content; flex: none; }",".framer-wZJgI .framer-1n35tr4 { position: absolute; overflow: visible; height: 69px; right: 0px; bottom: -2px; left: 0px; flex: none; }",".framer-wZJgI .framer-hpzx97 { position: absolute; overflow: visible; width: 32px; height: 16px; right: 29px; top: 28px; flex: none; }",".framer-wZJgI .framer-uw0prp { position: absolute; width: auto; height: auto; left: 50%; top: 50%; flex: none; white-space: pre; }",".framer-wZJgI .framer-903q9a { position: absolute; overflow: visible; height: 69px; right: 0px; bottom: -1px; left: 0px; flex: none; }",".framer-wZJgI.framer-v-1yt5iw .framer-if00za { width: min-content; height: min-content; cursor: pointer; }",".framer-wZJgI.framer-v-1yt5iw .framer-bs3zzm { width: 600px; height: 277px; right: auto; bottom: auto; left: auto; top: auto; flex: none; aspect-ratio: unset; }",".framer-wZJgI.framer-v-1yt5iw .framer-hpzx97 { cursor: auto; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 139
 * @framerIntrinsicWidth 600
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["auto", "auto"]}, "ONXpVoW_t": {"layout": ["auto", "auto"]}}}
 */ const FramerNBQm1tArv=withCSS(Component,css);export default FramerNBQm1tArv;FramerNBQm1tArv.displayName="ProjectHours";FramerNBQm1tArv.defaultProps={"width":600,"height":139};addPropertyControls(FramerNBQm1tArv,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["CV46UR47O","ONXpVoW_t"],"optionTitles":["Variant 1","Variant 2"]}});addFonts(FramerNBQm1tArv,[{"url":"https://fonts.gstatic.com/s/opensans/v28/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4nY1M2xLER.ttf","family":"Open Sans","style":"normal","weight":"300","moduleAsset":{"url":"https://fonts.gstatic.com/s/opensans/v28/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4nY1M2xLER.ttf","localModuleIdentifier":"local-module:canvasComponent/NBQm1tArv:default"}},{"url":"https://fonts.gstatic.com/s/opensans/v28/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf","family":"Open Sans","style":"normal","weight":"400","moduleAsset":{"url":"https://fonts.gstatic.com/s/opensans/v28/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf","localModuleIdentifier":"local-module:canvasComponent/NBQm1tArv:default"}}]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerNBQm1tArv","slots":[],"annotations":{"framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"auto\", \"auto\"]}, \"ONXpVoW_t\": {\"layout\": [\"auto\", \"auto\"]}}}","framerIntrinsicWidth":"600","framerIntrinsicHeight":"139","framerContractVersion":"1"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./NBQm1tArv.map