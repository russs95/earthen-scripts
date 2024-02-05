// Ensure global variable siteName is declared and set to "site" if not already defined
if (typeof siteName === 'undefined') {
    var siteName = "site";
}

// Global variable for language, set to a default value or keep its current setting
var currentLanguage = currentLanguage || 'en';

function clearSiteCache() {
    // Define translations for the confirm and alert messages
    var translations = {
        en: {
            confirm: `Do you wish to delete your language and ${siteName} settings?`,
            alert: "All site cache items are now cleared."
        },
        fr: {
            confirm: `Souhaitez-vous supprimer les paramètres de langue et de ${siteName} ?`,
            alert: "Tous les éléments du cache du site sont maintenant effacés."
        },
        es: {
            confirm: `¿Desea eliminar los ajustes de idioma y de ${siteName}?`,
            alert: "Todos los elementos en caché del sitio ahora están borrados."
        },
        id: {
            confirm: `Apakah Anda ingin menghapus pengaturan bahasa dan ${siteName}?`,
            alert: "Semua item cache situs sekarang sudah dibersihkan."
        }
    };

    // Select translation based on currentLanguage or default to English
    var messages = translations[currentLanguage] || translations.en;

    // Confirm dialogue
    var confirmAction = confirm(messages.confirm);
    if (confirmAction) {
        localStorage.clear();
        // Alert message
        alert(messages.alert);
    }
}
 
// Example of setting the global variables
// currentLanguage = 'es'; // Uncomment and set the language as needed
// siteName = 'YourSiteName'; // Uncomment and set the site name as needed



function changeLanguage(langCode) {
    currentLanguage = langCode; // Set the global variable
    switchLanguage(currentLanguage); // Now call switchLanguage with the new currentLanguage
 }

 
 function switchLanguage(currentLanguage) {
    const elements = document.querySelectorAll('[data-lang-id]');
    elements.forEach(element => {
        const langId = element.getAttribute('data-lang-id');
        const translation = translations[currentLanguage][langId];
        if (translation) {
            if (element.tagName.toLowerCase() === 'input' && element.type !== 'submit') {
                element.placeholder = translation;
            } else if (element.hasAttribute('aria-label')) {
                element.setAttribute('aria-label', translation);
            } else if (element.tagName.toLowerCase() === 'img') {
                element.alt = translation;
            } else {
                // Directly set innerHTML for elements that may contain HTML
                element.innerHTML = translation;
            }
        }
    });
}

// function switchLanguage(currentLanguage) {
//     const elements = document.querySelectorAll('[data-lang-id]');
//     elements.forEach(element => {
//         const langId = element.getAttribute('data-lang-id');
//         const translation = translations[currentLanguage][langId];
//         if (translation) {
//             // Check for input elements to update their placeholders
//             if (element.tagName.toLowerCase() === 'input' && element.type !== 'submit') {
//                 element.placeholder = translation;
//             } else {
//                 // For other elements, including buttons, update innerHTML/textContent or aria-label as needed
//                 if (element.hasAttribute('aria-label')) {
//                     // Update aria-label for accessibility
//                     element.setAttribute('aria-label', translation);
//                 } else if (element.tagName.toLowerCase() !== 'img') {
//                     // Continue with existing innerHTML/textContent logic for non-img elements
//                     if (element.innerHTML.match(/<\/?[a-z][\s\S]*>/i)) {
//                         const parser = new DOMParser();
//                         const doc = parser.parseFromString(translation, 'text/html');
//                         Array.from(element.childNodes).forEach((child, index) => {
//                             if (child.nodeType === 3) { // Node.TEXT_NODE
//                                 child.textContent = doc.body.childNodes[index].textContent;
//                             }
//                         });
//                     } else {
//                         element.textContent = translation;
//                     }
//                 } else {
//                     // Update alt text for img elements
//                     element.alt = translation;
//                 }
//             }
//         }
//     });
// }

