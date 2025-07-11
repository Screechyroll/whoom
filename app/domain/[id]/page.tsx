// app/domain/[id]/page.tsx
'use client'

import React, {useState, useRef} from 'react'
import {useParams} from 'next/navigation'
import {LpNavbar5} from '@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-5'
import {Input} from '@/components/ui/input'
import {ScrollArea, ScrollBar} from '@/components/ui/scroll-area'
import {Search, ArrowLeft, ArrowRight} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {ExpertCard, type Expert as BaseExpert} from '@/components/expert-card'

interface Expert extends Omit<BaseExpert, 'expertise'> {
  expertise: string[]
}

// données globales
export const ALL_EXPERTS: Expert[] = [
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

// filtres
export const FEATURED_EXPERTS = ALL_EXPERTS.filter(e => e.featured)
export const OTHER_EXPERTS    = ALL_EXPERTS.filter(e => !e.featured)

export default function DomainExpertsPage() {
  const {id: domainIdRaw} = useParams()
  const domainId = String(domainIdRaw)
  const [search, setSearch] = useState('')
  const viewportRef = useRef<HTMLDivElement>(null)
  const CARD_WIDTH = 288 + 24 // 288px (w-72) + 24px (gap-6)

  const scrollPrev = () => {
    viewportRef.current?.scrollBy({left: -CARD_WIDTH, behavior: 'smooth'})
  }
  const scrollNext = () => {
    viewportRef.current?.scrollBy({left: CARD_WIDTH, behavior: 'smooth'})
  }

  // Filtrer les experts du domaine sélectionné
  const domainExperts = ALL_EXPERTS.filter(e => e.expertise.includes(domainId))

  const filtered = domainExperts.filter(
    e =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.title.toLowerCase().includes(search.toLowerCase())
  )
  const featured = filtered.filter(e => e.featured)
  const others   = filtered.filter(e => !e.featured)

  return (
    <div className="min-h-screen bg-background">
      <LpNavbar5 />

      <main className="container mx-auto px-6 py-10 space-y-10">
        {/* entête avec titre + bouton de retour */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            Explore {domainId?.toString().replace(/-/g, ' ')}
          </h1>
          <Button
            asChild
            variant="secondary"
            className="text-sm"
          >
            <a href="/explorer">Return to explorer</a>
          </Button>
        </div>

        {/* Barre de recherche */}
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search for experts"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Featured Experts */}
        {featured.length > 0 && (
          <section className="relative space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-semibold">Rockstars</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" onClick={scrollPrev}>
                  <ArrowLeft />
                  <span className="sr-only">Précédent</span>
                </Button>
                <Button variant="outline" size="icon" onClick={scrollNext}>
                  <ArrowRight />
                  <span className="sr-only">Suivant</span>
                </Button>
              </div>
            </div>

            {/* ScrollArea horizontal */}
            <ScrollArea viewportRef={viewportRef} className="rounded-lg">
              <div className="flex w-max gap-6 p-4">
                {featured.map(e => (
                  <div key={e.id} className="shrink-0 w-72">
                    <ExpertCard expert={e} />
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>
        )}

        {/* All Experts */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">All Experts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {others.map(e => (
              <ExpertCard key={e.id} expert={e} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}