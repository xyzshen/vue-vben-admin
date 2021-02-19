import{d as e,u as s,aB as r,K as i,dC as t,f as o,h as a,o as d,i as l,w as n,j as m,l as p,m as c,a7 as f}from"./index.7840967b.js";import{_ as j,b as u}from"./useModal.8f0c71bb.js";import{f as b}from"./BasicForm.3ffdbf8a.js";import{u as x}from"./useForm.fa74c36f.js";import{h as g}from"./header.d801b988.js";import"./vendor.3b1829c7.js";import"./useTimeout.8b4166a5.js";import"./useWindowSizeFn.c2452f79.js";import"./ScrollContainer.2e84ada1.js";import"./index.8be26ef1.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./RightOutlined.13032d9e.js";/* empty css              */import"./useScrollTo.7d976049.js";import"./FullscreenOutlined.480b5267.js";import"./isEqual.7dee63f7.js";import"./index.e0e52653.js";import"./index.887ab342.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.05e654d6.js";import"./get.e2bcbe96.js";import"./_baseProperty.74f89655.js";import"./toInteger.d30ea4bf.js";import"./index.1ce9a741.js";import"./index.4868b979.js";import"./SearchOutlined.1fb99c16.js";import"./EyeOutlined.dac8873d.js";import"./index.6fbb1364.js";import"./CheckOutlined.f72c5694.js";import"./DownOutlined.ae0ff699.js";import"./index.6de30622.js";import"./index.7076e471.js";import"./UpOutlined.6bb69641.js";import"./index.f8b026f5.js";import"./RedoOutlined.a27aff3b.js";import"./index.325cf44a.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./Tree.d37c809f.js";import"./util.b0718c07.js";import"./uuid.11608e9f.js";import"./index.cb82d046.js";import"./DeleteOutlined.d1274f99.js";import"./index.176bd308.js";import"./index.de0eec0c.js";import"./Dropdown.956e144f.js";import"./index.274e9900.js";import"./LeftOutlined.aecb60b5.js";import"./download.b251e1e8.js";var h=e({name:"LockModal",components:{BasicModal:j,BasicForm:b},setup(){const{t:e}=s(),{prefixCls:a}=r("header-lock-modal"),d=i((()=>{var e;return null==(e=o.getUserInfoState)?void 0:e.realName})),[l,{closeModal:n}]=u(),[m,{validateFields:p,resetFields:c}]=x({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:a,getRealName:d,register:l,registerForm:m,handleLock:async function(){const e=(await p()).password;n(),t.commitLockInfoState({isLock:!0,pwd:e}),await c()},headerImg:g}}});h.render=function(e,s,r,i,t,o){const j=a("BasicForm"),u=a("a-button"),b=a("BasicModal");return d(),l(b,f({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:n((()=>[m("div",{class:`${e.prefixCls}__entry`},[m("div",{class:`${e.prefixCls}__header`},[m("img",{src:e.headerImg,class:`${e.prefixCls}__header-img`},null,10,["src"]),m("p",{class:`${e.prefixCls}__header-name`},p(e.getRealName),3)],2),m(j,{onRegister:e.registerForm},null,8,["onRegister"]),m("div",{class:`${e.prefixCls}__footer`},[m(u,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:n((()=>[c(p(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default h;
