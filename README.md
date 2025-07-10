# Teacher Management Interface

A modern, responsive teacher management interface built with Next.js, TypeScript, and Tailwind CSS. This application provides a comprehensive dashboard for managing teacher profiles, qualifications, schedules, and student interactions.

## 🚀 Features

- **Modern UI/UX Design**: Clean, contemporary interface following current design trends
- **Responsive Layout**: Mobile-first approach with seamless cross-device experience
- **Teacher Profile Management**: Comprehensive teacher profiles with ratings, specializations, and bio
- **Qualification Management**: Private and group qualification tracking with rates
- **Schedule Management**: Interactive weekly schedule grid with availability tracking
- **Statistics Dashboard**: Key metrics including ratings, student count, and lesson analytics
- **Type Safety**: Full TypeScript implementation with proper type definitions
- **Accessibility**: WCAG-compliant design with proper keyboard navigation and screen reader support

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Components**: Custom React components
- **State Management**: React hooks (useState, useEffect)
- **Utilities**: clsx for conditional styling

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/teacher-management-interface.git
   cd teacher-management-interface
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── Layout.tsx           # Main layout with sidebar navigation
│   └── TeacherProfile.tsx   # Teacher profile component
├── data/
│   └── mockData.ts          # Mock teacher data
└── types/
    └── teacher.ts           # TypeScript type definitions
```

## 🎨 Key Components

### Layout Component
- Responsive sidebar navigation
- Mobile-friendly hamburger menu
- Sticky header with breadcrumbs
- Modern sidebar with icons and hover effects

### TeacherProfile Component
- Comprehensive teacher information display
- Tabbed interface for different sections
- Interactive schedule grid
- Statistics cards with icons
- Qualification management
- Star rating system

### Features Implemented

1. **Overview Tab**
   - Teacher statistics (rating, students, lessons, experience)
   - Bio and specializations
   - Professional information display

2. **Qualifications Tab**
   - Private and group qualifications
   - Rate management
   - Add/edit functionality placeholders

3. **Schedule Tab**
   - Weekly schedule grid
   - Available vs. booked time slots
   - Color-coded availability

## 🎯 Design Decisions

### Color Scheme
- **Primary**: Blue (#3B82F6) for active states and CTAs
- **Secondary**: Gray scale for text and backgrounds
- **Success**: Green (#10B981) for positive indicators
- **Warning**: Orange (#F59E0B) for attention items

### Typography
- **Headings**: Font weights 600-800 for hierarchy
- **Body**: Font weight 400-500 for readability
- **Emphasis**: Font weight 600 for important information

### Responsive Design
- **Mobile**: Stack layout, collapsible sidebar
- **Tablet**: Balanced layout with visible sidebar
- **Desktop**: Full sidebar with expanded content areas

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus indicators

## 🚀 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🔮 Future Enhancements

- [ ] Add teacher editing functionality
- [ ] Implement student management
- [ ] Add real-time schedule updates
- [ ] Integrate with backend API
- [ ] Add notification system
- [ ] Implement advanced filtering and search
- [ ] Add data export functionality
- [ ] Integration with calendar systems

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name - [your.email@example.com]

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Heroicons](https://heroicons.com/) for the beautiful icon set
- [Vercel](https://vercel.com/) for deployment and hosting

---

**Note**: This is a frontend assessment project demonstrating modern React/Next.js development practices with TypeScript and Tailwind CSS.
