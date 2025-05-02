// 从Markdown文件中解析词汇和定理数据
const vocabData = {
    "proposition": "命题",
    "propositional variable": "命题变量",
    "truth value": "真值",
    "negation of p": "p的否定",
    "logical operators": "逻辑运算符",
    "compound proposition": "复合命题",
    "truth table": "真值表",
    "disjunction of p and q": "p和q的析取",
    "conjunction of p and q": "p和q的合取",
    "exclusive or of p and q": "p和q的异或",
    "p implies q": "p蕴含q",
    "converse of p q": "p q的逆命题",
    "contrapositive of p q": "p q的逆否命题",
    "inverse of p q": "p q的反命题",
    "bi-conditional": "双条件",
    "bit": "比特",
    "Boolean variable": "布尔变量",
    "bit operation": "比特运算",
    "bit string": "比特串",
    "bitwise operations": "按位运算",
    "logic gate": "逻辑门",
    "logic circuit": "逻辑电路",
    "tautology": "永真式",
    "contradiction": "矛盾式",
    "contingency": "可能式",
    "consistent compound propositions": "相容的复合命题",
    "satisfiable compound proposition": "可满足的复合命题",
    "logically equivalent compound propositions": "逻辑等价的复合命题",
    "predicate": "谓词",
    "propositional function": "命题函数",
    "domain (or universe) of discourse": "论域",
    "existential quantification of P(x)": "P(x)的存在量化",
    "universal quantification of P(x)": "P(x)的全称量化",
    "logically equivalent expressions": "逻辑等价表达式",
    "free variable": "自由变量",
    "bound variable": "约束变量",
    "scope of a quantifier": "量词的作用域",
    "argument": "论证",
    "argument form": "论证形式",
    "premise": "前提",
    "conclusion": "结论",
    "valid argument": "有效论证",
    "theorem": "定理",
    "conjecture": "猜想",
    "proof": "证明",
    "axiom": "公理",
    "lemma": "引理",
    "corollary": "推论",
    "direct proof": "直接证明法",
    "proof by contraposition": "反证法",
    "proof by contradiction": "归谬证明法",
    "proof by cases": "分情形证明法",
    "without loss of generality": "不失一般性",
    "counterexample": "反例",
    "rational number": "有理数",
    "uniqueness proof": "唯一性证明",
    "homogeneous": "齐次的",
    "coefficient": "系数",
    "recurrence": "递推",
    "injection(one-to-one)": "单射",
    "surjection(onto)": "满射",
    "bijection(one-to-one correspondence)": "双射",
    "set": "集合",
    "paradox": "悖论",
    "element, member of a set": "集合的元素、成员",
    "roster method": "花名册方法",
    "set builder notation": "集合构造器记号",
    "empty set, null set": "空集",
    "universal set": "全集",
    "Venn diagram": "文氏图",
    "set equality": "集合相等",
    "subset": "子集",
    "proper subset": "真子集",
    "finite set": "有限集",
    "infinite set": "无限集",
    "cardinality of S": "S的基数",
    "power set of S": "S的幂集",
    "union of A and B": "A和B的并集",
    "intersection of A and B": "A和B的交集",
    "difference of A and B": "A和B的差集",
    "complement of A": "A的补集",
    "symmetric difference of A and B": "A和B的对称差",
    "membership table": "元素表",
    "function from A to B": "从A到B的函数",
    "domain of f": "f的定义域",
    "codomain of f": "f的值域",
    "image of a under f": "a在f下的像",
    "pre-image of b under f": "b在f下的原像",
    "range of f": "f的值域",
    "onto function, surjection": "映上函数、满射",
    "one-to-one function, injection": "一对一函数、内射",
    "one-to-one correspondence, bijection": "一一对应、双射",
    "inverse of f": "f的逆",
    "composition of f and g": "f和g的组合",
    "floor function": "下取整函数",
    "ceiling function": "上取整函数",
    "sequence": "序列",
    "geometric progression": "几何级数",
    "arithmetic progression": "算术级数",
    "string": "字符串",
    "empty string": "空串",
    "recurrence relation": "递推关系",
    "summation": "求和",
    "product": "乘积",
    "cardinality": "基数",
    "countable set": "可数集",
    "uncountable set": "不可数集",
    "aleph null": "阿列夫零",
    "computable function": "可计算函数",
    "uncomputable function": "不可计算函数",
    "matrix": "矩阵",
    "matrix addition": "矩阵加法",
    "matrix multiplication": "矩阵乘法",
    "identity matrix of order n": "n阶单位矩阵",
    "transpose of A": "A的转置",
    "symmetric matrix": "对称矩阵",
    "zero-one matrix": "0-1矩阵",
    "union of A and B": "A和B的并",
    "intersection of A and B": "A和B的交",
    "Boolean product of A and B": "A和B的布尔积",
    "algorithm": "算法",
    "searching algorithm": "搜索算法",
    "linear search algorithm": "线性搜索算法",
    "binary search algorithm": "二分搜索算法",
    "sorting": "排序",
    "string searching": "字符串搜索",
    "f(x) is O(g(x))": "f(x) 是 O(g(x)) 的",
    "f(x) is Ω(g(x))": "f(x) 是 Ω(g(x)) 的",
    "f(x) is Θ(g(x))": "f(x) 是 Θ(g(x)) 的",
    "time complexity": "时间复杂度",
    "space complexity": "空间复杂度",
    "worst-case time complexity": "最坏情形时间复杂度",
    "average-case time complexity": "平均情形时间复杂度",
    "algorithmic paradigm": "算法范型",
    "brute force": "蛮力算法",
    "greedy algorithm": "贪婪算法",
    "tractable problem": "易解问题",
    "intractable problem": "难解问题",
    "solvable problem": "可解问题",
    "unsolvable problem": "不可解问题",
    "upper triangular matrix": "上三角矩阵",
    "divides": "整除",
    "congruent modulo m": "模m同余",
    "modular arithmetic": "模算术",
    "prime": "素数",
    "composite": "合数",
    "Mersenne prime": "梅森素数",
    "greatest common divisor (gcd)": "最大公约数",
    "relatively prime integers": "互素整数",
    "pairwise relatively prime integers": "两两互素的整数",
    "least common multiple (lcm)": "最小公倍数",
    "modulus": "模",
    "binary representation": "二进制表示",
    "octal representation": "八进制表示",
    "hexadecimal representation": "十六进制表示",
    "linear combination": "线性组合",
    "Bezout coefficients": "贝祖系数",
    "inverse modulo m": "模逆",
    "linear congruence": "线性同余方程",
    "pseudoprime to the base b": "以b为基数的伪素数",
    "Carmichael number": "卡迈切尔数",
    "primitive root": "原根",
    "discrete logarithm": "离散对数",
    "encryption": "加密",
    "decryption": "解密",
    "encryption key": "加密密钥",
    "shift cipher": "移位密码",
    "affine cipher": "仿射密码",
    "character cipher": "字符密码",
    "block cipher": "分组密码",
    "cryptanalysis": "密码分析",
    "cryptosystem": "密码系统",
    "private key encryption": "私钥加密",
    "public key encryption": "公钥加密",
    "RSA cryptosystem": "RSA密码系统",
    "key exchange protocol": "密钥交换协议",
    "digital signature": "数字签名",
    "fully homomorphic cryptosystem": "全同态密码系统",
    "basis step": "基础步骤",
    "inductive step": "归纳步骤",
    "strong induction": "强归纳法",
    "well-ordering property": "良序性",
    "recursive definition of a function": "函数的递归定义",
    "recursive definition of a set": "集合的递归定义",
    "structural induction": "结构归纳法",
    "recursive algorithm": "递归算法",
    "merge sort": "归并排序",
    "iteration": "迭代",
    "program correctness": "程序正确性",
    "loop invariant": "循环不变量",
    "initial assertion": "初始断言",
    "final assertion": "终结断言",
    "combinatorics": "组合数学",
    "enumeration": "枚举",
    "tree diagram": "树图",
    "permutation": "排列",
    "r-permutation": "r排列",
    "P(n, r)": "n元素集合的r排列数",
    "r-combination": "r组合",
    "C(n, r)": "n元素集合的r组合数",
    "binomial coefficient": "二项式系数",
    "combinatorial proof": "组合证明",
    "Pascal's triangle": "帕斯卡三角形",
    "product rule for counting": "计数的乘积法则",
    "product rule for sets": "集合的乘积法则",
    "sum rule for counting": "计数的求和法则",
    "sum rule for sets": "集合的求和法则",
    "division rule for counting": "计数的除法法则",
    "division rule for sets": "集合的除法法则",
    "pigeonhole principle": "鸽巢原理",
    "generalized pigeonhole principle": "广义鸽巢原理",
    "Pascal's identity": "帕斯卡恒等式",
    "sample space": "样本空间",
    "event": "事件",
    "probability of an event (Laplace's definition)": "事件的概率（拉普拉斯定义）",
    "probability distribution": "概率分布",
    "probability of an event E": "事件E的概率",
    "conditional probability of E given F": "给定条件F下E的条件概率",
    "independent events": "独立事件",
    "pairwise independent events": "两两独立事件",
    "mutually independent events": "相互独立事件",
    "random variable": "随机变量",
    "distribution of a random variable X": "随机变量X的分布",
    "uniform distribution": "均匀分布",
    "expected value of a random variable": "随机变量的期望值",
    "geometric distribution": "几何分布",
    "independent random variables": "独立随机变量",
    "variance of a random variable X": "随机变量的方差",
    "standard deviation of a random variable X": "随机变量的标准差",
    "Bernoulli trial": "伯努利试验",
    "probabilistic (or Monte Carlo) algorithm": "概率（蒙特卡罗）算法",
    "probabilistic method": "概率方法",
    "linearity of expectations": "期望的线性性质",
    "Bienaymé's formula": "比安内梅公式",
    "initial conditions for a recurrence relation": "递推关系的初始条件",
    "dynamic programming": "动态规划",
    "linear homogeneous recurrence relation with constant coefficients": "常系数线性齐次递推关系",
    "characteristic roots of a linear homogeneous recurrence relation with constant coefficients": "常系数线性齐次递推关系的特征根",
    "linear nonhomogeneous recurrence relation with constant coefficients": "常系数线性非齐次递推关系",
    "divide and conquer algorithm": "分治算法",
    "generating function of a sequence": "序列的生成函数",
    "derangement": "错位排列",
    "onto functions": "映上函数",
    "number of derangements": "错位排列数",
    "binary relation from A to B": "从A到B的二元关系",
    "relation on A": "定义在A上的关系",
    "composition of relations": "关系的合成",
    "inverse relation": "逆关系",
    "power of a relation": "关系的幂",
    "reflexive": "自反的",
    "symmetric": "对称的",
    "antisymmetric": "反对称的",
    "transitive": "传递的",
    "n-ary relation on A1, A2, …, An": "定义在A1, A2, …, An上的n元关系",
    "relational data model": "关系数据模型",
    "primary key": "主键",
    "composite key": "复合主键",
    "selection operator": "选择运算符",
    "projection": "投影",
    "join": "连接",
    "directed graph (digraph)": "有向图",
    "loop": "环",
    "closure of a relation with respect to a property": "关系关于性质的闭包",
    "path in a digraph": "有向图中的路径",
    "circuit (or cycle) in a digraph": "有向图中的回路（或圈）",
    "connectivity relation": "连通性关系",
    "equivalence relation": "等价关系",
    "equivalent": "等价",
    "equivalence class of a with respect to R": "a关于R的等价类",
    "congruence class modulo m": "模m的同余类",
    "partition of a set S": "集合S的划分",
    "partial ordering": "偏序",
    "poset (S, R)": "偏序集",
    "comparable": "可比的",
    "incomparable": "不可比的",
    "total (or linear) ordering": "全序（或线序）",
    "totally (or linearly) ordered set": "全序（或线序）集",
    "well-ordered set": "良序集",
    "lexicographic order": "字典顺序",
    "Hasse diagram": "哈塞图",
    "maximal element": "极大元",
    "minimal element": "极小元",
    "greatest element": "最大元",
    "least element": "最小元",
    "upper bound of a set": "集合的上界",
    "lower bound of a set": "集合的下界",
    "least upper bound of a set": "集合的最小上界",
    "greatest lower bound of a set": "集合的最大下界",
    "lattice": "格",
    "compatible total ordering for a partial ordering": "与一个偏序相容的全序",
    "topological sort": "拓扑排序"
};

const theoremData = {
    "the principle of inclusion- exclusion": "容斥原理",
    "rule of inference": "推理规则",
    "valid argument form": "有效论证形式",
    "fallacy": "谬误",
    "vacuous proof": "空证明",
    "trivial proof": "平凡证明",
    "exhaustive proof": "穷举证明法",
    "constructive existence proof": "构造性的存在性证明",
    "nonconstructive existence proof": "非构造性的存在性证明",
    "circular reasoning or begging the question": "循环论证或窃取论题",
    "continuum hypothesis": "连续统假设",
    "division algorithm": "整除算法",
    "Euclidean algorithm": "欧几里得算法",
    "Bezout's theorem": "贝祖定理",
    "sieve of Eratosthenes": "埃拉托斯特尼筛法",
    "fundamental theorem of arithmetic": "算术基本定理",
    "principle of mathematical induction": "数学归纳法原理",
    "binomial theorem": "二项式定理",
    "subtraction rule for counting or inclusion-exclusion for sets": "计数的减法法则或集合的容斥原理",
    "Bayes' theorem": "贝叶斯定理",
    "Chebyshev's inequality": "切比雪夫不等式",
    "inclusion-exclusion principle": "容斥原理"
};

// 全局变量
let currentMode = 'vocab'; // 默认为词汇测试模式
let currentTerm = '';
let score = 0;
let total = 0;
let currentData = vocabData;
let answerChecked = false; // 用于跟踪答案是否已检查

// 错题集和已查看答案的题目
let incorrectTerms = {
    vocab: new Set(),
    theorem: new Set()
};
let viewedTerms = {
    vocab: new Set(),
    theorem: new Set()
};

// 已答对的词汇/定理
let correctTerms = {
    vocab: new Set(),
    theorem: new Set()
};

// 当前轮次中剩余需要测试的词汇/定理
let remainingTerms = {
    vocab: [],
    theorem: []
};

// DOM元素
const vocabTab = document.getElementById('vocab-tab');
const theoremTab = document.getElementById('theorem-tab');
const termElement = document.getElementById('term');
const answerInput = document.getElementById('answer');
const checkButton = document.getElementById('check-btn');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');
const showAnswerButton = document.getElementById('show-answer-btn');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 设置标签切换事件
    vocabTab.addEventListener('click', () => switchMode('vocab'));
    theoremTab.addEventListener('click', () => switchMode('theorem'));
    
    // 设置按钮事件
    checkButton.addEventListener('click', checkAnswer);
    nextButton.addEventListener('click', nextQuestion);
    showAnswerButton.addEventListener('click', showAnswer);
    
    // 增强回车键功能
    answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (!answerChecked) {
                // 第一次按回车，检查答案
                checkAnswer();
            } else {
                // 第二次按回车，下一题
                nextQuestion();
            }
        }
    });
    
    // 监听输入框变化，检测"chakan"命令
    answerInput.addEventListener('input', (e) => {
        if (answerInput.value.trim().toLowerCase() === 'chakan') {
            showAnswer();
            // 清空输入框
            setTimeout(() => {
                answerInput.value = '';
            }, 100);
        }
    });
    
    // 初始化剩余测试词汇/定理
    initializeRemainingTerms();
    
    // 加载第一个问题
    nextQuestion();
});

// 初始化剩余测试词汇/定理
function initializeRemainingTerms() {
    remainingTerms.vocab = Object.keys(vocabData);
    remainingTerms.theorem = Object.keys(theoremData);
    
    // 随机打乱顺序
    shuffleArray(remainingTerms.vocab);
    shuffleArray(remainingTerms.theorem);
}

// 随机打乱数组
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 切换测试模式
function switchMode(mode) {
    currentMode = mode;
    
    // 更新UI
    if (mode === 'vocab') {
        vocabTab.classList.add('active');
        theoremTab.classList.remove('active');
        currentData = vocabData;
    } else {
        theoremTab.classList.add('active');
        vocabTab.classList.remove('active');
        currentData = theoremData;
    }
    
    // 重置状态
    resetTest();
    
    // 加载新问题
    nextQuestion();
}

// 重置测试状态
function resetTest() {
    // 重置分数
    score = 0;
    total = 0;
    updateScore();
    
    // 重置已答对的词汇/定理
    correctTerms.vocab = new Set();
    correctTerms.theorem = new Set();
    
    // 重置错题集和已查看答案的题目
    incorrectTerms.vocab = new Set();
    incorrectTerms.theorem = new Set();
    viewedTerms.vocab = new Set();
    viewedTerms.theorem = new Set();
    
    // 重新初始化剩余测试词汇/定理
    initializeRemainingTerms();
    
    // 恢复UI
    restoreUI();
}

// 获取下一个测试词汇/定理
function getNextTerm() {
    // 获取当前模式的错题集和已查看答案的题目
    const incorrectSet = incorrectTerms[currentMode];
    const viewedSet = viewedTerms[currentMode];
    const currentRemaining = remainingTerms[currentMode];
    
    // 检查是否还有剩余词汇/定理需要测试
    if (currentRemaining.length === 0) {
        // 所有词汇/定理都已测试完毕，显示完成信息
        showCompletionMessage();
        return null;
    }
    
    // 优先从错题集中选择
    if (incorrectSet.size > 0) {
        for (let i = 0; i < currentRemaining.length; i++) {
            if (incorrectSet.has(currentRemaining[i])) {
                const term = currentRemaining[i];
                incorrectSet.delete(term);
                // 从剩余列表中移除该词汇/定理
                currentRemaining.splice(i, 1);
                return term;
            }
        }
    }
    
    // 其次从已查看答案的题目中选择
    if (viewedSet.size > 0) {
        for (let i = 0; i < currentRemaining.length; i++) {
            if (viewedSet.has(currentRemaining[i])) {
                const term = currentRemaining[i];
                viewedSet.delete(term);
                // 从剩余列表中移除该词汇/定理
                currentRemaining.splice(i, 1);
                return term;
            }
        }
    }
    
    // 最后从剩余词汇/定理中选择第一个
    const term = currentRemaining[0];
    // 从剩余列表中移除该词汇/定理
    currentRemaining.splice(0, 1);
    return term;
}

// 显示测试完成信息
function showCompletionMessage() {
    termElement.textContent = '恭喜！您已完成所有测试';
    answerInput.style.display = 'none';
    checkButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    nextButton.style.display = 'none'; // 隐藏原有的下一题按钮
    
    // 显示结果和选项
    resultElement.innerHTML = `
        <p>您已经完成了所有${currentMode === 'vocab' ? '词汇' : '定理'}的测试！</p>
        <p>最终得分：${score}/${total}</p>
        <div class="completion-options">
            <button id="new-round-btn">开始新一轮</button>
            <button id="exit-btn">退出测试</button>
        </div>
    `;
    resultElement.classList.remove('correct', 'incorrect');
    resultElement.classList.add('completion');
    resultElement.style.display = 'block';
    
    // 设置按钮事件
    document.getElementById('new-round-btn').addEventListener('click', () => {
        resetTest();
        nextQuestion(); // 确保重置后立即加载新问题
    });
    
    document.getElementById('exit-btn').addEventListener('click', () => {
        // 退出测试，可以根据需要实现
        alert('感谢您的参与！');
    });
}

// 恢复UI元素的显示状态
function restoreUI() {
    // 恢复输入框和按钮的显示
    answerInput.style.display = 'block';
    answerInput.value = '';
    checkButton.style.display = 'inline-block';
    nextButton.style.display = 'block';
    showAnswerButton.style.display = 'inline-block';
    
    // 清空结果显示
    resultElement.innerHTML = '';
    resultElement.style.display = 'none';
    resultElement.classList.remove('correct', 'incorrect', 'completion');
    
    // 重置答案检查状态
    answerChecked = false;
    
    // 确保完成界面的按钮被移除
    const completionButtons = document.querySelectorAll('.completion-options button');
    completionButtons.forEach(button => {
        if (button) button.remove();
    });
    
    // 重置题目显示
    termElement.textContent = '加载中...';
}

// 加载下一个问题
function nextQuestion() {
    // 重置答案检查状态
    answerChecked = false;
    
    // 清除结果显示
    resultElement.style.display = 'none';
    resultElement.innerHTML = '';
    resultElement.classList.remove('correct', 'incorrect', 'neutral', 'completion');
    
    // 清除输入框
    answerInput.value = '';
    answerInput.focus();
    
    // 获取下一个测试词汇/定理
    currentTerm = getNextTerm();
    
    // 如果没有新题目，显示提示信息并在2秒后自动尝试获取新题目
    if (!currentTerm) {
        termElement.textContent = '暂时没有新题目，请稍等...';
        setTimeout(nextQuestion, 2000);
        return;
    }
    
    // 显示词汇/定理
    termElement.textContent = currentTerm;
    
    // 更新已测试的词汇/定理集合
    const correctSet = correctTerms[currentMode];
    if (correctSet.has(currentTerm)) {
        // 如果已经答对过，显示提示
        resultElement.textContent = '您之前已经答对过这个题目';
        resultElement.classList.add('neutral');
        resultElement.style.display = 'block';
    }
}

// 检查答案是否模糊匹配
function isFuzzyMatch(userAnswer, correctAnswer) {
    // 去除所有空格并转为小写进行比较
    const normalizedUserAnswer = userAnswer.replace(/\s+/g, '').toLowerCase();
    const normalizedCorrectAnswer = correctAnswer.replace(/\s+/g, '').toLowerCase();
    
    // 完全匹配
    if (normalizedUserAnswer === normalizedCorrectAnswer) {
        return true;
    }
    
    // 检查用户答案是否包含正确答案
    if (normalizedUserAnswer.includes(normalizedCorrectAnswer)) {
        return true;
    }
    
    // 检查正确答案是否包含用户答案
    if (normalizedCorrectAnswer.includes(normalizedUserAnswer)) {
        return true;
    }
    
    // 计算编辑距离，允许少量错误
    const editDistance = levenshteinDistance(normalizedUserAnswer, normalizedCorrectAnswer);
    const maxLength = Math.max(normalizedUserAnswer.length, normalizedCorrectAnswer.length);
    
    // 如果编辑距离小于字符串长度的30%，认为是接近的匹配
    return editDistance <= maxLength * 0.3;
}

// 计算编辑距离（Levenshtein距离）
function levenshteinDistance(a, b) {
    const matrix = [];
    
    // 初始化矩阵
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    
    // 填充矩阵
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // 替换
                    matrix[i][j - 1] + 1,     // 插入
                    matrix[i - 1][j] + 1      // 删除
                );
            }
        }
    }
    
    return matrix[b.length][a.length];
}

// 检查答案
function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    
    // 如果输入是"chakan"，则直接显示答案并返回
    if (userAnswer.toLowerCase() === 'chakan') {
        showAnswer();
        return;
    }
    
    const correctAnswer = currentData[currentTerm];
    
    total++;
    
    if (isFuzzyMatch(userAnswer, correctAnswer)) {
        // 答案正确
        score++;
        resultElement.innerHTML = `<p>✓ 正确！标准答案是：${correctAnswer}</p>`;
        resultElement.classList.add('correct');
        resultElement.classList.remove('incorrect', 'neutral');
        
        // 添加到已答对集合
        correctTerms[currentMode].add(currentTerm);
        
        // 从剩余测试词汇/定理中移除
        const index = remainingTerms[currentMode].indexOf(currentTerm);
        if (index !== -1) {
            remainingTerms[currentMode].splice(index, 1);
        }
    } else {
        // 答案错误，添加到错题集
        incorrectTerms[currentMode].add(currentTerm);
        
        resultElement.innerHTML = `<p>✗ 错误！正确答案是：${correctAnswer}</p>`;
        resultElement.classList.add('incorrect');
        resultElement.classList.remove('correct', 'neutral');
    }
    
    resultElement.style.display = 'block';
    updateScore();
    
    // 标记答案已检查
    answerChecked = true;
}

// 显示答案
function showAnswer() {
    const correctAnswer = currentData[currentTerm];
    
    // 添加到已查看答案的题目集
    viewedTerms[currentMode].add(currentTerm);
    
    resultElement.innerHTML = `<p>标准答案是：${correctAnswer}</p>`;
    resultElement.classList.remove('correct', 'incorrect');
    resultElement.classList.add('neutral');
    resultElement.style.display = 'block';
    
    // 标记答案已检查，以便下次回车可以进入下一题
    answerChecked = true;
    
    // 不计入总分
}

// 更新分数显示
function updateScore() {
    scoreElement.textContent = score;
    totalElement.textContent = total;
}