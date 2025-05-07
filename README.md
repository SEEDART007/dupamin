# Random Emoji Generator 🎲✨

A lightweight npm package that generates random emojis at customizable intervals.

## Installation

```bash
npm install dupamin
# or
yarn add dupamin

Features 🌟
🎲 Random emoji generation

⏱️ Customizable update interval

🔍 Filter by face or non-face emojis

📏 Adjustable font size

🏎️ Lightweight and fast

😎 Emoji Customization 

Basic Usage
jsx
import RandomEmoji from 'dupamin';

function App() {
  return <RandomEmoji />;
}

## Props

| Prop Name   | Type      | Default | Description |
|-------------|-----------|---------|-------------|
| `fontSize`  | `number`  | `90`    | Sets the size of the emoji in pixels. Values between 20-200 work best. |
| `interval`  | `number`  | `1000`  | Time in milliseconds between emoji changes (e.g. `2000` = 2 seconds). Minimum 300ms recommended. |
| `face`      | `boolean` | `false` | When `true`, only displays facial expression emojis (😊, 😢, 😎, etc.) |
| `nonFace`   | `boolean` | `false` | When `true`, only displays non-face emojis (🐶, 🍕, 🚀, etc.) |


Large emoji that updates every 2 seconds:

jsx
<RandomEmoji 
  fontSize={120} 
  interval={2000} 
/>

Only show non-face emojis (animals, food, objects):

jsx
<RandomEmoji 
  nonFace={true}
  fontSize={64}
/>

Customized emojis

<RandomEmoji 
  emojis={['❤️‍🔥','🦌',.........,'😇']}
/>

### Important Notes:
- ⚠️ Don't set both `face` and `nonFace` to `false` simultaneously
- 🔄 The component automatically cleans up its interval timer on unmount

