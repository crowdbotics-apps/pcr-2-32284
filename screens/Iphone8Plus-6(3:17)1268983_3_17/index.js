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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0594/2a8e/ccd7e8c07c2df39f254fbd5c15abf26f"
        }}
        style={styles.ImageBackground_3_26}
      />
      <TouchableOpacity
        source={{ uri: "null" }}
        style={styles.TouchableOpacity_3_65}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_16"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_67}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_19"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_6_111}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("101%") },
  ImageBackground_3_26: {
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
  TouchableOpacity_3_65: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("69%")
  },
  TouchableOpacity_3_67: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("95%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_6_111: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("5%"),
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
