import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Risk assessment
const Page13 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Risk assessment</Text>

        <Text style={styles.text3}>
          While this Code provides guidance on the requirements for signing,
          lighting and guarding your site, it cannot cover every situation and a
          site specific risk assessment should be undertaken for all works
          sites. Where a risk assessment identifies that measures are needed in
          addition to those required by this Code, these must be implemented.{' '}
        </Text>

        <Button
          title="Previous"
          onPress={() => navigation.navigate('Page12')}
        />
        <Button title="Next" onPress={() => navigation.navigate('Page14')} />
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

export default Page13;
