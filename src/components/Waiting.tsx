
import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";
import CountDown from 'react-native-countdown-fixed';
import { Colors } from '../constants/color';

const Waiting = ({setWaiting}) =>{
 
  return(
    <View style={styles.body}>
           <CountDown
        until={10}
        size={30}
        onFinish={() => setWaiting(false)}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: Colors.LIGHT_SKY_BLUE}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'MM', s: 'SS'}}
      />
    <Text style={styles.texts}>You  have to wait and enter pin again</Text>
    <View>
    </View>
    </View>
  );

}

const styles = StyleSheet.create({
 texts:{
   fontSize:20,
   fontWeight:'bold',
   fontFamily: "Roboto",
    color: "gray",
 },
 body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
 }
});

export default Waiting;