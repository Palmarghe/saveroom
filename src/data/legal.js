export const LEGAL_COPY = {
  tr: {
    title: 'Bağımsızlık Notu',
    text: 'SaveRoom bağımsız bir premium menajerlik rehberi uygulamasıdır. Football Manager, Sports Interactive veya SEGA ile bağlı değildir. Resmi logo, resmi veri tabanı veya scrape edilmiş oyun verisi kullanmaz.'
  },
  en: {
    title: 'Independence Notice',
    text: 'SaveRoom is an independent premium manager guide app. It is not affiliated with Football Manager, Sports Interactive or SEGA. It does not use official logos, official databases or scraped game data.'
  }
};

export function getLegalCopy(language = 'tr') {
  return LEGAL_COPY[language] || LEGAL_COPY.en;
}
