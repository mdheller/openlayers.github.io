(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{404:function(t,e,r){"use strict";r.r(e);var i=r(2),o=r(3),n=r(6),a=r(11),c=r(114),s=r(15),p=r(30),l=r(57),u=r(52),h=r(48),w=function(t){function e(e,r,i){t.call(this,e,s.a.LOADED),this.tileSize_=r,this.text_=i,this.canvas_=null}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getImage=function(){if(this.canvas_)return this.canvas_;var t=this.tileSize_,e=Object(p.a)(t[0],t[1]);return e.strokeStyle="grey",e.strokeRect(.5,.5,t[0]+.5,t[1]+.5),e.fillStyle="grey",e.textAlign="center",e.textBaseline="middle",e.font="24px sans-serif",e.fillText(this.text_,t[0]/2,t[1]/2),this.canvas_=e.canvas,e.canvas},e.prototype.load=function(){},e}(c.a),y=function(t){function e(e){var r=e||{};t.call(this,{opaque:!1,projection:r.projection,tileGrid:r.tileGrid,wrapX:void 0===r.wrapX||r.wrapX})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getTile=function(t,e,r){var i=Object(h.d)(t,e,r);if(this.tileCache.containsKey(i))return this.tileCache.get(i);var o,n=Object(l.d)(this.tileGrid.getTileSize(t)),a=[t,e,r],c=this.getTileCoordForTileUrlFunction(a);o=c?"z:"+c[0]+" x:"+c[1]+" y:"+c[2]:"none";var s=new w(a,n,o);return this.tileCache.set(i,s),s},e}(u.a);new i.a({layers:[new n.a({source:new a.b}),new n.a({source:new y})],target:"map",view:new o.a({center:[0,0],zoom:1})})}},[[404,0]]]);
//# sourceMappingURL=canvas-tiles.js.map