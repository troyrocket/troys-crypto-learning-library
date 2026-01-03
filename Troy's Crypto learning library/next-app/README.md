# Troy's Crypto Learning Library

A Next.js 14 web application showcasing curated resources for learning about Crypto.

## Features

- 🎥 Featured YouTube videos with embedded players
- 🎙️ Podcast recommendations
- 👥 People to follow on X (Twitter)
- 📧 Newsletter subscriptions
- 🛠️ Recommended AI products
- ✨ Useful AI prompts with copy-to-clipboard functionality

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript
- **Styling**: Global CSS with CSS Variables
- **Components**: React Server & Client Components

## Project Structure

```
next-app/
├── app/
│   ├── data/          # Data files for content
│   ├── layout.js      # Root layout
│   ├── page.js        # Home page
│   └── globals.css    # Global styles
├── components/        # React components
├── public/           # Static assets
└── package.json
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for Production

```bash
npm run build
npm start
```

## Key Components

- **FacesBadge**: Fixed badge in top-right corner
- **Hero**: Main title and introduction
- **VideoGrid**: YouTube video embeds with metadata
- **Podcasts**: Podcast recommendations
- **People**: Social media profiles to follow
- **Newsletters**: Newsletter subscriptions
- **Products**: Product recommendations
- **Prompts**: AI prompts with copy functionality

## Client vs Server Components

- **Client Components** (with 'use client'):
  - `VideoCard` - for potential interactions
  - `PromptCard` - copy-to-clipboard functionality

- **Server Components** (default):
  - All other components render on the server

## Customization

### Update Content

Edit the data files in `app/data/`:
- `videos.js` - Video content
- `podcasts.js` - Podcast listings
- `people.js` - People to follow
- `newsletters.js` - Newsletter subscriptions
- `products.js` - Product recommendations
- `prompts.js` - AI prompts

### Modify Styles

Edit `app/globals.css` to customize:
- CSS variables (colors, spacing, etc.)
- Component styles
- Responsive breakpoints
- Animations

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- YouTube embeds require HTTPS or localhost
- Clipboard API for copy functionality

## License

This project is based on the original design from [Zara's AI learning library](https://zara.faces.site/ai).

## Author

Curated by Troy Yan
