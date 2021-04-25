import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSidebarMenu  from './customSidebarMenu';
import MyBartersScreen from '../screens/MyBartersScreen';
import SettingScreen from '../screens/SettingScreen';
import MyRecievedItemScreen from '../screens/MyRecievedBookScreen';
import NotificationScreen from '../screens/NotificationsScreen';
import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions : {
      drawerIcon:<Icon name="home" type="font-awesome"/>
    }
    },
  MyBarters:{
      screen : MyBartersScreen,
      navigationOptions : {
        drawerIcon:<Icon name="gift" type="font-awesome"/>,
      drawerLabel:"My Barters"
      }
    },
  Notifications :{
    screen : NotificationScreen,
    navigationOptions:{
      drawerIcon:<Icon name="bell" type="font-awesome"/>,
      drawerLabel:"Notifications"
    }
  },
  MyRecievedItemScreen:{
    screen: MyRecievedItemScreen,
    navigationOptions:{
      drawerIcon:<Icon name="gift" type="font-awesome"/>,
      drawerLabel:"My Recieved Items"
    }
  },
    Setting : {
      screen : SettingScreen,
      navigationOptions:{
        drawerIcon:<Icon name="settings" type="fontawesome"/>,
        drawerLabel:"Settings"
      }
    }
},
  {
    contentComponent:CustomSidebarMenu
  },
  {
    initialRouteName : 'Home'
  })