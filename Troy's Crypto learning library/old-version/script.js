// ========================================
// Zara's AI Learning Library - Interactive Scripts
// ========================================

(function () {
  "use strict";

  // ========================================
  // Smooth Scroll for Internal Links
  // ========================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href !== "#") {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });
  }

  // ========================================
  // View Collection Button Handler
  // ========================================
  function initViewCollectionButton() {
    const btn = document.getElementById("viewCollectionBtn");
    if (btn) {
      btn.addEventListener("click", function () {
        // Scroll to video grid with smooth animation
        const videoGrid = document.querySelector(".video-grid");
        if (videoGrid) {
          videoGrid.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }

        // Optional: Add a subtle animation to the video cards
        const cards = document.querySelectorAll(".video-card");
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.style.animation = "none";
            setTimeout(() => {
              card.style.animation = "";
            }, 10);
          }, index * 50);
        });
      });
    }
  }

  // ========================================
  // Lazy Load YouTube Iframes
  // ========================================
  function initLazyLoadIframes() {
    const iframeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const iframe = entry.target;
            if (iframe.dataset.src) {
              iframe.src = iframe.dataset.src;
              iframe.removeAttribute("data-src");
            }
            iframeObserver.unobserve(iframe);
          }
        });
      },
      {
        rootMargin: "50px",
      }
    );

    document.querySelectorAll(".video-embed iframe").forEach((iframe) => {
      iframeObserver.observe(iframe);
    });
  }

  // ========================================
  // Tag Filter (Optional Enhancement)
  // ========================================
  function initTagFilters() {
    const tags = document.querySelectorAll(".tag");
    let activeFilter = null;

    tags.forEach((tag) => {
      tag.addEventListener("click", function (e) {
        e.preventDefault();
        const tagText = this.textContent.trim();

        // Toggle active filter
        if (activeFilter === tagText) {
          activeFilter = null;
          showAllCards();
          tags.forEach((t) => t.classList.remove("active"));
        } else {
          activeFilter = tagText;
          filterCardsByTag(tagText);
          tags.forEach((t) => t.classList.remove("active"));

          // Highlight all tags with the same text
          tags.forEach((t) => {
            if (t.textContent.trim() === tagText) {
              t.classList.add("active");
            }
          });
        }
      });
    });
  }

  function filterCardsByTag(tag) {
    const cards = document.querySelectorAll(".video-card");
    cards.forEach((card) => {
      const cardTags = Array.from(card.querySelectorAll(".tag")).map((t) =>
        t.textContent.trim()
      );

      if (cardTags.includes(tag)) {
        card.style.display = "";
        card.style.animation = "fadeInUp 0.5s forwards";
      } else {
        card.style.opacity = "0.3";
        card.style.transform = "scale(0.95)";
      }
    });
  }

  function showAllCards() {
    const cards = document.querySelectorAll(".video-card");
    cards.forEach((card) => {
      card.style.display = "";
      card.style.opacity = "";
      card.style.transform = "";
      card.style.animation = "";
    });
  }

  // ========================================
  // Scroll Progress Indicator
  // ========================================
  function initScrollProgress() {
    let ticking = false;

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  function updateScrollProgress() {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    // Can add a progress bar element if needed
    // document.querySelector('.progress-bar')?.style.width = scrolled + '%';
  }

  // ========================================
  // Animate Elements on Scroll (Intersection Observer)
  // ========================================
  function initScrollAnimations() {
    const animateOnScroll = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe elements that should animate on scroll
    document
      .querySelectorAll(".video-card, .hero-title, .hero-description")
      .forEach((el) => {
        animateOnScroll.observe(el);
      });
  }

  // ========================================
  // Performance: Reduce Motion for Users Who Prefer It
  // ========================================
  function checkReducedMotion() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.documentElement.style.setProperty("--transition-base", "0ms");
      document.documentElement.style.setProperty("--transition-slow", "0ms");
    }
  }

  // ========================================
  // External Link Security
  // ========================================
  function enhanceExternalLinks() {
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
      // Ensure rel attributes are set for security
      if (!link.rel.includes("noopener")) {
        link.rel = link.rel ? link.rel + " noopener" : "noopener";
      }
      if (!link.rel.includes("noreferrer")) {
        link.rel = link.rel + " noreferrer";
      }
    });
  }

  // ========================================
  // Initialize Analytics (Placeholder)
  // ========================================
  function initAnalytics() {
    // Track video card clicks
    document.querySelectorAll(".video-card a").forEach((link) => {
      link.addEventListener("click", function () {
        const videoTitle =
          this.closest(".video-card")?.querySelector(
            ".video-title"
          )?.textContent;
        if (videoTitle) {
          console.log("Video clicked:", videoTitle);
          // Add analytics tracking here (e.g., Google Analytics, Plausible, etc.)
        }
      });
    });

    // Track tag clicks
    document.querySelectorAll(".tag").forEach((tag) => {
      tag.addEventListener("click", function () {
        console.log("Tag clicked:", this.textContent);
        // Add analytics tracking here
      });
    });
  }

  // ========================================
  // Error Handling for Iframes
  // ========================================
  function handleIframeErrors() {
    document.querySelectorAll(".video-embed iframe").forEach((iframe) => {
      iframe.addEventListener("error", function () {
        const container = this.closest(".video-embed");
        if (container) {
          container.innerHTML = `
                        <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f5f5f5; color: #666;">
                            <p>Failed to load video. Please try again later.</p>
                        </div>
                    `;
        }
      });
    });
  }

  // ========================================
  // Prompt Copy Functionality
  // ========================================
  function initPromptCopy() {
    const copyButtons = document.querySelectorAll(".copy-btn");

    copyButtons.forEach((button) => {
      button.addEventListener("click", async function () {
        const textToCopy = this.dataset.copy;
        const originalText = this.innerHTML;

        try {
          await navigator.clipboard.writeText(textToCopy);

          // Visual feedback
          this.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Copied!
                    `;
          this.style.background = "var(--color-primary)";
          this.style.color = "var(--color-white)";

          // Reset after 2 seconds
          setTimeout(() => {
            this.innerHTML = originalText;
            this.style.background = "";
            this.style.color = "";
          }, 2000);

          console.log(
            "Prompt copied to clipboard:",
            textToCopy.substring(0, 50) + "..."
          );
        } catch (err) {
          console.error("Failed to copy:", err);

          // Fallback feedback
          this.innerHTML = "Failed!";
          setTimeout(() => {
            this.innerHTML = originalText;
          }, 2000);
        }
      });
    });
  }

  // ========================================
  // Scroll Reveal Animations for New Sections
  // ========================================
  function initSectionAnimations() {
    const sections = document.querySelectorAll(
      ".podcasts-section, .people-section, .newsletters-section, .products-section, .prompts-section"
    );

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";

          // Animate cards within the section
          const cards = entry.target.querySelectorAll(
            ".podcast-card, .person-card, .newsletter-card, .product-card, .prompt-card"
          );
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 50);
          });

          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(20px)";
      section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      sectionObserver.observe(section);
    });
  }

  // ========================================
  // Main Initialization
  // ========================================
  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
      return;
    }

    // Initialize all features
    checkReducedMotion();
    initSmoothScroll();
    initViewCollectionButton();
    // initLazyLoadIframes(); // Uncomment if you want lazy loading
    initTagFilters();
    initScrollProgress();
    // initScrollAnimations(); // Uncomment for additional scroll animations
    enhanceExternalLinks();
    initAnalytics();
    handleIframeErrors();
    initPromptCopy();
    initSectionAnimations();

    console.log("Zara's AI Learning Library initialized successfully! 🚀");
  }

  // Start initialization
  init();
})();
