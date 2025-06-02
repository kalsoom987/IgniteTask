import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MoodInput from './components/MoodInput';
import MoodHistory from './components/MoodHistory';
import MoodChart from './components/MoodChart';

export default function App() {
  const [activeTab, setActiveTab] = useState<'input' | 'history' | 'chart'>('input');

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => setActiveTab('input')} style={styles.tab}>
          <Text style={styles.tabText}>Select Mood</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('history')} style={styles.tab}>
          <Text style={styles.tabText}>Mood History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('chart')} style={styles.tab}>
          <Text style={styles.tabText}>Mood Chart</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        {activeTab === 'input' && <MoodInput />}
        {activeTab === 'history' && <MoodHistory />}
        {activeTab === 'chart' && <MoodChart />}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16, // only horizontal padding to avoid shrinking width vertically
    marginTop: 80,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between', // distribute buttons evenly across the row
    marginBottom: 20,
  },
  tab: {
    flex: 1, // make each button take equal space
    paddingVertical: 10,
    backgroundColor: '#ccc',
    borderRadius: 8,
    marginHorizontal: 5, // horizontal margin between buttons
    alignItems: 'center', // center text horizontally
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
  },
});


