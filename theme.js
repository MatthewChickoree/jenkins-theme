function checkToggle(e){e.prop("checked",!0)}function writeCookie(e,t,n){var o,i;n?(o=new Date,o.setTime(o.getTime()+1e3*60*60*24*n),i="; expires="+o.toGMTString()):i="",document.cookie=e+"="+t+i+"; path=/"}function readCookie(e){var t,n,o,i=e+"=";for(o=document.cookie.split(";"),t=0;o.length>t;t++){for(n=o[t];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(i))return n.substring(i.length,n.length)}return""}document.observe("dom:loaded",function(){var e=$$("#right-top-nav #right-top-nav div.smallfont");if(e.length>0){var t=new Element("span").update(e[0].innerHTML);$$("span.jenkins_ver")[0].insert({before:t})}$$("div.logo")[0].on("click",function(){location="/"})}),jQuery(function(e){var t='<div class="toggle"></div><input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox"><label for="cmn-toggle-7" data-on="Hide" data-off="Show"></label>';e("#description-link").text("Edit"),e("#description").before(t),"checked"!=readCookie("toggle")?e("#description").hide():(checkToggle(e(".cmn-toggle")),e("#description").show()),e(".cmn-toggle").change(function(){e("#description").slideToggle("fast"),e(".cmn-toggle").is(":checked")?writeCookie("toggle","checked",30):writeCookie("toggle","unchecked",30)}),e("#projectstatus img.icon-red").each(function(){e(this).addClass("stock-jenkins-ball")}),e("#projectstatus img.icon-blue").each(function(){e(this).addClass("stock-jenkins-ball")}),e("#projectstatus img.icon-yellow").each(function(){e(this).addClass("stock-jenkins-ball")}),e("#projectstatus img.icon-grey").each(function(){e(this).addClass("stock-jenkins-ball")}),e("#projectstatus img.icon-red-anime").each(function(){e(this).addClass("stock-jenkins-ball")}),e("#projectstatus img.icon-blue-anime").each(function(){e(this).addClass("stock-jenkins-ball")}),e("#projectstatus img.icon-yellow-anime").each(function(){e(this).addClass("stock-jenkins-ball")}),e("#projectstatus img.icon-grey-anime").each(function(){e(this).addClass("stock-jenkins-ball")})});