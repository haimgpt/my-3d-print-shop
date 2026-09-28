# אתר הדפסות תלת־ממד — Cloudflare

האתר הזה מוכן ל־Cloudflare Workers + Static Assets.

## עריכה קלה בעתיד

רוב הזמן צריך לערוך רק שני קבצים:

- `public/settings.js` — שם העסק, WhatsApp וכתובת האתר.
- `public/products.js` — מוצרים, מחירים, קטגוריות ותמונות.

לתמונות:
1. צור תיקייה `public/images`
2. העלה תמונה
3. בתוך המוצר כתוב למשל:
   `image: "images/stand.jpg"`

## חיבור ל־Cloudflare

1. היכנס ל־Cloudflare Dashboard.
2. עבור אל Workers & Pages.
3. בחר Create application.
4. בחר Import a repository.
5. חבר GitHub ובחר את repository הזה.
6. אם מתבקשות הגדרות build:
   - Build command: `npm run deploy`
   - Root directory: `/`
7. לחץ Save and Deploy.

בסיום תקבל כתובת workers.dev.

## אחרי הפריסה

עדכן את כתובת האתר ב:
- `public/settings.js`
- `public/robots.txt`
- `public/sitemap.xml`

שמור Commit ב־GitHub. Cloudflare יפרוס מחדש אוטומטית.

## Google Search Console

לאחר שהאתר באוויר:
1. הוסף את כתובת האתר כ־URL prefix.
2. אמת בעלות.
3. תחת Sitemaps שלח: `sitemap.xml`.
