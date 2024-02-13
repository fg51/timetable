<script lang="ts">
  import type { IIsOpenedModal } from '../repository.svelte';
  import FormEditWork from '../lib//FormEditWork.svelte';

  let { isOpenedModal } = $props<{ isOpenedModal: IIsOpenedModal }>();
</script>

{#if isOpenedModal.isOpened === false}
  <button class="btn modal-button" on:click={() => isOpenedModal.open()}>作業内容を入力する</button>
{:else}
  <button class="btn modal-button" disabled>作業入力画面を表示する</button>
{/if}

<dialog class="modal" class:modal-open={isOpenedModal.isOpened}>
  <div class="modal-box">
    <!--
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click{()=> (isOpenedModal=false)}>✕</button>
      </form>
      -->
    <div class="modal-action">
      <button
        class="btn btn-sm btn-ghost absolute right-2 top-2"
        on:click={() => isOpenedModal.close()}
      >
        ✕ 閉じる</button
      >
    </div>
    <FormEditWork />
  </div>
</dialog>
