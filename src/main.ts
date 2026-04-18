import './style.css'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'

// Initialize Vercel Web Analytics
inject()

// Initialize Vercel Speed Insights
injectSpeedInsights()

interface Tool {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'soon';
  icon: string;
  url?: string;
}

const tools: Tool[] = [
  {
    id: 'lqa-reviewer',
    name: 'Unified LQA',
    description: 'Centralized linguistic quality assurance with automated error detection and reporting.',
    status: 'active',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    url: '/lqa'
  },
  {
    id: 'demo-card',
    name: 'Demo Interface',
    description: 'Interactive playground to test new features and workflow prototypes.',
    status: 'soon',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
  }
];

const renderApp = () => {
  const app = document.querySelector<HTMLDivElement>('#app')!
  
  app.innerHTML = `
    <header class="header">
      <div class="logo-container">
        <img src="/logo.png" alt="SJS Globalize" class="logo">
      </div>
    </header>

    <main class="main-container">
      <div class="portal-title-wrapper animate-title">
        <span class="portal-title">Internal Tool Portal</span>
      </div>

      <section class="hero animate-hero">
        <h1>Globalize <span>Operations</span></h1>
        <p>Your dedicated hub for SJS Globalize Translation, LQA, and enterprise localization workflows.</p>
      </section>

      <div id="cards" class="tool-grid">
        ${tools.map((tool, index) => `
          <${tool.url ? `a href="${tool.url}" target="_blank"` : 'div'} 
            class="tool-card ${tool.status === 'soon' ? 'coming-soon' : ''} fade-in" 
            style="animation-delay: ${0.4 + index * 0.1}s">
            <div class="badge ${tool.status === 'active' ? 'badge-active' : 'badge-soon'}">
              ${tool.status === 'active' ? 'Active' : 'Coming Soon'}
            </div>
            <div class="tool-icon">
              ${tool.icon}
            </div>
            <h2 class="card-title">${tool.name}</h2>
            <p class="card-description">${tool.description}</p>
          </${tool.url ? 'a' : 'div'}>
        `).join('')}
      </div>
      <div class="portal-help fade-in" style="animation-delay: 0.8s">
        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg> 
        Welcome! If you see a blank page, please ensure you <strong>Login from the LQA Grid Creator Tab</strong> first.</p>
      </div>

    </main>

    <footer class="footer">
      <p>&copy; ${new Date().getFullYear()} SJS Globalize. All rights reserved.</p>
    </footer>
  `

  // Interactive Glass Effect
  const cards = document.getElementById("cards");
  if (cards) {
    cards.onmousemove = e => {
      for(const card of document.getElementsByClassName("tool-card")) {
        const rect = (card as HTMLElement).getBoundingClientRect(),
              x = (e as MouseEvent).clientX - rect.left,
              y = (e as MouseEvent).clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      }
    }
  }
}

renderApp()
