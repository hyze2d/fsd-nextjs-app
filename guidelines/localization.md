## Localization

For the localization solution there'a next-translate. 
All locales should be in the /locales folder with namespaces files inside them
next.config.js should be wrapper with the nexttranslate and there should be i18n.js(on) file with the needed configuration
There's an isuee with next-translate overriding getInitialProps entirely if you use it's loader to process things automatically but there's a workaround with loadNamespaces & appWithI18n decorator on the app (solution is already in-built and loadNamespaces called automatically if you use shared/lib/factories/createLayout for layouts )


