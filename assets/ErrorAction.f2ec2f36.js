import{d as t,b1 as o,u as e,aQ as r,$ as n,aB as s,du as a,h as i,o as u,i as d,w as l,j as m}from"./index.06f3ee29.js";import{B as c}from"./index.8bdf0007.js";import"./index.95c10fda.js";import{B as f}from"./BugOutlined.bd515b53.js";import"./vendor.0d1494f4.js";import"./colors.150c899a.js";import"./isNumeric.2bec345d.js";var p=t({name:"ErrorAction",components:{BugOutlined:f,Tooltip:o,Badge:c},setup(){const{t:t}=e(),{push:o}=r();return{t:t,getCount:n((()=>a.getErrorListCountState)),handleToErrorList:function(){o(s.ERROR_LOG_PAGE).then((()=>{a.commitErrorListCountState(0)}))}}}});p.render=function(t,o,e,r,n,s){const a=i("BugOutlined"),c=i("Badge"),f=i("Tooltip");return u(),d(f,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:l((()=>[m(c,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:l((()=>[m(a)])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default p;
