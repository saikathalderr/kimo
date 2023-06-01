export interface Highlight {
  title: string;
  description: string;
  image: string;
}

export interface CategoryActivity {
  title: string;
}

export interface HighlightActivity {
  name: string;
}

export interface Category {
  name: string;
  activities: CategoryActivity[];
}

export interface Activity {
  name: string;
  description: string;
  image: string;
  activities: HighlightActivity[];
}
