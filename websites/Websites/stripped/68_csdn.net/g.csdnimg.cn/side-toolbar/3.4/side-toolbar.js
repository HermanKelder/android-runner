"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};!function(n,t){function e(n){var e=t.createElement("link");e.rel="stylesheet",e.type="text/css",e.href=n,t.getElementsByTagName("head")[0].appendChild(e)}function o(n,t){Object.getOwnPropertyNames(n).forEach(function(e){void 0!==t[e]&&null!==t[e]&&("object"===_typeof(t[e])&&"contentEl"!==e?o(n[e],t[e]):n[e]=t[e])},null)}function s(){var t=n.scrollY,e=t/100,o=setInterval(function(){t-=e,n.scrollTo(0,t),t<=0&&clearInterval(o)},10)}function a(){var e=t.createElement("div");if(e.innerHTML=f,i.contentEl.appendChild(e),i.goTop.isShow){var o=function(){n.scrollY>=c?a.classList.remove("go-top-hide"):a.classList.add("go-top-hide")},a=t.querySelector("a.option-box[data-type='gotop']"),c=n.outerHeight,l=t.body.scrollHeight;o(),n.addEventListener("scroll",o,!1),n.addEventListener("resize",function(){c=n.outerHeight,l=t.body.scrollHeight,o()}),a.addEventListener("click",s,!1)}if(i.cs.isShow){t.querySelector("a.option-box[data-type='cs']").addEventListener("click",function(){null!==i.cs.clickFun?i.cs.clickFun():n.open(i.cs.clickUrl,"_blank")},!1)}if(i.help.isShow){t.querySelector("a.option-box[data-type='cs']").addEventListener("click",function(){null!==i.help.clickFun?i.help.clickFun():n.open(i.help.clickUrl,"_blank")},!1)}if(i.guide.isShow){t.querySelector("a.option-box[data-type='guide']").addEventListener("click",function(){null!==i.guide.clickFun?i.guide.clickFun():n.open(i.guide.clickUrl,"_blank")},!1)}if(i.mpNps.isShow){t.querySelector("a.option-box[data-type='mpNps']").addEventListener("click",function(){var n=i.mpNps.el&&t.querySelector(i.mpNps.el);n&&("none"==n.style.display?n.style.display="block":n.style.display="none")},!1)}}var c=(location.protocol.substr(0,4),"3.4"),i={},l={options:{},goTop:s};void 0===n.csdn&&(n.csdn={}),n.csdn.sideToolbar=Object.assign(l,n.csdn.sideToolbar);var r=n.csdn.sideToolbar.options;!function(){var n=r.url?r.url:"https://g.csdnimg.cn/side-toolbar/"+c;e(n+"/side-toolbar.css"),i={url:n,opinion:{isShow:!1},qr:{isShow:!0,btnImgSrc:n+"/images/qr.png",data:[{tabName:"下载 APP",imgSrc:n+"/images/qr_app.png",desc:"程序员都在用的中文IT技术交流社区"},{tabName:"公众号",imgSrc:n+"/images/qr_wechat.png",desc:"专业的中文 IT 技术社区，与千万技术人共成长"},{tabName:"视频号",imgSrc:n+"/images/qr_video.png",desc:"关注【CSDN】视频号，行业资讯、技术分享精彩不断，直播好礼送不停！"}]},cs:{isShow:!0,btnImgSrc:n+"/images/kefu.png",clickUrl:"https://csdn.s2.udesk.cn/im_client/?web_plugin_id=29181",clickFun:null},help:{isShow:!1,btnImgSrc:n+"/images/bangzhucopy.png",clickUrl:"",clickFun:null},report:{isShow:!1,btnImgSrc:n+"/images/jubaocopy.png"},goTop:{isShow:!0,btnImgSrc:n+"/images/fanhuidingbucopy.png"},guide:{isShow:!1,btnImgSrc:n+"/images/guide.png",clickUrl:"https://blogdev.blog.csdn.net/article/details/108241158",clickFun:null},theme:"white",contentEl:t.body,afterFinished:null,mpNps:{isShow:!1,btnImgSrc:n+"/images/nps.png",el:""}},o(i,r)}();var p="",d="",u="",g="",b="",m="",h="",y="";if(i.opinion.isShow&&(p='\n    <a class="option-box" data-type="feedback">\n      <img src="'+i.opinion.btnImgSrc+'" alt="" srcset="">\n      <span class="show-txt">意见<br>反馈</span>\n    </a>\n    '),i.guide.isShow&&(d='\n    <a class="option-box" data-type="guide">\n      <img src="'+i.guide.btnImgSrc+'" alt="" srcset="">\n      <span class="show-txt">新手<br>引导</span>\n    </a>\n    '),i.qr.isShow){var S="";i.qr.data.forEach(function(n,t){S+='\n      <div class="tab-pane">\n        <input type="radio" '+(0===t?"checked":"")+' name="tab" id="tab'+t+'"/>\n        <label class="tab-item" for="tab'+t+'">'+n.tabName+'</label>\n        <div class="tab-content">\n          <img src="'+n.imgSrc+'" alt="'+n.desc+'">\n          <p class="desc">'+n.desc+"</p>\n        </div>\n      </div>\n      "}),u='\n    <a class="option-box no—h" data-type="app">\n      <img src="'+i.qr.btnImgSrc+'" alt="" srcset="">\n      <span class="show-txt">手机看</span>\n      <div class="app-qr-box">\n        <div class="bg-box">\n          '+S+"\n        </div>\n      </div>\n    </a>\n    "}i.cs.isShow&&(g='\n    <a class="option-box" data-type="cs">\n      <img src="'+i.cs.btnImgSrc+'" alt="" srcset="">\n      <span class="show-txt">客服</span>\n    </a>\n    '),i.help.isShow&&(b='\n    <a class="option-box" data-type="help">\n      <img src="'+i.help.btnImgSrc+'" alt="" srcset="">\n      <span class="show-txt">帮助</span>\n    </a>\n    '),i.report.isShow&&(m='\n    <a class="option-box" data-type="report">\n      <span class="show-txt" style=\'display:flex;opacity:100;\'>举报</span>\n    </a>\n    '),i.goTop.isShow&&(h='\n    <a class="option-box go-top-hide" data-type="gotop">\n      <img src="'+i.goTop.btnImgSrc+'" alt="" srcset="">\n      <span class="show-txt">返回<br>顶部</span>\n    </a>\n    '),i.mpNps.isShow&&(y='\n    <a class="option-box" data-type="mpNps">\n    <img src="'+i.mpNps.btnImgSrc+'" alt="" srcset="">\n    <span class="show-txt">调研</span>\n    </a>\n    ');var f='\n  <div class="csdn-side-toolbar '+("white"==i.theme?"":i.theme)+'">\n    '+d+"\n    "+p+"\n    "+u+"\n    "+y+"\n    "+g+"\n    "+b+"\n    "+m+"\n    "+h+"\n  </div>\n  ";null!==i.afterFinished&&i.afterFinished();var v,w=function(n){var t=!1,e=function(){t||(t=!0,n&&n())};!function n(){try{doc.documentElement.doScroll("left")}catch(t){return void setTimeout(n,50)}e()}(),doc.onreadystatechange=function(){"complete"===doc.readyState&&(doc.onreadystatechange=null,e())}};!function(n){t.addEventListener?~["complete","loaded","interactive"].indexOf(t.readyState)?setTimeout(function(){n&&n()},0):(v=function(){t.removeEventListener("DOMContentLoaded",v,!1),n()},t.addEventListener("DOMContentLoaded",v,!1)):t.attachEvent&&w(n)}(a)}(window,document);