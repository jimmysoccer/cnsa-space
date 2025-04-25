
import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero section */}
      <section className="bg-space-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-space-light/80 mb-8">
              Have questions about our space missions or technologies? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form and map */}
      <section className="bg-space-secondary/30 py-16 relative overflow-hidden space-stars">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
            {/* Contact form */}
            <div className="lg:w-1/2">
              <div className="bg-space-dark/70 backdrop-blur-md rounded-lg p-8 border border-space-accent/20">
                <h2 className="text-2xl font-orbitron font-bold mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="bg-space-accent/20 border border-space-accent text-space-light rounded-lg p-4 text-center">
                    <p className="font-orbitron mb-2">Thank you for your message!</p>
                    <p className="text-space-light/80">We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-space-light mb-2 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-space-secondary/50 border border-space-accent/30 rounded-md px-4 py-3 text-space-light focus:outline-none focus:border-space-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-space-light mb-2 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-space-secondary/50 border border-space-accent/30 rounded-md px-4 py-3 text-space-light focus:outline-none focus:border-space-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-space-light mb-2 font-medium">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-space-secondary/50 border border-space-accent/30 rounded-md px-4 py-3 text-space-light focus:outline-none focus:border-space-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-space-light mb-2 font-medium">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-space-secondary/50 border border-space-accent/30 rounded-md px-4 py-3 text-space-light focus:outline-none focus:border-space-accent resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`space-button w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info and map */}
            <div className="lg:w-1/2">
              <div className="bg-space-dark/70 backdrop-blur-md rounded-lg p-8 border border-space-accent/20 mb-8">
                <h2 className="text-2xl font-orbitron font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-space-accent/20 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-space-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron mb-1">Our Location</h3>
                      <p className="text-space-light/80">
                        1234 Cosmic Way, Research Park<br />
                        Houston, TX 78701
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-space-accent/20 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-space-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron mb-1">Email Address</h3>
                      <a href="mailto:contact@astrox.example" className="text-space-light/80 hover:text-space-accent transition-colors">
                        contact@astrox.example
                      </a>
                      <p className="text-space-light/60 text-sm mt-1">
                        For press inquiries: <a href="mailto:press@astrox.example" className="hover:text-space-accent transition-colors">press@astrox.example</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full bg-space-accent/20 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-space-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-orbitron mb-1">Phone</h3>
                      <p className="text-space-light/80">
                        +1 (555) 123-4567
                      </p>
                      <p className="text-space-light/60 text-sm mt-1">
                        Monday to Friday, 9:00 AM to 5:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-64 bg-space-secondary/50 rounded-lg overflow-hidden border border-space-accent/20">
                <div className="w-full h-full relative">
                  {/* This would be a real map in production */}
                  <div className="absolute inset-0 bg-space-secondary flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-space-accent mx-auto mb-2" />
                      <p className="text-space-light/70">Interactive map would load here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-space-dark py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-orbitron font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-space-secondary/30 rounded-lg p-6 border border-space-accent/20">
                <h3 className="text-xl font-orbitron mb-3">Can I visit your research facility?</h3>
                <p className="text-space-light/80">
                  Yes, we offer guided tours of our facility on the first Friday of each month. Tours must be booked in advance through our visitor center.
                </p>
              </div>

              <div className="bg-space-secondary/30 rounded-lg p-6 border border-space-accent/20">
                <h3 className="text-xl font-orbitron mb-3">Do you offer internship opportunities?</h3>
                <p className="text-space-light/80">
                  We have summer internships for undergraduate and graduate students in aerospace, physics, engineering, and computer science fields. Applications open in January each year.
                </p>
              </div>

              <div className="bg-space-secondary/30 rounded-lg p-6 border border-space-accent/20">
                <h3 className="text-xl font-orbitron mb-3">How can I collaborate with AstroX on research?</h3>
                <p className="text-space-light/80">
                  We're open to collaborative research projects with academic institutions and industry partners. Please contact our research department with a detailed proposal.
                </p>
              </div>

              <div className="bg-space-secondary/30 rounded-lg p-6 border border-space-accent/20">
                <h3 className="text-xl font-orbitron mb-3">Are your mission launches open to the public?</h3>
                <p className="text-space-light/80">
                  Public viewing areas are available for most of our launches, with details published on our website approximately one month before each scheduled launch date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
