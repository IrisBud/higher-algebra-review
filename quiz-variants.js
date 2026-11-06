window.QUIZ_VARIANTS={
'xxt21-7':{statement:String.raw`阳版习题 2.1 第 7 题（2）：试找从 \(A=\begin{pmatrix}1&2&3&0\\0&2&-2&4\\0&3&2&5\end{pmatrix}\) 到 \(B=\begin{pmatrix}1&2&3&0\\0&1&-1&2\\0&0&5&-1\end{pmatrix}\) 的初等行变换及其逆变换。`,ref:'阳庆节版习题 2.1 第 7 题（2），印刷页 33。',solution:String.raw`先作 \(R_2\leftarrow\frac12R_2\)，再作 \(R_3\leftarrow R_3-3R_2\)，得 B。逆向依次作 \(R_3\leftarrow R_3+3R_2\)、\(R_2\leftarrow2R_2\)，回到 A。`},
'xxt21-10':{statement:String.raw`阳版例 2.8：判断 \(\begin{pmatrix}0&1&0&2\\0&1&0&0\\0&0&0&3\\0&0&0&0\end{pmatrix}\) 是否为阶梯形矩阵。`,ref:'阳庆节版例 2.8，印刷页 34。',solution:String.raw`前两行首非零元同在第二列，不满足后一非零行的首非零元位于前一行首非零元右侧的条件，故不是阶梯形。`},
'xxt21-11':{statement:String.raw`阳版例 2.9：判断 \(\begin{pmatrix}0&1&0&0\\0&0&1&0\\0&0&0&0\\0&0&0&0\end{pmatrix}\) 是否为简化阶梯形矩阵。`,ref:'阳庆节版例 2.9，印刷页 34。',solution:String.raw`零行在末尾，非零行首非零元依次在第二、三列，且均为 1、其所在列的其他元素均为 0，因此是简化阶梯形。`},
'xxt21-12':{statement:String.raw`教材例 2.9 下方的矩阵化简：把 \(\begin{pmatrix}1&-2&1&4&6\\0&1&2&1&-1\\0&0&0&1&2\\0&0&0&0&0\end{pmatrix}\) 化为简化阶梯形。`,ref:'阳庆节版印刷页 34，例 2.9 后的化简示例。',solution:String.raw`先作 \(R_2\leftarrow R_2-R_3\)、\(R_1\leftarrow R_1-4R_3\)，再作 \(R_1\leftarrow R_1+2R_2\)，得 \(\begin{pmatrix}1&0&5&0&-8\\0&1&2&0&-3\\0&0&0&1&2\\0&0&0&0&0\end{pmatrix}\)。`},
'xxt25-13':{statement:String.raw`练习教材定理 2.5：若 \(\alpha_1,\ldots,\alpha_s\) 线性无关，且 \(\beta\) 可由它们线性表出，证明这种表法唯一。`,ref:'根据阳庆节版定理 2.5 的唯一性部分改写，印刷页 55。',solution:String.raw`若 \(\beta=\sum k_i\alpha_i=\sum l_i\alpha_i\)，相减得 \(\sum(k_i-l_i)\alpha_i=0\)。由原组无关，\(k_i-l_i=0\)，故各系数相等。`},
'xxt26-38':{statement:String.raw`阳版习题 2.5 第 1 题（4）：判断列向量 \((3,0,2)^{\mathrm T}\)、\((1,1,1)^{\mathrm T}\) 的相关性；再比较把它们写成行向量后的相关性。`,ref:'阳庆节版习题 2.5 第 1 题（4），印刷页 55；增加行列写法比较。',solution:String.raw`若 \(k(3,0,2)^{\mathrm T}+l(1,1,1)^{\mathrm T}=0\)，第二分量得 \(l=0\)，第一分量得 \(k=0\)，故列向量无关。写成行向量后同样比较分量，得到相同系数条件，故仍无关。`},
'xxt26-39':{statement:String.raw`阳版习题 2.6 第 3 题（1）：\(\alpha_1=(6,4,1,9,2)^{\mathrm T}\)、\(\alpha_2=(1,0,2,3,-4)^{\mathrm T}\)、\(\alpha_3=(1,4,-9,-6,22)^{\mathrm T}\)、\(\alpha_4=(7,1,0,-1,3)^{\mathrm T}\)。求一个极大无关组，并说明全部改写为行向量后对应结论。`,ref:'阳庆节版习题 2.6 第 3 题（1），印刷页 63；增加行列写法比较。',solution:String.raw`把四列排成矩阵并作行变换，得 \(\begin{pmatrix}1&0&1&0\\0&1&-5&0\\0&0&0&1\\0&0&0&0\\0&0&0&0\end{pmatrix}\)。故可取 \(\alpha_1,\alpha_2,\alpha_4\)，且 \(\alpha_3=\alpha_1-5\alpha_2\)。同一线性关系按分量改写成行向量仍成立，因此对应的三个行向量仍是极大无关组。`}
};
function quizReference(group,n){
 if(group==='xxt21'){if(n<=9)return '§2.1，印刷页 27—30：增广矩阵与初等行变换';if(n<=13)return '§2.2，印刷页 34—36：阶梯形矩阵与化简';return '§2.2，印刷页 37—39：线性方程组解的情况';}
 if(group==='xxt23'){if([7,8,9,10,13].includes(n))return '§2.3，印刷页 41—46：向量运算与线性表出';return '§2.4，印刷页 47—50：齐次与非齐次方程组的解集';}
 if(group==='xxt25')return n===14?'§2.6，印刷页 56—57：向量组的线性表出':'§2.5，印刷页 52—55：线性相关与线性表出';
 if(group==='xxt26'){if(n<=6)return '§2.6，印刷页 56—58：向量组表出、等价及定理 2.6';if(n<=17)return '§2.6，印刷页 57—59：极大线性无关组与向量组的秩';if(n<=25)return '§2.6，印刷页 59—61：行秩、列秩与初等变换';if(n<=37)return '§2.6，印刷页 61—63：秩与线性方程组解的判定';return '§2.6，印刷页 57、60—61：向量组的秩与极大无关组';}
 return '教材章节待核对';
}
