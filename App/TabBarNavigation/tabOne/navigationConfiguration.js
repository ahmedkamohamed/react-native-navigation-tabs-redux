'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import Main from '../../Containers/Main'

const routeConfiguration = {
  TabOneScreenOne: { screen: Main },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabOneScreenOne'
}

export const NavigatorTabOne = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
