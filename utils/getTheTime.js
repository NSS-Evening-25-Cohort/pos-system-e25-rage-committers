const getTheTime = () => {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = date.getMonth() + 1;
  const monthCorrected = month.toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const min = date.getMinutes().toString().padStart(2, '0');
  const sec = date.getSeconds().toString().padStart(2, '0');
  const ms = date.getMilliseconds().toString().padStart(2, '0');
  const timeString = `${year}-${monthCorrected}-${day}T${hour}:${min}:${sec}:${ms}`;
  return timeString;
};

export default getTheTime;
