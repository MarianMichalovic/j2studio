# Optimalizácia obrázkov pre J2Studio

Tento skript automaticky optimalizuje všetky obrázky v priečinkoch `img/kuchyna` a `img/montaze`.

## Rýchle spustenie

### Windows
1. Dvakrát kliknite na `optimize.bat`
2. Vyberte formát (WebP odporúčame)
3. Počkajte na dokončenie

### Manuálne spustenie
```bash
# Inštalácia závislostí
npm install

# Optimalizácia do WebP (odporúčané)
npm run optimize:webp

# Optimalizácia do JPEG
npm run optimize:jpeg
```

## Výsledky

Optimalizované obrázky sa uložia do nových priečinkov:
- `img/kuchyna_optimized_webp/` alebo `img/kuchyna_optimized_jpeg/`
- `img/montaze_optimized_webp/` alebo `img/montaze_optimized_jpeg/`

## Nastavenia

V súbore `optimize-images.js` môžete upraviť:
- `quality`: 85 (kvalita 1-100)
- `maxWidth`: 1920 (max šírka v px)
- `maxHeight`: 1080 (max výška v px)

## Výhody WebP vs JPEG

### WebP (odporúčané)
- ✅ 25-35% menšie súbory
- ✅ Podporuje transparentnosť
- ✅ Lepšia kvalita pri rovnakej veľkosti
- ⚠️ Starší Internet Explorer nepodporuje

### JPEG
- ✅ Univerzálna podpora
- ✅ Štandardný formát
- ❌ Väčšie súbory
- ❌ Bez transparentnosti

## Čo skript robí

1. **Zmení veľkosť** obrázkov max na 1920x1080px
2. **Optimalizuje kvalitu** na 85%
3. **Konvertuje** do efektívnejšieho formátu
4. **Zobrazuje štatistiky** úspory miesta
5. **Zachováva pôvodné** súbory

## Požiadavky

- Node.js (verzia 14+)
- NPM (automaticky s Node.js)

Stiahnite Node.js z: https://nodejs.org/
