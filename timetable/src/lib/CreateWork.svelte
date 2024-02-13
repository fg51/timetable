<script lang="ts">
  import type { IIsOpenedModal } from '../repository.svelte';

  let { isOpenedModal } = $props<{ isOpenedModal: IIsOpenedModal }>();
</script>

{#if isOpenedModal.isOpened === false}
  <button class="btn modal-button" on:click={() => isOpenedModal.open()}>作業内容を入力する</button>
{:else}
  <button class="btn modal-button" disabled>作業入力画面を表示する</button>
{/if}
