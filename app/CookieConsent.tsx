"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const CONSENT_KEY = "ovp_cookie_consent";

export default function CookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    }
    setReady(true);
  }, []);

  const choose = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-6JRWFD2CWR"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6JRWFD2CWR');
            `}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <div
          role="dialog"
          aria-label="Consentement aux cookies"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            background: "#241F1A",
            borderTop: "1px solid #4A5D45",
            padding: "1.25rem 1.5rem",
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <p style={{ fontSize: "13px", color: "rgba(242,239,231,0.85)", lineHeight: 1.6, margin: 0, maxWidth: "620px", fontFamily: "inherit" }}>
              Nous utilisons Google Analytics pour mesurer l'audience du site. Ces données ne sont pas utilisées à des fins publicitaires.{" "}
              <a href="/confidentialite" style={{ color: "#8FAE86", textDecoration: "underline" }}>
                En savoir plus
              </a>
            </p>
            <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
              <button
                onClick={() => choose("rejected")}
                style={{
                  background: "transparent",
                  color: "#F2EFE7",
                  border: "1px solid rgba(242,239,231,0.35)",
                  padding: "0 20px",
                  height: "38px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Refuser
              </button>
              <button
                onClick={() => choose("accepted")}
                style={{
                  background: "#4A5D45",
                  color: "#F2EFE7",
                  border: "none",
                  padding: "0 20px",
                  height: "38px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
