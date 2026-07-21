(function () {
  "use strict";

  var path = window.location.pathname.replace(/\/+$/, "") || "/";
  var page = pageFromPath(path);
  var body = document.body;

  body.classList.add("be-editorial", "page-" + page);
  if (page === "index") {
    var legacyShell = document.querySelector(".page-shell");
    if (legacyShell) legacyShell.remove();
    return;
  }
  if (path.indexOf("/study/check-in") === 0 || path.indexOf("/study/admin") === 0) {
    body.classList.add("be-workspace");
  } else {
    body.classList.add("be-public");
  }

  setupNavigation();
  if (body.classList.contains("be-public")) {
    setupPublicPage(page);
    setupReadingLayers(page);
  }
  if (page === "study-checkin") setupProgressiveCheckin();
  if (page === "study-checkin") setupParticipantDashboard();
  if (page === "study-admin") cleanAdminCopy();

  function pageFromPath(value) {
    if (value.indexOf("/study/check-in") === 0) return "study-checkin";
    if (value.indexOf("/study/admin") === 0) return "study-admin";
    if (value.indexOf("/study/participant-information") === 0) return "participant-information";
    if (value === "/") return "index";
    return value.split("/").filter(Boolean).join("-") || "index";
  }

  function setupNavigation() {
    var nav = document.querySelector(".topbar, header .nav");
    if (!nav) return;
    var links;
    if (nav.matches("header.topbar") && nav.querySelector(":scope > .topbar-inner > .nav")) {
      nav = nav.querySelector(":scope > .topbar-inner");
      links = nav.querySelector(":scope > .nav");
    }
    links = links || nav.querySelector(".nav-links") || Array.prototype.find.call(nav.children, function (child) {
      return child.querySelectorAll && child.querySelectorAll("a").length > 2;
    });
    if (!links || links.querySelectorAll("a").length < 3 || nav.querySelector(".be-nav-toggle")) return;

    links.id = links.id || "be-primary-navigation";
    var button = document.createElement("button");
    button.className = "be-nav-toggle";
    button.type = "button";
    button.setAttribute("aria-label", "Open navigation");
    button.setAttribute("aria-controls", links.id);
    button.setAttribute("aria-expanded", "false");
    button.innerHTML = "<span></span>";
    nav.insertBefore(button, links);

    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      links.classList.toggle("be-nav-open", open);
    });
    links.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        button.setAttribute("aria-expanded", "false");
        links.classList.remove("be-nav-open");
      }
    });
  }

  function setupPublicPage(name) {
    var lead = document.querySelector("main > .page-intro, main > .hero:first-child");
    if (!lead || lead.querySelector(".atlas-plate")) return;
    var visual = visualFor(name);
    if (!visual) return;

    var existingAside = lead.querySelector(":scope > aside");
    if (existingAside) existingAside.classList.add("be-original-lead");
    var figure = document.createElement("figure");
    figure.className = "atlas-plate atlas-plate-" + name;
    figure.setAttribute("aria-label", visual.label);
    figure.innerHTML = visual.html;

    if (existingAside) {
      lead.insertBefore(figure, existingAside);
      existingAside.hidden = true;
    } else {
      lead.appendChild(figure);
    }

    reduceMetaCopy(name);
  }

  function visualFor(name) {
    var caption = function (index, title, state) {
      return '<figcaption><span>' + index + '</span><strong>' + title + '</strong><span>' + state + '</span></figcaption>';
    };
    if (name === "overview") {
      return {
        label: "Current route evidence register",
        html: caption("CURRENT REGISTER", "Implemented routes with held-out evidence", "Metrics are route-specific") +
          '<div class="atlas-ledger atlas-ledger-routes"><div class="atlas-ledger-row"><strong>Night · fatigue D0</strong><span>Held-out R² 0.4350</span><em>accepted</em></div><div class="atlas-ledger-row"><strong>Event · portable stress</strong><span>R² 0.3164</span><em>accepted</em></div><div class="atlas-ledger-row"><strong>Daily · anxiety D0</strong><span>R² 0.1685</span><em>accepted</em></div><div class="atlas-ledger-row"><strong>Non-stress · depression D0</strong><span>R² 0.3454</span><em>accepted</em></div><div class="atlas-ledger-row"><strong>Portable non-stress · anxiety</strong><span>Mean R² 0.0202</span><em>limited</em></div></div><p class="atlas-source-note">Held-out metrics describe different targets and cohorts. They are evidence records, not a cross-route ranking.</p>'
      };
    }
    if (name === "system") {
      return { label: "Interpretation engine route", html: caption("ENGINE MAP", "Separated analytical routes", "Quality before output") + flow([
        ["01", "Observe", "Sleep, physiology, movement, context, self report"],
        ["02", "Qualify", "Coverage, timing, provenance, dependency"],
        ["03", "Route", "Night, event, daily, or non-stress layer"],
        ["04", "Review", "Evidence, uncertainty, and claim boundary"]
      ]) };
    }
    if (name === "pitch") {
      return { label: "Scientific proposition", html: caption("SCIENTIFIC CASE", "Question to collaboration", "Current posture") + flow([
        ["QUESTION", "Can subtle change matter?", "Repeated within-person patterns"],
        ["METHOD", "Test the route", "Transparent quality and validation"],
        ["RETURN", "Make it reviewable", "No isolated consumer score"],
        ["NEXT", "Validate prospectively", "Academic methods and supervision"]
      ]) };
    }
    if (name === "built") {
      return { label: "Current build status", html: caption("BUILD REGISTER", "Implemented analytical stack", "Versioned and reviewable") + '<div class="atlas-ledger"><div class="atlas-ledger-row"><strong>Ingestion contracts</strong><span>schema + provenance</span><em>implemented</em></div><div class="atlas-ledger-row"><strong>Quality gates</strong><span>coverage + missingness</span><em>implemented</em></div><div class="atlas-ledger-row"><strong>Analytical routes</strong><span>night + event + daily</span><em>implemented</em></div><div class="atlas-ledger-row"><strong>Route audit</strong><span>stability + dependency</span><em>implemented</em></div><div class="atlas-ledger-row"><strong>Research return</strong><span>participant + professional</span><em>specified</em></div></div>' };
    }
    if (name === "validation") {
      return { label: "Validation matrix", html: caption("VALIDATION MATRIX", "Different claims, different tests", "Status before ambition") + matrix() };
    }
    if (name === "evidence") {
      return { label: "Evidence ledger", html: caption("EVIDENCE LEDGER", "Every claim keeps its source", "Traceable limits") + '<div class="atlas-ledger"><div class="atlas-ledger-row"><strong>Within-person change</strong><span>Longitudinal route</span><em>supported</em></div><div class="atlas-ledger-row"><strong>Cross-cohort transport</strong><span>Portable route</span><em>limited</em></div><div class="atlas-ledger-row"><strong>Diagnostic readiness</strong><span>Future validation</span><em>reserved</em></div><div class="atlas-ledger-row"><strong>Participant return</strong><span>Governed review</span><em>specified</em></div></div>' };
    }
    if (name === "study") {
      return { label: "Participant study timeline", html: caption("STUDY PATH", "One participant, aligned dates", "Invitation only") + timeline([
        ["01", "Consent", "Versioned information and explicit agreement"],
        ["02", "Daily follow-up", "Short repeated state and context labels"],
        ["03", "Data alignment", "Sleep and physiology joined by date"],
        ["04", "Governed return", "Quality, patterns, and limits reviewed"]
      ]) };
    }
    if (name === "participant-layer" || name === "participant") {
      return { label: "Participant return contract", html: caption("RETURN CONTRACT", "One core, three audiences", "No single false score") + flow([
        ["CORE", "Shared evidence", "The same quality-controlled payload"],
        ["PERSON", "Clear return", "Patterns and limits in plain language"],
        ["PRO", "Structured review", "Methods, context, and uncertainty"],
        ["GOV", "Auditable record", "Provenance and release controls"]
      ]) };
    }
    if (name === "views") {
      return { label: "Analytical surface index", html: caption("SURFACE INDEX", "Open by scientific question", "Not by file tree") + flow([
        ["NIGHT", "Overnight route", "Within-cohort nightly signal"],
        ["EVENT", "Acute change", "Stress-linked event windows"],
        ["DAILY", "Temporal route", "Day-to-day challenge models"],
        ["RETURN", "Review surfaces", "Participant and professional outputs"]
      ]) };
    }
    return null;
  }

  function flow(items) {
    return '<div class="atlas-flow">' + items.map(function (item) {
      return '<div><small>' + item[0] + '</small><strong>' + item[1] + '</strong><span>' + item[2] + '</span></div>';
    }).join("") + '</div>';
  }

  function timeline(items) {
    return '<div class="atlas-timeline">' + items.map(function (item) {
      return '<div class="atlas-moment" data-step="' + item[0] + '"><strong>' + item[1] + '</strong><span>' + item[2] + '</span></div>';
    }).join("") + '</div>';
  }

  function matrix() {
    var rows = [
      ["Quality gate", "on", "on", "on", "on"],
      ["Held-out test", "on", "on", "watch", "on"],
      ["Transport", "watch", "on", "watch", "watch"],
      ["Claim ready", "on", "on", "watch", "watch"]
    ];
    var headers = ["", "Night", "Event", "Daily", "Portable"];
    return '<div class="atlas-matrix">' + headers.map(function (value, index) { return '<div class="atlas-cell ' + (index === 0 ? 'label' : '') + '">' + value + '</div>'; }).join("") + rows.map(function (row) {
      return row.map(function (value, index) { return '<div class="atlas-cell ' + (index === 0 ? 'label' : value) + '">' + (index === 0 ? value : '') + '</div>'; }).join("");
    }).join("") + '</div>';
  }

  function reduceMetaCopy(name) {
    var replacements = {
      overview: [
        ["The project now has a clearer visual language for signal, quality, uncertainty, and review.", "How a repeated observation becomes a reviewable signal."],
        ["Each visual element has a job: separate what is observed, show where quality constrains interpretation, and keep the output tied to evidence instead of turning it into a single score.", "Observed streams remain separate until quality, timing, and provenance are good enough to interpret."],
        ["The project is easier to understand when it is read as a flow, not as a stack of technical labels.", "From daily life to a bounded research output."]
      ],
      built: [["The public face has to explain the work, not just announce it.", "What is already built."]],
      validation: [["Validation has to stay explicit, layered, and scoped.", "Validation by claim, cohort, and transport."]],
      evidence: [["Evidence has to stay attached to the claim it is supporting.", "Every output links to its evidence and limits."]],
      system: [["The system is an interpretation engine, not a single model.", "One engine. Distinct analytical routes."]]
    };
    (replacements[name] || []).forEach(function (pair) {
      Array.prototype.forEach.call(document.querySelectorAll("h1, h2, p"), function (node) {
        if (node.textContent.trim() === pair[0]) node.textContent = pair[1];
      });
    });

    if (name === "overview") {
      var heroHeading = document.querySelector("main > .hero:first-child h2");
      if (heroHeading) {
        var h1 = document.createElement("h1");
        h1.innerHTML = heroHeading.innerHTML;
        heroHeading.replaceWith(h1);
      }
    }
  }

  function setupReadingLayers(name) {
    if (["views", "study", "participant-information"].indexOf(name) !== -1) return;
    var main = document.querySelector("main");
    if (!main) return;
    var sections = Array.prototype.slice.call(main.querySelectorAll(":scope > section.section, :scope > div > section.section"));
    if (sections.length < 4) return;
    var deep = sections.slice(2);
    deep.forEach(function (section) {
      section.classList.add("be-deep-section");
      section.hidden = true;
    });
    var gate = document.createElement("div");
    gate.className = "be-depth-gate";
    gate.innerHTML = '<button type="button" aria-expanded="false">Open the complete technical register</button>';
    deep[0].parentNode.insertBefore(gate, deep[0]);
    gate.querySelector("button").addEventListener("click", function (event) {
      var open = event.currentTarget.getAttribute("aria-expanded") !== "true";
      event.currentTarget.setAttribute("aria-expanded", String(open));
      event.currentTarget.firstChild.nodeValue = open ? "Close the technical register" : "Open the complete technical register";
      deep.forEach(function (section) { section.hidden = !open; });
    });
  }

  function setupProgressiveCheckin() {
    var form = document.getElementById("checkin-form");
    if (!form || form.dataset.progressive === "true") return;
    var grid = form.querySelector(":scope > .field-grid");
    var binaryWrap = grid && grid.nextElementSibling;
    var actions = form.querySelector(":scope > .actions");
    var status = document.getElementById("form-status");
    if (!grid || !binaryWrap || !actions) return;
    form.dataset.progressive = "true";

    var definitions = [
      { title: "Night and daily state", note: "Rate the night and how the day felt.", ids: ["participant_uid", "report_date_local", "sleep_quality_0_10", "stress_0_10", "anxiety_0_10", "depression_0_10", "mood_valence_0_10", "fatigue_0_10", "energy_0_10"] },
      { title: "Cognition and body", note: "Add subjective cognitive, physical, and affect markers.", ids: ["mental_clarity_0_10", "concentration_0_10", "memory_confidence_0_10", "brain_fog_0_10", "cognitive_fatigue_0_10", "pain_0_10", "muscle_tension_0_10", "positive_affect_0_10", "negative_affect_0_10"] },
      { title: "Context", note: "Record quantities and events that may explain the day.", ids: ["caffeine_mg", "alcohol_units", "nap_minutes", "exercise_minutes", "menstrual_cycle_phase", "free_text_note"] },
      { title: "Review and save", note: "Check the date and completion before saving.", ids: [] }
    ];

    var progress = document.createElement("div");
    progress.className = "be-form-progress";
    progress.setAttribute("role", "tablist");
    var steps = [];
    definitions.forEach(function (definition, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.setAttribute("role", "tab");
      button.innerHTML = "<span>0" + (index + 1) + "</span>" + definition.title;
      progress.appendChild(button);

      var step = document.createElement("section");
      step.className = "be-form-step";
      step.setAttribute("role", "tabpanel");
      step.hidden = index !== 0;
      step.innerHTML = '<div class="be-form-step-title"><strong>' + definition.title + '</strong><span>' + definition.note + '</span></div><div class="field-grid"></div>';
      form.insertBefore(step, actions);
      steps.push(step);

      definition.ids.forEach(function (id) {
        var field = document.getElementById(id);
        if (field && field.closest(".field")) {
          if (id === "participant_uid") field.closest(".field").classList.add("be-internal-field");
          step.querySelector(".field-grid").appendChild(field.closest(".field"));
        }
      });
      if (index === 1) {
        var subsection = grid.querySelector(".form-subsection");
        if (subsection) step.querySelector(".field-grid").insertBefore(subsection, step.querySelector(".field-grid").firstChild);
      }
      if (index === 2) step.appendChild(binaryWrap);
      if (index === 3) {
        var review = document.createElement("div");
        review.className = "be-form-review";
        review.innerHTML = '<div><strong>Check-in date</strong><span data-review="date">-</span></div><div><strong>Scales completed</strong><span data-review="scales">0 of 16</span></div><div><strong>Context flags</strong><span data-review="flags">No reported events</span></div><div><strong>Optional note</strong><span data-review="note">Not added</span></div>';
        step.appendChild(review);
        step.appendChild(actions);
        if (status) step.appendChild(status);
      }

      var nav = document.createElement("div");
      nav.className = "be-form-nav";
      if (index > 0) nav.innerHTML += '<button class="mini-button" type="button" data-step-back>Back</button>';
      else nav.innerHTML += '<span></span>';
      if (index < definitions.length - 1) nav.innerHTML += '<button class="button" type="button" data-step-next>Continue</button>';
      step.appendChild(nav);
    });

    grid.remove();
    form.insertBefore(progress, form.firstChild);
    var current = 0;

    function showStep(index) {
      current = Math.max(0, Math.min(index, steps.length - 1));
      steps.forEach(function (step, stepIndex) { step.hidden = stepIndex !== current; });
      Array.prototype.forEach.call(progress.children, function (button, buttonIndex) {
        button.classList.toggle("is-active", buttonIndex === current);
        button.setAttribute("aria-selected", String(buttonIndex === current));
      });
      if (current === 3) updateReview();
      form.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    }

    progress.addEventListener("click", function (event) {
      var button = event.target.closest("button");
      if (button) showStep(Array.prototype.indexOf.call(progress.children, button));
    });
    form.addEventListener("click", function (event) {
      if (event.target.closest("[data-step-next]")) showStep(current + 1);
      if (event.target.closest("[data-step-back]")) showStep(current - 1);
    });

    function updateReview() {
      var date = document.getElementById("report_date_local");
      var ranges = Array.prototype.slice.call(form.querySelectorAll('input[type="range"]'));
      var answered = ranges.filter(function (range) { return range.dataset.touched === "true" || range.getAttribute("aria-valuetext") !== "Not answered"; }).length;
      var yesFlags = form.querySelectorAll('.tri-choice-group input[value="1"]:checked').length;
      var note = document.getElementById("free_text_note");
      setReview("date", date && date.value ? date.value : "Not selected");
      setReview("scales", answered + " of " + ranges.length);
      setReview("flags", yesFlags ? yesFlags + " reported" : "No reported events");
      setReview("note", note && note.value.trim() ? "Added" : "Not added");
    }
    function setReview(key, value) {
      var target = form.querySelector('[data-review="' + key + '"]');
      if (target) target.textContent = value;
    }
    showStep(0);
  }

  function setupParticipantDashboard() {
    var dashboard = document.getElementById("participant-dashboard");
    if (!dashboard || dashboard.dataset.workspaceTabs === "true") return;
    var today = dashboard.querySelector(".dashboard-main");
    var progress = document.getElementById("progress");
    var adherence = document.getElementById("adherence");
    var latest = document.getElementById("latest-report");
    var history = document.getElementById("history");
    var events = document.getElementById("event-log");
    var reportsHeading = Array.prototype.find.call(dashboard.querySelectorAll("h2"), function (heading) {
      return heading.textContent.trim() === "Open generated reviews";
    });
    var reports = reportsHeading && reportsHeading.closest(".section-card");
    if (!today || !progress || !history || !events || !reports) return;
    dashboard.dataset.workspaceTabs = "true";

    var tabs = document.createElement("div");
    tabs.className = "be-workspace-tabs";
    tabs.setAttribute("role", "tablist");
    var definitions = [
      { key: "today", label: "Today", nodes: [today] },
      { key: "progress", label: "Progress", nodes: [progress, adherence, latest] },
      { key: "history", label: "History", nodes: [history] },
      { key: "changes", label: "Change log", nodes: [events] },
      { key: "reports", label: "Reports", nodes: [reports] }
    ];
    var anchor = dashboard.querySelector(".dashboard-greeting-row");
    if (anchor) anchor.after(tabs);
    else dashboard.prepend(tabs);

    definitions.forEach(function (definition, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.setAttribute("role", "tab");
      button.dataset.workspaceTarget = definition.key;
      button.textContent = definition.label;
      tabs.appendChild(button);

      var panel = document.createElement("section");
      panel.className = "be-workspace-panel";
      panel.dataset.workspacePanel = definition.key;
      panel.hidden = index !== 0;
      tabs.parentNode.insertBefore(panel, tabs.nextSibling);
      definition.nodes.forEach(function (node) { if (node) panel.appendChild(node); });
    });

    Array.prototype.forEach.call(dashboard.querySelectorAll(".dashboard-overview-grid, .dashboard-log-grid"), function (emptyGrid) {
      if (!emptyGrid.children.length) emptyGrid.remove();
    });

    function activate(key) {
      Array.prototype.forEach.call(tabs.children, function (button) {
        var active = button.dataset.workspaceTarget === key;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-selected", String(active));
      });
      Array.prototype.forEach.call(dashboard.querySelectorAll(".be-workspace-panel"), function (panel) {
        panel.hidden = panel.dataset.workspacePanel !== key;
      });
    }
    tabs.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-workspace-target]");
      if (button) activate(button.dataset.workspaceTarget);
    });
    Array.prototype.forEach.call(dashboard.querySelectorAll('a[href^="#"], button[data-scroll-target]'), function (control) {
      control.addEventListener("click", function () {
        var target = control.getAttribute("href") || control.dataset.scrollTarget || "";
        if (target === "#checkin") activate("today");
        if (target === "#history") activate("history");
        if (target === "#event-log") activate("changes");
      });
    });
    activate("today");
  }

  function cleanAdminCopy() {
    var intro = document.querySelector("#auth-shell > .hero-card");
    if (intro) {
      var heading = intro.querySelector("h1");
      var copy = intro.querySelector(".lede");
      if (heading) heading.textContent = "Pilot operations, in one place.";
      if (copy) copy.textContent = "Review adherence, participant readiness, study outputs, and data intake from the secure operational workspace.";
    }
    var authPanel = document.querySelector("#auth-shell > .panel");
    if (authPanel) {
      var paragraph = authPanel.querySelector("h2 + p");
      if (paragraph) paragraph.textContent = "Use the administrator account assigned to this study.";
      var callout = authPanel.querySelector(".callout");
      if (callout) {
        callout.innerHTML = "<strong>Restricted workspace</strong><span>Access is limited to authorized study administrators.</span>";
      }
    }
    var blocked = document.getElementById("admin-gate-copy");
    if (blocked) blocked.textContent = "This account does not have administrator access for the current study.";
    ["metric-participants", "metric-active", "metric-due", "metric-reports"].forEach(function (id) {
      var stat = document.getElementById(id);
      if (!stat) return;
      var hint = stat.parentElement && stat.parentElement.querySelector("span");
      if (!hint) return;
      var hints = {
        "metric-participants": "Registered participant records.",
        "metric-active": "Currently active in follow-up.",
        "metric-due": "Missing the expected check-in.",
        "metric-reports": "Registered study outputs."
      };
      hint.textContent = hints[id];
    });
  }
})();
