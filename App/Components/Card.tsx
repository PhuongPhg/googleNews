import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card } from 'react-native-elements'
import moment from 'moment'
import { News } from "../types";

function CardItem({item}:{item: News}){
  return(
    <Card containerStyle={styles.cardContainer}>
      <Card.Title>{item.title}</Card.Title>
      <Card.Image source={{uri: item.image.url || '../Assets/no_image.jpg'}} style={{borderRadius: 12}}/>
      <View style={styles.row}>
        <Text style={styles.label}>Source</Text>
        <Text style={styles.info}>{item.provider.name}</Text>
      </View>
      <Text style={{marginBottom: 10}}>{item.snippet}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Published:</Text>
        <Text style={styles.info}>
          {moment(item.datePublished).format('LLL')}
        </Text>
      </View>
      <Button title="Read more" buttonStyle={styles.button}/>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12
  },
  row: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: 'grey'
  },
  button: {
    backgroundColor: '#DF7861',
    marginTop: 10,
    borderRadius: 12
  }
})

export default CardItem;