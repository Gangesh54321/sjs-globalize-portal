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
    name: 'LQA Audit',
    description: 'Centralized linguistic quality assurance with automated error detection and reporting.',
    status: 'active',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    url: '/lqa'
  },
  {
    id: 'vms-portal',
    name: 'Localization VMS',
    description: 'Centralized vendor management system for managing linguist profiles, onboarding, and project assignments.',
    status: 'active',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    url: 'https://vms.sjsglobalize.net/'
  }
];
let clockIntervalId: any = null;

const startClocks = () => {
  if (clockIntervalId) {
    clearInterval(clockIntervalId);
  }
  const updateTimes = () => {
    const now = new Date();
    
    // India
    const dateIn = document.getElementById('date-in');
    if (dateIn) {
      dateIn.textContent = now.toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata', month: 'short', day: 'numeric' });
    }
    const clockIn = document.getElementById('clock-in');
    if (clockIn) {
      clockIn.textContent = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true });
    }

    // United Kingdom
    const dateUk = document.getElementById('date-uk');
    if (dateUk) {
      dateUk.textContent = now.toLocaleDateString('en-US', { timeZone: 'Europe/London', month: 'short', day: 'numeric' });
    }
    const clockUk = document.getElementById('clock-uk');
    if (clockUk) {
      clockUk.textContent = now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: true });
    }

    // United States
    const dateUs = document.getElementById('date-us');
    if (dateUs) {
      dateUs.textContent = now.toLocaleDateString('en-US', { timeZone: 'America/New_York', month: 'short', day: 'numeric' });
    }
    const clockUs = document.getElementById('clock-us');
    if (clockUs) {
      clockUs.textContent = now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: true });
    }

    // Japan
    const dateJp = document.getElementById('date-jp');
    if (dateJp) {
      dateJp.textContent = now.toLocaleDateString('en-US', { timeZone: 'Asia/Tokyo', month: 'short', day: 'numeric' });
    }
    const clockJp = document.getElementById('clock-jp');
    if (clockJp) {
      clockJp.textContent = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', hour12: true });
    }
  };
  
  updateTimes();
  clockIntervalId = setInterval(updateTimes, 1000);
};

const renderApp = () => {
  const app = document.querySelector<HTMLDivElement>('#app')!
  const path = window.location.pathname;

  if (path === '/lqa') {
    app.innerHTML = `
      <header class="header">
        <div class="logo-container">
          <a href="/"><img src="/logo.png" alt="SJS Globalize" class="logo"></a>
        </div>
        <span class="welcome-text">SJS Globalize | Internal Tool Portal</span>
        <div class="timezone-clocks">
          <div class="clock-item">
            <span class="clock-flag">🇮🇳</span>
            <div class="clock-info">
              <span class="clock-label">India</span>
              <span class="clock-date" id="date-in">-- --</span>
            </div>
            <span class="clock-time" id="clock-in">--:-- --</span>
          </div>
          <div class="clock-item">
            <span class="clock-flag">🇬🇧</span>
            <div class="clock-info">
              <span class="clock-label">United Kingdom</span>
              <span class="clock-date" id="date-uk">-- --</span>
            </div>
            <span class="clock-time" id="clock-uk">--:-- --</span>
          </div>
          <div class="clock-item">
            <span class="clock-flag">🇺🇸</span>
            <div class="clock-info">
              <span class="clock-label">United States</span>
              <span class="clock-date" id="date-us">-- --</span>
            </div>
            <span class="clock-time" id="clock-us">--:-- --</span>
          </div>
          <div class="clock-item">
            <span class="clock-flag">🇯🇵</span>
            <div class="clock-info">
              <span class="clock-label">Japan</span>
              <span class="clock-date" id="date-jp">-- --</span>
            </div>
            <span class="clock-time" id="clock-jp">--:-- --</span>
          </div>
        </div>
      </header>
      <div class="iframe-view">
        <div class="message-bar">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          Welcome! Please Login from the LQA Grid Creator Tab first with Admin Credentials.
        </div>
        <div class="iframe-container">
          <iframe src="https://sjsloblizelqa.vercel.app/" title="LQA Audit"></iframe>
        </div>
      </div>
    `;
    startClocks();
    return;
  }

  app.innerHTML = `
    <header class="header">
      <div class="logo-container">
        <img src="/logo.png" alt="SJS Globalize" class="logo">
      </div>
      <span class="welcome-text">SJS Globalize | Internal Tool Portal</span>
      <div class="timezone-clocks">
        <div class="clock-item">
          <span class="clock-flag">🇮🇳</span>
          <div class="clock-info">
            <span class="clock-label">India</span>
            <span class="clock-date" id="date-in">-- --</span>
          </div>
          <span class="clock-time" id="clock-in">--:-- --</span>
        </div>
        <div class="clock-item">
          <span class="clock-flag">🇬🇧</span>
          <div class="clock-info">
            <span class="clock-label">United Kingdom</span>
            <span class="clock-date" id="date-uk">-- --</span>
          </div>
          <span class="clock-time" id="clock-uk">--:-- --</span>
        </div>
        <div class="clock-item">
          <span class="clock-flag">🇺🇸</span>
          <div class="clock-info">
            <span class="clock-label">United States</span>
            <span class="clock-date" id="date-us">-- --</span>
          </div>
          <span class="clock-time" id="clock-us">--:-- --</span>
        </div>
        <div class="clock-item">
          <span class="clock-flag">🇯🇵</span>
          <div class="clock-info">
            <span class="clock-label">Japan</span>
            <span class="clock-date" id="date-jp">-- --</span>
          </div>
          <span class="clock-time" id="clock-jp">--:-- --</span>
        </div>
      </div>
    </header>

    <main class="main-container">

      <section class="hero animate-hero">
        <div class="hero-content">
          <h1>Globalize <span>Operations</span></h1>
          <p>Your dedicated hub for SJS Globalize Translation, LQA, and enterprise localization workflows. Seamlessly connect to our core modules, manage translation memories, monitor linguist performance, and run advanced quality assurance scorecards—all from a single, unified operations dashboard.</p>
        </div>
        <div class="hero-image-container">
          <img src="/Translator-amico.svg" alt="Localization Operations Illustration" class="hero-image">
        </div>
      </section>

      <div id="cards" class="tool-grid">
        ${tools.map((tool, index) => `
          <${tool.url ? `a href="${tool.url}" ${tool.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}` : 'div'} 
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

    </main>

    <footer class="footer">
      <p>&copy; ${new Date().getFullYear()} SJS Globalize. All rights reserved.</p>
    </footer>
  `

  // Interactive Glass Effect
  const cards = document.getElementById("cards");
  if (cards) {
    cards.onmousemove = e => {
      for (const card of document.getElementsByClassName("tool-card")) {
        const rect = (card as HTMLElement).getBoundingClientRect(),
          x = (e as MouseEvent).clientX - rect.left,
          y = (e as MouseEvent).clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      }
    }
  }
  
  startClocks();
}

renderApp()
