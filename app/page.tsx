'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { FlowingLines } from '@/components/flowing-lines'
import { WelcomeAudio } from '@/components/welcome-audio'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'others' | 'ours'>('others')
  return (
    <>
      <Navigation />
      <WelcomeAudio />
      <main className="relative bg-background">
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden px-8 bg-background">
          {/* Flowing Lines Animation */}
          <FlowingLines />

          {/* Hero Content */}
          <div className="relative z-10 text-center max-w-7xl mx-auto">
            {/* Oversized SOULTOSOUL Title */}
            <h1
              className="font-eb-garamond font-bold tracking-tight leading-none mb-8 text-foreground lowercase"
              style={{
                fontSize: 'clamp(4rem, 20vh, 20vh)',
                fontWeight: 700,
                letterSpacing: '-0.02em'
              }}
            >
              soultosoul
            </h1>

            {/* Tagline */}
            <p
              className="font-stack-sans text-foreground/80 lowercase mb-16"
              style={{
                fontSize: 'clamp(1.25rem, 3vh, 3vh)',
                fontWeight: 400,
                letterSpacing: '0.02em'
              }}
            >
              engineering that ships. teams that thrive. systems that scale.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 justify-center">
              <a
                href="/contact"
                className="black-button font-stack-sans font-semibold px-12 py-5 rounded-full transition-all duration-300 lowercase text-lg"
              >
                let&apos;s talk
              </a>
              <a
                href="#work"
                className="black-button-outline font-stack-sans font-medium px-12 py-5 rounded-full transition-all duration-300 lowercase text-lg"
              >
                view work
              </a>
            </div>
          </div>
        </section>

        {/* The Problem - Compact */}
        <section className="relative min-h-screen bg-background px-8 py-24 flex items-center justify-center">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <h2 className="font-eb-garamond font-bold text-foreground lowercase text-6xl">
              the problem
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-3">
                <div className="font-stack-sans text-foreground text-5xl font-bold">72%</div>
                <p className="font-stack-sans text-foreground/70 text-2xl lowercase">drown in technical debt</p>
              </div>
              <div className="space-y-3">
                <div className="font-stack-sans text-foreground text-5xl font-bold">40%</div>
                <p className="font-stack-sans text-foreground/70 text-2xl lowercase">dev time fixing debt</p>
              </div>
              <div className="space-y-3">
                <div className="font-stack-sans text-foreground text-5xl font-bold">1 in 5</div>
                <p className="font-stack-sans text-foreground/70 text-2xl lowercase">projects fail goals</p>
              </div>
              <div className="space-y-3">
                <div className="font-stack-sans text-foreground text-5xl font-bold">95%</div>
                <p className="font-stack-sans text-foreground/70 text-2xl lowercase">ai pilots miss targets</p>
              </div>
            </div>

            <p className="font-stack-sans text-foreground/80 text-2xl leading-relaxed lowercase pt-8">
              hire agency. ship features. six months later: nothing scales, ops is hell, rewrite everything.
            </p>
          </div>
        </section>

        {/* The Solution - 90/10 Engineering */}
        <section id="our-approach" className="relative min-h-screen bg-background px-8 py-24 border-t border-foreground/10 flex items-center justify-center">
          <div className="max-w-5xl mx-auto space-y-16">
            <h2 className="font-eb-garamond font-bold text-foreground text-center lowercase text-6xl mb-16">
              90/10 engineering
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="font-eb-garamond font-bold text-foreground text-3xl lowercase">ai does 90%</h3>
                <ul className="space-y-3 font-stack-sans text-foreground/70 text-2xl lowercase">
                  <li>→ boilerplate, types, tests</li>
                  <li>→ admin surfaces, ci/cd</li>
                  <li>→ monitoring hooks</li>
                  <li>→ domain models</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="font-eb-garamond font-bold text-foreground text-3xl lowercase">humans own 10%</h3>
                <ul className="space-y-3 font-stack-sans text-foreground/70 text-2xl lowercase">
                  <li>→ business logic</li>
                  <li>→ security gates</li>
                  <li>→ metric alignment</li>
                  <li>→ decisions that move outcomes</li>
                </ul>
              </div>
            </div>

            <p className="font-stack-sans text-foreground text-2xl text-center lowercase pt-8 font-bold">
              sprint-speed delivery. durable systems. no surprises.
            </p>
          </div>
        </section>

        {/* What We Do - Centered & Bigger */}
        <section id="what-we-do" className="relative min-h-screen bg-background px-8 py-24 border-t border-foreground/10 flex items-center justify-center">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-eb-garamond font-bold text-foreground mb-20 lowercase text-7xl md:text-8xl">
              what we do
            </h2>

            <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
              <div className="space-y-6">
                <h3 className="font-eb-garamond font-bold text-foreground text-5xl lowercase">engineering</h3>
                <p className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase">
                  complete systems day one. data, tools, support included.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="font-eb-garamond font-bold text-foreground text-5xl lowercase">product strategy</h3>
                <p className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase">
                  outcomes before code. features map to metrics.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="font-eb-garamond font-bold text-foreground text-5xl lowercase">team wellbeing</h3>
                <p className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase">
                  fulfilled teams make disruptive products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section with Tabs */}
        <section id="work" className="relative min-h-screen bg-background px-8 py-24 border-t border-foreground/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-eb-garamond font-bold text-foreground lowercase text-7xl md:text-8xl text-center mb-16">
              work
            </h2>

            {/* Tabs */}
            <div className="flex justify-center gap-8 mb-16">
              <button
                onClick={() => setActiveTab('others')}
                className={`font-eb-garamond font-bold text-4xl md:text-5xl lowercase transition-all ${
                  activeTab === 'others'
                    ? 'text-foreground'
                    : 'text-foreground/30 hover:text-foreground/60'
                }`}
              >
                for others
              </button>
              <button
                onClick={() => setActiveTab('ours')}
                className={`font-eb-garamond font-bold text-4xl md:text-5xl lowercase transition-all ${
                  activeTab === 'ours'
                    ? 'text-foreground'
                    : 'text-foreground/30 hover:text-foreground/60'
                }`}
              >
                ours
              </button>
            </div>

            {/* Tab Content */}
            <div className="grid md:grid-cols-2 gap-12">
              {activeTab === 'others' ? (
                // Client Work - Big Cards
                <>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={`client-${i}`}
                      className="group bg-foreground/5 border border-foreground/10 rounded-2xl p-12 hover:border-foreground/30 transition-all cursor-pointer"
                    >
                      <div className="aspect-video bg-foreground/10 rounded-lg mb-8 flex items-center justify-center">
                        <span className="font-stack-sans text-foreground/30 lowercase text-2xl">project image</span>
                      </div>
                      <h3 className="font-eb-garamond font-bold text-foreground text-4xl lowercase mb-4 group-hover:opacity-70 transition-opacity">
                        project title
                      </h3>
                      <p className="font-stack-sans text-foreground/70 text-xl lowercase mb-4">
                        brief description of the project and what we delivered for the client
                      </p>
                      <div className="flex gap-3 flex-wrap">
                        <span className="font-stack-sans text-xs lowercase bg-foreground/10 px-3 py-1 rounded-full">tag</span>
                        <span className="font-stack-sans text-xs lowercase bg-foreground/10 px-3 py-1 rounded-full">tag</span>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                // Our Products - Big Cards
                <>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={`product-${i}`}
                      className="group bg-foreground/5 border border-foreground/10 rounded-2xl p-12 hover:border-foreground/30 transition-all cursor-pointer"
                    >
                      <div className="aspect-video bg-foreground/10 rounded-lg mb-8 flex items-center justify-center">
                        <span className="font-stack-sans text-foreground/30 lowercase text-2xl">product image</span>
                      </div>
                      <h3 className="font-eb-garamond font-bold text-foreground text-4xl lowercase mb-4 group-hover:opacity-70 transition-opacity">
                        product name
                      </h3>
                      <p className="font-stack-sans text-foreground/70 text-xl lowercase mb-4">
                        building the future we want to see. description of what this product does.
                      </p>
                      <div className="flex gap-3 flex-wrap">
                        <span className="font-stack-sans text-xs lowercase bg-foreground/10 px-3 py-1 rounded-full">category</span>
                        <span className="font-stack-sans text-xs lowercase bg-foreground/10 px-3 py-1 rounded-full">status</span>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative min-h-screen bg-background px-8 py-24 border-t border-foreground/10 flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <h2 className="font-eb-garamond font-bold text-foreground lowercase text-6xl">
              let&apos;s build something that matters
            </h2>

            <div className="flex gap-4 justify-center">
              <a href="/contact" className="black-button font-stack-sans font-semibold px-12 py-5 rounded-full transition-all duration-300 text-lg lowercase">
                get in touch
              </a>
              <a href="/services" className="black-button-outline font-stack-sans font-medium px-12 py-5 rounded-full transition-all duration-300 text-lg lowercase">
                view services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
