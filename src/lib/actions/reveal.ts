interface RevealOptions {
  /** Retraso en ms antes de mostrar el elemento, útil para escalonar tarjetas */
  delay?: number;
  /** Umbral de intersección (0 a 1) */
  threshold?: number;
}

/**
 * Acción de Svelte que añade la clase `.is-visible` cuando el elemento
 * entra en el viewport, activando la transición CSS definida en app.css.
 *
 * Uso: <div use:reveal={{ delay: 100 }}>...</div>
 */
export function reveal(node: HTMLElement, options: RevealOptions = {}) {
  const { delay = 0, threshold = 0.15 } = options;
  node.setAttribute("data-reveal", "");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          window.setTimeout(() => {
            node.classList.add("is-visible");
          }, delay);
          observer.unobserve(node);
        }
      }
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
