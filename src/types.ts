export interface Product {
  id: string;
  name: string;
  category: 'coffee' | 'milkshakes' | 'mojitos' | 'smoothies';
  description: string;
  price: number;
  image: string;
  tags?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  sweetness: 'Less' | 'Normal' | 'Extra';
  ice: 'No Ice' | 'Less Ice' | 'Regular';
  notes?: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  image: string;
}

export interface ContactMessage {
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}
