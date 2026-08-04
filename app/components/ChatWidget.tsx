import Script from "next/script";

// Simplify360 live chat. Rendered from the root layout so it is available on
// every route — Next.js loads it once and keeps it across client navigation.
// Every public route on this site should show it, so there is no route gating
// here (unlike the Patrick Novick site, which hides it on its admin pages).
const S360_KEY = "NmEwNWU5OTE5NjFjZTYzZTcwOGFmZWU1fDQxNzIzNzA=";

export default function ChatWidget() {
  return (
    <Script
      id="nextivacx-code-snippet"
      src={`https://d3po7etsbw5eiv.cloudfront.net/Simplify360Chat.js?key=${S360_KEY}`}
      strategy="afterInteractive"
    />
  );
}
