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
[ ] Check site's looks
[ ] Fix this:
    - Warning: Each child in a list should have a unique "key" prop
    - Check the render method of `App`
    - See <https://reactjs.org/link/warning-keys> for more information
[ ] Create new screenshot.webp
[ ] Convert maskable_icons/ to .webp
[ ] Rename anthony_lee_unsplash.png and illustrations/
[ ] Convert anthony_lee_unsplash.png and illustrations/ to .webp
[ ] Optimize for PWA:
    - Does not set a theme color for the address bar
    - Does not provide a valid apple-touch-icon
    - Manifest doesn't have a maskable icon
[ ] Avoid chaining critical requests:
    - <https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains/?utm_source=lighthouse&utm_medium=devtools>
[ ] Avoid enormous network payloads
[ ] Minimize main-thread work
[ ] Remove unused JavaScript:
    - <https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/?utm_source=lighthouse&utm_medium=devtools>
[ ] Eliminate render-blocking resources:
    - <https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/?utm_source=lighthouse&utm_medium=devtools>

## Lighthouse

Check if:
[ ] Site works cross-browser
[ ] Page transitions don't feel like they block on the network
[ ] Each page has a URL
[ ] Structured data is valid
[ ] CSP is effective against XSS attacks
[ ] The page has a logical tab order
[ ] Interactive controls are keyboard focusable
[ ] Interactive elements indicate their purpose and state
[ ] The user's focus is directed to new content added to the page
[ ] User focus is not accidentally trapped in a region
[ ] Custom controls have associated labels
[ ] Custom controls have ARIA roles
[ ] Visual order on the page follows DOM order
[ ] Offscreen content is hidden from assistive technology
[ ] HTML5 landmark elements are used to improve navigation
