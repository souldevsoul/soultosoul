import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function OfflinePage() {
  return (
    <>
      <Navigation />
      <main className="relative bg-background pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-8">
          {/* Hero */}
          <div className="mb-20 text-center">
            <h1 className="font-eb-garamond font-bold text-foreground lowercase text-7xl md:text-8xl mb-12">
              we believe in offline
            </h1>
            <p className="font-stack-sans text-foreground/80 text-2xl leading-relaxed lowercase max-w-3xl mx-auto">
              remote work gave us freedom. but meaningful products are built through human connection. we're bridging the gap between distributed teams and deep collaboration.
            </p>
          </div>

          {/* Service Cards */}
          <div className="space-y-8 mb-20">
            {/* Card 1 - Team Retreats */}
            <div className="border border-foreground/10 rounded-2xl p-12 hover:border-foreground/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                  <h2 className="font-eb-garamond font-bold text-foreground text-5xl lowercase mb-6">
                    team retreats & workshops
                  </h2>
                  <p className="font-stack-sans text-foreground/70 text-xl leading-relaxed lowercase mb-6">
                    bring your distributed team together. 2-7 day immersive experiences where you connect, align, and ship together.
                  </p>
                  <ul className="space-y-3 font-stack-sans text-foreground/70 text-lg lowercase">
                    <li>→ strategic planning sessions</li>
                    <li>→ technical workshops & pair programming</li>
                    <li>→ team building through creation</li>
                    <li>→ custom locations (lisbon, porto, remote venues)</li>
                  </ul>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-foreground/5 rounded-lg p-6 text-center">
                    <div className="text-6xl mb-4">🤝</div>
                    <p className="font-stack-sans text-foreground text-sm lowercase">
                      reconnect. realign. rebuild.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Delivery Marathons */}
            <div className="border border-foreground/10 rounded-2xl p-12 hover:border-foreground/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                  <h2 className="font-eb-garamond font-bold text-foreground text-5xl lowercase mb-6">
                    delivery marathons
                  </h2>
                  <p className="font-stack-sans text-foreground/70 text-xl leading-relaxed lowercase mb-6">
                    ship something real in 48-72 hours. intensive sprints where your team goes from idea to production.
                  </p>
                  <ul className="space-y-3 font-stack-sans text-foreground/70 text-lg lowercase">
                    <li>→ rapid prototyping with 90/10 engineering</li>
                    <li>→ focused time blocks (work + rest cycles)</li>
                    <li>→ ship to production before you leave</li>
                    <li>→ includes: workspace, meals, equipment</li>
                  </ul>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-foreground/5 rounded-lg p-6 text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="font-stack-sans text-foreground text-sm lowercase">
                      from idea to deployed in 48h.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - R&D Labs */}
            <div className="border border-foreground/10 rounded-2xl p-12 hover:border-foreground/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-1">
                  <h2 className="font-eb-garamond font-bold text-foreground text-5xl lowercase mb-6">
                    r&d labs & coworking
                  </h2>
                  <p className="font-stack-sans text-foreground/70 text-xl leading-relaxed lowercase mb-6">
                    intentional physical spaces for deep work. experiment with human + ai workflows in community.
                  </p>
                  <ul className="space-y-3 font-stack-sans text-foreground/70 text-lg lowercase">
                    <li>→ curated coworking spaces for builders</li>
                    <li>→ ai + human workflow experimentation</li>
                    <li>→ community of mission-driven founders</li>
                    <li>→ coming soon: permanent space in lisbon</li>
                  </ul>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-foreground/5 rounded-lg p-6 text-center">
                    <div className="text-6xl mb-4">💡</div>
                    <p className="font-stack-sans text-foreground text-sm lowercase">
                      experiment. collaborate. thrive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Event */}
          <div className="border-t border-foreground/10 pt-20">
            <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-12 text-center">
              <h3 className="font-eb-garamond font-bold text-foreground text-5xl lowercase mb-6">
                join us offline
              </h3>
              <p className="font-stack-sans text-foreground/80 text-xl lowercase mb-10 max-w-2xl mx-auto">
                our first event: one day of connection, creation, and clarity
              </p>
              <Link
                href="/offline/s2s-1-0"
                className="black-button font-stack-sans font-semibold px-12 py-5 rounded-full transition-all duration-300 text-lg lowercase inline-block mb-4"
              >
                s2s 1.0 → feb 12, lisbon
              </Link>
              <p className="font-stack-sans text-foreground/60 text-sm lowercase">
                30 spots · full day · details coming soon
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h3 className="font-eb-garamond font-bold text-foreground text-4xl lowercase mb-8">
              want to bring your team offline?
            </h3>
            <Link
              href="/contact"
              className="black-button font-stack-sans font-semibold px-12 py-5 rounded-full transition-all duration-300 text-lg lowercase inline-block"
            >
              let's talk
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
