import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  return (

    <View style={{ flex: 1, }}>


      <View style={{ flex: 0.3, backgroundColor: '#4A3780', padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >

          <Image source={require('../img/backButton.png')} />
          <Text style={{
            color: 'white',
            fontSize: 20,
            alignSelf: 'center',
          }}> October  20, 2022</Text>
          <Image source={require('../img/xButton.png')} />
        </View>
        <Text style={{

          color: 'white',
          fontSize: 37,
          alignSelf: 'center',
          justifyContent: 'flex-end',
          fontWeight: 'bold',
        }}
        >My Todo List</Text>
      </View>



      <View>

        <View
          style={{
            flexDirection: 'row',
            margin: 30,
            justifyContent: 'space-between',
          }}>

          <View style={{ flexDirection: 'row' }}>
            <View style={{
              borderRadius: 23,
              backgroundColor: 'lightblue',
              width: '23%',
              alignItems: 'center',
              padding: 12,
            }}>
              <Image source={require('../img/book.png')} />
            </View>
            <View style={{
              justifyContent: 'center',
              marginLeft: 10,
            }}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, }}>Study lesson</Text>
            </View>
          </View>

          <View style={{ justifyContent: 'center', }}>
            <Image source={require('../img/Checkbox.png')} />
          </View>
        </View>


        <View
          style={{
            flexDirection: 'row',
            margin: 30,
            justifyContent: 'space-between'
          }}>

          <View style={{ flexDirection: 'row' }}>
            <View style={{
              borderRadius: 23,
              backgroundColor: 'lightyellow',
              width: '27%',
              alignItems: 'center',
              padding: 12,
            }}>
              <Image source={require('../img/cup.png')} />
            </View>
            <View style={{
              justifyContent: 'center',
              marginLeft: 10,
            }}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, }}>Run 5k</Text>
              <Text>4:00pm</Text>
            </View>
          </View>

          <View style={{ justifyContent: 'center', }}>
            <Image source={require('../img/Checkbox.png')} />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            margin: 30,
            justifyContent: 'space-between'
          }}>

          <View style={{ flexDirection: 'row' }}>
            <View style={{
              borderRadius: 23,
              backgroundColor: 'lightpink',
              width: '23%',
              alignItems: 'center',
              padding: 12,
            }}>
              <Image source={require('../img/calander.png')} />
            </View>
            <View style={{
              justifyContent: 'center',
              marginLeft: 10,
            }}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, }}>Go to party</Text>
              <Text>10:00pm</Text>
            </View>
          </View>

          <View style={{ justifyContent: 'center', }}>
            <Image source={require('../img/Checkbox.png')} />
          </View>
        </View>


      </View>
      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>Completed</Text>
      </View>


      <View
        style={{
          flexDirection: 'row',
          margin: 30,
          justifyContent: 'space-between'
        }}>

        <View style={{ flexDirection: 'row' }}>
          <View style={{
            borderRadius: 23,
            backgroundColor: 'lightpink',
            width: '23%',
            alignItems: 'center',
            padding: 12,
          }}>
            <Image source={require('../img/calander.png')} />
          </View>
          <View style={{
            justifyContent: 'center',
            marginLeft: 10,
          }}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, }}>Game Meet Up</Text>
            <Text>1:00pm</Text>
          </View>
        </View>

        <View style={{ justifyContent: 'center', }}>
          <Image source={require('../img/Checkbox.png')} />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          margin: 30,
          justifyContent: 'space-between'
        }}>

        <View style={{ flexDirection: 'row' }}>
          <View style={{
            borderRadius: 23,
            backgroundColor: 'lightblue',
            width: '23%',
            alignItems: 'center',
            padding: 12,
          }}>
            <Image source={require('../img/book.png')} />
          </View>
          <View style={{
            justifyContent: 'center',
            marginLeft: 10,
          }}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, }}>Take out Trash</Text>
            <Text>10:00pm</Text>
          </View>
        </View>

        <View style={{ justifyContent: 'center', }}>
          <Image source={require('../img/Checkbox.png')} />
        </View>
      </View>


      <TouchableOpacity
      onPress={()=>navigation.navigate('Home2')}
        style={{
          width: '90%',
          backgroundColor: '#4A3780',
          padding: 15,
          borderRadius: 30,
          alignSelf: 'center',
          shadowOpacity: 10,
          
        }}>

        <Text style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
        }} >Add New Task</Text>
      </TouchableOpacity>


    </View>


  )
}

export default Home