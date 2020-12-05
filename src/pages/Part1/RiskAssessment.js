import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const RiskAssessment = () => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text}>Risk Assessment </Text>
        <Text style={styles.text2}>
          While this Code provides guidance on the requirements for signing, lighting and guarding your site, it
          cannot cover every situation and a site specific risk assessment should be undertaken for all works sites.
          Where a risk assessment identifies that measures are needed in addition to those required by this Code,
          these must be implemented.
      </Text>

      </ScrollView>
    </View >
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    margin: 20,
  },
  text2: {
    fontSize: 30,
    margin: 20,
    marginBottom: 50,
  }
});

export default RiskAssessment;