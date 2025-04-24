import { mocks } from "./mock";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Location not found");
    } else {
      resolve(mock);
    }
  });
};

restaurantRequest()
  .then((response) => {
    console.log("Restaurant data:", response);
  })
  .catch((error) => {
    console.error("Error fetching restaurant data:", error);
  });
