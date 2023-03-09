const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Bange",
          last: "Seb",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/23.jp",
        },
        login: {
          username: "Seb",
        },
      },
    ],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
