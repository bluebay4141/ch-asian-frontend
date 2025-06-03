export const metadata = {
  title: 'Explore Sri Lanka: Discover Stories, Tips, And Inspiration On Our Blog',
  description: 'Dive into the vibrant world of Sri Lanka through our blog. Find travel stories, insider tips, and inspiration to plan your next adventure to this stunning island paradise.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
