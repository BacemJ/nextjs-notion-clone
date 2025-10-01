# Fix for SWR/Clerk Compatibility Issue

## ✅ Issues Fixed

### 1. **Mixed Server/Client Component Issue**
**Problem:** Using client-side `useUser()` hook in server component
**Solution:** Replaced with server-side `currentUser()` from `@clerk/nextjs/server`

**Before:**
```tsx
import { useUser } from "@clerk/clerk-react";
const { user } = useUser();
```

**After:**
```tsx
import { currentUser } from "@clerk/nextjs/server";
const user = await currentUser();
```

### 2. **Missing SWR Dependency**
**Problem:** Clerk requires SWR but it wasn't installed
**Solution:** Installed SWR package

```bash
npm install swr
```

### 3. **Clerk Provider Configuration**
**Problem:** Redundant publishableKey prop in ClerkProvider
**Solution:** Removed explicit publishableKey (uses env vars automatically)

**Before:**
```tsx
<ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
```

**After:**
```tsx
<ClerkProvider>
```

### 4. **Environment Variables**
**Added:** JWT issuer domain for proper Clerk/Convex integration
```bash
CLERK_JWT_ISSUER_DOMAIN=https://innocent-dogfish-95.clerk.accounts.dev
```

## 🔧 Key Points for Server vs Client Components

### Server Components (async functions)
- Use `auth()` and `currentUser()` from `@clerk/nextjs/server`
- Can access user data server-side
- Better for SEO and performance

### Client Components ("use client")
- Use `useUser()`, `useAuth()` from `@clerk/nextjs`
- Interactive components with hooks
- Required for real-time updates

## 🎯 Next Steps

1. **Run development server** to test the fix
2. **Create JWT template** in Clerk dashboard named "convex"
3. **Push Convex config** with `npx convex dev --once`

The SWR compatibility issue should now be resolved!