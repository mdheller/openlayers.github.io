(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{392:function(t,e,r){"use strict";r.r(e);var i=r(2),o=r(3),a=r(6),n=r(11),s=r(1),p=r(17),c=r(12),l=r(57),u=r(87),h=r(48),g=r(109);function m(t,e,r){var i=this.getTileGrid();if(i||(i=this.getTileGridForProjection(r)),!(i.getResolutions().length<=t[0])){var o=i.getTileCoordExtent(t,this.tmpExtent_),a=Object(l.d)(i.getTileSize(t[0]),this.tmpSize);1!=e&&(a=Object(l.c)(a,e,this.tmpSize));var n={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};return Object(c.a)(n,this.params_),this.getRequestUrl_(t,a,o,e,r,n)}}var v=function(t){function e(e){var r=e||{};t.call(this,{attributions:r.attributions,cacheSize:r.cacheSize,crossOrigin:r.crossOrigin,projection:r.projection,reprojectionErrorThreshold:r.reprojectionErrorThreshold,tileGrid:r.tileGrid,tileLoadFunction:r.tileLoadFunction,tileUrlFunction:m,url:r.url,urls:r.urls,wrapX:void 0===r.wrapX||r.wrapX,transition:r.transition}),this.params_=r.params||{},this.tmpExtent_=Object(s.j)(),this.setKey(this.getKeyForParams_())}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getKeyForParams_=function(){var t=0,e=[];for(var r in this.params_)e[t++]=r+"-"+this.params_[r];return e.join("/")},e.prototype.getParams=function(){return this.params_},e.prototype.getRequestUrl_=function(t,e,r,i,o,a){var n=this.urls;if(n){var s,c=o.getCode().split(":").pop();if(a.SIZE=e[0]+","+e[1],a.BBOX=r.join(","),a.BBOXSR=c,a.IMAGESR=c,a.DPI=Math.round(a.DPI?a.DPI*i:90*i),1==n.length)s=n[0];else s=n[Object(p.d)(Object(h.e)(t),n.length)];var l=s.replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage");return Object(g.a)(l,a)}},e.prototype.getTilePixelRatio=function(t){return t},e.prototype.updateParams=function(t){Object(c.a)(this.params_,t),this.setKey(this.getKeyForParams_())},e}(u.a),S=[new a.a({source:new n.b}),new a.a({extent:[-13884991,2870341,-7455066,6338219],source:new v({url:"https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer"})})];new i.a({layers:S,target:"map",view:new o.a({center:[-10997148,4569099],zoom:4})})}},[[392,0]]]);
//# sourceMappingURL=arcgis-tiled.js.map