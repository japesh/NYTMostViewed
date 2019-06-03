import DetailsScreen from '../pages/detailScreen';
import HomeScreen from '../pages/homeScreen';
import { createStackNavigator } from "react-navigation";

export default createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#47e4c2',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
        marginLeft:-10,
        paddingLeft:0
      },
    },
  }
);
