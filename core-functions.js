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
