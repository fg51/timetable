<script lang="ts">
  import Greet from '../lib/Greet.svelte';
  import Timeline from '../lib/Timeline.svelte';
  import EditWork from '../lib/EditWork.svelte';
  import CreateWork from '../lib/CreateWork.svelte';

  import { createIsOpenedModal } from '../repository.svelte';

  let isOpenedModal = createIsOpenedModal();
</script>

<h1>Welcome to SvelteKit</h1>

<Greet />

<CreateWork {isOpenedModal} />

<EditWork {isOpenedModal} />

<Timeline {isOpenedModal} />

<!--
<style lang="postcss">
  :global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
  -->
