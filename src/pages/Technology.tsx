
import React from 'react';
import { Rocket, Search, Link, ArrowRight } from 'lucide-react';

const Technology = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero section */}
      <section className="bg-space-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Our Space Technology
            </h1>
            <p className="text-lg text-space-light/80 mb-8">
              Discover the cutting-edge technologies powering our missions and expanding humanity's reach into space.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="bg-space-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Propulsion Systems */}
              <div className="tech-card">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-space-accent/20 flex items-center justify-center">
                    <Rocket className="h-8 w-8 text-space-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-4 text-center">Propulsion Systems</h3>
                <div className="space-y-4 text-space-light/80">
                  <p>
                    Our advanced propulsion systems enable faster travel times and more efficient exploration of the solar system.
                  </p>
                  <div className="border-t border-space-accent/20 pt-4">
                    <h4 className="font-orbitron text-space-accent mb-2 text-sm uppercase">Technologies</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Ion Propulsion Engines</li>
                      <li>Nuclear Thermal Rockets</li>
                      <li>Plasma Thrusters</li>
                      <li>Antimatter Catalyst Systems</li>
                    </ul>
                  </div>
                  <div className="border-t border-space-accent/20 pt-4">
                    <h4 className="font-orbitron text-space-accent mb-2 text-sm uppercase">Current Applications</h4>
                    <p>
                      Our Stellar Observer mission uses next-generation ion propulsion, achieving a record 90% fuel efficiency.
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="inline-flex items-center text-space-accent hover:text-space-light">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>

              {/* Communication Systems */}
              <div className="tech-card">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-space-accent/20 flex items-center justify-center">
                    <Link className="h-8 w-8 text-space-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-4 text-center">Communication Systems</h3>
                <div className="space-y-4 text-space-light/80">
                  <p>
                    Our deep space communication network allows for reliable data transmission across billions of miles.
                  </p>
                  <div className="border-t border-space-accent/20 pt-4">
                    <h4 className="font-orbitron text-space-accent mb-2 text-sm uppercase">Technologies</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Quantum Entanglement Transmitters</li>
                      <li>Neural Network Signal Processing</li>
                      <li>Laser Communication Arrays</li>
                      <li>Low-Latency Gateway Network</li>
                    </ul>
                  </div>
                  <div className="border-t border-space-accent/20 pt-4">
                    <h4 className="font-orbitron text-space-accent mb-2 text-sm uppercase">Current Applications</h4>
                    <p>
                      Our Mars Pathfinder rover transmits high-definition video in near real-time using our laser comm system.
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="inline-flex items-center text-space-accent hover:text-space-light">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>

              {/* Life Support Systems */}
              <div className="tech-card">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-space-accent/20 flex items-center justify-center">
                    <Search className="h-8 w-8 text-space-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-4 text-center">Life Support Systems</h3>
                <div className="space-y-4 text-space-light/80">
                  <p>
                    Our bioregenerative life support systems make long-duration human missions possible and sustainable.
                  </p>
                  <div className="border-t border-space-accent/20 pt-4">
                    <h4 className="font-orbitron text-space-accent mb-2 text-sm uppercase">Technologies</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Closed-Loop Ecosystem</li>
                      <li>Radiation Shielding</li>
                      <li>Artificial Gravity Generation</li>
                      <li>3D Bioprinted Emergency Medical</li>
                    </ul>
                  </div>
                  <div className="border-t border-space-accent/20 pt-4">
                    <h4 className="font-orbitron text-space-accent mb-2 text-sm uppercase">Current Applications</h4>
                    <p>
                      Our Lunar Gateway station features a prototype bioregenerative system that recycles 99.7% of water.
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button className="inline-flex items-center text-space-accent hover:text-space-light">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Technology */}
      <section className="bg-space-dark py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-12 text-center">
            Featured Technology
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Quantum Propulsion System" 
                  className="rounded-lg shadow-xl shadow-space-accent/10 border border-space-accent/30"
                />
              </div>
              <div>
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-space-accent">
                  Quantum Vacuum Propulsion
                </h3>
                <p className="text-space-light/80 mb-6">
                  Our revolutionary propulsion system harnesses energy from quantum fluctuations in the vacuum of space, enabling unprecedented efficiency and acceleration capabilities without traditional propellant limitations.
                </p>
                <div className="space-y-4">
                  <div className="bg-space-secondary/40 rounded-lg p-4 border border-space-accent/20">
                    <h4 className="font-orbitron text-space-light mb-2">Key Advantages</h4>
                    <ul className="list-disc list-inside text-space-light/80 space-y-1">
                      <li>Zero propellant consumption for sustained acceleration</li>
                      <li>Theoretical maximum speed approaching 10% of light speed</li>
                      <li>Minimal radiation signature for stealth operations</li>
                      <li>Self-contained power generation from quantum field interactions</li>
                    </ul>
                  </div>

                  <div className="bg-space-secondary/40 rounded-lg p-4 border border-space-accent/20">
                    <h4 className="font-orbitron text-space-light mb-2">Development Status</h4>
                    <p className="text-space-light/80">
                      Currently in advanced testing phase with small-scale prototype achieving 0.1g acceleration in vacuum chamber conditions. Full-scale implementation planned for Europa Explorer mission.
                    </p>
                  </div>
                </div>
                <button className="space-button mt-8">
                  Technical Specifications
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-space-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-12 text-center">
            Research Areas
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-space-dark/70 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20">
              <h3 className="font-orbitron text-xl mb-4">Artificial Gravity</h3>
              <p className="text-space-light/80 mb-4">
                Research into practical methods for generating artificial gravity on long-duration space missions to prevent muscle and bone deterioration.
              </p>
              <div className="h-1 w-1/3 bg-space-accent/70 rounded-full"></div>
            </div>

            <div className="bg-space-dark/70 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20">
              <h3 className="font-orbitron text-xl mb-4">Radiation Shielding</h3>
              <p className="text-space-light/80 mb-4">
                Development of advanced materials and electromagnetic fields to protect astronauts from harmful cosmic and solar radiation.
              </p>
              <div className="h-1 w-1/3 bg-space-accent/70 rounded-full"></div>
            </div>

            <div className="bg-space-dark/70 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20">
              <h3 className="font-orbitron text-xl mb-4">Quantum Computing</h3>
              <p className="text-space-light/80 mb-4">
                Applying quantum computing to solve complex orbital mechanics calculations and optimize mission trajectories in real-time.
              </p>
              <div className="h-1 w-1/3 bg-space-accent/70 rounded-full"></div>
            </div>

            <div className="bg-space-dark/70 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20">
              <h3 className="font-orbitron text-xl mb-4">Terraforming</h3>
              <p className="text-space-light/80 mb-4">
                Theoretical and practical approaches to planetary engineering for making other worlds habitable for human settlement.
              </p>
              <div className="h-1 w-1/3 bg-space-accent/70 rounded-full"></div>
            </div>

            <div className="bg-space-dark/70 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20">
              <h3 className="font-orbitron text-xl mb-4">Cryogenic Suspension</h3>
              <p className="text-space-light/80 mb-4">
                Research into safely placing humans in suspended animation for long-duration interplanetary or potential interstellar missions.
              </p>
              <div className="h-1 w-1/3 bg-space-accent/70 rounded-full"></div>
            </div>

            <div className="bg-space-dark/70 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20">
              <h3 className="font-orbitron text-xl mb-4">Asteroid Mining</h3>
              <p className="text-space-light/80 mb-4">
                Technologies for extracting valuable minerals and resources from near-Earth asteroids to support space manufacturing and colonization.
              </p>
              <div className="h-1 w-1/3 bg-space-accent/70 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
