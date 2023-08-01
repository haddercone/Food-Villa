export function filteredRestaurants(searchText, actualData) {
  const data = actualData.filter((restaurant) => {
    console.log(restaurant);
    return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return data;
}
