const calculateRelativeTimeDifference = (createdAt: string) => {
  const currentTime = new Date();
  const createdTime = new Date(createdAt);
  const time = currentTime.getTime() - createdTime.getTime();
  // console.log(time);
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = week * 4 + 2;
  const year = month * 12;

  let date = null;

  if (time < minute) {
    date = "لحظاتی پیش";
  } else if (time < hour) {
    const calculatedTime = Math.floor(time / minute);
    date = `${calculatedTime} دقیقه پیش`;
  } else if (time < day) {
    const calculatedTime = Math.floor(time / hour);
    date = `${calculatedTime} ساعت پیش`;
  } else if (time < week) {
    const calculatedTime = Math.floor(time / day);
    date = `${calculatedTime} روز پیش`;
  } else if (time < month) {
    
    const calculatedTime = Math.floor(time / week);
    date = `${calculatedTime} هفته پیش`;
  } else if (time < year) {
    const calculatedTime = Math.floor(time / month);
    date = `${calculatedTime} ماه پیش`;
  } else if (time >= week) {
    const calculatedTime = Math.floor(time / week);
    date = `${calculatedTime} سال پیش`;
  }

  return date || "نامشخص";
};

export{
  calculateRelativeTimeDifference
}