import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
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
  static navigationOptions = ({navigation}) => ({
      title: 'Review Jobs',
      headerRight:  (<Button
        title="Settings"
        onPress={() => navigation.navigate('welcome') }
        />
        
        ),
      headerTitleStyle: {
        marginTop: 24
      }
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