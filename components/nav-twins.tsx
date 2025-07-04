'use client'

import Link from 'next/link'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export type DigitalTwin = {
  id: string
  name: string
  avatarUrl?: string
  url: string
}

export function NavDigitalTwins({
  twins,
}: {
  twins: DigitalTwin[]
}) {
  if (twins.length === 0) {
    return null
  }

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Digital Twins</SidebarGroupLabel>
      <SidebarMenu>
        {twins.map((t) => (
          <SidebarMenuItem key={t.id}>
            <SidebarMenuButton asChild>
              <Link
                href={t.url}
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted"
                title={t.name}
              >
                <Avatar className="h-6 w-6">
                  {t.avatarUrl ? (
                    <AvatarImage src={t.avatarUrl} alt={t.name} />
                  ) : (
                    <AvatarFallback>
                      {t.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  )}
                </Avatar>
                <span className="truncate">{t.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}