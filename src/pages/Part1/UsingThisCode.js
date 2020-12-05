import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const UsingThisCode = () => {
  return (
    <View>
      <ScrollView>
        {/* <Text>Using This Code</Text> */}
        <Text style={styles.text}>Using This Code</Text>
        <Text style={styles.text2}>
          Everyone on site has personal responsibility to behave safely. This includes proper arrangements for
          design including planning and risk assessment and management including supervision of the works.
          Under the Equality Act 2010, works promoters also have a duty to have regard for the needs of disabled
          people and older people in the planning and execution of works.
      </Text>
        <Text style={styles.text2}>
          This Code shows the principles you must follow when signing, lighting and guarding works on all highways
          except motorways and any dual carriageways with speed limits of 50 mph or more. The highway includes
          the carriageway, footway and verge.
      </Text>
        <Text style={styles.text2}>
          This Code shows typical layouts, equipment and working methods. It does not include every situation you
          could encounter and it might be necessary for your supervisor, manager or other competent person to
          consult the highway authority to discuss safe methods of working that have minimum impact upon
          highway users. You must read the text alongside the illustrations to understand the requirements fully.
      </Text>
        <Text style={styles.text2}>
          Each section within this Code will give you the requirements for each stage of the works from planning
          through to completion. Following a risk assessment, additional measures may be necessary for site
          specific conditions.
      </Text>
        <Text style={styles.text2}>
          Further guidance on traffic safety measures and signs for road works and temporary situations is given in
          Chapter 8 of the Traffic Signs Manual, including for motorways and higher speed dual carriageways,
          which are not covered here. Always consult your supervisor, manager or other competent person if you
          are in any doubt about correct procedures or if you are concerned about safety
      </Text>
        <Text style={styles.text2}>
          This Code makes reference to Traffic Regulation Orders and Temporary Traffic Notices that apply to
          Great Britain only. For Northern Ireland, reference should be made to the Road Traffic Regulation
          (Northern Ireland) Order 1997.
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

export default UsingThisCode;