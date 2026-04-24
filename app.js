// --- Global State ---
let unlearnedWords = [];
let learnedWords = [];
let currentFlashcardWord = null;
let currentQuizWord = null;

// --- Initialize App ---
function initApp() {
    // Cache loading from localStorage
    const savedProgress = localStorage.getItem('amirnet_learned_words');
    learnedWords = savedProgress ? JSON.parse(savedProgress) : [];
    
    // Filter unlearned words from the master list (allWords comes from data.js)
    unlearnedWords = allWords.filter(word => !learnedWords.includes(word.eng));
    
    updateStats();
    loadRandomFlashcard();
    loadMultipleChoice();
    renderWordBank();
    
    // Setup Reading Dropdown
    const selector = document.getElementById('text-selector');
    readingData.forEach((item, index) => {
        let opt = document.createElement('option');
        opt.value = index;
        opt.innerText = `Text ${index + 1}: ${item.title}`;
        selector.appendChild(opt);
    });
    loadSelectedText();

    initAiTab();
}

function updateStats() {
    document.getElementById('learned-count').innerText = learnedWords.length;
    document.getElementById('remaining-count').innerText = unlearnedWords.length;
    document.getElementById('bank-learned-count').innerText = learnedWords.length;
    document.getElementById('bank-unlearned-count').innerText = unlearnedWords.length;
}

// --- 1. Flashcards Logic ---
function loadRandomFlashcard() {
    if (unlearnedWords.length === 0) {
        document.getElementById('word-eng').innerText = "🏆";
        document.getElementById('word-heb').innerText = "סיימת הכל!";
        return;
    }
    const card = document.getElementById('flashcard');
    card.classList.remove('is-flipped');
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * unlearnedWords.length);
        currentFlashcardWord = unlearnedWords[randomIndex];
        document.getElementById('word-eng').innerText = currentFlashcardWord.eng;
        document.getElementById('word-heb').innerText = currentFlashcardWord.heb;
    }, 200);
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('is-flipped');
}

function markWord(knewIt) {
    if (!currentFlashcardWord || unlearnedWords.length === 0) return;

    if (knewIt) {
        // Add to cache
        learnedWords.push(currentFlashcardWord.eng);
        localStorage.setItem('amirnet_learned_words', JSON.stringify(learnedWords));
        unlearnedWords = unlearnedWords.filter(w => w.eng !== currentFlashcardWord.eng);
    }
    updateStats();
    renderWordBank();
    loadRandomFlashcard();
    loadMultipleChoice(); // Refresh quiz word too
}

// --- 2. Multiple Choice Quiz Logic ---
// --- 2. Multiple Choice Quiz Logic ---
function loadMultipleChoice() {
    const optionsContainer = document.getElementById('mc-options');
    const feedback = document.getElementById('mc-feedback');
    const nextBtn = document.getElementById('mc-next-btn');
    
    // הנה השורה שפותחת את המנעול לשאלה החדשה!
    optionsContainer.classList.remove('locked');

    optionsContainer.innerHTML = '';
    feedback.innerText = '';
    nextBtn.style.display = 'none';

    if (unlearnedWords.length < 4) {
        document.getElementById('mc-word').innerText = "Not enough words left to quiz!";
        return;
    }

    // Pick a correct word
    currentQuizWord = unlearnedWords[Math.floor(Math.random() * unlearnedWords.length)];
    document.getElementById('mc-word').innerText = currentQuizWord.eng;

    // Pick 3 random wrong answers from the FULL list (to make it hard)
    let options = [currentQuizWord.heb];
    while(options.length < 4) {
        let randomWrong = allWords[Math.floor(Math.random() * allWords.length)].heb;
        if(!options.includes(randomWrong)) {
            options.push(randomWrong);
        }
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    // Create buttons
    options.forEach(opt => {
        let btn = document.createElement('div');
        btn.className = 'mc-option';
        btn.innerText = opt;
        btn.onclick = () => checkQuizAnswer(btn, opt, currentQuizWord.heb, optionsContainer);
        optionsContainer.appendChild(btn);
    });
}

function checkQuizAnswer(selectedBtn, selectedHeb, correctHeb, container) {
    // מונע לחיצה כפולה אחרי שכבר ענית
    if (container.classList.contains('locked')) return;
    container.classList.add('locked');

    // צביעת התשובות
    Array.from(container.children).forEach(btn => {
        if (btn.innerText === correctHeb) btn.classList.add('correct');
        if (btn.innerText === selectedHeb && selectedHeb !== correctHeb) btn.classList.add('wrong');
    });

    const feedback = document.getElementById('mc-feedback');
    
    // אם התשובה נכונה - מחברים למערכת הראשית
    if (selectedHeb === correctHeb) {
        feedback.innerText = "תשובה נכונה! ✔️ המילה הועברה למאגר המילים שלמדת.";
        feedback.style.color = "var(--success)";
        
        // מוודאים שהמילה עוד לא ברשימת הידועים לפני שמוסיפים
        if (!learnedWords.includes(currentQuizWord.eng)) {
            learnedWords.push(currentQuizWord.eng);
            unlearnedWords = unlearnedWords.filter(w => w.eng !== currentQuizWord.eng);
            
            // שמירה בזיכרון של הדפדפן
            localStorage.setItem('amirnet_learned_words', JSON.stringify(learnedWords));
            
            // עדכון כל הנתונים במסכים האחרים
            updateStats();
            renderWordBank();
            
            // אם המילה הזו בדיוק הוצגה גם בכרטיסיות, נרענן את הכרטיסייה למילה חדשה
            if (currentFlashcardWord && currentFlashcardWord.eng === currentQuizWord.eng) {
                loadRandomFlashcard();
            }
        }
    } else {
        feedback.innerText = "טעות. התשובה הנכונה מסומנת בירוק.";
        feedback.style.color = "var(--danger)";
    }
    
    // הצגת כפתור לשאלה הבאה
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
        // Find the full word object to get the hebrew translation
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
    
    // Inject Text
    const textBox = document.getElementById('reading-text-box');
    textBox.innerHTML = `<h3>${data.title}</h3>`;
    data.paragraphs.forEach(p => {
        let pEl = document.createElement('p');
        pEl.innerText = p;
        textBox.appendChild(pEl);
    });

    // Inject Questions
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

// --- Navigation ---
function switchTab(tabId) {
    document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    document.getElementById('btn-' + tabId).classList.add('active');
}

// Boot the app
window.onload = initApp;

// --- אפקט רקע דינמי שעוקב אחרי העכבר ---
document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
});


// --- 5. Live AI Restatements Logic ---
let geminiApiKey = localStorage.getItem('gemini_api_key') || '';
let currentAiWordObj = null;

function initAiTab() {
    if (geminiApiKey) {
        document.getElementById('gemini-api-key').value = geminiApiKey;
        document.getElementById('api-key-section').style.display = 'none';
        document.getElementById('ai-quiz-section').style.display = 'block';
    }
}

function saveApiKey() {
    const key = document.getElementById('gemini-api-key').value.trim();
    if (key) {
        geminiApiKey = key;
        localStorage.setItem('gemini_api_key', geminiApiKey);
        document.getElementById('api-key-section').style.display = 'none';
        document.getElementById('ai-quiz-section').style.display = 'block';
    } else {
        alert('יש להזין מפתח תקין.');
    }
}

// משתנה ששומר את המודל כדי לחסוך קריאות כפולות
let workingGeminiModel = null;

async function generateAISentence() {
    if (!geminiApiKey) {
        alert("חסר מפתח API.");
        return;
    }
    
    const validUnlearnedWords = unlearnedWords.filter(w => w.eng && w.eng.trim().length > 2);
    
    if (validUnlearnedWords.length === 0) {
        alert("אין יותר מילים מתאימות לתרגול!");
        return;
    }

    currentAiWordObj = validUnlearnedWords[Math.floor(Math.random() * validUnlearnedWords.length)];
    const targetWord = currentAiWordObj.eng;

    // UI Reset
    document.getElementById('ai-quiz-content').style.display = 'none';
    document.getElementById('generate-ai-btn').style.display = 'none';
    document.getElementById('ai-loading').style.display = 'block';
    document.getElementById('ai-feedback').innerHTML = ''; 

    const promptText = `You are an expert test writer for the Israeli Psychometric and Amirnet English exams. 
    Generate a formal, academic English sentence to test the advanced word "${targetWord}". 
    
    CRITICAL BALANCE: The sentence MUST be of medium length (approximately 15 to 25 words) with a compound or complex structure. It should read like a proper excerpt from a university textbook or a high-level scientific/historical article (B2 level). Do NOT make it a short or simple sentence. Ensure there are clear logical context clues.
    
    Provide 4 multiple-choice options: 1 correct option ("${targetWord}") and 3 advanced (C1 level) distractors.
    Write a VERY SHORT explanation IN HEBREW (max 15 words) pointing out the context clue.
    Translate all 4 options to Hebrew.
    
    CRITICAL JSON RULES: 
    1. Return ONLY a raw JSON object. Do NOT wrap it in \`\`\`json tags.
    2. NEVER use double quotes (") inside your text values! If you must quote a word, use single quotes (') only.
    
    Format exactly like this:
    {
        "sentence": "the sentence with ___", 
        "options": [
            {"word": "option1", "translation": "תרגום"},
            {"word": "option2", "translation": "תרגום"},
            {"word": "option3", "translation": "תרגום"},
            {"word": "option4", "translation": "תרגום"}
        ], 
        "correctWord": "${targetWord}",
        "explanation": "הסבר קצר מאוד"
    }`;

    try {
        // רשימה מעודכנת אפריל 2026 היישר מהמסמכים של גוגל!
        // מסודרת לפי כמות הבקשות החינמיות: מהגבוה ביותר (1500) לנמוך ביותר.
        const fallbackModels = [
            "gemini-1.5-flash",
            "gemini-1.5-flash-8b",
            "gemini-2.0-flash-lite",
            "gemini-2.0-flash",
            "gemini-2.5-flash"
        ];

        let response;
        let successfulModel = null;

        // אם כבר מצאנו מודל שעובד קודם, נרוץ רק עליו כדי לחסוך זמן
        const modelsToTry = workingGeminiModel ? [workingGeminiModel] : fallbackModels;

        for (const modelName of modelsToTry) {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${geminiApiKey}`;
            
            try {
                console.log(`מנסה לדפוק בדלת של מודל: ${modelName}...`);
                response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: promptText }] }]
                    })
                });

                if (response.status === 503 || response.status === 429) {
                    console.warn(`המודל ${modelName} עמוס, מחכה 2 שניות ומנסה שוב...`);
                    await new Promise(r => setTimeout(r, 2000));
                    response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{ parts: [{ text: promptText }] }]
                        })
                    });
                }

                if (response.ok) {
                    successfulModel = modelName;
                    workingGeminiModel = modelName; 
                    console.log(`✅ בינגו! ננעל על המודל שעובד: ${successfulModel}`);
                    break; 
                } else {
                    console.warn(`❌ המודל ${modelName} לא ענה כמו שצריך (קוד ${response.status}). עובר לבא.`);
                }
            } catch (e) {
                console.warn(`שגיאת רשת מול המודל ${modelName}, מדלג...`);
            }
        }

        if (!successfulModel || !response || !response.ok) {
            throw new Error("כל המודלים חסומים. חשוב: אם הרגע יצרת מפתח חדש, לפעמים לגוגל לוקח 3-5 דקות לאקטב אותו בשרתים שלהם. תן לזה רגע ונסה שוב.");
        }

        const data = await response.json();
        
        let jsonText = data.candidates[0].content.parts[0].text;
        jsonText = jsonText.replace(/```json/g, "").replace(/```/g, "").trim();
        
        const result = JSON.parse(jsonText);
        renderAiQuiz(result);

    } catch (error) {
        console.error("שגיאה שנתפסה:", error);
        workingGeminiModel = null; 
        alert("תקלה מול ה-AI: " + error.message);
    } finally {
        document.getElementById('ai-loading').style.display = 'none';
        document.getElementById('generate-ai-btn').style.display = 'inline-block';
    }
}

function renderAiQuiz(data) {
    document.getElementById('ai-quiz-content').style.display = 'block';
    document.getElementById('ai-sentence').innerText = data.sentence || data.Sentence;
    
    const optionsContainer = document.getElementById('ai-options');
    optionsContainer.innerHTML = '';
    optionsContainer.classList.remove('locked');

    // שמירת ההסבר עם הגנה למקרה שג'מיני שינה את שם המפתח
    optionsContainer.dataset.explanation = data.explanation || data.Explanation || "לא סופק הסבר.";

    const optionsArray = data.options || data.Options || [];
    const shuffledOptions = [...optionsArray].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(opt => {
        let btn = document.createElement('div');
        btn.className = 'mc-option';
        
        // שומרים את האנגלית והעברית בזיכרון של הכפתור
        btn.dataset.word = opt.word || opt.Word;
        btn.dataset.translation = opt.translation || opt.Translation || "אין תרגום";

        // בהתחלה מציגים רק את המילה באנגלית
        btn.innerHTML = `<span style="font-size:1.2rem; font-weight:bold;">${btn.dataset.word}</span>`;
        
        btn.onclick = () => checkAiAnswer(btn, btn.dataset.word, data.correctWord || data.CorrectWord, optionsContainer);
        optionsContainer.appendChild(btn);
    });
}

function checkAiAnswer(selectedBtn, selectedOptStr, correctOpt, container) {
    if (container.classList.contains('locked')) return;
    container.classList.add('locked');

    // עוברים על כל הכפתורים: חושפים את התרגום וצובעים אותם
    Array.from(container.children).forEach(btn => {
        const word = btn.dataset.word;
        const trans = btn.dataset.translation;
        
        // כאן קורה הקסם: הכפתור מתעדכן להראות את המילה + שורת רווח + התרגום
        btn.innerHTML = `<span style="font-size:1.2rem; font-weight:bold;">${word}</span><br><span style="font-size:1rem; opacity:0.9; margin-top:5px; display:block; color: #94a3b8;">${trans}</span>`;
        
        if (word === correctOpt) btn.classList.add('correct');
        if (word === selectedOptStr && selectedOptStr !== correctOpt) btn.classList.add('wrong');
    });

    const feedback = document.getElementById('ai-feedback');
    const explanation = container.dataset.explanation;
    
    if (selectedOptStr === correctOpt) {
        feedback.innerHTML = `נכון מאוד! ✔️<br><br>
        <div style="font-size: 1rem; color: var(--text-dark); font-weight: normal; margin-top: 10px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px;">
            <strong style="color: var(--secondary);">ההקשר:</strong> ${explanation}
        </div>`;
        feedback.style.color = "var(--success)";
        
        if (currentAiWordObj) {
            toggleWordStatus(currentAiWordObj.eng, true);
        }
    } else {
        feedback.innerHTML = `טעות.<br><br>
        <div style="font-size: 1rem; color: var(--text-dark); font-weight: normal; margin-top: 10px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px;">
            <strong style="color: var(--secondary);">למה זו התשובה?</strong> ${explanation}
        </div>`;
        feedback.style.color = "var(--danger)";
    }
}