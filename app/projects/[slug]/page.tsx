import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'

// This would typically come from a CMS or database
const getProject = (slug: string) => {
  // Example project data - replace with actual data source
  return {
    title: 'fintech platform rebuild',
    client: 'series a fintech startup',
    year: '2024',
    category: '90/10 engineering',
    description: 'rescued a failed agency project and shipped production-ready mvp in 8 weeks',
    challenge: 'inherited a half-built platform with mounting technical debt. previous agency left after 6 months. team was burnt out. investors were losing patience.',
    solution: 'applied 90/10 engineering: ai handled boilerplate, data models, and test scaffolding. humans focused on business logic, security, and regulatory compliance.',
    results: [
      'shipped mvp in 8 weeks (vs 6+ months with previous agency)',
      'zero production incidents in first 3 months',
      'technical debt reduced by 70%',
      'team morale restored—zero turnover since launch'
    ],
    tech: ['next.js', 'typescript', 'postgresql', 'stripe', 'vercel'],
    services: ['90/10 engineering', 'technical debt rescue', 'team wellbeing'],
    testimonial: {
      quote: 'soultosoul saved our company. they didn\'t just ship code—they rebuilt our team\'s confidence.',
      author: 'founder & ceo',
      role: 'series a fintech'
    }
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  return (
    <>
      <Navigation />
      <main className="relative bg-background pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-8">
          {/* Header */}
          <div className="mb-16">
            <Link
              href="/projects"
              className="font-stack-sans text-foreground/60 hover:text-foreground lowercase mb-8 inline-block transition-colors"
            >
              ← back to projects
            </Link>
            <div className="flex gap-3 mb-6">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="font-stack-sans text-sm lowercase bg-foreground/10 px-4 py-2 rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
            <h1 className="font-eb-garamond font-bold text-foreground lowercase text-6xl mb-4">
              {project.title}
            </h1>
            <div className="flex gap-8 font-stack-sans text-foreground/60 lowercase">
              <span>{project.client}</span>
              <span>{project.year}</span>
              <span>{project.category}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-video bg-foreground/5 border border-foreground/10 rounded-2xl flex items-center justify-center mb-16">
            <span className="font-stack-sans text-foreground/30 lowercase text-xl">project hero image</span>
          </div>

          {/* Overview */}
          <div className="space-y-16">
            <div>
              <h2 className="font-eb-garamond font-bold text-foreground text-4xl lowercase mb-6">
                overview
              </h2>
              <p className="font-stack-sans text-foreground/80 text-2xl leading-relaxed lowercase">
                {project.description}
              </p>
            </div>

            {/* Challenge */}
            <div>
              <h2 className="font-eb-garamond font-bold text-foreground text-4xl lowercase mb-6">
                the challenge
              </h2>
              <p className="font-stack-sans text-foreground/70 text-xl leading-relaxed lowercase">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="font-eb-garamond font-bold text-foreground text-4xl lowercase mb-6">
                our approach
              </h2>
              <p className="font-stack-sans text-foreground/70 text-xl leading-relaxed lowercase">
                {project.solution}
              </p>
            </div>

            {/* Results */}
            <div>
              <h2 className="font-eb-garamond font-bold text-foreground text-4xl lowercase mb-6">
                results
              </h2>
              <ul className="space-y-4">
                {project.results.map((result) => (
                  <li
                    key={result}
                    className="font-stack-sans text-foreground/70 text-xl leading-relaxed lowercase flex items-start"
                  >
                    <span className="mr-4 mt-1">→</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="font-stack-sans font-semibold text-foreground text-xl lowercase mb-4">
                tech stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-stack-sans lowercase bg-foreground/5 border border-foreground/10 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <div className="border-l-4 border-foreground/20 pl-8 py-6">
                <p className="font-stack-sans text-foreground text-2xl lowercase mb-4 italic">
                  "{project.testimonial.quote}"
                </p>
                <p className="font-stack-sans text-foreground/60 lowercase">
                  — {project.testimonial.author}, {project.testimonial.role}
                </p>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-20 pt-16 border-t border-foreground/10 text-center">
            <h3 className="font-eb-garamond font-bold text-foreground text-4xl lowercase mb-8">
              ready for similar results?
            </h3>
            <Link
              href="/contact"
              className="black-button font-stack-sans font-semibold px-12 py-5 rounded-full transition-all duration-300 text-lg lowercase inline-block"
            >
              start your project
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
