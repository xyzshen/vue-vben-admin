import{B as e,t}from"./data.6a9f7f1e.js";import{d as a}from"./ScrollContainer.2e84ada1.js";import{d as n,r as s,g as l,e as o,h as d,o as r,i,w as c,j as p,m as f}from"./index.7840967b.js";import{_ as u}from"./index.6cdf17c3.js";import"./index.8be26ef1.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./RightOutlined.13032d9e.js";/* empty css              */import"./useTimeout.8b4166a5.js";import"./useScrollTo.7d976049.js";import"./vendor.3b1829c7.js";import"./index.b6c81a9a.js";import"./index.325cf44a.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./isEqual.7dee63f7.js";import"./toInteger.d30ea4bf.js";import"./DownOutlined.ae0ff699.js";import"./index.106272d7.js";import"./usePageContext.f4681fc6.js";import"./transButton.b7f9ce77.js";import"./ArrowLeftOutlined.2820faef.js";var m=n({components:{BasicTree:e,CollapseContainer:a,PageWrapper:u},setup(){const e=s(null),{createMessage:a}=l();function n(){const t=o(e);if(!t)throw new Error("tree is null!");return t}return{treeData:t,treeRef:e,handleLevel:function(e){n().filterByLevel(e)},handleSetCheckData:function(){n().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=n().getCheckedKeys();a.success(JSON.stringify(e))},handleSetSelectData:function(){n().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=n().getSelectedKeys();a.success(JSON.stringify(e))},handleSetExpandData:function(){n().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=n().getExpandedKeys();a.success(JSON.stringify(e))},appendNodeByKey:function(e=null){n().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){n().deleteNodeByKey(e)},updateNodeByKey:function(e){n().updateNodeByKey(e,{title:"parent2-new"})}}}});const y={class:"mb-4"},C=f(" 显示到第2级 "),h=f(" 显示到第1级 "),k=f(" 设置勾选数据 "),j=f(" 获取勾选数据 "),D=f(" 设置选中数据 "),K=f(" 获取选中数据 "),S=f(" 设置展开数据 "),x=f(" 获取展开数据 "),B={class:"mb-4"},_=f(" 添加根节点 "),g=f(" 添加在parent3内添加节点 "),b=f(" 删除parent3节点 "),N=f(" 更新parent2节点 ");m.render=function(e,t,a,n,s,l){const o=d("a-button"),f=d("BasicTree"),u=d("CollapseContainer"),m=d("PageWrapper");return r(),i(m,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:c((()=>[p("div",y,[p(o,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:c((()=>[C])),_:1}),p(o,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:c((()=>[h])),_:1}),p(o,{onClick:e.handleSetCheckData,class:"mr-2"},{default:c((()=>[k])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetCheckData,class:"mr-2"},{default:c((()=>[j])),_:1},8,["onClick"]),p(o,{onClick:e.handleSetSelectData,class:"mr-2"},{default:c((()=>[D])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetSelectData,class:"mr-2"},{default:c((()=>[K])),_:1},8,["onClick"]),p(o,{onClick:e.handleSetExpandData,class:"mr-2"},{default:c((()=>[S])),_:1},8,["onClick"]),p(o,{onClick:e.handleGetExpandData,class:"mr-2"},{default:c((()=>[x])),_:1},8,["onClick"])]),p("div",B,[p(o,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:c((()=>[_])),_:1}),p(o,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:c((()=>[g])),_:1}),p(o,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:c((()=>[b])),_:1}),p(o,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:c((()=>[N])),_:1})]),p(u,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:c((()=>[p(f,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])),_:1})};export default m;
