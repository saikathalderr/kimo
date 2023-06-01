export interface Highlight {
  title: string;
  description: string;
  image: string;
}

export interface Activity {
  title: string;
}

export interface Category {
  name: string;
  activities: Activity[];
}
