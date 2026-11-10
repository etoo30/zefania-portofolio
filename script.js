/* ==========================================================================
   Zefania — Portfolio interactions
   Organized into small, reusable functions. GSAP + Lenis are used when
   available (CDN); everything degrades gracefully without them.
   ========================================================================== */

(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";
  const hasScrollTrigger = typeof window.ScrollTrigger !== "undefined";
  const hasLenis = typeof window.Lenis !== "undefined";

  if (hasGSAP && hasScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ------------------------------------------------------------------
     Smooth scroll (Lenis)
     ------------------------------------------------------------------ */
  let lenis = null;
  function initSmoothScroll() {
    if (reduceMotion || isTouch || !hasLenis) return;
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    function raf(time) {
      lenis.raf(time);
      if (hasGSAP && hasScrollTrigger) ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  /* ------------------------------------------------------------------
     Loader
     ------------------------------------------------------------------ */
  function initLoader() {
    const loader = document.getElementById("loader");
    const fill = document.getElementById("loaderFill");
    if (!loader) return;

    if (reduceMotion) {
      loader.classList.add("done");
      loader.style.display = "none";
      return;
    }

    let progress = 0;
    const duration = 1500; // ms, perceived loading time
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      progress = Math.min(100, (elapsed / duration) * 100);
      fill.style.width = progress + "%";
      if (progress < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          loader.classList.add("done");
          setTimeout(() => { loader.style.display = "none"; }, 950);
        }, 150);
      }
    }
    requestAnimationFrame(tick);
  }

  /* ------------------------------------------------------------------
     Custom cursor
     ------------------------------------------------------------------ */
  function initCursor() {
    const cursor = document.getElementById("cursor");
    if (!cursor || isTouch) return;
    const label = cursor.querySelector(".cursor-label");

    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    const targets = document.querySelectorAll("a, button, .skill-node, .paper, .idea-card");
    targets.forEach((el) => {
      const text = el.getAttribute("data-cursor") ||
        (el.classList.contains("idea-card") ? "EXPLORE" :
         el.classList.contains("paper") ? "OPEN ↗" : "VIEW");
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("expand");
        label.textContent = text;
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("expand");
        label.textContent = "";
      });
    });
  }

  /* ------------------------------------------------------------------
     Navigation: blur on scroll, hide on scroll down, mobile menu
     ------------------------------------------------------------------ */
  function initNav() {
    const nav = document.getElementById("siteNav");
    const burger = document.getElementById("navBurger");
    const menu = document.getElementById("mobileMenu");
    let lastY = window.scrollY;

    function onScroll() {
      const y = window.scrollY;
      nav.classList.toggle("blurred", y > 40);
      if (y > lastY && y > 160) {
        nav.classList.add("hide-nav");
      } else {
        nav.classList.remove("hide-nav");
      }
      lastY = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    if (burger) {
      burger.addEventListener("click", () => {
        const open = burger.classList.toggle("open");
        burger.setAttribute("aria-expanded", open);
        menu.classList.toggle("open", open);
      });
      menu.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          burger.classList.remove("open");
          menu.classList.remove("open");
        })
      );
    }
  }

  /* ------------------------------------------------------------------
     Page progress (rail + top bar)
     ------------------------------------------------------------------ */
  function initProgress() {
    const fill = document.getElementById("progressFill");
    const top = document.getElementById("progressTop");
    function update() {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      if (fill) fill.style.height = pct + "%";
      if (top) top.style.width = pct + "%";
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ------------------------------------------------------------------
     Generic reveal-on-scroll via IntersectionObserver (fallback + base)
     ------------------------------------------------------------------ */
  function initReveals() {
    const els = document.querySelectorAll(
      ".intro-body, .idea-card, .cert-stamp, .timeline-event, .care-col, .about-copy, .achievement-card"
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity .8s cubic-bezier(.16,.84,.44,1), transform .8s cubic-bezier(.16,.84,.44,1)";
      io.observe(el);
    });
  }

  /* ------------------------------------------------------------------
     Hero: word/line reveal + SVG process lines + mouse parallax
     ------------------------------------------------------------------ */
  function initHero() {
    const flowPaths = document.querySelectorAll(".flow-path");
    const flowNodes = document.querySelectorAll(".flow-node");

    if (hasGSAP) {
      gsap.set(".hero-title .line, .hero-eyebrow, .hero-sub", { y: 40, opacity: 0 });
      gsap.timeline({ delay: reduceMotion ? 0 : 1.7 })
        .to(".hero-eyebrow", { y: 0, opacity: 1, duration: .7, ease: "power3.out" })
        .to(".hero-title .line", { y: 0, opacity: 1, duration: .9, stagger: .12, ease: "power3.out" }, "-=.5")
        .to(".hero-sub", { y: 0, opacity: 1, duration: .7, ease: "power3.out" }, "-=.5")
        .to(flowPaths, { strokeDashoffset: 0, duration: 1.6, stagger: .15, ease: "power2.out" }, "-=1")
        .to(flowNodes, { opacity: 1, duration: .6, stagger: .06 }, "-=1.2");

      if (hasScrollTrigger) {
        gsap.to(".hero-title", {
          y: -120, opacity: 0.2,
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".hero-diagram", {
          y: -60,
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
        });
      }
    } else {
      document.querySelectorAll(".hero-title .line, .hero-eyebrow, .hero-sub").forEach((el) => {
        el.style.opacity = "1";
      });
      flowPaths.forEach((p) => (p.style.strokeDashoffset = "0"));
      flowNodes.forEach((n) => (n.style.opacity = "1"));
    }

    // subtle mouse parallax on the diagram
    if (!isTouch && !reduceMotion) {
      const diagram = document.getElementById("heroDiagram");
      document.querySelector(".hero").addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 16;
        const y = (e.clientY / window.innerHeight - 0.5) * 16;
        diagram.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
  }

  /* ------------------------------------------------------------------
     Word-by-word reveal for the introduction paragraph
     ------------------------------------------------------------------ */
  function initIntroReveal() {
    const words = document.querySelectorAll(".reveal-word");
    if (!words.length) return;

    if (hasGSAP && hasScrollTrigger) {
      ScrollTrigger.create({
        trigger: ".intro-lead",
        start: "top 75%",
        end: "bottom 55%",
        scrub: 0.5,
        onUpdate: (self) => {
          const activeCount = Math.floor(self.progress * words.length);
          words.forEach((w, i) => w.classList.toggle("active", i < activeCount));
        },
      });
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            words.forEach((w) => w.classList.add("active"));
            io.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      io.observe(document.querySelector(".intro-lead"));
    }
  }

  /* ------------------------------------------------------------------
     Animated counters (GPA, stats, achievements)
     ------------------------------------------------------------------ */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(tick);
  }

  function initCounters() {
    const counters = document.querySelectorAll(".counter, .big-number, .ach-rank");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => io.observe(c));
  }

  /* ------------------------------------------------------------------
     Industrial Experience — sticky scroll process
     ------------------------------------------------------------------ */
  function initProcessSection() {
    const steps = document.querySelectorAll(".process-step");
    const nodes = document.querySelectorAll(".process-node-g");
    const spineFill = document.getElementById("processSpineFill");
    if (!steps.length) return;

    const setActive = (index) => {
      steps.forEach((s) => s.classList.toggle("active", parseInt(s.dataset.step) === index));
      nodes.forEach((n) => n.classList.toggle("active", parseInt(n.dataset.step) === index));
      if (spineFill) {
        const total = 580;
        const pct = (index + 1) / steps.length;
        spineFill.style.strokeDashoffset = total - total * pct;
      }
    };

    if (hasGSAP && hasScrollTrigger && window.innerWidth > 860) {
      // .process-section is tall (420vh) and its child .process-sticky is
      // CSS position:sticky, so we drive step activation purely off overall
      // scroll progress through the section rather than per-step triggers.
      ScrollTrigger.create({
        trigger: ".process-section",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const idx = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
          setActive(idx);
        },
      });
    } else {
      // mobile / fallback: reveal as user scrolls past each step
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const i = parseInt(entry.target.dataset.step);
              setActive(i);
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.5 }
      );
      steps.forEach((s) => io.observe(s));
    }
  }

  /* ------------------------------------------------------------------
     Ideas — horizontal scroll driven by vertical scroll
     ------------------------------------------------------------------ */
  function initIdeasScroll() {
    const track = document.getElementById("ideasTrack");
    if (!track || window.innerWidth <= 860) return;

    if (hasGSAP && hasScrollTrigger) {
      const scrollDistance = () => track.scrollWidth - window.innerWidth + 160;
      gsap.to(track, {
        x: () => -scrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: ".ideas",
          start: "top top",
          end: () => "+=" + scrollDistance(),
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }
  }

  /* ------------------------------------------------------------------
     Research paper hover lift (handled by CSS) + reveal
     ------------------------------------------------------------------ */
  function initPaperReveal() {
    const paper = document.getElementById("paperCard");
    if (!paper) return;
    paper.style.opacity = "0";
    paper.style.transform = "translateY(30px)";
    paper.style.transition = "opacity .9s cubic-bezier(.16,.84,.44,1), transform .9s cubic-bezier(.16,.84,.44,1)";
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          paper.style.opacity = "1";
          paper.style.transform = "translateY(0)";
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(paper);
  }

  /* ------------------------------------------------------------------
     Signature — The Industrial Flow (particle travels through nodes)
     ------------------------------------------------------------------ */
  function initFlowSignature() {
    const svg = document.getElementById("flowSignatureSvg");
    const particle = document.getElementById("fsParticle");
    const nodes = document.querySelectorAll(".fs-node");
    if (!svg || !particle) return;

    const positions = [60, 280, 500, 720, 940];

    function setActiveByProgress(progress) {
      const x = 60 + (940 - 60) * progress;
      particle.setAttribute("cx", x);
      const activeIndex = Math.round(progress * (positions.length - 1));
      nodes.forEach((n, i) => n.classList.toggle("active", i <= activeIndex));
    }

    if (hasGSAP && hasScrollTrigger) {
      ScrollTrigger.create({
        trigger: ".flow-signature",
        start: "top 70%",
        end: "bottom 30%",
        scrub: 0.6,
        onUpdate: (self) => setActiveByProgress(self.progress),
      });
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            let p = 0;
            const iv = setInterval(() => {
              p += 0.02;
              setActiveByProgress(Math.min(1, p));
              if (p >= 1) clearInterval(iv);
            }, 30);
            io.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      io.observe(document.querySelector(".flow-signature"));
    }
  }

  /* ------------------------------------------------------------------
     Timeline — horizontal drag/scroll on wheel, hover reveal via CSS
     ------------------------------------------------------------------ */
  function initTimelineScroll() {
    const wrap = document.querySelector(".timeline-wrap");
    const track = document.getElementById("timelineTrack");
    if (!wrap || !track) return;

    wrap.addEventListener(
      "wheel",
      (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          wrap.scrollLeft += e.deltaY;
          e.preventDefault();
        }
      },
      { passive: false }
    );
    wrap.style.overflowX = "auto";
    wrap.style.scrollBehavior = "smooth";
  }

  /* ------------------------------------------------------------------
     Achievements — subtle particle burst on viewport enter
     ------------------------------------------------------------------ */
  function initAchievementParticles() {
    const section = document.querySelector(".achievements");
    if (!section || reduceMotion) return;
    let fired = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !fired) {
          fired = true;
          spawnParticles(section);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(section);

    function spawnParticles(container) {
      const rect = container.getBoundingClientRect();
      const centerX = rect.width / 2;
      for (let i = 0; i < 24; i++) {
        const p = document.createElement("span");
        p.className = "particle";
        p.style.left = centerX + (Math.random() - 0.5) * 300 + "px";
        p.style.top = rect.height / 2 + "px";
        container.appendChild(p);
        const angle = Math.random() * Math.PI * 2;
        const dist = 60 + Math.random() * 120;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;

        if (hasGSAP) {
          gsap.to(p, {
            x: dx, y: dy, opacity: 1, duration: 0.15,
            onComplete: () => gsap.to(p, { opacity: 0, duration: 0.9, onComplete: () => p.remove() }),
          });
        } else {
          p.style.transition = "transform 1s ease-out, opacity 1s ease-out";
          requestAnimationFrame(() => {
            p.style.opacity = "1";
            p.style.transform = `translate(${dx}px, ${dy}px)`;
          });
          setTimeout(() => { p.style.opacity = "0"; }, 300);
          setTimeout(() => p.remove(), 1300);
        }
      }
    }
  }

  /* ------------------------------------------------------------------
     Skills — tooltip on hover
     ------------------------------------------------------------------ */
  function initSkillTooltip() {
    const tooltip = document.getElementById("skillTooltip");
    const nodes = document.querySelectorAll(".skill-node");
    if (!tooltip || isTouch) return;

    nodes.forEach((node) => {
      node.addEventListener("mouseenter", () => {
        tooltip.textContent = node.dataset.cat;
        tooltip.classList.add("show");
      });
      node.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.clientX + "px";
        tooltip.style.top = e.clientY + "px";
      });
      node.addEventListener("mouseleave", () => tooltip.classList.remove("show"));
    });
  }

  /* ------------------------------------------------------------------
     Mouse parallax for "What I Care About"
     ------------------------------------------------------------------ */
  function initCareParallax() {
    if (isTouch || reduceMotion) return;
    const cols = document.querySelectorAll(".care-col");
    document.querySelector(".care")?.addEventListener("mousemove", (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      cols.forEach((col) => {
        const depth = parseFloat(col.dataset.depth || "20");
        col.style.transform = `translateX(${relX * depth}px)`;
      });
    });
  }

  /* ------------------------------------------------------------------
     Magnetic buttons (contact CTAs)
     ------------------------------------------------------------------ */
  function initMagneticButtons() {
    if (isTouch || reduceMotion) return;
    document.querySelectorAll(".magnetic-btn").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0,0)";
      });
    });
  }

  /* ------------------------------------------------------------------
     Idea card SVG micro-motion (ambient)
     ------------------------------------------------------------------ */
  function initIdeaVisuals() {
    if (reduceMotion || !hasGSAP) return;
    gsap.to(".idea-shape-b", { y: -6, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: 0.3 });
  }

  /* ------------------------------------------------------------------
     Section fade-up for generic large headings (progressive enhancement)
     ------------------------------------------------------------------ */
  function initHeadingReveals() {
    if (!hasGSAP || !hasScrollTrigger) return;
    const headings = document.querySelectorAll(
      ".process-title, .achievements-title, .contact-title, .paper-title"
    );
    headings.forEach((h) => {
      gsap.from(h, {
        y: 50, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: h, start: "top 85%" },
      });
    });
  }

  /* ------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------ */
  function init() {
    initLoader();
    initSmoothScroll();
    initCursor();
    initNav();
    initProgress();
    initReveals();
    initHero();
    initIntroReveal();
    initCounters();
    initProcessSection();
    initIdeasScroll();
    initPaperReveal();
    initFlowSignature();
    initTimelineScroll();
    initAchievementParticles();
    initSkillTooltip();
    initCareParallax();
    initMagneticButtons();
    initIdeaVisuals();
    initHeadingReveals();

    if (hasGSAP && hasScrollTrigger) {
      window.addEventListener("load", () => ScrollTrigger.refresh());
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
