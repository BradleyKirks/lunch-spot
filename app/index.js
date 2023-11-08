import { Text, View } from "react-native";
import { Link } from "expo-router";
import RestaurauntList from "./components/RestaurauntList";
export default function Home() {
    return (

        <View style={{
            backgroundColor: 'skyblue',
            flex: 1,
            paddingVertical: 60,
            paddingHorizontal: 30,
        }}>

                <RestaurauntList />
        </ View>
    )
}
