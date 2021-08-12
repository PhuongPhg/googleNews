import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function NoNews() {
  return (
    <View style={styles.noMore}>
      <Text>No more News</Text>
      <Icon name='sad-outline' size={25} color="#DF7861" />
    </View>
  );
}

const styles = StyleSheet.create({
  noMore: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 25,
    fontSize: 16
  }
})

export default NoNews;