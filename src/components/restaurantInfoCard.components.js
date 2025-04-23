import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import {
  RestaurantCardAddress,
  RestaurantCardCover,
  RestaurantCardIcon,
  RestaurantCardIconContainer,
  RestaurantCardStar,
  RestaurantCardStatus,
  RestaurantCardStyled,
  RestaurantCardTitle,
} from "./styledComponent/restaurantCard.component";
import star from "../../assets/star";
import open from "../../assets/open";
import { Text, View } from "react-native";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant Name",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    address = "Some Address",
    isOpenNow = true,
    rating = 4,
    photos = [
      "https://i0.wp.com/picjumbo.com/wp-content/uploads/honey-cake.jpg",
    ],
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  const starArray = ratingArray.map((_, i) => (
    <SvgXml key={i} xml={star} width={20} height={20} />
  ));

  return (
    <RestaurantCardStyled elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Card.Content>
        <RestaurantCardTitle>{name}</RestaurantCardTitle>
        <RestaurantCardIconContainer>
          <RestaurantCardStar>
            {starArray}
          </RestaurantCardStar>
          {isClosedTemporarily && (
            <RestaurantCardStatus>
              <Text style={{ color: "red", fontFamily: "Lato_400Regular" }}>Closed Temporarily</Text>
            </RestaurantCardStatus>
          )}
          {isClosedTemporarily && (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SvgXml
              xml={open}
              width={20}
              height={20} style={{ marginRight: 10}} />
            <RestaurantCardIcon
              source={{ uri: icon }} />
            </View>
          )}
        </RestaurantCardIconContainer>
        <RestaurantCardAddress>{address}</RestaurantCardAddress>
      </Card.Content>
    </RestaurantCardStyled>
  );
};
