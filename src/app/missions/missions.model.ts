export enum MissionStatus {
  InProgress = 'in-progress',
  Done = 'done',
  Future = 'future',
}

export interface Mission {
  codename: string;
  startDate: string;
  status: MissionStatus;
  budget: number;
}
