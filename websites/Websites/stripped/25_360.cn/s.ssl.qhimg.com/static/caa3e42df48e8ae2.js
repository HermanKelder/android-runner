(function(e){function u(){var t=/^https?:\/\/[\w.]*baidu.com/.test(document.referrer||"");if(!t)return;var n={"https://dl.360safe.com/inst.exe":"https://dl.360safe.com/360/inst.exe","http://dl.360safe.com/inst.exe":"http://dl.360safe.com/360/inst.exe","http://www.360.cn/weishi/index.html?source=homepage":"http://www.360.cn/weishi/index.html?source=homepage&r=bd","http://www.360.cn/download/":"http://www.360.cn/download/?r=bd"},r=/^(?:https?:)?\/\/dl\.360safe\.com\/inst\.exe$/;e("a").each(function(t,i){var s=e(i),o=s.attr("href");n[o]?s.attr("href",n[o]):r.test(o)&&s.attr("href",o.replace(".com/",".com/360/"))})}e(".js-business-slide").each(function(t,n){var r=e(n).data("slide")||{},i=e(n).switchable(r);e.extend(n,{switchable:i})});var t=null,n=null,r=e("#subnav"),i=r.find(".item"),s=e("#nav .pop");s.on("mouseenter",function(o){var u=e(this),a=s.index(u);clearTimeout(n),t=setTimeout(function(){r.is(":visible")||r.slideDown("fast"),u.addClass("on").siblings(".pop").removeClass("on"),i.removeClass("active").eq(a).addClass("active")},100)}).on("mouseleave",function(i){var s=e(this),o=i.toElement;clearTimeout(t),n=setTimeout(function(){r.slideUp("fast"),s.removeClass("on")},150)}),r.on("mouseenter",function(e){clearTimeout(n)}).on("mouseleave",function(e){n=setTimeout(function(){r.slideUp("fast"),s.removeClass("on")},150)}),e(".mall-slide .switchable,.j-tabview").on("mouseenter",function(){e(this).addClass("mouseenter")}).on("mouseleave",function(){e(this).removeClass("mouseenter")}),e("#add-favourite").on("click",function(e){e.preventDefault();try{window.sidebar&&"object"==typeof window.sidebar&&"function"==typeof window.sidebar.addPanel?window.sidebar.addPanel("360\u5b89\u5168\u4e2d\u5fc3_360\u5b89\u5168\u536b\u58eb360\u6740\u6bd2\u5b98\u7f51",window.location.href,""):document.all&&"object"==typeof window.external?window.external.addFavorite(window.location.href,"360\u5b89\u5168\u4e2d\u5fc3_360\u5b89\u5168\u536b\u58eb360\u6740\u6bd2\u5b98\u7f51"):alert("\u8bf7\u4f7f\u7528\u201cCtrl + D\u201d\u952e\uff0c\u6536\u85cf360\u5b98\u7f51")}catch(e){alert("\u8bf7\u4f7f\u7528\u201cCtrl + D\u201d\u952e\uff0c\u6536\u85cf360\u5b98\u7f51")}return!1});var o=e("#focus-product");o.on("mouseenter",function(t){e(this).addClass("mouseenter")}).on("mouseleave",function(){e(this).removeClass("mouseenter")}),e("#follow").lightbox({fitToScreen:!0,imageClickClose:!1,fileLoadingImage:"//p.ssl.qhimg.com/t014f18305c97360131.gif",fileBottomNavCloseImage:"//p.ssl.qhimg.com/t0155d6ba22d11cc3ea.png",overlayOpacity:.7,navbarOnTop:!0}),u();var a=window.getzbxx=function(){e.ajax({url:"//news.safe.360.cn/sitenews/news/getIndexList",type:"get",dataType:"jsonp",statusCode:{404:function(){alert("404\u627e\u4e0d\u5230\u9875\u9762")}},success:function(t){if(t.errno==0){var n={11:{title:"\u65b0\u95fb\u52a8\u6001",bk:"newsdynamic",morelink:"//www.360.cn/news.html"},12:{title:"\u5b89\u5168\u8d44\u8baf",bk:"safeinfor",morelink:"//www.anquanke.com/news"},13:{title:"\u793e\u533a\u70ed\u5e16",bk:"comforum",morelink:"//bbs.360.cn/?from=360safe_cms"},14:{title:"\u7535\u8111\u5b89\u5168",bk:"comsafe",morelink:"//www.360.cn/news.html"}},r="",i="";e.each(t.data,function(t,s){var o='                    <div class="box-hd">                        <h2 class="title">'+n[t].title+'</h2>                    </div>                    <div class="box-bd">',u='<a href="'+n[t].morelink+'" class="more">\u67e5\u770b\u66f4\u591a&gt;</a>',a='<ul class="news-list">',f="",l=0;e.each(s,function(e,t){l==0?f='<div class="headline">                            <div class="pic">                              <a href="//www.360.cn/n/'+t.id+'.html">                                <img src="'+t.guide_pic+'" alt="'+t.title+'"> </a>                            </div>                            <div class="text">                              <a href="//www.360.cn/n/'+t.id+'.html">'+t.title+"</a>                            </div>                          </div>":a+='<li class="item need_to_fixed">                                  <span class="cate"></span>                                  <a href="//www.360.cn/n/'+t.id+'.html" title="'+t.title+'">'+t.title+"</a>                              </li>",l++}),a+="</ul>",t==11&&(r+=o+f+a+u+"</div>"),t==14&&(i+=o+f+a+u+"</div>")}),e("#related-block").html(allhtml),e(".snews-block").html(r),e(".computer-block").html(i)}},error:function(e,t){}})}})(jQuery),function(t){var n=document.getElementById("search-form"),r=document.getElementById("haosou-input"),i="\u5b89\u5168  \u66f4\u5b89\u5fc3";r.value==""||r.value==i?document.activeElement!=r&&(r.value=i,t(r).addClass("txt-default")):t(r).removeClass("txt-default"),setInterval(function(){r.value!=i&&t(r).removeClass("txt-default")},20),r.onfocus=function(){r.value==i&&(r.value="",t(r).removeClass("txt-default"))},r.onblur=function(){r.value==""&&(r.value=i,t(r).addClass("txt-default"))},n.onsubmit=function(){if(r.value==""||r.value==i)r.value=""}},function(e){function u(e,t){return e.indexOf(t)>=0}var t=e(".antivirus-download a, .antivirus-download-btn"),n=navigator.userAgent,r="WOW64",i="Win64",s=u(n,r),o=u(n,i);t.click(function(t){(s||o)&&e(this).attr("href",e(this).attr("data-osurl"))})}(jQuery),function(e){function a(){e(".ie-down").each(function(t,n){var r=e(this).attr("href").split("//");r[0]="https://",e(this).attr("href",r.join(""));if(e(this).attr("data-osurl")!=undefined){var i=e(this).attr("data-osurl").split("//");i[0]="https://",e(this).attr("data-osurl",i.join(""))}})}var t=navigator.appName,n=navigator.appVersion,r=n.split(";"),i=t=="Microsoft Internet Explorer"?i=r[1].replace(/[ ]/g,""):"other",s=navigator.userAgent,o=navigator.platform=="Win32"||navigator.platform=="Windows";i!="MSIE6.0"&&i!="MSIE7.0"&&i!="MSIE8.0"&&a();if(o){var u=s.indexOf("Windows NT 6.1")>-1||s.indexOf("Windows 7")>-1;u&&i=="MSIE8.0"&&a()}e.ajax({type:"GET",url:"https://news.safe.360.cn/q/api/lists",dataType:"jsonp",success:function(t){if(t.errno===0){var n=t.data.list,r="";for(var i=0;i<n.length;i++)r+='<li class="item"><a href="'+n[i].url+'">'+n[i].title+"</a></li>";e(".wiki-box .zhiku").html(r)}},error:function(){e(".wiki-box .zhiku").html('<li class="item"><a href="http://www.360.cn/n/10654.html">\u3010\u6df1\u5ea6\u5206\u6790\u3011\u63ed\u79d8\uff01\u9ed1\u5ba2\u5982\u4f55\u5077\u8d70\u4f60\u7684\u4fe1\u606f\uff1f</a></li><li class="item"><a href="http://www.360.cn/n/10642.html">\u3010\u6df1\u5ea6\u5206\u6790\u3011\u63ed\u5f00\u7f51\u7edc\u4e16\u754c\u201c\u6838\u6b66\u5668\u201d\u7684\u9762\u7eb1</a></li><li class="item"><a href="http://www.360.cn/n/10643.html">\u3010\u6df1\u5ea6\u5206\u6790\u3011\u6f0f\u6d1e\u5c31\u662f\u7f51\u7edc\u519b\u706b \u2014\u7f8e\u56fd\u6f0f\u6d1e\u62ab\u9732\u7ba1\u7406\u653f\u7b56\u53ca\u542f\u793a</a></li><li class="item"><a href="http://www.360.cn/n/10652.html">\u3010\u6df1\u5ea6\u5206\u6790\u3011\u9ed1\u5ba2\u4e0d\u5149\u8981\u94b1\uff0c\u8fd8\u8981\u547d --\u533b\u7597\u7269\u8054\u7f51\u9762\u4e34\u7684\u5a01\u80c1\u53ca\u5e94\u5bf9\u7814\u7a76</a></li><li class="item"><a href="http://www.360.cn/n/10653.html">\u3010\u6df1\u5ea6\u5206\u6790\u3011\u91d1\u878d\u673a\u6784\u5982\u4f55\u5e94\u5bf9\u65e5\u76ca\u9891\u7e41\u7684\u7f51\u7edc\u653b\u51fb\uff1f</a></li>')}}),e(".live-video a").on("click",function(e){e.preventDefault()}),e("#copyright .now").text((new Date).getFullYear())}(jQuery),function(e){function n(){var e=document.createElement("div");return e.style.display="none",e.style.position="fixed",e.style.zIndex="99",e.style.padding="3px 5px",e.style.border="1px solid #333",e.style.background="#fff",e.style.color="#333",document.body.appendChild(e),e}var t;e(".slide-first-other1 a, .slide-first-other2 a").on("mouseover",function(r){t||(t=n());var i=r.currentTarget;t.innerText=e(i).data("title"),t.style.top=r.clientY-r.offsetY+27+"px",t.style.left=r.clientX-r.offsetX+"px",e(t).show()}).on("mouseout",function(){e(t).hide()})}(jQuery);