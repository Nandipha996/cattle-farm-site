(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Copy button
  $$("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const targetSel = btn.getAttribute("data-copy");
      const el = $(targetSel);
      if (!el) return;

      const text = el.textContent || "";
      try {
        await navigator.clipboard.writeText(text);
        const old = btn.textContent;
        btn.textContent = "Copied ✓";
        setTimeout(() => (btn.textContent = old), 1200);
      } catch (e) {
        // Fallback: select text for manual copy
        window.getSelection?.().removeAllRanges?.();
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        alert("Copy not available. The text has been selected—press Ctrl/Cmd+C to copy.");
      }
    });
  });

  // Lightbox
  const lightbox = $("[data-lightbox]");
  if (!lightbox) return;

  const imgEl = $("[data-lightbox-img]", lightbox);
  const capEl = $("[data-lightbox-caption]", lightbox);

  const items = $$("[data-gallery] .gallery-item");
  const images = items.map((btn) => ({
    src: btn.getAttribute("data-img"),
    alt: btn.getAttribute("data-alt") || "Cattle photo",
  }));

  let currentIndex = 0;
  let lastFocus = null;

  function openAt(index) {
    currentIndex = (index + images.length) % images.length;
    const current = images[currentIndex];

    imgEl.src = current.src;
    imgEl.alt = current.alt;
    capEl.textContent = current.alt;

    lastFocus = document.activeElement;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";

    // Focus close button for accessibility
    const closeBtn = $("[data-close]", lightbox);
    closeBtn?.focus?.();
  }

  function close() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    imgEl.src = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function prev() { openAt(currentIndex - 1); }
  function next() { openAt(currentIndex + 1); }

  items.forEach((btn, idx) => {
    btn.addEventListener("click", () => openAt(idx));
  });

  $$("[data-close]", lightbox).forEach((el) => {
    el.addEventListener("click", close);
  });

  $("[data-prev]", lightbox)?.addEventListener("click", prev);
  $("[data-next]", lightbox)?.addEventListener("click", next);

  // Keyboard controls: ESC close, arrows navigate
  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;

    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });

  // Click outside dialog closes (backdrop is [data-close])
})();
