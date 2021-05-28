import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ImageBackground } from "react-native";
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
    navigation.navigate(navigation.getParam("previousScreen"), {
      qrcode: data,
    });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ScrollView>
      <ImageBackground>
        <Container>
          <View style={styles.container}>
            <BarCodeScanner
              onBarCodeScanned={handleBarCodeScanned}
              style={{ flex: 1 }}
            />
          </View>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
