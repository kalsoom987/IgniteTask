// src/components/MoodDisplay.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAtomValue } from 'jotai';
import { moodAtom, MoodType } from '../stores/atom';
import moment from 'moment'; // Optional: only if you store time

const moodEmojiMap: Record<MoodType, string> = {
  happy: '😊',
  sad: '😢',
  angry: '😠',
  calm: '😌',
};

const MoodDisplay = () => {
  const currentMood = useAtomValue(moodAtom);

  if (!currentMood) {
    return (
      <View style={styles.container}>
        <Text style={styles.noMoodText}>No mood selected yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{moodEmojiMap[currentMood]}</Text>
      <Text style={styles.moodText}>{currentMood.toUpperCase()}</Text>
      <Text style={styles.timeText}>{moment().format('MMMM Do YYYY, h:mm a')}</Text>
    </View>
  );
};

export default MoodDisplay;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  moodText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 14,
    color: '#777',
  },
  noMoodText: {
    fontSize: 16,
    color: '#888',
  },
});

