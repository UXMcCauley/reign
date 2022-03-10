import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{useMemo,useRef,useEffect}from"react";import{addPropertyControls,ControlType}from"framer";import{useMotionValue,motion,useSpring,useTransform}from"framer-motion";import*as Icons from"https://framer.com/m/framer/icons-assets.js@0.2.0";import{defaultEvents,useOnEnter}from"https://framer.com/m/framer/default-utils.js@^0.45.0";const round=(value,step)=>step>0?Math.ceil(value*(1/step))/(1/step):value;function Star(props){const{size=24}=props;return(/*#__PURE__*/ _jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:size,height:size,viewBox:"0 0 18 18",children:/*#__PURE__*/ _jsx("path",{d:"M 8.103 1.817 C 8.47 1.074 9.53 1.074 9.897 1.817 L 11.412 4.888 C 11.558 5.183 11.84 5.388 12.165 5.435 L 15.554 5.927 C 16.375 6.047 16.702 7.055 16.109 7.633 L 13.656 10.024 C 13.421 10.253 13.313 10.584 13.369 10.909 L 13.948 14.284 C 14.088 15.101 13.23 15.724 12.497 15.338 L 9.465 13.745 C 9.174 13.591 8.826 13.591 8.535 13.745 L 5.503 15.338 C 4.77 15.724 3.912 15.101 4.052 14.284 L 4.631 10.909 C 4.687 10.584 4.579 10.253 4.344 10.024 L 1.891 7.633 C 1.298 7.055 1.625 6.047 2.446 5.927 L 5.835 5.435 C 6.16 5.388 6.442 5.183 6.588 4.888 Z",fill:"currentColor"})}));}/**
 * RATING
 *
 * @framerIntrinsicWidth 124
 * @framerIntrinsicHeight 26
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */ export function Rating(props){const{amount,customIcon,iconName,rating,step,inactiveColor,color,hoverColor,onChange,size,onClick,onFill,onEmpty,onLoadReset,onMouseEnter,onMouseLeave,onMouseDown,onMouseUp,style}=props;const units=useMemo(()=>new Array(amount).fill(0),[amount]);const parent=useRef();const bounds=useRef();const Icon=customIcon?Icons[iconName]:Star;const ratingSpring=useSpring(rating) // normalized
;const ratingHover=useMotionValue(0) // normalized
;const ratingScale=useTransform(ratingSpring,[0,amount],[0,1]);const innerRatingScale=useTransform([ratingScale],r=>1/r);const ratingHoverScale=useTransform(ratingHover,[0,amount],[0,1]);const innerHoverScale=useTransform([ratingHoverScale],r=>1/r);const measure=()=>bounds.current=parent.current.getBoundingClientRect();const handleChange=ratingVal=>{ratingSpring.set(ratingVal);if(onChange)onChange(ratingVal);if(onFill&&ratingVal===amount)onFill();if(onEmpty&&ratingVal===0)onEmpty();};const handleTap=(_,info)=>{if(onClick)onClick();const normalizedClick=(info.point.x-bounds.current.x)/bounds.current.width;const ratingVal=round(normalizedClick*amount,step);handleChange(ratingVal);};const handleMouseMove=e=>{const normalizedHover=(e.clientX-bounds.current.x)/bounds.current.width;ratingHover.set(round(normalizedHover*amount,step));};useEffect(()=>{ratingSpring.set(rating);},[rating]);useOnEnter(()=>{if(onLoadReset)ratingSpring.set(rating);});return(/*#__PURE__*/ _jsxs("div",{style:{...parentStyle,paddingTop:5,paddingBottom:4,// marginLeft: -10,
// marginRight: -10,
...style},children:[/*#__PURE__*/ _jsx("div",{onClick:()=>handleChange(0),style:{height:size,width:10}}),/*#__PURE__*/ _jsxs(motion.div,{ref:parent,onTap:handleTap,onMouseMove:handleMouseMove,onMouseEnter:()=>{measure();if(onMouseEnter)onMouseEnter();},onMouseLeave:()=>{ratingHover.set(0);if(onMouseLeave)onMouseLeave();},style:{display:"inline-flex",position:"relative",color:inactiveColor},onMouseDown,onMouseUp,children:[units.map((_,i)=>/*#__PURE__*/ _jsx(Icon,{size:size},i)),/*#__PURE__*/ _jsx(motion.div,{style:{...ratingStyle,scaleX:ratingScale,originX:0},children:/*#__PURE__*/ _jsx(motion.div,{style:{scaleX:innerRatingScale,originX:0,display:"flex",color},children:units.map((_,i)=>/*#__PURE__*/ _jsx(Icon,{size:size},i))})}),/*#__PURE__*/ _jsx(motion.div,{style:{...ratingStyle,scaleX:ratingHoverScale,originX:0},children:/*#__PURE__*/ _jsx(motion.div,{style:{scaleX:innerHoverScale,originX:0,display:"flex",color:hoverColor},children:units.map((_,i)=>/*#__PURE__*/ _jsx(Icon,{size:size},i))})})]}),/*#__PURE__*/ _jsx("div",{onClick:()=>handleChange(amount),onMouseEnter:()=>ratingHover.set(amount),onMouseLeave:()=>ratingHover.set(0),style:{height:size,width:10}})]}));}Rating.defaultProps={width:124,height:26,amount:5,rating:3,step:0.5,color:"#09F",iconName:"star",size:24,inactiveColor:"#DDD",hoverColor:"rgba(0,0,0,0.1)",customIcon:false,onLoadReset:false};addPropertyControls(Rating,{color:{title:"Active",type:ControlType.Color},inactiveColor:{title:"Inactive",type:ControlType.Color},hoverColor:{title:"Hover",type:ControlType.Color},rating:{type:ControlType.Number,displayStepper:true,min:0,max:10,step:0.5},amount:{title:"Amount",type:ControlType.Number,displayStepper:true,min:1,max:10},size:{title:"Size",type:ControlType.Number,displayStepper:true,min:5,max:100},step:{title:"Step",type:ControlType.Enum,displaySegmentedControl:true,optionTitles:["None","0.5","1"],options:[0,0.5,1]},customIcon:{title:"Icon",type:ControlType.Boolean,enabledTitle:"Feather",disabledTitle:"Default"},iconName:{type:ControlType.Enum,options:Object.keys(Icons),defaultValue:"Star",title:" ",hidden:({customIcon})=>!customIcon},onLoadReset:{title:"On Enter",type:ControlType.Boolean,enabledTitle:"Reset",disabledTitle:"Persist"},onChange:{type:ControlType.EventHandler},onEmpty:{type:ControlType.EventHandler},onFill:{type:ControlType.EventHandler},...defaultEvents});const ratingStyle={display:"inline-block",position:"absolute",overflow:"hidden",width:"100%",height:"100%",left:0,top:0};const parentStyle={display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"};
export const __FramerMetadata__ = {"exports":{"Rating":{"type":"reactComponent","name":"Rating","slots":[],"annotations":{"framerIntrinsicWidth":"124","framerSupportedLayoutWidth":"any","framerContractVersion":"1","framerIntrinsicHeight":"26","framerSupportedLayoutHeight":"any"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Rating.map