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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d20/8e6d/16e6425e54cd48a559a8093f5298c6a6"
        }}
        style={styles.ImageBackground_3_27}
      />
      <View style={styles.View_3_69} />
      <TouchableOpacity
        style={styles.TouchableOpacity_6_102}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_16"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_6_104}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_17"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_6_106}
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
  ImageBackground_3_27: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("101%"),
    minHeight: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_3_69: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_6_102: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("26%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_6_104: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_6_106: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("45%"),
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
