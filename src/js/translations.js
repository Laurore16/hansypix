(() => {
    // Translation System for HANSYPIX
    const translations = {
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.portfolio': 'Portfolio',
            'nav.pricing': 'Pricing',
            'nav.contact': 'Contact',
            'nav.my_bookings': 'My Bookings',
            'nav.admin_panel': 'Admin Panel',
            'nav.profile': 'Profile',
            'nav.logout': 'Logout',
            'nav.login': 'Login',
            'nav.sign_up': 'Sign Up',
            
            // Hero Section
            'hero.title': 'Capturing Moments,<br>Creating Memories',
            'hero.subtitle': 'Professional photography services for every occasion',
            'hero.book_session': 'Book a Session',
            'hero.view_portfolio': 'View Portfolio',
            
            // Services
            'services.title': 'Our Services',
            'services.subtitle': 'Professional photography for every moment',
            'services.studio_title': 'Studio Photography',
            'services.studio_description': 'Professional studio sessions with state-of-the-art lighting and equipment. Perfect for headshots, portraits, and product photography.',
            'services.studio_link': 'View Studio Work',
            'services.outdoor_title': 'Outdoor Sessions',
            'services.outdoor_description': 'Natural light photography in stunning outdoor locations. Engagement shoots, family portraits, and lifestyle photography.',
            'services.outdoor_link': 'View Outdoor Work',
            'services.event_title': 'Event Coverage',
            'services.event_description': 'Complete event photography for weddings, corporate events, parties, and celebrations. Capturing every special moment.',
            'services.event_link': 'View Event Work',
            'services.video_title': 'Video Production',
            'services.video_description': 'Cinematic video production for weddings, events, and promotional content. Professional editing and storytelling.',
            'services.video_link': 'View Video Work',
            
            // About Section
            'about.title': 'About HANSYPIX',
            'about.description': 'HANSYPIX is a premier photography studio specializing in studio, outdoor, event, and video production. With years of experience and a passion for visual storytelling, we capture your most precious moments with artistic excellence.',
            'about.description2': 'Our team of professional photographers combines technical expertise with creative vision to deliver stunning images that you\'ll treasure forever. From intimate portraits to grand celebrations, we\'re dedicated to exceeding your expectations.',
            'about.happy_clients': 'Happy Clients',
            'about.projects_completed': 'Projects Completed',
            'about.years_experience': 'Years Experience',
            
            // Featured Portfolio
            'featured.title': 'Our Work',
            'featured.subtitle': 'Discover our latest photography masterpieces',
            'featured.loading': 'Loading amazing work...',
            'featured.view_full_portfolio': 'View Full Portfolio',
            
            // Testimonials
            'testimonials.title': 'What Our Clients Say',
            'testimonials.subtitle': 'Real experiences from real people',
            
            // CTA Section
            'cta.title': 'Ready to Capture Your Moments?',
            'cta.text': 'Let\'s create something beautiful together. Book your session today and experience the HANSYPIX difference.',
            'cta.book_now': 'Book Now',
            'cta.contact_us': 'Contact Us',
            
            // Footer
            'footer.tagline': 'Capturing life\'s most beautiful moments through the art of photography',
            'footer.stay_updated': 'Stay Updated',
            'footer.email_placeholder': 'Enter your email',
            'footer.explore': 'Explore',
            'footer.services': 'Services',
            'footer.studio_sessions': 'Studio Sessions',
            'footer.outdoor_shoots': 'Outdoor Shoots',
            'footer.event_coverage': 'Event Coverage',
            'footer.videography': 'Videography',
            'footer.get_in_touch': 'Get in Touch',
            'footer.email': 'Email',
            'footer.phone': 'Phone',
            'footer.location': 'Location',
            'footer.follow_us': 'Follow Us',
            'footer.copyright': '© 2026 HANSYPIX.',
            'footer.crafted_with': 'Crafted with',
            'footer.for_photographers': 'for photographers',
            'footer.privacy': 'Privacy Policy',
            'footer.terms': 'Terms of Service',
            'footer.cookies': 'Cookie Policy',
            
            // Admin
            'admin.dashboard': 'Dashboard',
            'admin.bookings': 'Bookings',
            'admin.users': 'Users',
            'admin.messages': 'Messages',
            'admin.payments': 'Payments',
            'admin.portfolio': 'Portfolio',
            'admin.settings': 'Site Settings',
            'admin.back_to_site': 'Back to Site',
            'admin.logout': 'Logout'
        },
        
        fr: {
            // Navigation
            'nav.home': 'Accueil',
            'nav.portfolio': 'Portfolio',
            'nav.pricing': 'Tarifs',
            'nav.contact': 'Contact',
            'nav.my_bookings': 'Mes Réservations',
            'nav.admin_panel': 'Panneau Admin',
            'nav.profile': 'Profil',
            'nav.logout': 'Déconnexion',
            'nav.login': 'Connexion',
            'nav.sign_up': 'S\'inscrire',
            
            // Hero Section
            'hero.title': 'Capturer des Moments,<br>Créer des Souvenirs',
            'hero.subtitle': 'Services de photographie professionnelle pour chaque occasion',
            'hero.book_session': 'Réserver une Séance',
            'hero.view_portfolio': 'Voir le Portfolio',
            
            // Services
            'services.title': 'Nos Services',
            'services.subtitle': 'Photographie professionnelle pour chaque moment',
            'services.studio_title': 'Photographie en Studio',
            'services.studio_description': 'Séances en studio professionnel avec un éclairage et un équipement de pointe. Parfait pour les portraits, les photos d\'identité et la photographie de produits.',
            'services.studio_link': 'Voir les Travaux en Studio',
            'services.outdoor_title': 'Séances en Extérieur',
            'services.outdoor_description': 'Photographie en lumière naturelle dans des lieux extérieurs magnifiques. Photos de fiançailles, portraits de famille et photographie de vie.',
            'services.outdoor_link': 'Voir les Travaux en Extérieur',
            'services.event_title': 'Couverture d\'Événements',
            'services.event_description': 'Photographie complète d\'événements pour les mariages, événements d\'entreprise, fêtes et célébrations. Capturant chaque moment spécial.',
            'services.event_link': 'Voir la Couverture d\'Événements',
            'services.video_title': 'Production Vidéo',
            'services.video_description': 'Production vidéo cinématographique pour les mariages, événements et contenu promotionnel. Montage professionnel et narration.',
            'services.video_link': 'Voir les Travaux Vidéo',
            
            // About Section
            'about.title': 'À Propos de HANSYPIX',
            'about.description': 'HANSYPIX est un studio de photographie de premier plan spécialisé dans le studio, l\'extérieur, les événements et la production vidéo. Avec des années d\'expérience et une passion pour la narration visuelle, nous capturons vos moments les plus précieux avec excellence artistique.',
            'about.description2': 'Notre équipe de photographes professionnels combine l\'expertise technique avec une vision créative pour livrer des images stupéfiantes que vous chérirez pour toujours. Des portraits intimes aux grandes célébrations, nous sommes dédiés à dépasser vos attentes.',
            'about.happy_clients': 'Clients Satisfaits',
            'about.projects_completed': 'Projets Terminés',
            'about.years_experience': 'Années d\'Expérience',
            
            // Featured Portfolio
            'featured.title': 'Notre Travail',
            'featured.subtitle': 'Découvrez nos derniers chefs-d\'œuvre photographiques',
            'featured.loading': 'Chargement de travaux incroyables...',
            'featured.view_full_portfolio': 'Voir le Portfolio Complet',
            
            // Testimonials
            'testimonials.title': 'Ce Que Disent Nos Clients',
            'testimonials.subtitle': 'Expériences réelles de personnes réelles',
            
            // CTA Section
            'cta.title': 'Prêt à Capturer Vos Moments?',
            'cta.text': 'Créons quelque chose de beau ensemble. Réservez votre séance aujourd\'hui et découvrez la différence HANSYPIX.',
            'cta.book_now': 'Réserver Maintenant',
            'cta.contact_us': 'Nous Contacter',
            
            // Footer
            'footer.tagline': 'Capturer les plus beaux moments de la vie à travers l\'art de la photographie',
            'footer.stay_updated': 'Restez Informé',
            'footer.email_placeholder': 'Entrez votre email',
            'footer.explore': 'Explorer',
            'footer.services': 'Services',
            'footer.studio_sessions': 'Séances en Studio',
            'footer.outdoor_shoots': 'Séances en Extérieur',
            'footer.event_coverage': 'Couverture d\'Événements',
            'footer.videography': 'Vidéographie',
            'footer.get_in_touch': 'Contactez-nous',
            'footer.email': 'Email',
            'footer.phone': 'Téléphone',
            'footer.location': 'Localisation',
            'footer.follow_us': 'Suivez-nous',
            'footer.copyright': '© 2026 HANSYPIX.',
            'footer.crafted_with': 'Créé avec',
            'footer.for_photographers': 'pour les photographes',
            'footer.privacy': 'Politique de Confidentialité',
            'footer.terms': 'Conditions d\'Utilisation',
            'footer.cookies': 'Politique de Cookies',
            
            // Admin
            'admin.dashboard': 'Tableau de Bord',
            'admin.bookings': 'Réservations',
            'admin.users': 'Utilisateurs',
            'admin.messages': 'Messages',
            'admin.payments': 'Paiements',
            'admin.portfolio': 'Portfolio',
            'admin.settings': 'Paramètres du Site',
            'admin.back_to_site': 'Retour au Site',
            'admin.logout': 'Déconnexion'
        }
    };

    let currentLanguage = 'en';
    let isInitialized = false;

    // Initialize translation system
    function init() {
        // Get saved language from localStorage or use browser language
        const savedLang = localStorage.getItem('hansypix_language');
        const browserLang = navigator.language || navigator.userLanguage;
        
        if (savedLang && translations[savedLang]) {
            currentLanguage = savedLang;
        } else if (browserLang.startsWith('fr')) {
            currentLanguage = 'fr';
        } else {
            currentLanguage = 'en';
        }

        // Apply translations
        applyTranslations();
        updateLanguageSwitcher();
        isInitialized = true;

        // Listen for language changes
        document.addEventListener('languageChanged', handleLanguageChange);
    }

    // Get translation for a key
    function t(key, fallback = key) {
        const keys = key.split('.');
        let value = translations[currentLanguage];
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return fallback;
            }
        }
        
        return value || fallback;
    }

    // Apply translations to all elements with data-translate attribute
    function applyTranslations() {
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = t(key);
            
            if (element.tagName === 'INPUT' && element.type === 'text' || element.type === 'email') {
                element.placeholder = translation;
            } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else {
                element.innerHTML = translation;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = currentLanguage === 'fr' ? 'fr' : 'en';
    }

    // Switch language
    function switchLanguage(lang) {
        if (!translations[lang] || lang === currentLanguage) return;
        
        currentLanguage = lang;
        localStorage.setItem('hansypix_language', lang);
        
        applyTranslations();
        updateLanguageSwitcher();
        
        // Emit custom event
        const event = new CustomEvent('languageChanged', {
            detail: { language: lang }
        });
        document.dispatchEvent(event);
    }

    // Update language switcher UI
    function updateLanguageSwitcher() {
        const switchers = document.querySelectorAll('.language-switcher');
        
        switchers.forEach(switcher => {
            const buttons = switcher.querySelectorAll('[data-lang]');
            
            buttons.forEach(btn => {
                const lang = btn.getAttribute('data-lang');
                if (lang === currentLanguage) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        });
    }

    // Handle language change event
    function handleLanguageChange(event) {
        const { language } = event.detail;
        console.log(`Language changed to: ${language}`);
        
        // Re-initialize components that need translation
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Get current language
    function getCurrentLanguage() {
        return currentLanguage;
    }

    // Get available languages
    function getAvailableLanguages() {
        return Object.keys(translations);
    }

    // Make functions globally accessible
    window.t = t;
    window.switchLanguage = switchLanguage;
    window.getCurrentLanguage = getCurrentLanguage;
    window.getAvailableLanguages = getAvailableLanguages;

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Debug: Check if translation system is loaded
    console.log('Translation system loaded. Available languages:', Object.keys(translations));
    console.log('Current language:', currentLanguage);

    // Export for module usage
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { t, switchLanguage, getCurrentLanguage, getAvailableLanguages };
    }
})();
