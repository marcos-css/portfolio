import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import { Sparkles } from "lucide-react";

const EffectsToggle = () => {
  const { effectsEnabled, setEffectsEnabled } = useContext(AppContext) || {};
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check OS-level preference. If it's on, we hide this button because effects are forced off.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (prefersReducedMotion || setEffectsEnabled === undefined) {
    return null; // Don't show toggle if the OS is forcing no animations, or if context is missing.
  }

  return (
    <button
      onClick={() => setEffectsEnabled(!effectsEnabled)}
      className={`fixed bottom-4 left-4 z-[100] flex items-center justify-center gap-2 p-3 md:px-3 md:py-2 rounded-full border transition-all duration-300 ${
        effectsEnabled
          ? "bg-[#08fdd8]/10 border-[#08fdd8]/50 text-[#08fdd8] hover:bg-[#08fdd8]/20"
          : "bg-gray-800/80 border-gray-600 text-gray-400 hover:bg-gray-700/80"
      }`}
      style={{ backdropFilter: "blur(8px)" }}
      aria-label="Toggle visual effects"
    >
      {effectsEnabled ? <Sparkles size={18} /> : <Sparkles size={18} className="opacity-50" />}
      <span className="hidden md:inline text-xs font-semibold tracking-wider uppercase">
        {effectsEnabled ? "Animations On" : "Animations Off"}
      </span>
    </button>
  );
};

export default EffectsToggle;
