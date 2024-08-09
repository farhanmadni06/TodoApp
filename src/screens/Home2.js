import { View, Text, Image, TextInput, YellowBox, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Home2 = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>

      <View style={{ flex: 0.25, backgroundColor: '#4A3780', padding: 10, flexDirection: 'row', alignItems: 'center' }}>

        <Image source={require('../img/backButton.png')} />

        <Text style={{
          alignItems: 'center',
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',

        }}> Add New Task</Text>
      </View>

      <View style={{ margin: 10, }}>
        <Text style={{ fontWeight: 'bold', }}>Task Title</Text>
      </View>

      <TextInput
        style={{
          padding: 15,
          borderRadius: 10,
          borderWidth: 1,
          width: '90%',
          fontSize: 20,
          color: 'black',
          alignSelf: 'center'
        }}
        placeholder='Task Title'
      />


      <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 20, alignItems: 'center' }}>

        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Catagory</Text>


        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '60%',
          height: '30%',
          alignSelf: 'center',
          justifyContent: 'center',
          justifyContent: 'space-evenly',

        }}>
          <View style={{
            borderRadius: 23,
            backgroundColor: 'lightblue',
            width: '17%',
            alignItems: 'center',
            padding: 12,
          }}>
            <Image source={require('../img/book.png')} />
          </View>
          <View style={{
            borderRadius: 23,
            backgroundColor: 'lightpink',
            width: '17%',
            alignItems: 'center',
            padding: 12,
          }}>
            <Image source={require('../img/calander.png')} />

          </View>

          <View style={{
            borderRadius: 23,
            backgroundColor: 'lightyellow',
            width: '17%',
            alignItems: 'center',
            padding: 10,
          }}>
            <Image source={require('../img/cup.png')} />

          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', margin: 10, gap: 10 }}>

        <View>
          <Text>Date</Text>
        </View>
        <View
          style={{

            paddingLeft: 100,
            paddingRight: 10,
            borderRadius: 7,
            borderWidth: 1,
            borderColor: 'black',
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,

          }}
        >
          <Text>Date</Text>
          <Image source={require('../img/calander.png')} />
        </View>


        <View>
          <Text>Time</Text>
        </View>
        <View
          style={{

            paddingLeft: 100,
            paddingRight: 10,
            borderRadius: 7,
            borderWidth: 1,
            borderColor: 'black',
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}
        >
          <Text>Date</Text>
          <Image source={require('../img/calander.png')} />
        </View>

      </View>

      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Notes</Text>
      </View>

      <TextInput
        style={{
          borderRadius: 7,
          paddingBottom: 140,
          bottom: 10,
          borderColor: 'grey',
          justifyContent: 'flex-start',
          borderWidth: 1,
          padding: 10,
          marginLeft: 10
        }}
        placeholder='Notes'
      />

      <TouchableOpacity onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor: '#4A3780',
          width: '93%',
          padding: 10,
          alignSelf: 'center',
          borderRadius: 30,
          marginTop: 15


        }}
      >
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', alignSelf: 'center' }} >Save</Text>
      </TouchableOpacity>


    </View>
  )
}

export default Home2