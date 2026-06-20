# Git Komutları

Aşağıdaki komutlarda `KULLANICI_ADIN` kısmını GitHub kullanıcı adınla değiştir.

## İlk yükleme

```bash
git init
git add .
git commit -m "Initial SaveRoom app"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/saveroom.git
git push -u origin main
```

## Sonraki güncellemeler

```bash
git add .
git commit -m "Update SaveRoom"
git push
```

## Remote yanlışsa düzeltme

```bash
git remote remove origin
git remote add origin https://github.com/KULLANICI_ADIN/saveroom.git
git push -u origin main
```

## Git kurulu değilse

Windows için Git'i kurman gerekir:

https://git-scm.com/download/win
```
