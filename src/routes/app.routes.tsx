import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home";
import Meal from "@screens/Meal";
import CreateEditMeal from "@screens/CreateEditMeal";
import NewMealFeedback from "@screens/NewMealFeedback";
import Statistic from "@screens/Statistic";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Statistics" component={Statistic} />
      <Screen name="CreateEditMeal" component={CreateEditMeal} />
      <Screen name="NewMealFeedback" component={NewMealFeedback} />
      <Screen name="Meal" component={Meal} />
    </Navigator>
  );
}
