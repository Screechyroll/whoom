"use client"

import { useState } from "react"
import {
  Search,
  ChevronRight,
  Sparkles,
  Code,
  Heart,
  Palette,
  Briefcase,
  GraduationCap,
  Music,
  Gamepad2,
  Zap,
  ShieldCheck,
  Link,
  Dna,
  Baby,
  Brain,
  Video,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LpNavbar5 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-5"
import { useRouter, useParams } from "next/navigation"

const domains = [
  {
    id: "technology",
    name: "Technology",
    icon: Code,
    color: "bg-gradient-to-br from-blue-500 to-purple-600",
    description: "Software development, hardware, and tech innovation",
    popular: false,
  },
  {
    id: "artificial-intelligence",
    name: "Artificial Intelligence",
    icon: Zap,
    color: "bg-gradient-to-br from-purple-500 to-pink-600",
    description: "Machine learning, neural networks, and AI systems",
    popular: true,
  },
  {
    id: "business",
    name: "Business",
    icon: Briefcase,
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
    description: "Corporate strategy, entrepreneurship, and management",
    popular: true,
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: ShieldCheck,
    color: "bg-gradient-to-br from-red-500 to-orange-600",
    description: "Information security, threat analysis, and protection",
  },
  {
    id: "blockchain",
    name: "Blockchain",
    icon: Link,
    color: "bg-gradient-to-br from-yellow-500 to-orange-500",
    description: "Cryptocurrency, DeFi, and distributed ledger technology",
    popular: true,
  },
  {
    id: "bioinformatics",
    name: "Bioinformatics",
    icon: Dna,
    color: "bg-gradient-to-br from-teal-500 to-cyan-600",
    description: "Computational biology and biological data analysis",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    color: "bg-gradient-to-br from-red-400 to-pink-500",
    description: "Medical services, patient care, and health technology",
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    color: "bg-gradient-to-br from-indigo-500 to-blue-600",
    description: "Learning platforms, curriculum, and educational tools",
  },
  {
    id: "child-development",
    name: "Child Development",
    icon: Baby,
    color: "bg-gradient-to-br from-pink-400 to-rose-500",
    description: "Early childhood education and developmental psychology",
  },
  {
    id: "neuroscience",
    name: "Neuroscience",
    icon: Brain,
    color: "bg-gradient-to-br from-violet-500 to-purple-600",
    description: "Brain research, cognitive science, and neural networks",
  },
  {
    id: "music",
    name: "Music",
    icon: Music,
    color: "bg-gradient-to-br from-purple-500 to-violet-600",
    description: "Audio production, composition, and music technology",
  },
  {
    id: "art-design",
    name: "Art & Design",
    icon: Palette,
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    description: "Visual arts, graphic design, and creative expression",
  },
  {
    id: "filmmaking",
    name: "Filmmaking",
    icon: Video,
    color: "bg-gradient-to-br from-slate-600 to-gray-700",
    description: "Video production, cinematography, and storytelling",
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: Gamepad2,
    color: "bg-gradient-to-br from-emerald-500 to-green-600",
    description: "Game development, interactive entertainment, and esports",
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: TrendingUp,
    color: "bg-gradient-to-br from-blue-500 to-sky-600",
    description: "Digital marketing, brand strategy, and customer engagement",
  },
]

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null)
  const router = useRouter()
  const params = useParams()
  const domainId = params.id

  const filteredDomains = domains.filter(
    (domain) =>
      domain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      domain.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const popularDomains = filteredDomains.filter((domain) => domain.popular)
  const otherDomains = filteredDomains.filter((domain) => !domain.popular)

  function handleDomainSelect(domainId: string) {
    setSelectedDomain(domainId)
    router.push(`/domain/${domainId}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <LpNavbar5 />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Choose Your Domain</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Select the industry or field that best represents your project. This helps us tailor the perfect solution
              for your needs.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search domains..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
              />
            </div>
          </div>

          {/* Popular Domains */}
          {popularDomains.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">Hot Topics</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularDomains.map((domain) => {
                  const IconComponent = domain.icon
                  return (
                    <button
                      key={domain.id}
                      onClick={() => handleDomainSelect(domain.id)}
                      className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl text-left ${
                        selectedDomain === domain.id
                          ? "border-blue-500 bg-blue-50 shadow-lg"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl ${domain.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors ${
                            selectedDomain === domain.id ? "text-blue-500" : ""
                          }`}
                        />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{domain.name}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{domain.description}</p>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* All Domains */}
          {otherDomains.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">All Domains</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {otherDomains.map((domain) => {
                  const IconComponent = domain.icon
                  return (
                    <button
                      key={domain.id}
                      onClick={() => handleDomainSelect(domain.id)}
                      className={`group relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg text-left ${
                        selectedDomain === domain.id
                          ? "border-blue-500 bg-blue-50 shadow-md"
                          : "border-gray-200 bg-white hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center mb-3">
                        <div
                          className={`w-10 h-10 rounded-lg ${domain.color} flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors ml-auto ${
                            selectedDomain === domain.id ? "text-blue-500" : ""
                          }`}
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{domain.name}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{domain.description}</p>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredDomains.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No domains found</h3>
              <p className="text-gray-600">Try adjusting your search terms or browse all available domains.</p>
            </div>
          )}

          {/* Continue Button */}
          {selectedDomain && (
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20">
              <Button size="lg" className="px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow">
                Continue with {domains.find((d) => d.id === selectedDomain)?.name}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
