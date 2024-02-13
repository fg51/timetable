<script lang="ts">
  let { startTime, endTime, title, note } = $props<{
    startTime: string;
    endTime: string;
    title: string;
    note: string;
  }>();
</script>

<div class="card w-96 bg-neutral text-neutral-content">
  <div class="card-body">
    <p>{startTime}</p>
    <h2 class="card-title">手配番号: {title}</h2>
    <p>備考: {note}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">編集</button>
      <button class="btn btn-ghost">削除</button>
    </div>
    <p>{endTime}</p>
  </div>
</div>
