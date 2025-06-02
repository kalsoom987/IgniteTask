// src/components/MoodChart.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Rect, Text as SvgText, G } from 'react-native-svg';
import MoodService from '../services/api/MoodService';
import { MoodType } from '../stores/atom';

const moodColors: Record<MoodType, string> = {
  happy: '#FFD700',
  sad: '#1E90FF',
  angry: '#FF4500',
  calm: '#32CD32',
};

const MoodChart = () => {
  const moodStats = MoodService.getMoodStats();

  const data = (Object.keys(moodStats) as MoodType[]).map((mood) => ({
    mood,
    count: moodStats[mood] || 0,
  }));

  const width = 320;
  const height = 240;
  const margin = { top: 20, right: 20, bottom: 40, left: 40 };

  const barWidth = 50;
  const maxCount = Math.max(...data.map((d) => d.count), 1);
  const barSpacing = (width - margin.left - margin.right) / data.length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Chart</Text>
      <Svg width={width} height={height}>
        {data.map((d, i) => {
          const x = margin.left + i * barSpacing + (barSpacing - barWidth) / 2;
          const barHeight = ((height - margin.top - margin.bottom) * d.count) / maxCount;
          const y = height - margin.bottom - barHeight;

          return (
            <G key={d.mood}>
              {/* Bar */}
              <Rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={moodColors[d.mood]}
              />
              {/* Mood label */}
              <SvgText
                x={x + barWidth / 2}
                y={height - 10}
                fontSize="12"
                fill="#000"
                textAnchor="middle"
              >
                {d.mood.toUpperCase()}
              </SvgText>
              {/* Count label */}
              <SvgText
                x={x + barWidth / 2}
                y={y - 5}
                fontSize="12"
                fill="#000"
                textAnchor="middle"
              >
                {d.count}
              </SvgText>
            </G>
          );
        })}
      </Svg>
    </View>
  );
};

export default MoodChart;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
  },
});
