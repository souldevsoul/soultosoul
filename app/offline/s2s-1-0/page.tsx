import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function S2S10EventPage() {
  return (
    <>
      <Navigation />
      <main className="relative bg-background pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-8">
          {/* Hero */}
          <div className="mb-20 text-center">
            <div className="mb-8">
              <span className="font-stack-sans text-foreground/60 text-lg lowercase">
                february 12, 2025 · lisbon
              </span>
            </div>
            <h1 className="font-eb-garamond font-bold text-foreground lowercase text-7xl md:text-9xl mb-8">
              s2s 1.0
            </h1>
            <p className="font-stack-sans text-foreground/80 text-3xl lowercase mb-6">
              the first offline
            </p>
            <p className="font-stack-sans text-foreground/70 text-xl lowercase max-w-2xl mx-auto">
              where remote teams become real. where ideas become products. where founders find their people.
            </p>
          </div>

          {/* The Premise */}
          <section className="mb-20 border-t border-foreground/10 pt-20">
            <h2 className="font-eb-garamond font-bold text-foreground text-5xl lowercase mb-8">
              what if we stopped pretending?
            </h2>

            <div className="space-y-6 font-stack-sans text-foreground/80 text-xl leading-relaxed lowercase">
              <p>
                remote work gave us freedom. but somewhere between the zoom calls and slack threads, we lost something essential.
              </p>
              <p>
                you can't build meaningful products through screens alone.
              </p>
              <p>
                you can't feel the energy when an idea clicks.
                you can't read the room when something's wrong.
                you can't build trust in 30-minute blocks.
              </p>
              <p className="text-foreground text-2xl font-bold">
                so we're doing something different.
              </p>
            </div>
          </section>

          {/* What Is This */}
          <section className="mb-20 border-t border-foreground/10 pt-20">
            <h2 className="font-eb-garamond font-bold text-foreground text-5xl lowercase mb-12">
              s2s 1.0 is
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <div className="text-6xl">🤝</div>
                <h3 className="font-eb-garamond font-bold text-foreground text-3xl lowercase">
                  connection
                </h3>
                <p className="font-stack-sans text-foreground/70 lowercase">
                  meet the founders, engineers, and builders shaping what comes next
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-6xl">🚀</div>
                <h3 className="font-eb-garamond font-bold text-foreground text-3xl lowercase">
                  creation
                </h3>
                <p className="font-stack-sans text-foreground/70 lowercase">
                  ship something real. prototype, build, launch—together
                </p>
              </div>

              <div className="space-y-4">
                <div className="text-6xl">💡</div>
                <h3 className="font-eb-garamond font-bold text-foreground text-3xl lowercase">
                  clarity
                </h3>
                <p className="font-stack-sans text-foreground/70 lowercase">
                  workshops on 90/10 engineering, product thinking, and building teams that thrive
                </p>
              </div>
            </div>
          </section>

          {/* The Format */}
          <section className="mb-20 border-t border-foreground/10 pt-20">
            <h2 className="font-eb-garamond font-bold text-foreground text-5xl lowercase mb-8">
              one day. three movements.
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-foreground/20 pl-8">
                <h3 className="font-stack-sans font-semibold text-foreground text-2xl lowercase mb-3">
                  morning: foundations
                </h3>
                <p className="font-stack-sans text-foreground/70 text-lg lowercase">
                  arrive. connect. understand what we're building together. workshop on 90/10 engineering philosophy.
                </p>
              </div>

              <div className="border-l-4 border-foreground/20 pl-8">
                <h3 className="font-stack-sans font-semibold text-foreground text-2xl lowercase mb-3">
                  afternoon: creation
                </h3>
                <p className="font-stack-sans text-foreground/70 text-lg lowercase">
                  form teams. pick a challenge. build something real. ai-accelerated, human-guided.
                </p>
              </div>

              <div className="border-l-4 border-foreground/20 pl-8">
                <h3 className="font-stack-sans font-semibold text-foreground text-2xl lowercase mb-3">
                  evening: emergence
                </h3>
                <p className="font-stack-sans text-foreground/70 text-lg lowercase">
                  demo what you built. celebrate what emerged. plan what comes next.
                </p>
              </div>
            </div>
          </section>

          {/* Who Should Come */}
          <section className="mb-20 border-t border-foreground/10 pt-20">
            <h2 className="font-eb-garamond font-bold text-foreground text-5xl lowercase mb-8">
              this is for you if
            </h2>

            <div className="space-y-4 font-stack-sans text-foreground/70 text-xl lowercase">
              <p>→ you're building products that matter</p>
              <p>→ you're tired of remote-first meaning connection-last</p>
              <p>→ you believe in human craft + ai leverage</p>
              <p>→ you want to meet the people changing how software gets built</p>
              <p>→ you're ready to ship something real in one day</p>
            </div>

            <div className="mt-12 bg-foreground/5 border border-foreground/10 rounded-2xl p-8">
              <p className="font-stack-sans text-foreground/80 text-lg lowercase italic">
                founders. engineers. product leaders. designers. anyone building the future we want to see.
              </p>
            </div>
          </section>

          {/* Details TBC */}
          <section className="mb-20 border-t border-foreground/10 pt-20">
            <h2 className="font-eb-garamond font-bold text-foreground text-5xl lowercase mb-12">
              the details
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-stack-sans font-semibold text-foreground text-xl lowercase mb-4">when</h3>
                <p className="font-stack-sans text-foreground/70 text-lg lowercase">
                  wednesday, february 12, 2025
                  <br />9am - 9pm
                </p>
              </div>

              <div>
                <h3 className="font-stack-sans font-semibold text-foreground text-xl lowercase mb-4">where</h3>
                <p className="font-stack-sans text-foreground/70 text-lg lowercase">
                  lisbon, portugal
                  <br />exact venue tbc
                </p>
              </div>

              <div>
                <h3 className="font-stack-sans font-semibold text-foreground text-xl lowercase mb-4">capacity</h3>
                <p className="font-stack-sans text-foreground/70 text-lg lowercase">
                  30 people max
                  <br />intimate, intentional
                </p>
              </div>

              <div>
                <h3 className="font-stack-sans font-semibold text-foreground text-xl lowercase mb-4">cost</h3>
                <p className="font-stack-sans text-foreground/70 text-lg lowercase">
                  tbc
                  <br />food & drinks included
                </p>
              </div>
            </div>

            <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="font-stack-sans text-yellow-900 text-lg lowercase">
                <span className="font-semibold">details coming soon:</span> full schedule, venue location, ticket pricing, and more. sign up below to be notified when registration opens.
              </p>
            </div>
          </section>

          {/* Why Lisbon */}
          <section className="mb-20 border-t border-foreground/10 pt-20">
            <h2 className="font-eb-garamond font-bold text-foreground text-5xl lowercase mb-8">
              why lisbon?
            </h2>

            <p className="font-stack-sans text-foreground/80 text-xl leading-relaxed lowercase mb-6">
              lisbon has become europe's quiet hub for builders.
            </p>

            <div className="space-y-4 font-stack-sans text-foreground/70 text-lg lowercase">
              <p>→ thriving startup ecosystem</p>
              <p>→ reasonable costs (unlike london, paris, amsterdam)</p>
              <p>→ february weather that doesn't hate you</p>
              <p>→ culture that values human connection</p>
              <p>→ easy to reach from anywhere in europe</p>
            </div>

            <p className="font-stack-sans text-foreground/80 text-xl leading-relaxed lowercase mt-8">
              it's where remote teams come to remember they're human.
            </p>
          </section>

          {/* The Promise */}
          <section className="mb-20 border-t border-foreground/10 pt-20">
            <div className="text-center space-y-8">
              <h2 className="font-eb-garamond font-bold text-foreground text-6xl lowercase">
                what you'll leave with
              </h2>

              <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
                <div className="space-y-3">
                  <p className="font-stack-sans text-foreground/80 text-xl lowercase">
                    → something you built (and shipped)
                  </p>
                  <p className="font-stack-sans text-foreground/80 text-xl lowercase">
                    → people who get it
                  </p>
                  <p className="font-stack-sans text-foreground/80 text-xl lowercase">
                    → clarity on what to build next
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="font-stack-sans text-foreground/80 text-xl lowercase">
                    → proof that 90/10 works
                  </p>
                  <p className="font-stack-sans text-foreground/80 text-xl lowercase">
                    → renewed energy for what matters
                  </p>
                  <p className="font-stack-sans text-foreground/80 text-xl lowercase">
                    → a community that builds together
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-foreground/10 pt-20">
            <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-16 text-center">
              <h3 className="font-eb-garamond font-bold text-foreground text-5xl lowercase mb-6">
                be part of s2s 1.0
              </h3>
              <p className="font-stack-sans text-foreground/80 text-xl lowercase mb-10 max-w-2xl mx-auto">
                registration opens soon. add your email to be first to know when tickets go live.
              </p>
              <Link
                href="/contact"
                className="black-button font-stack-sans font-semibold px-16 py-6 rounded-full transition-all duration-300 text-xl lowercase inline-block"
              >
                notify me
              </Link>
              <p className="font-stack-sans text-foreground/60 text-sm lowercase mt-6">
                30 spots · feb 12 · lisbon
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
