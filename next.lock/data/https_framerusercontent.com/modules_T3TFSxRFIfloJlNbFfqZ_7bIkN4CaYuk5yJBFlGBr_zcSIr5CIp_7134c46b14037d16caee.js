import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (635a328)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,getFonts}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import Avatar from"https://framerusercontent.com/modules/AeYG8zGuHwIqBGSbzoNt/YHJXhBCJmbLWzvyQU0gV/aK3rGRJJT.js";const AvatarFonts=getFonts(Avatar);const cycleOrder=["C8xwntOH5","zYpFgy5xp"];const variantClassNames={"C8xwntOH5":"framer-v-1vo5r34","zYpFgy5xp":"framer-v-1a39gve"};const humanReadableVariantMap={"Variant 1":"C8xwntOH5","Variant 2":"zYpFgy5xp"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style:externalStyle={},className,width,height,layoutId,variant:outerVariant="C8xwntOH5",title:o9TtQglRV="Graham Lofonte",image:NPcz2VCkK=new URL("assets/512/IBuBfKG7bkDE4Ksa03U1WbB35gM.jpg",import.meta.url).href,online:qoHijL5GY=true,active:rX6He8hnc="rgba(255, 255, 255, 0.07)",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"C8xwntOH5",variant,transitions,variantClassNames,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const variantProps=React.useMemo(()=>({"zYpFgy5xp":{"C8xwntOH5":{"data-framer-name":"Variant 2"},"IDUwhIDTt":{"rawHTML":"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style='--framer-font-weight-increase: 300'>Graham Lofonte</span><br></span></span>","fonts":["GF;Open Sans-700"]}}}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-tYdYQ",classNames),style:{"display":"contents","pointerEvents":pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsx(motion.div,{...restProps,layoutId:"C8xwntOH5",className:cx("framer-1vo5r34",className),style:{"backgroundColor":rX6He8hnc,...style},"data-framer-name":"Variant 1",transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("C8xwntOH5"),children:/*#__PURE__*/ _jsxs(motion.div,{layoutId:"KtS6jPbSR",className:"framer-1mygnp6",style:{},background:null,transition:transition,layoutDependency:layoutDependency,...addVariantProps("KtS6jPbSR"),children:[/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"UhWNGY4t5-container",className:"framer-a3wn7b-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("UhWNGY4t5-container"),children:/*#__PURE__*/ _jsx(Avatar,{width:"100%",height:"100%",layoutId:"UhWNGY4t5",id:"UhWNGY4t5",image:NPcz2VCkK,visible:qoHijL5GY,style:{"height":"100%"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("UhWNGY4t5")})}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"rgb(153, 153, 153)","--framer-font-size":"14px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-regular"],layoutId:"IDUwhIDTt",className:"framer-gqlo3r",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Graham Lofonte</span><br></span></span>",text:o9TtQglRV,variants:{"zYpFgy5xp":{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("IDUwhIDTt")})]})})})}));});const css=[".framer-tYdYQ [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-tYdYQ * { box-sizing: border-box; }",".framer-tYdYQ .framer-1vo5r34 { position: relative; overflow: visible; width: 201px; height: 41px; }",".framer-tYdYQ .framer-1mygnp6 { position: absolute; overflow: visible; right: 25px; bottom: 5px; left: 26px; top: 6px; flex: none; }",".framer-tYdYQ .framer-a3wn7b-container { position: absolute; width: auto; bottom: 0px; left: 0px; top: 0px; flex: none; }",".framer-tYdYQ .framer-gqlo3r { position: absolute; width: auto; height: auto; bottom: 6px; left: 43px; flex: none; white-space: pre; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 41
 * @framerIntrinsicWidth 201
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "zYpFgy5xp": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"o9TtQglRV": "title", "NPcz2VCkK": "image", "qoHijL5GY": "online", "rX6He8hnc": "active"}
 */ const FramerzcSIr5CIp=withCSS(Component,css);export default FramerzcSIr5CIp;FramerzcSIr5CIp.displayName="PersonMessaging";FramerzcSIr5CIp.defaultProps={"width":201,"height":41};addPropertyControls(FramerzcSIr5CIp,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["C8xwntOH5","zYpFgy5xp"],"optionTitles":["Variant 1","Variant 2"]},"o9TtQglRV":{"type":ControlType.String,"title":"Title","defaultValue":"Graham Lofonte","displayTextArea":false},"NPcz2VCkK":{"type":ControlType.Image,"title":"Image","__defaultAssetReference":"data:framer/asset-reference,IBuBfKG7bkDE4Ksa03U1WbB35gM.jpg?originalFilename=smiling+woman+holding+cheek.jpg&preferredSize=small"},"qoHijL5GY":{"type":ControlType.Boolean,"title":"Online","defaultValue":true},"rX6He8hnc":{"type":ControlType.Color,"title":"Active","defaultValue":"rgba(255, 255, 255, 0.07)"}});addFonts(FramerzcSIr5CIp,[{"url":"https://fonts.gstatic.com/s/opensans/v28/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf","family":"Open Sans","style":"normal","weight":"400","moduleAsset":{"url":"https://fonts.gstatic.com/s/opensans/v28/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf","localModuleIdentifier":"local-module:canvasComponent/zcSIr5CIp:default"}},...AvatarFonts]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerzcSIr5CIp","slots":[],"annotations":{"framerContractVersion":"1","framerIntrinsicWidth":"201","framerVariables":"{\"o9TtQglRV\": \"title\", \"NPcz2VCkK\": \"image\", \"qoHijL5GY\": \"online\", \"rX6He8hnc\": \"active\"}","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"zYpFgy5xp\": {\"layout\": [\"fixed\", \"fixed\"]}}}","framerIntrinsicHeight":"41"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./zcSIr5CIp.map