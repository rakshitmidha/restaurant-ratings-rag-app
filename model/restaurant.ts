export interface Restaurant {
  name: string;
  address: string;
  cuisine: string;
  rating: number;
  reviews: string[];
}

export interface RestaurantMatch {
  restaurant: Restaurant;
  relevance: number;
}
