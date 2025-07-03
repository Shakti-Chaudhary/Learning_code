#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Project name (passed as first argument or default to `vite-react-ts-app`)
PROJECT_NAME=${1:-vite-react-ts-app}

echo "🔧 Creating Vite + React + TS project: $PROJECT_NAME"
npm create vite@latest "$PROJECT_NAME" -- --template react-ts

cd "$PROJECT_NAME"

echo "📦 Installing dependencies..."
npm install

echo "🎨 Installing Tailwind CSS v4 and dependencies..."
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

echo "📁 Initializing Tailwind config..."
npx tailwindcss init -p

echo "⚙️ Updating Tailwind config..."
cat > tailwind.config.js <<EOF
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

echo "📝 Updating styles in src/index.css..."
cat > src/index.css <<EOF
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

echo "✅ Tailwind CSS v4 setup complete!"
echo "🚀 Running dev server..."
npm run dev
