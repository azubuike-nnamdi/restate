import { Account, Avatars, Client, OAuthProvider } from 'react-native-appwrite'
import * as Linking from 'expo-linking'
import { openAuthSessionAsync } from 'expo-web-browser'

export const config = {
  platform: 'com.pseudo.restate',
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

//export new version of the appwrite client
export const client = new Client();

client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!)


//functionality for appwrite

export const avatar = new Avatars(client);
export const account = new Account(client);

//create a new action
export async function login() {
  try {
    const redirectUrl = Linking.createURL('/');
    const response = await account.createOAuth2Token(OAuthProvider.Google, redirectUrl);
    //if no response, throw an error
    if (!response) throw new Error('Failed to login');
    //open the link in the browser
    const browserResult = await openAuthSessionAsync(response?.toString(), redirectUrl);
    //if the browser result is not successful, throw an error
    if (browserResult.type !== 'success') throw new Error('Failed to login');
    //return the browser result
    const url = new URL(browserResult.url);
    // get secret from url
    const secret = url.searchParams.get('secret');
    const userId = url.searchParams.get('userId');
    //if no secret or userId, throw an error
    if (!secret || !userId) throw new Error('Failed to login');
    // create session if any of the above is found
    const session = await account.createSession(userId, secret);
    //if no session, throw an error
    if (!session) throw new Error('Failed to create a session');
    //return the session
    return session;
  } catch (error) {
    console.log(error);
    return false;
  }
}

//create a new action to logout
export async function logout() {
  try {
    await account.deleteSession('current');
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

//create a new action to get the current user
export async function getCurrentUser() {
  try {
    const response = await account.get();
    //if no response, throw an error
    if (!response) throw new Error('Failed to get current user');
    //return the response and get user avatar
    if (response.$id) {
      const userAvatar = await avatar.getInitials(response.name);
      return {
        ...response,
        avatar: userAvatar,
      }
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}