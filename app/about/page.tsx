import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import TextReveal from '@/components/text-reveal'

export default function AboutPage() {
  const story = `tired of watching talented teams burn out building products that don't matter.

brilliant engineers grinding 80-hour weeks. shipping features nobody asked for. business asking "why isn't this moving the needle?"

the pattern is clear. agencies chase speed over correctness. teams code before defining success. debt spirals. burnout follows.

there's a better way.

90/10 engineering: ai handles mechanical work. humans own decisions that matter. complete systems day one—data, tools, support included. every line maps to business impact.

fulfilled teams make disruptive products.

we've built products that scale. helped teams go from chaos to clarity. proven you can move fast and build things that last.

we're the agency we wish existed.`

  return (
    <>
      <Navigation />
      <main className="relative bg-background pt-32 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="font-eb-garamond font-bold text-foreground mb-12 lowercase text-6xl">
            about
          </h1>

          <TextReveal
            text={story}
            className="font-stack-sans text-foreground/80 text-2xl leading-relaxed lowercase"
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
