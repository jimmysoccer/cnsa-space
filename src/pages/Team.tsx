
import React, { useState } from 'react';
import { Github, Mail, Star } from 'lucide-react';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Mission Director",
    specialty: "Astrophysics",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Dr. Chen leads our mission planning team with over 15 years of experience in astrophysics and space mission coordination.",
    email: "s.chen@astrox.example",
    github: "schen-astro"
  },
  {
    id: 2,
    name: "Prof. James Wilson",
    role: "Lead Engineer",
    specialty: "Propulsion",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Professor Wilson specializes in advanced propulsion systems and has developed patented technology for our interplanetary missions.",
    email: "j.wilson@astrox.example",
    github: "jwilson-rockets"
  },
  {
    id: 3,
    name: "Dr. Elena Petrov",
    role: "Exoplanet Researcher",
    specialty: "Planetary Science",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Dr. Petrov leads our exoplanet research division, focusing on identifying potentially habitable worlds beyond our solar system.",
    email: "e.petrov@astrox.example",
    github: "elenap-exoplanets"
  },
  {
    id: 4,
    name: "Alex Rodriguez",
    role: "Communications Engineer",
    specialty: "Deep Space Networks",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    bio: "Alex has designed our revolutionary deep space communication arrays that maintain contact with our furthest probes.",
    email: "a.rodriguez@astrox.example",
    github: "alex-deepspace"
  },
  {
    id: 5,
    name: "Dr. Mei Lin",
    role: "AI Systems Architect",
    specialty: "Machine Learning",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    bio: "Dr. Lin develops the autonomous systems and machine learning algorithms that allow our spacecraft to make decisions millions of miles from Earth.",
    email: "m.lin@astrox.example",
    github: "meilin-ai"
  },
  {
    id: 6,
    name: "Dr. Omar Hassan",
    role: "Life Support Systems",
    specialty: "Bioengineering",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "Dr. Hassan specializes in closed-loop life support systems for long-duration space missions and future Mars habitats.",
    email: "o.hassan@astrox.example",
    github: "ohassan-biolife"
  },
  {
    id: 7,
    name: "Sophia Nakamura",
    role: "Navigation Specialist",
    specialty: "Orbital Mechanics",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "Sophia calculates the precise trajectories needed for our spacecraft to reach distant targets while minimizing fuel consumption.",
    email: "s.nakamura@astrox.example",
    github: "snakamura-orbits"
  },
  {
    id: 8,
    name: "Dr. Marcus Johnson",
    role: "Materials Scientist",
    specialty: "Extreme Environments",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    bio: "Dr. Johnson develops advanced materials capable of withstanding the extreme conditions of space, from temperature variations to radiation.",
    email: "m.johnson@astrox.example",
    github: "mjohnson-materials"
  }
];

const Team = () => {
  const [filter, setFilter] = useState('All');
  
  const specialties = ['All', ...new Set(teamMembers.map(member => member.specialty))];
  
  const filteredMembers = filter === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.specialty === filter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero section */}
      <section className="bg-space-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Our Research Team
            </h1>
            <p className="text-lg text-space-light/80 mb-8">
              Meet the brilliant minds behind our groundbreaking space missions and technological innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Team filters */}
      <section className="bg-space-secondary/30 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {specialties.map(specialty => (
                <button
                  key={specialty}
                  onClick={() => setFilter(specialty)}
                  className={`px-4 py-2 rounded-full font-orbitron text-sm transition-all ${
                    filter === specialty 
                      ? 'bg-space-accent text-white' 
                      : 'bg-space-dark/60 text-space-light/70 hover:text-space-light'
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredMembers.map(member => (
                <div key={member.id} className="team-member-card group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-orbitron font-bold text-xl">{member.name}</h3>
                      <p className="text-space-accent">{member.role}</p>
                      <div className="flex items-center mt-1.5 text-space-light/70 text-sm">
                        <Star size={14} className="mr-1.5 text-space-accent/70" />
                        <span>{member.specialty}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bio and links */}
                  <div className="p-4">
                    <p className="text-sm text-space-light/80 mb-4">
                      {member.bio}
                    </p>
                    <div className="flex space-x-2">
                      <a 
                        href={`mailto:${member.email}`} 
                        className="p-2 rounded-full bg-space-secondary/80 text-space-light/70 hover:text-space-accent transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={16} />
                      </a>
                      <a 
                        href={`https://github.com/${member.github}`} 
                        className="p-2 rounded-full bg-space-secondary/80 text-space-light/70 hover:text-space-accent transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <div className="text-center py-10">
                <p className="text-space-light/70 text-lg">No team members found with this specialty.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Join our team CTA */}
      <section className="bg-space-dark py-20 relative overflow-hidden space-stars">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
              Join Our Research Team
            </h2>
            <p className="text-lg text-space-light/80 mb-8">
              We're always looking for brilliant minds passionate about space exploration and advancing humanity's reach into the cosmos.
            </p>
            <a href="/contact" className="space-button inline-flex">
              Learn About Careers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
