# Fix "Domain non-redirect failed" in Play Console

Google's App Links verifier **does not follow redirects**. When it requests `https://yourdomain/.well-known/assetlinks.json`, it must get a **direct HTTP 200** response. If it gets 301 or 302, you see "Domain non-redirect failed".

## 1. Find which domain returns 200

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
