import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { Colors, ownersButtons } from "@/constants";
import { router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {};

const handleLinkPress = (link: string) => {
  if (link === "") {
    return Alert.alert(
      "Alert",
      "Please wait , we are currently working on this feature. Stay tuned for next update."
    );
  }
  return router.push(link as any);
};

// handle logout function
const handlelogout = () => {
  console.log("Log out button clicked.");
  Alert.alert("Warning", "Logging you out.");
  AsyncStorage.removeItem("token").then((res) => {
    router.replace(`/(auth)/`);
  });
};

const Settings = (props: Props) => {
  const params = useLocalSearchParams();
  console.log(params);

  const handleEdit = () => {
    return router.push(`/(screens)/EditShop?shopId=${params.shopId}` as any);
  };
  return (
    <View style={{ width: "95%", alignSelf: "center" }}>
         <TouchableOpacity
        style={{
          backgroundColor: Colors.LightBg,
          marginVertical: 15,
          paddingVertical: 18,
          borderRadius: 8,
          paddingLeft: 20,
        }}
        onPress={handleEdit}
      >
        <Text style={{ fontWeight: "600", fontSize: 20 }}>Edit Shop</Text>
      </TouchableOpacity>
      {ownersButtons.map((item, index) => (
        <TouchableOpacity
          style={{
            backgroundColor: Colors.LightBg,
            marginVertical: 15,
            paddingVertical: 18,
            borderRadius: 8,
            paddingLeft: 20,
          }}
          onPress={() => handleLinkPress(item.link)}
          key={index}
        >
          <Text style={{ fontWeight: "600", fontSize: 20 }}>{item.title}</Text>
        </TouchableOpacity>
      ))}

     
      <TouchableOpacity
        style={{
          backgroundColor: Colors.LightBg,
          marginVertical: 15,
          paddingVertical: 18,
          borderRadius: 8,
          paddingLeft: 20,
        }}
        onPress={handlelogout}
      >
        <Text style={{ fontWeight: "600", fontSize: 20, color: "red" }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
