export const mockState = {
  inventory: {
    entities: {
      products: {
        byId: {
          1: {
            id: 1,
            name: "Exforge 10mg",
            prices: [1, 2],
          },
          2: {
            id: 2,
            name: "Exforge 20mg",
            prices: [3, 4],
          },
          3: {
            id: 3,
            name: "Paracetamol 20MG",
            prices: [5, 6],
          },
        },
        allIds: ["1", "2", "3"],
      },
      prices: {
        byId: {
          1: {
            id: 1,
            price: 10.99,
            date: "2019-01-01T17:16:32+00:00",
          },
          2: {
            id: 2,
            price: 9.2,
            date: "2018-11-01T17:16:32+00:00",
          },
          3: {
            id: 3,
            price: 12,
            date: "2019-01-01T17:16:32+00:00",
          },
          4: {
            id: 4,
            price: 13.2,
            date: "2018-11-01T17:16:32+00:00",
          },
          5: {
            id: 5,
            price: 5,
            date: "2017-01-01T17:16:32+00:00",
          },
          6: {
            id: 6,
            price: 13.2,
            date: "2018-11-01T17:16:32+00:00",
          },
        },
        allIds: ["1", "2", "3", "4", "5", "6"],
      },
    },
  },
};
