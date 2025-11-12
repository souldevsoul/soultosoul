'use client'

import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'

export default function VoiceAgent() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load ElevenLabs Conversational AI Widget
    const script = document.createElement('script')
    script.src = 'https://elevenlabs.io/convai-widget/index.js'
    script.async = true
    script.onload = () => {
      setIsLoading(false)
    }
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="relative">
      <div className="border border-foreground/10 rounded-2xl p-8 bg-background/50 backdrop-blur">
        <div className="text-center mb-6">
          <h3 className="font-eb-garamond font-bold text-foreground text-3xl lowercase mb-4">
            talk to our ai assistant
          </h3>
          <p className="font-stack-sans text-foreground/70 text-lg lowercase">
            press the microphone button to start a conversation
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          {isLoading ? (
            <div className="flex items-center gap-3 text-foreground/60">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="font-stack-sans lowercase">loading voice agent...</span>
            </div>
          ) : (
            <elevenlabs-convai
              agent-id={process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || 'agent_1401k9n0b606ey7sayap4hasxtdt'}
            />
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-foreground/10">
          <p className="font-stack-sans text-foreground/60 text-sm lowercase text-center">
            our ai will ask for your email to send you a follow-up
          </p>
        </div>
      </div>
    </div>
  )
}
