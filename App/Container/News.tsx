/**
 * @format
 */

import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import { api_news, defaultOptions } from '../axiosHeader';
import CardItem from '../Components/Card';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    item: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    item: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    item: 'Third Item',
  },
];

const NewsScreen = () => {

  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [lastPageReached, setLastPageReached] = useState(false);

  const getNews = async () => {
    try {
      const res = await axios.get(api_news, {
        params: {
          pageNumber: pageNumber,
          pageSize: 5
        },
        ...defaultOptions
      }).then(res => res.data)
      console.log("res", res)
      setPageNumber(2)
    } catch (error) {
      console.log("err", error)
    }
  }

  const renderItem = ({item}) => {
  return <CardItem/>
}
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={styles.container}>
        <Text>Im News Screen</Text>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReachedThreshold={1} 
        onEndReached={getNews}
        />

      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default NewsScreen;
