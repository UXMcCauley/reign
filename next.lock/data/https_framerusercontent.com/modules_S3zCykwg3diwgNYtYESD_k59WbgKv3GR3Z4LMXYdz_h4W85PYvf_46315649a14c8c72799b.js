import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (24dff6d)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,getFonts}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import AddShiftInput from"https://framerusercontent.com/modules/Go5DnFUzfDmskKYNxggB/2MKsNEdu3EfTJaa6ySSW/OFkw76aiT.js";import Button from"https://framerusercontent.com/modules/ViChnviR5KmynzziRRXa/1cJYopah1apqXvr0zJZh/tcwucsweO.js";import{Select}from"https://framerusercontent.com/modules/LQULCyu9kgqvukVlEl2a/MH3Yx5fFxSy5AnDKO81p/Select.js";import{Icon as Phosphor}from"https://framerusercontent.com/modules/tYScH7LTqUtz5KUaUAYP/C31a5jsoI7tLti4X41zP/Phosphor.js";const AddShiftInputFonts=getFonts(AddShiftInput);const ButtonFonts=getFonts(Button);const SelectFonts=getFonts(Select);const PhosphorFonts=getFonts(Phosphor);const cycleOrder=["KdVyE77yP"];const variantClassNames={"KdVyE77yP":"framer-v-h1676"};const humanReadableVariantMap={};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style:externalStyle={},className,width,height,layoutId,variant:outerVariant="KdVyE77yP",tap:VqfgFEv6V,title:z7COauZH5="Adding shifts to Concrete",title2:BgAiohDbT="Current schedule entries",text:IzqiB2BHs="Monday, April 16, 2022 from 8:00 am  until 4:00 pm",text2:aY_7NAyct="Tuesday, April 17, 2022 from 8:00 am  until 4:00 pm",text3:pfSC4rMU8="Wednesday, April 18, 2022 from 8:00 am  until 4:00 pm",text4:dxFiqahZY="Thursday, April 19, 2022 from 8:00 am  until 4:00 pm",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"KdVyE77yP",variant,transitions,variantClassNames,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onClick1ew4wdw=activeVariantCallback(async(...args)=>{if(VqfgFEv6V){const res=await VqfgFEv6V(...args);if(res===false)return false;}});const variantProps=React.useMemo(()=>({}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-sZtm8",classNames),style:{"display":"contents","pointerEvents":pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"KdVyE77yP",className:cx("framer-h1676",className),style:{"backgroundColor":"rgb(0, 0, 0)",...style},"data-framer-name":"Variant 1",transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("KdVyE77yP"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"18px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"K33zej9TS",className:"framer-1wah8fr",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style='--framer-font-weight-increase: 300'>Adding shifts to Concrete</span><br></span></span>",text:z7COauZH5,transition:transition,layoutDependency:layoutDependency,...addVariantProps("K33zej9TS")}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"etg6BhMKL-container",className:"framer-19n7ctt-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("etg6BhMKL-container"),children:/*#__PURE__*/ _jsx(Select,{width:"100%",height:"100%",layoutId:"etg6BhMKL",id:"etg6BhMKL",value:1,disabled:false,variant:"default",defaultTextColor:"rgb(255, 255, 255)",defaultIconColor:"rgb(153, 153, 153)",defaultBackgroundColor:"rgb(38, 38, 38)",defaultBorderColor:"var(--token-7fdd1bdd-4486-40aa-993c-e3b7a6b46800, rgb(85, 40, 171)) /* {\"name\":\"Violet\"} */",defaultBorderWidth:1,focusTextColor:"rgb(68, 68, 68)",focusIconColor:"rgb(153, 153, 153)",focusBackgroundColor:"rgb(242, 242, 242)",focusBorderColor:"rgb(0, 153, 255)",focusBorderWidth:1,disabledTextColor:"rgb(68, 68, 68)",disabledIconColor:"rgb(153, 153, 153)",disabledBackgroundColor:"rgb(242, 242, 242)",disabledBorderColor:"rgb(0, 153, 255)",disabledBorderWidth:0,disabledOpacity:60,padding:7,paddingPerSide:true,paddingTop:7,paddingRight:7,paddingBottom:7,paddingLeft:14,radius:23,isMixed:false,topLeft:23,topRight:23,bottomRight:23,bottomLeft:23,font:true,fontFamily:"",fontWeight:300,fontSize:14,focused:false,options:["Select an employee","Conor McManus","Aaron Jones","Dwight Lance","Effron Otis"],style:{"width":"100%","height":"100%"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("etg6BhMKL")})}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"tg80z7W7y-container",className:"framer-1yqvt5x-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("tg80z7W7y-container"),children:/*#__PURE__*/ _jsx(AddShiftInput,{width:"100%",height:"100%",layoutId:"tg80z7W7y",id:"tg80z7W7y",variant:"F3YT1vLHP",date:"Friday, April 20, 2022",transition:transition,layoutDependency:layoutDependency,...addVariantProps("tg80z7W7y")})}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"ABIcv5eo9-container",className:"framer-81fqql-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("ABIcv5eo9-container"),children:/*#__PURE__*/ _jsx(AddShiftInput,{width:"100%",height:"100%",layoutId:"ABIcv5eo9",id:"ABIcv5eo9",variant:"YlRnxbd7n",date:"8:00 am",style:{"width":"100%","height":"100%"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("ABIcv5eo9")})}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"fdxMml4HX-container",className:"framer-1tdzexs-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("fdxMml4HX-container"),children:/*#__PURE__*/ _jsx(AddShiftInput,{width:"100%",height:"100%",layoutId:"fdxMml4HX",id:"fdxMml4HX",variant:"YlRnxbd7n",date:"4:00 pm",style:{"width":"100%","height":"100%"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("fdxMml4HX")})}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"mCOFCUzsZ-container",className:"framer-a2uwgb-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("mCOFCUzsZ-container"),children:/*#__PURE__*/ _jsx(Phosphor,{width:"100%",height:"100%",layoutId:"mCOFCUzsZ",id:"mCOFCUzsZ",selectByList:true,iconSelection:"ArrowRight",iconSearch:"House",color:"rgb(255, 255, 255)",weight:"regular",mirrored:false,style:{"width":"100%","height":"100%"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("mCOFCUzsZ")})}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"i8xLaWmg4-container",className:"framer-z3swqk-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("i8xLaWmg4-container"),children:/*#__PURE__*/ _jsx(Button,{width:"100%",height:"100%",layoutId:"i8xLaWmg4",id:"i8xLaWmg4",title:"Add shift",background:"var(--token-f841edd9-799d-45a6-8977-692450f17407, rgb(152, 41, 171)) /* {\"name\":\"Purple\"} */",name2:"Plus",style:{"width":"100%","height":"100%"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("i8xLaWmg4")})}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"Jmz8V5mbY-container",className:"framer-1ew4wdw-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("Jmz8V5mbY-container"),children:/*#__PURE__*/ _jsx(Button,{width:"100%",height:"100%",layoutId:"Jmz8V5mbY",id:"Jmz8V5mbY",title:"Save schedule",background:"var(--token-f841edd9-799d-45a6-8977-692450f17407, rgb(152, 41, 171)) /* {\"name\":\"Purple\"} */",name2:"FloppyDisk",onClick:onClick1ew4wdw,style:{"width":"100%","height":"100%"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("Jmz8V5mbY")})}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"14px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"Lw58p16pW",className:"framer-ap7rij",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style='--framer-font-weight-increase: 300'>Current schedule entries</span><br></span></span>",text:BgAiohDbT,transition:transition,layoutDependency:layoutDependency,...addVariantProps("Lw58p16pW")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"14px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"g9YgNgeGG",className:"framer-1ug863b",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style='--framer-font-weight-increase: 300'>Monday, April 16, 2022 from 8:00 am  until 4:00 pm</span><br></span></span>",text:IzqiB2BHs,transition:transition,layoutDependency:layoutDependency,...addVariantProps("g9YgNgeGG")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"14px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"AvjQO3rcN",className:"framer-m9jqae",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style='--framer-font-weight-increase: 300'>Tuesday, April 17, 2022 from 8:00 am  until 4:00 pm</span><br></span></span>",text:aY_7NAyct,transition:transition,layoutDependency:layoutDependency,...addVariantProps("AvjQO3rcN")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"14px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"nqIB9db1w",className:"framer-o1ue7t",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style='--framer-font-weight-increase: 300'>Wednesday, April 18, 2022 from 8:00 am  until 4:00 pm</span><br></span></span>",text:pfSC4rMU8,transition:transition,layoutDependency:layoutDependency,...addVariantProps("nqIB9db1w")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Open Sans\", sans-serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"14px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Open Sans-300"],layoutId:"h7E6yglso",className:"framer-wljpq5",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style='--framer-font-weight-increase: 300'>Thursday, April 19, 2022 from 8:00 am  until 4:00 pm</span><br></span></span>",text:dxFiqahZY,transition:transition,layoutDependency:layoutDependency,...addVariantProps("h7E6yglso")}),/*#__PURE__*/ _jsx(motion.div,{layoutId:"rdMNfPXca",className:"framer-1d4xoxw",style:{"backgroundColor":"var(--token-7fdd1bdd-4486-40aa-993c-e3b7a6b46800, rgb(85, 40, 171))"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("rdMNfPXca")}),/*#__PURE__*/ _jsx(motion.div,{layoutId:"l5NhzoOLd",className:"framer-1uau68",style:{"backgroundColor":"var(--token-7fdd1bdd-4486-40aa-993c-e3b7a6b46800, rgb(85, 40, 171))"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("l5NhzoOLd")}),/*#__PURE__*/ _jsx(motion.div,{layoutId:"F_GZAkYIu",className:"framer-p6n1ji",style:{"backgroundColor":"var(--token-7fdd1bdd-4486-40aa-993c-e3b7a6b46800, rgb(85, 40, 171))"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("F_GZAkYIu")}),/*#__PURE__*/ _jsx(motion.div,{layoutId:"RmVtEz6kx",className:"framer-gsi3z0",style:{"backgroundColor":"var(--token-7fdd1bdd-4486-40aa-993c-e3b7a6b46800, rgb(85, 40, 171))"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("RmVtEz6kx")})]})})}));});const css=[".framer-sZtm8 [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-sZtm8 * { box-sizing: border-box; }",".framer-sZtm8 .framer-h1676 { position: relative; overflow: hidden; width: 716px; height: 771px; }",".framer-sZtm8 .framer-1wah8fr { position: absolute; width: auto; height: auto; left: 58px; top: 47px; flex: none; white-space: pre; }",".framer-sZtm8 .framer-19n7ctt-container { position: absolute; width: 287px; height: 33px; left: 58px; top: 106px; flex: none; }",".framer-sZtm8 .framer-1yqvt5x-container { position: absolute; width: auto; height: auto; left: 58px; top: 396px; flex: none; }",".framer-sZtm8 .framer-81fqql-container { position: absolute; width: 117px; height: 33px; right: 244px; top: 396px; flex: none; }",".framer-sZtm8 .framer-1tdzexs-container { position: absolute; width: 117px; height: 33px; right: 88px; top: 396px; flex: none; }",".framer-sZtm8 .framer-a2uwgb-container { position: absolute; width: 24px; height: 24px; right: 213px; top: 401px; flex: none; }",".framer-sZtm8 .framer-z3swqk-container { position: absolute; width: 116px; height: 35px; left: 58px; top: 459px; flex: none; }",".framer-sZtm8 .framer-1ew4wdw-container { position: absolute; width: 155px; height: 35px; bottom: 71px; left: 58px; flex: none; }",".framer-sZtm8 .framer-ap7rij { position: absolute; width: auto; height: auto; left: 58px; top: 176px; flex: none; white-space: pre; }",".framer-sZtm8 .framer-1ug863b { position: absolute; width: auto; height: auto; left: 98px; top: 223px; flex: none; white-space: pre; }",".framer-sZtm8 .framer-m9jqae { position: absolute; width: auto; height: auto; left: 98px; top: 260px; flex: none; white-space: pre; }",".framer-sZtm8 .framer-o1ue7t { position: absolute; width: auto; height: auto; left: 98px; top: 297px; flex: none; white-space: pre; }",".framer-sZtm8 .framer-wljpq5 { position: absolute; width: auto; height: auto; left: 98px; top: 334px; flex: none; white-space: pre; }",".framer-sZtm8 .framer-1d4xoxw { position: absolute; overflow: visible; width: 8px; height: var(--framer-aspect-ratio-supported, 8px); left: 68px; top: 226px; flex: none; aspect-ratio: 1 / 1; }",".framer-sZtm8 .framer-1uau68 { position: absolute; overflow: visible; width: 8px; height: var(--framer-aspect-ratio-supported, 8px); left: 68px; top: 264px; flex: none; aspect-ratio: 1 / 1; }",".framer-sZtm8 .framer-p6n1ji { position: absolute; overflow: visible; width: 8px; height: var(--framer-aspect-ratio-supported, 8px); left: 68px; top: 303px; flex: none; aspect-ratio: 1 / 1; }",".framer-sZtm8 .framer-gsi3z0 { position: absolute; overflow: visible; width: 8px; height: var(--framer-aspect-ratio-supported, 8px); left: 68px; top: 339px; flex: none; aspect-ratio: 1 / 1; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 771
 * @framerIntrinsicWidth 716
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"VqfgFEv6V": "tap", "z7COauZH5": "title", "BgAiohDbT": "title2", "IzqiB2BHs": "text", "aY_7NAyct": "text2", "pfSC4rMU8": "text3", "dxFiqahZY": "text4"}
 */ const Framerh4W85PYvf=withCSS(Component,css);export default Framerh4W85PYvf;Framerh4W85PYvf.displayName="AddShiftsFlyin";Framerh4W85PYvf.defaultProps={"width":716,"height":771};addPropertyControls(Framerh4W85PYvf,{"VqfgFEv6V":{"type":ControlType.EventHandler,"title":"Tap"},"z7COauZH5":{"type":ControlType.String,"title":"Title","defaultValue":"Adding shifts to Concrete","displayTextArea":false},"BgAiohDbT":{"type":ControlType.String,"title":"Title 2","defaultValue":"Current schedule entries","displayTextArea":false},"IzqiB2BHs":{"type":ControlType.String,"title":"Text","defaultValue":"Monday, April 16, 2022 from 8:00 am  until 4:00 pm","displayTextArea":false},"aY_7NAyct":{"type":ControlType.String,"title":"Text 2","defaultValue":"Tuesday, April 17, 2022 from 8:00 am  until 4:00 pm","displayTextArea":false},"pfSC4rMU8":{"type":ControlType.String,"title":"Text 3","defaultValue":"Wednesday, April 18, 2022 from 8:00 am  until 4:00 pm","displayTextArea":false},"dxFiqahZY":{"type":ControlType.String,"title":"Text 4","defaultValue":"Thursday, April 19, 2022 from 8:00 am  until 4:00 pm","displayTextArea":false}});addFonts(Framerh4W85PYvf,[{"url":"https://fonts.gstatic.com/s/opensans/v28/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4nY1M2xLER.ttf","family":"Open Sans","style":"normal","weight":"300","moduleAsset":{"url":"https://fonts.gstatic.com/s/opensans/v28/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4nY1M2xLER.ttf","localModuleIdentifier":"local-module:canvasComponent/h4W85PYvf:default"}},...AddShiftInputFonts,...ButtonFonts,...SelectFonts,...PhosphorFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"Framerh4W85PYvf","slots":[],"annotations":{"framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}}}","framerIntrinsicHeight":"771","framerVariables":"{\"VqfgFEv6V\": \"tap\", \"z7COauZH5\": \"title\", \"BgAiohDbT\": \"title2\", \"IzqiB2BHs\": \"text\", \"aY_7NAyct\": \"text2\", \"pfSC4rMU8\": \"text3\", \"dxFiqahZY\": \"text4\"}","framerIntrinsicWidth":"716"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./h4W85PYvf.map