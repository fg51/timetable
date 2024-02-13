<script lang="ts">
  import { today } from '../lib//today';
</script>

<label class="form-control w-full max-w-xs">
  <div class="label"><span class="label-text">作業日</span></div>
  <input type="date" class="input input-bordered input-primary w-full max-w-xs" value={today()} />

  <div class="label"><span class="label-text">開始時刻</span></div>
  <input type="time" class="input input-bordered input-primary w-full max-w-xs" />

  <div class="label"><span class="label-text">終了時刻</span></div>
  <input type="time" class="input input-bordered input-primary w-full max-w-xs" />

  <div class="label"><span class="label-text">手配番号</span></div>
  <input
    type="text"
    placeholder="手配番号"
    class="input input-bordered input-primary w-full max-w-xs"
  />

  <div class="label"><span class="label-text">備考</span></div>
  <textarea class="textarea textarea-bordered textarea-primary h-24" placeholder="備考"> </textarea>
</label>
