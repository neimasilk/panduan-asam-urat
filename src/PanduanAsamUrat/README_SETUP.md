# Panduan Asam Urat - React Native App

Aplikasi mobile untuk manajemen diet dan gejala asam urat dengan TypeScript.

## 🚀 Setup Development Environment

### Prerequisites

1. **Node.js** (>= 18.0.0)
2. **React Native CLI** atau **Expo CLI**
3. **Android Studio** (untuk Android development)
4. **Xcode** (untuk iOS development - hanya di macOS)
5. **Java Development Kit (JDK)** 11 atau 17

### Installation

1. Clone repository dan masuk ke direktori proyek:
```bash
cd src/PanduanAsamUrat
```

2. Install dependencies:
```bash
npm install
```

3. Untuk iOS (hanya di macOS):
```bash
cd ios && pod install && cd ..
```

## 🛠️ Development Commands

### Basic Commands
```bash
# Start Metro bundler
npm start

# Start dengan reset cache
npm run start:reset

# Run di Android emulator/device
npm run android

# Run di iOS simulator (macOS only)
npm run ios

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Testing
npm test
npm run test:watch
```

### Cleaning Commands
```bash
# Clean Android build
npm run clean:android

# Clean semua build (Android & iOS)
npm run clean
```

## 📱 Running the App

### Android

1. **Setup Android Emulator:**
   - Buka Android Studio
   - Buka AVD Manager
   - Buat virtual device baru atau gunakan yang sudah ada
   - Start emulator

2. **Run aplikasi:**
```bash
npm run android
```

### iOS (macOS only)

1. **Setup iOS Simulator:**
   - Buka Xcode
   - Buka Simulator dari menu Developer Tools

2. **Run aplikasi:**
```bash
npm run ios
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Button.tsx
├── screens/            # Screen components
│   └── HomeScreen.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
├── services/           # API services
└── hooks/              # Custom React hooks
```

## 🔧 TypeScript Configuration

Proyek ini menggunakan TypeScript dengan konfigurasi strict mode:

- **Strict type checking** enabled
- **Path mapping** untuk import yang lebih clean
- **Unused variables/parameters** detection
- **Exact optional property types**

### Path Aliases
```typescript
// Gunakan alias ini untuk import:
import Button from '@components/Button';
import { User } from '@types';
import HomeScreen from '@screens/HomeScreen';
```

## 🧪 Testing

Proyek ini sudah dikonfigurasi dengan Jest untuk testing:

```bash
# Run tests
npm test

# Run tests dalam watch mode
npm run test:watch
```

## 📋 Development Checklist

### ✅ Completed
- [x] React Native project setup dengan TypeScript
- [x] Basic project structure
- [x] TypeScript configuration dengan strict mode
- [x] ESLint dan Prettier setup
- [x] Basic UI components (Button)
- [x] Home screen dengan UI dasar
- [x] Type definitions untuk aplikasi
- [x] Development scripts

### 🔄 Next Steps
- [ ] Setup navigation (React Navigation)
- [ ] Implementasi state management (Redux/Zustand)
- [ ] Setup API services
- [ ] Implementasi fitur Food Tracker
- [ ] Implementasi fitur Symptom Journal
- [ ] Implementasi fitur Fluid Tracker
- [ ] Setup database lokal (SQLite/Realm)
- [ ] Implementasi authentication
- [ ] Testing setup yang lebih komprehensif

## 🚨 Troubleshooting

### Common Issues

1. **Metro bundler tidak start:**
```bash
npm run start:reset
```

2. **Android build gagal:**
```bash
npm run clean:android
npm run android
```

3. **TypeScript errors:**
```bash
npm run type-check
```

4. **Dependencies issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)

## 🤝 Contributing

1. Pastikan semua tests pass: `npm test`
2. Pastikan tidak ada TypeScript errors: `npm run type-check`
3. Pastikan code sudah di-lint: `npm run lint:fix`
4. Follow project structure dan naming conventions

---

**Status:** ✅ Ready for development
**Last Updated:** $(date)