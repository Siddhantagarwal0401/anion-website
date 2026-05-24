# 3 Months Anniversary Website 💕

A beautiful, emotional, and interactive anniversary website built with Next.js, Framer Motion, and Tailwind CSS. This romantic scrapbook-style experience celebrates your special moments together.

## ✨ Features

- **Hero Section**: Stunning opening with animated title and floating hearts
- **Interactive Gallery**: Polaroid-style photo gallery with masonry layout and modal lightbox
- **Reasons I Love You**: Flip cards revealing heartfelt reasons
- **Relationship Timeline**: Beautiful visual timeline of your journey together
- **Music Player**: Vinyl-style music player with rotating animations
- **Emotional Ending**: Heartfelt final message with dreamy animations
- **Floating Elements**: Ambient particles throughout the experience
- **Fully Responsive**: Mobile-first design that works on all devices
- **Premium Animations**: Smooth, cinematic motion design with Framer Motion

## 🎨 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Customize Your Content

#### **Images**
- Add your photos to the `/public/images/` folder
- Update image paths in `/sections/GallerySection.tsx`

#### **Dates & Timeline**
- Update the anniversary start date in `/sections/HeroSection.tsx` (line 15)
- Customize timeline memories in `/sections/TimelineSection.tsx`

#### **Personal Messages**
- Edit reasons in `/sections/ReasonsSection.tsx`
- Customize the ending message in `/sections/EndingSection.tsx`

#### **Music**
- Add your audio file to `/public/audio/our-song.mp3`
- Update song details in `/sections/MusicSection.tsx`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── FloatingElements.tsx    # Ambient floating particles
│   ├── Polaroid.tsx           # Polaroid photo component
│   ├── Modal.tsx              # Photo lightbox modal
│   ├── ReasonCard.tsx         # Flip card component
│   └── TimelineItem.tsx       # Timeline memory item
├── sections/
│   ├── HeroSection.tsx        # Opening hero
│   ├── GallerySection.tsx     # Photo gallery
│   ├── ReasonsSection.tsx     # Reasons I love you
│   ├── TimelineSection.tsx    # Relationship timeline
│   ├── MusicSection.tsx       # Music player
│   └── EndingSection.tsx      # Final message
├── public/
│   ├── images/               # Your photos
│   └── audio/                # Music file
└── tailwind.config.ts        # Tailwind configuration
```

## 🎨 Customization Guide

### Colors
Edit the color palette in `tailwind.config.ts`:
- `cream`: Soft background tones
- `rose`: Romantic accent colors

### Fonts
The project uses three font families:
- **Playfair Display**: Elegant headings (`.elegant-heading`)
- **Caveat**: Handwritten text (`.handwritten`)
- **Inter**: Modern body text (default)

### Animations
All animations use Framer Motion. Customize timing, easing, and effects in each component.

### Layout
- Adjust spacing, padding, and max-widths in section components
- Modify grid layouts in Gallery and Reasons sections

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

## 💡 Tips

- **Images**: Use high-quality photos (recommended: 1200x800px or larger)
- **Audio**: Use MP3 format for best compatibility
- **Performance**: Optimize images using Next.js Image component (already implemented)
- **Mobile**: Test on mobile devices for best experience

## 📝 Customization Checklist

- [ ] Replace photos in `/public/images/`
- [ ] Update image paths in `GallerySection.tsx`
- [ ] Change anniversary start date in `HeroSection.tsx`
- [ ] Customize timeline memories in `TimelineSection.tsx`
- [ ] Edit reasons in `ReasonsSection.tsx`
- [ ] Write your personal message in `EndingSection.tsx`
- [ ] Add your song to `/public/audio/`
- [ ] Update song details in `MusicSection.tsx`
- [ ] Add your signature/name in `EndingSection.tsx`

## ❤️ Made With Love

This website was crafted with care to celebrate your special moments. Every animation, every color, every word is designed to create an emotional and memorable experience.

---

**Enjoy your romantic journey! 💕✨**
