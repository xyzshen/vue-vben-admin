import{d as e,h as r,o as i,i as o,w as t,j as s,m as a}from"./index.06f3ee29.js";import{A as n}from"./index.316663d4.js";import{u as p}from"./index.907c3c15.js";import m from"./Drawer1.445d8bf3.js";import d from"./Drawer2.4b788116.js";import j from"./Drawer3.89598635.js";import c from"./Drawer4.78156574.js";import l from"./Drawer5.976887fe.js";import{_ as f}from"./index.192de65f.js";import"./vendor.0d1494f4.js";import"./index.fd5e7555.js";import"./index.6ff2b8a1.js";import"./index.de8bd41e.js";import"./domUtils.8545414a.js";import"./_stringToArray.de50b038.js";import"./RightOutlined.3a6167aa.js";import"./index.95c10fda.js";import"./useTimeout.6f68f351.js";import"./useScrollTo.0454a233.js";import"./animation.557dbdd5.js";import"./ArrowLeftOutlined.8c726f84.js";import"./useAttrs.75e4bdd4.js";import"./isEqual.74a158b4.js";import"./index.46e5b397.js";import"./index.33949cd9.js";import"./responsiveObserve.c545f1cc.js";import"./index.ca107bc6.js";import"./findIndex.e0eb9451.js";import"./_baseProperty.74f89655.js";import"./toInteger.c1d92202.js";import"./index.980e8b38.js";import"./index.6f563249.js";import"./SearchOutlined.80b97ace.js";import"./CheckOutlined.170c5a81.js";import"./DownOutlined.a2b62231.js";import"./index.05074f4c.js";import"./index.a3e88181.js";import"./UpOutlined.c18e08b2.js";import"./index.5f26cfb9.js";import"./EyeOutlined.9c30adbb.js";import"./index.1856500c.js";import"./colors.150c899a.js";import"./RedoOutlined.8be832f0.js";import"./index.7729c420.js";import"./EllipsisOutlined.9da6daab.js";import"./types.ea4e42e6.js";import"./Tree.918118f3.js";import"./util.6f4aed49.js";import"./uuid.0357dfa3.js";import"./index.51a23a15.js";import"./DeleteOutlined.084cf4d3.js";import"./index.894ac7ce.js";import"./useWindowSizeFn.c470727d.js";import"./FullscreenOutlined.bbb91eb1.js";import"./index.33e2796b.js";import"./index.be890f15.js";import"./index.2b3a1b55.js";import"./LeftOutlined.117bdb10.js";import"./download.0962c71e.js";import"./useForm.bc255b70.js";import"./index.c2c2071e.js";import"./index.3617ac63.js";import"./usePageContext.5934f257.js";import"./transButton.0234a19c.js";var u=e({components:{Alert:n,PageWrapper:f,Drawer1:m,Drawer2:d,Drawer3:j,Drawer4:c,Drawer5:l},setup(){const[e,{openDrawer:r,setDrawerProps:i}]=p(),[o,{openDrawer:t}]=p(),[s,{openDrawer:a}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:j}]=p();return{register1:e,openDrawer1:r,register2:o,openDrawer2:t,register3:s,openDrawer3:a,register4:n,register5:d,openDrawer5:j,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const w=a("打开Drawer"),D=a("打开Drawer"),b=a("打开Drawer"),g=a("打开Drawer并传递数据"),x=a("打开详情Drawer");u.render=function(e,a,n,p,m,d){const j=r("Alert"),c=r("a-button"),l=r("Drawer1"),f=r("Drawer2"),u=r("Drawer3"),y=r("Drawer4"),O=r("Drawer5"),R=r("PageWrapper");return i(),o(R,{title:"抽屉组件使用示例"},{default:t((()=>[s(j,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[w])),_:1},8,["onClick"]),s(j,{message:"内外同时控制显示隐藏","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:a[1]||(a[1]=r=>e.openDrawer2(!0))},{default:t((()=>[D])),_:1}),s(j,{message:"自适应高度/显示footer","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:a[2]||(a[2]=r=>e.openDrawer3(!0))},{default:t((()=>[b])),_:1}),s(j,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[g])),_:1},8,["onClick"]),s(j,{message:"详情页模式","show-icon":""}),s(c,{type:"primary",class:"my-4",onClick:a[3]||(a[3]=r=>e.openDrawer5(!0))},{default:t((()=>[x])),_:1}),s(l,{onRegister:e.register1},null,8,["onRegister"]),s(f,{onRegister:e.register2},null,8,["onRegister"]),s(u,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"]),s(O,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default u;
