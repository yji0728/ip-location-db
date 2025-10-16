/**
 * Main Application Script
 */

// DOM Elements
const ipInput = document.getElementById('ipInput');
const searchBtn = document.getElementById('searchBtn');
const loadingDiv = document.getElementById('loading');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');
const errorMessage = document.getElementById('errorMessage');
const resultIP = document.getElementById('resultIP');
const resultCountryCode = document.getElementById('resultCountryCode');
const resultCountryName = document.getElementById('resultCountryName');
const resultRange = document.getElementById('resultRange');

/**
 * Set IP address in input field
 */
function setIP(ip) {
    ipInput.value = ip;
    ipInput.focus();
}

/**
 * Show loading state
 */
function showLoading() {
    loadingDiv.classList.remove('hidden');
    resultDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
}

/**
 * Hide loading state
 */
function hideLoading() {
    loadingDiv.classList.add('hidden');
}

/**
 * Show result
 */
function showResult(data) {
    resultIP.textContent = data.ip;
    resultCountryCode.textContent = data.countryCode;
    resultCountryName.textContent = data.countryName;
    resultRange.textContent = data.range;
    
    resultDiv.classList.remove('hidden');
    errorDiv.classList.add('hidden');
}

/**
 * Show error
 */
function showError(message) {
    errorMessage.textContent = message;
    errorDiv.classList.remove('hidden');
    resultDiv.classList.add('hidden');
}

/**
 * Lookup IP address
 */
async function lookupIP() {
    const ip = ipInput.value.trim();
    
    if (!ip) {
        showError('IP 주소를 입력해주세요');
        return;
    }
    
    try {
        showLoading();
        const result = await window.ipLookup.lookup(ip);
        hideLoading();
        showResult(result);
    } catch (error) {
        hideLoading();
        showError(error.message);
    }
}

/**
 * Handle Enter key press
 */
ipInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        lookupIP();
    }
});

/**
 * Auto-detect user's IP and show it on page load
 */
async function autoDetectIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        if (data.ip) {
            ipInput.placeholder = `내 IP: ${data.ip} (예시로 사용해보세요)`;
        }
    } catch (error) {
        // Silently fail - not critical
        console.log('Could not auto-detect IP');
    }
}

// Auto-detect IP on page load
autoDetectIP();
