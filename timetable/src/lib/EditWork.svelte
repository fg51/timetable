<script lang="ts">
  import type { IIsOpenedModal } from '../repository.svelte';

  function today() {
    let today = new Date();
    today.setDate(today.getDate());
    let yyyy = today.getFullYear();
    let mm = ('0' + (today.getMonth() + 1)).slice(-2);
    let dd = ('0' + today.getDate()).slice(-2);
    return yyyy + '-' + mm + '-' + dd;
  }

  let { isOpenedModal } = $props<{ isOpenedModal: IIsOpenedModal }>();
</script>

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
    <label class="form-control w-full max-w-xs">
      <div class="label"><span class="label-text">作業日</span></div>
      <input
        type="date"
        class="input input-bordered input-primary w-full max-w-xs"
        value={today()}
      />

      <div class="label"><span class="label-text">開始時刻</span></div>
      <input type="time" class="input input-bordered input-primary w-full max-w-xs" />
      <!--
      {#if repo.start === ''}
      {:else}
        <input
          type="time"
          class="input input-bordered input-primary w-full max-w-xs"
          value={repo.start}
        />
      {/if}
        -->

      <div class="label"><span class="label-text">終了時刻</span></div>
      <input type="time" class="input input-bordered input-primary w-full max-w-xs" />

      <div class="label"><span class="label-text">手配番号</span></div>
      <input
        type="text"
        placeholder="手配番号"
        class="input input-bordered input-primary w-full max-w-xs"
      />

      <div class="label"><span class="label-text">備考</span></div>
      <textarea class="textarea textarea-bordered textarea-primary h-24" placeholder="備考">
      </textarea>
    </label>
  </div>
</dialog>
