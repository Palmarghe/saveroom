# SaveRoom v5.3 Account + Paywall Foundation

Bu sÃ¼rÃ¼m, gerÃ§ek hesap ve Pro Ã¶deme sistemine geÃ§iÅŸ iÃ§in mimari temel hazÄ±rlar.

## Eklenenler

### 1. Hesap modeli

`src/data/account.js`

Åu an yerel demo hesap Ã¼retir. GerÃ§ek sÃ¼rÃ¼mde bu katman Firebase, Supabase veya kendi backend hesabÄ±na baÄŸlanabilir.

### 2. Pro Ã¼rÃ¼n modeli

`src/data/products.js`

- Lifetime Pro Ã¼rÃ¼n kimliÄŸi
- Free limitleri
- Pro hak durumu
- Pro avantajlarÄ±

### 3. Billing servis katmanÄ±

`src/services/billing.js`

Expo Go iÃ§inde gerÃ§ek App Store / Google Play satÄ±n alma Ã§alÄ±ÅŸmaz. Bu yÃ¼zden servis ÅŸu an demo satÄ±n alma dÃ¶ndÃ¼rÃ¼r.

GerÃ§ek maÄŸaza sÃ¼rÃ¼mÃ¼nde bu dosya ÅŸu yapÄ±lardan birine baÄŸlanmalÄ±dÄ±r:

- RevenueCat
- react-native-iap
- Ã¶zel StoreKit / Google Play Billing kÃ¶prÃ¼sÃ¼

### 4. Paywall ekranÄ±

`src/screens/PaywallScreen.js`

- Pro avantajlarÄ±
- Free limit kullanÄ±mÄ±
- Demo Pro aÃ§ma
- Restore purchase hazÄ±rlÄ±ÄŸÄ±
- Billing aÃ§Ä±klamasÄ±

### 5. Limit mantÄ±ÄŸÄ±

Free kullanÄ±cÄ±:

- 12 plan limiti
- 10 favori limiti
- Pro rehberlerde paywall yÃ¶nlendirmesi

Pro kullanÄ±cÄ±:

- SÄ±nÄ±rsÄ±z plan
- SÄ±nÄ±rsÄ±z favori
- Pro rehber eriÅŸimi

## Ã–nemli not

Bu sÃ¼rÃ¼m gerÃ§ek Ã¶deme almÄ±yor. GerÃ§ek Ã¶deme iÃ§in Expo Go deÄŸil, EAS build ve maÄŸaza Ã¶deme entegrasyonu gerekir.

