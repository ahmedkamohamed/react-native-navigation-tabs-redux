'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import Notes from '../../Containers/Notes'

const routeConfiguration = {
  TabFourScreenOne: { screen: Notes },
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'TabFourScreenOne'
}

export const NavigatorTabFour = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
