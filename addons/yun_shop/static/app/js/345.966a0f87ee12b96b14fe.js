webpackJsonp([345],{O8iH:function(t,e,i){var o=i("UE4z");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("56b1aee2",o,!0,{})},UE4z:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n#replenish-order #order-box .order .goods-list[data-v-696e2f0c] {\n  border-top: solid 0.0625rem #ebebeb;\n  border-bottom: solid 0.0625rem #ebebeb;\n  background-color: #fff;\n  margin-bottom: 0.625rem;\n}\n#replenish-order #order-box .order .goods-list h1[data-v-696e2f0c] {\n    font-weight: normal;\n    font-size: 14px;\n    padding: 0 0.875rem;\n    height: 2.25rem;\n    line-height: 2.25rem;\n    text-align: left;\n}\n#replenish-order #order-box .order .goods-list h1 span[data-v-696e2f0c] {\n      color: #f15353;\n      position: absolute;\n      right: 0.875rem;\n}\n#replenish-order #order-box .order .goods-list .goods[data-v-696e2f0c] {\n    background-color: #fafafa;\n    padding: 0.75rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n#replenish-order #order-box .order .goods-list .goods .img[data-v-696e2f0c] {\n      width: 4rem;\n      height: 4rem;\n      background: #fff;\n      overflow: hidden;\n      margin-right: 0.75rem;\n}\n#replenish-order #order-box .order .goods-list .goods .img img[data-v-696e2f0c] {\n        width: 100%;\n}\n#replenish-order #order-box .order .goods-list .goods .info[data-v-696e2f0c] {\n      width: 17.1875rem;\n      font-size: 14px;\n      position: relative;\n}\n#replenish-order #order-box .order .goods-list .goods .info li[data-v-696e2f0c]:last-child {\n        width: 100%;\n        position: absolute;\n        bottom: 0rem;\n        color: #8c8c8c;\n}\n#replenish-order #order-box .order .goods-list .goods .info li[data-v-696e2f0c] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n}\n#replenish-order #order-box .order .goods-list .goods .info li span[data-v-696e2f0c]:first-child {\n          width: 11.25rem;\n          text-align: left;\n          line-height: 1.25rem;\n}\n#replenish-order #order-box .order .goods-list .goods .info li .goods-name[data-v-696e2f0c] {\n          display: -webkit-box;\n          -webkit-box-orient: vertical;\n          -webkit-line-clamp: 2;\n          overflow: hidden;\n          text-overflow: ellipsis;\n}\n#replenish-order #order-box .order .goods-list .price[data-v-696e2f0c] {\n    height: 2.25rem;\n    line-height: 2.25rem;\n    text-align: right;\n    font-size: 18px;\n    padding: 0 0.875rem;\n}\n#replenish-order #order-box .order .goods-list .price span[data-v-696e2f0c] {\n      font-weight: normal;\n      font-size: 14px;\n}\n#replenish-order #order-box .order .goods-list .btn[data-v-696e2f0c] {\n    border-top: solid 0.0625rem #ebebeb;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    height: 2.875rem;\n    padding: 0 0.875rem;\n}\n#replenish-order #order-box .order .goods-list .btn span[data-v-696e2f0c] {\n      padding: 0.25rem 0.625rem;\n      border-radius: 0.1875rem;\n      border: solid 0.0625rem #666;\n      font-size: 12px;\n      text-align: center;\n      margin-left: 0.625rem;\n}\n",""])},Zi8n:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("Tg7E"),s=i("Pexp"),n=document.documentElement,a=document.body,r={data:function(){return{list:[],status:"",activeName:"-1",isLoadMore:!0,page:1,total_page:0}},activated:function(){this.initData(),this.getData(),window.addEventListener("scroll",this.handleScroll)},deactivated:function(){this.activeName="-1",window.removeEventListener("scroll",this.handleScroll)},methods:{toDetail:function(t){this.$router.push(this.fun.getUrl("ReplenishOrderDetail",{},{id:t,name:"replenish"}))},operation:function(t,e){8===t.value?this.checklogistics(e,t):2===t.value?this.confirmOrder(e,t):-1===t.value?this.cancleOrder(e,t):1===t.value&&this.send(e,t)},cancleOrder:function(t,e){var i=this;Object(o.MessageBox)({title:"提示",message:"确定取消此订单?",showCancelButton:!0}).then(function(o){"confirm"==o&&(i.list.splice(i.list.indexOf(t),1),i.sentRequest(e.api,{distributor_order_id:t.id},!1))})},sentRequest:function(t,e,i){var s=this;$http.get(t,e,"").then(function(t){console.log("显示",t),1===t.result?(o.MessageBox.alert(t.msg,"提示"),s.getData(s.status)):o.MessageBox.alert(t.msg,"提示")},function(t){})},checklogistics:function(t,e){this.$router.push(this.fun.getUrl("logistics",{order:t,fromGrab:1,api:e.api}))},send:function(t,e){this.$router.push(this.fun.getUrl("Send",{id:t.id,name:"replenish"}))},confirmOrder:function(t,e){var i=this;Object(o.MessageBox)({title:"提示",message:"您确定收到货物?",showCancelButton:!0}).then(function(s){if("confirm"==s){var n=i;$http.get(e.api,{distributor_order_id:t.id},"操作中...").then(function(t){1===t.result?n.getData(n.status):o.MessageBox.alert(t.msg)},function(t){})}})},initData:function(){this.activeName="-1",this.page=1,this.total_page=0,this.isLoadMore=!0,this.list=[]},getRebate:function(t){var e=this.activeName;this.list=[],n.scrollTop=0,e>0?this.getData(e):this.getData()},checkStatus:function(t){this.api="1"===t?"plugin.kingtimes.frontend.provider.distributorOrderList.waitSend":"2"===t?"plugin.kingtimes.frontend.provider.distributorOrderList.waitReceive":"3"===t?"plugin.kingtimes.frontend.provider.distributorOrderList.completed":"plugin.kingtimes.frontend.provider.distributorOrderList.index"},getData:function(t){this.status=t>0?t:null;var e=this;e.isLoadMore=!1,e.checkStatus(t),e.page=1,$http.get(e.api,{pagesize:10},"加载中...").then(function(t){1===t.result?(e.isLoadMore=!0,e.total_page=t.data.last_page,e.total_page||(e.total_page=0),e.list=t.data.data):(Object(o.Toast)(t.msg),e.$router.push(e.fun.getUrl("member",{})))},function(t){console.log(t)})},getMoreData:function(){var t=this;t.isLoadMore=!1,t.checkStatus(this.status),this.page>=this.total_page||(this.page=this.page+1,$http.get(t.api,{page:t.page,pagesize:10},"加载中...").then(function(e){if(t.isLoadMore=!0,1!==e.result)return t.page=t.page-1,void(t.isLoadMore=!1);var i=e.data.data;t.list=t.list.concat(i)},function(t){}))},getScrollTop:function(){var t=0;return n&&n.scrollTop?t=n.scrollTop:a&&(t=a.scrollTop),t},getClientHeight:function(){return a.clientHeight&&n.clientHeight?Math.min(a.clientHeight,n.clientHeight):Math.max(a.clientHeight,n.clientHeight)},getScrollHeight:function(){return Math.max(a.scrollHeight,n.scrollHeight)},handleScroll:function(){this.getScrollTop()+this.getClientHeight()+5>this.getScrollHeight()&&(this.isLoadMore?this.getMoreData():console.log("没有更多数据"))}},components:{cTitle:s.a}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"replenish-order"}},[i("c-title",{attrs:{hide:!1,text:"补货单"}}),t._v(" "),i("div",{staticStyle:{height:"40px"}}),t._v(" "),i("div",{attrs:{id:"order-box"}},[i("mt-navbar",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[i("mt-tab-item",{attrs:{id:"-1"},nativeOn:{click:function(e){return t.getRebate(e)}}},[t._v("全部")]),t._v(" "),i("mt-tab-item",{attrs:{id:"1"},nativeOn:{click:function(e){return t.getRebate(e)}}},[t._v("待发货")]),t._v(" "),i("mt-tab-item",{attrs:{id:"2"},nativeOn:{click:function(e){return t.getRebate(e)}}},[t._v("待收货")]),t._v(" "),i("mt-tab-item",{attrs:{id:"3"},nativeOn:{click:function(e){return t.getRebate(e)}}},[t._v("已完成")])],1),t._v(" "),i("mt-tab-container",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[i("mt-tab-container-item",{attrs:{name:"-1"}},[t.status?t._e():i("div",{staticClass:"order"},t._l(t.list,function(e,o){return i("div",{key:o,staticClass:"goods-list",on:{click:function(i){return t.toDetail(e.id)}}},[i("h1",[t._v("订单号："+t._s(e.order_sn)),i("span",[t._v(t._s(e.status_name))])]),t._v(" "),t._l(e.order_goods,function(e,o){return i("div",{key:o,staticClass:"goods"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.thumb}})]),t._v(" "),i("ul",{staticClass:"info"},[i("li",[i("span",{staticClass:"goods-name",staticStyle:{"-webkit-box-orient":"vertical"}},[t._v(t._s(e.title))]),t._v(" "),i("span",[t._v("¥"+t._s((Number(e.goods_price)/e.total).toFixed(2)))])]),t._v(" "),i("li",{staticClass:"standard"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!e.goods_option_id,expression:"!item.goods_option_id"}]}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.goods_option_id,expression:"item.goods_option_id"}]},[t._v("规格："+t._s(e.goods_option_title))]),t._v(" "),i("span",[t._v("×"+t._s(e.total))])])])])}),t._v(" "),i("div",{staticClass:"price"},[i("h2",[i("span",[t._v("共"+t._s(e.goods_total)+"件商品  实付：")]),t._v("¥"+t._s(e.price))])]),t._v(" "),e.button_models&&e.button_models.length>0?i("div",{staticClass:"btn"},t._l(e.button_models,function(o,s){return i("span",{key:s,on:{click:function(i){return i.stopPropagation(),t.operation(o,e)}}},[t._v(t._s(o.name))])}),0):t._e()],2)}),0)]),t._v(" "),i("mt-tab-container-item",{attrs:{name:"1"}},["1"===t.status?i("div",{staticClass:"order"},t._l(t.list,function(e,o){return i("div",{key:o,staticClass:"goods-list",on:{click:function(i){return t.toDetail(e.id)}}},[i("h1",[t._v("订单号："+t._s(e.order_sn)),i("span",[t._v(t._s(e.status_name))])]),t._v(" "),t._l(e.order_goods,function(e,o){return i("div",{key:o,staticClass:"goods"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.thumb}})]),t._v(" "),i("ul",{staticClass:"info"},[i("li",[i("span",{staticClass:"goods-name",staticStyle:{"-webkit-box-orient":"vertical"}},[t._v(t._s(e.title))]),t._v(" "),i("span",[t._v("¥"+t._s((Number(e.goods_price)/e.total).toFixed(2)))])]),t._v(" "),i("li",{staticClass:"standard"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!e.goods_option_id,expression:"!item.goods_option_id"}]}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.goods_option_id,expression:"item.goods_option_id"}]},[t._v("规格："+t._s(e.goods_option_title))]),t._v(" "),i("span",[t._v("×"+t._s(e.total))])])])])}),t._v(" "),i("div",{staticClass:"price"},[i("h2",[i("span",[t._v("共"+t._s(e.goods_total)+"件商品  实付：")]),t._v("¥"+t._s(e.price))])]),t._v(" "),e.button_models&&e.button_models.length>0?i("div",{staticClass:"btn"},t._l(e.button_models,function(o,s){return i("span",{key:s,on:{click:function(i){return i.stopPropagation(),t.operation(o,e)}}},[t._v(t._s(o.name))])}),0):t._e()],2)}),0):t._e()]),t._v(" "),i("mt-tab-container-item",{attrs:{name:"2"}},["2"===t.status?i("div",{staticClass:"order"},t._l(t.list,function(e,o){return i("div",{key:o,staticClass:"goods-list",on:{click:function(i){return t.toDetail(e.id)}}},[i("h1",[t._v("订单号："+t._s(e.order_sn)),i("span",[t._v(t._s(e.status_name))])]),t._v(" "),t._l(e.order_goods,function(e,o){return i("div",{key:o,staticClass:"goods"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.thumb}})]),t._v(" "),i("ul",{staticClass:"info"},[i("li",[i("span",{staticClass:"goods-name",staticStyle:{"-webkit-box-orient":"vertical"}},[t._v(t._s(e.title))]),t._v(" "),i("span",[t._v("¥"+t._s((Number(e.goods_price)/e.total).toFixed(2)))])]),t._v(" "),i("li",{staticClass:"standard"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!e.goods_option_id,expression:"!item.goods_option_id"}]}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.goods_option_id,expression:"item.goods_option_id"}]},[t._v("规格："+t._s(e.goods_option_title))]),t._v(" "),i("span",[t._v("×"+t._s(e.total))])])])])}),t._v(" "),i("div",{staticClass:"price"},[i("h2",[i("span",[t._v("共"+t._s(e.goods_total)+"件商品  实付：")]),t._v("¥"+t._s(e.price))])]),t._v(" "),e.button_models&&e.button_models.length>0?i("div",{staticClass:"btn"},t._l(e.button_models,function(o,s){return i("span",{key:s,on:{click:function(i){return i.stopPropagation(),t.operation(o,e)}}},[t._v(t._s(o.name))])}),0):t._e()],2)}),0):t._e()]),t._v(" "),i("mt-tab-container-item",{attrs:{name:"3"}},["3"===t.status?i("div",{staticClass:"order"},t._l(t.list,function(e,o){return i("div",{key:o,staticClass:"goods-list",on:{click:function(i){return t.toDetail(e.id)}}},[i("h1",[t._v("订单号："+t._s(e.order_sn)),i("span",[t._v(t._s(e.status_name))])]),t._v(" "),t._l(e.order_goods,function(e,o){return i("div",{key:o,staticClass:"goods"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.thumb}})]),t._v(" "),i("ul",{staticClass:"info"},[i("li",[i("span",{staticClass:"goods-name",staticStyle:{"-webkit-box-orient":"vertical"}},[t._v(t._s(e.title))]),t._v(" "),i("span",[t._v("¥"+t._s((Number(e.goods_price)/e.total).toFixed(2)))])]),t._v(" "),i("li",{staticClass:"standard"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!e.goods_option_id,expression:"!item.goods_option_id"}]}),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.goods_option_id,expression:"item.goods_option_id"}]},[t._v("规格："+t._s(e.goods_option_title))]),t._v(" "),i("span",[t._v("×"+t._s(e.total))])])])])}),t._v(" "),i("div",{staticClass:"price"},[i("h2",[i("span",[t._v("共"+t._s(e.goods_total)+"件商品  实付：")]),t._v("¥"+t._s(e.price))])]),t._v(" "),e.button_models&&e.button_models.length>0?i("div",{staticClass:"btn"},t._l(e.button_models,function(o,s){return i("span",{key:s,on:{click:function(i){return i.stopPropagation(),t.operation(o,e)}}},[t._v(t._s(o.name))])}),0):t._e()],2)}),0):t._e()])],1)],1)],1)},staticRenderFns:[]};var l=i("VU/8")(r,d,!1,function(t){i("O8iH")},"data-v-696e2f0c",null);e.default=l.exports}});