<script lang="ts">
  let { class: className = "w-5 h-5" }: { class?: string } = $props();
</script>

<svg
  class={className}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path d="M12 4v14" />
  <path d="M6 13l6 6 6-6" />
</svg>
