import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Application of the Code
const Page4 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Application of the Code</Text>
        <Text style={styles.text3}>
          This Code applies to all highways and roads, except motorways and any
          dual carriageways with a speed limit of 50 mph or more. This Code
          applies to works carried out by or on behalf of both highway
          authorities and statutory undertakers. It does not cover skips and
          scaffolding placed in the highway.
        </Text>
        <Text style={styles.text3}>
          Guidance on some situations not covered by this Code can be found in
          Chapter 8 of the Traffic Signs Manual published for the Department for
          Transport et al by The Stationery Office. This gives authoritative
          advice, but it does not have the status of a Code of Practice under
          the Act. In Northern Ireland Article 31 of the Road Traffic Regulation
          Order (Northern Ireland) 1997 makes Chapter 8 mandatory for
          undertakers’ works on motorways or any dual carriageways with a speed
          limit of 50 mph or more. Elsewhere in the United Kingdom undertakers
          should refer to Chapter 8 when carrying out such works. For other
          roads, Chapter 8 or other relevant documents may provide further
          applicable guidance.
        </Text>

        <Button title="Previous" onPress={() => navigation.navigate('Page3')} />
        <Button title="Next" onPress={() => navigation.navigate('Page5')} />
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

export default Page4;
