import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#E5E5E5',
          height: 50,
          padding: 0,
          margin: 0,
          display: 'flex',
          justifyContent: 'space-between'
        },
        tabBarItemStyle: {
          padding: 0,
          margin: 0,
          width: 'auto',
          flex: 1
        },
        headerShown: false,
        lazy: true
      }}>
      <Tabs.Screen
        name="assignments"
        options={{
          title: 'Ödevlerim',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assignment" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          title: 'Yükle',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="cloud-upload" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Ana Sayfa',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Yardım',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="help" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Ayarlar',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="text-assignment"
        options={{
          href: null,
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' }
        }}
      />
      <Tabs.Screen
        name="math-assignment"
        options={{
          href: null,
          tabBarItemStyle: { display: 'none' },
          tabBarStyle: { display: 'none' }
        }}
      />
    </Tabs>
  );
} 
