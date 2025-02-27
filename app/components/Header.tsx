import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text, Avatar } from 'react-native-paper';
import { router } from 'expo-router';

interface HeaderProps {
  username: string;
}

export const Header: React.FC<HeaderProps> = ({ username }) => {
  const userInitial = username ? username.charAt(0).toUpperCase() : 'U';

  const handleProfilePress = () => {
    router.push('/settings');
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.appName}>AssignmentAI</Text>
      </View>
      <Pressable onPress={handleProfilePress} style={styles.rightSection}>
        <Text style={styles.username}>{username}</Text>
        <View style={styles.avatarContainer}>
          <Avatar.Text
            size={40}
            label={userInitial}
            backgroundColor="#4A90E2"
            color="#fff"
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  leftSection: {
    flex: 1,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  username: {
    fontSize: 16,
    marginRight: 8,
  },
  avatarContainer: {
    marginRight: 0,
  },
}); 

