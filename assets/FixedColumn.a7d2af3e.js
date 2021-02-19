import{_ as e}from"./index.850a2fcb.js";import{d as i}from"./table.590c2c09.js";import{d as t,h as o,o as s,i as r,j as d,w as n}from"./index.7840967b.js";import{_ as a}from"./BasicForm.3ffdbf8a.js";import{u as l}from"./useTable.960fef92.js";import"./index.6fbb1364.js";import"./SearchOutlined.1fb99c16.js";import"./CheckOutlined.f72c5694.js";import"./DownOutlined.ae0ff699.js";import"./index.e0e52653.js";import"./index.887ab342.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.05e654d6.js";import"./isEqual.7dee63f7.js";import"./get.e2bcbe96.js";import"./_baseProperty.74f89655.js";import"./toInteger.d30ea4bf.js";import"./index.325cf44a.js";import"./RightOutlined.13032d9e.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./index.79eaffe3.js";import"./LeftOutlined.aecb60b5.js";import"./DoubleLeftOutlined.b5cc0534.js";import"./DoubleRightOutlined.86eed210.js";import"./zh_CN.8094f4d6.js";import"./uuid.11608e9f.js";import"./index.cb82d046.js";import"./util.b0718c07.js";import"./DeleteOutlined.d1274f99.js";import"./EyeOutlined.dac8873d.js";import"./Dropdown.956e144f.js";/* empty css              */import"./scrollTo.c1e0f75f.js";import"./transButton.b7f9ce77.js";import"./CaretDownFilled.e0971677.js";import"./useForm.fa74c36f.js";import"./index.4868b979.js";import"./index.7076e471.js";import"./UpOutlined.6bb69641.js";import"./index.f8b026f5.js";import"./useSortable.157fa08b.js";import"./clickOutside.ef1afe0b.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./useTimeout.8b4166a5.js";import"./useWindowSizeFn.c2452f79.js";import"./useModal.8f0c71bb.js";import"./ScrollContainer.2e84ada1.js";import"./index.8be26ef1.js";import"./useScrollTo.7d976049.js";import"./FullscreenOutlined.480b5267.js";import"./index.de0eec0c.js";import"./useExpose.b4029b20.js";import"./index.1ce9a741.js";import"./index.6de30622.js";import"./RedoOutlined.a27aff3b.js";import"./Tree.d37c809f.js";import"./index.176bd308.js";import"./index.274e9900.js";import"./download.b251e1e8.js";const p=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var m=t({components:{BasicTable:e,TableAction:a},setup(){const[e]=l({title:"TableAction组件及固定列示例",api:i,columns:p,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const c={class:"p-4"};m.render=function(e,i,t,a,l,p){const m=o("TableAction"),j=o("BasicTable");return s(),r("div",c,[d(j,{onRegister:e.registerTable},{action:n((({record:i})=>[d(m,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,i)}],dropDownActions:[{label:"启用",onClick:e.handleOpen.bind(null,i)}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default m;
