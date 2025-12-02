"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  originalRadius: number;
  targetRadius: number;
}

interface ClickEffect {
  x: number;
  y: number;
  radius: number;
  life: number;
  maxLife: number;
}

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const clickEffectsRef = useRef<ClickEffect[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    const particleCount = 100;
    const particles: Particle[] = [];
    
    const colors = [
      "rgba(217, 25, 123, 0.8)", // Primary color - brighter
      "rgba(230, 57, 155, 0.6)", // Primary light
      "rgba(192, 192, 192, 0.5)", // Silver
      "rgba(255, 255, 255, 0.4)", // White
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 3 + 1.5;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        radius: radius,
        originalRadius: radius,
        targetRadius: radius,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    particlesRef.current = particles;

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      };
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      setIsHovering(false);
    };

    const handleClick = (e: MouseEvent) => {
      // Create click effect
      clickEffectsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        life: 0,
        maxLife: 60,
      });

      // Push particles away from click
      particles.forEach((particle) => {
        const dx = particle.x - e.clientX;
        const dy = particle.y - e.clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx += (dx / distance) * force * 5;
          particle.vy += (dy / distance) * force * 5;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update click effects
      clickEffectsRef.current = clickEffectsRef.current.filter((effect) => {
        effect.life++;
        effect.radius = (effect.life / effect.maxLife) * 200;
        
        // Draw click effect
        if (effect.life < effect.maxLife) {
          const alpha = 1 - effect.life / effect.maxLife;
          ctx.beginPath();
          ctx.arc(effect.x, effect.y, effect.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(217, 25, 123, ${alpha * 0.5})`;
          ctx.lineWidth = 2;
          ctx.stroke();
          
          ctx.beginPath();
          ctx.arc(effect.x, effect.y, effect.radius * 0.7, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(230, 57, 155, ${alpha * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        
        return effect.life < effect.maxLife;
      });

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Mouse interaction - particles are attracted to mouse
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const force = (150 - distance) / 150;
            // Attract particles to mouse
            particle.vx += (dx / distance) * force * 0.05;
            particle.vy += (dy / distance) * force * 0.05;
            
            // Make particles grow when near mouse
            particle.targetRadius = particle.originalRadius * (1 + force * 0.5);
          } else {
            particle.targetRadius = particle.originalRadius;
          }
        } else {
          particle.targetRadius = particle.originalRadius;
        }

        // Smooth radius transition
        particle.radius += (particle.targetRadius - particle.radius) * 0.1;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges with some damping
        if (particle.x < 0) {
          particle.x = 0;
          particle.vx *= -0.8;
        }
        if (particle.x > canvas.width) {
          particle.x = canvas.width;
          particle.vx *= -0.8;
        }
        if (particle.y < 0) {
          particle.y = 0;
          particle.vy *= -0.8;
        }
        if (particle.y > canvas.height) {
          particle.y = canvas.height;
          particle.vy *= -0.8;
        }

        // Add some random movement for more organic feel
        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;

        // Limit velocity
        const maxVelocity = 3;
        const velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (velocity > maxVelocity) {
          particle.vx = (particle.vx / velocity) * maxVelocity;
          particle.vy = (particle.vy / velocity) * maxVelocity;
        }

        // Apply friction
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.5, particle.color.replace("0.8", "0.4").replace("0.6", "0.3").replace("0.5", "0.2").replace("0.4", "0.1"));
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections with dynamic opacity based on distance and mouse
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;
            const lineWidth = (1 - distance / 150) * 1.5;
            
            // Make connections brighter near mouse
            let connectionOpacity = opacity;
            if (mouseRef.current.active) {
              const midX = (particle.x + otherParticle.x) / 2;
              const midY = (particle.y + otherParticle.y) / 2;
              const mouseDx = mouseRef.current.x - midX;
              const mouseDy = mouseRef.current.y - midY;
              const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
              
              if (mouseDistance < 100) {
                connectionOpacity = Math.min(opacity * 2, 0.6);
              }
            }

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(217, 25, 123, ${connectionOpacity})`;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full cursor-pointer"
      style={{ zIndex: 1 }}
    />
  );
}
