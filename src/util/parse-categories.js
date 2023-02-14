const parseCategories = (data) => {
  return data.reduce((acc, current) => {
    const type = current.product_type;
    if (acc[`${type}`]) {
      acc[`${type}`].push(current);
    } else {
      acc[`${type}`] = [current];
    }
    return acc;
  }, {});
};

export default parseCategories;
