function SettingsStack() {
      return (
        <Stack.Navigator initialRouteName='Settings'>
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: 'SMS Recipient Number',
              headerShown: true,
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: '', headerTransparent: true }}
          />
        </Stack.Navigator>
      );
    }
    export default SettingsStack