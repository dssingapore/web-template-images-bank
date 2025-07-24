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
  Briefcase,
  Home,
  Heart,
  Gavel,
} from "lucide-react"

export const metadata = {
  title: "Legal Services | Johnson & Associates Law Firm - Expert Legal Representation",
  description:
    "Comprehensive legal services including corporate law, family law, personal injury, estate planning, criminal defense, and real estate law. Expert attorneys with 25+ years experience.",
}

export default function ServicesPage() {
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
              <a href="#services" className="text-blue-600 font-medium">
                Services
              </a>
              <a href="/#team" className="text-gray-700 hover:text-blue-600 transition-colors">
                Team
              </a>
              <a href="/#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Testimonials
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Legal Services</h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
                Comprehensive legal solutions across multiple practice areas. Our experienced attorneys provide expert
                representation tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Call (555) 123-4567
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Legal Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With over 25 years of combined experience, we deliver results-driven legal solutions with personalized
                attention.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-600">500+ successful cases with a 95% client satisfaction rate</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Experienced attorneys specializing in their respective practice areas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock availability for urgent legal matters</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section id="services" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Corporate Law */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Corporate Law</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Navigate complex business legal matters with confidence. Our corporate law team provides
                    comprehensive legal services for businesses of all sizes, from startups to Fortune 500 companies.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Business Formation</h4>
                        <p className="text-sm text-gray-600">LLC, Corporation, Partnership setup</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Contract Law</h4>
                        <p className="text-sm text-gray-600">Drafting, review, and negotiation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Mergers & Acquisitions</h4>
                        <p className="text-sm text-gray-600">Due diligence and transaction support</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Compliance</h4>
                        <p className="text-sm text-gray-600">Regulatory compliance and governance</p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
                <div>
                  <img src="/images/service-1.jpeg" alt="Corporate Law Services" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* Family Law */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Heart className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Family Law</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Compassionate legal representation during life's most challenging moments. We understand that family
                    matters require both legal expertise and emotional sensitivity.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Divorce & Separation</h4>
                        <p className="text-sm text-gray-600">Contested and uncontested divorce</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Child Custody</h4>
                        <p className="text-sm text-gray-600">Custody arrangements and support</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Adoption</h4>
                        <p className="text-sm text-gray-600">Domestic and international adoption</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Prenuptial Agreements</h4>
                        <p className="text-sm text-gray-600">Asset protection planning</p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
                <div className="lg:order-1">
                  <img src="/images/service-2.jpeg" alt="Family Law Services" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* Personal Injury */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Personal Injury</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    When you've been injured due to someone else's negligence, you deserve aggressive representation to
                    secure the compensation you need for recovery and peace of mind.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Auto Accidents</h4>
                        <p className="text-sm text-gray-600">Car, truck, and motorcycle accidents</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Medical Malpractice</h4>
                        <p className="text-sm text-gray-600">Hospital and physician negligence</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Workplace Injuries</h4>
                        <p className="text-sm text-gray-600">Workers' compensation claims</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Slip & Fall</h4>
                        <p className="text-sm text-gray-600">Premises liability cases</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800 font-semibold">No Fee Unless We Win</p>
                    <p className="text-green-700 text-sm">We work on a contingency basis for personal injury cases</p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
                <div>
                  <img src="/images/service-3.png" alt="Personal Injury Services" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* Estate Planning */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Estate Planning</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Protect your legacy and provide for your loved ones with comprehensive estate planning services. We
                    help you navigate complex tax laws and ensure your wishes are carried out.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Wills & Trusts</h4>
                        <p className="text-sm text-gray-600">Comprehensive estate documents</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Probate Administration</h4>
                        <p className="text-sm text-gray-600">Estate settlement and distribution</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Tax Planning</h4>
                        <p className="text-sm text-gray-600">Minimize estate and gift taxes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Power of Attorney</h4>
                        <p className="text-sm text-gray-600">Healthcare and financial directives</p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
                <div className="lg:order-1">
                  <img src="/images/section-bg.jpeg" alt="Estate Planning Services" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </div>

            {/* Criminal Defense */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Gavel className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Criminal Defense</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Protect your rights and freedom with experienced criminal defense representation. We provide
                    aggressive advocacy and strategic defense for all types of criminal charges.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">DUI/DWI Defense</h4>
                        <p className="text-sm text-gray-600">License protection and defense</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">White Collar Crimes</h4>
                        <p className="text-sm text-gray-600">Fraud, embezzlement, tax evasion</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Drug Charges</h4>
                        <p className="text-sm text-gray-600">Possession and trafficking defense</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Appeals</h4>
                        <p className="text-sm text-gray-600">Post-conviction relief</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800 font-semibold">24/7 Emergency Defense</p>
                    <p className="text-red-700 text-sm">Available for arrest situations and urgent matters</p>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
                <div>
                  <img
                    src="/placeholder.svg?height=400&width=600&text=Criminal+Defense"
                    alt="Criminal Defense Services"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Real Estate Law */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Home className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Real Estate Law</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Navigate complex real estate transactions with confidence. Whether buying, selling, or developing
                    property, we ensure your interests are protected throughout the process.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Property Transactions</h4>
                        <p className="text-sm text-gray-600">Residential and commercial sales</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Title Issues</h4>
                        <p className="text-sm text-gray-600">Title searches and insurance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Zoning & Land Use</h4>
                        <p className="text-sm text-gray-600">Development and compliance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Landlord-Tenant</h4>
                        <p className="text-sm text-gray-600">Lease agreements and disputes</p>
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
                <div className="lg:order-1">
                  <img
                    src="/placeholder.svg?height=400&width=600&text=Real+Estate+Law"
                    alt="Real Estate Law Services"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Legal Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven process to ensure the best possible outcome for your legal matter.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Consultation</h3>
                <p className="text-gray-600">Free consultation to understand your legal needs and evaluate your case</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Case Analysis</h3>
                <p className="text-gray-600">Thorough review of facts, evidence, and legal options available</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy Development</h3>
                <p className="text-gray-600">Create a customized legal strategy tailored to your specific situation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Resolution</h3>
                <p className="text-gray-600">Execute the strategy and work toward the best possible outcome</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't wait to protect your rights and interests. Contact us today for a free consultation and let our
              experienced legal team help you navigate your legal challenges.
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
                  <a href="#" className="hover:text-white transition-colors">
                    Corporate Law
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Family Law
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Personal Injury
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
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
                  <a href="/#about" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/#team" className="hover:text-white transition-colors">
                    Our Team
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
