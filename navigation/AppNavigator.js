import { createSwitchNavigator } from 'react-navigation';
import { newsStackNavigator } from './StackNavigator';
import HomeScreen from '../screens/Home';

export const AppNavigator = createSwitchNavigator({
  Home: HomeScreen,
  NewsApp: newsStackNavigator,
},
{
  initialRouteName: 'Home',
},
);
