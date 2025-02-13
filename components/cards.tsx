import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import images from '@/constants/images'
import icons from '@/constants/icons'
interface Props {
  onPress?: () => void;
}
export function FeaturedCards({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} className='flex flex-col items-start w-60 h-80 relative'>
      <Image source={images.japan} className='size-full rounded-2xl' />
      <Image source={images.cardGradient} className='size-full absolute bottom-0 rounded-2xl' />
      <View className='flex flex-row items-center bg-white/90 px-3 rounded-full absolute top-5 right-5 gap-2 py-1.5'>
        <Image source={icons.star} className='size-3.5' />
        <Text className='text-xs font-rubik text-black-300'>4.4</Text>
      </View>

      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text className="text-white text-xl font-rubikBold" numberOfLines={1}>Modern Apartment</Text>
        <Text className="text-white text-sm font-rubik">25, Falomo, Ikoyi, Lagos State</Text>

        <View className='flex flex-row items-center justify-between w-full'>
          <Text className='text-white text-sm font-rubik'>N1,500,000</Text>
          <Image source={icons.heart} className='size-5' />
        </View>
      </View>
    </TouchableOpacity>
  )
}


export function Card({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} className='flex flex-1 mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black/100/70 relative w-full'>
      <View className='flex flex-row items-center absolute px-2 right-5 top-5 bg-white/90 rounded-full z-50'>
        <Image source={icons.star} className='size-3.5' />
        <Text className='text-xs font-rubik text-black-300'>4.4</Text>
      </View>

      <Image source={images.newYork} className='w-full h-40 rounded-lg' />
      <View className="flex flex-col mt-2">
        <Text className="text-black-300 text-base font-rubikBold">Modern Apartment</Text>
        <Text className="text-black-300 text-xs font-rubik">25, Falomo, Ikoyi, Lagos State</Text>

        <View className='flex flex-row items-center justify-betweenmt-2'>
          <Text className='text-primary-300 text-base font-rubik'>N1,500,000</Text>
          <Image source={icons.heart} className='w-5 h-5 mr-2' tintColor={"#191d31"} />
        </View>
      </View>
    </TouchableOpacity>
  )
}