
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { useAtom } from 'jotai';
// import { moodAtom } from '../../stores/atom';
// import MoodRing from '../moodring/MoodRing';

// const moodEmojis: Record<string, string> = {
//   happy: '😊',
//   sad: '😢',
//   angry: '😠',
//   calm: '😌',
// };

// const HomeScreen: React.FC = () => {
//   const [mood] = useAtom(moodAtom);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>
//         Your Current Mood is: {mood} {moodEmojis[mood]}
//       </Text>
//       <MoodRing />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
//   title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
// });

// export default HomeScreen;

