/**
 * Created by stan229 on 5/27/16.
 */
import { combineReducers } from "redux";

import userData from "../Containers/reducer";

import NavReducer from '../AppNavigation/reducer'

// Navigation
import { NavigatorTabOne } from '../TabBarNavigation/tabOne/navigationConfiguration'
import { NavigatorTabTwo } from '../TabBarNavigation/tabTwo/navigationConfiguration'
import { NavigatorTabThree } from '../TabBarNavigation/tabThree/navigationConfiguration'
import { NavigatorTabFour } from '../TabBarNavigation/tabFour/navigationConfiguration'
import {tabBarReducer } from '../TabBarNavigation/navigationConfiguration'


export default function getRootReducer() {
    // return combineReducers({
    //     nav: NavReducer,
    //     userData: userData
    // });

    return combineReducers({
            tabBar: tabBarReducer,

            tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),

            tabTwo: (state,action) => NavigatorTabTwo.router.getStateForAction(action,state),

            tabThree: (state,action) => NavigatorTabThree.router.getStateForAction(action,state),

            tabFour: (state,action) => NavigatorTabFour.router.getStateForAction(action,state),

            userData: userData
        });
}
