import React, { FunctionComponent } from "react"
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack"

import { Stacks, ModalScreens } from "./index"
import LanguageSelection from "../modals/LanguageSelection"
import ProtectPrivacy from "../modals/ProtectPrivacy"
import AffectedUserStack from "../AffectedUserFlow/"
import HowItWorksStack from "./HowItWorksStack"
import AnonymizedDataConsentScreen from "../modals/AnonymizedDataConsentScreen"
import AtRiskRecommendationScreen from "../MyHealth/AtRiskRecommendation"

const Stack = createStackNavigator()

const ModalStack: FunctionComponent = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={ModalScreens.LanguageSelection}
        component={LanguageSelection}
        options={TransitionPresets.ModalTransition}
      />
      <Stack.Screen
        name={ModalScreens.ProtectPrivacy}
        component={ProtectPrivacy}
        options={TransitionPresets.ModalTransition}
      />
      <Stack.Screen
        name={Stacks.AffectedUserStack}
        component={AffectedUserStack}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name={Stacks.HowItWorksReviewFromSettings}>
        {(props) => (
          <HowItWorksStack {...props} destinationOnSkip={Stacks.Settings} />
        )}
      </Stack.Screen>
      <Stack.Screen name={Stacks.HowItWorksReviewFromConnect}>
        {(props) => (
          <HowItWorksStack {...props} destinationOnSkip={Stacks.Connect} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name={ModalScreens.AnonymizedDataConsent}
        component={AnonymizedDataConsentScreen}
      />
      <Stack.Screen
        name={ModalScreens.AtRiskRecommendation}
        component={AtRiskRecommendationScreen}
        options={{
          ...TransitionPresets.ModalTransition,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default ModalStack
