"use client"

import { useState, useEffect } from "react"
import SkillCard from "../components/SkillCard"
import TradeRequestCard from "../components/TradeRequestCard"
import { getUserSkills, getTradeRequests, acceptTradeRequest, declineTradeRequest } from "../services/api"

const MySkills = () => {
  const [skills, setSkills] = useState([])
  const [requests, setRequests] = useState([])
  const [activeTab, setActiveTab] = useState("skills")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [skillsData, requestsData] = await Promise.all([getUserSkills(), getTradeRequests()])
      setSkills(skillsData)
      setRequests(requestsData)
    } catch (error) {
      console.error("Error loading data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAcceptRequest = async (requestId) => {
    try {
      await acceptTradeRequest(requestId)
      setRequests(requests.map((req) => (req.id === requestId ? { ...req, status: "accepted" } : req)))
      alert("Request accepted successfully!")
    } catch (error) {
      console.error("Error accepting request:", error)
      alert("Error accepting request. Please try again.")
    }
  }

  const handleDeclineRequest = async (requestId) => {
    try {
      await declineTradeRequest(requestId)
      setRequests(requests.map((req) => (req.id === requestId ? { ...req, status: "declined" } : req)))
      alert("Request declined.")
    } catch (error) {
      console.error("Error declining request:", error)
      alert("Error declining request. Please try again.")
    }
  }

  const handleEditSkill = (skill) => {
    // TODO: Navigate to edit form
    alert(`Edit skill: ${skill.title}`)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Skills Dashboard</h1>
          <p className="text-lg text-gray-600">Manage your skills and trade requests</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === "skills" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              My Skills ({skills.length})
            </button>
            <button
              onClick={() => setActiveTab("requests")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === "requests" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Trade Requests ({requests.length})
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "skills" && (
          <div>
            {skills.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">You haven't created any skills yet.</p>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Create Your First Skill
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} onRequestSwap={handleEditSkill} />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "requests" && (
          <div>
            {requests.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No trade requests yet.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {requests.map((request) => (
                  <TradeRequestCard
                    key={request.id}
                    request={request}
                    onAccept={handleAcceptRequest}
                    onDecline={handleDeclineRequest}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default MySkills
