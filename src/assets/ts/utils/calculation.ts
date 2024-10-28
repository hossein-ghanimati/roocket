const MILLISECONDS_IN_SECOND = 1000;
const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * 60;
const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * 60;
const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * 24;
const MILLISECONDS_IN_WEEK = MILLISECONDS_IN_DAY * 7;
const MILLISECONDS_IN_MONTH = MILLISECONDS_IN_WEEK * 4 + MILLISECONDS_IN_DAY * 2; // 4 هفته + 2 روز اضافی
const MILLISECONDS_IN_YEAR = MILLISECONDS_IN_MONTH * 12;

const calculateRelativeTimeDifference = (createdAt: string) => {
  const currentTime = new Date();
  const createdTime = new Date(createdAt);
  const time = currentTime.getTime() - createdTime.getTime();

  let date = null;

  if (time < MILLISECONDS_IN_MINUTE) {
    date = "لحظاتی پیش";
  } else if (time < MILLISECONDS_IN_HOUR) {
    const calculatedTime = Math.floor(time / MILLISECONDS_IN_MINUTE);
    date = `${calculatedTime} دقیقه پیش`;
  } else if (time < MILLISECONDS_IN_DAY) {
    const calculatedTime = Math.floor(time / MILLISECONDS_IN_HOUR);
    date = `${calculatedTime} ساعت پیش`;
  } else if (time < MILLISECONDS_IN_WEEK) {
    const calculatedTime = Math.floor(time / MILLISECONDS_IN_DAY);
    date = `${calculatedTime} روز پیش`;
  } else if (time < MILLISECONDS_IN_MONTH) {
    const calculatedTime = Math.floor(time / MILLISECONDS_IN_WEEK);
    date = `${calculatedTime} هفته پیش`;
  } else if (time < MILLISECONDS_IN_YEAR) {
    const calculatedTime = Math.floor(time / MILLISECONDS_IN_MONTH);
    date = `${calculatedTime} ماه پیش`;
  } else if (time >= MILLISECONDS_IN_YEAR) {
    const calculatedTime = Math.floor(time / MILLISECONDS_IN_YEAR);
    date = `${calculatedTime} سال پیش`;
  }

  return date || "نامشخص";
};



type WithCreatedAt = {
  createdAt: string;
  [key: string]: any;
};

const sortByLast = <T extends WithCreatedAt>(array: T[]): T[] => {
  const sortedCourses = [...array].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return sortedCourses
}

export {
  MILLISECONDS_IN_SECOND,
  MILLISECONDS_IN_MINUTE,
  MILLISECONDS_IN_HOUR,
  MILLISECONDS_IN_DAY,
  MILLISECONDS_IN_WEEK,
  MILLISECONDS_IN_MONTH,
  MILLISECONDS_IN_YEAR,
  calculateRelativeTimeDifference,
  sortByLast
}