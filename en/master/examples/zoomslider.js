(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{401:function(t,i,e){"use strict";e.r(i);var s=e(2),o=e(3),n=e(39),r=e(78),a=e(44),h=e(55),l=e(7),g=e(45),u=e(10),d=e(17),_=e(85),p=e(180),c={VERTICAL:0,HORIZONTAL:1};function m(t){if(t.frameState){this.sliderInitialized_||this.initSlider_();var i=t.frameState.viewState.resolution;i!==this.currentResolution_&&(this.currentResolution_=i,this.setThumbPosition_(i))}}var f=function(t){function i(i){var e=i||{};t.call(this,{element:document.createElement("div"),render:e.render||m}),this.dragListenerKeys_=[],this.currentResolution_=void 0,this.direction_=c.VERTICAL,this.dragging_,this.heightLimit_=0,this.widthLimit_=0,this.previousX_,this.previousY_,this.thumbSize_=null,this.sliderInitialized_=!1,this.duration_=void 0!==e.duration?e.duration:200;var s=void 0!==e.className?e.className:"ol-zoomslider",o=document.createElement("button");o.setAttribute("type","button"),o.className=s+"-thumb "+a.e;var n=this.element;n.className=s+" "+a.e+" "+a.b,n.appendChild(o),this.dragger_=new p.a(n),Object(l.a)(this.dragger_,_.a.POINTERDOWN,this.handleDraggerStart_,this),Object(l.a)(this.dragger_,_.a.POINTERMOVE,this.handleDraggerDrag_,this),Object(l.a)(this.dragger_,_.a.POINTERUP,this.handleDraggerEnd_,this),Object(l.a)(n,u.a.CLICK,this.handleContainerClick_,this),Object(l.a)(o,u.a.CLICK,g.b)}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.disposeInternal=function(){this.dragger_.dispose(),t.prototype.disposeInternal.call(this)},i.prototype.setMap=function(i){t.prototype.setMap.call(this,i),i&&i.render()},i.prototype.initSlider_=function(){var t=this.element,i=t.offsetWidth,e=t.offsetHeight,s=t.firstElementChild,o=getComputedStyle(s),n=s.offsetWidth+parseFloat(o.marginRight)+parseFloat(o.marginLeft),r=s.offsetHeight+parseFloat(o.marginTop)+parseFloat(o.marginBottom);this.thumbSize_=[n,r],i>e?(this.direction_=c.HORIZONTAL,this.widthLimit_=i-n):(this.direction_=c.VERTICAL,this.heightLimit_=e-r),this.sliderInitialized_=!0},i.prototype.handleContainerClick_=function(t){var i=this.getMap().getView(),e=this.getRelativePosition_(t.offsetX-this.thumbSize_[0]/2,t.offsetY-this.thumbSize_[1]/2),s=this.getResolutionForPosition_(e);i.animate({resolution:i.constrainResolution(s),duration:this.duration_,easing:h.b})},i.prototype.handleDraggerStart_=function(t){if(!this.dragging_&&t.originalEvent.target===this.element.firstElementChild&&(this.getMap().getView().setHint(n.a.INTERACTING,1),this.previousX_=t.clientX,this.previousY_=t.clientY,this.dragging_=!0,0===this.dragListenerKeys_.length)){var i=this.handleDraggerDrag_,e=this.handleDraggerEnd_;this.dragListenerKeys_.push(Object(l.a)(document,u.a.MOUSEMOVE,i,this),Object(l.a)(document,_.a.POINTERMOVE,i,this),Object(l.a)(document,u.a.MOUSEUP,e,this),Object(l.a)(document,_.a.POINTERUP,e,this))}},i.prototype.handleDraggerDrag_=function(t){if(this.dragging_){var i=this.element.firstElementChild,e=t.clientX-this.previousX_+parseFloat(i.style.left),s=t.clientY-this.previousY_+parseFloat(i.style.top),o=this.getRelativePosition_(e,s);this.currentResolution_=this.getResolutionForPosition_(o),this.getMap().getView().setResolution(this.currentResolution_),this.setThumbPosition_(this.currentResolution_),this.previousX_=t.clientX,this.previousY_=t.clientY}},i.prototype.handleDraggerEnd_=function(t){if(this.dragging_){var i=this.getMap().getView();i.setHint(n.a.INTERACTING,-1),i.animate({resolution:i.constrainResolution(this.currentResolution_),duration:this.duration_,easing:h.b}),this.dragging_=!1,this.previousX_=void 0,this.previousY_=void 0,this.dragListenerKeys_.forEach(l.e),this.dragListenerKeys_.length=0}},i.prototype.setThumbPosition_=function(t){var i=this.getPositionForResolution_(t),e=this.element.firstElementChild;this.direction_==c.HORIZONTAL?e.style.left=this.widthLimit_*i+"px":e.style.top=this.heightLimit_*i+"px"},i.prototype.getRelativePosition_=function(t,i){var e;return e=this.direction_===c.HORIZONTAL?t/this.widthLimit_:i/this.heightLimit_,Object(d.a)(e,0,1)},i.prototype.getResolutionForPosition_=function(t){return this.getMap().getView().getResolutionForValueFunction()(1-t)},i.prototype.getPositionForResolution_=function(t){return 1-this.getMap().getView().getValueForResolutionFunction()(t)},i}(r.a),v=e(6),R=e(11);function O(t){var i=new R.b,e=new v.a({source:i}),n=new s.a({layers:[e],target:t,view:new o.a({center:[0,0],zoom:2})}),r=new f;return n.addControl(r),n}O("map1"),O("map2"),O("map3")}},[[401,0]]]);
//# sourceMappingURL=zoomslider.js.map