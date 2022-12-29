import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Draggable from 'react-native-draggable';

const TestScreen = () => {
  
  return (
    <View >
    <Draggable x={75} y={100} renderSize={56} renderColor='black' renderText='A' isCircle shouldReverse onShortPressRelease={()=>alert('touched!!')}/> 
    <Draggable x={200} y={300} renderColor='red' renderText='B'/>
    <Draggable/>
<Draggable x={50} y={50}>

</Draggable>
</View>
  );
}

export default TestScreen