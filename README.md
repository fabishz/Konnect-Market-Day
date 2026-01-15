# 🚀 Konnect Hub

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.io/)

Konnect Hub is a modern, high-performance web application designed to streamline event management, vendor registration, and community engagement. Built with a focus on speed, scalability, and user experience, it serves as a central platform for connecting event organizers, vendors, and sponsors.

## ✨ Key Features

- **📅 Event Management**: Comprehensive tools for listing and managing community events.
- **🤝 Vendor Registration**: Seamless multi-step registration process for vendors and exhibitors.
- **💎 Sponsor Showcase**: Dedicated space for highlighting project sponsors and partners.
- **🖼️ Dynamic Gallery**: Interactive media gallery to showcase past events and highlights.
- **📱 Responsive Design**: Optimized for all devices, from desktop to mobile.
- **⚡ Real-time Updates**: Powered by Supabase for instant data synchronization.

## 🛠️ Technology Stack

- **Frontend**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest) (React Query)
- **Backend/Database**: [Supabase](https://supabase.io/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/konnect-hub.git
   cd konnect-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (shadcn/ui)
├── data/           # Static data and mockups
├── hooks/          # Custom React hooks
├── integrations/   # Third-party service integrations (Supabase)
├── lib/            # Utility functions and configurations
├── pages/          # Main application pages/routes
└── test/           # Unit and integration tests
```

## 🧪 Testing

Run the test suite using Vitest:
```bash
npm run test
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by the Konnect Hub Team.
