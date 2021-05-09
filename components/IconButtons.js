import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Image} from "react-native";

export const IconButton = () => {
    return(
        <TouchableOpacity
        onPress={() => {
            navigation.navigate(destination);
          }}
        >

            <View style={styles.buttonBox}>
                <View style={[ styles.button, colors[color] ]}>
                    <Icon 
                    familyOfIcons = {familyOfIcons}
                    icon = {icon}
                    />
                </View>
                <Text
                style={[ styles.buttonText, textColors[color] ]}
                >
                    {title}
                </Text>
            </View>
          </TouchableOpacity>
    );
}

//style
const styles = StyleSheet.create({
    buttonBox: {
      marginHorizontal: Dimensions.get("window").width * 0.03,
      marginVertical: Dimensions.get("window").width * 0.03,
    },
    button: {
      width: Dimensions.get("window").width * 0.4,
      height: Dimensions.get("window").width * 0.4,
      borderRadius: Math.ceil(Dimensions.get("window").width * 0.4),
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
    },
    buttonText: {
      marginTop: 5,
      textTransform: "uppercase",
      fontSize: 24,
      fontWeight: "600",
      alignSelf: "center",
    },
    buttonBlue: {
      backgroundColor: "#cee6f8",
    },
    buttonYellow: {
      backgroundColor: "#ffc06f",
    },
    buttonGray: {
      backgroundColor: "#adc4d5",
    },
    buttonSand: {
      backgroundColor: "#ffdbab",
    },
    textBlue: {
      color: "#cee6f8",
    },
    textYellow: {
      color: "#ffc06f",
    },
    textGray: {
      color: "#adc4d5",
    },
    textSand: {
      color: "#ffdbab",
    },
  });
  
  const colors = {
    yellow: styles.buttonYellow,
    gray: styles.buttonGray,
    blue: styles.buttonBlue,
    sand: styles.buttonSand,
  };
  const textColors = {
    yellow: styles.textYellow,
    gray: styles.textGray,
    blue: styles.textBlue,
    sand: styles.textSand,
  };
  