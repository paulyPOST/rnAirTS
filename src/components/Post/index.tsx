import React from "react";
import { Image, View, Text } from "react-native";
import tw from "tailwind-rn";
import { TPost } from "@src/types";
import styles from "./styles";

interface IPostProps {
  post: TPost;
}

export const Post = ({ post }: IPostProps) => {
  return (
    <View style={tw("m-5")}>
      {/* Image */}
      <Image
        style={[tw("w-full rounded-lg"), styles.image]}
        source={{
          uri: post.imageURL,
        }}
      />

      {/* Bed & Bedroom */}
      <Text style={tw("text-gray-400 my-2")}>{post.beds} bed {post.bedrooms} bedroom</Text>

      {/* Type & Description */}
      <Text
        style={tw("text-base")}
        numberOfLines={2}
      >
        {post.description}
      </Text>

      {/* Old price & New Price */}
      <Text style={tw("text-base my-2")}>
        <Text style={tw("text-gray-400 line-through mr-1")}>${post.priceOld}</Text>
        <Text style={tw("font-bold")}>  ${post.priceNew}  </Text>
        / night
      </Text>

      {/* Total Price */}
      <Text style={tw("text-gray-400 underline")}>${post.priceTotal} total</Text>
    </View>
  );
};
