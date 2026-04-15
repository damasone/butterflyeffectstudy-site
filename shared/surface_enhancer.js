(function () {
  function slugify(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80);
  }

  function ensureProgressBar() {
    const shell = document.createElement("div");
    shell.className = "page-progress";
    const fill = document.createElement("div");
    fill.className = "page-progress-fill";
    shell.appendChild(fill);
    document.body.appendChild(shell);

    function update() {
      const root = document.documentElement;
      const max = Math.max(root.scrollHeight - window.innerHeight, 1);
      const ratio = Math.max(0, Math.min(1, window.scrollY / max));
      fill.style.width = `${ratio * 100}%`;
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  function buildPageMap() {
    const main = document.querySelector("main");
    if (!main) return;
    const hero = main.querySelector(".hero, .page-intro");
    const sections = Array.from(main.querySelectorAll(":scope > section"))
      .filter((section) => !section.classList.contains("hero"))
      .map((section, index) => {
        const heading = section.querySelector(".section-head h2, .section-header h2, h2");
        if (!heading) return null;
        if (!section.id) {
          section.id = `section-${slugify(heading.textContent) || index + 1}`;
        }
        return {
          section,
          id: section.id,
          label: heading.textContent.trim(),
        };
      })
      .filter(Boolean);

    if (sections.length < 2) return;

    const shell = document.createElement("nav");
    shell.className = "page-map-shell";
    shell.setAttribute("aria-label", "On this page");
    shell.innerHTML = `
      <div class="page-map-label">On this page</div>
      <div class="page-map-links"></div>
    `;
    const linksWrap = shell.querySelector(".page-map-links");

    const links = sections.map((item) => {
      const link = document.createElement("a");
      link.className = "page-map-link";
      link.href = `#${item.id}`;
      link.textContent = item.label;
      linksWrap.appendChild(link);
      return { ...item, link };
    });

    if (hero) {
      hero.insertAdjacentElement("afterend", shell);
    } else {
      main.insertAdjacentElement("afterbegin", shell);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        links.forEach(({ link, id }) => {
          link.classList.toggle("is-active", visible.target.id === id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.2, 0.5, 0.8] }
    );

    links.forEach(({ section }) => observer.observe(section));
  }

  function enhanceTabs() {
    document.querySelectorAll("[data-tabs]").forEach((root) => {
      const buttons = Array.from(root.querySelectorAll("[data-tab-target]"));
      const panels = Array.from(root.querySelectorAll("[data-tab-panel]"));
      if (!buttons.length || !panels.length) return;

      function activate(target) {
        buttons.forEach((button) => {
          const active = button.getAttribute("data-tab-target") === target;
          button.classList.toggle("is-active", active);
          button.setAttribute("aria-selected", active ? "true" : "false");
        });
        panels.forEach((panel) => {
          const active = panel.getAttribute("data-tab-panel") === target;
          panel.classList.toggle("is-active", active);
          panel.hidden = !active;
        });
      }

      const initial = buttons.find((button) => button.classList.contains("is-active")) || buttons[0];
      activate(initial.getAttribute("data-tab-target"));

      buttons.forEach((button) => {
        button.addEventListener("click", () => activate(button.getAttribute("data-tab-target")));
      });
    });
  }

  function enhanceFilters() {
    document.querySelectorAll("[data-filter-group]").forEach((root) => {
      const buttons = Array.from(root.querySelectorAll("[data-filter-value]"));
      const items = Array.from(root.querySelectorAll("[data-filter-tags]"));
      if (!buttons.length || !items.length) return;

      function activate(value) {
        buttons.forEach((button) => {
          const active = button.getAttribute("data-filter-value") === value;
          button.classList.toggle("is-active", active);
          button.setAttribute("aria-pressed", active ? "true" : "false");
        });
        items.forEach((item) => {
          const tags = String(item.getAttribute("data-filter-tags") || "")
            .split(/\s+/)
            .filter(Boolean);
          item.hidden = !(value === "all" || tags.includes(value));
        });
      }

      const initial = buttons.find((button) => button.classList.contains("is-active")) || buttons[0];
      activate(initial.getAttribute("data-filter-value"));

      buttons.forEach((button) => {
        button.addEventListener("click", () => activate(button.getAttribute("data-filter-value")));
      });
    });
  }

  function enhanceCollapsibleLists() {
    const candidates = document.querySelectorAll("ul.view-list, ul.clean, ul.list");
    candidates.forEach((list) => {
      const items = Array.from(list.children).filter((child) => child.tagName === "LI");
      if (items.length <= 5) return;
      const container = list.closest(".card, .panel, .validation-card, .page-card, .mini-card, .hero-card, .summary-stat, .stat");
      if (!container || container.querySelector(".list-toggle")) return;
      list.classList.add("collapsible-list", "is-collapsed");
      container.classList.add("has-collapsible-list");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "list-toggle";
      button.textContent = `Show ${items.length - 5} more`;
      button.addEventListener("click", () => {
        const expanded = !list.classList.contains("is-collapsed");
        list.classList.toggle("is-collapsed", expanded);
        button.textContent = expanded ? `Show ${items.length - 5} more` : "Show less";
      });
      list.insertAdjacentElement("afterend", button);
    });
  }

  function init() {
    document.body.classList.add("has-surface-enhancer");
    ensureProgressBar();
    buildPageMap();
    enhanceTabs();
    enhanceFilters();
    enhanceCollapsibleLists();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
