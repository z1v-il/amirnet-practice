// --- Global State ---
let unlearnedWords = [];
let learnedWords = [];
let currentFlashcardWord = null;
let currentQuizWord = null;
let geminiApiKey = localStorage.getItem('gemini_api_key') || '';
let currentAiWordObj = null;

// --- Saved Banks ---
let savedAiSentences = JSON.parse(localStorage.getItem('saved_ai_sentences')) || [];
let savedAiRestatements = JSON.parse(localStorage.getItem('saved_ai_restatements')) || [];
let staticSentIndex = parseInt(localStorage.getItem('static_sent_index')) || 0;
let staticRestIndex = parseInt(localStorage.getItem('static_rest_index')) || 0;

// --- Initialize App ---
function initApp() {
    const savedProgress = localStorage.getItem('amirnet_learned_words');
    learnedWords = savedProgress ? JSON.parse(savedProgress) : [];
    unlearnedWords = allWords.filter(word => !learnedWords.includes(word.eng));
    
    updateStats();
    loadRandomFlashcard();
    loadMultipleChoice();
    renderWordBank();
    updateBankUI();
    
    const selector = document.getElementById('text-selector');
    readingData.forEach((item, index) => {
        let opt = document.createElement('option');
        opt.value = index;
        opt.innerText = `Text ${index + 1}: ${item.title}`;
        selector.appendChild(opt);
    });
    loadSelectedText();

    if(geminiApiKey) {
        document.getElementById('gemini-api-key').value = geminiApiKey;
    }
}

function updateStats() {
    document.getElementById('learned-count').innerText = learnedWords.length;
    document.getElementById('remaining-count').innerText = unlearnedWords.length;
    document.getElementById('bank-learned-count').innerText = learnedWords.length;
    document.getElementById('bank-unlearned-count').innerText = unlearnedWords.length;
}

function updateBankUI() {
    if (document.getElementById('static-sent-num')) 
        document.getElementById('static-sent-num').innerText = staticSentIndex + 1;
    if (document.getElementById('static-rest-num')) 
        document.getElementById('static-rest-num').innerText = staticRestIndex + 1;
}

// --- 1. Flashcards Logic ---
function loadRandomFlashcard() {
    if (unlearnedWords.length === 0) {
        document.getElementById('word-eng').innerText = "🏆";
        document.getElementById('word-heb').innerText = "סיימת הכל!";
        return;
    }
    
    const card = document.getElementById('flashcard');
    const isFlipped = card.classList.contains('is-flipped');
    card.classList.remove('is-flipped');
    
    const delay = isFlipped ? 500 : 50;
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * unlearnedWords.length);
        currentFlashcardWord = unlearnedWords[randomIndex];
        document.getElementById('word-eng').innerText = currentFlashcardWord.eng;
        document.getElementById('word-heb').innerText = currentFlashcardWord.heb;
    }, delay);
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('is-flipped');
}

function markWord(knewIt) {
    if (!currentFlashcardWord || unlearnedWords.length === 0) return;
    if (knewIt) {
        learnedWords.push(currentFlashcardWord.eng);
        localStorage.setItem('amirnet_learned_words', JSON.stringify(learnedWords));
        unlearnedWords = unlearnedWords.filter(w => w.eng !== currentFlashcardWord.eng);
    }
    updateStats();
    renderWordBank();
    loadRandomFlashcard();
    loadMultipleChoice();
}

// --- 2. Multiple Choice Quiz Logic ---
function loadMultipleChoice() {
    const optionsContainer = document.getElementById('mc-options');
    const feedback = document.getElementById('mc-feedback');
    const nextBtn = document.getElementById('mc-next-btn');
    
    optionsContainer.classList.remove('locked');
    optionsContainer.innerHTML = '';
    feedback.innerText = '';
    nextBtn.style.display = 'none';

    if (unlearnedWords.length < 4) {
        document.getElementById('mc-word').innerText = "Not enough words left to quiz!";
        return;
    }

    currentQuizWord = unlearnedWords[Math.floor(Math.random() * unlearnedWords.length)];
    document.getElementById('mc-word').innerText = currentQuizWord.eng;

    let options = [currentQuizWord.heb];
    while(options.length < 4) {
        let randomWrong = allWords[Math.floor(Math.random() * allWords.length)].heb;
        if(!options.includes(randomWrong)) {
            options.push(randomWrong);
        }
    }

    options.sort(() => Math.random() - 0.5);

    options.forEach(opt => {
        let btn = document.createElement('div');
        btn.className = 'mc-option';
        btn.innerText = opt;
        btn.onclick = () => checkQuizAnswer(btn, opt, currentQuizWord.heb, optionsContainer);
        optionsContainer.appendChild(btn);
    });
}

function checkQuizAnswer(selectedBtn, selectedHeb, correctHeb, container) {
    if (container.classList.contains('locked')) return;
    container.classList.add('locked');

    Array.from(container.children).forEach(btn => {
        if (btn.innerText === correctHeb) btn.classList.add('correct');
        if (btn.innerText === selectedHeb && selectedHeb !== correctHeb) btn.classList.add('wrong');
    });

    const feedback = document.getElementById('mc-feedback');
    if (selectedHeb === correctHeb) {
        feedback.innerText = "תשובה נכונה! ✔️ המילה הועברה למאגר המילים שלמדת.";
        feedback.style.color = "var(--success)";
        if (!learnedWords.includes(currentQuizWord.eng)) {
            learnedWords.push(currentQuizWord.eng);
            unlearnedWords = unlearnedWords.filter(w => w.eng !== currentQuizWord.eng);
            localStorage.setItem('amirnet_learned_words', JSON.stringify(learnedWords));
            updateStats();
            renderWordBank();
            if (currentFlashcardWord && currentFlashcardWord.eng === currentQuizWord.eng) {
                loadRandomFlashcard();
            }
        }
    } else {
        feedback.innerText = "טעות. התשובה הנכונה מסומנת בירוק.";
        feedback.style.color = "var(--danger)";
    }
    document.getElementById('mc-next-btn').style.display = 'block';
}

// --- 3. Word Bank Logic ---
function renderWordBank() {
    const unlearnedList = document.getElementById('list-unlearned');
    const learnedList = document.getElementById('list-learned');
    unlearnedList.innerHTML = '';
    learnedList.innerHTML = '';

    unlearnedWords.forEach(w => {
        let li = document.createElement('li');
        li.innerHTML = `<div class="word-info"><strong>${w.eng}</strong><span class="heb">${w.heb}</span></div>`;
        let btn = document.createElement('button');
        btn.className = 'bank-btn';
        btn.innerText = "העבר ל'יודע' ✔️";
        btn.onclick = () => toggleWordStatus(w.eng, true);
        li.appendChild(btn);
        unlearnedList.appendChild(li);
    });

    learnedWords.forEach(engWord => {
        let w = allWords.find(x => x.eng === engWord);
        if(!w) return;
        let li = document.createElement('li');
        li.innerHTML = `<div class="word-info"><strong>${w.eng}</strong><span class="heb">${w.heb}</span></div>`;
        let btn = document.createElement('button');
        btn.className = 'bank-btn';
        btn.style.backgroundColor = 'var(--danger)';
        btn.innerText = "החזר לתרגול ↩️";
        btn.onclick = () => toggleWordStatus(w.eng, false);
        li.appendChild(btn);
        learnedList.appendChild(li);
    });
}

function toggleWordStatus(engWord, setToLearned) {
    if (setToLearned) {
        learnedWords.push(engWord);
        unlearnedWords = unlearnedWords.filter(w => w.eng !== engWord);
    } else {
        learnedWords = learnedWords.filter(w => w !== engWord);
        let wordObj = allWords.find(w => w.eng === engWord);
        if(wordObj) unlearnedWords.push(wordObj);
    }
    localStorage.setItem('amirnet_learned_words', JSON.stringify(learnedWords));
    updateStats();
    renderWordBank();
}

function resetProgress() {
    if(confirm("למחוק את כל ההיסטוריה ולהתחיל מאפס?")) {
        localStorage.removeItem('amirnet_learned_words');
        learnedWords = [];
        unlearnedWords = [...allWords];
        updateStats();
        renderWordBank();
        loadRandomFlashcard();
        loadMultipleChoice();
    }
}

// --- 4. Reading Comprehension Logic ---
function loadSelectedText() {
    const index = document.getElementById('text-selector').value;
    const data = readingData[index];
    const textBox = document.getElementById('reading-text-box');
    textBox.innerHTML = `<h3>${data.title}</h3>`;
    data.paragraphs.forEach(p => {
        let pEl = document.createElement('p');
        pEl.innerText = p;
        textBox.appendChild(pEl);
    });

    const container = document.getElementById('quiz-container');
    container.innerHTML = '';
    data.questions.forEach((q, qIndex) => {
        let block = document.createElement('div');
        block.className = 'question-block';
        let title = document.createElement('h4');
        title.innerText = q.question;
        block.appendChild(title);
        let optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        q.options.forEach((opt, oIndex) => {
            let optElement = document.createElement('div');
            optElement.className = 'option';
            optElement.innerText = opt;
            optElement.onclick = () => checkReadingAnswer(optElement, oIndex, q.correctIndex, optionsDiv);
            optionsDiv.appendChild(optElement);
        });
        block.appendChild(optionsDiv);
        let feedback = document.createElement('div');
        feedback.className = 'feedback';
        block.appendChild(feedback);
        container.appendChild(block);
    });
}

function checkReadingAnswer(element, selectedIndex, correctIndex, optionsContainer) {
    if (optionsContainer.classList.contains('answered')) return;
    optionsContainer.classList.add('answered');
    let feedbackElement = optionsContainer.nextSibling;
    const allOptions = optionsContainer.children;
    allOptions[correctIndex].classList.add('correct');

    if (selectedIndex === correctIndex) {
        feedbackElement.innerText = "Correct! ✔️";
        feedbackElement.style.color = "var(--success)";
    } else {
        element.classList.add('wrong');
        feedbackElement.innerText = "Incorrect. The right answer is marked in green.";
        feedbackElement.style.color = "var(--danger)";
    }
}

// --- Navigation Main ---
function switchMainTab(mainTabId) {
    document.querySelectorAll('.main-nav button').forEach(b => b.classList.remove('active'));
    document.getElementById('main-btn-' + mainTabId).classList.add('active');
    document.querySelectorAll('.sub-nav').forEach(nav => nav.style.display = 'none');
    document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
    
    const subNav = document.getElementById('sub-nav-' + mainTabId);
    if (subNav) subNav.style.display = 'flex';

    if (mainTabId === 'words') switchSubTab('vocab');
    if (mainTabId === 'restate') switchSubTab('restate-container');
    if (mainTabId === 'exams') { switchSubTab('exams-container'); initExamTab(); }
}

function switchSubTab(tabId) {
    document.querySelectorAll('.sub-nav button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    const btn = document.getElementById('btn-' + tabId);
    if(btn) btn.classList.add('active');
}

window.onload = initApp;

document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
});

// --- API Auth ---
function saveApiKey() {
    const key = document.getElementById('gemini-api-key').value.trim();
    if (key) {
        geminiApiKey = key;
        localStorage.setItem('gemini_api_key', geminiApiKey);
        alert('המפתח נשמר בהצלחה! 🚀');
    } else { alert('יש להזין מפתח תקין.'); }
}

// ==========================================
// --- SMART API FETCHER (Billing Optimized) ---
// ==========================================
const FALLBACK_MODELS = [
    'gemini-2.5-flash', // הכי משתלם ומהיר למשתמשי Billing
    'gemini-2.0-flash',  
    'gemini-2.5-pro' // גיבוי חזק מאוד
];

async function fetchWithRetry(baseUrl, options, maxCycles = 2) {
    for (let cycle = 0; cycle < maxCycles; cycle++) {
        for (let i = 0; i < FALLBACK_MODELS.length; i++) {
            const currentModel = FALLBACK_MODELS[i];
            const url = baseUrl.replace(/gemini-[0-9\.]+(-flash|-pro|-flash-lite)?/, currentModel);
            
            try {
                const response = await fetch(url, options);
                if (response.ok) {
                    if (cycle > 0 || i > 0) console.log(`✅ הצלחה עם מודל: ${currentModel}`);
                    return response; 
                }
                
                if (response.status === 429 || response.status === 503) {
                    console.warn(`מודל ${currentModel} חסום (429/503). עובר לבא...`);
                    continue; 
                }
                
                if (response.status === 400) {
                    throw new Error("מפתח API לא תקין (400).");
                }
                
                if (response.status === 404) continue;
                
                throw new Error(`שגיאת שרת (${response.status})`);
                
            } catch (error) {
                if (error.message.includes("400")) throw error; 
            }
        }
        
        if (cycle < maxCycles - 1) {
            const waitTime = 3000; // המתנה קצרה מאוד בגלל ה-Billing
            console.warn(`ממתין ${waitTime/1000} שניות ומנסה שוב...`);
            await new Promise(r => setTimeout(r, waitTime));
        } else {
            throw new Error("שגיאת תקשורת מול גוגל. נסה שוב.");
        }
    }
}

// ==========================================
// --- 5. Sentences (Live AI & Static) ---
// ==========================================
async function generateAISentence() {
    if (!geminiApiKey) { alert("חסר מפתח API."); return; }
    
    const navEl = document.getElementById('static-sent-nav');
    if (navEl) navEl.style.display = 'none';
    window.lastQuestionType = null;
    document.getElementById('ai-word-display').innerText = '';

    const validUnlearnedWords = unlearnedWords.filter(w => w.eng && w.eng.trim().length > 2);
    if (validUnlearnedWords.length === 0) { alert("אין יותר מילים מתאימות לתרגול!"); return; }

    currentAiWordObj = validUnlearnedWords[Math.floor(Math.random() * validUnlearnedWords.length)];
    const targetWord = currentAiWordObj.eng;

    document.getElementById('ai-quiz-content').style.display = 'none';
    document.getElementById('generate-ai-btn').style.display = 'none';
    
    const loadingEl = document.getElementById('ai-loading');
    loadingEl.innerText = 'ה-AI כותב משפט...';
    loadingEl.style.display = 'block';
    document.getElementById('ai-feedback').innerHTML = ''; 

    // פרומפט ממוטב תקציב - מבקש במפורש הסבר סופר-קצר כדי לחסוך טוקנים (כסף)
    const promptText = `Expert test writer for Israeli Amirnet English exam. Generate 1 "Sentence Completion" question (Upper-B2/C1). RULE 1: Academic sentence (15-25 words) testing the word "${targetWord}". RULE 2: Keep the HEBREW explanation under 12 words to save tokens. Format EXACTLY as raw JSON: { "sentence": "...", "options": [{"word": "opt1", "translation": "Hebrew"}, ...], "correctWord": "${targetWord}", "explanation": "Short Hebrew explanation" }`;

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;
        const response = await fetchWithRetry(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
        });

        const data = await response.json();
        let jsonText = data.candidates[0].content.parts[0].text;
        jsonText = jsonText.replace(/^```(json)?\n?/gm, '').replace(/\n?```$/gm, '').trim();
        const jsonMatch = jsonText.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
        if (jsonMatch) jsonText = jsonMatch[0];
        
        const result = JSON.parse(jsonText.replace(/,\s*([\]}])/g, '$1'));
        
        savedAiSentences.push(result);
        localStorage.setItem('saved_ai_sentences', JSON.stringify(savedAiSentences));
        renderAiQuiz(result);
    } catch (error) {
        console.error(error);
        alert("תקלה מול ה-AI: " + error.message);
    } finally {
        loadingEl.style.display = 'none';
        document.getElementById('generate-ai-btn').style.display = 'inline-block';
    }
}

function loadStaticSentence() {
    if (staticSentIndex >= staticSentences.length) {
        alert("כל הכבוד! סיימת את כל השאלות במאגר. נסה לייצר שאלות חדשות ב-AI.");
        return;
    }
    const q = staticSentences[staticSentIndex];
    if (!q || !q.options || !Array.isArray(q.options)) {
        alert("יש שגיאה במבנה השאלה בקובץ data.js. פתח Console לבדיקה.");
        console.error("Malformed question:", q);
        return;
    }

    const getHebrew = (engWord) => {
        if (!engWord || typeof engWord !== 'string') return "חסר במילון";
        if (typeof allWords !== 'undefined') {
            let match = allWords.find(w => 
                w && w.eng && typeof w.eng === 'string' && 
                w.eng.toLowerCase().trim() === engWord.toLowerCase().trim()
            );
            return match ? match.heb : "חסר במילון";
        }
        return "חסר במילון";
    };

    const mappedOptions = q.options.map(o => {
        if (typeof o === 'object' && o !== null) {
            let w = o.word || o.Word;
            let t = o.translation || o.Translation;
            return { word: w, translation: t || getHebrew(w) };
        }
        return { word: o, translation: getHebrew(o) };
    });

    let correctStr = q.correctWord || q.CorrectWord;
    if (!correctStr && q.correctIndex !== undefined) {
        let correctOpt = q.options[q.correctIndex];
        correctStr = typeof correctOpt === 'object' ? (correctOpt.word || correctOpt.Word) : correctOpt;
    }

    const formatted = {
        sentence: q.sentence || q.Sentence,
        options: mappedOptions,
        correctWord: correctStr,
        explanation: q.explanation || q.Explanation
    };
    
    window.lastQuestionType = 'static-sent';
    renderAiQuiz(formatted);
    
    const displayEl = document.getElementById('ai-word-display');
    if (displayEl) displayEl.innerText = `מאגר מובנה - שאלה ${staticSentIndex + 1} מתוך ${staticSentences.length}`;
    const navEl = document.getElementById('static-sent-nav');
    if (navEl) navEl.style.display = 'flex';
    updateBankUI();
}

function renderAiQuiz(data) {
    document.getElementById('ai-quiz-content').style.display = 'block';
    document.getElementById('ai-sentence').innerText = data.sentence || data.Sentence;
    const optionsContainer = document.getElementById('ai-options');
    optionsContainer.innerHTML = '';
    optionsContainer.classList.remove('locked');
    document.getElementById('ai-feedback').innerHTML = ''; 

    optionsContainer.dataset.explanation = data.explanation || data.Explanation || "לא סופק הסבר.";
    const optionsArray = data.options || data.Options || [];
    const shuffledOptions = [...optionsArray].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(opt => {
        let btn = document.createElement('div');
        btn.className = 'mc-option';
        
        if (typeof opt === 'string') {
            btn.dataset.word = opt;
            btn.dataset.translation = "חסר במילון";
        } else {
            btn.dataset.word = opt.word || opt.Word;
            btn.dataset.translation = opt.translation || opt.Translation || ""; 
        }
        
        btn.innerHTML = `<span style="font-size:1.2rem; font-weight:bold;">${btn.dataset.word}</span>`;
        btn.onclick = () => checkAiAnswer(btn, btn.dataset.word, data.correctWord || data.CorrectWord, optionsContainer);
        optionsContainer.appendChild(btn);
    });
}

function checkAiAnswer(selectedBtn, selectedOptStr, correctOpt, container) {
    if (container.classList.contains('locked')) return;
    container.classList.add('locked');

    Array.from(container.children).forEach(btn => {
        const word = btn.dataset.word;
        const trans = btn.dataset.translation;
        const transHtml = trans ? `<br><span style="font-size:1rem; opacity:0.9; margin-top:5px; display:block; color: #94a3b8;">${trans}</span>` : '';
        btn.innerHTML = `<span style="font-size:1.2rem; font-weight:bold;">${word}</span>${transHtml}`;

        if (word === correctOpt) btn.classList.add('correct');
        if (word === selectedOptStr && selectedOptStr !== correctOpt) btn.classList.add('wrong');
    });

    const feedback = document.getElementById('ai-feedback');
    const explanation = container.dataset.explanation;
    
    if (selectedOptStr === correctOpt) {
        feedback.innerHTML = `נכון מאוד! ✔️<br><br><div style="font-size: 1rem; color: var(--text-dark); margin-top: 10px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px;"><strong style="color: var(--secondary);">ההקשר:</strong> ${explanation}</div>`;
        feedback.style.color = "var(--success)";
        
        if (!learnedWords.includes(correctOpt)) {
            learnedWords.push(correctOpt);
            unlearnedWords = unlearnedWords.filter(w => w.eng !== correctOpt);
            localStorage.setItem('amirnet_learned_words', JSON.stringify(learnedWords));
            updateStats();
            renderWordBank();
        }
    } else {
        feedback.innerHTML = `טעות.<br><br><div style="font-size: 1rem; color: var(--text-dark); margin-top: 10px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px;"><strong style="color: var(--secondary);">למה זו התשובה?</strong> ${explanation}</div>`;
        feedback.style.color = "var(--danger)";
    }
}

// ==========================================
// --- 6. Restatements (Live AI & Static) ---
// ==========================================

async function generateRestatement() {
    if (!geminiApiKey) { alert("חסר מפתח API."); return; }

    const navEl = document.getElementById('static-rest-nav');
    if (navEl) navEl.style.display = 'none';
    window.lastQuestionType = null;
    document.getElementById('restate-word-display').innerText = '';

    document.getElementById('restate-quiz-content').style.display = 'none';
    document.getElementById('generate-restate-btn').style.display = 'none';
    
    const loadingEl = document.getElementById('restate-loading');
    loadingEl.innerText = 'ה-AI מנסח שאלה אקדמית...';
    loadingEl.style.display = 'block';
    
    document.getElementById('restate-feedback').innerHTML = ''; 

    // פרומפט ממוטב תקציב ורמה גבוהה
    const promptText = `Expert Amirnet test writer. Generate 1 "Restatement" question (Upper-B2/C1). RULES: 1. Academic original sentence (18-25 words). 2. CRITICAL: The correct restatement MUST alter the syntactic structure (e.g., flip clauses), NOT just swap synonyms. 3. All 4 options MUST be roughly the same length. 4. Keep HEBREW explanation under 12 words to save tokens. Format raw JSON: { "original": "...", "options": ["Correct option...", "Incorrect 1...", "Incorrect 2...", "Incorrect 3..."], "explanation": "Short Hebrew explanation" }`;

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;
        const response = await fetchWithRetry(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
        });

        const data = await response.json();
        let jsonText = data.candidates[0].content.parts[0].text;
        jsonText = jsonText.replace(/^```(json)?\n?/gm, '').replace(/\n?```$/gm, '').trim();
        const jsonMatch = jsonText.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
        if (jsonMatch) jsonText = jsonMatch[0];
        
        const result = JSON.parse(jsonText.replace(/,\s*([\]}])/g, '$1'));
        
        savedAiRestatements.push(result);
        localStorage.setItem('saved_ai_restatements', JSON.stringify(savedAiRestatements));
        renderRestatementQuiz(result);
    } catch (error) {
        console.error(error);
        alert("תקלה מול ה-AI: " + error.message);
    } finally {
        loadingEl.style.display = 'none';
        document.getElementById('generate-restate-btn').style.display = 'inline-block';
    }
}

function loadStaticRestatement() {
    if (staticRestIndex >= staticRestatements.length) {
        alert("סיימת את כל הניסוחים מחדש במאגר!");
        return;
    }
    const q = staticRestatements[staticRestIndex];
    const formatted = {
        original: q.original || q.Original,
        options: q.options || q.Options,
        correctIndex: q.correctIndex !== undefined ? q.correctIndex : 0,
        explanation: q.explanation || q.Explanation
    };
    window.lastQuestionType = 'static-rest';
    renderRestatementQuiz(formatted);
    
    const displayEl = document.getElementById('restate-word-display');
    if (displayEl) displayEl.innerText = `מאגר מובנה - שאלה ${staticRestIndex + 1} מתוך ${staticRestatements.length}`;
    const navEl = document.getElementById('static-rest-nav');
    if (navEl) navEl.style.display = 'flex';
    updateBankUI();
}

function renderRestatementQuiz(data) {
    document.getElementById('restate-quiz-content').style.display = 'block';
    document.getElementById('restate-original').innerText = data.original || data.Original;
    const optionsContainer = document.getElementById('restate-options');
    optionsContainer.innerHTML = '';
    optionsContainer.classList.remove('answered');
    document.getElementById('restate-feedback').innerHTML = '';
    
    optionsContainer.dataset.explanation = data.explanation || data.Explanation || "לא סופק הסבר.";
    const optionsArray = data.options || data.Options || [];
    let correctText = optionsArray[data.correctIndex !== undefined ? data.correctIndex : 0];

    // אלגוריתם ערבוב אגרסיבי למניעת תשובה נכונה תמיד במיקום 1
    let optionsObjects = optionsArray.map(text => ({ text: text, isCorrect: text === correctText }));
    for (let i = optionsObjects.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsObjects[i], optionsObjects[j]] = [optionsObjects[j], optionsObjects[i]];
    }

    optionsObjects.forEach((opt, index) => {
        let optElement = document.createElement('div');
        optElement.className = 'option';
        optElement.style.fontSize = '1.1rem';
        optElement.innerText = opt.text;
        optElement.onclick = () => checkRestatementAnswer(optElement, index, optionsObjects.findIndex(o => o.isCorrect), optionsContainer);
        optionsContainer.appendChild(optElement);
    });
}

function checkRestatementAnswer(element, selectedIndex, correctIndex, optionsContainer) {
    if (optionsContainer.classList.contains('answered')) return;
    optionsContainer.classList.add('answered');
    const allOptions = optionsContainer.children;
    allOptions[correctIndex].classList.add('correct');

    const feedback = document.getElementById('restate-feedback');
    const explanation = optionsContainer.dataset.explanation;

    if (selectedIndex === correctIndex) {
        feedback.innerHTML = `מדויק! ✔️<br><br><div style="font-size: 1rem; color: var(--text-dark); font-weight: normal; margin-top: 10px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px;"><strong style="color: var(--secondary);">הסבר:</strong> ${explanation}</div>`;
        feedback.style.color = "var(--success)";
    } else {
        element.classList.add('wrong');
        feedback.innerHTML = `פספסת.<br><br><div style="font-size: 1rem; color: var(--text-dark); font-weight: normal; margin-top: 10px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px;"><strong style="color: var(--secondary);">למה התשובה הירוקה נכונה?</strong> ${explanation}</div>`;
        feedback.style.color = "var(--danger)";
    }
}

// --- Navigation for Static Banks ---
function navigateStatic(type, direction) {
    if (type === 'sent') {
        staticSentIndex += direction;
        if (staticSentIndex < 0) staticSentIndex = 0;
        if (staticSentIndex >= staticSentences.length) staticSentIndex = staticSentences.length - 1;
        localStorage.setItem('static_sent_index', staticSentIndex);
        loadStaticSentence();
    } 
    else if (type === 'rest') {
        staticRestIndex += direction;
        if (staticRestIndex < 0) staticRestIndex = 0;
        if (staticRestIndex >= staticRestatements.length) staticRestIndex = staticRestatements.length - 1;
        localStorage.setItem('static_rest_index', staticRestIndex);
        loadStaticRestatement();
    }
}

function exportAiBank() {
    const exportData = { sentences: savedAiSentences, restatements: savedAiRestatements };
    console.clear();
    console.log("// --- העתק את כל הבלוק הזה לקובץ data.js שלך ---");
    console.log("const aiGeneratedBank = " + JSON.stringify(exportData, null, 4) + ";");
    alert(`המאגר יוצא בהצלחה ל-Console (F12)!\nלחץ על כפתור ה-Copy שם והדבק.`);
}

// ==========================================
// --- 7. Full Amirnet Simulation Engine (FAST MODE) ---
// ==========================================

let examTimer;
let examTimeLeft;
let examState = { parts: [], currentPartIndex: 0, currentQuestionIndex: 0, correctAnswers: 0, totalQuestions: 23 };

function initExamTab() {
    document.getElementById('exam-setup').style.display = 'block';
    document.getElementById('exam-active').style.display = 'none';
    document.getElementById('exam-results').style.display = 'none';
}

async function fetchGeminiData(promptText, stepName) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;
    
    const response = await fetchWithRetry(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
    });

    const data = await response.json();
    let jsonText = data.candidates[0].content.parts[0].text;
    
    jsonText = jsonText.replace(/^```(json)?\n?/gm, '').replace(/\n?```$/gm, '').trim();
    const jsonMatch = jsonText.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
    if (jsonMatch) jsonText = jsonMatch[0];
    
    return JSON.parse(jsonText.replace(/,\s*([\]}])/g, '$1'));
}

async function generateFullExam() {
    if (!geminiApiKey) { alert("חסר מפתח API."); return; }
    document.getElementById('btn-generate-exam').style.display = 'none';
    document.getElementById('exam-loading').style.display = 'block';

    // פרומפטים ממוטבים למבחן המלא (Token Saving & High Quality)
    const promptSentences = `Expert Amirnet test writer. Generate JSON array of 12 "Sentence Completion" questions (Upper-B2/C1). RULES: 1. Academic sentences (15-25 words). 2. Blank '___' tests a challenging word. 3. Format raw JSON array: [ { "sentence": "...", "options": ["CorrectWord", "Dist1", "Dist2", "Dist3"], "correctIndex": 0, "explanation": "Short Hebrew explanation" } ] IMPORTANT: Exactly 12 objects. First option (index 0) MUST be correct. Keep explanation under 10 words.`;
    
    const promptRestates = `Expert Amirnet test writer. Generate JSON array of 6 "Restatement" questions (Upper-B2/C1). RULES: 1. Academic original (18-25 words). 2. CRITICAL: Correct restatement MUST significantly alter syntactic structure (e.g. flip clauses), NOT just swap synonyms. 3. All 4 options roughly same word count. 4. Format raw JSON array: [ { "original": "...", "options": ["Correct restatement.", "Dist 1.", "Dist 2.", "Dist 3."], "correctIndex": 0, "explanation": "Short Hebrew explanation" } ] IMPORTANT: Exactly 6 objects. First option (index 0) MUST be correct. Keep explanation under 12 words.`;     
    
    const promptReading = `Expert Amirnet test writer. Generate JSON object for "Reading Comprehension". RULES: 1. Standard academic text (3 short paragraphs). 2. Generate 5 questions. 3. All 4 options roughly same length per question. 4. Format raw JSON object: { "title": "Academic Title", "paragraphs": ["Par 1...", "Par 2...", "Par 3..."], "questions": [ { "question": "...", "options": ["Correct answer.", "Dist 1.", "Dist 2.", "Dist 3."], "correctIndex": 0, "explanation": "Short Hebrew explanation" } ] } IMPORTANT: First option (index 0) MUST be correct. Keep explanations under 12 words.`;

    // השהיה מינימלית בלבד (1.5 שניות) למניעת קריסות רשת מקומיות
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    try {
        const loadingProgress = document.getElementById('exam-loading-progress');
        
        loadingProgress.innerText = "שלב 1/3: כותב שאלות השלמת משפטים... ⏳";
        const sentencesData = await fetchGeminiData(promptSentences, "משפטים");
        await sleep(1500); 
        
        loadingProgress.innerText = "שלב 2/3: כותב שאלות ניסוח מחדש... ⏳";
        const restatesData = await fetchGeminiData(promptRestates, "ניסוחים");
        await sleep(1500); 
        
        loadingProgress.innerText = "שלב 3/3: כותב קטע קריאה אקדמי... ⏳";
        const readingDataAI = await fetchGeminiData(promptReading, "קריאה");

        examState.parts = [
            { title: "פרק 1: השלמת משפטים", time: 4 * 60, type: "sentence", qs: sentencesData.slice(0, 4) },
            { title: "פרק 2: השלמת משפטים", time: 4 * 60, type: "sentence", qs: sentencesData.slice(4, 8) },
            { title: "פרק 3: הבנת הנקרא", time: 15 * 60, type: "reading", text: readingDataAI, qs: readingDataAI.questions },
            { title: "פרק 4: ניסוח מחדש", time: 6 * 60, type: "restate", qs: restatesData.slice(0, 3) },
            { title: "פרק 5: ניסוח מחדש", time: 6 * 60, type: "restate", qs: restatesData.slice(3, 6) },
            { title: "פרק 6: השלמת משפטים", time: 4 * 60, type: "sentence", qs: sentencesData.slice(8, 12) }
        ];
        examState.currentPartIndex = 0;
        examState.correctAnswers = 0;
        startExam();
    } catch (error) {
        console.error(error);
        alert("הייתה בעיה בהרכבת המבחן: " + error.message);
        document.getElementById('btn-generate-exam').style.display = 'block';
        document.getElementById('exam-loading').style.display = 'none';
    }
}

function startExam() {
    document.getElementById('exam-setup').style.display = 'none';
    document.getElementById('exam-active').style.display = 'block';
    loadExamPart();
}

function loadExamPart() {
    clearInterval(examTimer);
    examState.currentQuestionIndex = 0;
    const part = examState.parts[examState.currentPartIndex];
    document.getElementById('exam-part-title').innerText = part.title;
    examTimeLeft = part.time;
    updateExamTimerDisplay();
    examTimer = setInterval(() => {
        examTimeLeft--;
        updateExamTimerDisplay();
        if (examTimeLeft <= 0) {
            clearInterval(examTimer);
            alert("⏳ נגמר הזמן לפרק זה! עובר לפרק הבא.");
            nextExamPart();
        }
    }, 1000);
    renderExamQuestion();
}

function updateExamTimerDisplay() {
    const m = String(Math.floor(examTimeLeft / 60)).padStart(2, '0');
    const s = String(examTimeLeft % 60).padStart(2, '0');
    document.getElementById('exam-timer').innerText = `${m}:${s}`;
}

function renderExamQuestion() {
    const part = examState.parts[examState.currentPartIndex];
    const qContainer = document.getElementById('exam-question-area');
    qContainer.innerHTML = '';
    qContainer.classList.remove('answered');
    document.getElementById('btn-exam-next').style.display = 'none';
    document.getElementById('exam-progress').innerText = `שאלה ${examState.currentQuestionIndex + 1} מתוך ${part.qs.length}`;
    
    const q = part.qs[examState.currentQuestionIndex];
    let rawOptions = q.options || q.Options || [];
    let correctText = rawOptions[0]; 

    // אלגוריתם ערבוב אגרסיבי גם במבחן המלא
    let optionsObjects = rawOptions.map(text => ({ text: text, isCorrect: text === correctText }));
    for (let i = optionsObjects.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsObjects[i], optionsObjects[j]] = [optionsObjects[j], optionsObjects[i]];
    }

    const grid = document.createElement('div');
    grid.className = (part.type === 'sentence') ? 'mc-grid' : 'options';
    if (part.type !== 'sentence') {
        grid.style.display = 'flex'; grid.style.flexDirection = 'column'; grid.style.gap = '10px';
    }

    optionsObjects.forEach(opt => {
        let btn = document.createElement('div');
        btn.className = (part.type === 'sentence') ? 'mc-option' : 'option';
        if (part.type === 'sentence') {
            btn.innerHTML = `<span style="font-size:1.2rem; font-weight:bold;">${opt.text}</span>`;
            btn.style.minHeight = '60px';
        } else {
            btn.innerText = opt.text;
            btn.style.direction = 'ltr'; btn.style.textAlign = 'left'; btn.style.fontSize = '1.1rem';
        }
        btn.dataset.val = opt.text;
        btn.onclick = () => handleExamClick(grid, btn, opt.text, correctText, q.explanation);
        grid.appendChild(btn);
    });

    const feedbackDiv = document.createElement('div');
    feedbackDiv.id = "exam-q-feedback";
    feedbackDiv.className = "feedback-box";
    feedbackDiv.style.marginTop = "20px";

    if (part.type === 'reading') {
        const splitContainer = document.createElement('div');
        splitContainer.className = 'reading-split-container';

        const textSide = document.createElement('div');
        textSide.className = 'reading-text-side';
        part.text.paragraphs.forEach(p => {
            let pEl = document.createElement('p');
            pEl.innerText = p;
            textSide.appendChild(pEl);
        });

        const qSide = document.createElement('div');
        qSide.className = 'reading-question-side';
        qSide.innerHTML = `<h4 style="direction: ltr; font-size: 1.2rem; color: var(--text-dark); margin-bottom: 15px;">${q.question || q.Question}</h4>`;
        
        qSide.appendChild(grid);
        qSide.appendChild(feedbackDiv);

        splitContainer.appendChild(textSide);
        splitContainer.appendChild(qSide);
        qContainer.appendChild(splitContainer);

    } else {
        let questionHtml = '';
        if (part.type === 'sentence') {
            questionHtml = `<p style="font-size: 1.5rem; direction: ltr; font-family: 'Georgia'; line-height: 1.6;">${q.sentence || q.Sentence}</p>`;
        } else if (part.type === 'restate') {
            questionHtml = `<div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 12px; margin-bottom: 25px; border-left: 5px solid var(--secondary);"><p style="font-size: 1.3rem; font-weight: bold; direction: ltr; font-family: 'Georgia'; color: white; margin: 0;">${q.original || q.Original}</p></div>`;
        }
        
        qContainer.innerHTML = questionHtml;
        qContainer.appendChild(grid);
        qContainer.appendChild(feedbackDiv);
    }
}

function handleExamClick(grid, selectedBtn, selectedText, correctText, explanation) {
    if (grid.classList.contains('answered')) return;
    grid.classList.add('answered');

    Array.from(grid.children).forEach(child => {
        let childText = child.dataset.val;
        if (childText === correctText) child.classList.add('correct');
        if (child === selectedBtn && selectedText !== correctText) child.classList.add('wrong');
    });

    const feedbackDiv = document.getElementById('exam-q-feedback');
    const expText = explanation ? `<br><span style="font-size:0.9rem; color:var(--text-muted); font-weight:normal;">${explanation}</span>` : '';

    if (selectedText === correctText) {
        examState.correctAnswers++;
        feedbackDiv.innerHTML = `נכון! ✔️ ${expText}`;
        feedbackDiv.style.color = "var(--success)";
    } else {
        feedbackDiv.innerHTML = `טעות ❌ ${expText}`;
        feedbackDiv.style.color = "var(--danger)";
    }
    document.getElementById('btn-exam-next').style.display = 'inline-block';
}

function nextExamQuestion() {
    examState.currentQuestionIndex++;
    if (examState.currentQuestionIndex >= examState.parts[examState.currentPartIndex].qs.length) {
        nextExamPart();
    } else {
        renderExamQuestion();
    }
}

function nextExamPart() {
    examState.currentPartIndex++;
    if (examState.currentPartIndex >= examState.parts.length) {
        finishExam();
    } else {
        loadExamPart();
    }
}

function finishExam() {
    clearInterval(examTimer);
    document.getElementById('exam-active').style.display = 'none';
    document.getElementById('exam-results').style.display = 'block';
    const rawScore = Math.round(50 + (examState.correctAnswers / examState.totalQuestions) * 100);
    const scoreEl = document.getElementById('exam-final-score');
    scoreEl.innerText = rawScore;
    if (rawScore >= 120) scoreEl.style.color = 'var(--success)';
    else if (rawScore >= 100) scoreEl.style.color = 'var(--warning)';
    else scoreEl.style.color = 'var(--danger)';
}