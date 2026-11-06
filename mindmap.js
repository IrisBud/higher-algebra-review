(()=>{
'use strict';
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
window.mountMindMap=function(chapter){
 const host=document.getElementById('chapter-graph'),data=window.MINDMAP_DATA?.[chapter];
 if(!host||!data)return;
 let selected=null,chosenLink=null;
 const positions={};
 data.branches.forEach((b,i)=>{let left=i<3,row=left?i:i-3;positions[b.id]={left,x:left?370:810,y:170+row*310};});
 const curve=(x1,y1,x2,y2)=>`M ${x1} ${y1} C ${(x1+x2)/2} ${y1}, ${(x1+x2)/2} ${y2}, ${x2} ${y2}`;
 let paths='',nodes='';
 data.branches.forEach((b,i)=>{
  const p=positions[b.id],left=p.left,branchEnd=p.x+(left?90:-90),rootEnd=590+(left?-92:92),leafEnd=left?180:1000,leafStart=p.x+(left?-90:90);
  paths+=`<path class="graph-branch branch-${i}" d="${curve(rootEnd,480,branchEnd,p.y)}"/>`;
  nodes+=`<button class="graph-node graph-group branch-${i}" style="left:${p.x}px;top:${p.y}px" data-node="${esc(b.id)}" aria-pressed="false"><small>${esc(b.section)} · 印刷页 ${esc(b.page)}</small><strong>${esc(b.title)}</strong></button>`;
  b.topics.forEach((t,j)=>{let y=p.y+(j-1)*87,x=left?90:1090,id=b.id+':'+j;
   paths+=`<path class="graph-leaf-line branch-${i}" d="${curve(leafStart,p.y,leafEnd,y)}"/>`;
   nodes+=`<button class="graph-node graph-leaf branch-${i}" style="left:${x}px;top:${y}px" data-node="${esc(id)}" aria-pressed="false">${esc(t.title)}</button>`;
  });
 });
 host.innerHTML=`<div class="graph-intro"><div><h2>章节思维导图</h2><p>从中心向外看小节与知识点；选择节点可查看解释和关联。</p></div><div class="graph-zoom"><button data-zoom="fit">查看全图</button><button data-zoom="full">放大阅读</button></div></div><p class="graph-hint">选择节点或下方的关系；放大后可左右滑动。</p><div class="graph-scroll" tabindex="0" aria-label="第 ${esc(chapter)} 章思维导图，可左右滚动"><div class="graph-canvas"><svg class="graph-lines" viewBox="0 0 1180 960" aria-hidden="true"><defs><marker id="graph-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#9b6d35"/></marker></defs>${paths}<g id="graph-relations"></g></svg><div class="graph-center" style="left:590px;top:480px"><span>第 ${esc(chapter)} 章</span><strong>${esc(data.title)}</strong></div>${nodes}</div></div><div class="graph-details" id="graph-details" aria-live="polite"></div><p class="graph-optional">${esc(data.supplement)}</p>`;
 const panel=host.querySelector('#graph-details'),layer=host.querySelector('#graph-relations');
 function refresh(){
  host.querySelectorAll('[data-node]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.node===selected)));
  const [branchId,topicIndex]=String(selected||'').split(':'),b=data.branches.find(x=>x.id===branchId),t=b&&topicIndex!==undefined?b.topics[Number(topicIndex)]:null;
  let relevant=chosenLink!==null?[data.links[chosenLink]]:b?data.links.filter(link=>link[0]===b.id||link[1]===b.id):data.links;
  layer.innerHTML=(b?relevant:[]).map(link=>{const a=positions[link[0]],z=positions[link[1]],same=a.left===z.left,offset=a.left?-18:18;let x1=a.x+(same?offset:0),x2=z.x+(same?offset:0),y1=a.y+39,y2=z.y-39;return `<path class="graph-cross" d="${curve(x1,y1,x2,y2)}" marker-end="url(#graph-arrow)"/>`}).join('');
  const entries=relevant.map(link=>{let i=data.links.indexOf(link),from=data.branches.find(x=>x.id===link[0]),to=data.branches.find(x=>x.id===link[1]);return `<button class="graph-relation" data-link="${i}"><span>${esc(from.title)} <b aria-hidden="true">→</b> ${esc(to.title)}</span><strong>${esc(link[2])}</strong><small>${esc(link[3])}</small></button>`}).join('');
  panel.innerHTML=b?`<div class="graph-detail-head"><div><span class="graph-section">${esc(b.section)} · 教材印刷页 ${esc(b.page)}</span><h3>${esc(t?t.title:b.title)}</h3></div><button class="map-link" data-go="${esc(b.section)}">进入本节作业 →</button></div><p>${esc(t?t.body:b.summary)}</p>${!t?`<div class="graph-topic-list">${b.topics.map((topic,i)=>`<button data-node="${esc(b.id+':'+i)}">${esc(topic.title)} <span>查看 →</span></button>`).join('')}</div>`:''}<h4>与其他知识点的联系</h4><div class="graph-relation-list">${entries}</div>${chosenLink!==null?'<button class="graph-clear" data-clear>查看本分支全部联系</button>':''}`:`<h3>沿着知识之间的联系复习</h3><p>点击图中的小节或知识点，查看对应解释；也可以从下面的关系直接开始。</p><div class="graph-relation-list">${entries}</div>`;
  if(window.renderMathInElement)renderMathInElement(panel,{delimiters:[{left:'\\(',right:'\\)',display:false},{left:'\\[',right:'\\]',display:true}],throwOnError:false});
 }
 const scroller=host.querySelector('.graph-scroll'),canvas=host.querySelector('.graph-canvas');
 function zoom(mode){const scale=mode==='fit'?Math.min(1,scroller.clientWidth/1180):1;canvas.style.zoom=scale;scroller.scrollLeft=(scroller.scrollWidth-scroller.clientWidth)/2;host.querySelectorAll('[data-zoom]').forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.zoom===mode)));}
 host.addEventListener('click',e=>{
  const btn=e.target.closest('button');if(!btn)return;
  if(btn.dataset.node){selected=btn.dataset.node;chosenLink=null;refresh();}
  if(btn.dataset.link!==undefined){chosenLink=Number(btn.dataset.link);selected=data.links[chosenLink][0];refresh();}
  if(btn.hasAttribute('data-clear')){chosenLink=null;refresh();}
  if(btn.dataset.zoom)zoom(btn.dataset.zoom);
 });
 refresh();
 zoom(scroller.clientWidth>=600?'fit':'full');
 if(window.ResizeObserver){let previous=scroller.clientWidth;const observer=new ResizeObserver(()=>{if(!host.isConnected){observer.disconnect();return}if(previous!==scroller.clientWidth){previous=scroller.clientWidth;if(host.querySelector('[data-zoom="fit"]').getAttribute('aria-pressed')==='true')zoom('fit')}});observer.observe(scroller);}
};
})();
