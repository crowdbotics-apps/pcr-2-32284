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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb3a/e58e/c1dadfd10b648e1a4da067ddb9d0f39b"
        }}
        style={styles.ImageBackground_3_25}
      />
      <View style={styles.View_3_55} />
      <View style={styles.View_3_54}>
        <Text style={styles.Text_3_54}>Podcaster Bob</Text>
      </View>
      <View style={styles.View_3_56} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06b6/f2e8/9d677ab05e4d28b6784bf5a3be4deebb"
        }}
        style={styles.ImageBackground_3_58}
      />
      <View style={styles.View_3_57}>
        <Text style={styles.Text_3_57}>B</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_6_108}
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
  ImageBackground_3_25: {
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
  View_3_55: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_3_54: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_3_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_56: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("15%"),
    backgroundColor: "rgba(187, 204, 89, 1)"
  },
  ImageBackground_3_58: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("25%")
  },
  View_3_57: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_3_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 80,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_6_108: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
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
