import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (635a328)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,getFonts,getPropertyControls}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import{Icon as Phosphor}from"https://framerusercontent.com/modules/tYScH7LTqUtz5KUaUAYP/C31a5jsoI7tLti4X41zP/Phosphor.js";const PhosphorFonts=getFonts(Phosphor);const PhosphorControls=getPropertyControls(Phosphor);const enabledGestures={"xyLDPxClq":{"hover":true}};const cycleOrder=["xyLDPxClq"];const variantClassNames={"xyLDPxClq":"framer-v-rg9ni7"};const humanReadableVariantMap={};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style:externalStyle={},className,width,height,layoutId,variant:outerVariant="xyLDPxClq",title:g2_3KAvYW="Add a shift",onClick:CmjUkBuXt,background:deGAcxVIV="var(--token-f841edd9-799d-45a6-8977-692450f17407, rgb(152, 41, 171)) /* {\"name\":\"Purple\"} */",name2:h8lhOVjKX="House",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"xyLDPxClq",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTaprg9ni7=activeVariantCallback(async(...args)=>{if(CmjUkBuXt){const res=await CmjUkBuXt(...args);if(res===false)return false;}});const variantProps=React.useMemo(()=>({"xyLDPxClq-hover":{"HZ4pmuq0p":{"iconSearch":"Plus"}}}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-kA7cl",classNames),style:{"display":"contents","pointerEvents":pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:"auto"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"xyLDPxClq",className:cx("framer-rg9ni7",className),style:{"borderBottomLeftRadius":24,"borderBottomRightRadius":24,"borderTopRightRadius":24,"borderTopLeftRadius":24,"backgroundColor":deGAcxVIV,...style},"data-highlight":true,"data-framer-name":"Variant 1",onTap:onTaprg9ni7,variants:{"xyLDPxClq-hover":{"backgroundColor":deGAcxVIV}},transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("xyLDPxClq"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"15px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],center:"y",layoutId:"JT_bWuRSi",className:"framer-1hf514a",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Add a shift</span><br></span></span>",text:g2_3KAvYW,transition:transition,layoutDependency:layoutDependency,...addVariantProps("JT_bWuRSi")}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"HZ4pmuq0p-container",className:"framer-bocwew-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("HZ4pmuq0p-container"),children:/*#__PURE__*/ _jsx(Phosphor,{width:"100%",height:"100%",layoutId:"HZ4pmuq0p",id:"HZ4pmuq0p",selectByList:true,iconSelection:h8lhOVjKX,iconSearch:"Plus",color:"rgb(255, 255, 255)",weight:"regular",mirrored:false,style:{"width":"100%","height":"100%"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("HZ4pmuq0p")})})]})})}));});const css=[".framer-kA7cl [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-kA7cl * { box-sizing: border-box; }",".framer-kA7cl .framer-rg9ni7 { position: relative; cursor: pointer; overflow: visible; width: 128px; height: 35px; }",".framer-kA7cl .framer-1hf514a { position: absolute; width: auto; height: auto; right: 16px; top: 49%; flex: none; white-space: pre; }",".framer-kA7cl .framer-bocwew-container { position: absolute; width: 20px; height: 20px; left: 14px; top: 7px; flex: none; }",".framer-kA7cl.framer-v-rg9ni7 .framer-rg9ni7 { cursor: pointer; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 35
 * @framerIntrinsicWidth 128
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "nQ4iZ8iUg": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"g2_3KAvYW": "title", "CmjUkBuXt": "onClick", "deGAcxVIV": "background", "h8lhOVjKX": "name2"}
 */ const FramertcwucsweO=withCSS(Component,css);export default FramertcwucsweO;FramertcwucsweO.displayName="Button";FramertcwucsweO.defaultProps={"width":128,"height":35};addPropertyControls(FramertcwucsweO,{"g2_3KAvYW":{"type":ControlType.String,"title":"Title","defaultValue":"Add a shift","displayTextArea":false},"CmjUkBuXt":{"type":ControlType.EventHandler,"title":"On Click"},"deGAcxVIV":{"type":ControlType.Color,"title":"Background","defaultValue":"var(--token-f841edd9-799d-45a6-8977-692450f17407, rgb(152, 41, 171)) /* {\"name\":\"Purple\"} */"},"h8lhOVjKX":(PhosphorControls===null||PhosphorControls===void 0?void 0:PhosphorControls["iconSelection"])&&{...PhosphorControls["iconSelection"],"hidden":undefined,"title":"Name 2","defaultValue":"House"}});addFonts(FramertcwucsweO,[{"url":"https://fonts.gstatic.com/s/opensans/v28/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4nY1M2xLER.ttf","family":"Open Sans","style":"normal","weight":"300","moduleAsset":{"url":"https://fonts.gstatic.com/s/opensans/v28/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4nY1M2xLER.ttf","localModuleIdentifier":"local-module:canvasComponent/tcwucsweO:default"}},...PhosphorFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramertcwucsweO","slots":[],"annotations":{"framerIntrinsicWidth":"128","framerContractVersion":"1","framerIntrinsicHeight":"35","framerVariables":"{\"g2_3KAvYW\": \"title\", \"CmjUkBuXt\": \"onClick\", \"deGAcxVIV\": \"background\", \"h8lhOVjKX\": \"name2\"}","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"nQ4iZ8iUg\": {\"layout\": [\"fixed\", \"fixed\"]}}}"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./tcwucsweO.map