const parseTitle = (title) => {
  const parts = title.split(" - ");
  return { name: parts[0], color: parts[1] };
};

export default parseTitle;
