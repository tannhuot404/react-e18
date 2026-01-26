import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackParamList from "./HomeStackParamList";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

const HomeStackNavigation = createNativeStackNavigator<HomeStackParamList>({
  screens: {
    Home: HomeScreen,
    Detail: DetailScreen,
  },
});

export default HomeStackNavigation;
