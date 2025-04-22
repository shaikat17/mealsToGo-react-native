import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text } from "react-native";

export const RestaurantCardStyled = styled(Card)`
  background-color: white;
  margin: ${(props) => props.theme.space[1]};
`;

export const RestaurantCardTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: bold;
  padding-top: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;
