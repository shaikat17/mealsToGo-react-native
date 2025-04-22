import { Avatar, Button, Card, Text } from 'react-native-paper';

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
    <Card elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
      <Text variant="titleLarge">{name}</Text>
    </Card.Content>
    
  </Card>
  );
};
