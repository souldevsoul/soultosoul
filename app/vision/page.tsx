import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function VisionPage() {
  return (
    <>
      <Navigation />
      <main className="relative bg-background pt-32 pb-24 min-h-screen">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="font-eb-garamond font-bold text-foreground mb-16 lowercase text-6xl">
            vision
          </h1>

          <div className="space-y-20">
            <div className="space-y-8">
              <h2 className="font-eb-garamond font-bold text-foreground text-6xl lowercase">
                products your kids will be proud of
              </h2>
              <p className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase">
                engineers, founders, product leaders—we steer the future.
              </p>
              <p className="font-stack-sans text-foreground text-2xl leading-relaxed lowercase font-bold">
                want your kid using meta-controlled products in 15 years?
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="font-eb-garamond font-bold text-foreground text-6xl lowercase">
                the future we're building
              </h2>
              <ul className="space-y-4">
                <li className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase flex items-start">
                  <span className="mr-4">→</span>
                  <span>tech that serves humans</span>
                </li>
                <li className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase flex items-start">
                  <span className="mr-4">→</span>
                  <span>systems that empower</span>
                </li>
                <li className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase flex items-start">
                  <span className="mr-4">→</span>
                  <span>experiences that respect attention</span>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <h2 className="font-eb-garamond font-bold text-foreground text-6xl lowercase">
                intention over extraction
              </h2>
              <p className="font-stack-sans text-foreground/70 text-2xl leading-relaxed lowercase">
                no revenue extraction. values-based pricing for human-centered products.
              </p>
              <p className="font-stack-sans text-foreground text-2xl leading-relaxed lowercase font-bold">
                agency work funds mission work.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
