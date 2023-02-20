class navbarEffect {
  constructor({ element, links }) {
    this.element = element;

    this.handleStateToggle = this.handleStateToggle.bind(this);
    this.defaultStates = this.defaultStates.bind(this);
    this.setProperty = this.setProperty.bind(this);
    this.init = this.init.bind(this);

    this.init();
  }

  handleStateToggle() {
    if (window.scrollY >= 64) {
      this.setProperty('background', '#fafafa');
      this.setProperty('color', 'var(--color)');
      this.setProperty('position', 'fixed');
      this.setProperty('top', '0');
    } else {
      this.defaultStates();
    }
  }

  defaultStates() {
    this.setProperty('background', 'none');
    this.setProperty('color', '#fafafa');
    this.setProperty('position', 'absolute');
    this.setProperty('top', '64px');
  }

  setProperty(p, v) {
    return this.element.style.setProperty(p, v);
  }

  init() {
    window.addEventListener('scroll', this.handleStateToggle);
  }
}

const navbar = new navbarEffect({ element: document.getElementById('nav') });
