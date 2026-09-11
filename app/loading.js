'use client';

import { useEffect, useRef } from 'react';

const GOLD = [244, 166, 0];     // Pollen Gold #F4A600
const NECTAR = [255, 193, 38];  // Nectar Yellow #FFC126
const PURPLE = [104, 45, 168];  // AI Purple #682DA8

function rand(min, max) {
  return min + Math.random() * (max - min);
}

export default function Loading() {
  const canvasRef = useRef(null);
  const beeRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    let width = 0;
    let height = 0;
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;

    const sphereImg = new Image();
    sphereImg.src = '/brand/pollen-sphere.png';

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    // Ambient drifting dust (background swarm, like the reference mood image)
    const ambientCount = width < 700 ? 26 : 46;
    const ambient = Array.from({ length: ambientCount }, () => ({
      x: rand(0, width),
      y: rand(0, height),
      vx: rand(-6, 6),
      vy: rand(-8, -2),
      r: rand(1.2, 5.5),
      blur: Math.random() < 0.55,
      alpha: rand(0.15, 0.6),
      hue: Math.random() < 0.15 ? PURPLE : Math.random() < 0.5 ? NECTAR : GOLD,
    }));

    // Trail: small pollen spheres dropped behind the flying hero
    let trail = [];

    const start = performance.now();
    let lastSpawn = 0;
    const cycleStart = start;
    const CYCLE_MS = 5200;    // full loop: fly + converge + burst
    const CONVERGE_AT = 3400; // when the swarm starts pulling to center
    const CONVERGE_LEN = 900;

    function beePosition(tSec) {
      const cx = width / 2;
      const cy = height / 2;
      const ax = Math.min(width * 0.36, 420);
      const ay = Math.min(height * 0.24, 220);
      const x = cx + ax * Math.sin(tSec * 0.6);
      const y = cy - height * 0.06 + ay * Math.sin(tSec * 1.05 + 1.2);
      return { x, y };
    }

    function tick(now) {
      const tSec = (now - start) / 1000;
      const cycleT = (now - cycleStart) % CYCLE_MS;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height * 0.42;

      let convergeK = 0;
      if (cycleT > CONVERGE_AT) {
        convergeK = Math.min(1, (cycleT - CONVERGE_AT) / CONVERGE_LEN);
      }
      const burstK = cycleT < 260 ? 1 - cycleT / 260 : 0; // brief release burst at cycle start

      // ---- ambient dust ----
      for (const p of ambient) {
        if (convergeK > 0) {
          const dx = cx - p.x;
          const dy = cy - p.y;
          const pull = convergeK * convergeK * 0.09;
          p.x += dx * pull;
          p.y += dy * pull;
        } else {
          p.x += p.vx * 0.016;
          p.y += p.vy * 0.016;
          if (burstK > 0) {
            const dx = p.x - cx;
            const dy = p.y - cy;
            const d = Math.max(1, Math.hypot(dx, dy));
            p.x += (dx / d) * burstK * 6;
            p.y += (dy / d) * burstK * 6;
          }
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;
          if (p.y < -20) { p.y = height + 20; p.x = rand(0, width); }
        }
        const fade = convergeK > 0 ? 1 - convergeK * 0.85 : 1;
        const r = p.r * (1 - convergeK * 0.5);
        ctx.save();
        if (p.blur) ctx.filter = 'blur(2.5px)';
        const [r0, g0, b0] = p.hue;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, Math.max(r * 3, 1));
        grad.addColorStop(0, `rgba(${r0},${g0},${b0},${p.alpha * fade})`);
        grad.addColorStop(1, `rgba(${r0},${g0},${b0},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(r * 3, 1), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ---- hero pollen sphere ----
      const flying = cycleT < CONVERGE_AT;

      if (flying) {
        const bee = beePosition(tSec);
        if (now - lastSpawn > 90) {
          lastSpawn = now;
          trail.push({
            x: bee.x + rand(-8, 8),
            y: bee.y + rand(-8, 8),
            size: rand(10, 20),
            rot: rand(0, 360),
            life: 1,
          });
        }
        if (beeRef.current) {
          const spin = tSec * 130; // continuous tumble, independent of path
          beeRef.current.style.opacity = '1';
          beeRef.current.style.transform =
            `translate(${bee.x - 30}px, ${bee.y - 30}px) rotate(${spin}deg)`;
        }
      } else if (beeRef.current) {
        beeRef.current.style.opacity = String(Math.max(0, 1 - convergeK * 1.6));
      }

      // update + draw trail (small pollen spheres, fading + shrinking)
      trail = trail.filter((t) => t.life > 0.03);
      for (const t of trail) {
        t.life -= 0.014;
        if (convergeK > 0) {
          t.x += (cx - t.x) * convergeK * convergeK * 0.12;
          t.y += (cy - t.y) * convergeK * convergeK * 0.12;
        }
        const s = t.size * (0.5 + t.life * 0.5);
        ctx.save();
        ctx.globalAlpha = t.life;
        if (sphereImg.complete && sphereImg.naturalWidth) {
          ctx.translate(t.x, t.y);
          ctx.rotate((t.rot * Math.PI) / 180);
          ctx.drawImage(sphereImg, -s / 2, -s / 2, s, s);
        } else {
          const grad = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, s);
          grad.addColorStop(0, `rgba(244,166,0,${t.life * 0.85})`);
          grad.addColorStop(1, 'rgba(244,166,0,0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(t.x, t.y, s, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // ---- central glow (brightens as everything gathers, flashes, then releases) ----
      if (glowRef.current) {
        let glowAlpha = 0;
        if (convergeK > 0) glowAlpha = convergeK;
        if (burstK > 0) glowAlpha = burstK;
        glowRef.current.style.opacity = String(glowAlpha);
        const scale = 0.6 + glowAlpha * 0.9 + burstK * 1.2;
        glowRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#070708]">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-[42%] w-40 h-40 rounded-full opacity-0"
        style={{
          background:
            'radial-gradient(circle, rgba(255,209,102,0.9) 0%, rgba(244,166,0,0.55) 40%, rgba(104,45,168,0.25) 70%, transparent 75%)',
          filter: 'blur(6px)',
        }}
      />

      <img
        ref={beeRef}
        src="/brand/pollen-sphere.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 w-[60px] h-[60px] object-contain opacity-0 drop-shadow-[0_0_18px_rgba(244,166,0,0.55)]"
        style={{ willChange: 'transform, opacity' }}
      />

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex items-baseline gap-1 select-none">
          <span className="font-display text-3xl font-extrabold tracking-tight text-[#F5F3ED]">
            Beesai
          </span>
        </div>
        <p className="mt-3 text-xs tracking-[0.25em] uppercase text-[#a1a1aa]">
          Собираем улей…
        </p>
      </div>
    </div>
  );
}
