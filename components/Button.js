import { Colors } from "@/utils/Colors";
import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({title,type,onPress}) => {  
    return (
        <Pressable style={[styles.button,
           {
          backgroundColor: type == "top" ? Colors.btnDark  : type == "right" ? Colors.btnRight : Colors.btnLight,
        },
        ]} 
        onPress={onPress}>
    <Text
        style={{
          fontSize: 27,
          color: type == "number" ? Colors.black : Colors.white,
        }}
      >
    {title}
     </Text>
     </Pressable>
       
    );

}

export default Button;

const styles = StyleSheet.create({

    button: {
        height: 50,
        width: 50,
        borderRadius: 10,
        padding: 10,
        backgroundColor: Colors.btnDark,
        justifyContent: "center",
        alignItems: "center",
    },
});

