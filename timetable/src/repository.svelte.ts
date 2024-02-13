export interface Repository {
  uuid: string;
  start: string;
  end: string;
  title: string;
  note: string;
}

export const currentRepository: Repository = $state({
  uuid: crypto.randomUUID(),
  start: '',
  end: '',
  title: '',
  note: ''
});

export function createNewWork() {
  const repo: Repository = $state({
    uuid: crypto.randomUUID(),
    start: '',
    end: '',
    title: '',
    note: ''
  });
  return {
    get start() {
      return repo.start;
    },
    get end() {
      return repo.end;
    },
    get title() {
      return repo.title;
    },
    get note() {
      return repo.note;
    }
  };
}

export interface IIsOpenedModal {
  isOpened: boolean;
  close(): void;
  open(): void;
}

export function createIsOpenedModal(): IIsOpenedModal {
  let isOpenedModal = $state(false);

  return {
    get isOpened() {
      return isOpenedModal;
    },
    close: () => {
      isOpenedModal = false;
    },
    open: () => {
      isOpenedModal = true;
    }
  };
}

//export function createRepository() {
//  const repo = $state({
//    uuid: crypto.randomUUID(),
//    start: '',
//    end: '',
//    title: '',
//    note: ''
//  });
//
//  return {
//    get value() {
//      return repo;
//    },
//    update: ({
//      start,
//      end,
//      title,
//      note
//    }: {
//      start: string;
//      end: string;
//      title: string;
//      note: string;
//    }) => {
//      repo.start = start;
//      repo.end = end;
//      repo.title = title;
//      repo.note = note;
//    }
//  };
//}
