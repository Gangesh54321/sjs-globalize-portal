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
  theme?: string;
}

const tools: Tool[] = [
  {
    id: 'lqa-reviewer',
    name: 'LQA Audit',
    description: 'Centralized linguistic quality assurance with automated error detection and reporting.',
    status: 'active',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    url: '/lqa',
    theme: 'theme-green'
  },
  {
    id: 'vms-portal',
    name: 'Localization VMS',
    description: 'Centralized vendor management system for managing linguist profiles, onboarding, purchase orders, invoices, and guest vendor mode.',
    status: 'active',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    url: 'https://vms.sjsglobalize.net/',
    theme: 'theme-blue'
  },
  {
    id: 'unesco-translator',
    name: 'UNESCO Translator',
    description: 'UNESCO Language Translator, powered by Meta and Hugging Face have come together to create an accessible, high-quality translation experience in 200 languages.',
    status: 'active',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    url: 'https://huggingface.co/spaces/UNESCO/nllb',
    theme: 'theme-blue'
  },
  {
    id: 'translation-cost-calc',
    name: 'Cost Calculator',
    description: 'Estimate and calculate budgets for multilingual translation projects with custom rates and currency support.',
    status: 'active',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>`,
    url: 'https://translationcostcalc.transtechhub.com/',
    theme: 'theme-gold'
  },
  {
    id: 'word-count-analysis',
    name: 'Word Count Analysis',
    description: 'Analyze documents and localization files to extract comprehensive word counts, character counts, and segment metrics.',
    status: 'active',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    url: 'https://wordcountanalysis.transtechhub.com/',
    theme: 'theme-purple'
  },
  {
    id: 'sdlxliff-converter',
    name: 'SDLXLIFF Converter',
    description: 'Convert standard Trados .sdlxliff translation files into reviewable formats like Excel and Word, and re-import seamlessly.',
    status: 'active',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17h10a2 2 0 0 0 2-2V5"/><path d="m8 21-4-4 4-4"/><path d="M20 7H10a2 2 0 0 0-2 2v10"/><path d="m16 3 4 4-4 4"/></svg>`,
    url: 'https://sdlxliffconverter.transtechhub.com/',
    theme: 'theme-rose'
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
          <p>Your dedicated hub for SJS Globalize localization, vendor management, and utility operations. Seamlessly run quality assurance scorecards, manage vendor profiles with purchase orders and invoicing, estimate translation project budgets, analyze file word counts, and convert SDLXLIFF files—all from a single dashboard.</p>
        </div>
        <div class="hero-image-container">
          <img src="/Translator-amico.svg" alt="Localization Operations Illustration" class="hero-image">
          <img src="/invoice_payment_illustration.png" alt="Invoice and Payment Operations Illustration" class="hero-image">
        </div>
      </section>

      <div id="cards" class="tool-grid">
        ${tools.map((tool, index) => `
          <${tool.url ? `a href="${tool.url}" ${tool.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}` : 'div'} 
            class="tool-card ${tool.theme || ''} ${tool.status === 'soon' ? 'coming-soon' : ''} fade-in" 
            style="animation-delay: ${0.4 + index * 0.1}s">
            <div class="badge ${index < 2 ? 'badge-internal' : 'badge-external'}">
              ${index < 2 ? 'Internal Site' : 'Other Site'}
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
