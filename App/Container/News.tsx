import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { api_news, defaultOptions } from '../axiosHeader';
import CardItem from '../Components/Card';
import { News, NewsResponse } from '../types';
import concat from 'lodash/concat';
import uniqBy from 'lodash/uniqBy';
import { useEffect } from 'react';
import NoNews from '../Components/NoMoreNews';

const NewsScreen = () => {

  const [articles, setArticles] = useState<News[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalNews, setTotalNews] = useState(0);
  const [loading, setLoading] = useState(true)
  const [loadMore, setLoadMore] = useState(false)
  const getNews = async () => {
    if(pageNumber >= 5) return
    setLoadMore(true)
    try {
      const res: NewsResponse = await axios.get(api_news, {
        params: {
          pageNumber: pageNumber,
          pageSize: 10
        },
        ...defaultOptions
      }).then(res => res.data)
      setArticles(uniqBy(concat(articles, res.value), 'id'))
      setTotalNews(res.totalCount)
      setPageNumber(pageNumber + 1)
    } catch (error) {
      console.log("err", error)
    }
    setLoading(false)
    setLoadMore(false)
  }

  const renderItem = ({ item }) => {
    return <CardItem item={item} />
  }

  useEffect(() => {
    setLoading(true)
    getNews()
  }, [])

  if(loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" animating={loading} color='#DF7861'/>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={styles.container}>
        <FlatList
          data={articles}
          renderItem={renderItem}
          keyExtractor={item => item?.id}
          onEndReachedThreshold={1}
          onEndReached={getNews}
          ListFooterComponent={ pageNumber <= 4 
            ?
            <View style={{marginTop: 25, marginBottom: 25}}>
            <ActivityIndicator size={20} animating={loadMore} color='#DF7861'/>
            </View>
            : 
            <NoNews/> 
          }
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCF8E8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default NewsScreen;
