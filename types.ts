export interface SiteConfig {
  qrCodeUrl: string;
  paymentMethods: string;
  paymentInstructions: string;
  paymentName: string;
}

export type UserRole = 'user' | 'admin';

export interface User {
  id: number;
  username: string;
  role: UserRole;
  balance: number;
  mobileNumber: string;
}

export interface Service {
  id: number;
  name: string;
  rate: number; // per 1000
  min: number;
  max: number;
  description: {
    quality: string;
    location: string;
    speed: string;
    refill: string;
    cancel: boolean;
  };
}

export interface Category {
  id: number;
  name: string;
  services: Service[];
}