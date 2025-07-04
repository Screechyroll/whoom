'use client'

import { useState, FormEvent, useRef, useEffect } from 'react'
import { AppSidebar } from '@/components/app-sidebar'
import { NavActions } from '@/components/nav-actions'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Info, Loader2, Mic, Paperclip, Smile } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

type Message = { role: 'user' | 'assistant'; content: string; loading?: boolean }
type TwinInfo = {
  id: string
  name: string
  avatarUrl?: string
  role?: string
  bio: string
  lastInterventions: string[]
}

function TwinInfoPanel({ twin }: { twin: TwinInfo }) {
  return (
    <div className="h-full overflow-y-auto bg-white rounded-lg shadow p-4">
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="h-10 w-10">
          {twin.avatarUrl ? (
            <AvatarImage src={twin.avatarUrl} alt={twin.name} />
          ) : (
            <AvatarFallback>{twin.name.charAt(0)}</AvatarFallback>
          )}
        </Avatar>
        <div>
          <div className="font-medium">{twin.name}</div>
          {twin.role && (
            <div className="text-sm text-muted-foreground">{twin.role}</div>
          )}
        </div>
      </div>
      <h3 className="text-sm font-semibold mb-1">Bio</h3>
      <p className="text-sm text-muted-foreground mb-4">{twin.bio}</p>
      <h3 className="text-sm font-semibold mb-1">Dernières interventions</h3>
      <ul className="space-y-1 text-sm">
        {twin.lastInterventions.map((it, i) => (
          <li key={i} className="flex items-center gap-2">
            <Info className="h-4 w-4 text-muted-foreground" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([])
  const [prompt, setPrompt] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [messages])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!prompt.trim()) return
    setMessages((prev) => [...prev, { role: 'user', content: prompt }])
    setPrompt('')
    setMessages((prev) => [...prev, { role: 'assistant', content: '', loading: true }])
    // TODO: fetch API et remplacer loader
  }

  const currentTwin: TwinInfo = {
    id: 'sam-altman',
    name: 'Sam Altman',
    avatarUrl: 'https://i.pravatar.cc/100?u=sam-altman',
    role: 'CEO OpenAI',
    bio: "Entrepreneur et investisseur, co-fondateur d'OpenAI.",
    lastInterventions: [
      'A répondu sur la feuille de route GPT-5',
      "Publié son thread sur X sur l'IA éthique",
      "Mis à jour le rapport trimestriel d'activité",
    ],
  }

  return (
    <SidebarProvider>
      <div className="h-screen w-full flex">
        <AppSidebar />
        <SidebarInset className="flex flex-col flex-1 min-w-0 h-full overflow-hidden">
          <header className="flex h-14 items-center px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mx-2 h-6" />
            <Breadcrumb className="bg-white rounded px-4 py-2">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Chat avec {currentTwin.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="ml-auto">
              <NavActions />
            </div>
          </header>

          <main className="flex flex-1 gap-4 px-4 py-4 min-h-0">
            <div className="flex flex-col flex-[4] bg-white rounded-lg shadow overflow-hidden min-h-0">
              <div className="flex items-center justify-between px-4 py-2 border-b">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={currentTwin.avatarUrl} alt={currentTwin.name} />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div className="leading-tight">
                    <div className="font-medium">{currentTwin.name}</div>
                    <div className="text-xs text-green-600">● en ligne</div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Info className="h-5 w-5 text-muted-foreground" />
                </Button>
              </div>

              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto px-4 py-3 space-y-4"
              >
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[70%] break-words px-3 py-2 rounded-lg ${
                      m.role === 'user' ? 'self-end bg-blue-100' : 'self-start bg-gray-100'
                    }`}
                  >
                    {m.loading ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                        <span className="text-sm italic text-muted-foreground">
                          génération…
                        </span>
                      </div>
                    ) : (
                      m.content
                    )}
                  </div>
                ))}
              </div>

              <form
                onSubmit={handleSubmit}
                className="sticky bottom-0 bg-white border-t px-4 py-2 flex items-end gap-2"
              >
                <Button variant="ghost" size="icon">
                  <Smile className="h-5 w-5 text-muted-foreground" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5 text-muted-foreground" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mic className="h-5 w-5 text-muted-foreground" />
                </Button>
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Tapez votre message…"
                  className="flex-1 max-h-28 resize-none overflow-auto"
                  rows={1}
                />
                <Button type="submit">Envoyer</Button>
              </form>
            </div>

            <div className="flex flex-col flex-[1] min-h-0">
              <TwinInfoPanel twin={currentTwin} />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}