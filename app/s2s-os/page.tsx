import Navigation from '@/components/navigation'

export default function S2SOSPage() {
  return (
    <>
      <Navigation />
      <main className="relative bg-background pt-32 pb-24 min-h-screen">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="font-eb-garamond font-bold text-foreground mb-16 lowercase text-6xl">
            s2s os
          </h1>

          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="font-eb-garamond font-bold text-foreground text-6xl lowercase">
                the soultosoul operating system
              </h2>
              <p className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase">
                our framework for building products that ship, teams that thrive, and systems that scale.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-foreground/20 pl-6 space-y-3">
                <h3 className="font-eb-garamond font-bold text-foreground text-6xl lowercase">
                  1. outcome definition
                </h3>
                <p className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase">
                  before touching code, we answer: what are you actually trying to achieve? what metrics prove success? which features move the needle? what's the minimum to validate assumptions?
                </p>
              </div>

              <div className="border-l-4 border-foreground/20 pl-6 space-y-3">
                <h3 className="font-eb-garamond font-bold text-foreground text-6xl lowercase">
                  2. architecture first
                </h3>
                <p className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase">
                  design complete systems from day one. data layer, internal tools, support surfaces—not extras, essentials. systems that read cleanly, scale naturally, survive time.
                </p>
              </div>

              <div className="border-l-4 border-foreground/20 pl-6 space-y-3">
                <h3 className="font-eb-garamond font-bold text-foreground text-6xl lowercase">
                  3. 90/10 engineering
                </h3>
                <p className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase">
                  ai handles 90% of mechanical work. humans own the 10% that matters. this is the paradigm that makes us 3x faster without the 95% ai failure rate.
                </p>
              </div>

              <div className="border-l-4 border-foreground/20 pl-6 space-y-3">
                <h3 className="font-eb-garamond font-bold text-foreground text-6xl lowercase">
                  4. ego-squeezing process
                </h3>
                <p className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase">
                  identify where ego—not business reality—drives decisions. "i think we should build x" becomes "what business outcome does x achieve?" personal preferences and stakeholder politics get navigated around with data and outcomes.
                </p>
              </div>

              <div className="border-l-4 border-foreground/20 pl-6 space-y-3">
                <h3 className="font-eb-garamond font-bold text-foreground text-6xl lowercase">
                  5. team wellbeing infrastructure
                </h3>
                <p className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase">
                  build teams that thrive, not just teams that ship. focus time protection, workload management, accommodation infrastructure, sustainable workflows. this isn't hr fluff—it's engineering infrastructure for human performance.
                </p>
              </div>

              <div className="border-l-4 border-foreground/20 pl-6 space-y-3">
                <h3 className="font-eb-garamond font-bold text-foreground text-6xl lowercase">
                  6. continuous delivery
                </h3>
                <p className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase">
                  ship early, ship often. measure impact. iterate based on real user behavior, not opinions. product & engineering processes that enable continuous delivery without burning out the team.
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <p className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase font-bold">
                this is the operating system that powers everything we build.
              </p>
              <p className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase">
                it's not proprietary. it's not secret. we share it openly because we believe the world needs more products built this way.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
