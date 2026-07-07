# IndigiSEA Project Website

Project website for the IndigiSEA project created with Next.js, Neon and PayloadCMS. Inform users about project details and updates, and allows non-technical administrators to manage site content through a headless CMS.

## Creating an Admin User

1. Login to the Payload Admin Dashboard at [http://localhost:3000/admin](http://localhost:3000/admin) with an existing admin account.
2. Go to the sidebar and click on "Admins" under the "Admin" section.
3. Click the "Create New" button to create a new admin user.
4. Fill in the required email and password for the new admin user, and optionally fill in their name.
5. Click the "Save" button to create the new admin user.

## Local Development Setup

1. Install Dependencies:

   ```bash
   pnpm install
   ```

   Seed the database on first startup:

   ```bash
   pnpm payload seed
   ```

2. Start the Development Server

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.
