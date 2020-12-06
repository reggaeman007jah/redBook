import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Record keeping
const Page7 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Record keeping</Text>

        <Text style={styles.text3}>
          In order to assess the efficacy of this Code in preventing accidents
          at street and road works sites, and to gather evidence for future
          revisions, it is strongly recommended that all works promoters keep
          records of any accidents or near misses on their sites, with a
          description of the situation, a cause or contributing factor if
          possible, and send these records to the relevant Highway Authorities
          and Utilities Committee on an annual basis for collation.
        </Text>

        <Button title="Previous" onPress={() => navigation.navigate('Page6')} />
        <Button title="Next" onPress={() => navigation.navigate('Page8')} />
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

export default Page7;
