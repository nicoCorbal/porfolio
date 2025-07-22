import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import lucide from 'lucide-astro';

export default defineConfig({
  output: 'static',
  integrations: [tailwind(), react(), lucide()],
});