(function(a){var u=!1;a(document).on("add.cards change.cards",function(b){if(a(b.target).hasClass("mbr-slider-ext"))a(this).on("slid.bs.carousel",function(b,e){a(b.relatedTarget).closest("section").hasClass("mbr-slider-ext")&&(a(b.relatedTarget).parent().find(".carousel-item").not(".prev.right").removeClass("kenberns"),a(b.relatedTarget).addClass("kenberns"))})});if(a("html").hasClass("is-builder"))a(document).on("add.cards change.cards",function(b){if(a(b.target).hasClass("extTestimonials1")||a(b.target).hasClass("extTestimonials3")){setTimeout(function(){a(window).trigger("resize")},100);if(a(b.target).hasClass("extTestimonials3")){var c=a(b.target).find(".carousel-inner").attr("data-visible");a(b.target).find(".carousel-inner").attr("class","carousel-inner slides"+c);a(b.target).find(".clonedCol").remove();a(b.target).find(".carousel-item .col-md-12").each(function(){2>c?a(this).attr("class","col-md-12"):5==c?a(this).attr("class","col-md-12 col-lg-15"):a(this).attr("class","col-md-12 col-lg-"+12/c)});a(b.target).find(".carousel-item").each(function(){for(var b=a(this),d=1;d<c;d++){b=b.next();b.length||(b=a(this).siblings(":first"));var g=b.index();b.find(".col-md-12:first").clone(!0).addClass("cloneditem-"+d).addClass("clonedCol").attr("data-cloned-index",g).appendTo(a(this).children().eq(0))}})}a(b.target).hasClass("extTestimonials3")&&!u&&(u=!0,a(this).on("slide.bs.carousel","section.extTestimonials3",function(b){var c=a(b.target).find(".carousel-inner").attr("data-visible");a(b.target).find(".clonedCol").remove();a(b.target).find(".carousel-item").each(function(){for(var b=a(this),e=1;e<c;e++){b=b.next();b.length||(b=a(this).siblings(":first"));var k=b.index();b.find(".col-md-12:first").clone(!0).addClass("cloneditem-"+e).addClass("clonedCol").attr("data-cloned-index",k).appendTo(a(this).children().eq(0))}})}))}});if(!a("html").hasClass("is-builder")){0<a("section.extTestimonials1:not(.extTestimonials5)").length&&(a(window).on("resize",function(){a("section.extTestimonials1:not(.extTestimonials5)").each(function(){var b=[],c=a(this).find(".carousel-item.active").index();a(this).find(".carousel-item .card-block").css("min-height","0");a(this).find(".carousel-item").addClass("active");a(this).find(".carousel-item").each(function(){b.push(a(this).find(".card-block")[0].offsetHeight)});a(this).find(".carousel-item").removeClass("active").eq(c).addClass("active");var e=Math.max.apply(null,b);a(this).find(".carousel-item").each(function(){a(this).find(".card-block").css("min-height",e+"px")})})}),setTimeout(function(){a(window).trigger("resize")},100));a(document).on("add.cards change.cards",function(b){if(a(b.target).hasClass("extTestimonials1")||a(b.target).hasClass("extTestimonials3"))if((0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./))&&a(b.target).find(".card-block").each(function(){a(this).css("display","block")}),a(b.target).hasClass("extTestimonials3")){var c=a(b.target).find(".carousel-inner").attr("data-visible");2>c||(a(b.target).find(".carousel-inner").attr("class","carousel-inner slides"+c),a(b.target).find(".carousel-item .col-md-12").each(function(){5==c?a(this).attr("class","col-md-12 col-lg-15"):a(this).attr("class","col-md-12 col-lg-"+12/c)}),a(b.target).find(".carousel-item").each(function(){for(var b=a(this),d=1;d<c;d++)b=b.next(),b.length||(b=a(this).siblings(":first")),b.find(".col-md-12:first").clone().addClass("cloneditem-"+d).appendTo(a(this).children().eq(0))}))}});a(document).ready(function(){a(".counters").length&&a(".counters").viewportChecker({offset:200,callbackFunction:function(b,c){a("#"+b.attr("id")+" .count").each(function(){a(this).prop("Counter",0).animate({Counter:a(this).text()},{duration:3E3,easing:"swing",step:function(b){a(this).text(Math.ceil(b))}})})}});a(".pie_progress").length&&(a(".pie_progress").asPieProgress({namespace:"asPieProgress",classes:{element:"pie_progress",number:"pie_progress__number"},min:0,max:100,size:150,speed:40,barcolor:"#c0a375",barsize:"10",trackcolor:"#f2f2f2",fillcolor:"none",easing:"ease",numberCallback:function(a){return Math.round(this.getPercentage(a))+"%"},contentCallback:null}),a(".extProgressBarRound").viewportChecker({offset:150,callbackFunction:function(b,c){a("#"+b.attr("id")+" .pie_progress").asPieProgress("start")}}))});a(document).ready(function(){if(a(".modalWindow-video iframe").length){var b=a(".modalWindow-video iframe")[0].contentWindow,c=function(){a(".modalWindow").css("display","table").click(function(){a(".modalWindow").css("display","none");b.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})};a(".intro-play-btn").click(function(){c();b.postMessage('{"event":"command","func":"playVideo","args":""}',"*")});a(".intro-play-btn-figure").click(function(a){a.preventDefault();c();b.postMessage('{"event":"command","func":"playVideo","args":""}',"*")})}});a(".panel-group").find(".panel-heading").each(function(b){a(this).click(function(){var b=a(this).children("span");a(b).hasClass("pseudoMinus")?a(b).removeClass("pseudoMinus").addClass("pseudoPlus").parent().removeClass("theme-border"):(a(".panel-group").find(".signSpan").each(function(){a(this).removeClass("pseudoMinus").addClass("pseudoPlus").parent().removeClass("theme-border")}),a(b).removeClass("pseudoPlus").addClass("pseudoMinus"),a(b).parent().addClass("theme-border"))})});a(document).find(".panel-group").each(function(){a(this).find(".panel-collapse").hasClass("in")&&a(this).find(".signSpan:eq(0)").parent().addClass("theme-border")});a(".toggle-panel").find(".panel-heading").each(function(b){a(this).click(function(){var b=a(this).children("span");a(b).hasClass("pseudoMinus")?a(b).removeClass("pseudoMinus").addClass("pseudoPlus").parent().css("border",""):a(b).removeClass("pseudoPlus").addClass("pseudoMinus").parent().css("border","")})});var w=function(){var b=a(this),c=[],e=function(a){return new google.maps.LatLng(a[0],a[1])},d=a.extend({zoom:14,type:"ROADMAP",center:null,markerIcon:null,showInfo:!0},eval("("+(b.data("google-map-params")||"{}")+")"));b.find(".mbr-google-map__marker").each(function(){var b=a(this).data("coordinates");b&&c.push({coord:b.split(/\s*,\s*/),icon:a(this).data("icon")||d.markerIcon,content:a(this).html(),template:a(this).html("{{content}}").removeAttr("data-coordinates data-icon")[0].outerHTML})}).end().html("").addClass("mbr-google-map--loaded");if(c.length){var g=this.Map=new google.maps.Map(this,{scrollwheel:!1,draggable:!a.isMobile(),zoom:d.zoom,mapTypeId:google.maps.MapTypeId[d.type],center:e(d.center||c[0].coord)});a(window).smartresize(function(){var a=g.getCenter();google.maps.event.trigger(g,"resize");g.setCenter(a)});g.Geocoder=new google.maps.Geocoder;g.Markers=[];a.each(c,function(a,b){var c=new google.maps.Marker({map:g,position:e(b.coord),icon:b.icon,animation:google.maps.Animation.DROP}),f=c.InfoWindow=new google.maps.InfoWindow;f._setContent=f.setContent;f.setContent=function(a){return this._setContent(a?b.template.replace("{{content}}",a):"")};f.setContent(b.content);google.maps.event.addListener(c,"click",function(){f.anchor&&f.anchor.visible?f.close():f.getContent()&&f.open(g,c)});b.content&&d.showInfo&&google.maps.event.addListenerOnce(c,"animation_changed",function(){setTimeout(function(){f.open(g,c)},350)});g.Markers.push(c)})}};a(document).on("add.cards",function(b){window.google&&google.maps&&a(b.target).outerFind(".mbr-google-map").each(function(){w.call(this)})});a(document).on("add.cards change.cards",function(b){b=a(b.target);if(b.hasClass("extTable1")){var c=b.find(".table-wrapper"),e="true"===c.attr("data-search");if(e)var d=c.attr("search-text"),g=c.attr("info1-text"),m=c.attr("info2-text"),k=c.attr("info3-text"),h=c.attr("info4-text");b.find(".table").DataTable({retrieve:!0,paging:!1,aaSorting:[],scrollX:!0,searching:e,info:e,language:{search:d,info:g+" _END_ "+m,infoEmpty:g+" _END_ "+m,infoFiltered:k+" _MAX_ "+h}})}})}a(document).on("add.cards",function(b){if(a(b.target).find(".panel-group, .toggle-panel").length)a(b.target).on("shown.bs.collapse hidden.bs.collapse",function(b){a(window).trigger("update.parallax")})});initCountdown=function(){a(".countdown:not(.countdown-inited)").each(function(){a(this).addClass("countdown-inited").countdown(a(this).attr("data-end"),function(b){a(this).html(b.strftime('<div class="row"><div class="col-xs-3 col-sm-3"><span class="number-wrap"><span class="number">%D</span><span class="period">Days</span><div class="bottom1"></div><div class="bottom2"></div><span class="dot">:</span></span></div><div class="col-xs-3 col-sm-3"><span class="number-wrap"><span class="number">%H</span><span class="period">Hours</span><div class="bottom1"></div><div class="bottom2"></div><span class="dot">:</span></span></div><div class="col-xs-3 col-sm-3"><span class="number-wrap"><span class="number">%M</span><span class="period">Minutes</span><div class="bottom1"></div><div class="bottom2"></div><span class="dot">:</span></span></div><div class="col-xs-3 col-sm-3"><span class="number-wrap"><span class="number">%S</span><span class="period">Seconds</span><div class="bottom1"></div><div class="bottom2"></div></span></div></div>'))})});a(".countdown:not(.countdown-inited)").each(function(){a(this).countdown(a(this).attr("data-end"),function(b){a(this).text(b.strftime("%D days %H:%M:%S"))})})};0!=a(".countdown").length&&initCountdown();move=function(b){b.width();a("html").hasClass("is-builder")||b.css("animation",Math.round(parseInt(b.width())/100)+"s floatingText linear infinite")};for(var v=0;2>v;v++)a(".bgTextP").each(function(){a(this).clone().appendTo(a(this).parent())});a(".bgTextP").css("padding-left",window.screen.width/2+"px");a(".wrapper-absolute").each(function(){move(a(this))});initTyped=function(b,c,e,d){a(d).typed({strings:[b,c,e],typeSpeed:parseInt(a(d).attr("typeSpeed")),backSpeed:parseInt(a(d).attr("typeSpeed")),loop:!0,backDelay:1E3})};0!=a(".element").length&&a(".element").each(function(){initTyped(a(this).attr("firstel"),a(this).attr("secondel"),a(this).attr("thirdel"),"."+a(this).attr("adress"))});initToplineMenu=function(){this.onscroll=function(){0!=window.pageYOffset?a(".top-menu").css("display","none"):a(".top-menu").css("display","table")}};moveToplineMenu=function(){a(window).resize(function(){var b=a(".nav-dropdown-sm"),c=a(".nav-dropdown.collapse");a(".top-menu");var e=a(".top-menu").children().clone();768>parseInt(a(window).width())?(b.children(".contacts").remove(),b.children(".social-block").remove(),b.append(e)):(c.children(".contacts").remove(),c.children(".social-block").remove())})};0!=a(".extMenu1").length&&(initToplineMenu(),moveToplineMenu());filterShop=function(b,c){var e=3>c?a(".shop-items").children().sort(function(b,d){var e=parseFloat(a(b).attr("price")),h=parseFloat(a(d).attr("price"));return 1==c?e>h?1:e==h?0:-1:e<h?1:e==h?0:-1}):x;a(".shop-items").children().remove();for(var d=0;d<e.length;d++)a(".shop-items").append(e[d]);modalEvents()};if(0!=a(".extShop1").length){var x=a(".shop-items").children(),l=a(".shop-items").children(),n=a(".sort-buttons .filter-by-pu .btn"),p=a(".sort-buttons .filter-by-pd .btn"),t=a(".sort-buttons .filter-by-d .btn");a(".filter-by-pu").on("click",function(){a(n).removeClass("disableSortButton");a(p).addClass("disableSortButton");a(t).addClass("disableSortButton");filterShop(l,1)});a(".filter-by-pd").on("click",function(){a(p).removeClass("disableSortButton");a(n).addClass("disableSortButton");a(t).addClass("disableSortButton");filterShop(l,2)});a(".filter-by-d").on("click",function(){a(t).removeClass("disableSortButton");a(n).addClass("disableSortButton");a(p).addClass("disableSortButton");filterShop(l,3)});a(".price-range").on("click",function(){var b=a(".min-input").val(),c=a(".max-input").val();a(".mbr-gallery-item:not(.bestsellers .mbr-gallery-item)").each(function(e,d){parseFloat(a(d).attr("price"))>=parseFloat(b)&&parseFloat(a(d).attr("price"))<=parseFloat(c)?a(d).removeClass("hided-by-price"):a(d).addClass("hided-by-price")})});a(".price-range-reset").on("click",function(){a(".max-input").val(findMaxItemPrice());a(".min-input").val(findMinItemPrice());a(".max-toggle").css("right","0");a(".min-toggle").css("left","0");a(".range-controls .bar").css("margin-left","0px").css("width","100%");rangeSliderInit();a(".mbr-gallery-item:not(.bestsellers .mbr-gallery-item)").each(function(b,c){a(c).removeClass("hided-by-price")})})}autoPriceRange=function(){var b=a(".min-input").val(),c=a(".max-input").val();a(".mbr-gallery-item:not(.bestsellers .mbr-gallery-item)").each(function(e,d){parseFloat(a(d).attr("price"))>=parseFloat(b)&&parseFloat(a(d).attr("price"))<=parseFloat(c)?a(d).removeClass("hided-by-price"):a(d).addClass("hided-by-price")})};var y=a(".mbr-gallery-filter-all");a(document).on("add.cards change.cards",function(b){var c=a(b.target);if(c.hasClass("extShop1")){var e=[];c.find(".mbr-gallery-item").each(function(b){(a(this).attr("data-tags")||"").trim().split(",").map(function(b){b=b.trim();-1==a.inArray(b,e)&&e.push(b)})});if(0<c.find(".mbr-gallery-filter").length&&a(b.target).find(".mbr-gallery-filter").hasClass("gallery-filter-active")){var d="";c.find(".mbr-gallery-filter ul li:not(li:eq(0))").remove();e.map(function(a){d+="<li>"+a+"</li>"});c.find(".mbr-gallery-filter ul").append(y).append(d);c.on("click",".mbr-gallery-filter li",function(b){$li=a(this);$li.parent().find("li").removeClass("active");$li.addClass("active");var d=$li.closest("section").find(".mbr-gallery-row"),e=$li.html().trim();c.find(".mbr-gallery-item:not(.bestsellers .mbr-gallery-item)").each(function(b,c){var d=a(this);tagsTrimmed=d.attr("data-tags").split(",").map(function(a){return a.trim()});-1!=a.inArray(e,tagsTrimmed)||$li.hasClass("mbr-gallery-filter-all")?d.removeClass("mbr-gallery-item__hided"):(d.addClass("mbr-gallery-item__hided"),setTimeout(function(){d.css("left","300px")},200))});setTimeout(function(){d.closest(".mbr-gallery-row").trigger("filter")},50)})}else c.find(".mbr-gallery-item__hided").removeClass("mbr-gallery-item__hided"),c.find(".mbr-gallery-row").trigger("filter")}});findMaxItemPrice=function(){var b=0;a(".mbr-gallery-item").each(function(c,e){parseFloat(a(e).attr("price"))>b&&(b=parseFloat(a(e).attr("price")))});return b};findMinItemPrice=function(){var b=1E6;a(".mbr-gallery-item").each(function(c,e){parseFloat(a(e).attr("price"))<b&&(b=parseFloat(a(e).attr("price")))});return b};rangeSliderInit=function(){var b=a("input.min-input"),c=a("input.max-input"),e=a("div.range-controls"),d=e.find("div.bar"),g=e.find("div.min-toggle"),m=e.find("div.max-toggle"),k=d.innerWidth()-20,h=0,f=k,l=e.offset().left,q=b.val(),r=c.val(),n=b.val(),p=parseInt(a(".filter-cost").width())-20;g.mousedown(function(){a(document).on("mousemove",function(c){m.css("z-index",0);g.css("z-index",1);togglePos=Math.round(c.pageX-l)-10;h=0>=togglePos?0:togglePos>=k?k:togglePos;g.css({left:function(a,b){if(h<f)return q=h;q=r;return f}});d.css({"margin-left":function(){return h<f?h:f},width:function(){return h<f?k-(h+(k-f)):0}});a(b).val(Math.floor((findMaxItemPrice()-findMinItemPrice())/p*q)+parseInt(n));autoPriceRange()})});m.mousedown(function(){a(document).on("mousemove",function(b){m.css("z-index",1);g.css("z-index",0);togglePos=Math.round(b.pageX-l)-10;f=0>=togglePos?0:togglePos>=k?k:togglePos;m.css({right:function(a,b){if(h<f)return r=f,k-f;r=q;return k-
h}});d.css({width:function(){return h<f?k-(h+(k-f)):0}});a(c).val(Math.ceil((findMaxItemPrice()-findMinItemPrice())/p*r)+parseInt(n));autoPriceRange()})});a(document).mouseup(function(){a(document).off("mousemove")})};0!=a(".extShop1").length&&a(document).ready(function(){a("input[name=max]").attr("value",findMaxItemPrice());a("input[name=min]").attr("value",findMinItemPrice());"block"==a(".range-slider").css("display")&&rangeSliderInit()});a("html").hasClass("is-builder")||(moveToModal=function(b){var c=a(".shopItemsModal"),e=a(b).find(".sidebar_wraper").clone(),d=a(b).find("img").clone();b=a(b).find(".onsale").clone();a(c).children(".text-modal").append(e);a(c).children(".image-modal").append(d).append(b)},cleanModal=function(){var b=a(".shopItemsModal");a(b).children(".text-modal").empty();a(b).children(".image-modal").empty()},modalEvents=function(){a(".extShop1 .mbr-gallery-item .galleryItem .item_overlay").on("click",function(b){b=a(b.target).closest(".mbr-gallery-item");cleanModal();moveToModal(b);a(".shopItemsModal_wraper").css("display","block")});a(".close-modal-wrapper, .shopItemsModalBg").on("click",function(){a(".shopItemsModal_wraper").css("display","none");cleanModal()})},0!=a(".extShop1").length&&(a(document).ready(function(){l=a(".shop-items").children();filterShop(l,3)}),null!==navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in
window||navigator.msMaxTouchPoints?(a(".range-controls").css("display","none"),a(".price-controls, .filter-cost").css("margin-bottom","15px")):(a("input.min-input, input.max-input").prop("disabled",!0),a(".filterPriceRange").css("display","none"))))})(jQuery);