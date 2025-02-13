import { SIGN_IN_URL } from "@/config/routes";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  const { loading, isLoggedIn } = useGlobalContext();

  // Add debug logging
  console.log("AppLayout State:", { loading, isLoggedIn });

  if (!isLoggedIn && !loading) {
    return <Redirect href={SIGN_IN_URL} />;
  }

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator size="large" className="text-primary-300" />
      </SafeAreaView>
    );
  }

  return <Slot />;
}