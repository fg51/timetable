<script lang="ts">
  import Card from '../lib/Card.svelte';
  import TimelineTableTitle from '../components/atoms/TimelineTableTitle.svelte';

  import type { Repository } from '../repository.svelte';
  //import { createRepository } from '../repository.svelte';

  let { isOpenedModal } = $props();

  //let works: Repository[] = $state([]);
  //const x = createRepository();
  //x.update({
  //  start: '08:40',
  //  end: '10:00',
  //  title: '1234',
  //  note: '作業'
  //});
  let x = {
    start: '08:40',
    end: '10:00',
    title: '1234',
    note: '作業'
  };

  //works[0] = x.value;
  let y: Repository = {
    uuid: crypto.randomUUID(),
    start: '08:40',
    end: '10:00',
    title: '1234',
    note: '作業'
  };
  //works = [x, y];
</script>

<ul class="timeline timeline-vertical">
  <li>
    <!--<TimelineTableTitle time={'08:30'} isDone={true} />-->
    <TimelineTableTitle time="08:30" isDone={true} />
    <hr />
  </li>
  <li>
    <hr />
    <div class="timeline-end timeline-box">
      <Card {isOpenedModal} startTime={x.start} endTime={x.end} title={x.title} note={x.note} />
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
