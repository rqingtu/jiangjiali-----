(function () {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  const navAnchors = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });

  toggle?.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  navAnchors.forEach((a) => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });

  const sections = [...document.querySelectorAll("section[id]")];
  const observerNav = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navAnchors.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );
  sections.forEach((s) => observerNav.observe(s));

  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  document.querySelectorAll(".exp-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".exp-item");
      const willOpen = !item.classList.contains("is-open");

      document.querySelectorAll(".exp-item").forEach((el) => {
        el.classList.remove("is-open");
        el.querySelector(".exp-trigger")?.setAttribute("aria-expanded", "false");
      });

      if (willOpen) {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  const wechatToggle = document.getElementById("wechatToggle");
  const wechatPanel = document.getElementById("wechatPanel");

  wechatToggle?.addEventListener("click", () => {
    const willShow = wechatPanel.hidden;
    wechatPanel.hidden = !willShow;
    wechatToggle.setAttribute("aria-expanded", String(willShow));
    wechatToggle.classList.toggle("is-active", willShow);
    wechatToggle.textContent = willShow ? "收起微信号" : "微信号";
  });

  const modalTriggers = [
    { modalId: "leshiModal", triggerId: "leshiResultBtn" },
    { modalId: "xiangfenModal", triggerId: "xiangfenResultBtn" },
    { modalId: "eyemaskModal", triggerId: "eyemaskResultBtn" },
    { modalId: "oiotModal", triggerId: "oiotResultBtn" },
    { modalId: "mingchaModal", triggerId: "mingchaResultBtn" },
  ];

  let activeTrigger = null;

  function closeAllModals() {
    document.querySelectorAll(".project-modal").forEach((modal) => {
      modal.hidden = true;
    });
    document.body.classList.remove("modal-open");
    activeTrigger?.focus();
    activeTrigger = null;
  }

  function openModal(modalId, trigger) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    document.querySelectorAll(".project-modal").forEach((m) => {
      m.hidden = m.id !== modalId;
    });

    modal.hidden = false;
    document.body.classList.add("modal-open");
    activeTrigger = trigger;
    modal.querySelector(".project-modal-close")?.focus();
  }

  modalTriggers.forEach(({ modalId, triggerId }) => {
    const trigger = document.getElementById(triggerId);
    const modal = document.getElementById(modalId);

    trigger?.addEventListener("click", () => openModal(modalId, trigger));

    modal?.querySelectorAll("[data-close]").forEach((el) => {
      el.addEventListener("click", closeAllModals);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const hasOpenModal = [...document.querySelectorAll(".project-modal")].some(
      (m) => !m.hidden
    );
    if (hasOpenModal) closeAllModals();
  });
})();
