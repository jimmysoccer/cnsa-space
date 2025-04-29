import React, { useEffect, useRef } from 'react';

const UniverseAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Stars data
  interface Star {
    x: number;
    y: number;
    radius: number;
    color: string;
    speed: number;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas size
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const stars: Star[] = [];
    const starCount = Math.floor((canvas.width * canvas.height) / 4000); // Adjust density
    const colorPalette = [
      '#ffffff',
      '#e6f0ff',
      '#3388ff',
      '#7aa6ff',
      '#aac4ff',
    ];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        speed: Math.random() * 0.05 + 0.01,
      });
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    const mouseRadius = 100;
    const interactionEnabled = true;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);

    // Planets
    interface Planet {
      x: number;
      y: number;
      radius: number;
      color: string;
      orbitRadius: number;
      orbitSpeed: number;
      angle: number;
      hasRing?: boolean;
      ringColor?: string;
      ringWidth?: number;
    }

    const planets: Planet[] = [
      {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 30,
        color: '#ffcc33', // Sun
        orbitRadius: 0,
        orbitSpeed: 0,
        angle: 0,
      },
      {
        x: 0, // Will be calculated
        y: 0, // Will be calculated
        radius: 5,
        color: '#e67e22', // Mercury
        orbitRadius: 60,
        orbitSpeed: 0.03,
        angle: Math.random() * Math.PI * 2,
      },
      {
        x: 0, // Will be calculated
        y: 0, // Will be calculated
        radius: 8,
        color: '#3498db', // Earth
        orbitRadius: 100,
        orbitSpeed: 0.02,
        angle: Math.random() * Math.PI * 2,
      },
      {
        x: 0, // Will be calculated
        y: 0, // Will be calculated
        radius: 12,
        color: '#e74c3c', // Mars
        orbitRadius: 140,
        orbitSpeed: 0.015,
        angle: Math.random() * Math.PI * 2,
      },
      {
        x: 0, // Will be calculated
        y: 0, // Will be calculated
        radius: 18,
        color: '#f39c12', // Jupiter
        orbitRadius: 190,
        orbitSpeed: 0.01,
        angle: Math.random() * Math.PI * 2,
      },
      {
        x: 0, // Will be calculated
        y: 0, // Will be calculated
        radius: 15,
        color: '#f1c40f', // Saturn
        orbitRadius: 240,
        orbitSpeed: 0.008,
        angle: Math.random() * Math.PI * 2,
        hasRing: true,
        ringColor: '#d4ac6e',
        ringWidth: 5,
      },
    ];

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars and animate
      stars.forEach((star) => {
        // Move stars slowly
        star.y += star.speed;

        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // Interactive effect - stars get brighter when mouse is near
        if (interactionEnabled) {
          const dx = mouseX - star.x;
          const dy = mouseY - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRadius) {
            const alpha = 1 - distance / mouseRadius;
            ctx.globalAlpha = Math.min(1, star.radius / 1.5 + alpha);
          } else {
            ctx.globalAlpha = Math.min(1, star.radius / 1.5);
          }
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
      });

      ctx.globalAlpha = 0.7; // Make planets slightly transparent

      // Update and draw planets
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      planets.forEach((planet) => {
        // Update planet position
        if (planet.orbitRadius > 0) {
          // Skip the sun
          planet.angle += planet.orbitSpeed;
          planet.x = centerX + Math.cos(planet.angle) * planet.orbitRadius;
          planet.y = centerY + Math.sin(planet.angle) * planet.orbitRadius;
        }

        // Draw orbit path (faded)
        if (planet.orbitRadius > 0) {
          ctx.beginPath();
          ctx.arc(centerX, centerY, planet.orbitRadius, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.stroke();
        }

        // Draw planet
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();

        // Draw ring if planet has one
        if (planet.hasRing) {
          ctx.beginPath();
          ctx.ellipse(
            planet.x,
            planet.y,
            planet.radius + 10,
            planet.radius / 2,
            planet.angle,
            0,
            Math.PI * 2
          );
          ctx.strokeStyle = planet.ringColor || '#d4ac6e';
          ctx.lineWidth = planet.ringWidth || 3;
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='absolute inset-0 w-full h-full -z-10'
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default UniverseAnimation;
