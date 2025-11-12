'use client'

import { useEffect, useState } from 'react'

interface TextRevealProps {
  text: string
  className?: string
}

export default function TextReveal({ text, className = '' }: TextRevealProps) {
  const [words, setWords] = useState<string[]>([])
  const [visibleWords, setVisibleWords] = useState<number[]>([])

  // Core words to emphasize
  const coreWords = [
    'soultosoul', 'tired', 'burn', 'matter', 'chaos', 'clarity',
    'business', 'metrics', 'outcomes', 'technical', 'debt', 'fail',
    '90/10', 'ai', 'humans', 'mechanical', 'boilerplate', 'logic', 'security',
    'complete', 'systems', 'scale', 'thrive', 'fulfilled', 'magic',
    'intention', 'extraction', 'shipping', 'decade', 'reality',
    'wellbeing', 'neurodiversity', 'focus', 'strengths', 'different'
  ]

  useEffect(() => {
    // Split text by newlines first to preserve formatting
    const paragraphs = text.split('\n\n')
    const wordArray: string[] = []

    paragraphs.forEach((paragraph, pIndex) => {
      const paragraphWords = paragraph.split(/\s+/)
      wordArray.push(...paragraphWords)
      if (pIndex < paragraphs.length - 1) {
        wordArray.push('\n\n') // Preserve paragraph breaks
      }
    })

    setWords(wordArray)

    // Reveal words faster - 30ms between words
    wordArray.forEach((_, index) => {
      setTimeout(() => {
        setVisibleWords(prev => [...prev, index])
      }, index * 30)
    })
  }, [text])

  const isCore = (word: string) => {
    const cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, '')
    return coreWords.includes(cleanWord)
  }

  return (
    <div className={className}>
      {words.map((word, index) => {
        if (word === '\n\n') {
          return <div key={index} className="h-8" />
        }

        return (
          <span
            key={index}
            className={`inline-block mr-2 transition-all duration-500 ease-out ${
              visibleWords.includes(index)
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-12 blur-md'
            } ${isCore(word) ? 'font-bold text-foreground' : ''}`}
            style={{
              transitionDelay: `${index * 20}ms`
            }}
          >
            {word}
          </span>
        )
      })}
    </div>
  )
}
