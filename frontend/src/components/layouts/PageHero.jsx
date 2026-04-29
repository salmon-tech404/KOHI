export default function PageHero({ image, children }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-coffee-950/70 via-coffee-950/50 to-coffee-950/80" />

      <div className="relative z-10 text-center text-white px-6">
        {children}
      </div>

    </section>
  )
}
