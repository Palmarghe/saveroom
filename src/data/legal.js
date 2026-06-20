export const LEGAL_COPY = {
  tr: {
    title: 'BaÄŸÄ±msÄ±zlÄ±k Notu',
    text: 'SaveRoom baÄŸÄ±msÄ±z bir premium menajerlik rehberi uygulamasÄ±dÄ±r. Football Manager, Sports Interactive veya SEGA ile baÄŸlÄ± deÄŸildir. Resmi logo, resmi veri tabanÄ± veya scrape edilmiÅŸ oyun verisi kullanmaz.'
  },
  en: {
    title: 'Independence Notice',
    text: 'SaveRoom is an independent premium manager guide app. It is not affiliated with Football Manager, Sports Interactive or SEGA. It does not use official logos, official databases or scraped game data.'
  }
};

export function getLegalCopy(language = 'tr') {
  return LEGAL_COPY[language] || LEGAL_COPY.en;
}

