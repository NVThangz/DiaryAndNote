import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, AppState, Alert } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import Screens from "./src/navigator";
import { store } from "./src/redux/store";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import PinCode from "./src/components/PinCode";
import { notification, pinCode } from "./src/types/OptionTypes";
import { getNotification, getPINCode } from "./src/asyncstorage";


export default function App() {
  const appState = useRef(AppState.currentState);

  const [pinCodeVisible, setPinCodeVisible] = useState(false);
  const [notification, setNotification] = useState(false);
  

  const [fontsLoaded] = useFonts({
    'Roboto': require("./assets/fonts/Roboto.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
    "Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
    'OpenSans': require("./assets/fonts/OpenSans.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Italic": require("./assets/fonts/OpenSans-Italic.ttf"),
    "OpenSans-BoldItalic": require("./assets/fonts/OpenSans-BoldItalic.ttf"),
    'AveriaSansLibre': require("./assets/fonts/AveriaSansLibre.ttf"),
    "AveriaSansLibre-Bold": require("./assets/fonts/AveriaSansLibre-Bold.ttf"),
    "AveriaSansLibre-Italic": require("./assets/fonts/AveriaSansLibre-Italic.ttf"),
    "AveriaSansLibre-BoldItalic": require("./assets/fonts/AveriaSansLibre-BoldItalic.ttf"),
    'ChakraPetch': require("./assets/fonts/ChakraPetch.ttf"),
    "ChakraPetch-Bold": require("./assets/fonts/ChakraPetch-Bold.ttf"),
    "ChakraPetch-Italic": require("./assets/fonts/ChakraPetch-Italic.ttf"),
    "ChakraPetch-BoldItalic": require("./assets/fonts/ChakraPetch-BoldItalic.ttf"),
    'DancingScript': require("./assets/fonts/DancingScript.ttf"),
    "DancingScript-Bold": require("./assets/fonts/DancingScript-Bold.ttf"),
    "DancingScript-Italic": require("./assets/fonts/DancingScript-Italic.ttf"),
    "DancingScript-BoldItalic": require("./assets/fonts/DancingScript-BoldItalic.ttf"),
    'JosefinSans': require("./assets/fonts/JosefinSans.ttf"),
    "JosefinSans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "JosefinSans-Italic": require("./assets/fonts/JosefinSans-Italic.ttf"),
    "JosefinSans-BoldItalic": require("./assets/fonts/JosefinSans-BoldItalic.ttf"),
    'LobsterTwo': require("./assets/fonts/LobsterTwo.ttf"),
    "LobsterTwo-Bold": require("./assets/fonts/LobsterTwo-Bold.ttf"),
    "LobsterTwo-Italic": require("./assets/fonts/LobsterTwo-Italic.ttf"),
    "LobsterTwo-BoldItalic": require("./assets/fonts/LobsterTwo-BoldItalic.ttf"),
    'TuesdayNight': require("./assets/fonts/TuesdayNight.otf"),
    "TuesdayNight-Bold": require("./assets/fonts/TuesdayNight-Bold.otf"),
    "TuesdayNight-Italic": require("./assets/fonts/TuesdayNight-Italic.otf"),
    "TuesdayNight-BoldItalic": require("./assets/fonts/TuesdayNight-BoldItalic.otf"),
    'MaterialIcons': require("./assets/fonts/MaterialIcons.ttf"),
  });

  useEffect(() => {

    async function prepare() {
      // const pinCodeParsed : pinCode = await getPINCode()
      const subscription = AppState.addEventListener("change", async nextAppState => {
        const pinCodeParsed : pinCode = await getPINCode()
        if(!pinCodeParsed) {
          await SplashScreen.preventAutoHideAsync();
          return
        }
        
        if (
          nextAppState === "active"
        ) {
          if(pinCodeParsed.enabled && (JSON.stringify(pinCodeParsed.code) !== JSON.stringify(["", "", "", ""]))) {
            setPinCodeVisible(true);
            console.log(pinCodeParsed.code)
          }
          else setPinCodeVisible(false);
        }
        appState.current = nextAppState;
      });
    }
    prepare();


    



    // return () => {
    //   subscription.remove();
    // };
  }, []);


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Screens />
        {pinCodeVisible && <PinCode setVisible={setPinCodeVisible}/>}
      </GestureHandlerRootView>
    </Provider>
  );
}
