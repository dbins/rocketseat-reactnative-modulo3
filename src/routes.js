import { createStackNavigator, createAppContainer } from 'react-navigation';
import { colors } from './styles';
import Main from './pages/main';
import Favorites from './pages/favorites';

const Rotas = createStackNavigator(
  {
    Main: { screen: Main },
    Favorites: { screen: Favorites },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryDark,
      },
      headerTintColor: colors.white,
      headerBackTitle: null,
    },
  },
);

const Routes = createAppContainer(Rotas);

export default Routes;
