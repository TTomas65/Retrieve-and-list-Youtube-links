document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('youtube-url');
    const extractBtn = document.getElementById('extract-btn');
    const resultTextarea = document.getElementById('result');
    const copyBtn = document.getElementById('copy-btn');
    const statusElement = document.getElementById('status');

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
            showStatus('Tartalom másolva a vágólapra!', 'success');
        } else {
            showStatus('Nincs mit másolni!', 'error');
        }
    });

    // Main extraction function
    async function extractVideos() {
        const url = urlInput.value.trim();
        
        if (!url) {
            showStatus('Kérlek adj meg egy YouTube URL-t!', 'error');
            return;
        }

        if (!isValidYoutubeUrl(url)) {
            showStatus('Érvénytelen YouTube URL! Használj csatorna videólista URL-t.', 'error');
            return;
        }

        showStatus('Videók kinyerése folyamatban...', '');
        resultTextarea.value = '';
        
        try {
            // Use a CORS proxy to fetch the YouTube page
            const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
            const response = await fetch(proxyUrl);
            
            if (!response.ok) {
                throw new Error('Hálózati hiba történt');
            }
            
            const data = await response.json();
            
            if (!data.contents) {
                throw new Error('Nem sikerült betölteni az oldalt');
            }
            
            // Parse the HTML content
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(data.contents, 'text/html');
            
            // Extract video information
            const videoElements = htmlDoc.querySelectorAll('ytd-grid-video-renderer, ytd-rich-item-renderer');
            
            if (videoElements.length === 0) {
                // Try alternative selectors for newer YouTube layout
                const altVideoElements = htmlDoc.querySelectorAll('ytd-video-renderer, ytd-compact-video-renderer');
                
                if (altVideoElements.length === 0) {
                    throw new Error('Nem találhatók videók ezen az oldalon. Győződj meg róla, hogy helyes URL-t adtál meg.');
                }
                
                processVideoElements(altVideoElements);
            } else {
                processVideoElements(videoElements);
            }
            
        } catch (error) {
            showStatus(`Hiba: ${error.message}`, 'error');
            
            // Provide detailed alternative method when CORS proxy fails
            showStatus(`A közvetlen kinyerés nem sikerült. Kérlek kövesd a részletes útmutatót.`, 'error');
            suggestConsoleMethod();
        }
    }

    // Process video elements from parsed HTML
    function processVideoElements(videoElements) {
        let result = '';
        let count = 0;
        
        videoElements.forEach(video => {
            const titleElement = video.querySelector('#video-title, #title-wrapper');
            const linkElement = video.querySelector('a#thumbnail, a#video-title-link');
            
            if (titleElement && linkElement) {
                const title = titleElement.textContent.trim();
                let link = linkElement.getAttribute('href');
                
                // Clean up the link and ensure it's a full URL
                if (link.startsWith('/watch')) {
                    link = 'https://www.youtube.com' + link.split('&')[0];
                    result += title + '\n' + link + '\n\n';
                    count++;
                }
            }
        });
        
        if (count > 0) {
            resultTextarea.value = result.trim();
            showStatus(`Sikeresen kinyerve ${count} videó!`, 'success');
        } else {
            showStatus('Nem sikerült videókat kinyerni. Próbáld meg a konzol módszert.', 'error');
            suggestConsoleMethod();
        }
    }

    // Suggest console method as fallback with detailed guide
    function suggestConsoleMethod() {
        resultTextarea.value = `# RÉSZLETES ÚTMUTATÓ A YOUTUBE VIDEÓK KINYERÉSÉHEZ

## 1. LÉPÉS: NYISD MEG A YOUTUBE VIDEÓLISTA OLDALT
- Nyisd meg a YouTube csatorna videók oldalát (pl. https://www.youtube.com/@tvggraphics2423/videos)
- Győződj meg róla, hogy a videólista betöltődött (görgess lejjebb több videó betöltéséhez)

## 2. LÉPÉS: NYISD MEG A FEJLESZTŐI ESZKÖZÖKET
- Windows/Linux: Nyomd meg az F12 billentyűt VAGY jobb klikk az oldalon és válaszd a "Vizsgálat" opciót
- Mac: Nyomd meg a Command+Option+I billentyűkombinációt

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

- Illeszd be a konzolba (Ctrl+V vagy Command+V)
- Nyomd meg az Enter billentyűt a kód futtatásához

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
});
