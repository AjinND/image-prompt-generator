# AI Image Prompt Generator

A responsive web application that helps users create well-structured prompts for AI image generation tools such as DALL-E, Midjourney, Stable Diffusion, etc. Built with Next.js, TypeScript, and Tailwind CSS.

![AI Image Prompt Generator Screenshot](./public/screenshots/prompt-generator-screenshot.png)

## Features

- **Interactive Prompt Builder**: Select from multiple categories to build comprehensive image prompts
- **Rich Option Categories**: Art styles, moods, settings, lighting, camera angles, and quality descriptors
- **Custom Detailing**: Add specific details to further enhance your prompts
- **Prompt History**: Access your last 10 generated prompts for quick reuse
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices
- **Dark Mode Support**: Automatic theme switching based on your system preferences
- **Local Storage**: Prompts are saved between browser sessions
- **One-Click Copying**: Easily copy generated prompts to paste into AI image generators

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm or Yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-image-prompt-generator.git
   cd image-prompt-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage Guide

### Creating a Prompt

1. **Enter a Subject**: Start by typing the main subject of your image in the "Main Subject" field.
2. **Select Options**: Choose from different categories:
   - Art Style (Realistic, Artistic, Digital Art, Animation, etc.)
   - Mood/Atmosphere (Peaceful, Dramatic, Dark, Vibrant, etc.)
   - Setting/Environment (Nature, Urban, Indoor, Fantasy World, etc.)
   - Lighting (Natural Light, Artificial Light, Dramatic, etc.)
   - Camera/Perspective (Close-up, Wide Shot, Aerial, etc.)
   - Quality Descriptors (High Quality, Professional, Trending, etc.)
3. **Add Custom Details**: Include any specific elements or attributes not covered by the preset options.
4. **Generate**: Click the "Generate Prompt" button to create your prompt.
5. **Copy**: Use the copy button to copy the prompt to your clipboard.

### Tips for Effective Prompts

- Be specific about the subject and style you want
- Combine different categories for more detailed results
- Use the custom details field to add unique elements
- Experiment with different combinations to find what works best with your preferred AI image generator

## Project Structure

```
image-prompt-generator/
├── components/
│   ├── PromptBuilder.tsx    # Main component for building prompts
│   ├── PromptDisplay.tsx    # Component to display and copy prompts
│   └── PromptHistory.tsx    # Component for showing prompt history
├── pages/
│   ├── _app.tsx             # Next.js application wrapper
│   └── index.tsx            # Main page of the application
├── public/                  # Static assets
├── styles/                  # CSS styles
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## Building for Production

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the `.next` folder.

## Deployment

This application can be deployed to various platforms:

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

Configure your `netlify.toml` file or deploy through the Netlify UI.

### Traditional Hosting

```bash
npm run build
npm run start
```

## Customization

### Adding New Prompt Categories

Modify the `promptCategories` array in `PromptBuilder.tsx` to add new categories or options:

```typescript
const promptCategories: PromptCategory[] = [
  // Existing categories...
  {
    id: 'newCategory',
    label: 'New Category Name',
    multiSelect: true, // or false
    options: [
      { id: 'option1', label: 'Option 1', examples: ['example1', 'example2'] },
      // More options...
    ]
  }
];
```

### Modifying Prompt Structure

To change how prompts are generated, modify the `generatePrompt` function in `PromptBuilder.tsx`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Tailwind CSS for the styling framework
- Next.js team for the React framework
- AI image generation communities for prompt inspiration