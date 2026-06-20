# SaveRoom'u GitHub'a YÃ¼kleme Rehberi

Bu paket GitHub repository ve GitHub Pages iÃ§in hazÄ±rlandÄ±.

## Ã–nerilen repository adÄ±

`saveroom`

## 1. GitHub'da repo oluÅŸtur

1. GitHub hesabÄ±na gir.
2. SaÄŸ Ã¼stte `+` iÅŸaretine bas.
3. `New repository` seÃ§.
4. Repository name: `saveroom`
5. Ä°lk aÅŸamada `Private` seÃ§meni Ã¶neririm.
6. `Create repository` butonuna bas.

## 2. DosyalarÄ± bilgisayarda hazÄ±rla

Bu ZIP'i bir klasÃ¶re Ã§Ä±kar.

Ã–rnek:

`C:\Users\Kaan\Desktop\saveroom`

## 3. Git ile yÃ¼kle

KlasÃ¶rde saÄŸ tÄ±kla, Terminal/CMD aÃ§ ve `GIT_COMMANDS_TR.md` iÃ§indeki komutlarÄ± kullan.

## 4. GitHub Pages aÃ§

Privacy Policy ve Terms iÃ§in GitHub Pages kullanacaÄŸÄ±z.

GitHub'da repo iÃ§inde:

1. Settings
2. Pages
3. Build and deployment
4. Source: `Deploy from a branch`
5. Branch: `main`
6. Folder: `/docs`
7. Save

BirkaÃ§ dakika sonra URL ÅŸuna benzer olur:

`https://KULLANICI_ADIN.github.io/saveroom/privacy.html`

Terms URL:

`https://KULLANICI_ADIN.github.io/saveroom/terms.html`

## 5. app.json iÃ§indeki TODO alanlarÄ±nÄ± gÃ¼ncelle

GitHub Pages URL'lerin oluÅŸunca `app.json` iÃ§indeki ÅŸu alanlarÄ± gerÃ§ek URL ile deÄŸiÅŸtir:

- `TODO_PUBLIC_PRIVACY_POLICY_URL`
- `TODO_PUBLIC_TERMS_URL`
- `mailto:recepkaanerkay@gmail.com`

AyrÄ±ca `src/config/appConfig.js` iÃ§inde:

- `recepkaanerkay@gmail.com`
- `TODO_PUBLIC_PRIVACY_POLICY_URL`
- `TODO_PUBLIC_TERMS_URL`

alanlarÄ±nÄ± gÃ¼ncelle.

## Ã–nemli

App Store iÃ§in Privacy Policy URL herkese aÃ§Ä±k olmalÄ±. Repository private olsa bile GitHub Pages ayarÄ±nÄ±n yayÄ±nlanabilmesi iÃ§in GitHub planÄ±na ve repo ayarlarÄ±na dikkat et. En sorunsuz yÃ¶ntem: kod repo private, legal docs iÃ§in kÃ¼Ã§Ã¼k ayrÄ± public repo kullanmak olabilir.

