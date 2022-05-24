import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../Pages/Login/Login";
import Home from "../../Pages/Home/Home";

const Stack = createNativeStackNavigator();

function NavigationLogin() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
export default NavigationLogin;
