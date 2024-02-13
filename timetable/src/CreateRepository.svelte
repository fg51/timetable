<script lang="ts">
  //import type { Repository } from './repository';

  export function createRepository() {
    let repo = $state({
      uuid: crypto.randomUUID(),
      start: '',
      end: '',
      title: '',
      note: ''
    });

    return {
      get value() {
        return repo;
      },
      update: ({
        start,
        end,
        title,
        note
      }: {
        start: string;
        end: string;
        title: string;
        note: string;
      }) => {
        repo.start = start;
        repo.end = end;
        repo.title = title;
        repo.note = note;
      }
    };
  }
</script>
