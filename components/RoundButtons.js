import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
} from "react-native";
import { WithLocalSvg as Icon } from "react-native-svg";

export const RoundButton = ({ navigation, destination, svg, title, color }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(destination);
      }}
    >
      <View style={styles.buttonBox}>
        <View style={[styles.button, colors[color]]}>
          <Icon
            width={Dimensions.get("window").width * 0.2}
            height={Dimensions.get("window").width * 0.2}
            asset={svg}
          />
          {/* Dimensions.get("window").width * 0.18, */}
        </View>
        <Text style={[styles.buttonText, textColors[color]]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

//poszczególne przyciski menu
export const PackageButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="yellow"
      svg={require("../assets/icons/package-2-512.svg")}
      destination="ArticleMenu"
      title="Towar"
    />
  );
};

export const LocationButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="gray"
      svg={require("../assets/icons/pin-9-512.svg")}
      destination="LocationMenu"
      title="Lokalizacja"
    />
  );
};

export const UsersButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="blue"
      svg={require("../assets/icons/user-5-512.svg")}
      destination="UsersMenu"
      title="Użytkownicy"
    />
  );
};

export const SettingsButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="sand"
      svg={require("../assets/icons/settings-4-512.svg")}
      destination="Settings"
      title="Ustawienia"
    />
  );
};

// Przyciski w sekcji "Towar (ArticleMenu)"
export const ManagmentButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="blue"
      svg={require("../assets/icons/text-file-6-512.svg")}
      destination="Managment"
      title="Zarządzanie"
    />
  );
};

export const AddArticleButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="gray"
      svg={require("../assets/icons/plus-512.svg")}
      destination="ArticlePanelSave"
      title="Dodaj"
    />
  );
};

//poszczególne przyciski ustawień
export const ChangePasswordButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="yellow"
      svg={require("../assets/icons/lock-7-512.svg")}
      destination="AccountChangePassword"
      title="Zmień hasło"
    />
  );
};

export const AccountInfoButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="gray"
      svg={require("../assets/icons/info-2-512.svg")}
      destination="AccountInfo"
      title="Informacje"
    />
  );
};

export const DeleteAccountButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="blue"
      svg={require("../assets/icons/x-mark-4-512.svg")}
      destination="DeleteAccount"
      title="Usuń konto"
    />
  );
};
// przycisk "Odtowaruj"
export const RemoveStockedArticleButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="yellow"
      svg={require("../assets/icons/empty-box-512.svg")}
      destination="ScanArticle"
      title="Odtowaruj"
    />
  );
};
// przycisk "Dotowaruj"
export const AddStockedArticleButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="sand"
      svg={require("../assets/icons/filled-box-512.svg")}
      destination="ScanLocation"
      title="Dotowaruj"
    />
  );
};

export const LocationInfoButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="gray"
      svg={require("../assets/icons/info-2-512.svg")}
      destination="ScanLocation"
      title="Informacje"
    />
  );
};
export const LocationAddNewButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="sand"
      svg={require("../assets/icons/plus-512.svg")}
      destination="LocationEditDelete"
      title="Dodaj"
    />
  );
};

// Przyciski w Zarządzaniu (Managment)
export const ArticleInfoButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="blue"
      svg={require("../assets/icons/info-2-512.svg")}
      destination="ScanArticle"
      title="Informacje"
    />
  );
};

export const ReportsButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="yellow"
      svg={require("../assets/icons/description-icon-21.svg")}
      destination=""
      title="Raporty"
    />
  );
};

export const UsersInfoButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="blue"
      svg={require("../assets/icons/info-2-512.svg")}
      destination="UsersTable"
      title="Informacje"
    />
  );
};

export const UserAddNewButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="yellow"
      svg={require("../assets/icons/plus-7-512.svg")}
      destination="UserPanelSave"
      title="Dodaj Nowego"
    />
  );
};

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
