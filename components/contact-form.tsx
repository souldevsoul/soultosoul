'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-stack-sans text-foreground/80 lowercase mb-2">
            name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-background border border-foreground/20 rounded-lg font-stack-sans text-foreground lowercase focus:outline-none focus:border-foreground/60 transition-colors"
            placeholder="your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-stack-sans text-foreground/80 lowercase mb-2">
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 bg-background border border-foreground/20 rounded-lg font-stack-sans text-foreground lowercase focus:outline-none focus:border-foreground/60 transition-colors"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block font-stack-sans text-foreground/80 lowercase mb-2">
            company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-6 py-4 bg-background border border-foreground/20 rounded-lg font-stack-sans text-foreground lowercase focus:outline-none focus:border-foreground/60 transition-colors"
            placeholder="your company"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-stack-sans text-foreground/80 lowercase mb-2">
            how can we help?
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-6 py-4 bg-background border border-foreground/20 rounded-lg font-stack-sans text-foreground lowercase focus:outline-none focus:border-foreground/60 transition-colors resize-none"
            placeholder="tell us about your project..."
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="black-button font-stack-sans font-semibold px-12 py-5 rounded-full transition-all duration-300 text-lg lowercase disabled:opacity-50"
        >
          {status === 'sending' ? 'sending...' : status === 'success' ? 'sent!' : 'send message'}
        </button>

        <a
          href="https://calendly.com/soultosoul"
          target="_blank"
          rel="noopener noreferrer"
          className="black-button-outline font-stack-sans font-medium px-12 py-5 rounded-full transition-all duration-300 text-lg lowercase inline-flex items-center"
        >
          book a call
        </a>
      </div>

      {status === 'error' && (
        <p className="font-stack-sans text-red-600 lowercase">
          something went wrong. please try again.
        </p>
      )}
    </form>
  )
}
