import{_ as e}from"./index.850a2fcb.js";import{getBasicColumns as i}from"./tableData.252346e9.js";import{d as t}from"./table.590c2c09.js";import{d as s,h as o,o as r,i as p,j as d,w as m,l as n}from"./index.7840967b.js";import{u as j}from"./useTable.960fef92.js";import"./index.6fbb1364.js";import"./SearchOutlined.1fb99c16.js";import"./CheckOutlined.f72c5694.js";import"./DownOutlined.ae0ff699.js";import"./BasicForm.3ffdbf8a.js";import"./index.e0e52653.js";import"./index.887ab342.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.05e654d6.js";import"./isEqual.7dee63f7.js";import"./get.e2bcbe96.js";import"./_baseProperty.74f89655.js";import"./toInteger.d30ea4bf.js";import"./index.1ce9a741.js";import"./index.4868b979.js";import"./EyeOutlined.dac8873d.js";import"./index.6de30622.js";import"./index.7076e471.js";import"./UpOutlined.6bb69641.js";import"./index.f8b026f5.js";import"./RightOutlined.13032d9e.js";import"./RedoOutlined.a27aff3b.js";import"./index.325cf44a.js";import"./EllipsisOutlined.56d00ca0.js";import"./types.dc0f8288.js";import"./Tree.d37c809f.js";import"./util.b0718c07.js";/* empty css              */import"./uuid.11608e9f.js";import"./index.cb82d046.js";import"./DeleteOutlined.d1274f99.js";import"./index.176bd308.js";import"./useModal.8f0c71bb.js";import"./useTimeout.8b4166a5.js";import"./useWindowSizeFn.c2452f79.js";import"./ScrollContainer.2e84ada1.js";import"./index.8be26ef1.js";import"./domUtils.ea32cfbd.js";import"./_stringToArray.d1c7a4ab.js";import"./useScrollTo.7d976049.js";import"./FullscreenOutlined.480b5267.js";import"./index.de0eec0c.js";import"./Dropdown.956e144f.js";import"./index.274e9900.js";import"./LeftOutlined.aecb60b5.js";import"./download.b251e1e8.js";import"./index.79eaffe3.js";import"./DoubleLeftOutlined.b5cc0534.js";import"./DoubleRightOutlined.86eed210.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.b7f9ce77.js";import"./CaretDownFilled.e0971677.js";import"./useForm.fa74c36f.js";import"./useSortable.157fa08b.js";import"./clickOutside.ef1afe0b.js";import"./useExpose.b4029b20.js";var a=s({components:{BasicTable:e},setup(){const[e]=j({title:"可展开表格",api:t,titleHelpMessage:"不能与scroll共用",columns:i(),rowKey:"id",canResize:!1});return{registerTable:e}}});const l={class:"p-4"};a.render=function(e,i,t,s,j,a){const c=o("BasicTable");return r(),p("div",l,[d(c,{onRegister:e.registerTable},{expandedRowRender:m((({record:e})=>[d("span",null,"No: "+n(e.no),1)])),_:1},8,["onRegister"])])};export default a;
