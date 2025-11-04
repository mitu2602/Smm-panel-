import { Category, User } from './types';

export const INITIAL_USERS: User[] = [
  { id: 1, username: 'admin', role: 'admin', balance: 1258.42, mobileNumber: '9999999999' },
  { id: 2, username: 'user', role: 'user', balance: 50.00, mobileNumber: '8888888888' },
];


export const DEFAULT_QR_CODE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEGCAYAAACxK2VHAAAAAklEQVR4AewaftIAAAVJ SURBVO3BQY4cQQgEwPz/07v5QsgA1tIe2To4A/9ZASpIFShBUgUKkFSAAkQFKEFSAQqQFKAAlSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVICClAEqSApQAEqQVIBSZAUL/AnwEcYk8j9g0O5AAAAABJRU5ErkJggg==';

export const SERVICE_DATA: Category[] = [
  {
    id: 1,
    name: 'Instagram Followers [Real Mixed Accounts]',
    services: [
      {
        id: 101,
        name: 'Instagram Followers | Real Mixed Accounts | 20% Drop | 365 Day Refill',
        rate: 265.54,
        min: 10,
        max: 1000000,
        description: {
          quality: 'Real Accounts With +15 Posts',
          location: 'Worldwide 🌍',
          speed: '500K/day',
          refill: '365 Days',
          cancel: false,
        },
      },
      {
        id: 102,
        name: 'Instagram Followers | High Quality | 5% Drop | No Refill',
        rate: 150.20,
        min: 50,
        max: 50000,
        description: {
          quality: 'High Quality Accounts',
          location: 'USA 🇺🇸',
          speed: '10K/day',
          refill: 'No',
          cancel: true,
        },
      },
       {
        id: 103,
        name: 'Instagram Followers | Premium Quality | 1% Drop | Lifetime Refill',
        rate: 450.00,
        min: 100,
        max: 100000,
        description: {
          quality: 'Premium Active Accounts',
          location: 'Europe 🇪🇺',
          speed: '25K/day',
          refill: 'Lifetime',
          cancel: true,
        },
      },
    ],
  },
  {
    id: 2,
    name: 'YouTube Views [High Retention]',
    services: [
        {
        id: 201,
        name: 'YouTube Views | High Retention | 100% Real',
        rate: 300.00,
        min: 100,
        max: 1000000,
        description: {
          quality: '100% Real Human Views',
          location: 'Worldwide 🌍',
          speed: '50K/day',
          refill: 'Lifetime',
          cancel: false,
        },
      },
    ]
  },
  {
    id: 3,
    name: 'TikTok Likes [Instant Delivery]',
     services: [
        {
        id: 301,
        name: 'TikTok Likes | Instant | Real Accounts',
        rate: 120.50,
        min: 20,
        max: 20000,
        description: {
          quality: 'Real Active Accounts',
          location: 'Worldwide 🌍',
          speed: '100K/day (Instant)',
          refill: '30 Days',
          cancel: true,
        },
      },
    ]
  }
];