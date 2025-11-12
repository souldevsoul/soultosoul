'use client'

import { useEffect, useRef, useState } from 'react'
import { Mic, MicOff, PhoneCall, PhoneOff } from 'lucide-react'

interface ConversationMessage {
  role: 'user' | 'assistant'
  message: string
  timestamp: Date
}

export default function VoiceAgent() {
  const [isConnected, setIsConnected] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [conversation, setConversation] = useState<ConversationMessage[]>([])
  const [status, setStatus] = useState<'idle' | 'connecting' | 'connected' | 'disconnected'>('idle')
  const conversationRef = useRef<any>(null)

  useEffect(() => {
    // Load ElevenLabs Conversational AI SDK
    const script = document.createElement('script')
    script.src = 'https://elevenlabs.io/convai-widget/index.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
      if (conversationRef.current) {
        conversationRef.current.endSession()
      }
    }
  }, [])

  const startConversation = async () => {
    setStatus('connecting')

    try {
      // @ts-ignore - ElevenLabs SDK loaded dynamically
      const conversation = await window.Conversation.startSession({
        agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID,
        onConnect: () => {
          setStatus('connected')
          setIsConnected(true)
        },
        onDisconnect: () => {
          setStatus('disconnected')
          setIsConnected(false)
        },
        onMessage: (message: any) => {
          if (message.source === 'ai') {
            setConversation(prev => [...prev, {
              role: 'assistant',
              message: message.message,
              timestamp: new Date()
            }])
          } else if (message.source === 'user') {
            setConversation(prev => [...prev, {
              role: 'user',
              message: message.message,
              timestamp: new Date()
            }])
          }
        },
        onError: (error: any) => {
          console.error('Voice agent error:', error)
          setStatus('disconnected')
          setIsConnected(false)
        },
        // Send conversation transcript to Slack when it ends
        onEnd: async (transcript: any) => {
          await sendToSlack(conversation)
        }
      })

      conversationRef.current = conversation
    } catch (error) {
      console.error('Failed to start conversation:', error)
      setStatus('idle')
    }
  }

  const endConversation = () => {
    if (conversationRef.current) {
      conversationRef.current.endSession()
      conversationRef.current = null
    }
    setIsConnected(false)
    setStatus('idle')
  }

  const toggleMute = () => {
    if (conversationRef.current) {
      conversationRef.current.setMuted(!isMuted)
      setIsMuted(!isMuted)
    }
  }

  const sendToSlack = async (messages: ConversationMessage[]) => {
    if (messages.length === 0) return

    const transcript = messages
      .map(m => `*${m.role === 'user' ? 'User' : 'AI'}:* ${m.message}`)
      .join('\n\n')

    try {
      await fetch('/api/voice-transcript', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ transcript })
      })
    } catch (error) {
      console.error('Failed to send transcript to Slack:', error)
    }
  }

  return (
    <div className="relative">
      <div className="border border-foreground/10 rounded-2xl p-8 bg-background/50 backdrop-blur">
        <div className="text-center mb-6">
          <h3 className="font-eb-garamond font-bold text-foreground text-3xl lowercase mb-4">
            talk to our ai assistant
          </h3>
          <p className="font-stack-sans text-foreground/70 text-lg lowercase">
            press the button below and tell us about your project
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          {!isConnected ? (
            <button
              onClick={startConversation}
              disabled={status === 'connecting'}
              className="group relative flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-stack-sans font-semibold lowercase hover:bg-foreground/90 transition-all disabled:opacity-50"
            >
              <PhoneCall className="w-5 h-5" />
              {status === 'connecting' ? 'connecting...' : 'start conversation'}
            </button>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={toggleMute}
                className="flex items-center gap-2 bg-foreground/10 text-foreground px-6 py-4 rounded-full font-stack-sans font-semibold lowercase hover:bg-foreground/20 transition-all"
              >
                {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                {isMuted ? 'unmute' : 'mute'}
              </button>
              <button
                onClick={endConversation}
                className="flex items-center gap-2 bg-red-500 text-white px-6 py-4 rounded-full font-stack-sans font-semibold lowercase hover:bg-red-600 transition-all"
              >
                <PhoneOff className="w-5 h-5" />
                end call
              </button>
            </div>
          )}

          {status === 'connected' && (
            <div className="flex items-center gap-2 text-green-500 font-stack-sans lowercase mt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              live
            </div>
          )}
        </div>

        {conversation.length > 0 && (
          <div className="mt-8 pt-8 border-t border-foreground/10">
            <h4 className="font-stack-sans font-semibold text-foreground lowercase mb-4">
              conversation transcript
            </h4>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {conversation.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-foreground/5 ml-8'
                      : 'bg-foreground/10 mr-8'
                  }`}
                >
                  <div className="font-stack-sans text-sm text-foreground/60 lowercase mb-1">
                    {msg.role}
                  </div>
                  <div className="font-stack-sans text-foreground lowercase">
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <p className="font-stack-sans text-foreground/50 text-sm lowercase">
          prefer typing?{' '}
          <a href="#contact-form" className="underline hover:text-foreground transition-colors">
            use the form below
          </a>
        </p>
      </div>
    </div>
  )
}
