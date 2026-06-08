import { ImageResponse } from "next/og";
import { siteConfig, heroContent } from "@/data/site";

export const alt = `${siteConfig.fullName} (${siteConfig.name}) — Developer Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#f97316";
const BACKGROUND = "#0a0a0a";
const FOREGROUND = "#f5f5f4";
const MUTED = "#a1a1aa";
const BORDER = "#27272a";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: BACKGROUND,
          backgroundImage: `linear-gradient(${BORDER} 1px, transparent 1px), linear-gradient(90deg, ${BORDER} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          fontFamily: "monospace",
          color: FOREGROUND,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "56px 72px",
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            backgroundColor: "rgba(17, 17, 17, 0.85)",
            boxShadow: `0 0 0 1px rgba(249, 115, 22, 0.25), 0 0 80px rgba(249, 115, 22, 0.18)`,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: ACCENT,
              letterSpacing: 2,
              marginBottom: 18,
            }}
          >
            {siteConfig.brand}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -2,
              color: FOREGROUND,
              textShadow: "0 0 32px rgba(249, 115, 22, 0.45)",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: MUTED,
              marginTop: 20,
            }}
          >
            {heroContent.tagline}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: ACCENT,
              marginTop: 28,
            }}
          >
            {`// ${siteConfig.fullName}`}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
