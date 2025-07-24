import {
  Phone,
  Mail,
  MapPin,
  Scale,
  Clock,
  Users,
  MessageSquare,
  Calendar,
  CheckCircle,
  ArrowRight,
  Building,
  Car,
  Navigation,
} from "lucide-react"

export const metadata = {
  title: "Contact Us | Johnson & Associates Law Firm - Free Legal Consultation",
  description:
    "Contact Johnson & Associates for expert legal representation. Call (555) 123-4567 for a free consultation or visit our downtown office. Available 24/7 for emergencies.",
}

export default function ContactPage() {
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
              <a href="/team" className="text-gray-700 hover:text-blue-600 transition-colors">
                Team
              </a>
              <a href="#contact" className="text-blue-600 font-medium">
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us Today</h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
                Ready to discuss your legal needs? We're here to help. Contact us for a free consultation and experience
                the difference that expert legal representation can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (555) 123-4567
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Online
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple ways to reach us. Choose the option that works best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
                <p className="text-gray-600 mb-6">
                  Speak directly with our legal team. Available during business hours with 24/7 emergency support.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-2xl font-bold text-blue-600">(555) 123-4567</div>
                  <div className="text-sm text-gray-600">Main Office Line</div>
                  <div className="text-lg font-semibold text-gray-900">(555) 123-4568</div>
                  <div className="text-sm text-gray-600">24/7 Emergency Line</div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                  Call Now
                </button>
              </div>

              {/* Email */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
                <p className="text-gray-600 mb-6">
                  Send us a detailed message about your legal matter. We typically respond within 2 hours during
                  business hours.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="text-lg font-semibold text-blue-600">info@johnsonlaw.com</div>
                  <div className="text-sm text-gray-600">General Inquiries</div>
                  <div className="text-lg font-semibold text-gray-900">consult@johnsonlaw.com</div>
                  <div className="text-sm text-gray-600">New Client Consultations</div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                  Send Email
                </button>
              </div>

              {/* Visit */}
              <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
                <p className="text-gray-600 mb-6">
                  Meet with us in person at our conveniently located downtown office. Appointments recommended.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="font-semibold text-gray-900">123 Legal Street, Suite 100</div>
                  <div className="text-gray-600">Downtown, ST 12345</div>
                  <div className="text-sm text-gray-600">Free parking available</div>
                  <div className="text-sm text-gray-600">Wheelchair accessible</div>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Office Info */}
        <section id="contact" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Free Consultation</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours to schedule your free consultation.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Legal Matter Type *</label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a practice area</option>
                      <option value="corporate">Corporate Law</option>
                      <option value="family">Family Law</option>
                      <option value="personal-injury">Personal Injury</option>
                      <option value="estate-planning">Estate Planning</option>
                      <option value="criminal-defense">Criminal Defense</option>
                      <option value="real-estate">Real Estate Law</option>
                      <option value="employment">Employment Law</option>
                      <option value="immigration">Immigration Law</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="contact-method" value="phone" className="mr-2" />
                        <span className="text-sm text-gray-700">Phone</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="contact-method" value="email" className="mr-2" />
                        <span className="text-sm text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="contact-method" value="either" className="mr-2" defaultChecked />
                        <span className="text-sm text-gray-700">Either</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your legal matter *
                    </label>
                    <textarea
                      rows="5"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Please provide details about your legal situation, including any relevant dates, parties involved, and specific questions you have..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="routine">Routine - Within 1-2 weeks</option>
                      <option value="important">Important - Within a few days</option>
                      <option value="urgent">Urgent - Within 24 hours</option>
                      <option value="emergency">Emergency - Immediate attention needed</option>
                    </select>
                  </div>

                  <div className="flex items-start">
                    <input type="checkbox" required className="mt-1 mr-3" />
                    <label className="text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>
                      . I understand that submitting this form does not create an attorney-client relationship.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Request Free Consultation
                  </button>
                </form>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-semibold">Free Consultation</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    Your initial consultation is completely free with no obligation. We'll review your case and provide
                    honest advice about your legal options.
                  </p>
                </div>
              </div>

              {/* Office Information */}
              <div className="space-y-8">
                {/* Office Details */}
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Address</h4>
                        <p className="text-gray-700">
                          Johnson & Associates Law Firm
                          <br />
                          123 Legal Street, Suite 100
                          <br />
                          Downtown, ST 12345
                        </p>
                        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm mt-2 flex items-center">
                          <Navigation className="h-4 w-4 mr-1" />
                          Get Directions
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Office Hours</h4>
                        <div className="space-y-1 text-gray-700">
                          <div className="flex justify-between">
                            <span>Monday - Friday:</span>
                            <span>8:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saturday:</span>
                            <span>9:00 AM - 2:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sunday:</span>
                            <span>Closed</span>
                          </div>
                        </div>
                        <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded">
                          <p className="text-red-800 font-semibold text-sm">24/7 Emergency Support Available</p>
                          <p className="text-red-700 text-sm">Call (555) 123-4568 for urgent legal matters</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Car className="h-6 w-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Parking & Accessibility</h4>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Free client parking available</li>
                          <li>• Wheelchair accessible entrance</li>
                          <li>• Elevator access to all floors</li>
                          <li>• Public transportation nearby</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Building className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">123 Legal Street, Downtown, ST 12345</p>
                    <button className="mt-2 text-blue-600 hover:text-blue-700 text-sm">
                      Click to load Google Maps
                    </button>
                  </div>
                </div>

                {/* Additional Contact Methods */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Additional Ways to Connect</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <span className="font-medium text-gray-900">Live Chat</span>
                        <p className="text-sm text-gray-600">Available Mon-Fri, 9 AM - 5 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <span className="font-medium text-gray-900">Online Scheduling</span>
                        <p className="text-sm text-gray-600">Book appointments 24/7</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <span className="font-medium text-gray-900">Video Consultations</span>
                        <p className="text-sm text-gray-600">Remote meetings available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Common questions about contacting our firm and scheduling consultations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Is the initial consultation really free?</h3>
                  <p className="text-gray-700">
                    Yes, we offer a completely free initial consultation for all new clients. This allows us to
                    understand your legal needs and for you to get to know our firm without any financial commitment.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How quickly can I schedule an appointment?
                  </h3>
                  <p className="text-gray-700">
                    We typically can schedule consultations within 24-48 hours. For urgent matters, we offer same-day
                    appointments when possible. Emergency consultations are available 24/7.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer virtual consultations?</h3>
                  <p className="text-gray-700">
                    Yes, we offer secure video consultations for clients who prefer to meet remotely or cannot visit our
                    office in person. These are just as effective as in-person meetings for most legal matters.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What should I bring to my consultation?</h3>
                  <p className="text-gray-700">
                    Bring any relevant documents related to your legal matter, a list of questions you'd like to ask,
                    and a timeline of important events. Don't worry if you don't have everything - we can work with
                    whatever information you have.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How long does a consultation typically last?
                  </h3>
                  <p className="text-gray-700">
                    Initial consultations typically last 30-60 minutes, depending on the complexity of your legal
                    matter. We'll take the time needed to fully understand your situation and provide meaningful advice.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What if I have an emergency legal situation?
                  </h3>
                  <p className="text-gray-700">
                    Call our 24/7 emergency line at (555) 123-4568. We have attorneys available around the clock for
                    urgent legal matters that cannot wait for regular business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Don't Wait - Get the Legal Help You Need</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Legal matters don't wait, and neither should you. Contact Johnson & Associates today and take the first
              step toward resolving your legal challenges with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                Call (555) 123-4567
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center">
                <ArrowRight className="h-5 w-5 mr-2" />
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
                  <a href="/team" className="hover:text-white transition-colors">
                    Team
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
