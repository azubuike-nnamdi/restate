import { TextStyle } from "react-native";

export interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface GlobalContextType {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  refetch: () => void;
}

export interface TabIconProps {
  focused: boolean;
  icon: string;
  title: string;
}

export interface SettingsItemsProps {
  icon: string;
  title: string;
  onPress: () => void;
  textStyle?: TextStyle;
  showArrow?: boolean;
}