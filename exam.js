window.EXAM = {
'book-31-11': String.raw`证明：若 \((AB)^2=E\)，则 \(ABAB=E\)。两边左乘 \(A\)、右乘 \(B\)，得 \(BA=AB\)。
反之，若 \(AB=BA\)，则 \((AB)^2=A^2B^2=E\)。故结论成立。`,
'book-31-13': String.raw`证明：（1）由 \(Ax=0\)，得 \(x=CAx=0\)。故 A 的 n 个列向量线性无关，从而 \(m\ge n\)。
（2）任取 \(\beta\in\mathbb R^m\)，\(A(D\beta)=\beta\)，故方程组有解。又 \(m=r(AD)\le r(A)\le n\)。`,
'book-31-14': String.raw`证明：记 \(r(A)=r\)，\(B=(\beta_1,\ldots,\beta_s)\)。由 \(AB=O\)，知 \(A\beta_j=0\)。
若 \(r<n\)，取 \(Ax=0\) 的基础解系 \(\eta_1,\ldots,\eta_{n-r}\)，则各 \(\beta_j\) 均可由它线性表出，故 \(r(B)\le n-r\)。
若 \(r=n\)，则 \(B=O\)。因此 \(r(A)+r(B)\le n\)。`,
'book-31-15': String.raw`证明：由 \(A^2=E\)，得 \((A+E)(A-E)=O\)。由第 14 题，\(r(A+E)+r(A-E)\le n\)。
又 \[n=r(2E)=r((A+E)-(A-E))\le r(A+E)+r(A-E).\]
故 \(r(A+E)+r(A-E)=n\)。`,
'book-31-6': String.raw`证明：记 \(S=(0,e_1,\ldots,e_{n-1})\)，则 \(Se_1=0\)，\(Se_j=e_{j-1}\)（\(2\le j\le n\)）。
因此 \(S^ke_j=0\)（\(k\ge j\)）。对 \(j=1,\ldots,n\)，均有 \(S^ne_j=0\)，故 \(S^n=O\)。`,
'book-31-8': String.raw`证明：记 \(B=(\beta_1,\ldots,\beta_s)\)，则 \(AB=(A\beta_1,\ldots,A\beta_s)\)。
（1）若 \(\beta_j=0\)，则 \(A\beta_j=0\)。
（2）若 \(\beta_j=\beta_k\)，则 \(A\beta_j=A\beta_k\)。
（3）若 \(\sum_{j=1}^s k_j\beta_j=0\)，其中 \(k_j\) 不全为零，则 \(\sum_{j=1}^s k_jA\beta_j=0\)。故 AB 的列向量组线性相关。`,
'book-31-9': String.raw`证明：设 \(A=(a_{ij})\)，B 的第 k 行为 \(\beta_k\)。由矩阵乘法，AB 的第 i 行为
\[a_{i1}\beta_1+a_{i2}\beta_2+\cdots+a_{in}\beta_n.\]
故 AB 的行向量组可由 B 的行向量组线性表出。`,
'book-31-10': String.raw`证明：\[A^2=\tfrac14(B+E)^2=\tfrac14(B^2+2B+E).\]
故 \(A^2=A\iff B^2+2B+E=2B+2E\iff B^2=E\)。`,
'book-32-1': String.raw`证明：由 \(A^{\mathrm T}=A\)，得 \[(Q^{\mathrm T}AQ)^{\mathrm T}=Q^{\mathrm T}A^{\mathrm T}Q=Q^{\mathrm T}AQ.\]
故 \(Q^{\mathrm T}AQ\) 对称。`,
'book-32-4': String.raw`证明：\((AB)^{\mathrm T}=B^{\mathrm T}A^{\mathrm T}=-BA\)。因此
\[AB\text{ 反对称}\iff(AB)^{\mathrm T}=-AB\iff BA=AB.\]`,
'book-32-5': String.raw`证明：若 \(A^{\mathrm T}=-A\)，则 \(x^{\mathrm T}Ax=(x^{\mathrm T}Ax)^{\mathrm T}=-x^{\mathrm T}Ax\)，故 \(x^{\mathrm T}Ax=0\)。
反之，取 \(x=e_i\)，得 \(a_{ii}=0\)；取 \(x=e_i+e_j\)（\(i\ne j\)），得 \(a_{ij}+a_{ji}=0\)。故 \(A^{\mathrm T}=-A\)。`,
'book-32-6': String.raw`证明：设 \(A=(a_{ij})\)。由 \(A^{\mathrm T}A=O\)，比较第 i 个对角元，得
\[\sum_{k=1}^{n}a_{ki}^2=0\quad(i=1,\ldots,n).\]
各元素为实数，故 \(a_{ki}=0\)，即 \(A=O\)。`,
'book-33-3': String.raw`证明：若 \(AB=AC\)，两边左乘 \(A^{-1}\)，得 \(B=C\)。若 \(BA=CA\)，两边右乘 \(A^{-1}\)，亦得 \(B=C\)。`,
'book-33-4': String.raw`证明：由矩阵乘积的秩不超过任一因子的秩，
\[r(PA)\le r(A)=r(P^{-1}PA)\le r(PA),\]
\[r(AQ)\le r(A)=r(AQQ^{-1})\le r(AQ).\]
故 \(r(PA)=r(A)=r(AQ)\)。`,
'book-33-5': String.raw`证明：由 \(AB\) 可逆，\(r(AB)=n\)。又 \[n\ge r(A)\ge r(AB)=n,\qquad n\ge r(B)\ge r(AB)=n.\]
故 \(r(A)=r(B)=n\)，由定理 3.4，A、B 均可逆。`,
'book-33-6': String.raw`证明：由题设，\[(A-2E)(A+E)=(A+E)(A-2E)=A^2-A-2E=E.\]
故 \(A-2E\) 可逆，且 \((A-2E)^{-1}=A+E\)。`,
'book-33-8': String.raw`证明：\(A-B^{-1}=(AB-E)B^{-1}\)，故 \(L=A-B^{-1}\) 可逆。
令 \(D=L^{-1}-A^{-1}\)，则 \(LDA=A-L=B^{-1}\)，故 \[D=L^{-1}B^{-1}A^{-1}.\]
右边各因子可逆，所以 D 可逆。`,
'book-33-9': String.raw`证明：若 A 可逆，则任取 \(\beta\)，\(x=A^{-1}\beta\) 是 \(Ax=\beta\) 的解。
反之，设 \(Ax=\beta\) 对任意 \(\beta\) 有解。取 \(Ax_i=e_i\)（\(i=1,\ldots,n\)），令 \(X=(x_1,\ldots,x_n)\)，则 \(AX=E\)。由引理 3.1，\(r(A)=n\)，故 A 可逆。`,
'book-33-10': String.raw`证明：若 A 可逆，由 \(Ax=0\) 得 \(x=A^{-1}0=0\)。
反之，若 \(Ax=0\) 只有零解，则 A 的 n 个列向量线性无关，故 \(r(A)=n\)，由定理 3.4 知 A 可逆。`,
'book-26-3-1': String.raw`解：记 \(A=(\alpha_1,\alpha_2,\alpha_3,\alpha_4)\)，作初等行变换得
\[A\longrightarrow\begin{pmatrix}1&0&1&0\\0&1&-5&0\\0&0&0&1\\0&0&0&0\\0&0&0&0\end{pmatrix}.\]
故秩为 3，\(\alpha_1,\alpha_2,\alpha_4\) 是一个极大线性无关组，且 \(\alpha_3=\alpha_1-5\alpha_2\)。`,
'book-26-4-1': String.raw`解：对 A 作初等行变换，得
\[A\longrightarrow\begin{pmatrix}1&1&0&1&-1\\0&1&1&-1&2\\0&0&-4&0&-4\\0&0&0&0&3\end{pmatrix}.\]
故 \(r(A)=4\)。`,
'book-26-5': String.raw`解：对 \(j=2,\ldots,n\) 依次作 \(R_1\leftarrow R_1-\frac b2R_j\)，再作 \(C_1\leftarrow C_1-\frac b2C_j\)，得
\[A\longrightarrow\operatorname{diag}\left(2-\frac{(n-1)b^2}{2},2,\ldots,2\right).\]
故 \(r(A)=n-1\iff 2-\frac{(n-1)b^2}{2}=0\)，即 \(b=\pm\frac2{\sqrt{n-1}}\)。`,
'book-26-9': String.raw`证明：A 的行向量组有 m 个向量，列向量组有 n 个向量。由行秩等于列秩，\(r(A)\le m\)，\(r(A)\le n\)。故 \(r(A)\le\min(m,n)\)。`
};
Object.assign(window.EXAM, {
'book-21-3-1': String.raw`解：交换第三、四行，得 \[\left(\begin{array}{ccc|c}1&-4&7&0\\0&1&-2&3\\0&0&2&1\\0&0&0&1\end{array}\right).\] 末行得 \(0=1\)，故无解。`,
'book-21-3-3': String.raw`解：交换第三、四行，得 \[\left(\begin{array}{ccc|c}2&-1&3&0\\0&3&-2&0\\0&0&2&0\\0&0&0&0\end{array}\right).\] 回代得 \(x_3=x_2=x_1=0\)。`,
'book-21-4-1': String.raw`解：对增广矩阵作初等行变换，得 \[\left(\begin{array}{ccc|c}1&-3&4&-4\\3&-7&7&-8\\-4&6&-1&7\end{array}\right)\longrightarrow\left(\begin{array}{ccc|c}1&-3&4&-4\\0&2&-5&4\\0&0&0&3\end{array}\right).\] 末行得 \(0=3\)，故无解。`,
'book-21-4-3': String.raw`解：增广矩阵作初等行变换，得 \[\left(\begin{array}{rrrr|r}1&0&0&-3&1\\0&0&-1&4&-3\\0&-1&4&2&5\\0&0&0&-2&0\end{array}\right).\] 回代得 \(x_4=0,x_3=3,x_2=7,x_1=1\)。故解为 \((1,7,3,0)\)。`,
'book-21-5-1': String.raw`解：\[\left(\begin{array}{cc|c}1&k&-2\\3&1&1\end{array}\right)\longrightarrow\left(\begin{array}{cc|c}1&k&-2\\0&1-3k&7\end{array}\right).\] 当 \(k=\frac13\) 时末行为矛盾行；当 \(k\ne\frac13\) 时可回代求解。故 \(k\ne\frac13\)。`,
'book-21-5-3': String.raw`解：\[\left(\begin{array}{cc|c}2&-1&k\\-6&3&-2\end{array}\right)\longrightarrow\left(\begin{array}{cc|c}2&-1&k\\0&0&3k-2\end{array}\right).\] 有解当且仅当 \(3k-2=0\)，故 \(k=\frac23\)。`,
'book-21-6': String.raw`解：增广矩阵化为 \[\left(\begin{array}{ccc|c}1&-2&3&b_1\\0&1&-1&b_2\\0&0&0&2b_1+3b_2+b_3\end{array}\right).\] 故有解当且仅当 \(2b_1+3b_2+b_3=0\)。`,
'book-22-2-1': String.raw`解：\[\left(\begin{array}{cc|c}1&2&2\\k&-2&1\end{array}\right)\longrightarrow\left(\begin{array}{cc|c}1&2&2\\0&-2(k+1)&1-2k\end{array}\right).\] 当 \(k=-1\) 时末行为 \((0,0\mid3)\)；其余情形均可回代。故 \(k=-1\)。`,
'book-22-2-3': String.raw`解：\[\left(\begin{array}{cc|c}1&k&2\\k&1&1\end{array}\right)\longrightarrow\left(\begin{array}{cc|c}1&k&2\\0&1-k^2&1-2k\end{array}\right).\] 当 \(k=1\) 或 \(-1\) 时末行为矛盾行；其余情形均可回代。故 \(k=\pm1\)。`,
'book-23-2': String.raw`解：设 \(x_1\alpha_1+x_2\alpha_2=\beta\)，其增广矩阵化为 \[\left(\begin{array}{cc|c}1&-2&4\\0&5&-15\\0&0&k+17\end{array}\right).\] 有解当且仅当 \(k=-17\)。此时回代得 \(x_1=-2,x_2=-3\)，即 \(\beta=-2\alpha_1-3\alpha_2\)。`,
'book-23-8': String.raw`证明：若 \(k=0\)，结论成立。若 \(k\ne0\)，由 \(k\alpha=0\) 得 \(\alpha=\frac1k(k\alpha)=0\)。故 \(k=0\) 或 \(\alpha=0\)。`,
'book-23-7-2': String.raw`证明：设 \(\alpha=(a_1,\ldots,a_n)^{\mathrm T}\)，\(\beta=(b_1,\ldots,b_n)^{\mathrm T}\)，则 \[k(\alpha+\beta)=(k(a_1+b_1),\ldots,k(a_n+b_n))^{\mathrm T}=k\alpha+k\beta.\]`,
'book-24-7-1': String.raw`解：增广矩阵化为 \[\left(\begin{array}{ccc|c}1&0&-5&-2\\0&1&2&1\\0&0&0&0\end{array}\right).\] 令 \(x_3=t\)，得 \(x_1=-2+5t,x_2=1-2t\)。故解集为 \[\left\{\begin{pmatrix}-2\\1\\0\end{pmatrix}+t\begin{pmatrix}5\\-2\\1\end{pmatrix}:t\in\mathbb R\right\}.\]`,
'book-24-7-3': String.raw`解：增广矩阵化为 \[\left(\begin{array}{cccc|c}1&5&-1&-1&-1\\0&-7&2&4&4\\0&0&0&0&0\\0&0&0&0&0\end{array}\right).\] 令 \(x_3=s,x_4=t\)，得 \(x_2=(-4+2s+4t)/7\)，\(x_1=(13-3s-13t)/7\)。故解集为 \[\left\{\frac17\begin{pmatrix}13\\-4\\0\\0\end{pmatrix}+\frac s7\begin{pmatrix}-3\\2\\7\\0\end{pmatrix}+\frac t7\begin{pmatrix}-13\\4\\0\\7\end{pmatrix}:s,t\in\mathbb R\right\}.\]`
});
Object.assign(window.EXAM, {
'book-25-1-3': String.raw`解：\(2\alpha_1+\alpha_3=0\)，系数不全为零，故线性相关。`,
'book-25-1-4': String.raw`解：设 \(x_1\alpha_1+x_2\alpha_2=0\)。比较第二、第一分量，依次得 \(x_2=0\)、\(3x_1=0\)。故两向量线性无关。`,
'book-25-1-5': String.raw`解：4 个三维向量的零组合对应 3 个方程、4 个未知量的齐次方程组，故有非零解，向量组线性相关。`,
'book-25-1-6': String.raw`解：设 \(x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=0\)，对系数矩阵作初等行变换，得 \[\begin{pmatrix}-1&1&2\\0&1&-1\\0&0&10\\0&0&0\end{pmatrix}.\] 回代得 \(x_1=x_2=x_3=0\)，故线性无关。`,
'book-25-2-2': String.raw`解：对向量按列组成的矩阵作初等行变换，得 \[\begin{pmatrix}2&-1&k\\0&2&1\\0&0&\frac34-\frac32k\end{pmatrix}.\] 齐次方程组有非零解当且仅当 \(\frac34-\frac32k=0\)，故 \(k=\frac12\)。`,
'book-25-2-3': String.raw`解：对向量按列组成的矩阵作初等行变换，得 \[\begin{pmatrix}3&0&1\\0&1&-k\\0&0&k+\frac73\\0&0&0\end{pmatrix}.\] 有非零零组合当且仅当 \(k+\frac73=0\)，故 \(k=-\frac73\)。`,
'book-25-3': String.raw`解：（1）设零组合系数为 \(x,y,z\)，由原组无关得 \(x+z=x+y=y+z=0\)，解得 \(x=y=z=0\)，故无关。
（2）三个向量之和为零，故相关。
（3）第一个向量减去第二、三个向量等于零，故相关。
（4）设零组合系数为 \(x,y,z\)，由原组无关得 \(x+y+z=y+z=z=0\)，故无关。`,
'book-25-4': String.raw`解：设新向量组的零组合系数为 \(x_1,\ldots,x_s\)（\(s\ge2\)）。由原组无关，\[x_1+x_s=0,\qquad x_{i-1}+x_i=0\ (2\le i\le s).\]
故 \(x_i=(-1)^{i-1}x_1\)，且 \((1+(-1)^{s-1})x_1=0\)。s 为奇数时只有零解，故无关；s 为偶数时取 \(x_i=(-1)^{i-1}\)，故相关。\(s=1\) 时 \(2\alpha_1\ne0\)，亦无关。`,
'book-25-6': String.raw`证明：删去 \(\alpha_{n+1}\) 时，剩余向量无关。若删去 \(\alpha_j\)，设 \[\sum_{i\ne j}c_i\alpha_i+d\alpha_{n+1}=0.\]
代入题设，由原组无关得 \(dk_j=0\)、\(c_i+dk_i=0\)。因 \(k_j\ne0\)，故 \(d=0\)，进而 \(c_i=0\)。故任取 n 个均线性无关。`,
'book-34-2': String.raw`解：记左右初等矩阵为 P、Q，中间矩阵为 B。因 \(P^2=Q^2=E\)，故 \(P^{-2012}=E\)、\(Q^{2013}=Q\)。
右乘 Q 相当于交换 B 的前两列，故原式 \[=BQ=\begin{pmatrix}2&1&3\\5&4&6\\8&7&9\end{pmatrix}.\]`,
'book-35-1-1': String.raw`解：原式 \[=\begin{pmatrix}A_1B_{11}&A_1B_{12}\\A_2B_{21}&A_2B_{22}\end{pmatrix}.\]`,
'book-35-1-2': String.raw`解：原式 \[=\begin{pmatrix}A_{11}B_{11}&A_{11}B_{12}\\A_{21}B_{11}&A_{21}B_{12}+A_{22}B_{22}\end{pmatrix}.\]`,
'book-35-4-2': String.raw`解：令 \(D=\begin{pmatrix}2&3\\4&5\end{pmatrix}\)、\(C=\begin{pmatrix}3&1\\2&0\end{pmatrix}\)，则 \(A=\operatorname{diag}(D,C)\)。
\[D^{-1}=\frac12\begin{pmatrix}-5&3\\4&-2\end{pmatrix},\quad C^{-1}=\frac12\begin{pmatrix}0&1\\2&-3\end{pmatrix}.\]
故 \[A^{-1}=\frac12\begin{pmatrix}-5&3&0&0\\4&-2&0&0\\0&0&0&1\\0&0&2&-3\end{pmatrix}.\]`,
'book-35-4-4': String.raw`解：令 \(C=\begin{pmatrix}1&1\\1&-1\end{pmatrix}\)，则 \(C^2=2E_2\)，且 \(H=\begin{pmatrix}C&C\\C&-C\end{pmatrix}\)。故 \[H^2=\begin{pmatrix}2C^2&O\\O&2C^2\end{pmatrix}=4E_4,\qquad H^{-1}=\tfrac14H.\]`
});
Object.assign(window.EXAM, {
'book-22-3': String.raw`解：对增广矩阵作 \(R_2-R_1\)、\(R_3-R_1\)，得
\[\left(\begin{array}{ccc|c}\lambda&1&1&1\\1-\lambda&\lambda-1&0&\lambda-1\\1-\lambda&0&\lambda-1&\lambda^2-1\end{array}\right).\]
当 \(\lambda=1\) 时，解为 \((1-s-t,s,t)\)。当 \(\lambda\ne1\) 时，第二、三行除以 \(\lambda-1\)，再用第一行减去第二、三行，得
\[\left(\begin{array}{ccc|c}\lambda+2&0&0&-\lambda-1\\-1&1&0&1\\-1&0&1&\lambda+1\end{array}\right).\]
当 \(\lambda=-2\) 时无解；当 \(\lambda\ne1,-2\) 时，解为 \[\left(-\frac{\lambda+1}{\lambda+2},\frac1{\lambda+2},\frac{(\lambda+1)^2}{\lambda+2}\right).\]
因此有解当且仅当 \(\lambda\ne-2\)。`,
'book-22-4': String.raw`解：增广矩阵经行变换得 \[\left(\begin{array}{ccccc|c}1&1&1&1&1&1\\0&1&2&2&6&3\\0&0&0&0&0&a\\0&0&0&0&0&b-2\end{array}\right).\]
故有解当且仅当 \(a=0,b=2\)。令 \(x_3=s,x_4=t,x_5=u\)，回代得 \[(-2+s+t+5u,\ 3-2s-2t-6u,\ s,t,u).\]`,
'book-22-5': String.raw`解：增广矩阵化为 \[\left(\begin{array}{ccc|c}1&1&1&0\\0&-1&k-3&0\\k-1&0&0&0\end{array}\right).\]
当 \(k=1\) 时，解为 \((t,-2t,t)\)。当 \(k\ne1\) 时，\(x_1=0\)，再由前两行得 \(x_2=-x_3\)、\((k-2)x_3=0\)。故 \(k=2\) 时解为 \((0,-t,t)\)，其余只有零解。所求为 \(k=1\) 或 \(2\)。`,
'book-22-6': String.raw`解：解第一组，令 \(x_3=s,x_4=t\)，得 \(x_1=-3s-5t,x_2=2s+2t\)。代入第二组新增方程，得 \[(-9+2a+b)s+(-14+2a)t=0.\]
由同解，上式对任意 \(s,t\) 成立，故 \(2a+b=9,\ 2a=14\)，解得 \(a=7,b=-5\)。代回可知两组确实同解。`,
'book-22-7-1': String.raw`证明：若 \(a\ne0\)，则 \[\begin{pmatrix}a&b\\c&d\end{pmatrix}\longrightarrow\begin{pmatrix}1&b/a\\0&(ad-bc)/a\end{pmatrix}\longrightarrow E.\]
若 \(a=0\)，则 \(bc\ne0\)。交换两行并化简，\[\begin{pmatrix}0&b\\c&d\end{pmatrix}\longrightarrow\begin{pmatrix}c&d\\0&b\end{pmatrix}\longrightarrow E.\]
故 A 与 E 行等价。`,
'book-23-3-2': String.raw`解：令 \(x_1\alpha_1+x_2\alpha_2+x_3\alpha_3=\beta\)，增广矩阵经行变换得 \[\left(\begin{array}{ccc|c}3&2-\lambda&1-\lambda&-\lambda\\0&1&\lambda-1&4\lambda(\lambda+1)\\0&0&\lambda(\lambda-3)&\lambda(4\lambda^2-9)\end{array}\right).\]
\(\lambda=0\) 时有无穷多解 \((-t,t,t)\)；\(\lambda=3\) 时无解；其余情形有唯一解。故所求 \(\lambda=0\)。`,
'book-23-4-2': String.raw`解：任取 \(\beta=(b_1,b_2,b_3)^{\mathrm T}\)，令 \(\sum_{i=1}^3x_i\alpha_i=\beta\)。其增广矩阵化为 \[\left(\begin{array}{ccc|c}1&1&0&b_2\\0&-1&0&b_1-2b_2\\0&0&3&b_3\end{array}\right).\]
回代得 \(x_1=b_1-b_2,x_2=-b_1+2b_2,x_3=b_3/3\)。故为一组生成元。`,
'book-26-7': String.raw`证明：（1）设两组秩为 p、q，分别取极大无关组。前组的 p 个无关向量可由后组 q 个向量表出，故 \(p\le q\)。
（2）由已知，合并组可由第二组表出；第二组包含在合并组中，故两组等价。
（3）若共同秩为 0，两组均为零组。若共同秩为 \(r>0\)，从第一组取 r 个无关向量；由（2）合并组秩为 r，因此合并组每个向量均可由它们表出。结合已知，故两组等价。`,
'book-26-8': String.raw`证明：两组的极大无关组都包含在合并组中，故 \(r_3\ge r_1\)、\(r_3\ge r_2\)。
分别取两组的极大无关组，合起来可表出整个合并组，故 \(r_3\le r_1+r_2\)。因此 \[\max(r_1,r_2)\le r_3\le r_1+r_2.\]`,
'book-35-3': String.raw`解：对分块增广矩阵作初等行变换，\[\left(\begin{array}{cc|cc}O&A&E&O\\C&B&O&E\end{array}\right)\longrightarrow\left(\begin{array}{cc|cc}E&C^{-1}B&O&C^{-1}\\O&E&A^{-1}&O\end{array}\right)\longrightarrow\left(\begin{array}{cc|cc}E&O&-C^{-1}BA^{-1}&C^{-1}\\O&E&A^{-1}&O\end{array}\right).\]
故 \(P^{-1}=\begin{pmatrix}-C^{-1}BA^{-1}&C^{-1}\\A^{-1}&O\end{pmatrix}\)。`,
'book-35-5': String.raw`解：令 \(S=E_n-AB\)。对分块增广矩阵作初等行变换，\[\left(\begin{array}{cc|cc}E_m&B&E_m&O\\A&E_n&O&E_n\end{array}\right)\longrightarrow\left(\begin{array}{cc|cc}E_m&B&E_m&O\\O&S&-A&E_n\end{array}\right)\longrightarrow\left(\begin{array}{cc|cc}E_m&O&E_m+BS^{-1}A&-BS^{-1}\\O&E_n&-S^{-1}A&S^{-1}\end{array}\right).\]
故 M 可逆，右半部分即 \(M^{-1}\)。`
});
Object.assign(window.EXAM, {
'book-34-1-1': String.raw`解：对增广矩阵作初等行变换，\[\left(\begin{array}{ccc|ccc}1&1&-1&1&0&0\\1&2&3&0&1&0\\0&1&1&0&0&1\end{array}\right)\longrightarrow\left(\begin{array}{ccc|ccc}1&1&-1&1&0&0\\0&1&4&-1&1&0\\0&1&1&0&0&1\end{array}\right)\longrightarrow\left(\begin{array}{ccc|ccc}1&0&0&1/3&2/3&-5/3\\0&1&0&1/3&-1/3&4/3\\0&0&1&-1/3&1/3&-1/3\end{array}\right).\]
故 \(A^{-1}=\frac13\begin{pmatrix}1&2&-5\\1&-1&4\\-1&1&-1\end{pmatrix}\)。`,
'book-34-1-2': String.raw`解：对增广矩阵作初等行变换，\[\left(\begin{array}{ccc|ccc}1&-3&2&1&0&0\\-3&0&1&0&1&0\\1&1&-1&0&0&1\end{array}\right)\longrightarrow\left(\begin{array}{ccc|ccc}1&-3&2&1&0&0\\0&1&-3/4&-1/4&0&1/4\\0&-9&7&3&1&0\end{array}\right)\longrightarrow\left(\begin{array}{ccc|ccc}1&0&0&1&1&3\\0&1&0&2&3&7\\0&0&1&3&4&9\end{array}\right).\]
故 \(A^{-1}=\begin{pmatrix}1&1&3\\2&3&7\\3&4&9\end{pmatrix}\)。`,
'book-33-1-2': String.raw`解：\(8\times4-6\times5=2\ne0\)，故 A 可逆，\[A^{-1}=\frac12\begin{pmatrix}4&-6\\-5&8\end{pmatrix}.\]`,
'book-33-1-3': String.raw`解：\(3\times4-2\times6=0\)，故 A 不可逆。`,
'book-31-1-2': String.raw`解：按行乘列，原式 \[=\begin{pmatrix}12&26\\-27&2\\23&4\end{pmatrix}.\]`,
'book-31-1-4': String.raw`解：按行乘列，原式 \[=\begin{pmatrix}d_1a_1&d_1a_2&d_1a_3\\d_2b_1&d_2b_2&d_2b_3\\d_3c_1&d_3c_2&d_3c_3\end{pmatrix}.\]`,
'book-31-1-6': String.raw`解：\[N^2=\begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix},\qquad N^3=N^2N=O.\]`,
'book-31-1-8': String.raw`解：\(P^2=E\)，故 \[P^n=\begin{cases}E,&n\text{ 为偶数},\\P,&n\text{ 为奇数}.\end{cases}\]`,
'book-31-3': String.raw`解：（1）\[A^2=\begin{pmatrix}8&2&4\\11&2&5\\-1&0&-1\end{pmatrix},\qquad f(A)=A^2-A+E=\begin{pmatrix}7&1&3\\8&2&3\\-2&1&0\end{pmatrix}.\]
（2）\[A^2=\begin{pmatrix}7&-5\\-15&12\end{pmatrix},\qquad f(A)=A^2-5A+3E=O.\]`
});
Object.assign(window.EXAM, {
'other-23-1': String.raw`证明：设 \(\alpha=(a_i)\)、\(\beta=(b_i)\)、\(\gamma=(c_i)\)。对每个 i，\((a_i+b_i)+c_i=a_i+(b_i+c_i)\)，故 \((\alpha+\beta)+\gamma=\alpha+(\beta+\gamma)\)。
又 \(k(a_i+b_i)=ka_i+kb_i\)，故 \(k(\alpha+\beta)=k\alpha+k\beta\)。`,
'other-23-2': String.raw`证明：令 \(\alpha_j=(a_{1j},\ldots,a_{nj})^{\mathrm T}\)、\(\beta=(b_1,\ldots,b_n)^{\mathrm T}\)。则 \(\sum_{j=1}^s x_j\alpha_j=\beta\) 当且仅当对每个 i 有 \(\sum_{j=1}^s a_{ij}x_j=b_i\)，即原线性方程组。`,
'other-23-3': String.raw`证明：任取 \(u=\sum_{i=1}^sa_i\alpha_i\)、\(v=\sum_{i=1}^sb_i\alpha_i\in L\) 及实数 k，则 \[u+v=\sum_{i=1}^s(a_i+b_i)\alpha_i\in L,\qquad ku=\sum_{i=1}^s(ka_i)\alpha_i\in L.\]
故 L 对加法和数乘封闭。`,
'other-24-1': String.raw`证明：设引理 2.1 的一般解有 t 个自由未知量 \(k_1,\ldots,k_t\)。令 \(\eta_i\) 为仅令 \(k_i=1\)、其他自由未知量为 0 所得的解，则一般解为 \[k_1\eta_1+\cdots+k_t\eta_t.\]
任取实数 \(k_i\) 均得到原方程组的解，故解集为所给集合。无自由未知量时解集为 \(\{0\}\)。`,
'other-24-2': String.raw`证明：记第 i 个方程左端为 \(L_i(x)\)，右端为 \(b_i\)。若 \(\gamma\) 是原方程组的解，则 \(L_i(\gamma-\gamma_0)=b_i-b_i=0\)，故 \(\gamma-\gamma_0\) 是导出组的解。
反之，若 \(\eta\) 是导出组的解，则 \(L_i(\gamma_0+\eta)=b_i\)，故 \(\gamma_0+\eta\) 是原方程组的解。由此得所证解集。`,
'other-24-3': String.raw`证明：记原方程组第 i 个方程左端为 \(L_i\)，右端为 \(b_i\)。则 \(L_i(\eta_1)=L_i(\eta_2)=b_i\)，\(L_i(\eta_3)=L_i(\eta_4)=0\)。
故 \[L_i(\eta_1-\eta_2)=0,\quad L_i(\eta_3\pm\eta_4)=0,\quad L_i(k\eta_3)=0,\quad L_i(\eta_1+\eta_3)=b_i.\]
对每个 i 均成立，故结论成立。`,
'other-25-1': String.raw`证明：若扩充后的向量组相关，则存在不全为零的系数使 \(\sum_{i=1}^tc_i\alpha_i+d\beta=0\)。由 \(\alpha_1,\ldots,\alpha_t\) 无关知 \(d\ne0\)，故 \(\beta=-\sum_{i=1}^t(c_i/d)\alpha_i\)。
反之，若 \(\beta=\sum_{i=1}^tk_i\alpha_i\)，则 \(\sum_{i=1}^tk_i\alpha_i-\beta=0\)，系数不全为零，故扩充后的向量组相关。`
});
Object.assign(window.EXAM, {
'xxt21-7': String.raw`老师解析：错。教材的三类是“初等行变换”；倍乘一行时所乘的数须非零。`,
'xxt21-8': String.raw`对。由行等价的定义，两矩阵经有限次初等行变换相互得到，即行等价。`,
'xxt21-9': String.raw`对。若 A、B 均为同一未知量顺序的增广矩阵，初等行变换保持对应方程组的解集，故两组同解。`,
'xxt21-10': String.raw`错。第二、三非零行的首非零元均在第二列，故不是阶梯形。`,
'xxt21-11': String.raw`错。各非零行首非零元均为 1，所在列其余元素均为 0，且零行在底部，故是简化阶梯形。`,
'xxt21-12': String.raw`对。由教材定理 2.1，可继续化为唯一的简化阶梯形矩阵。`,
'xxt21-13': String.raw`老师解析判错：教材定理表述为“任意非零矩阵”。按通常的阶梯形定义，零矩阵可单独满足条件，故数学判断另有不同口径。`,
'xxt21-14': String.raw`错。反例：\(x_1=0,\ x_1=0\) 中 \(m=2>n=1\)，但只有零解。`,
'xxt21-15': String.raw`错。反例：\(x_1=0,\ x_1=1\) 中 \(m=2<n=3\)，但方程组无解。`,
'xxt21-16': String.raw`对。齐次方程组有零解；\(m<n\) 时至少有一个自由未知量，故有无穷多解。`,
'xxt23-7': String.raw`错。取 \(\alpha=0,k=1\)，则 \(k\alpha=0\)，但 \(k\ne0\)。`,
'xxt23-8': String.raw`错。\(\alpha=(a_1,\ldots,a_n)^{\mathrm T}=a_1e_1+\cdots+a_ne_n\)。比较各分量知系数唯一。`,
'xxt23-9': String.raw`对。任取 \((u,v)^{\mathrm T}\)，取 \(x=(-3u+2v)/5\)、\(y=(u+v)/5\)，则 \(x(-1,1)^{\mathrm T}+y(2,3)^{\mathrm T}=(u,v)^{\mathrm T}\)。`,
'xxt23-10': String.raw`错。所给向量的线性组合第一、二分量相等，故不能表出 \((1,0,0)^{\mathrm T}\)。`,
'xxt23-11': String.raw`平台判错：例如 \(x=0\) 只有零解，无法取非零解向量组成基础解系。若允许空组作为基础解系，结论取决于这一约定。`,
'xxt23-12': String.raw`对。记原方程组第 i 个方程左端为 \(L_i\)，则 \(L_i(\eta_1-\eta_2)=b_i-b_i=0\)，故其差是导出组的解。`,
'xxt23-13': String.raw`对。任取 \((u,v,w)^{\mathrm T}\)，有 \[(u,v,w)^{\mathrm T}=(u-2w/3)(1,0,0)^{\mathrm T}-v(0,-1,0)^{\mathrm T}+(w/3)(2,0,3)^{\mathrm T}.\]`,
'xxt23-14': String.raw`对。记第 i 个方程左端为 \(L_i\)，则 \(L_i(\eta_1-\eta_2)=b_i-0=b_i\)，故其差是原方程组的解。`
});
Object.assign(window.EXAM, {
'xxt25-1': String.raw`对。由 \(\beta=\sum_{i=1}^3c_i\alpha_i\)，得 \(\sum_{i=1}^3c_i\alpha_i-\beta=0\)，系数不全为零，故相关。`,
'xxt25-2': String.raw`错。取 \(\alpha_1=\alpha_2=\alpha_3=(1,0)^{\mathrm T}\)、\(\beta=(0,1)^{\mathrm T}\)。扩充组相关，但 β 不能由 α 组表出。`,
'xxt25-3': String.raw`对。相关当且仅当对应齐次方程组有非零解；一个非零解的任意实数倍均为解，故等价于有无穷多解。`,
'xxt25-4': String.raw`对。无关当且仅当对应齐次方程组只有零解，即有唯一解。`,
'xxt25-5': String.raw`对。零向量的系数取 1，其余系数取 0，所得组合为零且系数不全为零。`,
'xxt25-6': String.raw`对。若两向量成比例，因第一分量同为正，比例系数为正；第三分量分别为 \(-\pi<0\)、\(3.14>0\)，矛盾。故无关。`,
'xxt25-7': String.raw`对。由 \(\sum_{i=1}^nc_ie_i=0\) 比较分量得 \(c_i=0\)。故单位向量组无关，其部分组也无关。`,
'xxt25-8': String.raw`对。\(n+1\) 个 n 维向量的零组合对应 n 个方程、\(n+1\) 个未知量的齐次方程组，必有非零解。`,
'xxt25-9': String.raw`对。\(m>n\) 时，零组合对应 n 个方程、m 个未知量，故有非零解，向量组相关。`,
'xxt25-10': String.raw`对。4 个三维向量中，向量个数大于维数，故线性相关。`,
'xxt25-11': String.raw`对。将相关部分组的非零零组合中其余向量的系数补 0，即得整组的非零零组合。`,
'xxt25-12': String.raw`对。若部分组相关，将其余系数补 0，则整组相关，与已知矛盾。`,
'xxt25-13': String.raw`对。由相关得 \(\sum c_i\alpha_i+d\beta=0\)，且由 α 组无关知 \(d\ne0\)，故 β 可表出。若有两种表示，相减并利用 α 组无关，得对应系数相等。`,
'xxt25-14': String.raw`对。每个 \(\alpha_i\) 都可由 β 组表出，正是 α 组可由 β 组线性表出的定义。`
});
Object.assign(window.EXAM, {
'xxt26-1': String.raw`对。将 β 组的表达式逐项代入 α 组的表达式，便得 α 组可由 γ 组表出。`,
'xxt26-2': String.raw`对。由两次互相表出及表出关系的传递性，α 组与 γ 组互相表出，故等价。`,
'xxt26-3': String.raw`对。分别取两组极大无关组，前者可由后者表出，故由定理 2.6 得 \(r(\alpha)\le r(\beta)\)。`,
'xxt26-4': String.raw`对。\(s>t\)，s 个向量可由 t 个向量表出，故由定理 2.6 知其线性相关。`,
'xxt26-5': String.raw`对。若 \(s>t\)，由定理 2.6 知 α 组相关，与已知矛盾，故 \(s\le t\)。`,
'xxt26-6': String.raw`对。两组互相表出，故 \(r(\alpha)\le r(\beta)\) 且 \(r(\beta)\le r(\alpha)\)，因此两秩相等。`,
'xxt26-7': String.raw`对。各极大无关组与各自原组等价，故两极大无关组等价，因而秩及向量个数均相等。`,
'xxt26-8': String.raw`对。极大无关组包含于原组，且原组可由它表出，故两组等价。`,
'xxt26-9': String.raw`对。原组的秩等于极大无关组的向量个数，也等于该无关组的秩。`,
'xxt26-10': String.raw`对。两个极大无关组均与原组等价，故彼此等价；其向量个数均等于原组的秩。`,
'xxt26-11': String.raw`对。s 个向量无关，整组即为极大无关组，故秩为 s。`,
'xxt26-12': String.raw`对。极大无关组是原向量组的部分组，其个数至多为 s，故秩不超过 s。`,
'xxt26-13': String.raw`对。由秩的定义，秩为 s 的向量组存在含 s 个向量的极大无关组。`,
'xxt26-14': String.raw`错。取 \(\alpha_1=\alpha_2=(1,0)^{\mathrm T}\)、\(\alpha_3=(0,1)^{\mathrm T}\)。整组秩为 2，但 \(\alpha_1,\alpha_2\) 相关。`,
'xxt26-15': String.raw`对。三个向量秩为 3，故整组无关；无关组的部分组无关。`,
'xxt26-16': String.raw`对。s 个向量无关当且仅当整组为含 s 个向量的极大无关组，即秩为 s。`,
'xxt26-17': String.raw`对。s 个向量无关当且仅当秩为 s，故相关当且仅当秩小于 s。`,
'xxt26-18': String.raw`对。由矩阵行秩等于列秩的定理，结论成立。`,
'xxt26-19': String.raw`对。初等行变换保持矩阵的秩，行秩等于矩阵的秩。`,
'xxt26-20': String.raw`对。初等行变换保持矩阵的秩，列秩等于矩阵的秩。`,
'xxt26-21': String.raw`对。初等列变换保持矩阵的秩，行秩等于矩阵的秩。`,
'xxt26-22': String.raw`对。初等列变换保持矩阵的秩，行秩等于矩阵的秩。`,
'xxt26-23': String.raw`对。初等行、列变换均保持矩阵的秩，且行秩等于矩阵的秩。`,
'xxt26-24': String.raw`对。初等行、列变换均保持矩阵的秩，且列秩等于矩阵的秩。`,
'xxt26-25': String.raw`对。初等行变换和列变换均不改变矩阵的秩。`,
'xxt26-26': String.raw`对。由非齐次线性方程组的有解判定，有解当且仅当 \(r(A)=r(\bar A)\)。`,
'xxt26-27': String.raw`对。齐次方程组的增广矩阵只比系数矩阵多一列零向量，故两者的秩相等。`,
'xxt26-28': String.raw`对。阶梯形矩阵的主元占不同的行和列，故 \(r(A)\le\min(m,n)\)。`,
'xxt26-29': String.raw`对。矩阵的秩不超过行数，也不超过列数，即 \(r(A)\le\min(m,n)\)。`,
'xxt26-30': String.raw`对。分别取两组极大无关组，共 \(r_1+r_2\) 个向量，能表出合并组，故 \(r_3\le r_1+r_2\)。`,
'xxt26-31': String.raw`对。第一组的极大无关组仍是合并组的无关部分组，故 \(r_3\ge r_1\)。`,
'xxt26-32': String.raw`对。第二组的极大无关组仍是合并组的无关部分组，故 \(r_3\ge r_2\)。`,
'xxt26-33': String.raw`对。由 \(r_3\ge r_1\)、\(r_3\ge r_2\)，得 \(r_3\ge\max(r_1,r_2)\)。`,
'xxt26-34': String.raw`错。三元方程组 \(x_1=0,\ x_1=1\) 的系数矩阵秩为 1、增广矩阵秩为 2，且 \(2<3\)，但方程组无解。`,
'xxt26-35': String.raw`错。三元方程组 \(x_1=0,\ x_1=1\) 的系数矩阵秩为 \(1<3\)，但方程组无解。`,
'xxt26-36': String.raw`对。齐次方程组的增广矩阵与系数矩阵秩相等，且 \(r(A)<n\)，故有自由未知量，从而有无穷多解。`,
'xxt26-37': String.raw`对。齐次方程组有零解，且 \(r(A)<n\) 意味着存在自由未知量，故有无穷多解。`,
'xxt26-38': String.raw`对。\(\sum c_i\alpha_i=0\) 当且仅当 \(\sum c_i\alpha_i^{\mathrm T}=0\)，故对应向量组的无关性相同。`,
'xxt26-39': String.raw`对。转置保持各对应向量之间的线性关系和表出关系，故极大无关组对应。`,
'xxt26-40': String.raw`对。前 t 个向量无关，而原组秩为 t，不能再加入原组向量使其仍无关，故为极大无关组。`
});
