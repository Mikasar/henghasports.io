webpackJsonp([43],{"6YX6":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("tlGt"),o=i("YtJ0"),n=i("dDoS"),a=i.n(n),c=i("Au9i"),l={name:"myVideo",data:function(){return{videos:[]}},mounted:function(){this.getVideoList(),console.log(this.videos),this.popupItem=this.$el},directives:{ClickOutside:a.a},methods:{back:function(){this.$router.go(-1)},upload:function(){this.$router.push("/home/mine/uploadVideo")},getVideoList:function(){var t=this;Object(s.T)().then(function(e){console.log(e.data),t.videos=e.data;for(var i=0;i<t.videos.length;i++)t.$set(t.videos[i],"isDeleting",!1)})},play:function(t){o.a.commit("getVideoInfo",this.videos[t]),this.$router.push("/home/mine/videoPlayer")},showDeleteBtn:function(t){var e=this;clearInterval(this.Loop),this.Loop=setTimeout(function(){e.videos[t].isDeleting=!0},1e3)},clearLoop:function(){clearInterval(this.Loop)},clickDelFloor:function(t){var e=this;console.log(this.videos[t].fVideoId),Object(s.m)({videoId:this.videos[t].fVideoId}).then(function(i){console.log(i),"0"===i.status&&(Object(c.Toast)({message:"删除成功",duration:1e3}),e.videos.splice(t,1),e.videos[t].isDeleting=!1)})},hideBtn:function(t){this.videos[t].isDeleting=!1}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"myVideo"},[s("div",{staticClass:"header"},[s("span",{staticClass:"back",on:{click:t.back}},[s("img",{staticClass:"releaseIcon",attrs:{src:i("0YUB")}})]),t._v(" "),s("span",{staticClass:"usersTitle"},[t._v("教学视频")]),t._v(" "),s("span",{staticClass:"back"}),t._v(" "),s("span",{staticClass:"upload",on:{click:t.upload}},[t._v("上传")])]),t._v(" "),s("div",{staticClass:"content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.videos.length,expression:"videos.length === 0"}],staticClass:"notice"},[t._v("您还没有任何教学视频，快去上传吧！")]),t._v(" "),s("ul",{staticClass:"videos"},[t._l(t.videos,function(e,i){return s("li",{key:i,staticClass:"video",on:{click:function(e){t.play(i)},touchstart:function(e){t.showDeleteBtn(i)},touchend:function(e){t.clearLoop(i)}}},[s("img",{staticClass:"videoCover",attrs:{src:e.fVideoCoverImgUrl}}),t._v(" "),s("span",{staticClass:"videoTitle"},[t._v(t._s(e.fVideoName))]),t._v(" "),s("span",{staticClass:"videoDescription"},[t._v(t._s(e.fVideoNote))]),t._v(" "),"1"===e.fIsOpen?s("div",{staticClass:"symbol"},[t._v("收费")]):t._e(),t._v(" "),e.isDeleting?s("div",{staticClass:"btnCover",on:{click:function(e){e.stopPropagation(),t.hideBtn(i)}}}):t._e(),t._v(" "),e.isDeleting?s("button",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideBtn,expression:"hideBtn"}],ref:"deleteBtns",refInFor:!0,staticClass:"deleteBtn",on:{click:function(e){e.stopPropagation(),t.clickDelFloor(i)}}},[t._v("删除")]):t._e()])}),t._v(" "),s("li",{staticStyle:{display:"block",clear:"both"}})],2)])])},staticRenderFns:[]};var v=i("VU/8")(l,d,!1,function(t){i("uSt4")},"data-v-5416045a",null);e.default=v.exports},uSt4:function(t,e){}});
//# sourceMappingURL=43.5f072d2ae6aade249cd8.js.map