/* 按教材小节与题目人工关联；口诀不是定理的完整陈述。 */
window.MEMORY_CUES={
row_ops:{text:'行变换，找主元；看位置，回原阵。',explain:'把原向量按列排成矩阵，只作初等行变换；找出阶梯形矩阵的主元列，再按列号回原矩阵取列。行变换保持原列之间的线性关系，但通常改变列向量的具体分量。',ref:'阳版 §2.6，印刷页 60—61'},
units:{text:'擒贼先擒王，表出单位阵。',explain:String.raw`要证明向量组生成 \(\mathbb R^n\)，只需证明每个标准单位向量 \(e_1,\ldots,e_n\) 都能由它表出；再用线性组合表示任意向量。向量的个数不必恰好是 n。`,ref:'阳版 §2.3，印刷页 43—46'},
det_shape:{text:'整阵要方，非方看子式。',explain:'行列式针对方阵；矩形矩阵不能直接取整个矩阵的行列式，但可以选取其中的方形子矩阵，计算其行列式作为子式，用来判断秩或线性无关。',ref:'阳版第4章，印刷页 108 起；子式与秩结合 §2.6',optional:true},
det_test:{text:'方阵行列式：零则相关，非零则无关。',explain:String.raw`对 n 阶方阵 A，\(\det A=0\) 等价于其列向量组相关、秩小于 n、\(Ax=\mathbf{0}\) 有非零解及 A 不可逆；非零时上述结论相反。对非齐次 \(Ax=\beta\)，行列式为零时可能无解或有无穷多解，不能直接判定。`,ref:'阳版第4章，印刷页 108—135',optional:true},
rank_solve:{text:'先看两秩等不等；不等无解；相等再和 n 比，等 n 唯一，小于 n 无穷多。',explain:String.raw`设未知量有 n 个。\(r(A)\ne r(A\mid\beta)\) 时无解；两秩相等时才有解，此时共同秩等于 n 则唯一解，小于 n 则无穷多解。`,ref:'阳版 §2.6，印刷页 61—63'},
free_basis:{text:'化成最简找主元；主元变量用自由元表示；逐个赋值，通分去分母。',explain:'对于齐次组，先把主元变量用自由变量表示。令一个自由变量为 1、其余为 0，依次构造基础解向量；为避免分数，也可把每个所得向量单独乘非零常数，例如按分母的最小公倍数放大。只有零解时直接说明，不强造非零基础解向量。',ref:'阳版 §2.4，印刷页 48；§2.6，印刷页 61'},
dim_hom:{text:'齐次解空间维数：未知量数 n 减秩 r。',explain:String.raw`n 为未知量个数、r 为系数矩阵的秩。齐次组有 \(n-r\) 个自由未知量；有非零解时基础解系有 \(n-r\) 个向量。解向量有 n 个分量，与基础解向量的个数是两回事。“齐次解空间的维数为 \(n-r\)”是后续维数语言；非齐次组若有解，其解集是特解加齐次解集，不能直接当作向量空间。`,ref:'阳版 §2.4 印刷页 48、§2.6 印刷页 61；维数语言补充见 §5.2 印刷页 149',optional:true},
cofactor:{text:'一划行列，二算余式，三看正负。',explain:String.raw`求代数余子式 \(A_{ij}\)：删去第 i 行、第 j 列，算剩余行列式，再乘 \((-1)^{i+j}\)。符号从左上角为正开始，横向、纵向相邻都变号。`,ref:'阳版 §4.3，印刷页 124 起',optional:true},
adj_inverse:{text:'一算行列式，二求伴随阵，三除行列式。',explain:String.raw`仅对 \(\det A\ne0\) 的方阵有 \(A^{-1}=A^*/\det A\)。先判断行列式非零，再计算伴随矩阵；二阶和三阶通常可考虑此法，但是否简便也要看矩阵结构。`,ref:'阳版 §4.4，印刷页 131 起',optional:true},
adj_two:{text:'主对角线互换，副对角线变号。',explain:String.raw`对二阶矩阵 \(A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\)，伴随矩阵是 \(A^*=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}\)。求逆还必须检查 \(ad-bc\ne0\)，并除以它。`,ref:'阳版 §3.3 印刷页 86；伴随矩阵解释见 §4.4 印刷页 131 起',optional:true},
adj_transpose:{text:'拼伴随阵，千万别忘转置！',explain:String.raw`先按原来的位置排出代数余子式矩阵 \((A_{ij})\)，再整体转置得到伴随矩阵：\(A^*=(A_{ji})\)。不是直接把余子式矩阵当作伴随矩阵。`,ref:'阳版 §4.4，印刷页 131 起',optional:true},
param_det:{text:'方阵遇参数，先找零值，再代回原题。',explain:'对含参数的方阵问题，可先求行列式为零的特殊值；非零时用可逆或克莱姆法则，等于零时仍要代回原方程组逐一判断。矩形矩阵应按题目考虑子式或消元，不能直接取整阵行列式。',ref:'阳版 §4.4，印刷页 131 起；§2.2 印刷页 33—39',optional:true},
high_order:{text:'阶数先看结构，计算再选方法。',explain:'四阶及以上不一定都难：三角、对角、稀疏或分块结构可能让行列式计算很快。求一般矩阵的逆时，也可用增广矩阵作行变换；先比较结构和计算量，不机械规定阶数。',ref:'阳版 §3.4 印刷页 87—90；§4.2—4.4 印刷页 115—135',optional:true},
proof_define:{text:'证明先看定义，设元展开找关系。',explain:'在线性表出、线性相关等题中，可以设线性组合并按定义比较系数；也应根据题目选用已学定理、反例或其他合适方法，不把设元当作所有证明的唯一办法。',ref:'阳版 §2.3—2.5，印刷页 41—55'},
eliminate:{text:'系数常数一同写，行变换后再回代。',explain:'解线性方程组先写增广矩阵，把常数列一并进行同样的行变换；化简后从下往上回代。倍乘一行时倍数必须非零。',ref:'阳版 §2.1—2.2，印刷页 27—39'},
contradiction:{text:'系数全零右非零，矛盾一行就无解。',explain:String.raw`消元出现 \((0,\ldots,0\mid c)\) 且 \(c\ne0\)，对应 \(0=c\)，原方程组无解。零行右端也为零则不构成矛盾。`,ref:'阳版 §2.1—2.2，印刷页 30—39'},
express:{text:'要看能否表，设系数、比分量。',explain:'设目标向量等于已知向量的线性组合，比较对应分量得到系数方程组；方程组有解时才能表出，解唯一才有唯一表法。',ref:'阳版 §2.3，印刷页 43—46'},
hom_nonhom:{text:'齐次解相加；非齐次特解加齐次。',explain:'齐次解的线性组合仍为齐次解；有特解时，非齐次通解等于一个特解加对应齐次组的通解。非齐次方程组可能无解，先确认存在特解。',ref:'阳版 §2.4，印刷页 47—50'},
dependence:{text:'零组合，看系数；不全为零才相关。',explain:String.raw`存在不全为零的系数使线性组合等于 \(\mathbf{0}\)，则相关；如果只有全零系数组合为零，则无关。`,ref:'阳版 §2.5，印刷页 52—55'},
parts:{text:'相关往大添，无关往小减。',explain:'相关向量组增加向量仍相关；无关向量组取部分组仍无关。反过来一般不能直接推断。',ref:'阳版 §2.5，印刷页 53—55'},
multiply:{text:'内侧相同才可乘，结果看外侧。',explain:String.raw`\(m\times n\) 矩阵与 \(n\times s\) 矩阵相乘，所得为 \(m\times s\)；矩阵乘法一般不能交换顺序。`,ref:'阳版 §3.1，印刷页 74—76'},
transpose:{text:'乘积要转置，顺序先倒置。',explain:String.raw`\((AB)^{\mathrm T}=B^{\mathrm T}A^{\mathrm T}\)；对称矩阵满足 \(A^{\mathrm T}=A\)，反对称矩阵满足 \(A^{\mathrm T}=-A\)。`,ref:'阳版 §3.2，印刷页 81—82'},
inverse_product:{text:'积的逆，倒着记。',explain:String.raw`各因子均可逆时，\((AB)^{-1}=B^{-1}A^{-1}\)，不可随意保持原顺序。`,ref:'阳版 §3.3，印刷页 83'},
left_right:{text:'左乘管行，右乘管列。',explain:'左乘初等矩阵相当于对原矩阵作相应行变换，右乘相当于作相应列变换。',ref:'阳版 §3.4，印刷页 88'},
elementary_inverse:{text:'左行右列；求逆并排，同做行变。',explain:String.raw`左乘初等矩阵对应行变换，右乘对应列变换。对 \((A:E)\) 求逆时，只对整体作行变换，化为 \((E:A^{-1})\)。`,ref:'阳版 §3.4，印刷页 87—90'},
blocks:{text:'分块先对齐，块乘不换序。',explain:'块乘法要求左矩阵列分块与右矩阵行分块相容，按块行乘块列；每个块仍是矩阵，乘法一般不能交换顺序。',ref:'阳版 §3.5，印刷页 92—96'}
};

window.CUE_SECTIONS={
'2.1':['eliminate','contradiction'],
'2.2':['eliminate','contradiction','param_det'],
'2.3':['express','units','proof_define'],
'2.4':['hom_nonhom','free_basis','dim_hom'],
'2.5':['dependence','parts','proof_define','det_shape','det_test'],
'2.6':['row_ops','rank_solve','dim_hom','det_shape','det_test','param_det'],
'3.1':['multiply','proof_define'],
'3.2':['transpose'],
'3.3':['inverse_product','adj_two','det_test','cofactor','adj_transpose','adj_inverse'],
'3.4':['elementary_inverse','high_order','cofactor','adj_transpose','adj_inverse'],
'3.5':['blocks','inverse_product']
};

window.QUESTION_CUES={};
(()=>{
 const q=window.QUESTION_CUES;
 function add(ids,...cues){for(const id of ids.split(/\s+/).filter(Boolean)){q[id]??=[];for(const cue of cues)if(!q[id].includes(cue))q[id].push(cue)}}
 add('book-21-5-1 book-21-5-3 book-21-6 book-22-2-1 book-22-2-3 book-22-3 book-22-4','eliminate');
 add('book-21-3-3 book-21-4-3 book-22-5 book-22-6','eliminate');
 add('book-21-3-1 book-21-4-1','contradiction');
 add('book-23-2 book-23-3-2 book-23-4-2','express');
 add('book-23-4-2 xxt23-8 xxt23-9 xxt23-13','units');
 add('book-24-7-1 book-24-7-3 other-24-1','free_basis');
 add('book-24-7-1 book-24-7-3 other-24-2 other-24-3 xxt23-12 xxt23-14','hom_nonhom');
 add('book-25-1-3 book-25-1-4 book-25-1-5 book-25-1-6 book-25-2-2 book-25-2-3 book-25-3 book-25-4 book-25-6 other-25-1','dependence');
 add('book-26-3-1','row_ops');
 add('book-24-7-1 book-24-7-3 other-24-1 xxt26-36 xxt26-37','dim_hom');
 add('book-31-1-2 book-31-1-4 book-31-8 book-31-9','multiply');
 add('book-32-1 book-32-4 book-32-5 book-32-6','transpose');
 add('book-33-1-2','adj_two');
 add('book-33-5 book-33-8','inverse_product');
 add('book-34-1-1 book-34-1-2','elementary_inverse');
 add('book-34-2','left_right');
 add('book-35-1-1 book-35-1-2 book-35-3 book-35-4-2 book-35-4-4 book-35-5','blocks');
 add('xxt21-9','eliminate');
 add('xxt21-15','contradiction');
 add('xxt23-10','express');
 add('xxt25-1 xxt25-2 xxt25-3 xxt25-4 xxt25-5 xxt25-6 xxt25-7 xxt25-8 xxt25-9 xxt25-10 xxt25-13','dependence');
 add('xxt25-11 xxt25-12','parts');
 add('xxt26-26 xxt26-34 xxt26-35 xxt26-36 xxt26-37','rank_solve');
 // 有行列式方法二时仅给使用范围口诀，不在思路引导里重复说明。
 for(const id of Object.keys(window.DET_METHODS?.primary||{}))add(id,'det_shape');
 for(const id of Object.keys(window.DET_METHODS?.quiz||{}))add(id,'det_shape');
 add('book-34-1-1 book-34-1-2','adj_transpose','adj_inverse');
})();
