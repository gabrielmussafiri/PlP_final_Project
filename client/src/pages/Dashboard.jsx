"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import SkillCard from "../components/SkillCard"
import TradeRequestCard from "../components/TradeRequestCard"
import { getDashboardData, acceptTradeRequest, declineTradeRequest } from "../services/api"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [data, setData] = useState({
    mySkills: [],
    tradeRequests: [],
    recentActivity: [],
    stats: {
      totalSkills: 0,
      activeRequests: 0,
      completedSwaps: 0,
      profileViews: 0,
    },
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      const dashboardData = await getDashboardData()
      setData(dashboardData)
    } catch (error) {
      console.error("Error loading dashboard data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAcceptRequest = async (requestId) => {
    try {
      await acceptTradeRequest(requestId)
      setData((prev) => ({
        ...prev,
        tradeRequests: prev.tradeRequests.map((req) => (req.id === requestId ? { ...req, status: "accepted" } : req)),
      }))
      alert("Request accepted successfully!")
    } catch (error) {
      console.error("Error accepting request:", error)
      alert("Error accepting request. Please try again.")
    }
  }

  const handleDeclineRequest = async (requestId) => {
    try {
      await declineTradeRequest(requestId)
      setData((prev) => ({
        ...prev,
        tradeRequests: prev.tradeRequests.map((req) => (req.id === requestId ? { ...req, status: "declined" } : req)),
      }))
      alert("Request declined.")
    } catch (error) {
      console.error("Error declining request:", error)
      alert("Error declining request. Please try again.")
    }
  }

  const handleEditSkill = (skill) => {
    alert(`Edit skill: ${skill.title}`)
    // TODO: Navigate to edit form
  }

  const handleDeleteSkill = (skill) => {
    if (window.confirm(`Are you sure you want to delete "${skill.title}"?`)) {
      alert(`Delete skill: ${skill.title}`)
      // TODO: Implement delete functionality
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-400 rounded-full animate-spin animation-delay-150"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-lg text-gray-600">Welcome back! Here's what's happening with your skills.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">My Skills</p>
                <p className="text-2xl font-bold text-gray-900">{data.stats.totalSkills}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Requests</p>
                <p className="text-2xl font-bold text-gray-900">{data.stats.activeRequests}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed Swaps</p>
                <p className="text-2xl font-bold text-gray-900">{data.stats.completedSwaps}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Profile Views</p>
                <p className="text-2xl font-bold text-gray-900">{data.stats.profileViews}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md mb-8 border border-gray-100">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: "overview", name: "Overview", icon: "📊" },
                { id: "my-skills", name: "My Skills", icon: "🎯" },
                { id: "requests", name: "Trade Requests", icon: "🔄" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                  {tab.id === "requests" && data.tradeRequests.length > 0 && (
                    <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                      {data.tradeRequests.filter((req) => req.status === "pending").length}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Quick Actions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link
                      to="/create-skill"
                      className="group p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 text-center"
                    >
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-200">
                        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Create New Skill</h4>
                      <p className="text-sm text-gray-600">Share your knowledge with others</p>
                    </Link>

                    <Link
                      to="/"
                      className="group p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 text-center"
                    >
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-200">
                        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Browse Skills</h4>
                      <p className="text-sm text-gray-600">Discover new skills to learn</p>
                    </Link>

                    <button className="group p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-200 text-center">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-indigo-200">
                        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Messages</h4>
                      <p className="text-sm text-gray-600">Chat with other users</p>
                    </button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {data.recentActivity.length === 0 ? (
                      <p className="text-gray-500 text-center py-8">No recent activity</p>
                    ) : (
                      data.recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                            <span className="text-indigo-600 font-semibold">{activity.type}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* My Skills Tab */}
            {activeTab === "my-skills" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">My Skills ({data.mySkills.length})</h3>
                  <Link
                    to="/create-skill"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Create New Skill
                  </Link>
                </div>

                {data.mySkills.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">No skills yet</h4>
                    <p className="text-gray-500 mb-6">Create your first skill to start sharing your knowledge.</p>
                    <Link
                      to="/create-skill"
                      className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                      Create Your First Skill
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.mySkills.map((skill) => (
                      <SkillCard
                        key={skill.id}
                        title={skill.title}
                        description={skill.description}
                        tags={skill.tags}
                        author={skill.author}
                        rating={skill.rating}
                        duration={skill.duration}
                        participants={skill.participants}
                        image={skill.image}
                        showActions={true}
                        onEdit={() => handleEditSkill(skill)}
                        onDelete={() => handleDeleteSkill(skill)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Trade Requests Tab */}
            {activeTab === "requests" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Trade Requests ({data.tradeRequests.length})</h3>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                      {data.tradeRequests.filter((req) => req.status === "pending").length} Pending
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      {data.tradeRequests.filter((req) => req.status === "accepted").length} Accepted
                    </span>
                  </div>
                </div>

                {data.tradeRequests.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">No trade requests</h4>
                    <p className="text-gray-500">When others request your skills, they'll appear here.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {data.tradeRequests.map((request) => (
                      <TradeRequestCard
                        key={request.id}
                        offeredSkill={request.offeredSkill}
                        requestedSkill={request.skillTitle}
                        status={request.status}
                        requesterName={request.requesterName}
                        requesterEmail={request.requesterEmail}
                        message={request.message}
                        createdAt={request.createdAt}
                        onAccept={() => handleAcceptRequest(request.id)}
                        onDecline={() => handleDeclineRequest(request.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
