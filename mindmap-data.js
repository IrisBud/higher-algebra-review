/* 知识点按阳庆节版顺序组织；教材页码为印刷页。 */
window.MINDMAP_DATA={
'2':{title:'线性方程组和矩阵',branches:[
{id:'elimination',section:'2.1',title:'方程组与消元',page:'24—33',summary:'把方程组变成便于运算的增广矩阵',topics:[
{title:'增广矩阵',body:'把各未知量的系数按列对齐，常数项写在竖线右边；缺项系数要补 0。每一行对应一个方程。'},
{title:'初等行变换',body:'交换两行、某行乘非零数、某行的倍数加到另一行，都保持解集不变。消元后仍须回代并写出结论。'},
{title:'矛盾行与参数',body:String.raw`出现 \((0,\ldots,0\mid c)\)，且 \(c\ne0\)，就无解。含参数时，在除以可能为零的式子之前先分类。`}]},
{id:'echelon',section:'2.2',title:'阶梯形与解',page:'33—40',summary:'看主元、自由未知量和矛盾行',topics:[
{title:'阶梯形矩阵',body:'零行放在下方；向下每行的首非零元位置严格右移。简化阶梯形还要求主元为 1，主元列其他元素为 0。'},
{title:'自由未知量',body:'没有矛盾行时，先把非主元列对应的未知量设为自由参数，再由下向上求主元变量，得到一般解。'},
{title:'解的三种情况',body:'有矛盾行则无解；无矛盾行且每个未知量都有主元则唯一解；无矛盾行且有自由未知量则有无穷多解。齐次组至少有零解。'}]},
{id:'vectors',section:'2.3',title:'向量与线性表出',page:'41—46',summary:'按分量计算，把表出问题化成方程组',topics:[
{title:'向量运算',body:'同维向量按对应分量相加，数乘按分量进行；加法交换律、结合律以及数乘分配律都可由分量运算证明。'},
{title:'线性组合与生成',body:String.raw`向量组 \(\alpha_1,\ldots,\alpha_s\) 的线性组合形如 \(k_1\alpha_1+\cdots+k_s\alpha_s\)。所有线性组合构成它的生成子集，对加法和数乘封闭。`},
{title:'能否线性表出',body:String.raw`要判断 \(\beta\) 能否由向量组表出，令 \(x_1\alpha_1+\cdots+x_s\alpha_s=\beta\)，比较分量并解方程组：有解才可表出，解唯一则表法唯一。`}]},
{id:'solutions',section:'2.4',title:'解集的结构',page:'47—52',summary:'齐次解作线性组合；非齐次解由特解平移',topics:[
{title:'齐次解的性质',body:'齐次方程组的解相加、数乘后仍是解。因此一组齐次解的任意线性组合仍是齐次解。'},
{title:'基础解系与一般解',body:'消元后依次令一个自由未知量为 1，其余为 0，得到基础解向量；它们线性无关，且其线性组合给出全部齐次解。只有零解时直接说明，不强行列出非零向量。'},
{title:'非齐次通解',body:String.raw`若 \(\gamma_0\) 是非齐次方程组的一个特解，全部解为 \(\gamma_0+\eta\)，其中 \(\eta\) 取遍导出齐次组的解。两个非齐次解之差是齐次解。`}]},
{id:'dependence',section:'2.5',title:'线性相关性',page:'52—56',summary:'看零组合的系数能否不全为零',topics:[
{title:'相关与无关',body:String.raw`存在不全为零的系数使 \(k_1\alpha_1+\cdots+k_s\alpha_s=\mathbf{0}\)，则相关；若只有全零系数能得到零向量，则无关。含零向量的向量组一定相关。`},
{title:'部分组与整体',body:'相关组增加向量仍相关；无关组减少向量仍无关。多个向量时，不能仅凭每两个都不成比例就断定整个向量组无关。'},
{title:'表出与唯一性',body:String.raw`原组无关时，加入 \(\beta\) 后相关，当且仅当 \(\beta\) 可由原组线性表出；无关组对同一向量的表法至多一种。`}]},
{id:'rank',section:'2.6',title:'秩与判解',page:'56—64',summary:'用极大无关组与矩阵秩统一判断',topics:[
{title:'定理 2.6',body:'若 s 个向量可由 t 个向量线性表出且 s>t，则前一组线性相关。常用推论：无关的 s 个向量可由 t 个向量表出时，s≤t。'},
{title:'极大无关组与秩',body:'极大无关组既要线性无关，又要能表出原组所有向量；其向量个数是向量组的秩。矩阵行秩等于列秩；初等变换不改变矩阵的秩。'},
{title:'秩判定方程组',body:String.raw`设 A 有 n 列：\(r(A)\ne r(A\mid b)\) 时无解；二者相等时有解，再看 \(r(A)=n\) 是否成立：成立则唯一，否则有无穷多解。齐次组有非零解当且仅当 \(r(A)<n\)。`}]}
],links:[
['elimination','echelon','消元得到阶梯形','增广矩阵经初等行变换得到阶梯形，再由主元和矛盾行判断解。'],
['vectors','elimination','表出化为方程组','比较向量各分量，就得到关于线性组合系数的方程组。'],
['echelon','solutions','自由变量决定解集','齐次一般解中的自由参数，可用来构造基础解向量；非齐次还需一个特解。'],
['vectors','dependence','表出联系相关性','无关组加入一个能由原组表出的向量，扩充后的向量组相关。'],
['dependence','rank','无关组确定秩','寻找能表出整个向量组的极大无关组，其向量个数就是秩。'],
['rank','echelon','阶梯形计算秩','初等变换不改变矩阵秩；阶梯形矩阵的秩等于非零行数。'],
['rank','solutions','秩决定自由变量数','齐次组有 n 个未知量、系数矩阵秩为 r 时，自由未知量有 n−r 个。'],
['rank','elimination','秩判定有无解','比较系数矩阵与增广矩阵的秩，能判定方程组是否有解。']
],supplement:'2.7 为教材带星号的应用内容，按老师要求选学。'},
'3':{title:'矩阵代数',branches:[
{id:'operations',section:'3.1',title:'矩阵代数运算',page:'71—81',summary:'加法、数乘、乘法及秩的关系',topics:[
{title:'加法与数乘',body:String.raw`同型矩阵才能相加；按对应元素相加或数乘。\(r(A+B)\le r(A)+r(B)\)，证明可从列向量的线性表出入手。`},
{title:'乘法的规则',body:String.raw`\(A\) 为 \(m\times n\)、\(B\) 为 \(n\times s\) 时，\(AB\) 为 \(m\times s\)。矩阵乘法一般不满足交换律、消去律；非零矩阵的乘积也可能为零矩阵。`},
{title:'乘积的列与秩',body:String.raw`若 \(A=(\alpha_1,\ldots,\alpha_n)\)，则 \(Ax=x_1\alpha_1+\cdots+x_n\alpha_n\)。乘积满足 \(r(AB)\le\min\{r(A),r(B)\}\)。`}]},
{id:'transpose',section:'3.2',title:'转置与对称',page:'81—83',summary:'交换行列；乘积转置要倒序',topics:[
{title:'转置运算',body:String.raw`\((A^{\mathrm T})^{\mathrm T}=A\)，\((A+B)^{\mathrm T}=A^{\mathrm T}+B^{\mathrm T}\)，\((AB)^{\mathrm T}=B^{\mathrm T}A^{\mathrm T}\)。转置不改变秩。`},
{title:'对称矩阵',body:String.raw`方阵满足 \(A^{\mathrm T}=A\)，即 \(a_{ij}=a_{ji}\)，称为对称矩阵；对任意方阵，\(A+A^{\mathrm T}\) 对称。`},
{title:'反对称矩阵',body:String.raw`方阵满足 \(A^{\mathrm T}=-A\)，即 \(a_{ij}=-a_{ji}\)；其主对角元全为零。对任意方阵，\(A-A^{\mathrm T}\) 反对称。`}]},
{id:'inverse',section:'3.3',title:'逆矩阵与判定',page:'83—87',summary:'可逆、满秩、方程组之间的等价',topics:[
{title:'逆的定义与运算',body:String.raw`若同阶矩阵满足 \(AB=BA=E\)，则 A 可逆、B 是其逆。\((AB)^{-1}=B^{-1}A^{-1}\)，\((A^{\mathrm T})^{-1}=(A^{-1})^{\mathrm T}\)。`},
{title:'可逆的等价条件',body:String.raw`对 n 阶方阵：可逆 ⇔ 秩为 n ⇔ 列向量组无关 ⇔ \(Ax=\mathbf{0}\) 只有零解 ⇔ 对每个右端 \(\beta\)，\(Ax=\beta\) 有唯一解。也可用存在左逆或右逆判定。`},
{title:'常见方阵的逆',body:String.raw`对角矩阵可逆当且仅当每个对角元非零，逆的对角元各取倒数。二阶矩阵 \(A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\) 可逆当且仅当 \(ad-bc\ne0\)，此时 \(A^{-1}=\dfrac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}\)。`}]},
{id:'elementary',section:'3.4',title:'初等矩阵与求逆',page:'87—91',summary:'把行变换转成左乘，利用增广矩阵求逆',topics:[
{title:'三类初等矩阵',body:'对单位矩阵作一次交换行、非零数乘一行、某行的倍数加到另一行，分别得到三类初等矩阵；它们的逆对应相反的初等变换。'},
{title:'左行右列',body:'左乘初等矩阵相当于对原矩阵作相应行变换；右乘相当于列变换。倍加时尤其要核对被加到的行或列。'},
{title:'增广矩阵求逆',body:String.raw`对整体只作初等行变换：\((A:E)\longrightarrow(E:A^{-1})\)。若左侧无法化为单位矩阵，A 不可逆；计算时不能混入列变换。`}]},
{id:'blocks',section:'3.5',title:'分块矩阵',page:'92—97',summary:'按相容的块计算，并保持矩阵乘法顺序',topics:[
{title:'加法与乘法',body:'分块加法要求对应分块相同；分块乘法要求左矩阵的列分块与右矩阵的行分块相容。每一块仍按块行乘块列计算，块的顺序不能随意交换。'},
{title:'分块转置',body:String.raw`转置时既交换块的位置，也转置每个块：\(\begin{pmatrix}A&B\\C&D\end{pmatrix}^{\mathrm T}=\begin{pmatrix}A^{\mathrm T}&C^{\mathrm T}\\B^{\mathrm T}&D^{\mathrm T}\end{pmatrix}\)。`},
{title:'分块求逆',body:String.raw`分块对角矩阵可逆当且仅当各对角方块可逆，逆由各块的逆组成。对于对角方块 A、C 可逆的分块上三角矩阵，\(\begin{pmatrix}A&B\\O&C\end{pmatrix}^{-1}=\begin{pmatrix}A^{-1}&-A^{-1}BC^{-1}\\O&C^{-1}\end{pmatrix}\)。非对角块要保持乘法顺序，也可通过分块增广矩阵求逆。`}]}
],links:[
['operations','transpose','乘积转置需倒序','矩阵乘法通常不可交换，因此转置乘积时必须把因子顺序反过来。'],
['operations','inverse','乘法是逆的基础','逆由 AB=BA=E 定义；乘积求逆同样需要倒序。'],
['operations','blocks','块乘法沿用行乘列','先检查块的大小相容，再按普通矩阵乘法的行乘列规则计算各块。'],
['transpose','inverse','转置与求逆可交换','可逆矩阵的转置仍可逆，且转置的逆等于逆的转置。'],
['inverse','elementary','可逆连接消元求逆','A 可逆时，可把增广矩阵 (A:E) 经初等行变换化为 (E:A⁻¹)。'],
['elementary','blocks','普通变换推广到行块','分块增广矩阵可以进行相容的行块变换；左乘块矩阵时注意顺序。'],
['inverse','blocks','对角块决定可逆性','分块对角或分块三角方阵的可逆性，和相应对角方块的可逆性相关。']
],supplement:'3.6 和 3.7 为教材带星号的补充内容，不默认属于当前考试范围。'}
};
