# SaveRoom v5.3 Account + Paywall Foundation

Bu sürüm, gerçek hesap ve Pro ödeme sistemine geçiş için mimari temel hazırlar.

## Eklenenler

### 1. Hesap modeli

`src/data/account.js`

Şu an yerel demo hesap üretir. Gerçek sürümde bu katman Firebase, Supabase veya kendi backend hesabına bağlanabilir.

### 2. Pro ürün modeli

`src/data/products.js`

- Lifetime Pro ürün kimliği
- Free limitleri
- Pro hak durumu
- Pro avantajları

### 3. Billing servis katmanı

`src/services/billing.js`

Expo Go içinde gerçek App Store / Google Play satın alma çalışmaz. Bu yüzden servis şu an demo satın alma döndürür.

Gerçek mağaza sürümünde bu dosya şu yapılardan birine bağlanmalıdır:

- RevenueCat
- react-native-iap
- özel StoreKit / Google Play Billing köprüsü

### 4. Paywall ekranı

`src/screens/PaywallScreen.js`

- Pro avantajları
- Free limit kullanımı
- Demo Pro açma
- Restore purchase hazırlığı
- Billing açıklaması

### 5. Limit mantığı

Free kullanıcı:

- 12 plan limiti
- 10 favori limiti
- Pro rehberlerde paywall yönlendirmesi

Pro kullanıcı:

- Sınırsız plan
- Sınırsız favori
- Pro rehber erişimi

## Önemli not

Bu sürüm gerçek ödeme almıyor. Gerçek ödeme için Expo Go değil, EAS build ve mağaza ödeme entegrasyonu gerekir.
