(function(t){function a(a){for(var e,r,c=a[0],l=a[1],o=a[2],_=0,d=[];_<c.length;_++)r=c[_],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);f&&f(a);while(d.length)d.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,a=0;a<n.length;a++){for(var s=n[a],e=!0,c=1;c<s.length;c++){var l=s[c];0!==i[l]&&(e=!1)}e&&(n.splice(a--,1),t=r(r.s=s[0]))}return t}var e={},i={app:0},n=[];function r(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,a,s){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(s,e,function(a){return t[a]}.bind(null,e));return s},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/portfoilo0617/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var o=0;o<c.length;o++)a(c[o]);var f=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"38f7":function(t,a,s){"use strict";var e=s("44bc"),i=s.n(e);i.a},"414e":function(t,a,s){t.exports=s.p+"img/empty.f6fdefe1.jpg"},"44bc":function(t,a,s){},"47a6":function(t,a,s){"use strict";var e=s("8c41"),i=s.n(e);i.a},"4e74":function(t,a,s){},"51f7":function(t,a,s){"use strict";var e=s("704b"),i=s.n(e);i.a},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("header",{staticClass:"total_header"},[t._m(0),s("div",{staticClass:"bottom_header"},[s("div",{staticClass:"detail_header"},[s("span",{staticClass:"header_text"},[t._v(t._s(t.menu))])]),s("div",{staticClass:"detail_header"},[s("i",{class:t.icon1}),s("i",{class:t.icon2}),s("i",{class:t.icon3}),s("i",{class:t.icon4})])])]),s("router-view"),s("nav",{staticClass:"tab_bar remove_tabbar"},[s("router-link",{staticClass:"tab_bar_button",attrs:{to:"/index"}},[s("i",{staticClass:"fas fa-user"}),s("span",{staticClass:"tab_bar_text"},[t._v("Friends")])]),s("router-link",{staticClass:"tab_bar_button",attrs:{to:"/chats"}},[s("i",{staticClass:"fas fa-comment"}),s("span",{staticClass:"tab_bar_text"},[t._v("Chat")])]),s("router-link",{staticClass:"tab_bar_button",attrs:{to:"/find"}},[s("i",{staticClass:"fas fa-search"}),s("span",{staticClass:"tab_bar_text"},[t._v("Find")])]),s("router-link",{staticClass:"tab_bar_button",attrs:{to:"/more"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),s("span",{staticClass:"tab_bar_text"},[t._v("More")])])],1)],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"top_header"},[s("div",{staticClass:"detail_header"},[s("i",{staticClass:"fas fa-signal"}),s("span",{staticClass:"header_modile"},[t._v("SKT")]),s("i",{staticClass:"fas fa-wifi"})]),s("div",{staticClass:"detail_header"},[s("span",{staticClass:"header_time"},[t._v("PM 06:00")])]),s("div",{staticClass:"detail_header"},[s("i",{staticClass:"fab fa-bluetooth-b"}),s("i",{staticClass:"fas fa-battery-three-quarters"}),s("span",{staticClass:"header_battery"},[t._v("100%")])])])}],r={name:"App",data:function(){return{menu:"",icon1:"",icon2:"",icon3:"",icon4:""}},destroyed:function(){this.$off("changeData")},created:function(){var t=this;this.$on("changeData",(function(a,s,e,i,n){t.menu=a,t.icon1=s,t.icon2=e,t.icon3=i,t.icon4=n}))},comment:{},methods:{}},c=r,l=(s("51f7"),s("2877")),o=Object(l["a"])(c,i,n,!1,null,null,null),f=o.exports,_=s("8c4f"),d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("main",{staticClass:"chat"},[t._m(0),s("ul",{staticClass:"chat_list"},t._l(t.chatlist,(function(t,a){return s("chat-list",{key:a,attrs:{li:t}})})),1),s("div",{staticClass:"empty"})])},u=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"srch_bar"},[s("i",{staticClass:"fa fa-search"}),s("input",{attrs:{type:"text",placeholder:"Lets search the friends"}})])}],m=[{username:"Yu-jung",userImage:"http://wjddb4848.dothome.co.kr/image/yujeong.jpg",chat_recentMassage:"the Sicentist-Colsplay",massage_time:"06:00"},{username:"Username",userImage:"http://wjddb4848.dothome.co.kr/image/empty.jpg",chat_recentMassage:"have nice time",massage_time:"06:00"},{username:"Username",userImage:"http://wjddb4848.dothome.co.kr/image/empty.jpg",chat_recentMassage:"hello.",massage_time:"06:00"},{username:"Username",userImage:"http://wjddb4848.dothome.co.kr/image/empty.jpg",chat_recentMassage:"I'll late. sorry",massage_time:"06:00"},{username:"Username",userImage:"http://wjddb4848.dothome.co.kr/image/empty.jpg",chat_recentMassage:"the Sicentist-Colsplay",massage_time:"06:00"},{username:"Username",userImage:"http://wjddb4848.dothome.co.kr/image/empty.jpg",chat_recentMassage:"the Sicentist-Colsplay",massage_time:"06:00"},{username:"Username",userImage:"http://wjddb4848.dothome.co.kr/image/empty.jpg",chat_recentMassage:"the Sicentist-Colsplay",massage_time:"06:00"}],p=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"achat"},[s("router-link",{attrs:{to:"/chating"}},[s("div",{staticClass:"chat_content"},[s("img",{attrs:{src:t.li.userImage}}),s("div",{staticClass:"chat_info"},[s("h3",{staticClass:"chat_uaser"},[t._v(t._s(t.li.username))]),s("span",{staticClass:"chat_recentMassage"},[t._v(t._s(t.li.chat_recentMassage))])])]),s("div",{staticClass:"right"},[s("span",{staticClass:"massage_time massage_time1"},[t._v(t._s(t.li.massage_time))])])])],1)},h=[],v={name:"chat-list",props:{li:Object}},C=v,g=Object(l["a"])(C,p,h,!1,null,null,null),b=g.exports,y={name:"chats",data:function(){return{title:"chats",chatlist:m}},components:{"chat-list":b},mounted:function(){this.$parent.$emit("changeData","Chats","fas fa-search","fas fa-user-plus","fas fa-music","fas fa-cog")}},j=y,x=(s("38f7"),Object(l["a"])(j,d,u,!1,null,null,null)),k=x.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"freinds"},[t._m(0),e("section",{staticClass:"friends_section"},[t._m(1),e("div",{staticClass:"friends_detail"},[e("div",{staticClass:"friends_detailed1"},[e("img",{attrs:{src:s("cf66"),alt:""}}),e("router-link",{staticClass:"friends_list_name",attrs:{to:"/profile"}},[t._v("Yu-jung")])],1)])]),e("section",{staticClass:"friends_section"},[t._m(2),e("div",{staticClass:"friends_detail"},t._l(t.friendlist,(function(t,a){return e("friend-list",{key:a,attrs:{list:t}})})),1)]),e("section",{staticClass:"friends_section"},[e("div",{staticClass:"friends_detail"},[t._m(3),t._l(t.friendlist,(function(t,a){return e("friend-list",{key:a,attrs:{list:t}})}))],2)])])},$=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"srch_bar"},[s("i",{staticClass:"fa fa-search"}),s("input",{attrs:{type:"text",placeholder:"Lets search the friends"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",[s("h5",{staticClass:"freinds_title"},[t._v("My Profile")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",[s("h5",{staticClass:"freinds_title"},[s("span",[s("i",{staticClass:"fas fa-star"})]),t._v(" favorites ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",[s("h5",{staticClass:"freinds_title"},[t._v("Friends")])])}],M=[{friendname:"Username",friendImg:"http://wjddb4848.dothome.co.kr/image/empty.jpg",status_massage:"Hello"},{friendname:"Username",friendImg:"http://wjddb4848.dothome.co.kr/image/empty.jpg",status_massage:"Strike while the iron is hot."},{friendname:"Username",friendImg:"http://wjddb4848.dothome.co.kr/image/empty.jpg",status_massage:"hahahahaha"},{friendname:"Username",friendImg:"http://wjddb4848.dothome.co.kr/image/empty.jpg",status_massage:"nothing"},{friendname:"Username",friendImg:"http://wjddb4848.dothome.co.kr/image/empty.jpg",status_massage:"Look before you leap."}],O=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"friends_detailed2"},[s("div",{staticClass:"friends_detailed-colum"},[s("img",{attrs:{src:t.list.friendImg}}),s("router-link",{staticClass:"friends_list_name",attrs:{to:"/profile"}},[t._v(t._s(t.list.friendname))])],1),s("span",{staticClass:"status_massage"},[t._v(t._s(t.list.status_massage))])])},E=[],S={name:"friend-list",props:{list:Object}},I=S,U=Object(l["a"])(I,O,E,!1,null,null,null),T=U.exports,P={name:"index",data:function(){return{title:"index",friendlist:M}},components:{"friend-list":T},mounted:function(){this.$parent.$emit("changeData","Friends","fas fa-search","fas fa-user-plus","fas fa-music","fas fa-cog")}},D=P,F=(s("8abd"),Object(l["a"])(D,w,$,!1,null,null,null)),Y=F.exports,A=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("main",{staticClass:"find_section"},[s("section",{staticClass:"find_menus"},[s("div",{staticClass:"find_menu"},[s("i",{staticClass:"fa fa-address-book fa-lg"}),s("span",{staticClass:"find_menu_title"},[t._v("Find")])]),s("div",{staticClass:"find_menu"},[s("i",{staticClass:"fa fa-qrcode fa-lg"}),s("span",{staticClass:"find_menu_title"},[t._v("QR Code")])]),s("div",{staticClass:"find_menu"},[s("i",{staticClass:"fa fa-mobile fa-lg"}),s("span",{staticClass:"find__option-title"},[t._v("Shake")])]),s("div",{staticClass:"find_menu"},[s("i",{staticClass:"fa fa-envelope-o fa-lg"}),s("span",{staticClass:"find_menu_title"},[t._v("Invite SMS")])])]),s("section",{staticClass:"find_recommend"},[s("header",[s("h6",{staticClass:"find_recommend_title"},[t._v("Recommended Friends")])]),s("div",{staticClass:"recommend_container"},[s("span",{staticClass:"recommended__text"},[t._v("You have no recommended friends.")])])])])}],J={name:"find",data:function(){return{title:"find"}},mounted:function(){this.$parent.$emit("changeData"," find","fas fa-search","fas fa-user-plus","fas fa-music","fas fa-cog")}},L=J,H=(s("47a6"),Object(l["a"])(L,A,q,!1,null,null,null)),K=H.exports,R=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"more_section"},[e("header",{staticClass:"more_header"},[e("div",{staticClass:"more_header_container"},[e("img",{attrs:{src:s("414e"),alt:""}}),e("div",{staticClass:"more_header_info"},[e("h3",{staticClass:"more_header_title"},[t._v("Yu-jung")]),e("span",[t._v("email.kakako.com")])])]),e("div",{staticClass:"more_header_container"},[e("p",[t._v("MY")]),e("p",[t._v("cone")])])]),e("section",{staticClass:"more_menus"},[e("div",{staticClass:"more_menu"},[e("i",{staticClass:"fas fa-comment"},[t._v("pay")]),e("span",{staticClass:"more_menu_title"},[t._v("0원")])]),e("div",{staticClass:"more_menu"},[e("span",[t._v("송금")]),e("span",[t._v("자산")]),e("span",[t._v("결제")])])]),e("section",{staticClass:"plus_friends_details"},[e("ul",{staticClass:"plus_friends_detail"},[e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"far fa-laugh"}),e("span",{staticClass:"plus-friends_detail_title"},[t._v("Emoticon")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-store"}),e("span",{staticClass:"plus-friends_detail_title"},[t._v("Store")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-gift"}),e("span",{staticClass:"plus-friends_detail_title"},[t._v("gift")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-monero"}),e("span",{staticClass:"plus-friends_detail_title"},[t._v("Maicous")])])]),e("li",{staticClass:"lian"},[e("a",{attrs:{href:"#"}},[e("i",[e("img",{attrs:{src:s("bc3a"),alt:"라이언",width:"40px",height:"40px"}})]),e("span",{staticClass:"plus-friends_detail_title"},[t._v("Shop")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-tshirt"}),e("span",{staticClass:"plus-friends_detail_title"},[t._v("Style")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-utensils"}),e("span",{staticClass:"plus-friends_detail_title"},[t._v("Order")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-gamepad",staticStyle:{color:"#fed201"}}),e("span",{staticClass:"plus-friends_detail_title"},[t._v("Game")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-file",staticStyle:{color:"#fed201"}}),e("span",{staticClass:"plus-friends_detail_title"},[t._v("Page")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-music"}),e("span",{staticClass:"plus-friends_detail_title"},[t._v("Music")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-info"}),e("span",{staticClass:"plus-friends_detail_title"},[t._v("Info")])])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fas fa-box"}),e("span",{staticClass:"plus-friends_detail_title"},[t._v("Service")])])])])]),e("section",{staticClass:"more_other_site"},[e("div",{staticClass:"more_menu1"},[e("i",{staticClass:"far fa-envelope"}),t._v(" 메일 "),e("em",[t._v("만들기")])]),e("div",{staticClass:"more_menu1"},[e("i",{staticClass:"far fa-calendar-alt"}),t._v(" 캘린더 "),e("em",[t._v("일정만들기")])])]),e("div",{staticClass:"empty"})])}],Q={name:"more",data:function(){return{title:"more"}},mounted:function(){this.$parent.$emit("changeData","More","fas fa-search","fas fa-user-plus","fas fa-music","fas fa-cog")}},z=Q,B=(s("dc51"),Object(l["a"])(z,R,G,!1,null,null,null)),N=B.exports,V=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"profile_section"},[e("header",{staticClass:"profile_header"},[e("div",{staticClass:"profile_header_detail"},[e("img",{attrs:{src:s("414e"),alt:""}}),e("span",{staticClass:"profile_title"},[t._v("User's name")])])]),e("div",{staticClass:"profile_container"},[e("div",{staticClass:"profile_btns"},[e("div",{staticClass:"profile_btn"},[e("span",{staticClass:"profile_btn_icon"},[e("i",{staticClass:"fas fa-comment"})]),e("span",[t._v("My chatting")])]),e("div",{staticClass:"profile_btn"},[e("span",{staticClass:"profile_btn_icon"},[e("i",{staticClass:"fas fa-pen"})]),e("span",[t._v("Edit")])]),e("div",{staticClass:"profile_btn"},[e("span",{staticClass:"profile_btn_icon"},[e("i",{staticClass:"fas fa-music"})]),e("span",[t._v("Kakao Music")])])])])])}],X={name:"profile",data:function(){return{title:"profile"}},mounted:function(){this.$parent.$emit("changeData","exit","","fas fa-gift","fas fa-qrcode","fas fa-cog")}},Z=X,tt=(s("f8fb"),Object(l["a"])(Z,V,W,!1,null,null,null)),at=tt.exports,st=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"chat_setion"},[e("div",{staticClass:"date_message"},[e("span",{staticClass:"date_text"},[t._v("Thusday,June 12.2020")])]),e("div",{staticClass:"chat_message send_chat"},[e("div",{staticClass:"chat_container_inner"},[e("span",{staticClass:"chat_one"},[t._v("Hello!I'm Yu-jeong")]),e("span",{staticClass:"chat_one"},[t._v("This is a test message.")]),e("span",{staticClass:"chat_one"},[t._v("This is a test message.")])]),e("span",{staticClass:"time_chat"},[t._v("13:09")])]),e("div",{staticClass:"chat_message recive_chat"},[e("img",{attrs:{src:s("414e"),alt:""}}),e("div",{staticClass:"chat_container_inner"},[e("h3",{staticClass:"friendname"},[t._v("friend's name")]),e("span",{staticClass:"chat_one"},[t._v("This is answer")]),e("span",{staticClass:"chat_one"},[t._v("This is answer and This is answer")]),e("span",{staticClass:"chat_one"},[t._v(" This is answer ")])]),e("span",{staticClass:"time_chat"},[t._v("14:54")])])])}],it={name:"chating"},nt=it,rt=(s("8011"),Object(l["a"])(nt,st,et,!1,null,null,null)),ct=rt.exports;e["a"].use(_["a"]);var lt=[{path:"/",component:f,name:"App",redirect:"/index"},{path:"/index",component:Y,name:"index"},{path:"/chats",component:k,name:"chats"},{path:"/find",component:K,name:"find"},{path:"/more",component:N,name:"more"},{path:"/profile",component:at,name:"profile"},{path:"/chating",component:ct,name:"chating"}],ot=new _["a"]({mode:"history",base:"/portfoilo0617/",routes:lt,linkActiveClass:"tab_bar_button_selected",linkExactActiveClass:"tab_bar_button"}),ft=ot;e["a"].config.productionTip=!1,new e["a"]({router:ft,render:function(t){return t(f)}}).$mount("#app")},"5d15":function(t,a,s){},"704b":function(t,a,s){},8011:function(t,a,s){"use strict";var e=s("d99c"),i=s.n(e);i.a},"8abd":function(t,a,s){"use strict";var e=s("5d15"),i=s.n(e);i.a},"8c41":function(t,a,s){},ac87:function(t,a,s){},bc3a:function(t,a,s){t.exports=s.p+"img/600.5b963f34.png"},cf66:function(t,a,s){t.exports=s.p+"img/yujeong.0f92b15e.jpg"},d99c:function(t,a,s){},dc51:function(t,a,s){"use strict";var e=s("4e74"),i=s.n(e);i.a},f8fb:function(t,a,s){"use strict";var e=s("ac87"),i=s.n(e);i.a}});
//# sourceMappingURL=app.d724604f.js.map