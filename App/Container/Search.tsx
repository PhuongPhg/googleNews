/**
 * @format
 */

import React from 'react';
import { useState } from 'react';
import { FlatList, StyleSheet, TextInput } from 'react-native';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';
import CardItem from '../Components/Card';
import NoNews from '../Components/NoMoreNews';
import Icon from 'react-native-vector-icons/Ionicons'
import { News, NewsResponse } from '../types';
import axios from 'axios';
import { api_search, defaultOptions } from '../axiosHeader';
import concat from 'lodash/concat';
import uniqBy from 'lodash/uniqBy';
import { useEffect } from 'react';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [articles, setArticles] = useState<News[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalNews, setTotalNews] = useState(0);
  const [loading, setLoading] = useState(true)
  const [loadMore, setLoadMore] = useState(false)

  const renderItem = ({ item }) => {
    return <CardItem item={item} />
  }

  const getSearchResult = async () => {
    if(pageNumber >= 5 || searchText === '') return
    try {
      const res: NewsResponse = await axios.get(api_search, {
        params: {
          pageNumber: pageNumber,
          pageSize: 5,
          q: searchText
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

  const findSearch = () => {
    setArticles([]);
    getSearchResult()
  }

  useEffect(() => {
    if(searchText === ''){
      setArticles([])
    }
  }, [searchText])
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.textInputBackground}>
          <TextInput 
          placeholder={'Type here'}
           style={{width: '90%'}} 
           value={searchText} 
           onChangeText={setSearchText}
           onSubmitEditing={findSearch}
          />
          <Icon name='search' size={20} color={'#000'} style={{marginLeft: 10}} onPress={findSearch}/>
        </View>
        <FlatList data={articles}
          renderItem={renderItem}
          keyExtractor={item => item?.id}
          ListFooterComponent={<NoNews />}
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
  },
  textInputBackground:{
    backgroundColor: 'white',
    // alignSelf: 'stretch',
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10
  }
})

export default SearchScreen;
