import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './Pages/Login';
import Main from './Pages/Main';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
  })
);
