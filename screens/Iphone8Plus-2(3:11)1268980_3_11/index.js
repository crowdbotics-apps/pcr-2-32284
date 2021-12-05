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
      <View style={styles.View_3_12}>
        <Text text="" style={styles.Text_3_12} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b8f/75b0/1eec9fe1418671daed1b2a3f8c01fb14"
        }}
        style={styles.ImageBackground_3_13}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_46}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_48}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_14"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_59}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_16"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_61}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_17"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("101%") },
  View_3_12: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_3_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_13: {
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
  TouchableOpacity_3_46: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("93%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_3_48: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("93%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_3_59: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("61%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_3_61: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("15%"),
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
