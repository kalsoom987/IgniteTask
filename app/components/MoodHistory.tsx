import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import moment from 'moment';
import MoodService from '../services/api/MoodService';
import { MoodType } from '../stores/atom';

const moodEmojiMap: Record<MoodType, string> = {
  happy: '😊',
  sad: '😢',
  angry: '😠',
  calm: '😌',
};

export default function MoodHistory() {
  const moodHistory = MoodService.getMoodHistory();
  const moodStats = MoodService.getMoodStats();

  // Render when no moods yet
  if (moodHistory.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Mood History</Text>
        <Text style={styles.item}>No mood history yet.</Text>
        <Text style={styles.subheading}>Mood Stats</Text>
        {Object.keys(moodStats).map((mood) => (
          <Text key={mood} style={styles.item}>
            {moodEmojiMap[mood as MoodType]} {mood.toUpperCase()}: {moodStats[mood as MoodType]}
          </Text>
        ))}
      </View>
    );
  }

  return (
    <FlatList
      data={moodHistory}
      keyExtractor={(_, index) => index.toString()}
      style={styles.container}
      ListHeaderComponent={
        <>
          <Text style={styles.heading}>Mood History</Text>
        </>
      }
      ListFooterComponent={
        <>
          <Text style={styles.subheading}>Mood Stats</Text>
          {Object.keys(moodStats).map((mood) => (
            <Text key={mood} style={styles.item}>
              {moodEmojiMap[mood as MoodType]} {mood.toUpperCase()}: {moodStats[mood as MoodType]}
            </Text>
          ))}
        </>
      }
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text style={styles.emoji}>{moodEmojiMap[item.mood]}</Text>
          <Text style={styles.text}>
            {item.mood.toUpperCase()} -{' '}
            <Text style={styles.timestamp}>
              {moment(item.time).format('MMMM Do YYYY, h:mm:ss a')}
            </Text>
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 5,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  emoji: {
    fontSize: 24,
    marginRight: 8,
  },
  text: {
    fontSize: 14,
    flexShrink: 1,
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
  },
  item: {
    fontSize: 14,
    marginBottom: 6,
  },
});
