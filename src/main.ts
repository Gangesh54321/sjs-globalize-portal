import './style.css'

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
    description: 'Centralized linguistic quality assurance with automated error detection.',
    status: 'active',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    url: '/lqa'
  },
  {
    id: 'demo-card',
    name: 'Demo Interface',
    description: 'Interactive playground to test new features and workflow prototypes.',
    status: 'soon',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
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
      <div class="title-section">
        <h2 class="portal-title">Internal Tool Portal</h2>
      </div>

      <section class="hero">
        <h1>Globalize <span>Operations</span></h1>
        <p>Your dedicated internal portal for SJS Globalize Translation, LQA, and other enterprise localization tools.</p>
      </section>

      <div class="tool-grid">
        ${tools.map((tool, index) => `
          <${tool.url ? `a href="${tool.url}" target="_blank"` : 'div'} class="tool-card ${tool.status === 'soon' ? 'coming-soon' : ''} fade-in" style="animation-delay: ${index * 0.1}s">
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

    <footer style="margin-top: auto; padding: 3rem 5%; border-top: 1px solid var(--border-color); text-align: center; color: var(--text-secondary); font-size: 0.9rem;">
      &copy; ${new Date().getFullYear()} SJS Globalize. All rights reserved.
    </footer>
  `
}

renderApp()
