// Simulated unsafe user input
const unsafeUserInput = '<img src="x" onerror="alert(\'XSS\')" />';

// Injecting unsanitized input into DOM (XSS vulnerability)
document.addEventListener('DOMContentLoaded', () => {
    const vulnerableDiv = document.createElement('div');
    vulnerableDiv.id = 'vuln';
    vulnerableDiv.innerHTML = unsafeUserInput; // ❌ This is vulnerable
    document.body.appendChild(vulnerableDiv);
});
