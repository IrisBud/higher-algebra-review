/* 统一零向量记号；数字零和零矩阵仍按原题含义保留。 */
(()=>{
'use strict';
const bold=String.raw`\mathbf{0}`;
function math(s){
  // L_i 是单个方程的实数值左端，不是向量。
  if(s.includes('L_i('))return s;
  // 希腊字母在这些题目中表示向量；逗号、分号和等号限制匹配范围。
  s=s.replace(/(\\(?:alpha|beta|gamma|eta)(?:(?![,;=]).)*?)(=|\\ne|\\neq)0(?!\d)/g,(_,a,rel)=>a+rel+bold);
  for(const literal of ['A^{\\mathrm T}Ax=0','ABx=0','CAx=0','A(Ax)=0','Se_1=0','S^ke_j=0','S^ne_j=0','2(3,0)+6(-1,1)-3(0,2)=0','\\sum_{i=1}^nc_ie_i=0']){
    // 排除 x^T Ax 等内积：它们的结果是数。
    s=s.replaceAll(literal, m=>m.slice(0,-1)+bold);
  }
  s=s.replace(/(?<![\w}])(?:Ax|Bx)=0(?!\d)/g,m=>m.slice(0,-1)+bold);
  s=s.replaceAll(String.raw`x=A^{-1}0=0`,String.raw`x=A^{-1}\mathbf{0}=\mathbf{0}`);
  s=s.replaceAll(String.raw`S=(0,e_1`,String.raw`S=(\mathbf{0},e_1`);
  s=s.replaceAll(String.raw`\{0\}`,String.raw`\{\mathbf{0}\}`);
  return s;
}
function normalize(s){
  return s.split(/(\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\])/g).map((part,i)=>{
    if(i%2)return math(part);
    return part.replaceAll('α=0',String.raw`\(\alpha=\mathbf{0}\)`)
      .replace(/\b(ABx|Ax|Bx)=0\b/g,(_,v)=>String.raw`\(${v}=\mathbf{0}\)`)
      .replaceAll('得 x=0',String.raw`得 \(x=\mathbf{0}\)`);
  }).join('');
}
function walk(value){
  if(!value||typeof value!=='object')return;
  for(const key of Object.keys(value)){
    if(typeof value[key]==='string')value[key]=normalize(value[key]);
    else walk(value[key]);
  }
}
for(const name of ['STUDY','BOOK','OTHER','EXAM','QUIZ_EXTRA','QUIZ_VARIANTS','KNOWLEDGE','CHAPTER_MAP'])walk(window[name]);
})();
