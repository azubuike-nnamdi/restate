import { View, Text, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'

export default function NoResults() {
  return (
    <View className='flex item-center my-5'>
      <Image source={images.noResult} className='w-11/12 h-80' resizeMode='contain' />
      <Text className='text-black-300 text-2xl font-rubikBold mt-5 text-center'>No results found</Text>
      <Text className='text-black-300 text-base font-rubik mt-2 text-center'>We could not find any results for your search</Text>
    </View>
  )
}