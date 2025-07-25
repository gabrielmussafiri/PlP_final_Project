"use client"

import { useState } from "react"
import { Search, Menu, X, Star, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Skill {
  id: number
  title: string
  description: string
  tags: string[]
  author: string
  rating: number
  duration: string
  participants: number
  image: string
}

const mockSkills: Skill[] = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript basics. Perfect for beginners looking to start their coding journey.",
    tags: ["HTML", "CSS", "JavaScript", "Beginner"],
    author: "Sarah Chen",
    rating: 4.8,
    duration: "6 weeks",
    participants: 24,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Digital Photography Masterclass",
    description: "Master composition, lighting, and post-processing techniques to take stunning photographs.",
    tags: ["Photography", "Lightroom", "Composition", "Creative"],
    author: "Mike Rodriguez",
    rating: 4.9,
    duration: "4 weeks",
    participants: 18,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Spanish Conversation Practice",
    description: "Improve your Spanish speaking skills through interactive conversations and cultural immersion.",
    tags: ["Spanish", "Language", "Conversation", "Culture"],
    author: "Elena Martinez",
    rating: 4.7,
    duration: "8 weeks",
    participants: 32,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Yoga & Mindfulness",
    description: "Combine physical practice with mental wellness through guided yoga sessions and meditation.",
    tags: ["Yoga", "Mindfulness", "Wellness", "Beginner"],
    author: "Priya Patel",
    rating: 4.9,
    duration: "12 weeks",
    participants: 45,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Guitar for Beginners",
    description: "Start your musical journey with basic chords, strumming patterns, and popular songs.",
    tags: ["Guitar", "Music", "Beginner", "Acoustic"],
    author: "James Wilson",
    rating: 4.6,
    duration: "10 weeks",
    participants: 28,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Data Science with Python",
    description: "Explore data analysis, visualization, and machine learning using Python and popular libraries.",
    tags: ["Python", "Data Science", "Machine Learning", "Advanced"],
    author: "Dr. Lisa Wang",
    rating: 4.8,
    duration: "16 weeks",
    participants: 19,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function SkillSharingDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSkills = mockSkills.filter(
    (skill) =>
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Share Skills, <span className="text-indigo-600">Learn Together</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with passionate learners and teachers in your community. Exchange knowledge, build relationships,
            and grow together through skill sharing.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search skills, topics, or instructors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full text-lg border-2 border-gray-200 focus:border-indigo-500 rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full">
              Start Learning
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full bg-transparent"
            >
              Teach a Skill
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Skills</h2>
            <p className="text-lg text-gray-600">Discover amazing skills shared by our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map((skill) => (
              <Card key={skill.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={skill.image || "/placeholder.svg"}
                    alt={skill.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-700">{skill.rating}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{skill.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{skill.participants}</span>
                      </div>
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">{skill.title}</CardTitle>
                  <p className="text-sm text-gray-600">by {skill.author}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">{skill.description}</CardDescription>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition-colors"
                    onClick={() => alert(`Requesting skill swap for: ${skill.title}`)}
                  >
                    Request Swap
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No skills found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to start your skill-sharing journey?</h3>
          <p className="text-gray-300 mb-6">Join thousands of learners and teachers in our community.</p>
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full">
            Get Started Today
          </Button>
        </div>
      </footer>
    </div>
  )
}
