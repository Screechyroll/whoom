'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export type Expert = {
  id: string
  name: string
  title: string
  expertise: string
  avatarUrl?: string
  featured?: boolean
  href: string
}

export function ExpertCard({ expert }: { expert: Expert }) {
  return (
    <Card className="bg-transparent border-none shadow-none hover:shadow-none transition-none text-center">
      <CardContent className="flex flex-col items-center gap-2 p-6">
        <Link href={expert.href}>
          <Avatar className="h-20 w-20">
            {expert.avatarUrl ? (
              <AvatarImage src={expert.avatarUrl} alt={expert.name} />
            ) : (
              <AvatarFallback>{expert.name[0]}</AvatarFallback>
            )}
          </Avatar>
        </Link>
        <Link href={expert.href}>
          <h3 className="text-lg font-semibold">{expert.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground">{expert.title}</p>
        <p className="text-xs text-muted-foreground mt-1">{expert.expertise}</p>
      </CardContent>
    </Card>
  )
}