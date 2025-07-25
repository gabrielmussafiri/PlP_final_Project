"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SkillForm from "../components/SkillForm"
import { createSkill } from "../services/api"

const CreateSkill = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (skillData) => {
    setIsLoading(true)
    try {
      await createSkill(skillData)
      alert("Skill created successfully!")
      navigate("/my-skills")
    } catch (error) {
      console.error("Error creating skill:", error)
      alert("Error creating skill. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Share Your Skill</h1>
          <p className="text-lg text-gray-600">Create a new micro-skill and connect with learners in your community</p>
        </div>

        <SkillForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default CreateSkill
