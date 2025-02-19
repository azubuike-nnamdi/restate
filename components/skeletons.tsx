import { View } from "react-native";

export function CardSkeleton() {
  return (
    <View className="flex-1 mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black/100/70 relative">
      <View className="w-full h-40 rounded-lg bg-gray-200 animate-pulse" />
      <View className="flex flex-col mt-2 gap-2">
        <View className="w-3/4 h-4 rounded-full bg-gray-200 animate-pulse" />
        <View className="w-1/2 h-3 rounded-full bg-gray-200 animate-pulse" />
        <View className="w-1/3 h-3 rounded-full bg-gray-200 animate-pulse mt-2" />
      </View>
    </View>
  );
}

export function FeaturedCardSkeleton() {
  return (
    <View className="w-60 h-80 relative rounded-2xl bg-gray-200 animate-pulse">
      <View className="absolute bottom-0 left-0 right-0 h-40 rounded-b-2xl bg-gray-300" />
    </View>
  );
} 