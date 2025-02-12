import { Alert, Image, ImageSourcePropType, ScrollView, StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { logout } from '@/lib/appwrite';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { useGlobalContext } from '@/lib/global-provider';
import { settings } from '@/constants/data';

const SettingsItems = ({ icon, title, onPress, textStyle, showArrow = true }: {
  icon: ImageSourcePropType,
  title: string,
  onPress?: () => void,
  textStyle?: string,
  showArrow?: boolean
}) => (
  <TouchableOpacity onPress={onPress} className='flex flex-row items-center justify-between py-3'>
    <View className='flex flex-row items-center gap-3'>
      <Image source={icon} className='size-6' />
      <Text className={`text-base text-black-300 font-rubikMedium ${textStyle}`}>{title}</Text>
      {/* show arrow if true */}
    </View>
    {showArrow && <Image source={icons.rightArrow} className='size-5' />}
  </TouchableOpacity>
)

export default function Profile() {

  const { user, refetch } = useGlobalContext();


  const handleSignOut = async () => {
    const result = await logout();
    //show alert if result is success
    if (result) {
      Alert.alert('Success', 'Logged out successfully');
      refetch();
    } else {
      Alert.alert('Error', 'Failed to log out');
    }
  }
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView
        showsVerticalScrollIndicator={false} contentContainerClassName='pb-32 px-7' >
        <View className='flex flex-row justify-between items-center mt-7'>
          <Text className='text-xl font-rubikBold text-black-300'>Profile</Text>
          <Image source={icons.bell} className='size-5' />
        </View>
        <View className='flex-row justify-center flex'>
          <View className='flex flex-col items-center relative mt-5'>
            <Image
              source={user?.avatar ? { uri: user.avatar } : images.avatar}
              className='size-44 rounded-full relative'
            />
            <TouchableOpacity className='absolute bottom-16 right-5'>
              <Image source={icons.edit} className='size-7' />
            </TouchableOpacity>
            <Text className='text-2xl font-rubikBold text-black-300 mt-3'>{user?.name}</Text>
          </View>
        </View>

        <View className='flex flex-col mt-7'>
          <SettingsItems icon={icons.calendar} title='My Bookings' />
          <SettingsItems icon={icons.wallet} title='Payments' />
        </View>

        <View className='flex flex-col mt-10 border-t border-primary-200 pt-5'>
          {/* map settings */}
          {settings.slice(2)?.map((item) => (
            <SettingsItems key={item.title} {...item} />
          ))}
        </View>

        <View className='flex flex-col mt-10 border-t border-primary-200 pt-5'>
          {/* log out function */}
          <SettingsItems icon={icons.logout} title='Logout' onPress={handleSignOut} textStyle="text-red-500" showArrow={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
