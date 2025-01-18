require('dotenv').config();
const mongoose = require('mongoose');
const Student = require('../models/studentModel');

const studentData = [
  {
    rollNo: 1001,
    name: 'John Smith',
    percentage: 87.5,
    grade: 'A',
    class: '10A',
  },
  {
    rollNo: 1002,
    name: 'Emma Wilson',
    percentage: 92.3,
    grade: 'A+',
    class: '10A',
  },
  {
    rollNo: 1003,
    name: 'Michael Johnson',
    percentage: 78.9,
    grade: 'B+',
    class: '10B',
  },
  {
    rollNo: 1004,
    name: 'Sarah Davis',
    percentage: 95.1,
    grade: 'A+',
    class: '10A',
  },
  {
    rollNo: 1005,
    name: 'James Brown',
    percentage: 82.4,
    grade: 'B+',
    class: '10C',
  },
  {
    rollNo: 1006,
    name: 'Emily Taylor',
    percentage: 88.7,
    grade: 'A',
    class: '10B',
  },
  {
    rollNo: 1007,
    name: 'Daniel Martinez',
    percentage: 75.6,
    grade: 'B',
    class: '10C',
  },
  {
    rollNo: 1008,
    name: 'Sophia Anderson',
    percentage: 91.2,
    grade: 'A+',
    class: '10A',
  },
  {
    rollNo: 1009,
    name: 'David Thompson',
    percentage: 84.3,
    grade: 'B+',
    class: '10B',
  },
  {
    rollNo: 1010,
    name: 'Olivia Garcia',
    percentage: 93.8,
    grade: 'A+',
    class: '10A',
  },
  {
    rollNo: 1011,
    name: 'William Lee',
    percentage: 79.5,
    grade: 'B+',
    class: '10C',
  },
  {
    rollNo: 1012,
    name: 'Ava Moore',
    percentage: 86.9,
    grade: 'A',
    class: '10B',
  },
  {
    rollNo: 1013,
    name: 'Alexander White',
    percentage: 90.4,
    grade: 'A+',
    class: '10A',
  },
  {
    rollNo: 1014,
    name: 'Isabella King',
    percentage: 77.8,
    grade: 'B',
    class: '10C',
  },
  {
    rollNo: 1015,
    name: 'Ryan Scott',
    percentage: 85.2,
    grade: 'A',
    class: '10B',
  },
  {
    rollNo: 1016,
    name: 'Mia Rodriguez',
    percentage: 94.7,
    grade: 'A+',
    class: '10A',
  },
  {
    rollNo: 1017,
    name: 'Ethan Turner',
    percentage: 81.6,
    grade: 'B+',
    class: '10C',
  },
  {
    rollNo: 1018,
    name: 'Charlotte Phillips',
    percentage: 89.3,
    grade: 'A',
    class: '10B',
  },
  {
    rollNo: 1019,
    name: 'Andrew Campbell',
    percentage: 76.4,
    grade: 'B',
    class: '10C',
  },
  {
    rollNo: 1020,
    name: 'Amelia Baker',
    percentage: 92.8,
    grade: 'A+',
    class: '10A',
  },
];

const seedStudents = async () => {
  try {
    await Student.deleteMany({});

    await Student.insertMany(studentData);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    seedStudents();
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
