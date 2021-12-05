import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab8c/8dd7/c270c78c34a63eda764c9fb10f52e699"
        }}
        style={styles.ImageBackground_3_29}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_73}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_14"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_81}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_36"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_85}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_34"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_87}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_34"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("101%") },
  ImageBackground_3_29: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  TouchableOpacity_3_73: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_3_81: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_3_85: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_3_87: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
