
import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSetAtom } from 'jotai';
import { moodAtom, MoodType } from '../stores/atom';
import MoodService from '../services/api/MoodService';
import { debounce, throttle } from 'lodash';

const moods: MoodType[] = ['happy', 'sad', 'angry', 'calm'];

const MoodInput = () => {
  const setMood = useSetAtom(moodAtom);

  // Throttle for updating UI (not saving)
  const throttledSetMood = useCallback(
    throttle((mood: MoodType) => {
      setMood(mood);
    }, 1000),
    []
  );

  // Debounce for saving mood (called only after user stops)
  const debouncedSaveMood = useCallback(
    debounce((mood: MoodType) => {
      MoodService.addMood(mood);
    }, 2000),
    []
  );

  const handleMoodChange = (mood: MoodType) => {
    throttledSetMood(mood);      
    debouncedSaveMood(mood);     
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Your Mood:</Text>
      <View style={styles.buttonGroup}>
        {moods.map((mood) => (
          <TouchableOpacity
            key={mood}
            onPress={() => handleMoodChange(mood)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{mood.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MoodInput;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
