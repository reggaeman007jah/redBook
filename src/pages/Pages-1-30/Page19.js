import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

// Before you start
const Page19 = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.text1}>Before you start</Text>
        <Text style={styles.text3}>
          All works require measures to ensure the safety of road users
          (including pedestrians) and operatives.
        </Text>
        <Text style={styles.text3}>
          One of the first things you need to decide for any job or work site is
          whether the standards for signing, lighting and guarding given in this
          Code will be sufficient for this purpose, or whether you are going to
          need to take extra precautions. (The layouts shown in this Code are
          likely to be suitable in most cases but they will not be adequate for
          every situation that you come across.){' '}
        </Text>
        <Text style={styles.text3}>
          Remember that this Code deals specifically with signing, lighting and
          guarding. You will need to consider separately any risks associated
          with carrying out the works themselves.
        </Text>
        <Text style={styles.text3}>
          For planned works, a competent person should visit the site in
          advance, carry out a risk assessment based on the road layout and
          nature of the works to be undertaken, and give clear instructions on
          the signing, lighting and guarding layout required.
        </Text>
        <Text style={styles.text3}>
          Additionally before you start, you will need to look at the job,
          review existing risk assessments, and make your own assessment of
          on-site risks. If you have any doubts whether the instructions you
          have been given or the arrangements set out in this Code are
          sufficient to keep road users and operatives safe, do not start until
          you have discussed these with your supervisor, manager or other
          competent person.
        </Text>
        <Text style={styles.text3}>
          Warning: To comply with health and safety legislation you must carry
          out and regularly review the site specific risk assessment to ensure
          that a safe system of working in respect of signing, lighting and
          guarding is in place and maintained at all times.{' '}
        </Text>
        <Text style={styles.text3}>
          These are some of the things you should consider when making your
          assessment of on-site risks before starting.
        </Text>
        <Text style={styles.text3}>Look at the road Italic </Text>
        <Text style={styles.text3}>
          - Are there awkward or complex junctions?
        </Text>
        <Text style={styles.text3}>
          - Are the road or footway widths too narrow to allow the safe use of
          the standard layouts?
        </Text>
        <Text style={styles.text3}>
          - How much visibility do approaching road users have? – consider
          bends, crests of hills, trees and bushes, parked vehicles.
        </Text>
        <Text style={styles.text3}>
          - Are there any railway level crossings or tramways that will be
          affected?
        </Text>
        <Text style={styles.text3}>- Are there any overhead cables?</Text>
        <Text style={styles.text3}>
          - Are there any other works going on, or other traffic management
          measures in place, nearby?
        </Text>
        <Text style={styles.text3}>
          - Are your works near permanent traffic signals or signs? If so, could
          they obstruct above-ground or sub-surface detectors, signal heads or
          signs? Contact the highway authority if this is a possibility.
        </Text>
        <Text style={styles.text3}>- </Text>
        <Text style={styles.text3}>Look at the traffic Italic</Text>
        <Text style={styles.text3}>
          - Is the intended type of traffic control appropriate for the
          prevailing traffic flow? – what about the number of heavy or large
          vehicles passing?
        </Text>
        <Text style={styles.text3}>
          - What is the speed limit, and does a significant amount of traffic
          appear to be travelling faster than the speed limit?
        </Text>
        <Text style={styles.text3}>
          - What is the type or make up of the traffic? – e.g. cars, heavy or
          large vehicles?{' '}
        </Text>
        <Text style={styles.text3}>
          - Is there a cycle lane? Are there many cyclists using the route?
        </Text>
        <Text style={styles.text3}>
          - Will bus routes or bus stops be affected?
        </Text>
        <Text style={styles.text3}>Look at the local area Italic</Text>
        <Text style={styles.text3}>
          - Are there likely to be frequent deliveries to shops or premises? –
          delivery vehicles may park in a way that blocks signs etc. or reduces
          road width.
        </Text>
        <Text style={styles.text3}>
          - Will the works restrict access to premises that have a lot of
          traffic entering or leaving? e.g. schools, large stores, car parks,
          fast-food stores – particularly consider right turning traffic.
        </Text>
        <Text style={styles.text3}>
          - What are the needs of the emergency services? – e.g. are there
          nearby police, ambulance or fire stations?
        </Text>
        <Text style={styles.text3}>
          - Are there facilities for disabled people, e.g. parking bays, and can
          these be avoided?
        </Text>
        <Text style={styles.text3}>Look at pedestrians Italic</Text>
        <Text style={styles.text3}>
          - Consider both safe routes and the standards of fencing/barriers
          needed to protect pedestrians from risks from inside the work space.
        </Text>
        <Text style={styles.text3}>
          - Is there a high level of pedestrian traffic? – consider users of
          pushchairs, wheelchairs and mobility scooters.
        </Text>
        <Text style={styles.text3}>
          - Are there significant numbers of people with reduced mobility or
          walking difficulties (who may have problems with steps, cable
          protectors, or uneven surfaces ), or blind and partially sighted
          people? – consider any nearby hospitals, surgeries, residential homes
          etc.
        </Text>
        <Text style={styles.text3}>
          - Are there many children around? – consider nearby schools, parks,
          playgrounds etc.
        </Text>
        <Text style={styles.text3}>
          - Will pedestrian crossings or school crossing points be affected?
        </Text>
        <Text style={styles.text3}>
          - Are there other pedestrian risks, such as people leaving pubs/clubs,
          sports matches or events?
        </Text>
        <Text style={styles.text3}>Look at what might change Italic</Text>
        <Text style={styles.text3}>
          Estimate how long the works may be in place, then think about how any
          of the above issues might change within that time, e.g:
        </Text>
        <Text style={styles.text3}>- rush-hour traffic flows;</Text>
        <Text style={styles.text3}>- school run parking;</Text>
        <Text style={styles.text3}>- pub/club licensing hours;</Text>
        <Text style={styles.text3}>- match days at sports grounds;</Text>
        <Text style={styles.text3}>- one-off events, concerts etc;</Text>
        <Text style={styles.text3}>- street lighting levels;</Text>
        <Text style={styles.text3}>- weather and surface conditions; and</Text>
        <Text style={styles.text3}>- deliveries to the site.</Text>
        <Text style={styles.text3}>Remember Italic</Text>
        <Text style={styles.text3}>
          - Use the signing, lighting and guarding that is necessary for the
          risks, not just the equipment you happen to have available at the
          time. Work must not start until you have the right equipment set up
          correctly. For emergency works, full signing, lighting and guarding
          must be provided as quickly as possible.
        </Text>
        <Text style={styles.text3}>
          - Ensure the works team are given a formal briefing on all key safety
          issues and local site risk assessment related to the activity.
        </Text>
        <Text style={styles.text3}>
          - If you have any concerns, contact your supervisor, manager or other
          competent person.
        </Text>

        <Button
          title="Previous"
          onPress={() => navigation.navigate('Page18')}
        />
        <Button title="Next" onPress={() => navigation.navigate('Page20')} />
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

export default Page19;
