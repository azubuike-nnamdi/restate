import { SIGN_IN_URL } from "@/config/routes";
import { GlobalProvider, useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";

export default function AppLayout() {
  //get access to loading and isLoggedIn state from  global provider
  const { loading, isLoggedIn } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator size="large" className="text-primary-300" />
      </SafeAreaView>
    )
  }

  if (!isLoggedIn) return <Redirect href={SIGN_IN_URL} />

  return <Slot />
}