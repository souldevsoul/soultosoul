# soultosoul website setup

## features implemented

### pages
- **homepage** (`/`) - hero, problem/solution, 90/10 engineering, services overview, work showcase
- **about** (`/about`) - company story with text reveal animation
- **vision** (`/vision`) - mission and values
- **services** (`/services`) - detailed service offerings with target audiences
- **projects** (`/projects`) - portfolio/case studies listing
- **project detail** (`/projects/[slug]`) - individual project template
- **contact** (`/contact`) - contact form with slack webhook

### components
- **navigation** - responsive header with scroll behavior
- **footer** - site-wide footer with links
- **contact-form** - form with slack integration and calendly link
- **text-reveal** - animated text reveal component
- **sacred-geometry** - three.js flower of life animation

### features
✅ contact form with slack webhook integration
✅ calendly booking integration
✅ work sections with logo placeholders (client work + products)
✅ services page with detailed descriptions
✅ target audience info for each service
✅ individual project page templates
✅ responsive design throughout
✅ consistent header/footer on all pages
✅ snappy, concise copy

## setup instructions

### 1. environment variables
copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 2. configure slack webhook
1. go to https://api.slack.com/messaging/webhooks
2. create a new webhook for your workspace
3. copy the webhook url
4. paste it in `.env.local`:
```
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

### 3. configure calendly (optional)
1. get your calendly booking link from https://calendly.com/
2. update the link in `components/contact-form.tsx` line 124:
```typescript
href="https://calendly.com/YOUR-USERNAME"
```

### 4. run development server
```bash
npm run dev
```

open http://localhost:3000

## customization

### add real project data
edit `app/projects/page.tsx` and `app/projects/[slug]/page.tsx` to add your actual projects

### replace logo placeholders
add client logos in the homepage work section (`app/page.tsx` lines 187-195)

### update calendly link
change the hardcoded calendly url in `components/contact-form.tsx`

### customize services
modify services data in `app/services/page.tsx`

## deployment
ensure `SLACK_WEBHOOK_URL` is set in your deployment environment variables
