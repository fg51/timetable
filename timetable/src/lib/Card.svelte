<script lang="ts">
  //import { openEditModal } from '../lib/EditWork.svelte';
  //export interface IIsOpenedModal {
  import type { IIsOpenedModal } from '../repository.svelte';

  let { isOpenedModal, startTime, endTime, title, note } = $props<{
    isOpenedModal: IIsOpenedModal;
    startTime: string;
    endTime: string;
    title: string;
    note: string;
  }>();
  //let isOpenedModal = { open: () => console.log('click') };
</script>

<div class="card w-96 bg-neutral text-neutral-content">
  <div class="card-body">
    <p>{startTime}</p>
    <h2 class="card-title">手配番号: {title}</h2>
    <p>備考: {note}</p>
    <div class="card-actions justify-end">
      {#if isOpenedModal.isOpened === false}
        <!--<button class="btn btn-primary">編集</button>-->
        <button class="btn btn-primary" on:click={isOpenedModal.open}>編集</button>
      {:else}
        <!--<button class="btn btn-primary">編集</button>-->
        <button class="btn btn-primary" disabled>編集</button>
      {/if}
      <button class="btn btn-ghost">削除</button>
    </div>
    <p>{endTime}</p>
  </div>
</div>
