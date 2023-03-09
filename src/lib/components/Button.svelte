<script lang="ts">
  let name = 'click me'
</script>

<button
  class="btn variant-filled-primary"
  on:click={() => {
    name = 'Changed'
  }}>{name}</button
>
