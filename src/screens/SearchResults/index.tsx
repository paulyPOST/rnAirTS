import React from 'react'
import { FlatList, View } from 'react-native'
import { Post } from "@src/components";
import { TPost } from "@src/types";
import { Posts } from "@assets/data/mocks";

export const SearchResults = () => {
  return (
    <View>
      <FlatList<TPost>
        data={Posts}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  )
};
