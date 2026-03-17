# FOSSC Website

This is the Next.js project for the FOSSC (Free and Open Source Software Community) website.

## Deployment Instructions

This project is built with [Next.js](https://nextjs.org/) and can be easily deployed to Vercel, the creators of Next.js, or any other hosting provider that supports Node.js.

### 1. Deploying on Vercel (Recommended)
The easiest way to deploy your Next.js app is to use the Vercel Platform.

**Steps:**
1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) with your GitHub account.
3. Click on **Add New...** -> **Project**.
4. Import your GitHub repository (`Zish19/FOSSC-website`).
5. Leave all default build settings (Framework Preset: Next.js).
6. Click **Deploy**. Vercel will automatically build and publish your site.

### 2. Manual Deployment (VPS / Self-hosted)
If you are deploying on your own server (e.g., DigitalOcean, AWS EC2, Linode):

1. **Clone the repository** on your server:
   ```bash
   git clone https://github.com/Zish19/FOSSC-website.git
   cd FOSSC-website
   ```

2. **Install dependencies** (Requires Node.js 18.17 or later):
   ```bash
   npm install
   ```

3. **Build the production bundle**:
   ```bash
   npm run build
   ```

4. **Start the production server**:
   ```bash
   npm run start
   ```
   *(Note: For a persistent production server, it is recommended to use a process manager like `pm2` by running `pm2 start npm --name "fossc" -- run start`)*.

---
*Built with ❤️ for the FOSSC Open Source Community.*
