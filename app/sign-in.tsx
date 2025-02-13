import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images';
import icons from '@/constants/icons';
import { login } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';
import { Redirect } from 'expo-router';
export default function SignIn() {
  const { isLoggedIn, loading, refetch } = useGlobalContext();
  // check if islogged in
  if (!loading && isLoggedIn) return <Redirect href="/" />

  const handleSignIn = async () => {
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain' />
        <View>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to ReState</Text>
          <Text className='text-3xl font-rubikBold text-center text-black-300 mt-2'>Let's Get You Closer to {'\n'} <Text className='text-primary-300'> Your Ideal Home</Text>
          </Text>
          <Text className='text-base text-center font-rubik text-black-200 mt-12'>Sign in to your account with Google</Text>
          <TouchableOpacity className='bg-white shadow-md shadow-zinc-300 w-full py-4 rounded-full p-2 mt-5'
            onPress={handleSignIn}>
            <View className='flex flex-row items-center justify-center'>
              <Image source={icons.google} className='w-6 h-6' resizeMode='contain' />
              <Text className='text-base font-rubik text-black-300 ml-4'>Sign in with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
