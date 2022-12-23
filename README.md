# Jesienna Poezja

Zbiór jesiennych wierszy

## TO DO

[ ] Add canonical, Twitter and OG URL
[ ] Deploy to Firebase:
    - firebase deploy --only hosting:kalnica
[ ] Add more poems, links:
    - <http://www.zosia.piasta.pl/o-jesieni.htm>
    - <https://poezja.org/wz/zbior/Wiersze_o_jesieni/>
    - <https://zinterpretuj.pl/wiersze/o-jesieni/#Jesien_-_Jan_Brzechwa>
    - <https://exerim.pl/strefa/wiersze-o-jesieni>
[ ] Create new screenshot.webp
[ ] Convert maskable_icons/ to .webp
[ ] Rename anthony_lee_unsplash.png
[ ] Convert anthony_lee_unsplash.png to .webp
[ ] Optimize for PWA:
    - Does not provide a valid apple-touch-icon
    - Manifest doesn't have a maskable icon
[ ] Avoid enormous network payloads
[ ] Remove unused JavaScript:
    - <https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/?utm_source=lighthouse&utm_medium=devtools>
[ ] Eliminate render-blocking resources:
    - <https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/?utm_source=lighthouse&utm_medium=devtools>
[ ] Extract poems to an API

## Lighthouse

Check if:
[ ] Page transitions don't feel like they block on the network
[ ] Structured data is valid
[ ] CSP is effective against XSS attacks
[ ] The user's focus is directed to new content added to the page
[ ] User focus is not accidentally trapped in a region
[ ] Custom controls have associated labels
[ ] Custom controls have ARIA roles
