import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Container } from "../../components/Containers";

export default function Scan({ navigation, route }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    const handler = navigation.getParam("data");
    handler(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
          <ImageBackground
          source={require("../../assets/locationPage/background.png")}
          style={{ flex: 1, justifyContent: "center" }}
          >
          <View style={styles.container}>
            <BarCodeScanner
              onBarCodeScanned={handleBarCodeScanned}
              style={{ flex: 1 }}
            />
          </View>
          </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
