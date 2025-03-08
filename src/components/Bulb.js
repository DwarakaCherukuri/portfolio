import React, { useEffect, useRef } from 'react';

const HangingBulbs = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height;
    const bulbs = [];
    const mouse = {
      pos: { x: 0, y: 0 },
      radius: 100
    };

    // Vector utility
    const Vector = {
      sub: (v1, v2) => {
        return { x: v1.x - v2.x, y: v1.y - v2.y };
      }
    };

    // Bulb class
    class Bulb {
      constructor(x, y, isLit = false) {
        this.pos = { x, y };
        this.oldPos = { x, y };
        this.anchorX = x;
        this.anchorY = 80; // Default header height
        this.restLength = y - this.anchorY;
        this.friction = 0.92;
        this.gravity = { x: 0, y: 0.2 };
        this.stiffness = 0.03;
        this.isLit = isLit;
        this.width = 40; // Bulb width
        this.height = 60; // Bulb height
      }

      update(mouse) {
        // Spring force to anchor point
        let dx = this.anchorX - this.pos.x;
        let dy = this.anchorY - this.pos.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let force = (distance - this.restLength) * this.stiffness;
        
        // Apply spring force
        let springForceX = (dx / distance) * force;
        let springForceY = (dy / distance) * force;
        
        // Apply velocity with damping
        let vel = Vector.sub(this.pos, this.oldPos);
        this.oldPos = { x: this.pos.x, y: this.pos.y };
        vel.x *= this.friction;
        vel.y *= this.friction;
        vel.x += this.gravity.x;
        vel.y += this.gravity.y;
        this.pos.x += vel.x;
        this.pos.y += vel.y;
        
        // Apply spring force
        this.pos.x += springForceX;
        this.pos.y += springForceY;
        
        // Add damping to reduce oscillation
        let currentVel = Vector.sub(this.pos, this.oldPos);
        currentVel.x *= 0.3;
        currentVel.y *= 0.3;
        this.pos.x -= currentVel.x;
        this.pos.y -= currentVel.y;
        
        // Mouse interaction
        let mouseDx = mouse.pos.x - this.pos.x;
        let mouseDy = mouse.pos.y - this.pos.y;
        let mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        
        if (mouseDist < mouse.radius) {
          // Calculate direction vector from bulb to mouse
          const dirX = mouseDx / mouseDist;
          const dirY = mouseDy / mouseDist;
          
          // Apply a gentle force in mouse direction
          const force = (mouse.radius - mouseDist) / mouse.radius * 0.5;
          
          // Apply deflection
          this.pos.x += dirX * force;
          this.pos.y += dirY * force;
        }
      }

      draw(ctx) {
        // Draw string
        ctx.beginPath();
        ctx.strokeStyle = '#d1d1d1';
        ctx.lineWidth = 1;
        ctx.moveTo(this.anchorX, this.anchorY);
        ctx.lineTo(this.pos.x, this.pos.y - this.height/2);
        ctx.stroke();
        
        // Save context for bulb drawing
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        
        // Draw bulb
        this.drawBulb(ctx);
        
        // Restore context
        ctx.restore();
      }

      drawBulb(ctx) {
        const w = this.width;
        const h = this.height;
        
        // Draw bulb base (socket)
        ctx.fillStyle = '#d1d1d1';
        ctx.beginPath();
        ctx.moveTo(-w/6, -h/2);
        ctx.lineTo(w/6, -h/2);
        ctx.lineTo(w/4, -h/3);
        ctx.lineTo(-w/4, -h/3);
        ctx.closePath();
        ctx.fill();
        
        // Draw bulb glass
        if (this.isLit) {
          // Yellow for lit bulb with glow
          ctx.fillStyle = '#ffff00';
          
          // Add glow for lit bulb
          const glow = ctx.createRadialGradient(0, 0, w/4, 0, 0, w);
          glow.addColorStop(0, 'rgba(255, 255, 0, 0.4)');
          glow.addColorStop(1, 'rgba(255, 255, 0, 0)');
          
          ctx.beginPath();
          ctx.arc(0, 0, w/1.5, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
          
          // Draw "rays" around the lit bulb
          ctx.strokeStyle = '#ffff00';
          ctx.lineWidth = 1;
          for (let angle = 0; angle < 360; angle += 30) {
            const radian = angle * Math.PI / 180;
            const innerRadius = w/3;
            const outerRadius = w/2;
            
            ctx.beginPath();
            ctx.moveTo(
              innerRadius * Math.cos(radian),
              innerRadius * Math.sin(radian)
            );
            ctx.lineTo(
              outerRadius * Math.cos(radian),
              outerRadius * Math.sin(radian)
            );
            ctx.stroke();
          }
        }
        
        // Draw bulb outline
        ctx.beginPath();
        ctx.fillStyle = this.isLit ? '#ffff00' : 'rgba(240, 240, 240, 0.8)';
        ctx.beginPath();
        ctx.arc(0, 0, w/3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, 0, w/3, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw filament lines for detail
        ctx.strokeStyle = '#999';
        ctx.lineWidth = 0.5;
        
        // Vertical filament
        ctx.beginPath();
        ctx.moveTo(0, -h/6);
        ctx.lineTo(0, h/8);
        ctx.stroke();
        
        // Horizontal filaments
        ctx.beginPath();
        ctx.moveTo(-w/8, -h/10);
        ctx.lineTo(w/8, -h/10);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(-w/10, 0);
        ctx.lineTo(w/10, 0);
        ctx.stroke();
      }
    }

    // Position bulbs in the header right area just like the mockup
    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      // Clear existing bulbs
      bulbs.length = 0;
      
      // Specific positioning to match the mockup image
      // Position in the right side of the header/top area
      const rightOffset = width * 0.65; // Start at 65% of screen width
      const bulbArea = width * 0.3; // Use 30% of screen width for bulbs
      const numBulbs = 7;
      const bulbSpacing = bulbArea / numBulbs;
      
      // Y position to match header height (adjust as needed)
      const headerHeight = 60; // Typical header height
      
      for (let i = 0; i < numBulbs; i++) {
        const x = rightOffset + (i * bulbSpacing);
        // Slight variation in heights for natural look
        const yVariation = Math.random() * 10;
        // The middle bulb (index 3) is lit
        const isLit = i === 3;
        
        // Create the bulb with positioning that matches the mockup
        const bulb = new Bulb(x, headerHeight + 80 + yVariation, isLit);
        bulb.anchorY = headerHeight;
        bulbs.push(bulb);
      }
    };
    
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw bulbs
      bulbs.forEach(bulb => {
        bulb.update(mouse);
        bulb.draw(ctx);
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    const handleResize = () => {
      init();
    };
    
    const handleMouseMove = (e) => {
      mouse.pos.x = e.clientX;
      mouse.pos.y = e.clientY;
    };
    
    const handleTouchMove = (e) => {
      e.preventDefault();
      mouse.pos.x = e.touches[0].clientX;
      mouse.pos.y = e.touches[0].clientY;
    };
    
    // Initialize and set up event listeners
    setTimeout(() => {
      init();
      animate();
    }, 500);
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 10,
        pointerEvents: 'none'
      }}
    />
  );
};

export default HangingBulbs;