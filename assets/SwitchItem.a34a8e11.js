import{d as e,aB as t,u as i,K as a,h as s,o as d,i as n,j as r,l as o,a7 as l,bx as p}from"./index.7840967b.js";import{S as c}from"./index.f8b026f5.js";import{b as m}from"./index.7e7d2ba8.js";import"./vendor.3b1829c7.js";import"./index.de0eec0c.js";import"./useDrawer.2b7caf51.js";import"./index.ecee494f.js";import"./ScrollContainer.2e84ada1.js";import"./index.8be26ef1.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./RightOutlined.13032d9e.js";/* empty css              */import"./useTimeout.8b4166a5.js";import"./useScrollTo.7d976049.js";import"./ArrowLeftOutlined.2820faef.js";import"./isEqual.7dee63f7.js";import"./useHeaderSetting.72bdad86.js";var f=e({name:"SwitchItem",components:{Switch:c},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:s}=t("setting-switch-item"),{t:d}=i();return{prefixCls:s,t:d,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:a((()=>e.def?{checked:e.def}:{}))}}});const u=p("data-v-3a858942")(((e,t,i,a,p,c)=>{const m=s("Switch");return d(),n("div",{class:e.prefixCls},[r("span",null,o(e.title),1),r(m,l(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));f.render=u,f.__scopeId="data-v-3a858942";export default f;
