
import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RecentScreen,CalendarScreen,SearchScreen, TestScreen, Test, TestScreen2 } from "../../screens";

type TopTab = {
  Recent: undefined;
  Calendar: undefined;
  Search: undefined;
    TestScreen: undefined;
    Test: undefined;
  };
  
export default function TopTab() {
    const Tab = createMaterialTopTabNavigator<TopTab>();
    return (
      <Tab.Navigator>
        <Tab.Screen name="Recent" component={RecentScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    )
  }