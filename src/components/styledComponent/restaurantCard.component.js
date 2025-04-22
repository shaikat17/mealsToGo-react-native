import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text } from "react-native";

export const RestaurantCardStyled = styled(Card)`
  background-color: white;
  margin: 10px;
`;

export const RestaurantCardTitle = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  padding-top: 15px;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;
