import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      name: '90/10 engineering',
      description: 'ai handles mechanical work. humans own decisions. complete systems from day one.',
      details: [
        'full-stack development with ai acceleration',
        'data layer, admin tools, support surfaces included',
        'business logic aligned to metrics',
        'security and compliance built in'
      ],
      ideal_for: [
        'startups shipping mvp to market',
        'scale-ups drowning in technical debt',
        'teams rebuilding failed outsourced projects',
        'companies needing complete systems, not just features'
      ],
      companies: 'seed to series b startups, digital transformation teams, product companies'
    },
    {
      name: 'product strategy',
      description: 'outcomes before code. map features to business impact.',
      details: [
        'define success metrics before writing code',
        'validate assumptions with rapid prototypes',
        'align engineering to business outcomes',
        'prevent feature factories and wasted sprints'
      ],
      ideal_for: [
        'founders unclear what to build first',
        'product teams shipping features that don\'t move metrics',
        'engineering leaders frustrated by misalignment',
        'companies with ideas but no execution clarity'
      ],
      companies: 'early-stage startups, innovation teams at enterprises, product leaders'
    },
    {
      name: 'team wellbeing',
      description: 'fulfilled teams make disruptive products. burnout kills innovation.',
      details: [
        'neurodiversity-informed development processes',
        'sustainable sprint planning that respects capacity',
        'focus on strengths, not fixing weaknesses',
        'wellbeing as competitive advantage'
      ],
      ideal_for: [
        'teams experiencing high turnover',
        'engineering orgs with burnout epidemic',
        'leaders who believe happy teams ship better products',
        'companies prioritizing human sustainability'
      ],
      companies: 'scale-ups, distributed teams, mission-driven companies'
    },
    {
      name: 'ai integration',
      description: '95% of ai pilots fail. we help you be the 5% that succeed.',
      details: [
        'strategic ai implementation with measurable roi',
        'custom models and prompt engineering',
        'ai-augmented workflows for your team',
        'pragmatic automation that actually works'
      ],
      ideal_for: [
        'companies with failed ai pilots',
        'teams drowning in manual operations',
        'orgs wanting competitive advantage through ai',
        'leaders tired of ai hype, want results'
      ],
      companies: 'saas companies, operations teams, data-heavy businesses'
    },
    {
      name: 'technical debt rescue',
      description: 'stop rewriting. start shipping.',
      details: [
        'assess and prioritize debt systematically',
        'incremental modernization without full rewrites',
        'establish sustainable development practices',
        'get back to feature velocity'
      ],
      ideal_for: [
        'teams spending 40%+ time on bug fixes',
        'companies with legacy systems blocking innovation',
        'orgs post-agency handoff facing the mess',
        'engineering leaders needing to prove roi of cleanup'
      ],
      companies: 'established startups, agencies that inherited mess, scale-ups'
    }
  ]

  return (
    <>
      <Navigation />
      <main className="relative bg-background pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h1 className="font-eb-garamond font-bold text-foreground mb-8 lowercase text-6xl">
              services
            </h1>
            <p className="font-stack-sans text-foreground/70 text-2xl lowercase max-w-3xl mx-auto">
              complete systems. business-first thinking. fulfilled teams.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="border border-foreground/10 rounded-2xl p-12 hover:border-foreground/30 transition-colors"
              >
                <div className="space-y-8">
                  <div>
                    <h2 className="font-eb-garamond font-bold text-foreground text-5xl lowercase mb-4">
                      {service.name}
                    </h2>
                    <p className="font-stack-sans text-foreground/80 text-2xl lowercase">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="font-stack-sans font-semibold text-foreground text-xl lowercase mb-4">
                        what we do
                      </h3>
                      <ul className="space-y-2">
                        {service.details.map((detail) => (
                          <li key={detail} className="font-stack-sans text-foreground/70 text-lg lowercase flex items-start">
                            <span className="mr-3 mt-1">→</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-stack-sans font-semibold text-foreground text-xl lowercase mb-4">
                        ideal for
                      </h3>
                      <ul className="space-y-2 mb-6">
                        {service.ideal_for.map((audience) => (
                          <li key={audience} className="font-stack-sans text-foreground/70 text-lg lowercase flex items-start">
                            <span className="mr-3 mt-1">→</span>
                            <span>{audience}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-foreground/10">
                        <p className="font-stack-sans text-foreground/60 text-sm lowercase">
                          <span className="font-semibold">typical clients: </span>
                          {service.companies}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="black-button font-stack-sans font-semibold px-8 py-3 rounded-full transition-all duration-300 lowercase inline-block"
                    >
                      discuss this service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="font-stack-sans text-foreground/70 text-2xl lowercase mb-8">
              not sure which service fits? let's talk.
            </p>
            <Link
              href="/contact"
              className="black-button font-stack-sans font-semibold px-12 py-5 rounded-full transition-all duration-300 text-lg lowercase inline-block"
            >
              get in touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
