const item = {
  id: "6337629528214793638",
  title: "Canadian sentenced to 11 years in China in spying case tied to Huawei",
  url: "https://www.nbcnews.com/news/world/canadian-sentenced-11-years-china-spying-case-tied-huawei-n1276524",
  description: "Canadian Michael Spavor, who was detained after his government arrested an executive of the Chinese tech giant Huawei, has been sentenced to 11 years in a spying case.",
  body: "DANDONG, China A Chinese court has sentenced Canadian Michael Spavor to 11 years on spying charges in case linked to Huawei. Spavor was detained in 2018 after his government arrested an executive of the Chinese tech giant. The verdict Wednesday is the latest indication of how Beijing is stepping up pressure on Canada ahead of a court ruling on whether to hand over the executive, Meng Wanzhou, to face U.S. criminal charges. The world is watching: In #China, diplomats from 25 countries join #Canada as a court convicts Michael Spavor in a spying case widely seen as political retaliation for arrest of #Huawei exec Meng Wanzhou. Spavor sentenced to 11 yrs. Its Day 975 of detention. @NBCNews pic.twitter.com/rW2Mjoryhk Janis Mackey Frayer (@janisfrayer) August 11, 2021 Spavor and another Canadian were detained in China in what critics labeled hostage politics after the executives 2018 arrest in connection with possible violations of trade sanctions on Iran. On Tuesday, another Chinese court rejected the appeal of a third Canadian whose prison term in a drug case was abruptly increased to death following the executives arrest. Canadian Ambassador Dominic Barton was present at the hearing in the city of Dandong, about 210 miles east of Beijing on the North Korean border. No word has been given about a trial date for former Canadian diplomat Michael Kovrig, who was also detained in December 2018 and charged with spying. Meng, the chief financial officer of Huawei Technologies Ltd. and daughter of the companys founder, was arrested Dec. 1, 2018, in Vancouver on U.S. charges of lying to the Hong Kong arm of the British bank HSBC about possible dealings with Iran in violation of trade sanctions. Chinas government has denounced the arrest as part of U.S. efforts to hamper its technology development and demanded Mengs immediate release.",
  snippet: "Canadian Michael Spavor, who was detained after his government arrested an executive of the Chinese tech giant Huawei, has been sentenced to 11 years in a spying case.",
  keywords: "",
  language: "en",
  isSafe: true,
  datePublished: "2021-08-11T03:48:00",
  provider: {
    name: "nbcnews",
    favIcon: "",
    favIconBase64Encoding: "",
  },
  image: {
    url: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2018_50/2681621/181213-michael-spavor-mc-923.JPG",
    height: 0,
    width: 0,
    thumbnail: "",
    thumbnailHeight: 0,
    thumbnailWidth: 0,
    base64Encoding: "",
    name: null,
    title: null,
    provider: {
      name: "nbcnews",
      favIcon: "",
      favIconBase64Encoding: "",
    },
    imageWebSearchUrl: null,
    webpageUrl: "https://www.nbcnews.com/news/world/canadian-sentenced-11-years-china-spying-case-tied-huawei-n1276524",
  }
}
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card } from 'react-native-elements'
import moment from 'moment'

function CardItem(){
  return(
    <Card>
      <Card.Title>{item.title}</Card.Title>
      <Card.Image source={{uri: item.image.url}}/>
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
      <Button title="Read more"/>
    </Card>
  );
}

const styles = StyleSheet.create({
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
  }
})

export default CardItem;