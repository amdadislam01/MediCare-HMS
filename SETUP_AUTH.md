# NextAuth.js Setup Guide for MediCare-HMS

## Overview
This project uses NextAuth.js for authentication with both Email/Password (Credentials) and Google OAuth providers.

## Prerequisites
1. A Google Cloud Platform (GCP) account
2. Node.js and npm installed

## Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth client ID**
5. If prompted, configure the OAuth consent screen:
   - Choose **External** (unless you have a Google Workspace)
   - Fill in the required information (App name, User support email, etc.)
   - Add your email to test users
6. Create OAuth Client ID:
   - Application type: **Web application**
   - Name: MediCare HMS (or any name)
   - Authorized JavaScript origins:
     - `http://localhost:3000` (for development)
     - `https://yourdomain.com` (for production)
   - Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (for development)
     - `https://yourdomain.com/api/auth/callback/google` (for production)
7. Copy the **Client ID** and **Client Secret**

## Step 2: Create Environment Variables

Create a `.env.local` file in the root of your project:

```env
# NextAuth Configuration
NEXTAUTH_SECRET=your-secret-key-here-generate-a-random-string
NEXTAUTH_URL=http://localhost:3000

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
```

### Generate NEXTAUTH_SECRET

You can generate a secure random string using one of these methods:

**Using OpenSSL (recommended):**
```bash
openssl rand -base64 32
```

**Using Node.js:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Online tool:**
Visit https://generate-secret.vercel.app/32

## Step 3: Install Dependencies

The required package is already installed, but if you need to reinstall:

```bash
npm install next-auth
```

## Step 4: Run the Development Server

```bash
npm run dev
```

## Step 5: Test the Login

### Email/Password Login (No setup required)

Test credentials are pre-configured:
- **Admin**: `admin@medicare.com` / `admin123`
- **Doctor**: `doctor@medicare.com` / `doctor123`
- **Patient**: `patient@medicare.com` / `patient123`

1. Navigate to `http://localhost:3000`
2. Click the **Login** button in the navbar
3. You should be redirected to `/login`
4. Enter email and password
5. Click **Sign In**
6. You should be redirected back to the home page

### Google OAuth Login

1. On the login page, click **Continue with Google**
2. Sign in with your Google account
3. You should be redirected back to the home page

**Note**: For Google login, you need to set up Google OAuth credentials (Step 1).

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           └── route.js          # NextAuth API route handler
│   └── login/
│       └── page.js                    # Login page component
├── components/
│   ├── providers/
│   │   └── SessionProvider.jsx       # NextAuth session provider wrapper
│   └── shared/
│       └── navbar/
│           └── LoginButton.jsx       # Updated login button with auth state
└── lib/
    └── auth.js                        # Auth configuration (optional)
```

## Features

- ✅ Email/Password authentication (Credentials provider)
- ✅ Google OAuth authentication
- ✅ Password hashing with bcryptjs
- ✅ Session management
- ✅ Protected routes (ready for implementation)
- ✅ Beautiful login page matching your color theme
- ✅ Responsive design
- ✅ Loading states and error handling
- ✅ Show/hide password toggle

## Troubleshooting

### Error: "Invalid credentials"
- Verify your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` are correct
- Ensure the redirect URI in Google Console matches exactly: `http://localhost:3000/api/auth/callback/google`

### Error: "NEXTAUTH_SECRET is missing"
- Make sure `.env.local` file exists in the root directory
- Restart your development server after adding environment variables

### Error: "redirect_uri_mismatch"
- Check that the redirect URI in your Google OAuth credentials matches exactly
- Include both `http://localhost:3000/api/auth/callback/google` for development

### Session not persisting
- Check that `NEXTAUTH_SECRET` is set and is a secure random string
- Clear browser cookies and try again

## Production Deployment

When deploying to production:

1. Update `NEXTAUTH_URL` to your production domain:
   ```env
   NEXTAUTH_URL=https://yourdomain.com
   ```

2. Add production redirect URI in Google Console:
   ```
   https://yourdomain.com/api/auth/callback/google
   ```

3. Ensure all environment variables are set in your hosting platform (Vercel, Netlify, etc.)

## Default Test Users

The system comes with three pre-configured test users:

| Email | Password | Role |
|-------|----------|------|
| admin@medicare.com | admin123 | admin |
| doctor@medicare.com | doctor123 | doctor |
| patient@medicare.com | patient123 | patient |

**Note**: In production, replace the in-memory user storage (`src/lib/users.js`) with a proper database.

## Next Steps

- ✅ Email/password authentication (Done!)
- Implement protected routes
- Add user profile page
- Integrate with database for user management
- Add user registration/signup page
- Add role-based access control (RBAC)
- Add password reset functionality

