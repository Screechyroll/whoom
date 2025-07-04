// app/domain/[id]/page.tsx
'use client'

import React, {useState, useRef} from 'react'
import {useParams} from 'next/navigation'
import {LpNavbar5} from '@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-5'
import {Input} from '@/components/ui/input'
import {ScrollArea, ScrollBar} from '@/components/ui/scroll-area'
import {Search, ArrowLeft, ArrowRight} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {ExpertCard, type Expert} from '@/components/expert-card'

// données globales
export const ALL_EXPERTS: Expert[] = [
  { id: 'anya-sharma', name: 'Dr. Anya Sharma', title: 'Expert in Artificial Intelligence and Machine Learning', expertise: 'AI & ML', avatarUrl: 'https://i.pravatar.cc/150?u=anya-sharma', featured: true, href: '/chat/anya-sharma' },
  { id: 'ben-carter', name: 'Professor Ben Carter', title: 'Specialist in Quantum Computing and Cryptography', expertise: 'Quantum & Crypto', avatarUrl: 'https://i.pravatar.cc/150?u=ben-carter', featured: true, href: '/chat/ben-carter' },
  { id: 'chloe-davis', name: 'Ms. Chloe Davis', title: 'Advisor in Digital Marketing and Social Media Strategy', expertise: 'Marketing', avatarUrl: 'https://i.pravatar.cc/150?u=chloe-davis', featured: true, href: '/chat/chloe-davis' },
  { id: 'ethan-foster', name: 'Mr. Ethan Foster', title: 'Consultant in Financial Analysis and Investment Strategies', expertise: 'Finance', avatarUrl: 'https://i.pravatar.cc/150?u=ethan-foster', featured: true, href: '/chat/ethan-foster' },
  { id: 'olivia-green', name: 'Dr. Olivia Green', title: 'Researcher in Biotechnology and Genetic Engineering', expertise: 'Biotech', avatarUrl: 'https://i.pravatar.cc/150?u=olivia-green', featured: true, href: '/chat/olivia-green' },
  { id: 'tara-nguyen', name: 'Dr. Tara Nguyen', title: 'Data Scientist and AI Ethicist', expertise: 'Data & Ethics', avatarUrl: 'https://i.pravatar.cc/150?u=tara-nguyen', featured: true, href: '/chat/tara-nguyen' },
  { id: 'alex-kim', name: 'Mr. Alex Kim', title: 'Full-Stack Engineer and Open Source Advocate', expertise: 'Web & OSS', avatarUrl: 'https://i.pravatar.cc/150?u=alex-kim', featured: true, href: '/chat/alex-kim' },
  { id: 'sofia-ruiz', name: 'Dr. Sofia Ruiz', title: 'Robotics Researcher and Innovator', expertise: 'Robotics', avatarUrl: 'https://i.pravatar.cc/150?u=sofia-ruiz', featured: true, href: '/chat/sofia-ruiz' },
  { id: 'noah-harris', name: 'Professor Noah Harris', title: 'Educator in Sustainable Energy and Environmental Science', expertise: 'Environment', avatarUrl: 'https://i.pravatar.cc/150?u=noah-harris', featured: false, href: '/chat/noah-harris' },
]

// filtres
export const FEATURED_EXPERTS = ALL_EXPERTS.filter(e => e.featured)
export const OTHER_EXPERTS    = ALL_EXPERTS.filter(e => !e.featured)

export default function DomainExpertsPage() {
  const {id: domainId} = useParams()
  const [search, setSearch] = useState('')
  const viewportRef = useRef<HTMLDivElement>(null)
  const CARD_WIDTH = 288 + 24 // 288px (w-72) + 24px (gap-6)

  const scrollPrev = () => {
    viewportRef.current?.scrollBy({left: -CARD_WIDTH, behavior: 'smooth'})
  }
  const scrollNext = () => {
    viewportRef.current?.scrollBy({left: CARD_WIDTH, behavior: 'smooth'})
  }

  const filtered = ALL_EXPERTS.filter(
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