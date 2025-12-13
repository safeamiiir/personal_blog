---
external: false
draft: false
title: "📧 Setting Up Free Custom Domain Email with Cloudflare and BIMI"
description: "A comprehensive guide on receiving and sending emails with a custom domain using Cloudflare Email Routing for free, plus setting up BIMI for professional branding."
ai_generated: true
date: 2025-12-13
---

[THIS ARTICLE IS AI GENERATED]

Have you ever wanted a professional email address like `mail@yourname.com` but didn't want to pay for a dedicated mail hosting service like Google Workspace or Outlook? You're not alone. While buying a domain is cheap, hosting email often incurs a monthly fee.

This is where a **relay mail server** comes in. Unlike a traditional mail server that stores your emails, a relay server simply forwards incoming emails to another destination. It acts as a middleman, taking messages sent to your custom domain and pushing them to your personal inbox (like Gmail), completely free of charge.

## Enter Cloudflare Email Routing

Cloudflare offers a robust and completely free service called **Email Routing**. It allows you to create custom email addresses for your domain and forward incoming messages to your existing email account (Gmail, Outlook, Yahoo, etc.).

### How to Set It Up

Setting this up is incredibly fast. According to [Cloudflare's documentation](https://developers.cloudflare.com/email-routing/get-started/enable-email-routing/), here is the process:

1.  **Log in to Cloudflare Dashboard**: Select your domain.
2.  **Navigate to Email**: Click on the **Email** tab on the left sidebar.
3.  **Enable Email Routing**: Click "Get Started" or "enable." Cloudflare will automatically prompt you to add the necessary DNS records (MX and TXT records).
4.  **Verify Destination Address**: Add the personal email address where you want to receive mail (e.g., `yourname@gmail.com`). Cloudflare will send a verification email to this address; click the link inside to confirm.
5.  **Create Custom Address**: Once verified, go back to the "Routing Rules" tab and create your custom email (e.g., `mail@yourname.com`). Set the action to "Forward to" and select your verified destination address.

That's it! Emails sent to `mail@yourname.com` will now land in your Gmail inbox.

## Vital Step: Authorizing Google to Send (SPF)

Since we are going to use Gmail to send emails for your domain, we must tell the world that Google is allowed to do so. Without this, your emails will go straight to Spam or bounce.

You need to add a **TXT** record in your Cloudflare DNS:

*   **Type**: `TXT`
*   **Name**: `@` (Root)
*   **Content**: `v=spf1 include:_spf.mx.cloudflare.net include:_spf.google.com ~all`

*Note: Cloudflare usually creates a default SPF record for you (`v=spf1 include:_spf.mx.cloudflare.net ~all`). Do not create a second SPF record. Instead, **edit** the existing one and add `include:_spf.google.com` to it.*

## Vital Step 2: DMARC Policy (Avoid Silent Drops)

## Step 2: DMARC Policy (Helpful, but not Perfect)

Adding a DMARC record is generally good practice to prevent your emails from bouncing.

**However, a fair warning:** Providers like **Yahoo** and **Outlook** are incredibly strict. Even with the following record, they might still reject emails sent via the "Gmail Trick" because the cryptographic signature (DKIM) comes from Google, not your domain.

For most personal use, this helps. For strict providers, see the "Conclusion" for a better fix.

To fix this, you need to add a **DMARC** record to your Cloudflare DNS:

*   **Type**: `TXT`
*   **Name**: `_dmarc`
*   **Content**: `v=DMARC1; p=none;`

Setting the policy to `p=none` tells servers: "I know my authentication might look weird, but please don't reject my emails." (Note: Yahoo often ignores this request and rejects them anyway).

## Sending Emails as Your Custom Domain (The Trick)

Cloudflare Email Routing is technically "receiving-only." It doesn't give you an SMTP server to send emails. However, if you use Gmail, there's a clever workaround using Google's own SMTP servers to send mail *as* your custom domain.

1.  **Enable 2-Step Verification**: Go to your Google Account Security settings and ensure 2-Step Verification is on.
2.  **Create an App Password**: In the same security section, search for "App Passwords." Create a new one named "Cloudflare Email" (or whatever you like) and copy the 16-character code.
3.  **Add Account in Gmail**:
    *   Go to Gmail **Settings > Accounts and Import**.
    *   Under "Send mail as," click **Add another email address**.
    *   Enter your name and your custom email (e.g., `mail@yourname.com`). **Uncheck** "Treat as an alias."
        *   **Why uncheck it?** Unchecking this ensures that the email acts as a separate identity. If you leave it checked, emails you send might show up in your main Gmail inbox, and replies to your custom address might default to being sent from your primary Gmail address instead. Unchecking it keeps your personal and professional identities separate.
    *   Click **Next Step**.
4.  **Configure SMTP**:
    *   **SMTP Server**: `smtp.gmail.com`
        *   *Note: It might default to something else like `smtp.yourdomain.com` or `route1.mx.cloudflare.net`. You **must** change it to `smtp.gmail.com` because we are using Gmail's servers to send mail on behalf of your domain. Cloudflare does not provide an SMTP server for sending.*
    *   **Port**: `587`
    *   **Username**: Your *original* Gmail address (e.g., `yourname@gmail.com`).
    *   **Password**: Paste the **App Password** you generated in step 2.
    *   Select **TLS**.
5.  **Verify**: Google will send a confirmation code to your custom email. Since you set up forwarding, check your Gmail inbox, find the code, and enter it.

Now you can send emails from Gmail and choose your custom address! When you click **Compose** to start a new email, click on the "From" field (where your current email address is). A dropdown menu will appear, allowing you to select your new custom domain address.

## Looking Professional with BIMI

Now that your email is working, let's make it look official. **BIMI** (Brand Indicators for Message Identification) allows your brand logo to appear next to your messages in supported email clients (like Gmail), giving you instant credibility.

You can read more about it in [Google's official guide](https://support.google.com/a/answer/10911321?hl=en), but here is the simplified version.

### 1. Prepare Your Logo (SVG Tiny PS)

BIMI requires your logo to be in a very specific format: **SVG Tiny Portable/Secure (SVG Tiny PS)**. Standard SVGs will not work.

You can use tools like [svg-ps-converters](https://github.com/authindicators/svg-ps-converters) to convert your logo properly.

For this example, let's say your hosted logo is here:
`https://safeamii.ir/favicon/favicon_tiny_ps.svg`

### 2. Add the DNS Record

You need to add a specific `TXT` record to your Cloudflare DNS settings to tell the world where your logo is.

*   **Type**: `TXT`
*   **Name**: `default._bimi` (or just `default._bimi` if your provider appends the domain automatically).
*   **Content**: `v=BIMI1;l=https://safeamii.ir/favicon/favicon_tiny_ps.svg;a=;`

Wait a few hours (or up to 48 hours) for propagation. Once active, your emails will stand out in your recipients' inboxes with your custom logo.

## The Real Solution for Yahoo/Outlook Users

If you absolutely **must** send emails to Yahoo or Outlook addresses and cannot afford for them to bounce, the "Gmail Trick" above might not be enough.

To get 100% deliverability, you should use a dedicated **free SMTP service** instead of Gmail's SMTP. Services like **SMTP2GO** (free for 1,000 emails/month) or **Brevo** allow you to authenticate your domain properly.

1.  Sign up for **SMTP2GO** (or similar).
2.  Verify your domain with them (they will give you CNAME records to add to Cloudflare).
3.  In Gmail "Send mail as" settings, use *their* SMTP server (`mail.smtp2go.com`) instead of `smtp.gmail.com`.

This ensures your emails are signed with *your* domain's DKIM signature, passing all checks by Yahoo and Outlook.

## Conclusion

By combining Cloudflare Email Routing for free forwarding and Gmail's SMTP feature for sending, you've effectively built a professional email suite for the cost of just a domain name. Adding BIMI on top ensures that not only do your emails land in the right inbox, but they also look trusted and professional.

## Troubleshooting

If you are seeing "Authentication Failed" or emails aren't being sent:

1.  **Check App Password**: You cannot use your regular Gmail password. You MUST generate an "App Password" if you have 2-Factor Authentication enabled (which you should).
2.  **Check SPF Record**: Did you add the `include:_spf.google.com` to your DNS? If not, recipient servers will reject your mail.
3.  **Untick "Treat as Alias"**: Ensure this box is unchecked in Gmail settings to properly separate your identities.
4.  **Wait for Propagation**: DNS changes (like adding the SPF record) can take anywhere from a few minutes to 48 hours to propagate.
5.  **Check Spam/Junk Folder**: If the email was sent successfully but not received, it almost certainly went to the recipient's Spam folder. This happens often with new domains or due to "DKIM alignment" issues (since Gmail signs the email as gmail.com, but you are sending as yourdomain.com).
6.  **DKIM Alignment**: *Advanced note:* Because we are using Gmail's SMTP, the email is signed by Gmail (`d=gmail.com`), not your domain. Some strict recipient servers (like Outlook or commercial corporate mail) might mark this as spam or reject it if you have a strict DMARC policy (`p=reject`). For free, personal use, this setup works 95% of the time, but for guaranteed business delivery, a paid SMTP service (like SMTP2GO or Mailgun) is recommended.
7.  **Check for Bounce Messages**: If it's not in the recipient's Spam, check your *sender* Gmail inbox (or Updates/Promotions tabs) for a "Mail Delivery Subsystem" or "Bounce" notification. This often arrives minutes later and tells you exactly why it failed (e.g., "Unauthenticated Sender").

8.  **Silent Drops (Yahoo/Outlook)**: Even with DMARC set to `p=none`, specific providers like Yahoo are extremely strict about "DKIM Alignment." Since your email is technically signed by Gmail (`d=gmail.com`) and not your domain, Yahoo may still reject it with a "554 Authentication Failed" error.
    *   **The Hard Truth**: For Yahoo/Outlook recipients, this free Gmail workaround often fails.
    *   **The Fix**: You must stop using `smtp.gmail.com` and use a dedicated free SMTP service like **SMTP2GO** or **Brevo**. These services allow you to add *their* specific DKIM records to your DNS, ensuring your emails are properly signed and accepted by everyone.
