'use client'

import React, { FormEvent, useRef, useEffect } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Loader2, Paperclip } from 'lucide-react'

export type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
  loading?: boolean
}

export interface ChatBlockProps {
  messages: ChatMessage[]
  onSend: (content: string) => void
}

export function ChatBlock({ messages, onSend }: ChatBlockProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)

  // scroll to bottom on new message
  useEffect(() => {
    viewportRef.current?.scrollTo({ top: viewportRef.current.scrollHeight })
  }, [messages])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const val = inputRef.current?.value.trim()
    if (val) {
      onSend(val)
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-0 flex-1">
        <ScrollArea className="h-full">
          <div
            ref={viewportRef}
            className="flex flex-col space-y-4 p-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[70%] break-words px-4 py-2 rounded-lg ${
                  m.role === 'user'
                    ? 'self-end bg-blue-100'
                    : 'self-start bg-gray-100'
                }`}
              >
                {m.loading ? (
                  <span className="flex items-center space-x-2 text-muted-foreground italic">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>génération…</span>
                  </span>
                ) : (
                  m.content
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>

      <CardFooter className="p-4 border-t flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Paperclip className="h-5 w-5 text-muted-foreground" />
          <span className="sr-only">Attach</span>
        </Button>
        <form onSubmit={handleSubmit} className="flex-1">
          <Input
            ref={inputRef}
            placeholder="Ask a question"
            className="w-full"
          />
        </form>
        <Button onClick={handleSubmit}>Send</Button>
      </CardFooter>
    </Card>
  )
}