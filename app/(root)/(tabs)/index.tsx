import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Link href={"/sign-in" as any}>Sign In</Link>
      <Link href={"/explore" as any}>Explore</Link>
      <Link href={"/profile" as any}>Profile</Link>
      <Link href={"/properties/1" as any}>Property</Link>
    </View>
  );
}
