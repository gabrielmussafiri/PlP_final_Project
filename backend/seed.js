import mongoose from 'mongoose';
import Lesson from './models/Lesson.js';
import dotenv from 'dotenv';

dotenv.config();

const sampleLessons = [
  {
    title: 'How to design a logo in Canva',
    description: 'Quick tips for logo design in Canva. Learn the basics of layout, color, and exporting your logo in under a minute!',
    author: 'Alex Johnson',
    tags: ['Design', 'Canva'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    title: 'Basic Excel formulas',
    description: 'Master SUM, AVERAGE, and more in 1 minute.',
    author: 'Sarah Chen',
    tags: ['Excel', 'Productivity'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    title: 'Speed Reading',
    description: 'Double your reading speed with this trick.',
    author: 'Mike Rodriguez',
    tags: ['Reading', 'Productivity'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/skillswap');
    console.log('Connected to MongoDB');

    // Clear existing lessons
    await Lesson.deleteMany({});
    console.log('Cleared existing lessons');

    // Add sample lessons
    await Lesson.insertMany(sampleLessons);
    console.log('Added sample lessons');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 