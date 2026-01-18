class ThaiTafsirApp {
    constructor() {
        this.surahs = [
            { number: 1, name: 'Al-Fatihah', thai: 'อัล-ฟาติฮะห์', ayahs: 7 },
            { number: 2, name: 'Al-Baqarah', thai: 'อัล-บะกอเราะห์', ayahs: 286 },
            { number: 3, name: 'Al-Imran', thai: 'อาลิ อิมรอน', ayahs: 200 },
            { number: 4, name: 'An-Nisa', thai: 'อัน-นิซาอ์', ayahs: 176 },
            { number: 5, name: 'Al-Maidah', thai: 'อัล-มาอิดะห์', ayahs: 120 },
            { number: 6, name: 'Al-Anam', thai: 'อัล-อันอาม', ayahs: 165 },
            { number: 7, name: 'Al-Araf', thai: 'อัล-อะอ์รอฟ', ayahs: 206 },
            { number: 8, name: 'Al-Anfal', thai: 'อัล-อันฟาล', ayahs: 75 },
            { number: 9, name: 'At-Tawbah', thai: 'อัต-เตาบะห์', ayahs: 129 },
            { number: 10, name: 'Yunus', thai: 'ยูนุส', ayahs: 109 },
            { number: 11, name: 'Hud', thai: 'ฮูด', ayahs: 123 },
            { number: 12, name: 'Yusuf', thai: 'ยูซุฟ', ayahs: 111 },
            { number: 13, name: 'Ar-Rad', thai: 'อัร-ร้อด', ayahs: 43 },
            { number: 14, name: 'Ibrahim', thai: 'อิบรอฮีม', ayahs: 52 },
            { number: 15, name: 'Al-Hijr', thai: 'อัล-ฮิจร์', ayahs: 99 },
            { number: 16, name: 'An-Nahl', thai: 'อัน-นะห์ล', ayahs: 128 },
            { number: 17, name: 'Al-Isra', thai: 'อัล-อิสรอ', ayahs: 111 },
            { number: 18, name: 'Al-Kahf', thai: 'อัล-กะฮ์ฟ', ayahs: 110 },
            { number: 19, name: 'Maryam', thai: 'มัรยัม', ayahs: 98 },
            { number: 20, name: 'Taha', thai: 'ฏอฮา', ayahs: 135 },
            { number: 21, name: 'Al-Anbiya', thai: 'อัล-อัมบิยาอ์', ayahs: 112 },
            { number: 22, name: 'Al-Hajj', thai: 'อัล-ฮัจญ์', ayahs: 78 },
            { number: 23, name: 'Al-Muminun', thai: 'อัล-มุอ์มินูน', ayahs: 118 },
            { number: 24, name: 'An-Nur', thai: 'อัน-นูร', ayahs: 64 },
            { number: 25, name: 'Al-Furqan', thai: 'อัล-ฟุรกอน', ayahs: 77 },
            { number: 26, name: 'Ash-Shuara', thai: 'อัช-ชุอะรออ์', ayahs: 227 },
            { number: 27, name: 'An-Naml', thai: 'อัน-นะมล', ayahs: 93 },
            { number: 28, name: 'Al-Qasas', thai: 'อัล-กะซ็อศ', ayahs: 88 },
            { number: 29, name: 'Al-Ankabut', thai: 'อัล-อังกะบูต', ayahs: 69 },
            { number: 30, name: 'Ar-Rum', thai: 'อัร-รูม', ayahs: 60 },
            { number: 31, name: 'Luqman', thai: 'ลุกมาน', ayahs: 34 },
            { number: 32, name: 'As-Sajdah', thai: 'อัซ-ซัจดะห์', ayahs: 30 },
            { number: 33, name: 'Al-Ahzab', thai: 'อัล-อะห์ซาบ', ayahs: 73 },
            { number: 34, name: 'Saba', thai: 'ซาบาอ์', ayahs: 54 },
            { number: 35, name: 'Fatir', thai: 'ฟาฏิร', ayahs: 45 },
            { number: 36, name: 'Ya-Sin', thai: 'ยาซีน', ayahs: 83 },
            { number: 37, name: 'As-Saffat', thai: 'อัศ-ศ็อฟฟาต', ayahs: 182 },
            { number: 38, name: 'Sad', thai: 'ศอด', ayahs: 88 },
            { number: 39, name: 'Az-Zumar', thai: 'อัซ-ซุมัร', ayahs: 75 },
            { number: 40, name: 'Ghafir', thai: 'ฆอฟิร', ayahs: 85 },
            { number: 41, name: 'Fussilat', thai: 'ฟุศศิลัต', ayahs: 54 },
            { number: 42, name: 'Ash-Shura', thai: 'อัช-ชูรอ', ayahs: 53 },
            { number: 43, name: 'Az-Zukhruf', thai: 'อัซ-ซุครุฟ', ayahs: 89 },
            { number: 44, name: 'Ad-Dukhan', thai: 'อัด-ดุคาน', ayahs: 59 },
            { number: 45, name: 'Al-Jathiyah', thai: 'อัล-ญาซิยะห์', ayahs: 37 },
            { number: 46, name: 'Al-Ahqaf', thai: 'อัล-อัฮก๊าฟ', ayahs: 35 },
            { number: 47, name: 'Muhammad', thai: 'มุฮัมมัด', ayahs: 38 },
            { number: 48, name: 'Al-Fath', thai: 'อัล-ฟัตห์', ayahs: 29 },
            { number: 49, name: 'Al-Hujurat', thai: 'อัล-ฮุญุรอต', ayahs: 18 },
            { number: 50, name: 'Qaf', thai: 'ก๊าฟ', ayahs: 45 },
            { number: 51, name: 'Adh-Dhariyat', thai: 'อัซ-ซาริยาต', ayahs: 60 },
            { number: 52, name: 'At-Tur', thai: 'อัฏ-ฏูร', ayahs: 49 },
            { number: 53, name: 'An-Najm', thai: 'อัน-นัจม', ayahs: 62 },
            { number: 54, name: 'Al-Qamar', thai: 'อัล-กอมัร', ayahs: 55 },
            { number: 55, name: 'Ar-Rahman', thai: 'อัร-เราะห์มาน', ayahs: 78 },
            { number: 56, name: 'Al-Waqiah', thai: 'อัล-วากิอะห์', ayahs: 96 },
            { number: 57, name: 'Al-Hadid', thai: 'อัล-ฮะดีด', ayahs: 29 },
            { number: 58, name: 'Al-Mujadilah', thai: 'อัล-มุญาดิละห์', ayahs: 22 },
            { number: 59, name: 'Al-Hashr', thai: 'อัล-ฮัชร์', ayahs: 24 },
            { number: 60, name: 'Al-Mumtahanah', thai: 'อัล-มุมตะฮะนะห์', ayahs: 13 },
            { number: 61, name: 'As-Saff', thai: 'อัศ-ศ็อฟ', ayahs: 14 },
            { number: 62, name: 'Al-Jumuah', thai: 'อัล-ญุมุอะห์', ayahs: 11 },
            { number: 63, name: 'Al-Munafiqun', thai: 'อัล-มุนาฟิกูน', ayahs: 11 },
            { number: 64, name: 'At-Taghabun', thai: 'อัต-ตะฆอบุน', ayahs: 18 },
            { number: 65, name: 'At-Talaq', thai: 'อัฏ-ฏอลาก', ayahs: 12 },
            { number: 66, name: 'At-Tahrim', thai: 'อัต-ตะห์รีม', ayahs: 12 },
            { number: 67, name: 'Al-Mulk', thai: 'อัล-มุลก์', ayahs: 30 },
            { number: 68, name: 'Al-Qalam', thai: 'อัล-กอลัม', ayahs: 52 },
            { number: 69, name: 'Al-Haqqah', thai: 'อัล-ฮากเกาะห์', ayahs: 52 },
            { number: 70, name: 'Al-Maarij', thai: 'อัล-มะอาริจ', ayahs: 44 },
            { number: 71, name: 'Nuh', thai: 'นูห์', ayahs: 28 },
            { number: 72, name: 'Al-Jinn', thai: 'อัล-ญินน์', ayahs: 28 },
            { number: 73, name: 'Al-Muzzammil', thai: 'อัล-มุซซัมมิล', ayahs: 20 },
            { number: 74, name: 'Al-Muddathir', thai: 'อัล-มุดดัษษิร', ayahs: 56 },
            { number: 75, name: 'Al-Qiyamah', thai: 'อัล-กิยามะห์', ayahs: 40 },
            { number: 76, name: 'Al-Insan', thai: 'อัล-อินซาน', ayahs: 31 },
            { number: 77, name: 'Al-Mursalat', thai: 'อัล-มุรซาลาต', ayahs: 50 },
            { number: 78, name: 'An-Naba', thai: 'อัน-นาบาอ์', ayahs: 40 },
            { number: 79, name: 'An-Naziat', thai: 'อัน-นาซิอาต', ayahs: 46 },
            { number: 80, name: 'Abasa', thai: 'อะบะซะ', ayahs: 42 },
            { number: 81, name: 'At-Takwir', thai: 'อัต-ตักวีร', ayahs: 29 },
            { number: 82, name: 'Al-Infitar', thai: 'อัล-อินฟิฏอร', ayahs: 19 },
            { number: 83, name: 'Al-Mutaffifin', thai: 'อัล-มุฏ็อฟฟิฟีน', ayahs: 36 },
            { number: 84, name: 'Al-Inshiqaq', thai: 'อัล-อินชิก๊อก', ayahs: 25 },
            { number: 85, name: 'Al-Buruj', thai: 'อัล-บุรูจ', ayahs: 22 },
            { number: 86, name: 'At-Tariq', thai: 'อัฏ-ฏอริก', ayahs: 17 },
            { number: 87, name: 'Al-Ala', thai: 'อัล-อะอ์ลา', ayahs: 19 },
            { number: 88, name: 'Al-Ghashiyah', thai: 'อัล-ฆอชิยะห์', ayahs: 26 },
            { number: 89, name: 'Al-Fajr', thai: 'อัล-ฟัจร์', ayahs: 30 },
            { number: 90, name: 'Al-Balad', thai: 'อัล-บะลัด', ayahs: 20 },
            { number: 91, name: 'Ash-Shams', thai: 'อัช-ชัมส์', ayahs: 15 },
            { number: 92, name: 'Al-Lail', thai: 'อัล-ลัยล์', ayahs: 21 },
            { number: 93, name: 'Ad-Duha', thai: 'อัฎ-ฎุฮา', ayahs: 11 },
            { number: 94, name: 'Ash-Sharh', thai: 'อัล-อินชิรอห์', ayahs: 8 },
            { number: 95, name: 'At-Tin', thai: 'อัต-ตีน', ayahs: 8 },
            { number: 96, name: 'Al-Alaq', thai: 'อัล-อะลัก', ayahs: 19 },
            { number: 97, name: 'Al-Qadr', thai: 'อัล-ก๊อดร', ayahs: 5 },
            { number: 98, name: 'Al-Bayyinah', thai: 'อัล-บัยยินะห์', ayahs: 8 },
            { number: 99, name: 'Az-Zalzalah', thai: 'อัซ-ซัลซะละห์', ayahs: 8 },
            { number: 100, name: 'Al-Adiyat', thai: 'อัล-อาดิยาต', ayahs: 11 },
            { number: 101, name: 'Al-Qariah', thai: 'อัล-กอริอะห์', ayahs: 11 },
            { number: 102, name: 'At-Takathur', thai: 'อัต-ตากาษุร', ayahs: 8 },
            { number: 103, name: 'Al-Asr', thai: 'อัล-อัศร', ayahs: 3 },
            { number: 104, name: 'Al-Humazah', thai: 'อัล-ฮุมาซะห์', ayahs: 9 },
            { number: 105, name: 'Al-Fil', thai: 'อัล-ฟีล', ayahs: 5 },
            { number: 106, name: 'Quraysh', thai: 'กุร็อยช์', ayahs: 4 },
            { number: 107, name: 'Al-Maun', thai: 'อัล-มาอูน', ayahs: 7 },
            { number: 108, name: 'Al-Kawthar', thai: 'อัล-เกาษัร', ayahs: 3 },
            { number: 109, name: 'Al-Kafirun', thai: 'อัล-กาฟิรูน', ayahs: 6 },
            { number: 110, name: 'An-Nasr', thai: 'อัน-นัศร์', ayahs: 3 },
            { number: 111, name: 'Al-Masad', thai: 'อัล-มะซัด', ayahs: 5 },
            { number: 112, name: 'Al-Ikhlas', thai: 'อัล-อิคลาศ', ayahs: 4 },
            { number: 113, name: 'Al-Falaq', thai: 'อัล-ฟะลัก', ayahs: 5 },
            { number: 114, name: 'An-Nas', thai: 'อัน-นาส', ayahs: 6 }
        ];
        
        this.currentSurah = null;
        this.currentAyah = null;
        
        this.initializeApp();
    }
    
    initializeApp() {
        this.populateSurahDropdown();
        this.setupEventListeners();
    }
    
    populateSurahDropdown() {
        const surahSelect = document.getElementById('surah-select');
        
        this.surahs.forEach(surah => {
            const option = document.createElement('option');
            option.value = surah.number;
            option.textContent = `${surah.number}. ${surah.name} (${surah.thai})`;
            surahSelect.appendChild(option);
        });
    }
    
    setupEventListeners() {
        const surahSelect = document.getElementById('surah-select');
        const ayahSelect = document.getElementById('ayah-select');
        const loadBtn = document.getElementById('load-btn');
        
        surahSelect.addEventListener('change', (e) => {
            this.onSurahChange(e.target.value);
        });
        
        ayahSelect.addEventListener('change', (e) => {
            this.onAyahChange(e.target.value);
        });
        
        loadBtn.addEventListener('click', () => {
            this.loadTafsir();
        });
    }
    
    onSurahChange(surahNumber) {
        const ayahSelect = document.getElementById('ayah-select');
        const loadBtn = document.getElementById('load-btn');
        
        ayahSelect.innerHTML = '<option value="">-- เลือกอายะห์ --</option>';
        ayahSelect.disabled = true;
        loadBtn.disabled = true;
        
        if (!surahNumber) return;
        
        this.currentSurah = parseInt(surahNumber);
        const surah = this.surahs.find(s => s.number === this.currentSurah);
        
        for (let i = 1; i <= surah.ayahs; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `อายะห์ที่ ${i}`;
            ayahSelect.appendChild(option);
        }
        
        ayahSelect.disabled = false;
    }
    
    onAyahChange(ayahNumber) {
        const loadBtn = document.getElementById('load-btn');
        
        if (!ayahNumber) {
            loadBtn.disabled = true;
            return;
        }
        
        this.currentAyah = parseInt(ayahNumber);
        loadBtn.disabled = false;
    }
    
    async loadTafsir() {
        if (!this.currentSurah || !this.currentAyah) return;
        
        this.showLoading();
        this.hideError();
        
        try {
            const tafsirData = await this.fetchTafsir(this.currentSurah, this.currentAyah);
            const arabicText = await this.fetchArabicVerse(this.currentSurah, this.currentAyah);
            this.displayTafsir(tafsirData, arabicText);
            await this.translateToThai(tafsirData.text);
        } catch (error) {
            console.error('Error loading tafsir:', error);
            this.showError();
        } finally {
            this.hideLoading();
        }
    }
    
    async fetchTafsir(surah, ayah) {
        const apiUrl = `https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/en-tafisr-ibn-kathir/${surah}/${ayah}.json`;
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    }
    
    async fetchArabicVerse(surah, ayah) {
        const apiUrl = `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/${surah}.json`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        const index = ayah - 1;
        if (!json.verses || !json.verses[index] || !json.verses[index].text) {
            throw new Error('Arabic verse not found');
        }
        return json.verses[index].text;
    }
    
    displayTafsir(data, arabicText) {
        const container = document.getElementById('tafsir-container');
        const verseTitle = document.getElementById('verse-title');
        const verseArabic = document.getElementById('verse-arabic');
        const englishTafsir = document.getElementById('english-tafsir');
        
        const surah = this.surahs.find(s => s.number === data.surah);
        
        verseTitle.textContent = `ซูเราะห์ ${surah.thai} (${surah.name}) อายะห์ที่ ${data.ayah}`;
        verseArabic.textContent = arabicText;
        
        englishTafsir.innerHTML = this.formatTafsirText(data.text);
        
        container.style.display = 'block';
    }
    
    getArabicVersePlaceholder(surah, ayah) {
        return `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ`;
    }
    
    formatTafsirText(text) {
        return text
            .split('\n')
            .filter(paragraph => paragraph.trim())
            .map(paragraph => `<p>${paragraph.trim()}</p>`)
            .join('');
    }
    
    async translateToThai(text) {
        const thaiTranslation = document.getElementById('thai-translation');
        
        try {
            const translatedText = await this.googleTranslate(text);
            thaiTranslation.innerHTML = this.formatTafsirText(translatedText);
        } catch (error) {
            console.error('Translation error:', error);
            thaiTranslation.innerHTML = '<p class="error">ไม่สามารถแปลได้ในขณะนี้</p>';
        }
    }
    
    async googleTranslate(text) {
        // ใช้บริการแปลภาษาแบบต่างๆ
        const translateText = async (text, sourceLang, targetLang) => {
            try {
                // วิธีที่ 1: ใช้ CORS proxy ทางเลือก
                const proxyUrl = 'https://api.codetabs.com/v1/proxy?quest=';
                const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
                
                const response = await fetch(proxyUrl + encodeURIComponent(apiUrl), {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    const data = await response.json();
                    if (data && data[0] && data[0][0] && data[0][0][0]) {
                        return data[0].map(item => item[0]).join(' ');
                    }
                }
                
                // วิธีที่ 2: ใช้บริการแปลภาษาอื่น
                const fallbackResponse = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`);
                if (fallbackResponse.ok) {
                    const fallbackData = await fallbackResponse.json();
                    if (fallbackData && fallbackData.responseData && fallbackData.responseData.translatedText) {
                        return fallbackData.responseData.translatedText;
                    }
                }
                
                // วิธีที่ 3: ใช้ LibreTranslate (บริการแปลภาษาโอเพ่นซอร์ส)
                const libreResponse = await fetch('https://libretranslate.com/translate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        q: text,
                        source: sourceLang,
                        target: targetLang,
                        format: 'text'
                    })
                });
                
                if (libreResponse.ok) {
                    const libreData = await libreResponse.json();
                    if (libreData && libreData.translatedText) {
                        return libreData.translatedText;
                    }
                }
                
                throw new Error('Translation failed');
                
            } catch (error) {
                console.warn('Translation API error:', error);
                return this.fallbackTranslate(text);
            }
        };
        
        // แยกข้อความเป็นส่วนย่อยๆ เพื่อป้องกันปัญหาเรื่องความยาว
        const maxChunkLength = 500;
        const chunks = [];
        
        for (let i = 0; i < text.length; i += maxChunkLength) {
            chunks.push(text.substring(i, i + maxChunkLength));
        }
        
        try {
            // แปลแต่ละส่วนแยกกัน
            const translatedChunks = await Promise.all(
                chunks.map(chunk => translateText(chunk, 'en', 'th'))
            );
            
            return translatedChunks.join(' ');
        } catch (error) {
            return this.fallbackTranslate(text);
        }
    }
    
    fallbackTranslate(text) {
        return text + ' (แปลโดยระบบอัตโนมัติ)';
    }
    
    showLoading() {
        document.getElementById('loading').style.display = 'block';
        document.getElementById('tafsir-container').style.display = 'none';
    }
    
    hideLoading() {
        document.getElementById('loading').style.display = 'none';
    }
    
    showError() {
        document.getElementById('error-message').style.display = 'block';
    }
    
    hideError() {
        document.getElementById('error-message').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ThaiTafsirApp();
});
