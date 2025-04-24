
import { FlatList } from "react-native";
import { RestaurantInfoCard } from "../restaurantInfoCard.components";
import {
  SafeAreaViewStyled,
  SearchBarContainer,
  SearchBarStyle,
} from "../styledComponent/restaurentScreenStyles.component";
import { RestaurantList } from "../styledComponent/restaurantCard.component";

export const RestaurantScreen = () => {
  return (
    <SafeAreaViewStyled>
      <SearchBarContainer>
        <SearchBarStyle/>
      </SearchBarContainer>
      <RestaurantList
      data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 10 }}
      />
    </SafeAreaViewStyled>
  );
};

