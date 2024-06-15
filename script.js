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
