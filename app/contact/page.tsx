import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ContactForm from '@/components/contact-form'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="relative bg-background pt-32 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="font-eb-garamond font-bold text-foreground mb-8 lowercase text-6xl text-center">
            let's build something that matters
          </h1>
          <p className="font-stack-sans text-foreground/70 text-2xl text-center lowercase mb-16">
            ready to ship faster, build better, and stop burning out?
          </p>

          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
