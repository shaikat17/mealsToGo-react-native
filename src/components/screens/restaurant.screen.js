
import { RestaurantInfoCard } from "../restaurantInfoCard.components";
import {
  SafeAreaViewStyled,
  SearchBarContainer,
  SearchBarStyle,
  RestaurantListContainer,
} from "../styledComponent/restaurentScreenStyles.component";

export const RestaurantScreen = () => {
  return (
    <SafeAreaViewStyled>
      <SearchBarContainer>
        <SearchBarStyle/>
      </SearchBarContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeAreaViewStyled>
  );
};

