import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Image} from "react-native";
import {WithLocalSvg as Icon} from 'react-native-svg';

export const IconButton = ({ navigation, destination, svg, title, color}) => {
    return(
        <TouchableOpacity
        onPress={() => {
            navigation.navigate(destination);
          }}
        >

            <View style={styles.buttonBox}>
                <View style={[ styles.button, colors[color] ]}>
                    <Icon 
                    width={Dimensions.get("window").width * 0.2}
                    height={Dimensions.get("window").width * 0.2}
                    asset={svg}
                    />
                    {/* Dimensions.get("window").width * 0.18, */}
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

//poszczególne przyciski menu
export const PackageButton = ({ navigation }) => {
    return (
      <IconButton
        navigation={navigation}
        color="yellow"
        svg={require("../assets/icons/document.svg")}
        destination="ArticleMenu"
        title="Towar"
      />
    );
  };
  
  export const LocationButton = ({ navigation }) => {
    return (
      <IconButton
        navigation={navigation}
        color="gray"
        svg={require("../assets/icons/document.svg")}
        destination="LocationMenu"
        title="Lokalizacja"
      />
    );
  };
  
  export const UsersButton = ({ navigation }) => {
    return (
      <IconButton
        navigation={navigation}
        color="blue"
        svg={require("../assets/icons/document.svg")}
        destination="UsersMenu"
        title="Użytkownicy"
      />
    );
  };
  
  export const SettingsButton = ({ navigation }) => {
    return (
      <IconButton
        navigation={navigation}
        color="sand"
        svg={require("../assets/icons/document.svg")}
        destination="Settings"
        title="Ustawienia"
      />
    );
  };
  
  // Przyciski w sekcji "Towar (ArticleMenu)"
  export const ManagmentButton = ({ navigation }) => {
    return (
      <IconButton
        navigation={navigation}
        color="blue"
        svg={require("../assets/icons/document.svg")}
        destination="Managment"
        title="Zarządzanie"
      />
    );
  };
  
  export const AddArticleButton = ({ navigation }) => {
    return (
      <IconButton
        navigation={navigation}
        color="gray"
        svg={require("../assets/icons/document.svg")}
        destination="ArticlePanelSave"
        title="Dodaj"
      />
    );
  };
  
  
  //poszczególne przyciski ustawień
  export const ChangePasswordButton = ({navigation}) => {
      return(
          <IconButton
          navigation={navigation}
          color="yellow"
          svg={require("../assets/icons/document.svg")}
          destination="AccountChangePassword"
          title="Zmień hasło"
          />
      )
  }
  
  export const AccountInfoButton = ({navigation}) => {
      return(
          <IconButton
          navigation={navigation}
          color="gray"
          svg={require("../assets/icons/document.svg")}
          destination="AccountInfo"
          title="Informacje"
          />
      )
  }
  
  export const DeleteAccountButton = ({navigation}) => {
      return(
          <IconButton
          navigation={navigation}
          color="blue"
          svg={require("../assets/icons/document.svg")}
          destination="DeleteAccount"
          title="Usuń konto"
          />
      )
  }
  // przycisk "Odtowaruj"
  export const RemoveStockedArticleButton = ({ navigation }) => {
    return (
      <IconButton
        navigation={navigation}
        color="yellow"
        svg={require("../assets/icons/document.svg")}
        destination="ScanArticle"
        title="Odtowaruj"
      />
    );
  };
  // przycisk "Dotowaruj"
  export const AddStockedArticleButton = ({ navigation }) => {
    return (
      <IconButton
        navigation={navigation}
        color="sand"
        svg={require("../assets/icons/document.svg")}
        destination="ScanLocation"
        title="Dotowaruj"
      />
    );
  };
  
  
  export const LocationInfoButton = ({navigation}) => {
      return(
          <IconButton
          navigation={navigation}
          color="gray"
          svg={require("../assets/icons/document.svg")}
          destination="ScanLocation"
          title="Informacje"
          />
      )
  }
  export const LocationAddNewButton = ({navigation}) => {
      return(
          <IconButton
          navigation={navigation}
          color="sand"
          svg={require("../assets/icons/document.svg")}
          destination="LocationEditDelete"
          title="Dodaj"
          />
      )
  }
  
  // Przyciski w Zarządzaniu (Managment)
  export const ArticleInfoButton = ({ navigation }) => {
    return (
      <IconButton
        navigation={navigation}
        color="blue"
        svg={require("../assets/icons/document.svg")}
        destination="ScanArticle"
        title="Informacje"
      />
    );
  };
  
  
  export const ReportsButton = ({ navigation }) => {
    return (
      <IconButton
        navigation={navigation}
        color="yellow"
        svg={require("../assets/icons/document.svg")}
        destination=""
        title="Raporty"
      />
    );
  };
  
  export const UsersInfoButton = ({navigation}) => {
    return (
      <IconButton
        navigation={navigation}
        color="blue"
        svg={require("../assets/icons/document.svg")}
        destination="UsersTable"
        title="Informacje"
      />
    );
  };
  
  export const UserAddNewButton = ({navigation}) => {
    return (
      <IconButton
        navigation={navigation}
        color="yellow"
        svg={require("../assets/icons/document.svg")}
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
  