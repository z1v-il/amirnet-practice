// --- Global State ---
let unlearnedWords = [];
let learnedWords = [];
let currentFlashcardWord = null;
let currentQuizWord = null;
// --- AI Saved Bank ---
let savedAiSentences = JSON.parse(localStorage.getItem('saved_ai_sentences')) || [];
let savedAiRestatements = JSON.parse(localStorage.getItem('saved_ai_restatements')) || [];


// --- Initialize App ---
function initApp() {
    const savedProgress = localStorage.getItem('amirnet_learned_words');
    learnedWords = savedProgress ? JSON.parse(savedProgress) : [];
    unlearnedWords = allWords.filter(word => !learnedWords.includes(word.eng));
    
    updateStats();
    loadRandomFlashcard();
    loadMultipleChoice();
    renderWordBank();
    
    const selector = document.getElementById('text-selector');
    readingData.forEach((item, index) => {
        let opt = document.createElement('option');
        opt.value = index;
        opt.innerText = `Text ${index + 1}: ${item.title}`;
        selector.appendChild(opt);
    });
    loadSelectedText();

    // טעינת מפתח ה-API ל-Header אם הוא קיים
    geminiApiKey = localStorage.getItem('gemini_api_key') || '';
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
function switchMainTab(mainTabId) {
    // 1. צובע את הכפתור הראשי
    document.querySelectorAll('.main-nav button').forEach(b => b.classList.remove('active'));
    document.getElementById('main-btn-' + mainTabId).classList.add('active');

    // 2. מעלים את כל תתי-התפריטים והמסכים
    document.querySelectorAll('.sub-nav').forEach(nav => nav.style.display = 'none');
    document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));

    // 3. מציג את תת התפריט הנכון
    const subNav = document.getElementById('sub-nav-' + mainTabId);
    if (subNav) subNav.style.display = 'flex';

    // 4. מעביר למסך ברירת המחדל של כל קטגוריה
    if (mainTabId === 'words') switchSubTab('vocab');
    if (mainTabId === 'restate') switchSubTab('restate-container');
    if (mainTabId === 'exams') {
        switchSubTab('exams-container');
        initExamTab(); // השורה שבודקת את המאגר
    }
}

function switchSubTab(tabId) {
    // מנקה צביעה מכל כפתורי תת-התפריט
    document.querySelectorAll('.sub-nav button').forEach(b => b.classList.remove('active'));
    // מסתיר את כל המסכים
    document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
    
    // מציג את המסך המבוקש וצובע את הכפתור שלו
    document.getElementById(tabId).classList.add('active');
    const btn = document.getElementById('btn-' + tabId);
    if(btn) btn.classList.add('active');
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
        alert('המפתח נשמר בהצלחה! 🚀');
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
        savedAiSentences.push(result);
        localStorage.setItem('saved_ai_sentences', JSON.stringify(savedAiSentences));
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
// ==========================================
// --- 6. Live AI Restatements Logic ---
// ==========================================

async function generateRestatement() {
    if (!geminiApiKey) {
        alert("חסר מפתח API. הכנס מפתח למעלה מימין ושמור.");
        return;
    }

    document.getElementById('restate-quiz-content').style.display = 'none';
    document.getElementById('generate-restate-btn').style.display = 'none';
    document.getElementById('restate-loading').style.display = 'block';
    document.getElementById('restate-feedback').innerHTML = ''; 

    const promptText = `You are an expert test writer for the Israeli Psychometric and Amirnet English exams. 
    Generate a "Restatement" question at a solid B2 level (upper-intermediate). 
    
    RULES:
    1. Write a clear, realistic academic sentence (15-25 words) dealing with science, history, sociology, or psychology. DO NOT use overly obscure or archaic vocabulary.
    2. Provide exactly 4 multiple-choice options.
    3. The FIRST option in the array MUST be the CORRECT option (conveying the exact same logical meaning using different words). The next 3 must be INCORRECT logically flawed distractors.
    4. Write a short explanation IN HEBREW (max 20 words) explaining the logical trick.
    
    CRITICAL JSON RULES:
    1. Return ONLY a valid JSON object. No \`\`\`json tags.
    2. ALL keys must be in double quotes ("original", "options", "explanation").
    3. NEVER use double quotes (") inside your text values! Use single quotes (') instead.
    
    Format exactly like this:
    {
        "original": "The original sentence...",
        "options": [
            "The CORRECT option...",
            "Incorrect option 1...",
            "Incorrect option 2...",
            "Incorrect option 3..."
        ],
        "explanation": "הסבר קצר בעברית שמסביר את הטריק"
    }`;

    try {
        const fallbackModels = [
            "gemini-1.5-flash",
            "gemini-1.5-flash-8b",
            "gemini-2.0-flash-lite",
            "gemini-2.0-flash",
            "gemini-2.5-flash"
        ];

        let response;
        let successfulModel = null;
        const modelsToTry = workingGeminiModel ? [workingGeminiModel] : fallbackModels;

        for (const modelName of modelsToTry) {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${geminiApiKey}`;
            try {
                response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
                });

                // טיפול בעומסים
                if (response.status === 503 || response.status === 429) {
                    await new Promise(r => setTimeout(r, 2000));
                    response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
                    });
                }

                if (response.ok) {
                    successfulModel = modelName;
                    workingGeminiModel = modelName; 
                    break; 
                }
            } catch (e) {
                console.warn(`Skipping model ${modelName}...`);
            }
        }

        if (!successfulModel || !response || !response.ok) {
            throw new Error("כל המודלים נכשלו.");
        }

        const data = await response.json();
        let jsonText = data.candidates[0].content.parts[0].text;
        
        // פילטר ניקוי JSON
        const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
        if (jsonMatch) jsonText = jsonMatch[0];
        jsonText = jsonText.replace(/,\s*([\]}])/g, '$1');

        const result = JSON.parse(jsonText);
        // שמירה אוטומטית למאגר ה-AI
        savedAiRestatements.push(result);
        localStorage.setItem('saved_ai_restatements', JSON.stringify(savedAiRestatements));
        renderRestatementQuiz(result);

    } catch (error) {
        console.error(error);
        workingGeminiModel = null; 
        alert("תקלה מול ה-AI: " + error.message);
    } finally {
        document.getElementById('restate-loading').style.display = 'none';
        document.getElementById('generate-restate-btn').style.display = 'inline-block';
    }
}

function renderRestatementQuiz(data) {
    document.getElementById('restate-quiz-content').style.display = 'block';
    document.getElementById('restate-original').innerText = data.original || data.Original;
    
    const optionsContainer = document.getElementById('restate-options');
    optionsContainer.innerHTML = '';
    optionsContainer.classList.remove('answered');
    
    optionsContainer.dataset.explanation = data.explanation || data.Explanation || "לא סופק הסבר.";

    const optionsArray = data.options || data.Options || [];
    
    // קסם הערבוב: בגלל שהגדרנו ל-AI שהתשובה הנכונה היא תמיד הראשונה, נשמור אותה בצד
    const correctText = optionsArray[0];

    // אלגוריתם ערבוב אגרסיבי (Fisher-Yates) - אין סיכוי שיפספס
    let shuffledOptions = [...optionsArray];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    // בודקים איפה התשובה הנכונה התחבאה אחרי הערבוב
    const newCorrectIndex = shuffledOptions.indexOf(correctText);

    // מייצרים את הכפתורים
    shuffledOptions.forEach((optText, index) => {
        let optElement = document.createElement('div');
        optElement.className = 'option';
        optElement.style.fontSize = '1.1rem';
        optElement.innerText = optText;
        
        optElement.onclick = () => checkRestatementAnswer(optElement, index, newCorrectIndex, optionsContainer);
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
        feedback.innerHTML = `מדויק! ✔️<br><br>
        <div style="font-size: 1rem; color: var(--text-dark); font-weight: normal; margin-top: 10px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px;">
            <strong style="color: var(--secondary);">הסבר:</strong> ${explanation}
        </div>`;
        feedback.style.color = "var(--success)";
    } else {
        element.classList.add('wrong');
        feedback.innerHTML = `פספסת.<br><br>
        <div style="font-size: 1rem; color: var(--text-dark); font-weight: normal; margin-top: 10px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px;">
            <strong style="color: var(--secondary);">למה התשובה הירוקה נכונה?</strong> ${explanation}
        </div>`;
        feedback.style.color = "var(--danger)";
    }
}

// --- Export AI Bank ---
function exportAiBank() {
    const exportData = {
        sentences: savedAiSentences,
        restatements: savedAiRestatements
    };
    
    // מנקה את ה-Console ומדפיס בצורה נקייה להעתקה
    console.clear();
    console.log("// --- העתק את כל הבלוק הזה לקובץ data.js שלך ---");
    console.log("const aiGeneratedBank = " + JSON.stringify(exportData, null, 4) + ";");
    
    alert(`המאגר יוצא בהצלחה ל-Console (F12)!
נשמרו עד כה:
- ${savedAiSentences.length} שאלות השלמת משפטים.
- ${savedAiRestatements.length} שאלות ניסוח מחדש.
לחץ על כפתור ה-Copy ב-Console והדבק ב-data.js.`);
}

// ==========================================
// --- 7. Full Amirnet Simulation Engine ---
// ==========================================

let examTimer;
let examTimeLeft;
let examState = {
    parts: [],
    currentPartIndex: 0,
    currentQuestionIndex: 0,
    correctAnswers: 0,
    totalQuestions: 23
};

function initExamTab() {
    document.getElementById('exam-setup').style.display = 'block';
    document.getElementById('exam-active').style.display = 'none';
    document.getElementById('exam-results').style.display = 'none';
}

// פונקציית עזר לשליחת בקשה לג'מיני (מנקה ומחלצת JSON)
async function fetchGeminiData(promptText) {
    const fallbackModels = ["gemini-1.5-flash", "gemini-1.5-flash-8b", "gemini-2.0-flash", "gemini-2.5-flash"];
    const modelsToTry = workingGeminiModel ? [workingGeminiModel] : fallbackModels;

    for (const modelName of modelsToTry) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${geminiApiKey}`;
        try {
            let response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
            });

            if (response.status === 503 || response.status === 429) {
                await new Promise(r => setTimeout(r, 2000)); // המתנה בעומס
                response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ contents: [{ parts: [{ text: promptText }] }] })
                });
            }

            if (response.ok) {
                workingGeminiModel = modelName;
                const data = await response.json();
                let jsonText = data.candidates[0].content.parts[0].text;
                
                // פילטר ניקוי
                const jsonMatch = jsonText.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
                if (jsonMatch) jsonText = jsonMatch[0];
                jsonText = jsonText.replace(/,\s*([\]}])/g, '$1');
                
                return JSON.parse(jsonText);
            }
        } catch (e) {
            console.warn(`Skipping model ${modelName}...`);
        }
    }
    throw new Error("קריסת שרת בגוגל, אנא נסה שוב.");
}

async function generateFullExam() {
    if (!geminiApiKey) {
        alert("חסר מפתח API. הכנס אותו במסך השלמת המשפטים קודם.");
        return;
    }

    document.getElementById('btn-generate-exam').style.display = 'none';
    document.getElementById('exam-loading').style.display = 'block';

    // 3 פרומפטים שדורשים מה-AI להחזיר תמיד את התשובה הנכונה במיקום הראשון (0)
    const promptSentences = `Generate a JSON array of 12 "Sentence Completion" questions (B2 academic level).
    Format exactly as a raw JSON array:
    [ { "sentence": "Academic sentence with a blank ___ .", "options": ["CorrectOption", "Distractor1", "Distractor2", "Distractor3"], "correctIndex": 0, "explanation": "Short hebrew explanation" } ]
    IMPORTANT: Generate exactly 12 objects. First option MUST be the correct one.`;

    const promptRestates = `Generate a JSON array of 6 "Restatement" questions (B2 academic level).
    Format exactly as a raw JSON array:
    [ { "original": "Complex academic sentence.", "options": ["Correct restatement.", "Distractor 1.", "Distractor 2.", "Distractor 3."], "correctIndex": 0, "explanation": "Short hebrew explanation" } ]
    IMPORTANT: Generate exactly 6 objects. First option MUST be the correct one.`;

    const promptReading = `Generate a JSON object for an academic "Reading Comprehension" section (B2 level).
    Format exactly as a raw JSON object:
    { "title": "Academic Title", "paragraphs": ["Par 1...", "Par 2..."], "questions": [ { "question": "...", "options": ["Correct answer.", "Distractor 1.", "Distractor 2.", "Distractor 3."], "correctIndex": 0, "explanation": "Short hebrew explanation" } ] }
    IMPORTANT: Generate exactly 5 questions. First option MUST be the correct one.`;

    try {
        // מריצים את כל 3 הבקשות במקביל! (Parallel Execution)
        const [sentencesData, restatesData, readingDataAI] = await Promise.all([
            fetchGeminiData(promptSentences),
            fetchGeminiData(promptRestates),
            fetchGeminiData(promptReading)
        ]);

        // תפירת המבחן
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
        alert("תקלה ביצירת המבחן: " + error.message);
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
            alert("⏳ נגמר הזמן לפרק זה! המערכת מעבירה אותך לפרק הבא.");
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
    const nextBtn = document.getElementById('btn-exam-next');
    
    qContainer.innerHTML = '';
    qContainer.classList.remove('answered');
    nextBtn.style.display = 'none';
    
    document.getElementById('exam-progress').innerText = `שאלה ${examState.currentQuestionIndex + 1} מתוך ${part.qs.length}`;
    
    const q = part.qs[examState.currentQuestionIndex];
    
    let questionHtml = '';
    let rawOptions = q.options || q.Options || [];
    // אנחנו תמיד מצפים שהתשובה הנכונה מה-AI תהיה במקום ה-0
    let correctText = rawOptions[0]; 

    // הגדרות תצוגה לפי סוג הפרק
    if (part.type === 'sentence') {
        questionHtml = `<p style="font-size: 1.5rem; direction: ltr; font-family: 'Georgia'; line-height: 1.6;">${q.sentence || q.Sentence}</p>`;
    } 
    else if (part.type === 'restate') {
        questionHtml = `<div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 12px; margin-bottom: 25px; border-left: 5px solid var(--secondary);">
            <p style="font-size: 1.3rem; font-weight: bold; direction: ltr; font-family: 'Georgia'; color: white; margin: 0;">${q.original || q.Original}</p></div>`;
    }
    else if (part.type === 'reading') {
        let textHtml = `<div style="height: 200px; overflow-y: auto; background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; margin-bottom: 20px; direction: ltr; font-family: 'Georgia'; font-size: 1rem; border-left: 3px solid var(--secondary);">`;
        part.text.paragraphs.forEach(p => textHtml += `<p style="margin-top:0;">${p}</p>`);
        textHtml += `</div>`;
        questionHtml = textHtml + `<h4 style="direction: ltr; font-size: 1.2rem; color: var(--text-dark); margin-bottom: 15px;">${q.question || q.Question}</h4>`;
    }

    qContainer.innerHTML = questionHtml;

    // מערבבים את התשובות (Fisher-Yates Shuffle)
    let shuffledOptions = [...rawOptions];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    // הדפסת הכפתורים לחלון
    const grid = document.createElement('div');
    grid.className = (part.type === 'sentence') ? 'mc-grid' : 'options';
    if (part.type !== 'sentence') {
        grid.style.display = 'flex'; grid.style.flexDirection = 'column'; grid.style.gap = '10px';
    }

    shuffledOptions.forEach(optText => {
        let btn = document.createElement('div');
        btn.className = (part.type === 'sentence') ? 'mc-option' : 'option';
        
        if (part.type === 'sentence') {
            btn.innerHTML = `<span style="font-size:1.2rem; font-weight:bold;">${optText}</span>`;
            btn.style.minHeight = '60px';
        } else {
            btn.innerText = optText;
            btn.style.direction = 'ltr'; btn.style.textAlign = 'left'; btn.style.fontSize = '1.1rem';
        }
        
        btn.dataset.val = optText;
        btn.onclick = () => handleExamClick(grid, btn, optText, correctText, q.explanation);
        grid.appendChild(btn);
    });

    qContainer.appendChild(grid);
    
    // קופסת פידבק נסתרת (תקפוץ אחרי מענה)
    const feedbackDiv = document.createElement('div');
    feedbackDiv.id = "exam-q-feedback";
    feedbackDiv.className = "feedback-box";
    feedbackDiv.style.marginTop = "20px";
    qContainer.appendChild(feedbackDiv);
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
    const part = examState.parts[examState.currentPartIndex];
    examState.currentQuestionIndex++;
    
    if (examState.currentQuestionIndex >= part.qs.length) {
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
    
    // נוסחת חישוב ציון אמירנט (נע בין 50 ל-150)
    const rawScore = Math.round(50 + (examState.correctAnswers / examState.totalQuestions) * 100);
    
    const scoreEl = document.getElementById('exam-final-score');
    scoreEl.innerText = rawScore;
    
    // צבע חיווי ציון
    if (rawScore >= 120) scoreEl.style.color = 'var(--success)';
    else if (rawScore >= 100) scoreEl.style.color = 'var(--warning)';
    else scoreEl.style.color = 'var(--danger)';
}