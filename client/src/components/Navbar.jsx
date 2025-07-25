"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useUser } from "../context/UserContext"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { user, logout } = useUser();

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Create Skill", path: "/create-skill" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group" onClick={closeMenu}>
              <h1 className="text-2xl font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors duration-200">
                SkillSwap
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-indigo-600 bg-indigo-50 shadow-sm"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Auth/User Section */}
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
                {user ? (
                  <>
                    <span className="text-gray-700 font-semibold">Hi, {user.name}</span>
                    <button
                      onClick={logout}
                      className="bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive("/login")
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                      }`}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-1"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out translate-y-2.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 translate-y-2.5" : "translate-y-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive(link.path)
                  ? "text-indigo-600 bg-indigo-50 border-l-4 border-indigo-600"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50 hover:border-l-4 hover:border-indigo-300"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Auth Section */}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <div className="space-y-2">
              {user ? (
                <>
                  <span className="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 text-gray-700 font-semibold">Hi, {user.name}</span>
                  <button
                    onClick={logout}
                    className="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 bg-red-100 hover:bg-red-200 text-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive("/login")
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    }`}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="block mx-4 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-base font-medium text-center transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden" onClick={closeMenu} />}
    </nav>
  )
}

export default Navbar
