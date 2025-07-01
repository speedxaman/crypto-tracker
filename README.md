# CryptoTracker

A modern, responsive cryptocurrency tracking application built with Angular 18. Track real-time cryptocurrency prices, view market trends, and convert between different digital currencies.

## Features

- **Real-time Cryptocurrency Tracking**: View current prices, 24h/7d changes for top cryptocurrencies
- **Currency Converter**: Convert between different cryptocurrencies with real-time exchange rates
- **Mobile-First Design**: Optimized for mobile devices with responsive design
- **Smooth Animations**: CSS-based animations for enhanced user experience
- **Progressive Web App**: PWA ready with offline capabilities
- **Modern UI**: Glassmorphism design with stunning visual effects

##  Architecture & Design Decisions

### Framework Choice: Angular 18
- **Standalone Components**: Leveraging Angular 18's standalone components for better tree-shaking and module organization
- **Modern Angular Features**: Using the latest Angular features including signals, control flow, and new HttpClient
- **Reactive Forms**: Implemented reactive forms for better form validation and user experience
- **Lazy Loading**: Route-based code splitting for optimal performance

### Architecture Pattern: Feature-Based Structure
```
src/
├── app/
│   ├── core/                 # Singleton services, interceptors, guards
│   │   ├── interceptors/     # HTTP interceptors
│   │   ├── models/          # TypeScript interfaces and types
│   │   └── services/        # Application services
│   ├── features/            # Feature modules
│   │   ├── home/           # Homepage with crypto listings
│   │   └── converter/      # Currency converter
│   ├── shared/             # Shared components and utilities
│   │   └── components/     # Reusable components
│   └── environments/       # Environment configurations
```

### Key Design Decisions

1. **Standalone Components**: Reduces bundle size and improves maintainability
2. **Service-Based Architecture**: Clean separation of concerns with dedicated services
3. **Reactive Programming**: Extensive use of RxJS for handling asynchronous operations
4. **TypeScript Strict Mode**: Enhanced type safety and better developer experience
5. **Mobile-First CSS**: Responsive design starting from mobile breakpoints
6. **Mock Data Implementation**: Fallback system for API failures and development

### State Management
- **Service-Based State**: Using Angular services with BehaviorSubjects for simple state management
- **Reactive Forms**: Angular Reactive Forms for form state management
- **Loading States**: Centralized loading service for consistent UX

### Styling Approach
- **SCSS**: Leveraging SCSS for advanced styling capabilities
- **CSS Grid & Flexbox**: Modern layout techniques for responsive design
- **CSS Custom Properties**: For theming and consistent design tokens
- **Animations**: CSS keyframe animations for smooth interactions

### Performance Optimizations
- **OnPush Change Detection**: Where applicable for better performance
- **Lazy Loading**: Route-based code splitting
- **TrackBy Functions**: Optimized *ngFor loops
- **HTTP Interceptors**: Centralized loading states and error handling

## Technology Stack

- **Framework**: Angular 18
- **Language**: TypeScript 5.4
- **Styling**: SCSS
- **HTTP Client**: Angular HttpClient with Interceptors
- **Forms**: Angular Reactive Forms
- **Animations**: CSS Animations & Angular Animations
- **Build Tool**: Angular CLI
- **Testing**: Jasmine & Karma

## Mobile-First Design

The application is designed with a mobile-first approach:
- Responsive breakpoints: 480px, 768px, 1024px
- Touch-friendly interface elements
- Optimized for various screen sizes
- PWA capabilities for native-like experience

## Design Features

### Visual Effects
- **Glassmorphism**: Modern glass-like UI elements with backdrop filters
- **Gradient Backgrounds**: Beautiful gradient overlays
- **Smooth Animations**: CSS-based animations for enhanced UX
- **Interactive Elements**: Hover effects and smooth transitions

### Animations
- **Fade In Up**: Cards animate in with a slide-up effect
- **Logo Glow**: Animated glow effect on the logo
- **Hover Transitions**: Smooth hover effects on interactive elements
- **Loading Spinner**: Custom CSS loading animation

## API Integration

The application is designed to work with the CoinMarketCap API:
- **Mock Data**: Fallback mock data for development and demo purposes
- **Error Handling**: Graceful error handling with fallback to mock data
- **HTTP Interceptors**: Automated loading states and error management
- **Type Safety**: Full TypeScript interfaces for API responses

## Getting Started

See [SETUP.md](SETUP.md) for detailed installation and setup instructions.

## Testing

The application includes unit tests for all components and services:
- Component testing with Angular Testing Utilities
- Service testing with HttpClientTestingModule
- Form validation testing
- Error handling testing

## Build & Deployment

- **Development Build**: `npm run build`
- **Production Build**: `npm run build:prod`
- **Bundle Analysis**: Optimized for minimal bundle size
- **PWA Ready**: Service worker for offline capabilities

## 📚 Project Structure

```
crypto-tracker/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── interceptors/
│   │   │   ├── models/
│   │   │   └── services/
│   │   ├── features/
│   │   │   ├── home/
│   │   │   └── converter/
│   │   ├── shared/
│   │   └── environments/
│   ├── assets/
│   └── styles.scss
├── README.md
├── SETUP.md
├── TODO.md
├── ASSUMPTIONS.md
└── package.json
```

## Future Enhancements

See [TODO.md](TODO.md) for planned features and improvements.

##  Assumptions

See [ASSUMPTIONS.md](ASSUMPTIONS.md) for project assumptions and decisions.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is licensed under the MIT License.
