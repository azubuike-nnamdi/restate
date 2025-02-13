import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '@/constants/icons'
import Search from '@/components/search'
import Filters from '@/components/filters'

export default function Explore() {
  return (
    <SafeAreaView className='bg-white h-full'>
      <View className='px-5'>
        <View className='flex flex-row items-center justify-between mt-5'>
          <Image source={icons.backArrow} className='size-7 rounded-full bg-primary-200 p-1' />
          <Text className='text-xl font-rubikBold text-black-300'>Search for Your Ideal Home</Text>
          <Image source={icons.bell} className='size-5' />
        </View>
        <Search />
        <Filters />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})