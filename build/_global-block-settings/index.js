(()=>{"use strict";const e=window.React,t=window.wp.i18n,s=window.wp.element,l=window.wp.hooks,a=window.wp.components,b=window.wp.compose,o=window.wp.blockEditor;function r(e,t){const{belowNavbar:s,touchFooter:l,display:a,marginBefore:b,marginAfter:o,marginLeft:r,marginRight:n,resMargin1Breakpoint:i,resMargin1Position:c,resMargin1Size:_,resMargin2Breakpoint:u,resMargin2Position:g,resMargin2Size:d,paddingBefore:p,paddingAfter:h,paddingLeft:x,paddingRight:k,bgColor:m,textColor:v,textSize:f,rounded:S,textAlign:w,resTextAlignBreakpoint:y,resTextAlign:C,textShadow:B,fontWeight:L,inverseTextColor:A,headingInheritTextColor:E,headingInheritFontWeight:W,width:R,height:D,imgThumbnail:I,borderState:j,border:O,hoverShadow:P,hoverMove:M,disabled:N,verticalAlign:T,speechBubble:z,isAlert:q,state:F,objectFit:H,overflow:X,multilayer:G,zIndex:Y,isBannerInner:J,isTop0:K,isBottom0:Q,isLeft0:U,isRight0:V,position:Z}=e,$=void 0!==t&&t.trim().length>0?t.split(" "):[];return s&&$.push("below-navbar-content"),l&&$.push("mb-n-footer-space"),a&&$.push("d-"+a),b&&b===o&&b===r&&b===n?$.push("m-"+b):(b&&b===o?$.push("my-"+b):(b&&$.push("mt-"+b),o&&$.push("mb-"+o)),r&&r===n?$.push("mx-"+r):(r&&$.push("ml-"+r),n&&$.push("mr-"+n))),i&&c&&_&&$.push("m"+("all"===c?"":c)+"-"+("xs"===i?"":i+"-")+_),u&&g&&d&&$.push("m"+("all"===g?"":g)+"-"+("xs"===u?"":u+"-")+d),p&&p===h&&p===x&&p===k?$.push("p-"+p):(p&&p===h?$.push("py-"+p):(p&&$.push("pt-"+p),h&&$.push("pb-"+h)),x&&x===k?$.push("px-"+x):(x&&$.push("pl-"+x),k&&$.push("pr-"+k))),m&&$.push("bg-"+m),v&&$.push("text-"+v),f&&$.push(f),B&&$.push("text-shadow-"+B),L&&$.push("font-weight-"+L),A&&$.push("text-inverse"),E&&$.push("heading-inherit-text"),W&&$.push("heading-inherit-font-weight"),S&&(1==S||"rounded"==S?$.push("rounded"):$.push("rounded-"+S)),w&&$.push("text-"+w),y&&C&&$.push("text-"+y+"-"+C),R&&$.push("w-"+R),D&&$.push("h-"+D),I&&$.push("img-thumbnail"),O&&("true"==O?$.push("border"):"x"==O?($.push("border-left"),$.push("border-right")):"y"==O?($.push("border-top"),$.push("border-bottom")):"u"==O?($.push("border-left"),$.push("border-right"),$.push("border-bottom")):"inverted-u"==O?($.push("border-left"),$.push("border-right"),$.push("border-top")):$.push("border-"+O)),j&&$.push("border-"+j),P&&$.push("hover-shadow"),M&&$.push("hover-move"),N&&$.push("disabled"),T&&$.push("align-"+T),z&&($.push("speech-bubble"),"md"!=z&&$.push("speech-bubble-"+z)),q&&($.push("alert"),F&&$.push("alert-"+F)),H&&$.push("object-fit-"+H),X&&$.push("overflow-"+X),G&&$.push("multilayer-"+G),Y&&$.push("z-"+Y),J&&$.push("banner-inner"),K&&$.push("top-0"),Q&&$.push("bottom-0"),U&&$.push("left-0"),V&&$.push("right-0"),Z&&$.push("position-"+Z),$.join(" ")}const n=(e,t)=>{let s=[];return void 0!==t&&null!=t&&Array.isArray(t)&&t.length>0?e.forEach((e=>{void 0!==t.find((t=>t===e.value))&&s.push(e)})):s=e,s},i=[{value:"",label:(0,t.__)("– unset –","bsx-blocks")},{value:"0",label:(0,t.__)("none (0)","bsx-blocks")},{value:"1",label:(0,t.__)("extra small","bsx-blocks")},{value:"2",label:(0,t.__)("small","bsx-blocks")},{value:"3",label:(0,t.__)("medium","bsx-blocks")},{value:"4",label:(0,t.__)("large","bsx-blocks")},{value:"5",label:(0,t.__)("extra large","bsx-blocks")}],c=((0,t.__)("– unset –","bsx-blocks"),(0,t.__)("Default (XS up)","bsx-blocks"),(0,t.__)("SM up","bsx-blocks"),(0,t.__)("MD up","bsx-blocks"),(0,t.__)("LG up","bsx-blocks"),(0,t.__)("XL up","bsx-blocks"),(0,t.__)("– unset –","bsx-blocks"),(0,t.__)("All","bsx-blocks"),(0,t.__)("Before","bsx-blocks"),(0,t.__)("After","bsx-blocks"),(0,t.__)("Y (before & after)","bsx-blocks"),(0,t.__)("Left","bsx-blocks"),(0,t.__)("Right","bsx-blocks"),(0,t.__)("X (left & right)","bsx-blocks"),(0,t.__)("– unset –","bsx-blocks"),(0,t.__)("White","bsx-blocks"),(0,t.__)("Primary","bsx-blocks"),(0,t.__)("Secondary","bsx-blocks"),(0,t.__)("Success","bsx-blocks"),(0,t.__)("Danger","bsx-blocks"),(0,t.__)("Warning","bsx-blocks"),(0,t.__)("Info","bsx-blocks"),(0,t.__)("Light","bsx-blocks"),(0,t.__)("Dark","bsx-blocks"),[{value:"",label:(0,t.__)("– unset –","bsx-blocks")},{value:"white",label:(0,t.__)("White","bsx-blocks")},{value:"primary",label:(0,t.__)("Primary","bsx-blocks")},{value:"secondary",label:(0,t.__)("Secondary","bsx-blocks")},{value:"success",label:(0,t.__)("Success","bsx-blocks")},{value:"danger",label:(0,t.__)("Danger","bsx-blocks")},{value:"warning",label:(0,t.__)("Warning","bsx-blocks")},{value:"info",label:(0,t.__)("Info","bsx-blocks")},{value:"light",label:(0,t.__)("Light","bsx-blocks")},{value:"dark",label:(0,t.__)("Dark","bsx-blocks")},{value:"muted",label:(0,t.__)("Muted","bsx-blocks")},{value:"white-50",label:(0,t.__)("White transparent","bsx-blocks")},{value:"black-50",label:(0,t.__)("Black transparent","bsx-blocks")},{value:"inherit",label:(0,t.__)("Inherit","bsx-blocks")}]),_=((0,t.__)("Primary","bsx-blocks"),(0,t.__)("Secondary","bsx-blocks"),(0,t.__)("Success","bsx-blocks"),(0,t.__)("Danger","bsx-blocks"),(0,t.__)("Warning","bsx-blocks"),(0,t.__)("Info","bsx-blocks"),(0,t.__)("Light","bsx-blocks"),(0,t.__)("Dark","bsx-blocks"),(0,t.__)("Link Button","bsx-blocks"),(0,t.__)("Text link","bsx-blocks"),(0,t.__)("– unset –","bsx-blocks"),(0,t.__)("White","bsx-blocks"),(0,t.__)("White opaque","bsx-blocks"),(0,t.__)("White transparent","bsx-blocks"),(0,t.__)("Black","bsx-blocks"),(0,t.__)("Black opaque","bsx-blocks"),(0,t.__)("Black transparent","bsx-blocks"),(0,t.__)("Primary","bsx-blocks"),(0,t.__)("Primary opaque","bsx-blocks"),(0,t.__)("Primary transparent","bsx-blocks"),(0,t.__)("Secondary","bsx-blocks"),(0,t.__)("Secondary opaque","bsx-blocks"),(0,t.__)("Secondary transparent","bsx-blocks"),(0,t.__)("Success","bsx-blocks"),(0,t.__)("Success opaque","bsx-blocks"),(0,t.__)("Success transparent","bsx-blocks"),(0,t.__)("Danger","bsx-blocks"),(0,t.__)("Danger opaque","bsx-blocks"),(0,t.__)("Danger transparent","bsx-blocks"),(0,t.__)("Warning","bsx-blocks"),(0,t.__)("Warning opaque","bsx-blocks"),(0,t.__)("Warning transparent","bsx-blocks"),(0,t.__)("Info","bsx-blocks"),(0,t.__)("Info opaque","bsx-blocks"),(0,t.__)("Info transparent","bsx-blocks"),(0,t.__)("Light","bsx-blocks"),(0,t.__)("Light opaque","bsx-blocks"),(0,t.__)("Light transparent","bsx-blocks"),(0,t.__)("Dark","bsx-blocks"),(0,t.__)("Dark opaque","bsx-blocks"),(0,t.__)("Dark transparent","bsx-blocks"),(0,t.__)("Transparent","bsx-blocks"),(0,t.__)("– unset –","bsx-blocks"),(0,t.__)("left","bsx-blocks"),(0,t.__)("Center","bsx-blocks"),(0,t.__)("Right","bsx-blocks"),(0,t.__)("Align left","bsx-blocks"),(0,t.__)("Align center","bsx-blocks"),(0,t.__)("Align right","bsx-blocks"),(0,t.__)("– unset –","bsx-blocks"),["core/paragraph","core/heading"]),u=(0,b.createHigherOrderComponent)((l=>b=>{const{name:u,attributes:g,setAttributes:d,isSelected:p}=b,{id:h,textSize:x,textColor:k,fontWeight:m,textShadow:v,belowNavbar:f,marginBefore:S,marginAfter:w,marginLeft:y,marginRight:C,paddingBefore:B,paddingAfter:L,paddingLeft:A,paddingRight:E,className:W}=g,R=r({textSize:x,textColor:k,fontWeight:m,textShadow:v,belowNavbar:f,marginBefore:S,marginAfter:w,marginLeft:y,marginRight:C,paddingBefore:B,paddingAfter:L,paddingLeft:A,paddingRight:E},"bsxui-core-block-wrapper"),D=(0,e.createElement)(s.Fragment,null,_.includes(b.name)&&"undefiend"!=typeof R&&R?(0,e.createElement)("div",{className:R},(0,e.createElement)(l,{...b})):(0,e.createElement)(l,{...b}));return _.includes(b.name)&&b.isSelected?(0,e.createElement)(s.Fragment,null,D,(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(a.PanelBody,{title:(0,t.__)("BSX global settings","bsx-blocks")},(0,e.createElement)(a.TextControl,{label:(0,t.__)("ID","bsx-blocks"),value:h,onChange:e=>{d({id:e})},help:(0,t.__)("Add ID if necessary (optional).","bsx-blocks")}),(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Text size (optional)","bsx-blocks"),value:x,onChange:e=>{d({textSize:e})},options:[{value:"",label:(0,t.__)("– unset –","bsx-blocks")},{value:"lead",label:(0,t.__)("Larger","bsx-blocks")},{value:"small",label:(0,t.__)("Smaller","bsx-blocks")},{value:"h6",label:(0,t.__)("Heading 6 (smallest)","bsx-blocks")},{value:"h5",label:(0,t.__)("Heading 5","bsx-blocks")},{value:"h4",label:(0,t.__)("Heading 4","bsx-blocks")},{value:"h3",label:(0,t.__)("Heading 3","bsx-blocks")},{value:"h2",label:(0,t.__)("Heading 2","bsx-blocks")},{value:"h1",label:(0,t.__)("Heading 1 (biggest)","bsx-blocks")},{value:"display-4",label:(0,t.__)("Large 4 (smallest)","bsx-blocks")},{value:"display-3",label:(0,t.__)("Large 3","bsx-blocks")},{value:"display-2",label:(0,t.__)("Large 2","bsx-blocks")},{value:"display-1",label:(0,t.__)("Large 1 (biggest)","bsx-blocks")}]}),((s,l,b,o)=>{const r=c;return(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Text Color","bsx-blocks"),value:s,onChange:l,options:n(r,void 0)})})(k,(e=>{d({textColor:e})})),((s,l,b)=>{const o=[{value:"",label:(0,t.__)("– unset –","bsx-blocks")},{value:"light",label:(0,t.__)("Light","bsx-blocks")},{value:"normal",label:(0,t.__)("Normal","bsx-blocks")},{value:"bold",label:(0,t.__)("Bold","bsx-blocks")}];return(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Font weight","bsx-blocks"),value:s,onChange:l,options:n(o,void 0)})})(m,(e=>{d({fontWeight:e})})),((s,l,b)=>{const o=[{value:"",label:(0,t.__)("– unset –","bsx-blocks")},{value:"dark",label:(0,t.__)("Dark","bsx-blocks")},{value:"darker",label:(0,t.__)("Darker","bsx-blocks")},{value:"darkest",label:(0,t.__)("Darkest","bsx-blocks")},{value:"light",label:(0,t.__)("Light","bsx-blocks")},{value:"primary",label:(0,t.__)("Primary","bsx-blocks")}];return(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Text shadow","bsx-blocks"),value:s,onChange:l,options:n(o,void 0)})})(v,(e=>{d({textShadow:e})})),((s,l,b)=>{const o=i;return(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Margin before","bsx-blocks"),value:s,onChange:l,options:n(o,void 0),help:(0,t.__)("Spacer before element","bsx-blocks")})})(S,(e=>{d({marginBefore:e})})),((s,l,b)=>{const o=i;return(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Margin after","bsx-blocks"),value:s,onChange:l,options:n(o,void 0),help:(0,t.__)("Spacer after element","bsx-blocks")})})(w,(e=>{d({marginAfter:e})})),((s,l,b)=>{const o=i;return(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Margin left","bsx-blocks"),value:s,onChange:l,options:n(o,void 0)})})(y,(e=>{d({marginLeft:e})})),((s,l,b)=>{const o=i;return(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Margin right","bsx-blocks"),value:s,onChange:l,options:n(o,void 0)})})(C,(e=>{d({marginRight:e})})))),(0,e.createElement)(o.InspectorAdvancedControls,null,((s,l,b)=>{const o=i;return(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Padding left","bsx-blocks"),value:s,onChange:l,options:n(o,void 0),help:(0,t.__)("Inner spacer left","bsx-blocks")})})(A,(e=>{d({paddingLeft:e})})),((s,l,b)=>{const o=i;return(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Padding right","bsx-blocks"),value:s,onChange:l,options:n(o,void 0),help:(0,t.__)("Inner spacer right","bsx-blocks")})})(E,(e=>{d({paddingRight:e})})),((s,l,b)=>{const o=i;return(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Padding before","bsx-blocks"),value:s,onChange:l,options:n(o,void 0),help:(0,t.__)("Inner spacer before","bsx-blocks")})})(B,(e=>{d({paddingBefore:e})})),((s,l,b)=>{const o=i;return(0,e.createElement)(a.SelectControl,{label:(0,t.__)("Padding after","bsx-blocks"),value:s,onChange:l,options:n(o,void 0),help:(0,t.__)("Inner spacer after","bsx-blocks")})})(L,(e=>{d({paddingAfter:e})})),(I=f,j=e=>{d({belowNavbar:e})},(0,e.createElement)(a.ToggleControl,{label:(0,t.__)("Below navbar","bsx-blocks"),checked:!!I,onChange:j,help:(0,t.__)("Enable if element is overlayed by navbar and needs a spacer top.","bsx-blocks")})))):D;var I,j}),"addGlobalBlockSettings");(0,l.addFilter)("blocks.registerBlockType","bsx-blocks/custom-attributes",(function(e){return void 0!==e.attributes&&_.includes(e.name)&&(void 0===e.attributes.id&&(e.attributes=Object.assign(e.attributes,{id:{type:"string"}})),void 0===e.attributes.belowNavbar&&(e.attributes=Object.assign(e.attributes,{belowNavbar:{type:"boolean"}})),void 0===e.attributes.textSize&&(e.attributes=Object.assign(e.attributes,{textSize:{type:"string"}})),void 0===e.attributes.textColor&&(e.attributes=Object.assign(e.attributes,{textColor:{type:"string"}})),void 0===e.attributes.fontWeight&&(e.attributes=Object.assign(e.attributes,{fontWeight:{type:"string"}})),void 0===e.attributes.textShadow&&(e.attributes=Object.assign(e.attributes,{textShadow:{type:"string"}})),void 0===e.attributes.marginBefore&&(e.attributes=Object.assign(e.attributes,{marginBefore:{type:"string"}})),void 0===e.attributes.marginAfter&&(e.attributes=Object.assign(e.attributes,{marginAfter:{type:"string"}})),void 0===e.attributes.marginLeft&&(e.attributes=Object.assign(e.attributes,{marginLeft:{type:"string"}})),void 0===e.attributes.marginRight&&(e.attributes=Object.assign(e.attributes,{marginRight:{type:"string"}})),void 0===e.attributes.paddingBefore&&(e.attributes=Object.assign(e.attributes,{paddingBefore:{type:"string"}})),void 0===e.attributes.paddingAfter&&(e.attributes=Object.assign(e.attributes,{paddingAfter:{type:"string"}})),void 0===e.attributes.paddingLeft&&(e.attributes=Object.assign(e.attributes,{paddingLeft:{type:"string"}})),void 0===e.attributes.paddingRight&&(e.attributes=Object.assign(e.attributes,{paddingRight:{type:"string"}}))),e})),(0,l.addFilter)("editor.BlockEdit","bsx-blocks/add-global-block-settings",u),(0,l.addFilter)("blocks.getSaveContent.extraProps","bsx-blocks/apply-extra-attributes",(function(e,t,s){const{id:l,textSize:a,textColor:b,fontWeight:o,textShadow:n,belowNavbar:i,marginBefore:c,marginAfter:u,marginLeft:g,marginRight:d,paddingBefore:p,paddingAfter:h,paddingLeft:x,paddingRight:k}=s;if(_.includes(t.name)){s.id&&(e.id=s.id);const t=void 0!==e.className?e.className.split(" "):[],l=["left","center","right"],_="text-",m=null!=s.textAlign?s.textAlign:s.align;if(m&&l.includes(m))t.push(_+m);else for(let e=0;e<t.length;e++)0==t[e].indexOf(_)&&l.includes(t[e].substring(_.length))&&t.splice(e,1);e.className=r({textSize:a,textColor:b,fontWeight:o,textShadow:n,belowNavbar:i,marginBefore:c,marginAfter:u,marginLeft:g,marginRight:d,paddingBefore:p,paddingAfter:h,paddingLeft:x,paddingRight:k},t.join(" "))}return e}))})();