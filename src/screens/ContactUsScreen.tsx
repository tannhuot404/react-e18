import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../components/BackButton";
import { s, vs } from "react-native-size-matters";
import CardWithTwoButtons from "../components/CardWithTwoButtons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ContactUsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
        <BackButton />
        <Image
          style={styles.avatarImg}
          source={{
            uri: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8",
          }}
        />
      </View>

      <Text style={styles.headerTitle}>Contac Us</Text>

      <View style={styles.socialSection}>
        <Text>Social Media Platforms</Text>
        <CardWithTwoButtons
          title={"WhatApp"}
          icon={<FontAwesome name="whatsapp" size={24} color="black" />}
        />
        <CardWithTwoButtons
          title={"WhatApp"}
          icon={<FontAwesome name="whatsapp" size={24} color="black" />}
        />
        <CardWithTwoButtons
          title={"WhatApp"}
          icon={<FontAwesome name="whatsapp" size={24} color="black" />}
        />
        <CardWithTwoButtons
          title={"WhatApp"}
          icon={<FontAwesome name="whatsapp" size={24} color="black" />}
        />
        <CardWithTwoButtons
          title={"WhatApp"}
          icon={<FontAwesome name="whatsapp" size={24} color="black" />}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  avatarImg: {
    width: s(30),
    height: vs(30),
    borderRadius: s(10),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: vs(26),
    marginBottom: vs(26),
  },
  socialSection: {
    backgroundColor: "pink",
    borderRadius: 20,
    gap: vs(14),
    padding: s(25),
  },
});
