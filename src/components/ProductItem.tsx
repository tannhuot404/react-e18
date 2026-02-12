import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { memo } from "react";
import { s, vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HomeStackParamList from "../navigation/HomeStackParamList";
import { ProductRes } from "../network/service/productService";
import { Image } from "expo-image";

const screenWidth = Dimensions.get("window").width;
const itemSize = (screenWidth - 16 * 3) / 2;

const ProductItem = ({ item }: { item: ProductRes }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  console.log("Render item: ", item.id);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { id: item.id })}
    >
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={item.image}
          contentFit="cover"
          placeholder={require("../../assets/placeHolderImage.png")}
          placeholderContentFit="cover"
        />
        <View style={styles.overlayView}></View>
        <Text style={styles.title}>{item.name}</Text>
        {item.discount > 0 && (
          <View style={styles.discountView}>
            <Text style={{ color: "white" }}>{item.discount}% off</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default memo(ProductItem);

const styles = StyleSheet.create({
  container: {
    width: itemSize,
    height: 200,
  },
  img: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: s(20),
  },
  title: {
    position: "absolute",
    bottom: vs(10),
    left: s(10),
    color: "white",
  },
  overlayView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
    borderRadius: s(20),
  },
  discountView: {
    height: vs(20),
    width: s(60),
    borderRadius: vs(20),
    backgroundColor: "red",
    position: "absolute",
    top: s(10),
    right: s(15),
    alignItems: "center",
    justifyContent: "center",
  },
});
