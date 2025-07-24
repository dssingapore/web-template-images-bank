import {
  Phone,
  Mail,
  Scale,
  Users,
  Award,
  Shield,
  Star,
  Briefcase,
  GraduationCap,
  LinkedinIcon,
  ExternalLink,
} from "lucide-react"

export const metadata = {
  title: "Our Legal Team | Johnson & Associates Law Firm - Experienced Attorneys",
  description:
    "Meet our experienced legal team at Johnson & Associates. Our attorneys bring decades of combined expertise across corporate law, family law, personal injury, and more.",
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Johnson & Associates</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#team" className="text-blue-600 font-medium">
                Team
              </a>
              <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </nav>
            <button className="md:hidden p-2">
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-600"></div>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(29, 78, 216, 0.8)), url('/images/hero-bg.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Meet Our Legal Team</h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
                Our experienced attorneys and dedicated staff bring decades of combined legal expertise to serve your
                needs with professionalism, integrity, and results-driven advocacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Call (555) 123-4567
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Our Team Makes the Difference</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our attorneys combine extensive legal knowledge with personalized attention to deliver exceptional
                results for every client.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">75+ Years</h3>
                <p className="text-gray-600">Combined Legal Experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">12</h3>
                <p className="text-gray-600">Legal Professionals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">6</h3>
                <p className="text-gray-600">Practice Areas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">95%</h3>
                <p className="text-gray-600">Client Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Senior Attorneys */}
        <section id="team" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Partners & Senior Attorneys</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our leadership team brings decades of experience and proven results across multiple practice areas.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              {/* Michael Johnson */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src="/images/team-1.png" alt="Michael Johnson" className="w-full h-80 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Michael Johnson</h3>
                  <p className="text-blue-600 font-semibold mb-4">Founding Partner & Senior Attorney</p>
                  <p className="text-gray-700 mb-6">
                    Michael founded Johnson & Associates in 1998 with a vision to provide exceptional legal services. He
                    specializes in corporate law, complex litigation, and mergers & acquisitions.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>Harvard Law School, J.D. (1995)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>Yale University, B.A. Economics (1992)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>Super Lawyers (2010-2024)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>25+ Years Experience</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Corporate Law</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Litigation</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">M&A</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <LinkedinIcon className="h-4 w-4 text-blue-600" />
                      </button>
                      <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Mail className="h-4 w-4 text-blue-600" />
                      </button>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                      View Profile <ExternalLink className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sarah Williams */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src="/images/team-2.jpeg" alt="Sarah Williams" className="w-full h-80 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Williams</h3>
                  <p className="text-blue-600 font-semibold mb-4">Partner & Family Law Attorney</p>
                  <p className="text-gray-700 mb-6">
                    Sarah joined the firm in 2009 and became a partner in 2015. She is known for her compassionate
                    approach to family law matters and expertise in estate planning.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>Stanford Law School, J.D. (2008)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>UC Berkeley, B.A. Political Science (2005)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>Rising Stars (2012-2018)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>15+ Years Experience</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Family Law</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Estate Planning</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Mediation</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <LinkedinIcon className="h-4 w-4 text-blue-600" />
                      </button>
                      <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Mail className="h-4 w-4 text-blue-600" />
                      </button>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                      View Profile <ExternalLink className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* David Chen */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src="/images/team-3.jpeg" alt="David Chen" className="w-full h-80 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">David Chen</h3>
                  <p className="text-blue-600 font-semibold mb-4">Senior Associate Attorney</p>
                  <p className="text-gray-700 mb-6">
                    David brings over a decade of experience in personal injury and criminal defense. He is known for
                    his aggressive advocacy and dedication to protecting his clients' rights.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>UCLA Law School, J.D. (2013)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>UCLA, B.A. History (2010)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>Top 40 Under 40 (2020)</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span>10+ Years Experience</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Personal Injury</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Criminal Defense</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Trial Advocacy</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <LinkedinIcon className="h-4 w-4 text-blue-600" />
                      </button>
                      <button className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Mail className="h-4 w-4 text-blue-600" />
                      </button>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                      View Profile <ExternalLink className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Associate Attorneys */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Associate Attorneys</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our talented associate attorneys bring fresh perspectives and specialized expertise to serve our
                clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Emily Rodriguez */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="/placeholder.svg?height=300&width=400&text=Emily+Rodriguez"
                  alt="Emily Rodriguez"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Emily Rodriguez</h3>
                  <p className="text-blue-600 font-semibold mb-3">Associate Attorney</p>
                  <p className="text-gray-700 text-sm mb-4">
                    Specializes in real estate law and business transactions. Emily brings 8 years of experience helping
                    clients navigate complex property deals.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-gray-600">
                      <GraduationCap className="h-3 w-3 text-blue-600 mr-2" />
                      <span>Georgetown Law, J.D. (2016)</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Briefcase className="h-3 w-3 text-blue-600 mr-2" />
                      <span>8 Years Experience</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Real Estate</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Business Law</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <LinkedinIcon className="h-3 w-3 text-blue-600" />
                      </button>
                      <button className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Mail className="h-3 w-3 text-blue-600" />
                      </button>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center">
                      View Profile <ExternalLink className="h-2 w-2 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* James Thompson */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="/placeholder.svg?height=300&width=400&text=James+Thompson"
                  alt="James Thompson"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">James Thompson</h3>
                  <p className="text-blue-600 font-semibold mb-3">Associate Attorney</p>
                  <p className="text-gray-700 text-sm mb-4">
                    Focuses on employment law and labor relations. James has successfully represented both employers and
                    employees in complex workplace disputes.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-gray-600">
                      <GraduationCap className="h-3 w-3 text-blue-600 mr-2" />
                      <span>Northwestern Law, J.D. (2018)</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Briefcase className="h-3 w-3 text-blue-600 mr-2" />
                      <span>6 Years Experience</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Employment Law</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Labor Relations</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <LinkedinIcon className="h-3 w-3 text-blue-600" />
                      </button>
                      <button className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Mail className="h-3 w-3 text-blue-600" />
                      </button>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center">
                      View Profile <ExternalLink className="h-2 w-2 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Lisa Park */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="/placeholder.svg?height=300&width=400&text=Lisa+Park"
                  alt="Lisa Park"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lisa Park</h3>
                  <p className="text-blue-600 font-semibold mb-3">Associate Attorney</p>
                  <p className="text-gray-700 text-sm mb-4">
                    Specializes in intellectual property and technology law. Lisa helps businesses protect their
                    innovations and navigate digital legal challenges.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-gray-600">
                      <GraduationCap className="h-3 w-3 text-blue-600 mr-2" />
                      <span>MIT Law, J.D. (2019)</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Briefcase className="h-3 w-3 text-blue-600 mr-2" />
                      <span>5 Years Experience</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">IP Law</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Technology</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <LinkedinIcon className="h-3 w-3 text-blue-600" />
                      </button>
                      <button className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Mail className="h-3 w-3 text-blue-600" />
                      </button>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center">
                      View Profile <ExternalLink className="h-2 w-2 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Robert Martinez */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="/placeholder.svg?height=300&width=400&text=Robert+Martinez"
                  alt="Robert Martinez"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Robert Martinez</h3>
                  <p className="text-blue-600 font-semibold mb-3">Associate Attorney</p>
                  <p className="text-gray-700 text-sm mb-4">
                    Focuses on immigration law and civil rights. Robert is passionate about helping individuals and
                    families navigate complex immigration processes.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-gray-600">
                      <GraduationCap className="h-3 w-3 text-blue-600 mr-2" />
                      <span>University of Texas Law, J.D. (2017)</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Briefcase className="h-3 w-3 text-blue-600 mr-2" />
                      <span>7 Years Experience</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Immigration</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Civil Rights</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <LinkedinIcon className="h-3 w-3 text-blue-600" />
                      </button>
                      <button className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Mail className="h-3 w-3 text-blue-600" />
                      </button>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center">
                      View Profile <ExternalLink className="h-2 w-2 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Amanda Foster */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="/placeholder.svg?height=300&width=400&text=Amanda+Foster"
                  alt="Amanda Foster"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Amanda Foster</h3>
                  <p className="text-blue-600 font-semibold mb-3">Associate Attorney</p>
                  <p className="text-gray-700 text-sm mb-4">
                    Specializes in environmental law and regulatory compliance. Amanda helps businesses navigate
                    environmental regulations and sustainability initiatives.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-gray-600">
                      <GraduationCap className="h-3 w-3 text-blue-600 mr-2" />
                      <span>Columbia Law, J.D. (2020)</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Briefcase className="h-3 w-3 text-blue-600 mr-2" />
                      <span>4 Years Experience</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Environmental</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Regulatory</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <LinkedinIcon className="h-3 w-3 text-blue-600" />
                      </button>
                      <button className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Mail className="h-3 w-3 text-blue-600" />
                      </button>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center">
                      View Profile <ExternalLink className="h-2 w-2 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Kevin Walsh */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="/placeholder.svg?height=300&width=400&text=Kevin+Walsh"
                  alt="Kevin Walsh"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kevin Walsh</h3>
                  <p className="text-blue-600 font-semibold mb-3">Associate Attorney</p>
                  <p className="text-gray-700 text-sm mb-4">
                    Focuses on tax law and financial planning. Kevin helps individuals and businesses optimize their tax
                    strategies and ensure compliance with tax regulations.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-gray-600">
                      <GraduationCap className="h-3 w-3 text-blue-600 mr-2" />
                      <span>NYU Law, J.D. (2021)</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <Briefcase className="h-3 w-3 text-blue-600 mr-2" />
                      <span>3 Years Experience</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Tax Law</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Financial Planning</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <LinkedinIcon className="h-3 w-3 text-blue-600" />
                      </button>
                      <button className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                        <Mail className="h-3 w-3 text-blue-600" />
                      </button>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-xs flex items-center">
                      View Profile <ExternalLink className="h-2 w-2 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Staff */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Support Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Behind every successful case is a dedicated support team that ensures smooth operations and exceptional
                client service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Office Manager */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=250&width=400&text=Jennifer+Adams"
                  alt="Jennifer Adams"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Jennifer Adams</h3>
                  <p className="text-blue-600 font-semibold mb-3">Office Manager</p>
                  <p className="text-gray-700 text-sm mb-4">
                    Jennifer oversees daily operations and ensures our office runs smoothly. She has been with the firm
                    for 12 years and is the first point of contact for many clients.
                  </p>
                  <div className="flex items-center text-xs text-gray-600 mb-4">
                    <Briefcase className="h-3 w-3 text-blue-600 mr-2" />
                    <span>12 Years with Firm</span>
                  </div>
                </div>
              </div>

              {/* Legal Secretary */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=250&width=400&text=Maria+Gonzalez"
                  alt="Maria Gonzalez"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Maria Gonzalez</h3>
                  <p className="text-blue-600 font-semibold mb-3">Senior Legal Secretary</p>
                  <p className="text-gray-700 text-sm mb-4">
                    Maria provides essential administrative support to our attorneys and maintains client files with
                    meticulous attention to detail.
                  </p>
                  <div className="flex items-center text-xs text-gray-600 mb-4">
                    <Briefcase className="h-3 w-3 text-blue-600 mr-2" />
                    <span>8 Years with Firm</span>
                  </div>
                </div>
              </div>

              {/* Paralegal */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=250&width=400&text=Thomas+Brown"
                  alt="Thomas Brown"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Thomas Brown</h3>
                  <p className="text-blue-600 font-semibold mb-3">Senior Paralegal</p>
                  <p className="text-gray-700 text-sm mb-4">
                    Thomas assists our attorneys with legal research, document preparation, and case management across
                    multiple practice areas.
                  </p>
                  <div className="flex items-center text-xs text-gray-600 mb-4">
                    <Briefcase className="h-3 w-3 text-blue-600 mr-2" />
                    <span>10 Years with Firm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Work with Our Team?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our experienced legal professionals are ready to provide you with the expert representation and
              personalized attention you deserve. Contact us today to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                Call (555) 123-4567
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center">
                <Mail className="h-5 w-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Scale className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">Johnson & Associates</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Providing expert legal services with integrity and dedication for over 25 years.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/services" className="hover:text-white transition-colors">
                    Corporate Law
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition-colors">
                    Family Law
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition-colors">
                    Personal Injury
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition-colors">
                    Estate Planning
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div>(555) 123-4567</div>
                <div>info@johnsonlaw.com</div>
                <div>
                  123 Legal Street, Suite 100
                  <br />
                  Downtown, ST 12345
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Johnson & Associates Law Firm. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
