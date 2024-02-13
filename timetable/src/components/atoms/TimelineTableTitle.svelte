<script lang="ts">
  import TimelineDot from './TimelineDot.svelte';

  let { time, isDone } = $props<{ time: string; isDone: boolean }>();
</script>

<div class="timeline-start timeline-box">{time}</div>
<div class="timeline-middle">
  <TimelineDot {isDone} />
</div>
<div class="timeline-end"></div>
