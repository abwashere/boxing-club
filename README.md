# VBC - _Villejuif Boxing Club_

This app was meant to make a better version of my boxing club website, but also for learning purposes (use SSG, CMS, TS, tailwind...).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

## Getting Started

First, install the app dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `app` folder has 2 subfolders : (user) and (admin)

- (user) contains all the app pages/routes
- (admin) contains the Sanity studio page

---

## Content management

You need a [Sanity](https://sanity.io) account to use this feature

Open [http://localhost:3000/studio/desk](http://localhost:3000/studio/desk) with your browser to access Sanity studio (content manager).

Sanity also provides a preview mode.

1. To enable it, you need to make an API call to [http://localhost:3000/api/preview](http://localhost:3000/preview)

2. To see the app preview, go to [http://localhost:3000](http://localhost:3000)

3. To exit: [http://localhost:3000/api/exit-preview](http://localhost:3000/exit-preview)

In **production**, replace host url with **vbc-abwashere.vercel.app**.

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

First, install the vercel CLI globally, if needed:

```bash
npm install -g vercel
```

Then, run the build command:

```bash
vercel
```

If automatic deployment is enabled:

```bash
git push origin main # will automatically deploy in Preview
```

To deploy to prod, create a PR or rebase and push in local.
