import {createDrawerNavigator} from 'react-navigation';
import MostViewed from './MostViewd';

export default createDrawerNavigator({
  Home: {
    screen: MostViewed,
  },
});
