# Care Studio GTM Site

Production-ready GTM marketing website for **Care Studio**, the macOS Utilities app.

## Source Material

- App name: Care Studio
- Subtitle: Local Mac cleanup review
- Category: Utilities
- Existing source privacy policy: https://tarunag10.github.io/MacCareStudio-Privacy-Policy/
- Suggested Vercel URL: https://care-studio.vercel.app
- Current App Store link used in the site: https://apps.apple.com/app/id6770096564?mt=12

If Apple's final public App Store URL includes a regional slug, update the `appStoreUrl` constant in `app/page.tsx`.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

## Deployment Steps

1. Create a new GitHub repository named `care-studio-gtm-site`.
2. Push this website code to that repository.
3. Create a new Vercel project.
4. Connect Vercel to the GitHub repository.
5. Set the Vercel project/site name to `Care Studio`.
6. Deploy the site.
7. Confirm the homepage loads at the final Vercel URL.
8. Confirm the privacy policy loads at `/privacy`.
9. Confirm `/privacy` links back to `https://tarunag10.github.io/MacCareStudio-Privacy-Policy/`.
10. Replace the Mac App Store privacy policy URL with the deployed `/privacy` URL.

Suggested privacy URL after deployment:

```text
https://care-studio.vercel.app/privacy
```

## Final Checklist

- App name is exactly Care Studio.
- Homepage includes hero, features, screenshots, app details, privacy preview, CTA, and footer.
- `/privacy` page exists.
- `/privacy` links to the GitHub privacy policy source.
- Homepage and footer link to `/privacy`.
- Mac App Store button is black and includes the Apple logo.
- Existing repo screenshots and icon are used.
- Branding follows the existing dark premium macOS utility style.
