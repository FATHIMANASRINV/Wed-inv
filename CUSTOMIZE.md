# Wedding Invitation Customization

The main invitation is in `app/page.tsx`.

Change these first:
- Bride: `Ayesha`
- Groom: `Ahmed`
- Wedding date: `2026-09-14T16:00:00`
- Display date: `MONDAY · 14 SEPTEMBER 2026`
- Nikah time/location
- Walima time/location
- WhatsApp RSVP link

## Add your couple photo

Replace the `.photo-placeholder` block in `app/page.tsx` with:

```tsx
<img
  src="/couple.jpg"
  alt="Ayesha and Ahmed"
  className="couple-photo"
/>
```

Then put your photo at:

`public/couple.jpg`

You can also add floral PNG/SVG decorations in `public/` and use them in the page.

## Run

```bash
npm install
npm run dev
```

Open:

http://localhost:3000
