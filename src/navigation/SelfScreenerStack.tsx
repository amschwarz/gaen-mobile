import React, { FunctionComponent } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { SelfScreenerStackScreens } from "."
import SelfScreenerIntro from "../SelfScreener/SelfScreenerIntro"

const Stack = createStackNavigator()
const SelfAssessmentStack: FunctionComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SelfScreenerStackScreens.SelfScreenerIntro}
        component={SelfScreenerIntro}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default SelfAssessmentStack
