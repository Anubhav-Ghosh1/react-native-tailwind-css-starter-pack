import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, View, Text} from 'react-native';
import tw from 'twrnc';
export default function App() {
  return (
    <View style={tw`pt-12 items-center`}>
      <View style={tw`bg-blue-200 px-3 py-1 rounded-full`}>
        <Text style={tw`text-blue-800 font-semibold`}>
          Hello Tailwind
        </Text>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
