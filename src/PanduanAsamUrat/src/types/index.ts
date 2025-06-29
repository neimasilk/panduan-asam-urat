// Global type definitions for Panduan Asam Urat App

export interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
  gender?: 'male' | 'female';
  createdAt: Date;
  updatedAt: Date;
}

export interface FoodItem {
  id: string;
  name: string;
  purineLevel: 'low' | 'medium' | 'high';
  purineContent: number; // mg per 100g
  category: string;
  description?: string;
}

export interface SymptomEntry {
  id: string;
  userId: string;
  date: Date;
  painLevel: number; // 1-10 scale
  affectedJoints: string[];
  notes?: string;
  triggers?: string[];
}

export interface FluidIntake {
  id: string;
  userId: string;
  date: Date;
  amount: number; // in ml
  type: 'water' | 'tea' | 'coffee' | 'juice' | 'other';
}

export interface NavigationProps {
  navigation: any;
  route: any;
}

export type RootStackParamList = {
  Home: undefined;
  FoodTracker: undefined;
  SymptomJournal: undefined;
  FluidTracker: undefined;
  Profile: undefined;
};