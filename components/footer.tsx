import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-foreground/10 px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="/" className="font-eb-garamond font-bold text-2xl lowercase hover:opacity-70 transition-opacity">
              soultosoul
            </Link>
            <p className="font-stack-sans text-foreground/60 lowercase mt-2">
              engineering that ships. teams that thrive.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h3 className="font-stack-sans font-semibold text-foreground lowercase mb-3">explore</h3>
              <div className="flex flex-col gap-2">
                <Link href="/about" className="font-stack-sans text-foreground/60 hover:text-foreground lowercase transition-colors">
                  about
                </Link>
                <Link href="/services" className="font-stack-sans text-foreground/60 hover:text-foreground lowercase transition-colors">
                  services
                </Link>
                <Link href="/projects" className="font-stack-sans text-foreground/60 hover:text-foreground lowercase transition-colors">
                  projects
                </Link>
                <Link href="/vision" className="font-stack-sans text-foreground/60 hover:text-foreground lowercase transition-colors">
                  vision
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-stack-sans font-semibold text-foreground lowercase mb-3">connect</h3>
              <div className="flex flex-col gap-2">
                <a href="mailto:hello@soultosoul.com" className="font-stack-sans text-foreground/60 hover:text-foreground lowercase transition-colors">
                  hello@soultosoul.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-foreground/10 text-center">
          <p className="font-stack-sans text-foreground/40 text-sm lowercase">
            © 2025 soultosoul. building products your kids will be proud of.
          </p>
        </div>
      </div>
    </footer>
  )
}
