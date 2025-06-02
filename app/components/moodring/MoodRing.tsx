// import React, { useRef } from 'react';
// import Svg, { Circle } from 'react-native-svg';
// import { useAtom } from 'jotai';
// import { moodAtom } from '../../stores/atom';
// import {
//   StyleSheet,
//   PanResponder,
//   Animated,
// } from 'react-native';

// const moodColors: Record<string, string> = {
//   happy: 'gold',
//   sad: '#a9bcdb',
//   angry: '#940f13',
//   calm: '#3a5441',
// };

// const moodList = ["happy", "sad", "angry", "calm"] as const;

// const MoodRing: React.FC = () => {
//   const [mood, setMood] = useAtom(moodAtom);
//   const pan = useRef(new Animated.ValueXY()).current;
//   const lastTap = useRef<number>(0);
//   const moodIndex = useRef<number>(moodList.indexOf(mood));

//   const changeMood = () => {
//     moodIndex.current = (moodIndex.current + 1) % moodList.length;
//     const nextMood = moodList[moodIndex.current];
//     setMood(nextMood);
//   };

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,

//       onPanResponderMove: Animated.event(
//         [null, { dx: pan.x, dy: pan.y }],
//         { useNativeDriver: false }
//       ),

//       onPanResponderRelease: (evt, gestureState) => {
//         const now = Date.now();
//         const isTap = Math.abs(gestureState.dx) < 5 && Math.abs(gestureState.dy) < 5;

//         if (isTap) {
//           if (now - lastTap.current < 300) {
//             changeMood(); 
//           } else {
//             changeMood();
//           }
//           lastTap.current = now;
//         }

//         Animated.spring(pan, {
//           toValue: { x: 0, y: 0 },
//           useNativeDriver: false,
//         }).start();
//       },
//     })
//   ).current;

//   return (
//     <Animated.View
//       {...panResponder.panHandlers}
//       style={[styles.container, pan.getLayout()]}
//     >
//       <Svg height="200" width="200">
//         <Circle
//           cx="100"
//           cy="100"
//           r="80"
//           // stroke="black"
//           strokeWidth="10"
//           fill={moodColors[mood]}
//         />
//       </Svg>
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     marginTop: 40,
//   },
// });

// export default MoodRing;


