/**
 * Each section's colour: its eyebrow chip, the lit dot on its divider, the
 * glow behind it, and, for a panel, its tint. Whole class names, so Tailwind finds them.
 */
export const TONES = {
  emerald: {
    chip: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
    dot: 'bg-emerald-500 shadow-emerald-400/70',
    glow: 'bg-emerald-400/20',
    glow2: 'bg-teal-400/15',
    panel: 'from-emerald-50 via-neutral-50/70 to-neutral-50/70 ring-emerald-600/15',
  },
  amber: {
    chip: 'bg-amber-50 text-amber-700 ring-amber-600/20',
    dot: 'bg-amber-500 shadow-amber-400/70',
    // amber reads loud, so its wash and glows are softer than the others'
    glow: 'bg-amber-400/10',
    glow2: 'bg-orange-300/[0.07]',
    panel: 'from-amber-50/40 via-neutral-50/70 to-neutral-50/70 ring-amber-600/10',
  },
  sky: {
    chip: 'bg-sky-50 text-sky-700 ring-sky-600/20',
    dot: 'bg-sky-500 shadow-sky-400/70',
    glow: 'bg-sky-400/15',
    glow2: 'bg-cyan-400/10',
    panel: 'from-sky-50 via-neutral-50/70 to-neutral-50/70 ring-sky-600/15',
  },
  violet: {
    chip: 'bg-violet-50 text-violet-700 ring-violet-600/20',
    dot: 'bg-violet-500 shadow-violet-400/70',
    glow: 'bg-violet-400/15',
    glow2: 'bg-pink-400/10',
    panel: 'from-violet-50 via-neutral-50/70 to-neutral-50/70 ring-violet-600/15',
  },
} as const

export type Tone = keyof typeof TONES
