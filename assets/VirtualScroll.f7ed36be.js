import{aV as t,aW as e,d as a,cp as i,cq as s,h as r,o,i as d,j as l,l as m,bw as c,m as n}from"./index.06f3ee29.js";import{D as p}from"./index.33e2796b.js";import{_ as u}from"./index.192de65f.js";import"./vendor.0d1494f4.js";import"./index.c2c2071e.js";import"./index.7729c420.js";import"./RightOutlined.3a6167aa.js";import"./EllipsisOutlined.9da6daab.js";import"./types.ea4e42e6.js";import"./isEqual.74a158b4.js";import"./toInteger.c1d92202.js";import"./DownOutlined.a2b62231.js";import"./index.95c10fda.js";import"./index.3617ac63.js";import"./usePageContext.5934f257.js";import"./transButton.0234a19c.js";import"./ArrowLeftOutlined.8c726f84.js";const j=t((()=>e((()=>import("./index.c2ae9005.js")),["/assets/index.c2ae9005.js","/assets/index.5ddcb78c.css","/assets/index.06f3ee29.js","/assets/index.4e23aa17.css","/assets/vendor.0d1494f4.js","/assets/vendor.4a5fa02d.css"]))),f=(()=>{const t=[];for(let e=1;e<2e4;e++)t.push({title:"列表项"+e});return t})();var _=a({components:{VScroll:j,Divider:p,PageWrapper:u},setup:()=>({data:f})});const v=c("data-v-ee54a078");i("data-v-ee54a078");const h=n("基础滚动示例"),x={class:"virtual-scroll-demo-wrap"},g={class:"virtual-scroll-demo__item"},w=n("即使不可见，也预先加载50条数据，防止空白"),b={class:"virtual-scroll-demo-wrap"},D={class:"virtual-scroll-demo__item"};s();const O=v(((t,e,a,i,s,c)=>{const n=r("Divider"),p=r("VScroll"),u=r("PageWrapper");return o(),d(u,{class:"virtual-scroll-demo"},{default:v((()=>[l(n,null,{default:v((()=>[h])),_:1}),l("div",x,[l(p,{itemHeight:41,items:t.data,height:300,width:300},{default:v((({item:t})=>[l("div",g,m(t.title),1)])),_:1},8,["items"])]),l(n,null,{default:v((()=>[w])),_:1}),l("div",b,[l(p,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:v((({item:t})=>[l("div",D,m(t.title),1)])),_:1},8,["items"])])])),_:1})}));_.render=O,_.__scopeId="data-v-ee54a078";export default _;
