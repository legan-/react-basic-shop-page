export default receivedData => {
  return new Promise((resolve, reject) => {
    try {
      const byId = receivedData.reduce((store, {
        id,
        title,
        brand,
        size,
        price,
        img,
        sold
      }) => {
        store[id] = {
          id: id.toString(),
          title,
          brand,
          size,
          price,
          img,
          sold
        };

        return store;
      }, {});

      resolve(byId);
    } catch (error) {
      reject(error);
    }
  });
};