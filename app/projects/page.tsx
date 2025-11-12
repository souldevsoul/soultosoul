import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function ProjectsPage() {
  const projects = [
    {
      slug: 'example-project-1',
      title: 'fintech platform rebuild',
      client: 'series a fintech',
      category: 'engineering',
      description: 'rescued failed agency project. shipped mvp in 8 weeks.',
      image: '/projects/placeholder-1.jpg',
      tags: ['90/10 engineering', 'technical debt rescue', 'fintech']
    },
    {
      slug: 'example-project-2',
      title: 'ai operations automation',
      client: 'saas scale-up',
      category: 'ai integration',
      description: 'reduced manual ops by 60%. first profitable ai pilot.',
      image: '/projects/placeholder-2.jpg',
      tags: ['ai integration', 'automation', 'saas']
    },
    {
      slug: 'example-project-3',
      title: 'product market fit sprint',
      client: 'early stage startup',
      category: 'product strategy',
      description: 'validated 3 hypotheses in 4 weeks. pivoted to traction.',
      image: '/projects/placeholder-3.jpg',
      tags: ['product strategy', 'mvp', 'startup']
    },
  ]

  return (
    <>
      <Navigation />
      <main className="relative bg-background pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h1 className="font-eb-garamond font-bold text-foreground mb-8 lowercase text-6xl">
              projects
            </h1>
            <p className="font-stack-sans text-foreground/70 text-2xl lowercase max-w-3xl mx-auto">
              real results. real teams. real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group border border-foreground/10 rounded-2xl overflow-hidden hover:border-foreground/30 transition-all duration-300"
              >
                <div className="aspect-video bg-foreground/5 flex items-center justify-center">
                  <span className="font-stack-sans text-foreground/30 lowercase">project image</span>
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-stack-sans text-xs lowercase bg-foreground/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-eb-garamond font-bold text-foreground text-3xl lowercase mb-2 group-hover:opacity-70 transition-opacity">
                    {project.title}
                  </h3>
                  <p className="font-stack-sans text-foreground/60 text-sm lowercase mb-3">
                    {project.client}
                  </p>
                  <p className="font-stack-sans text-foreground/80 text-lg lowercase">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="font-stack-sans text-foreground/70 text-2xl lowercase mb-8">
              ready to be our next success story?
            </p>
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
