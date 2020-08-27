import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
//import {BoxShadow} from 'react-native-shadow';
const gray = "#91A1BD";

export default function App() {
  const NeuMorph = ({ children, size, style }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner,
              {
                width: size || 40,
                height: size || 40,
                borderRadius: size / 2 || 20,
              },
              style,
            ]}
          >
            {children}
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ alignSelf: "stretch" }}>
        <View style={{ marginHorizontal: 32, marginTop: 32 }}>
          <View style={styles.topContainer}>
            <NeuMorph>
              <AntDesign name="arrowleft" size={20} color={gray} />
            </NeuMorph>
            <View>
              <Text style={styles.playing}>Playing Now</Text>
            </View>
            <NeuMorph>
              <Entypo name="menu" size={24} color={gray}></Entypo>
            </NeuMorph>
            <View></View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE9FD",
    alignItems: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inner:{
    backgroundColor:'#DEE9f7',
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#E2ECFD',
    borderWidth:1,
  },
  topShadow:{
    shadowOffset:{
      width:-6,
      height:-6
    },
    shadowOpacity:1,
    shadowRadius:6,
    shadowColor:'#FBFFFF'
  },
  bottomShadow:{
    shadowOffset:{
      width:6,
      height:6
    },
    shadowOpacity:1,
    shadowRadius:6,
    shadowColor:'#B7C4DD'
  },
  playing:{
    color:gray,
    fontWeight:"800"
  }
});
