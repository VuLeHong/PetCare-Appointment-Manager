export interface Product {
  id: number;
  name: string;
  category: 'food' | 'accessory';
  brand: string;
  price: number;
  unit: string;
  description: string;
  image_url: string;
  created_at: string;
}

export interface AppointmentRequest {
  id: number;
  owner_name: string;
  phone: string;
  pet_type: 'dog' | 'cat';
  symptoms: string;
  status?: 'pending' | 'accepted';
  created_at?: string;
}

export interface Customer {
  id: number;
  name: string;
  phone: string;
  created_at: string;
  pet_count: number;
}

export interface Pet {
  id: number;
  customer_id: number;
  name: string;
  species: 'dog' | 'cat';
  color: string;
  age: number;
  weight: number;
  gender: 'male' | 'female';
  notes: string;
  image_url: string;
  created_at: string;
}

export interface MedicalRecord {
  id: number;
  pet_id: number;
  visit_date: string;
  weight: number;
  symptoms: string;
  notes: string;
  created_at: string;
}