if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")}+function(f){function e(a,c){return this.each(function(){var i=f(this),d=i.data("bs.modal"),b=f.extend({},h.DEFAULTS,i.data(),"object"==typeof a&&a);d||i.data("bs.modal",d=new h(this,b)),"string"==typeof a?d[a](c):b.show&&d.show(c)})}var h=function(a,d){this.options=d,this.$body=f(document.body),this.$element=f(a),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,f.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};h.VERSION="3.3.7",h.TRANSITION_DURATION=300,h.BACKDROP_TRANSITION_DURATION=150,h.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},h.prototype.toggle=function(b){return this.isShown?this.hide():this.show(b)},h.prototype.show=function(a){var i=this,c=f.Event("show.bs.modal",{relatedTarget:a});this.$element.trigger(c),this.isShown||c.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',f.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(d){f(d.target).is(i.$element)&&(i.ignoreBackdropClick=!0)})}),this.backdrop(function(){var d=f.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),d&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();var b=f.Event("shown.bs.modal",{relatedTarget:a});d?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(b)}).emulateTransitionEnd(h.TRANSITION_DURATION):i.$element.trigger("focus").trigger(b)}))},h.prototype.hide=function(a){a&&a.preventDefault(),a=f.Event("hide.bs.modal"),this.$element.trigger(a),this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),f(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),f.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",f.proxy(this.hideModal,this)).emulateTransitionEnd(h.TRANSITION_DURATION):this.hideModal())},h.prototype.enforceFocus=function(){f(document).off("focusin.bs.modal").on("focusin.bs.modal",f.proxy(function(b){document===b.target||this.$element[0]===b.target||this.$element.has(b.target).length||this.$element.trigger("focus")},this))},h.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",f.proxy(function(b){27==b.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},h.prototype.resize=function(){this.isShown?f(window).on("resize.bs.modal",f.proxy(this.handleUpdate,this)):f(window).off("resize.bs.modal")},h.prototype.hideModal=function(){var b=this;this.$element.hide(),this.backdrop(function(){b.$body.removeClass("modal-open"),b.resetAdjustments(),b.resetScrollbar(),b.$element.trigger("hidden.bs.modal")})},h.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},h.prototype.backdrop=function(a){var k=this,j=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=f.support.transition&&j;if(this.$backdrop=f(document.createElement("div")).addClass("modal-backdrop "+j).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",f.proxy(function(b){return this.ignoreBackdropClick?void (this.ignoreBackdropClick=!1):void (b.target===b.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!a){return}i?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):a()}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var c=function(){k.removeBackdrop(),a&&a()};f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):c()}else{a&&a()}}},h.prototype.handleUpdate=function(){this.adjustDialog()},h.prototype.adjustDialog=function(){var b=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&b?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!b?this.scrollbarWidth:""})},h.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},h.prototype.checkScrollbar=function(){var d=window.innerWidth;if(!d){var c=document.documentElement.getBoundingClientRect();d=c.right-Math.abs(c.left)}this.bodyIsOverflowing=document.body.clientWidth<d,this.scrollbarWidth=this.measureScrollbar()},h.prototype.setScrollbar=function(){var b=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",0)},h.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},h.prototype.measureScrollbar=function(){var d=document.createElement("div");d.className="modal-scrollbar-measure",this.$body.append(d);var c=d.offsetWidth-d.clientWidth;return this.$body[0].removeChild(d),c};var g=f.fn.modal;f.fn.modal=e,f.fn.modal.Constructor=h,f.fn.modal.noConflict=function(){return f.fn.modal=g,this},f(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(k){var j=f(this),i=j.attr("href"),b=f(j.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),a=b.data("bs.modal")?"toggle":f.extend({remote:!/#/.test(i)&&i},b.data(),j.data());j.is("a")&&k.preventDefault(),b.one("show.bs.modal",function(c){c.isDefaultPrevented()||b.one("hidden.bs.modal",function(){j.is(":visible")&&j.trigger("focus")})}),e.call(b,a,this)})}(jQuery),+function(b){}(jQuery);