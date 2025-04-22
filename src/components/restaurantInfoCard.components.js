import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { RestaurantCardCover, RestaurantCardStyled, RestaurantCardTitle } from "./styledComponent/restaurantCard.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant Name",
    icon,
    address = "Some Address",
    isOpenNow = true,
    rating = 4,
    photos = [
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/honey-cake.jpg",
    ],
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCardStyled elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Card.Content>
        <RestaurantCardTitle>
          {name}
        </RestaurantCardTitle>
      </Card.Content>
    </RestaurantCardStyled>
  );
};
