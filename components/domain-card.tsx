'use client'

import Link from 'next/link'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronRight } from 'lucide-react'

export type Domain = {
  id: string
  title: string
  description: string
  href: string
  isHot?: boolean
  icon?: React.ReactNode
}

export default function DomainCard({
  title,
  description,
  href,
  isHot = false,
  icon,
}: Domain) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <Link href={href} className="block">
        <CardHeader className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <CardTitle className="text-base">{title}</CardTitle>
            {isHot && <Badge variant="destructive">Hot</Badge>}
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="pt-0 justify-end">
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </CardFooter>
      </Link>
    </Card>
  )
}