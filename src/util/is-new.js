const isNew = (dateString) => {
  const published = new Date(dateString);
  const now = new Date();
  const diff = now - published; // diff is the millisecond difference
  const days = diff / 1000 / 3600 / 24; // 1000 ms in a second, 3600 seconds in an hour, 24 hours in a day
  return days <= 7;
};

export default isNew;
