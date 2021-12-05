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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81b1/6780/e2591f97b7b94ceff3aaa8dba2fb5ad6"
        }}
        style={styles.ImageBackground_3_10}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_42}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_11"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_44}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_14"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_3_63}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("3_17"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("101%") },
  ImageBackground_3_10: {
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
  TouchableOpacity_3_42: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("93%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_3_44: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("92%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  TouchableOpacity_3_63: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
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
