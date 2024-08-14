export interface ScheduleCardItemProps {
  items: {
    time: string;
    event: string;
  }[];
}

export interface ScheduleData {
  day: string;
  schedule: {
    time: string;
    event: string;
  }[];
}

export interface ScheduleCardProps {
  info: {
    day: string;
    schedule: {
      time: string;
      event: string;
    }[];
  };
}
