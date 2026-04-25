// --- מאגר שאלות סטטי (נבנה על ידי ה-AI) ---

const staticSentences = [
{ "sentence": "Although the new policies were intended to __________ the economic hardships faced by the working class, they inadvertently worsened the inflation crisis across the nation.", "options": ["ameliorate", "exacerbate", "obliterate", "disseminate"], "correctWord": "ameliorate", "explanation": "המילה ameliorate (לשפר) מנוגדת ל-worsened (החמיר) שמופיע בהמשך המשפט בעקבות המילה Although." },
{ "sentence": "In modern urban environments, surveillance cameras have become so __________ that citizens rarely notice they are being continuously monitored throughout their daily routines.", "options": ["ubiquitous", "ephemeral", "obsolete", "clandestine"], "correctWord": "ubiquitous", "explanation": "המילה ubiquitous (נפוץ בכל מקום) מסבירה מדוע אנשים כבר לא שמים לב למצלמות." },
{ "sentence": "The monarch's __________ behavior made it impossible for his advisors to predict his diplomatic decisions, leading to widespread instability within the royal court.", "options": ["capricious", "fastidious", "pragmatic", "lucid"], "correctWord": "capricious", "explanation": "המילה capricious (הפכפך) מסבירה את חוסר היכולת של היועצים לחזות את החלטותיו של המלך." },
{ "sentence": "The sudden drop in temperatures during the peak of summer was considered a meteorological __________, baffling scientists who had predicted a record-breaking heatwave.", "options": ["anomaly", "accolade", "anachronism", "paradigm"], "correctWord": "anomaly", "explanation": "המילה anomaly (סטייה) מתארת את ירידת הטמפרטורות הפתאומית בניגוד לתחזיות גל החום החמור." },
{ "sentence": "Before publishing the controversial article, the editor-in-chief instructed her team to __________ every claim to ensure that the publication would not face legal repercussions.", "options": ["scrutinize", "fabricate", "mitigate", "vindicate"], "correctWord": "scrutinize", "explanation": "המילה scrutinize (לבחון בקפידה) נדרשת כדי לוודא שהטענות מבוססות ולמנוע תביעות משפטיות נגד העיתון." },
{ "sentence": "The beauty of the cherry blossoms is profoundly __________, as the delicate flowers bloom vibrantly for merely a few days before scattering in the wind.", "options": ["ephemeral", "ubiquitous", "stringent", "archaic"], "correctWord": "ephemeral", "explanation": "המילה ephemeral (חולף) מתאימה לתיאור פרחים שפורחים רק לימים ספורים לפני שהם נושרים." },
{ "sentence": "Decades after being wrongfully imprisoned, the discovery of new DNA evidence served to finally __________ the suspect, clearing his name of the horrific crime.", "options": ["vindicate", "castigate", "subjugate", "alienate"], "correctWord": "vindicate", "explanation": "המילה vindicate (לזכות מאשמה) מתאימה למצב שבו ראיות דנ'א חדשות מנקות את שמו." },
{ "sentence": "Renowned for his __________ attention to detail, the master watchmaker spent hundreds of hours assembling the intricate gears of the custom timepiece.", "options": ["fastidious", "frivolous", "lethargic", "impetuous"], "correctWord": "fastidious", "explanation": "המילה fastidious (קפדן) מתארת היטב את תשומת הלב העמוקה לפרטים של בונה השעונים המומחה." },
{ "sentence": "To __________ the environmental damage caused by deforestation, the government implemented a massive tree-planting initiative aimed at restoring the region's natural ecosystem.", "options": ["mitigate", "exacerbate", "instigate", "obfuscate"], "correctWord": "mitigate", "explanation": "המילה mitigate (להקל, למתן) נדרשת כפעולה שמטרתה לצמצם את הנזק הסביבתי של כריתת היערות." },
{ "sentence": "The researchers faced a perplexing __________ when the results of their exhaustive experiment contradicted all established theories within the field of quantum physics.", "options": ["conundrum", "panacea", "catalyst", "hierarchy"], "correctWord": "conundrum", "explanation": "המילה conundrum (תעלומה, חידה) מתארת את הבעיה כשתוצאות הניסוי סתרו את כל התיאוריות הידועות." },
{ "sentence": "The professor's lecture on quantum mechanics was so _________ that even the most advanced graduate students struggled to comprehend the core concepts.", "options": ["abstruse", "lucid", "mundane", "facetious"], "correctWord": "abstruse", "explanation": "המילה abstruse (סתום) מסבירה מדוע הסטודנטים התקשו להבין את ההרצאה המורכבת." },
{ "sentence": "Her remarkable business _________ allowed her to transform a failing local startup into a highly profitable international corporation within just three years.", "options": ["acumen", "apathy", "avarice", "acrimony"], "correctWord": "acumen", "explanation": "המילה acumen (חריפות שכל) מתארת את הכישרון שאפשר לה להציל את החברה." },
{ "sentence": "Despite facing overwhelming opposition from the board of directors, the CEO remained _________ in her decision to restructure the entire organization.", "options": ["adamant", "ambivalent", "diffident", "complaisant"], "correctWord": "adamant", "explanation": "המילה adamant (נחוש) מנוגדת להתנגדות העזה שנתקלה בה מצד ההנהלה." },
{ "sentence": "The young actor was entirely unprepared for the overwhelming _________ he received from millions of screaming fans after his debut film premiered.", "options": ["adulation", "derision", "calumny", "antipathy"], "correctWord": "adulation", "explanation": "המילה adulation (הערצה) מתאימה לתגובה החיובית והעוצמתית של מיליוני המעריצים." },
{ "sentence": "When offered the opportunity to lead the prestigious research expedition to Antarctica, the ambitious scientist accepted the position with remarkable _________.", "options": ["alacrity", "trepidation", "indolence", "apathy"], "correctWord": "alacrity", "explanation": "המילה alacrity (זריזות/נכונות) מתארת כיצד מדען שאפתן יקבל הצעת מחקר יוקרתית." },
{ "sentence": "The prime minister delivered an emergency televised broadcast in a desperate attempt to _________ the growing fears of a nationwide economic collapse.", "options": ["allay", "augment", "instigate", "exacerbate"], "correctWord": "allay", "explanation": "המילה allay (להרגיע) נדרשת כדי להסביר את ניסיונו לשכך את החששות." },
{ "sentence": "To survive the severe economic recession, the two struggling rival tech companies decided to _________ their resources and form a single entity.", "options": ["amalgamate", "jettison", "polarize", "obliterate"], "correctWord": "amalgamate", "explanation": "המילה amalgamate (למזג) מסבירה כיצד החברות התאחדו לישות אחת כדי לשרוד." },
{ "sentence": "In a futuristic sci-fi movie featuring highly advanced laser weaponry, the presence of a traditional rotary dial telephone was a glaring _________.", "options": ["anachronism", "paradigm", "panacea", "catalyst"], "correctWord": "anachronism", "explanation": "המילה anachronism (כשל כרונולוגי) מתארת הימצאות פריט מיושן בסרט עתידני." },
{ "sentence": "The profound _________ between the two neighboring countries has unfortunately persisted for centuries, leading to constant border disputes and violent skirmishes.", "options": ["antipathy", "camaraderie", "solidarity", "empathy"], "correctWord": "antipathy", "explanation": "המילה antipathy (סלידה/עוינות) מסבירה את סכסוכי הגבולות והאלימות בין המדינות." },
{ "sentence": "In order to _________ the angry protestors demanding immediate climate action, the government hurriedly announced a comprehensive package of new regulations.", "options": ["appease", "infuriate", "admonish", "deride"], "correctWord": "appease", "explanation": "המילה appease (לפייס) מסבירה את מטרת הממשלה בהכרזת התקנות החדשות." },
{ "sentence": "The manager's decision to promote certain employees while firing others seemed completely _________, as it was not based on any performance metrics.", "options": ["arbitrary", "meticulous", "judicious", "inevitable"], "correctWord": "arbitrary", "explanation": "המילה arbitrary (שרירותי) מתארת החלטה שאינה מבוססת על מדדי ביצוע." },
{ "sentence": "Climbing to the summit of Mount Everest is an incredibly _________ undertaking that requires months of rigorous physical training and immense endurance.", "options": ["arduous", "facile", "trivial", "mundane"], "correctWord": "arduous", "explanation": "המילה arduous (מפרך) מתארת את הקושי והמאמץ הנדרשים לטיפוס ההר." },
{ "sentence": "The pharmaceutical company released a detailed public statement aiming to _________ widespread concerns regarding the potential side effects of their new vaccine.", "options": ["assuage", "foment", "vindicate", "augment"], "correctWord": "assuage", "explanation": "המילה assuage (לשכך) מתאימה לפעולה של הרגעת חששות הציבור לגבי החיסון." },
{ "sentence": "The investigative journalist formulated an _________ plan to secretly infiltrate the heavily guarded facility and expose the corporation's illegal chemical dumping.", "options": ["audacious", "timorous", "mundane", "lackadaisical"], "correctWord": "audacious", "explanation": "המילה audacious (נועז) מתארת את התוכנית המסוכנת לחדור למתקן השמור." },
{ "sentence": "Critics complained that the highly anticipated blockbuster movie was ruined by a _________ script that relied entirely on exhausted clichés and predictable tropes.", "options": ["banal", "profound", "esoteric", "eccentric"], "correctWord": "banal", "explanation": "המילה banal (שגרתי/בנאלי) מתאימה לתיאור תסריט המסתמך על קלישאות שחוקות." },
{ "sentence": "The diplomat's unusually _________ tone during the international peace summit shocked the delegates and severely jeopardized the ongoing negotiation process.", "options": ["belligerent", "conciliatory", "affable", "docile"], "correctWord": "belligerent", "explanation": "המילה belligerent (לוחמני) מסבירה מדוע הטון של הדיפלומט סיכן את המשא ומתן." },
{ "sentence": "To _________ his controversial thesis, the historian presented newly discovered archival documents that definitively proved his unusual interpretation of the ancient war.", "options": ["bolster", "undermine", "refute", "deprecate"], "correctWord": "bolster", "explanation": "המילה bolster (לתמוך/לחזק) מסבירה את מטרת הצגת המסמכים המאשרים את התיאוריה." },
{ "sentence": "As the elementary school students simultaneously attempted to play their un-tuned instruments, a horrifying _________ echoed throughout the previously quiet auditorium.", "options": ["cacophony", "harmony", "tranquility", "synergy"], "correctWord": "cacophony", "explanation": "המילה cacophony (צרימה) מתארת את הרעש הנורא שנוצר מהכלים הלא מכוונים." },
{ "sentence": "During the exclusive interview, the retired politician was surprisingly _________ about the numerous ethical compromises he had made during his extensive career.", "options": ["candid", "furtive", "disingenuous", "reticent"], "correctWord": "candid", "explanation": "המילה candid (כנה) מתארת את הפתיחות המפתיעה שלו לגבי פשרותיו המוסריות." },
{ "sentence": "The strict headmaster proceeded to publicly _________ the group of students for severely vandalizing the school library during the weekend break.", "options": ["castigate", "laud", "exonerate", "emulate"], "correctWord": "castigate", "explanation": "המילה castigate (לנזוף בחומרה) מתאימה לתגובת המנהל להשחתת רכוש בית הספר." },
{ "sentence": "The sudden assassination of the beloved archduke served as the crucial _________ that tragically plunged the entire continent into a devastating global war.", "options": ["catalyst", "deterrent", "impediment", "anachronism"], "correctWord": "catalyst", "explanation": "המילה catalyst (זרז) מתארת את האירוע שהצית את פריצת המלחמה ההרסנית." },
{ "sentence": "The rebel leaders held a _________ meeting in the dark basement to secretly plan their coordinated uprising against the oppressive military regime.", "options": ["clandestine", "conspicuous", "flagrant", "transparent"], "correctWord": "clandestine", "explanation": "המילה clandestine (חשאי) מתאימה לפגישה סודית של מורדים המארגנים הפיכה." },
{ "sentence": "The defense attorney presented such a _________ argument that the jury quickly returned a unanimous verdict of not guilty within twenty minutes.", "options": ["cogent", "fallacious", "specious", "inane"], "correctWord": "cogent", "explanation": "המילה cogent (משכנע/הגיוני) מסבירה מדוע חבר המושבעים זיכה את הנאשם במהירות." },
{ "sentence": "Following three consecutive championship victories, the team became dangerously _________ and subsequently lost their first match of the new season to underdogs.", "options": ["complacent", "meticulous", "vigilant", "industrious"], "correctWord": "complacent", "explanation": "המילה complacent (שאנן) מסבירה מדוע הקבוצה הפסידה לאחר רצף הניצחונות." },
{ "sentence": "In a highly _________ gesture aimed at restoring peace, the company's management offered the striking workers a significant increase in their hourly wages.", "options": ["conciliatory", "provocative", "truculent", "belligerent"], "correctWord": "conciliatory", "explanation": "המילה conciliatory (פייסני) מתארת את המחווה שנועדה לסיים את השביתה." },
{ "sentence": "Because the essential geological data was regrettably incomplete, the scientists could only offer a tentative _________ regarding the impending volcanic eruption.", "options": ["conjecture", "decree", "absolute", "paradigm"], "correctWord": "conjecture", "explanation": "המילה conjecture (השערה) מתאימה למצב בו המידע חלקי ויש להניח הנחות." },
{ "sentence": "The diligent student took _________ notes during the intensive three-hour lecture, filling nearly an entire notebook with detailed diagrams and crucial information.", "options": ["copious", "sparse", "meager", "scarce"], "correctWord": "copious", "explanation": "המילה copious (שופע/רב) מתארת את הכמות הגדולה של הסיכומים שהסטודנט כתב." },
{ "sentence": "The prosecuting attorney brought forward three independent eyewitnesses to _________ the victim's harrowing account of the violent midnight robbery.", "options": ["corroborate", "contradict", "fabricate", "obfuscate"], "correctWord": "corroborate", "explanation": "המילה corroborate (לאמת/לאשר) מסבירה את תפקיד העדים לחיזוק גרסת הקורבן." },
{ "sentence": "His _________ refusal to publicly defend his falsely accused colleague revealed a shocking lack of moral courage and basic professional loyalty.", "options": ["craven", "valiant", "intrepid", "audacious"], "correctWord": "craven", "explanation": "המילה craven (פחדן) מתארת את חוסר האומץ שלו להגן על עמיתו." },
{ "sentence": "The unexpected _________ of rainfall during the critical spring months inevitably led to a catastrophic crop failure across the entire agricultural region.", "options": ["dearth", "surfeit", "plethora", "deluge"], "correctWord": "dearth", "explanation": "המילה dearth (מחסור) מתאימה למחסור בגשמים שהוביל לפגיעה חמורה ביבולים." },
{ "sentence": "The mysterious tropical virus can severely _________ infected patients, leaving them completely bedridden and heavily reliant on medical respirators for several weeks.", "options": ["debilitate", "invigorate", "galvanize", "bolster"], "correctWord": "debilitate", "explanation": "המילה debilitate (להחליש) מסבירה את ההשפעה הקשה של הנגיף על החולים." },
{ "sentence": "The unruly audience's continuous shouting and disrespectful interruptions thoroughly violated the strict _________ typically expected at such a formal judicial proceeding.", "options": ["decorum", "cacophony", "anarchy", "chaos"], "correctWord": "decorum", "explanation": "המילה decorum (נימוס/הליכות) מתארת את ההתנהגות המכובדת שהופרה על ידי הקהל." },
{ "sentence": "Prolonged exposure to extreme ultraviolet radiation can have a highly _________ effect on human skin, significantly increasing the long-term risk of dangerous melanoma.", "options": ["deleterious", "salutary", "benign", "innocuous"], "correctWord": "deleterious", "explanation": "המילה deleterious (מזיק) מתארת את ההשפעה השלילית של קרינה אולטרה-סגולה." },
{ "sentence": "The veteran scientists initially chose to _________ the young researcher's radical theory, completely dismissing it as utter nonsense before even seeing the raw data.", "options": ["deride", "extol", "venerate", "corroborate"], "correctWord": "deride", "explanation": "המילה deride (ללעוג/לזלזל) מסבירה את תגובתם הראשונית והמזלזלת של המדענים הוותיקים." },
{ "sentence": "After receiving harsh rejection letters from all twenty universities he applied to, the highly ambitious high school senior felt overwhelmingly _________ about his future.", "options": ["despondent", "ebullient", "sanguine", "elated"], "correctWord": "despondent", "explanation": "המילה despondent (מדוכדך/מיואש) מתאימה להרגשתו של התלמיד שנדחה מהאוניברסיטאות." },
{ "sentence": "The severe financial penalties and the looming threat of mandatory imprisonment serve as a powerful _________ against massive and deliberate corporate tax evasion.", "options": ["deterrent", "catalyst", "incentive", "precursor"], "correctWord": "deterrent", "explanation": "המילה deterrent (מרתיע) מסבירה את תפקיד העונשים במניעת פשיעה פיננסית." },
{ "sentence": "Although the children's animated fable was highly entertaining, its primary purpose was clearly _________, aiming to heavily teach young readers the absolute importance of honesty.", "options": ["didactic", "frivolous", "facetious", "mundane"], "correctWord": "didactic", "explanation": "המילה didactic (דידקטי/לימודי) מתארת את מטרתה החינוכית של האגדה." },
{ "sentence": "The _________ software engineer meticulously reviewed every single line of complex code to definitively guarantee that the critical application would launch without a major flaw.", "options": ["diligent", "indolent", "slipshod", "apathetic"], "correctWord": "diligent", "explanation": "המילה diligent (שקדן/חרוץ) מתארת את המסירות של המהנדס בבדיקת הקוד." },
{ "sentence": "It is considered highly unprofessional for a corporate manager to constantly _________ her loyal employees' hard work in front of the entire visiting executive board.", "options": ["disparage", "commend", "extol", "alleviate"], "correctWord": "disparage", "explanation": "המילה disparage (לזלזל) מסבירה מדוע זו התנהגות בלתי מקצועית מצד מנהל." },
{ "sentence": "Because the controversial philosopher was stubbornly _________ in his archaic beliefs, he absolutely refused to engage in any logical debate with his modern peer critics.", "options": ["dogmatic", "flexible", "amenable", "vacillating"], "correctWord": "dogmatic", "explanation": "המילה dogmatic (פוסקני/שמרני) מסבירה מדוע סירב להתווכח בהיגיון." },
{ "sentence": "The eccentric billionaire's luxurious mansion featured a remarkably _________ collection of art, seamlessly blending ancient Egyptian sculptures with vibrant contemporary abstract paintings.", "options": ["eclectic", "homogenous", "mundane", "pedestrian"], "correctWord": "eclectic", "explanation": "המילה eclectic (אקלקטי/מגוון) מתארת את שילוב הסגנונות באוסף האמנות." },
{ "sentence": "The accounting department made an absolutely _________ computational error that ended up costing the international corporation nearly fifty million dollars in a single fiscal quarter.", "options": ["egregious", "trivial", "negligible", "subtle"], "correctWord": "egregious", "explanation": "המילה egregious (שערורייתי/חמור) מתארת את חומרת הטעות שגרמה להפסד עצום." },
{ "sentence": "Despite conducting a massive, heavily coordinated manhunt through the dense jungle, the highly trained fugitives proved far too _________ for the local authorities to securely capture.", "options": ["elusive", "conspicuous", "sedentary", "sluggish"], "correctWord": "elusive", "explanation": "המילה elusive (חמקמק) מסבירה מדוע המשטרה לא הצליחה ללכוד את הנמלטים." },
{ "sentence": "By volunteering weekly at the crowded downtown homeless shelter, the privileged teenagers developed a profound sense of _________ for those struggling with severe generational poverty.", "options": ["empathy", "disdain", "apathy", "animosity"], "correctWord": "empathy", "explanation": "המילה empathy (אמפתיה) מתארת את הרגש שפיתחו הנערים כלפי חסרי הבית." },
{ "sentence": "The relentless, sweltering tropical heat combined with the suffocating humidity began to severely _________ the exhausted marathon runners just halfway through the grueling endurance race.", "options": ["enervate", "invigorate", "galvanize", "bolster"], "correctWord": "enervate", "explanation": "המילה enervate (להחליש/להתיש) מתארת את השפעת החום הכבד על הרצים." },
{ "sentence": "To many renowned modern historians, the sudden and complete collapse of the ancient, highly advanced civilization remains a frustratingly unsolvable _________ that defies logical explanation.", "options": ["enigma", "paradigm", "platitude", "panacea"], "correctWord": "enigma", "explanation": "המילה enigma (תעלומה) מתארת את התמוטטות התרבות העתיקה שטרם פוענחה." },
{ "sentence": "The breathtaking beauty of a colorful summer rainbow is inherently _________, slowly fading away from the sky in a mere matter of fleeting, precious minutes.", "options": ["ephemeral", "perpetual", "infinite", "relentless"], "correctWord": "ephemeral", "explanation": "המילה ephemeral (חולף/זמני) מתארת את היופי של הקשת שנעלמת במהירות." },
{ "sentence": "The university decided to explicitly invite the highly _________ professor to deliver the keynote address due to his vast, unparalleled knowledge of medieval European literature.", "options": ["erudite", "ignorant", "inane", "vacuous"], "correctWord": "erudite", "explanation": "המילה erudite (מלומד) מסבירה מדוע בחרו בו לשאת את נאום הפתיחה." },
{ "sentence": "Attempting to rapidly and aggressively dry the severe chemical burn with a coarse towel will merely _________ the intense pain and damage the delicate tissue further.", "options": ["exacerbate", "mitigate", "alleviate", "assuage"], "correctWord": "exacerbate", "explanation": "המילה exacerbate (להחמיר) מסבירה ששפשוף כוויה כימית במגבת יגרום נזק נוסף." },
{ "sentence": "The sudden emergence of a previously hidden surveillance video served to entirely _________ the falsely accused employee, proving he was completely absent from the crime scene.", "options": ["exonerate", "implicate", "condemn", "incarcerate"], "correctWord": "exonerate", "explanation": "המילה exonerate (לזכות מאשמה) מסבירה את שחרורו של העובד הודות לווידאו." }
];
const staticRestatements = [
{ "original": "Despite the CEO's vehement assertions to the contrary, the corporation's imminent bankruptcy was universally acknowledged by financial analysts.", "options": ["Financial experts unanimously recognized that the company would soon fail, even though its executive director fiercely denied it.", "Because the CEO forcefully denied the rumors, financial analysts began to doubt whether the corporation would actually declare bankruptcy.", "The corporation's bankruptcy was entirely caused by the CEO's refusal to listen to the universal advice of financial analysts.", "Financial analysts and the CEO finally agreed that the company was facing inevitable bankruptcy despite earlier disagreements."], "explanation": "המסיחים מעוותים את הקשר הלוגי; המנכ'ל הכחיש, אך האנליסטים הסכימו שהפשיטה בלתי נמנעת לחלוטין." },
{ "original": "Had the committee been more circumspect in evaluating the proposal, they might have forestalled the catastrophic financial losses that subsequently ensued.", "options": ["The disastrous economic consequences could potentially have been avoided if the board had assessed the plan with greater caution.", "The committee's careful evaluation of the proposal ultimately led to the prevention of catastrophic financial losses.", "Even if the board had been extremely careful, the severe financial deficit that followed was completely inevitable.", "The financial losses occurred mainly because the committee deliberately ignored the cautious advice provided by the proposal."], "explanation": "מסיח 2 טוען שחלק מההפסדים נמנעו, בעוד שבמציאות הם קרו בגלל חוסר זהירות הוועדה." },
{ "original": "The profound impact of the new legislation on marginalized communities was entirely inadvertently overlooked during the initial parliamentary debates.", "options": ["Lawmakers unintentionally failed to consider how significantly the initial laws would affect vulnerable groups when first discussing them.", "During the early debates, parliament intentionally ignored the massive consequences the new laws would have on disadvantaged populations.", "The initial parliamentary discussions successfully highlighted the profound ways in which the new legislation would alter marginalized communities.", "Marginalized groups deliberately avoided participating in the parliamentary debates regarding the significant impact of the new laws."], "explanation": "המילה inadvertently (בשוגג) היא מפתח לפתרון; מסיח 2 הופך זאת בטעות להתעלמות מכוונת וזדונית." },
{ "original": "While the author's early novels were criticized for being prosaic, his later masterpieces are celebrated for their rich, imaginative prose.", "options": ["Although critics deemed the writer's initial books dull, his subsequent great works are highly praised for their creative writing.", "The author's later novels received as much criticism for their plain writing as his early masterpieces did.", "Since his early books were so imaginative, critics were disappointed by the dullness of the author's later works.", "The writer's early novels were widely celebrated, whereas his subsequent masterpieces were heavily criticized for being unoriginal."], "explanation": "המסיחים מחליפים את היחס: היצירות המוקדמות היו בנאליות והמאוחרות זכו לשבחים, ולא להפך." },
{ "original": "It was the mayor's sheer obstinacy, rather than a lack of resources, that hindered the timely completion of the urban renewal project.", "options": ["The city project was delayed primarily because of the mayor's stubbornness, not because there was a shortage of funds.", "A severe lack of resources forced the stubborn mayor to delay the completion of the urban renewal initiative.", "The mayor's determination successfully overcame the resource shortage, allowing the urban project to finish precisely on schedule.", "Because the city lacked sufficient funds, the mayor stubbornly refused to initiate the urban renewal project."], "explanation": "המשפט קובע שהעיכוב נגרם בשל עקשנות (obstinacy) ולא מחוסר משאבים. המסיחים מבלבלים את הסיבה." },
{ "original": "Rarely does a contemporary scientific discovery entirely invalidate a long-held paradigm; instead, it typically refines existing theoretical frameworks.", "options": ["Modern research findings generally improve upon established theories rather than completely disproving traditional scientific models.", "Current scientific breakthroughs almost always destroy long-standing theories, rarely making any minor adjustments to them.", "It is quite common for new discoveries to completely shatter old paradigms without altering the existing theoretical models.", "Long-held scientific paradigms typically reject new discoveries, preferring to rely exclusively on established theoretical frameworks."], "explanation": "המילה rarely (לעיתים נדירות) קריטית; רוב התגליות המדעיות משפרות תיאוריות ולא מבטלות אותן כליל." },
{ "original": "Subsequent to the scandal, the politician was compelled to relinquish his position, forever tarnishing his once-impeccable public reputation.", "options": ["Following the controversy, the official was forced to resign, permanently damaging his previously flawless image.", "The politician decided to willingly leave his post before the scandal could completely destroy his perfect reputation.", "Despite the damaging scandal, the politician retained his flawless reputation and refused to resign from his position.", "After resigning from his role, the politician caused a massive scandal that ruined his historically bad reputation."], "explanation": "המסיחים מפספסים את אלמנט הכפייה (compelled) המרכזי או את הכרונולוגיה המדויקת של שרשרת האירועים." },
{ "original": "The ubiquitous nature of smartphones has not only revolutionized global communication but has also inadvertently exacerbated social isolation among adolescents.", "options": ["While mobile phones have fundamentally changed how people connect, they have also unintentionally increased loneliness among young people.", "Smartphones were purposefully designed to increase social isolation among teenagers while simultaneously improving global communication methods.", "The rarity of mobile devices has prevented global communication from improving, resulting in extreme loneliness for modern teenagers.", "Because teenagers are socially isolated, they heavily rely on smartphones to revolutionize their daily global communication."], "explanation": "המשפט המקורי מדגיש שהבדידות החברתית גברה 'בשוגג' (inadvertently), בניגוד למסיח 2 שטוען שזו כוונה." },
{ "original": "Only by implementing stringent environmental regulations can the government realistically hope to mitigate the detrimental effects of industrial pollution.", "options": ["The administration's only practical chance to reduce the harmful impact of factory emissions is through enforcing strict ecological rules.", "The government can easily solve the pollution crisis without imposing strict regulations if industries cooperate voluntarily.", "Implementing tough environmental laws will unfortunately increase the destructive consequences of industrial pollution in the country.", "Industrial pollution has become so severe that even the strictest environmental regulations can no longer minimize its damage."], "explanation": "המילה Only (רק) מתנה את ההצלחה בתקנות נוקשות, תנאי משמעותי שחסר או מעוות במסיחים." },
{ "original": "Although the artifact appeared to be of ancient origin, meticulous scrutiny revealed it to be a sophisticated modern forgery.", "options": ["Careful examination showed that the item was a complex contemporary fake, despite its seemingly antique appearance.", "Because the object looked incredibly old, experts refused to closely examine whether it was actually a modern copy.", "The modern artifact was so poorly constructed that a quick glance proved it was not an authentic ancient relic.", "Thorough investigation confirmed that the sophisticated artifact was genuinely ancient and not a modern reproduction."], "explanation": "המשפט מציין שהפריט התגלה כמזויף (forgery) בעקבות בדיקה מעמיקה, בניגוד מוחלט לטענת מסיח 4." },
{ "original": "It is a common misconception that introverted individuals lack leadership skills; conversely, they often possess the profound reflective abilities requisite for effective strategic planning.", "options": ["Many falsely believe that introverts cannot lead, whereas in reality, their deep analytical thinking frequently makes them highly capable strategic leaders.", "Introverts are generally known to possess exceptional leadership skills, despite the common misconception that they lack the ability to plan strategically.", "Because introverted people lack profound reflective abilities, it is widely accepted that they cannot successfully participate in effective strategic planning.", "Strategic planning effectively requires profound reflective abilities, which unfortunately prevents many introverted individuals from acquiring necessary leadership skills."], "explanation": "המסיחים טוענים שמופנמים באמת חסרי יכולת מנהיגות, או מבלבלים בין המיתוס למציאות." },
{ "original": "Had the municipal government strictly enforced the existing environmental regulations, the devastating contamination of the local water supply could have been completely averted.", "options": ["The tragic pollution of the region's water could have been entirely prevented if city officials had rigorously applied the environmental laws already in place.", "The municipal government strictly enforced the environmental regulations, which unfortunately led to the completely unavoidable contamination of the local water supply.", "Even if the city had rigorously applied the existing environmental laws, they could not have prevented the devastating pollution of the water supply.", "The devastating contamination of the local water supply caused the municipal government to finally strictly enforce the existing environmental regulations."], "explanation": "המשפט מציג תנאי בטל בעבר. המסיחים מציגים מציאות הפוכה בה התקנות נאכפו או שהזיהום היה בלתי נמנע." },
{ "original": "The relentless pursuit of economic prosperity has frequently marginalized environmental conservation, subordinating long-term ecological sustainability to immediate financial gains.", "options": ["The constant drive for financial wealth has often pushed environmental protection aside, prioritizing quick monetary profits over enduring ecological balance.", "The continuous effort to preserve the environment has frequently prevented economic prosperity by prioritizing long-term ecological sustainability over immediate monetary gains.", "Because long-term ecological sustainability is prioritized, the relentless pursuit of immediate financial gains has been significantly marginalized in recent years.", "Economic prosperity and environmental conservation are usually pursued simultaneously, proving that immediate financial profits do not necessarily damage ecological sustainability."], "explanation": "המשפט קובע שהכלכלה באה על חשבון הסביבה. המסיחים הופכים את סדר העדיפויות או טוענים לשוויון." },
{ "original": "Although the preliminary experimental results were remarkably promising, the researchers remained understandably skeptical until the findings could be independently corroborated by peer reviewers.", "options": ["The scientists maintained an expected level of doubt regarding their highly encouraging initial outcomes until external experts could verify the experiment's results.", "Because the preliminary experimental results were so remarkably promising, the researchers completely discarded their skepticism and avoided external peer verification.", "Peer reviewers were understandably skeptical of the preliminary findings because the researchers failed to independently corroborate the highly promising experimental results.", "The researchers were disappointed that the initial experimental results were unpromising, even though peer reviewers eventually corroborated their scientific findings."], "explanation": "המסיחים טוענים שהחוקרים איבדו את הספקנות שלהם או שהעמיתים הם אלו שהיו ספקנים מלכתחילה." },
{ "original": "Not only did the prominent CEO systematically mismanage the corporation's vast pension funds, but he also deliberately falsified quarterly financial reports to deceive external auditors.", "options": ["The renowned corporate leader was guilty of both improperly handling the massive retirement accounts and intentionally lying on financial documents to trick external investigators.", "The prominent CEO systematically mismanaged the pension funds solely because external auditors deliberately falsified the quarterly financial reports to deceive the corporation.", "Although the CEO intentionally falsified the quarterly financial reports, he actually managed the corporation's vast pension funds with extreme care and precision.", "External auditors discovered that the CEO accidentally mismanaged the pension funds after he submitted perfectly accurate quarterly financial reports for their review."], "explanation": "המשפט מתאר שתי עבירות חמורות של המנכ'ל. המסיחים מטילים אשמה על גורם אחר או טוענים שחלק ממעשיו היו חוקיים." },
{ "original": "In stark contrast to his highly charismatic and wildly popular predecessor, the newly elected mayor struggled significantly to connect with the city's diverse working-class demographics.", "options": ["Unlike the extremely charming and beloved leader who came before him, the new city executive found it exceptionally difficult to relate to the varied working-class population.", "Because the previous mayor was highly charismatic, the newly elected official easily managed to build a strong connection with the city's diverse working-class demographics.", "The newly elected mayor was vastly more popular and charismatic than his predecessor, which allowed him to easily connect with the diverse working-class population.", "Both the newly elected mayor and his predecessor struggled significantly to form meaningful connections with the city's increasingly diverse working-class demographics."], "explanation": "המסיחים מתעלמים מהניגוד החריף (In stark contrast) וטוענים לדמיון בין ראשי העיר או להצלחת ראש העיר החדש." },
{ "original": "Owing to a cascade of entirely unforeseen logistical complications, the massive infrastructure project was indefinitely postponed, much to the dismay of the local residents.", "options": ["Due to a series of completely unexpected organizational difficulties, the large public works initiative was delayed without a new date, greatly disappointing the community.", "The massive infrastructure project was completed ahead of schedule, completely resolving the unforeseen logistical complications and bringing immense joy to the local residents.", "Local residents were thrilled when the massive infrastructure project was indefinitely postponed because it had caused a cascade of entirely unforeseen logistical complications.", "Because the local residents were dismayed by the massive infrastructure project, organizers deliberately created logistical complications to indefinitely postpone its construction."], "explanation": "המסיחים מעוותים את סיבת העיכוב, טוענים שהפרויקט הושלם מוקדם, או טוענים שהתושבים שמחו על ביטולו." },
{ "original": "The novel's profoundly convoluted narrative structure makes it exceedingly difficult to follow; nevertheless, its brilliant thematic depth firmly establishes it as a modern literary masterpiece.", "options": ["While the book's highly complicated plot is incredibly hard to understand, its exceptional exploration of profound ideas secures its status as a contemporary classic.", "Because the novel's narrative structure is exceptionally easy to follow, critics widely recognize it as a modern literary masterpiece with brilliant thematic depth.", "The novel is completely ignored as a modern literary masterpiece mainly because its profoundly convoluted narrative structure completely ruins its brilliant thematic depth.", "Despite its brilliant thematic depth, the novel fails to be a modern literary masterpiece because its convoluted narrative structure makes it impossible to publish."], "explanation": "המבנה המקורי מציג חיסרון שלעומתו קיים יתרון המכריע את הכף. המסיחים טוענים שהחיסרון גובר או מבטלים אותו לחלוטין." },
{ "original": "Given that the national economy is currently experiencing an unprecedented downturn, the federal government's decision to drastically increase corporate taxation seems exceptionally ill-timed.", "options": ["Because the country's financial state is in a historically bad decline, the national administration's choice to severely raise business taxes appears remarkably poorly timed.", "The federal government's decision to drastically lower corporate taxation is perfectly timed to help the national economy escape its unprecedented and severe downturn.", "Since the national economy is currently experiencing unprecedented growth, the federal government's decision to drastically increase corporate taxation is considered exceptionally well-timed.", "The unprecedented economic downturn was directly caused by the federal government's surprisingly well-timed decision to drastically decrease all forms of corporate taxation."], "explanation": "המשפט מבקר העלאת מסים בתקופת שפל. המסיחים מדברים על הורדת מסים או על צמיחה כלכלית." },
{ "original": "Seldom has a technological innovation been adopted with such incredible velocity, irrevocably altering the foundational landscape of global telecommunications within a single decade.", "options": ["It is extremely rare for a new technology to be embraced so swiftly, permanently changing the basic structure of worldwide communication in just ten years.", "The foundational landscape of global telecommunications has always changed rapidly, proving that this recent technological innovation was adopted at a very normal and expected speed.", "Despite being adopted with incredible velocity, the new technological innovation completely failed to irrevocably alter the foundational landscape of global telecommunications.", "A single decade was simply not enough time for the incredibly fast technological innovation to irrevocably alter the landscape of global telecommunications."], "explanation": "המילה Seldom (לעיתים נדירות) קריטית. המסיחים מפספסים את נדירות המהירות או טוענים שהטכנולוגיה נכשלה." },
{ "original": "Whereas classical economic theories presume that consumers invariably make entirely rational financial choices, behavioral economics demonstrates that human purchasing decisions are frequently driven by sheer emotion.", "options": ["While traditional financial models assume buyers always act with complete logic, modern behavioral studies show that people's spending habits are often dictated by deep feelings.", "Classical economic theories and behavioral economics both clearly demonstrate that human purchasing decisions are invariably driven by sheer emotion rather than entirely rational financial choices.", "Because behavioral economics proves that consumers make rational choices, classical economic theories falsely assume that spending is frequently driven by sheer emotion.", "Behavioral economics strongly presumes that consumers invariably make rational financial choices, whereas classical theories prove that purchasing decisions are always driven by sheer emotion."], "explanation": "המשפט מנגיד בין שתי תיאוריות כלכליות. המסיחים טוענים שהן מסכימות או הופכים את התפקידים ביניהן." },
{ "original": "To fully comprehend the intense geopolitical tensions of the region, one must thoroughly examine the extensive historical grievances that profoundly underlie the current ongoing diplomatic conflicts.", "options": ["Understanding the severe international frictions in the area requires a deep analysis of the deep-rooted historical resentments that essentially cause today's political disputes.", "The current ongoing diplomatic conflicts have absolutely no connection to the region's extensive historical grievances, making it unnecessary to examine past political tensions.", "One can easily comprehend the intense geopolitical tensions without ever thoroughly examining the extensive historical grievances that currently plague the region.", "Because the diplomatic conflicts have been successfully resolved, there is no longer any need to deeply examine the extensive historical grievances of the region."], "explanation": "המשפט קושר בין העבר הבעייתי להווה המתוח. המסיחים שוללים קשר זה או טוענים שהקונפליקט נפתר." },
{ "original": "The notoriously reclusive author consistently eschewed all forms of public publicity, granting scarcely any interviews throughout the entire duration of his incredibly prolific writing career.", "options": ["The famously private writer deliberately avoided media attention of any kind, participating in very few interviews despite producing a massive amount of literary work.", "The incredibly prolific author constantly sought out all forms of public publicity, eagerly granting numerous interviews throughout the entire duration of his writing career.", "Because he granted so many interviews during his writing career, the author became notoriously reclusive and completely stopped producing any new literary works.", "The author's highly prolific writing career was essentially ruined because he strictly eschewed public publicity and angrily refused to grant any media interviews."], "explanation": "המשפט מדגיש שהסופר נמנע מפרסום. המסיחים טוענים שהוא חיפש פרסום או שההימנעות הרסה את הקריירה שלו." },
{ "original": "Scarcely had the controversial environmental reform bill been officially ratified when a massive coalition of industrial leaders launched a fiercely aggressive legal campaign to entirely dismantle it.", "options": ["Almost immediately after the disputed ecological legislation was formally approved, a large group of corporate executives initiated a vicious lawsuit to completely destroy it.", "The massive coalition of industrial leaders successfully completely dismantled the environmental reform bill long before it could be officially ratified by the government.", "Because the controversial environmental reform bill was never officially ratified, the massive coalition of industrial leaders abandoned their fiercely aggressive legal campaign against it.", "A massive coalition of industrial leaders heavily supported the official ratification of the controversial environmental reform bill, launching a legal campaign to fiercely protect it."], "explanation": "המבנה 'Scarcely... when...' מציין סמיכות זמנים. המסיחים מבלבלים את סדר האירועים או הופכים התנגדות לתמיכה." },
{ "original": "The sudden implementation of the exorbitant tariffs not only severely crippled the fragile import sector but also dramatically intensified the already soaring domestic inflation rates.", "options": ["The abrupt application of the extremely high taxes both heavily damaged the weak importing industry and significantly worsened the rapidly rising national prices.", "The fragile import sector was dramatically intensified by the sudden implementation of the exorbitant tariffs, which completely eliminated the already soaring domestic inflation rates.", "Although the exorbitant tariffs severely crippled the fragile import sector, they successfully managed to significantly reduce the already soaring domestic inflation rates.", "The sudden removal of the exorbitant tariffs surprisingly crippled the fragile import sector while simultaneously dramatically intensifying the nation's soaring inflation rates."], "explanation": "המשפט המקורי מתאר שתי תוצאות שליליות של מהלך כלכלי. המסיחים הופכים את אחת התוצאות לחיובית או משנים את המהלך (הסרה במקום יישום)." },
{ "original": "Despite an abundance of irrefutable empirical evidence corroborating the new scientific paradigm, a stubborn faction of veteran researchers remained fiercely entrenched in their outdated methodologies.", "options": ["Even with plenty of undeniable factual proof supporting the innovative scientific model, a rigid group of older scientists stubbornly clung to their obsolete practices.", "Because there was a severe lack of irrefutable empirical evidence, a stubborn faction of veteran researchers rightly remained fiercely entrenched in their outdated methodologies.", "The abundance of undeniable empirical evidence convinced the stubborn faction of veteran researchers to finally completely abandon their fiercely outdated methodologies.", "A stubborn faction of veteran researchers successfully proved that the new scientific paradigm was completely false despite the abundance of irrefutable empirical evidence."], "explanation": "המשפט מדגיש הוכחות חותכות מול עקשנות לא רציונלית. המסיחים טוענים שחסרות הוכחות או שהעקשנים השתכנעו." },
{ "original": "Unless the feuding international factions immediately engage in constructive and binding diplomacy, an incredibly devastating regional conflict will undoubtedly become absolutely unavoidable.", "options": ["If the arguing global groups do not promptly participate in positive and obligatory negotiations, a highly destructive local war will certainly become completely inevitable.", "Because the feuding international factions successfully engaged in constructive diplomacy, the incredibly devastating regional conflict has thankfully become absolutely avoidable.", "The feuding international factions must completely avoid constructive and binding diplomacy in order to ensure that an incredibly devastating regional conflict remains unavoidable.", "An incredibly devastating regional conflict will undoubtedly be avoided only if the feuding international factions refuse to immediately engage in constructive diplomacy."], "explanation": "משפט תנאי (Unless... will become). המסיחים טוענים שהדיפלומטיה כבר הצליחה, או שדווקא הימנעות מדיפלומטיה תמנע מלחמה." },
{ "original": "The artist's latest avant-garde exhibition was widely perceived as a brilliant critique of modern consumerism, though some prominent detractors dismissed it as merely pretentious visual clutter.", "options": ["While many viewed the creator's innovative gallery show as a genius condemnation of contemporary materialism, several notable critics rejected it as simply arrogant and messy.", "The artist's latest avant-garde exhibition was entirely dismissed by everyone as pretentious visual clutter because it failed to provide a brilliant critique of modern consumerism.", "Some prominent detractors strongly praised the artist's avant-garde exhibition as a brilliant critique, though the general public dismissed it as merely pretentious visual clutter.", "The artist's brilliant critique of modern consumerism was ultimately ruined because the avant-garde exhibition was entirely composed of heavily pretentious visual clutter."], "explanation": "המשפט מציג חלוקה ברורה: הרוב ראו בכך ביקורת גאונית, וחלק מהמבקרים זלזלו. המסיחים טוענים שכולם זלזלו או שהמבקרים שיבחו." },
{ "original": "In light of the unprecedented technological advancements in artificial intelligence, many traditional, manually-intensive professions are highly likely to become completely obsolete within the next two decades.", "options": ["Considering the unmatched recent progress in machine learning technology, numerous conventional jobs requiring heavy physical labor will probably disappear entirely in twenty years.", "Because traditional, manually-intensive professions are highly likely to become completely obsolete, technological advancements in artificial intelligence have been unprecedentedly halted for the next two decades.", "Unprecedented technological advancements in artificial intelligence are highly likely to create millions of new traditional, manually-intensive professions within the next two decades.", "Despite the unprecedented technological advancements in artificial intelligence, traditional, manually-intensive professions are highly unlikely to become completely obsolete within the next two decades."], "explanation": "הביטוי In light of (לאור) מתאר יחס סיבה-תוצאה. המסיחים מנתקים את הקשר, טוענים שייווצרו משרות ידיניות, או שהבינה המלאכותית נעצרה." },
{ "original": "Far from being a spontaneous act of rebellious defiance, the highly publicized political uprising was, in fact, meticulously orchestrated by a shadowy syndicate of wealthy dissidents.", "options": ["Instead of being an unplanned show of insubordination, the widely known governmental revolt was actually carefully planned by a secretive group of rich objectors.", "The highly publicized political uprising was essentially a spontaneous act of rebellious defiance that completely surprised the shadowy syndicate of wealthy dissidents.", "A shadowy syndicate of wealthy dissidents desperately attempted to prevent the highly publicized political uprising, which was a completely spontaneous act of rebellious defiance.", "The meticulous orchestration by the shadowy syndicate of wealthy dissidents completely failed to generate the spontaneous act of rebellious defiance they had heavily publicized."], "explanation": "הביטוי Far from (רחוק מלהיות) שולל את ההנחה שמדובר באקט ספונטני ומאשר שמדובר בתכנון מדוקדק. המסיחים מתארים את האקט כספונטני." },
{ "original": "While the corporate executive's aggressive expansion strategy drastically amplified quarterly revenues, it simultaneously fostered a deeply toxic workplace environment that severely decimated overall employee morale.", "options": ["Even though the leader's ruthless growth plan significantly boosted short-term profits, it concurrently created a highly poisonous office culture that massively destroyed staff enthusiasm.", "The corporate executive's aggressive expansion strategy failed to amplify quarterly revenues because it simultaneously fostered a deeply toxic workplace environment that decimated employee morale.", "Because the corporate executive fostered a deeply toxic workplace environment, the aggressive expansion strategy was completely unable to drastically amplify the quarterly revenues.", "The deeply toxic workplace environment actually amplified quarterly revenues and completely improved overall employee morale, validating the corporate executive's aggressive expansion strategy."], "explanation": "המשפט מתאר תוצאה עסקית חיובית מול תוצאה חברתית שלילית. המסיחים טוענים שהאסטרטגיה העסקית נכשלה בגלל המורל, או שהסביבה הרעילה שיפרה את המורל." },
{ "original": "As a direct consequence of the prolonged, unprecedented drought, the regional government was urgently compelled to implement extremely stringent water conservation protocols across all municipalities.", "options": ["Because of the extended and historically severe lack of rain, local authorities were forced to immediately enforce very strict liquid-saving rules throughout every town.", "The regional government was urgently compelled to intentionally cause a prolonged, unprecedented drought in order to forcefully implement extremely stringent water conservation protocols.", "Despite the incredibly stringent water conservation protocols implemented across all municipalities, a prolonged and unprecedented drought ultimately destroyed the regional government.", "The prolonged, unprecedented drought completely ended precisely when the regional government successfully implemented the extremely stringent water conservation protocols across all municipalities."], "explanation": "סיבה (בצורת) ותוצאה (תקנות חירום). המסיחים הופכים את הסדר (התקנות גרמו לבצורת) או מציגים קשרי זמן בדיוניים." },
{ "original": "The controversial new biography purportedly aims to thoroughly humanize the legendary historical figure, yet it paradoxically emphasizes his egregious personal flaws over his monumental political achievements.", "options": ["The disputed book supposedly intends to make the famous icon seem more relatable, but confusingly highlights his terrible private faults rather than his enormous governmental successes.", "The controversial new biography completely completely ignores the legendary historical figure's egregious personal flaws in order to successfully emphasize his monumental political achievements.", "Because the legendary historical figure had so many egregious personal flaws, the controversial new biography ultimately failed to emphasize his monumental political achievements.", "The controversial new biography perfectly balances the legendary historical figure's egregious personal flaws with a thorough emphasis on his monumental political achievements."], "explanation": "הביוגרפיה מתיימרת (purportedly) להאניש אך בפועל (paradoxically) מבליטה חסרונות. המסיחים טוענים שהיא מתעלמת מהחסרונות או מאזנת אותם." },
{ "original": "Notwithstanding the heavy barrage of continuous hostile press, the resilient independent candidate somehow managed to officially secure a totally unprecedented percentage of the overall national vote.", "options": ["In spite of the constant flood of negative media coverage, the tough unaffiliated nominee miraculously succeeded in obtaining a historically high portion of the country's ballots.", "The heavy barrage of continuous hostile press completely prevented the resilient independent candidate from successfully securing a totally unprecedented percentage of the national vote.", "Because the resilient independent candidate managed to officially secure an unprecedented percentage of the vote, the press suddenly ceased their heavy barrage of hostile coverage.", "The resilient independent candidate actively encouraged a heavy barrage of continuous hostile press in order to easily secure a totally unprecedented percentage of the national vote."], "explanation": "המילה Notwithstanding (למרות) מתארת הצלחה כנגד הסיכויים. המסיחים טוענים שהתקשורת הכשילה אותו, או שזה היה תרגיל מכוון." },
{ "original": "The sweeping, newly enacted tax reforms are fundamentally designed to heavily stimulate domestic industrial growth; conversely, they threaten to completely alienate crucial foreign corporate investors.", "options": ["The broad recent financial laws essentially intend to strongly boost local manufacturing expansion; on the other hand, they risk thoroughly driving away essential international business financiers.", "The sweeping, newly enacted tax reforms completely alienated crucial foreign corporate investors, which fundamentally prevented them from heavily stimulating any domestic industrial growth.", "Because they completely alienate crucial foreign corporate investors, the sweeping tax reforms were fundamentally designed to actively destroy domestic industrial growth.", "The sweeping tax reforms successfully stimulated domestic industrial growth precisely by intentionally threatening to completely alienate all crucial foreign corporate investors."], "explanation": "המשפט מתאר מטרה חיובית (צמיחה מקומית) לצד סיכון שלילי (הרחקת משקיעים זרים). המסיחים קושרים אותם בקשר סיבתי מוטעה." },
{ "original": "So deeply ingrained was the ancient myth within the indigenous culture that even decades of rigorous scientific education completely failed to definitively eradicate its widespread public acceptance.", "options": ["The old legend was so profoundly embedded in the native society that years of strict rational schooling proved totally unable to permanently eliminate its broad popular belief.", "Decades of rigorous scientific education successfully eradicated the ancient myth because it was completely unaccepted within the deep indigenous culture.", "The indigenous culture actively used decades of rigorous scientific education to definitively eradicate the ancient myth and destroy its widespread public acceptance.", "Because the ancient myth was definitively eradicated by rigorous scientific education, the indigenous culture was forced to deeply ingrain new widespread public beliefs."], "explanation": "המבנה (So... that...) מתאר מיתוס כה מושרש עד שגם המדע לא עקר אותו. המסיחים טוענים שהמדע כן הצליח למגר אותו." },
{ "original": "The brilliant young architect's remarkably innovative design was unequivocally praised for its striking modern aesthetic, yet it was simultaneously heavily criticized for its glaring structural impracticality.", "options": ["The clever designer's highly original blueprint received absolute acclaim for its beautiful contemporary look, but it was also strongly condemned for its obvious building dysfunctionality.", "Because the brilliant young architect's remarkably innovative design lacked a striking modern aesthetic, it was unequivocally praised for its outstanding structural practicality.", "The remarkably innovative design was simultaneously heavily criticized for its striking modern aesthetic and unequivocally praised for its glaring structural impracticality.", "The young architect's striking modern aesthetic was completely ruined by the remarkably innovative design, leading to severe criticism regarding its glaring structural impracticality."], "explanation": "התכנון זוכה לשבחים על יופי אך לביקורת על חוסר מעשיות. המסיחים הופכים את התשבחות לביקורות (משבחים חוסר מעשיות או מבקרים את היופי)." },
{ "original": "Only after the disastrous public relations scandal heavily severely impacted their quarterly profits did the stubborn corporation reluctantly agree to implement comprehensive ethical oversight protocols.", "options": ["The obstinate company begrudgingly consented to establish thorough moral monitoring procedures strictly following the severe financial damage caused by the terrible media controversy.", "The disastrous public relations scandal heavily severely impacted their quarterly profits because the stubborn corporation had already willingly agreed to implement comprehensive ethical oversight protocols.", "By willingly implementing comprehensive ethical oversight protocols, the stubborn corporation successfully avoided the disastrous public relations scandal that would have impacted their quarterly profits.", "The stubborn corporation entirely refused to implement comprehensive ethical oversight protocols even after the disastrous public relations scandal heavily impacted their quarterly profits."], "explanation": "החברה הסכימה רק לאחר (Only after) הנזק הכספי. המסיחים טוענים שהיא סירבה גם לאחר מכן, או שהסכימה מרצונה לפני כן." },
{ "original": "The meticulous sociological study effectively illustrates how rapid suburban gentrification inherently displaces historically marginalized working-class families, thereby quietly deepening deeply rooted systemic economic inequalities.", "options": ["The careful academic research clearly shows that fast neighborhood upgrading naturally forces out traditionally disadvantaged low-income households, subsequently silently worsening entrenched financial disparities.", "Rapid suburban gentrification actually provides historically marginalized working-class families with significant economic opportunities, completely solving deeply rooted systemic inequalities according to the meticulous study.", "The meticulous sociological study was entirely unable to effectively illustrate how rapid suburban gentrification inherently displaces historically marginalized working-class families and deepens economic inequalities.", "Historically marginalized working-class families purposely utilize rapid suburban gentrification to silently deepen their own deeply rooted systemic economic inequalities, as illustrated by the study."], "explanation": "המחקר מראה שג'נטריפיקציה פוגעת במשפחות עניות. המסיחים טוענים שג'נטריפיקציה עוזרת להן, או שהמשפחות גורמות לאי-שוויון בעצמן." },
{ "original": "Irrespective of the CEO's desperate last-minute strategic maneuvers, the impending hostile corporate takeover remained an absolutely inevitable certainty in the eyes of all major financial analysts.", "options": ["Regardless of the executive's frantic final tactical moves, the approaching unfriendly business acquisition continued to be a completely unavoidable fact according to every top market expert.", "The impending hostile corporate takeover was completely stopped by the CEO's desperate last-minute strategic maneuvers, thoroughly surprising all major financial analysts.", "Because the impending hostile corporate takeover was an absolutely inevitable certainty, the CEO purposefully avoided making any desperate last-minute strategic maneuvers.", "All major financial analysts desperately performed last-minute strategic maneuvers in order to completely ensure the absolutely inevitable certainty of the impending hostile corporate takeover."], "explanation": "המילה Irrespective (ללא התחשבות ב-) מראה שמהלכי המנכ'ל לא עזרו. המסיחים טוענים שהם עזרו או שהאנליסטים ביצעו את המהלכים." },
{ "original": "The prolific classical composer's final, heavily unfinished symphony possesses a uniquely haunting emotional quality that arguably vastly surpasses the profound brilliance of his earlier completed masterpieces.", "options": ["The famous musician's last, largely incomplete musical work holds a strangely touching sentimental nature that debatably greatly exceeds the deep genius of his previous finished creations.", "Because the prolific classical composer's final symphony was heavily unfinished, it completely lacked the uniquely haunting emotional quality and profound brilliance of his earlier completed masterpieces.", "The uniquely haunting emotional quality of his earlier completed masterpieces arguably vastly surpasses the profound brilliance of the prolific classical composer's final, heavily unfinished symphony.", "The prolific classical composer intentionally left his final symphony heavily unfinished to perfectly match the uniquely haunting emotional quality of his earlier completed masterpieces."], "explanation": "המשפט קובע שהיצירה האחרונה, אף שאינה גמורה, מתעלה על הקודמות. המסיחים טוענים שהיא נופלת מהן בגלל היותה לא גמורה." },
{ "original": "While the immediate implementation of the radical healthcare policy may temporarily drastically disrupt established medical services, it will ultimately fundamentally ensure universal access to life-saving treatments.", "options": ["Even though the prompt execution of the extreme medical plan might briefly heavily disturb current health provisions, it will eventually basically guarantee that everyone receives vital care.", "The radical healthcare policy will permanently and drastically disrupt established medical services, completely preventing it from ever ensuring universal access to life-saving treatments.", "Because it immediately ensures universal access to life-saving treatments, the radical healthcare policy will completely completely completely avoid drastically disrupting established medical services.", "The ultimate goal of the radical healthcare policy is to temporarily drastically disrupt established medical services rather than fundamentally ensure universal access to life-saving treatments."], "explanation": "קונפליקט בין נזק זמני לרווח ארוך טווח. המסיחים טוענים שהנזק קבוע, שאין נזק בכלל, או שהנזק הוא המטרה עצמה." },
{ "original": "The veteran politician's famously ambiguous and completely noncommittal rhetoric allowed him to expertly entirely evade heavily controversial topics during the highly volatile and chaotic presidential debate.", "options": ["The experienced official's well-known vague and totally unpledged language permitted him to skillfully completely dodge highly disputed issues throughout the extremely unstable and messy national forum.", "During the highly volatile and chaotic presidential debate, the veteran politician used extremely clear and committal rhetoric to expertly entirely confront heavily controversial topics.", "The veteran politician's famously ambiguous and completely noncommittal rhetoric completely failed to help him evade heavily controversial topics during the highly volatile presidential debate.", "Because he expertly entirely evaded heavily controversial topics, the veteran politician was strictly forbidden from using his famously ambiguous and completely noncommittal rhetoric during the debate."], "explanation": "רטוריקה מעורפלת (ambiguous) עזרה לו להתחמק (evade). המסיחים טוענים שהרטוריקה הייתה ברורה, או שהיא נכשלה." },
{ "original": "Should the international regulatory committee discover any definitive concrete evidence of massive widespread environmental fraud, the offending multinational corporation will immediately face unprecedented catastrophic financial penalties.", "options": ["If the global governing board finds any unquestionable factual proof of huge broad ecological deception, the guilty global business will instantly endure uniquely devastating monetary fines.", "The international regulatory committee immediately faced unprecedented catastrophic financial penalties because they blatantly ignored definitive concrete evidence of massive widespread environmental fraud by the corporation.", "Even if the international regulatory committee discovers definitive concrete evidence of massive widespread environmental fraud, the offending multinational corporation will effortlessly completely avoid any financial penalties.", "The offending multinational corporation strictly demanded that the international regulatory committee discover definitive concrete evidence before issuing any unprecedented catastrophic financial penalties."], "explanation": "המשפט בנוי כתנאי (Should they discover -> corporation will face penalties). המסיחים מבלבלים מי נענש או קובעים שהחברה תחמוק מעונש." },
{ "original": "The controversial architectural monument was simultaneously praised for its daring, avant-garde stylistic innovation and vehemently utterly despised for completely fundamentally clashing with the city's historic urban skyline.", "options": ["The disputed building structure was concurrently admired for its brave, modern design originality and aggressively totally hated for entirely basically conflicting with the town's classic city horizon.", "Because it perfectly harmonized with the city's historic urban skyline, the controversial architectural monument was vehemently utterly despised for its extreme lack of daring stylistic innovation.", "The controversial architectural monument was completely fundamentally praised for successfully clashing with the historic urban skyline and entirely despised for lacking any daring stylistic innovation.", "The historic urban skyline was daringly completely destroyed in order to perfectly accommodate the controversial architectural monument and its avant-garde stylistic innovation."], "explanation": "קונפליקט בין יופי מודרני לבין חוסר השתלבות בנוף המסורתי. המסיחים טוענים שהמבנה השתלב היטב, או שהנוף ההיסטורי נהרס במכוון עבורו." },
{ "original": "The seemingly completely benign legislative amendment contained several heavily obscured legal loopholes that covertly systematically allowed massive powerful corporations to entirely legally evade their heavy tax obligations.", "options": ["The apparently totally harmless legal change held multiple deeply hidden legal gaps that secretly routinely permitted huge influential businesses to completely lawfully dodge their large monetary duties.", "The heavily obscured legal loopholes completely prevented massive powerful corporations from legally evading their heavy tax obligations, making the legislative amendment seemingly completely benign.", "Because the massive powerful corporations legally evaded their heavy tax obligations, the seemingly completely benign legislative amendment was openly completely completely completely rejected.", "The legislative amendment was expressly purposely designed to expose and close the heavily obscured legal loopholes that allowed massive powerful corporations to secretly evade their taxes."], "explanation": "התיקון התמים-לכאורה אפשר התחמקות ממס דרך פרצות נסתרות. המסיחים טוענים שהתיקון מנע התחמקות ממס." },
{ "original": "The sheer unprecedented scale of the devastating humanitarian crisis utterly completely overwhelmed the heavily underfunded and poorly extremely disorganized international relief agencies attempting to provide immediate assistance.", "options": ["The immense unmatched size of the disastrous human emergency entirely totally defeated the severely under-resourced and badly highly unstructured global charity groups trying to give instant help.", "Because the international relief agencies were so heavily well-funded and well-organized, they easily effortlessly completely managed the sheer unprecedented scale of the devastating humanitarian crisis.", "The heavily underfunded international relief agencies deliberately created the devastating humanitarian crisis in order to completely overwhelm the extremely disorganized local authorities attempting to provide immediate assistance.", "The sheer unprecedented scale of the international relief agencies utterly completely overwhelmed the devastating humanitarian crisis, quickly resolving the heavily underfunded emergency."], "explanation": "המשבר הכריע את סוכנויות הסיוע כי היו חסרות-תקצוב (underfunded). המסיחים טוענים שהסוכנויות ניצחו את המשבר בקלות." },
{ "original": "Although the highly charismatic new political leader fiercely fiercely promised sweeping, radical systemic changes, his administration's initial legislative actions were remarkably highly conservative and extremely cautious.", "options": ["Even though the very charming recent governmental head passionately aggressively vowed broad, extreme structural shifts, his team's first legal moves were noticeably very traditional and incredibly careful.", "Because the highly charismatic new political leader's initial legislative actions were remarkably highly conservative, he fiercely fiercely refused to promise any sweeping, radical systemic changes.", "The highly charismatic new political leader completely fulfilled his fierce promises of sweeping, radical systemic changes, proving that his administration's initial actions were not conservative.", "The administration's remarkably highly conservative and extremely cautious initial legislative actions strictly strictly prevented the highly charismatic new political leader from making any fierce promises."], "explanation": "הבטיח רפורמות רדיקליות (radical) אך פעל בשמרנות (conservative). המסיחים קובעים שהוא קיים את הבטחותיו או מעולם לא הבטיח אותן." },
{ "original": "The prolonged, unprecedented period of heavy economic stagnation predictably invariably led to a massive, widespread massive resurgence of highly extreme radicalized nationalist political movements across the continent.", "options": ["The extended, unmatched time of severe financial inactivity expectedly consistently resulted in a huge, extensive large revival of very intense fanatical patriotic governmental groups throughout the landmass.", "A massive, widespread massive resurgence of highly extreme radicalized nationalist political movements successfully prevented any prolonged, unprecedented period of heavy economic stagnation across the continent.", "Because of the massive resurgence of highly extreme radicalized nationalist political movements, the continent experienced an unprecedentedly incredibly rapid and heavy period of massive economic growth.", "The prolonged, unprecedented period of heavy economic stagnation successfully completely eliminated the massive, widespread resurgence of highly extreme radicalized nationalist political movements across the continent."], "explanation": "השפל הכלכלי הוביל לעליית הלאומנות. המסיחים טוענים שהלאומנות מנעה את השפל הכלכלי או שהשפל מנע לאומנות." }
];

allWords = [    {
        "eng": "abacus",
        "heb": "חשבונייה"
    },
    {
        "eng": "abandon",
        "heb": "לנטוש"
    },
    {
        "eng": "abduct",
        "heb": "לחטוף"
    },
    {
        "eng": "abhor",
        "heb": "לתעב"
    },
    {
        "eng": "abide",
        "heb": "לציית"
    },
    {
        "eng": "ability",
        "heb": "יכולת"
    },
    {
        "eng": "able",
        "heb": "יכול"
    },
    {
        "eng": "about",
        "heb": "אודות"
    },
    {
        "eng": "above",
        "heb": "מעל"
    },
    {
        "eng": "above all",
        "heb": "מעל לכל"
    },
    {
        "eng": "abroad",
        "heb": "לחו\"ל"
    },
    {
        "eng": "abrupt",
        "heb": "פתאומי"
    },
    {
        "eng": "absence",
        "heb": "היעדרות, חוסר"
    },
    {
        "eng": "absent",
        "heb": "חסר"
    },
    {
        "eng": "absolute",
        "heb": "מוחלט"
    },
    {
        "eng": "absolutely",
        "heb": "לחלוטין"
    },
    {
        "eng": "absorb",
        "heb": "לספוג"
    },
    {
        "eng": "abstain",
        "heb": "להימנע"
    },
    {
        "eng": "absurd",
        "heb": "מגוחך"
    },
    {
        "eng": "abundance",
        "heb": "שפע"
    },
    {
        "eng": "abuse",
        "heb": "התעללות"
    },
    {
        "eng": "academic",
        "heb": "אקדמי"
    },
    {
        "eng": "accelerate",
        "heb": "להאיץ"
    },
    {
        "eng": "accentuate",
        "heb": "להדגיש"
    },
    {
        "eng": "accept",
        "heb": "לקבל"
    },
    {
        "eng": "acceptable",
        "heb": "מקובל"
    },
    {
        "eng": "acceptance",
        "heb": "הסכמה"
    },
    {
        "eng": "accessible",
        "heb": "נגיש"
    },
    {
        "eng": "accident",
        "heb": "תאונה"
    },
    {
        "eng": "acclaim",
        "heb": "להריע"
    },
    {
        "eng": "accommodate",
        "heb": "לשכן, לארח"
    },
    {
        "eng": "accompany",
        "heb": "ללוות"
    },
    {
        "eng": "accomplices",
        "heb": "שותפים לדבר עבירה"
    },
    {
        "eng": "accomplish",
        "heb": "להשלים"
    },
    {
        "eng": "accomplished",
        "heb": "מומחה"
    },
    {
        "eng": "accomplishment",
        "heb": "הישג"
    },
    {
        "eng": "according",
        "heb": "לפי"
    },
    {
        "eng": "accordingly",
        "heb": "בהתאם"
    },
    {
        "eng": "account",
        "heb": "חשבון"
    },
    {
        "eng": "accumulate",
        "heb": "לצבור"
    },
    {
        "eng": "accuracy",
        "heb": "דיוק"
    },
    {
        "eng": "accurate",
        "heb": "מדויק"
    },
    {
        "eng": "accusation",
        "heb": "האשמה"
    },
    {
        "eng": "accustomed",
        "heb": "מורגל"
    },
    {
        "eng": "achieve",
        "heb": "להשיג"
    },
    {
        "eng": "acknowledge",
        "heb": "להכיר"
    },
    {
        "eng": "acquire",
        "heb": "לרכוש"
    },
    {
        "eng": "acquisition",
        "heb": "רכישה"
    },
    {
        "eng": "acquitted",
        "heb": "זוכה מאשמה"
    },
    {
        "eng": "across",
        "heb": "לרוחב"
    },
    {
        "eng": "activate",
        "heb": "להפעיל"
    },
    {
        "eng": "active",
        "heb": "פעיל"
    },
    {
        "eng": "activist",
        "heb": "פעיל"
    },
    {
        "eng": "actor",
        "heb": "שחקן"
    },
    {
        "eng": "actress",
        "heb": "שחקנית"
    },
    {
        "eng": "actual",
        "heb": "ממשי"
    },
    {
        "eng": "actually",
        "heb": "למעשה"
    },
    {
        "eng": "adapt",
        "heb": "להתאים"
    },
    {
        "eng": "additionally",
        "heb": "בנוסף"
    },
    {
        "eng": "addition",
        "heb": "תוספת"
    },
    {
        "eng": "address",
        "heb": "כתובת"
    },
    {
        "eng": "adequate",
        "heb": "הולם"
    },
    {
        "eng": "adhere",
        "heb": "לדבוק ב-"
    },
    {
        "eng": "adjacent to",
        "heb": "ליד"
    },
    {
        "eng": "adjust",
        "heb": "להתרגל"
    },
    {
        "eng": "administer",
        "heb": "לנהל"
    },
    {
        "eng": "administration",
        "heb": "מנהל"
    },
    {
        "eng": "admirable",
        "heb": "נערץ"
    },
    {
        "eng": "admire",
        "heb": "להעריץ"
    },
    {
        "eng": "admit",
        "heb": "להודות"
    },
    {
        "eng": "adolescence",
        "heb": "גיל ההתבגרות"
    },
    {
        "eng": "adopt",
        "heb": "לאמץ"
    },
    {
        "eng": "adore",
        "heb": "להעריץ"
    },
    {
        "eng": "adorn",
        "heb": "לקשט"
    },
    {
        "eng": "adult",
        "heb": "מבוגר"
    },
    {
        "eng": "adulthood",
        "heb": "בגרות"
    },
    {
        "eng": "advance",
        "heb": "להתקדם, התקדמות"
    },
    {
        "eng": "advancement",
        "heb": "התקדמות"
    },
    {
        "eng": "advantage",
        "heb": "יתרון"
    },
    {
        "eng": "adventure",
        "heb": "הרפתקה"
    },
    {
        "eng": "adverse",
        "heb": "שלילי"
    },
    {
        "eng": "advertise",
        "heb": "לפרסם"
    },
    {
        "eng": "advertisement",
        "heb": "מודעה"
    },
    {
        "eng": "advice",
        "heb": "עצה"
    },
    {
        "eng": "advise",
        "heb": "לייעץ"
    },
    {
        "eng": "advisor",
        "heb": "יועץ"
    },
    {
        "eng": "advocate",
        "heb": "פרקליט"
    },
    {
        "eng": "aesthetic",
        "heb": "אסתטיקה"
    },
    {
        "eng": "affect",
        "heb": "להשפיע"
    },
    {
        "eng": "affection",
        "heb": "חיבה"
    },
    {
        "eng": "affinity",
        "heb": "זיקה"
    },
    {
        "eng": "affluence",
        "heb": "שפע"
    },
    {
        "eng": "affluent",
        "heb": "עשיר"
    },
    {
        "eng": "afford",
        "heb": "יכול לעמוד בהוצאות"
    },
    {
        "eng": "afraid",
        "heb": "מפחד"
    },
    {
        "eng": "after",
        "heb": "אחרי"
    },
    {
        "eng": "after all",
        "heb": "אחרי הכל"
    },
    {
        "eng": "afterwards",
        "heb": "לאחר מכן"
    },
    {
        "eng": "again",
        "heb": "שוב"
    },
    {
        "eng": "against",
        "heb": "כנגד"
    },
    {
        "eng": "agency",
        "heb": "סוכנות"
    },
    {
        "eng": "agenda",
        "heb": "סדר יום"
    },
    {
        "eng": "aggressive",
        "heb": "תוקפני"
    },
    {
        "eng": "agitate",
        "heb": "לעצבן"
    },
    {
        "eng": "agonize",
        "heb": "לייסר"
    },
    {
        "eng": "agony",
        "heb": "ייסורים"
    },
    {
        "eng": "agree",
        "heb": "להסכים"
    },
    {
        "eng": "agreement",
        "heb": "הסכם"
    },
    {
        "eng": "agriculture",
        "heb": "חקלאות"
    },
    {
        "eng": "ahead of",
        "heb": "לפני"
    },
    {
        "eng": "aid",
        "heb": "עזרה"
    },
    {
        "eng": "aim",
        "heb": "מטרה"
    },
    {
        "eng": "air conditioner",
        "heb": "מזגן"
    },
    {
        "eng": "airborne",
        "heb": "נישא באוויר"
    },
    {
        "eng": "airline",
        "heb": "חברת תעופה"
    },
    {
        "eng": "airplane",
        "heb": "מטוס"
    },
    {
        "eng": "aisle",
        "heb": "מעבר"
    },
    {
        "eng": "alarm",
        "heb": "אזעקה"
    },
    {
        "eng": "albeit",
        "heb": "אף על פי"
    },
    {
        "eng": "algae",
        "heb": "אצות"
    },
    {
        "eng": "alien",
        "heb": "חייזר"
    },
    {
        "eng": "alienation",
        "heb": "ניכור"
    },
    {
        "eng": "align",
        "heb": "להסתדר בשורה"
    },
    {
        "eng": "alike",
        "heb": "דומה"
    },
    {
        "eng": "alive",
        "heb": "חי"
    },
    {
        "eng": "all in all",
        "heb": "בסך הכל"
    },
    {
        "eng": "allergic",
        "heb": "אלרגי"
    },
    {
        "eng": "allocate",
        "heb": "להקצות"
    },
    {
        "eng": "allow",
        "heb": "להרשות"
    },
    {
        "eng": "allowance",
        "heb": "הקצבה"
    },
    {
        "eng": "allusion",
        "heb": "רמיזה"
    },
    {
        "eng": "ally",
        "heb": "בן-ברית"
    },
    {
        "eng": "almost",
        "heb": "כמעט"
    },
    {
        "eng": "alone",
        "heb": "לבד"
    },
    {
        "eng": "along",
        "heb": "לאורך"
    },
    {
        "eng": "along with",
        "heb": "יחד עם"
    },
    {
        "eng": "alongside",
        "heb": "לצד"
    },
    {
        "eng": "already",
        "heb": "כבר"
    },
    {
        "eng": "also",
        "heb": "גם"
    },
    {
        "eng": "alter",
        "heb": "לשנות"
    },
    {
        "eng": "alterations",
        "heb": "שינויים"
    },
    {
        "eng": "alternate",
        "heb": "חלופי"
    },
    {
        "eng": "alternately",
        "heb": "לסירוגין"
    },
    {
        "eng": "although",
        "heb": "למרות ש-"
    },
    {
        "eng": "altogether",
        "heb": "לגמרי"
    },
    {
        "eng": "always",
        "heb": "תמיד"
    },
    {
        "eng": "amass",
        "heb": "לצבור"
    },
    {
        "eng": "amateur",
        "heb": "חובבן"
    },
    {
        "eng": "amaze",
        "heb": "להדהים"
    },
    {
        "eng": "ambassador",
        "heb": "שגריר"
    },
    {
        "eng": "ambiguous",
        "heb": "דו משמעי"
    },
    {
        "eng": "amend",
        "heb": "תיקון"
    },
    {
        "eng": "amid",
        "heb": "בקרב"
    },
    {
        "eng": "among",
        "heb": "בין"
    },
    {
        "eng": "amount",
        "heb": "כמות"
    },
    {
        "eng": "ample",
        "heb": "גדול"
    },
    {
        "eng": "amputation",
        "heb": "קטיעה"
    },
    {
        "eng": "amusement",
        "heb": "שעשוע"
    },
    {
        "eng": "analog",
        "heb": "אנלוגי"
    },
    {
        "eng": "analogy",
        "heb": "הקבלה"
    },
    {
        "eng": "analyze",
        "heb": "לנתח"
    },
    {
        "eng": "ancestor",
        "heb": "אב קדמון"
    },
    {
        "eng": "ancestry",
        "heb": "מוצא"
    },
    {
        "eng": "anchor",
        "heb": "עוגן"
    },
    {
        "eng": "ancient",
        "heb": "עתיק"
    },
    {
        "eng": "and",
        "heb": "ו-"
    },
    {
        "eng": "anesthesia",
        "heb": "הרדמה"
    },
    {
        "eng": "anger",
        "heb": "כעס"
    },
    {
        "eng": "angry",
        "heb": "כועס"
    },
    {
        "eng": "animal",
        "heb": "חיה"
    },
    {
        "eng": "annihilate",
        "heb": "להשמיד"
    },
    {
        "eng": "announcement",
        "heb": "הכרזה"
    },
    {
        "eng": "annoy",
        "heb": "להציק"
    },
    {
        "eng": "annually",
        "heb": "שנתי"
    },
    {
        "eng": "another",
        "heb": "נוסף"
    },
    {
        "eng": "answer",
        "heb": "תשובה"
    },
    {
        "eng": "anticipate",
        "heb": "לצפות"
    },
    {
        "eng": "antique",
        "heb": "עתיק"
    },
    {
        "eng": "antler",
        "heb": "קרן"
    },
    {
        "eng": "anxious",
        "heb": "חרד"
    },
    {
        "eng": "apart",
        "heb": "בנפרד"
    },
    {
        "eng": "apathetic",
        "heb": "אדיש"
    },
    {
        "eng": "apathy",
        "heb": "אדישות"
    },
    {
        "eng": "apology",
        "heb": "התנצלות"
    },
    {
        "eng": "apparatus",
        "heb": "מנגנון"
    },
    {
        "eng": "apparent",
        "heb": "גלוי"
    },
    {
        "eng": "apparently",
        "heb": "כנראה"
    },
    {
        "eng": "appeal",
        "heb": "לבקש"
    },
    {
        "eng": "appear",
        "heb": "להופיע"
    },
    {
        "eng": "appearance",
        "heb": "מראה"
    },
    {
        "eng": "appease",
        "heb": "לפייס"
    },
    {
        "eng": "appetite",
        "heb": "תיאבון"
    },
    {
        "eng": "applaud",
        "heb": "להריע"
    },
    {
        "eng": "applicant",
        "heb": "מועמד"
    },
    {
        "eng": "apply",
        "heb": "לפנות"
    },
    {
        "eng": "appoint",
        "heb": "למנות"
    },
    {
        "eng": "appraise",
        "heb": "לאמוד"
    },
    {
        "eng": "appreciate",
        "heb": "להעריך"
    },
    {
        "eng": "appreciation",
        "heb": "הערכה"
    },
    {
        "eng": "approach",
        "heb": "גישה"
    },
    {
        "eng": "appropriate",
        "heb": "מתאים"
    },
    {
        "eng": "appropriately",
        "heb": "בהתאם"
    },
    {
        "eng": "approve",
        "heb": "לאשר"
    },
    {
        "eng": "approximately",
        "heb": "בערך"
    },
    {
        "eng": "arable",
        "heb": "מתאים לעיבוד"
    },
    {
        "eng": "architect",
        "heb": "ארכיטקט"
    },
    {
        "eng": "architecture",
        "heb": "אדריכלות"
    },
    {
        "eng": "area",
        "heb": "אזור"
    },
    {
        "eng": "argue",
        "heb": "להתווכח"
    },
    {
        "eng": "argument",
        "heb": "ויכוח"
    },
    {
        "eng": "arise",
        "heb": "להופיע"
    },
    {
        "eng": "aristocrat",
        "heb": "אציל"
    },
    {
        "eng": "ark",
        "heb": "תיבה"
    },
    {
        "eng": "arm",
        "heb": "זרוע"
    },
    {
        "eng": "army",
        "heb": "צבא"
    },
    {
        "eng": "around",
        "heb": "בערך"
    },
    {
        "eng": "arousing",
        "heb": "מעורר"
    },
    {
        "eng": "arrange",
        "heb": "לסדר"
    },
    {
        "eng": "arrest",
        "heb": "מעצר"
    },
    {
        "eng": "arrive",
        "heb": "להגיע"
    },
    {
        "eng": "arrogant",
        "heb": "שחצן"
    },
    {
        "eng": "art",
        "heb": "אמנות"
    },
    {
        "eng": "article",
        "heb": "מאמר"
    },
    {
        "eng": "articulate",
        "heb": "רהוט"
    },
    {
        "eng": "artifact",
        "heb": "חפץ"
    },
    {
        "eng": "artificial",
        "heb": "מלאכותי"
    },
    {
        "eng": "artist",
        "heb": "אמן"
    },
    {
        "eng": "artistic",
        "heb": "אמנותי"
    },
    {
        "eng": "as",
        "heb": "כמו"
    },
    {
        "eng": "as a result",
        "heb": "כתוצאה"
    },
    {
        "eng": "as far as",
        "heb": "לגבי"
    },
    {
        "eng": "as if",
        "heb": "כאילו"
    },
    {
        "eng": "as long as",
        "heb": "כל עוד"
    },
    {
        "eng": "as many as",
        "heb": "רבים כמו"
    },
    {
        "eng": "as proof of",
        "heb": "כהוכחה ל-"
    },
    {
        "eng": "as soon as",
        "heb": "ברגע ש-"
    },
    {
        "eng": "as well as",
        "heb": "כמו גם"
    },
    {
        "eng": "ascertain",
        "heb": "לוודא"
    },
    {
        "eng": "aside",
        "heb": "הצידה"
    },
    {
        "eng": "aside from",
        "heb": "חוץ מ-"
    },
    {
        "eng": "ask",
        "heb": "לשאול"
    },
    {
        "eng": "asked for",
        "heb": "ביקש"
    },
    {
        "eng": "aspiration",
        "heb": "שאיפה"
    },
    {
        "eng": "assemble",
        "heb": "להרכיב"
    },
    {
        "eng": "assess",
        "heb": "להעריך"
    },
    {
        "eng": "asset",
        "heb": "נכס"
    },
    {
        "eng": "assign",
        "heb": "למנות"
    },
    {
        "eng": "assignment",
        "heb": "משימה"
    },
    {
        "eng": "assist",
        "heb": "לסייע"
    },
    {
        "eng": "associate",
        "heb": "לקשר"
    },
    {
        "eng": "association",
        "heb": "איגוד"
    },
    {
        "eng": "assume",
        "heb": "להניח"
    },
    {
        "eng": "assumption",
        "heb": "הנחה"
    },
    {
        "eng": "astonishment",
        "heb": "תדהמה"
    },
    {
        "eng": "astound",
        "heb": "להדהים"
    },
    {
        "eng": "astronomy",
        "heb": "אסטרונומיה"
    },
    {
        "eng": "at",
        "heb": "ב-"
    },
    {
        "eng": "at first",
        "heb": "בהתחלה"
    },
    {
        "eng": "at last",
        "heb": "סוף סוף"
    },
    {
        "eng": "at least",
        "heb": "לפחות"
    },
    {
        "eng": "at your disposal",
        "heb": "לרשותך"
    },
    {
        "eng": "athlete",
        "heb": "ספורטאי"
    },
    {
        "eng": "atrocity",
        "heb": "זוועה"
    },
    {
        "eng": "attach",
        "heb": "לחבר"
    },
    {
        "eng": "attack",
        "heb": "לתקוף"
    },
    {
        "eng": "attain",
        "heb": "להשיג"
    },
    {
        "eng": "attempt",
        "heb": "ניסיון"
    },
    {
        "eng": "attend",
        "heb": "להשתתף"
    },
    {
        "eng": "attendant",
        "heb": "משרת"
    },
    {
        "eng": "attention",
        "heb": "תשומת לב"
    },
    {
        "eng": "attire",
        "heb": "לבוש"
    },
    {
        "eng": "attitude",
        "heb": "גישה"
    },
    {
        "eng": "attorney",
        "heb": "עורך דין"
    },
    {
        "eng": "attract",
        "heb": "למשוך"
    },
    {
        "eng": "attraction",
        "heb": "משיכה"
    },
    {
        "eng": "attractive",
        "heb": "מושך"
    },
    {
        "eng": "attribute",
        "heb": "תכונה"
    },
    {
        "eng": "auction",
        "heb": "מכירה פומבית"
    },
    {
        "eng": "audience",
        "heb": "קהל"
    },
    {
        "eng": "audit",
        "heb": "ביקורת"
    },
    {
        "eng": "augment",
        "heb": "להרחיב"
    },
    {
        "eng": "aura",
        "heb": "הילה"
    },
    {
        "eng": "authentic",
        "heb": "אותנטי"
    },
    {
        "eng": "author",
        "heb": "סופר"
    },
    {
        "eng": "authority",
        "heb": "סמכות"
    },
    {
        "eng": "authorize",
        "heb": "להרשות"
    },
    {
        "eng": "autograph",
        "heb": "חתימה"
    },
    {
        "eng": "automobile",
        "heb": "אוטו"
    },
    {
        "eng": "autumn",
        "heb": "סתיו"
    },
    {
        "eng": "availability",
        "heb": "זמינות"
    },
    {
        "eng": "available",
        "heb": "זמין"
    },
    {
        "eng": "average",
        "heb": "ממוצע"
    },
    {
        "eng": "avert",
        "heb": "למנוע"
    },
    {
        "eng": "avoid",
        "heb": "להימנע"
    },
    {
        "eng": "await",
        "heb": "להמתין"
    },
    {
        "eng": "awake",
        "heb": "ער"
    },
    {
        "eng": "award",
        "heb": "פרס"
    },
    {
        "eng": "aware",
        "heb": "מודע"
    },
    {
        "eng": "awareness",
        "heb": "מודעות"
    },
    {
        "eng": "awe",
        "heb": "יראת כבוד"
    },
    {
        "eng": "awkward",
        "heb": "מביך"
    },
    {
        "eng": "backward",
        "heb": "לאחור"
    },
    {
        "eng": "bacteria",
        "heb": "חיידקים"
    },
    {
        "eng": "badly",
        "heb": "קשות"
    },
    {
        "eng": "baffled",
        "heb": "מבולבל"
    },
    {
        "eng": "baggage",
        "heb": "מזוודה"
    },
    {
        "eng": "bail",
        "heb": "ערבות"
    },
    {
        "eng": "baker",
        "heb": "אופה"
    },
    {
        "eng": "balance",
        "heb": "איזון"
    },
    {
        "eng": "bald",
        "heb": "קרח"
    },
    {
        "eng": "ban",
        "heb": "איסור"
    },
    {
        "eng": "band",
        "heb": "להקה"
    },
    {
        "eng": "bandage",
        "heb": "תחבושת"
    },
    {
        "eng": "bank",
        "heb": "בנק"
    },
    {
        "eng": "bare",
        "heb": "חשוף"
    },
    {
        "eng": "barely",
        "heb": "בקושי"
    },
    {
        "eng": "bargain",
        "heb": "עסקה"
    },
    {
        "eng": "barn",
        "heb": "אסם"
    },
    {
        "eng": "barrier",
        "heb": "מחסום"
    },
    {
        "eng": "base",
        "heb": "בסיס"
    },
    {
        "eng": "based on",
        "heb": "מבוסס על"
    },
    {
        "eng": "bashful",
        "heb": "ביישן"
    },
    {
        "eng": "basin",
        "heb": "כיור"
    },
    {
        "eng": "bass",
        "heb": "בס"
    },
    {
        "eng": "bat",
        "heb": "עטלף"
    },
    {
        "eng": "bath",
        "heb": "אמבטיה"
    },
    {
        "eng": "battle",
        "heb": "מאבק"
    },
    {
        "eng": "beach",
        "heb": "חוף ים"
    },
    {
        "eng": "bead",
        "heb": "חרוז"
    },
    {
        "eng": "beak",
        "heb": "מקור"
    },
    {
        "eng": "bear",
        "heb": "לסבול"
    },
    {
        "eng": "beard",
        "heb": "זקן"
    },
    {
        "eng": "beast",
        "heb": "חיה"
    },
    {
        "eng": "beat",
        "heb": "להכות"
    },
    {
        "eng": "beauty",
        "heb": "יופי"
    },
    {
        "eng": "because",
        "heb": "בגלל"
    },
    {
        "eng": "because of",
        "heb": "בגלל"
    },
    {
        "eng": "bedroom",
        "heb": "חדר שינה"
    },
    {
        "eng": "bee",
        "heb": "דבורה"
    },
    {
        "eng": "before",
        "heb": "לפני"
    },
    {
        "eng": "beg",
        "heb": "להתחנן"
    },
    {
        "eng": "begin",
        "heb": "להתחיל"
    },
    {
        "eng": "beginning",
        "heb": "התחלה"
    },
    {
        "eng": "behave",
        "heb": "להתנהג"
    },
    {
        "eng": "behavior",
        "heb": "התנהגות"
    },
    {
        "eng": "behind",
        "heb": "מאחורי"
    },
    {
        "eng": "being that",
        "heb": "מכיוון ש-"
    },
    {
        "eng": "belief",
        "heb": "אמונה"
    },
    {
        "eng": "bell",
        "heb": "פעמון"
    },
    {
        "eng": "belong",
        "heb": "שייך"
    },
    {
        "eng": "below",
        "heb": "מתחת"
    },
    {
        "eng": "bend",
        "heb": "לכופף"
    },
    {
        "eng": "beneath",
        "heb": "מתחת"
    },
    {
        "eng": "benefactors",
        "heb": "נדבנים"
    },
    {
        "eng": "beneficial",
        "heb": "מועיל"
    },
    {
        "eng": "bent",
        "heb": "כופף"
    },
    {
        "eng": "berry",
        "heb": "גרגרי יער"
    },
    {
        "eng": "beside",
        "heb": "ליד"
    },
    {
        "eng": "besides",
        "heb": "בנוסף על"
    },
    {
        "eng": "best",
        "heb": "הכי טוב"
    },
    {
        "eng": "best-seller",
        "heb": "רב-מכר"
    },
    {
        "eng": "betray",
        "heb": "לבגוד"
    },
    {
        "eng": "better",
        "heb": "יותר טוב"
    },
    {
        "eng": "between",
        "heb": "בין"
    },
    {
        "eng": "beware",
        "heb": "היזהר"
    },
    {
        "eng": "beyond",
        "heb": "מעבר"
    },
    {
        "eng": "biblical",
        "heb": "תנ\"כי"
    },
    {
        "eng": "bicycle",
        "heb": "אופניים"
    },
    {
        "eng": "birth",
        "heb": "לידה"
    },
    {
        "eng": "bite",
        "heb": "לנשוך"
    },
    {
        "eng": "bizarre",
        "heb": "מוזר"
    },
    {
        "eng": "blade",
        "heb": "להב"
    },
    {
        "eng": "blame",
        "heb": "להאשים"
    },
    {
        "eng": "bland",
        "heb": "תפל"
    },
    {
        "eng": "blank",
        "heb": "ריק"
    },
    {
        "eng": "blanket",
        "heb": "שמיכה"
    },
    {
        "eng": "bleak",
        "heb": "עגום"
    },
    {
        "eng": "blend",
        "heb": "לערבב"
    },
    {
        "eng": "blind",
        "heb": "עיוור"
    },
    {
        "eng": "blink",
        "heb": "למצמץ"
    },
    {
        "eng": "block",
        "heb": "חסימה"
    },
    {
        "eng": "blood",
        "heb": "דם"
    },
    {
        "eng": "blood vessel",
        "heb": "כלי דם"
    },
    {
        "eng": "blow",
        "heb": "לנשוף"
    },
    {
        "eng": "blur",
        "heb": "לטשטש"
    },
    {
        "eng": "boat",
        "heb": "סירה"
    },
    {
        "eng": "body",
        "heb": "גוף"
    },
    {
        "eng": "boil",
        "heb": "להרתיח"
    },
    {
        "eng": "bold",
        "heb": "אמיץ"
    },
    {
        "eng": "bolster",
        "heb": "לתמוך"
    },
    {
        "eng": "bond",
        "heb": "קשר"
    },
    {
        "eng": "bone",
        "heb": "עצם"
    },
    {
        "eng": "boost",
        "heb": "דחף"
    },
    {
        "eng": "boot",
        "heb": "מגף"
    },
    {
        "eng": "border",
        "heb": "גבול"
    },
    {
        "eng": "bore",
        "heb": "לשעמם"
    },
    {
        "eng": "boring",
        "heb": "משעמם"
    },
    {
        "eng": "borrow",
        "heb": "להשאיל"
    },
    {
        "eng": "botanist",
        "heb": "בוטנאי"
    },
    {
        "eng": "both",
        "heb": "שניהם"
    },
    {
        "eng": "bottle",
        "heb": "בקבוק"
    },
    {
        "eng": "bottom",
        "heb": "תחתית"
    },
    {
        "eng": "bought",
        "heb": "קנה"
    },
    {
        "eng": "bounce",
        "heb": "לקפץ"
    },
    {
        "eng": "boundary",
        "heb": "גבול"
    },
    {
        "eng": "brain",
        "heb": "מוח"
    },
    {
        "eng": "brainwash",
        "heb": "לשטוף את המח"
    },
    {
        "eng": "branch",
        "heb": "ענף"
    },
    {
        "eng": "brave",
        "heb": "אמיץ"
    },
    {
        "eng": "bread",
        "heb": "לחם"
    },
    {
        "eng": "break",
        "heb": "לשבור"
    },
    {
        "eng": "breathe",
        "heb": "לנשום"
    },
    {
        "eng": "breed",
        "heb": "גזע"
    },
    {
        "eng": "brick",
        "heb": "לבנה"
    },
    {
        "eng": "bridge",
        "heb": "גשר"
    },
    {
        "eng": "brief",
        "heb": "תקציר"
    },
    {
        "eng": "briefly",
        "heb": "בקצרה"
    },
    {
        "eng": "bright",
        "heb": "בהיר"
    },
    {
        "eng": "brilliant",
        "heb": "מבריק"
    },
    {
        "eng": "broad",
        "heb": "נרחב"
    },
    {
        "eng": "broadcast",
        "heb": "לשדר"
    },
    {
        "eng": "broaden",
        "heb": "להרחיב"
    },
    {
        "eng": "budget",
        "heb": "תקציב"
    },
    {
        "eng": "build",
        "heb": "לבנות"
    },
    {
        "eng": "building",
        "heb": "בניין"
    },
    {
        "eng": "built",
        "heb": "לבנות"
    },
    {
        "eng": "bullet",
        "heb": "קליע"
    },
    {
        "eng": "bully",
        "heb": "בריון"
    },
    {
        "eng": "burden",
        "heb": "עול"
    },
    {
        "eng": "burglar",
        "heb": "פורץ"
    },
    {
        "eng": "burn",
        "heb": "לשרוף"
    },
    {
        "eng": "bury",
        "heb": "לקבור"
    },
    {
        "eng": "bush",
        "heb": "שיח"
    },
    {
        "eng": "but",
        "heb": "אבל"
    },
    {
        "eng": "butcher",
        "heb": "קצב"
    },
    {
        "eng": "butterfly",
        "heb": "פרפר"
    },
    {
        "eng": "by",
        "heb": "באמצעות"
    },
    {
        "eng": "by no means",
        "heb": "בשום אופן"
    },
    {
        "eng": "by now",
        "heb": "עד עתה"
    },
    {
        "eng": "cabin",
        "heb": "בקתה"
    },
    {
        "eng": "cable",
        "heb": "כבל"
    },
    {
        "eng": "cadaver",
        "heb": "גופה"
    },
    {
        "eng": "cage",
        "heb": "כלוב"
    },
    {
        "eng": "calculate",
        "heb": "לחשב"
    },
    {
        "eng": "calculator",
        "heb": "מחשבון"
    },
    {
        "eng": "call",
        "heb": "לקרוא"
    },
    {
        "eng": "camel",
        "heb": "גמל"
    },
    {
        "eng": "camera",
        "heb": "מצלמה"
    },
    {
        "eng": "campaign",
        "heb": "מערכה"
    },
    {
        "eng": "canal",
        "heb": "תעלה"
    },
    {
        "eng": "cancel",
        "heb": "לבטל"
    },
    {
        "eng": "cancer",
        "heb": "סרטן"
    },
    {
        "eng": "candid",
        "heb": "כנה"
    },
    {
        "eng": "candidate",
        "heb": "מועמד"
    },
    {
        "eng": "candy",
        "heb": "ממתק"
    },
    {
        "eng": "canvass",
        "heb": "לסקור"
    },
    {
        "eng": "capable",
        "heb": "מסוגל"
    },
    {
        "eng": "capacity",
        "heb": "יכולת"
    },
    {
        "eng": "capital",
        "heb": "עיר בירה"
    },
    {
        "eng": "capital punishment",
        "heb": "עונש מוות"
    },
    {
        "eng": "capitalize",
        "heb": "לנצל"
    },
    {
        "eng": "capture",
        "heb": "ללכוד"
    },
    {
        "eng": "care",
        "heb": "לחבב"
    },
    {
        "eng": "carefully",
        "heb": "בזהירות"
    },
    {
        "eng": "careless",
        "heb": "לא זהיר"
    },
    {
        "eng": "cargo",
        "heb": "מטען"
    },
    {
        "eng": "carpet",
        "heb": "שטיח"
    },
    {
        "eng": "carry",
        "heb": "לסחוב"
    },
    {
        "eng": "carve",
        "heb": "לחרוט"
    },
    {
        "eng": "case",
        "heb": "מקרה"
    },
    {
        "eng": "cash",
        "heb": "מזומן"
    },
    {
        "eng": "cashier",
        "heb": "קופאי"
    },
    {
        "eng": "casino",
        "heb": "קזינו"
    },
    {
        "eng": "cast",
        "heb": "להשליך"
    },
    {
        "eng": "caste",
        "heb": "מעמד חברתי"
    },
    {
        "eng": "castle",
        "heb": "טירה"
    },
    {
        "eng": "casual",
        "heb": "אגבי"
    },
    {
        "eng": "catalogue",
        "heb": "קטלוג"
    },
    {
        "eng": "catch, caught",
        "heb": "לתפוס"
    },
    {
        "eng": "categorize",
        "heb": "לקטלג"
    },
    {
        "eng": "cater",
        "heb": "לספק"
    },
    {
        "eng": "caterpillar",
        "heb": "זחל"
    },
    {
        "eng": "cathedral",
        "heb": "קתדרלה"
    },
    {
        "eng": "cattle",
        "heb": "בקר"
    },
    {
        "eng": "cause",
        "heb": "סיבה, לגרום"
    },
    {
        "eng": "cautious",
        "heb": "זהיר"
    },
    {
        "eng": "cave",
        "heb": "מערה"
    },
    {
        "eng": "caviar",
        "heb": "קוויאר"
    },
    {
        "eng": "cavity",
        "heb": "חור"
    },
    {
        "eng": "celebrate",
        "heb": "לחגוג"
    },
    {
        "eng": "cell",
        "heb": "תא"
    },
    {
        "eng": "cemetery",
        "heb": "בית קברות"
    },
    {
        "eng": "center",
        "heb": "מרכז"
    },
    {
        "eng": "central",
        "heb": "מרכזי"
    },
    {
        "eng": "century",
        "heb": "מאה שנים"
    },
    {
        "eng": "cereal",
        "heb": "דגני"
    },
    {
        "eng": "ceremony",
        "heb": "מסכת"
    },
    {
        "eng": "certain",
        "heb": "מסוים"
    },
    {
        "eng": "certainly",
        "heb": "בהחלט"
    },
    {
        "eng": "certainty",
        "heb": "וודאות"
    },
    {
        "eng": "certify",
        "heb": "להצהיר"
    },
    {
        "eng": "challenge",
        "heb": "לאתגר"
    },
    {
        "eng": "chance",
        "heb": "סיכוי"
    },
    {
        "eng": "change",
        "heb": "לשנות, שינוי, עודף"
    },
    {
        "eng": "chapter",
        "heb": "פרק"
    },
    {
        "eng": "character",
        "heb": "דמות, אופי, אות"
    },
    {
        "eng": "characteristic",
        "heb": "מאפיין"
    },
    {
        "eng": "characterize",
        "heb": "לאפיין"
    },
    {
        "eng": "charge",
        "heb": "להאשים"
    },
    {
        "eng": "chariot",
        "heb": "מרכבה"
    },
    {
        "eng": "charity",
        "heb": "צדקה"
    },
    {
        "eng": "charm",
        "heb": "קסם"
    },
    {
        "eng": "chart",
        "heb": "גיליון"
    },
    {
        "eng": "chase",
        "heb": "מרדף"
    },
    {
        "eng": "cheap",
        "heb": "זול"
    },
    {
        "eng": "cheat",
        "heb": "לבגוד"
    },
    {
        "eng": "check",
        "heb": "לבדוק"
    },
    {
        "eng": "cheer",
        "heb": "לעודד"
    },
    {
        "eng": "cheerful",
        "heb": "שמח"
    },
    {
        "eng": "chemical",
        "heb": "כימי"
    },
    {
        "eng": "chief",
        "heb": "ראשי"
    },
    {
        "eng": "chiefly",
        "heb": "בעיקר"
    },
    {
        "eng": "child",
        "heb": "ילד"
    },
    {
        "eng": "childhood",
        "heb": "ילדות"
    },
    {
        "eng": "children",
        "heb": "ילדים"
    },
    {
        "eng": "choice",
        "heb": "בחירה"
    },
    {
        "eng": "choose",
        "heb": "לבחור"
    },
    {
        "eng": "church",
        "heb": "כנסיה"
    },
    {
        "eng": "cigarette",
        "heb": "סיגריה"
    },
    {
        "eng": "circle",
        "heb": "להקיף בעיגול"
    },
    {
        "eng": "circuit",
        "heb": "להקיף"
    },
    {
        "eng": "circulate",
        "heb": "לנוע במחזוריות"
    },
    {
        "eng": "circumstance",
        "heb": "מצב"
    },
    {
        "eng": "citizen",
        "heb": "אזרחים"
    },
    {
        "eng": "citrus",
        "heb": "הדרים"
    },
    {
        "eng": "civil",
        "heb": "אזרחי"
    },
    {
        "eng": "claim",
        "heb": "טענה"
    },
    {
        "eng": "clarify",
        "heb": "להבהיר"
    },
    {
        "eng": "clash",
        "heb": "התנגשות"
    },
    {
        "eng": "class",
        "heb": "כיתה"
    },
    {
        "eng": "classify",
        "heb": "לסווג"
    },
    {
        "eng": "clay",
        "heb": "חימר"
    },
    {
        "eng": "clean",
        "heb": "נקי"
    },
    {
        "eng": "clever",
        "heb": "פיקח"
    },
    {
        "eng": "cliff",
        "heb": "צוק"
    },
    {
        "eng": "climate",
        "heb": "אקלים"
    },
    {
        "eng": "climb",
        "heb": "לטפס"
    },
    {
        "eng": "cloak",
        "heb": "להסוות"
    },
    {
        "eng": "clock",
        "heb": "שעון"
    },
    {
        "eng": "close",
        "heb": "סגור"
    },
    {
        "eng": "cloth",
        "heb": "בגד"
    },
    {
        "eng": "cloud",
        "heb": "ענן"
    },
    {
        "eng": "club",
        "heb": "מועדון"
    },
    {
        "eng": "coach",
        "heb": "מאמן"
    },
    {
        "eng": "coal",
        "heb": "פחם"
    },
    {
        "eng": "coast",
        "heb": "חוף"
    },
    {
        "eng": "coastline",
        "heb": "קו חוף"
    },
    {
        "eng": "coat",
        "heb": "מעיל"
    },
    {
        "eng": "cockroach",
        "heb": "ג'וק"
    },
    {
        "eng": "code",
        "heb": "קוד"
    },
    {
        "eng": "coexist",
        "heb": "להתקיים בשותפות"
    },
    {
        "eng": "coexistence",
        "heb": "דו-קיום"
    },
    {
        "eng": "coffin",
        "heb": "ארון מתים"
    },
    {
        "eng": "coin",
        "heb": "מטבע"
    },
    {
        "eng": "coincide",
        "heb": "להקביל"
    },
    {
        "eng": "cold",
        "heb": "קר"
    },
    {
        "eng": "collaborate",
        "heb": "לשתף פעולה"
    },
    {
        "eng": "collapse",
        "heb": "להתמוטט"
    },
    {
        "eng": "colleague",
        "heb": "עמית"
    },
    {
        "eng": "collect",
        "heb": "לאסוף"
    },
    {
        "eng": "collide",
        "heb": "להתנגש"
    },
    {
        "eng": "collision",
        "heb": "התנגשות"
    },
    {
        "eng": "cologne",
        "heb": "מי קולון"
    },
    {
        "eng": "colonial",
        "heb": "קולוניאלי"
    },
    {
        "eng": "colony",
        "heb": "מושבה"
    },
    {
        "eng": "color",
        "heb": "לצבוע"
    },
    {
        "eng": "colossal",
        "heb": "עצום"
    },
    {
        "eng": "column",
        "heb": "עמוד"
    },
    {
        "eng": "coma",
        "heb": "תרדמת"
    },
    {
        "eng": "combat",
        "heb": "קרב, להילחם"
    },
    {
        "eng": "combine",
        "heb": "לצרף"
    },
    {
        "eng": "comfort",
        "heb": "נחמה"
    },
    {
        "eng": "comfortable",
        "heb": "נוח"
    },
    {
        "eng": "comic",
        "heb": "קומי"
    },
    {
        "eng": "command",
        "heb": "לפקוד"
    },
    {
        "eng": "commence",
        "heb": "להתחיל"
    },
    {
        "eng": "commendably",
        "heb": "באופן ראוי לשבח"
    },
    {
        "eng": "commends",
        "heb": "לציין לשבח"
    },
    {
        "eng": "commentary",
        "heb": "פרשנות"
    },
    {
        "eng": "commerce",
        "heb": "מסחר"
    },
    {
        "eng": "commercial",
        "heb": "מסחרי"
    },
    {
        "eng": "commit",
        "heb": "לבצע, להתחייב"
    },
    {
        "eng": "committee",
        "heb": "ועדה"
    },
    {
        "eng": "common",
        "heb": "נפוץ"
    },
    {
        "eng": "communal",
        "heb": "משותף"
    },
    {
        "eng": "communicate",
        "heb": "לתקשר"
    },
    {
        "eng": "community",
        "heb": "קהילה"
    },
    {
        "eng": "commute",
        "heb": "לנסוע בקביעות לעבודה"
    },
    {
        "eng": "companion",
        "heb": "בן-זוג"
    },
    {
        "eng": "company",
        "heb": "חברה"
    },
    {
        "eng": "comparable",
        "heb": "בר-השוואה"
    },
    {
        "eng": "comparatively",
        "heb": "באופן יחסי"
    },
    {
        "eng": "compare",
        "heb": "להשוות"
    },
    {
        "eng": "comparison",
        "heb": "השוואה"
    },
    {
        "eng": "compatible",
        "heb": "מתאים"
    },
    {
        "eng": "compel",
        "heb": "לאלץ"
    },
    {
        "eng": "compensate",
        "heb": "לפצות"
    },
    {
        "eng": "compete",
        "heb": "להתמודד"
    },
    {
        "eng": "competition",
        "heb": "תחרות"
    },
    {
        "eng": "compile",
        "heb": "לאסוף"
    },
    {
        "eng": "complain",
        "heb": "להתלונן"
    },
    {
        "eng": "complete",
        "heb": "כולל"
    },
    {
        "eng": "complex",
        "heb": "מסובך"
    },
    {
        "eng": "complication",
        "heb": "סיבוך"
    },
    {
        "eng": "comply",
        "heb": "להסכים"
    },
    {
        "eng": "components",
        "heb": "מרכיבים"
    },
    {
        "eng": "composed",
        "heb": "הלחין"
    },
    {
        "eng": "compost",
        "heb": "קומפוסט"
    },
    {
        "eng": "comprehend",
        "heb": "להבין"
    },
    {
        "eng": "comprehension",
        "heb": "הבנה"
    },
    {
        "eng": "compress",
        "heb": "לדחוס"
    },
    {
        "eng": "comprise",
        "heb": "לכלול"
    },
    {
        "eng": "compromise",
        "heb": "להתפשר"
    },
    {
        "eng": "compulsory",
        "heb": "מהווה חובה"
    },
    {
        "eng": "conceal",
        "heb": "להסתיר"
    },
    {
        "eng": "conceive",
        "heb": "להרהר"
    },
    {
        "eng": "concentrate",
        "heb": "להתרכז"
    },
    {
        "eng": "concept",
        "heb": "רעיון"
    },
    {
        "eng": "conception",
        "heb": "תפיסה"
    },
    {
        "eng": "concern",
        "heb": "דאגה"
    },
    {
        "eng": "concerted",
        "heb": "מתואם"
    },
    {
        "eng": "concise",
        "heb": "תכליתי"
    },
    {
        "eng": "conclude",
        "heb": "לסיים"
    },
    {
        "eng": "conclusion",
        "heb": "מסקנה"
    },
    {
        "eng": "conclusively",
        "heb": "סופית"
    },
    {
        "eng": "concrete",
        "heb": "בטון"
    },
    {
        "eng": "concur",
        "heb": "להסכים"
    },
    {
        "eng": "concurrence",
        "heb": "להתרחש בו זמנית"
    },
    {
        "eng": "condemned",
        "heb": "לגנות"
    },
    {
        "eng": "condense",
        "heb": "לדחוס"
    },
    {
        "eng": "condition",
        "heb": "תנאי"
    },
    {
        "eng": "condone",
        "heb": "למחול"
    },
    {
        "eng": "conduct",
        "heb": "לנהל"
    },
    {
        "eng": "conductor",
        "heb": "מנצח"
    },
    {
        "eng": "confer",
        "heb": "להתייעץ"
    },
    {
        "eng": "conference",
        "heb": "ועידה"
    },
    {
        "eng": "confess",
        "heb": "להודות"
    },
    {
        "eng": "confession",
        "heb": "וידוי"
    },
    {
        "eng": "confide",
        "heb": "לשתף"
    },
    {
        "eng": "confident",
        "heb": "בטוח בעצמו"
    },
    {
        "eng": "confinement",
        "heb": "מאסר"
    },
    {
        "eng": "confirm",
        "heb": "לאשר"
    },
    {
        "eng": "confiscate",
        "heb": "להחרים"
    },
    {
        "eng": "conflict",
        "heb": "עימות"
    },
    {
        "eng": "conform",
        "heb": "להתאים"
    },
    {
        "eng": "confront",
        "heb": "להתעמת"
    },
    {
        "eng": "confrontation",
        "heb": "עימות"
    },
    {
        "eng": "confuse",
        "heb": "לבלבל"
    },
    {
        "eng": "confusion",
        "heb": "בלבול"
    },
    {
        "eng": "congenial",
        "heb": "ידידותי"
    },
    {
        "eng": "congenital",
        "heb": "מולד"
    },
    {
        "eng": "congregate",
        "heb": "לאסוף"
    },
    {
        "eng": "conjecture",
        "heb": "סברה"
    },
    {
        "eng": "connect",
        "heb": "לחבר"
    },
    {
        "eng": "conquer",
        "heb": "לכבוש"
    },
    {
        "eng": "conquest",
        "heb": "כיבוש"
    },
    {
        "eng": "conquistador",
        "heb": "כובש"
    },
    {
        "eng": "conscious",
        "heb": "מודע"
    },
    {
        "eng": "consequence",
        "heb": "תוצאה"
    },
    {
        "eng": "consequently",
        "heb": "כתוצאה מכך"
    },
    {
        "eng": "conservation",
        "heb": "שימור"
    },
    {
        "eng": "conservative",
        "heb": "שמרני"
    },
    {
        "eng": "conserve",
        "heb": "לשמר"
    },
    {
        "eng": "consider",
        "heb": "לקחת בחשבון"
    },
    {
        "eng": "considerable",
        "heb": "הרבה"
    },
    {
        "eng": "consideration",
        "heb": "התחשבות"
    },
    {
        "eng": "considering",
        "heb": "מתחשב"
    },
    {
        "eng": "consist",
        "heb": "מורכב מ-"
    },
    {
        "eng": "consistent",
        "heb": "עקבי"
    },
    {
        "eng": "consistently",
        "heb": "בעקביות"
    },
    {
        "eng": "consolidate",
        "heb": "לגבש"
    },
    {
        "eng": "consonant",
        "heb": "עיצור"
    },
    {
        "eng": "conspicuous",
        "heb": "בולט"
    },
    {
        "eng": "conspiracy",
        "heb": "מזימה"
    },
    {
        "eng": "constant",
        "heb": "קבוע"
    },
    {
        "eng": "constantly",
        "heb": "באופן קבוע"
    },
    {
        "eng": "constitute",
        "heb": "להקים"
    },
    {
        "eng": "construct",
        "heb": "לבנות"
    },
    {
        "eng": "consult",
        "heb": "להתייעץ"
    },
    {
        "eng": "consume",
        "heb": "לצרוך"
    },
    {
        "eng": "consumers",
        "heb": "צרכנים"
    },
    {
        "eng": "contact",
        "heb": "ליצור קשר"
    },
    {
        "eng": "contagious",
        "heb": "מדבק"
    },
    {
        "eng": "contain",
        "heb": "להכיל"
    },
    {
        "eng": "container",
        "heb": "קונטיינר"
    },
    {
        "eng": "contaminate",
        "heb": "לזהם"
    },
    {
        "eng": "contemporary",
        "heb": "עכשווי"
    },
    {
        "eng": "contend",
        "heb": "להתמודד"
    },
    {
        "eng": "content",
        "heb": "שביעות רצון"
    },
    {
        "eng": "contest",
        "heb": "תחרות"
    },
    {
        "eng": "context",
        "heb": "הקשר"
    },
    {
        "eng": "continent",
        "heb": "יבשת"
    },
    {
        "eng": "continuation",
        "heb": "המשך"
    },
    {
        "eng": "continue",
        "heb": "להמשיך"
    },
    {
        "eng": "continuity",
        "heb": "המשכיות"
    },
    {
        "eng": "continuous",
        "heb": "מתמשך"
    },
    {
        "eng": "contract",
        "heb": "ללקות"
    },
    {
        "eng": "contradiction",
        "heb": "סתירה"
    },
    {
        "eng": "contradictory",
        "heb": "סותר"
    },
    {
        "eng": "contrary",
        "heb": "להפך"
    },
    {
        "eng": "contrast",
        "heb": "להוות ניגוד"
    },
    {
        "eng": "contribute",
        "heb": "לתרום"
    },
    {
        "eng": "control",
        "heb": "שליטה, לשלוט"
    },
    {
        "eng": "controversial",
        "heb": "שנוי במחלוקת"
    },
    {
        "eng": "controversy",
        "heb": "מחלוקת"
    },
    {
        "eng": "convene",
        "heb": "לכנס"
    },
    {
        "eng": "convenient",
        "heb": "נוח"
    },
    {
        "eng": "conveniently",
        "heb": "באופן נח"
    },
    {
        "eng": "convention",
        "heb": "ועידה"
    },
    {
        "eng": "conventional",
        "heb": "שגרתי"
    },
    {
        "eng": "conversation",
        "heb": "שיחה"
    },
    {
        "eng": "conversely",
        "heb": "לעומת זאת"
    },
    {
        "eng": "convert",
        "heb": "מומר"
    },
    {
        "eng": "convey",
        "heb": "למסור"
    },
    {
        "eng": "convict",
        "heb": "להרשיע"
    },
    {
        "eng": "convince",
        "heb": "לשכנע"
    },
    {
        "eng": "convoy",
        "heb": "שיירה"
    },
    {
        "eng": "cool",
        "heb": "לצנן"
    },
    {
        "eng": "coop",
        "heb": "לול"
    },
    {
        "eng": "cooperation",
        "heb": "שיתוף פעולה"
    },
    {
        "eng": "coordination",
        "heb": "קואורדינציה"
    },
    {
        "eng": "coordinator",
        "heb": "מתאם"
    },
    {
        "eng": "cope",
        "heb": "להתמודד"
    },
    {
        "eng": "copies",
        "heb": "עותקים"
    },
    {
        "eng": "copper",
        "heb": "נחושת"
    },
    {
        "eng": "copy",
        "heb": "להעתיק"
    },
    {
        "eng": "cord",
        "heb": "מיתר"
    },
    {
        "eng": "core",
        "heb": "ליבה"
    },
    {
        "eng": "corner",
        "heb": "פינה"
    },
    {
        "eng": "cornerstone",
        "heb": "אבן פינה"
    },
    {
        "eng": "correct",
        "heb": "לתקן"
    },
    {
        "eng": "correlate",
        "heb": "לקשר"
    },
    {
        "eng": "correspond",
        "heb": "להתכתב"
    },
    {
        "eng": "correspondence",
        "heb": "התכתבות"
    },
    {
        "eng": "correspondingly",
        "heb": "בהתאמה"
    },
    {
        "eng": "corrupt",
        "heb": "מושחת"
    },
    {
        "eng": "cosmopolitan",
        "heb": "אוניברסלי"
    },
    {
        "eng": "cost",
        "heb": "מחיר"
    },
    {
        "eng": "costly",
        "heb": "יקר"
    },
    {
        "eng": "cotton",
        "heb": "כותנה"
    },
    {
        "eng": "cougar",
        "heb": "פומה"
    },
    {
        "eng": "cough",
        "heb": "להשתעל"
    },
    {
        "eng": "council",
        "heb": "מועצה"
    },
    {
        "eng": "counsel",
        "heb": "להדריך"
    },
    {
        "eng": "count",
        "heb": "לספור"
    },
    {
        "eng": "counterpart",
        "heb": "זוג"
    },
    {
        "eng": "country",
        "heb": "ארץ"
    },
    {
        "eng": "couple",
        "heb": "זוג, צמד"
    },
    {
        "eng": "coupled with",
        "heb": "יחד עם"
    },
    {
        "eng": "coupon",
        "heb": "תלוש"
    },
    {
        "eng": "courage",
        "heb": "אומץ"
    },
    {
        "eng": "courageous",
        "heb": "אמיץ"
    },
    {
        "eng": "course",
        "heb": "קורס"
    },
    {
        "eng": "court",
        "heb": "מגרש"
    },
    {
        "eng": "courteous",
        "heb": "אדיב"
    },
    {
        "eng": "courtesy",
        "heb": "אדיבות"
    },
    {
        "eng": "cousin",
        "heb": "בן דוד"
    },
    {
        "eng": "cover",
        "heb": "כיסוי"
    },
    {
        "eng": "cow",
        "heb": "פרה"
    },
    {
        "eng": "crack",
        "heb": "סדק"
    },
    {
        "eng": "craft",
        "heb": "מלאכה"
    },
    {
        "eng": "craftsmen",
        "heb": "בעל מלאכה"
    },
    {
        "eng": "crash",
        "heb": "התנגשות"
    },
    {
        "eng": "crave",
        "heb": "להשתוקק"
    },
    {
        "eng": "create",
        "heb": "ליצור"
    },
    {
        "eng": "creator",
        "heb": "יוצר"
    },
    {
        "eng": "creature",
        "heb": "יצור"
    },
    {
        "eng": "credibility",
        "heb": "מהימנות"
    },
    {
        "eng": "crime",
        "heb": "פשע"
    },
    {
        "eng": "cripple",
        "heb": "להטיל מום"
    },
    {
        "eng": "crisis",
        "heb": "משבר"
    },
    {
        "eng": "criteria",
        "heb": "אמת מידה"
    },
    {
        "eng": "critic",
        "heb": "מבקר"
    },
    {
        "eng": "criticize",
        "heb": "לבקר"
    },
    {
        "eng": "critique",
        "heb": "ביקורת"
    },
    {
        "eng": "croak",
        "heb": "קרקור"
    },
    {
        "eng": "crop",
        "heb": "לקצץ"
    },
    {
        "eng": "cross",
        "heb": "לחצות"
    },
    {
        "eng": "crossroad",
        "heb": "צומת"
    },
    {
        "eng": "crowd",
        "heb": "להצטופף"
    },
    {
        "eng": "crown",
        "heb": "להכתיר"
    },
    {
        "eng": "crude",
        "heb": "וולגרי"
    },
    {
        "eng": "cruel",
        "heb": "אכזרי"
    },
    {
        "eng": "cucumber",
        "heb": "מלפפון"
    },
    {
        "eng": "cuisine",
        "heb": "מטבח"
    },
    {
        "eng": "culminate",
        "heb": "להגיע לשיא"
    },
    {
        "eng": "cult",
        "heb": "כת"
    },
    {
        "eng": "cultivate",
        "heb": "לטפח"
    },
    {
        "eng": "culture",
        "heb": "תרבות"
    },
    {
        "eng": "cure",
        "heb": "מרפא"
    },
    {
        "eng": "curiosity",
        "heb": "סקרנות"
    },
    {
        "eng": "curious",
        "heb": "סקרן"
    },
    {
        "eng": "currency",
        "heb": "מטבע"
    },
    {
        "eng": "curse",
        "heb": "קללה"
    },
    {
        "eng": "curtain",
        "heb": "וילון"
    },
    {
        "eng": "curve",
        "heb": "פניה"
    },
    {
        "eng": "custom",
        "heb": "מנהג"
    },
    {
        "eng": "customer",
        "heb": "לקוח"
    },
    {
        "eng": "customize",
        "heb": "להתאים באופן אישי"
    },
    {
        "eng": "czar",
        "heb": "צאר"
    },
    {
        "eng": "dagger",
        "heb": "פגיון"
    },
    {
        "eng": "daily",
        "heb": "יומיומי"
    },
    {
        "eng": "dairy",
        "heb": "מחלבה"
    },
    {
        "eng": "damage",
        "heb": "נזק"
    },
    {
        "eng": "damp",
        "heb": "לח"
    },
    {
        "eng": "dampen",
        "heb": "לדכא"
    },
    {
        "eng": "dance",
        "heb": "לרקוד"
    },
    {
        "eng": "dandy",
        "heb": "גנדרני"
    },
    {
        "eng": "danger",
        "heb": "סכנה"
    },
    {
        "eng": "dangerous",
        "heb": "מסוכן"
    },
    {
        "eng": "dare",
        "heb": "תעוזה"
    },
    {
        "eng": "darkness",
        "heb": "חשיכה"
    },
    {
        "eng": "dart",
        "heb": "חץ"
    },
    {
        "eng": "date",
        "heb": "תאריך"
    },
    {
        "eng": "daughter",
        "heb": "בת"
    },
    {
        "eng": "dawn",
        "heb": "שחר"
    },
    {
        "eng": "daydream",
        "heb": "לחלום בהקיץ"
    },
    {
        "eng": "Dead Sea",
        "heb": "ים המלח"
    },
    {
        "eng": "deaf",
        "heb": "חרש"
    },
    {
        "eng": "deal",
        "heb": "עסקה"
    },
    {
        "eng": "dealt",
        "heb": "חולק"
    },
    {
        "eng": "death",
        "heb": "מוות"
    },
    {
        "eng": "debate",
        "heb": "ויכוח"
    },
    {
        "eng": "debt",
        "heb": "חוב"
    },
    {
        "eng": "decade",
        "heb": "עשור"
    },
    {
        "eng": "decay",
        "heb": "ריקבון"
    },
    {
        "eng": "deceased",
        "heb": "נפטר"
    },
    {
        "eng": "deceive",
        "heb": "להונות"
    },
    {
        "eng": "decide",
        "heb": "להחליט"
    },
    {
        "eng": "decipher",
        "heb": "לפענח"
    },
    {
        "eng": "declaration",
        "heb": "הכרזה"
    },
    {
        "eng": "declare",
        "heb": "להכריז"
    },
    {
        "eng": "decline",
        "heb": "לרדת"
    },
    {
        "eng": "decorate",
        "heb": "לקשט"
    },
    {
        "eng": "decorative",
        "heb": "דקורטיבי"
    },
    {
        "eng": "decrease",
        "heb": "ירידה"
    },
    {
        "eng": "dedicate",
        "heb": "להקדיש"
    },
    {
        "eng": "dedicated",
        "heb": "מוקדש ל-"
    },
    {
        "eng": "deduce",
        "heb": "להסיק"
    },
    {
        "eng": "deep",
        "heb": "עמוק"
    },
    {
        "eng": "deeply",
        "heb": "מאוד"
    },
    {
        "eng": "deer",
        "heb": "איל"
    },
    {
        "eng": "defeat",
        "heb": "תבוסה"
    },
    {
        "eng": "defeated",
        "heb": "הובס"
    },
    {
        "eng": "defend",
        "heb": "להגן"
    },
    {
        "eng": "defense",
        "heb": "הגנה"
    },
    {
        "eng": "defer",
        "heb": "לדחות"
    },
    {
        "eng": "deficiency",
        "heb": "מחסור"
    },
    {
        "eng": "define",
        "heb": "להגדיר"
    },
    {
        "eng": "definite",
        "heb": "מוחלט"
    },
    {
        "eng": "deflate",
        "heb": "להוציא אוויר מ"
    },
    {
        "eng": "deform",
        "heb": "לעוות"
    },
    {
        "eng": "deformity",
        "heb": "עיוות"
    },
    {
        "eng": "degenerate",
        "heb": "להתנוון"
    },
    {
        "eng": "degree",
        "heb": "דרגה"
    },
    {
        "eng": "delay",
        "heb": "עיכוב"
    },
    {
        "eng": "delegate",
        "heb": "להסמיך"
    },
    {
        "eng": "delete",
        "heb": "למחוק"
    },
    {
        "eng": "deliberate",
        "heb": "מכוון"
    },
    {
        "eng": "deliberation",
        "heb": "דיון"
    },
    {
        "eng": "delicate",
        "heb": "עדין"
    },
    {
        "eng": "delight",
        "heb": "תענוג"
    },
    {
        "eng": "delinquent",
        "heb": "עבריין"
    },
    {
        "eng": "deliver",
        "heb": "למסור, לשלוח"
    },
    {
        "eng": "delivery",
        "heb": "משלוח"
    },
    {
        "eng": "delusions",
        "heb": "אשליות"
    },
    {
        "eng": "demand",
        "heb": "לדרוש"
    },
    {
        "eng": "demean",
        "heb": "להשפיל"
    },
    {
        "eng": "demented",
        "heb": "מטורף"
    },
    {
        "eng": "demographic",
        "heb": "דמוגרפי"
    },
    {
        "eng": "demonstrate",
        "heb": "להפגין"
    },
    {
        "eng": "denial",
        "heb": "הכחשה"
    },
    {
        "eng": "denominator",
        "heb": "מכנה"
    },
    {
        "eng": "densely",
        "heb": "בצפיפות"
    },
    {
        "eng": "density",
        "heb": "צפיפות"
    },
    {
        "eng": "dental",
        "heb": "דנטלי"
    },
    {
        "eng": "dentist",
        "heb": "רופא שיניים"
    },
    {
        "eng": "deny",
        "heb": "לסרב"
    },
    {
        "eng": "depart",
        "heb": "לעזוב"
    },
    {
        "eng": "department",
        "heb": "מחלקה"
    },
    {
        "eng": "department-store",
        "heb": "חנות כלבו"
    },
    {
        "eng": "depend on",
        "heb": "תלוי ב-"
    },
    {
        "eng": "depict",
        "heb": "לשרטט"
    },
    {
        "eng": "deposit",
        "heb": "פיקדון"
    },
    {
        "eng": "depreciate",
        "heb": "להפחית"
    },
    {
        "eng": "depression",
        "heb": "דיכאון"
    },
    {
        "eng": "derision",
        "heb": "לעג"
    },
    {
        "eng": "derive",
        "heb": "לשאוב"
    },
    {
        "eng": "descend",
        "heb": "ירד"
    },
    {
        "eng": "descendent",
        "heb": "צאצא"
    },
    {
        "eng": "describe",
        "heb": "לתאר"
    },
    {
        "eng": "described",
        "heb": "מתואר"
    },
    {
        "eng": "description",
        "heb": "תיאור"
    },
    {
        "eng": "desert",
        "heb": "מדבר"
    },
    {
        "eng": "deserve",
        "heb": "מגיע"
    },
    {
        "eng": "design",
        "heb": "תכנית"
    },
    {
        "eng": "designer",
        "heb": "מעצב"
    },
    {
        "eng": "desirable",
        "heb": "נחשק"
    },
    {
        "eng": "desire",
        "heb": "לחפוץ"
    },
    {
        "eng": "desolate",
        "heb": "הרוס"
    },
    {
        "eng": "despair",
        "heb": "להתייאש"
    },
    {
        "eng": "desperate",
        "heb": "נואש"
    },
    {
        "eng": "desperation",
        "heb": "ייאוש"
    },
    {
        "eng": "despise",
        "heb": "לתעב"
    },
    {
        "eng": "despite",
        "heb": "למרות"
    },
    {
        "eng": "dessert",
        "heb": "קינוח"
    },
    {
        "eng": "destination",
        "heb": "יעד"
    },
    {
        "eng": "destiny",
        "heb": "גורל"
    },
    {
        "eng": "destroy",
        "heb": "להרוס"
    },
    {
        "eng": "destructive",
        "heb": "הרסני"
    },
    {
        "eng": "detach",
        "heb": "להתנתק"
    },
    {
        "eng": "detail",
        "heb": "לפרט"
    },
    {
        "eng": "detect",
        "heb": "לאתר"
    },
    {
        "eng": "deteriorate",
        "heb": "להידרדר"
    },
    {
        "eng": "determine",
        "heb": "לקבוע"
    },
    {
        "eng": "determined",
        "heb": "נחוש"
    },
    {
        "eng": "detract",
        "heb": "להפחית"
    },
    {
        "eng": "detrimental",
        "heb": "מזיק"
    },
    {
        "eng": "devastate",
        "heb": "להחריב"
    },
    {
        "eng": "devastated",
        "heb": "מפורק"
    },
    {
        "eng": "develop",
        "heb": "לפתח"
    },
    {
        "eng": "development",
        "heb": "התפתחות"
    },
    {
        "eng": "deviant",
        "heb": "סוטה"
    },
    {
        "eng": "device",
        "heb": "מכשיר"
    },
    {
        "eng": "devise",
        "heb": "לתכנן"
    },
    {
        "eng": "devoid",
        "heb": "נטול"
    },
    {
        "eng": "devote",
        "heb": "להקדיש"
    },
    {
        "eng": "diagnose",
        "heb": "לאבחן"
    },
    {
        "eng": "diagram",
        "heb": "תרשים"
    },
    {
        "eng": "dialect",
        "heb": "ניב"
    },
    {
        "eng": "diary",
        "heb": "יומן"
    },
    {
        "eng": "dictate",
        "heb": "להכתיב"
    },
    {
        "eng": "dictator",
        "heb": "דיקטטור"
    },
    {
        "eng": "die",
        "heb": "מת"
    },
    {
        "eng": "die (dice)",
        "heb": "קובייה"
    },
    {
        "eng": "diet",
        "heb": "תזונה"
    },
    {
        "eng": "difference",
        "heb": "הבדל"
    },
    {
        "eng": "differences",
        "heb": "חילוקי דעות"
    },
    {
        "eng": "different",
        "heb": "שונה"
    },
    {
        "eng": "different from",
        "heb": "שונה מ-"
    },
    {
        "eng": "differentiate",
        "heb": "להבדיל"
    },
    {
        "eng": "difficult",
        "heb": "קשה"
    },
    {
        "eng": "dilemma",
        "heb": "דילמה"
    },
    {
        "eng": "dim",
        "heb": "לעמעמם"
    },
    {
        "eng": "dimension",
        "heb": "מימד"
    },
    {
        "eng": "diminish",
        "heb": "לצמצם"
    },
    {
        "eng": "direct",
        "heb": "לכוון"
    },
    {
        "eng": "direction",
        "heb": "כיוון"
    },
    {
        "eng": "director",
        "heb": "מנהל"
    },
    {
        "eng": "dirty",
        "heb": "מלוכלך"
    },
    {
        "eng": "disadvantage",
        "heb": "חסרון"
    },
    {
        "eng": "disagreement",
        "heb": "חוסר הסכמה"
    },
    {
        "eng": "disappear",
        "heb": "להעלם"
    },
    {
        "eng": "disappoint",
        "heb": "לאכזב"
    },
    {
        "eng": "disapproving",
        "heb": "מגנה, מסתייג"
    },
    {
        "eng": "disarmament",
        "heb": "פירוק מנשק"
    },
    {
        "eng": "disaster",
        "heb": "אסון"
    },
    {
        "eng": "disciples",
        "heb": "תלמידים"
    },
    {
        "eng": "discipline",
        "heb": "מחקר"
    },
    {
        "eng": "disciplined",
        "heb": "ממושמע"
    },
    {
        "eng": "disclose",
        "heb": "לגלות"
    },
    {
        "eng": "discontent",
        "heb": "חוסר שביעות רצון"
    },
    {
        "eng": "discord",
        "heb": "צרימה"
    },
    {
        "eng": "discourage",
        "heb": "לשכנע שלא לעשות משהו"
    },
    {
        "eng": "discover",
        "heb": "לגלות"
    },
    {
        "eng": "discoveries",
        "heb": "תגליות"
    },
    {
        "eng": "discrepancy",
        "heb": "פער"
    },
    {
        "eng": "discriminate",
        "heb": "להפלות"
    },
    {
        "eng": "discuss",
        "heb": "לדון"
    },
    {
        "eng": "disdain",
        "heb": "בוז"
    },
    {
        "eng": "disease",
        "heb": "מחלה"
    },
    {
        "eng": "disgrace",
        "heb": "בושה"
    },
    {
        "eng": "disguise",
        "heb": "תחפושת"
    },
    {
        "eng": "disgust",
        "heb": "להגעיל"
    },
    {
        "eng": "disinfection",
        "heb": "חיטוי"
    },
    {
        "eng": "dislocate",
        "heb": "לנקוע"
    },
    {
        "eng": "disloyal",
        "heb": "לא נאמן"
    },
    {
        "eng": "dismiss",
        "heb": "לבטל"
    },
    {
        "eng": "disobey",
        "heb": "להפר"
    },
    {
        "eng": "disorder",
        "heb": "הפרעה"
    },
    {
        "eng": "disparage",
        "heb": "להמעיט בערך"
    },
    {
        "eng": "disparagement",
        "heb": "זלזול"
    },
    {
        "eng": "dispatch",
        "heb": "לשגר"
    },
    {
        "eng": "displacement",
        "heb": "עקירה"
    },
    {
        "eng": "display",
        "heb": "להציג"
    },
    {
        "eng": "disposable",
        "heb": "חד-פעמי"
    },
    {
        "eng": "dispose",
        "heb": "להיפטר"
    },
    {
        "eng": "disprove",
        "heb": "להפריך"
    },
    {
        "eng": "disregard",
        "heb": "להתעלם"
    },
    {
        "eng": "disrupt",
        "heb": "להפריע"
    },
    {
        "eng": "dissect",
        "heb": "לבתר"
    },
    {
        "eng": "dissection",
        "heb": "ביתור"
    },
    {
        "eng": "disseminate",
        "heb": "להפיץ"
    },
    {
        "eng": "dissent",
        "heb": "חילוקי דעות"
    },
    {
        "eng": "dissolve",
        "heb": "להתמוסס"
    },
    {
        "eng": "distance",
        "heb": "מרחק"
    },
    {
        "eng": "distant",
        "heb": "מרוחק"
    },
    {
        "eng": "distinct",
        "heb": "ברור"
    },
    {
        "eng": "distinction",
        "heb": "מצוינות"
    },
    {
        "eng": "distinctive",
        "heb": "מיוחד"
    },
    {
        "eng": "distinguish",
        "heb": "להבחין"
    },
    {
        "eng": "distract",
        "heb": "להסיח את הדעת"
    },
    {
        "eng": "distress",
        "heb": "מצוקה"
    },
    {
        "eng": "distribute",
        "heb": "להפיץ"
    },
    {
        "eng": "distribution",
        "heb": "הפצה"
    },
    {
        "eng": "district",
        "heb": "מחוז"
    },
    {
        "eng": "disturb",
        "heb": "להפריע"
    },
    {
        "eng": "disturbance",
        "heb": "הפרעה"
    },
    {
        "eng": "disuse",
        "heb": "חוסר שימוש"
    },
    {
        "eng": "diurnal",
        "heb": "יומי"
    },
    {
        "eng": "diverge",
        "heb": "לסטות"
    },
    {
        "eng": "diverse",
        "heb": "מגוון"
    },
    {
        "eng": "diversity",
        "heb": "מגוון"
    },
    {
        "eng": "divide",
        "heb": "לחלק"
    },
    {
        "eng": "divine",
        "heb": "אלוהי"
    },
    {
        "eng": "divinity",
        "heb": "אלוהות"
    },
    {
        "eng": "divorce",
        "heb": "גירושין"
    },
    {
        "eng": "docile",
        "heb": "נח"
    },
    {
        "eng": "document",
        "heb": "לתעד"
    },
    {
        "eng": "domestic",
        "heb": "ביתי"
    },
    {
        "eng": "dominate",
        "heb": "לשלוט"
    },
    {
        "eng": "donate",
        "heb": "לתרום"
    },
    {
        "eng": "done",
        "heb": "גמור"
    },
    {
        "eng": "donor",
        "heb": "תורם"
    },
    {
        "eng": "doorstep",
        "heb": "מפתן הדלת"
    },
    {
        "eng": "dose",
        "heb": "מינון"
    },
    {
        "eng": "double standard",
        "heb": "מוסר כפול"
    },
    {
        "eng": "doubt",
        "heb": "ספק"
    },
    {
        "eng": "dovecote",
        "heb": "שובך יונים"
    },
    {
        "eng": "down",
        "heb": "למטה"
    },
    {
        "eng": "downhill",
        "heb": "מדרון"
    },
    {
        "eng": "dozen",
        "heb": "תריסר"
    },
    {
        "eng": "draft",
        "heb": "גיוס"
    },
    {
        "eng": "drag",
        "heb": "לגרור"
    },
    {
        "eng": "drastic",
        "heb": "דרסטי"
    },
    {
        "eng": "draw",
        "heb": "לצייר, למשוך, תיקו"
    },
    {
        "eng": "draw (drew)",
        "heb": "שלף"
    },
    {
        "eng": "drawback",
        "heb": "עיכוב"
    },
    {
        "eng": "dread",
        "heb": "לפחד"
    },
    {
        "eng": "dream",
        "heb": "חלום"
    },
    {
        "eng": "drench",
        "heb": "להספיג"
    },
    {
        "eng": "drift",
        "heb": "סחף"
    },
    {
        "eng": "drink",
        "heb": "לשתות"
    },
    {
        "eng": "drip",
        "heb": "לטפטף"
    },
    {
        "eng": "drought",
        "heb": "בצורת"
    },
    {
        "eng": "drug",
        "heb": "סם"
    },
    {
        "eng": "due",
        "heb": "צריך להיעשות"
    },
    {
        "eng": "due to",
        "heb": "בגלל"
    },
    {
        "eng": "duel",
        "heb": "קרב - דו"
    },
    {
        "eng": "dull",
        "heb": "סתום"
    },
    {
        "eng": "dump",
        "heb": "לשפוך"
    },
    {
        "eng": "duplicate",
        "heb": "לשכפל"
    },
    {
        "eng": "durable",
        "heb": "מתמשך"
    },
    {
        "eng": "during",
        "heb": "תוך כדי"
    },
    {
        "eng": "dust",
        "heb": "אבק"
    },
    {
        "eng": "Dutch",
        "heb": "הולנדי"
    },
    {
        "eng": "duty",
        "heb": "תפקיד"
    },
    {
        "eng": "dwarf",
        "heb": "גמד"
    },
    {
        "eng": "dwell",
        "heb": "להתגורר"
    },
    {
        "eng": "dwelling",
        "heb": "בית"
    },
    {
        "eng": "dwindle",
        "heb": "להתמעט"
    },
    {
        "eng": "dye",
        "heb": "לצבוע"
    },
    {
        "eng": "dynasty",
        "heb": "שושלת"
    },
    {
        "eng": "e.g.",
        "heb": "לדוגמה"
    },
    {
        "eng": "eager",
        "heb": "נלהב"
    },
    {
        "eng": "eagle",
        "heb": "נשר"
    },
    {
        "eng": "earlier",
        "heb": "קודם לכן"
    },
    {
        "eng": "early",
        "heb": "מוקדם"
    },
    {
        "eng": "earn",
        "heb": "להרוויח"
    },
    {
        "eng": "earth",
        "heb": "אדמה"
    },
    {
        "eng": "earthquake",
        "heb": "רעידת אדמה"
    },
    {
        "eng": "ease",
        "heb": "להקל"
    },
    {
        "eng": "easily",
        "heb": "בקלות"
    },
    {
        "eng": "East",
        "heb": "מזרח"
    },
    {
        "eng": "eccentric",
        "heb": "אקסצנטרי"
    },
    {
        "eng": "echo",
        "heb": "הד"
    },
    {
        "eng": "ecological",
        "heb": "אקולוגי"
    },
    {
        "eng": "economy",
        "heb": "כלכלה"
    },
    {
        "eng": "edge",
        "heb": "קצה"
    },
    {
        "eng": "edible",
        "heb": "אכיל"
    },
    {
        "eng": "edit",
        "heb": "לערוך"
    },
    {
        "eng": "edition",
        "heb": "מהדורה"
    },
    {
        "eng": "editor",
        "heb": "עורך"
    },
    {
        "eng": "educate",
        "heb": "לחנך"
    },
    {
        "eng": "education",
        "heb": "השכלה"
    },
    {
        "eng": "eel",
        "heb": "צלופח"
    },
    {
        "eng": "effect",
        "heb": "השפעה, אפקט"
    },
    {
        "eng": "effective",
        "heb": "יעיל"
    },
    {
        "eng": "efficient",
        "heb": "יעיל"
    },
    {
        "eng": "effort",
        "heb": "מאמץ"
    },
    {
        "eng": "either... or...",
        "heb": "או... או..."
    },
    {
        "eng": "elaborate",
        "heb": "לפרט"
    },
    {
        "eng": "elastic",
        "heb": "גומיה"
    },
    {
        "eng": "elderly",
        "heb": "זקן"
    },
    {
        "eng": "elect",
        "heb": "לבחור"
    },
    {
        "eng": "electricity",
        "heb": "חשמל"
    },
    {
        "eng": "elephant",
        "heb": "פיל"
    },
    {
        "eng": "eliminate",
        "heb": "לפסול"
    },
    {
        "eng": "eloquent",
        "heb": "רהוט"
    },
    {
        "eng": "elsewhere",
        "heb": "במקום אחר"
    },
    {
        "eng": "elude",
        "heb": "להתחמק"
    },
    {
        "eng": "embalm",
        "heb": "לשמר"
    },
    {
        "eng": "embarrass",
        "heb": "להביך"
    },
    {
        "eng": "embitter",
        "heb": "גורם התמרמרות"
    },
    {
        "eng": "emblem",
        "heb": "סמל"
    },
    {
        "eng": "embrace",
        "heb": "לאמץ לקרבו"
    },
    {
        "eng": "embryo",
        "heb": "עוּבָּר"
    },
    {
        "eng": "emerge",
        "heb": "להגיח"
    },
    {
        "eng": "emigrate",
        "heb": "להגר"
    },
    {
        "eng": "eminent",
        "heb": "בולט"
    },
    {
        "eng": "emission",
        "heb": "פליטה"
    },
    {
        "eng": "emit",
        "heb": "להוציא"
    },
    {
        "eng": "emotion",
        "heb": "רגש"
    },
    {
        "eng": "empathy",
        "heb": "אמפתיה"
    },
    {
        "eng": "emperor",
        "heb": "שליט"
    },
    {
        "eng": "emphasize",
        "heb": "להדגיש"
    },
    {
        "eng": "empire",
        "heb": "אימפריה"
    },
    {
        "eng": "employ",
        "heb": "להעסיק"
    },
    {
        "eng": "employer",
        "heb": "מעביד"
    },
    {
        "eng": "empty",
        "heb": "ריק"
    },
    {
        "eng": "enact",
        "heb": "לחוקק"
    },
    {
        "eng": "enchant",
        "heb": "להקסים"
    },
    {
        "eng": "enclose",
        "heb": "לצרף"
    },
    {
        "eng": "enclosing",
        "heb": "להקיף"
    },
    {
        "eng": "enclosure",
        "heb": "שטח מגודר"
    },
    {
        "eng": "encounter",
        "heb": "מפגש"
    },
    {
        "eng": "encourage",
        "heb": "לעודד"
    },
    {
        "eng": "encroach",
        "heb": "לפלוש"
    },
    {
        "eng": "endanger",
        "heb": "לסכן"
    },
    {
        "eng": "endangered",
        "heb": "בסכנת הכחדה"
    },
    {
        "eng": "endurance",
        "heb": "כוח סבל"
    },
    {
        "eng": "endure",
        "heb": "להחזיק מעמד"
    },
    {
        "eng": "enemy",
        "heb": "אויב"
    },
    {
        "eng": "energy",
        "heb": "אנרגיה"
    },
    {
        "eng": "enforce",
        "heb": "לכפות"
    },
    {
        "eng": "engage",
        "heb": "ליצור מגע"
    },
    {
        "eng": "engagement",
        "heb": "התחייבות"
    },
    {
        "eng": "engine",
        "heb": "מנוע"
    },
    {
        "eng": "engineer",
        "heb": "להנדס"
    },
    {
        "eng": "engrave",
        "heb": "לחרוט"
    },
    {
        "eng": "enhance",
        "heb": "להעצים"
    },
    {
        "eng": "enjoy",
        "heb": "ליהנות"
    },
    {
        "eng": "enjoyable",
        "heb": "מהנה"
    },
    {
        "eng": "enlarge",
        "heb": "להגדיל"
    },
    {
        "eng": "enlist",
        "heb": "להתגייס"
    },
    {
        "eng": "enormous",
        "heb": "עצום"
    },
    {
        "eng": "enough",
        "heb": "מספיק"
    },
    {
        "eng": "enrage",
        "heb": "להכעיס"
    },
    {
        "eng": "enrich",
        "heb": "להעשיר"
    },
    {
        "eng": "enroll",
        "heb": "להירשם"
    },
    {
        "eng": "ensue",
        "heb": "נבע"
    },
    {
        "eng": "ensure",
        "heb": "להבטיח"
    },
    {
        "eng": "enter",
        "heb": "להיכנס"
    },
    {
        "eng": "entertain",
        "heb": "לבדר"
    },
    {
        "eng": "entertainment",
        "heb": "בידור"
    },
    {
        "eng": "enthusiasm",
        "heb": "התלהבות"
    },
    {
        "eng": "entirely",
        "heb": "לחלוטין"
    },
    {
        "eng": "entitled",
        "heb": "זכאי"
    },
    {
        "eng": "entrance",
        "heb": "כניסה"
    },
    {
        "eng": "envelope",
        "heb": "מעטפה"
    },
    {
        "eng": "environment",
        "heb": "סביבה"
    },
    {
        "eng": "envision",
        "heb": "לצפות"
    },
    {
        "eng": "envious",
        "heb": "קנאי"
    },
    {
        "eng": "envy",
        "heb": "לקנא"
    },
    {
        "eng": "enzyme",
        "heb": "אנזים"
    },
    {
        "eng": "epidemic",
        "heb": "מגיפה"
    },
    {
        "eng": "episode",
        "heb": "פרק"
    },
    {
        "eng": "epitomize",
        "heb": "לאפיין"
    },
    {
        "eng": "equality",
        "heb": "שוויון"
    },
    {
        "eng": "equally",
        "heb": "במידה שווה"
    },
    {
        "eng": "equates",
        "heb": "להשוות"
    },
    {
        "eng": "Equator",
        "heb": "קו המשווה"
    },
    {
        "eng": "equip",
        "heb": "לצייד"
    },
    {
        "eng": "equipment",
        "heb": "ציוד"
    },
    {
        "eng": "equivalent",
        "heb": "מקבילה"
    },
    {
        "eng": "era",
        "heb": "עידן"
    },
    {
        "eng": "erase",
        "heb": "למחוק"
    },
    {
        "eng": "eraser",
        "heb": "מחק"
    },
    {
        "eng": "erosion",
        "heb": "כרסום"
    },
    {
        "eng": "erroneous",
        "heb": "שגוי"
    },
    {
        "eng": "error",
        "heb": "שגיאה"
    },
    {
        "eng": "erupt",
        "heb": "התפרץ"
    },
    {
        "eng": "escape",
        "heb": "בריחה, לברוח"
    },
    {
        "eng": "especially",
        "heb": "במיוחד"
    },
    {
        "eng": "essential",
        "heb": "חיוני"
    },
    {
        "eng": "essentially",
        "heb": "בעיקרו"
    },
    {
        "eng": "establish",
        "heb": "לייסד"
    },
    {
        "eng": "estate",
        "heb": "אחוזה"
    },
    {
        "eng": "esteemed",
        "heb": "מכובד"
    },
    {
        "eng": "estimate",
        "heb": "להעריך"
    },
    {
        "eng": "ethical",
        "heb": "אתי"
    },
    {
        "eng": "ethnic",
        "heb": "אתני"
    },
    {
        "eng": "evade",
        "heb": "התחמק"
    },
    {
        "eng": "evaluate",
        "heb": "להעריך"
    },
    {
        "eng": "evaluation",
        "heb": "הערכה"
    },
    {
        "eng": "even",
        "heb": "אפילו"
    },
    {
        "eng": "even if",
        "heb": "גם אם"
    },
    {
        "eng": "even so",
        "heb": "אף על פי כן"
    },
    {
        "eng": "even though",
        "heb": "למרות ש-"
    },
    {
        "eng": "evening",
        "heb": "ערב"
    },
    {
        "eng": "evenly",
        "heb": "באופן שווה"
    },
    {
        "eng": "event",
        "heb": "אירוע"
    },
    {
        "eng": "eventually",
        "heb": "לבסוף"
    },
    {
        "eng": "every day",
        "heb": "כל יום"
    },
    {
        "eng": "every now and then",
        "heb": "לפעמים"
    },
    {
        "eng": "evidence",
        "heb": "ראיה"
    },
    {
        "eng": "evocative",
        "heb": "מזכיר"
    },
    {
        "eng": "evoke",
        "heb": "לעורר"
    },
    {
        "eng": "evolutionary",
        "heb": "התפתחותי"
    },
    {
        "eng": "evolved",
        "heb": "התפתח"
    },
    {
        "eng": "exact",
        "heb": "מדויק"
    },
    {
        "eng": "exactly",
        "heb": "בדיוק"
    },
    {
        "eng": "exaggerate",
        "heb": "להגזים"
    },
    {
        "eng": "examination",
        "heb": "בדיקה"
    },
    {
        "eng": "examine",
        "heb": "לבחון"
    },
    {
        "eng": "example",
        "heb": "דוגמה"
    },
    {
        "eng": "excel",
        "heb": "להצטיין"
    },
    {
        "eng": "excellent",
        "heb": "מצוין"
    },
    {
        "eng": "except",
        "heb": "מלבד"
    },
    {
        "eng": "except for",
        "heb": "למעט"
    },
    {
        "eng": "exception",
        "heb": "יוצא מהכלל"
    },
    {
        "eng": "excessive",
        "heb": "יתר"
    },
    {
        "eng": "excessively",
        "heb": "בצורה מוגזמת"
    },
    {
        "eng": "exchange",
        "heb": "להחליף"
    },
    {
        "eng": "excitement",
        "heb": "התרגשות"
    },
    {
        "eng": "exclude",
        "heb": "למנוע"
    },
    {
        "eng": "exclusive",
        "heb": "בלעדי"
    },
    {
        "eng": "exclusively",
        "heb": "באופן בלעדי"
    },
    {
        "eng": "excuse",
        "heb": "לסלוח"
    },
    {
        "eng": "execute",
        "heb": "להוציא לפועל"
    },
    {
        "eng": "exercise",
        "heb": "תרגיל"
    },
    {
        "eng": "exert",
        "heb": "להפעיל"
    },
    {
        "eng": "exhale",
        "heb": "לנשוף"
    },
    {
        "eng": "exhaust",
        "heb": "להתיש, לפלוט"
    },
    {
        "eng": "exhausting",
        "heb": "מתיש"
    },
    {
        "eng": "exhibit",
        "heb": "מוצג"
    },
    {
        "eng": "exhibition",
        "heb": "תערוכה"
    },
    {
        "eng": "exile",
        "heb": "לגרש"
    },
    {
        "eng": "exist",
        "heb": "קיים"
    },
    {
        "eng": "existence",
        "heb": "קיום"
    },
    {
        "eng": "exotic",
        "heb": "אקזוטי"
    },
    {
        "eng": "expand",
        "heb": "להרחיב"
    },
    {
        "eng": "expansion",
        "heb": "התפתחות"
    },
    {
        "eng": "expatriate",
        "heb": "לגרש"
    },
    {
        "eng": "expect",
        "heb": "לצפות"
    },
    {
        "eng": "expectations",
        "heb": "ציפיות"
    },
    {
        "eng": "expedite",
        "heb": "לזרז"
    },
    {
        "eng": "expel",
        "heb": "להרחיק"
    },
    {
        "eng": "expend",
        "heb": "לפזר"
    },
    {
        "eng": "expendable",
        "heb": "שניתן לוותר עליו"
    },
    {
        "eng": "expense",
        "heb": "הוצאות"
    },
    {
        "eng": "expensive",
        "heb": "יקר"
    },
    {
        "eng": "experience",
        "heb": "ניסיון"
    },
    {
        "eng": "experiment",
        "heb": "ניסוי"
    },
    {
        "eng": "expert",
        "heb": "מומחה"
    },
    {
        "eng": "explain",
        "heb": "להסביר"
    },
    {
        "eng": "explanation",
        "heb": "הסבר"
    },
    {
        "eng": "explicit",
        "heb": "מפורש"
    },
    {
        "eng": "explode",
        "heb": "להתפוצץ"
    },
    {
        "eng": "exploit",
        "heb": "לנצל"
    },
    {
        "eng": "explore",
        "heb": "לחקור"
    },
    {
        "eng": "explosive",
        "heb": "חומר נפץ"
    },
    {
        "eng": "export",
        "heb": "ייצוא"
    },
    {
        "eng": "exposure",
        "heb": "חשיפה"
    },
    {
        "eng": "express",
        "heb": "לבטא"
    },
    {
        "eng": "expression",
        "heb": "ביטוי"
    },
    {
        "eng": "exquisite",
        "heb": "מצוין"
    },
    {
        "eng": "extend",
        "heb": "להאריך"
    },
    {
        "eng": "extension",
        "heb": "שלוחה"
    },
    {
        "eng": "extensive",
        "heb": "נרחב"
    },
    {
        "eng": "exterior",
        "heb": "חיצוני"
    },
    {
        "eng": "external",
        "heb": "חיצוני"
    },
    {
        "eng": "extinct",
        "heb": "נכחד"
    },
    {
        "eng": "extinction",
        "heb": "הכחדה"
    },
    {
        "eng": "extortion",
        "heb": "סחיטה"
    },
    {
        "eng": "extract",
        "heb": "לתמצת"
    },
    {
        "eng": "extraordinary",
        "heb": "בלתי רגיל"
    },
    {
        "eng": "extrapolate",
        "heb": "לאמוד על סמך מידע קיים"
    },
    {
        "eng": "extreme",
        "heb": "קיצוני"
    },
    {
        "eng": "eyesight",
        "heb": "ראייה"
    },
    {
        "eng": "fabric",
        "heb": "בד"
    },
    {
        "eng": "fabricate",
        "heb": "לבדות"
    },
    {
        "eng": "face",
        "heb": "פונה ל-"
    },
    {
        "eng": "facial",
        "heb": "שקשור בפנים"
    },
    {
        "eng": "facilitate",
        "heb": "לסייע"
    },
    {
        "eng": "facility",
        "heb": "מתקן"
    },
    {
        "eng": "fact",
        "heb": "עובדה"
    },
    {
        "eng": "factor",
        "heb": "גורם"
    },
    {
        "eng": "factory",
        "heb": "בית חרושת"
    },
    {
        "eng": "fail",
        "heb": "להיכשל"
    },
    {
        "eng": "failure",
        "heb": "כשלון"
    },
    {
        "eng": "faint",
        "heb": "קלוש"
    },
    {
        "eng": "fairy",
        "heb": "פיה"
    },
    {
        "eng": "fairytale",
        "heb": "אגדה"
    },
    {
        "eng": "faith",
        "heb": "אמון"
    },
    {
        "eng": "fall",
        "heb": "סתיו"
    },
    {
        "eng": "fall apart",
        "heb": "להתפרק"
    },
    {
        "eng": "false",
        "heb": "שקר"
    },
    {
        "eng": "familiar",
        "heb": "מוכר"
    },
    {
        "eng": "familiarize",
        "heb": "להתוודע"
    },
    {
        "eng": "family",
        "heb": "משפחה"
    },
    {
        "eng": "famine",
        "heb": "רעב קשה"
    },
    {
        "eng": "famous",
        "heb": "מפורסם"
    },
    {
        "eng": "fan",
        "heb": "אוהד"
    },
    {
        "eng": "fancy",
        "heb": "מפואר"
    },
    {
        "eng": "farm",
        "heb": "חווה"
    },
    {
        "eng": "farmer",
        "heb": "חוואי"
    },
    {
        "eng": "farther",
        "heb": "הלאה"
    },
    {
        "eng": "fascinate",
        "heb": "לרתק"
    },
    {
        "eng": "fashion",
        "heb": "אופנה"
    },
    {
        "eng": "fast",
        "heb": "צום"
    },
    {
        "eng": "fasten",
        "heb": "להדק"
    },
    {
        "eng": "fatal",
        "heb": "פטלי"
    },
    {
        "eng": "fate",
        "heb": "גורל"
    },
    {
        "eng": "father",
        "heb": "אבא"
    },
    {
        "eng": "fatigue",
        "heb": "לעייף"
    },
    {
        "eng": "fault",
        "heb": "אשמה"
    },
    {
        "eng": "faulty",
        "heb": "לא תקין"
    },
    {
        "eng": "favor",
        "heb": "טובה"
    },
    {
        "eng": "favored",
        "heb": "מועדף"
    },
    {
        "eng": "fear",
        "heb": "פחד"
    },
    {
        "eng": "feature",
        "heb": "מאפיין, תכונה"
    },
    {
        "eng": "feel",
        "heb": "להרגיש"
    },
    {
        "eng": "feeling",
        "heb": "הרגשה"
    },
    {
        "eng": "fellow",
        "heb": "עמית"
    },
    {
        "eng": "feminine",
        "heb": "נשי"
    },
    {
        "eng": "fertile",
        "heb": "פורה"
    },
    {
        "eng": "fetus",
        "heb": "עובר"
    },
    {
        "eng": "fever",
        "heb": "חום"
    },
    {
        "eng": "few",
        "heb": "מעט"
    },
    {
        "eng": "fiber",
        "heb": "סיב"
    },
    {
        "eng": "fiction",
        "heb": "לא אמיתי"
    },
    {
        "eng": "field",
        "heb": "תחום"
    },
    {
        "eng": "fight, fought",
        "heb": "לריב"
    },
    {
        "eng": "figurative",
        "heb": "סמלי"
    },
    {
        "eng": "figure",
        "heb": "דמות, צורה, ספרה, לחשב"
    },
    {
        "eng": "file",
        "heb": "קובץ"
    },
    {
        "eng": "filmmaker",
        "heb": "יוצר סרטים"
    },
    {
        "eng": "filter",
        "heb": "לסנן"
    },
    {
        "eng": "finalize",
        "heb": "לגבש"
    },
    {
        "eng": "finally",
        "heb": "לבסוף"
    },
    {
        "eng": "financial",
        "heb": "כספי"
    },
    {
        "eng": "find",
        "heb": "למצוא"
    },
    {
        "eng": "findings",
        "heb": "ממצאים"
    },
    {
        "eng": "fine",
        "heb": "קנס"
    },
    {
        "eng": "finger",
        "heb": "אצבע"
    },
    {
        "eng": "fingerprint",
        "heb": "טביעת אצבע"
    },
    {
        "eng": "fire",
        "heb": "לפטר"
    },
    {
        "eng": "firm",
        "heb": "מוצק"
    },
    {
        "eng": "first of all",
        "heb": "ראשית"
    },
    {
        "eng": "fisherman",
        "heb": "דייג"
    },
    {
        "eng": "fishing",
        "heb": "דיג"
    },
    {
        "eng": "fit",
        "heb": "להתאים"
    },
    {
        "eng": "fix",
        "heb": "לתקן"
    },
    {
        "eng": "flagrant",
        "heb": "בוטה"
    },
    {
        "eng": "flame",
        "heb": "להבה"
    },
    {
        "eng": "flat",
        "heb": "שטוח"
    },
    {
        "eng": "flatter",
        "heb": "שטוח יותר"
    },
    {
        "eng": "flattery",
        "heb": "חנופה"
    },
    {
        "eng": "flavor",
        "heb": "לתבל"
    },
    {
        "eng": "flee, fled",
        "heb": "נמלט"
    },
    {
        "eng": "flew",
        "heb": "עף"
    },
    {
        "eng": "flexible",
        "heb": "גמיש"
    },
    {
        "eng": "flight",
        "heb": "בריחה"
    },
    {
        "eng": "flimsy",
        "heb": "שביר"
    },
    {
        "eng": "flip",
        "heb": "להפוך צד"
    },
    {
        "eng": "flock",
        "heb": "המון"
    },
    {
        "eng": "flood",
        "heb": "שיטפון"
    },
    {
        "eng": "flourish",
        "heb": "לשגשג"
    },
    {
        "eng": "flow",
        "heb": "זרם"
    },
    {
        "eng": "flower",
        "heb": "פרח"
    },
    {
        "eng": "fluctuation",
        "heb": "חוסר יציבות"
    },
    {
        "eng": "fluency",
        "heb": "שטף"
    },
    {
        "eng": "fluent",
        "heb": "שוטף"
    },
    {
        "eng": "fluid",
        "heb": "נוזל, נוזלי"
    },
    {
        "eng": "fly",
        "heb": "לעוף"
    },
    {
        "eng": "focus",
        "heb": "מיקוד"
    },
    {
        "eng": "foil",
        "heb": "לסכל"
    },
    {
        "eng": "folk",
        "heb": "עם"
    },
    {
        "eng": "folklore",
        "heb": "פולקלור"
    },
    {
        "eng": "follow",
        "heb": "לעקוב"
    },
    {
        "eng": "fool",
        "heb": "טיפש"
    },
    {
        "eng": "footage",
        "heb": "קילומטראז'"
    },
    {
        "eng": "footprints",
        "heb": "טביעות רגל"
    },
    {
        "eng": "for",
        "heb": "מפני ש-"
    },
    {
        "eng": "for example",
        "heb": "לדוגמה"
    },
    {
        "eng": "for instance",
        "heb": "לדוגמה"
    },
    {
        "eng": "for the most part",
        "heb": "בדרך-כלל"
    },
    {
        "eng": "for the sake of",
        "heb": "למען"
    },
    {
        "eng": "forbid",
        "heb": "לאסור"
    },
    {
        "eng": "force",
        "heb": "לכפות"
    },
    {
        "eng": "forceful",
        "heb": "חזק"
    },
    {
        "eng": "forecast",
        "heb": "תחזית"
    },
    {
        "eng": "foreign",
        "heb": "חוץ"
    },
    {
        "eng": "forerunner",
        "heb": "אות"
    },
    {
        "eng": "foresee",
        "heb": "לצפות מראש"
    },
    {
        "eng": "forest",
        "heb": "יער"
    },
    {
        "eng": "forever",
        "heb": "לנצח"
    },
    {
        "eng": "forfeit",
        "heb": "לוותר"
    },
    {
        "eng": "forget",
        "heb": "לשכוח"
    },
    {
        "eng": "forgettable",
        "heb": "שאפשר לשכוח אותו"
    },
    {
        "eng": "forgive",
        "heb": "לסלוח"
    },
    {
        "eng": "fork",
        "heb": "מזלג"
    },
    {
        "eng": "form",
        "heb": "צורה, טופס, ליצור"
    },
    {
        "eng": "formal",
        "heb": "רשמי"
    },
    {
        "eng": "former",
        "heb": "לשעבר, קודם"
    },
    {
        "eng": "formula",
        "heb": "נוסחה"
    },
    {
        "eng": "formulate",
        "heb": "לנסח"
    },
    {
        "eng": "forsake",
        "heb": "לזנוח"
    },
    {
        "eng": "fort",
        "heb": "מבצר"
    },
    {
        "eng": "forth",
        "heb": "הלאה"
    },
    {
        "eng": "fortify",
        "heb": "לבצר"
    },
    {
        "eng": "fortunate",
        "heb": "בעל מזל"
    },
    {
        "eng": "fortune",
        "heb": "מזל"
    },
    {
        "eng": "forward",
        "heb": "קדימה"
    },
    {
        "eng": "fossil",
        "heb": "מאובן"
    },
    {
        "eng": "foster",
        "heb": "מאומץ"
    },
    {
        "eng": "found",
        "heb": "מצא"
    },
    {
        "eng": "foundation",
        "heb": "יסוד"
    },
    {
        "eng": "fraction",
        "heb": "שבר, חלקיק"
    },
    {
        "eng": "fracture",
        "heb": "שבר"
    },
    {
        "eng": "fragile",
        "heb": "שביר"
    },
    {
        "eng": "fragrance",
        "heb": "ניחוח"
    },
    {
        "eng": "frame",
        "heb": "מסגרת"
    },
    {
        "eng": "fraternal",
        "heb": "אחווה"
    },
    {
        "eng": "fraud",
        "heb": "הונאה"
    },
    {
        "eng": "freeze, froze",
        "heb": "הקפיא"
    },
    {
        "eng": "frequency",
        "heb": "תדירות"
    },
    {
        "eng": "frequent",
        "heb": "שכיח"
    },
    {
        "eng": "frequently",
        "heb": "לעיתים קרובות"
    },
    {
        "eng": "friend",
        "heb": "חבר"
    },
    {
        "eng": "friendly",
        "heb": "ידידותי"
    },
    {
        "eng": "friendship",
        "heb": "חברות"
    },
    {
        "eng": "frightening",
        "heb": "מפחיד"
    },
    {
        "eng": "fringes",
        "heb": "שוליים"
    },
    {
        "eng": "frog",
        "heb": "צפרדע"
    },
    {
        "eng": "from",
        "heb": "מ-"
    },
    {
        "eng": "from time to time",
        "heb": "מפעם לפעם"
    },
    {
        "eng": "front",
        "heb": "חזית"
    },
    {
        "eng": "frugal",
        "heb": "חסכני"
    },
    {
        "eng": "fruit",
        "heb": "פרי"
    },
    {
        "eng": "frustration",
        "heb": "תסכול"
    },
    {
        "eng": "fuel",
        "heb": "דלק"
    },
    {
        "eng": "fulfill",
        "heb": "להגשים"
    },
    {
        "eng": "full",
        "heb": "מלא"
    },
    {
        "eng": "fume",
        "heb": "עשן"
    },
    {
        "eng": "function",
        "heb": "תפקיד, פונקציה, לתפקד"
    },
    {
        "eng": "fund",
        "heb": "קרן"
    },
    {
        "eng": "fundamental",
        "heb": "בסיסי"
    },
    {
        "eng": "fundraiser",
        "heb": "מגייס כספים"
    },
    {
        "eng": "funds",
        "heb": "כסף"
    },
    {
        "eng": "fungus",
        "heb": "פטרת"
    },
    {
        "eng": "fur",
        "heb": "פרווה"
    },
    {
        "eng": "further",
        "heb": "בהמשך"
    },
    {
        "eng": "furthermore",
        "heb": "זאת ועוד"
    },
    {
        "eng": "fury",
        "heb": "זעם"
    },
    {
        "eng": "future",
        "heb": "עתיד"
    },
    {
        "eng": "gain",
        "heb": "להרוויח"
    },
    {
        "eng": "gamble",
        "heb": "הימר"
    },
    {
        "eng": "gap",
        "heb": "פער"
    },
    {
        "eng": "garbage",
        "heb": "אשפה"
    },
    {
        "eng": "garden",
        "heb": "גינה"
    },
    {
        "eng": "garlic",
        "heb": "שום"
    },
    {
        "eng": "garment",
        "heb": "לבוש"
    },
    {
        "eng": "gasoline",
        "heb": "בנזין"
    },
    {
        "eng": "gate",
        "heb": "שער"
    },
    {
        "eng": "gather",
        "heb": "אסף"
    },
    {
        "eng": "gauge",
        "heb": "מידה"
    },
    {
        "eng": "gene",
        "heb": "גן"
    },
    {
        "eng": "general",
        "heb": "כללי"
    },
    {
        "eng": "generally",
        "heb": "באופן כללי"
    },
    {
        "eng": "generated",
        "heb": "יצר"
    },
    {
        "eng": "generation",
        "heb": "דור"
    },
    {
        "eng": "generous",
        "heb": "נדיב"
    },
    {
        "eng": "genes",
        "heb": "גנים"
    },
    {
        "eng": "genesis",
        "heb": "ספר בראשית"
    },
    {
        "eng": "genetic",
        "heb": "גנטי"
    },
    {
        "eng": "genial",
        "heb": "ידידותי"
    },
    {
        "eng": "genius",
        "heb": "גאון"
    },
    {
        "eng": "genre",
        "heb": "סוגה"
    },
    {
        "eng": "gentle",
        "heb": "עדין"
    },
    {
        "eng": "genuine",
        "heb": "אמיתי"
    },
    {
        "eng": "genus",
        "heb": "מין"
    },
    {
        "eng": "gesture",
        "heb": "מחווה"
    },
    {
        "eng": "giant",
        "heb": "ענק"
    },
    {
        "eng": "gift",
        "heb": "מתנה"
    },
    {
        "eng": "given",
        "heb": "נתון"
    },
    {
        "eng": "given that",
        "heb": "בהתחשב בכך"
    },
    {
        "eng": "glacier",
        "heb": "קרחון"
    },
    {
        "eng": "glad",
        "heb": "שמח"
    },
    {
        "eng": "glance",
        "heb": "מבט חטוף"
    },
    {
        "eng": "gland",
        "heb": "בלוטה"
    },
    {
        "eng": "glass",
        "heb": "זכוכית, כוס"
    },
    {
        "eng": "glaze",
        "heb": "לזגג"
    },
    {
        "eng": "glitch",
        "heb": "הפרעה"
    },
    {
        "eng": "global",
        "heb": "עולמי"
    },
    {
        "eng": "glorify",
        "heb": "להאדיר"
    },
    {
        "eng": "glove",
        "heb": "כפפה"
    },
    {
        "eng": "goal",
        "heb": "מטרה"
    },
    {
        "eng": "goblet",
        "heb": "גביע"
    },
    {
        "eng": "golden",
        "heb": "זהוב"
    },
    {
        "eng": "goods",
        "heb": "סחורה"
    },
    {
        "eng": "govern",
        "heb": "למשול"
    },
    {
        "eng": "government",
        "heb": "ממשל"
    },
    {
        "eng": "governor",
        "heb": "מושל"
    },
    {
        "eng": "grace",
        "heb": "חינניות"
    },
    {
        "eng": "gracious",
        "heb": "אדיב"
    },
    {
        "eng": "grade",
        "heb": "כיתה"
    },
    {
        "eng": "gradual",
        "heb": "הדרגתי"
    },
    {
        "eng": "gradually",
        "heb": "בהדרגה"
    },
    {
        "eng": "graduate",
        "heb": "לסיים לימודים"
    },
    {
        "eng": "grain",
        "heb": "לטחון"
    },
    {
        "eng": "grammatical",
        "heb": "דקדוקי"
    },
    {
        "eng": "grand",
        "heb": "מרשים"
    },
    {
        "eng": "granddaughter",
        "heb": "נכדה"
    },
    {
        "eng": "grandfather",
        "heb": "סבא"
    },
    {
        "eng": "grandmother",
        "heb": "סבתא"
    },
    {
        "eng": "grandson",
        "heb": "נכד"
    },
    {
        "eng": "grant",
        "heb": "להעניק"
    },
    {
        "eng": "granted (that)",
        "heb": "בהנחה ש-"
    },
    {
        "eng": "grapes",
        "heb": "ענבים"
    },
    {
        "eng": "grasp",
        "heb": "לתפוס"
    },
    {
        "eng": "gratify",
        "heb": "לרצות"
    },
    {
        "eng": "great",
        "heb": "גדול"
    },
    {
        "eng": "greet",
        "heb": "לקבל פנים"
    },
    {
        "eng": "grief",
        "heb": "צער"
    },
    {
        "eng": "grievance",
        "heb": "התמרמרות"
    },
    {
        "eng": "grit",
        "heb": "חצץ"
    },
    {
        "eng": "grocery",
        "heb": "מכולת"
    },
    {
        "eng": "groom",
        "heb": "חתן"
    },
    {
        "eng": "gross",
        "heb": "ענק"
    },
    {
        "eng": "ground",
        "heb": "בסיס"
    },
    {
        "eng": "group",
        "heb": "קבוצה"
    },
    {
        "eng": "grow",
        "heb": "לגדול"
    },
    {
        "eng": "grow up",
        "heb": "להתבגר"
    },
    {
        "eng": "growled",
        "heb": "נהם"
    },
    {
        "eng": "growth",
        "heb": "צמיחה"
    },
    {
        "eng": "guarantee",
        "heb": "ערבות"
    },
    {
        "eng": "guard",
        "heb": "שומר"
    },
    {
        "eng": "guess",
        "heb": "ניחוש, לנחש"
    },
    {
        "eng": "guidance",
        "heb": "הנהגה"
    },
    {
        "eng": "guide",
        "heb": "מדריך, להדריך"
    },
    {
        "eng": "guillotine",
        "heb": "גיליוטינה"
    },
    {
        "eng": "guilty",
        "heb": "אשם"
    },
    {
        "eng": "Gulf War",
        "heb": "מלחמת המפרץ"
    },
    {
        "eng": "gunpowder",
        "heb": "אבק שריפה"
    },
    {
        "eng": "gym",
        "heb": "חדר כושר"
    },
    {
        "eng": "gymnasium",
        "heb": "אולם התעמלות"
    },
    {
        "eng": "habit",
        "heb": "הרגל"
    },
    {
        "eng": "habitat",
        "heb": "סביבת מגורים"
    },
    {
        "eng": "hail",
        "heb": "לשבח"
    },
    {
        "eng": "half",
        "heb": "חצי"
    },
    {
        "eng": "hall",
        "heb": "מסדרון"
    },
    {
        "eng": "halt",
        "heb": "לעצור להפסיק"
    },
    {
        "eng": "halve",
        "heb": "לחצות"
    },
    {
        "eng": "hand",
        "heb": "יד"
    },
    {
        "eng": "handicap",
        "heb": "נכות"
    },
    {
        "eng": "handle",
        "heb": "להתמודד"
    },
    {
        "eng": "harass",
        "heb": "להציק"
    },
    {
        "eng": "harder",
        "heb": "קשה יותר"
    },
    {
        "eng": "hardly",
        "heb": "בקושי"
    },
    {
        "eng": "hardly ever",
        "heb": "כמעט אף פעם"
    },
    {
        "eng": "harm",
        "heb": "להזיק"
    },
    {
        "eng": "harmful",
        "heb": "מזיק"
    },
    {
        "eng": "harmless",
        "heb": "שאינו מזיק"
    },
    {
        "eng": "harmony",
        "heb": "הרמוניה"
    },
    {
        "eng": "harness",
        "heb": "לרתום"
    },
    {
        "eng": "harsh",
        "heb": "נוקשה"
    },
    {
        "eng": "hasten",
        "heb": "להחפז"
    },
    {
        "eng": "hasty",
        "heb": "בהול"
    },
    {
        "eng": "hatch",
        "heb": "לבקוע"
    },
    {
        "eng": "haul",
        "heb": "לגרור"
    },
    {
        "eng": "hazardous",
        "heb": "מסוכן"
    },
    {
        "eng": "health",
        "heb": "בריאות"
    },
    {
        "eng": "hear",
        "heb": "לשמוע"
    },
    {
        "eng": "hearsay",
        "heb": "שמועה"
    },
    {
        "eng": "heart",
        "heb": "לב"
    },
    {
        "eng": "heartbeat",
        "heb": "פעימת לב"
    },
    {
        "eng": "heat",
        "heb": "חום, לחמם"
    },
    {
        "eng": "heavily",
        "heb": "מאוד"
    },
    {
        "eng": "heavy",
        "heb": "כבד"
    },
    {
        "eng": "hectic",
        "heb": "קדחתני"
    },
    {
        "eng": "heed",
        "heb": "לשים לב"
    },
    {
        "eng": "hegemony",
        "heb": "הגמוניה"
    },
    {
        "eng": "height",
        "heb": "גובה"
    },
    {
        "eng": "heir",
        "heb": "יורש"
    },
    {
        "eng": "hence",
        "heb": "לפיכך"
    },
    {
        "eng": "herb",
        "heb": "עשב"
    },
    {
        "eng": "herd",
        "heb": "לאסוף"
    },
    {
        "eng": "here",
        "heb": "כאן"
    },
    {
        "eng": "heredity",
        "heb": "תורשה"
    },
    {
        "eng": "heresy",
        "heb": "כפירה"
    },
    {
        "eng": "heritage",
        "heb": "מורשת"
    },
    {
        "eng": "hero",
        "heb": "גיבור"
    },
    {
        "eng": "heroine",
        "heb": "גיבורה"
    },
    {
        "eng": "hesitate",
        "heb": "להסס"
    },
    {
        "eng": "hibernate",
        "heb": "לישון שנת חורף"
    },
    {
        "eng": "hid from",
        "heb": "התחבא מ"
    },
    {
        "eng": "hidden",
        "heb": "נסתר"
    },
    {
        "eng": "highway",
        "heb": "כביש ראשי"
    },
    {
        "eng": "hike",
        "heb": "טיול"
    },
    {
        "eng": "hilarious",
        "heb": "מצחיק מאוד"
    },
    {
        "eng": "hill",
        "heb": "גבעה"
    },
    {
        "eng": "hinder",
        "heb": "לעכב"
    },
    {
        "eng": "hint",
        "heb": "רמז"
    },
    {
        "eng": "historian",
        "heb": "היסטוריון"
    },
    {
        "eng": "hive",
        "heb": "כוורת"
    },
    {
        "eng": "hobby",
        "heb": "תחביב"
    },
    {
        "eng": "hold back",
        "heb": "לעכב"
    },
    {
        "eng": "hollow",
        "heb": "חלול"
    },
    {
        "eng": "homeland",
        "heb": "מולדת"
    },
    {
        "eng": "honest",
        "heb": "הגון"
    },
    {
        "eng": "honor",
        "heb": "לכבד"
    },
    {
        "eng": "hope",
        "heb": "תקווה"
    },
    {
        "eng": "horn",
        "heb": "קרן"
    },
    {
        "eng": "horrific",
        "heb": "אָיוֹם"
    },
    {
        "eng": "horror",
        "heb": "אימה"
    },
    {
        "eng": "horse",
        "heb": "סוס"
    },
    {
        "eng": "hospital",
        "heb": "בית חולים"
    },
    {
        "eng": "hospitality",
        "heb": "הכנסת אורחים"
    },
    {
        "eng": "hospitalize",
        "heb": "לאשפז"
    },
    {
        "eng": "host",
        "heb": "מארח"
    },
    {
        "eng": "hostility",
        "heb": "עוינות"
    },
    {
        "eng": "hot",
        "heb": "חם"
    },
    {
        "eng": "house",
        "heb": "לשכן"
    },
    {
        "eng": "housemaid",
        "heb": "עוזרת בית"
    },
    {
        "eng": "how",
        "heb": "איך"
    },
    {
        "eng": "however",
        "heb": "בכל דרך"
    },
    {
        "eng": "howl",
        "heb": "ליילל"
    },
    {
        "eng": "huge",
        "heb": "עצום"
    },
    {
        "eng": "human",
        "heb": "אנושי"
    },
    {
        "eng": "human being",
        "heb": "בן-אדם"
    },
    {
        "eng": "humiliate",
        "heb": "להשפיל"
    },
    {
        "eng": "humility",
        "heb": "ענוה"
    },
    {
        "eng": "hundred",
        "heb": "מאה"
    },
    {
        "eng": "hunger",
        "heb": "רעב"
    },
    {
        "eng": "hunt",
        "heb": "לצוד"
    },
    {
        "eng": "hunter",
        "heb": "צייד"
    },
    {
        "eng": "husband",
        "heb": "בעל"
    },
    {
        "eng": "hypocrisy",
        "heb": "צביעות"
    },
    {
        "eng": "i.e.",
        "heb": "כלומר"
    },
    {
        "eng": "ice cream",
        "heb": "גלידה"
    },
    {
        "eng": "iceberg",
        "heb": "קרחון"
    },
    {
        "eng": "icicle",
        "heb": "נטיף קרח"
    },
    {
        "eng": "idea",
        "heb": "רעיון"
    },
    {
        "eng": "ideal",
        "heb": "אידיאל"
    },
    {
        "eng": "identical",
        "heb": "זהה"
    },
    {
        "eng": "identically",
        "heb": "באופן זהה"
    },
    {
        "eng": "identify",
        "heb": "לזהות"
    },
    {
        "eng": "idolize",
        "heb": "להעריץ"
    },
    {
        "eng": "If",
        "heb": "אם"
    },
    {
        "eng": "ignorance",
        "heb": "בורות"
    },
    {
        "eng": "ignorant",
        "heb": "בור"
    },
    {
        "eng": "ignore",
        "heb": "להתעלם"
    },
    {
        "eng": "ill",
        "heb": "חולה"
    },
    {
        "eng": "illegal",
        "heb": "לא חוקי"
    },
    {
        "eng": "illiterate",
        "heb": "בור"
    },
    {
        "eng": "illness",
        "heb": "מחלה"
    },
    {
        "eng": "illuminate",
        "heb": "להאיר"
    },
    {
        "eng": "illusion",
        "heb": "אשליה"
    },
    {
        "eng": "illustrate",
        "heb": "להדגיש"
    },
    {
        "eng": "illustrator",
        "heb": "מאייר"
    },
    {
        "eng": "image",
        "heb": "תמונה, דמות, תדמית"
    },
    {
        "eng": "imagination",
        "heb": "דמיון"
    },
    {
        "eng": "imaginative",
        "heb": "דמיוני"
    },
    {
        "eng": "imagine",
        "heb": "לדמיין"
    },
    {
        "eng": "imitate",
        "heb": "לחקות"
    },
    {
        "eng": "immediately",
        "heb": "מיד"
    },
    {
        "eng": "immense",
        "heb": "כביר"
    },
    {
        "eng": "immersion",
        "heb": "שקיעה"
    },
    {
        "eng": "immigrate",
        "heb": "להגר"
    },
    {
        "eng": "immoral",
        "heb": "לא מוסרי"
    },
    {
        "eng": "impact",
        "heb": "התנגשות"
    },
    {
        "eng": "impair",
        "heb": "לפגום"
    },
    {
        "eng": "impart",
        "heb": "להעביר"
    },
    {
        "eng": "impartial",
        "heb": "אוביקטיבי"
    },
    {
        "eng": "impartially",
        "heb": "באופן הוגן"
    },
    {
        "eng": "impatient",
        "heb": "חסר סבלנות"
    },
    {
        "eng": "implement",
        "heb": "להוציא לפועל"
    },
    {
        "eng": "implementation",
        "heb": "ביצוע"
    },
    {
        "eng": "implicate",
        "heb": "לסבך"
    },
    {
        "eng": "implications",
        "heb": "השלכות"
    },
    {
        "eng": "implore",
        "heb": "להפציר"
    },
    {
        "eng": "imply",
        "heb": "לרמוז"
    },
    {
        "eng": "import",
        "heb": "לייבא"
    },
    {
        "eng": "importance",
        "heb": "חשיבות"
    },
    {
        "eng": "important",
        "heb": "חשוב"
    },
    {
        "eng": "impose",
        "heb": "לכפות"
    },
    {
        "eng": "impossible",
        "heb": "בלתי אפשר"
    },
    {
        "eng": "impress",
        "heb": "להרשים"
    },
    {
        "eng": "impressive",
        "heb": "מרשים"
    },
    {
        "eng": "imprisoned",
        "heb": "כלוא"
    },
    {
        "eng": "imprisonment",
        "heb": "כליאה"
    },
    {
        "eng": "improve",
        "heb": "לשפר"
    },
    {
        "eng": "improvise",
        "heb": "לאלתר"
    },
    {
        "eng": "impulse",
        "heb": "דחף"
    },
    {
        "eng": "impulsively",
        "heb": "ללא שיקול דעת"
    },
    {
        "eng": "in",
        "heb": "ב-"
    },
    {
        "eng": "in a moment",
        "heb": "בעוד רגע"
    },
    {
        "eng": "in a word",
        "heb": "במילה אחת"
    },
    {
        "eng": "in addition",
        "heb": "בנוסף"
    },
    {
        "eng": "in case",
        "heb": "במקרה"
    },
    {
        "eng": "in comparison",
        "heb": "בהשוואה"
    },
    {
        "eng": "in conclusion",
        "heb": "לסיכום"
    },
    {
        "eng": "in contrast to",
        "heb": "בניגוד ל-"
    },
    {
        "eng": "in due time",
        "heb": "בבוא העת"
    },
    {
        "eng": "in fact",
        "heb": "למעשה"
    },
    {
        "eng": "in favor of",
        "heb": "לטובת"
    },
    {
        "eng": "in front of",
        "heb": "בחזית של"
    },
    {
        "eng": "in general",
        "heb": "באופן כללי"
    },
    {
        "eng": "in light of",
        "heb": "לאור"
    },
    {
        "eng": "in order",
        "heb": "תקין"
    },
    {
        "eng": "in order to",
        "heb": "על-מנת"
    },
    {
        "eng": "in other words",
        "heb": "במילים אחרות"
    },
    {
        "eng": "in particular",
        "heb": "במיוחד"
    },
    {
        "eng": "in spite of",
        "heb": "למרות"
    },
    {
        "eng": "in that case",
        "heb": "במקרה הזה"
    },
    {
        "eng": "in the same way",
        "heb": "באותו אופן"
    },
    {
        "eng": "inactivity",
        "heb": "חוסר פעילות"
    },
    {
        "eng": "inadequate",
        "heb": "לקוי"
    },
    {
        "eng": "inadvertently",
        "heb": "בלי כוונה"
    },
    {
        "eng": "incentive",
        "heb": "תמריץ"
    },
    {
        "eng": "incidence",
        "heb": "כמות"
    },
    {
        "eng": "incident",
        "heb": "תקרית"
    },
    {
        "eng": "incidentally",
        "heb": "דרך אגב"
    },
    {
        "eng": "incline",
        "heb": "שיפוע"
    },
    {
        "eng": "include",
        "heb": "לכלול"
    },
    {
        "eng": "including",
        "heb": "כולל"
    },
    {
        "eng": "inclusive",
        "heb": "כולל"
    },
    {
        "eng": "income",
        "heb": "הכנסה"
    },
    {
        "eng": "incompetence",
        "heb": "חוסר יכולת"
    },
    {
        "eng": "incomprehensible",
        "heb": "לא מובן"
    },
    {
        "eng": "inconsistent",
        "heb": "לא עקבי"
    },
    {
        "eng": "incorporate",
        "heb": "לאגד"
    },
    {
        "eng": "increase",
        "heb": "להגדיל"
    },
    {
        "eng": "incredible",
        "heb": "מדהים"
    },
    {
        "eng": "indebted",
        "heb": "אסיר תודה"
    },
    {
        "eng": "indeed",
        "heb": "בהחלט"
    },
    {
        "eng": "indefinitely",
        "heb": "ללא הגבלה"
    },
    {
        "eng": "independence",
        "heb": "עצמאות"
    },
    {
        "eng": "independent",
        "heb": "עצמאי"
    },
    {
        "eng": "index",
        "heb": "אינדקס"
    },
    {
        "eng": "indicate",
        "heb": "להצביע על"
    },
    {
        "eng": "indication",
        "heb": "אינדיקציה"
    },
    {
        "eng": "indifference",
        "heb": "אדישות"
    },
    {
        "eng": "indigenous",
        "heb": "מולד"
    },
    {
        "eng": "individual",
        "heb": "יחיד"
    },
    {
        "eng": "induce",
        "heb": "לייצר"
    },
    {
        "eng": "industrious",
        "heb": "חרוץ"
    },
    {
        "eng": "industry",
        "heb": "תעשייה"
    },
    {
        "eng": "inevitable",
        "heb": "בלתי נמנע"
    },
    {
        "eng": "inexpensive",
        "heb": "לא יקר"
    },
    {
        "eng": "infancy",
        "heb": "ינקות"
    },
    {
        "eng": "infected",
        "heb": "הודבק"
    },
    {
        "eng": "infection",
        "heb": "זיהום"
    },
    {
        "eng": "infectious",
        "heb": "מדבק"
    },
    {
        "eng": "inferior",
        "heb": "נחות"
    },
    {
        "eng": "inferred",
        "heb": "נגזר"
    },
    {
        "eng": "infiltrate",
        "heb": "להסתנן"
    },
    {
        "eng": "infinite",
        "heb": "אינסופי"
    },
    {
        "eng": "inflammation",
        "heb": "דלקת"
    },
    {
        "eng": "inflate",
        "heb": "לנפח"
    },
    {
        "eng": "influence",
        "heb": "להשפיע"
    },
    {
        "eng": "inform",
        "heb": "להודיע"
    },
    {
        "eng": "information",
        "heb": "מידע"
    },
    {
        "eng": "infraction",
        "heb": "עבירה"
    },
    {
        "eng": "ingest",
        "heb": "להכניס משהו לגוף דרך הפה"
    },
    {
        "eng": "ingredients",
        "heb": "מרכיבים"
    },
    {
        "eng": "inhabit",
        "heb": "ליישב"
    },
    {
        "eng": "inhabitants",
        "heb": "תושבים"
    },
    {
        "eng": "inherit",
        "heb": "לרשת"
    },
    {
        "eng": "inhibit",
        "heb": "לרסן"
    },
    {
        "eng": "initial",
        "heb": "התחלתי"
    },
    {
        "eng": "initially",
        "heb": "בתחילה"
    },
    {
        "eng": "initiated",
        "heb": "יזם"
    },
    {
        "eng": "inject",
        "heb": "להזריק"
    },
    {
        "eng": "injure",
        "heb": "לפצוע"
    },
    {
        "eng": "injury",
        "heb": "פציעה"
    },
    {
        "eng": "inn",
        "heb": "פונדק"
    },
    {
        "eng": "innate",
        "heb": "מולד"
    },
    {
        "eng": "inner",
        "heb": "פנימי"
    },
    {
        "eng": "innocent",
        "heb": "תמים"
    },
    {
        "eng": "innovate",
        "heb": "לחדש"
    },
    {
        "eng": "inquire",
        "heb": "לתשאל"
    },
    {
        "eng": "inquiry",
        "heb": "חקירה"
    },
    {
        "eng": "insanity",
        "heb": "אי שפיות"
    },
    {
        "eng": "insect",
        "heb": "חרק"
    },
    {
        "eng": "insert",
        "heb": "להכניס"
    },
    {
        "eng": "inside",
        "heb": "בתוך"
    },
    {
        "eng": "insight",
        "heb": "תובנה"
    },
    {
        "eng": "insist",
        "heb": "להתעקש"
    },
    {
        "eng": "inspect",
        "heb": "לבדוק"
    },
    {
        "eng": "inspiration",
        "heb": "השראה"
    },
    {
        "eng": "inspiring",
        "heb": "נותן השראה"
    },
    {
        "eng": "installation",
        "heb": "התקנה"
    },
    {
        "eng": "instant",
        "heb": "בהרף עין"
    },
    {
        "eng": "instantly",
        "heb": "מיד"
    },
    {
        "eng": "instead",
        "heb": "במקום"
    },
    {
        "eng": "instead of",
        "heb": "במקום"
    },
    {
        "eng": "instill",
        "heb": "להשריש"
    },
    {
        "eng": "institute",
        "heb": "מוסד"
    },
    {
        "eng": "instruction",
        "heb": "הוראה"
    },
    {
        "eng": "instrument",
        "heb": "כלי"
    },
    {
        "eng": "insulate",
        "heb": "לבודד"
    },
    {
        "eng": "insult",
        "heb": "עלבון"
    },
    {
        "eng": "insurance",
        "heb": "ביטוח"
    },
    {
        "eng": "insure",
        "heb": "להבטיח"
    },
    {
        "eng": "insurmountable",
        "heb": "שאין להתגבר עליו"
    },
    {
        "eng": "insurrection",
        "heb": "התקוממות"
    },
    {
        "eng": "intact",
        "heb": "ללא פגע"
    },
    {
        "eng": "integrate",
        "heb": "לשלב"
    },
    {
        "eng": "intellectual",
        "heb": "אינטלקטואלי"
    },
    {
        "eng": "intelligence",
        "heb": "מודיעין"
    },
    {
        "eng": "intense",
        "heb": "אינטנסיבי"
    },
    {
        "eng": "intention",
        "heb": "כוונה"
    },
    {
        "eng": "intentional",
        "heb": "מכוון"
    },
    {
        "eng": "interact",
        "heb": "לתקשר"
    },
    {
        "eng": "interest",
        "heb": "עניין"
    },
    {
        "eng": "interface",
        "heb": "ממשק"
    },
    {
        "eng": "interior",
        "heb": "פנימי"
    },
    {
        "eng": "interjection",
        "heb": "הפרעה לשיחה"
    },
    {
        "eng": "intermediary",
        "heb": "אמצעי"
    },
    {
        "eng": "interminable",
        "heb": "נצחי"
    },
    {
        "eng": "internal",
        "heb": "פנימי"
    },
    {
        "eng": "international",
        "heb": "בינלאומי"
    },
    {
        "eng": "interpretation",
        "heb": "פרשנות"
    },
    {
        "eng": "interrupt",
        "heb": "להפריע"
    },
    {
        "eng": "intersection",
        "heb": "צומת"
    },
    {
        "eng": "intervene",
        "heb": "להתערב"
    },
    {
        "eng": "intervention",
        "heb": "התערבות"
    },
    {
        "eng": "interview",
        "heb": "ראיון"
    },
    {
        "eng": "intimidate",
        "heb": "להפחיד"
    },
    {
        "eng": "into",
        "heb": "אל תוך"
    },
    {
        "eng": "intoxicate",
        "heb": "להרעיל"
    },
    {
        "eng": "introduce",
        "heb": "לעשות היכרות"
    },
    {
        "eng": "introduction",
        "heb": "היכרות"
    },
    {
        "eng": "intrusive",
        "heb": "פולשני"
    },
    {
        "eng": "intuition",
        "heb": "אינטואיציה"
    },
    {
        "eng": "invade",
        "heb": "לפלוש"
    },
    {
        "eng": "invaders",
        "heb": "פולשים"
    },
    {
        "eng": "invariably",
        "heb": "ללא שינוי"
    },
    {
        "eng": "invent",
        "heb": "להמציא"
    },
    {
        "eng": "inventor",
        "heb": "ממציא"
    },
    {
        "eng": "inventory",
        "heb": "מצאי"
    },
    {
        "eng": "invertebrate",
        "heb": "חסר חוליות"
    },
    {
        "eng": "investigate",
        "heb": "לחקור"
    },
    {
        "eng": "investing",
        "heb": "להשקיע"
    },
    {
        "eng": "investment",
        "heb": "השקעה"
    },
    {
        "eng": "investor",
        "heb": "משקיע"
    },
    {
        "eng": "invisible",
        "heb": "בלתי נראה"
    },
    {
        "eng": "invite",
        "heb": "להזמין"
    },
    {
        "eng": "invoke",
        "heb": "לזמן"
    },
    {
        "eng": "involve",
        "heb": "לערב"
    },
    {
        "eng": "ironic",
        "heb": "אירוני"
    },
    {
        "eng": "irregular",
        "heb": "לא רגיל"
    },
    {
        "eng": "irresistible",
        "heb": "שלא ניתן לעמוד בפניו"
    },
    {
        "eng": "irrigation",
        "heb": "השקיה"
    },
    {
        "eng": "island",
        "heb": "אי"
    },
    {
        "eng": "isle",
        "heb": "אי"
    },
    {
        "eng": "isolate",
        "heb": "לבודד"
    },
    {
        "eng": "issue",
        "heb": "נושא, סוגיה, גיליון"
    },
    {
        "eng": "ivory",
        "heb": "שנהב"
    },
    {
        "eng": "jagged",
        "heb": "משונן"
    },
    {
        "eng": "janitor",
        "heb": "שרת"
    },
    {
        "eng": "Jew",
        "heb": "יהודי"
    },
    {
        "eng": "jewel",
        "heb": "תכשיט"
    },
    {
        "eng": "jog",
        "heb": "לרוץ (ג'וגינג)"
    },
    {
        "eng": "join",
        "heb": "להצטרף"
    },
    {
        "eng": "joint",
        "heb": "משותף"
    },
    {
        "eng": "joke",
        "heb": "בדיחה"
    },
    {
        "eng": "journey",
        "heb": "מסע"
    },
    {
        "eng": "joyous",
        "heb": "עליז"
    },
    {
        "eng": "judge",
        "heb": "שופט, לשפוט"
    },
    {
        "eng": "judgment",
        "heb": "שיפוט"
    },
    {
        "eng": "jug",
        "heb": "כד"
    },
    {
        "eng": "juice",
        "heb": "מיץ"
    },
    {
        "eng": "jump",
        "heb": "לקפוץ"
    },
    {
        "eng": "jungle",
        "heb": "ג'ונגל"
    },
    {
        "eng": "junkyard",
        "heb": "מגרש גרוטאות"
    },
    {
        "eng": "just",
        "heb": "מדויק. אמיתי"
    },
    {
        "eng": "just as",
        "heb": "בדיוק כמו"
    },
    {
        "eng": "just as... so...",
        "heb": "בדיוק כמו... גם"
    },
    {
        "eng": "justify",
        "heb": "להצדיק"
    },
    {
        "eng": "keep",
        "heb": "לשמור"
    },
    {
        "eng": "kettle",
        "heb": "קומקום"
    },
    {
        "eng": "keystone",
        "heb": "אבן מפתח"
    },
    {
        "eng": "kick",
        "heb": "בעיטה"
    },
    {
        "eng": "kill",
        "heb": "להרוג"
    },
    {
        "eng": "kind",
        "heb": "סוג"
    },
    {
        "eng": "king",
        "heb": "מלך"
    },
    {
        "eng": "kingdom",
        "heb": "ממלכה"
    },
    {
        "eng": "kitchen",
        "heb": "מטבח"
    },
    {
        "eng": "kite",
        "heb": "עפיפון"
    },
    {
        "eng": "knees",
        "heb": "ברכיים"
    },
    {
        "eng": "knife (knives)",
        "heb": "סכינים(סכין)"
    },
    {
        "eng": "knot",
        "heb": "קשר"
    },
    {
        "eng": "know, knew",
        "heb": "לדעת"
    },
    {
        "eng": "knowledge",
        "heb": "ידע"
    },
    {
        "eng": "known",
        "heb": "ידוע"
    },
    {
        "eng": "label",
        "heb": "תגית"
    },
    {
        "eng": "labor",
        "heb": "להתאמץ"
    },
    {
        "eng": "laboratory",
        "heb": "מעבדה"
    },
    {
        "eng": "laborer",
        "heb": "פועל"
    },
    {
        "eng": "lack",
        "heb": "מחסור"
    },
    {
        "eng": "lackluster",
        "heb": "העדר כוח"
    },
    {
        "eng": "laid",
        "heb": "מונח"
    },
    {
        "eng": "lake",
        "heb": "אגם"
    },
    {
        "eng": "lame",
        "heb": "צולע"
    },
    {
        "eng": "lamentable",
        "heb": "מעציב"
    },
    {
        "eng": "landmark",
        "heb": "אבן דרך"
    },
    {
        "eng": "landscape",
        "heb": "נוף"
    },
    {
        "eng": "lane",
        "heb": "מסלול"
    },
    {
        "eng": "language",
        "heb": "שפה"
    },
    {
        "eng": "lapse",
        "heb": "מעידה"
    },
    {
        "eng": "large",
        "heb": "גדול"
    },
    {
        "eng": "largest",
        "heb": "הגדול ביותר"
    },
    {
        "eng": "last",
        "heb": "אחרון"
    },
    {
        "eng": "late",
        "heb": "מאוחר"
    },
    {
        "eng": "later",
        "heb": "מאוחר יותר"
    },
    {
        "eng": "latter",
        "heb": "שני"
    },
    {
        "eng": "laugh",
        "heb": "לצחוק"
    },
    {
        "eng": "launch",
        "heb": "לשגר"
    },
    {
        "eng": "launder",
        "heb": "לכבס"
    },
    {
        "eng": "law",
        "heb": "חוק"
    },
    {
        "eng": "lawyer",
        "heb": "עורך-דין"
    },
    {
        "eng": "layer",
        "heb": "שכבה"
    },
    {
        "eng": "lead, led",
        "heb": "הוביל"
    },
    {
        "eng": "leader",
        "heb": "מנהיג"
    },
    {
        "eng": "leadership",
        "heb": "מנהיגות"
    },
    {
        "eng": "leaf (leaves)",
        "heb": "עלה"
    },
    {
        "eng": "league",
        "heb": "ליגה"
    },
    {
        "eng": "lean",
        "heb": "להישען"
    },
    {
        "eng": "leather",
        "heb": "עור"
    },
    {
        "eng": "lecture",
        "heb": "הרצאה"
    },
    {
        "eng": "led to",
        "heb": "הוביל ל-"
    },
    {
        "eng": "left",
        "heb": "שמאל, עזב, נשאר"
    },
    {
        "eng": "legal",
        "heb": "משפטי"
    },
    {
        "eng": "legalize",
        "heb": "להפוך חוקי"
    },
    {
        "eng": "legible",
        "heb": "קריא"
    },
    {
        "eng": "legislate",
        "heb": "לחוקק"
    },
    {
        "eng": "legislation",
        "heb": "חקיקה"
    },
    {
        "eng": "leisure",
        "heb": "פנאי"
    },
    {
        "eng": "leisurely",
        "heb": "רגוע"
    },
    {
        "eng": "lend",
        "heb": "להשאיל"
    },
    {
        "eng": "length",
        "heb": "אורך"
    },
    {
        "eng": "leniency",
        "heb": "סלחנות"
    },
    {
        "eng": "lens",
        "heb": "עדשה"
    },
    {
        "eng": "leopard",
        "heb": "נמר"
    },
    {
        "eng": "less",
        "heb": "פחות"
    },
    {
        "eng": "lethal",
        "heb": "קטלני"
    },
    {
        "eng": "level",
        "heb": "רמה"
    },
    {
        "eng": "liberal",
        "heb": "מתירני"
    },
    {
        "eng": "library",
        "heb": "ספריה"
    },
    {
        "eng": "license",
        "heb": "רישיון"
    },
    {
        "eng": "lie",
        "heb": "שֶ קֶ ר"
    },
    {
        "eng": "lie, lay",
        "heb": "שכב"
    },
    {
        "eng": "lifestyle",
        "heb": "אורח חיים"
    },
    {
        "eng": "lifetime",
        "heb": "תקופת החיים"
    },
    {
        "eng": "light",
        "heb": "אור, קל (במשקל)"
    },
    {
        "eng": "like",
        "heb": "כמו"
    },
    {
        "eng": "likely",
        "heb": "סביר"
    },
    {
        "eng": "likewise",
        "heb": "כמו-כן"
    },
    {
        "eng": "limb",
        "heb": "קצה"
    },
    {
        "eng": "limber",
        "heb": "גמיש"
    },
    {
        "eng": "limit",
        "heb": "גבול"
    },
    {
        "eng": "limitation",
        "heb": "מגבלה"
    },
    {
        "eng": "lineage",
        "heb": "שושלת"
    },
    {
        "eng": "linger",
        "heb": "להשתהות"
    },
    {
        "eng": "link",
        "heb": "חוליה"
    },
    {
        "eng": "lip",
        "heb": "שפה"
    },
    {
        "eng": "list",
        "heb": "רשימה"
    },
    {
        "eng": "listen",
        "heb": "להקשיב"
    },
    {
        "eng": "literary",
        "heb": "ספרותי"
    },
    {
        "eng": "literate",
        "heb": "משכיל"
    },
    {
        "eng": "literature",
        "heb": "ספרות"
    },
    {
        "eng": "liver",
        "heb": "כבד"
    },
    {
        "eng": "load",
        "heb": "להעמיס"
    },
    {
        "eng": "loan",
        "heb": "הלוואה"
    },
    {
        "eng": "loathe",
        "heb": "לתעב"
    },
    {
        "eng": "lobby",
        "heb": "לובי"
    },
    {
        "eng": "local",
        "heb": "מקומי"
    },
    {
        "eng": "locate",
        "heb": "לאתר"
    },
    {
        "eng": "lock",
        "heb": "מנעול"
    },
    {
        "eng": "lodge",
        "heb": "אכסנייה"
    },
    {
        "eng": "log",
        "heb": "בול עץ"
    },
    {
        "eng": "logic",
        "heb": "הגיון"
    },
    {
        "eng": "lone",
        "heb": "יחיד"
    },
    {
        "eng": "loneliness",
        "heb": "בדידות"
    },
    {
        "eng": "loosely",
        "heb": "באופן רפוי"
    },
    {
        "eng": "losing",
        "heb": "מפסיד"
    },
    {
        "eng": "loud",
        "heb": "חזק"
    },
    {
        "eng": "loudspeaker",
        "heb": "רמקול"
    },
    {
        "eng": "lower",
        "heb": "להנמיך"
    },
    {
        "eng": "loyalty",
        "heb": "נאמנות"
    },
    {
        "eng": "lucrative",
        "heb": "ריווחי"
    },
    {
        "eng": "luggage",
        "heb": "מזוודות"
    },
    {
        "eng": "lumber",
        "heb": "גזע עץ"
    },
    {
        "eng": "luminous",
        "heb": "בוהק"
    },
    {
        "eng": "lunch",
        "heb": "ארוחת צהריים"
    },
    {
        "eng": "lung",
        "heb": "ריאה"
    },
    {
        "eng": "lurking",
        "heb": "מתגנב"
    },
    {
        "eng": "luxury",
        "heb": "מותרות"
    },
    {
        "eng": "machine",
        "heb": "מכונה"
    },
    {
        "eng": "made",
        "heb": "הכין"
    },
    {
        "eng": "magical",
        "heb": "קסום"
    },
    {
        "eng": "magnificent",
        "heb": "מרהיב"
    },
    {
        "eng": "magnitude",
        "heb": "חשיבות"
    },
    {
        "eng": "mail",
        "heb": "דואר"
    },
    {
        "eng": "mailman",
        "heb": "דוור"
    },
    {
        "eng": "main",
        "heb": "עיקרי"
    },
    {
        "eng": "mainly",
        "heb": "בעיקר"
    },
    {
        "eng": "maintain",
        "heb": "לשמר"
    },
    {
        "eng": "major",
        "heb": "מסלול לימודים"
    },
    {
        "eng": "majority",
        "heb": "רוב"
    },
    {
        "eng": "make sure",
        "heb": "לוודא"
    },
    {
        "eng": "makeup",
        "heb": "איפור"
    },
    {
        "eng": "male",
        "heb": "זכר"
    },
    {
        "eng": "malformation",
        "heb": "פגם"
    },
    {
        "eng": "malfunction",
        "heb": "כשל"
    },
    {
        "eng": "malnutrition",
        "heb": "תת-תזונה"
    },
    {
        "eng": "mammal",
        "heb": "יונק"
    },
    {
        "eng": "manage",
        "heb": "לנהל"
    },
    {
        "eng": "management",
        "heb": "ניהול"
    },
    {
        "eng": "manner",
        "heb": "אופן"
    },
    {
        "eng": "manners",
        "heb": "נימוס"
    },
    {
        "eng": "manufacture",
        "heb": "ייצר"
    },
    {
        "eng": "manuscript",
        "heb": "כתב יד"
    },
    {
        "eng": "map",
        "heb": "מפה"
    },
    {
        "eng": "marble",
        "heb": "שיש"
    },
    {
        "eng": "march",
        "heb": "לצעוד"
    },
    {
        "eng": "margin",
        "heb": "מרווח"
    },
    {
        "eng": "marine",
        "heb": "ימי"
    },
    {
        "eng": "maritime",
        "heb": "ימי"
    },
    {
        "eng": "mark",
        "heb": "לסמן"
    },
    {
        "eng": "markedly",
        "heb": "בצורה ניכרת"
    },
    {
        "eng": "market",
        "heb": "שוק"
    },
    {
        "eng": "marketing",
        "heb": "שיווק"
    },
    {
        "eng": "marriage",
        "heb": "נישואין"
    },
    {
        "eng": "marsupial",
        "heb": "חיית כיס"
    },
    {
        "eng": "martial",
        "heb": "קרבי"
    },
    {
        "eng": "masculine",
        "heb": "גברי"
    },
    {
        "eng": "mass",
        "heb": "המון"
    },
    {
        "eng": "massacre",
        "heb": "טבח"
    },
    {
        "eng": "master",
        "heb": "לשלוט"
    },
    {
        "eng": "masterpiece",
        "heb": "יצירת מופת"
    },
    {
        "eng": "mastery",
        "heb": "מומחיות"
    },
    {
        "eng": "match",
        "heb": "גפרור, התאמה, משחק"
    },
    {
        "eng": "mate",
        "heb": "בן זוג"
    },
    {
        "eng": "material",
        "heb": "חומר"
    },
    {
        "eng": "mathematician",
        "heb": "מתמטיקאי"
    },
    {
        "eng": "maturity",
        "heb": "בגרות"
    },
    {
        "eng": "maximize",
        "heb": "למקסם"
    },
    {
        "eng": "maybe",
        "heb": "אולי"
    },
    {
        "eng": "mayor",
        "heb": "ראש עיר"
    },
    {
        "eng": "maze",
        "heb": "מבוך"
    },
    {
        "eng": "meanwhile",
        "heb": "בינתיים"
    },
    {
        "eng": "measure",
        "heb": "למדוד, מידה, צעד"
    },
    {
        "eng": "mechanize",
        "heb": "להתקין מכונות"
    },
    {
        "eng": "media",
        "heb": "תקשורת"
    },
    {
        "eng": "mediate",
        "heb": "לגשר"
    },
    {
        "eng": "medicine",
        "heb": "רפואה"
    },
    {
        "eng": "medieval",
        "heb": "מתקופת ימי הביניים"
    },
    {
        "eng": "mediocre",
        "heb": "בינוני"
    },
    {
        "eng": "Mediterranean",
        "heb": "ים תיכוני"
    },
    {
        "eng": "meeting",
        "heb": "פגישה"
    },
    {
        "eng": "melt",
        "heb": "להמיס"
    },
    {
        "eng": "member",
        "heb": "חבר"
    },
    {
        "eng": "memorial",
        "heb": "תזכיר"
    },
    {
        "eng": "memorize",
        "heb": "לזכור בעל-פה"
    },
    {
        "eng": "memory",
        "heb": "זיכרון"
    },
    {
        "eng": "mental",
        "heb": "נפשי"
    },
    {
        "eng": "mention",
        "heb": "לאזכר"
    },
    {
        "eng": "mentor",
        "heb": "מדריך רוחני"
    },
    {
        "eng": "merchandise",
        "heb": "מוצרים"
    },
    {
        "eng": "mercy",
        "heb": "רחמים"
    },
    {
        "eng": "mere",
        "heb": "רק"
    },
    {
        "eng": "merely",
        "heb": "רק"
    },
    {
        "eng": "merge",
        "heb": "למזג"
    },
    {
        "eng": "merger",
        "heb": "מיזוג"
    },
    {
        "eng": "merit",
        "heb": "הישג"
    },
    {
        "eng": "message",
        "heb": "הודעה"
    },
    {
        "eng": "metal",
        "heb": "מתכתי"
    },
    {
        "eng": "method",
        "heb": "שיטה"
    },
    {
        "eng": "meticulous",
        "heb": "קפדני"
    },
    {
        "eng": "midair",
        "heb": "באוויר"
    },
    {
        "eng": "middle",
        "heb": "אמצע"
    },
    {
        "eng": "migrate",
        "heb": "להגר"
    },
    {
        "eng": "mild",
        "heb": "מתון"
    },
    {
        "eng": "military",
        "heb": "צבא"
    },
    {
        "eng": "milk",
        "heb": "חלב"
    },
    {
        "eng": "mimic",
        "heb": "לחקות"
    },
    {
        "eng": "mind",
        "heb": "שכל, אכפת"
    },
    {
        "eng": "minimize",
        "heb": "למזער"
    },
    {
        "eng": "minister",
        "heb": "שר"
    },
    {
        "eng": "minor",
        "heb": "קטין"
    },
    {
        "eng": "minority",
        "heb": "מיעוט"
    },
    {
        "eng": "miracle",
        "heb": "נס"
    },
    {
        "eng": "mirror",
        "heb": "מראה"
    },
    {
        "eng": "misbehave",
        "heb": "להתנהג בצורה לא הולמת"
    },
    {
        "eng": "mischief",
        "heb": "מעשה קונדס"
    },
    {
        "eng": "misconception",
        "heb": "דעה מוטעית"
    },
    {
        "eng": "miserable",
        "heb": "אומלל"
    },
    {
        "eng": "miss",
        "heb": "לפספס, להתגעגע"
    },
    {
        "eng": "missile",
        "heb": "טיל"
    },
    {
        "eng": "mission",
        "heb": "משימה"
    },
    {
        "eng": "mistake",
        "heb": "טעות"
    },
    {
        "eng": "mistaken",
        "heb": "שגוי"
    },
    {
        "eng": "misty",
        "heb": "מעורפל"
    },
    {
        "eng": "mix",
        "heb": "ערבוב"
    },
    {
        "eng": "mobilize",
        "heb": "להניע"
    },
    {
        "eng": "mock",
        "heb": "ללעוג"
    },
    {
        "eng": "mode",
        "heb": "אופנה"
    },
    {
        "eng": "model",
        "heb": "דגם"
    },
    {
        "eng": "moderate",
        "heb": "מתון"
    },
    {
        "eng": "modernize",
        "heb": "להפוך למודרני"
    },
    {
        "eng": "modest",
        "heb": "צנוע"
    },
    {
        "eng": "modify",
        "heb": "לשנות"
    },
    {
        "eng": "moist",
        "heb": "לחות"
    },
    {
        "eng": "mold",
        "heb": "עובש"
    },
    {
        "eng": "mole",
        "heb": "חפרפרת"
    },
    {
        "eng": "monarch",
        "heb": "מלך"
    },
    {
        "eng": "money",
        "heb": "כסף"
    },
    {
        "eng": "monitor",
        "heb": "מוניטור"
    },
    {
        "eng": "monk",
        "heb": "נזיר"
    },
    {
        "eng": "monkey",
        "heb": "קוף"
    },
    {
        "eng": "monster",
        "heb": "מפלצת"
    },
    {
        "eng": "monument",
        "heb": "אנדרטה"
    },
    {
        "eng": "monumental",
        "heb": "גדול"
    },
    {
        "eng": "mood",
        "heb": "מצב רוח"
    },
    {
        "eng": "moral",
        "heb": "מוסר"
    },
    {
        "eng": "morale",
        "heb": "מורל"
    },
    {
        "eng": "moreover",
        "heb": "זאת ועוד"
    },
    {
        "eng": "morose",
        "heb": "עגמומי"
    },
    {
        "eng": "mortal",
        "heb": "אנושי"
    },
    {
        "eng": "mortality",
        "heb": "תמותה"
    },
    {
        "eng": "mosquito",
        "heb": "יתוש"
    },
    {
        "eng": "most",
        "heb": "הכי"
    },
    {
        "eng": "mostly",
        "heb": "לרוב"
    },
    {
        "eng": "moth",
        "heb": "עש"
    },
    {
        "eng": "motif",
        "heb": "מוטיב"
    },
    {
        "eng": "motivate",
        "heb": "לדרבן"
    },
    {
        "eng": "mountain",
        "heb": "הר"
    },
    {
        "eng": "mountainside",
        "heb": "מדרון"
    },
    {
        "eng": "mountaintop",
        "heb": "פסגת הר"
    },
    {
        "eng": "mourning",
        "heb": "מתאבל"
    },
    {
        "eng": "mouse (mice)",
        "heb": "עכבר(ים)"
    },
    {
        "eng": "mouth",
        "heb": "פה"
    },
    {
        "eng": "move",
        "heb": "לזוז, מהלך"
    },
    {
        "eng": "movement",
        "heb": "תנועה"
    },
    {
        "eng": "muscle",
        "heb": "שריר"
    },
    {
        "eng": "must",
        "heb": "חייב"
    },
    {
        "eng": "mutation",
        "heb": "מוטציה"
    },
    {
        "eng": "mutually",
        "heb": "באופן שווה/הדדי"
    },
    {
        "eng": "myriad",
        "heb": "הרבה"
    },
    {
        "eng": "mystery",
        "heb": "תעלומה"
    },
    {
        "eng": "namely",
        "heb": "במיוחד"
    },
    {
        "eng": "narcotic",
        "heb": "סם"
    },
    {
        "eng": "narration",
        "heb": "קריינות"
    },
    {
        "eng": "narrow",
        "heb": "צר"
    },
    {
        "eng": "nation",
        "heb": "אומה"
    },
    {
        "eng": "nationality",
        "heb": "לאום"
    },
    {
        "eng": "nationalize",
        "heb": "להלאים"
    },
    {
        "eng": "native",
        "heb": "יליד"
    },
    {
        "eng": "natural",
        "heb": "טבעי"
    },
    {
        "eng": "nature",
        "heb": "טבע"
    },
    {
        "eng": "nausea",
        "heb": "בחילה"
    },
    {
        "eng": "naval",
        "heb": "ימי"
    },
    {
        "eng": "navigate",
        "heb": "לנווט"
    },
    {
        "eng": "near",
        "heb": "קרוב"
    },
    {
        "eng": "nearby",
        "heb": "ליד"
    },
    {
        "eng": "necessary",
        "heb": "הכרחי"
    },
    {
        "eng": "neck",
        "heb": "צוואר"
    },
    {
        "eng": "need",
        "heb": "צריך"
    },
    {
        "eng": "negate",
        "heb": "לשלול"
    },
    {
        "eng": "negative",
        "heb": "שלילי"
    },
    {
        "eng": "neglect",
        "heb": "להזניח"
    },
    {
        "eng": "negligence",
        "heb": "הזנחה"
    },
    {
        "eng": "negotiate",
        "heb": "לשאת ולתת"
    },
    {
        "eng": "negotiation",
        "heb": "משא ומתן"
    },
    {
        "eng": "neighbor",
        "heb": "שכן"
    },
    {
        "eng": "neighborhood",
        "heb": "שכונה"
    },
    {
        "neither... nor...": "...ולא ....",
        "heb": "לא... ולא..."
    },
    {
        "eng": "nervous",
        "heb": "מתוח"
    },
    {
        "eng": "nest",
        "heb": "לקונן"
    },
    {
        "eng": "network",
        "heb": "רשת"
    },
    {
        "eng": "neutral",
        "heb": "ניטרלי"
    },
    {
        "eng": "never",
        "heb": "אף פעם"
    },
    {
        "eng": "nevertheless",
        "heb": "למרות זאת"
    },
    {
        "eng": "new",
        "heb": "חדש"
    },
    {
        "eng": "newscaster",
        "heb": "מגיש חדשות"
    },
    {
        "eng": "newspaper",
        "heb": "עיתון"
    },
    {
        "eng": "next",
        "heb": "הבא"
    },
    {
        "eng": "next to",
        "heb": "ליד"
    },
    {
        "eng": "nickname",
        "heb": "כינוי"
    },
    {
        "eng": "no longer",
        "heb": "כבר לא"
    },
    {
        "eng": "nobility",
        "heb": "אצולה"
    },
    {
        "eng": "noble",
        "heb": "אצילי"
    },
    {
        "eng": "nocturnal",
        "heb": "לילי"
    },
    {
        "eng": "noise",
        "heb": "רעש"
    },
    {
        "eng": "nominated",
        "heb": "מועמד"
    },
    {
        "eng": "nonetheless",
        "heb": "למרות זאת"
    },
    {
        "eng": "noon",
        "heb": "12:00( צהריים"
    },
    {
        "eng": "norm",
        "heb": "תקן"
    },
    {
        "eng": "North",
        "heb": "צפון"
    },
    {
        "eng": "nose",
        "heb": "חרטום"
    },
    {
        "eng": "not only",
        "heb": "לא רק"
    },
    {
        "eng": "not only... but also...",
        "heb": "לא רק... אלא גם..."
    },
    {
        "eng": "not to mention",
        "heb": "שלא לדבר על"
    },
    {
        "eng": "not... but...",
        "heb": "לא... אבל..."
    },
    {
        "eng": "notable",
        "heb": "נכבד"
    },
    {
        "eng": "notably",
        "heb": "ראוי לציון"
    },
    {
        "eng": "note",
        "heb": "הערה, פתק, צליל, לשים לב"
    },
    {
        "eng": "noted",
        "heb": "ידוע"
    },
    {
        "eng": "notice",
        "heb": "תשומת לב, להבחין"
    },
    {
        "eng": "notify",
        "heb": "להודיע"
    },
    {
        "eng": "notion",
        "heb": "נטיה"
    },
    {
        "eng": "novel",
        "heb": "סיפור"
    },
    {
        "eng": "now",
        "heb": "עכשיו"
    },
    {
        "eng": "nowadays",
        "heb": "כיום"
    },
    {
        "eng": "nuclear",
        "heb": "גרעיני"
    },
    {
        "eng": "nuisance",
        "heb": "מטרד"
    },
    {
        "eng": "numb",
        "heb": "חסר תחושה"
    },
    {
        "eng": "number",
        "heb": "מספר"
    },
    {
        "eng": "numerator",
        "heb": "מונה"
    },
    {
        "eng": "numeric",
        "heb": "מספרי"
    },
    {
        "eng": "numerous",
        "heb": "מרובה"
    },
    {
        "eng": "nurse",
        "heb": "אחות"
    },
    {
        "eng": "nursery",
        "heb": "חדר ילדים"
    },
    {
        "eng": "nurture",
        "heb": "לחנך"
    },
    {
        "eng": "nut",
        "heb": "אגוז"
    },
    {
        "eng": "nutrition",
        "heb": "תזונה"
    },
    {
        "eng": "obedience",
        "heb": "ציות"
    },
    {
        "eng": "obey",
        "heb": "לציית"
    },
    {
        "eng": "object",
        "heb": "חפץ, מטרה, להתנגד"
    },
    {
        "eng": "objective",
        "heb": "אוביקטיבי"
    },
    {
        "eng": "obligation",
        "heb": "התחייבות"
    },
    {
        "eng": "oblige",
        "heb": "להכריח"
    },
    {
        "eng": "observation",
        "heb": "אבחנה"
    },
    {
        "eng": "observe",
        "heb": "לצפות, להבחין, לקיים חוק"
    },
    {
        "eng": "observer",
        "heb": "משקיף"
    },
    {
        "eng": "obsession",
        "heb": "דיבוק"
    },
    {
        "eng": "obsolete",
        "heb": "מיושן"
    },
    {
        "eng": "obstacle",
        "heb": "מכשול"
    },
    {
        "eng": "obstinate",
        "heb": "עקשן"
    },
    {
        "eng": "obtain",
        "heb": "להשיג"
    },
    {
        "eng": "obviously",
        "heb": "ברור"
    },
    {
        "eng": "occasion",
        "heb": "אירוע"
    },
    {
        "eng": "occasional",
        "heb": "מדי פעם"
    },
    {
        "eng": "occasionally",
        "heb": "מידי פעם"
    },
    {
        "eng": "occasions",
        "heb": "הזדמנויות"
    },
    {
        "eng": "occupy",
        "heb": "לתפוס"
    },
    {
        "eng": "occur",
        "heb": "לקרות, להתרחש"
    },
    {
        "eng": "occurrence",
        "heb": "התרחשות"
    },
    {
        "eng": "ocean",
        "heb": "אוקיינוס"
    },
    {
        "eng": "octopus",
        "heb": "תמנון"
    },
    {
        "eng": "odd",
        "heb": "מוזר"
    },
    {
        "eng": "ode",
        "heb": "אודה"
    },
    {
        "eng": "odor",
        "heb": "ניחוח"
    },
    {
        "eng": "of",
        "heb": "של"
    },
    {
        "eng": "of course",
        "heb": "כמובן"
    },
    {
        "eng": "of course... but...",
        "heb": "כמובן... אבל..."
    },
    {
        "eng": "offend",
        "heb": "להעליב"
    },
    {
        "eng": "offender",
        "heb": "פוגע"
    },
    {
        "eng": "offensive",
        "heb": "פוגעני"
    },
    {
        "eng": "offer",
        "heb": "הצעה"
    },
    {
        "eng": "official",
        "heb": "רשמי"
    },
    {
        "eng": "officiate",
        "heb": "לכהן"
    },
    {
        "eng": "offset",
        "heb": "לקזז"
    },
    {
        "eng": "offshore",
        "heb": "חו\"ל"
    },
    {
        "eng": "often",
        "heb": "לעיתים קרובות"
    },
    {
        "eng": "oil",
        "heb": "נפט"
    },
    {
        "eng": "old-fashioned",
        "heb": "מיושן"
    },
    {
        "eng": "olive",
        "heb": "זית"
    },
    {
        "eng": "omission",
        "heb": "השמטה"
    },
    {
        "eng": "omit",
        "heb": "להשמיט"
    },
    {
        "eng": "on",
        "heb": "על"
    },
    {
        "eng": "on one hand...on the other hand",
        "heb": "מצד אחד... מצד שני"
    },
    {
        "eng": "on the contrary",
        "heb": "להפך"
    },
    {
        "eng": "on top of",
        "heb": "על"
    },
    {
        "eng": "once",
        "heb": "פעם (בעבר)"
    },
    {
        "eng": "once in a while",
        "heb": "מידי פעם"
    },
    {
        "eng": "ongoing",
        "heb": "מתמשך"
    },
    {
        "eng": "onion",
        "heb": "בצל"
    },
    {
        "eng": "only",
        "heb": "רק"
    },
    {
        "eng": "open",
        "heb": "לפתוח, פתוח"
    },
    {
        "eng": "operate",
        "heb": "להפעיל, לפעול, לנתח"
    },
    {
        "eng": "operation",
        "heb": "מבצע"
    },
    {
        "eng": "opinion",
        "heb": "דעה"
    },
    {
        "eng": "opponent",
        "heb": "יריב"
    },
    {
        "eng": "opportunity",
        "heb": "הזדמנות"
    },
    {
        "eng": "opposite",
        "heb": "מנוגד"
    },
    {
        "eng": "opposition",
        "heb": "אופוזיציה"
    },
    {
        "eng": "oppressive",
        "heb": "אכזרי"
    },
    {
        "eng": "option",
        "heb": "אפשרות"
    },
    {
        "eng": "or",
        "heb": "או"
    },
    {
        "eng": "orbit",
        "heb": "לחוג"
    },
    {
        "eng": "orchestra",
        "heb": "תזמורת"
    },
    {
        "eng": "orchestrate",
        "heb": "לתזמר"
    },
    {
        "eng": "order",
        "heb": "סדר, הזמנה, פקודה"
    },
    {
        "eng": "orderly",
        "heb": "מסודר"
    },
    {
        "eng": "ordinarily",
        "heb": "בדרך-כלל"
    },
    {
        "eng": "ordinary",
        "heb": "רגיל"
    },
    {
        "eng": "organ",
        "heb": "אורגן (כלי נגינה)"
    },
    {
        "eng": "organic",
        "heb": "אורגני"
    },
    {
        "eng": "organization",
        "heb": "ארגון"
    },
    {
        "eng": "organize",
        "heb": "לארגן"
    },
    {
        "eng": "orient",
        "heb": "להתמצא"
    },
    {
        "eng": "orientation",
        "heb": "התמצאות"
    },
    {
        "eng": "oriented",
        "heb": "מכוון"
    },
    {
        "eng": "origin",
        "heb": "מקור, מוצא"
    },
    {
        "eng": "original",
        "heb": "מקורי"
    },
    {
        "eng": "originality",
        "heb": "מקוריות"
    },
    {
        "eng": "originate",
        "heb": "התחיל"
    },
    {
        "eng": "ornament",
        "heb": "קישוט"
    },
    {
        "eng": "otherwise",
        "heb": "אחרת"
    },
    {
        "eng": "outbreak",
        "heb": "התפרצות"
    },
    {
        "eng": "outcome",
        "heb": "תוצאה"
    },
    {
        "eng": "outdated",
        "heb": "מיושן"
    },
    {
        "eng": "outer",
        "heb": "חיצוני"
    },
    {
        "eng": "outline",
        "heb": "תוואי"
    },
    {
        "eng": "outside",
        "heb": "חוץ"
    },
    {
        "eng": "outspoken",
        "heb": "ישיר"
    },
    {
        "eng": "outstanding",
        "heb": "מצוין"
    },
    {
        "eng": "outweigh",
        "heb": "שוקל יותר מ-"
    },
    {
        "eng": "oven",
        "heb": "תנור"
    },
    {
        "eng": "over",
        "heb": "על"
    },
    {
        "eng": "overall",
        "heb": "כולל"
    },
    {
        "eng": "overcome",
        "heb": "להתגבר"
    },
    {
        "eng": "overdo",
        "heb": "להפריז"
    },
    {
        "eng": "overdue",
        "heb": "שעבר זמן ההגשה שלו"
    },
    {
        "eng": "overhaul",
        "heb": "לשפץ"
    },
    {
        "eng": "overlaps",
        "heb": "חופף"
    },
    {
        "eng": "overlooked",
        "heb": "העלים עין"
    },
    {
        "eng": "overly",
        "heb": "יותר מידי"
    },
    {
        "eng": "oversee",
        "heb": "לפקח"
    },
    {
        "eng": "overtake",
        "heb": "להשיג"
    },
    {
        "eng": "overwhelm",
        "heb": "מהמם"
    },
    {
        "eng": "owe",
        "heb": "להיות חייב"
    },
    {
        "eng": "owing to",
        "heb": "הודות ל-"
    },
    {
        "eng": "own",
        "heb": "משלו"
    },
    {
        "eng": "owner",
        "heb": "בעלים"
    },
    {
        "eng": "oxygen",
        "heb": "חמצן"
    },
    {
        "eng": "pace",
        "heb": "קצב"
    },
    {
        "eng": "package",
        "heb": "חבילה"
    },
    {
        "eng": "pad",
        "heb": "משטח"
    },
    {
        "eng": "paddle",
        "heb": "משוט"
    },
    {
        "eng": "pain",
        "heb": "כאב"
    },
    {
        "eng": "painter",
        "heb": "צייר"
    },
    {
        "eng": "painting",
        "heb": "ציור"
    },
    {
        "eng": "pair",
        "heb": "זוג"
    },
    {
        "eng": "palm",
        "heb": "כף יד"
    },
    {
        "eng": "pan",
        "heb": "מחבת"
    },
    {
        "eng": "paradox",
        "heb": "פרדוקס"
    },
    {
        "eng": "paragraph",
        "heb": "פסקה"
    },
    {
        "eng": "parallel",
        "heb": "מקביל"
    },
    {
        "eng": "paramount",
        "heb": "בעל חשיבות עליונה"
    },
    {
        "eng": "pardon",
        "heb": "לסלוח"
    },
    {
        "eng": "parent",
        "heb": "הורה"
    },
    {
        "eng": "parenting",
        "heb": "הורות"
    },
    {
        "eng": "part",
        "heb": "חלק"
    },
    {
        "eng": "partial",
        "heb": "חלקי"
    },
    {
        "eng": "participate",
        "heb": "השתתף"
    },
    {
        "eng": "particular",
        "heb": "מיוחד"
    },
    {
        "eng": "particularly",
        "heb": "במיוחד"
    },
    {
        "eng": "particulars",
        "heb": "פריטים"
    },
    {
        "eng": "party",
        "heb": "מפלגה"
    },
    {
        "eng": "pass",
        "heb": "לעבור, להעביר, אישור מעבר"
    },
    {
        "eng": "passion",
        "heb": "תשוקה"
    },
    {
        "eng": "passive",
        "heb": "סביל"
    },
    {
        "eng": "past",
        "heb": "עבר"
    },
    {
        "eng": "path",
        "heb": "נתיב"
    },
    {
        "eng": "pathology",
        "heb": "פתולוגיה"
    },
    {
        "eng": "patience",
        "heb": "סבלנות"
    },
    {
        "eng": "patient",
        "heb": "סבלני"
    },
    {
        "eng": "patiently",
        "heb": "בסבלנות"
    },
    {
        "eng": "patients",
        "heb": "מטופלים"
    },
    {
        "eng": "pattern",
        "heb": "תבנית, דפוס"
    },
    {
        "eng": "pause",
        "heb": "הפסקה"
    },
    {
        "eng": "pay",
        "heb": "לשלם"
    },
    {
        "eng": "peace",
        "heb": "שלום"
    },
    {
        "eng": "peaceful",
        "heb": "שָׁלֵו"
    },
    {
        "eng": "peach",
        "heb": "אפרסק"
    },
    {
        "eng": "peddler",
        "heb": "סוחר"
    },
    {
        "eng": "pedestrian",
        "heb": "הולך רגל"
    },
    {
        "eng": "peek",
        "heb": "להציץ"
    },
    {
        "eng": "penalty",
        "heb": "קנס"
    },
    {
        "eng": "penned",
        "heb": "כָּתַב"
    },
    {
        "eng": "people",
        "heb": "אנשים"
    },
    {
        "eng": "pepper",
        "heb": "פלפל"
    },
    {
        "eng": "per",
        "heb": "לכל"
    },
    {
        "eng": "perceive",
        "heb": "להבחין"
    },
    {
        "eng": "percent",
        "heb": "אחוז"
    },
    {
        "eng": "perch",
        "heb": "לנחות"
    },
    {
        "eng": "perfect",
        "heb": "מושלם"
    },
    {
        "eng": "perform",
        "heb": "לבצע"
    },
    {
        "eng": "performance",
        "heb": "ביצוע"
    },
    {
        "eng": "performer",
        "heb": "מבצע"
    },
    {
        "eng": "perhaps",
        "heb": "אולי"
    },
    {
        "eng": "period",
        "heb": "משך זמן"
    },
    {
        "eng": "permanent",
        "heb": "קבוע"
    },
    {
        "eng": "permanently",
        "heb": "קבוע"
    },
    {
        "eng": "permission",
        "heb": "רשות"
    },
    {
        "eng": "permit",
        "heb": "אישור"
    },
    {
        "eng": "perpetually",
        "heb": "נצחי"
    },
    {
        "eng": "perpetuate",
        "heb": "להנציח"
    },
    {
        "eng": "persecution",
        "heb": "רדיפה (דתית)"
    },
    {
        "eng": "persist",
        "heb": "להתמיד"
    },
    {
        "eng": "person",
        "heb": "אדם"
    },
    {
        "eng": "personal",
        "heb": "אישי"
    },
    {
        "eng": "personality",
        "heb": "אישיות"
    },
    {
        "eng": "persuade",
        "heb": "לשכנע"
    },
    {
        "eng": "persuasion",
        "heb": "שכנוע"
    },
    {
        "eng": "pervasive",
        "heb": "מחלחל"
    },
    {
        "eng": "pest",
        "heb": "מזיק"
    },
    {
        "eng": "pet",
        "heb": "חיית מחמד"
    },
    {
        "eng": "petition",
        "heb": "לעתור"
    },
    {
        "eng": "petroleum",
        "heb": "נפט"
    },
    {
        "eng": "petty",
        "heb": "חסר חשיבות"
    },
    {
        "eng": "pharmacy",
        "heb": "בית מרקחת"
    },
    {
        "eng": "phase",
        "heb": "שלב"
    },
    {
        "eng": "phenomenon",
        "heb": "תופעה"
    },
    {
        "eng": "philosophy",
        "heb": "פילוסופיה"
    },
    {
        "eng": "phobia",
        "heb": "פחד כרוני"
    },
    {
        "eng": "photograph",
        "heb": "תצלום"
    },
    {
        "eng": "physical",
        "heb": "פיזי"
    },
    {
        "eng": "physicist",
        "heb": "פיזיקאי"
    },
    {
        "eng": "pick",
        "heb": "לבחור, לקטוף"
    },
    {
        "eng": "picture",
        "heb": "תמונה"
    },
    {
        "eng": "piece",
        "heb": "חתיכה"
    },
    {
        "eng": "pigeon",
        "heb": "יונה"
    },
    {
        "eng": "pilot",
        "heb": "טייס"
    },
    {
        "eng": "pinch",
        "heb": "לצבוט"
    },
    {
        "eng": "pioneer",
        "heb": "חלוץ"
    },
    {
        "eng": "pipe",
        "heb": "צינור"
    },
    {
        "eng": "pit",
        "heb": "בור"
    },
    {
        "eng": "pivot",
        "heb": "לסובב על ציר"
    },
    {
        "eng": "place",
        "heb": "מקום"
    },
    {
        "eng": "plague",
        "heb": "מגפה"
    },
    {
        "eng": "plan",
        "heb": "לתכנן"
    },
    {
        "eng": "plane",
        "heb": "מטוס"
    },
    {
        "eng": "planet",
        "heb": "כוכב לכת"
    },
    {
        "eng": "plant",
        "heb": "צמח, לשתול, מפעל"
    },
    {
        "eng": "plaster",
        "heb": "גבס"
    },
    {
        "eng": "plate",
        "heb": "לוח"
    },
    {
        "eng": "plausible",
        "heb": "סביר"
    },
    {
        "eng": "play",
        "heb": "לשחק, לנגן, מחזה"
    },
    {
        "eng": "playwright",
        "heb": "מחזאי"
    },
    {
        "eng": "plead",
        "heb": "להתחנן"
    },
    {
        "eng": "pleasure",
        "heb": "לענג"
    },
    {
        "eng": "pledge",
        "heb": "להתחייב"
    },
    {
        "eng": "plentiful",
        "heb": "שופע"
    },
    {
        "eng": "plight",
        "heb": "סכנה"
    },
    {
        "eng": "plot",
        "heb": "להכין תרשים"
    },
    {
        "eng": "plunge",
        "heb": "טבילה"
    },
    {
        "eng": "poacher",
        "heb": "מסיג גבול"
    },
    {
        "eng": "poet",
        "heb": "משורר"
    },
    {
        "eng": "poignant",
        "heb": "נוקב"
    },
    {
        "eng": "poisonous",
        "heb": "רעיל"
    },
    {
        "eng": "polar",
        "heb": "הפוך לחלוטין"
    },
    {
        "eng": "pole",
        "heb": "מוט"
    },
    {
        "eng": "policy",
        "heb": "מדיניות"
    },
    {
        "eng": "polish",
        "heb": "פולני"
    },
    {
        "eng": "polite",
        "heb": "מנומס"
    },
    {
        "eng": "poll",
        "heb": "סקר"
    },
    {
        "eng": "pollution",
        "heb": "זיהום"
    },
    {
        "eng": "pool",
        "heb": "בריכה"
    },
    {
        "eng": "poor",
        "heb": "מסכן"
    },
    {
        "eng": "poorly",
        "heb": "בצורה גרועה"
    },
    {
        "eng": "population",
        "heb": "אוכלוסייה"
    },
    {
        "eng": "populous",
        "heb": "מאוכלס בצפיפות"
    },
    {
        "eng": "portrait",
        "heb": "דיוקן"
    },
    {
        "eng": "portray",
        "heb": "לצייר"
    },
    {
        "eng": "position",
        "heb": "עמדה, מיקום"
    },
    {
        "eng": "possess",
        "heb": "להיות בעלים של"
    },
    {
        "eng": "possession",
        "heb": "בעלות"
    },
    {
        "eng": "possible",
        "heb": "אפשרי"
    },
    {
        "eng": "post",
        "heb": "לפרסם"
    },
    {
        "eng": "postage",
        "heb": "דבר דואר"
    },
    {
        "eng": "posterity",
        "heb": "הדורות הבאים"
    },
    {
        "eng": "postpone",
        "heb": "לדחות"
    },
    {
        "eng": "pot",
        "heb": "קדרה"
    },
    {
        "eng": "potato",
        "heb": "תפוח אדמה"
    },
    {
        "eng": "potent",
        "heb": "בעל כוח השפעה"
    },
    {
        "eng": "potential",
        "heb": "פוטנציאלי"
    },
    {
        "eng": "pothole",
        "heb": "מהמורה"
    },
    {
        "eng": "potter",
        "heb": "קדר"
    },
    {
        "eng": "pottery",
        "heb": "קדרות"
    },
    {
        "eng": "poultry",
        "heb": "עוף"
    },
    {
        "eng": "poverty",
        "heb": "עוני"
    },
    {
        "eng": "poverty-stricken",
        "heb": "מוכה עוני"
    },
    {
        "eng": "powerful",
        "heb": "רב כוח"
    },
    {
        "eng": "practical",
        "heb": "מעשי"
    },
    {
        "eng": "practice",
        "heb": "תרגול, אימון, לתרגל"
    },
    {
        "eng": "praise",
        "heb": "לשבח"
    },
    {
        "eng": "prank",
        "heb": "מתיחה"
    },
    {
        "eng": "precedent",
        "heb": "תקדים"
    },
    {
        "eng": "preceding",
        "heb": "קודם"
    },
    {
        "eng": "precious",
        "heb": "יקר"
    },
    {
        "eng": "precise",
        "heb": "מדויק"
    },
    {
        "eng": "precision",
        "heb": "דיוק"
    },
    {
        "eng": "predecessors",
        "heb": "קודמים"
    },
    {
        "eng": "predestined",
        "heb": "נקבע מראש"
    },
    {
        "eng": "predict",
        "heb": "לצפות מראש"
    },
    {
        "eng": "prediction",
        "heb": "חיזוי"
    },
    {
        "eng": "predictive",
        "heb": "נבואי"
    },
    {
        "eng": "predominantly",
        "heb": "באופן ניכר"
    },
    {
        "eng": "preferable",
        "heb": "עדיף"
    },
    {
        "eng": "pregnancy",
        "heb": "היריון"
    },
    {
        "eng": "pregnant",
        "heb": "הרה"
    },
    {
        "eng": "prehistoric",
        "heb": "פרהיסטורי"
    },
    {
        "eng": "prejudice",
        "heb": "דעה קדומה"
    },
    {
        "eng": "premature",
        "heb": "מוקדם מדי"
    },
    {
        "eng": "preparation for",
        "heb": "הכנה ל-"
    },
    {
        "eng": "prepare",
        "heb": "התכונן"
    },
    {
        "eng": "prescribe",
        "heb": "לרשום מרשם"
    },
    {
        "eng": "prescription",
        "heb": "מרשם"
    },
    {
        "eng": "presence",
        "heb": "נוכחות"
    },
    {
        "eng": "present",
        "heb": "להציג"
    },
    {
        "eng": "presentation",
        "heb": "מצגת"
    },
    {
        "eng": "presently",
        "heb": "כעת"
    },
    {
        "eng": "preserve",
        "heb": "לשמר"
    },
    {
        "eng": "preside",
        "heb": "לנהל"
    },
    {
        "eng": "president",
        "heb": "נשיא"
    },
    {
        "eng": "prestigious",
        "heb": "יוקרתי"
    },
    {
        "eng": "presume",
        "heb": "להניח"
    },
    {
        "eng": "pretend",
        "heb": "להעמיד פנים"
    },
    {
        "eng": "pretext",
        "heb": "אמתלה"
    },
    {
        "eng": "prevalent",
        "heb": "רווח"
    },
    {
        "eng": "prevent",
        "heb": "למנוע"
    },
    {
        "eng": "prevention",
        "heb": "מניעה"
    },
    {
        "eng": "previous",
        "heb": "קודם"
    },
    {
        "eng": "previously",
        "heb": "הקודם"
    },
    {
        "eng": "prey",
        "heb": "לטרוף"
    },
    {
        "eng": "price",
        "heb": "מחיר"
    },
    {
        "eng": "prick",
        "heb": "לדקור"
    },
    {
        "eng": "pride",
        "heb": "גאווה"
    },
    {
        "eng": "priest",
        "heb": "כומר"
    },
    {
        "eng": "primarily",
        "heb": "בעיקר"
    },
    {
        "eng": "primary",
        "heb": "יסודי"
    },
    {
        "eng": "prime",
        "heb": "ראשוני"
    },
    {
        "eng": "primitive",
        "heb": "קדום"
    },
    {
        "eng": "principal",
        "heb": "מנהל בית ספר"
    },
    {
        "eng": "principle",
        "heb": "עיקרון"
    },
    {
        "eng": "printer",
        "heb": "מדפסת"
    },
    {
        "eng": "prior",
        "heb": "קודם"
    },
    {
        "eng": "prior to",
        "heb": "קודם ל-"
    },
    {
        "eng": "priority",
        "heb": "עדיפות"
    },
    {
        "eng": "prison",
        "heb": "כלא"
    },
    {
        "eng": "private",
        "heb": "פרטי"
    },
    {
        "eng": "privilege",
        "heb": "זכות יתר"
    },
    {
        "eng": "prize",
        "heb": "פרס"
    },
    {
        "eng": "probable",
        "heb": "סביר"
    },
    {
        "eng": "probably",
        "heb": "כנראה"
    },
    {
        "eng": "probation",
        "heb": "תקופת מבחן"
    },
    {
        "eng": "probe",
        "heb": "לגשש"
    },
    {
        "eng": "problem",
        "heb": "בעיה"
    },
    {
        "eng": "process",
        "heb": "לעכל"
    },
    {
        "eng": "produce",
        "heb": "לייצר"
    },
    {
        "eng": "product",
        "heb": "מוצר"
    },
    {
        "eng": "profession",
        "heb": "מקצוע"
    },
    {
        "eng": "professional",
        "heb": "מקצועי"
    },
    {
        "eng": "profit",
        "heb": "רווח"
    },
    {
        "eng": "profitable",
        "heb": "רווחי"
    },
    {
        "eng": "profound",
        "heb": "מעמיק"
    },
    {
        "eng": "profoundly",
        "heb": "עמוקות"
    },
    {
        "eng": "program",
        "heb": "תכנית"
    },
    {
        "eng": "progress",
        "heb": "התקדמות"
    },
    {
        "eng": "progressive",
        "heb": "מתקדם ומתמשך"
    },
    {
        "eng": "prohibit",
        "heb": "לאסור"
    },
    {
        "eng": "project",
        "heb": "פרויקט, מיזם"
    },
    {
        "eng": "proliferate",
        "heb": "התפשט במהירות"
    },
    {
        "eng": "prolific",
        "heb": "שופע"
    },
    {
        "eng": "prolong",
        "heb": "מתמשך"
    },
    {
        "eng": "prominent",
        "heb": "חשוב"
    },
    {
        "eng": "promise",
        "heb": "הבטחה"
    },
    {
        "eng": "promote",
        "heb": "לקדם"
    },
    {
        "eng": "promotion",
        "heb": "קידום"
    },
    {
        "eng": "prompted",
        "heb": "הביא לידי"
    },
    {
        "eng": "prone",
        "heb": "נוטה"
    },
    {
        "eng": "proof",
        "heb": "עמיד"
    },
    {
        "eng": "propaganda",
        "heb": "תעמולה"
    },
    {
        "eng": "propel",
        "heb": "לדחוף"
    },
    {
        "eng": "proper",
        "heb": "מתאים"
    },
    {
        "eng": "properly",
        "heb": "כראוי"
    },
    {
        "eng": "property",
        "heb": "רכוש"
    },
    {
        "eng": "prophecy",
        "heb": "נבואה"
    },
    {
        "eng": "proponent",
        "heb": "תומך"
    },
    {
        "eng": "proportion",
        "heb": "שיעור"
    },
    {
        "eng": "proposal",
        "heb": "הצעה"
    },
    {
        "eng": "propose",
        "heb": "להציע"
    },
    {
        "eng": "proposition",
        "heb": "הצעה"
    },
    {
        "eng": "prospective",
        "heb": "עתידי"
    },
    {
        "eng": "prosper",
        "heb": "לשגשג"
    },
    {
        "eng": "prosperity",
        "heb": "צמיחה"
    },
    {
        "eng": "prosperous",
        "heb": "משגשג"
    },
    {
        "eng": "protect",
        "heb": "להגן"
    },
    {
        "eng": "protest",
        "heb": "למחות"
    },
    {
        "eng": "prove",
        "heb": "להוכיח"
    },
    {
        "eng": "proverb",
        "heb": "אמרה"
    },
    {
        "eng": "provide",
        "heb": "לספק"
    },
    {
        "eng": "provided that",
        "heb": "בתנאי ש-"
    },
    {
        "eng": "province",
        "heb": "אזור"
    },
    {
        "eng": "provoke",
        "heb": "להסית"
    },
    {
        "eng": "prowess",
        "heb": "יכולת יוצאת דופן"
    },
    {
        "eng": "public",
        "heb": "ציבורי"
    },
    {
        "eng": "publication",
        "heb": "הוצאה לאור"
    },
    {
        "eng": "publicized",
        "heb": "פורסם"
    },
    {
        "eng": "publish",
        "heb": "לפרסם"
    },
    {
        "eng": "publisher",
        "heb": "מוציא לאור"
    },
    {
        "eng": "pump",
        "heb": "משאבה"
    },
    {
        "eng": "punctuate",
        "heb": "הדגשה"
    },
    {
        "eng": "punctuation",
        "heb": "פיסוק"
    },
    {
        "eng": "punish",
        "heb": "להעניש"
    },
    {
        "eng": "pupil",
        "heb": "תלמיד"
    },
    {
        "eng": "purchase",
        "heb": "לרכוש"
    },
    {
        "eng": "pure",
        "heb": "טהור"
    },
    {
        "eng": "purification",
        "heb": "טיהור"
    },
    {
        "eng": "purpose",
        "heb": "מטרה, כוונה"
    },
    {
        "eng": "purposely",
        "heb": "בכוונה"
    },
    {
        "eng": "purse",
        "heb": "ארנק"
    },
    {
        "eng": "pursue",
        "heb": "לרדוף"
    },
    {
        "eng": "pursuit",
        "heb": "מרדף"
    },
    {
        "eng": "puzzle",
        "heb": "פאזל"
    },
    {
        "eng": "puzzled",
        "heb": "מבולבל"
    },
    {
        "eng": "quake",
        "heb": "רעד"
    },
    {
        "eng": "qualify",
        "heb": "להיות מוסמך"
    },
    {
        "eng": "quality",
        "heb": "איכות"
    },
    {
        "eng": "quantify",
        "heb": "לכמת"
    },
    {
        "eng": "quantity",
        "heb": "כמות"
    },
    {
        "eng": "quarrelsome",
        "heb": "וכחן"
    },
    {
        "eng": "quarter",
        "heb": "רבע"
    },
    {
        "eng": "queen",
        "heb": "מלכה"
    },
    {
        "eng": "quench",
        "heb": "להרוות"
    },
    {
        "eng": "query",
        "heb": "חקירה"
    },
    {
        "eng": "question",
        "heb": "שאלה"
    },
    {
        "eng": "quick",
        "heb": "זריז"
    },
    {
        "eng": "quiet",
        "heb": "שקט"
    },
    {
        "eng": "quite",
        "heb": "למדי"
    },
    {
        "eng": "quote",
        "heb": "ציטוט"
    },
    {
        "eng": "race",
        "heb": "מרוץ"
    },
    {
        "eng": "radiation",
        "heb": "קרינה"
    },
    {
        "eng": "radically",
        "heb": "באופן קיצוני"
    },
    {
        "eng": "rage",
        "heb": "זעם"
    },
    {
        "eng": "rail",
        "heb": "מעקה"
    },
    {
        "eng": "railroad",
        "heb": "מסילת רכבת"
    },
    {
        "eng": "rain",
        "heb": "גשם"
    },
    {
        "eng": "rainbow",
        "heb": "קשת בענן"
    },
    {
        "eng": "rainfall",
        "heb": "כמות משקעים"
    },
    {
        "eng": "rainstorm",
        "heb": "סופת גשמים"
    },
    {
        "eng": "raise",
        "heb": "להעלות"
    },
    {
        "eng": "random",
        "heb": "מקרי"
    },
    {
        "eng": "randomly",
        "heb": "באקראיות"
    },
    {
        "eng": "range",
        "heb": "טווח"
    },
    {
        "eng": "rank",
        "heb": "דרגה"
    },
    {
        "eng": "rapid",
        "heb": "מהיר"
    },
    {
        "eng": "rapidly",
        "heb": "במהירות"
    },
    {
        "eng": "rare",
        "heb": "נדיר"
    },
    {
        "eng": "rarely",
        "heb": "לעיתים נדירות"
    },
    {
        "eng": "rat",
        "heb": "חולדה"
    },
    {
        "eng": "rates",
        "heb": "שיעור"
    },
    {
        "eng": "rather",
        "heb": "למדי, די, עדיף, אלא"
    },
    {
        "eng": "rather than",
        "heb": "במקום"
    },
    {
        "eng": "rational",
        "heb": "הגיוני"
    },
    {
        "eng": "rationalize",
        "heb": "להצדיק"
    },
    {
        "eng": "raw",
        "heb": "חי"
    },
    {
        "eng": "ray",
        "heb": "קרן"
    },
    {
        "eng": "razor",
        "heb": "סכין גילוח"
    },
    {
        "eng": "react",
        "heb": "להגיב"
    },
    {
        "eng": "reaction",
        "heb": "תגובה"
    },
    {
        "eng": "reader",
        "heb": "קורא"
    },
    {
        "eng": "readily",
        "heb": "ללא קושי"
    },
    {
        "eng": "readiness",
        "heb": "מוכנות"
    },
    {
        "eng": "reality",
        "heb": "מציאות"
    },
    {
        "eng": "realize",
        "heb": "להבין, להגשים"
    },
    {
        "eng": "reap",
        "heb": "לקצור"
    },
    {
        "eng": "rear",
        "heb": "אחורי"
    },
    {
        "eng": "rearing",
        "heb": "טיפוח"
    },
    {
        "eng": "reason",
        "heb": "סיבה"
    },
    {
        "eng": "reasonable",
        "heb": "הגיוני"
    },
    {
        "eng": "reassurance",
        "heb": "הרגעה"
    },
    {
        "eng": "rebel",
        "heb": "מורד"
    },
    {
        "eng": "rebellion",
        "heb": "מרד"
    },
    {
        "eng": "rebellious",
        "heb": "מרדני"
    },
    {
        "eng": "reborn",
        "heb": "נולד מחדש"
    },
    {
        "eng": "rebuttal",
        "heb": "סתירה"
    },
    {
        "eng": "recall",
        "heb": "להיזכר"
    },
    {
        "eng": "receive",
        "heb": "לקבל"
    },
    {
        "eng": "recent",
        "heb": "שארע לאחרונה"
    },
    {
        "eng": "recently",
        "heb": "לאחרונה"
    },
    {
        "eng": "reception",
        "heb": "קבלה"
    },
    {
        "eng": "recession",
        "heb": "מיתון"
    },
    {
        "eng": "recipe",
        "heb": "מתכון"
    },
    {
        "eng": "recipient",
        "heb": "נמען"
    },
    {
        "eng": "reciprocal",
        "heb": "מספר הופכי"
    },
    {
        "eng": "reciprocate",
        "heb": "הדדי"
    },
    {
        "eng": "recognition",
        "heb": "הכרה"
    },
    {
        "eng": "recognize",
        "heb": "לזהות"
    },
    {
        "eng": "recollection",
        "heb": "זיכרון"
    },
    {
        "eng": "recommend",
        "heb": "להמליץ"
    },
    {
        "eng": "reconcile",
        "heb": "להתפייס"
    },
    {
        "eng": "reconstruct",
        "heb": "לשחזר"
    },
    {
        "eng": "record",
        "heb": "שיא, תקליט, רישום, להקליט"
    },
    {
        "eng": "recordings",
        "heb": "הקלטות"
    },
    {
        "eng": "recover",
        "heb": "להתאושש"
    },
    {
        "eng": "recreate",
        "heb": "לשחזר"
    },
    {
        "eng": "recreation",
        "heb": "בילוי"
    },
    {
        "eng": "recruit",
        "heb": "לגייס"
    },
    {
        "eng": "recruitment",
        "heb": "גיוס"
    },
    {
        "eng": "recur",
        "heb": "קרה שוב"
    },
    {
        "eng": "recurring",
        "heb": "נשנה"
    },
    {
        "eng": "recycle",
        "heb": "למחזר"
    },
    {
        "eng": "recycling",
        "heb": "מחזור"
    },
    {
        "eng": "redhead",
        "heb": "ג'ינג'י"
    },
    {
        "eng": "reduce",
        "heb": "להפחית"
    },
    {
        "eng": "refer",
        "heb": "מתייחס"
    },
    {
        "eng": "reference",
        "heb": "התייחסות"
    },
    {
        "eng": "refined",
        "heb": "מלוטש"
    },
    {
        "eng": "reflect",
        "heb": "להרהר"
    },
    {
        "eng": "reflection",
        "heb": "השתקפות"
    },
    {
        "eng": "reform",
        "heb": "שינוי"
    },
    {
        "eng": "refugee",
        "heb": "פליט"
    },
    {
        "eng": "refund",
        "heb": "החזר"
    },
    {
        "eng": "refuse",
        "heb": "אשפה"
    },
    {
        "eng": "refute",
        "heb": "להפריך"
    },
    {
        "eng": "regain",
        "heb": "להשיג מחדש"
    },
    {
        "eng": "regard",
        "heb": "להתייחס"
    },
    {
        "eng": "regardless",
        "heb": "למרות"
    },
    {
        "eng": "regime",
        "heb": "שלטון"
    },
    {
        "eng": "region",
        "heb": "מחוז"
    },
    {
        "eng": "register",
        "heb": "להירשם"
    },
    {
        "eng": "registration",
        "heb": "הרשמה"
    },
    {
        "eng": "regret",
        "heb": "חרטה"
    },
    {
        "eng": "regularly",
        "heb": "באופן קבוע"
    },
    {
        "eng": "regulate",
        "heb": "לווסת"
    },
    {
        "eng": "regulation",
        "heb": "תקנה"
    },
    {
        "eng": "rehabilitation",
        "heb": "שיקום"
    },
    {
        "eng": "rehearsal",
        "heb": "חזרה"
    },
    {
        "eng": "rehearse",
        "heb": "לעשות חזרה"
    },
    {
        "eng": "reign",
        "heb": "שלטון"
    },
    {
        "eng": "reigned",
        "heb": "משל"
    },
    {
        "eng": "reincarnation",
        "heb": "גלגול נשמות"
    },
    {
        "eng": "reinforce",
        "heb": "לחזק"
    },
    {
        "eng": "reinvigorate",
        "heb": "לרענן"
    },
    {
        "eng": "reject",
        "heb": "לדחות"
    },
    {
        "eng": "relapse",
        "heb": "הישנות"
    },
    {
        "eng": "relate",
        "heb": "להתייחס"
    },
    {
        "eng": "relating",
        "heb": "מתייחס"
    },
    {
        "eng": "relations",
        "heb": "יחסים"
    },
    {
        "eng": "relationship",
        "heb": "מערכת יחסים"
    },
    {
        "eng": "relative",
        "heb": "יחסי"
    },
    {
        "eng": "relatively",
        "heb": "בקרוב"
    },
    {
        "eng": "relax",
        "heb": "להירגע"
    },
    {
        "eng": "release",
        "heb": "לשחרר"
    },
    {
        "eng": "relegated",
        "heb": "הורד בדרגה"
    },
    {
        "eng": "relevant",
        "heb": "רלוונטי"
    },
    {
        "eng": "reliable",
        "heb": "שניתן לסמוך עליו"
    },
    {
        "eng": "reliance",
        "heb": "הסתמכות"
    },
    {
        "eng": "relic",
        "heb": "שריד"
    },
    {
        "eng": "relieve",
        "heb": "להקהל"
    },
    {
        "eng": "religion",
        "heb": "דת"
    },
    {
        "eng": "religious",
        "heb": "דתי"
    },
    {
        "eng": "relocate",
        "heb": "למקם מחדש"
    },
    {
        "eng": "reluctant",
        "heb": "מסויג"
    },
    {
        "eng": "rely",
        "heb": "להסתמך"
    },
    {
        "eng": "remain",
        "heb": "להישאר"
    },
    {
        "eng": "remainder",
        "heb": "שארית"
    },
    {
        "eng": "remains",
        "heb": "שרידים"
    },
    {
        "eng": "remarkable",
        "heb": "יוצא דופן"
    },
    {
        "eng": "remedy",
        "heb": "תרופה"
    },
    {
        "eng": "remote",
        "heb": "מרוחק"
    },
    {
        "eng": "remove",
        "heb": "להסיר"
    },
    {
        "eng": "renew",
        "heb": "לחדש"
    },
    {
        "eng": "renovate",
        "heb": "לחדש"
    },
    {
        "eng": "renown",
        "heb": "ידוע"
    },
    {
        "eng": "reorganize",
        "heb": "לארגן מחדש"
    },
    {
        "eng": "repair",
        "heb": "לתקן"
    },
    {
        "eng": "repeat",
        "heb": "לחזור"
    },
    {
        "eng": "repelled",
        "heb": "הגעיל"
    },
    {
        "eng": "repetition",
        "heb": "חזרה"
    },
    {
        "eng": "replace",
        "heb": "להחליף"
    },
    {
        "eng": "replacement",
        "heb": "מחליף"
    },
    {
        "eng": "replica",
        "heb": "העתק מדויק"
    },
    {
        "eng": "reply",
        "heb": "להשיב"
    },
    {
        "eng": "report",
        "heb": "דיווח"
    },
    {
        "eng": "reporter",
        "heb": "עיתונאי"
    },
    {
        "eng": "represent",
        "heb": "מייצג"
    },
    {
        "eng": "repressive",
        "heb": "מדכא"
    },
    {
        "eng": "reproduce",
        "heb": "לשכפל"
    },
    {
        "eng": "reputation",
        "heb": "מוניטין"
    },
    {
        "eng": "request",
        "heb": "בקשה"
    },
    {
        "eng": "require",
        "heb": "לדרוש"
    },
    {
        "eng": "rescue",
        "heb": "להציל"
    },
    {
        "eng": "research",
        "heb": "מחקר"
    },
    {
        "eng": "resemble",
        "heb": "דומה"
    },
    {
        "eng": "resent",
        "heb": "להתרעם"
    },
    {
        "eng": "reservation",
        "heb": "שריון מקום"
    },
    {
        "eng": "reserve",
        "heb": "לשמור"
    },
    {
        "eng": "reservoir",
        "heb": "מאגר"
    },
    {
        "eng": "residence",
        "heb": "מגורים"
    },
    {
        "eng": "resident",
        "heb": "תושב קבע"
    },
    {
        "eng": "resigned",
        "heb": "התפטר"
    },
    {
        "eng": "resist",
        "heb": "להתנגד"
    },
    {
        "eng": "resistance",
        "heb": "התנגדות"
    },
    {
        "eng": "resolve",
        "heb": "נחוש"
    },
    {
        "eng": "resort",
        "heb": "אתר נופש"
    },
    {
        "eng": "resource",
        "heb": "משאב"
    },
    {
        "eng": "resourceful",
        "heb": "בעל תושייה"
    },
    {
        "eng": "respect",
        "heb": "לכבד"
    },
    {
        "eng": "respectfully",
        "heb": "בכבוד"
    },
    {
        "eng": "respective",
        "heb": "שייך בהתאמה"
    },
    {
        "eng": "respectively",
        "heb": "בהתאמה"
    },
    {
        "eng": "respond",
        "heb": "להגיב, להשיב"
    },
    {
        "eng": "responsibility",
        "heb": "אחריות"
    },
    {
        "eng": "responsible",
        "heb": "אחראי"
    },
    {
        "eng": "rest",
        "heb": "מנוחה, שאר"
    },
    {
        "eng": "restaurant",
        "heb": "מסעדה"
    },
    {
        "eng": "restore",
        "heb": "לשקם"
    },
    {
        "eng": "restrain",
        "heb": "לרסן"
    },
    {
        "eng": "restrict",
        "heb": "להגביל"
    },
    {
        "eng": "restriction",
        "heb": "הגבלה"
    },
    {
        "eng": "result",
        "heb": "תוצאה"
    },
    {
        "eng": "result in",
        "heb": "הסתיים ב-"
    },
    {
        "eng": "resume",
        "heb": "להמשיך"
    },
    {
        "eng": "resumption",
        "heb": "חידוש"
    },
    {
        "eng": "resurgence",
        "heb": "תחייה"
    },
    {
        "eng": "retain",
        "heb": "להחזיק"
    },
    {
        "eng": "retire",
        "heb": "לפרוש"
    },
    {
        "eng": "retirement",
        "heb": "פרישה"
    },
    {
        "eng": "retreat",
        "heb": "נסיגה"
    },
    {
        "eng": "retrieve",
        "heb": "להשיב"
    },
    {
        "eng": "retroactive",
        "heb": "למפרע"
    },
    {
        "eng": "reveal",
        "heb": "לחשוף"
    },
    {
        "eng": "revenue",
        "heb": "הכנסה"
    },
    {
        "eng": "review",
        "heb": "ביקורת"
    },
    {
        "eng": "revise",
        "heb": "לשפר"
    },
    {
        "eng": "revision",
        "heb": "בדיקה מחדש לצורך שיפור"
    },
    {
        "eng": "revitalize",
        "heb": "להחיות"
    },
    {
        "eng": "revived",
        "heb": "התחדש"
    },
    {
        "eng": "revoke",
        "heb": "לבטל"
    },
    {
        "eng": "revolt",
        "heb": "מרד"
    },
    {
        "eng": "revolution",
        "heb": "מהפכה"
    },
    {
        "eng": "reward",
        "heb": "פרס"
    },
    {
        "eng": "rhyme",
        "heb": "חרוז"
    },
    {
        "eng": "rhythm",
        "heb": "קֶצֶב"
    },
    {
        "eng": "rice",
        "heb": "אורז"
    },
    {
        "eng": "rich",
        "heb": "עשיר"
    },
    {
        "eng": "ride",
        "heb": "לרכב"
    },
    {
        "eng": "ridicule",
        "heb": "ללעוג"
    },
    {
        "eng": "ridiculous",
        "heb": "מגוחך"
    },
    {
        "eng": "right",
        "heb": "ימין, נכון, זכות"
    },
    {
        "eng": "rigid",
        "heb": "נוקשה"
    },
    {
        "eng": "rim",
        "heb": "שפה"
    },
    {
        "eng": "ring",
        "heb": "טבעת, זירה, צלצול"
    },
    {
        "eng": "ring, rang",
        "heb": "צלצל"
    },
    {
        "eng": "rise",
        "heb": "לעלות, לקום"
    },
    {
        "eng": "rising",
        "heb": "זריחה"
    },
    {
        "eng": "risk",
        "heb": "סיכון"
    },
    {
        "eng": "ritual",
        "heb": "טקס"
    },
    {
        "eng": "rival",
        "heb": "יריב"
    },
    {
        "eng": "rivalry",
        "heb": "יריבות"
    },
    {
        "eng": "river",
        "heb": "נהר"
    },
    {
        "eng": "road",
        "heb": "דרך"
    },
    {
        "eng": "roast",
        "heb": "לצלות"
    },
    {
        "eng": "robbery",
        "heb": "שוד"
    },
    {
        "eng": "robe",
        "heb": "גלימה"
    },
    {
        "eng": "rocket",
        "heb": "טיל"
    },
    {
        "eng": "rodent",
        "heb": "מכרסם"
    },
    {
        "eng": "role",
        "heb": "תפקיד"
    },
    {
        "eng": "roof",
        "heb": "גג"
    },
    {
        "eng": "root",
        "heb": "שורש"
    },
    {
        "eng": "rope",
        "heb": "חבל"
    },
    {
        "eng": "rotary",
        "heb": "נע על ציר סיבובי"
    },
    {
        "eng": "rough",
        "heb": "קשה"
    },
    {
        "eng": "route",
        "heb": "מסלול"
    },
    {
        "eng": "rub",
        "heb": "לשפשף"
    },
    {
        "eng": "rubber",
        "heb": "גומי"
    },
    {
        "eng": "rubbish",
        "heb": "זבל"
    },
    {
        "eng": "rudimentary",
        "heb": "יסודי"
    },
    {
        "eng": "ruin",
        "heb": "להרוס"
    },
    {
        "eng": "ruins",
        "heb": "הריסות"
    },
    {
        "eng": "rule",
        "heb": "כלל"
    },
    {
        "eng": "ruler",
        "heb": "סרגל"
    },
    {
        "eng": "rumor",
        "heb": "שמועה"
    },
    {
        "eng": "run, ran",
        "heb": "לרוץ"
    },
    {
        "eng": "rural",
        "heb": "כפרי"
    },
    {
        "eng": "sacred",
        "heb": "קדוש"
    },
    {
        "eng": "sacrifice",
        "heb": "להקריב"
    },
    {
        "eng": "safe",
        "heb": "בטוח"
    },
    {
        "eng": "safety",
        "heb": "בטיחות"
    },
    {
        "eng": "saga",
        "heb": "סאגה"
    },
    {
        "eng": "sailor",
        "heb": "ימאי"
    },
    {
        "eng": "sake",
        "heb": "תועלת"
    },
    {
        "eng": "salary",
        "heb": "שכר"
    },
    {
        "eng": "salt",
        "heb": "מלח"
    },
    {
        "eng": "salvation",
        "heb": "גאולה"
    },
    {
        "eng": "sample",
        "heb": "דוגמית"
    },
    {
        "eng": "sanction",
        "heb": "עידוד"
    },
    {
        "eng": "sarcophagus",
        "heb": "סרקופג"
    },
    {
        "eng": "satellite",
        "heb": "לווין"
    },
    {
        "eng": "satisfaction",
        "heb": "שביעות רצון"
    },
    {
        "eng": "satisfy",
        "heb": "לספק"
    },
    {
        "eng": "saturated",
        "heb": "רווי"
    },
    {
        "eng": "savanna",
        "heb": "סוואנה"
    },
    {
        "eng": "save",
        "heb": "להציל, לשמור, לחסוך"
    },
    {
        "eng": "saw",
        "heb": "מסור"
    },
    {
        "eng": "saw, see",
        "heb": "לראות"
    },
    {
        "eng": "scale",
        "heb": "סולם, קנה מידה, מאזניים"
    },
    {
        "eng": "scales",
        "heb": "קשקשים"
    },
    {
        "eng": "scan",
        "heb": "לסרוק"
    },
    {
        "eng": "scarce",
        "heb": "נדיר"
    },
    {
        "eng": "scare",
        "heb": "פחד"
    },
    {
        "eng": "scatter",
        "heb": "לפזר"
    },
    {
        "eng": "scene",
        "heb": "סצנה"
    },
    {
        "eng": "scenery",
        "heb": "נוף"
    },
    {
        "eng": "schedule",
        "heb": "לוח זמנים"
    },
    {
        "eng": "scholar",
        "heb": "מלומד"
    },
    {
        "eng": "school",
        "heb": "בית-ספר"
    },
    {
        "eng": "science",
        "heb": "מדע"
    },
    {
        "eng": "scientist",
        "heb": "מדען"
    },
    {
        "eng": "score",
        "heb": "תוצאה, ציון, להבקיע"
    },
    {
        "eng": "scorn",
        "heb": "מנודה"
    },
    {
        "eng": "screen",
        "heb": "לסרוק"
    },
    {
        "eng": "script",
        "heb": "תסריט"
    },
    {
        "eng": "scrutinize",
        "heb": "בחן"
    },
    {
        "eng": "sculpture",
        "heb": "פסל"
    },
    {
        "eng": "seafood",
        "heb": "פירות ים"
    },
    {
        "eng": "search",
        "heb": "חיפוש"
    },
    {
        "eng": "season",
        "heb": "עונה, לתבל"
    },
    {
        "eng": "seat",
        "heb": "מושב"
    },
    {
        "eng": "second",
        "heb": "שנייה"
    },
    {
        "eng": "secret",
        "heb": "סוד"
    },
    {
        "eng": "section",
        "heb": "יחידה"
    },
    {
        "eng": "secular",
        "heb": "חילוני"
    },
    {
        "eng": "secure",
        "heb": "להבטיח"
    },
    {
        "eng": "sedative",
        "heb": "משכך"
    },
    {
        "eng": "seeds",
        "heb": "זרעים"
    },
    {
        "eng": "seek",
        "heb": "לבקש"
    },
    {
        "eng": "seek, sought",
        "heb": "לחפש"
    },
    {
        "eng": "seem",
        "heb": "נראה כ-"
    },
    {
        "eng": "segment",
        "heb": "מקטע"
    },
    {
        "eng": "segregation",
        "heb": "הפרדה"
    },
    {
        "eng": "seismic",
        "heb": "ססמי"
    },
    {
        "eng": "seizure",
        "heb": "התקף"
    },
    {
        "eng": "seldom",
        "heb": "לעיתים רחוקות"
    },
    {
        "eng": "select",
        "heb": "לבחור"
    },
    {
        "eng": "selective",
        "heb": "סלקטיבי"
    },
    {
        "eng": "self-confidence",
        "heb": "ביטחון עצמי"
    },
    {
        "eng": "self-indulgence",
        "heb": "סיפוק עצמי"
    },
    {
        "eng": "sell",
        "heb": "למכור"
    },
    {
        "eng": "send",
        "heb": "לשלוח"
    },
    {
        "eng": "senior",
        "heb": "בכיר"
    },
    {
        "eng": "sensation",
        "heb": "תחושה"
    },
    {
        "eng": "sensations",
        "heb": "חדשות מרעישות"
    },
    {
        "eng": "sense",
        "heb": "היגיון"
    },
    {
        "eng": "sensible",
        "heb": "נבון"
    },
    {
        "eng": "sensitive",
        "heb": "רגיש"
    },
    {
        "eng": "sensitivity",
        "heb": "רגישות"
    },
    {
        "eng": "sentence",
        "heb": "משפט, גזר דין"
    },
    {
        "eng": "sentiments",
        "heb": "רגשות"
    },
    {
        "eng": "separately",
        "heb": "בנפרד"
    },
    {
        "eng": "separation",
        "heb": "הפרדה"
    },
    {
        "eng": "sequel",
        "heb": "המשך"
    },
    {
        "eng": "sequence",
        "heb": "רצף"
    },
    {
        "eng": "series",
        "heb": "סדרה"
    },
    {
        "eng": "serious",
        "heb": "רציני"
    },
    {
        "eng": "servant",
        "heb": "משרת"
    },
    {
        "eng": "serve",
        "heb": "לשרת, להגיש"
    },
    {
        "eng": "service",
        "heb": "שירות"
    },
    {
        "eng": "session",
        "heb": "מושב"
    },
    {
        "eng": "set up",
        "heb": "לסדר"
    },
    {
        "eng": "settle",
        "heb": "להסדיר"
    },
    {
        "eng": "several",
        "heb": "אחדים"
    },
    {
        "eng": "severe",
        "heb": "חמור"
    },
    {
        "eng": "shadow",
        "heb": "צל"
    },
    {
        "eng": "shape",
        "heb": "צורה, כושר, לעצב"
    },
    {
        "eng": "share",
        "heb": "לשתף, חלק, מניה"
    },
    {
        "eng": "sharp",
        "heb": "חד"
    },
    {
        "eng": "shatter",
        "heb": "לקעקע"
    },
    {
        "eng": "shave",
        "heb": "לגלח"
    },
    {
        "eng": "sheer",
        "heb": "מוחלט"
    },
    {
        "eng": "sheet",
        "heb": "דף"
    },
    {
        "eng": "shelf (shelves)",
        "heb": "מדף"
    },
    {
        "eng": "shell",
        "heb": "מעטפת"
    },
    {
        "eng": "shelter",
        "heb": "מקלט"
    },
    {
        "eng": "shepherd",
        "heb": "רועה צאן"
    },
    {
        "eng": "shield",
        "heb": "להגן"
    },
    {
        "eng": "shift",
        "heb": "משמרת"
    },
    {
        "eng": "shingles",
        "heb": "שלבקת חוגרת"
    },
    {
        "eng": "shiny",
        "heb": "בוהק"
    },
    {
        "eng": "ship",
        "heb": "אוניה"
    },
    {
        "eng": "shipment",
        "heb": "משלוח"
    },
    {
        "eng": "shop",
        "heb": "חנות"
    },
    {
        "eng": "short",
        "heb": "קצר, נמוך"
    },
    {
        "eng": "shortage",
        "heb": "מחסור"
    },
    {
        "eng": "shortly",
        "heb": "בקיצור"
    },
    {
        "eng": "shoulder",
        "heb": "כתף"
    },
    {
        "eng": "show",
        "heb": "מופע"
    },
    {
        "eng": "shrink",
        "heb": "כיווץ"
    },
    {
        "eng": "shroud",
        "heb": "עטיפה"
    },
    {
        "eng": "shuttle",
        "heb": "מעבורת"
    },
    {
        "eng": "shy",
        "heb": "ביישן"
    },
    {
        "eng": "side",
        "heb": "צד"
    },
    {
        "eng": "side effect",
        "heb": "תופעת לוואי"
    },
    {
        "eng": "sideways",
        "heb": "הצידה"
    },
    {
        "eng": "sight",
        "heb": "כוונת"
    },
    {
        "eng": "sighting",
        "heb": "מראה"
    },
    {
        "eng": "sign",
        "heb": "לחתום"
    },
    {
        "eng": "signal",
        "heb": "אות"
    },
    {
        "eng": "signature",
        "heb": "חתימה"
    },
    {
        "eng": "significance",
        "heb": "משמעות"
    },
    {
        "eng": "significant",
        "heb": "משמעותי"
    },
    {
        "eng": "significantly",
        "heb": "באופן משמעותי"
    },
    {
        "eng": "silent",
        "heb": "שקט"
    },
    {
        "eng": "silently",
        "heb": "בשקט"
    },
    {
        "eng": "silk",
        "heb": "משי"
    },
    {
        "eng": "silkworm",
        "heb": "תולעת משי"
    },
    {
        "eng": "silver",
        "heb": "כסוף"
    },
    {
        "eng": "similar",
        "heb": "דומה"
    },
    {
        "eng": "similarly",
        "heb": "באופן דומה"
    },
    {
        "eng": "simple",
        "heb": "פשוט"
    },
    {
        "eng": "simplicity",
        "heb": "פשטות"
    },
    {
        "eng": "simplify",
        "heb": "לפשט"
    },
    {
        "eng": "simply",
        "heb": "בפשטות"
    },
    {
        "eng": "simulate",
        "heb": "לדמות"
    },
    {
        "eng": "simultaneously",
        "heb": "בו זמנית"
    },
    {
        "eng": "sin",
        "heb": "חטא"
    },
    {
        "eng": "since",
        "heb": "מאז"
    },
    {
        "eng": "sincerity",
        "heb": "כנות"
    },
    {
        "eng": "singer",
        "heb": "זמר"
    },
    {
        "eng": "single",
        "heb": "יחיד, רווק"
    },
    {
        "eng": "sink",
        "heb": "כיור"
    },
    {
        "eng": "sir",
        "heb": "אדוני"
    },
    {
        "eng": "situation",
        "heb": "סיטואציה"
    },
    {
        "eng": "size",
        "heb": "גודל"
    },
    {
        "eng": "skepticism",
        "heb": "ספקנות"
    },
    {
        "eng": "sketch",
        "heb": "סקיצה"
    },
    {
        "eng": "skill",
        "heb": "יכולת"
    },
    {
        "eng": "skin",
        "heb": "עור"
    },
    {
        "eng": "skinned",
        "heb": "פשט עור"
    },
    {
        "eng": "sky",
        "heb": "שמים"
    },
    {
        "eng": "skyrocket",
        "heb": "להאמיר"
    },
    {
        "eng": "skyscraper",
        "heb": "גורד שחקים"
    },
    {
        "eng": "slander",
        "heb": "להשמיץ"
    },
    {
        "eng": "slant",
        "heb": "נטייה"
    },
    {
        "eng": "slate",
        "heb": "להכניס מישהו לרשימה"
    },
    {
        "eng": "slaughter",
        "heb": "טֶבַח"
    },
    {
        "eng": "slaughterhouse",
        "heb": "בית מטבחיים"
    },
    {
        "eng": "slave",
        "heb": "עבד"
    },
    {
        "eng": "slavery",
        "heb": "עבדות"
    },
    {
        "eng": "sleep",
        "heb": "שינה"
    },
    {
        "eng": "slender",
        "heb": "רזה"
    },
    {
        "eng": "slight",
        "heb": "מעט"
    },
    {
        "eng": "slope",
        "heb": "מדרון"
    },
    {
        "eng": "slow",
        "heb": "איטי"
    },
    {
        "eng": "slow down",
        "heb": "להאט"
    },
    {
        "eng": "smog",
        "heb": "ערפיח"
    },
    {
        "eng": "smoke",
        "heb": "עשן"
    },
    {
        "eng": "snake",
        "heb": "נחש"
    },
    {
        "eng": "snap",
        "heb": "לשבור"
    },
    {
        "eng": "snarl",
        "heb": "לנהום"
    },
    {
        "eng": "sneeze",
        "heb": "להתעטש"
    },
    {
        "eng": "snicker",
        "heb": "גיחוך"
    },
    {
        "eng": "snow",
        "heb": "שלג"
    },
    {
        "eng": "so",
        "heb": "אז"
    },
    {
        "eng": "SO",
        "heb": "כל-כך"
    },
    {
        "eng": "so long as",
        "heb": "כל עוד"
    },
    {
        "eng": "so that",
        "heb": "כך ש-"
    },
    {
        "eng": "soar",
        "heb": "להמריא"
    },
    {
        "eng": "sober",
        "heb": "פיכח"
    },
    {
        "eng": "soccer",
        "heb": "כדורגל"
    },
    {
        "eng": "social",
        "heb": "חברתי"
    },
    {
        "eng": "soil",
        "heb": "לכלוך"
    },
    {
        "eng": "sold",
        "heb": "נמכר"
    },
    {
        "eng": "soldier",
        "heb": "חייל"
    },
    {
        "eng": "solely",
        "heb": "רק"
    },
    {
        "eng": "solicit",
        "heb": "לבקש/לחפש בתחינה"
    },
    {
        "eng": "solitary",
        "heb": "מבודד"
    },
    {
        "eng": "solitude",
        "heb": "בדידות"
    },
    {
        "eng": "solution",
        "heb": "פתרון"
    },
    {
        "eng": "solve",
        "heb": "לפתור"
    },
    {
        "eng": "sometimes",
        "heb": "לעיתים"
    },
    {
        "eng": "soon",
        "heb": "בהקדם"
    },
    {
        "eng": "sophisticated",
        "heb": "מתוחכם"
    },
    {
        "eng": "sorrow",
        "heb": "צער"
    },
    {
        "eng": "sort",
        "heb": "למיין"
    },
    {
        "eng": "soul",
        "heb": "נשמה"
    },
    {
        "eng": "sound",
        "heb": "צליל, קול, הגיוני, בריא"
    },
    {
        "eng": "source",
        "heb": "מקור"
    },
    {
        "eng": "South",
        "heb": "דרום"
    },
    {
        "eng": "southern",
        "heb": "דרומי"
    },
    {
        "eng": "space",
        "heb": "חלל"
    },
    {
        "eng": "spacious",
        "heb": "מרווח"
    },
    {
        "eng": "span",
        "heb": "להימתח"
    },
    {
        "eng": "spare",
        "heb": "מיותר"
    },
    {
        "eng": "spark",
        "heb": "ניצוץ"
    },
    {
        "eng": "speak, spoke",
        "heb": "דיבר"
    },
    {
        "eng": "speaker",
        "heb": "דובר"
    },
    {
        "eng": "special",
        "heb": "מיוחד"
    },
    {
        "eng": "specialize",
        "heb": "להתמחות"
    },
    {
        "eng": "species",
        "heb": "מין"
    },
    {
        "eng": "specifically",
        "heb": "במיוחד"
    },
    {
        "eng": "specify",
        "heb": "לפרט"
    },
    {
        "eng": "speck",
        "heb": "כתם"
    },
    {
        "eng": "spectacular",
        "heb": "מדהים"
    },
    {
        "eng": "spectator",
        "heb": "צופה"
    },
    {
        "eng": "speech",
        "heb": "דיבור"
    },
    {
        "eng": "speed",
        "heb": "מהירות"
    },
    {
        "eng": "spell",
        "heb": "לאיית, כישוף, קסם"
    },
    {
        "eng": "spend",
        "heb": "לבלות (זמן), להוציא (כסף)"
    },
    {
        "eng": "sperm",
        "heb": "זרע"
    },
    {
        "eng": "spewing",
        "heb": "להזרים"
    },
    {
        "eng": "spice",
        "heb": "לתבל"
    },
    {
        "eng": "spicy",
        "heb": "פיקנטי"
    },
    {
        "eng": "spider",
        "heb": "עכביש"
    },
    {
        "eng": "spike",
        "heb": "יתד"
    },
    {
        "eng": "spill",
        "heb": "לשפוך"
    },
    {
        "eng": "spinach",
        "heb": "תרד"
    },
    {
        "eng": "spirit",
        "heb": "רוח הדברים"
    },
    {
        "eng": "spiritual",
        "heb": "רוחני"
    },
    {
        "eng": "splendid",
        "heb": "נהדר"
    },
    {
        "eng": "splendor",
        "heb": "פאר"
    },
    {
        "eng": "spoil",
        "heb": "לבזוז"
    },
    {
        "eng": "sponsor",
        "heb": "נותן חסות"
    },
    {
        "eng": "spontaneous",
        "heb": "ספונטני"
    },
    {
        "eng": "spontaneously",
        "heb": "ללא תכנון"
    },
    {
        "eng": "spot",
        "heb": "כתם"
    },
    {
        "eng": "spotlight",
        "heb": "זרקור"
    },
    {
        "eng": "sprang",
        "heb": "נבע"
    },
    {
        "eng": "spray",
        "heb": "לפזר"
    },
    {
        "eng": "spread",
        "heb": "להתפשט"
    },
    {
        "eng": "spring",
        "heb": "אביב, מעיין, קפיץ, לזנק"
    },
    {
        "eng": "spring, sprang",
        "heb": "קפיץ"
    },
    {
        "eng": "spy",
        "heb": "מרגל"
    },
    {
        "eng": "square",
        "heb": "ריבוע, מרובע, כיכר"
    },
    {
        "eng": "stability",
        "heb": "יציבות"
    },
    {
        "eng": "stabilize",
        "heb": "לייצב"
    },
    {
        "eng": "stable",
        "heb": "יציב"
    },
    {
        "eng": "stack",
        "heb": "ערמה"
    },
    {
        "eng": "stadium",
        "heb": "אצטדיון"
    },
    {
        "eng": "stage",
        "heb": "לביים"
    },
    {
        "eng": "stain",
        "heb": "כתם"
    },
    {
        "eng": "staircase",
        "heb": "גרם מדרגות"
    },
    {
        "eng": "stalk",
        "heb": "גבעול"
    },
    {
        "eng": "stamina",
        "heb": "כושר עמידה"
    },
    {
        "eng": "stamp",
        "heb": "חותמת"
    },
    {
        "eng": "stand",
        "heb": "לעמוד"
    },
    {
        "eng": "standard",
        "heb": "רמה"
    },
    {
        "eng": "standardize",
        "heb": "לתקנן"
    },
    {
        "eng": "staple",
        "heb": "להדק"
    },
    {
        "eng": "star",
        "heb": "כוכב"
    },
    {
        "eng": "stark",
        "heb": "עזוב"
    },
    {
        "eng": "start",
        "heb": "להתחיל"
    },
    {
        "eng": "starve",
        "heb": "לרעוב"
    },
    {
        "eng": "state",
        "heb": "מדינה, מצב, להצהיר"
    },
    {
        "eng": "statement",
        "heb": "הצהרה"
    },
    {
        "eng": "station",
        "heb": "תחנה"
    },
    {
        "eng": "statue",
        "heb": "פסל"
    },
    {
        "eng": "staunch",
        "heb": "איתן"
    },
    {
        "eng": "steady",
        "heb": "קבוע"
    },
    {
        "eng": "steal",
        "heb": "לגנוב"
    },
    {
        "eng": "steam",
        "heb": "לאדות"
    },
    {
        "eng": "steamship",
        "heb": "אוניית קיטור"
    },
    {
        "eng": "steel",
        "heb": "פלדה"
    },
    {
        "eng": "stem",
        "heb": "גזע"
    },
    {
        "eng": "step",
        "heb": "צעד, מדרגה, לצעוד"
    },
    {
        "eng": "stereotype",
        "heb": "סטריאוטיפ"
    },
    {
        "eng": "sticky",
        "heb": "דביק"
    },
    {
        "eng": "stiff",
        "heb": "נוקשה"
    },
    {
        "eng": "still",
        "heb": "עדיין"
    },
    {
        "eng": "stimulate",
        "heb": "לעורר"
    },
    {
        "eng": "stock",
        "heb": "מלאי, מניה"
    },
    {
        "eng": "stomach",
        "heb": "בטן"
    },
    {
        "eng": "stone",
        "heb": "אבן"
    },
    {
        "eng": "storage",
        "heb": "אחסון"
    },
    {
        "eng": "store",
        "heb": "חנות, לאחסן"
    },
    {
        "eng": "storm",
        "heb": "סערה"
    },
    {
        "eng": "stove",
        "heb": "תנור"
    },
    {
        "eng": "straighten",
        "heb": "ליישר"
    },
    {
        "eng": "straightforward",
        "heb": "ישיר"
    },
    {
        "eng": "strain",
        "heb": "מתח נפשי"
    },
    {
        "eng": "strange",
        "heb": "מוזר"
    },
    {
        "eng": "strategy",
        "heb": "אסטרטגיה"
    },
    {
        "eng": "stream",
        "heb": "זרם"
    },
    {
        "eng": "strength",
        "heb": "חוזק"
    },
    {
        "eng": "strengthen",
        "heb": "לחזק"
    },
    {
        "eng": "stress",
        "heb": "להדגיש"
    },
    {
        "eng": "stricken",
        "heb": "מוכה"
    },
    {
        "eng": "strict",
        "heb": "נוקשה"
    },
    {
        "eng": "stride",
        "heb": "לצעוד"
    },
    {
        "eng": "strife",
        "heb": "עימות"
    },
    {
        "eng": "strike",
        "heb": "שביתה, מכה, להכות, לתקוף"
    },
    {
        "eng": "stripes",
        "heb": "פסים"
    },
    {
        "eng": "strive",
        "heb": "לשאוף"
    },
    {
        "eng": "stroke",
        "heb": "מכה"
    },
    {
        "eng": "strong",
        "heb": "חזק"
    },
    {
        "eng": "stronghold",
        "heb": "מאחז"
    },
    {
        "eng": "structure",
        "heb": "מבנה"
    },
    {
        "eng": "struggle",
        "heb": "מאמץ"
    },
    {
        "eng": "stubborn",
        "heb": "עקשן"
    },
    {
        "eng": "stuck",
        "heb": "תקוע"
    },
    {
        "eng": "student",
        "heb": "סטודנט, תלמיד"
    },
    {
        "eng": "studio",
        "heb": "סטודיו"
    },
    {
        "eng": "study",
        "heb": "מחקר, חדר עבודה, ללמוד"
    },
    {
        "eng": "stuff",
        "heb": "דברים"
    },
    {
        "eng": "stumble",
        "heb": "למעוד"
    },
    {
        "eng": "stunned",
        "heb": "היה המום"
    },
    {
        "eng": "stunt",
        "פעלול": "פעלול"
    },
    {
        "eng": "stupid",
        "heb": "טיפש"
    },
    {
        "eng": "subdue",
        "heb": "להכניע"
    },
    {
        "eng": "subject",
        "heb": "נתון ל-"
    },
    {
        "eng": "subjective",
        "heb": "אישי"
    },
    {
        "eng": "submit",
        "heb": "להגיש"
    },
    {
        "eng": "subsequent",
        "heb": "עוקב"
    },
    {
        "eng": "subsequently",
        "heb": "כתוצאה מכך"
    },
    {
        "eng": "substance",
        "heb": "תוכן"
    },
    {
        "eng": "substitute",
        "heb": "תחליף"
    },
    {
        "eng": "subtle",
        "heb": "מעודן"
    },
    {
        "eng": "subtraction",
        "heb": "חיסור"
    },
    {
        "eng": "suburban",
        "heb": "פרברי"
    },
    {
        "eng": "succeed",
        "heb": "הצליח"
    },
    {
        "eng": "success",
        "heb": "הצלחה"
    },
    {
        "eng": "successor",
        "heb": "יורש"
    },
    {
        "eng": "such as",
        "heb": "כמו למשל"
    },
    {
        "eng": "suddenly",
        "heb": "לפתע"
    },
    {
        "eng": "suffer",
        "heb": "לסבול"
    },
    {
        "eng": "sufficient",
        "heb": "מספיק"
    },
    {
        "eng": "sugar",
        "heb": "סוכר"
    },
    {
        "eng": "suggest",
        "heb": "להציע"
    },
    {
        "eng": "suicide",
        "heb": "התאבדות"
    },
    {
        "eng": "suitable",
        "heb": "ראוי"
    },
    {
        "eng": "sum",
        "heb": "סכום"
    },
    {
        "eng": "sum up",
        "heb": "לסכם"
    },
    {
        "eng": "summarize",
        "heb": "לסכם"
    },
    {
        "eng": "summary",
        "heb": "סיכום"
    },
    {
        "eng": "summer",
        "heb": "קיץ"
    },
    {
        "eng": "summits",
        "heb": "פסגות"
    },
    {
        "eng": "sundown",
        "heb": "שקיעה"
    },
    {
        "eng": "sunlight",
        "heb": "אור יום"
    },
    {
        "eng": "superb",
        "heb": "מעולה"
    },
    {
        "eng": "superficial",
        "heb": "שטחי"
    },
    {
        "eng": "superfluous",
        "heb": "עודף"
    },
    {
        "eng": "superior",
        "heb": "עליון"
    },
    {
        "eng": "supervise",
        "heb": "לפקח"
    },
    {
        "eng": "supplement",
        "heb": "תוסף"
    },
    {
        "eng": "supply",
        "heb": "אספקה"
    },
    {
        "eng": "support",
        "heb": "תמיכה, לתמוך"
    },
    {
        "eng": "supportive",
        "heb": "תומך"
    },
    {
        "eng": "suppression",
        "heb": "דיכוי"
    },
    {
        "eng": "supreme",
        "heb": "עליון"
    },
    {
        "eng": "surely",
        "heb": "ללא ספק"
    },
    {
        "eng": "surface",
        "heb": "פני שטח"
    },
    {
        "eng": "surgery",
        "heb": "ניתוח"
    },
    {
        "eng": "surpass",
        "heb": "לעלות על"
    },
    {
        "eng": "surprise",
        "heb": "הפתעה"
    },
    {
        "eng": "surprisingly",
        "heb": "במפתיע"
    },
    {
        "eng": "surrender",
        "heb": "להיכנע"
    },
    {
        "eng": "surround",
        "heb": "להקיף"
    },
    {
        "eng": "surrounding",
        "heb": "מקיף"
    },
    {
        "eng": "surveillance",
        "heb": "מעקב"
    },
    {
        "eng": "survey",
        "heb": "לבחון"
    },
    {
        "eng": "survival",
        "heb": "הישרדות"
    },
    {
        "eng": "survive",
        "heb": "לשרוד"
    },
    {
        "eng": "susceptible",
        "heb": "רגישות"
    },
    {
        "eng": "suspect",
        "heb": "חשוד"
    },
    {
        "eng": "suspend",
        "heb": "להשעות"
    },
    {
        "eng": "suspense",
        "heb": "מתח"
    },
    {
        "eng": "suspicious",
        "heb": "חשוד"
    },
    {
        "eng": "sustain",
        "heb": "סבל מ-"
    },
    {
        "eng": "swallow",
        "heb": "לבלוע"
    },
    {
        "eng": "sweep",
        "heb": "לטאטא"
    },
    {
        "eng": "sweet",
        "heb": "מתוק"
    },
    {
        "eng": "swept away",
        "heb": "נסחף"
    },
    {
        "eng": "swift",
        "heb": "מהיר"
    },
    {
        "eng": "swindler",
        "heb": "נוכל"
    },
    {
        "eng": "swing",
        "heb": "נדנדה"
    },
    {
        "eng": "switch",
        "heb": "מתג"
    },
    {
        "eng": "sword",
        "heb": "חרב"
    },
    {
        "eng": "syllable",
        "heb": "הברה"
    },
    {
        "eng": "symbol",
        "heb": "סמל"
    },
    {
        "eng": "symbolize",
        "heb": "לסמל"
    },
    {
        "eng": "symmetry",
        "heb": "התאמה"
    },
    {
        "eng": "sympathetic",
        "heb": "אוהד"
    },
    {
        "eng": "symptom",
        "heb": "סימפטום"
    },
    {
        "eng": "syndrome",
        "heb": "תסמונת"
    },
    {
        "eng": "syrup",
        "heb": "סירופ"
    },
    {
        "eng": "system",
        "heb": "מערכת"
    },
    {
        "eng": "tact",
        "heb": "טקט"
    },
    {
        "eng": "taint",
        "heb": "לזהם"
    },
    {
        "eng": "tainted",
        "heb": "מזוהם"
    },
    {
        "eng": "take place",
        "heb": "התרחש"
    },
    {
        "eng": "tale",
        "heb": "סיפור"
    },
    {
        "eng": "talent",
        "heb": "כשרון"
    },
    {
        "eng": "tame",
        "heb": "לבית"
    },
    {
        "eng": "target",
        "heb": "מטרה"
    },
    {
        "eng": "task",
        "heb": "משימה"
    },
    {
        "eng": "taste",
        "heb": "טעם"
    },
    {
        "eng": "tax",
        "heb": "מס"
    },
    {
        "eng": "teach, taught",
        "heb": "ללמד"
    },
    {
        "eng": "team",
        "heb": "צוות"
    },
    {
        "eng": "teeth, tooth",
        "heb": "שיניים"
    },
    {
        "eng": "temple",
        "heb": "מקדש"
    },
    {
        "eng": "temporary",
        "heb": "זמני"
    },
    {
        "eng": "tempt",
        "heb": "לפתות"
    },
    {
        "eng": "tend",
        "heb": "נוטה"
    },
    {
        "eng": "tendency",
        "heb": "נטייה"
    },
    {
        "eng": "tender",
        "heb": "רך"
    },
    {
        "eng": "tension",
        "heb": "מתח"
    },
    {
        "eng": "tent",
        "heb": "אוהל"
    },
    {
        "eng": "tentative",
        "heb": "טנטטיבי"
    },
    {
        "eng": "tenth 10th",
        "heb": "עשירי"
    },
    {
        "eng": "terminate",
        "heb": "לחסל"
    },
    {
        "eng": "terms",
        "heb": "תנאים"
    },
    {
        "eng": "terrain",
        "heb": "שטח"
    },
    {
        "eng": "terrify",
        "heb": "להבעית"
    },
    {
        "eng": "territory",
        "heb": "תחום"
    },
    {
        "eng": "testify",
        "heb": "להעיד"
    },
    {
        "eng": "texture",
        "heb": "טקסטורה"
    },
    {
        "eng": "than",
        "heb": "מ-"
    },
    {
        "eng": "thank",
        "heb": "להודות"
    },
    {
        "eng": "thanks to",
        "heb": "תודות ל-"
    },
    {
        "eng": "that",
        "heb": "ש-"
    },
    {
        "eng": "theater",
        "heb": "תיאטרון"
    },
    {
        "eng": "theme",
        "heb": "נושא"
    },
    {
        "eng": "then",
        "heb": "אז"
    },
    {
        "eng": "theoretically",
        "heb": "תיאורטית"
    },
    {
        "eng": "theory",
        "heb": "תיאוריה"
    },
    {
        "eng": "there",
        "heb": "שם"
    },
    {
        "eng": "thereby",
        "heb": "ולכן"
    },
    {
        "eng": "therefore",
        "heb": "לכן"
    },
    {
        "eng": "thick",
        "heb": "סמיך"
    },
    {
        "eng": "thief",
        "heb": "גנב"
    },
    {
        "eng": "thimble",
        "heb": "אצבעון"
    },
    {
        "eng": "think, thought",
        "heb": "לחשוב"
    },
    {
        "eng": "though",
        "heb": "למרות זאת"
    },
    {
        "eng": "thousand",
        "heb": "אלף"
    },
    {
        "eng": "threat",
        "heb": "איום"
    },
    {
        "eng": "threaten",
        "heb": "לאיים"
    },
    {
        "eng": "thriller",
        "heb": "מותחן"
    },
    {
        "eng": "thrive",
        "heb": "לשגשג"
    },
    {
        "eng": "through",
        "heb": "מבעד"
    },
    {
        "eng": "throughout",
        "heb": "בכל"
    },
    {
        "eng": "throw",
        "heb": "זריקה"
    },
    {
        "eng": "thus",
        "heb": "לכן"
    },
    {
        "eng": "ticket",
        "heb": "כרטיס"
    },
    {
        "eng": "tie",
        "heb": "עניבה"
    },
    {
        "eng": "tight",
        "heb": "צמוד"
    },
    {
        "eng": "tilt",
        "heb": "שיפוע"
    },
    {
        "eng": "timber",
        "heb": "עץ"
    },
    {
        "eng": "time",
        "heb": "זמן, פעם"
    },
    {
        "eng": "timeline",
        "heb": "ציר זמן"
    },
    {
        "eng": "timid",
        "heb": "ביישן"
    },
    {
        "eng": "tin",
        "heb": "עשוי מפח"
    },
    {
        "eng": "tiny",
        "heb": "קטנטן"
    },
    {
        "eng": "title",
        "heb": "כותרת"
    },
    {
        "eng": "to begin with",
        "heb": "בתור התחלה"
    },
    {
        "eng": "to sum up",
        "heb": "לסכם"
    },
    {
        "eng": "toad",
        "heb": "קרפדה"
    },
    {
        "eng": "toes",
        "heb": "בהונות"
    },
    {
        "eng": "together with",
        "heb": "יחד עם"
    },
    {
        "eng": "tolerance",
        "heb": "סובלנות"
    },
    {
        "eng": "tolerate",
        "heb": "לסבול"
    },
    {
        "eng": "tomb",
        "heb": "קבר"
    },
    {
        "eng": "tone",
        "heb": "טון"
    },
    {
        "eng": "tongue",
        "heb": "לשון"
    },
    {
        "eng": "too",
        "heb": "יותר מידי"
    },
    {
        "eng": "topic",
        "heb": "נושא"
    },
    {
        "eng": "tormented",
        "heb": "לייסר"
    },
    {
        "eng": "totally",
        "heb": "לחלוטין"
    },
    {
        "eng": "touch",
        "heb": "מגע"
    },
    {
        "eng": "tour",
        "heb": "סיור"
    },
    {
        "eng": "tourist",
        "heb": "תייר"
    },
    {
        "eng": "toward",
        "heb": "אל"
    },
    {
        "eng": "tower",
        "heb": "מגדל"
    },
    {
        "eng": "town",
        "heb": "עיר"
    },
    {
        "eng": "toxic",
        "heb": "רעיל"
    },
    {
        "eng": "trace",
        "heb": "למצוא"
    },
    {
        "eng": "track",
        "heb": "מסלול"
    },
    {
        "eng": "trade",
        "heb": "סחר, מסחר, להחליף"
    },
    {
        "eng": "tradition",
        "heb": "מסורת"
    },
    {
        "eng": "traffic",
        "heb": "תנועה"
    },
    {
        "eng": "traffic jam",
        "heb": "פקק תנועה"
    },
    {
        "eng": "train",
        "heb": "להכשיר"
    },
    {
        "eng": "trait",
        "heb": "תכונה"
    },
    {
        "eng": "tranquilize",
        "heb": "להרדים"
    },
    {
        "eng": "transaction",
        "heb": "עסקה"
    },
    {
        "eng": "transcend",
        "heb": "להתעלות"
    },
    {
        "eng": "transcript",
        "heb": "פרוטוקול"
    },
    {
        "eng": "transfer",
        "heb": "להעביר"
    },
    {
        "eng": "transform",
        "heb": "לשנות צורה"
    },
    {
        "eng": "transition",
        "heb": "שינוי"
    },
    {
        "eng": "translate",
        "heb": "לתרגם"
    },
    {
        "eng": "translator",
        "heb": "מתרגם"
    },
    {
        "eng": "transmit",
        "heb": "לשדר"
    },
    {
        "eng": "transmitter",
        "heb": "משדר"
    },
    {
        "eng": "transparent",
        "heb": "שקוף"
    },
    {
        "eng": "transplant",
        "heb": "לשתול"
    },
    {
        "eng": "transport",
        "heb": "הובלה"
    },
    {
        "eng": "transportation",
        "heb": "תחבורה"
    },
    {
        "eng": "trap",
        "heb": "מלכודת"
    },
    {
        "eng": "treasure",
        "heb": "לנצור"
    },
    {
        "eng": "treat",
        "heb": "לטפל, להתייחס, פינוק"
    },
    {
        "eng": "treatment",
        "heb": "טיפול"
    },
    {
        "eng": "treaty",
        "heb": "חוזה"
    },
    {
        "eng": "trial",
        "heb": "משפט, ניסיון"
    },
    {
        "eng": "tribe",
        "heb": "שבט"
    },
    {
        "eng": "trigger",
        "heb": "הדק"
    },
    {
        "eng": "triggered",
        "heb": "הוביל ל"
    },
    {
        "eng": "trim",
        "heb": "לגזום"
    },
    {
        "eng": "trip",
        "heb": "למעוד"
    },
    {
        "eng": "triple",
        "heb": "פי 3"
    },
    {
        "eng": "triumph",
        "heb": "ניצחון"
    },
    {
        "eng": "tropical",
        "heb": "טרופי"
    },
    {
        "eng": "truck",
        "heb": "קרון משא"
    },
    {
        "eng": "truly",
        "heb": "באמת"
    },
    {
        "eng": "trust",
        "heb": "אמון"
    },
    {
        "eng": "truth",
        "heb": "אמת"
    },
    {
        "eng": "tube",
        "heb": "צינור"
    },
    {
        "eng": "turn",
        "heb": "תור, פנייה, להסתובב, לפנות"
    },
    {
        "eng": "tutor",
        "heb": "להדריך"
    },
    {
        "eng": "twig",
        "heb": "זרד"
    },
    {
        "eng": "twins",
        "heb": "תאומים"
    },
    {
        "eng": "twist",
        "heb": "סיבוב"
    },
    {
        "eng": "type",
        "heb": "סוג, להקליד"
    },
    {
        "eng": "typically",
        "heb": "אופייני"
    },
    {
        "eng": "ugly",
        "heb": "מכוער"
    },
    {
        "eng": "ultimate",
        "heb": "סופי"
    },
    {
        "eng": "unattractive",
        "heb": "לא מושך"
    },
    {
        "eng": "unaware",
        "heb": "לא מודע"
    },
    {
        "eng": "unbearable",
        "heb": "בלתי נסבל"
    },
    {
        "eng": "unbelievable",
        "heb": "לא יאמן"
    },
    {
        "eng": "uncertain",
        "heb": "לא בטוח"
    },
    {
        "eng": "uncharted",
        "heb": "לא מתועד"
    },
    {
        "eng": "uncle",
        "heb": "דוד"
    },
    {
        "eng": "unclear",
        "heb": "לא ברור"
    },
    {
        "eng": "unconcerned",
        "heb": "לא מודאג"
    },
    {
        "eng": "unconscious",
        "heb": "מחוסר הכרה"
    },
    {
        "eng": "unconventional",
        "heb": "לא שיגרתי"
    },
    {
        "eng": "uncountable",
        "heb": "אינספור"
    },
    {
        "eng": "uncover",
        "heb": "לחשוף"
    },
    {
        "eng": "uncritical",
        "heb": "לא ביקורתי"
    },
    {
        "eng": "under",
        "heb": "מתחת"
    },
    {
        "eng": "underestimate",
        "heb": "לזלזל"
    },
    {
        "eng": "undergo",
        "heb": "לחוות"
    },
    {
        "eng": "underlies",
        "heb": "מונח ביסוד"
    },
    {
        "eng": "underneath",
        "heb": "מתחת"
    },
    {
        "eng": "understand",
        "heb": "להבין"
    },
    {
        "eng": "undertake",
        "heb": "לקחת על עצמך"
    },
    {
        "eng": "undoubtedly",
        "heb": "ללא ספק"
    },
    {
        "eng": "unearth",
        "heb": "לחפור"
    },
    {
        "eng": "unemployed",
        "heb": "מובטל"
    },
    {
        "eng": "unexplored",
        "heb": "לא נחקר"
    },
    {
        "eng": "unfair",
        "heb": "לא הוגן"
    },
    {
        "eng": "unfamiliar",
        "heb": "לא מוכר"
    },
    {
        "eng": "unfold",
        "heb": "לפתוח קיפול"
    },
    {
        "eng": "unforgettable",
        "heb": "בלתי נשכח"
    },
    {
        "eng": "unfortunate",
        "heb": "מצער"
    },
    {
        "eng": "unfortunately",
        "heb": "למרבה הצער"
    },
    {
        "eng": "unholy",
        "heb": "לא מוסרי"
    },
    {
        "eng": "unify",
        "heb": "לאחד"
    },
    {
        "eng": "unimaginable",
        "heb": "בלתי נתפס"
    },
    {
        "eng": "union",
        "heb": "איגוד"
    },
    {
        "eng": "unique",
        "heb": "מיוחד"
    },
    {
        "eng": "unit",
        "heb": "יחידה"
    },
    {
        "eng": "unite",
        "heb": "לאחד"
    },
    {
        "eng": "universe",
        "heb": "יקום"
    },
    {
        "eng": "unjust",
        "heb": "לא צודק"
    },
    {
        "eng": "unless",
        "heb": "אלא אם כן"
    },
    {
        "eng": "unlike",
        "heb": "שלא כמו"
    },
    {
        "eng": "unlock",
        "heb": "לפתוח"
    },
    {
        "eng": "unnecessary",
        "heb": "לא הכרחי"
    },
    {
        "eng": "unofficial",
        "heb": "בלתי רשמי"
    },
    {
        "eng": "unorganized",
        "heb": "לא מאורגן"
    },
    {
        "eng": "unpardonable",
        "heb": "בלתי נסלח"
    },
    {
        "eng": "unrealistic",
        "heb": "לא מציאותי"
    },
    {
        "eng": "unrest",
        "heb": "חוסר שקט"
    },
    {
        "eng": "unsafe",
        "heb": "לא בטוח"
    },
    {
        "eng": "unstable",
        "heb": "לא יציב"
    },
    {
        "eng": "until",
        "heb": "עד ש-"
    },
    {
        "eng": "until now",
        "heb": "עד עתה"
    },
    {
        "eng": "unusual",
        "heb": "בלתי רגיל"
    },
    {
        "eng": "unwanted",
        "heb": "לא רצוי"
    },
    {
        "eng": "unwilling",
        "heb": "ממאן"
    },
    {
        "eng": "up",
        "heb": "למעלה"
    },
    {
        "eng": "upbringing",
        "heb": "חינוך"
    },
    {
        "eng": "update",
        "heb": "עדכון"
    },
    {
        "eng": "upgrade",
        "heb": "לשדרג"
    },
    {
        "eng": "upheaval",
        "heb": "מהפך"
    },
    {
        "eng": "uphold",
        "heb": "להחזיק"
    },
    {
        "eng": "upholstery",
        "heb": "ריפוד"
    },
    {
        "eng": "upon",
        "heb": "על"
    },
    {
        "eng": "uprising",
        "heb": "התקוממות"
    },
    {
        "eng": "uproar",
        "heb": "מהומה"
    },
    {
        "eng": "upside down",
        "heb": "הפוך"
    },
    {
        "eng": "urban",
        "heb": "עירוני"
    },
    {
        "eng": "urge",
        "heb": "לעודד"
    },
    {
        "eng": "urgent",
        "heb": "דחוף"
    },
    {
        "eng": "urine",
        "heb": "שתן"
    },
    {
        "eng": "use",
        "heb": "שימוש, להשתמש"
    },
    {
        "eng": "useful",
        "heb": "שימושי"
    },
    {
        "eng": "useless",
        "heb": "חסר תועלת"
    },
    {
        "eng": "usher",
        "heb": "סדרן"
    },
    {
        "eng": "using up",
        "heb": "לנצל עד תום"
    },
    {
        "eng": "usual",
        "heb": "רגיל"
    },
    {
        "eng": "usually",
        "heb": "בדרך-כלל"
    },
    {
        "eng": "utilize",
        "heb": "השתמש"
    },
    {
        "eng": "utter",
        "heb": "להגות"
    },
    {
        "eng": "vacant",
        "heb": "ריק"
    },
    {
        "eng": "vacation",
        "heb": "חופשה"
    },
    {
        "eng": "vaccine",
        "heb": "חיסון"
    },
    {
        "eng": "vagueness",
        "heb": "ערפול"
    },
    {
        "eng": "vain",
        "heb": "לשווא"
    },
    {
        "eng": "valid",
        "heb": "תקף"
    },
    {
        "eng": "validate",
        "heb": "אימת"
    },
    {
        "eng": "valley",
        "heb": "עמק"
    },
    {
        "eng": "valuable",
        "heb": "יקר ערך"
    },
    {
        "eng": "value",
        "heb": "ערך"
    },
    {
        "eng": "valve",
        "heb": "שסתום"
    },
    {
        "eng": "vanish",
        "heb": "להיעלם"
    },
    {
        "eng": "variable",
        "heb": "משתנה"
    },
    {
        "eng": "variation",
        "heb": "שינוי"
    },
    {
        "eng": "variety",
        "heb": "מבחר"
    },
    {
        "eng": "various",
        "heb": "מגוון"
    },
    {
        "eng": "vary",
        "heb": "משתנה"
    },
    {
        "eng": "vast",
        "heb": "גדול"
    },
    {
        "eng": "vegetable",
        "heb": "ירק"
    },
    {
        "eng": "vegetarian",
        "heb": "צמחוני"
    },
    {
        "eng": "vehicle",
        "heb": "כלי רכב"
    },
    {
        "eng": "venture",
        "heb": "סיכון"
    },
    {
        "eng": "veracity",
        "heb": "הגינות"
    },
    {
        "eng": "verbal",
        "heb": "מילולי"
    },
    {
        "eng": "verdict",
        "heb": "פסיקה"
    },
    {
        "eng": "verify",
        "heb": "לאמת"
    },
    {
        "eng": "versions",
        "heb": "גרסאות"
    },
    {
        "eng": "vertebrate",
        "heb": "בעל חוליות"
    },
    {
        "eng": "vertical",
        "heb": "מאונך"
    },
    {
        "eng": "vessel",
        "heb": "כלי שיט"
    },
    {
        "eng": "vest",
        "heb": "אפוד"
    },
    {
        "eng": "veteran",
        "heb": "יוצא צבא"
    },
    {
        "eng": "via",
        "heb": "דרך"
    },
    {
        "eng": "vice versa",
        "heb": "להיפך"
    },
    {
        "eng": "victim",
        "heb": "קורבן"
    },
    {
        "eng": "victory",
        "heb": "ניצחון"
    },
    {
        "eng": "view",
        "heb": "נוף, נקודת מבט, לצפות"
    },
    {
        "eng": "viewer",
        "heb": "צופה"
    },
    {
        "eng": "vigorously",
        "heb": "במרץ"
    },
    {
        "eng": "village",
        "heb": "כפר"
    },
    {
        "eng": "villain",
        "heb": "נבל"
    },
    {
        "eng": "vinegar",
        "heb": "חומץ"
    },
    {
        "eng": "violate",
        "heb": "להפר"
    },
    {
        "eng": "violation",
        "heb": "עבירה"
    },
    {
        "eng": "violence",
        "heb": "אלימות"
    },
    {
        "eng": "violent",
        "heb": "אלים"
    },
    {
        "eng": "viper",
        "heb": "צפע"
    },
    {
        "eng": "virtual",
        "heb": "וירטואלי"
    },
    {
        "eng": "virtually",
        "heb": "בעצם"
    },
    {
        "eng": "virtue",
        "heb": "מעלה"
    },
    {
        "eng": "visit",
        "heb": "לבקר"
    },
    {
        "eng": "visitor",
        "heb": "אורח"
    },
    {
        "eng": "visual",
        "heb": "חזותי"
    },
    {
        "eng": "visualize",
        "heb": "לדמיין"
    },
    {
        "eng": "vital",
        "heb": "חיוני"
    },
    {
        "eng": "vivid",
        "heb": "שופע"
    },
    {
        "eng": "vocabulary",
        "heb": "אוצר מילים"
    },
    {
        "eng": "vocation",
        "heb": "מקצוע"
    },
    {
        "eng": "vociferous",
        "heb": "קולני"
    },
    {
        "eng": "voice",
        "heb": "קול"
    },
    {
        "eng": "volume",
        "heb": "כרך"
    },
    {
        "eng": "volunteer",
        "heb": "להתנדב"
    },
    {
        "eng": "vote",
        "heb": "הצבעה, קול (בבחירות), להצביע"
    },
    {
        "eng": "vowel",
        "heb": "תנועה"
    },
    {
        "eng": "voyage",
        "heb": "מסע"
    },
    {
        "eng": "vulnerable",
        "heb": "פגיעות"
    },
    {
        "eng": "wage",
        "heb": "לערוך"
    },
    {
        "eng": "wagon",
        "heb": "עגלה"
    },
    {
        "eng": "wait",
        "heb": "להמתין"
    },
    {
        "eng": "wall",
        "heb": "קיר"
    },
    {
        "eng": "wander",
        "heb": "לשוטט"
    },
    {
        "eng": "want",
        "heb": "לרצות"
    },
    {
        "eng": "wanted",
        "heb": "מבוקש"
    },
    {
        "eng": "war",
        "heb": "מלחמה"
    },
    {
        "eng": "ward",
        "heb": "מחלקה"
    },
    {
        "eng": "warfare",
        "heb": "לוחמה"
    },
    {
        "eng": "warmth",
        "heb": "חום"
    },
    {
        "eng": "warn",
        "heb": "להזהיר"
    },
    {
        "eng": "warning",
        "heb": "אזהרה"
    },
    {
        "eng": "warrior",
        "heb": "לוחם"
    },
    {
        "eng": "wart",
        "heb": "יבלת"
    },
    {
        "eng": "wasp",
        "heb": "צרעה"
    },
    {
        "eng": "waste",
        "heb": "בזבוז"
    },
    {
        "eng": "watch",
        "heb": "להסתכל"
    },
    {
        "eng": "waterfall",
        "heb": "מפל מים"
    },
    {
        "eng": "wave",
        "heb": "גל"
    },
    {
        "eng": "way",
        "heb": "דרך, אופן"
    },
    {
        "eng": "weaken",
        "heb": "להחליש"
    },
    {
        "eng": "wealth",
        "heb": "עושר"
    },
    {
        "eng": "wealthy",
        "heb": "עשיר"
    },
    {
        "eng": "weapon",
        "heb": "נשק"
    },
    {
        "eng": "wear",
        "heb": "ללבוש, לענוד, להישחק"
    },
    {
        "eng": "weather",
        "heb": "מזג אוויר"
    },
    {
        "eng": "weave",
        "heb": "לארוג"
    },
    {
        "eng": "wedding",
        "heb": "חתונה"
    },
    {
        "eng": "weekend",
        "heb": "סוף שבוע"
    },
    {
        "eng": "weigh",
        "heb": "לשקול"
    },
    {
        "eng": "weight",
        "heb": "משקל"
    },
    {
        "eng": "welfare",
        "heb": "סעד"
    },
    {
        "eng": "well",
        "heb": "באר, היטב, בריא"
    },
    {
        "eng": "West",
        "heb": "מערב"
    },
    {
        "eng": "whale",
        "heb": "לוויתן"
    },
    {
        "eng": "what",
        "heb": "מה"
    },
    {
        "eng": "wheat",
        "heb": "חיטה"
    },
    {
        "eng": "when",
        "heb": "כאשר"
    },
    {
        "eng": "whenever",
        "heb": "כש-"
    },
    {
        "eng": "where",
        "heb": "היכן"
    },
    {
        "eng": "whereas",
        "heb": "בעוד ש-"
    },
    {
        "eng": "wherever",
        "heb": "בכל מקום"
    },
    {
        "whether... or...": "בין אם... או...",
        "heb": "בין אם... או..."
    },
    {
        "eng": "which",
        "heb": "איזה"
    },
    {
        "eng": "while",
        "heb": "בזמן ש-"
    },
    {
        "eng": "whistle",
        "heb": "שריקה"
    },
    {
        "eng": "who",
        "heb": "מי"
    },
    {
        "eng": "wholesale",
        "heb": "סיטונאי"
    },
    {
        "eng": "whom",
        "heb": "מי"
    },
    {
        "eng": "whose",
        "heb": "אשר לו"
    },
    {
        "eng": "why",
        "heb": "מדוע"
    },
    {
        "eng": "wickedly",
        "heb": "ברשעות"
    },
    {
        "eng": "wide",
        "heb": "רחב"
    },
    {
        "eng": "widely",
        "heb": "בצורה נרחבת"
    },
    {
        "eng": "widen",
        "heb": "להרחיב"
    },
    {
        "eng": "widespread",
        "heb": "נפוץ"
    },
    {
        "eng": "wife",
        "heb": "אישה"
    },
    {
        "eng": "wild",
        "heb": "פראי"
    },
    {
        "eng": "wilderness",
        "heb": "ערבה"
    },
    {
        "eng": "wildlife",
        "heb": "חיות בר"
    },
    {
        "eng": "willing",
        "heb": "מוכן"
    },
    {
        "eng": "win",
        "heb": "לנצח"
    },
    {
        "eng": "wind",
        "heb": "רוח, ללפף"
    },
    {
        "eng": "wine",
        "heb": "יין"
    },
    {
        "eng": "wing",
        "heb": "כנף"
    },
    {
        "eng": "winter",
        "heb": "חורף"
    },
    {
        "eng": "wisdom",
        "heb": "בינה"
    },
    {
        "eng": "wise",
        "heb": "חכם"
    },
    {
        "eng": "wish",
        "heb": "משאלה"
    },
    {
        "eng": "with",
        "heb": "עם"
    },
    {
        "eng": "withdraw",
        "heb": "לפרוש"
    },
    {
        "eng": "withhold",
        "heb": "לעכב"
    },
    {
        "eng": "within",
        "heb": "בתוך"
    },
    {
        "eng": "without",
        "heb": "מבלי"
    },
    {
        "eng": "withstand",
        "heb": "לעמוד ב"
    },
    {
        "eng": "witness",
        "heb": "להעיד"
    },
    {
        "eng": "wolf (wolves)",
        "heb": "זאב"
    },
    {
        "eng": "wonder",
        "heb": "פלא"
    },
    {
        "eng": "wonderful",
        "heb": "נפלא"
    },
    {
        "eng": "wood",
        "heb": "עץ"
    },
    {
        "eng": "woods",
        "heb": "יער"
    },
    {
        "eng": "wool",
        "heb": "צמר"
    },
    {
        "eng": "work",
        "heb": "עבודה, לעבוד, לפעול"
    },
    {
        "eng": "worldwide",
        "heb": "כלל עולמי"
    },
    {
        "eng": "worm",
        "heb": "תולעת"
    },
    {
        "eng": "worry",
        "heb": "לדאוג"
    },
    {
        "eng": "worse",
        "heb": "גרוע יותר"
    },
    {
        "eng": "worthy",
        "heb": "ראוי"
    },
    {
        "eng": "wound",
        "heb": "פצע"
    },
    {
        "eng": "wrap",
        "heb": "מעטפת"
    },
    {
        "eng": "writer",
        "heb": "סופר"
    },
    {
        "eng": "wrought",
        "heb": "מחושל"
    },
    {
        "eng": "yawn",
        "heb": "לפהק"
    },
    {
        "eng": "yet",
        "heb": "עדיין"
    },
    {
        "eng": "yield",
        "heb": "להיכנע"
    },
    {
        "eng": "young",
        "heb": "צעיר"
    },
    {
        "eng": "zealot",
        "heb": "קנאי"
    },
    {
        "eng": "zone",
        "heb": "אזור"
    },
    {
        "eng": "ZOO",
        "heb": "גן חיות"
    },
    {
        "eng": "abate",
        "heb": "להפחית, להוריד, להמעיט"
    },
    {
        "eng": "aberration",
        "heb": "סטייה מן הנורמה"
    },
    {
        "eng": "abstruse",
        "heb": "קשה להבנה, סתום"
    },
    {
        "eng": "accolade",
        "heb": "תואר כבוד, שבח"
    },
    {
        "eng": "acerbic",
        "heb": "עוקצני, חריף"
    },
    {
        "eng": "acrimony",
        "heb": "מרירות, עוקצנות"
    },
    {
        "eng": "acumen",
        "heb": "חריפות שכל, פקחות"
    },
    {
        "eng": "adamant",
        "heb": "עקשן, נחוש"
    },
    {
        "eng": "admonish",
        "heb": "להזהיר, להוכיח, לנזוף"
    },
    {
        "eng": "adroit",
        "heb": "זריז, מיומן"
    },
    {
        "eng": "adulation",
        "heb": "הערצה עיוורת, חנופה"
    },
    {
        "eng": "aesthetic",
        "heb": "אסתטי, יפה"
    },
    {
        "eng": "affable",
        "heb": "חברותי, נעים הליכות"
    },
    {
        "eng": "alacrity",
        "heb": "זריזות, נכונות"
    },
    {
        "eng": "allay",
        "heb": "להרגיע, לשכך"
    },
    {
        "eng": "alleviate",
        "heb": "להקל (כאב, סבל)"
    },
    {
        "eng": "amalgamate",
        "heb": "למזג, לצרף"
    },
    {
        "eng": "ambiguous",
        "heb": "דו-משמעי, מעורפל"
    },
    {
        "eng": "ambivalent",
        "heb": "דו-ערכי, אמביוולנטי"
    },
    {
        "eng": "ameliorate",
        "heb": "לשפר, להיטיב"
    },
    {
        "eng": "amenable",
        "heb": "מוכן לקבל, צייתן"
    },
    {
        "eng": "anachronism",
        "heb": "כשל כרונולוגי"
    },
    {
        "eng": "analogous",
        "heb": "מקביל, דומה"
    },
    {
        "eng": "anarchy",
        "heb": "אנרכיה, חוסר סדר"
    },
    {
        "eng": "anathema",
        "heb": "חרם, דבר שנוא"
    },
    {
        "eng": "anomaly",
        "heb": "חריגה מהנורמה"
    },
    {
        "eng": "antagonism",
        "heb": "עוינות, התנגדות"
    },
    {
        "eng": "antipathy",
        "heb": "סלידה, דחייה"
    },
    {
        "eng": "apathy",
        "heb": "אדישות"
    },
    {
        "eng": "apocryphal",
        "heb": "מפוקפק, מזויף"
    },
    {
        "eng": "appease",
        "heb": "לפייס, להרגיע"
    },
    {
        "eng": "apprehension",
        "heb": "דאגה, חשש, לכידה"
    },
    {
        "eng": "arbitrary",
        "heb": "שרירותי"
    },
    {
        "eng": "arcane",
        "heb": "סודי, מסתורי"
    },
    {
        "eng": "archaic",
        "heb": "מיושן, ארכאי"
    },
    {
        "eng": "arduous",
        "heb": "מפרך, קשה"
    },
    {
        "eng": "articulate",
        "heb": "רהוט, להתבטא בבהירות"
    },
    {
        "eng": "ascetic",
        "heb": "סגפן"
    },
    {
        "eng": "assuage",
        "heb": "לשכך, להרגיע"
    },
    {
        "eng": "astute",
        "heb": "פיקח, נבון"
    },
    {
        "eng": "atrophy",
        "heb": "ניוון"
    },
    {
        "eng": "attenuate",
        "heb": "להחליש, להפחית"
    },
    {
        "eng": "audacious",
        "heb": "נועז, חצוף"
    },
    {
        "eng": "augment",
        "heb": "להגדיל, להרבות"
    },
    {
        "eng": "austere",
        "heb": "חמור סבר, פשוט, צנוע"
    },
    {
        "eng": "avarice",
        "heb": "חמדנות, תאוות בצע"
    },
    {
        "eng": "aversion",
        "heb": "סלידה"
    },
    {
        "eng": "avow",
        "heb": "להצהיר, להודות"
    },
    {
        "eng": "banal",
        "heb": "בנאלי, שגרתי"
    },
    {
        "eng": "belie",
        "heb": "להפריך, להסוות"
    },
    {
        "eng": "belligerent",
        "heb": "לוחמני, עוין"
    },
    {
        "eng": "benefactor",
        "heb": "נדבן, תורם"
    },
    {
        "eng": "benevolent",
        "heb": "נדיב, טוב לב"
    },
    {
        "eng": "benign",
        "heb": "שפיר, טוב לב"
    },
    {
        "eng": "bolster",
        "heb": "לתמוך, לחזק"
    },
    {
        "eng": "bombastic",
        "heb": "בומבסטי, מוגזם"
    },
    {
        "eng": "boorish",
        "heb": "גס רוח, חסר תרבות"
    },
    {
        "eng": "bucolic",
        "heb": "פסטורלי, כפרי"
    },
    {
        "eng": "burgeon",
        "heb": "ללבלב, להתפתח במהירות"
    },
    {
        "eng": "buttress",
        "heb": "לתמוך, לחזק"
    },
    {
        "eng": "cacophony",
        "heb": "צרימה, קקופוניה"
    },
    {
        "eng": "cajole",
        "heb": "לשדל, לפתות"
    },
    {
        "eng": "callous",
        "heb": "אטום, חסר רגש"
    },
    {
        "eng": "calumny",
        "heb": "השמצה, עלילה"
    },
    {
        "eng": "camaraderie",
        "heb": "אחווה, חברות"
    },
    {
        "eng": "candid",
        "heb": "כנה, גלוי לב"
    },
    {
        "eng": "cantankerous",
        "heb": "נרגן, רגזן"
    },
    {
        "eng": "capitulate",
        "heb": "להיכנע"
    },
    {
        "eng": "capricious",
        "heb": "קפריזי, הפכפך"
    },
    {
        "eng": "captious",
        "heb": "ביקורתי מדי, קנטרני"
    },
    {
        "eng": "castigate",
        "heb": "לנזוף, להעניש בחומרה"
    },
    {
        "eng": "catalyst",
        "heb": "זרז, קטליזטור"
    },
    {
        "eng": "caustic",
        "heb": "צורב, עוקצני"
    },
    {
        "eng": "cavalier",
        "heb": "יהיר, מזלזל"
    },
    {
        "eng": "censure",
        "heb": "לגנות, נזיפה"
    },
    {
        "eng": "chicanery",
        "heb": "תכסיסנות, רמאות"
    },
    {
        "eng": "chronological",
        "heb": "כרונולוגי"
    },
    {
        "eng": "circumlocution",
        "heb": "דיבור עקיף"
    },
    {
        "eng": "circumspect",
        "heb": "זהיר, שקול"
    },
    {
        "eng": "clandestine",
        "heb": "חשאי, סודי"
    },
    {
        "eng": "clemency",
        "heb": "רחמים, חנינה"
    },
    {
        "eng": "coalesce",
        "heb": "להתאחד, להתמזג"
    },
    {
        "eng": "cogent",
        "heb": "משכנע, הגיוני"
    },
    {
        "eng": "cognitive",
        "heb": "קוגניטיבי, הכרתי"
    },
    {
        "eng": "commensurate",
        "heb": "הולם, יחסי, פרופורציונלי"
    },
    {
        "eng": "compendium",
        "heb": "אוסף, לקט"
    },
    {
        "eng": "complacent",
        "heb": "שאנן, שבע רצון מעצמו"
    },
    {
        "eng": "complaisant",
        "heb": "מנומס, צייתן"
    },
    {
        "eng": "compliance",
        "heb": "היענות, ציות"
    },
    {
        "eng": "conciliatory",
        "heb": "פייסני"
    },
    {
        "eng": "conclusive",
        "heb": "מכריע, סופי"
    },
    {
        "eng": "concur",
        "heb": "להסכים, להתרחש בו זמנית"
    },
    {
        "eng": "condescending",
        "heb": "מתנשא"
    },
    {
        "eng": "condone",
        "heb": "למחול, להעלים עין"
    },
    {
        "eng": "confound",
        "heb": "לבלבל, להביך"
    },
    {
        "eng": "congenial",
        "heb": "ידידותי, נעים"
    },
    {
        "eng": "conjecture",
        "heb": "השערה, להניח"
    },
    {
        "eng": "connoisseur",
        "heb": "מומחה, אנין טעם"
    },
    {
        "eng": "consecrate",
        "heb": "לקדש"
    },
    {
        "eng": "contentious",
        "heb": "פולמוסי, אוהב ויכוחים"
    },
    {
        "eng": "contiguous",
        "heb": "סמוך, גובל"
    },
    {
        "eng": "contrite",
        "heb": "מלא חרטה"
    },
    {
        "eng": "conundrum",
        "heb": "חידה, בעיה קשה"
    },
    {
        "eng": "convoluted",
        "heb": "מפותל, מסובך"
    },
    {
        "eng": "copious",
        "heb": "שופע, רב"
    },
    {
        "eng": "corroborate",
        "heb": "לאמת, לאשר"
    },
    {
        "eng": "cosmopolitan",
        "heb": "קוסמופוליטי, כלל עולמי"
    },
    {
        "eng": "craven",
        "heb": "פחדן, מוג לב"
    },
    {
        "eng": "credulous",
        "heb": "פתי, מאמין לכל דבר"
    },
    {
        "eng": "cryptic",
        "heb": "חידתי, נסתר"
    },
    {
        "eng": "culmination",
        "heb": "שיא, פסגה"
    },
    {
        "eng": "culpable",
        "heb": "אשם, ראוי לעונש"
    },
    {
        "eng": "cursory",
        "heb": "חטוף, שטחי"
    },
    {
        "eng": "curtail",
        "heb": "לקצץ, להפחית"
    },
    {
        "eng": "cynical",
        "heb": "ציני"
    },
    {
        "eng": "dearth",
        "heb": "מחסור, רעב"
    },
    {
        "eng": "debacle",
        "heb": "מפלה, תבוסה, קריסה"
    },
    {
        "eng": "debilitate",
        "heb": "להחליש"
    },
    {
        "eng": "debunk",
        "heb": "לחשוף את האמת, לנפץ (מיתוס)"
    },
    {
        "eng": "decorum",
        "heb": "נימוס, הליכות"
    },
    {
        "eng": "deference",
        "heb": "כבוד, היענות"
    },
    {
        "eng": "deleterious",
        "heb": "מזיק"
    },
    {
        "eng": "delineate",
        "heb": "לשרטט, לתאר"
    },
    {
        "eng": "demagogue",
        "heb": "דמגוג"
    },
    {
        "eng": "demur",
        "heb": "להסתייג, להתנגד"
    },
    {
        "eng": "denigrate",
        "heb": "להשמיץ, לזלזל"
    },
    {
        "eng": "deplore",
        "heb": "להצטער, לגנות"
    },
    {
        "eng": "depravity",
        "heb": "שחיתות, מוסר ירוד"
    },
    {
        "eng": "deprecation",
        "heb": "הסתייגות, גינוי"
    },
    {
        "eng": "deride",
        "heb": "ללעוג, לשים לקרז"
    },
    {
        "eng": "derivative",
        "heb": "נגזרת, לא מקורי"
    },
    {
        "eng": "desiccate",
        "heb": "לייבש"
    },
    {
        "eng": "despondent",
        "heb": "מדוכדך, מיואש"
    },
    {
        "eng": "despot",
        "heb": "רודן, טירן"
    },
    {
        "eng": "destitute",
        "heb": "חסר כל, עני"
    },
    {
        "eng": "desultory",
        "heb": "אקראי, לא שיטתי"
    },
    {
        "eng": "deter",
        "heb": "להרתיע"
    },
    {
        "eng": "detract",
        "heb": "להפחית, לגרוע"
    },
    {
        "eng": "detrimental",
        "heb": "מזיק"
    },
    {
        "eng": "deviate",
        "heb": "לסטות"
    },
    {
        "eng": "devious",
        "heb": "ערמומי, עוקף"
    },
    {
        "eng": "dexterous",
        "heb": "מיומן, זריז"
    },
    {
        "eng": "dichotomy",
        "heb": "דיכוטומיה, פיצול"
    },
    {
        "eng": "didactic",
        "heb": "דידקטי, לימודי"
    },
    {
        "eng": "diffident",
        "heb": "חסר ביטחון, ביישן"
    },
    {
        "eng": "digress",
        "heb": "לסטות מהנושא"
    },
    {
        "eng": "dilatory",
        "heb": "משתהה, דוחה"
    },
    {
        "eng": "dilettante",
        "heb": "חובבן"
    },
    {
        "eng": "diligent",
        "heb": "שקדן, חרוץ"
    },
    {
        "eng": "diminutive",
        "heb": "זעיר"
    },
    {
        "eng": "discern",
        "heb": "להבחין, לתפוס"
    },
    {
        "eng": "discomfit",
        "heb": "להביך, לסכל"
    },
    {
        "eng": "discord",
        "heb": "חוסר הרמוניה, סכסוך"
    },
    {
        "eng": "discrepancy",
        "heb": "פער, סתירה"
    },
    {
        "eng": "discrete",
        "heb": "נפרד, מובחן"
    },
    {
        "eng": "discretion",
        "heb": "שיקול דעת, דיסקרטיות"
    },
    {
        "eng": "discriminate",
        "heb": "להפלות, להבחין"
    },
    {
        "eng": "disdain",
        "heb": "בוז, לזלזל"
    },
    {
        "eng": "disingenuous",
        "heb": "לא כנה, ערמומי"
    },
    {
        "eng": "disparage",
        "heb": "לזלזל, להמעיט בערך"
    },
    {
        "eng": "disparate",
        "heb": "שונה, נבדל"
    },
    {
        "eng": "disseminate",
        "heb": "להפיץ"
    },
    {
        "eng": "dissent",
        "heb": "התנגדות, חילוקי דעות"
    },
    {
        "eng": "dissonance",
        "heb": "דיסוננס, צרימה"
    },
    {
        "eng": "distill",
        "heb": "לזקק"
    },
    {
        "eng": "diverge",
        "heb": "להתפצל, לסטות"
    },
    {
        "eng": "diverse",
        "heb": "מגוון"
    },
    {
        "eng": "divest",
        "heb": "לשלול, להחרים"
    },
    {
        "eng": "dogmatic",
        "heb": "דוגמטי, פוסקני"
    },
    {
        "eng": "dormant",
        "heb": "רדום"
    },
    {
        "eng": "dubious",
        "heb": "מפוקפק"
    },
    {
        "eng": "duplicity",
        "heb": "צביעות, הונאה"
    },
    {
        "eng": "ebullient",
        "heb": "נלהב, שופע מרץ"
    },
    {
        "eng": "eccentric",
        "heb": "תמהוני, מוזר"
    },
    {
        "eng": "eclectic",
        "heb": "אקלקטי, מלוקט ממקורות שונים"
    },
    {
        "eng": "edify",
        "heb": "להחכים, להדריך"
    },
    {
        "eng": "efface",
        "heb": "למחוק, לטשטש"
    },
    {
        "eng": "efficacy",
        "heb": "יעילות"
    },
    {
        "eng": "effigy",
        "heb": "דמות, בובה (לרוב לשריפה כמחאה)"
    },
    {
        "eng": "effrontery",
        "heb": "חוצפה, עזות מצח"
    },
    {
        "eng": "egalitarian",
        "heb": "דוגל בשוויון"
    },
    {
        "eng": "egregious",
        "heb": "שערורייתי, בולט לרעה"
    },
    {
        "eng": "elegy",
        "heb": "קינה, שיר אבל"
    },
    {
        "eng": "elicit",
        "heb": "להפיק, לדלות"
    },
    {
        "eng": "elucidate",
        "heb": "להבהיר, להסביר"
    },
    {
        "eng": "elusive",
        "heb": "חמקמק"
    },
    {
        "eng": "embellish",
        "heb": "לקשט, לעטר"
    },
    {
        "eng": "embezzle",
        "heb": "למעול (בכסף)"
    },
    {
        "eng": "emulate",
        "heb": "לחקות, להתחרות"
    },
    {
        "eng": "endemic",
        "heb": "אנדמי, מקומי"
    },
    {
        "eng": "enervate",
        "heb": "להחליש, להתיש"
    },
    {
        "eng": "engender",
        "heb": "ליצור, לגרום"
    },
    {
        "eng": "enigma",
        "heb": "תעלומה, חידה"
    },
    {
        "eng": "enmity",
        "heb": "איבה, עוינות"
    },
    {
        "eng": "ennui",
        "heb": "שעמום, לאות"
    },
    {
        "eng": "entail",
        "heb": "לגרור, להצריך"
    },
    {
        "eng": "ephemeral",
        "heb": "חולף, זמני"
    },
    {
        "eng": "epitome",
        "heb": "התגלמות, תמצית"
    },
    {
        "eng": "equanimity",
        "heb": "קור רוח, שלווה"
    },
    {
        "eng": "equivocal",
        "heb": "דו-משמעי, מעורפל"
    },
    {
        "eng": "eradicate",
        "heb": "למגר, להשמיד"
    },
    {
        "eng": "erratic",
        "heb": "בלתי צפוי, לא סדיר"
    },
    {
        "eng": "erudite",
        "heb": "מלומד, משכיל"
    },
    {
        "eng": "esoteric",
        "heb": "אזוטרי, מובן למעטים"
    },
    {
        "eng": "espouse",
        "heb": "לתמוך (ברעיון), לאמץ"
    },
    {
        "eng": "estimable",
        "heb": "ראוי להערכה"
    },
    {
        "eng": "eulogy",
        "heb": "הספד"
    },
    {
        "eng": "euphemism",
        "heb": "לשון סגי נהור, ביטוי מעודן"
    },
    {
        "eng": "exacerbate",
        "heb": "להחמיר"
    },
    {
        "eng": "exact",
        "heb": "לדרוש, לגבות, מדויק"
    },
    {
        "eng": "exalt",
        "heb": "לרומם, לשבח"
    },
    {
        "eng": "exasperate",
        "heb": "להרגיז, להקניט"
    },
    {
        "eng": "exculpate",
        "heb": "לזכות, לטהר מאשמה"
    },
    {
        "eng": "execrable",
        "heb": "נתעב, גרוע מאוד"
    },
    {
        "eng": "exhort",
        "heb": "להפציר, לעודד"
    },
    {
        "eng": "exigent",
        "heb": "דחוף, מחייב"
    },
    {
        "eng": "exonerate",
        "heb": "לזכות מאשמה"
    },
    {
        "eng": "exorbitant",
        "heb": "מוגזם (במיוחד מחיר)"
    },
    {
        "eng": "exotic",
        "heb": "אקזוטי, זר"
    },
    {
        "eng": "expatiate",
        "heb": "להרחיב בדיבור"
    },
    {
        "eng": "expedient",
        "heb": "מועיל, כדאי"
    },
    {
        "eng": "expedite",
        "heb": "לזרז"
    },
    {
        "eng": "explicit",
        "heb": "מפורש, ברור"
    },
    {
        "eng": "expunge",
        "heb": "למחוק, להשמיד"
    },
    {
        "eng": "extemporaneous",
        "heb": "מאולתר, ללא הכנה"
    },
    {
        "eng": "extol",
        "heb": "לשבח, להלל"
    },
    {
        "eng": "extraneous",
        "heb": "חיצוני, לא שייך"
    },
    {
        "eng": "extrapolate",
        "heb": "להקיש, לאמוד"
    },
    {
        "eng": "extricate",
        "heb": "לחלץ, לשחרר"
    },
    {
        "eng": "extrinsic",
        "heb": "חיצוני, לא מהותי"
    },
    {
        "eng": "exuberant",
        "heb": "שופע חיוניות, נלהב"
    },
    {
        "eng": "fabricate",
        "heb": "לבדוק, לפברק, לייצר"
    },
    {
        "eng": "facetious",
        "heb": "בדחני, לא רציני"
    },
    {
        "eng": "facile",
        "heb": "קל, פשטני"
    },
    {
        "eng": "fallacious",
        "heb": "מוטעה, שקרי"
    },
    {
        "eng": "fastidious",
        "heb": "בררן, אנין טעם"
    },
    {
        "eng": "fathom",
        "heb": "לרדת לסוף דעתו, להבין"
    },
    {
        "eng": "fatuous",
        "heb": "אווילי, טיפשי"
    },
    {
        "eng": "fawning",
        "heb": "מתחנף, מתרפס"
    },
    {
        "eng": "feasible",
        "heb": "מעשי, בר ביצוע"
    },
    {
        "eng": "feckless",
        "heb": "חסר אחריות, חסר תועלת"
    },
    {
        "eng": "fecund",
        "heb": "פורה, עתיר יבול"
    },
    {
        "eng": "feign",
        "heb": "להעמיד פנים"
    },
    {
        "eng": "fervent",
        "heb": "נלהב, עז"
    },
    {
        "eng": "fickle",
        "heb": "הפכפך"
    },
    {
        "eng": "fidelity",
        "heb": "נאמנות"
    },
    {
        "eng": "figurative",
        "heb": "ציורי, מטפורי"
    },
    {
        "eng": "flagrant",
        "heb": "בוטה, מזעזע"
    },
    {
        "eng": "fleeting",
        "heb": "חולף, זמני"
    },
    {
        "eng": "florid",
        "heb": "סמוק, מצועצע"
    },
    {
        "eng": "flout",
        "heb": "לזלזל, להפר בבוטות"
    },
    {
        "eng": "fluctuate",
        "heb": "להתנדנד, להשתנות"
    },
    {
        "eng": "foment",
        "heb": "לעורר, להסית"
    },
    {
        "eng": "forestall",
        "heb": "לעכב, למנוע מראש"
    },
    {
        "eng": "formidable",
        "heb": "מטיל אימה, קשה להתמודדות"
    },
    {
        "eng": "fortuitous",
        "heb": "מקרי, מזדמן"
    },
    {
        "eng": "fractious",
        "heb": "נרגן, קשה לשליטה"
    },
    {
        "eng": "frivolous",
        "heb": "קל דעת, שטותי"
    },
    {
        "eng": "frugal",
        "heb": "חסכני"
    },
    {
        "eng": "furtive",
        "heb": "חמקני, סודי"
    },
    {
        "eng": "futile",
        "heb": "עקר, חסר תועלת"
    },
    {
        "eng": "gainsay",
        "heb": "להכחיש, לסתור"
    },
    {
        "eng": "galvanize",
        "heb": "לעורר לפעולה, לחשמל"
    },
    {
        "eng": "garrulous",
        "heb": "פטפטן"
    },
    {
        "eng": "gauche",
        "heb": "חסר טאקט, מגושם"
    },
    {
        "eng": "germane",
        "heb": "רלוונטי, שייך לעניין"
    },
    {
        "eng": "glib",
        "heb": "חלקלק (בדיבור)"
    },
    {
        "eng": "grandiloquent",
        "heb": "מליצי, פומפוזי"
    },
    {
        "eng": "gregarious",
        "heb": "חברותי, חי בעדר"
    },
    {
        "eng": "guile",
        "heb": "ערמומיות, מרמה"
    },
    {
        "eng": "gullible",
        "heb": "פתי, נוח להשפעה"
    },
    {
        "eng": "hackneyed",
        "heb": "נדוש, שחוק"
    },
    {
        "eng": "halcyon",
        "heb": "שליו, רגוע"
    },
    {
        "eng": "hapless",
        "heb": "אומלל, חסר מזל"
    },
    {
        "eng": "harangue",
        "heb": "נאום תוכחה"
    },
    {
        "eng": "harbinger",
        "heb": "מבשר"
    },
    {
        "eng": "haughty",
        "heb": "יהיר, מתנשא"
    },
    {
        "eng": "hedonism",
        "heb": "נהנתנות"
    },
    {
        "eng": "hegemony",
        "heb": "הגמוניה, שלטון"
    },
    {
        "eng": "heresy",
        "heb": "כפירה"
    },
    {
        "eng": "heterogeneous",
        "heb": "הטרוגני, מגוון"
    },
    {
        "eng": "hierarchy",
        "heb": "היררכיה"
    },
    {
        "eng": "homogenous",
        "heb": "הומוגני, אחיד"
    },
    {
        "eng": "hyperbole",
        "heb": "הגזמה"
    },
    {
        "eng": "hypocritical",
        "heb": "צבוע"
    },
    {
        "eng": "hypothetical",
        "heb": "היפותטי, משוער"
    },
    {
        "eng": "iconoclast",
        "heb": "מנפץ מוסכמות"
    },
    {
        "eng": "idiosyncratic",
        "heb": "ייחודי, אופייני לאדם"
    },
    {
        "eng": "ignominy",
        "heb": "קלון, חרפה"
    },
    {
        "eng": "illicit",
        "heb": "לא חוקי, אסור"
    },
    {
        "eng": "illuminate",
        "heb": "להאיר, להבהיר"
    },
    {
        "eng": "illusory",
        "heb": "אשלייתי"
    },
    {
        "eng": "immutable",
        "heb": "בלתי משתנה"
    },
    {
        "eng": "impartial",
        "heb": "בלתי תלוי, אובייקטיבי"
    },
    {
        "eng": "impeccable",
        "heb": "ללא דופי, מושלם"
    },
    {
        "eng": "impecunious",
        "heb": "עני, חסר פרוטה"
    },
    {
        "eng": "impediment",
        "heb": "מכשול, פגם"
    },
    {
        "eng": "imperious",
        "heb": "שתלטן, יהיר"
    },
    {
        "eng": "imperturbable",
        "heb": "שליו, שאי אפשר להרגיז אותו"
    },
    {
        "eng": "impervious",
        "heb": "אטום, חסין"
    },
    {
        "eng": "impetuous",
        "heb": "פזיז, אימפולסיבי"
    },
    {
        "eng": "implacable",
        "heb": "שלא ניתן לפייסו"
    },
    {
        "eng": "implicit",
        "heb": "מרומז, משתמע"
    },
    {
        "eng": "implore",
        "heb": "להפציר, להתחנן"
    },
    {
        "eng": "importune",
        "heb": "להטריד בבקשות"
    },
    {
        "eng": "impoverished",
        "heb": "מרושש, עני"
    },
    {
        "eng": "impregnable",
        "heb": "בלתי חדיר, חסין"
    },
    {
        "eng": "impromptu",
        "heb": "ללא הכנה, מאולתר"
    },
    {
        "eng": "impudent",
        "heb": "חצוף"
    },
    {
        "eng": "impugn",
        "heb": "לפקפק, לערער"
    },
    {
        "eng": "inadvertent",
        "heb": "לא מכוון, בשוגג"
    },
    {
        "eng": "inane",
        "heb": "טיפשי, חסר משמעות"
    },
    {
        "eng": "inauspicious",
        "heb": "מבשר רעות, חסר סיכוי"
    },
    {
        "eng": "incandescent",
        "heb": "זוהר, לוהט"
    },
    {
        "eng": "incantation",
        "heb": "לחש, כישוף"
    },
    {
        "eng": "incapacitate",
        "heb": "לשלול יכולת, להשבית"
    },
    {
        "eng": "incense",
        "heb": "להכעיס מאוד, קטורת"
    },
    {
        "eng": "incessant",
        "heb": "בלתי פוסק, תדיר"
    },
    {
        "eng": "inchoate",
        "heb": "בשלב התחלתי, לא מגובש"
    },
    {
        "eng": "incipient",
        "heb": "מתחיל, בראשיתו"
    },
    {
        "eng": "incisive",
        "heb": "חודר, חד, קולע"
    },
    {
        "eng": "inclination",
        "heb": "נטייה"
    },
    {
        "eng": "incongruous",
        "heb": "לא תואם, לא הולם"
    },
    {
        "eng": "incorrigible",
        "heb": "חסר תקנה, שאי אפשר לתקנו"
    },
    {
        "eng": "incredulous",
        "heb": "ספקני, לא מאמין"
    },
    {
        "eng": "inculcate",
        "heb": "להחדיר, לשנן"
    },
    {
        "eng": "incumbent",
        "heb": "מכהן, מוטל על"
    },
    {
        "eng": "indefatigable",
        "heb": "בלתי נלאה"
    },
    {
        "eng": "indigenous",
        "heb": "יליד המקום, טבעי"
    },
    {
        "eng": "indigent",
        "heb": "עני, חסר כל"
    },
    {
        "eng": "indignant",
        "heb": "זועם, ממורמר"
    },
    {
        "eng": "indolent",
        "heb": "עצלן"
    },
    {
        "eng": "indomitable",
        "heb": "בלתי מנוצח, עז רוח"
    },
    {
        "eng": "indubitable",
        "heb": "שלא ניתן להטיל בו ספק"
    },
    {
        "eng": "induce",
        "heb": "לגרום, להשפיע"
    },
    {
        "eng": "ineffable",
        "heb": "שלא ניתן לתארו במילים"
    },
    {
        "eng": "inept",
        "heb": "לא יוצלח, חסר כישור"
    },
    {
        "eng": "inexorable",
        "heb": "בלתי נמנע, שאינו מוותר"
    },
    {
        "eng": "infamous",
        "heb": "ידוע לשמצה"
    },
    {
        "eng": "infer",
        "heb": "להסיק"
    },
    {
        "eng": "infinitesimal",
        "heb": "זעיר ביותר, אינסופי"
    },
    {
        "eng": "ingenuous",
        "heb": "תמים, כנה"
    },
    {
        "eng": "inherent",
        "heb": "טבוע, פנימי"
    },
    {
        "eng": "inimical",
        "heb": "עוין, מזיק"
    },
    {
        "eng": "iniquity",
        "heb": "רשעות, חטא"
    },
    {
        "eng": "innocuous",
        "heb": "לא מזיק, תמים"
    },
    {
        "eng": "innovate",
        "heb": "לחדש"
    },
    {
        "eng": "inordinate",
        "heb": "מוגזם, חריג"
    },
    {
        "eng": "insidious",
        "heb": "בוגדני, חתרני"
    },
    {
        "eng": "insipid",
        "heb": "תפל, חסר טעם"
    },
    {
        "eng": "insolent",
        "heb": "חצוף, עז מצח"
    },
    {
        "eng": "instigate",
        "heb": "להסית, לעורר"
    },
    {
        "eng": "insular",
        "heb": "מבודד, צר אופקים"
    },
    {
        "eng": "insurgent",
        "heb": "מורד"
    },
    {
        "eng": "integral",
        "heb": "בלתי נפרד, חיוני"
    },
    {
        "eng": "intractable",
        "heb": "קשה לטיפול, עקשן"
    },
    {
        "eng": "intransigent",
        "heb": "לא מתפשר, עקשן"
    },
    {
        "eng": "intrepid",
        "heb": "אמיץ, חסר פחד"
    },
    {
        "eng": "intrinsic",
        "heb": "פנימי, מהותי"
    },
    {
        "eng": "inundate",
        "heb": "להציף, להציף (במידע)"
    },
    {
        "eng": "inure",
        "heb": "להרגיל (למשהו לא נעים)"
    },
    {
        "eng": "invalidate",
        "heb": "לבטל, לפסול"
    },
    {
        "eng": "invective",
        "heb": "קללה, גידוף"
    },
    {
        "eng": "inveterate",
        "heb": "מושרש, כרוני"
    },
    {
        "eng": "invidious",
        "heb": "מעורר טינה, מקפח"
    },
    {
        "eng": "inviolable",
        "heb": "שאין לחלל אותו, קדוש"
    },
    {
        "eng": "irascible",
        "heb": "רגזן, חמום מוח"
    },
    {
        "eng": "irresolute",
        "heb": "הססן, חסר החלטיות"
    },
    {
        "eng": "irrevocable",
        "heb": "שלא ניתן לביטול"
    },
    {
        "eng": "jaded",
        "heb": "סחוט, שבע (מרוב ניסיון)"
    },
    {
        "eng": "jargon",
        "heb": "עגה מקצועית"
    },
    {
        "eng": "jaundiced",
        "heb": "ממורמר, בעל דעה קדומה"
    },
    {
        "eng": "jejune",
        "heb": "ילדותי, משעמם, תפל"
    },
    {
        "eng": "jeopardy",
        "heb": "סכנה"
    },
    {
        "eng": "jettison",
        "heb": "להשליך, להיפטר מ-"
    },
    {
        "eng": "jocular",
        "heb": "בדחני, הומוריסטי"
    },
    {
        "eng": "judicious",
        "heb": "נבון, שקול"
    },
    {
        "eng": "juxtaposition",
        "heb": "הצבה זה לצד זה"
    },
    {
        "eng": "kindle",
        "heb": "להצית, לעורר"
    },
    {
        "eng": "kinetic",
        "heb": "קינטי, של תנועה"
    },
    {
        "eng": "knell",
        "heb": "צלצול פעמון (לרוב אבל)"
    },
    {
        "eng": "kudos",
        "heb": "כבוד, תהילה"
    },
    {
        "eng": "labyrinth",
        "heb": "מבוך"
    },
    {
        "eng": "laceration",
        "heb": "קרע, חתך עמוק"
    },
    {
        "eng": "lachrymose",
        "heb": "בכיין, נוטה לדמעות"
    },
    {
        "eng": "lackadaisical",
        "heb": "חסר מרץ, אדיש"
    },
    {
        "eng": "laconic",
        "heb": "תמציתי, קצר במילים"
    },
    {
        "eng": "lament",
        "heb": "לקונן, להתאבל"
    },
    {
        "eng": "lampoon",
        "heb": "סאטירה, להלעיג"
    },
    {
        "eng": "languid",
        "heb": "חלש, רפה, חסר מרץ"
    },
    {
        "eng": "languish",
        "heb": "לדעוך, להיחלש"
    },
    {
        "eng": "latent",
        "heb": "רדום, חבוי"
    },
    {
        "eng": "laud",
        "heb": "לשבח, להלל"
    },
    {
        "eng": "lavish",
        "heb": "פזרני, שופע"
    },
    {
        "eng": "lethargic",
        "heb": "רדום, חסר אנרגיה"
    },
    {
        "eng": "levity",
        "heb": "קלות ראש, חוסר רצינות"
    },
    {
        "eng": "lexicon",
        "heb": "לקסיקון, מילון"
    },
    {
        "eng": "liberal",
        "heb": "ליברלי, סובלני"
    },
    {
        "eng": "limpid",
        "heb": "צלול, שקוף"
    },
    {
        "eng": "lithe",
        "heb": "גמיש, זריז"
    },
    {
        "eng": "loquacious",
        "heb": "דברן, פטפטן"
    },
    {
        "eng": "lucid",
        "heb": "ברור, צלול"
    },
    {
        "eng": "lucrative",
        "heb": "רווחי, משתלם"
    },
    {
        "eng": "lugubrious",
        "heb": "עצוב, קודר"
    },
    {
        "eng": "luminous",
        "heb": "מאיר, בוהק"
    },
    {
        "eng": "machination",
        "heb": "מזימה, תככים"
    },
    {
        "eng": "magnanimous",
        "heb": "רחב לב, נדיב"
    },
    {
        "eng": "magnate",
        "heb": "איל הון"
    },
    {
        "eng": "maladroit",
        "heb": "מגושם, חסר טאקט"
    },
    {
        "eng": "malaise",
        "heb": "תחושת חולי, אי-נוחות"
    },
    {
        "eng": "malfeasance",
        "heb": "מעילה בתפקיד, עבירה"
    },
    {
        "eng": "malign",
        "heb": "להשמיץ, מרושע"
    },
    {
        "eng": "malleable",
        "heb": "ניתן לעיצוב, גמיש"
    },
    {
        "eng": "mandate",
        "heb": "מנדט, ייפוי כוח"
    },
    {
        "eng": "manifest",
        "heb": "ברור, גלוי, להפגין"
    },
    {
        "eng": "marginal",
        "heb": "שולי"
    },
    {
        "eng": "martial",
        "heb": "צבאי, קרבי"
    },
    {
        "eng": "maverick",
        "heb": "עצמאי במחשבתו, נון-קונפורמיסט"
    },
    {
        "eng": "meager",
        "heb": "זעום, מועט"
    },
    {
        "eng": "meander",
        "heb": "להתפתל, לשוטט"
    },
    {
        "eng": "melancholy",
        "heb": "עצבות, דיכאון"
    },
    {
        "eng": "mellifluous",
        "heb": "מתוק (קול), ערב לאוזן"
    },
    {
        "eng": "mendacious",
        "heb": "שקרי, לא אמיתי"
    },
    {
        "eng": "mendicant",
        "heb": "קקבצן"
    },
    {
        "eng": "mercurial",
        "heb": "הפכפך, כספיתי"
    },
    {
        "eng": "meticulous",
        "heb": "קפדני, מדוקדק"
    },
    {
        "eng": "mitigate",
        "heb": "להקל, למתן"
    },
    {
        "eng": "mollify",
        "heb": "לפייס, להרגיע"
    },
    {
        "eng": "morose",
        "heb": "קודר, עגמומי"
    },
    {
        "eng": "mundane",
        "heb": "יום-יומי, שגרתי"
    },
    {
        "eng": "munificent",
        "heb": "נדיב מאוד"
    },
    {
        "eng": "mutable",
        "heb": "ניתן לשינוי, משתנה"
    },
    {
        "eng": "myriad",
        "heb": "מספר עצום, רבבות"
    },
    {
        "eng": "nadir",
        "heb": "נקודת שפל"
    },
    {
        "eng": "naive",
        "heb": "תמים"
    },
    {
        "eng": "nascent",
        "heb": "מתהווה, נוצר"
    },
    {
        "eng": "nebulous",
        "heb": "מעורפל, עמום"
    },
    {
        "eng": "nefarious",
        "heb": "מרושע, זדוני"
    },
    {
        "eng": "neophyte",
        "heb": "טירון, מתחיל"
    },
    {
        "eng": "nepotism",
        "heb": "פרוטקציה לקרובי משפחה"
    },
    {
        "eng": "nomad",
        "heb": "נווד"
    },
    {
        "eng": "nominal",
        "heb": "סמלי, נקוב"
    },
    {
        "eng": "nonchalant",
        "heb": "אדיש, רגוע"
    },
    {
        "eng": "nostalgia",
        "heb": "געגועים לעבר"
    },
    {
        "eng": "notorious",
        "heb": "ידוע לשמצה"
    },
    {
        "eng": "novel",
        "heb": "חדשני, מקורי"
    },
    {
        "eng": "noxious",
        "heb": "מזיק, רעיל"
    },
    {
        "eng": "nuance",
        "heb": "דקויות, ניואנס"
    },
    {
        "eng": "nullify",
        "heb": "לבטל, לאיין"
    },
    {
        "eng": "obdurate",
        "heb": "עקשן, קשה לב"
    },
    {
        "eng": "obfuscate",
        "heb": "לערפל, לבלבל"
    },
    {
        "eng": "objective",
        "heb": "אובייקטיבי"
    },
    {
        "eng": "oblique",
        "heb": "אלכסוני, עקיף"
    },
    {
        "eng": "obliterate",
        "heb": "להשמיד, למחוק כליל"
    },
    {
        "eng": "oblivion",
        "heb": "שכחה, אבדון"
    },
    {
        "eng": "obscure",
        "heb": "מעורפל, אלמוני, להסתיר"
    },
    {
        "eng": "obsequious",
        "heb": "מתרפס, חנפן"
    },
    {
        "eng": "obsolete",
        "heb": "מיושן, שעבר זמנו"
    },
    {
        "eng": "obstinate",
        "heb": "עקשן"
    },
    {
        "eng": "obstreperous",
        "heb": "רועש, חסר משמעת"
    },
    {
        "eng": "obtrusive",
        "heb": "בולט, דוחף את עצמו"
    },
    {
        "eng": "obtuse",
        "heb": "אטום, קהה (זווית או שכל)"
    },
    {
        "eng": "obviate",
        "heb": "למנוע, לייתר"
    },
    {
        "eng": "occlude",
        "heb": "לחסום, לסגור"
    },
    {
        "eng": "odious",
        "heb": "מגעיל, שנוא"
    },
    {
        "eng": "officious",
        "heb": "מתערב בענייני אחרים, טרחן"
    },
    {
        "eng": "ominous",
        "heb": "מבשר רעות"
    },
    {
        "eng": "onerous",
        "heb": "מכביד, מעיק"
    },
    {
        "eng": "opaque",
        "heb": "אטום, לא שקוף"
    },
    {
        "eng": "opportune",
        "heb": "בעיתוי מתאים"
    },
    {
        "eng": "opprobrium",
        "heb": "גינוי, חרפה"
    },
    {
        "eng": "opulence",
        "heb": "עושר, שפע"
    },
    {
        "eng": "orthodox",
        "heb": "שמרני, מסורתי"
    },
    {
        "eng": "oscillate",
        "heb": "להתנדנד, להסס"
    },
    {
        "eng": "ostensible",
        "heb": "לכאורה, פנים אל פנים"
    },
    {
        "eng": "ostentatious",
        "heb": "ראוותני, יומרני"
    },
    {
        "eng": "ostracize",
        "heb": "לנדות, להחרים"
    },
    {
        "eng": "pacify",
        "heb": "להרגיע, לפייס"
    },
    {
        "eng": "painstaking",
        "heb": "דקדקני, דורש מאמץ"
    },
    {
        "eng": "palliate",
        "heb": "להקל, לשכך (ללא ריפוי)"
    },
    {
        "eng": "pallid",
        "heb": "חיוור, חסר חיים"
    },
    {
        "eng": "palpable",
        "heb": "מוחשי, ברור"
    },
    {
        "eng": "panacea",
        "heb": "תרופת פלא לכל מחלה"
    },
    {
        "eng": "paradigm",
        "heb": "פרדיגמה, מודל"
    },
    {
        "eng": "paradox",
        "heb": "פרדוקס, סתירה"
    },
    {
        "eng": "paragon",
        "heb": "מופת, מודל למצוינות"
    },
    {
        "eng": "paramount",
        "heb": "עליון, בעל חשיבות עליונה"
    },
    {
        "eng": "pariah",
        "heb": "מנודה"
    },
    {
        "eng": "parody",
        "heb": "פרודיה, חיקוי לעגני"
    },
    {
        "eng": "parsimonious",
        "heb": "קמצן"
    },
    {
        "eng": "partisan",
        "heb": "תומך נלהב, מפלגתי"
    },
    {
        "eng": "patent",
        "heb": "ברור, גלוי, פטנט"
    },
    {
        "eng": "paucity",
        "heb": "מחסור, מיעוט"
    },
    {
        "eng": "pedantic",
        "heb": "פדנט, קפדן מדי"
    },
    {
        "eng": "pedestrian",
        "heb": "הולך רגל, שגרתי, משעמם"
    },
    {
        "eng": "pejorative",
        "heb": "מזלזל, פוגעני"
    },
    {
        "eng": "pellucid",
        "heb": "צלול, מובן לחלוטין"
    },
    {
        "eng": "penchant",
        "heb": "נטייה, חיבה"
    },
    {
        "eng": "penitent",
        "heb": "מתחרט"
    },
    {
        "eng": "pensive",
        "heb": "מהורהר, נוגה"
    },
    {
        "eng": "penury",
        "heb": "עוני מרוד"
    },
    {
        "eng": "perfunctory",
        "heb": "שטחי, נעשה כדי לצאת ידי חובה"
    },
    {
        "eng": "periphery",
        "heb": "פריפריה, שוליים"
    },
    {
        "eng": "perjury",
        "heb": "עדות שקר"
    },
    {
        "eng": "pernicious",
        "heb": "מזיק מאוד, הרסני"
    },
    {
        "eng": "perspicacious",
        "heb": "חודר, מבין עניין"
    },
    {
        "eng": "pert",
        "heb": "חצוף, חצוף מעט"
    },
    {
        "eng": "pertinacious",
        "heb": "עקשן, דבק במטרה"
    },
    {
        "eng": "pertinent",
        "heb": "רלוונטי, שייך לעניין"
    },
    {
        "eng": "perturb",
        "heb": "להדאיג, להטריד"
    },
    {
        "eng": "peruse",
        "heb": "לקרוא בעיון"
    },
    {
        "eng": "pervade",
        "heb": "לחדור, להתפשט בכל"
    },
    {
        "eng": "pervasive",
        "heb": "חודר, מפושט"
    },
    {
        "eng": "petulant",
        "heb": "עצבני, נרגן"
    },
    {
        "eng": "philanthropy",
        "heb": "נדבנות, אהבת אדם"
    },
    {
        "eng": "phlegmatic",
        "heb": "קר רוח, אדיש"
    },
    {
        "eng": "pilfer",
        "heb": "לגנוב (סכומים קטנים)"
    },
    {
        "eng": "pinnacle",
        "heb": "פסגה, שיא"
    },
    {
        "eng": "pious",
        "heb": "אדוק, חסיד"
    },
    {
        "eng": "placate",
        "heb": "לפייס, להרגיע"
    },
    {
        "eng": "placid",
        "heb": "שליו, רגוע"
    },
    {
        "eng": "platitude",
        "heb": "אמרה נדושה"
    },
    {
        "eng": "plethora",
        "heb": "שפע, עודף"
    },
    {
        "eng": "plummet",
        "heb": "לצנוח, ליפול פתאום"
    },
    {
        "eng": "polarize",
        "heb": "לקטב, לפצל"
    },
    {
        "eng": "polemic",
        "heb": "פולמוס, ויכוח חריף"
    },
    {
        "eng": "ponderous",
        "heb": "כבד, מסורבל"
    },
    {
        "eng": "portent",
        "heb": "אות, מופת (לרוב מבשר רעות)"
    },
    {
        "eng": "pragmatic",
        "heb": "מעשי, פרגמטי"
    },
    {
        "eng": "precarious",
        "heb": "רופף, לא יציב, מסוכן"
    },
    {
        "eng": "precipitate",
        "heb": "לזרז, להאיץ, משקע"
    },
    {
        "eng": "preclude",
        "heb": "למנוע, לעכב"
    },
    {
        "eng": "precocious",
        "heb": "מפותח לגילו (בעיקר ילד)"
    },
    {
        "eng": "precursor",
        "heb": "קודם, מבשר"
    },
    {
        "eng": "predecessor",
        "heb": "קודם בתפקיד"
    },
    {
        "eng": "predilection",
        "heb": "נטייה, חיבה"
    },
    {
        "eng": "predispose",
        "heb": "לגרום לנטייה מראש"
    },
    {
        "eng": "preempt",
        "heb": "למנוע מראש, להקדים"
    },
    {
        "eng": "preeminent",
        "heb": "מצטיין, עולה על האחרים"
    },
    {
        "eng": "premonition",
        "heb": "תחושה מוקדמת (לרוב רעה)"
    },
    {
        "eng": "prerogative",
        "heb": "זכות יתר"
    },
    {
        "eng": "presage",
        "heb": "לבשר, אות"
    },
    {
        "eng": "prescient",
        "heb": "רואה את הנולד"
    },
    {
        "eng": "prescribe",
        "heb": "לרשום מרשם, לקבוע"
    },
    {
        "eng": "presentiment",
        "heb": "תחושה מוקדמת"
    },
    {
        "eng": "presumptuous",
        "heb": "חצוף, יהיר"
    },
    {
        "eng": "pretense",
        "heb": "העמדת פנים, יומרה"
    },
    {
        "eng": "pretentious",
        "heb": "יומרני"
    },
    {
        "eng": "prevaricate",
        "heb": "להתחמק מהאמת, לשקר"
    },
    {
        "eng": "pristine",
        "heb": "טהור, בתולי"
    },
    {
        "eng": "probity",
        "heb": "יושר, הגינות"
    },
    {
        "eng": "problematic",
        "heb": "בעייתי"
    },
    {
        "eng": "proclivity",
        "heb": "נטייה"
    },
    {
        "eng": "procrastinate",
        "heb": "לדחות למאוחר יותר"
    },
    {
        "eng": "prodigal",
        "heb": "בזבזן"
    },
    {
        "eng": "prodigious",
        "heb": "עצום, פלאי"
    },
    {
        "eng": "profane",
        "heb": "חילוני, לחלל"
    },
    {
        "eng": "profligate",
        "heb": "בזבזני, מושחת"
    },
    {
        "eng": "profound",
        "heb": "עמוק, מעמיק"
    },
    {
        "eng": "profuse",
        "heb": "שופע, רב"
    },
    {
        "eng": "proliferate",
        "heb": "להתרבות במהירות"
    },
    {
        "eng": "prolific",
        "heb": "פורה"
    },
    {
        "eng": "prolong",
        "heb": "להאריך"
    },
    {
        "eng": "prominent",
        "heb": "בולט, חשוב"
    },
    {
        "eng": "propensity",
        "heb": "נטייה"
    },
    {
        "eng": "propitiate",
        "heb": "לפייס, לרצות"
    },
    {
        "eng": "propitious",
        "heb": "נוח, מתאים"
    },
    {
        "eng": "proponent",
        "heb": "תומך"
    },
    {
        "eng": "prosaic",
        "heb": "שגרתי, משעמם"
    },
    {
        "eng": "proscribe",
        "heb": "לאסור, להוציא אל מחוץ לחוק"
    },
    {
        "eng": "proselytize",
        "heb": "להמיר דת"
    },
    {
        "eng": "prosper",
        "heb": "לשגשג"
    },
    {
        "eng": "provincial",
        "heb": "פרובינציאלי, צר אופקים"
    },
    {
        "eng": "provocative",
        "heb": "פרובוקטיבי, מתגרה"
    },
    {
        "eng": "prudent",
        "heb": "זהיר, שקול"
    },
    {
        "eng": "puerile",
        "heb": "ילדותי"
    },
    {
        "eng": "pugnacious",
        "heb": "לוחמני, אוהב לריב"
    },
    {
        "eng": "punctilious",
        "heb": "קפדן"
    },
    {
        "eng": "pundit",
        "heb": "מומחה, פרשן"
    },
    {
        "eng": "pungent",
        "heb": "חריף (ריח או טעם)"
    },
    {
        "eng": "punitive",
        "heb": "עונשי"
    },
    {
        "eng": "pusillanimous",
        "heb": "פחדן"
    },
    {
        "eng": "putative",
        "heb": "משוער"
    },
    {
        "eng": "quack",
        "heb": "מתחזה (לרופא)"
    },
    {
        "eng": "quagmire",
        "heb": "ביצה, סבך"
    },
    {
        "eng": "quaint",
        "heb": "מוזר וחינני, מיושן במקצת"
    },
    {
        "eng": "qualify",
        "heb": "להכשיר, לסייג"
    },
    {
        "eng": "qualitative",
        "heb": "איכותני"
    },
    {
        "eng": "quandary",
        "heb": "דילמה, התלבטות"
    },
    {
        "eng": "quarantine",
        "heb": "הסגר"
    },
    {
        "eng": "quell",
        "heb": "לדכא, להשקיט"
    },
    {
        "eng": "querulous",
        "heb": "מתלונן, רוטן"
    },
    {
        "eng": "quibble",
        "heb": "להתווכח על דברים קטנים"
    },
    {
        "eng": "quiescent",
        "heb": "שקט, רדום"
    },
    {
        "eng": "quixotic",
        "heb": "אידיאליסטי אך לא מעשי"
    },
    {
        "eng": "quotidian",
        "heb": "יומיומי, שגרתי"
    },
    {
        "eng": "rancor",
        "heb": "טינה, איבה"
    },
    {
        "eng": "rapport",
        "heb": "קרבה, הבנה הדדית"
    },
    {
        "eng": "ratify",
        "heb": "לאשר, לאשרר"
    },
    {
        "eng": "raucous",
        "heb": "צורם, רועש"
    },
    {
        "eng": "ravenous",
        "heb": "רעב מאוד"
    },
    {
        "eng": "raze",
        "heb": "להרוס עד היסוד"
    },
    {
        "eng": "rebuff",
        "heb": "לדחות (בגסות)"
    },
    {
        "eng": "recalcitrant",
        "heb": "מרדן, לא צייתן"
    },
    {
        "eng": "recant",
        "heb": "לחזור בו (מדברים שאמר)"
    },
    {
        "eng": "recapitulate",
        "heb": "לסכם, לחזור על עיקרי הדברים"
    },
    {
        "eng": "receptive",
        "heb": "פתוח לקבל, קליט"
    },
    {
        "eng": "reclusive",
        "heb": "מתבודד"
    },
    {
        "eng": "recondite",
        "heb": "קשה להבנה, סתום"
    },
    {
        "eng": "recount",
        "heb": "לספר, לתאר"
    },
    {
        "eng": "rectify",
        "heb": "לתקן"
    },
    {
        "eng": "recrudescent",
        "heb": "מתפרץ מחדש"
    },
    {
        "eng": "rectitude",
        "heb": "יושר, הגינות"
    },
    {
        "eng": "redolent",
        "heb": "מדיף ניחוח, מזכיר"
    },
    {
        "eng": "redress",
        "heb": "פיצוי, לתקן עוול"
    },
    {
        "eng": "redundant",
        "heb": "מיותר, עודף"
    },
    {
        "eng": "refute",
        "heb": "להפריך"
    },
    {
        "eng": "relegate",
        "heb": "להוריד בדרגה, להעביר"
    },
    {
        "eng": "relevant",
        "heb": "רלוונטי"
    },
    {
        "eng": "relinquish",
        "heb": "לוותר, לעזוב"
    },
    {
        "eng": "remedial",
        "heb": "מרפא, מתקן"
    },
    {
        "eng": "remiss",
        "heb": "רשלן"
    },
    {
        "eng": "remnant",
        "heb": "שריד, שארית"
    },
    {
        "eng": "remonstrate",
        "heb": "למחות, להתווכח"
    },
    {
        "eng": "remorse",
        "heb": "חרטה עמוקה"
    },
    {
        "eng": "remuneration",
        "heb": "תגמול, תשלום"
    },
    {
        "eng": "renegade",
        "heb": "בוגד, עורק"
    },
    {
        "eng": "renounce",
        "heb": "לוותר (רשמית), להתכחש"
    },
    {
        "eng": "repel",
        "heb": "להדוף, לדחות"
    },
    {
        "eng": "replete",
        "heb": "מלא, גדוש"
    },
    {
        "eng": "reprehensible",
        "heb": "ראוי לגינוי"
    },
    {
        "eng": "reprimand",
        "heb": "נזיפה"
    },
    {
        "eng": "reproach",
        "heb": "להאשים, לנזוף"
    },
    {
        "eng": "reprobate",
        "heb": "מושחת, חוטא"
    },
    {
        "eng": "repudiate",
        "heb": "להתכחש, לדחות"
    },
    {
        "eng": "repugnant",
        "heb": "מגעיל, דוחה"
    },
    {
        "eng": "requisite",
        "heb": "נחוץ, תנאי מוקדם"
    },
    {
        "eng": "rescind",
        "heb": "לבטל, לפסול"
    },
    {
        "eng": "resolute",
        "heb": "החלטי, נחוש"
    },
    {
        "eng": "resolution",
        "heb": "החלטה, רזולוציה"
    },
    {
        "eng": "resolve",
        "heb": "לפתור, להחליט"
    },
    {
        "eng": "resonant",
        "heb": "מהדהד"
    },
    {
        "eng": "resplendent",
        "heb": "זוהר, מבריק"
    },
    {
        "eng": "restitution",
        "heb": "השבה, פיצוי"
    },
    {
        "eng": "restive",
        "heb": "חסר מנוחה, חסר סבלנות"
    },
    {
        "eng": "restraint",
        "heb": "ריסון, איפוק"
    },
    {
        "eng": "reticent",
        "heb": "שתקן, מאופק"
    },
    {
        "eng": "revere",
        "heb": "להעריץ, לרחוש כבוד"
    },
    {
        "eng": "reverent",
        "heb": "מלא יראת כבוד"
    },
    {
        "eng": "rhetoric",
        "heb": "רטוריקה, תורת הנאום"
    },
    {
        "eng": "rigorous",
        "heb": "קפדני, מחמיר"
    },
    {
        "eng": "robust",
        "heb": "חסון, בריא"
    },
    {
        "eng": "rudimentary",
        "heb": "בסיסי, יסודי"
    },
    {
        "eng": "ruminate",
        "heb": "להרהר, לחשוב לעומק"
    },
    {
        "eng": "rustic",
        "heb": "כפרי, מחוספס"
    },
    {
        "eng": "sacrosanct",
        "heb": "קדוש, שאין לפגוע בו"
    },
    {
        "eng": "sagacious",
        "heb": "חכם, פיקח"
    },
    {
        "eng": "salient",
        "heb": "בולט, עיקרי"
    },
    {
        "eng": "salutary",
        "heb": "מועיל, בריא"
    },
    {
        "eng": "sanctimonious",
        "heb": "צדקני, מתחסד"
    },
    {
        "eng": "sanction",
        "heb": "לאשר, להטיל סנקציה"
    },
    {
        "eng": "sanguine",
        "heb": "אופטימי, בטוח"
    },
    {
        "eng": "sardonic",
        "heb": "לגלגני, סרקסטי"
    },
    {
        "eng": "satiate",
        "heb": "להשביע"
    },
    {
        "eng": "satire",
        "heb": "סאטירה"
    },
    {
        "eng": "saturate",
        "heb": "לרוות, להספיג"
    },
    {
        "eng": "scanty",
        "heb": "מועט, זעום"
    },
    {
        "eng": "scarce",
        "heb": "נדיר, חסר"
    },
    {
        "eng": "scrupulous",
        "heb": "מצפוני, קפדן"
    },
    {
        "eng": "scrutinize",
        "heb": "לבחון בקפידה"
    },
    {
        "eng": "secrete",
        "heb": "להפריש, להסתיר"
    },
    {
        "eng": "secular",
        "heb": "חילוני"
    },
    {
        "eng": "sedition",
        "heb": "המרדה"
    },
    {
        "eng": "sedulous",
        "heb": "שקדן, חרוץ"
    },
    {
        "eng": "serendipity",
        "heb": "גילוי משהו טוב במקרה"
    },
    {
        "eng": "servile",
        "heb": "מתרפס, עבדותי"
    },
    {
        "eng": "shrewd",
        "heb": "פיקח, ממולח"
    },
    {
        "eng": "singular",
        "heb": "יחיד, יוצא דופן"
    },
    {
        "eng": "sinister",
        "heb": "מרושע, מאיים"
    },
    {
        "eng": "skeptical",
        "heb": "ספקן"
    },
    {
        "eng": "slander",
        "heb": "להשמיץ, להוציא דיבה"
    },
    {
        "eng": "slight",
        "heb": "מועט, דק, לזלזל"
    },
    {
        "eng": "slipshod",
        "heb": "רשלני"
    },
    {
        "eng": "sloth",
        "heb": "עצלות"
    },
    {
        "eng": "slovenly",
        "heb": "מרושל"
    },
    {
        "eng": "smug",
        "heb": "שבע רצון מעצמו"
    },
    {
        "eng": "snide",
        "heb": "לגלגני, ערמומי"
    },
    {
        "eng": "sober",
        "heb": "פיכח, רציני"
    },
    {
        "eng": "solicitous",
        "heb": "דואג, אכפתי"
    },
    {
        "eng": "solvent",
        "heb": "בעל יכולת פירעון"
    },
    {
        "eng": "somber",
        "heb": "קודר, עגמומי"
    },
    {
        "eng": "soporific",
        "heb": "מרדים"
    },
    {
        "eng": "sordid",
        "heb": "מלוכלך, שפל"
    },
    {
        "eng": "sparse",
        "heb": "דליל, מפוזר"
    },
    {
        "eng": "specious",
        "heb": "מטעה, נראה נכון אך שגוי"
    },
    {
        "eng": "spendthrift",
        "heb": "בזבזן"
    },
    {
        "eng": "sporadic",
        "heb": "אקראי, ספורדי"
    },
    {
        "eng": "spurious",
        "heb": "מזויף, שקרי"
    },
    {
        "eng": "squalid",
        "heb": "מלוכלך, מוזנח"
    },
    {
        "eng": "squander",
        "heb": "לבזבז"
    },
    {
        "eng": "stagnant",
        "heb": "עומד (מים), קופא על שמריו"
    },
    {
        "eng": "static",
        "heb": "סטטי, חסר תנועה"
    },
    {
        "eng": "steadfast",
        "heb": "איתן, יציב"
    },
    {
        "eng": "stentorian",
        "heb": "קולני מאוד"
    },
    {
        "eng": "stigma",
        "heb": "אות קלון"
    },
    {
        "eng": "stint",
        "heb": "לקמץ, להקציב"
    },
    {
        "eng": "stipulate",
        "heb": "להתנות"
    },
    {
        "eng": "stoic",
        "heb": "סטואי, אדיש לכאב"
    },
    {
        "eng": "stolid",
        "heb": "אטום, חסר רגש"
    },
    {
        "eng": "strident",
        "heb": "צורם, חריף"
    },
    {
        "eng": "stringent",
        "heb": "נוקשה, מחמיר"
    },
    {
        "eng": "stymie",
        "heb": "לסכל, למנוע"
    },
    {
        "eng": "subjective",
        "heb": "סובייקטיבי"
    },
    {
        "eng": "subjugate",
        "heb": "לשעבד, להכניע"
    },
    {
        "eng": "sublime",
        "heb": "נשגב"
    },
    {
        "eng": "submissive",
        "heb": "כנוע"
    },
    {
        "eng": "subordinate",
        "heb": "כפוף ל-"
    },
    {
        "eng": "subsequent",
        "heb": "שבא לאחר מכן"
    },
    {
        "eng": "subservient",
        "heb": "מתרפס, כפוף"
    },
    {
        "eng": "subside",
        "heb": "לשכך, לרדת"
    },
    {
        "eng": "subsidiary",
        "heb": "חברת בת, משני"
    },
    {
        "eng": "subsidize",
        "heb": "לסבסד"
    },
    {
        "eng": "substantiate",
        "heb": "לאמת, להוכיח"
    },
    {
        "eng": "succinct",
        "heb": "תמציתי"
    },
    {
        "eng": "supercilious",
        "heb": "מתנשא, יהיר"
    },
    {
        "eng": "superficial",
        "heb": "שטחי"
    },
    {
        "eng": "superfluous",
        "heb": "עודף, מיותר"
    },
    {
        "eng": "surfeit",
        "heb": "שפע מוגזם"
    },
    {
        "eng": "surmise",
        "heb": "לשער, להניח"
    },
    {
        "eng": "surreptitious",
        "heb": "חשאי, סודי"
    },
    {
        "eng": "sycophant",
        "heb": "חנפן"
    },
    {
        "eng": "synthesis",
        "heb": "סינתזה, שילוב"
    },
    {
        "eng": "tacit",
        "heb": "מרומז, משתמע"
    },
    {
        "eng": "taciturn",
        "heb": "שתקן"
    },
    {
        "eng": "tangential",
        "heb": "משיק, שולי"
    },
    {
        "eng": "tangible",
        "heb": "מוחשי"
    },
    {
        "eng": "tantamount",
        "heb": "שקול ל-"
    },
    {
        "eng": "tedious",
        "heb": "מעייף, משעמם"
    },
    {
        "eng": "temerity",
        "heb": "פזיזות, חוצפה"
    },
    {
        "eng": "temper",
        "heb": "מזג, למתן"
    },
    {
        "eng": "temperance",
        "heb": "מתינות"
    },
    {
        "eng": "tenacious",
        "heb": "עקשן, אוחז בחוזקה"
    },
    {
        "eng": "tenet",
        "heb": "אמונה, עיקרון"
    },
    {
        "eng": "tentative",
        "heb": "זמני, ניסיוני"
    },
    {
        "eng": "tenuous",
        "heb": "חלש, רופף, דק"
    },
    {
        "eng": "tepid",
        "heb": "פושר"
    },
    {
        "eng": "terse",
        "heb": "תמציתי"
    },
    {
        "eng": "thwart",
        "heb": "לסכל"
    },
    {
        "eng": "timorous",
        "heb": "פחדן, חששן"
    },
    {
        "eng": "tirade",
        "heb": "נאום תוכחה ארוך"
    },
    {
        "eng": "torpid",
        "heb": "אדיש, רדום"
    },
    {
        "eng": "tractable",
        "heb": "נוח לטיפול, צייתן"
    },
    {
        "eng": "tranquility",
        "heb": "שלווה"
    },
    {
        "eng": "transcend",
        "heb": "להתעלות, לחרוג מ-"
    },
    {
        "eng": "transient",
        "heb": "חולף, זמני"
    },
    {
        "eng": "transitory",
        "heb": "זמני, בר חלוף"
    },
    {
        "eng": "trepidation",
        "heb": "חרדה, פחד"
    },
    {
        "eng": "trite",
        "heb": "נדוש, שחוק"
    },
    {
        "eng": "trivial",
        "heb": "טריוויאלי, פשוט"
    },
    {
        "eng": "truculent",
        "heb": "תוקפני, עוין"
    },
    {
        "eng": "tryst",
        "heb": "מפגש (לרוב רומנטי וסודי)"
    },
    {
        "eng": "tumultuous",
        "heb": "סוער, רועש"
    },
    {
        "eng": "turpitude",
        "heb": "שפלות, השחתה מוסרית"
    },
    {
        "eng": "ubiquitous",
        "heb": "נמצא בכל מקום"
    },
    {
        "eng": "ulterior",
        "heb": "נסתר, כמוס"
    },
    {
        "eng": "ultimate",
        "heb": "סופי, אולטימטיבי"
    },
    {
        "eng": "unadulterated",
        "heb": "טהור, לא מהול"
    },
    {
        "eng": "unanimity",
        "heb": "תמימות דעים"
    },
    {
        "eng": "unassailable",
        "heb": "חסין מפני התקפה/ביקורת"
    },
    {
        "eng": "uncanny",
        "heb": "מוזר, לא טבעי"
    },
    {
        "eng": "unconscionable",
        "heb": "לא הגיוני, חסר מצפון"
    },
    {
        "eng": "unctuous",
        "heb": "חלקלק, מתחנף"
    },
    {
        "eng": "undulate",
        "heb": "לנוע בגלים"
    },
    {
        "eng": "unfeigned",
        "heb": "אמיתי, לא מזויף"
    },
    {
        "eng": "unmitigated",
        "heb": "מוחלט, שלא הומתק"
    },
    {
        "eng": "unprecedented",
        "heb": "חסר תקדים"
    },
    {
        "eng": "unruly",
        "heb": "פרוע, לא ממושמע"
    },
    {
        "eng": "untenable",
        "heb": "בלתי ניתן להגנה (טענה)"
    },
    {
        "eng": "urbane",
        "heb": "מנומס, עירוני"
    },
    {
        "eng": "usurp",
        "heb": "לגזול, לתפוס בכוח"
    },
    {
        "eng": "utility",
        "heb": "תועלת, שימושיות"
    },
    {
        "eng": "utopia",
        "heb": "אוטופיה"
    },
    {
        "eng": "vacillate",
        "heb": "להתנדנד, להסס"
    },
    {
        "eng": "vacuous",
        "heb": "ריקני, חסר רעיון"
    },
    {
        "eng": "vagary",
        "heb": "גחמה"
    },
    {
        "eng": "validate",
        "heb": "לתת תוקף, לאמת"
    },
    {
        "eng": "vapid",
        "heb": "תפל, משעמם"
    },
    {
        "eng": "variegated",
        "heb": "מגוון, מנומר"
    },
    {
        "eng": "vehement",
        "heb": "תקיף, נלהב"
    },
    {
        "eng": "venal",
        "heb": "מושחת, ניתן לשוחד"
    },
    {
        "eng": "venerate",
        "heb": "להעריץ, לרחוש כבוד"
    },
    {
        "eng": "veracity",
        "heb": "אמיתות, יושר"
    },
    {
        "eng": "verbose",
        "heb": "מלל רב, דברן"
    },
    {
        "eng": "verdant",
        "heb": "מוריק, רענן"
    },
    {
        "eng": "verify",
        "heb": "לוודא, לאמת"
    },
    {
        "eng": "vernacular",
        "heb": "שפת המקום"
    },
    {
        "eng": "versatile",
        "heb": "רב-צדדי, גמיש"
    },
    {
        "eng": "vestige",
        "heb": "שריד, זכר"
    },
    {
        "eng": "vex",
        "heb": "להרגיז, להטריד"
    },
    {
        "eng": "viable",
        "heb": "ישים, בר קיימא"
    },
    {
        "eng": "vicarious",
        "heb": "עקיף, חלופי"
    },
    {
        "eng": "vicissitude",
        "heb": "תמורות, שינויים"
    },
    {
        "eng": "vigilance",
        "heb": "ערנות, שמירה"
    },
    {
        "eng": "vilify",
        "heb": "להשמיץ"
    },
    {
        "eng": "vindicate",
        "heb": "לזכות, להצדיק"
    },
    {
        "eng": "vindictive",
        "heb": "נקמני"
    },
    {
        "eng": "virtuoso",
        "heb": "וירטואוז, אמן מחונן"
    },
    {
        "eng": "virulent",
        "heb": "ארסי, קטלני"
    },
    {
        "eng": "viscous",
        "heb": "צמיגי"
    },
    {
        "eng": "vitiate",
        "heb": "לפגום, להרוס"
    },
    {
        "eng": "vitriolic",
        "heb": "ארסי, עוקצני"
    },
    {
        "eng": "vituperate",
        "heb": "לגנות בתוקף, לגדף"
    },
    {
        "eng": "vivacious",
        "heb": "תוסס, מלא חיים"
    },
    {
        "eng": "vociferous",
        "heb": "קולני"
    },
    {
        "eng": "volatile",
        "heb": "הפכפך, נדיף"
    },
    {
        "eng": "volition",
        "heb": "רצון, בחירה"
    },
    {
        "eng": "voluble",
        "heb": "דברן, שוטף"
    },
    {
        "eng": "voluminous",
        "heb": "גדול, בעל נפח רב"
    },
    {
        "eng": "voracious",
        "heb": "רעבתן, זללן"
    },
    {
        "eng": "vulnerable",
        "heb": "פגיע"
    },
    {
        "eng": "wane",
        "heb": "לדעוך, להתמעט"
    },
    {
        "eng": "want",
        "heb": "מחסור (כמילה מתקדמת)"
    },
    {
        "eng": "warrant",
        "heb": "להצדיק, להבטיח"
    },
    {
        "eng": "wary",
        "heb": "זהיר, חשדן"
    },
    {
        "eng": "waver",
        "heb": "להסס, להתנדנד"
    },
    {
        "eng": "whimsical",
        "heb": "גחמני, שובב"
    },
    {
        "eng": "wily",
        "heb": "ערמומי"
    },
    {
        "eng": "wistful",
        "heb": "עורג, נוגה"
    },
    {
        "eng": "wither",
        "heb": "לקמול, לנבול"
    },
    {
        "eng": "wrangle",
        "heb": "להתווכח, לריב"
    },
    {
        "eng": "wrath",
        "heb": "זעם"
    },
    {
        "eng": "yearn",
        "heb": "להשתוקק, לערוג"
    },
    {
        "eng": "yield",
        "heb": "להניב, להיכנע"
    },
    {
        "eng": "zeal",
        "heb": "התלהבות, קנאות"
    },
    {
        "eng": "zealot",
        "heb": "קנאי"
    },
    {
        "eng": "zenith",
        "heb": "פסגה, שיא"
    },
    {
        "eng": "zephyr",
        "heb": "רוח קלה"
    },
    {
        "eng": "abbreviate",
        "heb": "לקצר"
    },
    {
        "eng": "abdomen",
        "heb": "בטן"
    },
    {
        "eng": "abnormal",
        "heb": "לא נורמלי"
    },
    {
        "eng": "abolish",
        "heb": "לבטל"
    },
    {
        "eng": "absorbent",
        "heb": "בעל כושר ספיגה"
    },
    {
        "eng": "absorption",
        "heb": "ספיגה"
    },
    {
        "eng": "abundant",
        "heb": "בשפע"
    },
    {
        "eng": "access",
        "heb": "גישה, כניסה"
    },
    {
        "eng": "accessibility",
        "heb": "נגישות"
    },
    {
        "eng": "accessory",
        "heb": "מסייע, מאפשר, שותף , אביזר"
    },
    {
        "eng": "according to",
        "heb": "על פי"
    },
    {
        "eng": "account for",
        "heb": "להסביר"
    },
    {
        "eng": "accountable",
        "heb": "אחראי"
    },
    {
        "eng": "accumulation",
        "heb": "הצטברות"
    },
    {
        "eng": "accumulative",
        "heb": "מצטבר"
    },
    {
        "eng": "accurately",
        "heb": "בדייקנות"
    },
    {
        "eng": "achievable",
        "heb": "ניתן להשגה"
    },
    {
        "eng": "achievement",
        "heb": "הישג"
    },
    {
        "eng": "acute",
        "heb": "רציני, חמור, אנוש, קריטי"
    },
    {
        "eng": "adaptable",
        "heb": "שאפשר להתאימו"
    },
    {
        "eng": "adaptation",
        "heb": "הסתגלות, התאמה"
    },
    {
        "eng": "adhere to",
        "heb": "לדבוק ב..."
    },
    {
        "eng": "adherence",
        "heb": "דבקות, הידבקות"
    },
    {
        "eng": "administrative",
        "heb": "ניהולי"
    },
    {
        "eng": "administrator",
        "heb": "מנהל"
    },
    {
        "eng": "admit into",
        "heb": "להכניס"
    },
    {
        "eng": "admittance",
        "heb": "הודאה, הכנסה"
    },
    {
        "eng": "admittedly",
        "heb": "מוסכם, לכל הדעות"
    },
    {
        "eng": "advantageous",
        "heb": "מועיל"
    },
    {
        "eng": "adversary",
        "heb": "יריב"
    },
    {
        "eng": "afflict",
        "heb": "לייסר"
    },
    {
        "eng": "age",
        "heb": "גיל"
    },
    {
        "eng": "aggression",
        "heb": "תוקפנות"
    },
    {
        "eng": "air",
        "heb": "אוויר"
    },
    {
        "eng": "airport",
        "heb": "שדה תעופה"
    },
    {
        "eng": "alert",
        "heb": "אזעקה, מצב היכון, להזהיר, ער, מוכן"
    },
    {
        "eng": "alertness",
        "heb": "עירנות, דריכות"
    },
    {
        "eng": "allegedly",
        "heb": "לכאורה"
    },
    {
        "eng": "allow for",
        "heb": "להביא בחשבון"
    },
    {
        "eng": "allowable",
        "heb": "מותר"
    },
    {
        "eng": "ambiguity",
        "heb": "דו משמעות, עמימות"
    },
    {
        "eng": "ambition",
        "heb": "שאפתנות, שאיפה"
    },
    {
        "eng": "ambitious",
        "heb": "שאפתן, בעל שאיפות"
    },
    {
        "eng": "ambivalence",
        "heb": "רגשות סותרים"
    },
    {
        "eng": "amiss",
        "heb": "לא כשורה"
    },
    {
        "eng": "ammunition",
        "heb": "תחמושת"
    },
    {
        "eng": "among (amongst)",
        "heb": "בקרב, בין כמה דברים, נמנה עם"
    },
    {
        "eng": "annex",
        "heb": "אגף, תוספת, לספח, לצרף"
    },
    {
        "eng": "anxiety",
        "heb": "חרדה"
    },
    {
        "eng": "apartment",
        "heb": "דירה"
    },
    {
        "eng": "apposite",
        "heb": "מתאים מאד, הולם"
    },
    {
        "eng": "approval",
        "heb": "אישור, הסכמה"
    },
    {
        "eng": "background",
        "heb": "רקע"
    },
    {
        "eng": "bamboozle",
        "heb": "לבלבל, לרמות"
    },
    {
        "eng": "barefoot",
        "heb": "יחף"
    },
    {
        "eng": "barrack",
        "heb": "לצעוק ולצחוק בגסות"
    },
    {
        "eng": "barracks",
        "heb": "מגורי חיילים"
    },
    {
        "eng": "base on",
        "heb": "לבסס על"
    },
    {
        "eng": "bathroom",
        "heb": "חדר אמבטיה"
    },
    {
        "eng": "be aware of",
        "heb": "להיות מודע"
    },
    {
        "eng": "beforehand",
        "heb": "מראש"
    },
    {
        "eng": "benefit",
        "heb": "תועלת, תגמול, קצבה, הטבה, להרוויח, רווח"
    },
    {
        "eng": "betrayal",
        "heb": "בגידה"
    },
    {
        "eng": "bitter",
        "heb": "מר, מכאיב, צורב"
    },
    {
        "eng": "blaspheme",
        "heb": "לחלל (דבר קדוש)"
    },
    {
        "eng": "blasphemy",
        "heb": "חילול השם"
    },
    {
        "eng": "bleed",
        "heb": "לדמם"
    },
    {
        "eng": "bloom",
        "heb": "לפרוח, ללבלב"
    },
    {
        "eng": "bother",
        "heb": "להטריד, טרחה"
    },
    {
        "eng": "bothersome",
        "heb": "מטריד, מרגיז"
    },
    {
        "eng": "bottomless",
        "heb": "ללא תחתית"
    },
    {
        "eng": "breadth",
        "heb": "רוחב"
    },
    {
        "eng": "breakdown",
        "heb": "התמוטטות"
    },
    {
        "eng": "breakfast",
        "heb": "ארוחת בוקר"
    },
    {
        "eng": "break-through",
        "heb": "פריצת דרך"
    },
    {
        "eng": "breath",
        "heb": "לנשום, נשימה"
    },
    {
        "eng": "bride",
        "heb": "כלה"
    },
    {
        "eng": "bridle",
        "heb": "רסן, לרסן, לשים רסן על..."
    },
    {
        "eng": "bring",
        "heb": "להביא"
    },
    {
        "eng": "brother",
        "heb": "אח"
    },
    {
        "eng": "brutality",
        "heb": "אכזריות"
    },
    {
        "eng": "brute",
        "heb": "בהמה, פראי"
    },
    {
        "eng": "brutish",
        "heb": "בהמי, אכזרי"
    },
    {
        "eng": "brutishly",
        "heb": "בבהמיות, באכזריות"
    },
    {
        "eng": "buffoon",
        "heb": "ליצן"
    },
    {
        "eng": "clarification",
        "heb": "הבהרה, טיהור"
    },
    {
        "eng": "clear",
        "heb": "בהיר, צלול, משוחרר, לסלק, לטהר, לפנות"
    },
    {
        "eng": "collaboration",
        "heb": "שיתוף פעולה"
    },
    {
        "eng": "come",
        "heb": "לבוא"
    },
    {
        "eng": "commiserate",
        "heb": "להשתתף בצער"
    },
    {
        "eng": "communication",
        "heb": "תקשורת"
    },
    {
        "eng": "communicative",
        "heb": "מוכן לתקשר"
    },
    {
        "eng": "comparative",
        "heb": "יחסי, השוואתי"
    },
    {
        "eng": "competitive",
        "heb": "תחרותי"
    },
    {
        "eng": "complaisance",
        "heb": "אדיבות, נכונות לרצות אחרים"
    },
    {
        "eng": "completely",
        "heb": "לחלוטין"
    },
    {
        "eng": "complexity",
        "heb": "מורכבות, סיבוך"
    },
    {
        "eng": "component",
        "heb": "חלק, מרכיב, רכיב"
    },
    {
        "eng": "compose",
        "heb": "להרכיב, להלחין"
    },
    {
        "eng": "composite",
        "heb": "מורכב"
    },
    {
        "eng": "composition",
        "heb": "הרכב, חיבור"
    },
    {
        "eng": "compulsion",
        "heb": "כפייה"
    },
    {
        "eng": "compulsive",
        "heb": "כפייתי"
    },
    {
        "eng": "concurred with",
        "heb": "להתרחש בו זמנית, להתאים"
    },
    {
        "eng": "condemn",
        "heb": "להרשיע, לגנות"
    },
    {
        "eng": "confidence",
        "heb": "אמון, סוד"
    },
    {
        "eng": "confidential",
        "heb": "סודי, חשאי"
    },
    {
        "eng": "confine",
        "heb": "להגביל"
    },
    {
        "eng": "birch",
        "heb": "עץ ליבנה"
    },
    {
        "eng": "bus stop",
        "heb": "תחנת אוטובוס"
    },
    {
        "eng": "business",
        "heb": "עסקים"
    },
    {
        "eng": "busy",
        "heb": "עסוק"
    },
    {
        "eng": "butter",
        "heb": "חמאה"
    },
    {
        "eng": "button",
        "heb": "כפתור"
    },
    {
        "eng": "buy",
        "heb": "לקנות"
    },
    {
        "eng": "by all means",
        "heb": "בהחלט"
    },
    {
        "eng": "bypass",
        "heb": "לעקוף, מעקף"
    },
    {
        "eng": "calm",
        "heb": "רוגע, להרגע"
    },
    {
        "eng": "camouflage",
        "heb": "הסוואה"
    },
    {
        "eng": "candidly",
        "heb": "בכנות"
    },
    {
        "eng": "candle",
        "heb": "נר"
    },
    {
        "eng": "carcass",
        "heb": "פגר"
    },
    {
        "eng": "catastrophe",
        "heb": "אסון"
    },
    {
        "eng": "catastrophic",
        "heb": "הרה אסון"
    },
    {
        "eng": "caused by",
        "heb": "נגרם על ידי"
    },
    {
        "eng": "cease",
        "heb": "לחדול, להפסיק"
    },
    {
        "eng": "ceaseless",
        "heb": "ללא הפסק"
    },
    {
        "eng": "cede",
        "heb": "לוותר על"
    },
    {
        "eng": "chain",
        "heb": "שרשרת"
    },
    {
        "eng": "chaos",
        "heb": "תוהו ובוהו"
    },
    {
        "eng": "chaotic",
        "heb": "פרוע, של תוהו ובוהו"
    },
    {
        "eng": "chauffeur",
        "heb": "נהג"
    },
    {
        "eng": "cheese",
        "heb": "גבינה"
    },
    {
        "eng": "cherish",
        "heb": "לטפח, להוקיר"
    },
    {
        "eng": "chicken",
        "heb": "עוף"
    },
    {
        "eng": "cite",
        "heb": "לצטט, לזמן למשפט"
    },
    {
        "eng": "civilization",
        "heb": "תרבות"
    },
    {
        "eng": "civilize",
        "heb": "לתרבת"
    },
    {
        "eng": "confines",
        "heb": "גבולות"
    },
    {
        "eng": "conscience",
        "heb": "מצפון"
    },
    {
        "eng": "conscientious",
        "heb": "מודרך על יד מצפונו"
    },
    {
        "eng": "consciously",
        "heb": "במודע"
    },
    {
        "eng": "consciousness",
        "heb": "הכרה, מודעות"
    },
    {
        "eng": "consequent",
        "heb": "בא כתוצאה"
    },
    {
        "eng": "consequential",
        "heb": "חשוב, מכריע"
    },
    {
        "eng": "considerate",
        "heb": "מתחשב"
    },
    {
        "eng": "consistency",
        "heb": "עקביות, סמיכות"
    },
    {
        "eng": "consternation",
        "heb": "תדהמה, פחד"
    },
    {
        "eng": "constituent",
        "heb": "מכונן, מרכיב"
    },
    {
        "eng": "constitution",
        "heb": "הרכב, חוקה"
    },
    {
        "eng": "contention",
        "heb": "מחלוקת"
    },
    {
        "eng": "contradict",
        "heb": "לסתור"
    },
    {
        "eng": "contribution",
        "heb": "תרומה"
    },
    {
        "eng": "contributory",
        "heb": "תורם, מסייע"
    },
    {
        "eng": "convalesce",
        "heb": "להחלים"
    },
    {
        "eng": "convalescence",
        "heb": "החלמה"
    },
    {
        "eng": "converse",
        "heb": "לשוחח, ההיפך, מנוגד"
    },
    {
        "eng": "conversion",
        "heb": "המרה, חזרה בתשובה"
    },
    {
        "eng": "conviction",
        "heb": "הרשעה, שכנוע עצמי"
    },
    {
        "eng": "cooperate",
        "heb": "לשתף פעולה"
    },
    {
        "eng": "corollary",
        "heb": "תוספת, תולדה"
    },
    {
        "eng": "corresponding",
        "heb": "תואם"
    },
    {
        "eng": "corruption",
        "heb": "שחיתות"
    },
    {
        "eng": "creed",
        "heb": "עיקרי אמונה"
    },
    {
        "eng": "creep",
        "heb": "להתגנב, לזחול"
    },
    {
        "eng": "critical",
        "heb": "מכריע, ביקורתי"
    },
    {
        "eng": "criticism",
        "heb": "ביקורת"
    },
    {
        "eng": "crowded",
        "heb": "צפוף"
    },
    {
        "eng": "cruise",
        "heb": "הפלגה, שיט"
    },
    {
        "eng": "cumulative",
        "heb": "מצטבר"
    },
    {
        "eng": "cup",
        "heb": "כוס, ספל"
    },
    {
        "eng": "cupboard",
        "heb": "ארון כלים"
    },
    {
        "eng": "curl",
        "heb": "להסתלסל, להתכווץ"
    },
    {
        "eng": "current",
        "heb": "נוכחי, עכשווי, שוטף, זרם"
    },
    {
        "eng": "currently",
        "heb": "כעת"
    },
    {
        "eng": "curriculum",
        "heb": "תוכנית לימודים"
    },
    {
        "eng": "cut",
        "heb": "לחתוך"
    },
    {
        "eng": "cycle",
        "heb": "מחזור, גלגל, אופן, לרכוב על אופניים"
    },
    {
        "eng": "data",
        "heb": "נתונים (יחיד - datum)"
    },
    {
        "eng": "dawdle",
        "heb": "להתבטל"
    },
    {
        "eng": "de facto",
        "heb": "הלכה למעשה (בניגוד ל-de jure -על הנייר בלבד)"
    },
    {
        "eng": "deceit",
        "heb": "רמאות, הונאה"
    },
    {
        "eng": "deducible",
        "heb": "ניתן להיקש"
    },
    {
        "eng": "deduction",
        "heb": "היקש (לוגי)"
    },
    {
        "eng": "deed",
        "heb": "מעשה"
    },
    {
        "eng": "defamation",
        "heb": "השמצה, הכפשה"
    },
    {
        "eng": "defect",
        "heb": "פגם, לערוק"
    },
    {
        "eng": "defection",
        "heb": "עריקה"
    },
    {
        "eng": "defective",
        "heb": "פגום"
    },
    {
        "eng": "defiance",
        "heb": "סירוב בתוקף, מרי"
    },
    {
        "eng": "defiant",
        "heb": "סרבן"
    },
    {
        "eng": "deficient",
        "heb": "חסר, נטול משהו"
    },
    {
        "eng": "definitely",
        "heb": "בהחלט"
    },
    {
        "eng": "definitive",
        "heb": "סופי ומוחלט"
    },
    {
        "eng": "defy",
        "heb": "לסרב בתוקף"
    },
    {
        "eng": "deliberately",
        "heb": "בכוונה תחילה"
    },
    {
        "eng": "deliberative",
        "heb": "שנעשה בכוונה תחילה"
    },
    {
        "eng": "demonstration",
        "heb": "הוכחה, הפגנה, הדגמה"
    },
    {
        "eng": "dense",
        "heb": "צפוף"
    },
    {
        "eng": "depressed",
        "heb": "מדוכא"
    },
    {
        "eng": "derivation",
        "heb": "הוכחה (לוגית), הפקה"
    },
    {
        "eng": "desk",
        "heb": "שולחן עבודה"
    },
    {
        "eng": "destruction",
        "heb": "הרס"
    },
    {
        "eng": "detain",
        "heb": "לעכב"
    },
    {
        "eng": "detection",
        "heb": "מלאכת האיתור"
    },
    {
        "eng": "detective",
        "heb": "בלש"
    },
    {
        "eng": "deter",
        "heb": "להרתיע, למנוע"
    },
    {
        "eng": "deterioration",
        "heb": "הדרדרות"
    },
    {
        "eng": "determination",
        "heb": "קביעה, נחישות"
    },
    {
        "eng": "deterrent",
        "heb": "מעכב, מונע"
    },
    {
        "eng": "devotion",
        "heb": "התמסרות"
    },
    {
        "eng": "differ",
        "heb": "לחלוק על..., להיות שונה, לא להסכים"
    },
    {
        "eng": "diffuse",
        "heb": "להתפשט לכל עבר, להתערבב, להפיץ, מבולבל, חסר סדר"
    },
    {
        "eng": "diffusion",
        "heb": "תערובת"
    },
    {
        "eng": "dig",
        "heb": "לחפור"
    },
    {
        "eng": "dinner",
        "heb": "ארוחת ערב"
    },
    {
        "eng": "disabled",
        "heb": "בעל מוגבלות, נכה"
    },
    {
        "eng": "disappointment",
        "heb": "אכזבה"
    },
    {
        "eng": "disastrous",
        "heb": "נוראי"
    },
    {
        "eng": "discovery",
        "heb": "תגלית"
    },
    {
        "eng": "disinfect",
        "heb": "לחטא"
    },
    {
        "eng": "dispensable",
        "heb": "לא הכרחי, שניתן להסתדר בלעדיו"
    },
    {
        "eng": "displace",
        "heb": "לעקור ממקומו, להחליף את מקומו"
    },
    {
        "eng": "disqualify",
        "heb": "לפסול, לשלול"
    },
    {
        "eng": "distortion",
        "heb": "עיוות"
    },
    {
        "eng": "distraction",
        "heb": "מסיח, הסחת דעת"
    },
    {
        "eng": "divergence",
        "heb": "התפצלות, סטייה"
    },
    {
        "eng": "diversify",
        "heb": "לגוון"
    },
    {
        "eng": "diversion",
        "heb": "פעילות לשעות הפנאי, פעולת הסחה"
    },
    {
        "eng": "do",
        "heb": "לעשות"
    },
    {
        "eng": "docility",
        "heb": "כניעות, צייתנות"
    },
    {
        "eng": "donation",
        "heb": "מתנה, תרומה"
    },
    {
        "eng": "donkey",
        "heb": "חמור"
    },
    {
        "eng": "doom",
        "heb": "לדון מישהו, לגזור על מישהו, אסון, אבדון, יום הדין"
    },
    {
        "eng": "dote",
        "heb": "לחבב יתר על המידה, \"לחנוק באהבה\""
    },
    {
        "eng": "doubtful",
        "heb": "מפוקפק"
    },
    {
        "eng": "drab",
        "heb": "חום-אפרפר, משעמם, \"אפור\""
    },
    {
        "eng": "drawing",
        "heb": "ציור"
    },
    {
        "eng": "drop",
        "heb": "להפיל, טיפה"
    },
    {
        "eng": "dry",
        "heb": "יבש"
    },
    {
        "eng": "dubious",
        "heb": "מפוקפק"
    },
    {
        "eng": "dynamic",
        "heb": "רב עוצמה, פעיל"
    },
    {
        "eng": "eavesdrop",
        "heb": "לצותת"
    },
    {
        "eng": "eclectic",
        "heb": "אוסף \"מפה ומשם\""
    },
    {
        "eng": "eclipse",
        "heb": "ליקוי"
    },
    {
        "eng": "efficiency",
        "heb": "יעילות"
    },
    {
        "eng": "elevator",
        "heb": "מעלית"
    },
    {
        "eng": "embarrassing",
        "heb": "מביך"
    },
    {
        "eng": "embassy",
        "heb": "שגרירות"
    },
    {
        "eng": "emergence",
        "heb": "הופעה הדרגתית, היווצרות"
    },
    {
        "eng": "emergent",
        "heb": "ההולך ומתגבש, שזה עתה נוצר"
    },
    {
        "eng": "emigration",
        "heb": "הגירה"
    },
    {
        "eng": "eminence",
        "heb": "חשיבות"
    },
    {
        "eng": "employment",
        "heb": "תעסוקה"
    },
    {
        "eng": "enable",
        "heb": "לאפשר"
    },
    {
        "eng": "encompass",
        "heb": "לכלול, להקיף"
    },
    {
        "eng": "endeavor",
        "heb": "להתאמץ, לשאוף בחוזקה, ניסיון, מאמץ"
    },
    {
        "eng": "enfeeble",
        "heb": "להחליש"
    },
    {
        "eng": "entire",
        "heb": "שלם, כולל"
    },
    {
        "eng": "entwine",
        "heb": "לשלב, לקלוע, לשזור"
    },
    {
        "eng": "epilogue",
        "heb": "אחרית דבר"
    },
    {
        "eng": "equivocal",
        "heb": "שאינו חד משמעי"
    },
    {
        "eng": "erudition",
        "heb": "השכלה עצומה"
    },
    {
        "eng": "eruption",
        "heb": "התפרצות"
    },
    {
        "eng": "escaped",
        "heb": "ברח, נמלט"
    },
    {
        "eng": "essence",
        "heb": "מהות"
    },
    {
        "eng": "establishment",
        "heb": "מוסד"
    },
    {
        "eng": "eulogize",
        "heb": "לפאר ולשבח"
    },
    {
        "eng": "eulogy",
        "heb": "הספד, יצירה שנועדה לפאר ולשבח"
    },
    {
        "eng": "eventual",
        "heb": "משהו שמגיע כתוצאה של משהו אחר"
    },
    {
        "eng": "evil",
        "heb": "רע, מרושע"
    },
    {
        "eng": "evolution",
        "heb": "התפתחות"
    },
    {
        "eng": "evolve",
        "heb": "להתפתח"
    },
    {
        "eng": "exaggeration",
        "heb": "הגזמה"
    },
    {
        "eng": "excavate",
        "heb": "לחשוף באמצעות חפירה"
    },
    {
        "eng": "excavation",
        "heb": "חפירה"
    },
    {
        "eng": "exciting",
        "heb": "מרגש, מעורר"
    },
    {
        "eng": "expanse",
        "heb": "שטח רחב ופתוח"
    },
    {
        "eng": "expedition",
        "heb": "מסע, משלחת חקר"
    },
    {
        "eng": "expenditure",
        "heb": "הוצאה, בזבוז, הוצאה"
    },
    {
        "eng": "explosion",
        "heb": "פיצוץ"
    },
    {
        "eng": "extent",
        "heb": "היקף, שיעור, מידה"
    },
    {
        "eng": "extremely",
        "heb": "מאד"
    },
    {
        "eng": "extremist",
        "heb": "דוגל בצעדים קיצוניים"
    },
    {
        "eng": "eyes shut",
        "heb": "עיניים עצומות"
    },
    {
        "eng": "fallacious",
        "heb": "מטעה"
    },
    {
        "eng": "fallacy",
        "heb": "רעיון מטעה"
    },
    {
        "eng": "falsehood",
        "heb": "שקר"
    },
    {
        "eng": "fame",
        "heb": "תהילה"
    },
    {
        "eng": "fascination",
        "heb": "משיכה, קסם"
    },
    {
        "eng": "fastidious",
        "heb": "דקדקן, אנין טעם, בררן"
    },
    {
        "eng": "fauna",
        "heb": "עולם החי"
    },
    {
        "eng": "favorite",
        "heb": "מועדף"
    },
    {
        "eng": "feast",
        "heb": "משתה, לזלול"
    },
    {
        "eng": "final",
        "heb": "סופי"
    },
    {
        "eng": "first aid",
        "heb": "עזרה ראשונה"
    },
    {
        "eng": "flex",
        "heb": "למתוח שריר"
    },
    {
        "eng": "flexibility",
        "heb": "גמישות"
    },
    {
        "eng": "foe",
        "heb": "אויב"
    },
    {
        "eng": "fond",
        "heb": "לחבב, מחבב"
    },
    {
        "eng": "foot",
        "heb": "רגל, מידה שאורכה כ-30 ס\"מ"
    },
    {
        "eng": "for instance",
        "heb": "לדוגמא, למשל"
    },
    {
        "eng": "foreseeable",
        "heb": "שניתן לחזותו מראש"
    },
    {
        "eng": "forge",
        "heb": "לעצב, ליצור, לחשל, לזייף"
    },
    {
        "eng": "formation",
        "heb": "תצורה, מבנה"
    },
    {
        "eng": "former/latter",
        "heb": "הראשון, האחרון (על פי סדר ציונם במשפט)"
    },
    {
        "eng": "formidable",
        "heb": "חזק, נאדר, מאיים, מפחיד"
    },
    {
        "eng": "fortnight",
        "heb": "שבועיים"
    },
    {
        "eng": "foundations",
        "heb": "יסודות"
    },
    {
        "eng": "founder",
        "heb": "מייסד"
    },
    {
        "eng": "freedom",
        "heb": "חופש"
    },
    {
        "eng": "fresh",
        "heb": "טרי"
    },
    {
        "eng": "fringe",
        "heb": "שוליים"
    },
    {
        "eng": "frivolous",
        "heb": "קל דעת, טפשי"
    },
    {
        "eng": "fruitful",
        "heb": "נושא פרי, פורה"
    },
    {
        "eng": "frustrate",
        "heb": "לתסכל"
    },
    {
        "eng": "fugitive",
        "heb": "פליט"
    },
    {
        "eng": "fundamentalist",
        "heb": "מאמין בתורה שבכתב, בלי פרשנויות"
    },
    {
        "eng": "furnish",
        "heb": "לרהט"
    },
    {
        "eng": "furniture",
        "heb": "ריהוט, רהיטים"
    },
    {
        "eng": "futile",
        "heb": "עקר, חסר ערך"
    },
    {
        "eng": "gender",
        "heb": "מגדר (זכר - נקבה)"
    },
    {
        "eng": "generate",
        "heb": "ליצור, לחולל"
    },
    {
        "eng": "ghost",
        "heb": "רוח רפאים"
    },
    {
        "eng": "give rise to",
        "heb": "להתחיל, לגרום ל..."
    },
    {
        "eng": "glasses",
        "heb": "משקפיים"
    },
    {
        "eng": "glimpse",
        "heb": "מבט חטוף, הצצה"
    },
    {
        "eng": "glory",
        "heb": "תהילה"
    },
    {
        "eng": "go",
        "heb": "ללכת"
    },
    {
        "eng": "gossip",
        "heb": "לרכל, רכילות"
    },
    {
        "eng": "gratitude",
        "heb": "הכרת תודה"
    },
    {
        "eng": "gray",
        "heb": "אפור"
    },
    {
        "eng": "grim",
        "heb": "עצוב, רציני, קשה, חמור"
    },
    {
        "eng": "grind",
        "heb": "לטחון"
    },
    {
        "eng": "handicapped",
        "heb": "מוגבל, נכה"
    },
    {
        "eng": "handsome",
        "heb": "נאה, יפה, נאה, נכבד"
    },
    {
        "eng": "harvest",
        "heb": "קציר, לקצור"
    },
    {
        "eng": "haste",
        "heb": "חיפזון"
    },
    {
        "eng": "have",
        "heb": "יש לי"
    },
    {
        "eng": "heartfelt",
        "heb": "כן, רציני, יוצא מהלב"
    },
    {
        "eng": "heartless",
        "heb": "אכזר, קשה לב"
    },
    {
        "eng": "heart-rending",
        "heb": "קורע לב"
    },
    {
        "eng": "heartthrob",
        "heb": "פעימת לב"
    },
    {
        "eng": "hereditary",
        "heb": "תורשתי"
    },
    {
        "eng": "heretic",
        "heb": "כופר"
    },
    {
        "eng": "hide",
        "heb": "להסתיר, להתחבא"
    },
    {
        "eng": "hit",
        "heb": "מכה, פגיעה, להכות"
    },
    {
        "eng": "hitherto",
        "heb": "עד כה, נכון לעכשיו"
    },
    {
        "eng": "hold",
        "heb": "להחזיק"
    },
    {
        "eng": "horrible",
        "heb": "איום ונורא"
    },
    {
        "eng": "horrify",
        "heb": "להפחיד"
    },
    {
        "eng": "hospitable",
        "heb": "מסביר פנים"
    },
    {
        "eng": "hostile",
        "heb": "עוין"
    },
    {
        "eng": "hour",
        "heb": "שעה"
    },
    {
        "eng": "hungry",
        "heb": "רעב"
    },
    {
        "eng": "hybrid",
        "heb": "בן כלאיים"
    },
    {
        "eng": "hypothesis",
        "heb": "השערה"
    },
    {
        "eng": "ice",
        "heb": "קרח"
    },
    {
        "eng": "identity",
        "heb": "זהות"
    },
    {
        "eng": "idle",
        "heb": "ללא מעש, בבטלה, עצלן, בטלן, חסר מעש"
    },
    {
        "eng": "ignite",
        "heb": "להצית"
    },
    {
        "eng": "illusive",
        "heb": "מטעה, מתעתע"
    },
    {
        "eng": "illusory",
        "heb": "מטעה, חמקמק"
    },
    {
        "eng": "immediate",
        "heb": "מיידי"
    },
    {
        "eng": "immensely",
        "heb": "במידה רבה"
    },
    {
        "eng": "imminent",
        "heb": "צפוי להתרחש \"או-טו-טו\""
    },
    {
        "eng": "immune",
        "heb": "מחוסן"
    },
    {
        "eng": "impartiality",
        "heb": "ניטרליות, הגינות"
    },
    {
        "eng": "implant",
        "heb": "להטביע, לקבוע באופן עמוק"
    },
    {
        "eng": "implication",
        "heb": "רמז, להיות מעורב"
    },
    {
        "eng": "impregnable",
        "heb": "בלתי מנוצח, שאין להכניעו"
    },
    {
        "eng": "imprison",
        "heb": "לכלוא"
    },
    {
        "eng": "in vain",
        "heb": "לשווא"
    },
    {
        "eng": "inaccurate",
        "heb": "לא מדוייק"
    },
    {
        "eng": "inclined",
        "heb": "נוטה"
    },
    {
        "eng": "indifferent",
        "heb": "חסר עניין, אדיש"
    },
    {
        "eng": "ingenious",
        "heb": "גאוני"
    },
    {
        "eng": "ingredient",
        "heb": "מרכיב, רכיב"
    },
    {
        "eng": "inherent",
        "heb": "שטבוע במהות הדבר"
    },
    {
        "eng": "insistence",
        "heb": "עקשנות"
    },
    {
        "eng": "inspection",
        "heb": "בדיקה, פיקוח"
    },
    {
        "eng": "inspector",
        "heb": "מפקח"
    },
    {
        "eng": "inspire",
        "heb": "להעניק השראה"
    },
    {
        "eng": "instantaneous",
        "heb": "מיידי"
    },
    {
        "eng": "instigate",
        "heb": "להסית"
    },
    {
        "eng": "institution",
        "heb": "מוסד \\ ארגון"
    },
    {
        "eng": "insulation",
        "heb": "בידוד"
    },
    {
        "eng": "insuperable",
        "heb": "שלא ניתן לגבור עליו"
    },
    {
        "eng": "intensity",
        "heb": "עצמה ניכרת, העמקה"
    },
    {
        "eng": "intensive",
        "heb": "מעמיק, רב עצמה"
    },
    {
        "eng": "intent",
        "heb": "מתעקש, רוצה מאד, כוונה"
    },
    {
        "eng": "interesting",
        "heb": "מעניין"
    },
    {
        "eng": "interim",
        "heb": "זמני"
    },
    {
        "eng": "intermission",
        "heb": "הפסקה"
    },
    {
        "eng": "interpret",
        "heb": "לפרש, לתרגם"
    },
    {
        "eng": "interpreter",
        "heb": "פרשן, מתורגמן"
    },
    {
        "eng": "interval",
        "heb": "מרווח"
    },
    {
        "eng": "invariable",
        "heb": "קבוע, שאינו משתנה"
    },
    {
        "eng": "invention",
        "heb": "המצאה"
    },
    {
        "eng": "invest",
        "heb": "להשקיע"
    },
    {
        "eng": "involved",
        "heb": "מעורב"
    },
    {
        "eng": "item",
        "heb": "פריט"
    },
    {
        "eng": "jest",
        "heb": "מהתלה"
    },
    {
        "eng": "jester",
        "heb": "ליצן חצר"
    },
    {
        "eng": "journalism",
        "heb": "עיתונות"
    },
    {
        "eng": "junction",
        "heb": "צומת"
    },
    {
        "eng": "juncture",
        "heb": "הצטלבות (בזמן)"
    },
    {
        "eng": "jury",
        "heb": "חבר מושבעים"
    },
    {
        "eng": "juvenile",
        "heb": "צעיר, של נוער, קטין"
    },
    {
        "eng": "juxtapose",
        "heb": "להציב זה לצד זה"
    },
    {
        "eng": "keen",
        "heb": "חד, שואף מאד לדבר מה"
    },
    {
        "eng": "kernel",
        "heb": "גלעין"
    },
    {
        "eng": "kid",
        "heb": "ילד/ה"
    },
    {
        "eng": "kind of",
        "heb": "סוג של"
    },
    {
        "eng": "kindle",
        "heb": "להבעיר"
    },
    {
        "eng": "knight",
        "heb": "אביר"
    },
    {
        "eng": "languish",
        "heb": "הולך ונחלש, נוטה לאפיסת כוחות"
    },
    {
        "eng": "languor",
        "heb": "חולשה, אפיסת כוחות"
    },
    {
        "eng": "lazy",
        "heb": "עצלן"
    },
    {
        "eng": "lead",
        "heb": "להוביל, עופרת"
    },
    {
        "eng": "learn",
        "heb": "ללמוד"
    },
    {
        "eng": "leave",
        "heb": "לעזוב, להשאיר"
    },
    {
        "eng": "legitimate",
        "heb": "לגיטימי, בעל תוקף חוקי או חברתי"
    },
    {
        "eng": "let",
        "heb": "להתיר, לשכור, להשכיר"
    },
    {
        "eng": "liable",
        "heb": "אחראי, מחוייב"
    },
    {
        "eng": "liberty",
        "heb": "חירות"
    },
    {
        "eng": "lifelong",
        "heb": "לכל החיים, לכל משך החיים"
    },
    {
        "eng": "literal",
        "heb": "מילולי"
    },
    {
        "eng": "living room",
        "heb": "סלון"
    },
    {
        "eng": "loath",
        "heb": "לתעב"
    },
    {
        "eng": "loose",
        "heb": "רפוי"
    },
    {
        "eng": "lucid",
        "heb": "צלול בדעתו"
    },
    {
        "eng": "luck",
        "heb": "מזל"
    },
    {
        "eng": "maintenance",
        "heb": "תחזוקה"
    },
    {
        "eng": "make",
        "heb": "לעשות, להכין"
    },
    {
        "eng": "malice",
        "heb": "רוע"
    },
    {
        "eng": "malignant",
        "heb": "ממאיר"
    },
    {
        "eng": "man",
        "heb": "גבר, לאייש"
    },
    {
        "eng": "mandatory",
        "heb": "חובה"
    },
    {
        "eng": "manipulate",
        "heb": "להפעיל"
    },
    {
        "eng": "manual",
        "heb": "שנעשה ביד, ידני"
    },
    {
        "eng": "manually",
        "heb": "ביד, ידנית"
    },
    {
        "eng": "martyr",
        "heb": "קדוש מעונה"
    },
    {
        "eng": "maverick",
        "heb": "אדם בעל דעות עצמאיות לא שמרניות"
    },
    {
        "eng": "means",
        "heb": "דרכים, שיטות, אמצעים, אמצעים כספיים"
    },
    {
        "eng": "medical",
        "heb": "רפואי"
    },
    {
        "eng": "meet",
        "heb": "לפגוש"
    },
    {
        "eng": "menu",
        "heb": "תפריט"
    },
    {
        "eng": "messenger",
        "heb": "שליח"
    },
    {
        "eng": "minute",
        "heb": "דקה"
    },
    {
        "eng": "misery",
        "heb": "אומללות, סבל"
    },
    {
        "eng": "mislead",
        "heb": "להשלות, להוליך שולל"
    },
    {
        "eng": "mixture",
        "heb": "תערובת"
    },
    {
        "eng": "modification",
        "heb": "תיקון, שינוי"
    },
    {
        "eng": "moment",
        "heb": "רגע"
    },
    {
        "eng": "momentary",
        "heb": "רגעי, בכל רגע ורגע"
    },
    {
        "eng": "motion",
        "heb": "תנועה"
    },
    {
        "eng": "municipal",
        "heb": "עירוני, של רשות מקומית"
    },
    {
        "eng": "mutual",
        "heb": "הדדי, משותף"
    },
    {
        "eng": "myth",
        "heb": "סיפור אגדה עתיק, מיתוס, אגדה"
    },
    {
        "eng": "neat",
        "heb": "נקי, מסודר, יעיל, עשוי היטב"
    },
    {
        "eng": "necessity",
        "heb": "משהו חיוני, צורך"
    },
    {
        "eng": "needle",
        "heb": "מחט"
    },
    {
        "eng": "net",
        "heb": "רשת"
    },
    {
        "eng": "news",
        "heb": "חדשות"
    },
    {
        "eng": "nightmare",
        "heb": "סיוט, חלום בלהות"
    },
    {
        "eng": "nominal",
        "heb": "נומינלי, קיים בתיאוריה, קיים בשמו בלבד, בעל חשיבות מזערית"
    },
    {
        "eng": "north",
        "heb": "צפון"
    },
    {
        "eng": "noticeable",
        "heb": "שקל להבחין בו"
    },
    {
        "eng": "noticeably",
        "heb": "באופן שקל להבחין בו"
    },
    {
        "eng": "nun",
        "heb": "נזירה"
    },
    {
        "eng": "objection",
        "heb": "התנגדות"
    },
    {
        "eng": "obscure",
        "heb": "מוזר, ידוע למעטים, מעורפל, לא ברור, לערפל, לטשטש"
    },
    {
        "eng": "obsessed",
        "heb": "אחוז דיבוק"
    },
    {
        "eng": "obvious",
        "heb": "ברור"
    },
    {
        "eng": "occupation",
        "heb": "מקצוע, תחום תעסוקה, תפיסת טריטוריה על ידי מדינה או צבא"
    },
    {
        "eng": "on account of",
        "heb": "בגלל"
    },
    {
        "eng": "opportune",
        "heb": "משהו שקרה בעיתוי מוצלח"
    },
    {
        "eng": "opportunism",
        "heb": "ניצול כל הזדמנות לרווח"
    },
    {
        "eng": "oppose",
        "heb": "להתנגד"
    },
    {
        "eng": "oppress",
        "heb": "לדכא"
    },
    {
        "eng": "oppression",
        "heb": "דיכוי"
    },
    {
        "eng": "orange",
        "heb": "תפוז, כתום"
    },
    {
        "eng": "oscillate",
        "heb": "להיטלטל, להתנודד"
    },
    {
        "eng": "ostentatious",
        "heb": "ראוותני, יומרני, גנדרני"
    },
    {
        "eng": "outdo",
        "heb": "להאפיל, לעשות טוב יותר"
    },
    {
        "eng": "outgrowth",
        "heb": "תוצאה טבעית של משהו"
    },
    {
        "eng": "outrage",
        "heb": "שערורייה"
    },
    {
        "eng": "outspread",
        "heb": "לפרוש לרווחה"
    },
    {
        "eng": "overrate",
        "heb": "להעריך יתר על המידה"
    },
    {
        "eng": "painful",
        "heb": "כואב"
    },
    {
        "eng": "parents",
        "heb": "הורים"
    },
    {
        "eng": "participant",
        "heb": "משתתף"
    },
    {
        "eng": "peak",
        "heb": "שיא, פסגה (גם של הר וגם של אירוע)"
    },
    {
        "eng": "perception",
        "heb": "תפיסה, ראייה לעומק"
    },
    {
        "eng": "perish",
        "heb": "להירקב, להיחרב, למות"
    },
    {
        "eng": "permeate",
        "heb": "להתפשט, לחדור"
    },
    {
        "eng": "perplexed",
        "heb": "לחוש בלבול ודאגה"
    },
    {
        "eng": "persevere",
        "heb": "להתמיד"
    },
    {
        "eng": "pertinent",
        "heb": "שייך לנושא, רלוונטי"
    },
    {
        "eng": "phrase",
        "heb": "ביטוי (שמשתמשים בו כיחידה אחת)"
    },
    {
        "eng": "pink",
        "heb": "ורוד"
    },
    {
        "eng": "pocket",
        "heb": "כיס"
    },
    {
        "eng": "portion",
        "heb": "חלק משלם, מנה"
    },
    {
        "eng": "posture",
        "heb": "יציבה, תנוחה"
    },
    {
        "eng": "preach",
        "heb": "לשאת דרשה"
    },
    {
        "eng": "preacher",
        "heb": "מטיף (בדר\"כ כומר)"
    },
    {
        "eng": "precede",
        "heb": "כאשר אירוע מקדים אירוע אחר"
    },
    {
        "eng": "preclude",
        "heb": "למנוע מאירוע להתקיים"
    },
    {
        "eng": "predator",
        "heb": "טורף"
    },
    {
        "eng": "prejudicial",
        "heb": "גזעני"
    },
    {
        "eng": "preventive",
        "heb": "מניעתי"
    },
    {
        "eng": "priceless",
        "heb": "ללא מחיר, בעל ערך עצום"
    },
    {
        "eng": "procure",
        "heb": "להשיג משהו שקשה להשגה"
    },
    {
        "eng": "production",
        "heb": "ייצור"
    },
    {
        "eng": "prompt",
        "heb": "לגרום למשהו שיקרה, מהיר, מיידי"
    },
    {
        "eng": "propagate",
        "heb": "להתרבות"
    },
    {
        "eng": "prospect",
        "heb": "סיכויים, אפשרויות"
    },
    {
        "eng": "provisional",
        "heb": "זמני, ארעי"
    },
    {
        "eng": "provisions",
        "heb": "אספקה"
    },
    {
        "eng": "purple",
        "heb": "סגול"
    },
    {
        "eng": "put",
        "heb": "לשים"
    },
    {
        "eng": "qualifications",
        "heb": "נתונים, כישורים"
    },
    {
        "eng": "quarrel",
        "heb": "ריב, לריב"
    },
    {
        "eng": "quest",
        "heb": "מסע בחיפוש אחר דבר מה"
    },
    {
        "eng": "quit",
        "heb": "לפרוש"
    },
    {
        "eng": "radical",
        "heb": "קיצוני"
    },
    {
        "eng": "radicalism",
        "heb": "קיצוניות"
    },
    {
        "eng": "rate",
        "heb": "קצב, שער (במסחר), להעריך, לאמוד, לדרג"
    },
    {
        "eng": "read",
        "heb": "לקרוא"
    },
    {
        "eng": "reconciliation",
        "heb": "פיוס"
    },
    {
        "eng": "recuperate",
        "heb": "להחלים"
    },
    {
        "eng": "redundant",
        "heb": "מיותר, חוזר על עצמו"
    },
    {
        "eng": "refrain",
        "heb": "להימנע מ..."
    },
    {
        "eng": "relate to",
        "heb": "להתייחס ל..."
    },
    {
        "eng": "relation",
        "heb": "קשר, קרבה משפחתית"
    },
    {
        "eng": "relief",
        "heb": "הקלה, רווחה, מחליף"
    },
    {
        "eng": "remark",
        "heb": "להעיר (הערה)"
    },
    {
        "eng": "remind",
        "heb": "להזכיר"
    },
    {
        "eng": "reminder",
        "heb": "תזכורת"
    },
    {
        "eng": "remnant",
        "heb": "שייר, שריד"
    },
    {
        "eng": "representation",
        "heb": "ייצוג"
    },
    {
        "eng": "representative",
        "heb": "נציג"
    },
    {
        "eng": "reprimand",
        "heb": "לנזוף"
    },
    {
        "eng": "reprove",
        "heb": "לגעור"
    },
    {
        "eng": "repudiate",
        "heb": "להתכחש, לגנות, להתנער מ..."
    },
    {
        "eng": "repugnant",
        "heb": "מבחיל"
    },
    {
        "eng": "requirement",
        "heb": "צורך, דרישה"
    },
    {
        "eng": "residue",
        "heb": "שייר"
    },
    {
        "eng": "resolution",
        "heb": "החלטה נחושה לבצע משהו"
    },
    {
        "eng": "respectable",
        "heb": "מעורר כבוד, מכובד"
    },
    {
        "eng": "response",
        "heb": "תגובה, תשובה"
    },
    {
        "eng": "restatement",
        "heb": "ניסוח מחדש"
    },
    {
        "eng": "restraint",
        "heb": "איפוק, ריסון"
    },
    {
        "eng": "return",
        "heb": "לחזור"
    },
    {
        "eng": "revert",
        "heb": "לחזור לשיטה הקודמת"
    },
    {
        "eng": "risky",
        "heb": "מסוכן, שטמון בו סיכון"
    },
    {
        "eng": "roam",
        "heb": "לשוטט"
    },
    {
        "eng": "rout",
        "heb": "להנחיל תבוסה, להביס, הנחלת תבוסה"
    },
    {
        "eng": "routine",
        "heb": "שגרתי, שגרה"
    },
    {
        "eng": "run",
        "heb": "לרוץ, לנהל"
    },
    {
        "eng": "rush",
        "heb": "נהירה"
    },
    {
        "eng": "ruthless",
        "heb": "אכזרי, חסר רחמים"
    },
    {
        "eng": "sabotage",
        "heb": "חבלה, לחבל"
    },
    {
        "eng": "satisfactory",
        "heb": "משביע רצון"
    },
    {
        "eng": "saturnine",
        "heb": "עצוב, קודר, זועף"
    },
    {
        "eng": "scent",
        "heb": "ניחוח"
    },
    {
        "eng": "scheme",
        "heb": "תוכנית"
    },
    {
        "eng": "scorch",
        "heb": "לצרוב, לחרוך"
    },
    {
        "eng": "scream",
        "heb": "לצרוח, צרחה"
    },
    {
        "eng": "scrutinize",
        "heb": "לבדוק, לחקור, לבחון בקפידה, לעיין"
    },
    {
        "eng": "security",
        "heb": "בטחון"
    },
    {
        "eng": "see",
        "heb": "לראות"
    },
    {
        "eng": "separate",
        "heb": "להפריד, נפרד, לא מחובר"
    },
    {
        "eng": "serene",
        "heb": "שליו"
    },
    {
        "eng": "set",
        "heb": "סט, מערכת, לקבוע, להגדיר"
    },
    {
        "eng": "severely",
        "heb": "באופן חמור, באופן רציני"
    },
    {
        "eng": "shapeless",
        "heb": "חסר צורה"
    },
    {
        "eng": "shine",
        "heb": "לזרוח"
    },
    {
        "eng": "shock",
        "heb": "הלם, פליאה, לגרום למישהו פליאה"
    },
    {
        "eng": "shocking",
        "heb": "מזעזע, מפליא, מהמם"
    },
    {
        "eng": "shortcut",
        "heb": "קיצור דרך (גם במשמעות המושאלת)"
    },
    {
        "eng": "shrewd",
        "heb": "פיקח"
    },
    {
        "eng": "shrewdly",
        "heb": "בפיקחות"
    },
    {
        "eng": "shrewdness",
        "heb": "פיקחות"
    },
    {
        "eng": "shut",
        "heb": "לסגור"
    },
    {
        "eng": "signify",
        "heb": "לסמן, להביע, לתת סימן"
    },
    {
        "eng": "similarity",
        "heb": "דמיון"
    },
    {
        "eng": "simultaneous",
        "heb": "בו-זמנית, באותו הזמן"
    },
    {
        "eng": "sincere",
        "heb": "כן"
    },
    {
        "eng": "sing",
        "heb": "לשיר"
    },
    {
        "eng": "sinister",
        "heb": "רע, מפחיד"
    },
    {
        "eng": "sit",
        "heb": "לשבת"
    },
    {
        "eng": "situate",
        "heb": "למקם"
    },
    {
        "eng": "situated",
        "heb": "ממוקם"
    },
    {
        "eng": "skillful",
        "heb": "מיומן"
    },
    {
        "eng": "skimp",
        "heb": "להתקמצן"
    },
    {
        "eng": "argumentative",
        "heb": "וכחן"
    },
    {
        "eng": "aroma",
        "heb": "ניחוח"
    },
    {
        "eng": "arouse",
        "heb": "לעורר"
    },
    {
        "eng": "arrangement",
        "heb": "סידור"
    },
    {
        "eng": "ascribe",
        "heb": "לייחס, לשייך"
    },
    {
        "eng": "assault",
        "heb": "לתקוף, תקיפה, התקפה"
    },
    {
        "eng": "assembly",
        "heb": "הרכבה"
    },
    {
        "eng": "assert",
        "heb": "לעמוד על, להכריז, לתבוע"
    },
    {
        "eng": "assertion",
        "heb": "טענה תקיפה"
    },
    {
        "eng": "assertive",
        "heb": "החלטי"
    },
    {
        "eng": "assertively",
        "heb": "באופן החלטי"
    },
    {
        "eng": "assimilate",
        "heb": "לספוג, להיטמע"
    },
    {
        "eng": "associated",
        "heb": "מקושר, מתלווה ל..."
    },
    {
        "eng": "astonish",
        "heb": "מדהים, להדהים"
    },
    {
        "eng": "attendance",
        "heb": "נוכחות"
    },
    {
        "eng": "audacious",
        "heb": "נועז"
    },
    {
        "eng": "aunt",
        "heb": "דודה"
    },
    {
        "eng": "authenticity",
        "heb": "אותנטיות, אמיתיות"
    },
    {
        "eng": "authoritative",
        "heb": "סמכותי"
    },
    {
        "eng": "avarice",
        "heb": "תאוות בצע"
    },
    {
        "eng": "avaricious",
        "heb": "תאב בצע"
    },
    {
        "eng": "awe inspiring",
        "heb": "מעורר יראת כבוד"
    },
    {
        "eng": "axis",
        "heb": "ציר"
    },
    {
        "eng": "azure",
        "heb": "תכלת"
    },
    {
        "eng": "vaccination",
        "heb": "חיסון"
    },
    {
        "eng": "vague",
        "heb": "לא ברור, מעורפל"
    },
    {
        "eng": "valuate",
        "heb": "להעריך"
    },
    {
        "eng": "vapor",
        "heb": "אד"
    },
    {
        "eng": "velocity",
        "heb": "מהירות"
    },
    {
        "eng": "vengeance",
        "heb": "נקמה"
    },
    {
        "eng": "verifiable",
        "heb": "ניתן לבירור"
    },
    {
        "eng": "version",
        "heb": "גרסה"
    },
    {
        "eng": "vertebrae",
        "heb": "חוליות עמוד השדרה"
    },
    {
        "eng": "visibility",
        "heb": "ראות"
    },
    {
        "eng": "vision",
        "heb": "ראייה"
    },
    {
        "eng": "wail",
        "heb": "בכי,זעקה, לילל"
    },
    {
        "eng": "west",
        "heb": "מערב"
    },
    {
        "eng": "wet",
        "heb": "רטוב"
    },
    {
        "eng": "wharf",
        "heb": "מזח"
    },
    {
        "eng": "whereby",
        "heb": "שבאמצעותו"
    },
    {
        "eng": "whole",
        "heb": "הכל, שלם"
    },
    {
        "eng": "wicked",
        "heb": "רשע, רע"
    },
    {
        "eng": "wickedness",
        "heb": "רוע, רשע"
    },
    {
        "eng": "windmill",
        "heb": "טחנת רוח"
    },
    {
        "eng": "wink",
        "heb": "לקרוץ"
    },
    {
        "eng": "worth",
        "heb": "שווי"
    },
    {
        "eng": "wring",
        "heb": "לסחוט"
    },
    {
        "eng": "x-ray",
        "heb": "צילום רנטגן"
    },
    {
        "eng": "yearn",
        "heb": "לכמוה"
    },
    {
        "eng": "yell",
        "heb": "לצעוק"
    },
    {
        "eng": "youngster",
        "heb": "צעיר"
    },
    {
        "eng": "zeal",
        "heb": "התלהבות, מרץ"
    },
    {
        "eng": "zest",
        "heb": "שמחת חיים, הרגשת שביעות רצון ועניין"
    },
    {
        "eng": "zoo",
        "heb": "גן חיות"
    },
    {
        "eng": "tiresome",
        "heb": "מעייף, מייגע"
    },
    {
        "eng": "toilet",
        "heb": "בית שימוש"
    },
    {
        "eng": "tooth",
        "heb": "שן"
    },
    {
        "eng": "torch",
        "heb": "פנס, לפיד"
    },
    {
        "eng": "torment",
        "heb": "לענות (בעינויים), להציק, לגרום סבל רב, סבל רב, עינוי"
    },
    {
        "eng": "tortoise",
        "heb": "צב"
    },
    {
        "eng": "towards",
        "heb": "לכיוון, לקראת, לעבר"
    },
    {
        "eng": "traditional",
        "heb": "מסורתי"
    },
    {
        "eng": "traditionally",
        "heb": "באופן מסורתי"
    },
    {
        "eng": "tranquil",
        "heb": "שקט, רגוע"
    },
    {
        "eng": "transformation",
        "heb": "שינוי"
    },
    {
        "eng": "transitory",
        "heb": "בר-חלוף"
    },
    {
        "eng": "translation",
        "heb": "תרגום"
    },
    {
        "eng": "travel",
        "heb": "לטייל"
    },
    {
        "eng": "traveler",
        "heb": "טייל"
    },
    {
        "eng": "tremendous",
        "heb": "עצום, גדול"
    },
    {
        "eng": "trend",
        "heb": "מגמה"
    },
    {
        "eng": "trivial",
        "heb": "שולי"
    },
    {
        "eng": "troupe",
        "heb": "להקה, הרכב"
    },
    {
        "eng": "trousers",
        "heb": "מכנסיים"
    },
    {
        "eng": "typical",
        "heb": "אופייני"
    },
    {
        "eng": "tyranny",
        "heb": "שלטון עריצות"
    },
    {
        "eng": "tyrant",
        "heb": "עריץ"
    },
    {
        "eng": "unanimous",
        "heb": "פה-אחד"
    },
    {
        "eng": "unavoidable",
        "heb": "בלתי נמנע"
    },
    {
        "eng": "underline",
        "heb": "להדגיש"
    },
    {
        "eng": "undermine",
        "heb": "לחתור תחת, לסקל"
    },
    {
        "eng": "undertaker",
        "heb": "קברן"
    },
    {
        "eng": "unison",
        "heb": "ביחד, בצוותא"
    },
    {
        "eng": "unity",
        "heb": "אחדות"
    },
    {
        "eng": "unnatural",
        "heb": "לא טבעי"
    },
    {
        "eng": "upset",
        "heb": "מודאג, מוטרד, נסער, להדאיג, להטריד"
    },
    {
        "eng": "upwards",
        "heb": "כלפי מעלה"
    },
    {
        "eng": "suggestion",
        "heb": "הצעה"
    },
    {
        "eng": "superfluous",
        "heb": "עודף, מיותר"
    },
    {
        "eng": "supper",
        "heb": "ארוחת ערב"
    },
    {
        "eng": "suppose",
        "heb": "לשער"
    },
    {
        "eng": "supposedly",
        "heb": "כביכול, כנראה, לכאורה"
    },
    {
        "eng": "supposition",
        "heb": "השערה"
    },
    {
        "eng": "sure",
        "heb": "להיות בטוח במשהו"
    },
    {
        "eng": "surreptitiously",
        "heb": "באופן חשאי, סודי"
    },
    {
        "eng": "suspension",
        "heb": "דחייה, השהייה"
    },
    {
        "eng": "suture",
        "heb": "לבצע תפר רפואי"
    },
    {
        "eng": "swim",
        "heb": "לשחות"
    },
    {
        "eng": "switch on/off",
        "heb": "להדליק/לכבות"
    },
    {
        "eng": "take",
        "heb": "לקחת"
    },
    {
        "eng": "take advantage of",
        "heb": "לנצל"
    },
    {
        "eng": "take off",
        "heb": "להמריא"
    },
    {
        "eng": "taxation",
        "heb": "מיסוי"
    },
    {
        "eng": "teach",
        "heb": "ללמד"
    },
    {
        "eng": "technique",
        "heb": "שיטה (טכניקה)"
    },
    {
        "eng": "tell",
        "heb": "לספר, לומר"
    },
    {
        "eng": "temper",
        "heb": "מזג רגזני"
    },
    {
        "eng": "temperament",
        "heb": "מזג, אופי"
    },
    {
        "eng": "temptation",
        "heb": "פיתוי"
    },
    {
        "eng": "tend to",
        "heb": "לנטות ל..."
    },
    {
        "eng": "tense",
        "heb": "זמן דקדוקי, מתוח"
    },
    {
        "eng": "think",
        "heb": "לחשוב על..."
    },
    {
        "eng": "thirst",
        "heb": "צמא"
    },
    {
        "eng": "thorax",
        "heb": "חזה, בית החזה"
    },
    {
        "eng": "thorough",
        "heb": "יסודי"
    },
    {
        "eng": "thrust",
        "heb": "להדוף"
    },
    {
        "eng": "smell",
        "heb": "להריח"
    },
    {
        "eng": "smother",
        "heb": "לכסות, לחנוק"
    },
    {
        "eng": "snout",
        "heb": "חוטם של בעל חיים"
    },
    {
        "eng": "society",
        "heb": "חברה"
    },
    {
        "eng": "solidarity",
        "heb": "אחדות"
    },
    {
        "eng": "son",
        "heb": "בן"
    },
    {
        "eng": "south",
        "heb": "דרום"
    },
    {
        "eng": "speak",
        "heb": "לדבר"
    },
    {
        "eng": "specific",
        "heb": "מסויים, מפורט"
    },
    {
        "eng": "spelling",
        "heb": "איות"
    },
    {
        "eng": "split",
        "heb": "מחולק, לפצל, לחלק"
    },
    {
        "eng": "stagger",
        "heb": "ללכת לא יציב, להתנודד"
    },
    {
        "eng": "standpoint",
        "heb": "עמדה"
    },
    {
        "eng": "start off",
        "heb": "להתחיל, להיפתח ב..."
    },
    {
        "eng": "stench",
        "heb": "סירחון"
    },
    {
        "eng": "stenographer",
        "heb": "קצרן"
    },
    {
        "eng": "stimulus",
        "heb": "גירוי"
    },
    {
        "eng": "stink",
        "heb": "להסריח"
    },
    {
        "eng": "straight",
        "heb": "ישר"
    },
    {
        "eng": "stranger",
        "heb": "זר"
    },
    {
        "eng": "stratum",
        "heb": "שכבה, רובד"
    },
    {
        "eng": "strenuous",
        "heb": "מאמץ, קשה"
    },
    {
        "eng": "stretch",
        "heb": "להימתח, למתוח"
    },
    {
        "eng": "stuntman",
        "heb": "פעלולן (בסרטים)"
    },
    {
        "eng": "style",
        "heb": "סגנון"
    },
    {
        "eng": "subconscious",
        "heb": "תת מודע"
    },
    {
        "eng": "subscribe",
        "heb": "לעשות מנוי"
    },
    {
        "eng": "sudden",
        "heb": "פתאומי"
    },
    {
        "eng": "sue",
        "heb": "לתבוע"
    },
    {
        "eng": "sufficiently",
        "heb": "באופן שיספק"
    },
    {
        "eng": "suffocate",
        "heb": "להיחנק"
    },
    {
        "eng": "suffocation",
        "heb": "חנק"
    }
]
undefined



const readingData = [
    {
        title: "1. Evolutionary Biology: Symbiosis",
        paragraphs: [
            "Symbiosis, a term coined by Heinrich Anton de Bary in 1879, describes any close and long-term biological interaction between two different biological organisms. While often associated with mutually beneficial relationships, known as mutualism, symbiosis also encompasses parasitic interactions where one organism benefits at the expense of the host.",
            "A classic example of mutualistic symbiosis is the relationship between clownfish and sea anemones. The anemone provides the clownfish with protection from predators via its stinging tentacles, to which the clownfish is immune. In return, the clownfish defends the anemone from its predators and provides nutrients through its waste."
        ],
        questions: [
            {
                question: "1. According to the text, the term 'symbiosis' exclusively refers to relationships where both organisms benefit.",
                options: ["A) True, because it encompasses mutualism.", "B) False, because it also includes parasitism.", "C) True, because clownfish and anemones protect each other.", "D) False, because Heinrich de Bary studied parasites."],
                correctIndex: 1
            },
            {
                question: "2. The word 'encompasses' in the first paragraph is closest in meaning to:",
                options: ["A) Rejects", "B) Includes", "C) Surrounds", "D) Destroys"],
                correctIndex: 1
            }
        ]
    },
    {
        title: "2. Psychology: Cognitive Dissonance",
        paragraphs: [
            "In the field of psychology, cognitive dissonance is the mental discomfort experienced by someone who holds two or more contradictory beliefs, ideas, or values. This theory, formulated by Leon Festinger in 1957, suggests that humans have an innate drive to ensure that their internal beliefs and external behaviors remain consistent.",
            "When a discrepancy occurs, individuals will take steps to reduce the dissonance. This can involve rationalizing the behavior, altering one of the conflicting beliefs, or ignoring information that exacerbates the contradiction. For instance, a person who smokes despite knowing it causes cancer might rationalize the habit by claiming it helps them mitigate stress."
        ],
        questions: [
            {
                question: "1. How do individuals typically respond to cognitive dissonance according to the text?",
                options: ["A) By actively seeking out contradictory information.", "B) By attempting to align their beliefs and actions to reduce discomfort.", "C) By abandoning their core beliefs entirely.", "D) By accepting that humans are inherently irrational."],
                correctIndex: 1
            },
            {
                question: "2. What is the purpose of the smoking example in the second paragraph?",
                options: ["A) To prove that smoking causes cancer.", "B) To show that stress is a primary driver of addiction.", "C) To illustrate how individuals rationalize conflicting behaviors.", "D) To condemn the behavior of smokers."],
                correctIndex: 2
            }
        ]
    },
    {
        title: "3. History: The Industrial Revolution",
        paragraphs: [
            "The Industrial Revolution, which commenced in Britain in the late 18th century, marked a profound turning point in human history. It catalyzed a shift from agrarian, handicraft-based economies to ones dominated by industry and machine manufacturing. The advent of the steam engine, pioneered by James Watt, was instrumental in this transition, drastically increasing production capabilities.",
            "Consequently, the era witnessed unprecedented urbanization. Masses of people migrated from rural areas to burgeoning cities in search of factory employment. While this shift generated substantial economic growth, it also resulted in severe overcrowding, unsanitary living conditions, and the exploitation of the working class."
        ],
        questions: [
            {
                question: "1. What was a negative consequence of the Industrial Revolution mentioned in the text?",
                options: ["A) The invention of the steam engine.", "B) A shift back to agrarian economies.", "C) Unsanitary living conditions due to rapid urbanization.", "D) A decrease in overall factory employment."],
                correctIndex: 2
            }
        ]
    },
    {
        title: "4. Technology: Machine Learning",
        paragraphs: [
            "Machine learning, a subset of artificial intelligence, is predicated on the idea that systems can learn from data, identify patterns, and make decisions with minimal human intervention. Unlike traditional symbolic AI, which relies on explicitly programmed rules, machine learning algorithms iteratively improve their accuracy by being exposed to vast datasets.",
            "A prominent application of this technology is natural language processing (NLP), which enables computers to comprehend and generate human language. Despite its remarkable advancements, machine learning models are often criticized for their opacity, functioning as 'black boxes' where the exact reasoning behind a specific output remains elusive to researchers."
        ],
        questions: [
            {
                question: "1. How does machine learning differ from traditional symbolic AI?",
                options: ["A) It requires more human intervention.", "B) It learns iteratively from data rather than following explicit rules.", "C) It is unable to process human language.", "D) It functions as a completely transparent system."],
                correctIndex: 1
            },
            {
                question: "2. The term 'opacity' in the second paragraph implies that:",
                options: ["A) The models are physically dark.", "B) The models are easily understood.", "C) The decision-making process of the models is difficult to interpret.", "D) The models require too much electricity."],
                correctIndex: 2
            }
        ]
    },
    {
        title: "5. Art History: Impressionism",
        paragraphs: [
            "Emerging in France during the 19th century, Impressionism represented a radical departure from the rigid constraints of academic painting. Rather than striving for precise realism and historical subjects, Impressionist painters focused on capturing the fleeting effects of light and color in everyday scenes.",
            "Artists such as Claude Monet and Edgar Degas utilized short, visible brushstrokes and an unmixed color palette to convey the sensation of a moment rather than its exact details. Initially met with fierce derision from conservative art critics, the movement eventually gained widespread acclaim and fundamentally altered the trajectory of modern art."
        ],
        questions: [
            {
                question: "1. What was the primary focus of Impressionist painters?",
                options: ["A) Depicting grand historical events with precise realism.", "B) Conforming to the rigid rules of academic painting.", "C) Capturing the transient effects of light and color.", "D) Pleasing conservative art critics."],
                correctIndex: 2
            }
        ]
    },
    {
        title: "6. Economics: Inflationary Pressures",
        paragraphs: [
            "Inflation is defined as the sustained increase in the general price level of goods and services in an economy over a period of time. When the general price level rises, each unit of currency buys fewer goods and services; consequently, inflation reflects a reduction in the purchasing power per unit of money.",
            "Economists generally agree that high rates of inflation are caused by an excessive growth of the money supply. However, moderate inflation is often viewed positively, as it encourages consumption and investment rather than hoarding currency. Central banks continuously attempt to modulate interest rates to maintain inflation at a stable, targeted level."
        ],
        questions: [
            {
                question: "1. According to the text, why might moderate inflation be considered beneficial?",
                options: ["A) It severely reduces purchasing power.", "B) It encourages people to hoard their money.", "C) It stimulates economic activity through consumption and investment.", "D) It forces central banks to raise interest rates to maximum levels."],
                correctIndex: 2
            }
        ]
    },
    {
        title: "7. Linguistics: The Sapir-Whorf Hypothesis",
        paragraphs: [
            "The Sapir-Whorf hypothesis, a controversial theory in linguistics, posits that the structure of a language profoundly influences the cognitive processes and worldview of its speakers. According to the 'strong' version of this hypothesis, language entirely determines thought, meaning that individuals cannot comprehend concepts for which their language lacks specific terminology.",
            "Conversely, the 'weak' version suggests that language merely shapes or influences thought, making certain cognitive pathways more accessible than others. While modern linguists largely reject the strong deterministic view, the weak version remains a subject of vibrant academic debate and empirical research."
        ],
        questions: [
            {
                question: "1. What is the main difference between the 'strong' and 'weak' versions of the hypothesis?",
                options: ["A) The strong version argues that language has no effect on thought.", "B) The weak version claims that thought determines language structure.", "C) The strong version claims language dictates thought entirely, while the weak version claims it merely influences it.", "D) The strong version is accepted by modern linguists, while the weak version is rejected."],
                correctIndex: 2
            }
        ]
    },
    {
        title: "8. Astronomy: Dark Matter",
        paragraphs: [
            "Astrophysicists have long observed that galaxies rotate at speeds that defy the laws of classical physics based solely on their visible mass. If galaxies contained only the stars, gas, and dust we can observe, the gravitational pull would be insufficient to hold them together at such high rotational velocities; they would simply tear apart.",
            "To account for this anomaly, scientists postulate the existence of 'dark matter'—an invisible substance that does not emit, absorb, or reflect light, making it entirely undetectable by traditional astronomical instruments. It is estimated that dark matter constitutes approximately 85% of the total mass in the universe, yet its exact composition remains one of physics' greatest enigmas."
        ],
        questions: [
            {
                question: "1. Why did scientists hypothesize the existence of dark matter?",
                options: ["A) Because they observed it blocking light from distant stars.", "B) Because visible mass alone cannot explain the high rotational speeds of galaxies.", "C) Because classical physics laws were proven completely false.", "D) Because it emits a specific, detectable radiation."],
                correctIndex: 1
            },
            {
                question: "2. The word 'enigma' in the final sentence most closely means:",
                options: ["A) Solution", "B) Mystery", "C) Discovery", "D) Theory"],
                correctIndex: 1
            }
        ]
    },
    {
        title: "9. Geology: Plate Tectonics",
        paragraphs: [
            "The theory of plate tectonics revolutionized the field of geology in the mid-20th century. It proposes that the Earth's outer shell, the lithosphere, is divided into several massive plates that glide over the fluid-like asthenosphere beneath them. This continuous movement is driven by convection currents deep within the Earth's mantle.",
            "The interactions at the boundaries of these plates are responsible for the vast majority of seismic and volcanic activity on the planet. When plates collide, pull apart, or scrape against one another, the resulting friction and pressure lead to earthquakes, the formation of mountain ranges, and the creation of deep oceanic trenches."
        ],
        questions: [
            {
                question: "1. What is the primary cause of plate movement according to the text?",
                options: ["A) Volcanic eruptions on the surface.", "B) The gravitational pull of the moon.", "C) Convection currents in the Earth's mantle.", "D) Friction at the plate boundaries."],
                correctIndex: 2
            }
        ]
    },
    {
        title: "10. Philosophy: Utilitarianism",
        paragraphs: [
            "Utilitarianism is an ethical theory formulated by Jeremy Bentham and later refined by John Stuart Mill. Its core tenet is that the moral worth of an action is determined solely by its contribution to overall utility. In other words, an action is deemed 'right' if it promotes the greatest happiness for the greatest number of people.",
            "This consequentialist approach stands in stark contrast to deontological ethics, championed by Immanuel Kant, which argues that certain actions are inherently right or wrong regardless of their outcomes. Critics of utilitarianism often argue that it can be used to justify the infringement of individual rights, so long as the collective benefit is deemed sufficient."
        ],
        questions: [
            {
                question: "1. How does deontological ethics differ from utilitarianism?",
                options: ["A) Deontology focuses on outcomes, while utilitarianism focuses on rules.", "B) Deontology believes actions are inherently right or wrong, regardless of their consequences.", "C) Deontology aims for the greatest happiness for the greatest number.", "D) Deontology is an economic theory, not a moral one."],
                correctIndex: 1
            },
            {
                question: "2. According to critics, what is a major flaw of utilitarianism?",
                options: ["A) It focuses too much on the individual.", "B) It ignores the concept of happiness entirely.", "C) It might justify violating the rights of an individual for the sake of the majority.", "D) It is impossible to calculate utility."],
                correctIndex: 2
            }
        ]
    }
];