import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "light",
  tokens: {
    pageBg: "#FBF6EE",
    surface1: "#FFFFFF",
    surface2: "#FFF1E0",
    surface3: "#FFE2C7",
    surfaceInverse: "#1E1530",
    textPrimary: "#1E1530",
    textMuted: "#5A4D6B",
    textInverse: "#FFF7EE",
    textOnAccentPrimary: "#FFFFFF",
    textLink: "#A8257C",
    focusRing: "#E14BAB",
    line: "#EFDDC7",
    lineStrong: "#D6BC9C",
    accentPrimary: "#A8257C",
    accentSecondary: "#3F3375",
    accentBright: "#E14BAB",
    statusConfirmed: "#1F8A53",
    statusCaution: "#B6731A",
    statusUnknown: "#6B6680",
  },
  typography: {
    headingFamily: "Quicksand, Nunito, system-ui, sans-serif",
    bodyFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "12px",
    borderWidth: "1px",
    shadow:
      "0 1px 2px rgba(30, 21, 48, 0.06), 0 4px 14px rgba(30, 21, 48, 0.07)",
    hoverLift: "-2px",
  },
  density: "comfortable",
  background: {
    mode: "gradient",
    overlay: 0.6,
    position: "top center",
  },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "dots", intensity: "low" },
} satisfies ThemeConfig;
