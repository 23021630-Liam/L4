
// Exercise 1
// import React from 'react';
// import {View, Text} from 'react-native';
//
// const Exercise1 = () => {
//   return (
//       <View>
//         <Text style={{fontSize: 24}}>RP Values</Text>
//         <Text style={{color: "green"}}>Excellence</Text>
//         <Text style={{backgroundColor: "yellow"}}>Customer-Centric</Text>
//         <Text style={{fontStyle: "italic"}}>Integrity</Text>
//         <Text style={{textAlign: "center"}}>Teamwork</Text>
//         <Text style={{backgroundColor: "black", color: "white"}}>Enterprising</Text>
//       </View>
//   );
// };
//
// export default Exercise1;

// Exercise 2
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   greenBox: {
//     width: 100,
//     height: 100,
//     marginTop: 30,
//     borderWidth: 1,
//     borderColor: 'black',
//     backgroundColor: 'green',
//   },
//   boxText: {
//     textAlign: 'center',
//     color: 'white',
//   },
//   title: {
//     fontWeight: 'bold',
//   }
// });
//
// const Exercise2 = () => {
//   return (
//       <View style={{marginTop: 50}}>
//         <View style={styles.greenBox}>
//           <Text style={[styles.boxText, styles.title]}>
//             Who Are We
//           </Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>
//             Our People
//           </Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>
//             Our Campus
//           </Text>
//         </View>
//       </View>
//   );
// };
//
// export default Exercise2;

// Exercise 3a
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   },
// });
//
// const Flex = () =>  {
//   return (
//       <View
//       style={[styles.parent, {marginTop: 50}]}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue'}]}>
//           Child One
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>
//           Child Two
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue'}]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
// export default Flex;

// Exercise 3b
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   child: {
//     flex:1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 28,
//   },
// });
//
// const Flex = () =>  {
//   return (
//       <View style={[styles.parent, {marginTop: 50}]}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue', flex:1}]}>
//           Child One
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue', flex:1}]}>
//           Child Two
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue', flex:1}]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
// export default Flex;

// Exercise 3c
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   child: {
//     flex:1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 28,
//   },
// });
//
// const Flex = () =>  {
//   return (
//       <View style={[styles.parent, {marginTop: 50}]}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue', flex:1, maxWidth: 90}]}>
//           Child One
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue', flex:1}]}>
//           Child Two
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue', flex:1, maxHeight: 120}]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
// export default Flex;

// Exercise 3d
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 28,
//   },
// });
//
// const Flex = () =>  {
//   return (
//       <View style={[styles.parent, {marginTop: 50}]}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue', flex:1}]}>
//           Child One
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue', flex:2}]}>
//           Child Two
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue', flex:3}]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
// export default Flex;

// Exercise 3e
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   parent: {
//     flex:1,
//     flexDirection: 'column',
//     // justifyContent: "flex-start",
//     // justifyContent: 'flex-end',
//     justifyContent: 'space-around',
//     // justifyContent: 'space-between',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 28,
//   },
// });
//
// const Flex = () =>  {
//   return (
//       <View style={[styles.parent, {marginTop: 50}]}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue'}]}>
//           Child One
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>
//           Child Two
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue'}]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
// export default Flex;

// Exercise 4
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  parent: {
    flex:1,
      backgroundColor: 'whitesmoke',
      marginTop: 30,
      flexDirection: 'row',
      alignItems: 'center',
      textAlign: 'center',
      textAlignVertical: 'center',
      textAlignHorizontal: 'center',
      // justifyContent: 'center',
      justifyContent: 'space-around',
  },
  child: {
      width: 80,
      height: 80,
      textAlignVertical: 'center',
      textAlign: 'center',
  },
});

const Flex = () =>  {
  return (
      <View style={[styles.parent]}>
        <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>
          Square 1
        </Text>
        <Text style={[styles.child, {backgroundColor: 'lightgreen'}]}>
          Square 2
        </Text>
        <Text style={[styles.child, {backgroundColor: 'red'}]}>
          Square 3
        </Text>
      </View>
  )
}
export default Flex;
