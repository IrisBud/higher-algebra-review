/* 方法二是可选的第4章补充；原题解仍为主方法。 */
window.DET_METHODS={
primary:{
'book-21-5-1':String.raw`系数矩阵的行列式 \(D=\begin{vmatrix}1&k\\3&1\end{vmatrix}=1-3k\)。当 \(D\ne0\)，即 \(k\ne\frac13\) 时，方程组有唯一解。当 \(k=\frac13\) 时，第一式乘 3 的左端等于第二式左端，但右端分别为 \(-6\) 和 \(1\)，矛盾。因此有解当且仅当 \(k\ne\frac13\)。注意：\(D=0\) 后还要检查右端，不能直接断定无解。`,
'book-21-5-3':String.raw`系数列 \(a_1=(2,-6)^{\mathrm T}\)、\(a_2=(-1,3)^{\mathrm T}\) 满足 \(a_2=-\tfrac12a_1\)，且 \(a_1\ne\mathbf{0}\)。因此右端 \(\beta=(k,-2)^{\mathrm T}\) 可由系数列表示，当且仅当 \(\begin{vmatrix}2&k\\-6&-2\end{vmatrix}=6k-4=0\)。故 \(k=\frac23\)。`,
'book-22-2-1':String.raw`系数行列式 \(D=\begin{vmatrix}1&2\\k&-2\end{vmatrix}=-2(k+1)\)。当 \(D\ne0\) 时必有唯一解，因此无解只可能发生在 \(k=-1\)。代入原方程组，第一式与第二式相加得到 \(0=3\)，故无解。所求为 \(k=-1\)。`,
'book-22-2-3':String.raw`系数行列式 \(D=\begin{vmatrix}1&k\\k&1\end{vmatrix}=1-k^2\)。当 \(k\ne\pm1\) 时有唯一解；当 \(k=1\) 时两式左端相同而右端为 2、1，矛盾；当 \(k=-1\) 时两式相加得 \(0=3\)。故无解当且仅当 \(k=\pm1\)。`,
'book-22-3':String.raw`设系数行列式为 \(D\)，三个克莱姆行列式为 \(D_1,D_2,D_3\)，计算得 \[D=(\lambda-1)^2(\lambda+2),\quad D_1=-(\lambda-1)^2(\lambda+1),\quad D_2=(\lambda-1)^2,\quad D_3=(\lambda-1)^2(\lambda+1)^2.\] 当 \(\lambda\ne1,-2\) 时，由克莱姆法则得 \[(x_1,x_2,x_3)=\left(-\frac{\lambda+1}{\lambda+2},\frac1{\lambda+2},\frac{(\lambda+1)^2}{\lambda+2}\right).\] 当 \(\lambda=1\) 时，原组化为 \(x_1+x_2+x_3=1\)，有无穷多解 \((1-s-t,s,t)\)。当 \(\lambda=-2\) 时，\(D=0\) 而 \(D_2=9\ne0\)。若有解，由行列式的列线性性应有 \(D_2=x_2D=0\)，矛盾，故无解。因此有解当且仅当 \(\lambda\ne-2\)。`,
'book-22-5':String.raw`系数行列式为 \[D=\begin{vmatrix}1&1&1\\3&2&k\\k&1&1\end{vmatrix}=(k-1)(k-2).\] 三元齐次方程组有非零解当且仅当 \(D=0\)，因此 \(k=1\) 或 \(k=2\)。分别代回原组：\(k=1\) 时通解为 \(t(1,-2,1)^{\mathrm T}\)；\(k=2\) 时通解为 \(t(0,-1,1)^{\mathrm T}\)，其中 \(t\in\mathbb R\)。要非零解时取 \(t\ne0\)。`,
'book-22-7-1':String.raw`由题设 \(\det A=ad-bc\ne0\)，故 A 可逆，即 \(r(A)=2\)。因此 A 的简化阶梯形有两个主元，只能是二阶单位矩阵 E；也就是说 A 可经初等行变换化为 E，故二者行等价。`,
'book-23-2':String.raw`由于 \(\begin{vmatrix}1&-2\\4&-3\end{vmatrix}=5\ne0\)，\(\alpha_1,\alpha_2\) 线性无关。因此 \(\beta\) 可由它们表出，当且仅当三列行列式为零：\[\begin{vmatrix}1&-2&4\\4&-3&1\\-2&7&k\end{vmatrix}=5(k+17)=0.\] 得 \(k=-17\)。此时由前两个分量求得 \(\beta=-2\alpha_1-3\alpha_2\)，第三个分量也成立。`,
'book-23-3-2':String.raw`令 \(A=(\alpha_1,\alpha_2,\alpha_3)\)，计算 \(D=\det A=-\lambda(\lambda-3)\)。表法不唯一要求系数齐次方程组有非零解，故只能 \(\lambda=0\) 或 \(3\)。\(\lambda=0\) 时 \(\beta=\mathbf{0}\)，齐次组有非零解，故表法不唯一；\(\lambda=3\) 时将第二列换为 \(\beta\) 得 \(D_2=\lambda(4\lambda^2+3\lambda+9)=162\ne0\)，而 \(D=0\)。若有解则 \(D_2=x_2D=0\)，矛盾，故不能表出。所求 \(\lambda=0\)。`,
'book-23-4-2':String.raw`将三个向量作为列，\[\det(\alpha_1,\alpha_2,\alpha_3)=\begin{vmatrix}2&1&0\\1&1&0\\0&0&3\end{vmatrix}=3\ne0.\] 因而这个三阶系数矩阵可逆，对任意 \(\beta\in\mathbb R^3\)，方程 \(Ax=\beta\) 都有解，所以这三个向量生成 \(\mathbb R^3\)。`,
'book-25-1-4':String.raw`取两个三维向量的前两个分量，组成二阶子式 \(\begin{vmatrix}3&1\\0&1\end{vmatrix}=3\ne0\)。若原向量有非零系数的零组合，则前两个分量也有同一非零系数组合为零，这与该子式非零矛盾。故两个原向量线性无关。`,
'book-25-1-6':String.raw`把四维向量作为列，仅取前三个分量，得到三阶子式 \[\begin{vmatrix}3&1&0\\0&1&-1\\2&1&3\end{vmatrix}=10\ne0.\] 若原来的三个四维向量有非零系数的零组合，比较前三个分量也会得到上述三列的非零零组合，与行列式非零矛盾。故原组线性无关。这里使用的是非零三阶子式，不是给 \(4\times3\) 矩阵直接取行列式。`,
'book-25-2-2':String.raw`三个三维向量相关当且仅当以它们为列的行列式为零：\[\begin{vmatrix}3&1&2\\0&2&1\\2&-1&k\end{vmatrix}=3(2k-1)=0.\] 故 \(k=\frac12\)。代入可验 \(\alpha_1+\alpha_2-2\alpha_3=\mathbf{0}\)。`,
'book-25-2-3':String.raw`先取第 2、3、4 个分量组成三阶子式：\[\begin{vmatrix}0&1&-k\\2&1&3\\-1&1&2\end{vmatrix}=-(3k+7).\] 若原来三个四维向量相关，这个子式必为零，因此 \(k=-\frac73\) 是必要条件。反过来，代入这个值可直接验证 \(\alpha_1+7\alpha_2-3\alpha_3=\mathbf{0}\)，所以它也充分。注意：仅有一个三阶子式为零，一般不足以推出整个 \(4\times3\) 向量组相关；这里另外给出了非零系数关系。`,
'book-25-3':String.raw`把每组新向量相对于原无关组 \((\alpha_1,\alpha_2,\alpha_3)\) 的系数按列排成三阶矩阵，依次得到 \[C_1=\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix},\quad C_2=\begin{pmatrix}1&0&-1\\-1&1&0\\0&-1&1\end{pmatrix},\quad C_3=\begin{pmatrix}1&0&1\\1&1&0\\0&-1&1\end{pmatrix},\quad C_4=\begin{pmatrix}1&1&1\\0&1&1\\0&0&1\end{pmatrix}.\] 因原组无关，新组相关当且仅当相应 \(C_i\) 的列相关。计算 \(\det C_1=2,\ \det C_2=0,\ \det C_3=0,\ \det C_4=1\)，所以依次为无关、相关、相关、无关。这里取行列式的是三阶系数矩阵，不要求原向量本身一定是三维向量。`,
'book-25-4':String.raw`先设 \(s\ge2\)，以原无关组为参照，把新向量的系数按列排成 \(s\) 阶矩阵 \(C\)。其对角线与循环相邻位置为 1，其余为 0。行列式展开只有恒等排列和循环排列两项，故 \(\det C=1+(-1)^{s-1}\)。原组无关，所以新组无关当且仅当 \(\det C\ne0\)：\(s\) 为奇数时无关，为偶数时相关。\(s=1\) 时新组为 \(2\alpha_1\)，因 \(\alpha_1\ne\mathbf{0}\) 也无关。`,
'book-25-6':String.raw`记 \(D=\det(\alpha_1,\ldots,\alpha_n)\)。原组无关，所以 \(D\ne0\)。若删去 \(\alpha_{n+1}\)，剩余原组无关；若删去 \(\alpha_j\)，把 \(\alpha_{n+1}\) 放在第 \(j\) 列，由行列式对该列的线性性与重复列为零，得 \[\det(\alpha_1,\ldots,\alpha_{j-1},\alpha_{n+1},\alpha_{j+1},\ldots,\alpha_n)=k_jD\ne0.\] 因此剩余的 n 个向量无关。`,
'book-26-3-1':String.raw`直接验证 \(\alpha_3=\alpha_1-5\alpha_2\)，故原组可由 \(\alpha_1,\alpha_2,\alpha_4\) 表出。再取这三列的前 3 个分量，计算 \[\begin{vmatrix}6&1&7\\4&0&1\\1&2&0\end{vmatrix}=45\ne0.\] 因此 \(\alpha_1,\alpha_2,\alpha_4\) 无关，是原组的一个极大无关组，秩为 3；剩余向量的表示即上式。`,
'book-26-4-1':String.raw`取第 1、2、3、5 列得到四阶子式 \[\begin{vmatrix}0&1&1&2\\0&2&-2&0\\0&-1&-1&1\\1&1&0&-1\end{vmatrix}=12\ne0.\] 所以 \(r(A)\ge4\)；A 只有 4 行，故 \(r(A)\le4\)。于是 \(r(A)=4\)。`,
'book-26-5':String.raw`对每个 \(j=2,\ldots,n\) 作 \(R_1\leftarrow R_1-\frac b2R_j\)，行列式不变。按第一行展开得 \[\det A=2^{n-1}\left(2-\frac{(n-1)b^2}{2}\right)=2^{n-2}\bigl(4-(n-1)b^2\bigr).\] 右下角的 \((n-1)\) 阶子式为 \(2^{n-1}\ne0\)，所以秩至少为 \(n-1\)。因此 \(r(A)=n-1\) 当且仅当 \(\det A=0\)，解得 \(b=\pm\frac2{\sqrt{n-1}}\)。`,
'book-34-1-1':String.raw`计算 \(\det A=-3\ne0\)。由各代数余子式构造伴随矩阵（注意 \(A^*_{ij}=C_{ji}\)），例如 \(C_{12}=-\begin{vmatrix}1&3\\0&1\end{vmatrix}=-1\)，得到 \[A^*=\begin{pmatrix}-1&-2&5\\-1&1&-4\\1&-1&1\end{pmatrix}.\] 因此 \[A^{-1}=\frac{A^*}{\det A}=\frac13\begin{pmatrix}1&2&-5\\1&-1&4\\-1&1&-1\end{pmatrix}.\]`,
'book-34-1-2':String.raw`计算 \(\det A=-1\ne0\)。由各代数余子式构造伴随矩阵，例如 \(C_{12}=-\begin{vmatrix}-3&1\\1&-1\end{vmatrix}=-2\)，且 \(A^*_{21}=C_{12}\)，从而 \[A^*=\begin{pmatrix}-1&-1&-3\\-2&-3&-7\\-3&-4&-9\end{pmatrix}.\] 由 \(A^{-1}=A^*/\det A\)，得 \[A^{-1}=\begin{pmatrix}1&1&3\\2&3&7\\3&4&9\end{pmatrix}.\]`,
'book-33-5':String.raw`由 \(AB\) 可逆，\(\det(AB)\ne0\)。利用乘积公式 \(\det(AB)=\det A\det B\)，可知 \(\det A\ne0\) 且 \(\det B\ne0\)。因此同为 n 阶方阵的 A、B 都可逆。`,
'book-33-9':String.raw`若 A 可逆，则 \(\det A\ne0\)，由克莱姆法则，\(Ax=\beta\) 对每个 \(\beta\) 均有唯一解。反之，若每个右端均有解，分别对 n 个单位列向量取解并排列成矩阵 B，则 \(AB=E\)。取行列式得 \(\det A\det B=1\)，所以 \(\det A\ne0\)，A 可逆。`,
'book-33-10':String.raw`对 n 阶方阵，\(Ax=\mathbf{0}\) 只有零解当且仅当 \(\det A\ne0\)；而 \(\det A\ne0\) 又当且仅当 A 可逆。连接这两个等价条件即得结论。`
},
variant:{
'book-21-4-1':String.raw`该练习的系数行列式 \(D=-24\ne0\)，把右端列依次替换第 1、2、3 列，得到 \(D_1=-80,D_2=-8,D_3=-8\)。由克莱姆法则，\((x_1,x_2,x_3)=(D_1/D,D_2/D,D_3/D)=(\tfrac{10}3,\tfrac13,\tfrac13)\)。`,
'book-22-2-3':String.raw`该练习的系数行列式 \(D=-k(k+1)\)。若 \(k\ne0,-1\) 则有唯一解；\(k=0\) 时第二式为 \(0=1\)，无解；\(k=-1\) 时两式相加得 \(0=4\)，无解。故所求为 \(k=0,-1\)。`,
'book-22-3':String.raw`系数行列式 \(D=-k(k+1)\)。\(k\ne0,-1\) 时有唯一解；\(k=0\) 时第二式为 \(0=1\)；\(k=-1\) 时两式相加得 \(0=4\)。因此无解当且仅当 \(k=0\) 或 \(-1\)。`,
'book-23-2':String.raw`把 \(\alpha_1,\alpha_2,\beta\) 排列成列，计算 \(\det(\alpha_1,\alpha_2,\beta)=0\)。又 \(\begin{vmatrix}1&2\\-1&3\end{vmatrix}=5\ne0\)，前两个向量无关，因此第三列可由前两列表示。由前两分量解得 \(\beta=2\alpha_1+\alpha_2\)，第三分量也吻合。`,
'book-23-3-2':String.raw`沿用本题系数矩阵，\(D=-\lambda(\lambda-3)\)。当 \(\lambda\ne0,3\) 时 \(D\ne0\)，任意右端都可表出；当 \(\lambda=0\) 时 \(\beta=\mathbf{0}\)，也可表出。当 \(\lambda=3\) 时 \(D=0\)，而第二个克莱姆行列式 \(D_2=\lambda(4\lambda^2+3\lambda+9)=162\ne0\)，若方程组有解则 \(D_2=x_2D=0\)，矛盾，所以方程组无解。故不能表出当且仅当 \(\lambda=3\)。`,
'book-23-4-2':String.raw`这三个向量按列构成对角矩阵，其行列式为 \(1\cdot2\cdot3=6\ne0\)。因此该矩阵可逆，其列向量可生成 \(\mathbb R^3\)。`,
'book-24-7-1':String.raw`系数矩阵的三阶行列式为 0，故系数矩阵的秩至多为 2；而增广矩阵的第 1、2、4 列组成的三阶子式 \[\begin{vmatrix}1&3&4\\3&5&1\\5&7&2\end{vmatrix}=-16\ne0.\] 因此增广矩阵的秩为 3，两个秩不等，原组无解。`,
'book-25-1-4':String.raw`把两个二维向量作为列，\(\begin{vmatrix}1&3\\2&1\end{vmatrix}=-5\ne0\)，故这两个向量线性无关。`,
'book-25-2-3':String.raw`按列组成三阶行列式：\(D=\begin{vmatrix}3&1&2\\0&2&1\\2&-1&k\end{vmatrix}=3(2k-1)\)。三个向量相关当且仅当 \(D=0\)，故 \(k=\frac12\)。`,
'book-25-3':String.raw`新向量对原无关组的系数矩阵是 \(C=\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix}\)，\(\det C=2\ne0\)。因此系数的零组合只有零解，新向量组无关。`,
'book-25-4':String.raw`新向量的系数矩阵为 \(C=\begin{pmatrix}1&0&-1\\-1&1&0\\0&-1&1\end{pmatrix}\)，其三列之和为零，故 \(\det C=0\)，新向量组相关。`,
'book-25-6':String.raw`把新四维向量的前三个分量按列排列，得到 \((\alpha_1,\alpha_2,\alpha_3)\)。原组是三个无关的三维向量，故 \(\det(\alpha_1,\alpha_2,\alpha_3)\ne0\)。这个非零三阶子式说明添加末尾分量后的三个四维向量仍无关。`,
'book-26-3-1':String.raw`将该练习的五个向量依次记为 \(\alpha_1,\ldots,\alpha_5\)。先直接验证 \(\alpha_3=2\alpha_1-\alpha_2\)、\(\alpha_4=\alpha_1+3\alpha_2\)。再取 \(\alpha_1,\alpha_2,\alpha_5\) 的前 3 个分量，\[\begin{vmatrix}1&1&1\\1&-1&2\\2&1&-1\end{vmatrix}=7\ne0.\] 所以这三列线性无关，又能表出原组，构成一个极大无关组，原组的秩为 3。`,
'book-26-4-1':String.raw`该五阶矩阵的行列式为 \(2\ne0\)，所以满秩，\(r(A)=5\)。`,
'book-26-5':String.raw`这个 \(3\times4\) 矩阵的四个三阶子式依次为 \((\lambda-3)(\lambda+5)\)、\(3(\lambda-3)\)、\(3-\lambda\)、\((\lambda-3)(\lambda+13)\)。若 \(\lambda\ne3\)，第二个三阶子式非零，故秩为 3；若 \(\lambda=3\)，四个三阶子式全为零，而左上角二阶子式 \(\begin{vmatrix}1&3\\2&-1\end{vmatrix}=-7\ne0\)，故秩为 2。`
},
quiz:{
'xxt23-9':String.raw`把题中两个二维向量按列排列，\(\begin{vmatrix}-1&2\\1&3\end{vmatrix}=-5\ne0\)。相应方阵可逆，所以它们可以生成 \(\mathbb R^2\)。`,
'xxt23-13':String.raw`把三个向量按列排列，\(\begin{vmatrix}1&0&2\\0&-1&0\\0&0&3\end{vmatrix}=-3\ne0\)。该方阵可逆，因此其列向量可以生成 \(\mathbb R^3\)。`
},
quizVariant:{
'xxt26-38':String.raw`取两列的前两个分量，\(\begin{vmatrix}3&1\\0&1\end{vmatrix}=3\ne0\)，故原列向量组无关。改成行向量后，对应二阶子式是前一子式的转置，行列式仍为 3，所以行向量组也无关。`,
'xxt26-39':String.raw`先验证 \(\alpha_3=\alpha_1-5\alpha_2\)。在 \(\alpha_1,\alpha_2,\alpha_4\) 所构成矩阵中，取前 3 行得 \(\begin{vmatrix}6&1&7\\4&0&1\\1&2&0\end{vmatrix}=45\ne0\)，故这三列无关且可表出原组，是极大无关组。转置后线性关系保持，且对应三阶子式的行列式不变，所以相应行向量结论相同。`
}
};
// 两道练习彼此引用对应原题；矩阵相同，沿用已核对的伴随矩阵计算。
window.DET_METHODS.variant['book-34-1-1']='把该练习中的矩阵 B 记为 A。'+window.DET_METHODS.primary['book-34-1-2'];
window.DET_METHODS.variant['book-34-1-2']='把该练习中的矩阵 B 记为 A。'+window.DET_METHODS.primary['book-34-1-1'];
