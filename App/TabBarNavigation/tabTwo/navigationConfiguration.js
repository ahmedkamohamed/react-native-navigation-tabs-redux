'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import Profile from '../../Containers/Profile'

const routeConfiguration = {
  TabTwoScreenOne: { screen: Profile }
}
// going to disable the header for now

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'TabTwoScreenOne'
}

export const NavigatorTabTwo = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
