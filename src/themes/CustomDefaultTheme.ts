import { DefaultTheme, configureFonts } from 'react-native-paper'
import { sizingMajor, sizingMinor, fontConfig } from './constants'
import { colors } from './constants/colors'

export const CustomDefaultTheme = {
  ...DefaultTheme,
  // @ts-ignore
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    alert: colors.alert
  },
  sizingMajor,
  sizingMinor
}
