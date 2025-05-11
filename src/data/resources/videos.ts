// Define the video interface
export interface Video {
  id: number;
  title: string;
  description: string;
  videoId: string;
  category?: string;
}

// Video data for the resources page
export const videos: Video[] = [
  {
    id: 1,
    title: "IELTS || Essential Tips for Success!",
    description: "Learn the fundamentals of scoring high in the IELTS exam",
    videoId: "XZkDb4rLSp0",
    category: "general",
  },
  {
    id: 2,
    title: "Mastering Speaking Skills",
    description: "Essential tips and techniques for Ielts Speaking excellence",
    videoId: "3aBQYrkKZUE",
    category: "speaking",
  },
  {
    id: 3,
    title: "Mastering Ielts Writing",
    description: "Learn the essentials of Ielts Writing and score high",
    videoId: "UAVsXoCnZMc",
    category: "writing",
  },
  {
    id: 4,
    title: "A FREE listening test",
    description: "Practice your listening skills with this free test",
    videoId: "nx8req42cj8",
    category: "listening",
  },
];

export default videos;
