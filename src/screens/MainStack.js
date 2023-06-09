function MainStack() {
      return (
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name="Update"
            component={UpdateScreen}
            options={{
              title: 'Update Recipient Phone',
              headerTitleAlign: 'center',
              headerShown: true
            }}
          />
          <Stack.Screen
            name="Security"
            component={PinScreen}
            options={{
              title: 'Provide PIN',
              headerTitleAlign: 'center',
              headerShown: true
            }}
          />
          <Stack.Screen
            name="Home"
            headerMode="screen"
            component={HomeScreen}
            options={({ navigation }) => ({
              headerTitle: '',
              headerTransparent: true,
              headerRight: () => (
                <Button
                  icon={
                    <Icon
                      name='settings'
                      type='feather'
                      color='grey'
                      onPress={() => navigation.navigate('Update')}
                      onLongPress={() => navigation.navigate('Update')}
                    />
                  }
                  type="clear"
                  buttonStyle={{ marginRight: 10 }}
                />
              ),
            })}
          />
        </Stack.Navigator>
      );
    }
export default MainStack    