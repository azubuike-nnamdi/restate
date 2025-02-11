import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* create routes */}
      <Link href="/properties/1">Property 1</Link>
      <Link href="/properties/2">Property 2</Link>
      <Link href="/properties/3">Property 3</Link>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/explore">Explore</Link>
    </View>
  );
}
