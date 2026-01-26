import { createStaticNavigation } from "@react-navigation/native";
import ContactUsScreen from "../screens/ContactUsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigation from "./HomeStackNavigation";
import HomeStackParamList from "./HomeStackParamList";
import { FontAwesome6, Entypo } from "@expo/vector-icons";

const BottomNavigation = createBottomTabNavigator({
  screenOptions: {
    headerShown: false,
    tabBarActiveTintColor: "blue",
    // tabBarInactiveTintColor
  },
  screens: {
    HomeStack: {
      screen: HomeStackNavigation,
      options: {
        title: "Home",
        tabBarIcon: ({ color, size }) => {
          return <Entypo name="home" size={size} color={color} />;
        },
      },
    },
    ContactUs: {
      screen: ContactUsScreen,
      options: {
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome6 name="contact-card" size={size} color={color} />;
        },
      },
    },
  },
});


declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackParamList {}
  }
}

export default BottomNavigation;
