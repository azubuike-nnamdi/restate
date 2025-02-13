import { Link } from "expo-router";
import { Image, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/search";
import { Card, FeaturedCards } from "@/components/cards";
import { useGlobalContext } from "@/lib/global-provider";
import Filters from "@/components/filters";

export default function Index() {
  const { user, refetch } = useGlobalContext();
  //slice firstName from user name
  const firstName = user?.name?.split(" ")[0];
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView showsVerticalScrollIndicator={false} >
        <View className="px-5">
          <View className="flex flex-row items-center justify-between mt-5">
            <View className="flex-row items-center flex">
              <Image source={images.avatar} className="size-12 rounded-full" />
              <View className="flex flex-col items-start ml-2 justify-center">
                <Text className="text-xs font-rubik text-black -100">Good Morning</Text>
                <Text className="text-xl font-rubikMedium text-black-300">{firstName}</Text>
              </View>
            </View>
            <Image source={icons.bell} className="size-5" />
          </View>
          <Search />

          <View className="my-5">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-rubikBold text-black-300">Featured</Text>
              <TouchableOpacity>
                <Text className="text-xs font-rubik text-primary-300">View All</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* featured cards */}
          <View className=" flex flex-row gap-5 mt -5">
            <FeaturedCards />
            <FeaturedCards />
            <FeaturedCards />
          </View>

          <View className="my-5">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-rubikBold text-black-300">Recommendations</Text>
              <TouchableOpacity>
                <Text className="text-xs font-rubik text-primary-300">View All</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Filters />

          <View className=" flex flex-row gap-5 mt -5">
            <Card />
            <Card />
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}
