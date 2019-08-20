import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import React from "react";

import {
  HomeScreen,
  SearchScreen,
  FavouritesScreen,
  ProfileScreen
} from "../screens";

import {
    Icon
} from "../componets";

const TabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
        }
      },
    //   SearchScreen: {
    //     screen: SearchScreen,
    //     navigationOptions: {
    //         tabBarIcon: ({ tintColor }) => <Icon name="search" color={tintColor} />
    //     }
    //   },
      FavouritesScreen: {
        screen: FavouritesScreen,
        navigationOptions: {
           // tabBarLabel: 'FavouritesScreen',
            tabBarIcon: ({ tintColor }) => <Icon name="favourites" color={tintColor} />,
        },
      },
      ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="profile" color={tintColor} />
        }
      }
});

export default createAppContainer(TabNavigator);