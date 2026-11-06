/* 显示时按文字句末分段；数学公式内部不插入换行。 */
(()=>{
'use strict';
window.readableAnswer=function(value){
 const chunks=String(value??'').split(/(\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g);
 let output='',length=0;
 for(let part=0;part<chunks.length;part++){
  const chunk=chunks[part];
  if(part%2){output+=chunk;length+=Math.min(20,chunk.length);continue}
  for(let i=0;i<chunk.length;i++){
   let c=chunk[i];output+=c;
   if(c==='\n'){length=0;continue}
   length++;
   if(c==='。'||c==='；'){
    let next=chunk.slice(i+1);const closer=/^[”’」』]/.exec(next);
    if(closer){output+=closer[0];i++;next=chunk.slice(i+1)}
    const transition=/^\s*(反过来|反之|另一方面|充分性|必要性|当[^，。]{0,20}时)/.test(next);
    if((c==='。'&&(length>=55||(length>=25&&transition)))||(c==='；'&&length>=110)){
     output+='\n\n';length=0;
    }
   }
  }
 }
 return output.replace(/\n{3,}/g,'\n\n').trim();
};

// 该题以“两个包含方向”为主线，保留原推理，仅调整段落和公式布局。
const q=(window.OTHER||[]).find(item=>item.id==='other-24-1');
if(q){
 q.solution=q.solution
  .replace('。第 j 个主未知量满足 ', '。\n\n第 j 个主未知量满足')
  .replace(String.raw`\(x_j=-\sum_{i=1}^{t}c_{j,r+i}k_i\)。`,String.raw`\[x_j=-\sum_{i=1}^{t}c_{j,r+i}k_i.\]`)
  .replace('。令 ', '。\n\n令 ')
  .replace('。比较各分量，', '。\n\n比较各分量，')
  .replace('。反过来，', '。\n\n反过来，')
  .replace('。故两个集合相等。', '。\n\n故两个集合相等。')
  .replace('。只有零解时解集为', '。\n\n只有零解时解集为');
}
})();
