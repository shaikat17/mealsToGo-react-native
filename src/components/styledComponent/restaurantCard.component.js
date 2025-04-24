import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { FlatList, Text } from "react-native";

export const RestaurantCardStyled = styled(Card)`
  background-color: white;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: bold;
  padding-top: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const RestaurantCardAddress = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-weight: bold;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export const RestaurantCardIcon = styled.Image`
  width: 20px;
  height: 20px;
`;
export const RestaurantCardIconContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RestaurantCardStar = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantCardStatus = styled.View`
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 15,
  },
})`
`;