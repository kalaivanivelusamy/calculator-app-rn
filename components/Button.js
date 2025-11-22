import { Pressable, StyleSheet, Text } from "react-native";


const Button = (title,type,onPress) => {  
    return (
        <Pressable style={[styles.button,
           {
          backgroundColor:
            type == "top"
              ? Colors.btnDark
              : type == "right"
              ? Colors.btnRight
              : Colors.btnLight,
        },
        ]} 
        onPress={onPress}>
    <Text
        style={{
          fontSize: 34,
          color: type == "number" ? Colors.black : Colors.white,
        }}
      >
    {title}
     </Text>
     </Pressable>
       
    );

}

export default Button;

const syles = StyleSheet.create({

    button: {
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: "#f0f0f0",
        justifyContent: "center",
        alignItems: "center",
    },
});

