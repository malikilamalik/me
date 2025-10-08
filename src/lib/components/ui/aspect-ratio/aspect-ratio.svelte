<script lang="ts">
  export let ratio: number = 16 / 9;
  export let className = "";
</script>

<div
  class={`relative w-full ${className}`}
  style={`padding-top: ${100 / ratio}%;`}
>
  <div class="absolute inset-0">
    <slot />
  </div>
</div>