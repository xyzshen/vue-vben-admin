import{b_ as e,r as t,cE as i,e as n,d as s,q as a,o as r,i as o,b0 as c,bX as d,h as l,j as u,l as p,bw as m}from"./index.06f3ee29.js";import{_ as f}from"./index.192de65f.js";import"./vendor.0d1494f4.js";import"./index.c2c2071e.js";import"./index.7729c420.js";import"./RightOutlined.3a6167aa.js";import"./EllipsisOutlined.9da6daab.js";import"./types.ea4e42e6.js";import"./isEqual.74a158b4.js";import"./toInteger.c1d92202.js";import"./DownOutlined.a2b62231.js";import"./index.95c10fda.js";import"./index.3617ac63.js";import"./usePageContext.5934f257.js";import"./transButton.0234a19c.js";import"./ArrowLeftOutlined.8c726f84.js";var j=s({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(s,{emit:r}){const o=t(null);return function(s,a,r="click"){if(e)return;const o=t(!1);function c(e){if("touchend"===e.type&&(o.value=!0),"click"===e.type&&n(o))return;const t=s.value;t&&e.target&&!t.contains(e.target)&&a(e)}i({el:document,name:"touchend",listener:c,options:!0}),i({el:document,name:r,listener:c,options:!0})}(o,(()=>{r("clickOutside")})),a((()=>{r("mounted")})),{wrap:o}}});const k={ref:"wrap"};j.render=function(e,t,i,n,s,a){return r(),o("div",k,[c(e.$slots,"default")],512)},d(j);var C=s({components:{ClickOutSide:j,PageWrapper:f},setup(){const e=t("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const O=m("data-v-7a637453"),x=O(((e,t,i,n,s,a)=>{const c=l("ClickOutSide"),d=l("PageWrapper");return r(),o(d,{title:"点内外部触发事件"},{default:O((()=>[u(c,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:O((()=>[u("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},p(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));C.render=x,C.__scopeId="data-v-7a637453";export default C;
