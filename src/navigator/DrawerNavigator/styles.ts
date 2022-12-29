import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../constants/color";

const createStyles = () =>
  StyleSheet.create({
    image: {
        width: 200,
        height: 180,
    },
    body: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: RFValue(25),
      fontWeight: "300",
      color: Colors.BLACK,
    },
    item: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: 20,
    },
    header: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: 40,
    }
  });

export default createStyles;
