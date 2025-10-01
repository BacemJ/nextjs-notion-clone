# Clerk JWT Template Configuration for Convex

## JWT Template Settings

**Template Name:** `convex`

**Token Lifetime:** 3600 seconds (1 hour)

**Claims:**
```json
{
  "iss": "https://your-clerk-domain.clerk.accounts.dev",
  "sub": "{{user.id}}",
  "aud": "convex",
  "exp": {{date.unix_timestamp_in_seconds | plus: 3600}},
  "iat": {{date.unix_timestamp_in_seconds}},
  "email": "{{user.primary_email_address.email_address}}",
  "email_verified": {{user.primary_email_address.verification.status == "verified"}},
  "family_name": "{{user.last_name}}",
  "given_name": "{{user.first_name}}",
  "name": "{{user.full_name}}"
}
```

## Alternative: Use Clerk's Convex Template

Clerk provides a pre-built Convex template. To use it:

1. In JWT Templates, click "New template"
2. Select "Convex" from the template options
3. Name it `convex`
4. Save the template