import styled from "styled-components/native";
import { Platform, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { Searchbar } from "react-native-paper";

export const SafeAreaViewStyled = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.OS === "android" ? Constants.statusBarHeight : 0}px;
`;

export const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const SearchBarStyle = styled(Searchbar)`
    background-color: white;
    border-color: #ccc;
    border-width: 1px;
    border-radius: 10px;
    `;

export const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;