import React from "react";
import { Feather, Foundation, Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Image} from "react-native";


//Element po którym pseudo dziedziczy, dla reacta się na to mówi "zawieranie"
export const RoundButton = ({navigation, destination, icon, familyOfIcons, title, color}) => {
    
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




// CustomRoundButton to przycisk który potrzebuje specjalnej grafiki (takiej której nie ma w "@expo/vector-icons")
export const CustomRoundButton = ({
  navigation,
  destination,
  src,
  title,
  color,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(destination);
      }}
    >
      <View style={styles.buttonBox}>
        <View style={[styles.button, colors[color]]}>
          <Image
            source={src}
            style={{
              maxWidth: Dimensions.get("window").width * 0.18,
              resizeMode: "contain",
            }}
          ></Image>
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
      icon="package"
      destination="ArticleMenu"
      title="Towar"
    />
  );
};

export const Icon = ({familyOfIcons, icon}) => {
    if(familyOfIcons == null)
        return(<Feather name={icon} size={Dimensions.get('window').width * 0.18} color="white" />)
    else
    if(familyOfIcons == "Foundation")
        return(<Foundation name={icon} size={Dimensions.get('window').width * 0.25} color="white" />)
    else
    if(familyOfIcons == "Ionicons")
            return(<Ionicons name={icon} size={Dimensions.get('window').width * 0.25} color="white" />)
}

export const LocationButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="gray"
      icon="map-pin"
      destination="Raport"
      title="Lokalizacja"
    />
  );
};

export const UsersButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="blue"
      icon="users"
      destination="Raport"
      title="Użytkownicy"
    />
  );
};

export const SettingsButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="sand"
      icon="settings"
      destination="Settings"
      title="Ustawienia"
    />
  );
};

// Przyciski w sekcji "Towar (ArticleMenu)"
export const ManagmentButton = ({ navigation }) => {
  return (
    <CustomRoundButton
      navigation={navigation}
      color="blue"
      src={require("../assets/articleMenuPage/textFile.png")}
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
      icon="plus"
      destination="ArticlePanelSave"
      title="Dodaj"
    />
  );
};


//poszczególne przyciski ustawień
export const ChangePasswordButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="yellow"
        familyOfIcons="Foundation"
        icon="lock"
        destination="AccountChangePassword"
        title="Zmień hasło"
        />
    )
}

export const AccountInformationButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="gray"
        familyOfIcons="Ionicons"
        icon="information-circle-outline"
        destination="AccountInformation"
        title="Informacje"
        />
    )
}

export const DeleteAccountButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="blue"
        familyOfIcons="Foundation"
        icon="x-circle"
        destination="DeleteAccount"
        title="Usuń konto"
        />
    )
}
// przycisk "Odtowaruj"
export const RemoveStockedArticleButton = ({ navigation }) => {
  return (
    <CustomRoundButton
      navigation={navigation}
      color="yellow"
      src={require("../assets/articleMenuPage/emptyBox.png")}
      destination="ScanArticle"
      title="Odtowaruj"
    />
  );
};
// przycisk "Dotowaruj"
export const AddStockedArticleButton = ({ navigation }) => {
  return (
    <CustomRoundButton
      navigation={navigation}
      color="sand"
      src={require("../assets/articleMenuPage/filledBox.png")}
      destination="ScanLocation"
      title="Dotowaruj"
    />
  );
};


export const InfoButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="gray"
        icon="info"
        destination="Raport"
        title="Informacje"
        />
    )
}
export const PlusButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="sand"
        icon="plus"
        destination="Raport"
        title="Dodaj"
        />
    )
}

// Przyciski w Zarządzaniu (Managment)
export const ArticleInformationButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="blue"
      icon="info"
      destination="ScanArticle"
      title="Informacje"
    />
  );
};


export const ReportsButton = ({ navigation }) => {
  return (
    <CustomRoundButton
      navigation={navigation}
      color="yellow"
      src={require("../assets/managmentPage/notepad.png")}
      destination=""
      title="Raporty"
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
