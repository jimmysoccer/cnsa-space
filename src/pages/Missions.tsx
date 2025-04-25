
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

// Mission data
const missions = [
  {
    id: 1,
    name: "Stellar Observer",
    date: "March 2024",
    status: "Active",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Our deep space telescope observing star formations in distant galaxies to better understand the evolution of the universe.",
    objectives: [
      "Map star formations in distant galaxies",
      "Study the effects of dark matter on galaxy formation",
      "Observe supernovae in real-time"
    ],
    technology: "Advanced infrared and gamma ray sensors with neural network-based image processing.",
    achievements: "Has already captured over 500,000 high-resolution images of previously unobserved galaxies."
  },
  {
    id: 2,
    name: "Mars Pathfinder",
    date: "January 2023",
    status: "Active",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Rover mission exploring the Martian surface for signs of ancient microbial life and potential resources for future human exploration.",
    objectives: [
      "Search for evidence of past microbial life",
      "Map potential resources for future missions",
      "Test oxygen production from Martian atmosphere"
    ],
    technology: "Self-navigating rover with spectroscopy and sample collection capabilities.",
    achievements: "Confirmed presence of subsurface ice and collected over 30 rock samples for analysis."
  },
  {
    id: 3,
    name: "Europa Explorer",
    date: "2025 (Planned)",
    status: "In Development",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Mission to explore Jupiter's moon Europa and its subsurface ocean, searching for conditions suitable for life.",
    objectives: [
      "Map Europa's ice shell thickness",
      "Sample and analyze water plumes",
      "Search for biosignatures in the ocean"
    ],
    technology: "Ice-penetrating radar, mass spectrometer, and autonomous landing system.",
    achievements: "Currently in final development phase. Launch window scheduled for mid-2025."
  },
  {
    id: 4,
    name: "Lunar Gateway",
    date: "September 2023",
    status: "Active",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Space station orbiting the Moon to serve as a science laboratory and staging point for both robotic and human exploration of the lunar surface.",
    objectives: [
      "Establish permanent human presence near the Moon",
      "Support lunar surface missions",
      "Test deep space habitation systems"
    ],
    technology: "Modular space station with radiation shielding and artificial gravity sections.",
    achievements: "Successfully docked with 4 supply missions and hosted 3 crew rotations."
  },
  {
    id: 5,
    name: "TRAPPIST Explorer",
    date: "2027 (Planned)",
    status: "Planning",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Next-generation exoplanet telescope designed to study the atmospheres of planets in the TRAPPIST-1 system.",
    objectives: [
      "Analyze atmospheric composition of TRAPPIST-1 planets",
      "Search for biosignature gases",
      "Measure surface temperatures and conditions"
    ],
    technology: "Revolutionary spectrograph capable of detecting atmospheric gases in Earth-sized planets 40 light years away.",
    achievements: "Design phase completed. Component testing underway."
  },
  {
    id: 6,
    name: "Asteroid Redirect",
    date: "October 2022",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Mission to test asteroid deflection technology by changing the orbit of a small near-Earth asteroid.",
    objectives: [
      "Demonstrate kinetic impactor technique",
      "Measure orbital changes with precision",
      "Test autonomous navigation systems"
    ],
    technology: "Kinetic impactor spacecraft with real-time navigation and impact analysis systems.",
    achievements: "Successfully altered asteroid's orbit by 10 minutes - proving planetary defense capability."
  }
];

const Missions = () => {
  const [selectedMission, setSelectedMission] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenMission = (mission) => {
    setSelectedMission(mission);
    setOpen(true);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero section */}
      <section className="bg-space-dark py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              Our Space Missions
            </h1>
            <p className="text-lg text-space-light/80 mb-8">
              Discover the ongoing and planned space exploration missions pushing the boundaries of human knowledge and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="bg-space-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-10 text-center">
            Mission Timeline
          </h2>
          
          <div className="max-w-6xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-space-accent/30 transform md:translate-x-[-50%] hidden md:block"></div>
            
            <div className="space-y-12">
              {missions
                .sort((a, b) => {
                  if (a.date.includes('Planned') && !b.date.includes('Planned')) return 1;
                  if (!a.date.includes('Planned') && b.date.includes('Planned')) return -1;
                  return 0;
                })
                .map((mission, index) => (
                  <div key={mission.id} className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="md:w-1/2"></div>
                    <div className="flex items-center justify-center mx-4 relative">
                      <div className="w-10 h-10 rounded-full bg-space-accent flex items-center justify-center z-10">
                        <Clock className="h-5 w-5 text-space-light" />
                      </div>
                    </div>
                    <div className="md:w-1/2 bg-space-dark/50 backdrop-blur-sm rounded-lg p-6 border border-space-accent/20">
                      <h3 className="text-xl font-orbitron font-bold mb-2">{mission.name}</h3>
                      <div className="flex items-center mb-4">
                        <Calendar size={16} className="text-space-accent mr-2" />
                        <span className="text-space-light/70">{mission.date}</span>
                        <span className={`ml-3 text-xs px-2 py-1 rounded-full font-medium ${
                          mission.status === 'Active' ? 'bg-green-500/20 text-green-400' : 
                          mission.status === 'Completed' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {mission.status}
                        </span>
                      </div>
                      <p className="text-space-light/80 mb-4">{mission.description}</p>
                      <button 
                        onClick={() => handleOpenMission(mission)}
                        className="inline-flex items-center text-space-accent hover:text-space-light text-sm"
                      >
                        Mission Details <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      {/* Mission details modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        {selectedMission && (
          <DialogContent className="sm:max-w-3xl bg-space-secondary border-space-accent/30">
            <DialogTitle className="font-orbitron text-2xl text-space-accent">
              {selectedMission.name}
            </DialogTitle>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={selectedMission.image} 
                  alt={selectedMission.name} 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4 flex items-center">
                  <Calendar size={16} className="text-space-accent mr-2" />
                  <span className="text-space-light/70 mr-4">{selectedMission.date}</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    selectedMission.status === 'Active' ? 'bg-green-500/20 text-green-400' : 
                    selectedMission.status === 'Completed' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {selectedMission.status}
                  </span>
                </div>
              </div>
              
              <div>
                <DialogDescription className="text-space-light/90 mb-4">
                  {selectedMission.description}
                </DialogDescription>
                
                <h4 className="font-orbitron text-space-accent mb-2">Mission Objectives</h4>
                <ul className="list-disc list-inside mb-4 text-space-light/80">
                  {selectedMission.objectives.map((objective, index) => (
                    <li key={index} className="mb-1">{objective}</li>
                  ))}
                </ul>
                
                <h4 className="font-orbitron text-space-accent mb-2">Technology</h4>
                <p className="text-space-light/80 mb-4">{selectedMission.technology}</p>
                
                <h4 className="font-orbitron text-space-accent mb-2">Achievements</h4>
                <p className="text-space-light/80">{selectedMission.achievements}</p>
              </div>
            </div>
            
            <DialogClose className="absolute right-4 top-4 text-space-light/70 hover:text-space-light">
              <span className="sr-only">Close</span>
              <Info className="h-6 w-6" />
            </DialogClose>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default Missions;
