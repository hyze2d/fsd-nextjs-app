module.exports = {
    "locales": [
        "en",
        "ru",
        "default"
    ],

    "defaultLocale": "default",

    "loader": false,
    
    "defaultNS": "common",
    
    "pages": {
        "*": [
            "common"
        ],
        "/": [
            "home"
        ],
        "/album": [
            "albums"
        ]
    },
    
    "pagesInDir": "/pages",

    loadLocaleFrom: (locale, namespace) =>
        import(`./locales/${locale}/${namespace}`).then((m) => m.default),
}