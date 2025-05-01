// 从Markdown文件中解析词汇和定理数据
const vocabData = {
    "homogeneous": "齐次的",
    "coefficient": "系数",
    "recurrence": "递推",
    "injection(one-to-one)": "单射",
    "surjection(onto)": "满射",
    "bijection(one-to-one correspondence)": "双射"
};

const theoremData = {
    "the principle of inclusion- exclusion": "容斥原理"
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
                return term;
            }
        }
    }
    
    // 最后从剩余词汇/定理中选择第一个
    return currentRemaining[0];
}

// 显示测试完成信息
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
        nextQuestion();
    });
    
    document.getElementById('exit-btn').addEventListener('click', () => {
        // 显示退出信息
        termElement.textContent = '感谢使用！';
        resultElement.innerHTML = '<p>您已退出测试。刷新页面可重新开始。</p>';
        nextButton.style.display = 'none';
    });
}

// 恢复UI
function restoreUI() {
    answerInput.style.display = 'block';
    checkButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    nextButton.textContent = '下一题';
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
    
    // 获取新词汇/定理
    currentTerm = getNextTerm();
    
    if (currentTerm) {
        termElement.textContent = currentTerm;
    } else if (remainingTerms[currentMode].length > 0) {
        // 如果还有未测试的词汇/定理，但没有获取到新题目（可能是因为暂时没有可用的题目）
        termElement.textContent = '暂时没有新题目，请稍后再试';
        setTimeout(nextQuestion, 2000); // 2秒后自动尝试获取新题目
    }
    // 如果所有词汇/定理都已测试完毕，showCompletionMessage 已经处理了 UI
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