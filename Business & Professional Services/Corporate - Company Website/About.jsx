import {
  Phone,
  Mail,
  Scale,
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Shield,
  Target,
  Heart,
  Star,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react"

export const metadata = {
  title: "About Us | Johnson & Associates Law Firm - 25+ Years of Legal Excellence",
  description:
    "Learn about Johnson & Associates Law Firm's history, mission, values, and experienced legal team. Serving clients with integrity and dedication since 1998.",
}

export default function AboutPage() {
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
              <a href="#about" className="text-blue-600 font-medium">
                About
              </a>
              <a href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="/#team" className="text-gray-700 hover:text-blue-600 transition-colors">
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Johnson & Associates</h1>
                <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                  For over 25 years, we've been dedicated to providing exceptional legal services with integrity,
                  expertise, and unwavering commitment to our clients' success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    Meet Our Team
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                    Our History
                  </button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img
                  src="/images/hero-image.png"
                  alt="Johnson & Associates Law Firm Team"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Firm Overview */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Johnson & Associates was founded in 1998 with a simple yet powerful vision: to provide exceptional
                  legal representation while building lasting relationships with our clients. What started as a small
                  practice has grown into one of the region's most respected law firms.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our founder, Michael Johnson, established the firm on the principles of integrity, excellence, and
                  client-focused service. Today, we continue to uphold these values while adapting to the evolving legal
                  landscape and our clients' changing needs.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  We believe that every client deserves personalized attention, clear communication, and aggressive
                  advocacy. This philosophy has earned us the trust of individuals, families, and businesses throughout
                  our community.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1998</div>
                    <div className="text-gray-700">Founded</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                    <div className="text-gray-700">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                    <div className="text-gray-700">Clients Served</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-gray-700">Success Rate</div>
                  </div>
                </div>
              </div>
              <div>
                <img src="/images/about.jpeg" alt="Law Firm History" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Mission, Vision & Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do and shape how we serve our clients and community.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  To provide exceptional legal services that protect our clients' interests, achieve their goals, and
                  exceed their expectations through personalized attention, strategic thinking, and unwavering advocacy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Client-focused representation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Results-driven approach
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Ethical practice standards
                  </li>
                </ul>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 mb-6">
                  To be the premier law firm in our region, recognized for our legal excellence, innovative solutions,
                  and positive impact on the lives of our clients and the broader community.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Regional legal leadership
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Innovation in legal services
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Community involvement
                  </li>
                </ul>
              </div>

              {/* Values */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-700 mb-6">
                  Our core values of integrity, excellence, and compassion form the foundation of our practice and guide
                  our interactions with clients, colleagues, and the community.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Unwavering integrity
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Pursuit of excellence
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Compassionate service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the experienced attorneys who lead our firm and drive our commitment to excellence.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Michael Johnson */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/images/team-1.png" alt="Michael Johnson" className="w-full h-80 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Michael Johnson</h3>
                  <p className="text-blue-600 font-semibold mb-4">Founding Partner & Senior Attorney</p>
                  <p className="text-gray-700 mb-6">
                    Michael founded Johnson & Associates in 1998 with a vision to provide exceptional legal services
                    while building lasting client relationships. He specializes in corporate law and complex litigation.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 text-blue-600 mr-2" />
                      Harvard Law School, J.D. (1995)
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      Super Lawyers (2010-2024)
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="h-4 w-4 text-blue-600 mr-2" />
                      25+ Years Experience
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Corporate Law</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Litigation</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">M&A</span>
                  </div>
                </div>
              </div>

              {/* Sarah Williams */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/images/team-2.jpeg" alt="Sarah Williams" className="w-full h-80 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Williams</h3>
                  <p className="text-blue-600 font-semibold mb-4">Partner & Family Law Attorney</p>
                  <p className="text-gray-700 mb-6">
                    Sarah joined the firm in 2009 and became a partner in 2015. She is known for her compassionate
                    approach to family law matters and her expertise in estate planning.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4 text-blue-600 mr-2" />
                      Stanford Law School, J.D. (2008)
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      Rising Stars (2012-2018)
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="h-4 w-4 text-blue-600 mr-2" />
                      15+ Years Experience
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Family Law</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Estate Planning</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Mediation</span>
                  </div>
                </div>
              </div>

              {/* David Chen */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                      <GraduationCap className="h-4 w-4 text-blue-600 mr-2" />
                      UCLA Law School, J.D. (2013)
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="h-4 w-4 text-blue-600 mr-2" />
                      Top 40 Under 40 (2020)
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="h-4 w-4 text-blue-600 mr-2" />
                      10+ Years Experience
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Personal Injury</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Criminal Defense</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Trial Advocacy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence has been recognized by peers, clients, and legal organizations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Super Lawyers</h3>
                <p className="text-gray-600 text-sm">Recognized for 10+ consecutive years</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AV Rated</h3>
                <p className="text-gray-600 text-sm">Martindale-Hubbell highest rating</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Law Firm</h3>
                <p className="text-gray-600 text-sm">Regional recognition 2020-2024</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Choice</h3>
                <p className="text-gray-600 text-sm">Avvo Client's Choice Award</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Involvement */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Community Involvement</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We believe in giving back to the community that has supported us throughout our journey. Our attorneys
                  and staff actively participate in various charitable organizations and pro bono initiatives.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Pro Bono Legal Services</h4>
                      <p className="text-gray-600">
                        Providing free legal assistance to low-income families and nonprofit organizations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Legal Education Programs</h4>
                      <p className="text-gray-600">
                        Conducting workshops and seminars on legal rights and responsibilities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Charitable Partnerships</h4>
                      <p className="text-gray-600">
                        Supporting local charities, food banks, and community development initiatives
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Mentorship Programs</h4>
                      <p className="text-gray-600">
                        Mentoring law students and young attorneys in their professional development
                      </p>
                    </div>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                  Learn About Our Initiatives <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
              <div>
                <img src="/images/section-bg.jpeg" alt="Community Involvement" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Office & Location */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Office</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conveniently located in the heart of downtown, our modern office provides a professional and welcoming
                environment for our clients.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600&text=Office+Building"
                  alt="Johnson & Associates Office Building"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Prime Location</h3>
                      <p className="text-gray-700 mb-2">
                        123 Legal Street, Suite 100
                        <br />
                        Downtown, ST 12345
                      </p>
                      <p className="text-gray-600">
                        Easy access to courts, government buildings, and public transportation
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Hours</h3>
                      <div className="text-gray-700 space-y-1">
                        <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                        <div>Saturday: 9:00 AM - 2:00 PM</div>
                        <div>Sunday: Closed</div>
                        <div className="text-blue-600 font-medium mt-2">Emergency consultations available 24/7</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Facilities</h3>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Private consultation rooms</li>
                        <li>• State-of-the-art conference facilities</li>
                        <li>• Secure document storage</li>
                        <li>• Accessible parking and entrance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the difference that 25+ years of legal expertise and client-focused service can make. Contact
              us today to discuss your legal needs.
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
                  <a href="#about" className="hover:text-white transition-colors">
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
