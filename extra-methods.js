window.EXTRA_METHODS = {
  primary: {
    'book-26-7': [{name:'生成子空间与维数',ref:'阳庆节版 §5.1—5.2，印刷页 145—153（后续内容）',body:String.raw`令 \(U=L(\mathrm I)\)、\(V=L(\mathrm{II})\)。题设给出 \(U\subseteq V\)，因此 \(r(\mathrm I)=\dim U\le\dim V=r(\mathrm{II})\)。合并组生成 \(U+V=V\)，故与 II 等价；若两秩相等，则包含关系加上维数相等得到 \(U=V\)，所以 I 与 II 等价。`}],
    'book-26-8': [{name:'子空间维数公式',ref:'阳庆节版 §5.4，印刷页 158—161（后续内容）',body:String.raw`令 \(U=L(\mathrm I)\)、\(V=L(\mathrm{II})\)，则合并组生成 \(U+V\)。由维数公式，\[r_3=\dim(U+V)=r_1+r_2-\dim(U\cap V).\] 因 \(0\le\dim(U\cap V)\le\min(r_1,r_2)\)，所以 \(\max(r_1,r_2)\le r_3\le r_1+r_2\)。`}],
    'book-31-3': [{name:'凯莱—哈密尔顿定理（第 2 小问）',ref:'阳庆节版 §6.3，印刷页 185—190（后续内容）',body:String.raw`第（2）问中，A 的特征多项式为 \(\det(\lambda E-A)=\lambda^2-5\lambda+3=f(\lambda)\)。由凯莱—哈密尔顿定理，\(f(A)=O\)。第（1）问仍按上面的直接计算处理。`}],
    'book-31-6': [{name:'凯莱—哈密尔顿定理',ref:'阳庆节版 §6.3，印刷页 185—190（后续内容）',body:String.raw`S 是主对角线全为 0 的上三角矩阵，故其特征多项式 \(\det(\lambda E-S)=\lambda^n\)。由凯莱—哈密尔顿定理，\(S^n=O\)。`}],
    'book-31-11': [{name:'逆矩阵与逆序公式',ref:'阳庆节版 §3.3，印刷页 83—85（后续内容）',body:String.raw`由 \(A^2=B^2=E\)，有 \(A^{-1}=A\)、\(B^{-1}=B\)，故 \((AB)^{-1}=BA\)。于是 \[AB\text{ 是对合矩阵}\iff (AB)^{-1}=AB\iff BA=AB.\]`}],
    'book-31-13': [{name:'线性映射的单射、满射与维数',ref:'阳庆节版 §5.2、§5.6，印刷页 149—153、164—171（后续内容）',body:String.raw`将 A 看成 \(\mathbb R^n\to\mathbb R^m\) 的线性映射。（1）\(CA=E_n\) 说明 A 是单射，故 \(\ker A=\{\mathbf0\}\)，由维数公式得 \(r(A)=n\le m\)。（2）\(AD=E_m\) 说明 A 是满射，对任意 \(\beta\) 可取 \(x=D\beta\)；由 \(r(A)=m\le n\) 得所需不等式。`}],
    'book-33-4': [{name:'线性映射的像空间',ref:'阳庆节版 §5.2、§5.6，印刷页 149—153、164—171（后续内容）',body:String.raw`P 是可逆线性映射，在 \(\operatorname{im}A\) 上保持维数，故 \(r(PA)=\dim P(\operatorname{im}A)=r(A)\)。Q 可逆意味着 \(Q(\mathbb R^n)=\mathbb R^n\)，所以 \(\operatorname{im}(AQ)=A(\mathbb R^n)=\operatorname{im}A\)，从而 \(r(AQ)=r(A)\)。`}],
    'book-33-9': [{name:'有限维线性映射',ref:'阳庆节版 §5.2、§5.6，印刷页 149—153、164—171（后续内容）',body:String.raw`A 可逆等价于它所表示的线性映射 \(\mathbb R^n\to\mathbb R^n\) 是双射；同维有限维空间的线性映射满射即双射。而“对每个 \(\beta\)，\(Ax=\beta\) 有解”正是满射。因此两个条件等价。`}],
    'other-24-2': [{name:'矩阵方程与解集平移',ref:'阳庆节版 §3.1，印刷页 73—77（后续内容）',body:String.raw`将原方程组写为 \(Ax=\beta\)，其中 \(A\gamma_0=\beta\)。于是 \[Ax=\beta\iff A(x-\gamma_0)=\mathbf0\iff \exists\eta\;(A\eta=\mathbf0\ \text{且}\ x=\gamma_0+\eta).\] 这恰是题目给出的解集。`}],
    'book-31-14': [{name:'像与核的维数',ref:'阳庆节版 §5.2、§5.6，印刷页 149—153、164—171（后续内容）',body:String.raw`把 A、B 看成相应线性映射。\(AB=O\) 表明 \(\operatorname{im}B\subseteq\ker A\)，因此 \[r(B)=\dim\operatorname{im}B\le\dim\ker A=n-r(A),\] 最后一步使用秩与核的维数公式，故所求不等式成立。`}],
    'book-31-15': [{name:'特征值与相似对角化',ref:'阳庆节版 §6.1—6.2，印刷页 172—184（后续内容）',body:String.raw`由 \(A^2=E\)，任意向量 \(x\) 都可分解为 \(x=(x+Ax)/2+(x-Ax)/2\)，两项分别属于特征值 1、−1 的特征子空间；两子空间交为零。因此 A 可对角化。设特征值 1 的重数为 p，则 A 相似于 \(\operatorname{diag}(E_p,-E_{n-p})\)。于是 \(r(A+E)=p\)、\(r(A-E)=n-p\)，两秩之和为 n；\(p=0\) 或 \(p=n\) 时同样成立。`}],
    'book-32-6': [{name:'矩阵秩与转置乘积',ref:'阳庆节版 §2.6 的秩；同教材习题 3.2 第 7 题（后续习题结论）',body:String.raw`对于实矩阵，\(r(A^{\mathrm T}A)=r(A)\)。由题设 \(A^{\mathrm T}A=O\)，得 \(r(A)=0\)，因此 \(A=O\)。这里使用的秩相等式依赖实数平方和，不能不加说明地推广到复数矩阵。`}],
    'other-25-1': [{name:'扩充向量组的秩',ref:'阳庆节版 §2.6，印刷页 56—63（后续内容）',body:String.raw`记原组为 I。因为 I 线性无关，\(r(\mathrm I)=t\)。添加一个向量后的组相关，当且仅当其秩不超过 t，即秩仍为 t；这又当且仅当 \(\beta\) 能由 I 表出。因此两种条件等价。`}],
    'other-24-3': [{name:'矩阵乘法的线性性质',ref:'阳庆节版 §3.1，印刷页 73—77（后续内容）',body:String.raw`记原方程组为 \(Ax=\beta\)。由题设 \(A\eta_1=A\eta_2=\beta\)、\(A\eta_3=A\eta_4=\mathbf0\)。由矩阵乘法的分配律，\[A(\eta_1-\eta_2)=\mathbf0,\quad A(\eta_3\pm\eta_4)=\mathbf0,\quad A(k\eta_3)=\mathbf0,\quad A(\eta_1+\eta_3)=\beta.\] 所以各项结论成立。`}]
  },
  quiz: {
    'xxt21-16': [{name:'解空间维数',ref:'阳庆节版 §5.2、§5.6，印刷页 149—153、164—171（后续内容）',body:String.raw`设系数矩阵为 A。由 \(r(A)\le m<n\)，齐次解空间的维数是 \(n-r(A)>0\)，因此有非零解和无穷多个解，原命题正确。`}],
    'xxt23-10': [{name:'生成空间的维数',ref:'阳庆节版 §5.1—5.2，印刷页 145—153（后续内容）',body:String.raw`两个向量张成的子空间维数至多为 2，小于 \(\mathbb R^3\) 的维数 3，所以这两个向量不能生成整个 \(\mathbb R^3\)。`}],
    'xxt26-30': [{name:'子空间维数公式',ref:'阳庆节版 §5.4，印刷页 158—161（后续内容）',body:String.raw`设两组向量分别生成子空间 U、V。合并组的秩为 \(\dim(U+V)=\dim U+\dim V-\dim(U\cap V)\le r_1+r_2\)。`}]
  },
  variant: {
    'book-26-8': [{name:'直和维数公式',ref:'阳庆节版 §5.4，印刷页 158—161（后续内容）',body:String.raw`设 \(U=L(\mathrm I)\)、\(V=L(\mathrm{II})\)。题设是 \(U\cap V=\{\mathbf0\}\)，故 \(\dim(U+V)=\dim U+\dim V=r_1+r_2\)。这正是合并组的秩。`}],
    'book-31-3': [{name:'凯莱—哈密尔顿定理',ref:'阳庆节版 §6.3，印刷页 185—190（后续内容）',body:String.raw`特征多项式 \(\det(\lambda E-A)=(\lambda-1)(\lambda-2)=f(\lambda)\)。由凯莱—哈密尔顿定理，\(f(A)=O\)。`}],
    'book-31-6': [{name:'凯莱—哈密尔顿定理',ref:'阳庆节版 §6.3，印刷页 185—190（后续内容）',body:String.raw`U 是主对角线全为 0 的上三角矩阵，\(\det(\lambda E-U)=\lambda^n\)。由凯莱—哈密尔顿定理，\(U^n=O\)。`}],
    'book-31-14': [{name:'像与核的维数',ref:'阳庆节版 §5.2、§5.6，印刷页 149—153、164—171（后续内容）',body:String.raw`令 \(D=B-C\)。因 \(AD=O\)，有 \(\operatorname{im}D\subseteq\ker A\)，所以 \(r(B-C)\le\dim\ker A=n-r(A)\)。`}],
    'book-31-15': [{name:'特征值与相似对角化',ref:'阳庆节版 §6.1—6.2，印刷页 172—184（后续内容）',body:String.raw`由 \(P^2=P\)，任意向量 \(x=Px+(E-P)x\)，两项分别属于特征值 1、0 的特征子空间，且两子空间交为零，所以 P 可对角化。设特征值 1 的重数为 p，则 \(r(P)=p\)，\(r(E-P)=n-p\)，故两秩之和为 n，端点 \(p=0,n\) 也成立。`}],
    'book-33-5': [{name:'行列式乘积',ref:'阳庆节版 §4.4，印刷页 131—135（后续内容）',body:String.raw`由 \(ABC\) 可逆，\(0\ne\det(ABC)=\det A\det B\det C\)。三个行列式均非零，故 A、B、C 都可逆。`}]
  }
};
