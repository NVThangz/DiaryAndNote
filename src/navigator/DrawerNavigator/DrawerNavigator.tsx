import { Button } from "react-native";
import React from "react";
import { SettingsScreen } from "../../screens";
import { createDrawerNavigator} from '@react-navigation/drawer';
import TopTab from "../MaterialTopTabsNavigator";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import MyCustomDrawerContent from "./DrawerContent";


export default function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={MyCustomDrawerContent}>
      <Drawer.Screen name="Nhật ký" component={TopTab}/>
    </Drawer.Navigator>
  ) }