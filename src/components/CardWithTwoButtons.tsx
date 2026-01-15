import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface SocialSection {
    title: string,
    icon: React.ReactNode
}

const CardWithTwoButtons: FC<SocialSection> = ({title, icon}) => { // props
  return (
    <View style={styles.container}>
      <View style={styles.circleView}>
        {icon}
      </View>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <View style={styles.circleBlueBG}>
        <MaterialIcons name="send" size={20} color="white" />
      </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardWithTwoButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingVertical: s(9)
  },
  circleView: {
    height: vs(26),
    width: s(26),
    borderRadius: s(13),
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  circleBlueBG: {
    height: vs(30),
    width: s(30),
    borderRadius: s(15),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'blue'
  },
  title: {
    marginLeft: s(15),
    flex: 1
  }
});
