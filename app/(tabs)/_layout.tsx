import { Tabs } from 'expo-router';
import React from 'react';
import { useSegments } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const segments = useSegments();
  const currentSegment = segments[segments.length - 1];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        tabBarStyle: {
          display: currentSegment === 'chat' ? 'none' : 'flex',
          backgroundColor: Colors[colorScheme ?? 'light'].background,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarIconStyle: {
          marginBottom: -3,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Citas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'calendar-number' : 'calendar-number-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="files"
        options={{
          title: 'Expedientes',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'file-tray-full' : 'file-tray-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notificaciones',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'notifications' : 'notifications-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
