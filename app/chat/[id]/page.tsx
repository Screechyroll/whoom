// app/chat/[id]/page.tsx
'use client'

import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { LpNavbar5 } from '@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-5'
import { ChatBlock, ChatMessage } from '@/components/chat'
import { ExpertDetailCard } from '@/components/expert-details-card'
import { ExpertCard, type Expert } from '@/components/expert-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const ALL_EXPERTS: Expert[] = [
  // --- IA Rockstars ---
  { id: 'alice-martin', name: 'Dr. Alice Martin', title: 'AI Research Lead', expertise: ['artificial-intelligence'], avatarUrl: 'https://i.pravatar.cc/150?u=alice-martin', featured: true, href: '/chat/alice-martin' },
  { id: 'leo-chen', name: 'Prof. Leo Chen', title: 'Deep Learning Pioneer', expertise: ['artificial-intelligence'], avatarUrl: 'https://i.pravatar.cc/150?u=leo-chen', featured: true, href: '/chat/leo-chen' },
  { id: 'sophia-rossi', name: 'Sophia Rossi', title: 'AI Product Architect', expertise: ['artificial-intelligence'], avatarUrl: 'https://i.pravatar.cc/150?u=sophia-rossi', featured: true, href: '/chat/sophia-rossi' },
  { id: 'mohamed-farouk', name: 'Dr. Mohamed Farouk', title: 'Machine Learning Visionary', expertise: ['artificial-intelligence'], avatarUrl: 'https://i.pravatar.cc/150?u=mohamed-farouk', featured: true, href: '/chat/mohamed-farouk' },
  { id: 'hannah-schmidt', name: 'Hannah Schmidt', title: 'AI Robotics Leader', expertise: ['artificial-intelligence'], avatarUrl: 'https://i.pravatar.cc/150?u=hannah-schmidt', featured: true, href: '/chat/hannah-schmidt' },
  { id: 'david-park', name: 'David Park', title: 'Cognitive AI Innovator', expertise: ['artificial-intelligence'], avatarUrl: 'https://i.pravatar.cc/150?u=david-park', featured: true, href: '/chat/david-park' },
  // --- IA autres ---
  { id: 'anya-sharma', name: 'Dr. Anya Sharma', title: 'Expert in Artificial Intelligence and Machine Learning', expertise: ['artificial-intelligence', 'technology'], avatarUrl: 'https://i.pravatar.cc/150?u=anya-sharma', featured: false, href: '/chat/anya-sharma' },
  { id: 'tara-nguyen', name: 'Dr. Tara Nguyen', title: 'Data Scientist and AI Ethicist', expertise: ['artificial-intelligence', 'bioinformatics'], avatarUrl: 'https://i.pravatar.cc/150?u=tara-nguyen', featured: false, href: '/chat/tara-nguyen' },
  { id: 'julien-leclerc', name: 'Julien Leclerc', title: 'AI Software Engineer', expertise: ['artificial-intelligence'], avatarUrl: 'https://i.pravatar.cc/150?u=julien-leclerc', featured: false, href: '/chat/julien-leclerc' },
  { id: 'emily-wong', name: 'Emily Wong', title: 'Conversational AI Specialist', expertise: ['artificial-intelligence'], avatarUrl: 'https://i.pravatar.cc/150?u=emily-wong', featured: false, href: '/chat/emily-wong' },
  { id: 'peter-ivanov', name: 'Peter Ivanov', title: 'AI Ethics Researcher', expertise: ['artificial-intelligence'], avatarUrl: 'https://i.pravatar.cc/150?u=peter-ivanov', featured: false, href: '/chat/peter-ivanov' },
  { id: 'lucia-garcia', name: 'Lucia Garcia', title: 'AI for Healthcare Expert', expertise: ['artificial-intelligence', 'healthcare'], avatarUrl: 'https://i.pravatar.cc/150?u=lucia-garcia', featured: false, href: '/chat/lucia-garcia' },

  // --- Blockchain Rockstars ---
  { id: 'ben-carter', name: 'Professor Ben Carter', title: 'Specialist in Quantum Computing and Cryptography', expertise: ['blockchain', 'technology'], avatarUrl: 'https://i.pravatar.cc/150?u=ben-carter', featured: true, href: '/chat/ben-carter' },
  { id: 'oliver-smith', name: 'Oliver Smith', title: 'Blockchain Protocol Designer', expertise: ['blockchain'], avatarUrl: 'https://i.pravatar.cc/150?u=oliver-smith', featured: true, href: '/chat/oliver-smith' },
  { id: 'mia-li', name: 'Mia Li', title: 'DeFi Innovator', expertise: ['blockchain'], avatarUrl: 'https://i.pravatar.cc/150?u=mia-li', featured: true, href: '/chat/mia-li' },
  { id: 'nina-petrov', name: 'Nina Petrov', title: 'Smart Contract Auditor', expertise: ['blockchain'], avatarUrl: 'https://i.pravatar.cc/150?u=nina-petrov', featured: true, href: '/chat/nina-petrov' },
  { id: 'lucas-meyer', name: 'Lucas Meyer', title: 'Blockchain Security Visionary', expertise: ['blockchain'], avatarUrl: 'https://i.pravatar.cc/150?u=lucas-meyer', featured: true, href: '/chat/lucas-meyer' },
  { id: 'fatima-ali', name: 'Fatima Ali', title: 'Crypto Infrastructure Architect', expertise: ['blockchain'], avatarUrl: 'https://i.pravatar.cc/150?u=fatima-ali', featured: true, href: '/chat/fatima-ali' },
  // --- Blockchain autres ---
  { id: 'alex-kim', name: 'Mr. Alex Kim', title: 'Full-Stack Engineer and Open Source Advocate', expertise: ['blockchain', 'technology'], avatarUrl: 'https://i.pravatar.cc/150?u=alex-kim', featured: false, href: '/chat/alex-kim' },
  { id: 'sofia-ruiz', name: 'Dr. Sofia Ruiz', title: 'Robotics Researcher and Innovator', expertise: ['blockchain', 'technology'], avatarUrl: 'https://i.pravatar.cc/150?u=sofia-ruiz', featured: false, href: '/chat/sofia-ruiz' },
  { id: 'ethan-foster', name: 'Mr. Ethan Foster', title: 'Blockchain Investment Analyst', expertise: ['blockchain', 'business'], avatarUrl: 'https://i.pravatar.cc/150?u=ethan-foster', featured: false, href: '/chat/ethan-foster' },
  { id: 'marie-dubois', name: 'Marie Dubois', title: 'NFT Ecosystem Expert', expertise: ['blockchain'], avatarUrl: 'https://i.pravatar.cc/150?u=marie-dubois', featured: false, href: '/chat/marie-dubois' },
  { id: 'daniel-cho', name: 'Daniel Cho', title: 'Blockchain Security Engineer', expertise: ['blockchain'], avatarUrl: 'https://i.pravatar.cc/150?u=daniel-cho', featured: false, href: '/chat/daniel-cho' },
  { id: 'carla-mendez', name: 'Carla Mendez', title: 'Crypto Regulation Specialist', expertise: ['blockchain'], avatarUrl: 'https://i.pravatar.cc/150?u=carla-mendez', featured: false, href: '/chat/carla-mendez' },

  // ... autres experts si besoin ...
]

export default function ChatPage() {
  const { id } = useParams()
  const router = useRouter()
  const expert = ALL_EXPERTS.find((e) => e.id === id)
  const [messages, setMessages] = useState<ChatMessage[]>([])

  function handleSend(content: string) {
    setMessages((prev) => [
      ...prev,
      { role: 'user', content },
      {
        role: 'assistant',
        content: "Thanks for your question! I'll respond shortly.",
        loading: false,
      },
    ])
  }

  if (!expert) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <LpNavbar5 />
        <main className="container mx-auto flex-1 flex flex-col py-10 items-center justify-center">
          <p className="text-lg text-muted-foreground">Expert not found.</p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <LpNavbar5 />
      <main className="container mx-auto flex-1 flex flex-row gap-8 py-10">
        {/* Chat column (2/3) */}
        <div className="w-2/3 flex flex-col min-h-0">
          <h1 className="text-2xl font-bold mb-4">Chat with {expert.name}</h1>
          <ChatBlock messages={messages} onSend={handleSend} />
        </div>
        {/* Expert detail column (1/3) */}
        <div className="w-1/3 flex-shrink-0 flex flex-col gap-4">
          <div className="flex flex-row justify-end">
            <Button
              variant="secondary"
              className="mb-2"
              aria-label="Back to Experts"
              onClick={() => router.push('/explorer')}
            >
              ← Back to Experts
            </Button>
          </div>
          <ExpertDetailCard
            avatarUrl={expert.avatarUrl}
            name={expert.name}
            title={expert.title}
            bio="Dr. Harper is a renowned psychologist with over 15 years of experience. She specializes in cognitive behavioral therapy and has helped many overcome various challenges."
            onSeeSources={() => {}}
            onStory={() => {}}
          />
        </div>
      </main>
    </div>
  )
}