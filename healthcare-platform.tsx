"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  ChevronDown,
  User,
  UserPlus,
  CreditCard,
  Ambulance,
  Calendar,
  Bed,
  Users,
  Building,
  Building2,
  Stethoscope,
  Briefcase,
  MapPin,
  UserCheck,
  Hospital,
  Activity,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function HealthcarePlatform() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeDropdown])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-blue-600 font-semibold text-lg">AAROGYA AADHAR</span>
              <span className="text-xs text-gray-500 ml-1">TM</span>
            </div>
            <div className="border-l border-gray-300 pl-3 ml-3">
              <span className="text-blue-800 font-bold text-xl italic">e-haan</span>
              <span className="text-xs text-gray-500 ml-1">TM</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-blue-600 rounded-full p-1">
                <Search className="w-4 h-4 text-white" />
              </div>
              <Input
                placeholder="Search Healthcare Services"
                className="pl-12 pr-20 py-2 rounded-full border-gray-300"
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 rounded-full px-6">
                Search
              </Button>
            </div>
          </div>

          {/* Login/Register */}flex items-center space-x-4
          <div className="">
            <Button variant="ghost" className="flex items-center space-x-1">
              <span>Login</span>
              <User className="w-4 h-4" />
            </Button>
            <Button variant="ghost" className="flex items-center space-x-1">
              <span>Register</span>
              <UserPlus className="w-4 h-4" />
            </Button>
            <div className="flex items-center space-x-1">
              <span className="text-sm">A</span>
              <Button variant="ghost" size="sm" className="p-1">
                <span className="text-blue-600">?</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-20 bg-white shadow-sm min-h-screen">
          <nav className="py-4">
            {[
              { icon: CreditCard, label: "Health Card" },
              { icon: Ambulance, label: "Book Ambulance" },
              { icon: Calendar, label: "Free Appointment" },
              { icon: Bed, label: "Bed Booking" },
              { icon: Users, label: "Aarogya Mitra" },
              { icon: Building, label: "HSP Portal" },
              { icon: Building2, label: "Corporate Health" },
              { icon: Stethoscope, label: "Tele Radiology" },
              { icon: Briefcase, label: "Job Portal" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center py-3 px-2  cursor-pointer">
                <item.icon className="w-6 h-6 text-gray-600 mb-1" />
                <span className="text-xs text-gray-600 text-center leading-tight">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Navigation Menu */}
          <nav className="bg-white border-b px-6 py-3">
            <div className="flex space-x-6 relative">
              {/* Expert Doctors Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === "doctors" ? null : "doctors")}
                >
                  <span>Expert Doctors</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                {activeDropdown === "doctors" && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border z-50 p-4">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">General Physician</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Emergency Medicine</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Internal Medicine</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Occupational Medicine</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Chest Physician</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Pediatricians</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Otorhinolaryngologist</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">
                          Obstetrician / Gynecologists
                        </div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">IVF Consultant</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">
                          Oral & Maxillofacial Surgeon
                        </div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Otolaryngologists/ENT</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Vascular Surgeon</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">
                          Ophthalmologists/Eye Specialist
                        </div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Cardiologists</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Nephrologists</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">General Surgeon</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Proctologist</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Orthopedics</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">
                          Joint Replacement Surgeon
                        </div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Physiotherapist</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Oncologists/Cancer</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Radiation Oncologist</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Nuclear Medicine</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Colorectal Surgeon</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Radiologists</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Urologists</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Dermatologists</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Plastic Surgeon</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Pathologist</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Neurologists</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Psychiatrists</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Dentist</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Dietitian</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Sexologist</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Gastroenterologists</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Geriatric Medicine</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Allergists</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Endocrinologists</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Cardiac Surgeon</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Rheumatologists</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Pulmonologists</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Anesthesiologists</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Ayurvedic</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Homeopathy</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Chiropractor</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>




               {/* dignostic center */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === "doctors" ? null : "doctors")}
                >
                  <span>Dignostic Center </span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                {activeDropdown === "doctors" && (
                  <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === "doctors" ? null : "doctors")}
                >
                  <span>Dignostic Center </span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                )}
              </div>



              {/* Hospitals Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === "hospitals" ? null : "hospitals")}
                >
                  <span>Hospitals</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                {activeDropdown === "hospitals" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50 p-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Government Hospitals</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Private Hospitals</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">NABH Hospitals</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">MJPJAY Hospitals</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">ESIC Hospitals</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">CGHS Hospitals</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Trauma Care Hospitals</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Cardiac Care Hospitals</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Mother & Child Hospitals</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Speciality Hospitals</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">
                          Multispeciality Hospitals
                        </div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">
                          Super-Speciality Hospitals
                        </div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Cancer Hospitals</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Eye Hospitals</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">IVF Centers</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Dialysis Centers</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Dental Clinics</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Small Clinics</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Dharmaday Hospitals</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">PMJAY Hospitals</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Diagnostic Center Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === "diagnostic" ? null : "diagnostic")}
                >
                  <span>Diagnostic Center</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </div>

              {/* Surgery Packages Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === "surgery" ? null : "surgery")}
                >
                  <span>Surgery Packages</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                {activeDropdown === "surgery" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50 p-4">
                    <div className="space-y-2 text-sm">
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Surgery Packages</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Treatment Packages</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Home Healthcare Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === "home" ? null : "home")}
                >
                  <span>Home Healthcare</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                {activeDropdown === "home" && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border z-50 p-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">ICU at Home</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">General Nursing</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">
                          Neurological Care & Rehabilitation
                        </div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">On Bed Cancer</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">
                          Transplant & Post-Op Care
                        </div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Pregnancy Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Mother & Child Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Palliative Care</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Orthopaedic Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Stroke Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Cardiac Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Dialysis Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Old Age Health Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">COPD Care</div>
                        <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Bed Sores Care</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Pathology Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === "pathology" ? null : "pathology")}
                >
                  <span>Pathology</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                {activeDropdown === "pathology" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50 p-4">
                    <div className="space-y-2 text-sm">
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Lab Tests</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Wellness Packages</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">NABL Accredited Lab</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Blood Bank</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Health Insurance Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === "insurance" ? null : "insurance")}
                >
                  <span>Health Insurance</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                {activeDropdown === "insurance" && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border z-50 p-4">
                    <div className="space-y-2 text-sm">
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Govt Health Insurance</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Private Health Insurance</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">TPA Health Insurance</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">
                        TPA Administration Services
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Corporate Health Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === "corporate" ? null : "corporate")}
                >
                  <span>Corporate Health</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                {activeDropdown === "corporate" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50 p-4">
                    <div className="space-y-2 text-sm">
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Medical Personnel Manning</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Companies Insurance</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">CSR Services</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Health Talks & Seminars</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Occupation Health Center</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Corporate Health Check-ups</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">24/7 Ambulance Services</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">
                        Equipped Mobile Medical Unit
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Pharmacy Dropdown */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setActiveDropdown(activeDropdown === "pharmacy" ? null : "pharmacy")}
                >
                  <span>Pharmacy</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
                {activeDropdown === "pharmacy" && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-50 p-4">
                    <div className="space-y-2 text-sm">
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Pharmacy1</div>
                      <div className="text-blue-800 hover:text-blue-600 cursor-pointer">Pharmacy2</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 px-6 py-8">
            <div className="flex gap-6">
              {/* Main Hero Card */}
              <Card className="flex-1 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 flex items-center">
                  <div className="flex-1">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">
                      Diagnostic
                      <br />
                      Center
                    </h1>
                    <p className="text-blue-700 text-lg mb-6 leading-relaxed">
                      UNLOCKING THE SECRETS OF
                      <br />
                      DISEASE THROUGH THE LENS
                      <br />
                      OF DIAGNOSIS
                    </p>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md">VIEW MORE</Button>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="w-80 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-blue-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <Activity className="w-16 h-16 text-blue-600" />
                        </div>
                        <p className="text-blue-700 text-sm">Diagnostic Illustration</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right Side Cards */}
              <div className="w-80 space-y-4">
                <Card className="bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-blue-900 mb-2">Power of Healthcare Transformation</h3>
                    <p className="text-blue-700 text-sm mb-3">POWER TO CHOOSE WHERE TO RECEIVE TREATMENT</p>
                    <div className="w-full h-24 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <Hospital className="w-12 h-12 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-blue-900 mb-2">Home Healthcare</h3>
                    <p className="text-blue-700 text-sm mb-3">PERSONALIZED CARE WHERE YOU LIVE</p>
                    <div className="w-full h-24 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                      <Users className="w-12 h-12 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex justify-between items-center text-white">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Building className="w-6 h-6 mr-2" />
                    <span className="text-2xl font-bold">5500+</span>
                  </div>
                  <p className="text-sm">HSP & Hospital's</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 mr-2" />
                    <span className="text-2xl font-bold">50000+</span>
                  </div>
                  <p className="text-sm">Patient's</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <MapPin className="w-6 h-6 mr-2" />
                    <span className="text-2xl font-bold">20+</span>
                  </div>
                  <p className="text-sm">Covered Cities</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <UserCheck className="w-6 h-6 mr-2" />
                    <span className="text-2xl font-bold">45+</span>
                  </div>
                  <p className="text-sm">Specialists</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 mr-2" />
                    <span className="text-2xl font-bold">50+</span>
                  </div>
                  <p className="text-sm">Team Member's</p>
                </div>
              </div>
              <div className="text-right mt-4">
                <p className="text-white text-sm">Aarogya Aadhar Approved & Funded</p>
              </div>
            </div>
          </section>

          {/* Treatment by Specialities */}
          <section className="px-6 py-8 bg-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">Treatment by Specialities</h2>
              <p className="text-gray-600">Select the Speciality</p>
            </div>

            {/* Specialities Grid would continue here */}
            <div className="grid grid-cols-4 gap-6">
              {/* Placeholder for speciality cards */}
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Stethoscope className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800">Speciality {item}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
