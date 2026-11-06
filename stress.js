/* Local developer fixture: activate only with ?ui-test=normal|worst|empty|many. */
(()=>{const p=new URLSearchParams(location.search),mode=p.get('ui-test');if(!mode||!['127.0.0.1','localhost'].includes(location.hostname))return;
 const seed=(window.BOOK||[]).find(q=>q.id==='book-26-5');if(!seed)return;
 const longTitle='含多项参数的矩阵秩、向量组线性表出与初等行变换综合复习：课堂作业中的充分条件、必要条件、极大无关组及解集判断';
 const longTag='初等行变换及参数分类与矩阵的秩与方程组解的情况以及向量组线性相关性'.repeat(3);
 const make=(id,title)=>({...seed,id,section:'2.6',title,point:longTag,statement:String.raw`设 \(A=\begin{pmatrix}1&\lambda&-1&2&3&4\\2&-1&\lambda&5&6&7\\1&10&-6&1&8&9\end{pmatrix}\)。讨论矩阵在参数变化时的秩，并解释各个可能出现的边界情形。`,variant:'练习：解释改变参数后如何检验阶梯形中的非零行。',variantRef:'测试数据',variantSolution:'先分参数情形，再比较主元；计算后回代检查。',walk:'这是用于检查长标题、公式和复习标记排版的数据。'});
 if(mode==='worst')window.BOOK.unshift(make('debug-worst',longTitle));
 if(mode==='empty'){window.BOOK=window.BOOK.filter(q=>q.section!=='2.6');window.OTHER=(window.OTHER||[]).filter(q=>q.section!=='2.6')}
 if(mode==='many')window.BOOK=Array.from({length:1000},(_,i)=>make(`debug-${i}`,`测试题 ${i+1}：矩阵秩和线性方程组`));
 const bar=document.createElement('div');bar.className='dev-switch';bar.setAttribute('aria-label','开发检查数据');bar.textContent='测试数据：';for(const [v,label] of [['normal','正常'],['worst','长内容'],['empty','空列表'],['many','1000 题']]){const a=document.createElement('a');a.textContent=label;a.href=`?ui-test=${v}#2.6`;if(v===mode)a.setAttribute('aria-current','page');bar.appendChild(a)}document.body.appendChild(bar);
})();
