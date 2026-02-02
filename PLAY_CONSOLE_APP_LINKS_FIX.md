# Fix "Domain non-redirect failed" in Play Console

Google's App Links verifier **does not follow redirects**. When it requests `https://yourdomain/.well-known/assetlinks.json`, it must get a **direct HTTP 200** response. If it gets 301 or 302 (or 307), you see "Domain non-redirect failed".

## What’s happening on themetalapp.com

- **https://themetalapp.com/.well-known/assetlinks.json** → returns **307 redirect** to www (Google fails here).
- **https://www.themetalapp.com/.well-known/assetlinks.json** → returns **200 OK**.

So Vercel is redirecting the apex domain (themetalapp.com) to www. Play Console is using **themetalapp.com**, so the verifier gets a redirect and fails.

---

## Fix: choose one

### Option A – Make apex return 200 (recommended, no app change)

**In Vercel:** stop redirecting themetalapp.com to www so the apex domain serves the site directly.

1. Vercel Dashboard → your **metal-website** project → **Settings** → **Domains**.
2. Find **themetalapp.com** (apex). If it’s set to **“Redirect to www.themetalapp.com”** (or similar), change it so that **themetalapp.com** **serves** the project (no redirect).
   - Usually: remove the redirect, or set themetalapp.com as the **primary** domain that serves the project.
   - You can keep **www.themetalapp.com** as an alias that also serves the same project (both return 200), or have www redirect to apex—either is fine.
3. After saving, wait a minute and test:
   ```bash
   curl -I https://themetalapp.com/.well-known/assetlinks.json
   ```
   You should see **200** (not 307/301/302).
4. In Play Console, leave the website domain as **themetalapp.com** and click **Recheck verification**.

No app or code changes needed; shared links stay as `https://themetalapp.com/...`.

---

### Option B – Use www in Play Console and in the app

If you want to keep redirecting apex → www (e.g. www as canonical):

1. In **Play Console** → App links → website domain: use **www.themetalapp.com** (not themetalapp.com).
2. Update the **Flutter app** so all deep links use **www.themetalapp.com**:
   - `deep_link_service.dart`: all share URLs use `https://www.themetalapp.com/...`
   - `AndroidManifest.xml`: `android:host="www.themetalapp.com"`
   - `Info.plist`: `applinks:www.themetalapp.com`
3. Release a new app version, then recheck verification in Play Console.

---

## 1. Find which domain returns 200 (if you’re unsure)

Run (replace with your domain):

```bash
# Apex domain
curl -I https://themetalapp.com/.well-known/assetlinks.json

# If you use www
curl -I https://www.themetalapp.com/.well-known/assetlinks.json
```

- If you see **301** or **302** → that domain redirects; Google will fail.
- If you see **200 OK** → use that exact domain in Play Console.

## 2. Fix on Vercel (recommended: apex returns 200)

If you use **Vercel**:

1. Open your project → **Settings** → **Domains**.
2. You likely have **themetalapp.com** set to *"Redirect to www.themetalapp.com"* (or the opposite).
3. **Option A (simplest):** Make **themetalapp.com** the domain that **serves** the project (no redirect).  
   - Remove the redirect so **themetalapp.com** is the primary domain.  
   - Then in Play Console use **themetalapp.com** (already used in the app). No app changes needed.
4. **Option B:** If you want **www** as canonical:  
   - In Play Console add **www.themetalapp.com** (the one that returns 200).  
   - Update the Flutter app: share URLs, Android `android:host`, and iOS `associated-domains` to use **www.themetalapp.com**.

## 3. What to use in Play Console

- In **Play Console** → your app → **Grow** → **App links** (or **Setup** → **App integrity** → **App links**).
- Under "Website domain", use **exactly** the host that returns 200 from the `curl` above:
  - If `https://themetalapp.com/.well-known/assetlinks.json` returns 200 → use **themetalapp.com**.
  - If only `https://www.themetalapp.com/.well-known/assetlinks.json` returns 200 → use **www.themetalapp.com** (and update the app to use www as in Option B above).

Do **not** add `https://` or a path—only the hostname (e.g. `themetalapp.com`).

## 4. After changing Vercel

1. Redeploy or wait for cache.
2. Run `curl -I https://themetalapp.com/.well-known/assetlinks.json` again and confirm **200 OK**.
3. In Play Console, run the verification again (or publish a new version so verification re-runs).

## 5. Optional: validate Digital Asset Links

```text
https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://themetalapp.com&relation=delegate_permission/common.handle_all_urls
```

Replace `themetalapp.com` with the domain you use. The response should list your app and SHA256 fingerprint.
