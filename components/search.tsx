import { router, useLocalSearchParams, usePathname } from 'expo-router';
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import icons from '@/constants/icons';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
  const path = usePathname();
  const params = useLocalSearchParams<{ query: string }>();
  const [search, setSearch] = useState(params.query || "");

  const debouncedSearch = useDebouncedCallback((text) => router.setParams({ query: text }), 500);

  //function to handle search
  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  }

  return (
    <View className='flex flex-row items-center justify-between mt-5 rounded-lg bg-accent-100 border border-primary-100 py-2 w-full px-2'>
      <View className='flex-row flex-1 justify-start z-50 items-center flex'>
        <Image source={icons.search} className='size-5' />
        <TextInput
          placeholder='Search'
          className='text-xs font-rubik text-black-300 ml-2'
          value={search}
          onChangeText={handleSearch}
        />
      </View>
      <TouchableOpacity>
        <Image source={icons.filter} className='size-5' />
      </TouchableOpacity>
    </View>
  )
}
