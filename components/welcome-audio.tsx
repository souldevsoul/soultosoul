'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function WelcomeAudio() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    // Play audio after a short delay when component mounts
    const timer = setTimeout(() => {
      if (audioRef.current && !hasPlayed) {
        audioRef.current.play().catch(error => {
          console.log('Audio autoplay prevented:', error)
          // Autoplay might be blocked, that's okay
        })
        setHasPlayed(true)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [hasPlayed])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/welcome.mp3" />

      {/* Mute/Unmute button - bottom left */}
      <button
        onClick={toggleMute}
        className="fixed bottom-8 left-8 z-50 p-4 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/20 hover:bg-foreground/20 transition-all group"
        aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform" />
        ) : (
          <Volume2 className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform" />
        )}
      </button>
    </>
  )
}
