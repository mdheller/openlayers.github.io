(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{278:function(e,n,t){"use strict";t.r(n);var o=t(2),r=t(3),i=t(216),a=t(6),c=t(21),l=t(42),g=t(13),w=t(14),s=t(50),u=t(23),f=t(19),p=new a.a({source:new l.a({imagerySet:"Aerial",key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5"})}),d={Point:new w.c({image:new s.a({fill:new u.a({color:"rgba(255,255,0,0.4)"}),radius:5,stroke:new f.a({color:"#ff0",width:1})})}),LineString:new w.c({stroke:new f.a({color:"#f00",width:3})}),MultiLineString:new w.c({stroke:new f.a({color:"#0f0",width:3})})},m=new c.a({source:new g.a({url:"data/gpx/fells_loop.gpx",format:new i.a}),style:function(e){return d[e.getGeometry().getType()]}}),y=new o.a({layers:[p,m],target:document.getElementById("map"),view:new r.a({center:[-7916041.528716288,5228379.045749711],zoom:12})}),h=function(e){var n=[];if(y.forEachFeatureAtPixel(e,function(e){n.push(e)}),n.length>0){var t,o,r=[];for(t=0,o=n.length;t<o;++t)r.push(n[t].get("desc"));document.getElementById("info").innerHTML=r.join(", ")||"(unknown)",y.getTarget().style.cursor="pointer"}else document.getElementById("info").innerHTML="&nbsp;",y.getTarget().style.cursor=""};y.on("pointermove",function(e){if(!e.dragging){var n=y.getEventPixel(e.originalEvent);h(n)}}),y.on("click",function(e){h(e.pixel)})}},[[278,0]]]);
//# sourceMappingURL=gpx.js.map