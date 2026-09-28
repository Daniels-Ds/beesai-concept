"use client";

import { useMemo, useState } from "react";
import { imageModelPickerEntries } from "../modelFamilies.js";

// Small brand-toned "photo" tiles per provider (generated in-house — see
// public/models/providers), so each model card carries a real thumbnail
// image like the approved mockup instead of a flat logo chip. Falls back to
// the shared muapi provider-logo badge for anything not covered.
const PROVIDER_PHOTOS = {
  alibaba: "/models/providers/alibaba.jpg",
  bytedance: "/models/providers/bytedance.jpg",
  google: "/models/providers/google.jpg",
  kling: "/models/providers/kling.jpg",
  blackforest: "/models/providers/blackforest.jpg",
  grok: "/models/providers/grok.jpg",
  midjourney: "/models/providers/midjourney.jpg",
  runway: "/models/providers/runway.jpg",
  ideogram: "/models/providers/ideogram.jpg",
  openai: "/models/providers/openai.jpg",
  minimax: "/models/providers/minimax.jpg",
  vidu: "/models/providers/vidu.jpg",
  reve: "/models/providers/reve.jpg",
  hunyuan: "/models/providers/hunyuan.jpg",
  stability: "/models/providers/stability.jpg",
  luma: "/models/providers/luma.jpg",
  leonardoai: "/models/providers/leonardoai.jpg",
  muapi: "/models/providers/muapi.jpg",
};

const FORMAT_CHIPS = [
  {
    id: "image",
    label: "Изображение",
    tabId: "image",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
  },
  {
    id: "video",
    label: "Видео",
    tabId: "video",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="15" height="12" rx="2" />
        <path d="M22 9l-5 3 5 3z" />
      </svg>
    ),
  },
  {
    id: "avatar",
    label: "Аватар",
    tabId: "ai-influencer",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 21c1-4 3.5-6 7-6s6 2 7 6" />
      </svg>
    ),
  },
  {
    id: "audio",
    label: "Музыка",
    tabId: "audio",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18V5l11-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="17" cy="16" r="3" />
      </svg>
    ),
  },
];

function ModelCard({ entry, isSelected, onSelect }) {
  const provider = entry.family?.provider;
  const photo = PROVIDER_PHOTOS[provider];
  return (
    <button
      type="button"
      onClick={() => onSelect(entry)}
      className={`flex-1 min-w-[180px] flex items-center gap-3 rounded-[14px] pl-2.5 pr-3.5 py-2.5 text-left transition-colors border backdrop-blur-md
        ${isSelected
          ? "bg-[#7C3AED]/18 border-[#9D5CF0]/50"
          : "bg-black/30 border-white/[0.1] hover:border-white/20 hover:bg-black/40"
        }`}
    >
      <div className="w-11 h-11 rounded-[10px] flex-none overflow-hidden relative bg-gradient-to-br from-[#F4A600]/40 to-[#682DA8]/60">
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo} alt="" className="w-full h-full object-cover" />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-[13px] font-extrabold text-white">
            {entry.name.charAt(0)}
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[12.5px] font-bold text-white truncate">{entry.name}</div>
        <div className="text-[10px] text-white/40 truncate">
          {entry.family?.provider_name || "Muapi"}
        </div>
      </div>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="flex-none text-white/35">
        <path d="M9 6l6 6-6 6" />
      </svg>
    </button>
  );
}

export default function HomeDashboard({ balance, onSubmit }) {
  const [prompt, setPrompt] = useState("");
  const [activeFormat, setActiveFormat] = useState(FORMAT_CHIPS[0]);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const carouselEntries = useMemo(() => {
    const seen = new Set();
    const picks = [];
    for (const entry of imageModelPickerEntries) {
      if (!entry.variantsByMode?.t2i) continue;
      if (seen.has(entry.family.id)) continue;
      seen.add(entry.family.id);
      picks.push(entry);
      if (picks.length >= 7) break;
    }
    return picks;
  }, []);

  const handleCreate = () => {
    onSubmit?.(activeFormat.tabId, {
      prompt,
      modelId: activeFormat.id === "image" ? selectedEntry?.defaultVariant?.model?.id : null,
    });
  };

  const handlePickModel = (entry) => {
    setSelectedEntry(entry);
    setActiveFormat(FORMAT_CHIPS[0]);
  };

  const heroMaskImage =
    "linear-gradient(to left, black 40%, transparent 92%), linear-gradient(to bottom, black 45%, transparent 92%)";

  return (
    <div className="relative h-full w-full overflow-y-auto custom-scrollbar bg-[#08070a]">
      {/* Hero mascot photo, top-right, faded into the dark background — same
          soft dual-edge mask as the approved mockup's .bg-img treatment. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/home-hero-mascot.jpg"
        alt=""
        className="absolute top-0 right-0 pointer-events-none select-none"
        style={{
          width: "78%",
          height: "68%",
          objectFit: "cover",
          objectPosition: "62% 10%",
          WebkitMaskImage: heroMaskImage,
          maskImage: heroMaskImage,
          WebkitMaskComposite: "source-in, source-in",
          maskComposite: "intersect",
        }}
      />
      {/* Ambient brand glow + vignette, matching the mockup's layered dark background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,4,7,0.32) 0%, rgba(5,4,7,0.4) 38%, rgba(5,4,7,0.8) 78%, rgba(5,4,7,0.96) 100%), " +
            "radial-gradient(ellipse 820px 520px at 86% -8%, rgba(124,58,237,0.18), transparent 62%), " +
            "radial-gradient(ellipse 620px 420px at 2% 4%, rgba(244,166,0,0.13), transparent 65%), " +
            "radial-gradient(ellipse 700px 500px at 50% 115%, rgba(109,40,217,0.14), transparent 60%)",
        }}
      />
      {/* Scattered pollen-sphere decor, echoing the mockup's floating dust motes */}
      {/* eslint-disable @next/next/no-img-element */}
      <img src="/brand/pollen-sphere.png" alt="" className="absolute pointer-events-none select-none" style={{ top: "58%", left: "2%", width: 130, opacity: 0.16, filter: "blur(3px)" }} />
      <img src="/brand/pollen-sphere.png" alt="" className="absolute pointer-events-none select-none" style={{ top: "10%", left: "1%", width: 60, opacity: 0.14, filter: "blur(2px)" }} />
      <img src="/brand/pollen-sphere.png" alt="" className="absolute pointer-events-none select-none" style={{ top: "78%", left: "20%", width: 170, opacity: 0.13, filter: "blur(4px)" }} />
      <img src="/brand/pollen-sphere.png" alt="" className="absolute pointer-events-none select-none hidden md:block" style={{ top: "4%", left: "32%", width: 44, opacity: 0.12, filter: "blur(1.5px)" }} />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 w-full px-5 md:px-8 xl:px-10 py-8 flex flex-col gap-7">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-w-0 max-w-2xl flex flex-col gap-3.5">
            <h1 className="font-[Manrope,Inter,sans-serif] font-extrabold text-[38px] sm:text-[48px] leading-[1.08] text-white">
              Создавай
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#F5F3ED 0%,#C9A8F0 45%,#9D5CF0 100%)",
                }}
              >
                без границ
              </span>
            </h1>
            <p className="text-[13px] text-white/60 max-w-md leading-relaxed">
              Видео, изображения, аватары и больше. Всё, что нужно — твоя идея и пыльца.
            </p>

            {/* Quick prompt bar */}
            <div className="mt-1 rounded-2xl p-4 flex flex-col gap-3.5 bg-black/40 backdrop-blur-xl border border-white/[0.12]">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Опишите, что вы хотите создать…"
                rows={2}
                className="w-full bg-transparent resize-none outline-none text-[12.5px] text-white placeholder:text-white/35 min-h-[44px]"
              />
              <div className="flex items-center gap-1.5 flex-wrap">
                {FORMAT_CHIPS.map((chip) => {
                  const isActive = activeFormat.id === chip.id;
                  return (
                    <button
                      key={chip.id}
                      type="button"
                      onClick={() => setActiveFormat(chip)}
                      className={`flex items-center gap-1.5 text-[10px] font-semibold rounded-full px-2.5 py-1.5 border transition-colors whitespace-nowrap
                        ${isActive
                          ? "bg-white/16 border-white/25 text-white"
                          : "bg-white/[0.07] border-white/[0.1] text-white/70 hover:text-white"
                        }`}
                    >
                      <span className="w-2.5 h-2.5 flex-none [&>svg]:w-full [&>svg]:h-full">{chip.icon}</span>
                      {chip.label}
                    </button>
                  );
                })}
                <div className="flex-1" />
                <button
                  type="button"
                  onClick={handleCreate}
                  className="flex items-center gap-1.5 text-white font-bold text-[12px] rounded-[11px] px-4 py-2.5 whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg,#6D28D9 0%,#8B2FC9 100%)",
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset, 0 8px 22px rgba(109,40,217,0.45)",
                  }}
                >
                  Создать
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Pollen balance card — pinned to the right edge, like the mockup's credit-stack */}
          <div className="lg:w-[210px] flex-none lg:ml-auto">
            <div className="rounded-2xl p-3.5 bg-black/40 backdrop-blur-xl border border-white/[0.12] flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/pollen-sphere.png"
                alt=""
                className="w-8 h-8 flex-none object-contain"
                style={{ filter: "drop-shadow(0 2px 6px rgba(253,166,0,0.4))" }}
              />
              <div className="flex-1 min-w-0">
                <div className="font-[Manrope,Inter,sans-serif] font-extrabold text-[16px] text-white leading-tight">
                  {balance !== null && balance !== undefined ? balance : "---"}
                </div>
                <div className="text-[9.5px] text-white/40">Пыльцы</div>
              </div>
              <div
                className="w-7 h-7 rounded-[9px] flex-none flex items-center justify-center text-white"
                style={{
                  background: "linear-gradient(135deg,#6D28D9 0%,#8B2FC9 100%)",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset, 0 6px 16px rgba(109,40,217,0.45)",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ── Model / provider carousel ───────────────────────── */}
        <div className="flex gap-2.5 overflow-x-auto scrollbar-none pb-1">
          {carouselEntries.map((entry) => (
            <ModelCard
              key={entry.id}
              entry={entry}
              isSelected={selectedEntry?.id === entry.id}
              onSelect={handlePickModel}
            />
          ))}
        </div>

        {/* ── Gallery empty state + PRO card ──────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-[2.4fr_1fr] gap-3">
          <div className="rounded-2xl border-[1.5px] border-dashed border-white/[0.14] bg-white/[0.02] backdrop-blur-md flex flex-col items-center justify-center gap-2.5 py-10 px-6">
            <div className="w-11 h-11 rounded-full bg-white/[0.08] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-white/60">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <div className="text-[13px] font-bold text-white">Пока нет генераций</div>
            <div className="text-[11px] text-white/40 max-w-[280px] text-center leading-relaxed">
              Здесь появятся ваши изображения, видео и аватары — начните с промпта выше
            </div>
            <button
              type="button"
              onClick={handleCreate}
              className="mt-1 text-[11.5px] font-bold text-white rounded-[10px] px-4.5 py-2.5"
              style={{
                background: "linear-gradient(135deg,#6D28D9 0%,#8B2FC9 100%)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset, 0 8px 22px rgba(109,40,217,0.4)",
              }}
            >
              Создать первую генерацию
            </button>
          </div>

          <div
            className="rounded-2xl border border-white/[0.08] p-4 flex flex-col gap-2 justify-center"
            style={{
              background:
                "radial-gradient(ellipse 220px 160px at 100% 0%, rgba(157,92,240,0.35), transparent 65%), linear-gradient(160deg,rgba(18,14,20,0.9),rgba(8,6,9,0.94))",
              boxShadow: "0 10px 26px rgba(0,0,0,0.4)",
            }}
          >
            <div className="font-[Manrope,Inter,sans-serif] font-bold text-[13.5px] leading-snug text-white">
              Больше возможностей
              <br />с <b className="text-[#FFC126] font-extrabold">BEES AI PRO</b>
            </div>
            <ul className="flex flex-col gap-1 text-[11px] text-white/70 my-0.5">
              {["Больше пыльцы", "Доступ к топовым моделям", "Командная работа", "Приоритетная генерация"].map((li) => (
                <li key={li} className="flex items-center gap-1.5">
                  <span className="text-white/50 font-bold text-[10px]">✓</span>
                  {li}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-1 flex items-center justify-center gap-1.5 font-bold text-[12px] rounded-[11px] py-2.5"
              style={{
                background: "linear-gradient(90deg,#F4A600 0%,#FFC126 45%,#9D5CF0 100%)",
                color: "#1c1024",
                boxShadow: "0 8px 20px rgba(157,92,240,0.3)",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1c1024" strokeWidth="1.8">
                <path d="M3 8l4 3 5-6 5 6 4-3-2 11H5L3 8z" />
              </svg>
              Перейти на PRO
            </button>
          </div>
        </div>

        {/* ── Footer ───────────────────────────────────────────── */}
        <div className="flex items-center justify-between gap-3 rounded-2xl px-5 h-[46px] bg-black/30 backdrop-blur-md border border-white/[0.08] text-[10.5px] text-white/40 tracking-wide flex-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/bees-logo-full-dark.png" alt="Beesai" className="h-4 w-auto object-contain opacity-90" />
          <span className="hidden sm:inline text-center flex-1">
            AI TOOLS · CREATIVE PEOPLE · REAL RESULTS &nbsp;·&nbsp; MADE FOR A BRIGHTER WORLD
          </span>
          <span className="font-bold text-white/70 whitespace-nowrap">Let&apos;s Create ♡</span>
        </div>
      </div>
    </div>
  );
}
