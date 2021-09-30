import * as React from 'react'
import styled from 'styled-components'
import { View } from 'react-native'
import {
  Divider,
  ProgressBar,
  Subheading,
  Title,
  useTheme
} from 'react-native-paper'

import ScreenWrapper from '../../shared/layouts/ScreenWrapper'

export function Signin() {
  const { colors, sizingMajor, fonts } = useTheme()
  const Container = styled(View)({
    flex: 1,
    marginTop: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    padding: sizingMajor.x1
  })
  const CustomTitle = styled(Title)({
    color: colors.accent
  })
  return (
    <ScreenWrapper withScrollView>
      <Container>
        <CustomTitle>Sign In</CustomTitle>
      </Container>
    </ScreenWrapper>
  )
}
