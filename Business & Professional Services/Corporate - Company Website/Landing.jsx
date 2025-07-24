import Head from "next/head"
import Image from "next/image"

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Get Your FREE Legal Consultation - Expert Attorneys Ready to Help</title>
        <meta
          name="description"
          content="Schedule your free legal consultation today. Our expert attorneys are ready to help with your legal needs. No obligation, completely confidential."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Minimal Header - No Navigation */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold text-gray-900">LegalPro</h2>
              </div>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                FREE Consultation
              </button>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section - Primary CTA Focus */}
          <section className="relative min-h-screen flex items-center">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero-bg.jpeg')`,
              }}
            ></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block mb-4 font-semibold">
                    LIMITED TIME OFFER
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Get Your <span className="text-yellow-400">FREE</span> Legal Consultation Today
                  </h1>
                  <p className="text-xl mb-6 text-gray-200">
                    Don't face your legal challenges alone. Our expert attorneys are standing by to provide you with a
                    completely FREE, no-obligation consultation worth $500.
                  </p>

                  {/* Benefits List */}
                  <div className="mb-8 space-y-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-lg">100% Free Consultation (No Hidden Fees)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-lg">Expert Legal Advice in 24 Hours</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-lg">25+ Years Combined Experience</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-lg">Completely Confidential</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-colors shadow-lg transform hover:scale-105">
                      🔥 CLAIM YOUR FREE CONSULTATION NOW
                    </button>
                    <div className="text-center sm:text-left">
                      <p className="text-sm text-gray-300">⏰ Only 3 spots left today!</p>
                      <p className="text-sm text-gray-300">📞 Call now: (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <Image
                    src="/images/hero-image.png"
                    alt="Expert legal consultation"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Join 500+ Satisfied Clients Who Got Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-gray-600">Cases Won</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors">
                GET MY FREE CONSULTATION
              </button>
            </div>
          </section>

          {/* Problem/Solution Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="/images/about.jpeg"
                    alt="Legal problems solved"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Are You Facing These Legal Challenges?
                  </h2>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-white text-sm">!</span>
                      </div>
                      <span className="text-lg text-gray-700">Overwhelming legal paperwork and deadlines</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-white text-sm">!</span>
                      </div>
                      <span className="text-lg text-gray-700">Expensive legal fees with no guarantee of results</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-white text-sm">!</span>
                      </div>
                      <span className="text-lg text-gray-700">Confusion about your legal rights and options</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-white text-sm">!</span>
                      </div>
                      <span className="text-lg text-gray-700">Fear of making costly legal mistakes</span>
                    </div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                    <p className="text-lg text-green-800 font-semibold">
                      ✅ We solve these problems for FREE during your consultation!
                    </p>
                  </div>
                  <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-red-700 transition-colors">
                    SOLVE MY LEGAL PROBLEMS NOW
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Services/Solutions Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We'll Help You Win Your Case</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our proven 3-step process has helped over 500 clients achieve successful outcomes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                  <Image
                    src="/images/service-1.jpeg"
                    alt="Step 1: Free consultation"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">FREE Case Analysis</h3>
                    <p className="text-gray-600">
                      We'll review your case details and provide expert legal advice completely free of charge.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                  <Image
                    src="/images/service-2.jpeg"
                    alt="Step 2: Strategy development"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Strategy</h3>
                    <p className="text-gray-600">
                      We'll create a personalized legal strategy tailored specifically to your unique situation.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                  <Image
                    src="/images/service-3.png"
                    alt="Step 3: Win your case"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Win Your Case</h3>
                    <p className="text-gray-600">
                      We'll fight tirelessly to achieve the best possible outcome for your legal matter.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-colors shadow-lg">
                  START MY FREE CONSULTATION
                </button>
              </div>
            </div>
          </section>

          {/* Expert Team Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Your Expert Legal Team</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our experienced attorneys have successfully handled over 500 cases with a 98% success rate
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                  <Image
                    src="/images/team-1.png"
                    alt="Sarah Johnson - Senior Partner"
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
                    <p className="text-red-600 font-semibold mb-3">Senior Partner - 15 Years</p>
                    <p className="text-gray-600 text-sm">
                      Harvard Law graduate with 200+ successful corporate cases. Featured in Legal Times Magazine.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                  <Image
                    src="/images/team-2.jpeg"
                    alt="Michael Chen - Litigation Expert"
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Chen</h3>
                    <p className="text-red-600 font-semibold mb-3">Litigation Expert - 12 Years</p>
                    <p className="text-gray-600 text-sm">
                      Trial attorney with 150+ courtroom victories. Specializes in complex litigation cases.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                  <Image
                    src="/images/team-3.jpeg"
                    alt="Emily Rodriguez - Estate Planning Specialist"
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Emily Rodriguez</h3>
                    <p className="text-red-600 font-semibold mb-3">Estate Planning - 10 Years</p>
                    <p className="text-gray-600 text-sm">
                      Certified estate planning specialist who has protected over $50M in client assets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-colors">
                  SPEAK WITH AN EXPERT TODAY
                </button>
              </div>
            </div>
          </section>

          {/* Urgency/Scarcity Section */}
          <section
            className="py-20 relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/section-bg.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-red-600 text-white px-6 py-3 rounded-lg inline-block mb-6 font-bold text-lg">
                ⚠️ WARNING: Time is Running Out!
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't Wait - Legal Deadlines Don't Stop!
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Every day you wait could cost you thousands of dollars or even your entire case. Statutes of limitations
                are real, and once they expire, you lose your rights forever.
              </p>

              <div className="bg-yellow-400 text-black p-6 rounded-lg mb-8 inline-block">
                <p className="text-lg font-bold mb-2">🔥 LIMITED TIME: Only 3 FREE consultations left today!</p>
                <p className="text-sm">This offer expires at midnight - Don't miss out!</p>
              </div>

              <button className="bg-red-600 text-white px-10 py-5 rounded-lg text-2xl font-bold hover:bg-red-700 transition-colors shadow-2xl transform hover:scale-105">
                SECURE MY FREE CONSULTATION NOW
              </button>

              <p className="text-gray-300 mt-4">
                📞 Or call immediately: <span className="text-yellow-400 font-bold">(555) 123-4567</span>
              </p>
            </div>
          </section>

          {/* Final CTA with Form */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Get Your FREE Legal Consultation in 3 Simple Steps
                </h2>
                <p className="text-xl text-gray-600">Fill out the form below and we'll contact you within 24 hours</p>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="legalIssue" className="block text-sm font-medium text-gray-700 mb-2">
                      Describe Your Legal Issue *
                    </label>
                    <textarea
                      id="legalIssue"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                      placeholder="Briefly describe your legal situation..."
                    ></textarea>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500"
                      />
                      <label htmlFor="consent" className="ml-3 text-sm text-gray-700">
                        I agree to receive my FREE consultation and understand this is completely confidential with no
                        obligation. *
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-4 px-8 rounded-lg text-xl font-bold hover:bg-red-700 transition-colors shadow-lg transform hover:scale-105"
                  >
                    🔥 GET MY FREE CONSULTATION NOW (Worth $500)
                  </button>

                  <div className="text-center text-sm text-gray-500">
                    <p>🔒 Your information is 100% secure and confidential</p>
                    <p>⚡ We'll contact you within 24 hours</p>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Minimal Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">LegalPro</h3>
              <p className="text-gray-400">Your trusted legal partner</p>
            </div>

            <div className="mb-4">
              <p className="text-lg font-semibold">📞 Call Now: (555) 123-4567</p>
              <p className="text-gray-400">Available 24/7 for emergencies</p>
            </div>

            <div className="border-t border-gray-800 pt-4 text-sm text-gray-400">
              <p>&copy; 2024 LegalPro. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
