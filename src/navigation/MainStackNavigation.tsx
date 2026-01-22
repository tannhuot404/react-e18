import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import RootStackParamList from "./RootStackParamList";

const RootStack = createNativeStackNavigator<RootStackParamList>({
    screenOptions: {
        headerShown: false
    },
  screens: {
    Login: LoginScreen,
    ContactUs: ContactUsScreen
  },
});

const Navigation = createStaticNavigation(RootStack);

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export default Navigation;