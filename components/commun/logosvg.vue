<template>
  <div class="logo-svg-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 60" class="logo-svg">

      <!-- Icône carrée fond bleu -->
      <rect x="0" y="0" width="58" height="58" rx="9" fill="#0d4a8a" class="logo-icon-bg"/>

      <!-- Barres code avec animation -->
      <rect class="bar bar1" x="10" y="12" width="22" height="6" rx="2" fill="#00c8e8"/>
      <rect class="bar bar2" x="10" y="24" width="14" height="6" rx="2" fill="#4ddff5"/>
      <rect class="bar bar3" x="10" y="36" width="18" height="6" rx="2" fill="#00c8e8"/>
      <rect class="bar bar4" x="10" y="48" width="10" height="6" rx="2" fill="#4ddff5"/>

      <!-- Triangle blanc flèche -->
      <polygon class="arrow" points="38,12 52,29 38,46" fill="#ffffff" opacity="0.9"/>

      <!-- Point cyan animé -->
      <circle class="dot" cx="52" cy="8" r="4" fill="#00c8e8"/>

      <!-- Texte Cabinet -->
      <text x="68" y="34"
        font-family="'Segoe UI', Arial, sans-serif"
        font-weight="700"
        font-size="22"
        fill="#0d4a8a"
        class="logo-text-cabinet">Cabinet</text>

      <!-- Texte IT en cyan -->
      <text x="168" y="34"
        font-family="'Segoe UI', Arial, sans-serif"
        font-weight="700"
        font-size="22"
        fill="#00c8e8"
        class="logo-text-it">IT</text>

      <!-- Ligne décorative sous le texte -->
      <line x1="68" y1="42" x2="215" y2="42" stroke="#00c8e8" stroke-width="1.2" class="logo-line"/>

      <!-- Sous-titre -->
      <text x="68" y="54"
        font-family="'Segoe UI', Arial, sans-serif"
        font-weight="400"
        font-size="7"
        fill="#00c8e8"
        letter-spacing="2"
        class="logo-sub">SOLUTIONS NUMÉRIQUES</text>

    </svg>
  </div>
</template>

<script>
export default {
  name: 'LogoSVG'
}
</script>

<style scoped>
.logo-svg-wrapper {
  display: inline-block;
}

.logo-svg {
  width: 180px;
  height: auto;
  overflow: visible;
}

/* ── Animation des barres de code ── */
.bar {
  transform-origin: left center;
  animation: barPulse 2.4s ease-in-out infinite;
}
.bar1 { animation-delay: 0s; }
.bar2 { animation-delay: 0.3s; }
.bar3 { animation-delay: 0.6s; }
.bar4 { animation-delay: 0.9s; }

@keyframes barPulse {
  0%,100% { opacity: 1; transform: scaleX(1); }
  50%      { opacity: 0.5; transform: scaleX(0.7); }
}

/* ── Animation du point cyan ── */
.dot {
  animation: dotBlink 1.8s ease-in-out infinite;
}
@keyframes dotBlink {
  0%,100% { opacity: 1; r: 4px; }
  50%      { opacity: 0.3; r: 3px; }
}

/* ── Animation de la flèche ── */
.arrow {
  animation: arrowPulse 3s ease-in-out infinite;
}
@keyframes arrowPulse {
  0%,100% { opacity: 0.9; transform: translateX(0); }
  50%      { opacity: 0.6; transform: translateX(3px); }
}

/* ── Animation de la ligne ── */
.logo-line {
  stroke-dasharray: 150;
  stroke-dashoffset: 150;
  animation: lineGrow 1.2s ease forwards;
}
@keyframes lineGrow {
  to { stroke-dashoffset: 0; }
}

/* ── Fade in du texte ── */
.logo-text-cabinet,
.logo-text-it,
.logo-sub {
  animation: fadeIn 0.8s ease forwards;
  opacity: 0;
}
.logo-text-it  { animation-delay: 0.3s; }
.logo-sub      { animation-delay: 0.5s; }

@keyframes fadeIn {
  to { opacity: 1; }
}

/* ── Version blanche pour header transparent ── */
.white-logo .logo-text-cabinet { fill: #ffffff; }
.white-logo .logo-icon-bg      { fill: rgba(255,255,255,0.15); }
</style>
