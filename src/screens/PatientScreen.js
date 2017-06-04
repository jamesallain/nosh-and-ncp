import React, { Component } from 'react';
import { View, Text, FlatList, Platform } from 'react-native';
import { Button } from 'native-base';
import { graphql, QueryRenderer } from 'react-relay'


import environment from '../common/createRelayEnvironment';
//import PatientList from '../components/PatientList'
//import { type PatientScreen_Query } from './__generated__/PatientScreen_Query.graphql'

// type Props = {
//   viewer: PatientScreen_Query,
// };



const PatientQuery = graphql`
      query PatientScreen_Query {  
        allPatients (
          first: 5
        ) @connection (key: "PatientScreen_allPatients") {
          edges{
            node{
              id 
              
            }
          }
        }            
      }

    `

class PatientScreen extends Component {
  static navigationOptions = ({ navigate }) => ({
      title: 'Search Patients',
      headerRight:  (
        <Button
          title="Settings"
          onPress={() => navigate('welcome') }
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 122, 255, 1"
        />          
        ),
      style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      },
      //might have to use this instead
      // headerTitleStyle: {
      //   marginTop: 24
      // }
  });

  

 render() {
  //const { allPatients } = this.props.query;
  return (
     <View>     
       <QueryRenderer
          environment={environment}
          query={PatientQuery}
//props.data.allPatients.edges.node.id
          render={({error, props}) => {
            if (error) {
              console.log(error)
              return <Text>Hey: {error.message}</Text>;
            } else if (props) {
              console.log(props.data);
              return <Text> props </Text>;
              //return <PatientList data={props.patient} />;
            }
            return <Text>Loading</Text>;
          }}
        />
     
    </View>
  );
  }

}

export default PatientScreen;