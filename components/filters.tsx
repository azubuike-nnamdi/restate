import { categories } from '@/constants/data';
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

export default function Filters() {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string | "">(params?.filter || "All");

  //function to handle categories
  const handleCategory = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("All");
      router.setParams({ filter: "All" });
      return;
    }
    setSelectedCategory(category);
    router.setParams({ filter: category });

  }
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-2 mb-2'>
      {categories?.map((item) => (
        <TouchableOpacity key={item.title} onPress={() => handleCategory(item?.category)} className='flex flex-col items-start mr-4 rounded-full px-4 py-2'>
          <Text className={`text-xs font-rubik py-2 px-4 rounded-full ${selectedCategory === item?.category ? "bg-primary-300 text-white" : "bg-primary-100 text-black-300 border border-primary-200"}`}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}
