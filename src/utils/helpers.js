export function filteredRestaurants(searchText, actualData) {
  const data = actualData.filter((restaurant) => {
    return restaurant.data.data.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return data;
}
