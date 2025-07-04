// components/expert-detail-card.tsx
'use client'

import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export interface ExpertDetailCardProps {
  avatarUrl?: string
  name: string
  title: string
  bio: string
  onSeeSources: () => void
  onStory: () => void
}

export function ExpertDetailCard({
  avatarUrl,
  name,
  title,
  bio,
  onSeeSources,
  onStory,
}: ExpertDetailCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-col items-center space-y-2 pt-6">
        <Avatar className="h-20 w-20">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} alt={name} />
          ) : (
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          )}
        </Avatar>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
      </CardHeader>

      <CardContent className="flex-1 px-6 py-4">
        <p className="text-sm leading-relaxed text-foreground">{bio}</p>
      </CardContent>

      <CardFooter className="px-6 pb-6 flex flex-col space-y-3">
        <Button variant="outline" onClick={onSeeSources}>
          See Sources
        </Button>
        <Button onClick={onStory}>Ask Personal Story</Button>
      </CardFooter>
    </Card>
  )
}