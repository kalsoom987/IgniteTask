import moment from 'moment';
import { MoodType } from '../../stores/atom';

interface MoodEntry {
  mood: MoodType;
  time: string;
}

class MoodService {
  private static instance: MoodService;
  private moodHistory: MoodEntry[] = [];

  private constructor() {}

  static getInstance(): MoodService {
    if (!MoodService.instance) {
      MoodService.instance = new MoodService();
    }
    return MoodService.instance;
  }

  addMood(mood: MoodType) {
    this.moodHistory.push({
      mood,
      time: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
  }

  getMoodHistory() {
    return this.moodHistory;
  }

  getMoodStats(): Record<MoodType, number> {
    return this.moodHistory.reduce((acc, entry) => {
      acc[entry.mood] = (acc[entry.mood] || 0) + 1;
      return acc;
    }, {} as Record<MoodType, number>);
  }
}

export default MoodService.getInstance();
