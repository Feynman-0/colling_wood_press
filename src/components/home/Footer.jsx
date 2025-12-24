'use client';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative">
      {/* Contact Form - Overlapping Footer */}
      <section 
        className="bookWrap relative z-20 -mb-40" 
        style={{
          background: 'linear-gradient(135deg, #F6F7F9 0%, #FFFFFF 50%, #E8EDF2 100%)',
          padding: '80px 24px'
        }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-[#415a77]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-[#1F2A44]/10 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          
          {/* Floating Icons */}
          <div className="absolute top-20 right-32 opacity-5">
            <svg className="w-16 h-16 text-[#415a77] animate-float" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
            </svg>
          </div>
          <div className="absolute bottom-32 left-32 opacity-5">
            <svg className="w-20 h-20 text-[#1F2A44] animate-float" style={{animationDelay: '1.5s'}} viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
            </svg>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Header with Badge */}
          <div className="text-center mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full mb-6 border-2 border-[#415a77]/20 shadow-lg hover:border-[#EB6358] hover:shadow-lg transition-all duration-300">
              <svg className="w-5 h-5 text-[#415a77] hover:text-[#EB6358] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="text-sm font-bold text-[#1F2A44] uppercase tracking-wider hover:text-[#EB6358] transition-colors duration-300">Start Your Publishing Journey</span>
            </div>
          </div>
        
        <div 
          className="book group hover:shadow-[0_30px_80px_rgba(31,42,68,0.25)] transition-all duration-700"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FAFBFC 50%, #F6F7F9 100%)',
            borderColor: '#E5E9F0',
            borderWidth: '2px',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(31, 42, 68, 0.15)'
          }}
        >
          <form onSubmit={handleSubmit} className="pages">
            
            {/* Left Page */}
            <div className="page pageLeft relative">
              {/* Decorative Corner Element */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#415a77]/20 rounded-tl-3xl"></div>
              <div className="relative z-10">
                <h2 style={{color: 'var(--text)'}} className="text-3xl md:text-4xl font-black mb-4 tracking-tight group-hover:scale-105 transition-transform duration-500">
                  Ready to Publish?
                </h2>
                <p style={{color: 'var(--text-muted)'}} className="text-base md:text-lg font-medium mb-10 leading-relaxed">
                  Join hundreds of authors who've brought their books to life
                </p>
                <div className="space-y-8">
                                    
                  {/* Tell Us More Field (moved from right page) */}
                  <div className={`relative transition-all duration-500 ${focusedField === 'message' ? 'transform scale-105' : ''}`}>
                    <div style={{background: 'linear-gradient(135deg, #F8F9FB 0%, #F0F3F7 100%)'}} 
                         className={`rounded-xl border-2 overflow-hidden transition-all duration-500 shadow-lg ${focusedField === 'message' ? 'border-[#415a77] shadow-[0_8px_30px_rgba(65,90,119,0.25)]' : 'border-gray-200 hover:border-[#415a77]/50'}`}>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell us about your manuscript..."
                        rows="4"
                        className="w-full px-6 py-4 bg-transparent text-gray-900 placeholder-gray-400 outline-none resize-none font-medium text-base leading-relaxed"
                        required
                      ></textarea>
                    </div>
                  </div>
                  {/* Name Field */}
                  <div className={`relative transition-all duration-500 ${focusedField === 'name' ? 'transform scale-105' : ''}`}>
                    <div style={{background: 'linear-gradient(135deg, #F8F9FB 0%, #F0F3F7 100%)'}} 
                         className={`rounded-xl border-2 overflow-hidden transition-all duration-500 shadow-lg ${focusedField === 'name' ? 'border-[#415a77] shadow-[0_8px_30px_rgba(65,90,119,0.25)]' : 'border-gray-200 hover:border-[#415a77]/50'}`}>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Name"
                        className="w-full px-6 py-4 bg-transparent text-gray-900 placeholder-gray-400 outline-none font-medium text-base"
                        required
                      />
                    </div>
                    {focusedField === 'name' && (
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-gradient-to-br from-[#415a77] to-[#1F2A44] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Email Field */}
                  <div className={`relative transition-all duration-500 ${focusedField === 'email' ? 'transform scale-105' : ''}`}>
                    <div style={{background: 'linear-gradient(135deg, #F8F9FB 0%, #F0F3F7 100%)'}} 
                         className={`rounded-xl border-2 overflow-hidden transition-all duration-500 shadow-lg ${focusedField === 'email' ? 'border-[#415a77] shadow-[0_8px_30px_rgba(65,90,119,0.25)]' : 'border-gray-200 hover:border-[#415a77]/50'}`}>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Email"
                        className="w-full px-6 py-4 bg-transparent text-gray-900 placeholder-gray-400 outline-none font-medium text-base"
                        required
                      />
                    </div>
                    {focusedField === 'email' && (
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-gradient-to-br from-[#415a77] to-[#1F2A44] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Phone Field */}
                  <div className={`relative transition-all duration-500 ${focusedField === 'phone' ? 'transform scale-105' : ''}`}>
                    <div style={{background: 'linear-gradient(135deg, #F8F9FB 0%, #F0F3F7 100%)'}} 
                         className={`rounded-xl border-2 overflow-hidden transition-all duration-500 shadow-lg ${focusedField === 'phone' ? 'border-[#415a77] shadow-[0_8px_30px_rgba(65,90,119,0.25)]' : 'border-gray-200 hover:border-[#415a77]/50'}`}>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your Phone"
                        className="w-full px-6 py-4 bg-transparent text-gray-900 placeholder-gray-400 outline-none font-medium text-base"
                      />
                    </div>
                    {/* Submit Your Manuscript Button (restore, left page) */}
                                    <div className="text-center mt-8 mb-6">
                                      <button
                                        type="submit"
                                        className="bg-gradient-to-r from-[#1F2A44] to-[#415a77] hover:from-[#EB6358] hover:to-[#D95341] text-white font-bold text-lg px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
                                      >
                                        <span>Submit Your Manuscript</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                      </button>
                                    </div>
                    {focusedField === 'phone' && (
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-gradient-to-br from-[#415a77] to-[#1F2A44] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Bottom Corner Element */}
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#1F2A44]/20 rounded-br-3xl"></div>
            </div>

            {/* Right Page */}
            <div className="page pageRight relative">
              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#1F2A44]/20 rounded-tr-3xl"></div>
              <div className="relative z-10 flex flex-col items-center justify-center">
                {/* Small Google Map Embed */}
                <h3 style={{color: 'var(--text)'}} className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-center">Our Location</h3>
                <div className="rounded-2xl overflow-hidden border border-[#E5E9F0] shadow-lg mb-6" style={{width:'100%',height:'350px',minHeight:'350px',maxWidth:'100%'}}>
                  <iframe
                    title="Franklin Publishers Location"
                    src="https://www.google.com/maps?q=7345+W+Sand+Lake+Rd,+Orlando,+FL+32819&output=embed"
                    width="120%"
                    height="120%"
                    style={{border:0,width:'100%',height:'100%'}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="text-sm text-gray-600 text-center">7345 W Sand Lake Rd, Orlando, FL 32819</div>
              </div>
              {/* Bottom Corner Element */}
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#415a77]/20 rounded-bl-3xl"></div>
            </div>
          </form>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{background: 'var(--text)', color: 'var(--surface-2)'}} className="pt-48 relative overflow-hidden">
        
        <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h3 style={{color: 'white'}} className="font-black text-2xl mb-4">
                Franklin Publishers
              </h3>
              <p style={{color: 'var(--surface)'}} className="leading-relaxed text-sm">
                Your trusted partner in bringing books to life. From manuscript to marketplace, we're with you every step of the way.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Services</h4>
              <ul className="space-y-2 text-sm">
                {['Ghostwriting', 'Editing', 'Publishing', 'Marketing', 'Cover Design', 'Audiobook Production'].map((service, idx) => (
                  <li key={idx}>
                    <a href="#" style={{color: 'var(--surface)'}} className="hover:text-[var(--accent)] transition-all duration-300 hover:translate-x-2 inline-block group">
                      <span className="inline-block">→</span> {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-2 text-sm">
                {['About Us', 'Our Team', 'Portfolio', 'Testimonials', 'FAQ', 'Contact'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" style={{color: 'var(--surface)'}} className="hover:text-[var(--accent)] transition-all duration-300 hover:translate-x-2 inline-block group">
                      <span className="inline-block">→</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 group hover:translate-x-2 transition-transform duration-300">
                  <svg style={{color: 'var(--accent)'}} className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span style={{color: 'var(--surface)'}}>info@franklinpublishers.com</span>
                </li>
                <li className="flex items-start gap-2 group hover:translate-x-2 transition-transform duration-300">
                  <svg style={{color: 'var(--accent)'}} className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span style={{color: 'var(--surface)'}}>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Franklin Publishers. All rights reserved.
            </p>
            <div className="flex gap-6">
              {[
                { name: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { name: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                { name: 'Instagram', path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' },
                { name: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:rotate-12"
                  aria-label={social.name}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
