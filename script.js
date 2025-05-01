// Translations object for multilingual support
const translations = {
    'en': {
        // Page elements
        'title': 'YouTube Video Link Extractor',
        'subtitle': 'Extract video titles and links from a YouTube channel page',
        'url-label': 'YouTube video list URL:',
        'extract-btn': 'Extract',
        'example': 'Example',
        'result': 'Result',
        'copy-btn': 'Copy',
        'result-placeholder': 'Video titles and links will appear here...',
        'footer-title': 'YouTube Video Link Extractor',
        'copied': 'Copied!',
        'copy-code-btn': 'Copy',
        
        // Guide section
        'guide-title': 'Detailed guide for using the console',
        'guide-intro': 'If automatic extraction doesn\'t work, follow these steps:',
        'step1-title': '1. Open the YouTube video list page',
        'step1-desc': 'Open the YouTube channel videos page (e.g. https://www.youtube.com/@tvggraphics2423/videos)',
        'step2-title': '2. Open developer tools',
        'step2-desc1': 'Windows/Linux: Press <kbd>F12</kbd> OR right-click on the page and select "Inspect"',
        'step2-desc2': 'Mac: Press <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>I</kbd>',
        'step3-title': '3. Select the "Console" tab',
        'step3-desc': 'Look for the "Console" tab at the top or bottom of the developer tools',
        'step4-title': '4. Copy and run the code',
        'step4-desc': 'Copy the following code:',
        'step4-desc2': 'Paste it into the console (<kbd>Ctrl</kbd>+<kbd>V</kbd> or <kbd>Command</kbd>+<kbd>V</kbd>)',
        'step4-desc3': 'Press <kbd>Enter</kbd> to run the code',
        'step5-title': '5. Copy the result',
        'step5-desc1': 'The result will appear in the console',
        'step5-desc2': 'Right-click on the result and select "Copy string contents"',
        
        // Status messages
        'status-enter-url': 'Please enter a YouTube URL!',
        'status-invalid-url': 'Invalid YouTube URL! Use a channel video list URL.',
        'status-extraction': 'Extracting videos...',
        'status-success': 'Successfully extracted {count} videos!',
        'status-failure': 'Failed to extract videos. Try the console method.',
        'status-copy-empty': 'Nothing to copy!',
        'status-copied': 'Content copied to clipboard!',
        'status-error': 'Error: {message}',
        'status-cors-failed': 'Direct extraction failed. Please follow the detailed guide.',
        
        // Process messages
        'process-start': '1. Starting process...',
        'process-cors': '2. Connecting to CORS proxy...',
        'process-fetch': '3. Fetching YouTube page...',
        'process-response': '4. Processing response...',
        'process-parse': '5. Parsing HTML content...',
        'process-find': '6. Looking for video elements...',
        'process-alt-find': '   - Looking for alternative video elements...',
        'process-found': '7. Found {count} video elements, processing...',
        'process-progress': '   - Processed {current}/{total} videos...',
        'process-complete': '8. Processing complete: {processed}/{total} videos processed.',
        'process-result': '9. Extracted {count} video titles and links.',
        'process-fail': '9. Failed to extract videos. Try the console method.'
    },
    'hu': {
        // Page elements
        'title': 'Youtube linkek lekérése és listázása',
        'subtitle': 'Gyűjtsd ki a videók címeit és linkjeit egy YouTube csatorna videó oldaláról',
        'url-label': 'YouTube videólista URL:',
        'extract-btn': 'Kinyerés',
        'example': 'Példa',
        'result': 'Eredmény',
        'copy-btn': 'Másolás',
        'result-placeholder': 'Itt jelennek meg a videók címei és linkjei...',
        'footer-title': 'Youtube linkek lekérése és listázása',
        'copied': 'Másolva!',
        'copy-code-btn': 'Másolás',
        
        // Guide section
        'guide-title': 'Részletes útmutató a konzol használatához',
        'guide-intro': 'Ha az automatikus kinyerés nem működik, kövesd az alábbi lépéseket:',
        'step1-title': '1. Nyisd meg a YouTube videólista oldalt',
        'step1-desc': 'Nyisd meg a YouTube csatorna videók oldalát (pl. https://www.youtube.com/@tvggraphics2423/videos)',
        'step2-title': '2. Nyisd meg a fejlesztői eszközöket',
        'step2-desc1': 'Windows/Linux: Nyomd meg az <kbd>F12</kbd> billentyűt VAGY jobb klikk az oldalon és válaszd a "Vizsgálat" opciót',
        'step2-desc2': 'Mac: Nyomd meg a <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>I</kbd> billentyűkombinációt',
        'step3-title': '3. Válaszd a "Console" fület',
        'step3-desc': 'A fejlesztői eszközök tetején vagy alján keresd a "Console" vagy "Konzol" fület',
        'step4-title': '4. Másold be és futtasd a kódot',
        'step4-desc': 'Másold ki az alábbi kódot:',
        'step4-desc2': 'Illeszd be a konzolba (<kbd>Ctrl</kbd>+<kbd>V</kbd> vagy <kbd>Command</kbd>+<kbd>V</kbd>)',
        'step4-desc3': 'Nyomd meg az <kbd>Enter</kbd> billentyűt a kód futtatásához',
        'step5-title': '5. Másold ki az eredményt',
        'step5-desc1': 'Az eredmény a konzolban fog megjelenni',
        'step5-desc2': 'Kattints jobb gombbal az eredményre és válaszd a "Copy string contents" vagy "Szöveg másolása" opciót',
        
        // Status messages
        'status-enter-url': 'Kérlek adj meg egy YouTube URL-t!',
        'status-invalid-url': 'Érvénytelen YouTube URL! Használj csatorna videólista URL-t.',
        'status-extraction': 'Videók kinyerése folyamatban...',
        'status-success': 'Sikeresen kinyerve {count} videó!',
        'status-failure': 'Nem sikerült videókat kinyerni. Próbáld meg a konzol módszert.',
        'status-copy-empty': 'Nincs mit másolni!',
        'status-copied': 'Tartalom másolva a vágólapra!',
        'status-error': 'Hiba: {message}',
        'status-cors-failed': 'A közvetlen kinyerés nem sikerült. Kérlek kövesd a részletes útmutatót.',
        
        // Process messages
        'process-start': '1. Folyamat indítása...',
        'process-cors': '2. CORS proxy kapcsolódás...',
        'process-fetch': '3. YouTube oldal lekérése...',
        'process-response': '4. Válasz feldolgozása...',
        'process-parse': '5. HTML tartalom elemzése...',
        'process-find': '6. Videó elemek keresése...',
        'process-alt-find': '   - Alternatív videó elemek keresése...',
        'process-found': '7. {count} videó elem találva, feldolgozás...',
        'process-progress': '   - Feldolgozva {current}/{total} videó...',
        'process-complete': '8. Feldolgozás befejezve: {processed}/{total} videó feldolgozva.',
        'process-result': '9. Összesen {count} videó cím és link kinyerve.',
        'process-fail': '9. Nem sikerült videókat kinyerni. Próbáld meg a konzol módszert.'
    }
};

// Current language (default: English)
let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('youtube-url');
    const extractBtn = document.getElementById('extract-btn');
    const resultTextarea = document.getElementById('result');
    const copyBtn = document.getElementById('copy-btn');
    const statusElement = document.getElementById('status');
    const langToggle = document.getElementById('lang-toggle');
    const langDropdown = document.getElementById('lang-dropdown');
    const currentLangElement = document.getElementById('current-lang');
    const langLinks = document.querySelectorAll('.lang-dropdown a');

    // Initialize language
    setLanguage(currentLang);
    
    // Language toggle event
    langToggle.addEventListener('click', () => {
        langDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('show');
        }
    });
    
    // Language selection
    langLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            setLanguage(lang);
            langDropdown.classList.remove('show');
            
            // Update active class
            langLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Focus input on page load
    urlInput.focus();

    // Extract button click event
    extractBtn.addEventListener('click', () => {
        extractVideos();
    });

    // Enter key press in input field
    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            extractVideos();
        }
    });

    // Copy button click event
    copyBtn.addEventListener('click', () => {
        if (resultTextarea.value) {
            resultTextarea.select();
            document.execCommand('copy');
            showStatus(translations[currentLang]['status-copied'], 'success');
        } else {
            showStatus(translations[currentLang]['status-copy-empty'], 'error');
        }
    });

    // Main extraction function
    async function extractVideos() {
        const url = urlInput.value.trim();
        
        if (!url) {
            showStatus(translations[currentLang]['status-enter-url'], 'error');
            return;
        }

        if (!isValidYoutubeUrl(url)) {
            showStatus(translations[currentLang]['status-invalid-url'], 'error');
            return;
        }

        showStatus(translations[currentLang]['status-extraction'], '');
        resultTextarea.value = translations[currentLang]['process-start'];
        
        try {
            // Use a CORS proxy to fetch the YouTube page
            updateResult(translations[currentLang]['process-cors']);
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
            
            updateResult(translations[currentLang]['process-fetch']);
            const response = await fetch(proxyUrl);
            
            if (!response.ok) {
                throw new Error('Hálózati hiba történt');
            }
            
            updateResult(translations[currentLang]['process-response']);
            const data = await response.json();
            
            if (!data.contents) {
                throw new Error('Nem sikerült betölteni az oldalt');
            }
            
            updateResult(translations[currentLang]['process-parse']);
            
            // Parse the HTML content
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(data.contents, 'text/html');
            
            // Extract video information
            updateResult(translations[currentLang]['process-find']);
            const videoElements = htmlDoc.querySelectorAll('ytd-grid-video-renderer, ytd-rich-item-renderer');
            
            if (videoElements.length === 0) {
                // Try alternative selectors for newer YouTube layout
                updateResult(translations[currentLang]['process-alt-find']);
                const altVideoElements = htmlDoc.querySelectorAll('ytd-video-renderer, ytd-compact-video-renderer');
                
                if (altVideoElements.length === 0) {
                    throw new Error('Nem találhatók videók ezen az oldalon. Győződj meg róla, hogy helyes URL-t adtál meg.');
                }
                
                updateResult(translations[currentLang]['process-found'].replace('{count}', altVideoElements.length));
                processVideoElements(altVideoElements);
            } else {
                updateResult(translations[currentLang]['process-found'].replace('{count}', videoElements.length));
                processVideoElements(videoElements);
            }
            
        } catch (error) {
            updateResult(translations[currentLang]['status-error'].replace('{message}', error.message));
            showStatus(translations[currentLang]['status-error'].replace('{message}', error.message), 'error');
            
            // Provide detailed alternative method when CORS proxy fails
            updateResult('\n' + translations[currentLang]['status-cors-failed']);
            showStatus(translations[currentLang]['status-cors-failed'], 'error');
            suggestConsoleMethod();
        }
    }

    // Process video elements from parsed HTML
    function processVideoElements(videoElements) {
        let result = '';
        let count = 0;
        let processedCount = 0;
        
        videoElements.forEach((video, index) => {
            if (index % 5 === 0 && index > 0) {
                updateResult(translations[currentLang]['process-progress']
                    .replace('{current}', index)
                    .replace('{total}', videoElements.length));
            }
            
            const titleElement = video.querySelector('#video-title, #title-wrapper');
            const linkElement = video.querySelector('a#thumbnail, a#video-title-link');
            
            if (titleElement && linkElement) {
                const title = titleElement.textContent.trim();
                let link = linkElement.getAttribute('href');
                
                // Clean up the link and ensure it's a full URL
                if (link && link.startsWith('/watch')) {
                    link = 'https://www.youtube.com' + link.split('&')[0];
                    result += title + '\n' + link + '\n\n';
                    count++;
                }
            }
            processedCount++;
        });
        
        updateResult(translations[currentLang]['process-complete']
            .replace('{processed}', processedCount)
            .replace('{total}', videoElements.length));
        
        if (count > 0) {
            updateResult(translations[currentLang]['process-result'].replace('{count}', count));
            updateResult('\n' + result.trim());
            showStatus(translations[currentLang]['status-success'].replace('{count}', count), 'success');
        } else {
            updateResult(translations[currentLang]['process-fail']);
            showStatus(translations[currentLang]['status-failure'], 'error');
            suggestConsoleMethod();
        }
    }

    // Suggest console method as fallback with detailed guide
    function suggestConsoleMethod() {
        // English guide
        const englishGuide = `# DETAILED GUIDE FOR EXTRACTING YOUTUBE VIDEOS

## STEP 1: OPEN THE YOUTUBE VIDEO LIST PAGE
- Open the YouTube channel videos page (e.g. https://www.youtube.com/@tvggraphics2423/videos)
- Make sure the video list has loaded (scroll down to load more videos)

## STEP 2: OPEN DEVELOPER TOOLS
- Windows/Linux: Press <kbd>F12</kbd> OR right-click on the page and select "Inspect"
- Mac: Press <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>I</kbd>

## STEP 3: SELECT THE "CONSOLE" TAB
- Look for the "Console" tab at the top or bottom of the developer tools
- Click on it to activate the JavaScript console

## STEP 4: COPY AND RUN THE CODE
- Copy the following code:

let videoData = '';
const videos = document.querySelectorAll('ytd-grid-video-renderer, ytd-rich-item-renderer, ytd-video-renderer');
videos.forEach(video => {
    const titleElement = video.querySelector('#video-title, #title-wrapper');
    const linkElement = video.querySelector('a#thumbnail, a#video-title-link');
    
    if (titleElement && linkElement) {
        const title = titleElement.textContent.trim();
        const link = 'https://www.youtube.com' + linkElement.getAttribute('href').split('&')[0];
        videoData += title + '\\n' + link + '\\n\\n';
    }
});
console.log(videoData);

- Paste it into the console (<kbd>Ctrl</kbd>+<kbd>V</kbd> or <kbd>Command</kbd>+<kbd>V</kbd>)
- Press <kbd>Enter</kbd> to run the code

## STEP 5: COPY THE RESULT
- The result will appear in the console
- Right-click on the result and select "Copy string contents"
- OR select all the text and copy it (<kbd>Ctrl</kbd>+<kbd>C</kbd> or <kbd>Command</kbd>+<kbd>C</kbd>)

## STEP 6: PASTE THE RESULT WHERE YOU WANT
- Paste the copied content into a text editor or document

## TROUBLESHOOTING
- If no videos appear, try scrolling the YouTube page to load more videos
- If the code gives an error, check that you copied the entire code
- For different YouTube layouts, the selectors may change, in that case try refreshing the page`;

        // Hungarian guide
        const hungarianGuide = `# RÉSZLETES ÚTMUTATÓ A YOUTUBE VIDEÓK KINYERÉSÉHEZ

## 1. LÉPÉS: NYISD MEG A YOUTUBE VIDEÓLISTA OLDALT
- Nyisd meg a YouTube csatorna videók oldalát (pl. https://www.youtube.com/@tvggraphics2423/videos)
- Győződj meg róla, hogy a videólista betöltődött (görgess lejjebb több videó betöltéséhez)

## 2. LÉPÉS: NYISD MEG A FEJLESZTŐI ESZKÖZÖKET
- Windows/Linux: Nyomd meg az <kbd>F12</kbd> billentyűt VAGY jobb klikk az oldalon és válaszd a "Vizsgálat" opciót
- Mac: Nyomd meg a <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>I</kbd> billentyűkombinációt

## 3. LÉPÉS: VÁLASZD A "CONSOLE" FÜLET
- A fejlesztői eszközök tetején vagy alján keresd a "Console" vagy "Konzol" fület
- Kattints rá, hogy aktiváld a JavaScript konzolt

## 4. LÉPÉS: MÁSOLD BE ÉS FUTTASD A KÓDOT
- Másold ki az alábbi kódot:

let videoData = '';
const videos = document.querySelectorAll('ytd-grid-video-renderer, ytd-rich-item-renderer, ytd-video-renderer');
videos.forEach(video => {
    const titleElement = video.querySelector('#video-title, #title-wrapper');
    const linkElement = video.querySelector('a#thumbnail, a#video-title-link');
    
    if (titleElement && linkElement) {
        const title = titleElement.textContent.trim();
        const link = 'https://www.youtube.com' + linkElement.getAttribute('href').split('&')[0];
        videoData += title + '\\n' + link + '\\n\\n';
    }
});
console.log(videoData);

- Illeszd be a konzolba (<kbd>Ctrl</kbd>+<kbd>V</kbd> vagy <kbd>Command</kbd>+<kbd>V</kbd>)
- Nyomd meg az <kbd>Enter</kbd> billentyűt a kód futtatásához

## 5. LÉPÉS: MÁSOLD KI AZ EREDMÉNYT
- Az eredmény a konzolban fog megjelenni
- Kattints jobb gombbal az eredményre és válaszd a "Copy string contents" vagy "Szöveg másolása" opciót
- VAGY jelöld ki az egész szöveget és másold ki (Ctrl+C vagy Command+C)

## 6. LÉPÉS: ILLESZD BE AZ EREDMÉNYT AHOVÁ SZERETNÉD
- Illeszd be a kimásolt tartalmat egy szövegszerkesztőbe vagy dokumentumba

## HIBAELHÁRÍTÁS
- Ha nem jelennek meg videók, próbáld meg görgetni a YouTube oldalt több videó betöltéséhez
- Ha a kód hibát ad, ellenőrizd, hogy a teljes kódot másoltad-e be
- Különböző YouTube elrendezéseknél a szelektorok változhatnak, ilyenkor próbáld meg frissíteni az oldalt`;
        
        // Display guide based on current language
        resultTextarea.value = currentLang === 'en' ? englishGuide : hungarianGuide;
    }

    // Validate YouTube URL
    function isValidYoutubeUrl(url) {
        const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/i;
        return regex.test(url);
    }

    // Show status message
    function showStatus(message, type) {
        statusElement.textContent = message;
        statusElement.className = 'status';
        
        if (type) {
            statusElement.classList.add(type);
        }
        
        // Auto clear success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                statusElement.textContent = '';
                statusElement.className = 'status';
            }, 5000);
        }
    }
    
    // Update result textarea with progress message
    function updateResult(message) {
        resultTextarea.value += '\n' + message;
        // Scroll to bottom to show latest message
        resultTextarea.scrollTop = resultTextarea.scrollHeight;
    }
    
    // Set language for the UI
    function setLanguage(lang) {
        currentLang = lang;
        currentLangElement.textContent = lang.toUpperCase();
        
        // Update all translatable elements
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            
            if (key === 'result-placeholder') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        });
    }
});
