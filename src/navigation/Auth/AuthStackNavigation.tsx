import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackParamList from "./AuthStackParamList";
import LoginScreen from "../../screens/Auth/LoginScreen";
import RegisterScreen from "../../screens/Auth/RegisterScreen";
import BottomNavigation from "../MainStackNavigation";
import { createStaticNavigation } from "@react-navigation/native";

const RootStack = createNativeStackNavigator<AuthStackParamList>({
  screenOptions: { headerShown: false },
  screens: {
    Login: LoginScreen,
    Register: RegisterScreen,
    MainStack: BottomNavigation,
  },
});

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}

const AuthStackNavigation = createStaticNavigation(RootStack);
export default AuthStackNavigation;
