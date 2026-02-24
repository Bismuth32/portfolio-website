# Publish to GitHub and Vercel

## GitHub (push this repo)

1. **Create the repository**  
   Open: [github.com/new?name=portfolio-website](https://github.com/new?name=portfolio-website)  
   - Name: `portfolio-website` (or any name)  
   - Do **not** add a README, .gitignore, or license.  
   - Click **Create repository**.

2. **Push from this folder** (use your GitHub username):
   ```bash
   ./publish-github.sh YOUR_GITHUB_USERNAME
   ```
   Or: `GITHUB_USER=YOUR_GITHUB_USERNAME ./publish-github.sh`  
   When prompted, use your GitHub username and a [Personal Access Token](https://github.com/settings/tokens) (not your password).

## Vercel (go live)

1. Go to [vercel.com](https://vercel.com) and sign in with **GitHub**.
2. **Add New… → Project** → **Import** your `portfolio-website` repo.
3. Leave defaults (Framework: Other, no build command, root = project root).
4. Click **Deploy**. Your site will be at `https://portfolio-website-xxx.vercel.app` (or your chosen name).
5. Every push to `main` will auto-deploy.

**Custom domain:** In the project → **Settings → Domains** you can add your own domain.
