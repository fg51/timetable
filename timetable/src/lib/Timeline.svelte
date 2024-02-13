<script lang="ts">
  import Card from '../lib/Card.svelte';
  import TimelineTableTitle from '../components/atoms/TimelineTableTitle.svelte';
</script>

<ul class="timeline timeline-vertical">
  <li>
    <TimelineTableTitle time={'08:30'} isDone={true} />
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-end timeline-box">
      <Card startTime="8:30" endTime="10:00" title="1234" note="作業した" />
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <TimelineTableTitle time={'10:00'} isDone={false} />
  </li>
  <li>
    <TimelineTableTitle time={'10:10'} isDone={false} />
    <hr />
  </li>
  <li>
    <hr />
    <TimelineTableTitle time={'12:00'} isDone={false} />
  </li>
  <li>
    <TimelineTableTitle time={'12:45'} isDone={false} />
    <hr />
  </li>
  <li>
    <hr />
    <TimelineTableTitle time={'15:00'} isDone={false} />
  </li>
  <li>
    <TimelineTableTitle time={'15:10'} isDone={false} />
    <hr />
  </li>
  <li>
    <hr />
    <TimelineTableTitle time={'17:35'} isDone={false} />
  </li>
  <li>
    <TimelineTableTitle time={'17:45'} isDone={false} />
    <hr />
  </li>
  <li>
    <hr />
    <TimelineTableTitle time={'22:00'} isDone={false} />
  </li>
</ul>
