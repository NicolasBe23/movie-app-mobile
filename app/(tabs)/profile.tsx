import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Profile = () => {
  return (
    <View className="flex-1 bg-primary px-10">
      <View className="flex items-center justify-center flex-1 felx-col gap-5">
        <Image source={icons.person} className="size-10" tintColor="#fff" />
        <Text className="text-light-100 text-2xl font-semibold">Profile</Text>
        <Text className="text-light-200 text-sm">
          Manage your account, preferences, and more.
        </Text>
      </View>
    </View>
  );
};

export default Profile;
