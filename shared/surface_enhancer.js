(function () {
  function classifySurface() {
    const path = window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";
    const layerRoutes = ["/nightly", "/night_route_cards", "/events", "/event_model_cards", "/daily", "/daily_challenge_cards", "/nonstress-daily", "/nonstress_daily_cards", "/nonstress-families", "/nonstress_family_cards"];
    if (layerRoutes.includes(path)) document.body.classList.add("be-layer-surface");
    if (path.startsWith("/institution") || path.startsWith("/institution_")) document.body.classList.add("be-dossier");
    if (path.startsWith("/participant-layer/examples") || path.startsWith("/participant_facing")) document.body.classList.add("be-report-surface");
    if (["/about", "/contact", "/privacy", "/terms", "/research-scope"].includes(path)) document.body.classList.add("be-document-surface");
    if (path.startsWith("/public_research_surface")) document.body.classList.add("be-legacy-surface");
    if (path === "/") document.body.classList.add("be-intro-surface");
    if (path.includes("print") || document.title.toLowerCase().includes("print")) document.body.classList.add("be-print-surface");
  }

  function enhanceNavigation() {
    if (document.querySelector('script[src*="editorial_reframe"]')) return;
    const topbar = document.querySelector("body > .topbar, .page-shell > .topbar, header.topbar");
    if (!topbar || topbar.querySelector(".surface-menu-toggle")) return;
    const links = topbar.querySelector(".nav-links") || topbar.querySelector(":scope > .nav") || topbar.querySelector(".topbar-inner > .nav");
    if (!links || links.querySelectorAll("a").length < 3) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "surface-menu-toggle";
    button.setAttribute("aria-label", "Open navigation");
    button.setAttribute("aria-expanded", "false");
    button.textContent = "Menu";
    links.classList.add("surface-menu-links");
    links.parentNode.insertBefore(button, links);
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      button.textContent = open ? "Close" : "Menu";
      links.classList.toggle("is-open", open);
    });
  }

  function enhanceResultRegister() {
    if (!document.body.classList.contains("be-layer-surface")) return;
    const grid = document.querySelector("main > .grid");
    if (!grid || grid.dataset.register === "true") return;
    const cards = Array.from(grid.querySelectorAll(":scope > .card"));
    if (!cards.length) return;
    grid.dataset.register = "true";

    const toolbar = document.createElement("div");
    toolbar.className = "be-result-toolbar";
    toolbar.innerHTML = '<label><span class="sr-only">Search results</span><input type="search" placeholder="Search route, cohort, or target"></label><label><span class="sr-only">Filter by status</span><select><option value="all">All statuses</option></select></label><span class="be-result-count"></span>';
    grid.parentNode.insertBefore(toolbar, grid);
    const search = toolbar.querySelector("input");
    const select = toolbar.querySelector("select");
    const count = toolbar.querySelector(".be-result-count");
    const statuses = new Set();

    cards.forEach((card, index) => {
      const head = card.querySelector(":scope > .card-head");
      if (!head) return;
      const firstChip = head.querySelector(".head-chips .chip");
      const status = firstChip ? firstChip.textContent.trim().toLowerCase() : "unclassified";
      statuses.add(status);
      card.dataset.resultStatus = status;
      card.dataset.resultText = card.textContent.toLowerCase();

      const metrics = [];
      card.querySelectorAll("tr").forEach((row) => {
        const cells = row.querySelectorAll("td");
        if (cells.length < 2) return;
        const key = cells[0].textContent.trim().toLowerCase();
        if (/^(heldout_r2|r2|mean_r2|coverage_pct|heldout_mae)$/.test(key) && metrics.length < 3) {
          metrics.push([key.replace("heldout_", "").replace("_pct", " %").replaceAll("_", " "), cells[1].textContent.trim()]);
        }
      });
      if (metrics.length) {
        const metricWrap = document.createElement("div");
        metricWrap.className = "be-key-metrics";
        metricWrap.innerHTML = metrics.map((metric) => '<div class="be-key-metric"><span>' + metric[0] + '</span><strong>' + metric[1] + '</strong></div>').join("");
        head.appendChild(metricWrap);
      }

      const detail = document.createElement("div");
      detail.className = "be-result-detail";
      detail.id = "result-detail-" + index;
      detail.hidden = true;
      Array.from(card.children).filter((child) => child !== head).forEach((child) => detail.appendChild(child));
      card.appendChild(detail);

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "be-result-toggle";
      toggle.setAttribute("aria-label", "Inspect result details");
      toggle.setAttribute("aria-controls", detail.id);
      toggle.setAttribute("aria-expanded", "false");
      head.appendChild(toggle);
      toggle.addEventListener("click", () => {
        const open = toggle.getAttribute("aria-expanded") !== "true";
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close result details" : "Inspect result details");
        detail.hidden = !open;
      });
    });

    Array.from(statuses).sort().forEach((status) => {
      const option = document.createElement("option");
      option.value = status;
      option.textContent = status.charAt(0).toUpperCase() + status.slice(1);
      select.appendChild(option);
    });

    function filter() {
      const query = search.value.trim().toLowerCase();
      const status = select.value;
      let visible = 0;
      cards.forEach((card) => {
        const show = (!query || card.dataset.resultText.includes(query)) && (status === "all" || card.dataset.resultStatus === status);
        card.hidden = !show;
        if (show) visible += 1;
      });
      count.textContent = visible + " of " + cards.length + " results";
    }
    search.addEventListener("input", filter);
    select.addEventListener("change", filter);
    filter();
  }
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
    classifySurface();
    if (!document.body.classList.contains("be-print-surface")) ensureProgressBar();
    enhanceNavigation();
    enhanceTabs();
    enhanceFilters();
    enhanceCollapsibleLists();
    enhanceResultRegister();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
