# SaveRoom'u GitHub'a Yükleme Rehberi

Bu paket GitHub repository ve GitHub Pages için hazırlandı.

## Önerilen repository adı

`saveroom`

## 1. GitHub'da repo oluştur

1. GitHub hesabına gir.
2. Sağ üstte `+` işaretine bas.
3. `New repository` seç.
4. Repository name: `saveroom`
5. İlk aşamada `Private` seçmeni öneririm.
6. `Create repository` butonuna bas.

## 2. Dosyaları bilgisayarda hazırla

Bu ZIP'i bir klasöre çıkar.

Örnek:

`C:\Users\Kaan\Desktop\saveroom`

## 3. Git ile yükle

Klasörde sağ tıkla, Terminal/CMD aç ve `GIT_COMMANDS_TR.md` içindeki komutları kullan.

## 4. GitHub Pages aç

Privacy Policy ve Terms için GitHub Pages kullanacağız.

GitHub'da repo içinde:

1. Settings
2. Pages
3. Build and deployment
4. Source: `Deploy from a branch`
5. Branch: `main`
6. Folder: `/docs`
7. Save

Birkaç dakika sonra URL şuna benzer olur:

`https://KULLANICI_ADIN.github.io/saveroom/privacy.html`

Terms URL:

`https://KULLANICI_ADIN.github.io/saveroom/terms.html`

## 5. app.json içindeki TODO alanlarını güncelle

GitHub Pages URL'lerin oluşunca `app.json` içindeki şu alanları gerçek URL ile değiştir:

- `TODO_PUBLIC_PRIVACY_POLICY_URL`
- `TODO_PUBLIC_TERMS_URL`
- `TODO_PUBLIC_SUPPORT_URL`

Ayrıca `src/config/appConfig.js` içinde:

- `TODO_SUPPORT_EMAIL`
- `TODO_PUBLIC_PRIVACY_POLICY_URL`
- `TODO_PUBLIC_TERMS_URL`

alanlarını güncelle.

## Önemli

App Store için Privacy Policy URL herkese açık olmalı. Repository private olsa bile GitHub Pages ayarının yayınlanabilmesi için GitHub planına ve repo ayarlarına dikkat et. En sorunsuz yöntem: kod repo private, legal docs için küçük ayrı public repo kullanmak olabilir.
