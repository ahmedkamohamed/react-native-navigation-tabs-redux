'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import Repositories from '../../Containers/Repositories'

const routeConfiguration = {
  TabThreeScreenOne: { screen: Repositories },
}
// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRoute: 'TabThreeScreenOne'
}

export const NavigatorTabThree = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
