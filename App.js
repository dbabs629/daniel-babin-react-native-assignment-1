import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft, zoomIn, flipX, flipY } from 'react-navigation-transitions';

import StartScreen from './screens/start';
import HalfwayScreen from './screens/halfway';
import FinishScreen from './screens/finish';

// Tab Navigator
const StartNavigator = createBottomTabNavigator(
  {
    //settings my routes and the screens they are referencing
    Start: { screen: StartScreen },
    Halfway: { screen: HalfwayScreen },
    Finish: { screen: FinishScreen },
  },
  {
    initialRouteName: 'Start'
  }
)

export default createAppContainer(
  createStackNavigator(
    {
      App: StartNavigator,
      Start: StartNavigator
    },
    {
      //Initial route when app opens is displayed
      initialRouteName: 'Start',
      //zoomIn vs from right etc.. Transition animation in a way
      transitionConfig: () => zoomIn(),
      //no header displayed
      navigationOptions: {
        headerVisible: false,
      },
      //no swipe gesture functionality when the user swipes right or left
      defaultNavigationOptions: {
        gesturesEnabled: false
      }
    }
    
  )
);
