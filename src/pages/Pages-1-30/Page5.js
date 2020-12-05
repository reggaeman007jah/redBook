import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Key Questions
const Page5 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Legal status of the Code</Text>

        <Text style={styles.text3}>
          Local highway authorities in England and Wales, and the road authority
          in Northern Ireland must comply with this Code for their own works.
          Roads authorities in Scotland should comply with this Code for their
          own works, as recommended by Scottish Ministers. All instances in the
          text of ‘highway authorities’ are to be read as references to ‘roads
          authorities’ in Scotland and Northern Ireland.
        </Text>
        <Text style={styles.text3}>
          An undertaker, and those working on its behalf, carrying out work
          under the New Roads and Street Works Act 1991 must comply with this
          Code for their own works.{' '}
        </Text>
        <Text style={styles.text3}>
          With the exception of Scottish roads authorities, failure to comply
          with this Code is a criminal offence and may lead to criminal
          prosecution in addition to any civil proceedings. Compliance with the
          Code will be taken as compliance with the legal requirements to which
          it relates.
        </Text>
        <Text style={styles.text3}>
          This Code is issued by the Secretary of State for Transport and Welsh
          Ministers under Section 65 of the New Roads and Street Works Act 1991
          and Section 174 of the Highways Act 1980, by Scottish Ministers under
          Section 124 of the New Roads and Street Works Act 1991, and by the
          Department for Regional Development under article 25 of the Street
          Works (Northern Ireland) Order 1995 and Article 31 of the Road Traffic
          Regulation Order (Northern Ireland) 1997.
        </Text>
        <Text style={styles.text3}>
          All instances in the text of ‘TSRGD (TSR (NI) in Northern Ireland)’
          are to be read as references to whatever versions of the Traffic Signs
          Regulations and General Directions or Traffic Signs Regulations (NI),
          as appropriate, are in force at the time.{' '}
        </Text>
        <Text style={styles.text3}>
          This Code comes into force on 1 October 2014.
        </Text>

        <Button title="Previous" onPress={() => navigation.navigate('Page4')} />
        <Button title="Next" onPress={() => navigation.navigate('Page6')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 50,
    margin: 20,
  },
  text2: {
    fontSize: 30,
    margin: 20,
  },
  text3: {
    fontSize: 20,
    margin: 20,
    marginBottom: 50,
  },
  text4: {
    fontSize: 12,
    margin: 20,
    marginBottom: 50,
  },
});

export default Page5;
