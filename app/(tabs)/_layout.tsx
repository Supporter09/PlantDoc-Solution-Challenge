import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { View } from '../../components/Themed';
import { Pressable, useColorScheme, StyleSheet } from 'react-native';
import IonIcon from '@expo/vector-icons/Ionicons';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof IonIcon>['name'];
  color: string;
}) {
  return <IonIcon size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'trackers') {
            iconName = focused
              ? 'leaf'
              : 'leaf-outline';
          } else if (route.name === 'wiki') {
            iconName = focused
              ? 'book'
              : 'book-outline';
          } else if (route.name === 'profile') {
            iconName = focused
              ? 'person'
              : 'person-outline';
          } else if (route.name === 'saved') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }

          // You can return any component that you like here!
          return (
            <TabBarIcon name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Colors[colorScheme ?? 'light'].tint
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerTitle: 'My Plans',
          headerRight: () => (
            <View style={styles.indexAppBarIcons}>
              <IonIcon name='search-outline' size={28} style={styles.indexAppBarIcon} />
              <IonIcon name='add-circle-outline' size={28} style={styles.indexAppBarIcon} />
            </View>
          ),
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          tabBarItemStyle: {

          }
        }}
      />

      <Tabs.Screen
        name="trackers"
        options={{
          title: 'Trackers',
          headerShown: false,
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
      />

      <Tabs.Screen
        name="wiki"
        options={{
          title: 'Wiki',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerTitle: 'Saved Plants',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerTitle: 'Your Profile',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}
      />

      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  indexAppBarIcons: {
    flexDirection: 'row',
    marginRight: '6%',
  },
  indexAppBarIcon: {
    paddingLeft: 24
  }
});
