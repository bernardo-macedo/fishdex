import{L as n}from"./leaflet-BKwr_onr.js";import{i,p as c,o as d,c as m,r as u}from"./index-B_ZzXtjM.js";const k={__name:"CatchMap",props:{catches:{type:Array,required:!0}},setup(p){delete n.Icon.Default.prototype._getIconUrl,n.Icon.Default.mergeOptions({iconRetinaUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",iconUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",shadowUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"});const l=p,r=u(null);let t=null;return i(()=>{t=n.map(r.value,{zoomControl:!0}),n.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(t);const o=[];for(const e of l.catches){const{lat:s,lng:a}=e.coords;n.marker([s,a]).addTo(t).bindPopup(`
      <div style="min-width:140px">
        <strong>${e.name}</strong><br/>
        <span style="color:#64748b;font-size:12px">${e.species||""}</span><br/>
        ${e.date?`<span style="font-size:11px;color:#94a3b8">${e.date}</span>`:""}
        ${e.location?`<br/><span style="font-size:11px">📍 ${e.location}</span>`:""}
      </div>
    `),o.push([s,a])}o.length===1?t.setView(o[0],12):o.length>1&&t.fitBounds(o,{padding:[30,30]})}),c(()=>{t&&t.remove()}),(o,e)=>(d(),m("div",{ref_key:"mapEl",ref:r,class:"w-full h-72 rounded-xl overflow-hidden border border-slate-200 z-0"},null,512))}};export{k as _};
