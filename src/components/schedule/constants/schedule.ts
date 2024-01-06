import { INTL } from "../../../common/constants";

type TScheduleDay = {
  weekDay: string;
  schedule: TSchedule[];
};

type TSchedule = {
  id: string;
  title: string;
  time: string;
};

export const scheduleList: TScheduleDay[] = [
  {
    weekDay: INTL.SCHEDULE_PAGE.WEEKDAY_RU.MONDAY,
    schedule: [
      {
        id: INTL.DIRECTIONS_PAGE.STRIP_PLASTIC_BEGINNERS,
        time: "19:00",
        title: INTL.DIRECTIONS_PAGE.STRIP_PLASTIC_BEGINNERS,
      },
      {
        id: INTL.DIRECTIONS_PAGE.STRETCHING,
        time: "20:00",
        title: INTL.DIRECTIONS_PAGE.STRETCHING,
      },
      {
        id: INTL.DIRECTIONS_PAGE.REGGAETON,
        time: "21:00",
        title: INTL.DIRECTIONS_PAGE.REGGAETON,
      },
    ],
  },
  {
    weekDay: INTL.SCHEDULE_PAGE.WEEKDAY_RU.TUESDAY,
    schedule: [
      {
        id: INTL.DIRECTIONS_PAGE.CHOREO,
        time: "19:00",
        title: INTL.DIRECTIONS_PAGE.CHOREO,
      },
      {
        id: INTL.DIRECTIONS_PAGE.STRIP_PLASTIC_PRO,
        time: "20:00",
        title: INTL.DIRECTIONS_PAGE.STRIP_PLASTIC_PRO,
      },
      {
        id: INTL.DIRECTIONS_PAGE.TWERK,
        time: "21:00",
        title: INTL.DIRECTIONS_PAGE.TWERK,
      },
    ],
  },
  {
    weekDay: INTL.SCHEDULE_PAGE.WEEKDAY_RU.WEDNESDAY,
    schedule: [
      {
        id: INTL.DIRECTIONS_PAGE.JAZZ_FUNK,
        time: "19:00",
        title: INTL.DIRECTIONS_PAGE.JAZZ_FUNK,
      },
      {
        id: INTL.DIRECTIONS_PAGE.STRIP_PLASTIC_BEGINNERS,
        time: "20:00",
        title: INTL.DIRECTIONS_PAGE.STRIP_PLASTIC_BEGINNERS,
      },
    ],
  },
  {
    weekDay: INTL.SCHEDULE_PAGE.WEEKDAY_RU.THURSDAY,
    schedule: [
      {
        id: INTL.DIRECTIONS_PAGE.CHOREO,
        time: "19:00",
        title: INTL.DIRECTIONS_PAGE.CHOREO,
      },
      {
        id: INTL.DIRECTIONS_PAGE.STRIP_PLASTIC_PRO,
        time: "20:00",
        title: INTL.DIRECTIONS_PAGE.STRIP_PLASTIC_PRO,
      },
      {
        id: INTL.DIRECTIONS_PAGE.TWERK,
        time: "21:00",
        title: INTL.DIRECTIONS_PAGE.TWERK,
      },
    ],
  },
  {
    weekDay: INTL.SCHEDULE_PAGE.WEEKDAY_RU.FRIDAY,
    schedule: [
      {
        id: INTL.DIRECTIONS_PAGE.JAZZ_FUNK,
        time: "19:00",
        title: INTL.DIRECTIONS_PAGE.JAZZ_FUNK,
      },
      {
        id: INTL.DIRECTIONS_PAGE.LADY_STYLE,
        time: "20:00",
        title: INTL.DIRECTIONS_PAGE.LADY_STYLE,
      },
      {
        id: INTL.DIRECTIONS_PAGE.REGGAETON,
        time: "21:00",
        title: INTL.DIRECTIONS_PAGE.REGGAETON,
      },
    ],
  },
];
