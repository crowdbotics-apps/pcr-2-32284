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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b80/c703/eedb8441d46a9cdce82171d69053321b"
        }}
        style={styles.ImageBackground_3_23}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_50}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_52}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_11"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_71}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_21"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_4_96}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("4_93"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("101%") },
  ImageBackground_3_23: {
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
  TouchableOpacity_3_50: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("92%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_3_52: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("92%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_3_71: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_4_96: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("47%"),
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
