import * as React from 'react'
import styled from 'styled-components'
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native'
import { useTheme } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = ScrollViewProps & {
  children: React.ReactNode
  withScrollView?: boolean
}

export default function ScreenWrapper({
  children,
  withScrollView = false,
  ...rest
}: Props) {
  const {
    colors: { background }
  } = useTheme()
  const insets = useSafeAreaInsets()
  const Container = styled(ScrollView)({
    flex: 1,
    backgroundColor: background,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.left
  })

  return (
    <>
      <Container
        {...rest}
        scrollEnabled={withScrollView}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </Container>
    </>
  )
}
