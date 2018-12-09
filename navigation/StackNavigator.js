import { createStackNavigator } from 'react-navigation';
import NewsSourcesScreen from '../screens/NewsSources';

export const newsStackNavigator = createStackNavigator({
  NewsSources: NewsSourcesScreen,
},
{
  initialRouteName: 'NewsSources',
  defaultNavigationOptions: {
    header: null,
  },
},

);
