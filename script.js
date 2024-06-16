const translations = {
    "en": {
        "title": "Strong Password Generator",
        "language-label": "Select Language:",
        "length-label": "Password Length:",
        "special-label": "Include Special Characters:",
        "generate-button": "Generate Password",
        "result-label": "Generated Password:"
    },
    "ko": {
        "title": "강력한 암호 생성기",
        "language-label": "언어 선택:",
        "length-label": "암호 길이:",
        "special-label": "특수문자 포함:",
        "generate-button": "암호 생성",
        "result-label": "생성된 암호:"
    },
    "es": {
        "title": "Generador de Contraseñas Fuertes",
        "language-label": "Seleccionar Idioma:",
        "length-label": "Longitud de la Contraseña:",
        "special-label": "Incluir Caracteres Especiales:",
        "generate-button": "Generar Contraseña",
        "result-label": "Contraseña Generada:"
    }
};

function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const language = userLang.substring(0, 2);
    const availableLanguages = ["en", "ko", "es"];
    if (availableLanguages.includes(language)) {
        return language;
    }
    return "en";  // 기본 언어를 영어로 설정
}

function changeLanguage() {
    const language = document.getElementById('language').value;
    applyTranslations(language);
}

function applyTranslations(language) {
    const translation = translations[language];
    
    document.getElementById('title').textContent = translation['title'];
    document.getElementById('language-label').textContent = translation['language-label'];
    document.getElementById('length-label').textContent = translation['length-label'];
    document.getElementById('special-label').textContent = translation['special-label'];
    document.getElementById('generate-button').textContent = translation['generate-button'];
    document.getElementById('result-label').textContent = translation['result-label'];
    document.getElementById('language').value = language;
}

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeSpecial = document.getElementById('special').checked;
    
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";
    
    let charSet = letters + digits;
    if (includeSpecial) {
        charSet += specialChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    document.getElementById('password').textContent = password;
}

// 페이지 로드 시 사용자의 언어 설정을 감지하여 언어 적용
document.addEventListener('DOMContentLoaded', () => {
    const userLanguage = detectLanguage();
    applyTranslations(userLanguage);
});
