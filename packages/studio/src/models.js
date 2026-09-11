import { getMediaCapability } from "./modelCapabilities.js";

// Auto-generated from models_dump.json
import {
  getAspectRatioOptions,
  I2I_DIMENSION_RATIOS,
  T2I_DIMENSION_RATIOS,
} from './imageSizing.js';

export const t2iModels = [
  {
    "id": "nano-banana",
    "name": "Nano Banana",
    "endpoint": "nano-banana",
    "inputs": {
      "prompt": {
        "examples": [
          "A portrait of me in a modern living room. Change it so I’m dressed in 1950s attire with a polka-dot dress, while maintaining my face and hairstyle."
        ],
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "3:4",
          "4:3",
          "9:16",
          "16:9",
          "3:2",
          "2:3",
          "5:4",
          "4:5",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "flux-dev",
    "name": "Flux Dev",
    "endpoint": "flux-dev-image",
    "inputs": {
      "prompt": {
        "examples": [
          "Extreme close-up of a single tiger eye, direct frontal view. Detailed iris and pupil. Sharp focus on eye texture and color. Natural lighting to capture authentic eye shine and depth. The word \"FLUX\" is painted over it in big, white brush strokes with visible texture."
        ],
        "description": "Текстовый промпт, описывающий изображение. Длина промпта должна быть от 2 до 3000 символов.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения. Значение должно делиться на 64, например: 128...512, 576, 640...2048.",
        "default": 1024,
        "minValue": 128,
        "maxValue": 2048,
        "step": 64
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения. Значение должно делиться на 64, например: 128...512, 576, 640...2048.",
        "default": 1024,
        "minValue": 128,
        "maxValue": 2048,
        "step": 64
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-dev-lora",
    "name": "Flux Dev Lora",
    "inputs": {
      "prompt": {
        "examples": [
          "A female warrior in ornate armor standing on a cliff during sunset, flowing cape, wind blowing through her hair, detailed fantasy art style."
        ],
        "description": "Текстовый промпт, описывающий изображение. Длина промпта должна быть от 2 до 3000 символов.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "model_id": {
        "examples": [
          {
            "model": "civitai:119351@317153",
            "weight": 1
          }
        ],
        "title": "Идентификаторы LoRA",
        "name": "model_id",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "model": {
              "type": "string",
              "format": "url",
              "title": "ID модели",
              "description": "ID модели LoRA на Civitai."
            },
            "weight": {
              "type": "number",
              "title": "Вес",
              "description": "Список моделей LoRA для генерации. Каждый элемент должен включать `id` (например, \"civitai:1642876@1864626\") и `weight` от 0 до 4. Можно указать до 4 моделей. `id` можно найти в URL модели на Civitai. Эти модели будут применены с указанными весами системой Flux Dev при генерации изображения.",
              "minValue": 0,
              "maxValue": 4,
              "step": 0.01,
              "default": 1
            }
          }
        },
        "description": "Уникальный идентификатор модели LoRA, размещённой на Civitai, используемой системой генерации изображений Flux Dev. Этот ID указывает Flux Dev, какую именно модель LoRA применить при генерации. ID модели можно найти в URL модели на Civitai (например, model_id: civitai:1642876@1864626).",
        "maxItems": 4
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения. Значение должно делиться на 64, например: 128...512, 576, 640...2048.",
        "default": 1024,
        "minValue": 128,
        "maxValue": 2048,
        "step": 64,
        "isEdit": true
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения. Значение должно делиться на 64, например: 128...512, 576, 640...2048.",
        "default": 1024,
        "minValue": 128,
        "maxValue": 2048,
        "step": 64,
        "isEdit": true
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1,
        "isEdit": true
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-kontext-dev-t2i",
    "name": "Flux Kontext Dev T2I",
    "inputs": {
      "prompt": {
        "examples": [
          "A powerful wizard casting a glowing spell in a dark forest, wearing a hooded robe, with swirling magical energy, epic fantasy art."
        ],
        "description": "Текстовый промпт, описывающий изображение. Длина промпта должна быть от 2 до 3000 символов.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1,
        "isEdit": true
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "hidream-i1-fast",
    "name": "Hidream I1 Fast",
    "endpoint": "hidream_i1_fast_image",
    "inputs": {
      "prompt": {
        "examples": [
          "A colorful cartoon-style cat sitting on a skateboard, wide smile, playful background, 2D flat illustration style."
        ],
        "description": "Текстовый промпт, описывающий изображение. Длина промпта должна быть от 2 до 3000 символов.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения. Значение должно делиться на 64, например: 128...512, 576, 640...2048.",
        "default": 1024,
        "minValue": 128,
        "maxValue": 2048,
        "step": 64
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения. Значение должно делиться на 64, например: 128...512, 576, 640...2048.",
        "default": 1024,
        "minValue": 128,
        "maxValue": 2048,
        "step": 64
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "hidream",
    "provider_name": "Hidream"
  },
  {
    "id": "hidream-i1-dev",
    "name": "Hidream I1 Dev",
    "endpoint": "hidream_i1_dev_image",
    "inputs": {
      "prompt": {
        "examples": [
          "A colorful cartoon-style cat sitting on a skateboard, wide smile, playful background, 2D flat illustration style."
        ],
        "description": "Текстовый промпт, описывающий изображение. Длина промпта должна быть от 2 до 3000 символов.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения. Значение должно делиться на 64, например: 128...512, 576, 640...2048.",
        "default": 1024,
        "minValue": 128,
        "maxValue": 2048,
        "step": 64
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения. Значение должно делиться на 64, например: 128...512, 576, 640...2048.",
        "default": 1024,
        "minValue": 128,
        "maxValue": 2048,
        "step": 64
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "hidream",
    "provider_name": "Hidream"
  },
  {
    "id": "hidream-i1-full",
    "name": "Hidream I1 Full",
    "endpoint": "hidream_i1_full_image",
    "inputs": {
      "prompt": {
        "examples": [
          "A majestic elven queen standing in a glowing forest, wearing intricate golden armor with emerald details, sunlight rays filtering through the trees, ultra-detailed fantasy concept art."
        ],
        "description": "Текстовый промпт, описывающий изображение. Длина промпта должна быть от 2 до 3000 символов.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения. Значение должно делиться на 64, например: 128...512, 576, 640...2048.",
        "default": 1024,
        "minValue": 128,
        "maxValue": 2048,
        "step": 64
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения. Значение должно делиться на 64, например: 128...512, 576, 640...2048.",
        "default": 1024,
        "minValue": 128,
        "maxValue": 2048,
        "step": 64
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "hidream",
    "provider_name": "Hidream"
  },
  {
    "id": "ai-anime-generator",
    "name": "Ai Anime Generator",
    "inputs": {
      "prompt": {
        "examples": [
          "A cheerful anime girl with short pink hair and green eyes, wearing a school uniform, standing under cherry blossom trees, soft lighting, anime style."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1,
        "isEdit": true
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1,
        "isEdit": true
      }
    },
    "provider": "muapi",
    "provider_name": "MuapiApp"
  },
  {
    "id": "wan2.1-text-to-image",
    "name": "Wan2.1 Text To Image",
    "inputs": {
      "prompt": {
        "examples": [
          "A young woman with freckles and natural makeup, standing in soft sunlight, sharp focus, DSLR photo style, ultra-realistic skin texture."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "flux-kontext-pro-t2i",
    "name": "Flux Kontext Pro T2I",
    "inputs": {
      "prompt": {
        "examples": [
          "A steampunk owl with mechanical wings, perched on a glowing gear, cinematic lighting."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "16:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-kontext-max-t2i",
    "name": "Flux Kontext Max T2I",
    "inputs": {
      "prompt": {
        "examples": [
          "A realistic portrait of a woman with curly hair, wearing a silk blouse, studio lighting, high detail."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "16:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "gpt4o-text-to-image",
    "name": "Gpt4o Text To Image",
    "inputs": {
      "prompt": {
        "examples": [
          "A diagram of the solar system with labeled planets, cartoon style."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "2:3",
          "3:2"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "num_images": {
        "enum": [
          1,
          2,
          4
        ],
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "midjourney-v7-text-to-image",
    "name": "Midjourney v7 Text To Image",
    "inputs": {
      "prompt": {
        "examples": [
          "A sprawling futuristic city at dusk, illuminated with vibrant neon signs, layered skyscrapers, elevated highways with flying cars, warm atmospheric glow, ultra-detailed sci-fi architecture, cinematic composition — digital art, high contrast, 8K"
        ],
        "description": "Промпт для генерации изображения",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "speed": {
        "enum": [
          "relaxed",
          "fast",
          "turbo"
        ],
        "title": "Скорость",
        "name": "speed",
        "type": "string",
        "description": "Скорость, соответствующая разным режимам скорости Midjourney",
        "default": "relaxed"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "1:2",
          "2:1",
          "2:3",
          "3:2",
          "5:6",
          "6:5"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "variety": {
        "title": "Разнообразие",
        "name": "variety",
        "type": "int",
        "description": "Управляет разнообразием сгенерированных изображений. Шаг изменения — 5. Более высокие значения дают более разнообразные результаты. Более низкие — более однородные.",
        "default": 5,
        "minValue": 0,
        "maxValue": 100,
        "step": 5
      },
      "stylization": {
        "title": "Стилизация",
        "name": "stylization",
        "type": "int",
        "description": "Управляет интенсивностью художественного стиля. Более высокие значения дают более стилизованный результат. Более низкие — более реалистичный.",
        "default": 1,
        "minValue": 0,
        "maxValue": 1000,
        "step": 1
      },
      "weirdness": {
        "title": "Странность",
        "name": "weirdness",
        "type": "int",
        "description": "Управляет креативностью и уникальностью. Более высокие значения дают более необычные результаты. Более низкие — более традиционные.",
        "default": 1,
        "minValue": 0,
        "maxValue": 3000,
        "step": 1
      }
    },
    "provider": "midjourney",
    "provider_name": "Midjourney"
  },
  {
    "id": "flux-schnell",
    "name": "Flux Schnell",
    "endpoint": "flux-schnell-image",
    "inputs": {
      "prompt": {
        "examples": [
          "A cozy mountain cabin surrounded by pine trees during snowfall, warm light glowing from windows, twilight scene"
        ],
        "description": "Текстовый промпт, описывающий изображение. Длина промпта должна быть от 2 до 3000 символов.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения. Значение должно делиться на 64, например: 128...512, 576, 640...2048.",
        "default": 1024,
        "minValue": 128,
        "maxValue": 2048,
        "step": 64
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения. Значение должно делиться на 64, например: 128...512, 576, 640...2048.",
        "default": 1024,
        "minValue": 128,
        "maxValue": 2048,
        "step": 64
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "bytedance-seedream-v3",
    "name": "Bytedance Seedream v3",
    "endpoint": "bytedance-seedream-image",
    "inputs": {
      "prompt": {
        "examples": [
          "A magical forest with glowing mushrooms and a crystal river under a starry sky, dreamy and ethereal style."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "qwen-image",
    "name": "Qwen Image",
    "inputs": {
      "prompt": {
        "examples": [
          "A serene Japanese garden in autumn, with red maple leaves falling gently, a small stone bridge over a koi pond, photorealistic detail, soft morning light"
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21",
          "3:2",
          "2:3"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "16:9"
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "flux-pulid",
    "name": "Flux Pulid",
    "inputs": {
      "prompt": {
        "examples": [
          "Recreate the same person in a Renaissance-style painting with ornate collar and soft candlelight ambiance."
        ],
        "description": "Текстовый промпт, описывающий изображение (максимум 1500 символов).",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/818590409074/b5aa9200-ed01-43b2-8ed7-091255f3d164.jpg"
        ],
        "description": "URL входного изображения, используемого для генерации изображения.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "ideogram-v3-t2i",
    "name": "Ideogram v3 T2I",
    "inputs": {
      "prompt": {
        "examples": [
          "A retro 80s style poster with the words 'MUAPI APP' glowing in pink and blue neon lights, cyberpunk city skyline in the background, cinematic design, highly detailed."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "render_speed": {
        "enum": [
          "Turbo",
          "Balanced",
          "Качество"
        ],
        "title": "Скорость рендера",
        "name": "render_speed",
        "type": "string",
        "description": "Используемая скорость рендеринга.",
        "default": "Balanced"
      },
      "style": {
        "enum": [
          "Auto",
          "General",
          "Realistic",
          "Design"
        ],
        "title": "Стиль",
        "name": "style",
        "type": "string",
        "description": "Тип стиля для генерации.",
        "default": "Auto"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "3:4",
          "4:3",
          "9:16",
          "16:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1,
        "isEdit": true
      }
    },
    "provider": "ideogram",
    "provider_name": "Ideogram"
  },
  {
    "id": "google-imagen4",
    "name": "Google Imagen4",
    "inputs": {
      "prompt": {
        "examples": [
          "A grand waterfall cascading down glowing crystal cliffs under a twilight sky, bioluminescent plants illuminating the scene, a lone explorer standing on a cliff edge with a futuristic lantern, cinematic ultra-realism."
        ],
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1,
        "isEdit": true
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "google-imagen4-fast",
    "name": "Google Imagen4 Fast",
    "inputs": {
      "prompt": {
        "examples": [
          "A playful panda astronaut bouncing on the moon, leaving heart-shaped footprints, with a pastel-colored galaxy in the background."
        ],
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1,
        "isEdit": true
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "google-imagen4-ultra",
    "name": "Google Imagen4 Ultra",
    "inputs": {
      "prompt": {
        "examples": [
          "A close-up portrait of an old lighthouse keeper, wrinkled hands holding a brass lantern, stormy sea waves crashing behind, ultra-detailed realism."
        ],
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "sdxl-image",
    "name": "Sdxl Image",
    "inputs": {
      "prompt": {
        "examples": [
          "An elven archer standing in a bioluminescent forest at night, glowing foliage, intricate leather armor, dynamic pose, painterly high-detail concept art."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "stability",
    "provider_name": "Stability AI"
  },
  {
    "id": "bytedance-seedream-v4",
    "name": "Bytedance Seedream v4",
    "inputs": {
      "prompt": {
        "examples": [
          "A tranquil shoreline at dawn where waves turn into glowing ribbons of light, painting the sky with dreamlike hues of violet and gold. A figure walks along the edge, leaving footsteps that bloom into luminous flowers, symbolizing imagination flowing seamlessly into reality."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "2:3",
          "3:2",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "resolution": {
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового изображения.",
        "default": "4K"
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "hunyuan-image-2.1",
    "name": "Hunyuan Image 2.1",
    "inputs": {
      "prompt": {
        "examples": [
          "A vast ink-wash landscape where misty mountains rise into drifting clouds, rivers flowing like silver threads across valleys. In the distance, a solitary pavilion glows with warm lantern light, blending classical Chinese painting aesthetics with modern cinematic realism."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "hunyuan",
    "provider_name": "Hunyuan"
  },
  {
    "id": "chroma-image",
    "name": "Chroma Image",
    "inputs": {
      "prompt": {
        "examples": [
          "A futuristic studio bathed in radiant beams of shifting neon colors — cyan, magenta, amber, and emerald — that blend into surreal gradients across walls and objects. A crystal-like prism floats at the center, splitting light into vibrant chromatic waves that ripple outward, painting the scene in glowing, ever-changing hues."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "stability",
    "provider_name": "Stability AI"
  },
  {
    "id": "flux-redux",
    "name": "Flux Redux",
    "inputs": {
      "prompt": {
        "examples": [
          "Reimagine the forest cabin as a mystical fantasy retreat at twilight, glowing lanterns hanging from the trees, magical fireflies in the air, cinematic atmosphere with enchanted vibes."
        ],
        "description": "Текстовый промпт, описывающий изображение (максимум 1500 символов).",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/flux-redux-input.jpg"
        ],
        "description": "URL входного изображения, используемого для генерации изображения.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-krea-dev",
    "name": "Flux Krea Dev",
    "inputs": {
      "prompt": {
        "examples": [
          "Close-up shot of a midnight blue sports car on wet asphalt, city lights reflected in its paint, shallow depth of field, cinematic realism."
        ],
        "description": "Текстовый промпт, описывающий изображение. Длина промпта должна быть от 2 до 3000 символов.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "perfect-pony-xl",
    "name": "Perfect Pony Xl",
    "inputs": {
      "prompt": {
        "examples": [
          "A warm, photorealistic portrait of a dappled pony standing in a sunlit stable, dust motes floating in golden light, textured mane, high detail on fur and eyes."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "stability",
    "provider_name": "Stability AI"
  },
  {
    "id": "neta-lumina",
    "name": "Neta Lumina",
    "inputs": {
      "prompt": {
        "examples": [
          "A poised young woman with long silver hair and heterochromatic eyes (one blue, one green), wearing a flowing cheongsam with cranes embroidered, standing in a dimly lit grand staircase. Soft ethereal lighting, painterly anime style, rich textures, delicate lace and pearl accessories."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "stability",
    "provider_name": "Stability AI"
  },
  {
    "id": "wan2.5-text-to-image",
    "name": "Wan2.5 Text To Image",
    "inputs": {
      "prompt": {
        "examples": [
          "A majestic waterfall cascading from towering cliffs into a misty valley, with glowing bioluminescent plants along the riverbanks, a lone explorer standing on a rock, cinematic lighting and ultra-detailed scenery."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 768,
        "maxValue": 1440,
        "step": 1
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения.",
        "default": 1322,
        "minValue": 768,
        "maxValue": 1440,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "hunyuan-image-3.0",
    "name": "Hunyuan Image 3.0",
    "inputs": {
      "prompt": {
        "examples": [
          "A traditional Chinese courtyard with red lanterns hanging from wooden beams, moonlight reflecting from jade floor tiles. In the courtyard, a modern artist sits painting on an easel, neon blue sneakers, graffiti-style mural beginning behind them. Blend of classical aesthetics and modern street art."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "hunyuan",
    "provider_name": "Hunyuan"
  },
  {
    "id": "leonardoai-phoenix-1.0",
    "name": "Leonardoai Phoenix 1.0",
    "inputs": {
      "prompt": {
        "examples": [
          "A magical forest at twilight, giant bioluminescent mushrooms illuminating a misty path, a crystal-clear river winding through twisted trees, fireflies dancing, soft ambient glow, ancient stone ruins partially visible, cinematic fantasy lighting, high-detail textures on foliage and moss, ethereal atmosphere, volumetric lighting rays piercing through branches."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "2:3",
          "3:2"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      }
    },
    "provider": "leonardoai",
    "provider_name": "Leonardo AI"
  },
  {
    "id": "leonardoai-lucid-origin",
    "name": "Leonardoai Lucid Origin",
    "inputs": {
      "prompt": {
        "examples": [
          "A towering medieval castle perched on a cliff, waterfalls cascading around it, sunrise casting golden light on the stone walls, mist rising from the valley below, flying dragons circling above, realistic clouds and sky reflections, cinematic wide-angle view, ultra-detailed textures on stone and water, epic fantasy atmosphere."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "2:3",
          "3:2"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      }
    },
    "provider": "leonardoai",
    "provider_name": "Leonardo AI"
  },
  {
    "id": "reve-text-to-image",
    "name": "Reve Text To Image",
    "inputs": {
      "prompt": {
        "examples": [
          "An astronaut stands in a strange, bioluminescent purple jungle on an alien planet. She slowly reaches out her hand as a graceful creature made of translucent energy curiously approaches, gently touching her glove's fingertip with its tendril. The reflection of the planet's two moons is visible on her helmet's visor. Sense of wonder, photorealistic, cinematic."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      }
    },
    "provider": "reve",
    "provider_name": "Reve"
  },
  {
    "id": "grok-imagine-text-to-image",
    "name": "Grok Imagine Text To Image",
    "inputs": {
      "prompt": {
        "examples": [
          "A futuristic samurai standing under glowing neon lights in a rainy cyberpunk alley, reflections on wet pavement, dramatic rim lighting, highly detailed armor, cinematic atmosphere, ultra-realistic style."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "9:16",
          "16:9",
          "2:3",
          "3:2",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения. Каждый раз вы получаете 6 изображений.",
        "default": "1:1"
      }
    },
    "provider": "grok",
    "provider_name": "xAI"
  },
  {
    "id": "nano-banana-pro",
    "name": "Nano Banana Pro",
    "endpoint": "nano-banana-pro",
    "inputs": {
      "prompt": {
        "examples": [
          "A radiant golden banana floating in a futuristic glass chamber, surrounded by swirling particles of light and data streams forming geometric shapes. Electric blue reflections ripple across the surface as energy pulses outward, turning fragments of light into vivid artworks suspended mid-air. Symbolizing playful innovation, AI precision, and evolution of creative power."
        ],
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "3:4",
          "4:3",
          "9:16",
          "16:9",
          "3:2",
          "2:3",
          "5:4",
          "4:5",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "resolution": {
        "enum": [
          "1k",
          "2k",
          "4k"
        ],
        "description": "Целевое разрешение сгенерированного изображения.",
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "default": "1k"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "kling-o1-text-to-image",
    "name": "Kling O1 Text To Image",
    "inputs": {
      "prompt": {
        "examples": [
          "A towering arcology city at dusk built into a canyon, terraces lit with warm lanterns and bioluminescent gardens cascading down the rock face. Floating trams glide between terraces, mist curls from hidden waterfalls, and a faint green aurora shivers above the canyon rim. Deep orange sunset meets teal dusk, dramatic rim lighting, ultra-detailed architecture, cinematic wide-angle composition, 8k, hyperreal textures."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "resolution": {
        "enum": [
          "1k",
          "2k"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Целевое разрешение сгенерированного изображения.",
        "default": "1k"
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 9,
        "step": 1
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "z-image-turbo",
    "name": "Z Image Turbo",
    "inputs": {
      "prompt": {
        "examples": [
          "A colossal glass hourglass floating in a dark void, filled not with sand but with glowing galaxies swirling inside. Each galaxy emits colorful nebula clouds that leak through cracks in the glass, forming cosmic streams drifting into the darkness. Bright rim lighting around the hourglass, reflective glass surfaces, deep space background, ultra-detailed sci-fi render, 8k quality, volumetric glow, high contrast."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "flux-2-dev",
    "name": "Flux 2 Dev",
    "inputs": {
      "prompt": {
        "examples": [
          "A giant mechanical butterfly made of chrome wings and glowing blue energy veins, hovering above a mirror-smooth lake during twilight. Each wing reflects the sky while emitting soft neon trails. The lake surface ripples lightly from the energy pulses. Mist rolls across the water, and distant mountains fade into a deep violet horizon. Ultra-realistic lighting, cinematic composition, 8k render, high contrast, reflective metal textures."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-flex",
    "name": "Flux 2 Flex",
    "inputs": {
      "prompt": {
        "examples": [
          "A monumental crystalline arch towering above an endless desert of shifting silver sand, glowing with internal prisms that refract rainbow beams across the dunes. Beneath the arch floats a slowly rotating orb of condensed starlight, casting long ethereal shadows. In the distance, colossal sand whales breach from metallic dunes, their bodies shimmering with mirrored scales. Overhead, a fractured moon illuminates the scene with cold blue radiance. Ultra-detailed fantasy–sci-fi fusion, cinematic wide-angle view, volumetric light rays, 8k clarity, high contrast, dreamlike atmosphere."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "2:3",
          "3:2"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "resolution": {
        "enum": [
          "1k",
          "2k"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Целевое разрешение сгенерированного изображения.",
        "default": "1k"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-pro",
    "name": "Flux 2 Pro",
    "inputs": {
      "prompt": {
        "examples": [
          "A colossal throne forged from intertwining meteor-iron branches, floating above a storm-torn ocean. Each branch pulses with glowing red runes, casting fiery reflections across the churning waves below. Above the throne hovers a massive eclipsed sun, its corona exploding into swirling arcs of molten light. Lightning erupts from the clouds and climbs the metal branches like living serpents. A lone hooded figure stands at the edge of the water, cloak whipping in the wind, illuminated only by the molten eclipse. Ultra-cinematic composition, hyper-detailed textures, 8k resolution, dramatic contrast, dark epic fantasy atmosphere."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "2:3",
          "3:2"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "resolution": {
        "enum": [
          "1k",
          "2k"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Целевое разрешение сгенерированного изображения.",
        "default": "1k"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "vidu-q2-text-to-image",
    "name": "Vidu Q2 Text To Image",
    "inputs": {
      "prompt": {
        "examples": [
          "A colossal floating serpent made of shimmering stardust coils around a broken moon suspended in deep space. Each scale glows with shifting nebula colors, sending ripples of light across the void. Meteor fragments drift slowly around the creature, leaving trails of violet plasma. Beneath the serpent, a crystalline ring structure orbits the shattered moon, reflecting cosmic beams in intricate patterns. The background is a star field swirling into a spiral galaxy, with vibrant energy storms crackling along the horizon. Ultra-cinematic cosmic fantasy, high contrast, 8k detail, volumetric glow, deep space atmosphere."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "resolution": {
        "enum": [
          "1k",
          "2k",
          "4k"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Целевое разрешение сгенерированного изображения.",
        "default": "1k"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "bytedance-seedream-v4.5",
    "name": "Bytedance Seedream V4.5",
    "inputs": {
      "prompt": {
        "examples": [
          "A massive floating temple forged from translucent sapphire glass hovers above a storm-lit ocean. Crystalline towers refract lightning into rainbow shards that scatter across the waves below. Gigantic chains made of glowing runes suspend the temple in the air as swirling storm clouds coil around it. Beneath the structure, a vortex of shimmering water spirals upward, feeding energy into the floating palace. Distant thunder illuminates the scene with cold blue flashes, casting dramatic shadows across the ocean surface. Ultra-cinematic fantasy–sci-fi fusion, hyper-detailed textures, volumetric lighting, 8k clarity."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "quality": {
        "enum": [
          "basic",
          "high"
        ],
        "title": "Качество",
        "name": "quality",
        "type": "string",
        "description": "Качество итогового изображения.",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "gpt-image-1.5",
    "name": "Gpt Image 1.5",
    "inputs": {
      "prompt": {
        "examples": [
          "A colossal hourglass floating in a silent cosmic void, its upper chamber filled with swirling golden sand that transforms into glowing constellations as it falls. The lower chamber contains a miniature ocean suspended in zero gravity, with waves frozen mid-motion and bioluminescent creatures glowing beneath the surface. Cracks in the glass emit thin beams of white light that bend and refract through drifting stardust. In the background, fragmented planets orbit slowly, partially illuminated by a distant supernova. Ultra-cinematic surreal concept, dramatic contrast between warm gold and deep blue, hyper-detailed textures, volumetric light rays, 8k clarity, dreamlike atmosphere."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "2:3",
          "3:2"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "quality": {
        "enum": [
          "low",
          "medium",
          "high"
        ],
        "title": "Качество",
        "name": "quality",
        "type": "string",
        "description": "Качество сгенерированного изображения.",
        "default": "medium"
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "gpt-image-2",
    "name": "Gpt Image 2",
    "endpoint": "gpt-image-2-text-to-image",
    "family": "gpt-2",
    "inputs": {
      "prompt": {
        "examples": [
          "A photorealistic product photo of a luxury watch resting on a slab of black marble, dramatic cinematic lighting with a soft rim glow, ultra-detailed metallic textures, shallow depth of field, studio quality."
        ],
        "description": "Текстовый промпт, описывающий изображение. Поддерживается до 20 000 символов.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "auto",
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "auto"
      },
      "resolution": {
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Целевое разрешение сгенерированного изображения.",
        "default": "2K"
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "wan2.6-text-to-image",
    "name": "Wan2.6 Text To Image",
    "inputs": {
      "prompt": {
        "examples": [
          "A colossal floating bridge forged from glowing white stone spans a vast abyss filled with swirling clouds of light. Along the bridge, towering statues carved from ancient marble stand in silent formation, their eyes emitting faint golden beams that illuminate engraved runes beneath their feet. Below the bridge, fragments of ruined cities drift slowly through the mist, catching reflections from the glowing stone above. Overhead, a twilight sky fades from deep blue to soft amber, with distant stars beginning to appear. Cinematic fantasy environment, high contrast lighting, volumetric fog, ultra-detailed textures, epic scale."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "int",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 768,
        "maxValue": 1440,
        "step": 1
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "int",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 768,
        "maxValue": 1440,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "qwen-text-to-image-2512",
    "name": "Qwen Text To Image 2512",
    "inputs": {
      "prompt": {
        "examples": [
          "A colossal biomechanical whale swimming slowly through a vast sky made of soft clouds and fractured light. Its translucent body reveals glowing internal organs shaped like rotating gears and flowing energy veins. Below it, a sprawling patchwork of farmland and rivers curves with the planet’s surface, catching reflections from the whale’s luminous glow. Long fabric banners trail from the whale’s fins, fluttering gently in the wind like ceremonial streamers. The camera angle is wide and aerial, emphasizing scale and serenity. Soft sunrise colors, cinematic depth, ultra-detailed surreal sci-fi atmosphere."
        ],
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "width": {
        "type": "integer",
        "title": "Ширина",
        "name": "width",
        "description": "Ширина изображения в пикселях",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "type": "integer",
        "title": "Высота",
        "name": "height",
        "description": "Высота изображения в пикселях",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "flux-2-klein-4b",
    "name": "Flux 2 Klein 4b",
    "inputs": {
      "prompt": {
        "examples": [
          "A small round robot sitting at a café table outdoors, holding a tiny cup of coffee with both hands. The robot has a simple white body, a glowing digital face showing a happy expression, and short stubby legs dangling from the chair. Morning sunlight casts soft shadows on the pavement, potted plants surround the café, and steam gently rises from the coffee cup. Clean, minimal, cute, modern illustration style, bright colors, friendly mood."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-klein-9b",
    "name": "Flux 2 Klein 9b",
    "inputs": {
      "prompt": {
        "examples": [
          "A cute corgi puppy wearing a tiny yellow raincoat stands on a wet sidewalk after rain. Small puddles reflect the city lights, and the puppy looks up with bright curious eyes while holding a green leaf in its mouth. Soft evening light, shallow depth of field, clean background, warm and cheerful mood, high detail fur texture, realistic yet adorable style."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "z-image-base",
    "name": "Z Image Base",
    "inputs": {
      "prompt": {
        "examples": [
          "A cozy late-night diner interior with warm yellow lighting, rain tapping against large glass windows, and a lone barista cleaning the counter. A slice of pie sits under a glass dome, steam rises from a fresh cup of coffee, and neon signs outside softly glow and reflect across the wet street. Cinematic realism, shallow depth of field, calm mood, high detail, modern photography style."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          null
        ],
        "description": "URL входного изображения.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1"
      },
      "strength": {
        "title": "Сила",
        "name": "strength",
        "type": "int",
        "description": "Управляет силой трансформации. Более высокие значения дают результат, более отличающийся от исходного изображения.",
        "default": 0.6,
        "minValue": 0,
        "maxValue": 1,
        "step": 0.01
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "nano-banana-2",
    "name": "Nano Banana 2",
    "endpoint": "nano-banana-2",
    "family": "nano",
    "inputs": {
      "prompt": {
        "description": "Позитивный промпт для генерации.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "examples": [
          "A futuristic cityscape with glowing neon lights reflected in rain-soaked streets, ultra-detailed 4K photography."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "1:4",
          "1:8",
          "2:3",
          "3:2",
          "3:4",
          "4:1",
          "4:3",
          "4:5",
          "5:4",
          "8:1",
          "9:16",
          "16:9",
          "21:9",
          "auto"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения.",
        "default": "auto"
      },
      "resolution": {
        "enum": [
          "1k",
          "2k",
          "4k"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного изображения.",
        "default": "1k"
      },
      "google_search": {
        "title": "Поиск Google",
        "name": "google_search",
        "type": "boolean",
        "description": "Использовать ли поиск Google для улучшения промпта.",
        "default": false
      },
      "output_format": {
        "enum": [
          "jpg",
          "png"
        ],
        "title": "Формат вывода",
        "name": "output_format",
        "type": "string",
        "description": "Формат итогового изображения.",
        "default": "jpg"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "seedream-5.0",
    "name": "Seedream 5.0",
    "endpoint": "seedream-5.0",
    "family": "seedream",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение для генерации.",
        "examples": [
          "A futuristic city with soaring crystalline towers, suspended gardens, and neon-lit skyways under a twin-moon sky, captured in a cinematic, high-detail digital art style."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "quality": {
        "enum": [
          "basic",
          "high"
        ],
        "title": "Качество",
        "name": "quality",
        "type": "string",
        "description": "Качество итогового изображения.",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "minimax-image-01",
    "name": "MiniMax Image 01",
    "endpoint": "minimax-image-01",
    "family": "minimax",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение для генерации (максимум 1500 символов).",
        "examples": [
          "A serene mountain lake at sunset with golden reflections on the water, surrounded by pine forests and snow-capped peaks, photorealistic, 8k."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "21:9"
        ],
        "default": "1:1"
      },
      "num_images": {
        "type": "int",
        "title": "Количество изображений",
        "name": "num_images",
        "description": "Количество изображений для генерации за один запрос.",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  }
,
  {
    "id": "bytedance-seedream-v5.0",
    "name": "Seedream 5.0",
    "endpoint": "seedream-5.0",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение для генерации",
        "examples": [
          "A bright open sky at early morning with soft white clouds and clean sunlight. In the middle of the sky, giant physical letters made from translucent glass float in the air, casting realistic shadows and reflections through the clouds. The letters are thick, dimensional, and clearly readable, like real objects suspended in space. The camera is slightly low-angle, making the text feel present and important.\n\nThe floating glass letters spell clearly and prominently:\n\nSeedream 5.0 Lite\n\nUltra-clean, cinematic lighting, realistic reflections, sharp focus, premium 3D render, highly readable typography, modern tech poster aesthetic."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "quality": {
        "enum": [
          "basic",
          "high"
        ],
        "title": "Качество",
        "name": "quality",
        "type": "string",
        "description": "Качество итогового изображения.",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "z-image-p",
    "name": "Z-Image P",
    "endpoint": "z-image-p",
    "inputs": {
      "prompt": {
        "examples": [
          "A tiny Earth-like planet floating inside a glass bottle placed on a wooden table, clouds slowly swirling around the planet, extremely detailed macro photography style"
        ],
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий желаемое содержание изображения."
      },
      "negative_prompt": {
        "type": "string",
        "title": "Негативный промпт",
        "name": "negative_prompt",
        "description": "Негативный промпт для генерации изображения",
        "default": ""
      },
      "width": {
        "title": "Ширина",
        "name": "width",
        "type": "integer",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 64,
        "maxValue": 1440,
        "step": 1
      },
      "height": {
        "title": "Высота",
        "name": "height",
        "type": "integer",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 64,
        "maxValue": 1440,
        "step": 1
      },
      "seed": {
        "title": "Сид",
        "name": "seed",
        "type": "int",
        "description": "Seed для генерации. Установите -1 для случайного значения.",
        "default": -1
      },
      "flow_shift": {
        "title": "Сдвиг потока",
        "name": "flow_shift",
        "type": "number",
        "description": "Увеличьте, если получаете слишком много размытых/тёмных/некачественных изображений. Уменьшите, чтобы попробовать повысить детализацию.",
        "default": 3.0,
        "minValue": 0.3,
        "maxValue": 7.0,
        "step": 0.1
      },
      "batch_size": {
        "title": "Размер пакета",
        "name": "batch_size",
        "type": "integer",
        "description": "Количество изображений для генерации.",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "qwen-image-2.0",
    "name": "Qwen Image 2.0",
    "endpoint": "qwen-image-2.0",
    "inputs": {
      "prompt": {
        "description": "Описание изображения, которое вы хотите сгенерировать.",
        "title": "Промпт",
        "type": "string",
        "name": "prompt",
        "examples": [
          "An ancient library where bookshelves slowly transform into giant trees, glowing books hanging like fruits, magical forest atmosphere, warm cinematic light"
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "type": "string",
        "name": "aspect_ratio",
        "default": "16:9",
        "description": "Соотношение сторон итогового изображения."
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "qwen-image-2.0-pro",
    "name": "Qwen Image 2.0 Pro",
    "endpoint": "qwen-image-2.0-pro",
    "inputs": {
      "prompt": {
        "description": "Описание изображения, которое вы хотите сгенерировать.",
        "title": "Промпт",
        "type": "string",
        "name": "prompt",
        "examples": [
          "A massive transparent whale floating through the sky above a city, inside its body a fully lit miniature city with skyscrapers and highways, surreal cinematic lighting, ultra detailed"
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "type": "string",
        "name": "aspect_ratio",
        "default": "16:9",
        "description": "Соотношение сторон итогового изображения."
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "flux-2-klein-4b-turbo",
    "name": "Flux 2 Klein 4B Turbo",
    "endpoint": "flux-2-klein-4b-turbo",
    "inputs": {
      "prompt": {
        "examples": [
          "A small round robot sitting at a café table outdoors, holding a tiny cup of coffee with both hands."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-klein-9b-turbo",
    "name": "Flux 2 Klein 9B Turbo",
    "endpoint": "flux-2-klein-9b-turbo",
    "inputs": {
      "prompt": {
        "examples": [
          "A cute corgi puppy wearing a tiny yellow raincoat stands on a wet sidewalk after rain."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "wan2.7-text-to-image",
    "name": "Wan 2.7 Text to Image",
    "endpoint": "wan2.7-text-to-image",
    "inputs": {
      "prompt": {
        "examples": [
          "A single raindrop frozen mid-air containing an entire futuristic city inside it, skyscrapers distorted by water refraction, macro ultra detailed."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "9:21",
          "3:2",
          "2:3"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1"
      },
      "thinking_mode": {
        "type": "boolean",
        "title": "Режим мышления",
        "name": "thinking_mode",
        "description": "Включить режим «размышления» для улучшенной логики и качества изображения. Увеличивает время генерации.",
        "default": true
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.7-text-to-image-pro",
    "name": "Wan 2.7 Text to Image Pro",
    "endpoint": "wan2.7-text-to-image-pro",
    "inputs": {
      "prompt": {
        "examples": [
          "A busy street market floating high in the sky on giant platforms, vendors selling food while clouds pass through the stalls, dynamic lighting, cinematic wide shot."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "thinking_mode": {
        "type": "boolean",
        "title": "Режим мышления",
        "name": "thinking_mode",
        "description": "Включить режим «размышления» для улучшенной логики и качества изображения. Увеличивает время генерации.",
        "default": true
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "9:21",
          "3:2",
          "2:3"
        ]
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "midjourney-v7",
    "name": "Midjourney V7",
    "endpoint": "midjourney-v7",
    "inputs": {
      "prompt": {
        "examples": [
          "A forgotten royal bathhouse hidden deep inside sandstone cliffs during monsoon rain, warm candlelight reflecting across flooded marble floors, silk curtains moving gently with humid wind, subtle human presence, atmospheric depth, breathtaking architectural detail, timeless cinematic realism, premium editorial composition"
        ],
        "description": "Текстовое описание изображения для генерации.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [],
        "description": "Опциональный URL референсного изображения. Влияет на стиль и содержание генерации.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на референсное изображение",
        "name": "image_url"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "21:9"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "stylize": {
        "type": "int",
        "title": "Стилизовать",
        "name": "stylize",
        "description": "Управляет художественностью результата. Диапазон: 0–1000. Меньше = более буквально, больше = более стилизованно.",
        "default": 100,
        "minValue": 0,
        "maxValue": 1000,
        "step": 10
      },
      "chaos": {
        "type": "int",
        "title": "Хаос",
        "name": "chaos",
        "description": "Управляет вариативностью между 4 изображениями. Диапазон: 0–100. Больше = разнообразнее.",
        "default": 0,
        "minValue": 0,
        "maxValue": 100,
        "step": 1
      },
      "weird": {
        "type": "int",
        "title": "Странность",
        "name": "weird",
        "description": "Добавляет нестандартную эстетику. Диапазон: 0–3000.",
        "default": 0,
        "minValue": 0,
        "maxValue": 3000,
        "step": 50
      },
      "negative_prompt": {
        "type": "string",
        "title": "Негативный промпт",
        "name": "negative_prompt",
        "description": "Что исключить из изображения, например «текст, водяной знак».",
        "examples": [
          "text, watermark, blurry"
        ]
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Seed для воспроизводимости. Диапазон: 0–4294967295. Тот же seed + тот же промпт ≈ похожий результат.",
        "default": 0,
        "minValue": 0,
        "maxValue": 4294967295,
        "step": 1
      }
    },
    "provider": "midjourney",
    "provider_name": "Midjourney"
  },
  {
    "id": "midjourney-v8",
    "name": "Midjourney V8",
    "endpoint": "midjourney-v8",
    "inputs": {
      "prompt": {
        "examples": [
          "A celestial cartographer mapping moving constellations inside a circular observatory suspended above waterfalls, rotating brass instruments casting shifting shadows, star reflections flowing across polished stone floors, elegant cinematic framing, highly detailed textures, dreamlike realism, sophisticated visual storytelling."
        ],
        "description": "Текстовое описание изображения для генерации.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [],
        "description": "Опциональный URL референсного изображения. Влияет на стиль и содержание генерации.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на референсное изображение",
        "name": "image_url"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "21:9"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "stylize": {
        "type": "int",
        "title": "Стилизовать",
        "name": "stylize",
        "description": "Управляет художественностью результата. Диапазон: 0–1000. Меньше = более буквально, больше = более стилизованно.",
        "default": 100,
        "minValue": 0,
        "maxValue": 1000,
        "step": 10
      },
      "chaos": {
        "type": "int",
        "title": "Хаос",
        "name": "chaos",
        "description": "Управляет вариативностью между 4 изображениями. Диапазон: 0–100. Больше = разнообразнее.",
        "default": 0,
        "minValue": 0,
        "maxValue": 100,
        "step": 1
      },
      "weird": {
        "type": "int",
        "title": "Странность",
        "name": "weird",
        "description": "Добавляет нестандартную эстетику. Диапазон: 0–3000.",
        "default": 0,
        "minValue": 0,
        "maxValue": 3000,
        "step": 50
      },
      "negative_prompt": {
        "type": "string",
        "title": "Негативный промпт",
        "name": "negative_prompt",
        "description": "Что исключить из изображения, например «текст, водяной знак».",
        "examples": [
          "text, watermark, blurry"
        ]
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Seed для воспроизводимости. Диапазон: 0–4294967295. Тот же seed + тот же промпт ≈ похожий результат.",
        "default": 0,
        "minValue": 0,
        "maxValue": 4294967295,
        "step": 1
      }
    },
    "provider": "midjourney",
    "provider_name": "Midjourney"
  },
  {
    "id": "midjourney-niji",
    "name": "Midjourney Niji",
    "endpoint": "midjourney-niji",
    "inputs": {
      "prompt": {
        "examples": [
          "An enormous traveling greenhouse drifting across frozen northern seas on mechanical legs, glass walls glowing warmly during a snowstorm, botanists tending rare luminous plants inside, cinematic atmosphere, intricate environmental storytelling, layered reflections on ice, emotionally rich composition, ultra-detailed realism, luxury cinematic aesthetic."
        ],
        "description": "Текстовое описание изображения для генерации.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [],
        "description": "Опциональный URL референсного изображения. Влияет на стиль и содержание генерации.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на референсное изображение",
        "name": "image_url"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "21:9"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "stylize": {
        "type": "int",
        "title": "Стилизовать",
        "name": "stylize",
        "description": "Управляет художественностью результата. Диапазон: 0–1000. Меньше = более буквально, больше = более стилизованно.",
        "default": 100,
        "minValue": 0,
        "maxValue": 1000,
        "step": 10
      },
      "chaos": {
        "type": "int",
        "title": "Хаос",
        "name": "chaos",
        "description": "Управляет вариативностью между 4 изображениями. Диапазон: 0–100. Больше = разнообразнее.",
        "default": 0,
        "minValue": 0,
        "maxValue": 100,
        "step": 1
      },
      "weird": {
        "type": "int",
        "title": "Странность",
        "name": "weird",
        "description": "Добавляет нестандартную эстетику. Диапазон: 0–3000.",
        "default": 0,
        "minValue": 0,
        "maxValue": 3000,
        "step": 50
      },
      "negative_prompt": {
        "type": "string",
        "title": "Негативный промпт",
        "name": "negative_prompt",
        "description": "Что исключить из изображения, например «текст, водяной знак».",
        "examples": [
          "text, watermark, blurry"
        ]
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Seed для воспроизводимости. Диапазон: 0–4294967295. Тот же seed + тот же промпт ≈ похожий результат.",
        "default": 0,
        "minValue": 0,
        "maxValue": 4294967295,
        "step": 1
      }
    },
    "provider": "midjourney",
    "provider_name": "Midjourney"
  },
  {
    "id": "grok-imagine-text-to-image-quality",
    "name": "Grok Imagine (Quality)",
    "endpoint": "grok-imagine-text-to-image-quality",
    "inputs": {
      "prompt": {
        "examples": [
          "A futuristic samurai standing under glowing neon lights in a rainy cyberpunk alley, reflections on wet pavement, dramatic rim lighting, highly detailed armor, cinematic atmosphere, ultra-realistic style."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "9:16",
          "16:9",
          "2:3",
          "3:2",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения. Каждый раз вы получаете 6 изображений.",
        "default": "1:1"
      }
    },
    "provider": "grok",
    "provider_name": "xAI"
  },
  {
    "id": "flux-2-klein-4b-text-to-image-lora",
    "name": "Flux 2 Klein 4B LoRA",
    "endpoint": "flux-2-klein-4b-text-to-image-lora",
    "inputs": {
      "prompt": {
        "examples": [
          "A small round robot sitting at a café table outdoors, holding a tiny cup of coffee, soft morning light, cute illustration style."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "lora_list": {
        "examples": [
          {
            "path": "https://huggingface.co/example/lora/resolve/main/lora.safetensors",
            "scale": 1
          }
        ],
        "title": "Список LoRA",
        "name": "lora_list",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string",
              "format": "url",
              "title": "Путь",
              "name": "path",
              "description": "URL или путь к весам LoRA."
            },
            "scale": {
              "type": "number",
              "title": "Масштаб",
              "name": "scale",
              "description": "Множитель веса LoRA. Значение по умолчанию: 1",
              "minValue": 0,
              "maxValue": 4,
              "step": 0.01,
              "default": 1
            }
          }
        },
        "description": "До 3 адаптеров LoRA для применения при генерации.",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-klein-9b-text-to-image-lora",
    "name": "Flux 2 Klein 9B LoRA",
    "endpoint": "flux-2-klein-9b-text-to-image-lora",
    "inputs": {
      "prompt": {
        "examples": [
          "A regal fantasy queen on a crystal throne, ornate crown, ethereal lighting, cinematic detail."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "lora_list": {
        "examples": [
          {
            "path": "https://huggingface.co/example/lora/resolve/main/lora.safetensors",
            "scale": 1
          }
        ],
        "title": "Список LoRA",
        "name": "lora_list",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string",
              "format": "url",
              "title": "Путь",
              "name": "path",
              "description": "URL или путь к весам LoRA."
            },
            "scale": {
              "type": "number",
              "title": "Масштаб",
              "name": "scale",
              "description": "Множитель веса LoRA. Значение по умолчанию: 1",
              "minValue": 0,
              "maxValue": 4,
              "step": 0.01,
              "default": 1
            }
          }
        },
        "description": "До 3 адаптеров LoRA для применения при генерации.",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "kling-o3-image",
    "name": "Kling O3 Image",
    "endpoint": "kling-o3-image",
    "inputs": {
      "prompt": {
        "examples": [
          "Two rival street magicians performing impossible tricks inside a moving subway train during heavy rain, passengers frozen in shock as playing cards transform into living birds mid-air, reflections streaking across wet windows, chaotic cinematic energy, realistic motion blur, expressive human reactions, ultra detailed modern fashion, dramatic handheld camera feel, premium cinematic realism"
        ],
        "description": "Текстовый промпт, описывающий изображение для генерации. Максимум 2000 символов.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "21:9"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение итогового изображения.",
        "default": "1K"
      },
      "num_images": {
        "type": "int",
        "title": "Количество изображений",
        "name": "num_images",
        "description": "Сколько изображений генерировать за один запрос.",
        "default": 1,
        "minValue": 1,
        "maxValue": 9,
        "step": 1
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "nano-banana-2-lite",
    "name": "Nano Banana 2 Lite",
    "endpoint": "nano-banana-2-lite",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий желаемое содержание изображения.",
        "examples": [
          "A giant upside-down umbrella floating over an entire city, collecting rainwater into glowing rivers that flow upward into the sky, surreal cinematic realism, moody weather."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "2:3",
          "3:2",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "9:16",
          "16:9",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения.",
        "default": "1:1"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "bytedance-seedream-5.0-pro",
    "name": "Seedream 5.0 Pro",
    "endpoint": "seedream-5.0-pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение для генерации",
        "examples": [
          "A cinematic portrait of a lighthouse keeper at dusk, dramatic rim lighting, hyper-detailed textures, 4K resolution."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "2:3",
          "3:2"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения. 16:9 и 9:16 не поддерживают разрешение 2K.",
        "default": "1:1"
      },
      "resolution": {
        "enum": [
          "1K",
          "2K"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового изображения.",
        "default": "1K"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "qwen3-text-to-image",
    "name": "Qwen 3 Text to Image",
    "endpoint": "qwen3-text-to-image",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение для генерации."
      },
      "resolution": {
        "enum": ["1k", "2k"],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "default": "1k"
      },
      "aspect_ratio": {
        "enum": ["1:1", "3:2", "2:3", "4:3", "3:4", "16:9", "9:16", "21:9"],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "default": "16:9"
      },
      "output_format": {
        "enum": ["png", "jpeg"],
        "type": "string",
        "title": "Формат вывода",
        "name": "output_format",
        "default": "png"
      },
      "prompt_extend": {
        "type": "boolean",
        "title": "Умное расширение промпта",
        "name": "prompt_extend",
        "default": true
      },
      "negative_prompt": {
        "type": "string",
        "title": "Негативный промпт",
        "name": "negative_prompt"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "qwen3-pro-text-to-image",
    "name": "Qwen 3 Pro Text to Image",
    "endpoint": "qwen3-pro-text-to-image",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение для генерации."
      },
      "resolution": {
        "enum": ["1k", "2k"],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "default": "1k"
      },
      "aspect_ratio": {
        "enum": ["1:1", "3:2", "2:3", "4:3", "3:4", "16:9", "9:16", "21:9"],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "default": "16:9"
      },
      "output_format": {
        "enum": ["png", "jpeg"],
        "type": "string",
        "title": "Формат вывода",
        "name": "output_format",
        "default": "png"
      },
      "prompt_extend": {
        "type": "boolean",
        "title": "Умное расширение промпта",
        "name": "prompt_extend",
        "default": true
      },
      "negative_prompt": {
        "type": "string",
        "title": "Негативный промпт",
        "name": "negative_prompt"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  }
];

export const getModelById = (id) => t2iModels.find(m => m.id === id);

export const getSelectableAspectRatiosForModel = (modelId) => {
  const model = getModelById(modelId);
  return getAspectRatioOptions(model, T2I_DIMENSION_RATIOS);
};

export const getAspectRatiosForModel = (modelId) => {
  const model = getModelById(modelId);
  if (!model) return ['1:1'];

  const arInput = model.inputs?.aspect_ratio;
  if (arInput && arInput.enum) return arInput.enum;
  return ['1:1', '16:9', '9:16', '4:3', '3:2', '21:9'];
};

// ==========================================
// Text-to-Video Models
// ==========================================
export const t2vModels = [
  {
    "id": "seedance-lite-t2v",
    "name": "Seedance Lite",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 3,
        "maxValue": 12,
        "step": 1
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "480p"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-pro-t2v",
    "name": "Seedance Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 3,
        "maxValue": 12,
        "step": 1
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "480p"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-pro-t2v-fast",
    "name": "Seedance Pro Fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 2,
        "maxValue": 12,
        "step": 1
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "480p"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-v1.5-pro-t2v",
    "name": "Seedance v1.5 Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 4,
        "maxValue": 12,
        "step": 1
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-v1.5-pro-t2v-fast",
    "name": "Seedance v1.5 Pro Fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 4,
        "maxValue": 12,
        "step": 1
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-v2.0-t2v",
    "name": "Seedance 2.0",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          10,
          15
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Качество",
        "name": "quality",
        "type": "string",
        "description": "Качество сгенерированного видео.",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-v2.0-extend",
    "name": "Seedance 2.0 Extend",
    "requiresRequestId": true,
    "inputs": {
      "request_id": {
        "type": "string",
        "title": "ID запроса",
        "name": "request_id",
        "description": "ID запроса исходной генерации видео Seedance 2.0.",
        "placeholder": "abcdefg-123-456-789-a1b2c3d4e5f6"
      },
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Опциональный промпт для управления продлением. Ссылайтесь на изображения через @image2…@image9, видео через @video1…@video3 (последний кадр исходного видео всегда @image1)."
      },
      "images_list": {
        "type": "array",
        "title": "Референсные изображения",
        "name": "images_list",
        "description": "До 8 дополнительных URL референсных изображений. Каждое N-е изображение соответствует @image(N+1) в промпте.",
        "maxItems": 8
      },
      "video_files": {
        "type": "array",
        "title": "Референсные видео",
        "name": "video_files",
        "description": "До 3 URL референсных видеоклипов (MP4, максимум 15 сек каждый). Каждый N-й видеоклип соответствует @videoN в промпте.",
        "maxItems": 3
      },
      "duration": {
        "enum": [
          5,
          10,
          15
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность продления сгенерированного видео в секундах",
        "default": 5
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Качество",
        "name": "quality",
        "type": "string",
        "description": "Качество сгенерированного видео.",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "kling-v2.1-master-t2v",
    "name": "Kling v2.1 Master",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v2.5-turbo-pro-t2v",
    "name": "Kling v2.5 Turbo Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "9:16"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v2.6-pro-t2v",
    "name": "Kling v2.6 Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          10
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-o1-text-to-video",
    "name": "Kling O1 Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          10
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-pro-text-to-video",
    "name": "Kling v3.0 Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного видео",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-standard-text-to-video",
    "name": "Kling v3.0 Standard",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного видео",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "veo3-text-to-video",
    "name": "Veo 3",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий желаемое содержание видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3-fast-text-to-video",
    "name": "Veo 3 Fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий желаемое содержание видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3.1-text-to-video",
    "name": "Veo 3.1",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          8
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 8
      },
      "resolution": {
        "enum": [
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "1080p"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3.1-fast-text-to-video",
    "name": "Veo 3.1 Fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          8
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 8
      },
      "resolution": {
        "enum": [
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "1080p"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3.1-lite-text-to-video",
    "name": "Veo 3.1 Lite",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          8
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 8
      },
      "resolution": {
        "enum": [
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "1080p"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "runway-text-to-video",
    "name": "Runway Gen-3",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          8
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность в секундах. Если выбрано 8-секундное видео, разрешение 1080p недоступно.",
        "default": 5
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео. Если выбрано 1080p, 8-секундное видео сгенерировать нельзя.",
        "default": "720p"
      }
    },
    "provider": "runway",
    "provider_name": "RunwayML"
  },
  {
    "id": "wan2.1-text-to-video",
    "name": "Wan 2.1",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "480p"
      },
      "quality": {
        "enum": [
          "medium",
          "high"
        ],
        "title": "Качество",
        "name": "quality",
        "type": "string",
        "description": "Качество сгенерированного видео.",
        "default": "medium"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.2-text-to-video",
    "name": "Wan 2.2",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 5,
        "maxValue": 8,
        "step": 3
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "480p"
      },
      "quality": {
        "enum": [
          "medium",
          "high"
        ],
        "title": "Качество",
        "name": "quality",
        "type": "string",
        "description": "Качество сгенерированного видео.",
        "default": "medium"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.2-5b-fast-t2v",
    "name": "Wan 2.2 Fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "580p",
          "720p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "480p"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.5-text-to-video",
    "name": "Wan 2.5",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "480p"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.5-text-to-video-fast",
    "name": "Wan 2.5 Fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.6-text-to-video",
    "name": "Wan 2.6",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          10,
          15
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "hunyuan-text-to-video",
    "name": "Hunyuan",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      }
    },
    "provider": "hunyuan",
    "provider_name": "Hunyuan"
  },
  {
    "id": "hunyuan-fast-text-to-video",
    "name": "Hunyuan Fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      }
    },
    "provider": "hunyuan",
    "provider_name": "Hunyuan"
  },
  {
    "id": "pixverse-v4.5-t2v",
    "name": "Pixverse v4.5",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          8
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах. 8 сек не поддерживается для разрешения 1080p.",
        "default": 5
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "enum_dependencies": {
          "duration": {
            "8": [
              "360p",
              "540p",
              "720p"
            ]
          }
        },
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "pixverse-v5-t2v",
    "name": "Pixverse v5",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 8,
        "step": 3
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "pixverse-v5.5-t2v",
    "name": "Pixverse v5.5",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          8,
          10
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "enum_dependencies": {
          "duration": {
            "10": [
              "360p",
              "540p",
              "720p"
            ]
          }
        },
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "360p"
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "minimax-hailuo-02-standard-t2v",
    "name": "Hailuo 02 Standard",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "duration": {
        "enum": [
          6,
          10
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 6
      },
      "resolution": {
        "enum": [
          "768P"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "768P"
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-hailuo-02-pro-t2v",
    "name": "Hailuo 02 Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "duration": {
        "enum": [
          6
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 6
      },
      "resolution": {
        "enum": [
          "1080P"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "1080P"
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-hailuo-2.3-pro-t2v",
    "name": "Hailuo 2.3 Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "resolution": {
        "enum": [
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "1080p"
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-hailuo-2.3-standard-t2v",
    "name": "Hailuo 2.3 Standard",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "duration": {
        "enum": [
          6,
          10
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 6
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "openai-sora",
    "name": "Sora",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "480p"
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "openai-sora-2-text-to-video",
    "name": "Sora 2",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          4,
          8,
          12,
          16,
          20
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 8
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "openai-sora-2-pro-text-to-video",
    "name": "Sora 2 Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          4,
          8,
          12,
          16,
          20
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 8
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "vidu-v2.0-t2v",
    "name": "Vidu v2.0",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео"
      },
      "aspect_ratio": {
        "enum": [
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "9:16"
      },
      "duration": {
        "enum": [
          4
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 4
      },
      "resolution": {
        "enum": [
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "1080p"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "ovi-text-to-video",
    "name": "OVI",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "grok-imagine-text-to-video",
    "name": "Grok Imagine",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "9:16",
          "16:9",
          "2:3",
          "3:2",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "1:1"
      },
      "mode": {
        "enum": [
          "fun",
          "normal",
          "spicy"
        ],
        "title": "Режим",
        "name": "mode",
        "type": "string",
        "description": "Стиль генерации: normal = стандартный результат; fun = более креативный/выразительный; spicy = более смелый контент (только текст-в-видео).",
        "default": "normal"
      },
      "duration": {
        "enum": [
          6,
          10,
          15
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 6
      }
    },
    "provider": "grok",
    "provider_name": "xAI"
  },
  {
    "id": "ltx-2-pro-text-to-video",
    "name": "LTX 2 Pro",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "duration": {
        "enum": [
          6,
          8,
          10
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 6
      }
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "ltx-2-fast-text-to-video",
    "name": "LTX 2 Fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "duration": {
        "enum": [
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 6
      }
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "ltx-2-19b-text-to-video",
    "name": "LTX 2 19B",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного видео",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 20,
        "step": 1
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      }
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  }
,
  {
    "id": "veo3.1-extend-video",
    "name": "Veo3.1 Extend Video",
    "requiresRequestId": true,
    "endpoint": "veo3.1-extend-video",
    "inputs": {
      "request_id": {
        "examples": [
          ""
        ],
        "description": "ID запроса исходной генерации видео. Должен быть валидным ID, полученным из интерфейса генерации видео.",
        "format": "text",
        "type": "string",
        "title": "ID запроса",
        "name": "request_id",
        "placeholder": "abcdefg-123-456-789-a1b2c3d4e5f6"
      },
      "prompt": {
        "examples": [
          ""
        ],
        "description": "Текстовый промпт, описывающий видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3.1-4k-video",
    "name": "Veo3.1 4K Video",
    "requiresRequestId": true,
    "endpoint": "veo3.1-4k-video",
    "inputs": {
      "request_id": {
        "examples": [
          ""
        ],
        "description": "ID запроса исходной генерации видео. Должен быть валидным ID, полученным из интерфейса генерации видео.",
        "format": "text",
        "type": "string",
        "title": "ID запроса",
        "name": "request_id",
        "placeholder": "a8a09145bde3fb496ecd00ce4777a295"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "seedance-2-t2v",
    "name": "Seedance 2 T2V",
    "endpoint": "seedance-v2.0-t2v",
    "inputs": {
      "prompt": {
        "examples": [
          "A determined penguin straps itself into a homemade rocket sled on an icy mountain. The rocket ignites with a massive burst and launches the penguin across the frozen landscape at insane speed, blasting through snowdrifts and leaving a fiery trail behind."
        ],
        "type": "string",
        "title": "Промпт",
        "description": "Текстовый промпт, описывающий видео. Для вымышленного персонажа используйте @character:<id> прямо в тексте (request_id из завершённой генерации Seedance 2 Character). Поддерживается несколько персонажей. Пример: «@character:ab539e5f идёт по пляжу на закате»."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "type": "string",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          10,
          15
        ],
        "title": "Длительность",
        "type": "integer",
        "default": 5
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Качество",
        "type": "string",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-extend",
    "name": "Seedance 2 Extend",
    "requiresRequestId": true,
    "endpoint": "seedance-v2.0-extend",
    "inputs": {
      "request_id": {
        "examples": [
          "cab9517f-1818-4910-8d66-292701c78c2d"
        ],
        "description": "ID запроса исходной генерации видео Seedance 2.0.",
        "format": "text",
        "type": "string",
        "title": "ID запроса",
        "name": "request_id",
        "placeholder": "abcdefg-123-456-789-a1b2c3d4e5f6"
      },
      "prompt": {
        "examples": [
          ""
        ],
        "description": "Опциональный промпт для управления продлением. Ссылайтесь на дополнительные изображения через @image2…@image9, видео через @video1…@video3, аудио через @audio1…@audio3 — последний кадр исходного видео всегда @image1.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "До 8 дополнительных URL референсных изображений (JPEG/PNG/WebP). Каждое N-е изображение соответствует @image(N+1) в промпте (последний кадр исходного видео — @image1).",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 8
      },
      "video_files": {
        "examples": [],
        "description": "До 3 URL референсных видеоклипов (MP4, максимум 15 сек каждый). Каждый N-й видеоклип соответствует @videoN в промпте.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное видео",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [],
        "description": "До 3 URL референсных аудиоклипов (MP3/WAV, максимум 15 сек суммарно). Каждый N-й аудиофайл соответствует @audioN в промпте.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное аудио",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Соотношение сторон итогового видео (используется только при наличии референсных изображений/видео/аудио)."
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность продлевающего клипа в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Качество",
        "type": "string",
        "name": "quality",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "ltx-2.3-text-to-video",
    "name": "LTX 2.3",
    "endpoint": "ltx-2.3-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A high-speed train suddenly bursts through the wall of a quiet apartment building and races straight through the living rooms and hallways. Furniture flies everywhere as the train blasts through multiple floors before exiting the other side of the building."
        ],
        "description": "Текстовый промпт, описывающий видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 5,
        "maxValue": 20,
        "step": 1
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      },
      "seed": {
        "title": "Сид",
        "name": "seed",
        "type": "int",
        "description": "Seed. -1 для случайного значения.",
        "default": -1
      }
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "openai-sora-2-standard-text-to-video",
    "name": "Sora 2 Standard",
    "endpoint": "openai-sora-2-standard-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео, которое вы хотите сгенерировать",
        "examples": [
          "The lava knight slams the cup onto the table, sending molten sparks everywhere. The ground cracks open beneath him as lava erupts from his armor. The café explodes into chaos with chairs flipping, flames rising, and molten lava splashing across the floor."
        ]
      },
      "mode": {
        "enum": [
          "budget",
          "stable"
        ],
        "type": "string",
        "title": "Режим",
        "name": "mode",
        "description": "Режим генерации (budget — дешевле, stable — дороже)",
        "default": "stable"
      },
      "seconds": {
        "enum": [
          "10",
          "15"
        ],
        "enum_dependencies": {
          "mode": {
            "stable": [
              "10"
            ],
            "budget": [
              "10",
              "15"
            ]
          }
        },
        "type": "string",
        "title": "Секунды",
        "name": "seconds",
        "description": "Длительность видео в секундах",
        "default": "10"
      },
      "size": {
        "enum": [
          "720x1280",
          "1280x720"
        ],
        "type": "string",
        "title": "Размер",
        "name": "size",
        "description": "Размеры видео (Ширина x Высота)",
        "default": "720x1280"
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "seedance-2-new-t2v",
    "name": "Seedance 2 New T2V",
    "endpoint": "seedance-2.0-new-t2v",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео для генерации.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "type": "string",
        "title": "Качество",
        "name": "quality",
        "description": "high = стандартная модель (медленнее, лучше качество); basic = быстрая модель.",
        "default": "basic"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах (4–15).",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "grok-imagine-extend",
    "name": "Grok Imagine Extend",
    "requiresRequestId": true,
    "endpoint": "grok-imagine-extend",
    "inputs": {
      "request_id": {
        "examples": [
          ""
        ],
        "description": "ID запроса исходной генерации видео. Должен быть валидным ID, полученным из предыдущей генерации видео Grok Imagine.",
        "format": "text",
        "type": "string",
        "title": "ID запроса",
        "name": "request_id",
        "placeholder": "abcdefg-123-456-789-a1b2c3d4e5f6"
      },
      "prompt": {
        "examples": [
          "Continue the scene with the camera slowly panning right to reveal a vast ocean horizon, golden sunset light reflecting on the water."
        ],
        "description": "Текстовый промпт, описывающий, как продолжить видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "extend_times": {
        "enum": [
          6,
          10
        ],
        "title": "Длительность продления",
        "name": "extend_times",
        "type": "integer",
        "description": "Длительность в секундах, на которую нужно продлить видео.",
        "default": 6
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового видео.",
        "default": "480p"
      }
    },
    "provider": "grok",
    "provider_name": "xAI"
  },
  {
    "id": "pixverse-v6-t2v",
    "name": "Pixverse v6 T2V",
    "endpoint": "pixverse-v6-t2v",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео для генерации.",
        "examples": [
          "A young woman sprints through a dense futuristic city street when gravity suddenly shifts sideways. Cars slide across buildings, streetlights bend, and debris floats mid-air. She jumps between tilted surfaces while the camera dynamically rotates with the changing gravity, creating a disorienting chase sequence with intense motion blur and sparks flying."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16",
          "2:3",
          "3:2",
          "21:9"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение итогового видео.",
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 1,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio_switch": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio_switch",
        "description": "Включить AI-сгенерированное аудио для видео.",
        "default": false
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "wan2.7-text-to-video",
    "name": "Wan2.7",
    "endpoint": "wan2.7-text-to-video",
    "family": "wan2.7",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание",
        "examples": [
          "A cinematic video..."
        ]
      },
      "audio_url": {
        "type": "string",
        "title": "Ссылка на аудио",
        "name": "audio_url",
        "description": "Аудиофайл для управления генерацией",
        "field": "audio",
        "examples": []
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон сгенерированного видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Итоговое разрешение",
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность видео в секундах (2–15).",
        "default": 5,
        "minValue": 2,
        "maxValue": 15,
        "step": 1
      },
      "negative_prompt": {
        "examples": [],
        "type": "string",
        "title": "Негативный промпт",
        "name": "negative_prompt",
        "description": "Что не генерировать"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "seedance-2-t2v-480p",
    "name": "Seedance 2 T2V 480P",
    "endpoint": "seedance-2.0-t2v-480p",
    "inputs": {
      "prompt": {
        "examples": [
          "A determined penguin straps itself into a homemade rocket sled on an icy mountain. The rocket ignites with a massive burst and launches the penguin across the frozen landscape at insane speed, blasting through snowdrifts and leaving a fiery trail behind."
        ],
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео. Для вымышленного персонажа используйте @character:<id> прямо в тексте (request_id из завершённой генерации Seedance 2 Character). Поддерживается несколько персонажей. Пример: «@character:ab539e5f идёт по пляжу на закате»."
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Качество",
        "name": "quality",
        "type": "string",
        "description": "high=$0.15/сек, basic=$0.12/сек",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-text-to-video",
    "name": "Seedance 2",
    "endpoint": "seedance-2-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео для генерации. Используйте @character:<id>, чтобы привязать видео к персонажу Seedance 2 — автоматически переключает в режим «изображение в видео».",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-text-to-video-fast",
    "name": "Seedance 2 Text to Video Fast",
    "endpoint": "seedance-2-text-to-video-fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео для генерации. Используйте @character:<id>, чтобы привязать видео к персонажу Seedance 2 — автоматически переключает в режим «изображение в видео».",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-text-to-video",
    "name": "Seedance 2 VIP",
    "endpoint": "seedance-2-vip-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео для генерации. Используйте @character:<id>, чтобы привязать видео к персонажу Seedance 2 — автоматически переключает в режим «изображение в видео». Используйте @omni-character:<char_id> для обученного персонажа Kinovi.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-text-to-video-fast",
    "name": "Seedance 2 VIP Text to Video Fast",
    "endpoint": "seedance-2-vip-text-to-video-fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео для генерации. Используйте @character:<id>, чтобы привязать видео к персонажу Seedance 2 — автоматически переключает в режим «изображение в видео». Используйте @omni-character:<char_id> для обученного персонажа Kinovi.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "happy-horse-1-text-to-video-1080p",
    "name": "Happy Horse 1 Text to Video 1080P",
    "endpoint": "happy-horse-1-text-to-video-1080p",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание желаемого содержания видео.",
        "examples": [
          "A horse hosting a live cooking show confidently flips a pancake into the air, but the pancake catches fire and triggers a chain reaction of explosions throughout the kitchen. Pots launch into the air, flames burst from ovens, and the horse continues cooking like nothing is wrong."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1-text-to-video-720p",
    "name": "Happy Horse 1 Text to Video 720P",
    "endpoint": "happy-horse-1-text-to-video-720p",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание желаемого содержания видео.",
        "examples": [
          "Inside a crowded airplane cabin, a horse wearing a pilot uniform suddenly realizes the plane is flying upside down. Passengers and luggage slam into the ceiling while drink carts roll wildly through the aisle. The horse panics and runs toward the cockpit as turbulence shakes the entire plane violently."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "veo-4-text-to-video",
    "name": "Veo 4",
    "endpoint": "veo-4-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание желаемого содержания видео.",
        "examples": [
          "A cinematic aerial shot of a city at dusk, golden hour lighting, slow dolly forward."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 8,
        "minValue": 5,
        "maxValue": 30,
        "step": 1
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "seedance-2-vip-text-to-video-1080p",
    "name": "Seedance 2 VIP Text to Video 1080P",
    "endpoint": "sd-2-vip-text-to-video-1080p",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео для генерации.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-text-to-video-fast-1080p",
    "name": "Seedance 2 VIP Text to Video Fast 1080P",
    "endpoint": "sd-2-vip-text-to-video-fast-1080p",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео для генерации.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "kling-v3.0-4k-text-to-video",
    "name": "Kling v3.0 4K",
    "endpoint": "kling-v3.0-4k-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A close-up view of a mechanical watch lying open on a dark surface. As the video plays, the internal gears begin turning smoothly, tiny springs flex and release, and the balance wheel oscillates rhythmically. Light reflections glide across polished metal parts while the camera slowly pans sideways, revealing the layered precision of the mechanism. Studio lighting, macro detail, clean background, calm and satisfying motion."
        ],
        "description": "Текстовый промпт, описывающий видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного видео"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "default": true,
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио для видео"
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "vidu-q3-pro-text-to-video",
    "name": "Vidu Q3 Pro",
    "endpoint": "vidu-q3-pro-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "The whale crashes downward through the street, releasing an enormous wave of water that floods the city instantly. Cars flip and streetlights bend while the camera dives through the rushing floodwater beside the whale."
        ],
        "description": "Текстовый промпт, описывающий видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 1,
        "maxValue": 16,
        "step": 1
      },
      "audio": {
        "type": "boolean",
        "title": "Аудио",
        "name": "audio",
        "description": "Генерировать ли аудио для видео.",
        "default": false
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q3-turbo-text-to-video",
    "name": "Vidu Q3 Turbo",
    "endpoint": "vidu-q3-turbo-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A tiny astronaut standing on a kitchen countertop beside giant cooking equipment, dramatic cinematic scale contrast"
        ],
        "description": "Текстовый промпт, описывающий видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 1,
        "maxValue": 16,
        "step": 1
      },
      "audio": {
        "type": "boolean",
        "title": "Аудио",
        "name": "audio",
        "description": "Генерировать ли аудио для видео.",
        "default": false
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q2-pro-text-to-video",
    "name": "Vidu Q2 Pro",
    "endpoint": "vidu-q2-pro-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A lone astronaut walks slowly across a cracked Martian plain at dusk, her boots kicking up rust-coloured dust. The camera tracks beside her in a slow dolly as twin moons rise over distant mesas, soft volumetric light spilling across her visor."
        ],
        "description": "Текстовый промпт, описывающий видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 2,
        "maxValue": 8,
        "step": 1
      },
      "bgm": {
        "type": "boolean",
        "title": "Фоновая музыка",
        "name": "bgm",
        "description": "Добавить фоновую музыку к результату. При включении длительность должна быть ровно 4 секунды.",
        "default": false
      },
      "movement_amplitude": {
        "enum": [
          "auto",
          "small",
          "medium",
          "large"
        ],
        "title": "Амплитуда движения",
        "name": "movement_amplitude",
        "type": "string",
        "description": "Амплитуда движения объектов в кадре.",
        "default": "auto"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q2-turbo-text-to-video",
    "name": "Vidu Q2 Turbo",
    "endpoint": "vidu-q2-turbo-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A skateboarder carves down a sunlit Tokyo backstreet at golden hour. The camera follows in a smooth tracking shot as neon signs flicker on."
        ],
        "description": "Текстовый промпт, описывающий видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 2,
        "maxValue": 8,
        "step": 1
      },
      "bgm": {
        "type": "boolean",
        "title": "Фоновая музыка",
        "name": "bgm",
        "description": "Добавить фоновую музыку к результату. При включении длительность должна быть ровно 4 секунды.",
        "default": false
      },
      "movement_amplitude": {
        "enum": [
          "auto",
          "small",
          "medium",
          "large"
        ],
        "title": "Амплитуда движения",
        "name": "movement_amplitude",
        "type": "string",
        "description": "Амплитуда движения объектов в кадре.",
        "default": "auto"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "seedance-2-vip-extend",
    "name": "Seedance 2 VIP Extend",
    "requiresRequestId": true,
    "endpoint": "sd-2-vip-extend",
    "inputs": {
      "request_id": {
        "examples": [
          "cab9517f-1818-4910-8d66-292701c78c2d"
        ],
        "description": "ID запроса исходной генерации видео Seedance 2.0.",
        "format": "text",
        "type": "string",
        "title": "ID запроса",
        "name": "request_id",
        "placeholder": "abcdefg-123-456-789-a1b2c3d4e5f6"
      },
      "prompt": {
        "examples": [
          ""
        ],
        "description": "Опциональный промпт для управления продлением. Ссылайтесь на дополнительные изображения через @image2…@image9, видео через @video1…@video3, аудио через @audio1…@audio3 — последний кадр исходного видео всегда @image1.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "До 8 дополнительных URL референсных изображений (JPEG/PNG/WebP). Каждое N-е изображение соответствует @image(N+1) в промпте (последний кадр исходного видео — @image1).",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 8
      },
      "video_files": {
        "examples": [],
        "description": "До 3 URL референсных видеоклипов (MP4, максимум 15 сек каждый). Каждый N-й видеоклип соответствует @videoN в промпте.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное видео",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [],
        "description": "До 3 URL референсных аудиоклипов (MP3/WAV, максимум 15 сек суммарно). Каждый N-й аудиофайл соответствует @audioN в промпте.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное аудио",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Соотношение сторон итогового видео (используется только при наличии референсных изображений/видео/аудио)."
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность продлевающего клипа в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Качество",
        "type": "string",
        "name": "quality",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-extend-1080p",
    "name": "Seedance 2 VIP Extend 1080P",
    "requiresRequestId": true,
    "endpoint": "sd-2-vip-extend-1080p",
    "inputs": {
      "request_id": {
        "examples": [
          "cab9517f-1818-4910-8d66-292701c78c2d"
        ],
        "description": "ID запроса исходной генерации видео Seedance 2.0.",
        "format": "text",
        "type": "string",
        "title": "ID запроса",
        "name": "request_id",
        "placeholder": "abcdefg-123-456-789-a1b2c3d4e5f6"
      },
      "prompt": {
        "examples": [
          ""
        ],
        "description": "Опциональный промпт для управления продлением. Ссылайтесь на дополнительные изображения через @image2…@image9, видео через @video1…@video3, аудио через @audio1…@audio3 — последний кадр исходного видео всегда @image1.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "До 8 дополнительных URL референсных изображений (JPEG/PNG/WebP). Каждое N-е изображение соответствует @image(N+1) в промпте (последний кадр исходного видео — @image1).",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 8
      },
      "video_files": {
        "examples": [],
        "description": "До 3 URL референсных видеоклипов (MP4, максимум 15 сек каждый). Каждый N-й видеоклип соответствует @videoN в промпте.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное видео",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [],
        "description": "До 3 URL референсных аудиоклипов (MP3/WAV, максимум 15 сек суммарно). Каждый N-й аудиофайл соответствует @audioN в промпте.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное аудио",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Соотношение сторон итогового видео (используется только при наличии референсных изображений/видео/аудио)."
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность продлевающего клипа в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Качество",
        "type": "string",
        "name": "quality",
        "default": "high"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "kling-v3.0-omni-standard-text-to-video",
    "name": "Kling v3.0 Omni Standard",
    "endpoint": "kling-v3.0-omni-standard-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A cyberpunk samurai crouched on a rooftop edge during a thunderstorm, glowing katana in hand. The samurai instantly launches forward across rooftops at extreme speed. Rain sprays behind each landing while he slices through neon signs and wall-runs across skyscrapers. The camera whips aggressively around every movement."
        ],
        "description": "Текстовый промпт. Ссылайтесь на изображения через <<<image_N>>> (нумерация с 1). Если не указано, автоматически добавляется <<<image_1>>>.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "9:16",
          "16:9",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Соотношение сторон итогового видео."
      },
      "duration": {
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "При включении генерируется нативное аудио вместе с видео (увеличивает стоимость).",
        "default": false
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-omni-pro-text-to-video",
    "name": "Kling v3.0 Omni Pro",
    "endpoint": "kling-v3.0-omni-pro-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A destroyed city street with broken buildings, smoke, and rubble everywhere. A colossal hand descends from the clouds and begins rebuilding the city like toy blocks. Buildings rise from rubble, roads reconnect, and cars reassemble in reverse. The camera moves through the reconstruction as the hand reshapes the world."
        ],
        "description": "Текстовый промпт. Ссылайтесь на изображения через <<<image_N>>> (нумерация с 1). Если не указано, автоматически добавляется <<<image_1>>>.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "9:16",
          "16:9",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Соотношение сторон итогового видео."
      },
      "duration": {
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "При включении генерируется нативное аудио вместе с видео (увеличивает стоимость).",
        "default": false
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-omni-4k-text-to-video",
    "name": "Kling v3.0 Omni 4K",
    "endpoint": "kling-v3.0-omni-4k-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A destroyed city street with broken buildings, smoke, and rubble everywhere. A colossal hand descends from the clouds and begins rebuilding the city like toy blocks. Buildings rise from rubble, roads reconnect, and cars reassemble in reverse. The camera moves through the reconstruction as the hand reshapes the world."
        ],
        "description": "Текстовый промпт. Ссылайтесь на изображения через <<<image_N>>> (нумерация с 1). Если не указано, автоматически добавляется <<<image_1>>>.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "9:16",
          "16:9",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Соотношение сторон итогового видео."
      },
      "duration": {
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "gemini-omni-text-to-video",
    "name": "Gemini Omni",
    "endpoint": "gemini-omni-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание желаемого содержания видео. Gemini Omni поддерживает богатые мультимодальные промпты, включая композицию сцены, работу камеры, диалоги и фоновые звуковые сигналы.",
        "examples": [
          "A clock begins ticking louder and rapidly grows larger, breaking through the table and floor. Its gears spin violently as the hands rotate uncontrollably. Walls crack apart as the giant clock expands until it fills the entire apartment."
        ]
      },
      "duration": {
        "enum": [
          4,
          6,
          8,
          10
        ],
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 8
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение итогового видео. 720p и 1080p стоят одинаково; 4K дороже.",
        "default": "1080p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "audio_ids": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "ID аудиофайлов",
        "name": "audio_ids",
        "description": "До 3 ID голосовых профилей, возвращённых эндпоинтом Gemini Omni Audio.",
        "maxItems": 3
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Seed (0–2147483647). Зафиксируйте для воспроизводимости; результаты всё же могут отличаться из-за случайности модели.",
        "minValue": 0,
        "maxValue": 2147483647,
        "default": 0
      },
      "character_ids": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "ID персонажей",
        "name": "character_ids",
        "description": "До 3 ID персонажей из Gemini Omni Character для показа в видео.",
        "maxItems": 3
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "kling-v3-turbo-standard-text-to-video",
    "name": "Kling v3 Turbo Standard",
    "endpoint": "kling-v3-turbo-standard-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео для генерации.",
        "examples": [
          "The biker accelerates instantly as the city folds into impossible geometric shapes around him. Roads twist vertically and buildings rotate through the air. Sparks fly during aggressive drifts while the camera tracks tightly behind."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9",
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон сгенерированного видео."
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах (3–15).",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3-turbo-pro-text-to-video",
    "name": "Kling v3 Turbo Pro",
    "endpoint": "kling-v3-turbo-pro-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео для генерации.",
        "examples": [
          "A player slams the ball through the hoop and the court instantly erupts into lava. Shockwaves crack the arena floor while flaming debris blasts upward into the crowd. The camera swings dramatically around the impact."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9",
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон сгенерированного видео."
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах (3–15).",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "seedance-2.1-text-to-video",
    "name": "Seedance 2.1",
    "endpoint": "seedance-2.1-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A colossal floating city drifts above luminous clouds at dusk, golden energy streams flowing between its towers, cinematic wide shot with subtle camera push, epic atmospheric lighting."
        ],
        "description": "Текстовый промпт, описывающий сцену и движение видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового видео.",
        "default": "720p"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 12,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио для видео.",
        "default": true
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Камера зафиксирована",
        "name": "camera_fixed",
        "description": "Зафиксировать ли положение камеры.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-text-to-video",
    "name": "Seedance 2.5",
    "endpoint": "seedance-2.5-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A photorealistic aerial view of a vast ancient temple complex at golden hour, rivers of molten light streaming between colossal stone pillars, slow majestic crane shot ascending to reveal surrounding jungle, 4K cinematic depth and color grading."
        ],
        "description": "Текстовый промпт, описывающий сцену и движение видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p",
          "4K"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового видео.",
        "default": "1080p"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 16,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио для видео.",
        "default": true
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Камера зафиксирована",
        "name": "camera_fixed",
        "description": "Зафиксировать ли положение камеры.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-text-to-video-480p",
    "name": "Seedance 2.5 480p",
    "endpoint": "seedance-2.5-text-to-video-480p",
    "family": "seedance-2.5",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "examples": [
          "A cinematic tracking shot through a city park after rain, soft cloudy light, wet pavement reflections, smooth camera movement."
        ],
        "description": "Текстовый промпт, описывающий сцену и движение видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Seed для воспроизводимой генерации. Используйте -1 для случайного значения.",
        "examples": [
          42
        ]
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-mini-text-to-video",
    "name": "Seedance 2 Mini",
    "endpoint": "seedance-2-mini-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A golden retriever running through a sunlit meadow, slow motion, vibrant summer colors, wide angle shot."
        ],
        "description": "Текстовый промпт, описывающий сцену и движение видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового видео.",
        "default": "720p"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли AI-аудио, синхронизированное с видео.",
        "default": true
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "happy-horse-1.1-text-to-video-1080p",
    "name": "Happy Horse 1.1 Text to Video 1080P",
    "endpoint": "happy-horse-1.1-text-to-video-1080p",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание желаемого содержания видео.",
        "examples": [
          "A horse hosting a live cooking show confidently flips a pancake into the air, but the pancake catches fire and triggers a chain reaction of explosions throughout the kitchen."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1.1-text-to-video-720p",
    "name": "Happy Horse 1.1 Text to Video 720P",
    "endpoint": "happy-horse-1.1-text-to-video-720p",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание желаемого содержания видео.",
        "examples": [
          "A horse hosting a live cooking show confidently flips a pancake into the air, but the pancake catches fire and triggers a chain reaction of explosions throughout the kitchen."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "seedance-2-mini-omni-reference",
    "name": "Seedance 2 Mini Omni Reference",
    "endpoint": "seedance-2-mini-omni-reference",
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The character walks forward confidently in a sunny meadow, camera follows from behind."
        ],
        "description": "Текстовый промпт. Ссылайтесь на изображения через @image1..@image9, видео через @video1..@video3, аудио через @audio1..@audio3.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-i2v.jpg"
        ],
        "description": "До 9 референсных изображений (JPEG/PNG/WebP). Ссылка в промпте через @image1..@image9.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "video_files": {
        "examples": [
          ""
        ],
        "description": "До 3 референсных видеоклипов (MP4, максимум 15 сек суммарно). Ссылка в промпте через @video1..@video3.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные видео",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [
          ""
        ],
        "description": "До 3 референсных аудиофайлов (MP3/WAV, максимум 15 сек суммарно). Ссылка в промпте через @audio1..@audio3.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсное аудио",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового видео.",
        "default": "720p"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли AI-аудио, синхронизированное с видео.",
        "default": true
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-text-to-video-4k",
    "name": "Seedance 2 VIP Text to Video 4K",
    "endpoint": "sd-2-vip-text-to-video-4k",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео для генерации.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-text-to-video",
    "name": "Seedance 2.5 Spicy",
    "endpoint": "seedance-2.5-spicy-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A high-contrast, adrenaline-fueled chase through a rain-soaked neon megacity at night, sparks and shattering glass in slow motion, aggressive handheld camera energy, exaggerated color grading, 4K cinematic quality."
        ],
        "description": "Текстовый промпт, описывающий сцену и движение видео. Режим Spicy даёт более смелые, контрастные и выразительные результаты.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p",
          "4K"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового видео.",
        "default": "1080p"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 16,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио для видео.",
        "default": true
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Камера зафиксирована",
        "name": "camera_fixed",
        "description": "Зафиксировать ли положение камеры.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-spicy-text-to-video",
    "name": "Seedance 2 Spicy",
    "endpoint": "seedance-2-spicy-text-to-video",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео для генерации. Используйте @character:<id>, чтобы привязать видео к персонажу Seedance 2 — автоматически переключает в режим «изображение в видео». Используйте @omni-character:<char_id> для обученного персонажа Kinovi.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-spicy-text-to-video-fast",
    "name": "Seedance 2 Spicy Text to Video Fast",
    "endpoint": "seedance-2-spicy-text-to-video-fast",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео для генерации. Используйте @character:<id>, чтобы привязать видео к персонажу Seedance 2 — автоматически переключает в режим «изображение в видео». Используйте @omni-character:<char_id> для обученного персонажа Kinovi.",
        "examples": [
          "A cinematic shot of a futuristic city at night with neon lights reflecting on wet streets."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-mini-spicy-text-to-video",
    "name": "Seedance 2 Mini Spicy",
    "endpoint": "seedance-2-mini-spicy-text-to-video",
    "inputs": {
      "prompt": {
        "examples": [
          "A golden retriever running through a sunlit meadow, slow motion, vibrant summer colors, wide angle shot."
        ],
        "description": "Текстовый промпт, описывающий сцену и движение видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового видео.",
        "default": "720p"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли AI-аудио, синхронизированное с видео.",
        "default": true
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "minimax-h3-text-to-video",
    "name": "MiniMax H3 Text to Video",
    "endpoint": "minimax-h3-text-to-video",
    "family": "minimax-h3",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео для генерации."
      },
      "aspect_ratio": {
        "enum": ["21:9", "16:9", "4:3", "1:1", "3:4", "9:16"],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "default": "16:9"
      },
      "resolution": {
        "enum": ["2k"],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "default": "2k"
      },
      "duration": {
        "enum": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        "type": "integer",
        "title": "Длительность",
        "name": "duration",
        "default": 5
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-h3-open-text-to-video",
    "name": "MiniMax H3 Open Text to Video",
    "endpoint": "minimax-h3-open-text-to-video",
    "family": "minimax-h3",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео для генерации."
      },
      "aspect_ratio": {
        "enum": ["16:9", "9:16", "1:1", "4:3", "3:4", "21:9", "9:21"],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "default": "16:9"
      },
      "resolution": {
        "enum": ["480p", "768p"],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "default": "480p"
      },
      "duration": {
        "enum": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        "type": "integer",
        "title": "Длительность",
        "name": "duration",
        "default": 5
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  }
];

export const getVideoModelById = (id) => t2vModels.find(m => m.id === id);

const getDependentEnumValues = (input, selections = {}) => {
  const values = input?.enum || [];
  const dependencies = input?.enum_dependencies;
  if (!dependencies) return values;

  return Object.entries(dependencies).reduce((available, [field, rules]) => {
    const selectedValue = selections[field];
    const allowedValues = rules?.[String(selectedValue)];
    if (!allowedValues) return available;
    const allowed = new Set(allowedValues);
    return available.filter(value => allowed.has(value));
  }, values);
};

export const getAspectRatiosForVideoModel = (modelId) => {
  const model = getVideoModelById(modelId);
  if (!model) return ['16:9'];
  const arInput = model.inputs?.aspect_ratio;
  if (arInput && arInput.enum) return arInput.enum;
  return ['16:9', '9:16', '1:1'];
};

const getInputOptions = (input) => {
  if (!input) return [];
  if (input.enum) return input.enum;
  if (input.minValue !== undefined && input.maxValue !== undefined) {
    const step = input.step ?? 1;
    const precision = Math.max(
      String(input.minValue).split('.')[1]?.length || 0,
      String(step).split('.')[1]?.length || 0,
    );
    const count = Math.floor((input.maxValue - input.minValue) / step + 1e-9);
    return Array.from(
      { length: count + 1 },
      (_, index) => Number((input.minValue + index * step).toFixed(precision)),
    );
  }
  return input.default !== undefined ? [input.default] : [];
};

export const getDurationsForModel = (modelId) => {
  const model = getVideoModelById(modelId);
  if (!model) return [5];
  return getInputOptions(model.inputs?.duration);
};

export const getResolutionsForVideoModel = (modelId, selections = {}) => {
  const model = getVideoModelById(modelId);
  if (!model) return [];
  const resInput = model.inputs?.resolution;
  if (resInput?.enum) return getDependentEnumValues(resInput, selections);
  return [];
};
// Auto-generated from schema_data.json — Image to Image models
export const i2iModels = [
  {
    "id": "ai-image-upscaler",
    "name": "AI Image Upscaler",
    "endpoint": "ai-image-upscale",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {},
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "ai-image-face-swap",
    "name": "AI Image Face Swap",
    "endpoint": "ai-image-face-swap",
    "family": "tools",
    "imageField": "image_url",
    "swapField": "swap_url",
    "hasPrompt": false,
    "inputs": {
      "target_index": {
        "type": "int",
        "title": "Целевой индекс",
        "name": "target_index",
        "description": "0 = самое крупное лицо. Чтобы выбрать другое целевое лицо — переключите индекс на 1.",
        "default": 0,
        "minValue": 0,
        "maxValue": 10,
        "step": 1
      }
    },
    "provider": "muapi",
    "provider_name": "MuapiApp"
  },
  {
    "id": "ai-dress-change",
    "name": "AI Dress Change",
    "endpoint": "ai-dress-change",
    "family": "tools",
    "imageField": "model_image_url",
    "hasPrompt": false,
    "inputs": {},
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "ai-background-remover",
    "name": "AI Background Remover",
    "endpoint": "ai-background-remover",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {},
    "cost": 0.01,
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "ai-image-extension",
    "name": "AI Image Extension",
    "endpoint": "ai-image-extension",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {},
    "cost": 0.03,
    "provider": "muapi",
    "provider_name": "Fal"
  },

  {
    "id": "ai-product-shot",
    "name": "AI Product Shot",
    "endpoint": "ai-product-shot",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "scene_description": {
        "type": "string",
        "title": "Описание сцены",
        "name": "scene_description",
        "description": "Текстовое описание новой сцены или фона для предоставленного фото товара. Bria в настоящее время поддерживает промпты только на английском языке, без спецсимволов.",
        "examples": [
          "on a rock, next to the ocean, dark theme"
        ]
      }
    },
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "ai-skin-enhancer",
    "name": "AI Skin Enhancer",
    "endpoint": "ai-skin-enhancer",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {},
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "ai-color-photo",
    "name": "AI Color Photo",
    "endpoint": "ai-color-photo",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {},
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "flux-kontext-dev-i2i",
    "name": "Flux Kontext Dev I2I",
    "endpoint": "flux-kontext-dev-i2i",
    "family": "kontext",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение. Длина промпта должна быть от 2 до 3000 символов.",
        "examples": [
          "A cozy outdoor coffee shop on a small street, people sitting at tables enjoying drinks, a barista serving coffee, leaves gently falling from nearby trees, and soft warm lighting adding a friendly vibe."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "21:9",
          "9:21"
        ],
        "default": "1:1"
      },
      "num_images": {
        "type": "int",
        "title": "Количество изображений",
        "name": "num_images",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "ai-product-photography",
    "name": "AI Product Photography",
    "endpoint": "ai-product-photography",
    "family": "tools",
    "imageField": "person_image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение.",
        "examples": [
          "Promoting brand in professional look"
        ]
      }
    },
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "ai-ghibli-style",
    "name": "AI Ghibli Style",
    "endpoint": "ai-ghibli-style",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {},
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "ai-object-eraser",
    "name": "AI Object Eraser",
    "endpoint": "ai-object-eraser",
    "family": "tools",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {},
    "provider": "muapi",
    "provider_name": "Fal"
  },
  {
    "id": "flux-kontext-pro-i2i",
    "name": "Flux Kontext Pro I2I",
    "endpoint": "flux-kontext-pro-i2i",
    "family": "kontext",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 2,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение.",
        "examples": [
          "Transform into a digital painting, soft fur texture, dreamy pastel colors"
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "16:21"
        ],
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-kontext-max-i2i",
    "name": "Flux Kontext Max I2I",
    "endpoint": "flux-kontext-max-i2i",
    "family": "kontext",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 2,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение.",
        "examples": [
          "Re-render in a luxury studio setting, reflective surface, high contrast shadows, ad campaign look."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "16:21"
        ],
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "gpt4o-image-to-image",
    "name": "GPT-4o Image To Image",
    "endpoint": "gpt4o-image-to-image",
    "family": "gpt",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 5,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение.",
        "examples": [
          "Convert this sunny park photo into a snowy winter scene, with snow-covered trees, cloudy skies, and people in winter coats."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "1:1",
          "2:3",
          "3:2"
        ],
        "default": "1:1"
      },
      "num_images": {
        "type": "int",
        "title": "Количество изображений",
        "name": "num_images",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "enum": [
          1,
          2,
          4
        ],
        "default": 1
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "gpt4o-edit",
    "name": "GPT-4o Mask Edit",
    "endpoint": "gpt4o-edit",
    "family": "gpt",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "examples": [
          "Replace the barista with a humanoid robot in a sleek metallic design."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "1:1",
          "2:3",
          "3:2"
        ],
        "default": "1:1"
      },
      "num_images": {
        "type": "int",
        "title": "Количество изображений",
        "name": "num_images",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "enum": [
          1,
          2,
          4
        ],
        "default": 1
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "midjourney-v7-image-to-image",
    "name": "Midjourney v7 Image To Image",
    "endpoint": "midjourney-v7-image-to-image",
    "family": "midjourney",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации изображения",
        "examples": [
          "Make the scene sunrise instead of stormy, with soft lighting and a peaceful mood"
        ]
      },
      "speed": {
        "type": "string",
        "title": "Скорость",
        "name": "speed",
        "description": "Скорость, соответствующая разным режимам скорости Midjourney",
        "enum": [
          "relaxed",
          "fast",
          "turbo"
        ],
        "default": "relaxed"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "1:2",
          "2:1",
          "2:3",
          "3:2",
          "5:6",
          "6:5"
        ],
        "default": "1:1"
      },
      "variety": {
        "type": "int",
        "title": "Разнообразие",
        "name": "variety",
        "description": "Управляет разнообразием сгенерированных изображений. Шаг изменения — 5. Более высокие значения дают более разнообразные результаты. Более низкие — более однородные.",
        "default": 5,
        "minValue": 0,
        "maxValue": 100,
        "step": 5
      },
      "stylization": {
        "type": "int",
        "title": "Стилизация",
        "name": "stylization",
        "description": "Управляет интенсивностью художественного стиля. Более высокие значения дают более стилизованный результат. Более низкие — более реалистичный.",
        "default": 1,
        "minValue": 0,
        "maxValue": 1000,
        "step": 1
      },
      "weirdness": {
        "type": "int",
        "title": "Странность",
        "name": "weirdness",
        "description": "Управляет креативностью и уникальностью. Более высокие значения дают более необычные результаты. Более низкие — более традиционные.",
        "default": 1,
        "minValue": 0,
        "maxValue": 3000,
        "step": 1
      }
    },
    "provider": "midjourney",
    "provider_name": "Midjourney"
  },
  {
    "id": "bytedance-seededit-v3",
    "name": "Bytedance Seededit v3",
    "endpoint": "bytedance-seededit-image",
    "family": "seedream",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "examples": [
          "Change the outfit to a red evening gown with elegant styling, matching the reference image's pose and lighting."
        ]
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "midjourney-v7-style-reference",
    "name": "Midjourney v7 Style Reference",
    "endpoint": "midjourney-v7-style-reference",
    "family": "midjourney",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации изображения",
        "examples": [
          "A futuristic city built on waterfalls, glowing towers in the mist, colorful sky at dusk, cinematic lighting, hyper-detailed architecture."
        ]
      },
      "speed": {
        "type": "string",
        "title": "Скорость",
        "name": "speed",
        "description": "Скорость, соответствующая разным режимам скорости Midjourney",
        "enum": [
          "relaxed",
          "fast",
          "turbo"
        ],
        "default": "relaxed"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "1:2",
          "2:1",
          "2:3",
          "3:2",
          "5:6",
          "6:5"
        ],
        "default": "1:1"
      },
      "variety": {
        "type": "int",
        "title": "Разнообразие",
        "name": "variety",
        "description": "Управляет разнообразием сгенерированных изображений. Шаг изменения — 5. Более высокие значения дают более разнообразные результаты. Более низкие — более однородные.",
        "default": 5,
        "minValue": 0,
        "maxValue": 100,
        "step": 5
      },
      "stylization": {
        "type": "int",
        "title": "Стилизация",
        "name": "stylization",
        "description": "Управляет интенсивностью художественного стиля. Более высокие значения дают более стилизованный результат. Более низкие — более реалистичный.",
        "default": 1,
        "minValue": 0,
        "maxValue": 1000,
        "step": 1
      },
      "weirdness": {
        "type": "int",
        "title": "Странность",
        "name": "weirdness",
        "description": "Управляет креативностью и уникальностью. Более высокие значения дают более необычные результаты. Более низкие — более традиционные.",
        "default": 1,
        "minValue": 0,
        "maxValue": 3000,
        "step": 1
      }
    },
    "provider": "midjourney",
    "provider_name": "Midjourney"
  },
  {
    "id": "midjourney-v7-omni-reference",
    "name": "Midjourney v7 Omni Reference",
    "endpoint": "midjourney-v7-omni-reference",
    "family": "midjourney",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации изображения",
        "examples": [
          "A futuristic samurai girl exploring an ancient overgrown temple in a neon-lit jungle, glowing plants surrounding her, mist in the air, cinematic composition."
        ]
      },
      "speed": {
        "type": "string",
        "title": "Скорость",
        "name": "speed",
        "description": "Скорость, соответствующая разным режимам скорости Midjourney",
        "enum": [
          "relaxed",
          "fast",
          "turbo"
        ],
        "default": "relaxed"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "1:2",
          "2:1",
          "2:3",
          "3:2",
          "5:6",
          "6:5"
        ],
        "default": "1:1"
      },
      "weight": {
        "type": "int",
        "title": "Вес",
        "name": "weight",
        "description": "Вес позволяет контролировать, сколько деталей из вашего референсного изображения появится в новом изображении.",
        "default": 100,
        "minValue": 1,
        "maxValue": 1000,
        "step": 1
      },
      "variety": {
        "type": "int",
        "title": "Разнообразие",
        "name": "variety",
        "description": "Управляет разнообразием сгенерированных изображений. Шаг изменения — 5. Более высокие значения дают более разнообразные результаты. Более низкие — более однородные.",
        "default": 5,
        "minValue": 0,
        "maxValue": 100,
        "step": 5
      },
      "stylization": {
        "type": "int",
        "title": "Стилизация",
        "name": "stylization",
        "description": "Управляет интенсивностью художественного стиля. Более высокие значения дают более стилизованный результат. Более низкие — более реалистичный.",
        "default": 1,
        "minValue": 0,
        "maxValue": 1000,
        "step": 1
      },
      "weirdness": {
        "type": "int",
        "title": "Странность",
        "name": "weirdness",
        "description": "Управляет креативностью и уникальностью. Более высокие значения дают более необычные результаты. Более низкие — более традиционные.",
        "default": 1,
        "minValue": 0,
        "maxValue": 3000,
        "step": 1
      }
    },
    "provider": "midjourney",
    "provider_name": "Midjourney"
  },
  {
    "id": "minimax-image-01-subject-reference",
    "name": "Minimax Image 01 Subject Reference",
    "endpoint": "minimax-01-subject-reference",
    "family": "minimax",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение (максимум 1500 символов).",
        "examples": [
          "Generate the same person dressed in Renaissance-style attire, standing in a candlelit castle hall with ornate tapestries and warm low lighting."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "21:9"
        ],
        "default": "1:1"
      },
      "num_images": {
        "type": "int",
        "title": "Количество изображений",
        "name": "num_images",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "ideogram-character",
    "name": "Ideogram Character",
    "endpoint": "ideogram-character",
    "family": "ideogram",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение (максимум 1500 символов).",
        "examples": [
          "Create the same character as a medieval knight standing in a candlelit castle corridor, wearing chainmail and holding a torch."
        ]
      },
      "render_speed": {
        "type": "string",
        "title": "Скорость рендера",
        "name": "render_speed",
        "description": "Используемая скорость рендеринга.",
        "enum": [
          "Turbo",
          "Balanced",
          "Качество"
        ],
        "default": "Balanced"
      },
      "style": {
        "type": "string",
        "title": "Стиль",
        "name": "style",
        "description": "Тип стиля для генерации.",
        "enum": [
          "Auto",
          "Realistic",
          "Fiction"
        ],
        "default": "Auto"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "1:1"
      },
      "num_images": {
        "type": "int",
        "title": "Количество изображений",
        "name": "num_images",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "ideogram",
    "provider_name": "Ideogram"
  },
  {
    "id": "flux-pulid",
    "name": "Flux Pulid",
    "endpoint": "flux-pulid",
    "family": "flux",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение (максимум 1500 символов).",
        "examples": [
          "Recreate the same person in a Renaissance-style painting with ornate collar and soft candlelight ambiance."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "qwen-image-edit",
    "name": "Qwen Image Edit",
    "endpoint": "qwen-image-edit",
    "family": "qwen",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "examples": [
          "Replace the field with a snowy mountain landscape."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21",
          "3:2",
          "2:3"
        ],
        "default": "1:1"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "image-effects",
    "name": "Image Effects",
    "endpoint": "image-effects",
    "family": "effects",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "name": {
        "type": "string",
        "title": "Название эффекта",
        "name": "name",
        "description": "Тип эффекта для применения к изображению.",
        "enum": [
          "Acryclic Ornaments",
          "Advanced Photography",
          "American Comic Style",
          "Angel Figurine",
          "Blurry Selfie",
          "Cyberpunk",
          "Exotic Charm",
          "Felt 3D Polaroid",
          "Felt Keychain",
          "Furry Dream Doll",
          "Futuristic American Comics",
          "Glass Ball",
          "In The Stadium",
          "Lofi Pixel Character",
          "Lying On Fluffy Belly",
          "Landscape Mini World",
          "My World",
          "Plastic Bubble Figure"
        ],
        "default": "Angel Figurine"
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "nano-banana-edit",
    "name": "Nano Banana Edit",
    "endpoint": "nano-banana-edit",
    "family": "nano",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "examples": [
          "Change her facial expression to a confident smile, and adjust the lighting to dramatic blue and purple hues. Keep her hairstyle and outfit consistent across multiple edits."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "Auto",
          "1:1",
          "3:4",
          "4:3",
          "9:16",
          "16:9",
          "3:2",
          "2:3",
          "5:4",
          "4:5",
          "21:9"
        ],
        "default": "Auto"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "ideogram-v3-reframe",
    "name": "Ideogram v3 Reframe",
    "endpoint": "ideogram-v3-reframe",
    "family": "ideogram",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "1:1"
      },
      "render_speed": {
        "type": "string",
        "title": "Скорость рендера",
        "name": "render_speed",
        "description": "Используемая скорость рендеринга.",
        "enum": [
          "Turbo",
          "Balanced",
          "Качество"
        ],
        "default": "Balanced"
      },
      "style": {
        "type": "string",
        "title": "Стиль",
        "name": "style",
        "description": "Тип стиля для генерации.",
        "enum": [
          "Auto",
          "General",
          "Realistic",
          "Design"
        ],
        "default": "Auto"
      },
      "num_images": {
        "type": "int",
        "title": "Количество изображений",
        "name": "num_images",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "ideogram",
    "provider_name": "Ideogram"
  },
  {
    "id": "bytedance-seedream-edit-v4",
    "name": "Bytedance Seedream Edit v4",
    "endpoint": "bytedance-seedream-edit-v4",
    "family": "seedream",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение.",
        "examples": [
          "A tranquil shoreline at dawn where waves turn into glowing ribbons of light, painting the sky with dreamlike hues of violet and gold. A figure walks along the edge, leaving footsteps that bloom into luminous flowers, symbolizing imagination flowing seamlessly into reality."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение итогового изображения.",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "4K"
      },
      "num_images": {
        "type": "int",
        "title": "Количество изображений",
        "name": "num_images",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "nano-banana-effects",
    "name": "Nano Banana Effects",
    "endpoint": "nano-banana-effects",
    "family": "nano",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "name": {
        "type": "string",
        "title": "Название эффекта",
        "name": "name",
        "description": "Тип эффекта для применения к изображению.",
        "enum": [
          "3D Figurine",
          "16bit Game Character",
          "1920s Decade",
          "1950s Decade",
          "1970s Decade",
          "1980s Decade",
          "Action Figure",
          "American Gothic Art",
          "Egypts Landmark",
          "Eiffel Tower Landmark",
          "Famous Art",
          "Great Wall of China Landmark",
          "Mona Lisa Art",
          "Persistent Memory Art",
          "Statue of Liberty Landmark",
          "Taj Mahal Landmark",
          "Vincent Van Gogh Art"
        ],
        "default": "3D Figurine"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "Auto",
          "1:1",
          "3:4",
          "4:3",
          "9:16",
          "16:9",
          "3:2",
          "2:3",
          "5:4",
          "4:5",
          "21:9"
        ],
        "default": "Auto"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "flux-kontext-effects",
    "name": "Flux Kontext Effects",
    "endpoint": "flux-kontext-effects",
    "family": "kontext",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение.",
        "examples": [
          "20 years older"
        ]
      },
      "name": {
        "type": "string",
        "title": "Название эффекта",
        "name": "name",
        "description": "Тип эффекта для применения к изображению.",
        "enum": [
          "Age Progression",
          "Background Change",
          "Cartoonify",
          "Color Correction",
          "Expression Change",
          "Face Enhancement",
          "Hair Change",
          "Object Removal",
          "Professional Photo",
          "Scene Composition",
          "Style Transfer",
          "Time of Day",
          "Weather Effect"
        ],
        "default": "Age Progression"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-redux",
    "name": "Flux Redux",
    "endpoint": "flux-redux",
    "family": "flux",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение (максимум 1500 символов).",
        "examples": [
          "Reimagine the forest cabin as a mystical fantasy retreat at twilight, glowing lanterns hanging from the trees, magical fireflies in the air, cinematic atmosphere with enchanted vibes."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "21:9",
          "9:21"
        ],
        "default": "1:1"
      },
      "num_images": {
        "type": "int",
        "title": "Количество изображений",
        "name": "num_images",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "qwen-image-edit-plus",
    "name": "Qwen Image Edit Plus",
    "endpoint": "qwen-image-edit-plus",
    "family": "qwen",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 3,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "examples": [
          "Replace the watch strap with a rich brown leather band, add subtle engravings on the bezel, increase the contrast slightly, and warm the overall lighting to golden-hour tones, keeping reflections realistic."
        ]
      },
      "width": {
        "type": "int",
        "title": "Ширина",
        "name": "width",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "type": "int",
        "title": "Высота",
        "name": "height",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.5-image-edit",
    "name": "Wan2.5 Image Edit",
    "endpoint": "wan2.5-image-edit",
    "family": "wan2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 2,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение.",
        "examples": [
          "Reimagine the scene under a raging thunderstorm at night: lightning forks across the sky, illuminating the samurai in stark flashes of white light."
        ]
      },
      "width": {
        "type": "int",
        "title": "Ширина",
        "name": "width",
        "description": "Ширина итогового изображения.",
        "default": 2048,
        "minValue": 384,
        "maxValue": 5000,
        "step": 1
      },
      "height": {
        "type": "int",
        "title": "Высота",
        "name": "height",
        "description": "Высота итогового изображения.",
        "default": 2048,
        "minValue": 384,
        "maxValue": 5000,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "reve-image-edit",
    "name": "Reve Image Edit",
    "endpoint": "reve-image-edit",
    "family": "reve",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение.",
        "examples": [
          "A photorealistic fantasy portrait, transforming the woman in the image into an elegant high elf. Give her long, gracefully pointed ears that peek through her hair. Her skin has a subtle, ethereal glow. Replace her white blazer and necklaces with ornate, flowing elven robes made of shimmering silver fabric and intricate leaf patterns. The background is a mystical, twilight forest with glowing magical flora. **CRITICAL:** Maintain her exact original pose, serene smiling expression, and facial structure. Cinematic lighting, masterpiece, hyper-detailed."
        ]
      }
    },
    "provider": "reve",
    "provider_name": "Reve"
  },
  {
    "id": "topaz-image-upscale",
    "name": "Topaz Image Upscale",
    "endpoint": "topaz-image-upscale",
    "family": "topaz",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "upscale_factor": {
        "type": "string",
        "title": "Коэффициент увеличения",
        "name": "upscale_factor",
        "description": "Коэффициент увеличения изображения (например, 2.0 удваивает ширину и высоту).",
        "enum": [
          1,
          2,
          4,
          8
        ],
        "default": 2
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "seedvr2-image-upscale",
    "name": "Seedvr2 Image Upscale",
    "endpoint": "seedvr2-image-upscale",
    "family": "seedvr2",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Целевое разрешение сгенерированного изображения.",
        "enum": [
          "2k",
          "4k",
          "8k"
        ],
        "default": "4k"
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "qwen-image-edit-plus-lora",
    "name": "Qwen Image Edit Plus Lora",
    "endpoint": "qwen-image-edit-plus-lora",
    "family": "qwen",
    "imageField": "images_list",
    "hasPrompt": false,
    "maxImages": 3,
    "inputs": {
      "rotate_right_left": {
        "type": "int",
        "title": "Поворот вправо-влево (градусы°)",
        "name": "rotate_right_left",
        "description": "Поворот камеры влево (положительное значение) или вправо (отрицательное) в градусах. Положительные значения — поворот влево, отрицательные — вправо.",
        "default": 0,
        "minValue": -90,
        "maxValue": 90,
        "step": 1
      },
      "move_forward": {
        "type": "int",
        "title": "Движение вперёд → крупный план",
        "name": "move_forward",
        "description": "Движение камеры вперёд (0 = без движения, 10 = крупный план)",
        "default": 0,
        "minValue": 0,
        "maxValue": 10,
        "step": 0.1
      },
      "vertical_angle": {
        "type": "int",
        "title": "Вертикальный угол (сверху ⬄ снизу)",
        "name": "vertical_angle",
        "description": "Настройка вертикального угла камеры (-1 = вид сверху/взгляд вниз, 0 = нейтральный, 1 = вид снизу/взгляд вверх)",
        "default": 0,
        "minValue": -1,
        "maxValue": 1,
        "step": 0.1
      },
      "wide_angle_lens": {
        "type": "boolean",
        "title": "Широкоугольный объектив",
        "name": "wide_angle_lens",
        "description": "Включить эффект широкоугольного объектива",
        "default": false
      },
      "width": {
        "type": "int",
        "title": "Ширина",
        "name": "width",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "type": "int",
        "title": "Высота",
        "name": "height",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "nano-banana-pro-edit",
    "name": "Nano Banana Pro Edit",
    "endpoint": "nano-banana-pro-edit",
    "family": "nano",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 8,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "examples": [
          "Keep the same scene and subject, but change the lighting to warm golden sunset tones, remove the neon signs, add soft sunlight beams from the side, enhance surface details, keep reflections subtle and natural."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "1:1",
          "3:4",
          "4:3",
          "9:16",
          "16:9",
          "3:2",
          "2:3",
          "5:4",
          "4:5",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Целевое разрешение сгенерированного изображения.",
        "enum": [
          "1k",
          "2k",
          "4k"
        ],
        "default": "1k"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "image-passthrough",
    "name": "Image Passthrough",
    "endpoint": "image-passthrough",
    "family": "image",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "make_input": {
        "type": "boolean",
        "title": "Сделать входным",
        "name": "make_input",
        "default": true
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "kling-o1-edit-image",
    "name": "Kling O1 Edit Image",
    "endpoint": "kling-o1-edit-image",
    "family": "kling-o1",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение.",
        "examples": [
          "Replace the hanging lanterns with floating bioluminescent orbs that emit soft cyan light, keep the garden composition and city reflections unchanged, ensure the orbs cast subtle cyan rim-light on nearby leaves and glass, preserve overall twilight mood and depth of field."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "auto",
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Целевое разрешение сгенерированного изображения.",
        "enum": [
          "1k",
          "2k"
        ],
        "default": "1k"
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "flux-2-dev-edit",
    "name": "Flux 2 Dev Edit",
    "endpoint": "flux-2-dev-edit",
    "family": "flux-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 3,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "examples": [
          "Replace the floating stained-glass cathedral with a colossal crystal tree glowing from within, while keeping the stormy sky, ocean waves, rainbow reflections, and dramatic lighting intact."
        ]
      },
      "width": {
        "type": "int",
        "title": "Ширина",
        "name": "width",
        "description": "Ширина итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "type": "int",
        "title": "Высота",
        "name": "height",
        "description": "Высота итогового изображения.",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-flex-edit",
    "name": "Flux 2 Flex Edit",
    "endpoint": "flux-2-flex-edit",
    "family": "flux-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 8,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение.",
        "examples": [
          "Replace the molten gold in the lower chamber with a swirling vortex of glowing sapphire mist, keep the crystal panels, star map, orbiting metallic rings, and aurora sky unchanged, ensure the new mist casts cool blue highlights and interacts naturally with the surrounding lightning."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "auto",
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "2:3",
          "3:2"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Целевое разрешение сгенерированного изображения.",
        "enum": [
          "1k",
          "2k"
        ],
        "default": "1k"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-pro-edit",
    "name": "Flux 2 Pro Edit",
    "endpoint": "flux-2-pro-edit",
    "family": "flux-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 8,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение.",
        "examples": [
          "Replace the central spherical chronometer with a floating crystalline lotus emitting soft golden light, keep the asteroid chamber, star charts, cosmic dust streams, and prismatic beams unchanged, ensure the lotus casts warm highlights and seamlessly integrates with the scene’s lighting."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "auto",
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "2:3",
          "3:2"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Целевое разрешение сгенерированного изображения.",
        "enum": [
          "1k",
          "2k"
        ],
        "default": "1k"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "vidu-q2-reference-to-image",
    "name": "Vidu Q2 Reference To Image",
    "endpoint": "vidu-q2-reference-to-image",
    "family": "vidu-q2",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 7,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение.",
        "examples": [
          "Create a new scene where the masked wanderer stands inside an ancient stone observatory illuminated by rotating celestial beams; preserve the character’s clothing style and silhouette while adding glowing runes carved into the walls, mist swirling across the floor, and a dramatic cosmic light shaft from above; cinematic composition, high detail."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "auto",
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Целевое разрешение сгенерированного изображения.",
        "enum": [
          "1k",
          "2k",
          "4k"
        ],
        "default": "1k"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "bytedance-seedream-v4.5-edit",
    "name": "Bytedance Seedream v4.5 Edit",
    "endpoint": "bytedance-seedream-v4.5-edit",
    "family": "seedream-v45",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "examples": [
          "Replace the glowing amethyst flame at the tower’s peak with a levitating orb of swirling turquoise water, keeping the spiral tower, crystalline desert, floating shards, and aurora-lit sky unchanged; ensure the water orb emits cool reflections and integrates naturally with the existing lighting."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "default": "1:1"
      },
      "quality": {
        "type": "string",
        "title": "Качество",
        "name": "quality",
        "description": "Качество итогового изображения.",
        "enum": [
          "basic",
          "high"
        ],
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "qwen-image-edit-2511",
    "name": "Qwen Image Edit 2511",
    "endpoint": "qwen-image-edit-2511",
    "family": "qwen",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 3,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "examples": [
          "Replace the glass observatory with a floating bronze astrolabe composed of interlocking rings and engraved symbols, keep the glowing desert, dusk sky, dust trails, and lighting unchanged; ensure the bronze surface reflects the warm sunset tones naturally and integrates seamlessly with the scene."
        ]
      },
      "width": {
        "type": "integer",
        "title": "Ширина",
        "name": "width",
        "description": "Ширина изображения в пикселях",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "type": "integer",
        "title": "Высота",
        "name": "height",
        "description": "Высота изображения в пикселях",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.6-image-edit",
    "name": "Wan2.6 Image Edit",
    "endpoint": "wan2.6-image-edit",
    "family": "wan2.6",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 3,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение.",
        "examples": [
          "Replace the glowing crystal spires with towering living trees made of luminous jade leaves and silver bark, keep the floating citadel structure, ocean reflections, mist, moonlight, and twilight color palette unchanged; ensure the new trees cast soft green highlights that blend naturally with the existing lighting."
        ]
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "qwen-text-to-image-2512",
    "name": "Qwen Text To Image 2512",
    "endpoint": "qwen-text-to-image-2512",
    "family": "qwen",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "examples": [
          "A colossal biomechanical whale swimming slowly through a vast sky made of soft clouds and fractured light. Its translucent body reveals glowing internal organs shaped like rotating gears and flowing energy veins. Below it, a sprawling patchwork of farmland and rivers curves with the planet’s surface, catching reflections from the whale’s luminous glow. Long fabric banners trail from the whale’s fins, fluttering gently in the wind like ceremonial streamers. The camera angle is wide and aerial, emphasizing scale and serenity. Soft sunrise colors, cinematic depth, ultra-detailed surreal sci-fi atmosphere."
        ]
      },
      "width": {
        "type": "integer",
        "title": "Ширина",
        "name": "width",
        "description": "Ширина изображения в пикселях",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      },
      "height": {
        "type": "integer",
        "title": "Высота",
        "name": "height",
        "description": "Высота изображения в пикселях",
        "default": 1024,
        "minValue": 256,
        "maxValue": 1536,
        "step": 1
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "gpt-image-2-edit",
    "name": "Gpt Image 2 Edit",
    "endpoint": "gpt-image-2-image-to-image",
    "family": "gpt-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 16,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий трансформацию. Поддерживается до 20 000 символов.",
        "examples": [
          "Transform these product photos into a professional lifestyle scene with warm cinematic lighting, soft natural shadows, and a clean modern background; keep brand details and proportions unchanged."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "auto",
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "default": "auto"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Целевое разрешение сгенерированного изображения.",
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "default": "2K"
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "gpt-image-1.5-edit",
    "name": "Gpt Image 1.5 Edit",
    "endpoint": "gpt-image-1.5-edit",
    "family": "gpt-1.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 10,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт для редактирования изображения.",
        "examples": [
          "Replace the abandoned car with a sleek autonomous electric vehicle made of brushed metal and soft glowing panels, keep the desert highway, sunset lighting, heat distortion, power lines, and approaching storm unchanged; ensure reflections and shadows match the original environment naturally."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "1:1",
          "2:3",
          "3:2"
        ],
        "default": "1:1"
      },
      "quality": {
        "type": "string",
        "title": "Качество",
        "name": "quality",
        "description": "Качество сгенерированного изображения.",
        "enum": [
          "low",
          "medium",
          "high"
        ],
        "default": "medium"
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "grok-imagine-image-to-image",
    "name": "Grok Imagine Image To Image",
    "endpoint": "grok-imagine-image-to-image",
    "family": "grok",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение.",
        "examples": [
          "Replace the arriving train with a silent magnetic levitation transit pod made of matte white composite and glass, keep the platform, people, lighting, reflections, and urban environment unchanged; ensure the new vehicle fits naturally into the scene with correct scale, shadows, and motion blur."
        ]
      }
    },
    "provider": "grok",
    "provider_name": "xAI"
  },
  {
    "id": "Api Node",
    "name": "Api Node",
    "endpoint": "Api Node",
    "family": "wavespeed",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "model_url": {
        "type": "string",
        "title": "Ссылка на модель",
        "name": "model_url",
        "description": "URL модели wavespeed",
        "examples": [
          ""
        ]
      },
      "api_key": {
        "type": "string",
        "title": "API-ключ",
        "name": "api_key",
        "description": "API-ключ для авторизации",
        "examples": [
          ""
        ]
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "flux-2-klein-4b-edit",
    "name": "Flux 2 Klein 4b Edit",
    "endpoint": "flux-2-klein-4b-edit",
    "family": "flux-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 4,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "examples": [
          "Add a tiny blue knitted scarf around the kitten’s neck, keep the kitten’s pose, table, lighting, and cozy indoor environment unchanged; make the scarf soft and cute, fitting naturally without covering the kitten’s face."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон сгенерированного изображения",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-klein-9b-edit",
    "name": "Flux 2 Klein 9b Edit",
    "endpoint": "flux-2-klein-9b-edit",
    "family": "flux-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 4,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "examples": [
          "Add a small red bow tie around the puppy’s neck, slightly fluffy fabric texture, keep the puppy’s pose, facial expression, sofa, lighting, and living room environment unchanged; ensure the bow tie matches the warm lighting and looks naturally placed."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон сгенерированного изображения",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "add-image-watermark",
    "name": "Add Image Watermark",
    "endpoint": "add-image-watermark",
    "family": "watermark",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "position": {
        "type": "string",
        "title": "Позиция",
        "name": "position",
        "description": "Положение водяного знака на изображении",
        "enum": [
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
          "center"
        ],
        "default": "bottom-right"
      },
      "opacity": {
        "type": "number",
        "title": "Непрозрачность",
        "name": "opacity",
        "description": "Прозрачность водяного знака (0 = невидим, 1 = полностью непрозрачен)",
        "default": 0.7
      },
      "scale": {
        "type": "number",
        "title": "Масштаб",
        "name": "scale",
        "description": "Размер водяного знака относительно изображения (0.1 = 10%, 1.0 = 100%)",
        "default": 0.2
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "nano-banana-2-edit",
    "name": "Nano Banana 2 Edit",
    "endpoint": "nano-banana-2-edit",
    "family": "nano",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 14,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Позитивный промпт для генерации.",
        "examples": [
          "Transform the portrait into a cyberpunk style with neon lighting, metallic accessories, and a rain-soaked city background, maintaining the subject's facial features."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "1:4",
          "1:8",
          "2:3",
          "3:2",
          "3:4",
          "4:1",
          "4:3",
          "4:5",
          "5:4",
          "8:1",
          "9:16",
          "16:9",
          "21:9",
          "auto"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения.",
        "default": "auto"
      },
      "resolution": {
        "enum": [
          "1k",
          "2k",
          "4k"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного изображения.",
        "default": "1k"
      },
      "google_search": {
        "title": "Поиск Google",
        "name": "google_search",
        "type": "boolean",
        "description": "Использовать ли поиск Google для улучшения промпта.",
        "default": false
      },
      "output_format": {
        "enum": [
          "jpg",
          "png"
        ],
        "title": "Формат вывода",
        "name": "output_format",
        "type": "string",
        "description": "Формат итогового изображения.",
        "default": "jpg"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "seedream-5.0-edit",
    "name": "Seedream 5.0 Edit",
    "endpoint": "seedream-5.0-edit",
    "family": "seedream",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий желаемое изменение.",
        "examples": [
          "Change the daytime forest scene to a moonlit winter landscape with shimmering snow on the trees and a soft blue glow from a distant cottage window."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "quality": {
        "enum": [
          "basic",
          "high"
        ],
        "title": "Качество",
        "name": "quality",
        "type": "string",
        "description": "Качество итогового изображения.",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  }
,
  {
    "id": "bytedance-seedream-v4-edit",
    "name": "Seedream 4 Edit",
    "endpoint": "bytedance-seedream-edit-v4",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "A tranquil shoreline at dawn where waves turn into glowing ribbons of light, painting the sky with dreamlike hues of violet and gold. A figure walks along the edge, leaving footsteps that bloom into luminous flowers, symbolizing imagination flowing seamlessly into reality."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedream-v4-edit-input.jpg"
        ],
        "description": "Загрузите или укажите референсные изображения. Используется для генерации «изображение в изображение».",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 10
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "2:3",
          "3:2",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "resolution": {
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового изображения.",
        "default": "4K"
      },
      "num_images": {
        "title": "Количество изображений",
        "name": "num_images",
        "type": "int",
        "description": "Количество изображений, сгенерированных за один запрос. Каждое изображение оплачивается отдельно",
        "default": 1,
        "minValue": 1,
        "maxValue": 4,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "bytedance-seedream-v5.0-edit",
    "name": "Seedream 5.0 Edit",
    "endpoint": "seedream-5.0-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий желаемое изменение",
        "examples": [
          "Replace the plain transparent screen with a futuristic holographic display, making the screen emit a brighter cyan and purple glow. Transform the text “Seedream 5.0 Lite Edit” into large 3D glowing neon letters with depth, reflections, and soft bloom lighting.\n\nAdd animated editing UI elements such as floating anchor points, bezier curves, bounding boxes, and adjustment handles around the text, clearly visible and luminous.\n\nChange the environment lighting to a darker, high-contrast tech room so the glowing text becomes the dominant focal point. Add subtle volumetric light beams and floor reflections directly beneath the text.\n\nKeep the same camera angle and composition, but make the result look like a premium futuristic editing interface poster, with the text clearly highlighted and visually powerful."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedream-5.0-edit-in.jpg"
        ],
        "description": "Загрузите или укажите изображение начального кадра. Используется для генерации «изображение в видео».",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 14
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "2:3",
          "3:2",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения.",
        "default": "1:1"
      },
      "quality": {
        "enum": [
          "basic",
          "high"
        ],
        "title": "Качество",
        "name": "quality",
        "type": "string",
        "description": "Качество итогового изображения.",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "qwen-image-2.0-edit",
    "name": "Qwen Image 2.0 Edit",
    "endpoint": "qwen-image-2.0-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "description": "Описание изменений, которые вы хотите внести.",
        "title": "Промпт",
        "type": "string",
        "name": "prompt",
        "examples": [
          "Turn the coffee cup into a miniature volcano where the coffee erupts like lava and smoke rises dramatically from the cup."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/qwen-image-2.0-edit-in.jpg"
        ],
        "description": "Загрузите до 9 URL изображений.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "type": "string",
        "name": "aspect_ratio",
        "default": "16:9",
        "description": "Соотношение сторон итогового изображения."
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "qwen-image-2.0-pro-edit",
    "name": "Qwen Image 2.0 Pro Edit",
    "endpoint": "qwen-image-2.0-pro-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "description": "Описание изменений, которые вы хотите внести.",
        "title": "Промпт",
        "type": "string",
        "name": "prompt",
        "examples": [
          "Transform the office into a dense tropical jungle with vines covering the desks, plants growing through the floor, and sunlight beams shining through broken ceiling panels."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/qwen-image-2.0-pro-edit-in.jpg"
        ],
        "description": "Загрузите до 6 URL изображений.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 6
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "type": "string",
        "name": "aspect_ratio",
        "default": "16:9",
        "description": "Соотношение сторон сгенерированного изображения."
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "flux-2-klein-4b-turbo-edit",
    "name": "Flux 2 Klein 4B Turbo Edit",
    "endpoint": "flux-2-klein-4b-turbo-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "Add a tiny blue knitted scarf around the kitten’s neck."
        ],
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/flux-2-klein-4b-edit-in.jpg"
        ],
        "description": "Список URL входных изображений для редактирования.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 4
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-klein-9b-turbo-edit",
    "name": "Flux 2 Klein 9B Turbo Edit",
    "endpoint": "flux-2-klein-9b-turbo-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "Add a small red bow tie around the puppy’s neck."
        ],
        "description": "Текстовый промпт, описывающий изображение — каким должно быть итоговое отредактированное изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/flux-2-klein-9b-edit-in.jpg"
        ],
        "description": "Список URL входных изображений для редактирования.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 4
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "portrait-stylist",
    "name": "AI Portrait Stylist",
    "endpoint": "portrait-stylist",
    "inputs": {
      "image_url": {
        "type": "string",
        "name": "image_url",
        "title": "Ссылка на изображение",
        "description": "Загрузите чёткое портретное фото.",
        "field": "image",
        "examples": [
          "https://cdn.muapi.ai/outputs/d09a771a8b2a45f1b0b5e6aba5955f1b.jpg"
        ]
      },
      "name": {
        "type": "string",
        "title": "Имя",
        "name": "name",
        "description": "Выберите портретный эффект для применения.",
        "enum": [
          "Voluminous Frizzy Hair",
          "Platinum Blonde Hair",
          "Deep Burgundy Hair",
          "Jet Black Hair",
          "Bold Hair Highlights",
          "Bold Red Lipstick",
          "Smokey Eye Makeup",
          "Glossy Nude Makeup",
          "Winged Eyeliner",
          "Party Glam Makeup",
          "Aviator Sunglasses",
          "Oversized Sunglasses",
          "Modern Transparent Glasses",
          "Bold Fashion Hat",
          "Bright Pink Outfit",
          "Black Leather Jacket",
          "White Formal Shirt",
          "Neon Green Hoodie",
          "Cinematic Lighting",
          "Cyberpunk Lighting"
        ],
        "default": "Voluminous Frizzy Hair"
      },
      "aspect_ratio": {
        "type": "string",
        "name": "aspect_ratio",
        "title": "Соотношение сторон",
        "description": "Соотношение сторон результата.",
        "enum": [
          "auto",
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16"
        ],
        "default": "auto"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "seedance-2-character",
    "name": "Seedance 2 Character",
    "endpoint": "seedance-2-character",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Описание одежды",
        "name": "prompt",
        "description": "Опишите наряд или костюм, который должен носить персонаж.",
        "examples": [
          "A red leather jacket with black jeans and white sneakers"
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/956660418681/1b84d57d-0869-40f7-8ceb-85ea38074022.jpg"
        ],
        "description": "1–3 референсных фото персонажа для создания чарактер-шита.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 3
      },
      "character_name": {
        "type": "string",
        "format": "text",
        "title": "Имя персонажа",
        "name": "character_name",
        "description": "Опциональная метка для идентификации этого персонажа.",
        "examples": [
          "A Hero"
        ]
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "wan2.7-image-edit",
    "name": "Wan 2.7 Image Edit",
    "endpoint": "wan2.7-image-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "Turn the dog into a royal king sitting on a throne, wearing a crown and luxurious robes, dramatic golden lighting."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/wan2.7-image-edit-in.jpg"
        ],
        "description": "Загрузите или укажите входное изображение для анимации.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылка на изображение",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "9:21",
          "3:2",
          "2:3"
        ]
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.7-image-edit-pro",
    "name": "Wan 2.7 Image Edit Pro",
    "endpoint": "wan2.7-image-edit-pro",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "Convert the entire scene into an underwater environment where the buildings are covered in coral, fish swim through the streets, and light rays pass through the water."
        ],
        "description": "Текстовый промпт, описывающий изображение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/wan2.7-image-edit-pro-in.jpg"
        ],
        "description": "Загрузите или укажите входное изображение для анимации.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылка на изображение",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1",
        "enum": [
          "1:1",
          "4:3",
          "3:4",
          "16:9",
          "9:16",
          "21:9",
          "9:21",
          "3:2",
          "2:3"
        ]
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "flux-2-klein-4b-edit-lora",
    "name": "Flux 2 Klein 4B Edit LoRA",
    "endpoint": "flux-2-klein-4b-edit-lora",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "Add a tiny blue knitted scarf around the kitten's neck, keep pose, lighting, and background unchanged."
        ],
        "description": "Инструкция редактирования, описывающая желаемое изменение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/flux-2-klein-4b-edit-in.jpg"
        ],
        "description": "Список из 1–3 URL референсных изображений для редактирования.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 3
      },
      "lora_list": {
        "examples": [
          {
            "path": "https://huggingface.co/example/lora/resolve/main/lora.safetensors",
            "scale": 1
          }
        ],
        "title": "Список LoRA",
        "name": "lora_list",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string",
              "format": "url",
              "title": "Путь",
              "name": "path",
              "description": "URL или путь к весам LoRA."
            },
            "scale": {
              "type": "number",
              "title": "Масштаб",
              "name": "scale",
              "description": "Множитель веса LoRA. Значение по умолчанию: 1",
              "minValue": 0,
              "maxValue": 4,
              "step": 0.01,
              "default": 1
            }
          }
        },
        "description": "До 3 адаптеров LoRA для применения при редактировании.",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "flux-2-klein-9b-edit-lora",
    "name": "Flux 2 Klein 9B Edit LoRA",
    "endpoint": "flux-2-klein-9b-edit-lora",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "Add ornate gold filigree to the costume while preserving the pose, lighting, and background scene."
        ],
        "description": "Инструкция редактирования, описывающая желаемое изменение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/flux-2-klein-9b-edit-in.jpg"
        ],
        "description": "Список из 1–3 URL референсных изображений для редактирования.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 3
      },
      "lora_list": {
        "examples": [
          {
            "path": "https://huggingface.co/example/lora/resolve/main/lora.safetensors",
            "scale": 1
          }
        ],
        "title": "Список LoRA",
        "name": "lora_list",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "path": {
              "type": "string",
              "format": "url",
              "title": "Путь",
              "name": "path",
              "description": "URL или путь к весам LoRA."
            },
            "scale": {
              "type": "number",
              "title": "Масштаб",
              "name": "scale",
              "description": "Множитель веса LoRA. Значение по умолчанию: 1",
              "minValue": 0,
              "maxValue": 4,
              "step": 0.01,
              "default": 1
            }
          }
        },
        "description": "До 3 адаптеров LoRA для применения при редактировании.",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения",
        "default": "1:1"
      }
    },
    "provider": "blackforest",
    "provider_name": "Black Forest Labs"
  },
  {
    "id": "kling-o3-image-edit",
    "name": "Kling O3 Image Edit",
    "endpoint": "kling-o3-image-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "examples": [
          "Preserve the original composition, people placements, facial identities, DJ setup, and rooftop party mood from the source image. Transform the entire scene into a tiny miniature rooftop party built on top of a moving RC toy truck driving across a messy apartment floor. Surround the tiny party with giant everyday household objects like shoes, cables, snack packets, books, and soda cans towering like skyscrapers. Keep the same party energy and realistic interactions while introducing playful scale contrast, macro photography depth, cinematic lighting, and highly detailed miniature-world realism."
        ],
        "description": "Текстовая инструкция, описывающая желаемую трансформацию. Максимум 2000 символов.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/kling-o3-image-edit-in.jpg"
        ],
        "description": "Загрузите или укажите референсные изображения для трансформации. Поддерживается до 10 изображений.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 10
      },
      "aspect_ratio": {
        "enum": [
          "auto",
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "3:2",
          "2:3",
          "21:9"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения. Используйте «auto», чтобы следовать референсному изображению.",
        "default": "auto"
      },
      "resolution": {
        "enum": [
          "1K",
          "2K",
          "4K"
        ],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение итогового изображения.",
        "default": "1K"
      },
      "num_images": {
        "type": "int",
        "title": "Количество изображений",
        "name": "num_images",
        "description": "Сколько изображений генерировать за один запрос.",
        "default": 1,
        "minValue": 1,
        "maxValue": 9,
        "step": 1
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "nano-banana-2-lite-edit",
    "name": "Nano Banana 2 Lite Edit",
    "endpoint": "nano-banana-2-lite-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий желаемое содержание изображения.",
        "examples": [
          "Transform the cat into a cosmic creature made of stars, nebula clouds, and glowing galaxies while preserving its sitting pose and facial expression. Add orbiting miniature planets around its body."
        ]
      },
      "images_list": {
        "examples": [
          "https://cdn.muapi.ai/assets/nano-banana-2-lite-edit-in.jpg"
        ],
        "description": "URL референсных изображений для редактирования. До 14 изображений.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 14
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "2:3",
          "3:2",
          "3:4",
          "4:3",
          "4:5",
          "5:4",
          "9:16",
          "16:9",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон сгенерированного изображения.",
        "default": "1:1"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "bytedance-seedream-5.0-pro-edit",
    "name": "Seedream 5.0 Pro Edit",
    "endpoint": "seedream-5.0-pro-edit",
    "imageField": "images_list",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий желаемое изменение",
        "examples": [
          "Keep the model's pose and the flowing shape of the liquid dress unchanged. Change the clothing material from silver metal to completely transparent clear water. Lighting changes from reflection to refraction."
        ]
      },
      "images_list": {
        "examples": [
          "https://static.aiquickdraw.com/tools/example/1764851484363_ScV1s2aq.webp"
        ],
        "description": "Один или несколько URL референсных изображений для редактирования.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 10
      },
      "aspect_ratio": {
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "2:3",
          "3:2"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового изображения. 16:9 и 9:16 не поддерживают разрешение 2K.",
        "default": "1:1"
      },
      "resolution": {
        "enum": [
          "1K",
          "2K"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового изображения.",
        "default": "1K"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "qwen3-image-to-image",
    "name": "Qwen 3 Image to Image",
    "endpoint": "qwen3-image-to-image",
    "family": "qwen3",
    "imageField": "images_list",
    "maxImages": 3,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий желаемое редактирование изображения."
      },
      "images_list": {
        "type": "array",
        "field": "images_list",
        "title": "Входные изображения",
        "name": "images_list",
        "maxItems": 3,
        "items": {"type": "string"}
      },
      "resolution": {
        "enum": ["1k", "2k"],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "default": "1k"
      },
      "aspect_ratio": {
        "enum": ["1:1", "3:2", "2:3", "4:3", "3:4", "16:9", "9:16", "21:9"],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "default": "16:9"
      },
      "output_format": {
        "enum": ["png", "jpeg"],
        "type": "string",
        "title": "Формат вывода",
        "name": "output_format",
        "default": "png"
      },
      "prompt_extend": {
        "type": "boolean",
        "title": "Умное расширение промпта",
        "name": "prompt_extend",
        "default": true
      },
      "negative_prompt": {
        "type": "string",
        "title": "Негативный промпт",
        "name": "negative_prompt"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "qwen3-pro-image-to-image",
    "name": "Qwen 3 Pro Image to Image",
    "endpoint": "qwen3-pro-image-to-image",
    "family": "qwen3",
    "imageField": "images_list",
    "maxImages": 3,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий желаемое редактирование изображения."
      },
      "images_list": {
        "type": "array",
        "field": "images_list",
        "title": "Входные изображения",
        "name": "images_list",
        "maxItems": 3,
        "items": {"type": "string"}
      },
      "resolution": {
        "enum": ["1k", "2k"],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "default": "1k"
      },
      "aspect_ratio": {
        "enum": ["1:1", "3:2", "2:3", "4:3", "3:4", "16:9", "9:16", "21:9"],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "default": "16:9"
      },
      "output_format": {
        "enum": ["png", "jpeg"],
        "type": "string",
        "title": "Формат вывода",
        "name": "output_format",
        "default": "png"
      },
      "prompt_extend": {
        "type": "boolean",
        "title": "Умное расширение промпта",
        "name": "prompt_extend",
        "default": true
      },
      "negative_prompt": {
        "type": "string",
        "title": "Негативный промпт",
        "name": "negative_prompt"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  }
];

// Auto-generated from schema_data.json — Image to Video models
export const i2vModels = [
  {
    "id": "ai-video-effects",
    "name": "AI Video Effects",
    "endpoint": "generate_wan_ai_effects",
    "family": "effects",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для вставки в заданный шаблон промпта для выбранного эффекта.",
        "examples": [
          "a cute kitten"
        ]
      },
      "name": {
        "type": "string",
        "title": "Тип эффекта",
        "name": "name",
        "description": "Тип эффекта для применения к видео.",
        "enum": [
          "360 Rotation",
          "Abandoned Places",
          "Angry",
          "Animal Documentary",
          "Assassin It",
          "Baby It",
          "Boxing",
          "Bride It",
          "Cakeify",
          "Cartoon Jaw Drop",
          "Cats",
          "Crush It",
          "Crying",
          "Cyberpunk 2077",
          "Deflate It",
          "Disney Princess It",
          "Dogs",
          "Eye Close-Up",
          "Fantasy Landscapes",
          "Film Noir",
          "Fire",
          "Glamor",
          "Goblin",
          "Gun Reveal",
          "Hug Jesus",
          "Hulk Transformation",
          "Inflate It",
          "Jungle It",
          "Jumpscare",
          "Kamehameha",
          "Kiss Cam",
          "Kissing",
          "Lego",
          "Laughing",
          "Little Planet",
          "Live Wallpaper",
          "Looping Pixel Art",
          "Melt It",
          "Mona Lisa It",
          "Museum It",
          "Muscle Show Off",
          "Orc",
          "Pixar",
          "Pirate Captain",
          "POV Driving",
          "Princess It",
          "Puppy it",
          "Robotic Face Reveal",
          "Samurai It",
          "Sharingan Eyes",
          "Skyrim Fus-Ro-Dah",
          "Snow White It",
          "Squish It",
          "Steamboat Willie",
          "Super Saiyan Transformation",
          "Tsunami",
          "Ultra Wide",
          "VHS Footage",
          "VIP It",
          "Warrior It",
          "Wind Blast",
          "Younger Self Selfie",
          "Zen It",
          "Zoom Call"
        ],
        "default": "Cakeify"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "quality": {
        "type": "string",
        "title": "Качество",
        "name": "quality",
        "description": "Качество сгенерированного видео.",
        "enum": [
          "medium",
          "high"
        ],
        "default": "medium"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          5,
          10
        ],
        "default": 5
      }
    },
    "provider": "muapi",
    "provider_name": "MuapiApp"
  },
  {
    "id": "motion-controls",
    "name": "Motion Controls",
    "endpoint": "generate_wan_ai_effects",
    "family": "effects",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для вставки в заданный шаблон промпта для выбранного эффекта.",
        "examples": [
          "a blueberry person"
        ]
      },
      "name": {
        "type": "string",
        "title": "Тип эффекта",
        "name": "name",
        "description": "Тип эффекта для применения к видео.",
        "enum": [
          "360 Orbit",
          "Arc Shot",
          "Car Chase",
          "Car Mount Cam",
          "Crash Zoom In",
          "Crash Zoom Out",
          "Crane Down",
          "Crane Overhead",
          "Crane Punch-In",
          "Crane Up",
          "Dirty Lens",
          "Dolly In",
          "Dolly Left",
          "Dolly Out",
          "Dolly Right",
          "Dolly Zoom In",
          "Dolly Zoom Out",
          "Dutch Angle",
          "Fast Dolly Zoom In",
          "Fast Dolly Zoom Out",
          "Fisheye Lens",
          "Focus Shift",
          "FPV Drone Cam",
          "Handheld Cam",
          "Head Tracking",
          "Hero Run",
          "Human Timelapse",
          "Landscape Timelapse",
          "Lazy Susan",
          "Lens Crac",
          "Lens Flare",
          "Matrix Shot",
          "Motion Blur",
          "Object POV",
          "Overhead",
          "Rap Video Cam",
          "Robotic Cam",
          "Snorricam",
          "Tilt Down",
          "Tilt Up",
          "Whip Pan",
          "Wiggle",
          "Zoom In",
          "Zoom In Through Object",
          "Zoom Into Mouth",
          "Zoom Out",
          "Zoom Out Through Object"
        ],
        "default": "360 Orbit"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "quality": {
        "type": "string",
        "title": "Качество",
        "name": "quality",
        "description": "Качество сгенерированного видео.",
        "enum": [
          "medium",
          "high"
        ],
        "default": "medium"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          5,
          10
        ],
        "default": 5
      }
    },
    "provider": "muapi",
    "provider_name": "MuapiApp"
  },
  {
    "id": "vfx",
    "name": "VFX",
    "endpoint": "generate_wan_ai_effects",
    "family": "effects",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для вставки в заданный шаблон промпта для выбранного эффекта.",
        "examples": [
          "a Mercedes bench car"
        ]
      },
      "name": {
        "type": "string",
        "title": "Тип эффекта",
        "name": "name",
        "description": "Тип эффекта для применения к видео.",
        "enum": [
          "Building Explosion",
          "Car Explosion",
          "Decay Time-Lapse",
          "Disintegration",
          "Electricity",
          "Flying",
          "Huge Explosion",
          "Levitate",
          "Tornado"
        ],
        "default": "Car Explosion"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "quality": {
        "type": "string",
        "title": "Качество",
        "name": "quality",
        "description": "Качество сгенерированного видео.",
        "enum": [
          "medium",
          "high"
        ],
        "default": "medium"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          5,
          10
        ],
        "default": 5
      }
    },
    "provider": "muapi",
    "provider_name": "MuapiApp"
  },
  {
    "id": "veo3-image-to-video",
    "name": "Veo3 Image To Video",
    "endpoint": "veo3-image-to-video",
    "family": "veo",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий желаемое содержание видео.",
        "examples": [
          "On a neon-lit street corner, a hyped street performer with a mic shouts: 'Yo! Big drop today! VEO3 just launched on muapi!' A crowd cheers as holograms of videos burst into the air and the muapi logo spins above."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3-fast-image-to-video",
    "name": "Veo3 Fast Image To Video",
    "endpoint": "veo3-fast-image-to-video",
    "family": "veo",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий желаемое содержание видео.",
        "examples": [
          "A spaceship hovers over Earth. A digital billboard beams out: 'MuAPI is broadcasting creativity across the galaxy.' A robot host floats in zero gravity holding a prompt card: 'Let’s turn this into a story.' Suddenly, video panels fly around the ship with generated content."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "runway-image-to-video",
    "name": "Runway Image To Video",
    "endpoint": "runway-image-to-video",
    "family": "runway",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "The camera smoothly zooms in on the sleek, futuristic race car as it speeds through a neon-lit urban tunnel at twilight, its glossy white surface reflecting the vibrant pink and blue lights streaking past. The precise detailing of the car’s aerodynamic curves and glowing accents is highlighted as droplets of water spray from the spinning tires, adding a palpable sense of motion and intensity. The driver’s black helmet, contrasted against the car’s gleaming body, remains sharply in focus, emphasizing the thrilling high-speed chase through the city. The blurred cityscape and illuminated digital billboards in the background create a high-tech, cyberpunk atmosphere, intensifying the scene’s adrenaline and futuristic vibe."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео. Если выбрано 1080p, 8-секундное видео сгенерировать нельзя.",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность в секундах. Если выбрано 8-секундное видео, разрешение 1080p недоступно.",
        "enum": [
          5,
          8
        ],
        "default": 5
      }
    },
    "provider": "runway",
    "provider_name": "RunwayML"
  },
  {
    "id": "wan2.1-image-to-video",
    "name": "Wan2.1 Image To Video",
    "endpoint": "wan2.1-image-to-video",
    "family": "wan2.1",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "Animate the girl in the painting to blink and look around while her hair moves gently in the wind."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "quality": {
        "type": "string",
        "title": "Качество",
        "name": "quality",
        "description": "Качество сгенерированного видео.",
        "enum": [
          "medium",
          "high"
        ],
        "default": "medium"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "midjourney-v7-image-to-video",
    "name": "Midjourney v7 Image To Video",
    "endpoint": "midjourney-v7-image-to-video",
    "family": "midjourney",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "Add slow drifting fog, glowing mushrooms pulsating softly, and subtle camera zoom"
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового изображения.",
        "enum": [
          "1:1",
          "16:9",
          "9:16",
          "3:4",
          "4:3",
          "1:2",
          "2:1",
          "2:3",
          "3:2",
          "5:6",
          "6:5"
        ],
        "default": "1:1"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "1080p"
        ],
        "default": "480p"
      },
      "num_videos": {
        "type": "int",
        "title": "Количество видео",
        "name": "num_videos",
        "description": "Количество видео, сгенерированных за один запрос. Каждое видео оплачивается отдельно",
        "enum": [
          1,
          2,
          4
        ],
        "default": 1
      },
      "variety": {
        "type": "int",
        "title": "Разнообразие",
        "name": "variety",
        "description": "Управляет разнообразием сгенерированных изображений. Шаг изменения — 5. Более высокие значения дают более разнообразные результаты. Более низкие — более однородные.",
        "default": 5,
        "minValue": 0,
        "maxValue": 100,
        "step": 5
      },
      "stylization": {
        "type": "int",
        "title": "Стилизация",
        "name": "stylization",
        "description": "Управляет интенсивностью художественного стиля. Более высокие значения дают более стилизованный результат. Более низкие — более реалистичный.",
        "default": 1,
        "minValue": 0,
        "maxValue": 1000,
        "step": 1
      },
      "weirdness": {
        "type": "int",
        "title": "Странность",
        "name": "weirdness",
        "description": "Управляет креативностью и уникальностью. Более высокие значения дают более необычные результаты. Более низкие — более традиционные.",
        "default": 1,
        "minValue": 0,
        "maxValue": 3000,
        "step": 1
      }
    },
    "provider": "midjourney",
    "provider_name": "Midjourney"
  },
  {
    "id": "hunyuan-image-to-video",
    "name": "Hunyuan Image To Video",
    "endpoint": "hunyuan-image-to-video",
    "family": "hunyuan",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "The camera begins with a slow, deliberate zoom out from the figure standing on the rain-soaked rooftop, revealing the sleek, armored silhouette clutching a glowing katana that pulses with ominous red light. The deep blues and purples of the wet cityscape set a moody, cyberpunk atmosphere, with neon signs in vibrant pinks, blues, and oranges casting reflections on the glistening surfaces below. The mist and rain softly blur the distant buildings and streetlights, emphasizing the isolation of the lone warrior framed against the sprawling urban expanse. As the camera pulls back, the subtle hum of the futuristic city grows louder, immersing the viewer in a world of tension and anticipation, where danger lurks in the glowing depths of the rain-drenched streets."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      }
    },
    "provider": "hunyuan",
    "provider_name": "Hunyuan"
  },
  {
    "id": "kling-v2.1-master-i2v",
    "name": "Kling v2.1 Master I2V",
    "endpoint": "kling-v2.1-master-i2v",
    "family": "kling-v2.1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Animates wind effects, camera panning, and subtle movements like blinking or background motion, transforming the image into a compelling cinematic shot."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v2.1-standard-i2v",
    "name": "Kling v2.1 Standard I2V",
    "endpoint": "kling-v2.1-standard-i2v",
    "family": "kling-v2.1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "A female explorer stands at the edge of a cliff overlooking a dense jungle, her hair and cape rustling gently in the wind as the dramatic sunset casts warm, golden hues across the sky and landscape, capturing a moment of awe and adventure."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v2.1-pro-i2v",
    "name": "Kling v2.1 Pro I2V",
    "endpoint": "kling-v2.1-pro-i2v",
    "family": "kling-v2.1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "A cyberpunk woman with neon tattoos stands in a rainy alley as glowing signs reflect vividly in puddles around her. Her coat flutters slightly in the breeze, and she makes subtle head movements, capturing the moody, futuristic atmosphere without any scene changes."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "wan2.2-image-to-video",
    "name": "Wan2.2 Image To Video",
    "endpoint": "wan2.2-image-to-video",
    "family": "wan2.2",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "A close-up video of a young woman smiling gently in the rain, with raindrops glistening on her face and eyelashes. The camera focuses on the delicate details of her expression and the shimmering water droplets, while soft light softly reflects off her skin, emphasizing the rainy atmosphere."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "quality": {
        "type": "string",
        "title": "Качество",
        "name": "quality",
        "description": "Качество сгенерированного видео.",
        "enum": [
          "medium",
          "high"
        ],
        "default": "medium"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 5,
        "maxValue": 8,
        "step": 3
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "runway-act-two-i2v",
    "name": "Runway Act Two I2V",
    "endpoint": "runway-act-two-i2v",
    "family": "runway",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9"
        ],
        "default": "16:9"
      }
    },
    "provider": "runway",
    "provider_name": "Runway"
  },
  {
    "id": "pixverse-v4.5-i2v",
    "name": "Pixverse v4.5 I2V",
    "endpoint": "pixverse-v4.5-i2v",
    "family": "pixverse-v4.5",
    "imageField": "images_list",
    "lastImageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "A cat dressed in a sharp business suit stands confidently on a TED Talk stage, delivering an engaging lecture on quantum physics. The audience is filled with attentive dogs wearing glasses, reacting thoughtfully to the presentation. The video features dramatic camera zooms that highlight the cat speaker’s expressions and the intrigued faces of the canine audience, maintaining the setting and characters without altering the scene."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "enum_dependencies": {
          "duration": {
            "8": [
              "360p",
              "540p",
              "720p"
            ]
          }
        },
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах. 8 сек не поддерживается для разрешения 1080p.",
        "enum": [
          5,
          8
        ],
        "default": 5
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "vidu-v2.0-i2v",
    "name": "Vidu v2.0 I2V",
    "endpoint": "vidu-v2.0-i2v",
    "family": "vidu-v2",
    "imageField": "images_list",
    "lastImageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "A baby dragon wearing a tiny cape attempts to fly, wobbling uncertainly in the air with playful flaps of its wings, set against a bright and cheerful background. Light, upbeat music plays throughout, capturing the dragon's joyful effort. The video ends with the baby dragon gently crashing in a cute and harmless tumble, smiling and unfazed."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео. Поддерживаются 16:9 для 360p/720p, 1:1 для 1080p.",
        "enum": [
          "16:9",
          "1:1"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "360p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах.",
        "enum": [
          4
        ],
        "default": 4
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q1-reference",
    "name": "Vidu Q1 Reference",
    "endpoint": "vidu-q1-reference",
    "family": "vidu-q1",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 7,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий желаемое содержание видео.",
        "examples": [
          "Animate the character walking through the foggy forest at dawn, swinging the sword gracefully. Add cinematic camera pan and soft ambient lighting."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "1:1"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "minimax-hailuo-02-standard-i2v",
    "name": "Minimax Hailuo 02 Standard I2V",
    "endpoint": "minimax-hailuo-02-standard-i2v",
    "family": "minimax-2",
    "imageField": "image_url",
    "lastImageField": "end_image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Animate her looking out at the horizon as gentle waves crash, with her hair moving in the wind. Light, smooth motion, perfect for social clips."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          6,
          10
        ],
        "default": 6
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "512P",
          "768P"
        ],
        "default": "512P"
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-hailuo-02-pro-i2v",
    "name": "Minimax Hailuo 02 Pro I2V",
    "endpoint": "minimax-hailuo-02-pro-i2v",
    "family": "minimax-2",
    "imageField": "image_url",
    "lastImageField": "end_image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Transform this still image into a dramatic cinematic sequence: the scholar walks slowly through an ancient library where shelves tower endlessly into the shadows. The lantern’s flame flickers, casting moving patterns across scrolls and statues. Dust motes dance in golden light as the camera glides smoothly behind him, then pans upward to reveal an infinite expanse of glowing constellations painted across the ceiling that begin to shimmer and move as if alive."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          6
        ],
        "default": 6
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "1080P"
        ],
        "default": "1080P"
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "video-effects",
    "name": "Video Effects",
    "endpoint": "video-effects",
    "family": "effects",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "name": {
        "type": "string",
        "title": "Название эффекта",
        "name": "name",
        "description": "Тип эффекта для применения к видео.",
        "enum": [
          "Balloon Flyaway",
          "Blow Kiss",
          "Body Shake",
          "Break Glass",
          "Carry Me",
          "Cartoon Doll",
          "Cheek Kiss",
          "Child Memory",
          "Couple Arrival",
          "Fairy Me",
          "Fashion Stride",
          "Fisherman",
          "Flower Receive",
          "Flying",
          "French Kiss",
          "Gender Swap",
          "Golden Epoch",
          "Hair Swap",
          "Hugging",
          "Jiggle Up",
          "Kissing Pro",
          "Live Memory",
          "Love Drop",
          "Melt",
          "Minecraft",
          "Muscling",
          "Nap Me 360p",
          "Paperman",
          "Pilot",
          "Pinch",
          "Pixel Me",
          "Romantic Lift",
          "Sexy Me",
          "Slice Therapy",
          "Soul Depart",
          "Split Stance Human",
          "Squid Game",
          "Toy Me",
          "Walk Forward",
          "Zoom In Fast",
          "Zoom Out"
        ],
        "default": "Balloon Flyaway"
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "seedance-lite-i2v",
    "name": "Seedance Lite I2V",
    "endpoint": "seedance-lite-i2v",
    "family": "bytedance",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "A lively dog is running swiftly across a sunlit park, with green trees softly blurred in the background to emphasize quick motion, capturing the energetic and joyful movement during the day."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 3,
        "maxValue": 12,
        "step": 1
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Камера зафиксирована",
        "name": "camera_fixed",
        "description": "Зафиксировать ли положение камеры",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-pro-i2v",
    "name": "Seedance Pro I2V",
    "endpoint": "seedance-pro-i2v",
    "family": "bytedance",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "A slow cinematic pan following a knight riding through a dense, foggy forest at dawn, with dramatic lighting casting long shadows and soft rays filtering through the misty trees, emphasizing the mysterious and atmospheric mood."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 3,
        "maxValue": 12,
        "step": 1
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Камера зафиксирована",
        "name": "camera_fixed",
        "description": "Зафиксировать ли положение камеры",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "pixverse-v5-i2v",
    "name": "Pixverse v5 I2V",
    "endpoint": "pixverse-v5-i2v",
    "family": "pixverse-v5",
    "imageField": "images_list",
    "lastImageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "Animate the glowing stag slowly walking forward, fireflies drifting in the air, soft mist rolling across the clearing, camera gently circling around for a magical cinematic motion."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 8,
        "step": 3
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "seedance-lite-reference-video",
    "name": "Seedance Lite Reference Video",
    "endpoint": "seedance-lite-reference-to-video",
    "family": "bytedance",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 4,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "The businessman walks towards the sports car on the rooftop, places his hand on the hood, and gazes at the glowing skyline as the camera circles around dramatically, capturing the neon-lit atmosphere in ultra-realism."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 3,
        "maxValue": 12,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "wan2.1-reference-video",
    "name": "Wan2.1 Reference Video",
    "endpoint": "wan2.1-reference-video",
    "family": "wan2.1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 5,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "The motorcycle driving through the neon tunnel, reflections glowing on its body, dynamic tracking shot, cinematic product ad style."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "kling-v2.5-turbo-pro-i2v",
    "name": "Kling v2.5 Turbo Pro I2V",
    "endpoint": "kling-v2.5-turbo-pro-i2v",
    "family": "kling-v2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Animate subtle cloak movement, glowing energy pulsing from the staff, storm clouds rolling above, camera orbiting slightly to add depth and atmosphere."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "wan2.5-image-to-video",
    "name": "Wan2.5 Image To Video",
    "endpoint": "wan2.5-image-to-video",
    "family": "wan2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "Animate the scene: camera slowly dollies forward toward the robot, neon city lights begin to flicker, soft reflections shift across the dome glass, twilight deepens into night with subtle ambient glow. The robot raises its head and speaks in a clear futuristic voice: ‘WAN 2.5 is now available on the MuAPI app.’"
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.5-image-to-video-fast",
    "name": "Wan2.5 Image To Video Fast",
    "endpoint": "wan2.5-image-to-video-fast",
    "family": "wan2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "The camera slowly pulls back from the portrait, revealing the rooftop garden swaying in the breeze, clouds drifting across the orange-pink sky. The city lights begin to flicker on in the distance as the sun sets. She gazes at the horizon and softly says: “Every ending feels like the start of something new.” Natural ambient sounds of wind and faint city life in the background."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "openai-sora-2-image-to-video",
    "name": "Openai Sora 2 Image To Video",
    "endpoint": "openai-sora-2-image-to-video",
    "family": "sora",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "Camera pans along the platform as the bullet train doors open, passengers step forward with rolling suitcases. Footsteps and soft chatter fill the air. A female announcer says: ‘Train number 2245 to Tokyo is now departing from platform 3.’ Wheels screech lightly as the train starts moving."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          4,
          8,
          12,
          16,
          20
        ],
        "default": 8
      },
      "remove_watermark": {
        "type": "boolean",
        "title": "Убрать водяной знак",
        "name": "remove_watermark",
        "description": "При включении удаляет водяные знаки из сгенерированного видео.",
        "default": true
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "ovi-image-to-video",
    "name": "Ovi Image To Video",
    "endpoint": "ovi-image-to-video",
    "family": "ovi",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Camera: static medium shot. The scientist speaks: <S>Мы обнаружили жизнь за пределами Земли.<E> <AUDCAP>Тихий электронный гул, отдалённые звуки приборов<ENDAUDCAP>"
        ]
      }
    },
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "openai-sora-2-pro-image-to-video",
    "name": "Openai Sora 2 Pro Image To Video",
    "endpoint": "openai-sora-2-pro-image-to-video",
    "family": "sora",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "Scene: Submerged coral clearing, soft light filtering from above.\nCharacters: Tiny jellyfish with monocle and top hat, hosting tea for small seahorses.\nAction: Jellyfish floats and pours tea → bubbles rise slowly; seahorses sip → tiny octopus clumsily serves cake.\nCamera: Wide underwater → tracking floating jellyfish → macro on bubbles.\nLook & Lighting: Aqua-blue palette; subtle caustics on sand; shimmering reflections on water surfaces.\nMotion/Physics: Water currents gently sway characters; bubbles rise naturally; floating cakes wobble lightly.\nAudio: Bubbling water + faint harp melody; line: “Tea, my dear friends, before it drifts away.”"
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах.",
        "enum": [
          4,
          8,
          12,
          16,
          20
        ],
        "default": 8
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "remove_watermark": {
        "type": "boolean",
        "title": "Убрать водяной знак",
        "name": "remove_watermark",
        "description": "При включении удаляет водяные знаки из сгенерированного видео.",
        "default": true
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "leonardoai-motion-2.0",
    "name": "Leonardoai Motion 2.0",
    "endpoint": "leonardoai-motion-2.0",
    "family": "leonardoai",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "A diver swimming through a coral reef, colorful fish darting around, sunlight filtering through the water, slow-motion effect."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      }
    },
    "provider": "leonardoai",
    "provider_name": "Leonardo AI"
  },
  {
    "id": "veo3.1-image-to-video",
    "name": "Veo3.1 Image To Video",
    "endpoint": "veo3.1-image-to-video",
    "family": "veo3.1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Scene: Giant floating library orbiting in zero-gravity space.\nCharacters: Astronaut-librarian flipping glowing pages suspended midair.\nAction: Camera rotates 360° around drifting books → zooms through a floating page into a nebula outside window.\nCamera: Orbit + push-through transition.\nLighting: Cool cosmic ambient with warm page glows; rim lighting on suit.\nMotion: Slow rotational drift; pages react with fluid inertia.\nAudio: Ethereal synth pads + book rustle in vacuum hush.\nMood: Awe, wonder, intellectual calm.\nLine: “Wow veo3.1 launched in Muapiapp. Let's go!”"
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          8
        ],
        "default": 8
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "1080p"
        ],
        "default": "1080p"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3.1-fast-image-to-video",
    "name": "Veo3.1 Fast Image To Video",
    "endpoint": "veo3.1-fast-image-to-video",
    "family": "veo3.1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Scene: Lantern festival by the river at night.\nCharacters: Young boy with his grandmother.\nAction: Camera starts behind them → tracks one lantern downstream → lift to sky full of lights.\nLighting: Warm candlelight vs cool night reflections.\nAudio: Gentle music, water flow.\nDialogue:\nGrandmother: “Every lantern carries a wish.”\nBoy: “Then mine’s for you to stay forever.”\nGrandmother (smiling): “I’ll be right there, glowing among them.”"
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          8
        ],
        "default": 8
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "1080p"
        ],
        "default": "1080p"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3.1-lite-image-to-video",
    "name": "Veo3.1 Lite Image To Video",
    "endpoint": "veo3.1-lite-image-to-video",
    "family": "veo3.1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          8
        ],
        "default": 8
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "1080p"
        ],
        "default": "1080p"
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "veo3.1-reference-to-video",
    "name": "Veo3.1 Reference To Video",
    "endpoint": "veo3.1-reference-to-video",
    "family": "veo3.1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 3,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "A small robotic fox exploring a sun-drenched enchanted forest. The fox hops across a sparkling stream, pauses on mossy rocks, and looks curiously at glowing fireflies. Cinematic camera pans follow the fox from behind, then orbit slightly to reveal sunbeams filtering through the canopy. Warm dappled lighting with volumetric light rays and soft particle effects. Gentle ambient forest sounds and faint magical chimes. Dialogue: ‘Everything shines differently under the forest light…’"
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          8
        ],
        "default": 8
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио.",
        "default": true
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "seedance-pro-i2v-fast",
    "name": "Seedance Pro I2V Fast",
    "endpoint": "seedance-pro-i2v-fast",
    "family": "bytedance",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "The cyberpunk samurai turns slowly toward the camera, raindrops gliding off his glowing armor, neon lights reflecting on wet metal, camera pans around him in a slow 360°, subtle lightning flashes illuminate the skyline."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 2,
        "maxValue": 12,
        "step": 1
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Камера зафиксирована",
        "name": "camera_fixed",
        "description": "Зафиксировать ли положение камеры",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "ltx-2-pro-image-to-video",
    "name": "Ltx 2 Pro Image To Video",
    "endpoint": "ltx-2-pro-image-to-video",
    "family": "ltx",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "An ancient stone portal deep in an enchanted forest, glowing runes, beams of sunlight breaking through the canopy, cinematic tracking shot, warm colour grading."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          6,
          8,
          10
        ],
        "default": 6
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио.",
        "default": true
      }
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "ltx-2-fast-image-to-video",
    "name": "Ltx 2 Fast Image To Video",
    "endpoint": "ltx-2-fast-image-to-video",
    "family": "ltx",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Image of two explorers standing atop a dune. Now the viewpoint shifts: camera slowly dollies backward while sun rises behind them, sand drifts around feet, warm golden light, soft wind in audio."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          6,
          8,
          10,
          12,
          14,
          16,
          18,
          20
        ],
        "default": 6
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио.",
        "default": true
      }
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "vidu-q2-reference",
    "name": "Vidu Q2 Reference",
    "endpoint": "vidu-q2-reference",
    "family": "vidu-q2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 7,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "The female explorer walks slowly across the alien terrain, crystals glimmering around her. The camera glides beside her as light from twin suns scatters across her reflective suit. Wind stirs the mist as she looks up toward the horizon, where a colossal planet looms above — evoking awe and wonder."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 2,
        "maxValue": 8,
        "step": 1
      },
      "movement_amplitude": {
        "type": "string",
        "title": "Амплитуда движения",
        "name": "movement_amplitude",
        "description": "Амплитуда движения объектов в кадре.",
        "enum": [
          "auto",
          "small",
          "medium",
          "large"
        ],
        "default": "auto"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q2-turbo-start-end-video",
    "name": "Vidu Q2 Turbo Start End Video",
    "endpoint": "vidu-q2-turbo-start-end-video",
    "family": "vidu-q2",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "The camera begins behind the traveler standing amid the misty ancient ruins. Leaves swirl in the air as golden light flickers. A surge of energy surrounds the traveler — ruins start to dissolve into bright particles. The environment morphs into a neon-lit futuristic city as the traveler continues walking forward, entering the new world."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 2,
        "maxValue": 8,
        "step": 1
      },
      "bgm": {
        "type": "boolean",
        "title": "Фоновая музыка",
        "name": "bgm",
        "description": "Фоновая музыка для генерации результата.",
        "default": true
      },
      "movement_amplitude": {
        "type": "string",
        "title": "Амплитуда движения",
        "name": "movement_amplitude",
        "description": "Амплитуда движения объектов в кадре.",
        "enum": [
          "auto",
          "small",
          "medium",
          "large"
        ],
        "default": "auto"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q2-pro-start-end-video",
    "name": "Vidu Q2 Pro Start End Video",
    "endpoint": "vidu-q2-pro-start-end-video",
    "family": "vidu-q2",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "Camera begins behind the cabin as snowflakes drift through pale dawn light. Warm sunlight pierces the mist — the snow slowly melts, trees turn green, and the ground blossoms with flowers. The air brightens into a spring sunrise as birds take flight over the cabin, symbolizing rebirth and renewal."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 2,
        "maxValue": 8,
        "step": 1
      },
      "bgm": {
        "type": "boolean",
        "title": "Фоновая музыка",
        "name": "bgm",
        "description": "Фоновая музыка для генерации результата.",
        "default": true
      },
      "movement_amplitude": {
        "type": "string",
        "title": "Амплитуда движения",
        "name": "movement_amplitude",
        "description": "Амплитуда движения объектов в кадре.",
        "enum": [
          "auto",
          "small",
          "medium",
          "large"
        ],
        "default": "auto"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "minimax-hailuo-2.3-pro-i2v",
    "name": "Minimax Hailuo 2.3 Pro I2V",
    "endpoint": "minimax-hailuo-2.3-pro-i2v",
    "family": "minimax-2.3",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "The camera slowly moves around the woman as the wind gently sways the tall grass. Her hair flows with the breeze, sunlight flickering through passing clouds. The atmosphere feels calm, nostalgic, and cinematic."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "1080p"
        ],
        "default": "1080p"
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-hailuo-2.3-standard-i2v",
    "name": "Minimax Hailuo 2.3 Standard I2V",
    "endpoint": "minimax-hailuo-2.3-standard-i2v",
    "family": "minimax-2.3",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Camera slowly moves forward over the lake surface as light wind ripples the water. The clouds drift across the mountains, and sunlight flickers on the waves, creating a peaceful cinematic mood."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          6,
          10
        ],
        "default": 6
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-hailuo-2.3-fast",
    "name": "Minimax Hailuo 2.3 Fast",
    "endpoint": "minimax-hailuo-2.3-fast",
    "family": "minimax-2.3",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "The camera gently moves around the woman as snowflakes drift through the air. Her expression shifts slightly as the wind brushes her hair. The background lights shimmer softly, creating a calm cinematic mood."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          6,
          10
        ],
        "default": 6
      },
      "go_fast": {
        "type": "boolean",
        "title": "Быстрый режим",
        "name": "go_fast",
        "description": "Приоритет более быстрой скорости генерации видео с умеренным компромиссом в визуальном качестве.",
        "default": true
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "kling-v2.5-turbo-std-i2v",
    "name": "Kling v2.5 Turbo Std I2V",
    "endpoint": "kling-v2.5-turbo-std-i2v",
    "family": "kling-v2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Animate subtle cloak movement, glowing energy pulsing from the staff, storm clouds rolling above, camera orbiting slightly to add depth and atmosphere."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 10,
        "step": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "grok-imagine-image-to-video",
    "name": "Grok Imagine Image To Video",
    "endpoint": "grok-imagine-image-to-video",
    "family": "grok",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 7,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Camera glides through vines toward temple entrance, mist disperses as sunlight pierces canopy, birds fly off, subtle dust motes in the air, adventure-style cinematic score."
        ]
      },
      "mode": {
        "type": "string",
        "title": "Режим",
        "name": "mode",
        "description": "Примечание: при генерации видео с внешними изображениями режим Spicy не поддерживается и будет автоматически переключён на Normal.",
        "enum": [
          "fun",
          "normal",
          "spicy"
        ],
        "default": "normal"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах.",
        "enum": [
          6,
          10,
          15
        ],
        "default": 6
      }
    },
    "provider": "grok",
    "provider_name": "xAI"
  },
  {
    "id": "kling-o1-image-to-video",
    "name": "Kling O1 Image To Video",
    "endpoint": "kling-o1-image-to-video",
    "family": "kling-o1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "A gentle dolly forward toward the cabin as morning light intensifies, mist lifts in streaks, subtle water ripples, birds take flight, warm golden hour soundscape."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          5,
          10
        ],
        "default": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-o1-reference-to-video",
    "name": "Kling O1 Reference To Video",
    "endpoint": "kling-o1-reference-to-video",
    "family": "kling-o1",
    "imageField": "images_list",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 7,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "Cinematic orbit camera move around the pilot in a futuristic hangar, holographic lights flickering, armor reflections shifting, soft mechanical ambience."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 3,
        "maxValue": 10,
        "step": 1
      },
      "keep_original_sound": {
        "type": "boolean",
        "title": "Сохранить оригинальный звук",
        "name": "keep_original_sound",
        "description": "Выберите, сохранять ли оригинальный звук видео через этот параметр.",
        "default": true
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v2.6-pro-i2v",
    "name": "Kling v2.6 Pro I2V",
    "endpoint": "kling-v2.6-pro-i2v",
    "family": "kling-v2.6",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "parameterNotice": "This integration supports 5 or 10 seconds.",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "Slow cinematic orbit around the floating obsidian throne, holographic runes pulsing gently, drifting quartz shards rotating with soft parallax, molten crystal canyon glowing brighter with movement, and subtle particle storms rising toward the cosmic vortex; maintain original lighting, style, and atmosphere."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах.",
        "enum": [
          5,
          10
        ],
        "default": 5
      },
      "sound": {
        "type": "boolean",
        "title": "Звук",
        "name": "sound",
        "description": "Генерировать ли звук одновременно с видео.",
        "default": true
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "pixverse-v5.5-i2v",
    "name": "Pixverse v5.5 I2V",
    "endpoint": "pixverse-v5.5-i2v",
    "family": "pixverse-v5.5",
    "imageField": "images_list",
    "lastImageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "Slow upward camera glide along the staircase, lanterns gently swaying, stardust drifting in soft spirals, nebula clouds subtly shifting, and the cosmic gateway pulsing with rhythmic light; maintain original colors, composition, and celestial atmosphere with smooth cinematic motion."
        ]
      },
      "style": {
        "type": "string",
        "title": "Стиль",
        "name": "style",
        "description": "Стиль сгенерированного видео.",
        "enum": [
          "none",
          "anime",
          "3d_animation",
          "clay",
          "comic",
          "cyberpunk"
        ],
        "default": "none"
      },
      "thinking": {
        "type": "string",
        "title": "Мышление",
        "name": "thinking",
        "description": "Режим оптимизации промпта для решения модели.",
        "enum": [
          "auto",
          "enabled",
          "disabled"
        ],
        "default": "auto"
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "enum_dependencies": {
          "duration": {
            "10": [
              "360p",
              "540p",
              "720p"
            ]
          }
        },
        "default": "360p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах.",
        "enum": [
          5,
          8,
          10
        ],
        "default": 5
      },
      "audio": {
        "type": "boolean",
        "title": "Аудио",
        "name": "audio",
        "description": "Включить генерацию аудио (фоновая музыка, звуковые эффекты, диалоги).",
        "default": false
      },
      "multi_clip": {
        "type": "boolean",
        "title": "Несколько клипов",
        "name": "multi_clip",
        "description": "Включить генерацию нескольких клипов с динамической сменой камеры.",
        "default": false
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "wan2.2-spicy-image-to-video",
    "name": "Wan2.2 Spicy Image To Video",
    "endpoint": "wan2.2-spicy-image-to-video",
    "family": "wan2.2",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "Animate the scene with intense fiery motion—lava cracking and flowing down the phoenix wings, embers drifting upward, volcanic smoke swirling dramatically, floating stones shifting with parallax depth; camera performs a slow power-shot push-in toward the phoenix statue while preserving the glowing, high-contrast cinematic atmosphere."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "720p"
        ],
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          5,
          8
        ],
        "default": 5
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.6-image-to-video",
    "name": "Wan2.6 Image To Video",
    "endpoint": "wan2.6-image-to-video",
    "family": "wan2.6",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "Add slow cinematic camera movement circling the floating lighthouse, orbiting symbol rings rotating gently with parallax depth, ocean waves shimmering and moving naturally, clouds drifting and lightning flashing subtly in the distance, and the lighthouse beam pulsing softly while preserving the original lighting and dramatic mood."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          5,
          10,
          15
        ],
        "default": 5
      },
      "shot_type": {
        "type": "string",
        "title": "Тип кадра",
        "name": "shot_type",
        "description": "Тип кадра для генерации.",
        "enum": [
          "single",
          "multi"
        ],
        "default": "single"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "kling-o1-standard-image-to-video",
    "name": "Kling O1 Standard Image To Video",
    "endpoint": "kling-o1-standard-image-to-video",
    "family": "kling-o1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Add gentle camera drift forward with slight parallax depth, waterfalls flowing softly, clouds slowly moving beneath the island, birds gliding naturally through the scene, and sunlight shifting subtly while maintaining the calm cinematic mood and original lighting."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          5,
          10
        ],
        "default": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-o1-standard-reference-to-video",
    "name": "Kling O1 Standard Reference To Video",
    "endpoint": "kling-o1-standard-reference-to-video",
    "family": "kling-o1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 7,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт для генерации видео",
        "examples": [
          "Blend the reference scenes into a single cinematic shot with gentle forward camera movement, soft parallax depth between the bridge and forest valley, fog drifting slowly above the river, leaves swaying lightly in the breeze, and sunlight shifting subtly while maintaining a calm, realistic atmosphere."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          5,
          10
        ],
        "default": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "seedance-v1.5-pro-i2v",
    "name": "Seedance v1.5 Pro I2V",
    "endpoint": "seedance-v1.5-pro-i2v",
    "family": "seedance-v1.5-pro",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "parameterNotice": "Aspect ratio is inherited from the input image.",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Add a slow cinematic orbit around the floating archive, gentle parallax between cloud layers and spires, flowing data streams pulsing softly, fog drifting naturally, and sky colors deepening slightly while preserving the original lighting, scale, and cinematic mood."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 4,
        "maxValue": 12,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио",
        "default": true
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Камера зафиксирована",
        "name": "camera_fixed",
        "description": "Зафиксировать ли положение камеры",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-v1.5-pro-i2v-fast",
    "name": "Seedance v1.5 Pro I2V Fast",
    "endpoint": "seedance-v1.5-pro-i2v-fast",
    "family": "seedance-v1.5-pro",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "parameterNotice": "Aspect ratio is inherited from the input image.",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Add gentle forward camera movement toward the floating observatory, subtle parallax between clouds and structure, soft cloud drift below, interior window lights glowing steadily, and sunlight rays shifting slightly while keeping motion smooth, minimal, and fast."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "default": "16:9"
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 4,
        "maxValue": 12,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио",
        "default": true
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Камера зафиксирована",
        "name": "camera_fixed",
        "description": "Зафиксировать ли положение камеры",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "ltx-2-19b-image-to-video",
    "name": "Ltx 2 19b Image To Video",
    "endpoint": "ltx-2-19b-image-to-video",
    "family": "ltx",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Animate the scene so the camera slowly pushes toward the billboard, the text characters on the woman’s face subtly scrolling and re-forming, rain falling continuously, reflections on the wet road shifting as car headlights flicker, pedestrians making small natural movements while the city lights pulse softly; maintain realistic motion, urban mood, and cinematic pacing."
        ]
      },
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение сгенерированного видео.",
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 5,
        "maxValue": 20,
        "step": 1
      }
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "kling-v3.0-omni-standard-image-to-video",
    "name": "Kling v3.0 Omni Standard Image To Video",
    "endpoint": "kling-v3.0-omni-standard-image-to-video",
    "family": "kling-v3.0-omni",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 4,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "During an intense basketball game, gravity suddenly breaks apart. Players begin running sideways across the arena walls while the court folds upward into impossible angles. The basketball floats briefly before being slammed through the hoop as the camera rotates dynamically with the shifting gravity."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "9:16",
          "16:9",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах.",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "При включении генерируется нативное аудио вместе с видео (увеличивает стоимость).",
        "default": false
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-omni-pro-image-to-video",
    "name": "Kling v3.0 Omni Pro Image To Video",
    "endpoint": "kling-v3.0-omni-pro-image-to-video",
    "family": "kling-v3.0-omni",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 4,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "A high-speed train races forward nonstop while the environment transforms every few seconds—from snowy mountains to neon cyberpunk city to volcanic wasteland. Sparks fly from the tracks as the camera stays tightly locked alongside the speeding train during each violent world transition."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "9:16",
          "16:9",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах.",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "При включении генерируется нативное аудио вместе с видео (увеличивает стоимость).",
        "default": false
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-omni-4k-image-to-video",
    "name": "Kling v3.0 Omni 4K Image To Video",
    "endpoint": "kling-v3.0-omni-4k-image-to-video",
    "family": "kling-v3.0-omni",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "maxImages": 4,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "A cat in @image1 wakes up and walks towards the camera in slow motion."
        ]
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "9:16",
          "16:9",
          "1:1"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах.",
        "enum": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "default": 5
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-pro-image-to-video",
    "name": "Kling v3.0 Pro Image To Video",
    "endpoint": "kling-v3.0-pro-image-to-video",
    "family": "kling-v3.0",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "The camera begins on the railway station platform beside a stationary train as morning sunlight filters through the roof. Passengers make small natural movements while the train doors are open. The camera moves forward and enters the train, transitioning smoothly into a window-seat point of view. As the doors close, the train starts moving. The view shifts fully to the window, showing the city passing by outside with gentle motion blur, buildings and trees sliding past. Sunlight reflects on the glass, faint interior reflections appear, and the ride feels calm and realistic with smooth, cinematic motion."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио для видео",
        "default": true
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-standard-image-to-video",
    "name": "Kling v3.0 Standard Image To Video",
    "endpoint": "kling-v3.0-standard-image-to-video",
    "family": "kling-v3.0",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "The hamster begins on the left side of the tabletop and quickly runs across the surface toward the right. Its tiny legs move rapidly, body bouncing slightly with natural motion. As it runs, the sunflower seeds blur slightly beneath it. The hamster slows near the bowl, stops, and stands upright to grab a seed. The camera remains fixed, depth of field stays shallow, and lighting remains soft and consistent for a realistic, cute result."
        ]
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио для видео",
        "default": true
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "seedance-v2.0-i2v",
    "name": "Seedance 2.0 I2V",
    "endpoint": "seedance-v2.0-i2v",
    "family": "seedance-v2.0",
    "imageField": "images_list",
    "hasPrompt": true,
    "maxImages": 5,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт, задающий генерацию видео из изображения."
      },
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах",
        "enum": [
          5,
          10,
          15
        ],
        "default": 5
      },
      "quality": {
        "type": "string",
        "title": "Качество",
        "name": "quality",
        "description": "Качество сгенерированного видео.",
        "enum": [
          "high",
          "basic"
        ],
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  }
,
  {
    "id": "seedance-2-i2v",
    "name": "Seedance 2 I2V",
    "endpoint": "seedance-v2.0-i2v",
    "family": "sd-v2.0",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The lightbulb suddenly rockets across the room like a missile, smashing through curtains while water spins violently inside. The fish darts through swirling currents as the bulb ricochets off walls and finally bursts into floating droplets."
        ],
        "type": "string",
        "title": "Промпт",
        "description": "Текстовый промпт, описывающий анимацию видео. Ссылайтесь на загруженные изображения через @image1, @image2, … @imageN (нумерация с 1, по порядку в images_list). Для вымышленного персонажа используйте @character:<id> (request_id из завершённой генерации Seedance 2 Character) — персонажи автоматически добавляются в images_list. Поддерживается несколько персонажей. Пример: «@character:ab539e5f идёт по саду» или «Кот на @image1 встречает @character:ab539e5f»."
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-i2v.jpg"
        ],
        "description": "Загрузите до 9 URL изображений. Ссылайтесь на них в промпте через @image1, @image2, … @image9. Соотношение сторон референсного изображения имеет приоритет над параметром aspect_ratio.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "type": "string",
        "default": "16:9"
      },
      "duration": {
        "enum": [
          5,
          10,
          15
        ],
        "title": "Длительность",
        "type": "integer",
        "default": 5
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Качество",
        "type": "string",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "ltx-2.3-image-to-video",
    "name": "LTX 2.3",
    "endpoint": "ltx-2.3-image-to-video",
    "family": "ltx2.3",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The snail accelerates unexpectedly, smashing through trees while the miniature city erupts into chaos. Flying cars zip around the shell trying to stabilize the city as neon signs flicker and sparks fly from collapsing towers."
        ],
        "description": "Текстовый промпт, описывающий видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/ltx-2.3-image-to-video.png"
        ],
        "description": "URL входного изображения.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 5,
        "maxValue": 20,
        "step": 1
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      },
      "seed": {
        "title": "Сид",
        "name": "seed",
        "type": "int",
        "description": "Seed. -1 для случайного значения.",
        "default": -1
      }
    },
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "openai-sora-2-standard-image-to-video",
    "name": "Sora 2 Standard",
    "endpoint": "openai-sora-2-standard-image-to-video",
    "family": "sora",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание видео, которое вы хотите сгенерировать",
        "examples": [
          "The astronaut suddenly spins the spoon rapidly and the tea explodes into a swirling galaxy vortex. Planets shoot out of the cup like comets while the teacup begins rotating violently through space, stars stretching into light trails as the camera whips around the scene."
        ]
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/openai-sora-2-standard-image-to-video.png"
        ],
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url",
        "description": "Входное изображение для анимации",
        "format": "uri",
        "field": "image"
      },
      "mode": {
        "enum": [
          "budget",
          "stable"
        ],
        "type": "string",
        "title": "Режим",
        "name": "mode",
        "description": "Режим генерации (budget — дешевле, stable — дороже)",
        "default": "stable"
      },
      "seconds": {
        "enum": [
          "10",
          "15"
        ],
        "enum_dependencies": {
          "mode": {
            "stable": [
              "10"
            ],
            "budget": [
              "10",
              "15"
            ]
          }
        },
        "type": "string",
        "title": "Секунды",
        "name": "seconds",
        "description": "Длительность видео в секундах",
        "default": "10"
      },
      "size": {
        "enum": [
          "720x1280",
          "1280x720"
        ],
        "type": "string",
        "title": "Размер",
        "name": "size",
        "description": "Размеры видео (Ширина x Высота)",
        "default": "720x1280"
      }
    },
    "provider": "openai",
    "provider_name": "OpenAI"
  },
  {
    "id": "seedance-2-new-first-last",
    "name": "Seedance 2 New First Last",
    "endpoint": "seedance-2.0-new-first-last",
    "family": "sd-v2.0",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание, задающее содержание видео между кадрами.",
        "examples": [
          "A smooth cinematic transition between two scenes."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 изображение = опорный первый кадр; 2 изображения = первый и последний кадр.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображения кадров",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "type": "string",
        "title": "Качество",
        "name": "quality",
        "description": "high = стандартная модель; basic = быстрая модель.",
        "default": "basic"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах (4–15).",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-omni-reference",
    "name": "Seedance 2 Omni Reference",
    "endpoint": "seedance-2.0-omni-reference",
    "family": "sd-v2.0",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "@image1 is the main character reference. A person walking on the beach at sunset, cinematic lighting"
        ],
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Описание видео. Используйте @image1…@image9 для изображений, @video1…@video3 для видео, @audio1…@audio3 для аудио. Для использования чарактер-шита ссылайтесь на него через @character:<request_id> (из завершённой генерации Seedance 2 Character). Для обученного персонажа Omni Reference используйте @omni-character:<character_id>, где character_id — значение, возвращённое Omni Reference Train Character (например, char_1775422630065_4vbana). Оба метода можно комбинировать в одном промпте. Поддерживается несколько персонажей. Пример: «@omni-character:char_1775422630065_4vbana идёт по неоновому ночному городу»."
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-omni-reference.png"
        ],
        "description": "До 9 URL референсных изображений (JPEG/PNG/WebP). Каждое N-е изображение соответствует @imageN в промпте.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "video_files": {
        "examples": [],
        "description": "До 3 URL референсных видеоклипов (MP4, максимум 15 сек каждый). Каждый N-й видеоклип соответствует @videoN в промпте.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное видео",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [],
        "description": "До 3 URL референсных аудиоклипов (MP3/WAV, максимум 15 сек суммарно). Каждый N-й аудиофайл соответствует @audioN в промпте.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное аудио",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Соотношение сторон итогового видео."
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Качество",
        "name": "quality",
        "type": "string",
        "default": "high",
        "description": "Качество генерации. «high» использует стандартную модель ($0.30/сек вывода + $0.09/сек за секунду входного видео). «basic» использует быструю модель (~в 2 раза быстрее, $0.21/сек вывода + $0.063/сек за секунду входного видео). Референсные видео добавляют наценку 30% от их суммарной длительности."
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах (4–15).",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "pixverse-v6-i2v",
    "name": "Pixverse v6 I2V",
    "endpoint": "pixverse-v6-i2v",
    "family": "pixverse-v6",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание желаемого движения и содержания видео.",
        "examples": [
          "Cracks spread across the statue as it suddenly comes to life. Stone pieces fall off while glowing energy emerges from inside. The statue pulls itself free from the sand and takes a heavy step forward, shaking the ground as dust rises into the air."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/pixverse-v6-i2v.mp4"
        ],
        "description": "Загрузите или укажите входное изображение для анимации.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылка на изображение",
        "name": "images_list",
        "maxItems": 1
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение итогового видео.",
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 1,
        "maxValue": 15,
        "step": 1
      },
      "thinking_type": {
        "enum": [
          "auto",
          "enabled",
          "disabled"
        ],
        "type": "string",
        "title": "Оптимизация промпта",
        "name": "thinking_type",
        "description": "Управляет улучшением промпта. «enabled» переписывает промпт, «disabled» использует его как есть, «auto» отдаёт решение модели.",
        "default": "auto"
      },
      "generate_audio_switch": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio_switch",
        "description": "Включить AI-сгенерированное аудио для видео.",
        "default": false
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "pixverse-v6-transition",
    "name": "Pixverse v6 Transition",
    "endpoint": "pixverse-v6-transition",
    "family": "pixverse-v6",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "endImageRequired": true,
    "hasPrompt": true,
    "promptRequired": true,
    "aspectRatioMode": "inherited",
    "parameterNotice": "Start and end frames are required. Aspect ratio is determined by the input frames.",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание перехода или содержания видео.",
        "examples": [
          "Water suddenly bursts through the walls and windows, flooding the room violently. Furniture lifts and begins floating as currents swirl. Fish appear and swim through the space while light rays ripple through the water. The camera drifts with the flow."
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Начальное изображение",
        "name": "image_url",
        "description": "Загрузите начальное изображение.",
        "field": "image",
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/pixverse-v6-transition.jpg"
        ]
      },
      "last_image": {
        "type": "string",
        "title": "Финальное изображение",
        "name": "last_image",
        "description": "Загрузите конечное изображение.",
        "field": "image",
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/pixverse-v6-transition-1.jpg"
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16",
          "2:3",
          "3:2",
          "21:9"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Ориентация итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Качество вывода видео.",
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Общая длительность видео.",
        "default": 5,
        "minValue": 1,
        "maxValue": 15,
        "step": 1
      },
      "thinking_type": {
        "type": "boolean",
        "title": "Расширенное мышление",
        "name": "thinking_type",
        "description": "Включить расширенное «размышление» для более сложных переходов.",
        "default": false
      },
      "style": {
        "enum": [
          "anime",
          "3d_animation",
          "clay",
          "comic",
          "cyberpunk"
        ],
        "type": "string",
        "title": "Стиль",
        "name": "style",
        "description": "Визуальный стиль генерации."
      },
      "negative_prompt": {
        "type": "string",
        "title": "Негативный промпт",
        "name": "negative_prompt",
        "description": "Чего избегать при генерации."
      },
      "generate_audio_switch": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio_switch",
        "description": "Генерировать ли фоновое аудио для видео.",
        "default": false
      }
    },
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "wan2.7-image-to-video",
    "name": "Wan2.7",
    "endpoint": "wan2.7-image-to-video",
    "family": "wan2.7",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [],
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание"
      },
      "image_url": {
        "examples": [],
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url",
        "description": "Изображение первого кадра",
        "field": "image"
      },
      "last_image": {
        "examples": [],
        "type": "string",
        "title": "Последнее изображение",
        "name": "last_image",
        "description": "Изображение последнего кадра (опционально)",
        "field": "image"
      },
      "audio_url": {
        "examples": [],
        "type": "string",
        "title": "Ссылка на аудио",
        "name": "audio_url",
        "description": "Аудиофайл для управления генерацией",
        "field": "audio"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность видео в секундах (2–15).",
        "default": 5,
        "minValue": 2,
        "maxValue": 15,
        "step": 1
      },
      "negative_prompt": {
        "examples": [],
        "type": "string",
        "title": "Негативный промпт",
        "name": "negative_prompt",
        "description": "Что не генерировать"
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.7-reference-to-video",
    "name": "Wan2.7 Reference to Video",
    "endpoint": "wan2.7-reference-to-video",
    "family": "wan2.7",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание желаемого движения и сцены.",
        "examples": [
          "A person walking in the rain..."
        ]
      },
      "images_list": {
        "examples": [],
        "description": "Массив URL референсных изображений (jpg/png). Максимум 4 элемента.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 4
      },
      "videos_list": {
        "examples": [],
        "description": "Массив URL референсных видео (mp4/mov). Максимум 4 элемента.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные видео",
        "name": "videos_list",
        "maxItems": 4
      },
      "image_url": {
        "examples": [],
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url",
        "description": "URL одного референсного изображения.",
        "field": "image"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон сгенерированного видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Итоговое разрешение",
        "default": "720p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность видео в секундах (2–10).",
        "default": 5,
        "minValue": 2,
        "maxValue": 10
      },
      "negative_prompt": {
        "type": "string",
        "title": "Негативный промпт",
        "name": "negative_prompt",
        "description": "Что не генерировать",
        "examples": [
          "blurry, low quality, distorted"
        ]
      }
    },
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "seedance-2-i2v-480p",
    "name": "Seedance 2 I2V 480P",
    "endpoint": "seedance-2.0-i2v-480p",
    "family": "sd-v2.0",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The lightbulb suddenly rockets across the room like a missile, smashing through curtains while water spins violently inside. The fish darts through swirling currents as the bulb ricochets off walls and finally bursts into floating droplets."
        ],
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий анимацию видео. Ссылайтесь на загруженные изображения через @image1, @image2, … @imageN (нумерация с 1, по порядку в images_list). Для вымышленного персонажа используйте @character:<id> (request_id из завершённой генерации Seedance 2 Character) — персонажи автоматически добавляются в images_list. Поддерживается несколько персонажей."
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-i2v.jpg"
        ],
        "description": "Загрузите до 9 URL изображений. Ссылайтесь на них в промпте через @image1, @image2, … @image9.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Качество",
        "name": "quality",
        "type": "string",
        "description": "high=$0.15/сек, basic=$0.12/сек",
        "default": "basic"
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-omni-reference-480p",
    "name": "Seedance 2 Omni Reference 480P",
    "endpoint": "seedance-2.0-omni-reference-480p",
    "family": "sd-v2.0",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "@image1 is the main character reference. A person walking on the beach at sunset, cinematic lighting"
        ],
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Описание видео. Используйте @image1…@image9 для изображений, @video1…@video3 для видео, @audio1…@audio3 для аудио. Для вымышленного персонажа используйте @character:<id> (request_id из завершённой генерации Seedance 2 Character) — персонажи автоматически добавляются в images_list. Поддерживается несколько персонажей."
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-omni-reference.png"
        ],
        "description": "До 9 URL референсных изображений (JPEG/PNG/WebP). Каждое N-е изображение соответствует @imageN в промпте.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "video_files": {
        "examples": [],
        "description": "До 3 URL референсных видеоклипов (MP4, максимум 15 сек каждый). Каждый N-й видеоклип соответствует @videoN в промпте.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное видео",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [],
        "description": "До 3 URL референсных аудиоклипов (MP3/WAV, максимум 15 сек суммарно). Каждый N-й аудиофайл соответствует @audioN в промпте.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное аудио",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Соотношение сторон итогового видео."
      },
      "quality": {
        "enum": [
          "high",
          "basic"
        ],
        "title": "Качество",
        "name": "quality",
        "type": "string",
        "default": "basic",
        "description": "Качество генерации. «high» использует стандартную модель ($0.24/сек вывода + $0.072/сек за секунду входного видео). «basic» использует быструю модель ($0.18/сек вывода + $0.054/сек за секунду входного видео). Референсные видео добавляют наценку 30% от их суммарной длительности."
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах (8–15).",
        "default": 8,
        "minValue": 8,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-image-to-video",
    "name": "Seedance 2",
    "endpoint": "seedance-2-image-to-video",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание, задающее анимацию видео. Используйте @character:<id>, чтобы сослаться на завершённую генерацию Seedance 2 Character.",
        "examples": [
          "The person walks forward with a smile."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 изображение используется как начальный кадр (режим first_last_frames). 2–9 изображений переключают в режим omni_reference — ссылайтесь на них в промпте через @image1, @image2 и т.д.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-image-to-video-fast",
    "name": "Seedance 2 Image to Video Fast",
    "endpoint": "seedance-2-image-to-video-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание, задающее анимацию видео. Используйте @character:<id>, чтобы сослаться на завершённую генерацию Seedance 2 Character.",
        "examples": [
          "The person walks forward with a smile."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 изображение используется как начальный кадр (режим first_last_frames). 2–9 изображений переключают в режим omni_reference — ссылайтесь на них в промпте через @image1, @image2 и т.д.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-first-last-frame",
    "name": "Seedance 2 First Last Frame",
    "endpoint": "seedance-2-first-last-frame",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание, задающее переход между кадрами.",
        "examples": [
          "Two people having a street interview, the interviewer holds a microphone."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 изображение = только первый кадр; 2 изображения = первый и последний кадр. Используйте соотношение сторон «adaptive», чтобы соответствовать геометрии референсного изображения.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображения кадров",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео. «adaptive» соответствует референсному изображению (рекомендуется); конкретные соотношения могут обрезать или дополнять кадр.",
        "default": "adaptive"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-first-last-frame-fast",
    "name": "Seedance 2 First Last Frame Fast",
    "endpoint": "seedance-2-first-last-frame-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "lastImageField": "images_list",
    "endImageRequired": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание, задающее переход между кадрами.",
        "examples": [
          "Two people having a street interview, the interviewer holds a microphone."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 изображение = только первый кадр; 2 изображения = первый и последний кадр. Используйте соотношение сторон «adaptive», чтобы соответствовать геометрии референсного изображения.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображения кадров",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео. «adaptive» соответствует референсному изображению (рекомендуется); конкретные соотношения могут обрезать или дополнять кадр.",
        "default": "adaptive"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-omni-reference-no-video",
    "name": "Seedance 2 Omni Reference No Video",
    "endpoint": "seedance-2-omni-reference-no-video",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Описание видео. Используйте @image1…@image9 для ссылок на изображения и @audio1…@audio3 для аудио. Для использования чарактер-шита ссылайтесь на него через @character:<request_id> (из завершённой генерации Seedance 2 Character). Для обученного персонажа Omni Reference используйте @omni-character:<character_id>, где character_id — значение, возвращённое Omni Reference Train Character (например, char_1775422630065_4vbana). Оба метода можно комбинировать в одном промпте. Поддерживается несколько персонажей. Пример: «@omni-character:char_1775422630065_4vbana идёт по неоновому ночному городу».",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "До 9 URL референсных изображений (JPEG/PNG/WebP). Каждое N-е изображение соответствует @imageN в промпте.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "minItems": 1,
        "maxItems": 9
      },
      "audio_files": {
        "examples": [],
        "description": "До 3 референсных аудиофайлов (MP3/WAV, максимум 15 сек суммарно). Каждый N-й аудиофайл соответствует @audioN в промпте.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное аудио",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Соотношение сторон итогового видео."
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах (4–15).",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-omni-reference-no-video-fast",
    "name": "Seedance 2 Omni Reference No Video Fast",
    "endpoint": "seedance-2-omni-reference-no-video-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Описание видео. Используйте @image1…@image9 для ссылок на изображения и @audio1…@audio3 для аудио. Для использования чарактер-шита ссылайтесь на него через @character:<request_id> (из завершённой генерации Seedance 2 Character). Для обученного персонажа Omni Reference используйте @omni-character:<character_id>, где character_id — значение, возвращённое Omni Reference Train Character (например, char_1775422630065_4vbana). Оба метода можно комбинировать в одном промпте. Поддерживается несколько персонажей. Пример: «@omni-character:char_1775422630065_4vbana идёт по неоновому ночному городу».",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "До 9 URL референсных изображений (JPEG/PNG/WebP). Каждое N-е изображение соответствует @imageN в промпте.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "minItems": 1,
        "maxItems": 9
      },
      "audio_files": {
        "examples": [],
        "description": "До 3 референсных аудиофайлов (MP3/WAV, максимум 15 сек суммарно). Каждый N-й аудиофайл соответствует @audioN в промпте.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное аудио",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "default": "16:9",
        "description": "Соотношение сторон итогового видео."
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах (4–15).",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-image-to-video",
    "name": "Seedance 2 VIP",
    "endpoint": "seedance-2-vip-image-to-video",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание, задающее анимацию видео. Используйте @character:<id>, чтобы сослаться на завершённую генерацию Seedance 2 Character. Используйте @omni-character:<char_id> для обученного персонажа Kinovi.",
        "examples": [
          "The person walks forward with a smile."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 или 2 изображения используются как начальный кадр (и опционально конечный). Передайте 1 изображение для анимации от него, или 2 изображения для перехода от начала к концу.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-image-to-video-fast",
    "name": "Seedance 2 VIP Image to Video Fast",
    "endpoint": "seedance-2-vip-image-to-video-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание, задающее анимацию видео. Используйте @character:<id>, чтобы сослаться на завершённую генерацию Seedance 2 Character. Используйте @omni-character:<char_id> для обученного персонажа Kinovi.",
        "examples": [
          "The person walks forward with a smile."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 или 2 изображения используются как начальный кадр (и опционально конечный).",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-first-last-frame",
    "name": "Seedance 2 VIP First Last Frame",
    "endpoint": "seedance-2-vip-first-last-frame",
    "family": "sd-2",
    "imageField": "images_list",
    "lastImageField": "images_list",
    "endImageRequired": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание, задающее переход между кадрами.",
        "examples": [
          "Two people having a street interview, the interviewer holds a microphone."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 изображение = только первый кадр; 2 изображения = первый и последний кадр. Используйте соотношение сторон «adaptive», чтобы соответствовать геометрии референсного изображения.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображения кадров",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео. «adaptive» соответствует референсному изображению (рекомендуется); конкретные соотношения могут обрезать или дополнять кадр.",
        "default": "adaptive"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-first-last-frame-fast",
    "name": "Seedance 2 VIP First Last Frame Fast",
    "endpoint": "seedance-2-vip-first-last-frame-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "lastImageField": "images_list",
    "endImageRequired": true,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание, задающее переход между кадрами.",
        "examples": [
          "Two people having a street interview, the interviewer holds a microphone."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 изображение = только первый кадр; 2 изображения = первый и последний кадр. Используйте соотношение сторон «adaptive», чтобы соответствовать геометрии референсного изображения.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображения кадров",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео. «adaptive» соответствует референсному изображению (рекомендуется); конкретные соотношения могут обрезать или дополнять кадр.",
        "default": "adaptive"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-omni-reference",
    "name": "Seedance 2 VIP Omni Reference",
    "endpoint": "seedance-2-vip-omni-reference",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Описание видео. Используйте @image1…@image9 для изображений, @video1…@video3 для видео, @audio1…@audio3 для аудио. Используйте @character:<request_id> для чарактер-шита Seedance 2 или @omni-character:<char_id> для обученного персонажа Kinovi. Поддерживается несколько персонажей.",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "До 9 URL референсных изображений (JPEG/PNG/WebP). Каждое N-е изображение соответствует @imageN в промпте.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "video_files": {
        "examples": [],
        "description": "До 3 URL референсных видеоклипов (MP4, максимум 15 сек каждый). Каждый N-й видеоклип соответствует @videoN в промпте.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное видео",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [],
        "description": "До 3 референсных аудиофайлов (MP3/WAV, максимум 15 сек суммарно). Каждый N-й аудиофайл соответствует @audioN в промпте.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное аудио",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-omni-reference-fast",
    "name": "Seedance 2 VIP Omni Reference Fast",
    "endpoint": "seedance-2-vip-omni-reference-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Описание видео. Используйте @image1…@image9 для изображений, @video1…@video3 для видео, @audio1…@audio3 для аудио. Используйте @character:<request_id> для чарактер-шита Seedance 2 или @omni-character:<char_id> для обученного персонажа Kinovi. Поддерживается несколько персонажей.",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "До 9 URL референсных изображений (JPEG/PNG/WebP). Каждое N-е изображение соответствует @imageN в промпте.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "video_files": {
        "examples": [],
        "description": "До 3 URL референсных видеоклипов (MP4, максимум 15 сек каждый). Каждый N-й видеоклип соответствует @videoN в промпте.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное видео",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [],
        "description": "До 3 референсных аудиофайлов (MP3/WAV, максимум 15 сек суммарно). Каждый N-й аудиофайл соответствует @audioN в промпте.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное аудио",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "happy-horse-1-image-to-video-1080p",
    "name": "Happy Horse 1 Image to Video 1080P",
    "endpoint": "happy-horse-1-image-to-video-1080p",
    "family": "happy-horse-1",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Опциональное текстовое описание, задающее движение.",
        "examples": [
          "A tiny horse wearing boxing gloves stands in front of a massive battle robot in the middle of a city street. The horse suddenly charges fearlessly and punches the robot so hard that cars flip over and nearby windows shatter from the impact shockwave."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-image-to-video-1080p.jpg"
        ],
        "description": "Загрузите или укажите изображение для анимации.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображение",
        "name": "images_list",
        "maxItems": 1
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1-image-to-video-720p",
    "name": "Happy Horse 1 Image to Video 720P",
    "endpoint": "happy-horse-1-image-to-video-720p",
    "family": "happy-horse-1",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Опциональное текстовое описание, задающее движение.",
        "examples": [
          "The motorcycle suddenly accelerates uncontrollably through traffic while the horse struggles to stay balanced. Cars swerve out of the way, sparks scrape across the road during sharp turns, and the camera tracks inches away from the speeding bike."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-image-to-video-720p.jpg"
        ],
        "description": "Загрузите или укажите изображение для анимации.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображение",
        "name": "images_list",
        "maxItems": 1
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "veo-4-image-to-video",
    "name": "Veo 4",
    "endpoint": "veo-4-image-to-video",
    "family": "veo-4",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "Загрузите или укажите изображение для анимации.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображение",
        "name": "images_list",
        "maxItems": 1
      },
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Опциональное текстовое описание, задающее движение и движение камеры.",
        "examples": [
          "Camera slowly pans left, parallax depth, cinematic lighting."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 8,
        "minValue": 5,
        "maxValue": 30,
        "step": 1
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "seedance-2-vip-image-to-video-1080p",
    "name": "Seedance 2 VIP Image to Video 1080P",
    "endpoint": "sd-2-vip-image-to-video-1080p",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-i2v.jpg"
        ],
        "description": "Загрузите или укажите изображение начального кадра.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображение",
        "name": "images_list",
        "maxItems": 1
      },
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Опциональное текстовое описание, задающее движение в видео.",
        "examples": [
          "Slow cinematic pan, dramatic lighting shift."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-image-to-video-fast-1080p",
    "name": "Seedance 2 VIP Image to Video Fast 1080P",
    "endpoint": "sd-2-vip-image-to-video-fast-1080p",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-i2v.jpg"
        ],
        "description": "Загрузите или укажите изображение начального кадра.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображение",
        "name": "images_list",
        "maxItems": 1
      },
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Опциональное текстовое описание, задающее движение в видео.",
        "examples": [
          "Slow cinematic pan, dramatic lighting shift."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-omni-reference-1080p",
    "name": "Seedance 2 VIP Omni Reference 1080P",
    "endpoint": "sd-2-vip-omni-reference-1080p",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Описание видео. Используйте @image1…@image9 для изображений, @video1…@video3 для видео, @audio1…@audio3 для аудио. Используйте @character:<request_id> для чарактер-шита Seedance 2 или @omni-character:<char_id> для обученного персонажа Kinovi. Поддерживается несколько персонажей.",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "До 9 URL референсных изображений (JPEG/PNG/WebP). Каждое N-е изображение соответствует @imageN в промпте.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "video_files": {
        "examples": [],
        "description": "До 3 URL референсных видеоклипов (MP4, максимум 15 сек каждый). Каждый N-й видеоклип соответствует @videoN в промпте.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное видео",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [],
        "description": "До 3 референсных аудиофайлов (MP3/WAV, максимум 15 сек суммарно). Каждый N-й аудиофайл соответствует @audioN в промпте.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное аудио",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-omni-reference-fast-1080p",
    "name": "Seedance 2 VIP Omni Reference Fast 1080P",
    "endpoint": "sd-2-vip-omni-reference-fast-1080p",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Описание видео. Используйте @image1…@image9 для изображений, @video1…@video3 для видео, @audio1…@audio3 для аудио. Используйте @character:<request_id> для чарактер-шита Seedance 2 или @omni-character:<char_id> для обученного персонажа Kinovi. Поддерживается несколько персонажей.",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "До 9 URL референсных изображений (JPEG/PNG/WebP). Каждое N-е изображение соответствует @imageN в промпте.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "video_files": {
        "examples": [],
        "description": "До 3 URL референсных видеоклипов (MP4, максимум 15 сек каждый). Каждый N-й видеоклип соответствует @videoN в промпте.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное видео",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [],
        "description": "До 3 референсных аудиофайлов (MP3/WAV, максимум 15 сек суммарно). Каждый N-й аудиофайл соответствует @audioN в промпте.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное аудио",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-first-last-frame-1080p",
    "name": "Seedance 2 VIP First Last Frame 1080P",
    "endpoint": "sd-2-vip-first-last-frame-1080p",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание, задающее переход между кадрами.",
        "examples": [
          "Two people having a street interview, the interviewer holds a microphone."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 изображение = только первый кадр; 2 изображения = первый и последний кадр. Используйте соотношение сторон «adaptive», чтобы соответствовать геометрии референсного изображения.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображения кадров",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео. «adaptive» соответствует референсному изображению (рекомендуется); конкретные соотношения могут обрезать или дополнять кадр.",
        "default": "adaptive"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "kling-v3.0-4k-image-to-video",
    "name": "Kling v3.0 4K",
    "endpoint": "kling-v3.0-4k-image-to-video",
    "family": "kling-v3.0",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The camera begins on the railway station platform beside a stationary train as morning sunlight filters through the roof. Passengers make small natural movements while the train doors are open. The camera moves forward and enters the train, transitioning smoothly into a window-seat point of view. As the doors close, the train starts moving. The view shifts fully to the window, showing the city passing by outside with gentle motion blur, buildings and trees sliding past. Sunlight reflects on the glass, faint interior reflections appear, and the ride feels calm and realistic with smooth, cinematic motion."
        ],
        "description": "Текстовый промпт, описывающий видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/kling-v3.0-pro-image-to-video1.jpg"
        ],
        "description": "URL входного изображения, используемого для генерации видео.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url"
      },
      "last_image": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/kling-v3.0-pro-image-to-video2.jpg"
        ],
        "description": "URL входного последнего изображения.",
        "field": "image",
        "type": "string",
        "title": "Последнее изображение",
        "name": "last_image"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "default": true,
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио для видео"
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "vidu-q3-pro-image-to-video",
    "name": "Vidu Q3 Pro",
    "endpoint": "vidu-q3-pro-image-to-video",
    "family": "vidu-q3-pro",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The floating train suddenly accelerates violently through the sky while sections of the track collapse behind it. Sparks explode beneath the wheels as the camera races alongside the train through tight gaps between skyscrapers. Pieces of the city break apart during the chase."
        ],
        "description": "Текстовый промпт, описывающий движение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q3-pro-image-to-video.jpg"
        ],
        "description": "URL изображения начального кадра.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url"
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 1,
        "maxValue": 16,
        "step": 1
      },
      "audio": {
        "type": "boolean",
        "title": "Аудио",
        "name": "audio",
        "description": "Генерировать ли аудио для видео.",
        "default": false
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q3-pro-first-last-frames",
    "name": "Vidu Q3 Pro First Last Frames",
    "endpoint": "vidu-q3-pro-first-last-frames",
    "family": "vidu-q3-pro",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The frozen bird begins cracking from within as glowing orange light shines through the ice. Steam bursts outward while flames ignite across the wings. The sculpture violently shatters apart and transforms into a blazing phoenix that launches upward through fire and smoke."
        ],
        "description": "Текстовый промпт, описывающий переход.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q3-pro-first-last-frames-1.jpg"
        ],
        "description": "URL изображения начального (первого) кадра.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на первое изображение",
        "name": "image_url"
      },
      "last_image": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q3-pro-first-last-frames-2.jpg"
        ],
        "description": "URL изображения конечного (последнего) кадра.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на последнее изображение",
        "name": "last_image"
      },
      "resolution": {
        "enum": [
          "540p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 1,
        "maxValue": 16,
        "step": 1
      },
      "audio": {
        "type": "boolean",
        "title": "Аудио",
        "name": "audio",
        "description": "Генерировать ли аудио для видео.",
        "default": false
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q3-turbo-image-to-video",
    "name": "Vidu Q3 Turbo",
    "endpoint": "vidu-q3-turbo-image-to-video",
    "family": "vidu-q3-turbo",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The shark crashes through moving traffic, flipping cars into the air while water bursts across the highway. The camera races alongside the destruction as vehicles spin and explode behind the creature."
        ],
        "description": "Текстовый промпт, описывающий движение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q3-turbo-image-to-video.jpg"
        ],
        "description": "URL изображения начального кадра.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url"
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 1,
        "maxValue": 16,
        "step": 1
      },
      "audio": {
        "type": "boolean",
        "title": "Аудио",
        "name": "audio",
        "description": "Генерировать ли аудио для видео.",
        "default": false
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q3-turbo-first-last-frames",
    "name": "Vidu Q3 Turbo First Last Frames",
    "endpoint": "vidu-q3-turbo-first-last-frames",
    "family": "vidu-q3-turbo",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Dark smoke begins leaking from the woman’s body and rapidly expands outward. Her form dissolves into swirling vapor while glowing eyes emerge from the smoke cloud. The alley fills with violent rotating smoke as the camera circles aggressively around the transformation."
        ],
        "description": "Текстовый промпт, описывающий переход.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q3-turbo-first-last-frames-1.jpg"
        ],
        "description": "URL изображения начального (первого) кадра.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на первое изображение",
        "name": "image_url"
      },
      "last_image": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q3-turbo-first-last-frames-2.jpg"
        ],
        "description": "URL изображения конечного (последнего) кадра.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на последнее изображение",
        "name": "last_image"
      },
      "resolution": {
        "enum": [
          "360p",
          "540p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 1,
        "maxValue": 16,
        "step": 1
      },
      "audio": {
        "type": "boolean",
        "title": "Аудио",
        "name": "audio",
        "description": "Генерировать ли аудио для видео.",
        "default": false
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q2-pro-image-to-video",
    "name": "Vidu Q2 Pro",
    "endpoint": "vidu-q2-pro-image-to-video",
    "family": "vidu-q2",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The subject turns toward the camera as warm sunlight drifts across their face. The camera pushes in slowly while wind moves through their hair."
        ],
        "description": "Текстовый промпт, описывающий движение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q2-turbo-1.jpg"
        ],
        "description": "URL изображения начального кадра.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео. Совместите с исходным изображением, чтобы избежать обрезки.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 2,
        "maxValue": 8,
        "step": 1
      },
      "bgm": {
        "type": "boolean",
        "title": "Фоновая музыка",
        "name": "bgm",
        "description": "Добавить фоновую музыку к результату. При включении длительность должна быть ровно 4 секунды.",
        "default": false
      },
      "movement_amplitude": {
        "enum": [
          "auto",
          "small",
          "medium",
          "large"
        ],
        "title": "Амплитуда движения",
        "name": "movement_amplitude",
        "type": "string",
        "description": "Амплитуда движения объектов в кадре.",
        "default": "auto"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "vidu-q2-turbo-image-to-video",
    "name": "Vidu Q2 Turbo",
    "endpoint": "vidu-q2-turbo-image-to-video",
    "family": "vidu-q2",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "examples": [
          "The subject smiles softly as the camera slowly orbits around them. Warm rim light catches the edges of their hair."
        ],
        "description": "Текстовый промпт, описывающий движение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/vidu-q2-turbo-1.jpg"
        ],
        "description": "URL изображения начального кадра.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url"
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение сгенерированного видео.",
        "default": "720p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео. Совместите с исходным изображением, чтобы избежать обрезки.",
        "default": "16:9"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 2,
        "maxValue": 8,
        "step": 1
      },
      "bgm": {
        "type": "boolean",
        "title": "Фоновая музыка",
        "name": "bgm",
        "description": "Добавить фоновую музыку к результату. При включении длительность должна быть ровно 4 секунды.",
        "default": false
      },
      "movement_amplitude": {
        "enum": [
          "auto",
          "small",
          "medium",
          "large"
        ],
        "title": "Амплитуда движения",
        "name": "movement_amplitude",
        "type": "string",
        "description": "Амплитуда движения объектов в кадре.",
        "default": "auto"
      }
    },
    "provider": "vidu",
    "provider_name": "Vidu"
  },
  {
    "id": "happy-horse-1-reference-to-video-1080p",
    "name": "Happy Horse 1 Reference to Video 1080P",
    "endpoint": "happy-horse-1-reference-to-video-1080p",
    "family": "happy-horse-1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание желаемого видео. До 5000 некитайских символов (или 2500 китайских).",
        "examples": [
          "Place @image1 inside @image2 running across countertops while giant cooking disasters happen everywhere. Exploding soup pots, flying vegetables, and fire bursts create chaos as the tiny horse desperately escapes through the oversized kitchen."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p-1.jpg",
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p-2.jpg"
        ],
        "description": "1–9 URL референсных изображений. JPEG/PNG/WEBP, минимум 400px по короткой стороне, максимум 10 МБ каждое.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Опциональный seed для воспроизводимости (0–2147483647).",
        "default": 0,
        "minValue": 0,
        "maxValue": 2147483647,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1-reference-to-video-720p",
    "name": "Happy Horse 1 Reference to Video 720P",
    "endpoint": "happy-horse-1-reference-to-video-720p",
    "family": "happy-horse-1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание желаемого видео. До 5000 некитайских символов (или 2500 китайских).",
        "examples": [
          "Use @image1 riding inside @image2 at extreme speed through a massive supermarket. The rocket cart blasts through aisles, launches over checkout counters, and sends products exploding everywhere while the camera chases closely behind through the chaos."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-720p-1.jpg",
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-720p-2.jpg"
        ],
        "description": "1–9 URL референсных изображений. JPEG/PNG/WEBP, минимум 400px по короткой стороне, максимум 10 МБ каждое.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Опциональный seed для воспроизводимости (0–2147483647).",
        "default": 0,
        "minValue": 0,
        "maxValue": 2147483647,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "gemini-omni-image-to-video",
    "name": "Gemini Omni",
    "endpoint": "gemini-omni-image-to-video",
    "family": "gemini-omni",
    "imageField": "image_urls",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание желаемого движения и сцены. Gemini Omni поддерживает богатые мультимодальные промпты, включая работу камеры, диалоги и фоновые звуковые сигналы.",
        "examples": [
          "The suitcase opens by itself and tiny landscapes start unfolding out of it—mountains, forests, oceans, entire cities. Each world expands outward onto the platform, growing larger and larger while miniature weather systems form above them."
        ]
      },
      "image_urls": {
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "image_urls",
        "description": "Загрузите 1–7 референсных изображений для видео. Максимум 20 МБ каждое.",
        "examples": [
          "https://cdn.muapi.ai/assets/gemini-omni-image-to-video.jpg"
        ],
        "maxItems": 7
      },
      "duration": {
        "enum": [
          4,
          6,
          8,
          10
        ],
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 8
      },
      "resolution": {
        "enum": [
          "720p",
          "1080p",
          "4k"
        ],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение итогового видео. 720p и 1080p стоят одинаково; 4K дороже.",
        "default": "1080p"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "audio_ids": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "ID аудиофайлов",
        "name": "audio_ids",
        "description": "До 3 ID голосовых профилей, возвращённых эндпоинтом Gemini Omni Audio.",
        "maxItems": 3
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Seed (0–2147483647). Зафиксируйте для воспроизводимости; результаты всё же могут отличаться из-за случайности модели.",
        "minValue": 0,
        "maxValue": 2147483647,
        "default": 0
      },
      "character_ids": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "ID персонажей",
        "name": "character_ids",
        "description": "До 3 ID персонажей из Gemini Omni Character для показа в видео.",
        "maxItems": 3
      }
    },
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "grok-imagine-video-1-5-preview",
    "name": "Grok Imagine Video 1.5 Preview",
    "endpoint": "grok-imagine-video-1-5-preview",
    "family": "video-generation",
    "imageField": "images_list",
    "hasPrompt": true,
    "aspectRatioMode": "inherited",
    "parameterNotice": "Aspect ratio is inherited from the input image.",
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание для генерации видео.",
        "examples": [
          "The whale suddenly begins swimming through the apartment as if the room is underwater. Furniture crashes into walls, water bursts outward, and the whale breaks through multiple rooms while the camera follows beside it."
        ]
      },
      "images_list": {
        "examples": [
          "https://cdn.muapi.ai/assets/grok-imagine-video-1-5-preview.jpg"
        ],
        "description": "Загрузите или укажите URL изображений для использования во входных данных генерации видео.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 1
      },
      "aspect_ratio": {
        "enum": [
          "auto",
          "1:1",
          "16:9",
          "9:16",
          "4:3",
          "3:4",
          "3:2",
          "2:3"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон для сгенерированного видео. Используйте «auto», чтобы соответствовать входному изображению.",
        "default": "auto"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "description": "Разрешение итогового видео.",
        "default": "480p"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 8,
        "minValue": 1,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "grok",
    "provider_name": "xAI"
  },
  {
    "id": "kling-v3-turbo-standard-image-to-video",
    "name": "Kling v3 Turbo Standard",
    "endpoint": "kling-v3-turbo-standard-image-to-video",
    "family": "kling-v3.0",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "The kitchen explodes into chaos as soup erupts upward, giant vegetables crash across the counter, and flames burst from the stove. The tiny astronaut sprints between falling objects while the camera follows inches behind."
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url",
        "description": "URL входного изображения, используемого для генерации видео.",
        "field": "image",
        "examples": [
          "https://cdn.muapi.ai/assets/kling-v3-turbo-standard-image-to-video.jpg"
        ]
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах (3–15).",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3-turbo-pro-image-to-video",
    "name": "Kling v3 Turbo Pro",
    "endpoint": "kling-v3-turbo-pro-image-to-video",
    "family": "kling-v3.0",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовый промпт, описывающий видео.",
        "examples": [
          "Cracks spread rapidly through the ice before it explodes outward in massive shards. The titan awakens violently, roaring as it tears itself free and sends snowstorms spiraling outward. The camera circles aggressively during the awakening."
        ]
      },
      "image_url": {
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url",
        "description": "URL входного изображения, используемого для генерации видео.",
        "field": "image",
        "examples": [
          "https://cdn.muapi.ai/assets/kling-v3-turbo-pro-image-to-video.jpg"
        ]
      },
      "duration": {
        "type": "int",
        "title": "Длительность",
        "name": "duration",
        "description": "Длительность сгенерированного видео в секундах (3–15).",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "seedance-2.1-image-to-video",
    "name": "Seedance 2.1",
    "endpoint": "seedance-2.1-image-to-video",
    "family": "seedance-2.1",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Add a slow cinematic orbit around the subject, gentle parallax depth, fog drifting naturally, sky colors shifting while preserving original lighting and mood."
        ],
        "description": "Текстовый промпт, описывающий движение и стиль видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-i2v.jpg"
        ],
        "description": "URL входного изображения для анимации в видео.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url"
      },
      "last_image": {
        "examples": [
          null
        ],
        "description": "Опциональный URL изображения последнего кадра для контроля первого-последнего кадра.",
        "field": "image",
        "type": "string",
        "title": "Последнее изображение",
        "name": "last_image"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового видео.",
        "default": "720p"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 12,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио для видео.",
        "default": true
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Камера зафиксирована",
        "name": "camera_fixed",
        "description": "Зафиксировать ли положение камеры.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-image-to-video",
    "name": "Seedance 2.5",
    "endpoint": "seedance-2.5-image-to-video",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Cinematic slow dolly forward through a surreal neon cityscape at night, rain-slicked streets reflecting towers of light, shallow depth of field, photorealistic 4K quality."
        ],
        "description": "Текстовый промпт, описывающий движение и стиль видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-i2v.jpg"
        ],
        "description": "URL входного изображения для анимации в видео.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url"
      },
      "last_image": {
        "examples": [
          null
        ],
        "description": "Опциональный URL изображения последнего кадра для контроля первого-последнего кадра.",
        "field": "image",
        "type": "string",
        "title": "Последнее изображение",
        "name": "last_image"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p",
          "4K"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового видео.",
        "default": "1080p"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 16,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио для видео.",
        "default": true
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Камера зафиксирована",
        "name": "camera_fixed",
        "description": "Зафиксировать ли положение камеры.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-mini-image-to-video",
    "name": "Seedance 2 Mini",
    "endpoint": "seedance-2-mini-image-to-video",
    "family": "seedance-2.0-mini",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "examples": [
          "A slow cinematic push toward a subject on a sunlit rooftop, gentle breeze in the hair."
        ],
        "description": "Текстовый промпт, задающий анимацию видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-i2v.jpg"
        ],
        "description": "1 изображение = начальный кадр. 2–9 изображений = референсные изображения; ссылайтесь на них в промпте через @image1, @image2 и т.д.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового видео.",
        "default": "720p"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли AI-аудио, синхронизированное с видео.",
        "default": true
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "happy-horse-1.1-image-to-video-1080p",
    "name": "Happy Horse 1.1 Image to Video 1080P",
    "endpoint": "happy-horse-1.1-image-to-video-1080p",
    "family": "happy-horse-1.1",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Опциональное текстовое описание, задающее движение.",
        "examples": [
          "A tiny horse wearing boxing gloves stands in front of a massive battle robot. The horse suddenly charges fearlessly and punches the robot so hard that cars flip over."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-image-to-video-1080p.jpg"
        ],
        "description": "Загрузите или укажите изображение для анимации.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображение",
        "name": "images_list",
        "maxItems": 1
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1.1-image-to-video-720p",
    "name": "Happy Horse 1.1 Image to Video 720P",
    "endpoint": "happy-horse-1.1-image-to-video-720p",
    "family": "happy-horse-1.1",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Опциональное текстовое описание, задающее движение.",
        "examples": [
          "A tiny horse wearing boxing gloves stands in front of a massive battle robot. The horse suddenly charges fearlessly and punches the robot so hard that cars flip over."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-image-to-video-1080p.jpg"
        ],
        "description": "Загрузите или укажите изображение для анимации.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображение",
        "name": "images_list",
        "maxItems": 1
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1.1-reference-to-video-1080p",
    "name": "Happy Horse 1.1 Reference to Video 1080P",
    "endpoint": "happy-horse-1.1-reference-to-video-1080p",
    "family": "happy-horse-1.1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание желаемого видео. До 5000 символов.",
        "examples": [
          "Place @image1 inside @image2 running across countertops while giant cooking disasters happen everywhere. Exploding soup pots, flying vegetables, and fire bursts create chaos."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p-1.jpg",
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p-2.jpg"
        ],
        "description": "1–9 URL референсных изображений. JPEG/PNG/WEBP, минимум 400px по короткой стороне, максимум 10 МБ каждое.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Опциональный seed для воспроизводимости (0–2147483647).",
        "default": 0,
        "minValue": 0,
        "maxValue": 2147483647,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1.1-reference-to-video-720p",
    "name": "Happy Horse 1.1 Reference to Video 720P",
    "endpoint": "happy-horse-1.1-reference-to-video-720p",
    "family": "happy-horse-1.1",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание желаемого видео. До 5000 символов.",
        "examples": [
          "Place @image1 inside @image2 running across countertops while giant cooking disasters happen everywhere. Exploding soup pots, flying vegetables, and fire bursts create chaos."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p-1.jpg",
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/happy-horse-1-reference-to-video-1080p-2.jpg"
        ],
        "description": "1–9 URL референсных изображений. JPEG/PNG/WEBP, минимум 400px по короткой стороне, максимум 10 МБ каждое.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 3,
        "maxValue": 15,
        "step": 1
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Опциональный seed для воспроизводимости (0–2147483647).",
        "default": 0,
        "minValue": 0,
        "maxValue": 2147483647,
        "step": 1
      }
    },
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "seedance-2-vip-image-to-video-4k",
    "name": "Seedance 2 VIP Image to Video 4K",
    "endpoint": "sd-2-vip-image-to-video-4k",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v2.0-i2v.jpg"
        ],
        "description": "Загрузите или укажите изображение начального кадра.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображение",
        "name": "images_list",
        "maxItems": 1
      },
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Опциональное текстовое описание, задающее движение в видео.",
        "examples": [
          "Slow cinematic pan, dramatic lighting shift."
        ]
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-first-last-frame-4k",
    "name": "Seedance 2 VIP First Last Frame 4K",
    "endpoint": "sd-2-vip-first-last-frame-4k",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание, задающее переход между кадрами.",
        "examples": [
          "Two people having a street interview, the interviewer holds a microphone."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 изображение = только первый кадр; 2 изображения = первый и последний кадр. Используйте соотношение сторон «adaptive», чтобы соответствовать геометрии референсного изображения.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображения кадров",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "adaptive",
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео. «adaptive» соответствует референсному изображению (рекомендуется); конкретные соотношения могут обрезать или дополнять кадр.",
        "default": "adaptive"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-vip-omni-reference-4k",
    "name": "Seedance 2 VIP Omni Reference 4K",
    "endpoint": "sd-2-vip-omni-reference-4k",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Описание видео. Используйте @image1…@image9 для изображений, @video1…@video3 для видео, @audio1…@audio3 для аудио. Используйте @character:<request_id> для чарактер-шита Seedance 2 или @omni-character:<char_id> для обученного персонажа Kinovi. Поддерживается несколько персонажей.",
        "examples": [
          "@image1 is the main character. The person walks along a city street at sunset, cinematic lighting."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "До 9 URL референсных изображений (JPEG/PNG/WebP). Каждое N-е изображение соответствует @imageN в промпте.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "video_files": {
        "examples": [],
        "description": "До 3 URL референсных видеоклипов (MP4, максимум 15 сек каждый). Каждый N-й видеоклип соответствует @videoN в промпте.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное видео",
        "name": "video_files",
        "maxItems": 3
      },
      "audio_files": {
        "examples": [],
        "description": "До 3 референсных аудиофайлов (MP3/WAV, максимум 15 сек суммарно). Каждый N-й аудиофайл соответствует @audioN в промпте.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на референсное аудио",
        "name": "audio_files",
        "maxItems": 3
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-spicy-image-to-video",
    "name": "Seedance 2.5 Spicy",
    "endpoint": "seedance-2.5-spicy-image-to-video",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Bold, high-energy dolly forward through a neon-drenched alley at night, sparks flying off a passing train, exaggerated lighting contrast, dramatic camera shake, photorealistic 4K quality."
        ],
        "description": "Текстовый промпт, описывающий движение и стиль видео. Режим Spicy даёт более смелые, контрастные и выразительные результаты.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-i2v.jpg"
        ],
        "description": "URL входного изображения для анимации в видео.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url"
      },
      "last_image": {
        "examples": [
          null
        ],
        "description": "Опциональный URL изображения последнего кадра для контроля первого-последнего кадра.",
        "field": "image",
        "type": "string",
        "title": "Последнее изображение",
        "name": "last_image"
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p",
          "1080p",
          "4K"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового видео.",
        "default": "1080p"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 16,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли аудио для видео.",
        "default": true
      },
      "camera_fixed": {
        "type": "boolean",
        "title": "Камера зафиксирована",
        "name": "camera_fixed",
        "description": "Зафиксировать ли положение камеры.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-image-to-video-480p",
    "name": "Seedance 2.5 480p",
    "endpoint": "seedance-2.5-image-to-video-480p",
    "family": "seedance-2.5",
    "imageField": "image_url",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Animate the park scene with gentle wind moving the trees, subtle water ripples, and a slow cinematic push forward."
        ],
        "description": "Текстовый промпт, описывающий желаемое движение и стиль.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "image_url": {
        "examples": [
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "URL входного изображения для анимации в видео.",
        "field": "image",
        "type": "string",
        "title": "Ссылка на изображение",
        "name": "image_url"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Seed для воспроизводимой генерации. Используйте -1 для случайного значения.",
        "examples": [
          42
        ]
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-first-last-frame",
    "name": "Seedance 2.5 First & Last Frame",
    "endpoint": "seedance-2.5-first-last-frame",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a smooth transition from a cloudy sky to a quiet riverside park path, with natural camera movement and realistic lighting."
        ],
        "description": "Текстовый промпт, описывающий переход и движение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://samplelib.com/jpeg/sample-clouds-400x300.jpg",
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "Ровно 2 изображения: [первый_кадр, последний_кадр].",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображения первого и последнего кадра",
        "name": "images_list",
        "maxItems": 2
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Seed для воспроизводимой генерации. Используйте -1 для случайного значения.",
        "examples": [
          42
        ]
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-first-last-frame-480p",
    "name": "Seedance 2.5 First & Last Frame 480p",
    "endpoint": "seedance-2.5-first-last-frame-480p",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a smooth transition from a cloudy sky to a quiet riverside park path, with natural camera movement and realistic lighting."
        ],
        "description": "Текстовый промпт, описывающий переход и движение.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://samplelib.com/jpeg/sample-clouds-400x300.jpg",
          "https://samplelib.com/jpeg/sample-city-park-400x300.jpg"
        ],
        "description": "Ровно 2 изображения: [первый_кадр, последний_кадр].",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Изображения первого и последнего кадра",
        "name": "images_list",
        "maxItems": 2
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Seed для воспроизводимой генерации. Используйте -1 для случайного значения.",
        "examples": [
          42
        ]
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-omni-reference",
    "name": "Seedance 2.5 Omni Reference",
    "endpoint": "seedance-2.5-omni-reference",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a calm cinematic park sequence. Use the images for environment style, the video clips for camera motion and street rhythm, and the audio as mood reference."
        ],
        "description": "Текстовый промпт, описывающий желаемое видео, со ссылками на предоставленные изображения, видеоклипы и аудио как подсказки окружения, движения и настроения.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "URL референсных изображений. До 30 изображений.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 30
      },
      "videos_list": {
        "examples": [],
        "description": "URL референсных видео. До 10 клипов.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные видео",
        "name": "videos_list",
        "maxItems": 10
      },
      "audios_list": {
        "examples": [],
        "description": "URL референсных аудио. До 10 файлов.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсное аудио",
        "name": "audios_list",
        "maxItems": 10
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Seed для воспроизводимой генерации. Используйте -1 для случайного значения.",
        "examples": [
          42
        ]
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2.5-omni-reference-480p",
    "name": "Seedance 2.5 Omni Reference 480p",
    "endpoint": "seedance-2.5-omni-reference-480p",
    "family": "seedance-2.5",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "examples": [
          "Create a calm cinematic park sequence. Use the images for environment style, the video clips for camera motion and street rhythm, and the audio as mood reference."
        ],
        "description": "Текстовый промпт, описывающий желаемое видео, со ссылками на предоставленные изображения, видеоклипы и аудио как подсказки окружения, движения и настроения.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [],
        "description": "URL референсных изображений. До 30 изображений.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 30
      },
      "videos_list": {
        "examples": [],
        "description": "URL референсных видео. До 10 клипов.",
        "field": "videos_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные видео",
        "name": "videos_list",
        "maxItems": 10
      },
      "audios_list": {
        "examples": [],
        "description": "URL референсных аудио. До 10 файлов.",
        "field": "audios_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсное аудио",
        "name": "audios_list",
        "maxItems": 10
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность сгенерированного видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 30,
        "step": 1
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "4:3",
          "3:4",
          "21:9",
          "9:21"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "seed": {
        "type": "int",
        "title": "Сид",
        "name": "seed",
        "description": "Seed для воспроизводимой генерации. Используйте -1 для случайного значения.",
        "examples": [
          42
        ]
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-spicy-image-to-video",
    "name": "Seedance 2 Spicy",
    "endpoint": "seedance-2-spicy-image-to-video",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание, задающее анимацию видео. Используйте @character:<id>, чтобы сослаться на завершённую генерацию Seedance 2 Character. Используйте @omni-character:<char_id> для обученного персонажа Kinovi.",
        "examples": [
          "The person walks forward with a smile."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 или 2 изображения используются как начальный кадр (и опционально конечный). Передайте 1 изображение для анимации от него, или 2 изображения для перехода от начала к концу.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-spicy-image-to-video-fast",
    "name": "Seedance 2 Spicy Image to Video Fast",
    "endpoint": "seedance-2-spicy-image-to-video-fast",
    "family": "sd-2",
    "imageField": "images_list",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текстовое описание, задающее анимацию видео. Используйте @character:<id>, чтобы сослаться на завершённую генерацию Seedance 2 Character. Используйте @omni-character:<char_id> для обученного персонажа Kinovi.",
        "examples": [
          "The person walks forward with a smile."
        ]
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-images/186/712345784292/4a8c5c70-abcc-4920-873e-b0e219986453.jpg"
        ],
        "description": "1 или 2 изображения используются как начальный кадр (и опционально конечный).",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 2
      },
      "aspect_ratio": {
        "enum": [
          "21:9",
          "16:9",
          "4:3",
          "1:1",
          "3:4",
          "9:16"
        ],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "duration": {
        "type": "int",
        "title": "Длительность (сек)",
        "name": "duration",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-2-mini-spicy-image-to-video",
    "name": "Seedance 2 Mini Spicy",
    "endpoint": "seedance-2-mini-spicy-image-to-video",
    "family": "seedance-2.0-mini",
    "imageField": "images_list",
    "hasPrompt": true,
    "inputs": {
      "prompt": {
        "examples": [
          "A slow cinematic push toward a subject on a sunlit rooftop, gentle breeze in the hair."
        ],
        "description": "Текстовый промпт, задающий анимацию видео.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "images_list": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/seedance-v1.5-pro-i2v.jpg"
        ],
        "description": "1 изображение = начальный кадр. 2–9 изображений = референсные изображения; ссылайтесь на них в промпте через @image1, @image2 и т.д.",
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "title": "Ссылки на изображения",
        "name": "images_list",
        "maxItems": 9
      },
      "aspect_ratio": {
        "enum": [
          "16:9",
          "9:16",
          "1:1",
          "3:4",
          "4:3",
          "21:9"
        ],
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "type": "string",
        "description": "Соотношение сторон итогового видео.",
        "default": "16:9"
      },
      "resolution": {
        "enum": [
          "480p",
          "720p"
        ],
        "title": "Разрешение",
        "name": "resolution",
        "type": "string",
        "description": "Разрешение итогового видео.",
        "default": "720p"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность видео в секундах.",
        "default": 5,
        "minValue": 4,
        "maxValue": 15,
        "step": 1
      },
      "generate_audio": {
        "type": "boolean",
        "title": "Сгенерировать аудио",
        "name": "generate_audio",
        "description": "Генерировать ли AI-аудио, синхронизированное с видео.",
        "default": true
      },
      "high_bitrate": {
        "type": "boolean",
        "title": "Высокий битрейт",
        "name": "high_bitrate",
        "description": "Включить режим высокого битрейта для лучшего визуального качества. Файлы будут больше.",
        "default": false
      }
    },
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "minimax-h3-image-to-video",
    "name": "MiniMax H3 Image to Video",
    "endpoint": "minimax-h3-image-to-video",
    "family": "minimax-h3",
    "imageField": "image_url",
    "lastImageField": "last_image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт движения, описывающий желаемое видео."
      },
      "image_url": {
        "type": "string",
        "field": "image",
        "title": "Ссылка на изображение",
        "name": "image_url"
      },
      "last_image_url": {
        "type": "string",
        "field": "image",
        "title": "Ссылка на последнее изображение",
        "name": "last_image_url"
      },
      "resolution": {
        "enum": ["2k"],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "default": "2k"
      },
      "duration": {
        "enum": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        "type": "integer",
        "title": "Длительность",
        "name": "duration",
        "default": 5
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-h3-reference-to-video",
    "name": "MiniMax H3 Reference to Video",
    "endpoint": "minimax-h3-reference-to-video",
    "family": "minimax-h3",
    "imageField": "reference_images",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт, описывающий желаемое видео."
      },
      "reference_images": {
        "type": "array",
        "field": "image",
        "title": "Референсные изображения",
        "name": "reference_images",
        "items": {"type": "string"}
      },
      "reference_videos": {
        "type": "array",
        "field": "video",
        "title": "Референсные видео",
        "name": "reference_videos",
        "items": {"type": "string"}
      },
      "reference_audios": {
        "type": "array",
        "field": "audio",
        "title": "Референсное аудио",
        "name": "reference_audios",
        "items": {"type": "string"}
      },
      "aspect_ratio": {
        "enum": ["21:9", "16:9", "4:3", "1:1", "3:4", "9:16"],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "default": "16:9"
      },
      "resolution": {
        "enum": ["2k"],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "default": "2k"
      },
      "duration": {
        "enum": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        "type": "integer",
        "title": "Длительность",
        "name": "duration",
        "default": 5
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-h3-open-image-to-video",
    "name": "MiniMax H3 Open Image to Video",
    "endpoint": "minimax-h3-open-image-to-video",
    "family": "minimax-h3",
    "imageField": "image_url",
    "lastImageField": "last_image",
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт движения, описывающий желаемое видео."
      },
      "image_url": {
        "type": "string",
        "field": "image",
        "title": "Ссылка на изображение первого кадра",
        "name": "image_url"
      },
      "last_image": {
        "type": "string",
        "field": "image",
        "title": "Ссылка на изображение последнего кадра",
        "name": "last_image"
      },
      "resolution": {
        "enum": ["480p", "768p"],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "default": "480p"
      },
      "duration": {
        "enum": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        "type": "integer",
        "title": "Длительность",
        "name": "duration",
        "default": 5
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  },
  {
    "id": "minimax-h3-open-reference-to-video",
    "name": "MiniMax H3 Open Reference to Video",
    "endpoint": "minimax-h3-open-reference-to-video",
    "family": "minimax-h3",
    "imageField": "images_list",
    "maxImages": 9,
    "hasPrompt": true,
    "promptRequired": true,
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Промпт, описывающий желаемое видео."
      },
      "images_list": {
        "type": "array",
        "field": "images_list",
        "title": "Референсные изображения",
        "name": "images_list",
        "maxItems": 9,
        "items": {"type": "string"}
      },
      "videos_list": {
        "type": "array",
        "field": "videos_list",
        "title": "Референсные видео",
        "name": "videos_list",
        "maxItems": 3,
        "items": {"type": "string"}
      },
      "audios_list": {
        "type": "array",
        "field": "audios_list",
        "title": "Референсное аудио",
        "name": "audios_list",
        "maxItems": 3,
        "items": {"type": "string"}
      },
      "aspect_ratio": {
        "enum": ["16:9", "9:16", "1:1", "4:3", "3:4", "21:9", "9:21"],
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "default": "16:9"
      },
      "resolution": {
        "enum": ["480p", "768p"],
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "default": "480p"
      },
      "duration": {
        "enum": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        "type": "integer",
        "title": "Длительность",
        "name": "duration",
        "default": 5
      }
    },
    "provider": "minimax",
    "provider_name": "Minimax"
  }
];

export const getI2IModelById = (id) => i2iModels.find(m => m.id === id);
export const getI2VModelById = (id) => i2vModels.find(m => m.id === id);

export const getMaxImagesForI2VModel = (modelId) => {
    const model = getI2VModelById(modelId);
    return model ? getMediaCapability(model, 'image').maxItems : 1;
};

export const getSelectableAspectRatiosForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    return getAspectRatioOptions(model, I2I_DIMENSION_RATIOS);
};

export const getAspectRatiosForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    if (!model) return ['1:1'];
    if (model.inputs && model.inputs.aspect_ratio && model.inputs.aspect_ratio.enum) return model.inputs.aspect_ratio.enum;
    return ['1:1', '16:9', '9:16'];
};

export const getAspectRatiosForI2VModel = (modelId) => {
    const model = getI2VModelById(modelId);
    if (!model) return ['16:9'];
    if (model.aspectRatioMode === 'inherited') return [];
    if (model.inputs && model.inputs.aspect_ratio && model.inputs.aspect_ratio.enum) return model.inputs.aspect_ratio.enum;
    return ['16:9', '9:16', '1:1'];
};

export const getDurationsForI2VModel = (modelId) => {
    const model = getI2VModelById(modelId);
    if (!model) return [];
    return getInputOptions(model.inputs?.duration);
};

export const getResolutionsForI2VModel = (modelId, selections = {}) => {
    const model = getI2VModelById(modelId);
    if (!model) return [];
    const res = model.inputs && model.inputs.resolution;
    if (res?.enum) return getDependentEnumValues(res, selections);
    return [];
};

// Effect-style models declare `inputs.name` as an enum of effect types.
export const getEffectsForI2VModel = (modelId) => {
    const model = getI2VModelById(modelId);
    return model?.inputs?.name?.enum || [];
};

export const getDefaultEffectForI2VModel = (modelId) => {
    const model = getI2VModelById(modelId);
    return model?.inputs?.name?.default || null;
};

export const getResolutionsForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    if (!model) return [];
    if (model.inputs?.resolution?.enum) return model.inputs.resolution.enum;
    if (model.inputs?.quality?.enum) return model.inputs.quality.enum;
    return [];
};

export const getEffectsForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    return model?.inputs?.name?.enum || [];
};

export const getDefaultEffectForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    return model?.inputs?.name?.default || null;
};

// Returns the payload field name for quality/resolution for a t2i model ('resolution', 'quality', or null)
export const getQualityFieldForModel = (modelId) => {
    const model = getModelById(modelId);
    if (!model) return null;
    if (model.inputs?.resolution) return 'resolution';
    if (model.inputs?.quality) return 'quality';
    return null;
};

// Returns quality/resolution options for a t2i model
export const getResolutionsForModel = (modelId) => {
    const model = getModelById(modelId);
    if (!model) return [];
    if (model.inputs?.resolution?.enum) return model.inputs.resolution.enum;
    if (model.inputs?.quality?.enum) return model.inputs.quality.enum;
    return [];
};

// Returns the payload field name for quality/resolution for an i2i model ('resolution', 'quality', or null)
export const getQualityFieldForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    if (!model) return null;
    if (model.inputs?.resolution) return 'resolution';
    if (model.inputs?.quality) return 'quality';
    return null;
};

// Returns the maximum number of images an i2i model accepts (defaults to 1)
export const getMaxImagesForI2IModel = (modelId) => {
    const model = getI2IModelById(modelId);
    return model ? getMediaCapability(model, 'image').maxItems : 1;
};

// ─── Video-to-Video models ────────────────────────────────────────────────────
export const v2vModels = [
  {
    "id": "video-watermark-remover",
    "name": "AI Video Watermark Remover",
    "endpoint": "video-watermark-remover",
    "family": "tools",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "Удаляйте водяные знаки, логотипы, субтитры и нежелательный текст из видео.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "kling-v2.6-std-motion-control",
    "name": "Kling 2.6 Std Motion Control",
    "endpoint": "kling-v2.6-std-motion-control",
    "family": "kling",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "description": "Kling v2.6 Pro Motion Control обеспечивает точный контроль над движением камеры, объекта и динамикой сцены при генерации видео.",
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-std-motion-control",
    "name": "Kling 3.0 Std Motion Control",
    "endpoint": "kling-v3.0-std-motion-control",
    "family": "kling",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": true,
    "description": "Kling V3.0 Standard Motion Control обеспечивает точный контроль над движением камеры и объекта в сгенерированных видео.",
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-v3.0-pro-motion-control",
    "name": "Kling 3.0 Pro Motion Control",
    "endpoint": "kling-v3.0-pro-motion-control",
    "family": "kling",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": true,
    "description": "Kling V3.0 Pro Motion Control обеспечивает наивысший уровень детализации и контроля для генерации видео.",
    "provider": "kling",
    "provider_name": "Kling AI"
  }
,
  {
    "id": "ai-video-face-swap",
    "name": "AI Video Face Swap",
    "endpoint": "ai-video-face-swap",
    "family": "tools",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": false,
    "description": "Заменяйте лица в видео с потрясающим реализмом.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "mmaudio-v2-video-to-video",
    "name": "MMAudio v2 Video to Video",
    "endpoint": "mmaudio-v2/video-to-video",
    "family": "mmaudio",
    "videoField": "video_url",
    "hasPrompt": true,
    "description": "MMAudio-v2 генерирует высококачественное синхронизированное аудио из видео или текста.",
    "provider": "mmaudio",
    "provider_name": "MMAudio"
  },
  {
    "id": "runway-aleph-v2v",
    "name": "Runway Aleph V2V",
    "endpoint": "runway-aleph-v2v",
    "family": "runway",
    "videoField": "video_url",
    "hasPrompt": true,
    "description": "Превратите любое входное видео в новый визуальный стиль или сцену, сохраняя движение и структуру.",
    "provider": "runway",
    "provider_name": "RunwayML"
  },
  {
    "id": "luma-modify-video",
    "name": "Luma Modify Video",
    "endpoint": "luma-modify-video",
    "family": "luma",
    "videoField": "video_url",
    "hasPrompt": true,
    "description": "Luma Modify Video позволяет превратить существующее видео в новую креативную сцену, сохранив исходное движение и тайминг.",
    "provider": "luma",
    "provider_name": "Luma AI"
  },
  {
    "id": "ai-dance-effects",
    "name": "AI Dance Effects",
    "endpoint": "ai-dance-effects",
    "family": "effects",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": true,
    "description": "Оживите своих персонажей и миры с помощью AI Dance Effects — креативного видеоэффекта, добавляющего игривое, динамичное и кинематографичное движение вашим генерациям.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "ai-video-upscaler",
    "name": "AI Video Upscaler",
    "endpoint": "ai-video-upscaler",
    "family": "tools",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "AI Video Upscaler — мощный инструмент для повышения разрешения и качества видео.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "wan2.2-edit-video",
    "name": "Wan2.2 Edit Video",
    "endpoint": "wan2.2-edit-video",
    "family": "wan2.2",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "description": "Легко изменяйте существующие видео с помощью простых текстовых команд.",
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "heygen-video-translate",
    "name": "HeyGen Video Translate",
    "endpoint": "heygen-video-translate",
    "family": "tools",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "Переведите любое видео на 175+ языков с синхронизированным переводом голоса, AI-клонированием голоса и точным липсинком.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "topaz-video-upscale",
    "name": "Topaz Video Upscale",
    "endpoint": "topaz-video-upscale",
    "family": "topaz",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "AI Video Upscaler — мощный инструмент для повышения разрешения и качества видео.",
    "provider": "topaz",
    "provider_name": "Topaz Labs"
  },
  {
    "id": "ai-video-upscaler-pro",
    "name": "AI Video Upscaler Pro",
    "endpoint": "ai-video-upscaler-pro",
    "family": "tools",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "AI Video Upscaler — мощный инструмент для повышения разрешения и качества видео.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "remix-video",
    "name": "Remix Video",
    "endpoint": "remix-video",
    "family": "tools",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "Легко трансформируйте и меняйте размер видео с помощью инструмента ремикса видео.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "kling-o1-video-edit",
    "name": "Kling O1 Video Edit",
    "endpoint": "kling-o1-video-edit",
    "family": "kling-o1",
    "videoField": "video_url",
    "imageField": "images_list",
    "maxImages": 4,
    "hasPrompt": true,
    "promptRequired": true,
    "required": [
      "prompt",
      "images_list",
      "video_url"
    ],
    "inputs": {
      "images_list": {
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "maxItems": 4
      }
    },
    "description": "Kling O1 Video Edit позволяет отправить существующий видеоклип вместе с инструкцией/промптом для редактирования или трансформации клипа с сохранением временной согласованности и идентичности объекта.",
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-o1-video-edit-fast",
    "name": "Kling O1 Video Edit Fast",
    "endpoint": "kling-o1-video-edit-fast",
    "family": "kling-o1",
    "videoField": "video_url",
    "imageField": "images_list",
    "maxImages": 4,
    "hasPrompt": true,
    "promptRequired": true,
    "required": [
      "prompt",
      "images_list",
      "video_url"
    ],
    "inputs": {
      "images_list": {
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "maxItems": 4
      }
    },
    "description": "Video Edit Fast — облегчённый, высокоскоростной режим редактирования Kling O1.",
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "kling-o1-standard-video-edit",
    "name": "Kling O1 Standard Video Edit",
    "endpoint": "kling-o1-standard-video-edit",
    "family": "kling-o1",
    "videoField": "video_url",
    "imageField": "images_list",
    "maxImages": 4,
    "hasPrompt": true,
    "promptRequired": true,
    "required": [
      "prompt",
      "images_list",
      "video_url"
    ],
    "inputs": {
      "images_list": {
        "field": "images_list",
        "type": "array",
        "items": {
          "type": "string"
        },
        "maxItems": 4
      }
    },
    "description": "Kling O1 Standard Video-to-Video Edit изменяет существующее видео, сохраняя его исходную структуру, движение и реализм.",
    "provider": "kling",
    "provider_name": "Kling AI"
  },
  {
    "id": "wan2.2-spicy-video-extend",
    "name": "Wan2.2 Spicy Video Extend",
    "endpoint": "wan2.2-spicy-video-extend",
    "family": "wan2.2",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "description": "Wan-2.2-spicy Video Extend продолжает существующее видео, генерируя новые кадры, соответствующие исходному стилю, но с более сильным движением, смелыми эффектами и более острой драматургией.",
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "seedance-v1.5-pro-video-extend",
    "name": "Seedance v1.5 Pro Video Extend",
    "endpoint": "seedance-v1.5-pro-video-extend",
    "family": "seedance-v1.5-pro",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "description": "Seedance v1.5 Pro Video Extend продолжает существующее видео, генерируя дополнительные кадры, соответствующие стилю, освещению, движению и настроению исходной сцены.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "seedance-v1.5-pro-video-extend-fast",
    "name": "Seedance v1.5 Pro Video Extend Fast",
    "endpoint": "seedance-v1.5-pro-video-extend-fast",
    "family": "seedance-v1.5-pro",
    "videoField": "video_url",
    "hasPrompt": true,
    "promptRequired": true,
    "description": "Seedance v1.5 Pro Video Extend Fast быстро продлевает существующее видео, генерируя короткое продолжение, соответствующее исходному стилю, движению и освещению.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "add-video-watermark",
    "name": "Add Video Watermark",
    "endpoint": "add-video-watermark",
    "family": "watermark",
    "videoField": "video_url",
    "imageField": "watermark_image_url",
    "hasPrompt": false,
    "description": "Добавьте собственный водяной знак к видео с настраиваемым положением, прозрачностью и размером.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "seedance-2-watermark-remover",
    "name": "Seedance 2 Watermark Remover",
    "endpoint": "seedance-2.0-watermark-remover",
    "family": "sd-v2.0",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "🎉 БЕСПЛАТНО ограниченное время — удаляйте водяные знаки SD 2.0 из видео с помощью AI-инпейнтинга LaMa.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "ai-captions",
    "name": "AI Captions",
    "endpoint": "ai-captions",
    "family": "tools",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "Добавьте AI-сгенерированные анимированные субтитры к любому видео с помощью движка субтитров Vadoo.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "ltx-2.3-video-extend",
    "name": "LTX 2.3 Video Extend",
    "endpoint": "ltx-2.3-video-extend",
    "family": "ltx2.3",
    "videoField": "video_url",
    "hasPrompt": true,
    "description": "LTX-2.3 Video Extend бесшовно продолжает существующий видеоклип, генерируя дополнительные кадры, соответствующие исходному движению, стилю и композиции сцены.",
    "provider": "lightricks",
    "provider_name": "Lightricks"
  },
  {
    "id": "seedance-2-video-watermark-remover-pro",
    "name": "Seedance 2 Video Watermark Remover Pro",
    "endpoint": "seedance-2-video-watermark-remover-pro",
    "family": "sd-v2.0",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "SD 2 Video Watermark Remover Pro использует AI-модель SD 2 для точного удаления водяных знаков, логотипов и наложенного текста из видео.",
    "provider": "bytedance",
    "provider_name": "ByteDance"
  },
  {
    "id": "pixverse-v6-extend",
    "name": "Pixverse v6 Extend",
    "endpoint": "pixverse-v6-extend",
    "family": "pixverse-v6",
    "videoField": "video_url",
    "hasPrompt": true,
    "description": "Продлите любое существующее видео новыми кадрами с помощью PixVerse V6.",
    "provider": "pixverse",
    "provider_name": "Pixverse"
  },
  {
    "id": "wan2.7-video-extend",
    "name": "Wan2.7 Video Extend",
    "endpoint": "wan2.7-video-extend",
    "family": "wan2.7",
    "videoField": "video_url",
    "audioField": "audio_url",
    "hasPrompt": true,
    "promptRequired": true,
    "description": "Бесшовно продлевайте существующие видео с помощью Wan 2.7.",
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "wan2.7-video-edit",
    "name": "Wan2.7 Video Edit",
    "endpoint": "wan2.7-video-edit",
    "family": "wan2.7",
    "videoField": "video_url",
    "imageField": "images_list",
    "maxImages": 4,
    "hasPrompt": true,
    "promptRequired": true,
    "description": "Выполняйте редактирование видео по промпту с поддержкой нескольких референсных изображений.",
    "provider": "alibaba",
    "provider_name": "Alibaba"
  },
  {
    "id": "happy-horse-1-video-edit-1080p",
    "name": "Happy Horse 1 Video Edit 1080P",
    "endpoint": "happy-horse-1-video-edit-1080p",
    "family": "happy-horse-1",
    "videoField": "video_url",
    "imageField": "images_list",
    "maxImages": 5,
    "hasPrompt": true,
    "promptRequired": true,
    "description": "Happy Horse 1.0 Video Edit (1080p) — изменяйте входное видео в 1080p с помощью инструкции на естественном языке и опциональных референсных изображений.",
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1-video-edit-720p",
    "name": "Happy Horse 1 Video Edit 720P",
    "endpoint": "happy-horse-1-video-edit-720p",
    "family": "happy-horse-1",
    "videoField": "video_url",
    "imageField": "images_list",
    "maxImages": 5,
    "hasPrompt": true,
    "promptRequired": true,
    "description": "Happy Horse 1.0 Video Edit (720p) — изменяйте входное видео в 720p с помощью инструкции на естественном языке и опциональных референсных изображений.",
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1.1-video-edit-1080p",
    "name": "Happy Horse 1.1 Video Edit 1080P",
    "endpoint": "happy-horse-1.1-video-edit-1080p",
    "family": "happy-horse-1.1",
    "videoField": "video_url",
    "hasPrompt": true,
    "description": "Happy Horse 1.1 Video Edit (1080p) — изменяйте входное видео с помощью инструкций на естественном языке и опциональных референсных изображений.",
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "happy-horse-1.1-video-edit-720p",
    "name": "Happy Horse 1.1 Video Edit 720P",
    "endpoint": "happy-horse-1.1-video-edit-720p",
    "family": "happy-horse-1.1",
    "videoField": "video_url",
    "hasPrompt": true,
    "description": "Happy Horse 1.1 Video Edit (720p) — изменяйте входное видео с помощью инструкций на естественном языке и опциональных референсных изображений.",
    "provider": "happy-horse",
    "provider_name": "Happy Horse"
  },
  {
    "id": "gemini-omni-video-edit",
    "name": "Gemini Omni Video Edit",
    "endpoint": "gemini-omni-video-edit",
    "family": "gemini-omni",
    "videoField": "video_url",
    "imageField": "image_urls",
    "maxImages": 7,
    "hasPrompt": true,
    "promptRequired": true,
    "description": "Gemini Omni Video Edit — нативно мультимодальное редактирование видео в видео.",
    "provider": "google",
    "provider_name": "Google"
  },
  {
    "id": "video-background-remover",
    "name": "Video Background Remover",
    "endpoint": "video-background-remover",
    "family": "tools",
    "videoField": "video_url",
    "hasPrompt": false,
    "description": "Video Background Remover автоматически удаляет фон из любого видео, создавая чистый вырез объекта с прозрачным или однотонным фоном.",
    "provider": "muapi",
    "provider_name": "Muapi"
  },
  {
    "id": "kling-v2.6-pro-motion-control",
    "name": "Kling v2.6 Pro Motion Control",
    "endpoint": "kling-v2.6-pro-motion-control",
    "family": "kling-v2.6",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": true,
    "promptRequired": true,
    "description": "Kling v2.6 Pro Motion Control обеспечивает точный контроль над движением камеры, объекта и динамикой сцены при генерации видео.",
    "provider": "kling",
    "provider_name": "Kling AI"
  }
];

// ─── LipSync / Speech-to-Video models ────────────────────────────────────────
// Image-based: portrait image + audio → talking video
// Video-based: existing video + audio → lipsync video
export const lipsyncModels = [
  // ── Image + Audio → Video ──────────────────────────────────────────────────
  {
    "id": "infinitetalk-image-to-video",
    "name": "Infinite Talk",
    "endpoint": "infinitetalk-image-to-video",
    "family": "infinitetalk",
    "category": "image",
    "hasPrompt": true,
    "description": "Оживите портретное изображение в говорящее видео с помощью аудио.",
    "inputs": {
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "enum": ["480p", "720p"],
        "default": "480p"
      }
    }
  },
  {
    "id": "wan2.2-speech-to-video",
    "name": "Wan 2.2 Speech to Video",
    "endpoint": "wan2.2-speech-to-video",
    "family": "wan",
    "category": "image",
    "hasPrompt": true,
    "description": "Сгенерируйте видео говорящего портрета из изображения и аудио с помощью Wan 2.2.",
    "inputs": {
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "enum": ["480p", "720p"],
        "default": "480p"
      }
    }
  },
  {
    "id": "ltx-2.3-lipsync",
    "name": "LTX 2.3 Lipsync",
    "endpoint": "ltx-2.3-lipsync",
    "family": "ltx",
    "category": "image",
    "hasPrompt": true,
    "hasSeed": true,
    "description": "Высококачественный липсинк из портретного изображения и аудио с помощью LTX 2.3.",
    "inputs": {
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "enum": ["480p", "720p", "1080p"],
        "default": "720p"
      }
    }
  },
  {
    "id": "ltx-2-19b-lipsync",
    "name": "LTX 2 19B Lipsync",
    "endpoint": "ltx-2-19b-lipsync",
    "family": "ltx",
    "category": "image",
    "hasPrompt": true,
    "description": "Липсинк из портретного изображения и аудио с помощью модели LTX 2 19B.",
    "inputs": {
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "enum": ["480p", "720p", "1080p"],
        "default": "720p"
      }
    }
  },
  // ── Video + Audio → Video ──────────────────────────────────────────────────
  {
    "id": "sync-lipsync",
    "name": "Sync Lipsync",
    "endpoint": "sync-lipsync",
    "family": "lipsync",
    "category": "video",
    "hasPrompt": false,
    "description": "Генерируйте реалистичные анимации липсинка из аудио с помощью продвинутых алгоритмов Sync."
  },
  {
    "id": "latent-sync",
    "name": "LatentSync",
    "endpoint": "latentsync-video",
    "family": "lipsync",
    "category": "video",
    "hasPrompt": false,
    "description": "Липсинк «видео в видео» с помощью LatentSync для высококачественной анимации губ на основе аудио."
  },
  {
    "id": "creatify-lipsync",
    "name": "Creatify Lipsync",
    "endpoint": "creatify-lipsync",
    "family": "lipsync",
    "category": "video",
    "hasPrompt": false,
    "description": "Реалистичное видео с липсинком от Creatify, оптимизированное по скорости, качеству и стабильности."
  },
  {
    "id": "veed-lipsync",
    "name": "Veed Lipsync",
    "endpoint": "veed-lipsync",
    "family": "lipsync",
    "category": "video",
    "hasPrompt": false,
    "description": "Генерируйте реалистичный липсинк из любого аудио с помощью новейшей модели VEED."
  },
  {
    "id": "infinitetalk-video-to-video",
    "name": "Infinite Talk V2V",
    "endpoint": "infinitetalk-video-to-video",
    "family": "infinitetalk",
    "category": "video",
    "hasPrompt": true,
    "description": "Примените липсинк на основе аудио к существующему видео с помощью Infinite Talk.",
    "inputs": {
      "resolution": {
        "type": "string",
        "title": "Разрешение",
        "name": "resolution",
        "enum": ["480p", "720p"],
        "default": "480p"
      }
    }
  }
,
  {
    "id": "volcengine-video-to-video-lip-sync",
    "name": "Volcengine Video to Video Lip Sync",
    "endpoint": "volcengine-video-to-video-lip-sync",
    "family": "volcengine-lipsync",
    "category": "video",
    "hasPrompt": false,
    "description": "Синхронизируйте движения губ в видео с целевой аудиодорожкой, получая видео с липсинком.",
    "inputs": {
      "mode": {
        "enum": [
          "lite",
          "basic"
        ],
        "type": "string",
        "title": "Режим",
        "name": "mode",
        "description": "Режим сервиса. «lite» — для фронтальных видео с одним человеком с более быстрой обработкой. «basic» — для сложных сцен с одним человеком, с поддержкой сегментации сцены и идентификации диктора.",
        "default": "lite"
      }
    }
  },
  {
    "id": "kling-v1-avatar-standard",
    "name": "Kling v1 Avatar Standard",
    "endpoint": "kling-v1-avatar-standard",
    "family": "kling-v1",
    "category": "image",
    "hasPrompt": true,
    "description": "Kling AI Avatar Standard создаёт видео говорящих аватаров из одного изображения и аудио."
  },
  {
    "id": "kling-v1-avatar-pro",
    "name": "Kling v1 Avatar Pro",
    "endpoint": "kling-v1-avatar-pro",
    "family": "kling-v1",
    "category": "image",
    "hasPrompt": true,
    "description": "Kling AI Avatar Pro — премиальный уровень для создания высококачественных говорящих аватаров."
  },
  {
    "id": "kling-v2-avatar-standard",
    "name": "Kling v2 Avatar Standard",
    "endpoint": "kling-v2-avatar-standard",
    "family": "kling-v2",
    "category": "image",
    "hasPrompt": true,
    "description": "AI-Avatar v2 Standard генерирует видео говорящего аватара из референсного изображения и аудиодиалога."
  },
  {
    "id": "kling-v2-avatar-pro",
    "name": "Kling v2 Avatar Pro",
    "endpoint": "kling-v2-avatar-pro",
    "family": "kling-v2",
    "category": "image",
    "hasPrompt": true,
    "description": "AI-Avatar v2 Pro берёт референсное изображение человека/персонажа и аудиофрагмент диалога, затем генерирует реалистичное видео говорящего аватара."
  },
  {
    "id": "omnihuman-1-5",
    "name": "Omnihuman 1 5",
    "endpoint": "omnihuman-1-5",
    "family": "omnihuman",
    "category": "image",
    "hasPrompt": true,
    "description": "Генерируйте реалистичное видео говорящей головы из портретного изображения и аудио с помощью KIE OmniHuman 1.5.",
    "inputs": {
      "output_resolution": {
        "enum": [
          "720",
          "1080"
        ],
        "type": "string",
        "title": "Разрешение вывода",
        "name": "output_resolution",
        "description": "Разрешение итогового видео.",
        "default": "1080"
      }
    }
  }
];

export const getLipSyncModelById = (id) => lipsyncModels.find(m => m.id === id);

export const getResolutionsForLipSyncModel = (id) => {
  const model = lipsyncModels.find(m => m.id === id);
  return model?.inputs?.resolution?.enum || [];
};

export const imageLipSyncModels = lipsyncModels.filter(m => m.category === 'image');
export const videoLipSyncModels = lipsyncModels.filter(m => m.category === 'video');

export const getV2VModelById = (id) => v2vModels.find(m => m.id === id);

// ─── Recast / Body Swap models ───────────────────────────────────────────────
// Source video (the performance / motion) + character image (the new identity)
// → a video of the new character performing the source video's motion.
export const recastModels = [
  {
    "id": "kling-v3.0-pro-recast",
    "name": "Kling 3.0 Pro Motion Control",
    "endpoint": "kling-v3.0-pro-motion-control",
    "family": "kling",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": true,
    "description": "Перенесите движение из вашего видео на изображение персонажа с максимальной точностью."
  },
  {
    "id": "runway-act-two-recast",
    "name": "Runway Act Two",
    "endpoint": "runway-act-two-i2v",
    "family": "runway",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": false,
    "inputs": {
      "aspect_ratio": {
        "type": "string",
        "title": "Соотношение сторон",
        "name": "aspect_ratio",
        "enum": ["16:9", "9:16", "1:1", "4:3", "3:4", "21:9"],
        "default": "16:9"
      }
    },
    "description": "Перевоплотите любого персонажа — управляйте изображением персонажа движением и игрой из вашего видео."
  }
,
  {
    "id": "wan2.2-animate-recast",
    "name": "Wan2.2 Animate",
    "endpoint": "wan2.2-animate",
    "family": "wan2.2",
    "videoField": "video_url",
    "imageField": "image_url",
    "hasPrompt": true,
    "description": "Wan2.2 Animate — модель «видео в видео» для анимации персонажа или замены персонажа в существующих видеоклипах."
  }
];

export const getRecastModelById = (id) => recastModels.find(m => m.id === id);

export const getAspectRatiosForRecastModel = (id) => {
  const model = recastModels.find(m => m.id === id);
  return model?.inputs?.aspect_ratio?.enum || [];
};


// ── Audio Models ──────────────────────────────────────────────────────────
export const audioModels = [
  {
    "id": "suno-create-music",
    "name": "Suno Create Music",
    "endpoint": "suno-create-music",
    "family": "suno",
    "description": "Suno генерирует музыку, превращая текстовые промпты в полноценные песни — с вокалом, текстом и инструментами. Опишите настроение, жанр или даже конкретную идею текста, и Suno создаст реалистичный трек студийного качества за секунды.",
    "required": [
      "style"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Hard-hitting rap track with aggressive beat and confident male vocals about winning."
        ],
        "description": "Описание желаемого аудиоконтента. Промпт будет использован строго как текст песни в сгенерированном треке",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "style": {
        "examples": [
          "Classical"
        ],
        "description": "Указание музыкального стиля для сгенерированного аудио.",
        "format": "text",
        "type": "string",
        "title": "Стиль",
        "name": "style",
        "placeholder": "Джаз, классика, электроника, поп, рок, хип-хоп и т.д."
      },
      "model": {
        "enum": [
          "V3_5",
          "V4",
          "V4_5",
          "V4_5PLUS",
          "V4_5ALL",
          "V5",
          "V5_5"
        ],
        "title": "Модель",
        "name": "model",
        "type": "string",
        "description": "Версия AI-модели для использования при генерации.",
        "default": "V5"
      },
      "custom_mode": {
        "type": "boolean",
        "title": "Свой режим",
        "name": "custom_mode",
        "description": "Включить пользовательский режим для расширенных настроек.",
        "default": true
      },
      "title": {
        "type": "string",
        "title": "Заголовок",
        "name": "title",
        "description": "Название для сгенерированного музыкального трека (опционально).",
        "placeholder": "Умиротворяющая фортепианная медитация"
      },
      "persona_id": {
        "type": "string",
        "title": "ID персоны",
        "name": "persona_id",
        "description": "ID персоны или пользовательский ID голоса для применения к сгенерированной музыке (опционально). Используйте вместе с persona_model для уточнения."
      },
      "persona_model": {
        "enum": [
          "style_persona",
          "voice_persona"
        ],
        "type": "string",
        "title": "Модель персоны",
        "name": "persona_model",
        "description": "Тип этого persona_id. Установите voice_persona, если persona_id — это ID клонированного голоса из suno-voice-clone. Требует модель V5 или V5_5."
      },
      "instrumental": {
        "type": "boolean",
        "title": "Инструментал",
        "name": "instrumental",
        "description": "Включите эту опцию для генерации музыки без промпта. Если выключено, промпт будет использован как точный текст песни.",
        "default": true
      },
      "negative_tags": {
        "examples": [
          null
        ],
        "title": "Негативные теги",
        "name": "negative_tags",
        "type": "string",
        "format": "text",
        "description": "Музыкальные стили или черты, которые нужно исключить из сгенерированного аудио (опционально). Используйте, чтобы избежать конкретных стилей.",
        "placeholder": "Тяжёлый метал, бодрые барабаны"
      },
      "vocal_gender": {
        "enum": [
          "male",
          "female"
        ],
        "title": "Пол вокала",
        "name": "vocal_gender",
        "type": "string",
        "description": "Предпочтение по полу вокала для певческого голоса (опционально).",
        "default": "male"
      },
      "style_weight": {
        "title": "Вес стиля",
        "name": "style_weight",
        "type": "int",
        "description": "Сила соответствия указанному стилю (опционально). Диапазон 0–1, до 2 знаков после запятой.",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      },
      "weirdness_constraint": {
        "title": "Ограничение странности",
        "name": "weirdness_constraint",
        "type": "int",
        "description": "Управляет экспериментальным/творческим отклонением (опционально). Диапазон 0–1, до 2 знаков после запятой.",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      },
      "audio_weight": {
        "title": "Вес аудио",
        "name": "audio_weight",
        "type": "int",
        "description": "Вес баланса аудио-параметров относительно других факторов (опционально). Диапазон 0–1, до 2 знаков после запятой.",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      }
    }
  },
  {
    "id": "suno-remix-music",
    "name": "Suno Remix Music",
    "endpoint": "suno-remix-music",
    "family": "suno",
    "description": "Этот API делает кавер аудиодорожки, преобразуя её в новый стиль с сохранением основной мелодии. Он использует функцию загрузки Suno, позволяя пользователям загружать аудиофайл для обработки. Ожидаемый результат — обновлённая аудиодорожка в новом стиле с сохранением оригинальной мелодии.",
    "required": [
      "audio_url",
      "style"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "A calm and relaxing piano track with soft melodies"
        ],
        "description": "Описание желаемого аудиоконтента. Промпт будет использован строго как текст песни в сгенерированном треке. Максимум 3000 символов",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "audio_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/ai-music/186/309018126238/c7e634cf-f0f3-4988-8225-4e7d0eb6121b.mp3"
        ],
        "description": "URL для загрузки аудиофайлов. Убедитесь, что загружаемое аудио не превышает 2 минуты.",
        "field": "audio",
        "type": "string",
        "title": "Ссылка на аудио",
        "name": "audio_url"
      },
      "style": {
        "examples": [
          "Classical"
        ],
        "description": "Указание музыкального стиля для сгенерированного аудио.",
        "format": "text",
        "type": "string",
        "title": "Стиль",
        "name": "style",
        "placeholder": "Джаз, классика, электроника, поп, рок, хип-хоп и т.д."
      },
      "model": {
        "enum": [
          "V3_5",
          "V4",
          "V4_5",
          "V4_5PLUS",
          "V4_5ALL",
          "V5",
          "V5_5"
        ],
        "title": "Модель",
        "name": "model",
        "type": "string",
        "description": "Версия AI-модели для использования при генерации.",
        "default": "V5"
      },
      "custom_mode": {
        "type": "boolean",
        "title": "Свой режим",
        "name": "custom_mode",
        "description": "Включить пользовательский режим для расширенных настроек.",
        "default": true
      },
      "title": {
        "type": "string",
        "title": "Заголовок",
        "name": "title",
        "description": "Название для сгенерированного музыкального трека (опционально).",
        "placeholder": "Умиротворяющая фортепианная медитация"
      },
      "persona_id": {
        "type": "string",
        "title": "ID персоны",
        "name": "persona_id",
        "description": "ID персоны или пользовательский ID голоса для применения к сгенерированной музыке (опционально). Используйте вместе с persona_model для уточнения."
      },
      "persona_model": {
        "enum": [
          "style_persona",
          "voice_persona"
        ],
        "type": "string",
        "title": "Модель персоны",
        "name": "persona_model",
        "description": "Тип этого persona_id. Установите voice_persona, если persona_id — это ID клонированного голоса из suno-voice-clone. Требует модель V5 или V5_5."
      },
      "instrumental": {
        "type": "boolean",
        "title": "Инструментал",
        "name": "instrumental",
        "description": "Включите эту опцию для генерации музыки без промпта. Если выключено, промпт будет использован как точный текст песни.",
        "default": true
      },
      "negative_tags": {
        "examples": [
          null
        ],
        "title": "Негативные теги",
        "name": "negative_tags",
        "type": "string",
        "format": "text",
        "description": "Музыкальные стили или черты, которые нужно исключить из сгенерированного аудио (опционально). Используйте, чтобы избежать конкретных стилей.",
        "placeholder": "Тяжёлый метал, бодрые барабаны"
      },
      "vocal_gender": {
        "enum": [
          "male",
          "female"
        ],
        "title": "Пол вокала",
        "name": "vocal_gender",
        "type": "string",
        "description": "Предпочтение по полу вокала для певческого голоса (опционально).",
        "default": "male"
      },
      "style_weight": {
        "title": "Вес стиля",
        "name": "style_weight",
        "type": "int",
        "description": "Сила соответствия указанному стилю (опционально). Диапазон 0–1, до 2 знаков после запятой.",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      },
      "weirdness_constraint": {
        "title": "Ограничение странности",
        "name": "weirdness_constraint",
        "type": "int",
        "description": "Управляет экспериментальным/творческим отклонением (опционально). Диапазон 0–1, до 2 знаков после запятой.",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      },
      "audio_weight": {
        "title": "Вес аудио",
        "name": "audio_weight",
        "type": "int",
        "description": "Вес баланса аудио-параметров относительно других факторов (опционально). Диапазон 0–1, до 2 знаков после запятой.",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      }
    }
  },
  {
    "id": "suno-extend-music",
    "name": "Suno Extend Music",
    "endpoint": "suno-extend-music",
    "family": "suno",
    "description": "Этот API продлевает аудиодорожки, сохраняя оригинальный стиль трека. Он включает функцию загрузки Suno, позволяя пользователям загружать аудиофайлы для обработки. Ожидаемый результат — более длинный трек, бесшовно продолжающий стиль исходного.",
    "required": [
      "prompt",
      "audio_url",
      "style"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Extend the music with more relaxing notes"
        ],
        "description": "Описание желаемого аудиоконтента. Промпт будет использован строго как текст песни в сгенерированном треке. Максимум 3000 символов",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "audio_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/audios/186/755853337445/example.mp3"
        ],
        "description": "URL для загрузки аудиофайлов. Убедитесь, что загружаемое аудио не превышает 2 минуты.",
        "field": "audio",
        "type": "string",
        "title": "Ссылка на аудио",
        "name": "audio_url"
      },
      "style": {
        "examples": [
          "Classical"
        ],
        "description": "Указание музыкального стиля для сгенерированного аудио.",
        "format": "text",
        "type": "string",
        "title": "Стиль",
        "name": "style",
        "placeholder": "Джаз, классика, электроника, поп, рок, хип-хоп и т.д."
      },
      "model": {
        "enum": [
          "V3_5",
          "V4",
          "V4_5",
          "V4_5PLUS",
          "V4_5ALL",
          "V5",
          "V5_5"
        ],
        "title": "Модель",
        "name": "model",
        "type": "string",
        "description": "Версия AI-модели для использования при генерации.",
        "default": "V5"
      },
      "custom_mode": {
        "type": "boolean",
        "title": "Свой режим",
        "name": "custom_mode",
        "description": "Включить пользовательский режим для расширенных настроек.",
        "default": true
      },
      "title": {
        "type": "string",
        "title": "Заголовок",
        "name": "title",
        "description": "Название для сгенерированного музыкального трека (опционально).",
        "placeholder": "Умиротворяющая фортепианная медитация"
      },
      "persona_id": {
        "type": "string",
        "title": "ID персоны",
        "name": "persona_id",
        "description": "ID персоны или пользовательский ID голоса для применения к сгенерированной музыке (опционально). Используйте вместе с persona_model для уточнения."
      },
      "persona_model": {
        "enum": [
          "style_persona",
          "voice_persona"
        ],
        "type": "string",
        "title": "Модель персоны",
        "name": "persona_model",
        "description": "Тип этого persona_id. Установите voice_persona, если persona_id — это ID клонированного голоса из suno-voice-clone. Требует модель V5 или V5_5."
      },
      "continue_at": {
        "title": "Продолжить с",
        "name": "continue_at",
        "type": "int",
        "description": "Момент времени (в секундах), с которого начинать продление музыки. Диапазон значений: больше 0 и меньше общей длительности загруженного аудио. Задаёт позицию в исходном треке, с которой должно начаться продление.",
        "default": 1,
        "minValue": 1,
        "maxValue": 60,
        "step": 1
      },
      "instrumental": {
        "type": "boolean",
        "title": "Инструментал",
        "name": "instrumental",
        "description": "Включите эту опцию для генерации музыки без промпта. Если выключено, промпт будет использован как точный текст песни.",
        "default": true
      },
      "negative_tags": {
        "examples": [
          null
        ],
        "title": "Негативные теги",
        "name": "negative_tags",
        "type": "string",
        "format": "text",
        "description": "Музыкальные стили или черты, которые нужно исключить из сгенерированного аудио (опционально). Используйте, чтобы избежать конкретных стилей.",
        "placeholder": "Тяжёлый метал, бодрые барабаны"
      },
      "vocal_gender": {
        "enum": [
          "male",
          "female"
        ],
        "title": "Пол вокала",
        "name": "vocal_gender",
        "type": "string",
        "description": "Предпочтение по полу вокала для певческого голоса (опционально).",
        "default": "male"
      },
      "style_weight": {
        "title": "Вес стиля",
        "name": "style_weight",
        "type": "int",
        "description": "Сила соответствия указанному стилю (опционально). Диапазон 0–1, до 2 знаков после запятой.",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      },
      "weirdness_constraint": {
        "title": "Ограничение странности",
        "name": "weirdness_constraint",
        "type": "int",
        "description": "Управляет экспериментальным/творческим отклонением (опционально). Диапазон 0–1, до 2 знаков после запятой.",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      },
      "audio_weight": {
        "title": "Вес аудио",
        "name": "audio_weight",
        "type": "int",
        "description": "Вес баланса аудио-параметров относительно других факторов (опционально). Диапазон 0–1, до 2 знаков после запятой.",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      }
    }
  },
  {
    "id": "suno-generate-sounds",
    "name": "Suno Generate Sounds",
    "endpoint": "suno-generate-sounds",
    "family": "suno",
    "description": "Генерируйте звуковые эффекты с помощью модели Suno chirp-crow.",
    "required": [
      "prompt"
    ],
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "тип задачи sounds поддерживает до 500 символов.",
        "examples": [
          "A car passing by"
        ]
      },
      "model": {
        "enum": [
          "V5"
        ],
        "type": "string",
        "title": "Модель",
        "name": "model",
        "description": "Используемая модель",
        "default": "V5"
      },
      "sound_loop": {
        "type": "boolean",
        "title": "Зациклить",
        "name": "sound_loop",
        "description": "Зациклить ли сгенерированный звук.",
        "default": false
      },
      "sound_tempo": {
        "type": "int",
        "title": "Темп звука",
        "name": "sound_tempo",
        "description": "Темп звука",
        "minValue": 1,
        "maxValue": 300,
        "step": 1,
        "default": 1
      },
      "sound_key": {
        "enum": [
          "Any",
          "Cm",
          "C#m",
          "Dm",
          "D#m",
          "Em",
          "Fm",
          "F#m",
          "Gm",
          "G#m",
          "Am",
          "A#m",
          "Bm",
          "C",
          "C#",
          "D",
          "D#",
          "E",
          "F",
          "F#",
          "G",
          "G#",
          "A",
          "A#",
          "B"
        ],
        "type": "string",
        "title": "Тональность звука",
        "name": "sound_key",
        "description": "Музыкальная тональность",
        "default": "Any"
      },
      "grab_lyrics": {
        "type": "boolean",
        "title": "Захватить текст песни",
        "name": "grab_lyrics",
        "description": "Получать ли субтитры с текстом песни после завершения генерации.",
        "default": false
      }
    }
  },
  {
    "id": "suno-add-vocals",
    "name": "Suno Add Vocals",
    "endpoint": "suno-add-vocals",
    "family": "suno",
    "description": "Добавить вокал к инструментальному треку.",
    "required": [
      "prompt",
      "title",
      "style",
      "audio_url"
    ],
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт (текст песни)",
        "name": "prompt",
        "description": "Текст песни для исполнения",
        "examples": [
          "[Verse 1]\nHello world..."
        ]
      },
      "audio_url": {
        "type": "string",
        "title": "Инструментальное аудио",
        "name": "audio_url",
        "description": "URL инструментального трека",
        "field": "audio"
      },
      "style": {
        "type": "string",
        "title": "Стиль",
        "name": "style",
        "description": "Вокальный стиль",
        "examples": [
          "Pop"
        ]
      },
      "negative_tags": {
        "type": "string",
        "title": "Негативные теги",
        "name": "negative_tags",
        "description": "Исключённые стили"
      },
      "model": {
        "enum": [
          "V4",
          "V4_5",
          "V4_5PLUS",
          "V5"
        ],
        "title": "Модель",
        "name": "model",
        "type": "string",
        "description": "Версия AI-модели для использования.",
        "default": "V5"
      },
      "vocal_gender": {
        "enum": [
          "male",
          "female"
        ],
        "title": "Пол вокала",
        "name": "vocal_gender",
        "type": "string",
        "description": "Предпочтение по полу вокала.",
        "default": "male"
      },
      "style_weight": {
        "title": "Вес стиля",
        "name": "style_weight",
        "type": "int",
        "description": "Сила соответствия стилю (0–1).",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      },
      "weirdness_constraint": {
        "title": "Ограничение странности",
        "name": "weirdness_constraint",
        "type": "int",
        "description": "Экспериментальное отклонение (0–1).",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.01,
        "default": 0.65
      },
      "audio_weight": {
        "title": "Вес аудио",
        "name": "audio_weight",
        "type": "int",
        "description": "Вес баланса (0–1).",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.01,
        "default": 0.65
      },
      "title": {
        "type": "string",
        "title": "Заголовок",
        "name": "title",
        "description": "Название трека",
        "default": "New Vocal Track"
      }
    }
  },
  {
    "id": "suno-generate-mashup",
    "name": "Suno Geneate Mashup",
    "endpoint": "suno-generate-mashup",
    "family": "suno",
    "description": "Создайте мэшап из 1–5 аудиотреков.",
    "required": [
      "audios_list"
    ],
    "inputs": {
      "audios_list": {
        "type": "array",
        "title": "Треки для мэшапа",
        "name": "audios_list",
        "description": "Загрузите до 2 аудиофайлов, чтобы сделать мэшап из нескольких аудиотреков.",
        "field": "audios_list",
        "items": {
          "type": "string"
        },
        "maxItems": 2
      },
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Творческое руководство"
      },
      "style": {
        "type": "string",
        "title": "Стиль",
        "name": "style",
        "description": "Стиль мэшапа"
      },
      "instrumental": {
        "type": "boolean",
        "title": "Инструментал",
        "name": "instrumental",
        "description": "Если включено: требуется только стиль, иначе требуются стиль и промпт (промпт используется как точный текст песни)",
        "default": true
      },
      "model": {
        "enum": [
          "V4",
          "V4_5",
          "V4_5PLUS",
          "V5"
        ],
        "title": "Модель",
        "name": "model",
        "type": "string",
        "description": "Версия AI-модели для использования.",
        "default": "V5"
      },
      "vocal_gender": {
        "enum": [
          "male",
          "female"
        ],
        "title": "Пол вокала",
        "name": "vocal_gender",
        "type": "string",
        "description": "Предпочтение по полу вокала.",
        "default": "male"
      },
      "style_weight": {
        "title": "Вес стиля",
        "name": "style_weight",
        "type": "int",
        "description": "Сила соответствия стилю (0–1).",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      },
      "weirdness_constraint": {
        "title": "Ограничение странности",
        "name": "weirdness_constraint",
        "type": "int",
        "description": "Экспериментальное отклонение (0–1).",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      },
      "audio_weight": {
        "title": "Вес аудио",
        "name": "audio_weight",
        "type": "int",
        "description": "Вес баланса (0–1).",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      },
      "title": {
        "type": "string",
        "title": "Заголовок",
        "name": "title",
        "description": "Название мэшапа",
        "default": "New Mashup"
      }
    }
  },
  {
    "id": "suno-add-instrumental",
    "name": "Suno Add Instrumental",
    "endpoint": "suno-add-instrumental",
    "family": "suno",
    "description": "Добавить инструментальную подложку к акапельному аудио.",
    "required": [
      "title",
      "tags",
      "audio_url"
    ],
    "inputs": {
      "audio_url": {
        "type": "string",
        "title": "Вокальное аудио",
        "name": "audio_url",
        "description": "URL вокальной дорожки",
        "field": "audio"
      },
      "tags": {
        "type": "string",
        "title": "Теги",
        "name": "tags",
        "description": "Инструментальные стили",
        "examples": [
          "Orchestral"
        ]
      },
      "negative_tags": {
        "type": "string",
        "title": "Негативные теги",
        "name": "negative_tags",
        "description": "Исключённые стили"
      },
      "model": {
        "enum": [
          "V4",
          "V4_5",
          "V4_5PLUS",
          "V5"
        ],
        "title": "Модель",
        "name": "model",
        "type": "string",
        "description": "Версия AI-модели для использования.",
        "default": "V5"
      },
      "vocal_gender": {
        "enum": [
          "male",
          "female"
        ],
        "title": "Пол вокала",
        "name": "vocal_gender",
        "type": "string",
        "description": "Предпочтение по полу вокала.",
        "default": "male"
      },
      "style_weight": {
        "title": "Вес стиля",
        "name": "style_weight",
        "type": "int",
        "description": "Сила соответствия стилю (0–1).",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      },
      "weirdness_constraint": {
        "title": "Ограничение странности",
        "name": "weirdness_constraint",
        "type": "int",
        "description": "Экспериментальное отклонение (0–1).",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      },
      "audio_weight": {
        "title": "Вес аудио",
        "name": "audio_weight",
        "type": "int",
        "description": "Вес баланса (0–1).",
        "minValue": 0,
        "maxValue": 1,
        "step": 0.05,
        "default": 0.65
      },
      "title": {
        "type": "string",
        "title": "Заголовок",
        "name": "title",
        "description": "Название трека",
        "default": "Instrumental Song"
      }
    }
  },
  {
    "id": "suno-voice-clone",
    "name": "Suno Voice Cloning",
    "endpoint": "suno-voice-clone",
    "family": "suno",
    "description": "Клонируйте свой певческий голос за два дубля для использования с генерацией музыки Suno. Отправьте 10-секундный образец, затем повторите новую случайную фразу, сгенерированную системой (проверка на дипфейк), и получите переиспользуемый voice_id для создания музыки в Suno. Бесплатно на этапе превью.",
    "required": [
      "audio_url"
    ],
    "inputs": {
      "audio_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/minimax-voice-clone-in.wav"
        ],
        "description": "URL чистой 10-секундной записи голоса для клонирования. Моно допустимо. Провайдер извлекает вокальный сегмент между vocal_start_s и vocal_end_s.",
        "field": "audio",
        "type": "string",
        "title": "Ссылка на образец голоса",
        "name": "audio_url"
      },
      "voice_name": {
        "type": "string",
        "title": "Имя голоса",
        "name": "voice_name",
        "description": "Короткое название вашего голоса, отображается в списке выбора голосов (опционально).",
        "placeholder": "Мой голос"
      },
      "description": {
        "type": "string",
        "title": "Описание",
        "name": "description",
        "description": "Произвольное описание этого голоса (опционально).",
        "placeholder": "Тёплое женское контральто с лёгкой хрипотцой."
      },
      "style": {
        "type": "string",
        "title": "Теги стиля",
        "name": "style",
        "description": "Подсказки стиля через запятую, используемые при генерации музыки (опционально).",
        "placeholder": "Поп, женский вокал"
      },
      "language": {
        "enum": [
          "en",
          "zh",
          "es",
          "fr",
          "pt",
          "de",
          "ja",
          "ko",
          "hi",
          "ru"
        ],
        "title": "Язык",
        "name": "language",
        "type": "string",
        "description": "Язык, на котором произнесён образец голоса.",
        "default": "en"
      },
      "vocal_start_s": {
        "type": "int",
        "title": "Начало вокала (сек)",
        "name": "vocal_start_s",
        "description": "Время начала вокального сегмента в образце.",
        "default": 0,
        "minValue": 0,
        "maxValue": 60,
        "step": 1
      },
      "vocal_end_s": {
        "type": "int",
        "title": "Конец вокала (сек)",
        "name": "vocal_end_s",
        "description": "Время окончания вокального сегмента в образце. Должно быть больше, чем время начала вокала.",
        "default": 10,
        "minValue": 1,
        "maxValue": 60,
        "step": 1
      }
    }
  },
  {
    "id": "minimax-voice-clone",
    "name": "Minimax Voice Clone",
    "endpoint": "minimax-voice-clone",
    "family": "minimax-2.3",
    "description": "Minimax Voice Clone создаёт точную цифровую копию голоса диктора из короткого референсного аудиообразца. Она воспроизводит тон, эмоции, акцент, ритм и стиль речи диктора, а затем генерирует новую речь из любого текста.",
    "required": [
      "audio_url",
      "custom_voice_id"
    ],
    "inputs": {
      "audio_url": {
        "examples": [
          "https://d3adwkbyhxyrtq.cloudfront.net/webassets/videomodels/minimax-voice-clone-in.wav"
        ],
        "description": "URL аудио.",
        "field": "audio",
        "type": "string",
        "title": "Ссылка на аудио",
        "name": "audio_url"
      },
      "custom_voice_id": {
        "examples": [
          ""
        ],
        "description": "Пользовательский ID. Минимум 8 символов, должен включать буквы и цифры и начинаться с буквы. Повторяющиеся voice-id вызовут ошибку.",
        "format": "text",
        "type": "string",
        "title": "ID своего голоса",
        "name": "custom_voice_id",
        "placeholder": "sf02174c-5f5d-46e6-8758-7544128c27b2"
      },
      "model": {
        "enum": [
          "speech-02-hd",
          "speech-02-turbo",
          "speech-2.5-hd-preview",
          "speech-2.5-turbo-preview",
          "speech-2.6-hd",
          "speech-2.6-turbo"
        ],
        "title": "Модель",
        "name": "model",
        "type": "string",
        "description": "Укажите TTS-модель для использования в превью. Это только превью после клонирования. После создания модели для инференса можно использовать любую модель голоса Minimax Turbo или HD.",
        "default": "speech-02-hd"
      },
      "need_noise_reduction": {
        "type": "boolean",
        "title": "Нужно шумоподавление",
        "name": "need_noise_reduction",
        "description": "Включить шумоподавление. По умолчанию выключено.",
        "default": false
      },
      "need_volume_normalization": {
        "type": "boolean",
        "title": "Нужна нормализация громкости",
        "name": "need_volume_normalization",
        "description": "Укажите, включить ли нормализацию громкости.",
        "default": false
      },
      "accuracy": {
        "title": "Точность",
        "name": "accuracy",
        "type": "int",
        "description": "Порог точности валидации текста, диапазон значений [0, 1].",
        "default": 0.7,
        "minValue": 0,
        "maxValue": 1,
        "step": 0.01
      },
      "prompt": {
        "examples": [
          "Hello! Welcome to Muapiapp! This is a preview of your cloned voice. I hope you enjoy it!"
        ],
        "description": "Текст для аудиопревью. Максимум 2000 символов.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      }
    }
  },
  {
    "id": "minimax-speech-2.6-hd",
    "name": "Minimax Speech HD",
    "endpoint": "minimax-speech-2.6-hd",
    "family": "minimax-2.6",
    "description": "Speech-2.6-hd — модель Minimax для преобразования текста в речь высокой чёткости, превращающая письменный текст в естественное, человекоподобное аудио. Она создаёт речь студийного качества с чётким произношением, плавным темпом, реалистичными эмоциями и без фонового шума.",
    "required": [
      "prompt",
      "voice_id"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Every journey begins with a single moment of courage. Today, that moment is yours."
        ],
        "description": "Текст для преобразования в речь. Каждый символ — 1 токен. Максимум 10000 символов. Используйте <#x#> между словами для управления длительностью паузы (0.01–99.99 сек).",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "voice_id": {
        "enum": [
          "Wise_Woman",
          "Friendly_Person",
          "Inspirational_girl",
          "Deep_Voice_Man",
          "Calm_Woman",
          "Casual_Guy",
          "Lively_Girl",
          "Patient_Man",
          "Young_Knight",
          "Determined_Man",
          "Lovely_Girl",
          "Decent_Boy",
          "Imposing_Manner",
          "Elegant_Man",
          "Abbess",
          "Sweet_Girl_2",
          "Exuberant_Girl",
          "English_expressive_narrator",
          "English_radiant_girl",
          "English_magnetic_voiced_man",
          "English_compelling_lady1",
          "English_Aussie_Bloke",
          "English_captivating_female1",
          "English_Upbeat_Woman",
          "English_Trustworth_Man",
          "English_CalmWoman",
          "English_UpsetGirl",
          "English_Gentle-voiced_man",
          "English_Whispering_girl_v3",
          "English_Diligent_Man",
          "English_Graceful_Lady",
          "English_Husky_MetalHead",
          "English_ReservedYoungMan",
          "Thai_female_1_sample1",
          "Thai_female_2_sample2",
          "English_PlayfulGirl",
          "English_ManWithDeepVoice",
          "English_GentleTeacher",
          "English_MaturePartner",
          "English_FriendlyPerson",
          "English_MatureBoss",
          "English_Debator",
          "whisper_man",
          "English_Abbess",
          "English_LovelyGirl",
          "whisper_woman_1",
          "English_Steadymentor",
          "English_Deep-VoicedGentleman",
          "English_DeterminedMan",
          "English_Wiselady",
          "English_CaptivatingStoryteller",
          "English_AttractiveGirl",
          "English_DecentYoungMan",
          "English_SentimentalLady",
          "English_ImposingManner",
          "English_SadTeen",
          "English_ThoughtfulMan",
          "English_PassionateWarrior",
          "English_DecentBoy",
          "English_WiseScholar",
          "English_Soft-spokenGirl",
          "English_SereneWoman",
          "English_ConfidentWoman",
          "English_PatientMan",
          "English_Comedian",
          "English_GorgeousLady",
          "English_BossyLeader",
          "English_LovelyLady",
          "English_Strong-WilledBoy",
          "English_Deep-tonedMan",
          "English_StressedLady",
          "English_AssertiveQueen",
          "English_AnimeCharacter",
          "Portuguese_Optimisticyouth",
          "Portuguese_CuteElf",
          "English_Jovialman",
          "English_WhimsicalGirl",
          "English_CharmingQueen",
          "English_Kind-heartedGirl",
          "English_FriendlyNeighbor",
          "English_Sweet_Female_4",
          "English_Magnetic_Male_2",
          "English_Lively_Male_11",
          "English_Friendly_Female_3",
          "English_Steady_Female_1",
          "English_Lively_Male_10",
          "English_Magnetic_Male_12",
          "English_Steady_Female_5",
          "English_Insightful_Speaker",
          "English_patient_man_v1",
          "English_Persuasive_Man",
          "English_Explanatory_Man",
          "English_intellect_female_1",
          "English_Cute_Girl",
          "English_Sharp_Commentator",
          "English_Honest_Man",
          "angry_pirate_1",
          "massive_kind_troll",
          "movie_trailer_deep",
          "peace_and_ease",
          "moss_audio_6dc281eb-713c-11f0-a447-9613c873494c",
          "moss_audio_c12a59b9-7115-11f0-a447-9613c873494c",
          "moss_audio_076697ad-7144-11f0-a447-9613c873494c",
          "moss_audio_737a299c-734a-11f0-918f-4e0486034804",
          "moss_audio_19dbb103-7350-11f0-ad20-f2bc95e89150",
          "moss_audio_7c7e7ae2-7356-11f0-9540-7ef9b4b62566",
          "moss_audio_570551b1-735c-11f0-b236-0adeeecad052",
          "conversational_female_1_v1",
          "conversational_female_2_v1",
          "socialmedia_female_1_v1",
          "BritishChild_male_1_v1",
          "BritishChild_female_1_v1",
          "Chinese (Mandarin)_Reliable_Executive",
          "Chinese (Mandarin)_News_Anchor",
          "Chinese (Mandarin)_Unrestrained_Young_Man",
          "Chinese (Mandarin)_Mature_Woman",
          "Arrogant_Miss",
          "Chinese (Mandarin)_Kind-hearted_Antie",
          "Robot_Armor",
          "hunyin_6",
          "Chinese (Mandarin)_HK_Flight_Attendant",
          "Chinese (Mandarin)_Humorous_Elder",
          "Chinese (Mandarin)_Gentleman",
          "Chinese (Mandarin)_Warm_Bestie",
          "Chinese (Mandarin)_Southern_Young_Man",
          "Chinese (Mandarin)_Wise_Women",
          "moss_audio_cedfd4d2-736d-11f0-99be-fe40dd2a5fe8",
          "moss_audio_a0d611da-737c-11f0-ad20-f2bc95e89150",
          "moss_audio_4f4172f4-737b-11f0-9540-7ef9b4b62566",
          "moss_audio_62ca20b0-7380-11f0-99be-fe40dd2a5fe8",
          "Portuguese_PowerfulSoldier",
          "Portuguese_FascinatingBoy",
          "Portuguese_RomanticHusband",
          "Portuguese_StrictBoss",
          "Chinese (Mandarin)_Stubborn_Friend",
          "Chinese (Mandarin)_Sweet_Lady",
          "moss_audio_ad5baf92-735f-11f0-8263-fe5a2fe98ec8",
          "Chinese (Mandarin)_Gentle_Youth",
          "Chinese (Mandarin)_Warm_Girl",
          "Chinese (Mandarin)_Male_Announcer",
          "Chinese (Mandarin)_Kind-hearted_Elder",
          "Chinese (Mandarin)_Cute_Spirit",
          "Chinese (Mandarin)_Radio_Host",
          "Chinese (Mandarin)_Lyrical_Voice",
          "Chinese (Mandarin)_Straightforward_Boy",
          "Chinese (Mandarin)_Sincere_Adult",
          "Chinese (Mandarin)_Gentle_Senior",
          "Chinese (Mandarin)_Crisp_Girl",
          "Chinese (Mandarin)_Pure-hearted_Boy",
          "Chinese (Mandarin)_Soft_Girl",
          "Chinese (Mandarin)_IntellectualGirl",
          "Chinese (Mandarin)_Laid_BackGirl",
          "Chinese (Mandarin)_ExplorativeGirl",
          "Chinese (Mandarin)_Warm-HeartedAunt",
          "Chinese (Mandarin)_BashfulGirl",
          "Arabic_CalmWoman",
          "Arabic_FriendlyGuy",
          "Cantonese_ProfessionalHost∩╝êF)",
          "Cantonese_GentleLady",
          "Cantonese_ProfessionalHost∩╝êM)",
          "Cantonese_PlayfulMan",
          "Cantonese_CuteGirl",
          "Cantonese_KindWoman",
          "Cantonese_Narrator",
          "Cantonese_WiselProfessor",
          "Cantonese_IndifferentStaff",
          "Japanese_ColdQueen",
          "Japanese_DependableWoman",
          "Japanese_GentleButler",
          "Japanese_KindLady",
          "Dutch_kindhearted_girl",
          "Dutch_bossy_leader",
          "French_Male_Speech_New",
          "French_Female_News Anchor",
          "French_CasualMan",
          "French_MovieLeadFemale",
          "French_FemaleAnchor",
          "French_MaleNarrator",
          "French_Female Journalist",
          "French_Female_Speech_New",
          "German_FriendlyMan",
          "German_SweetLady",
          "German_PlayfulMan",
          "Indonesian_SweetGirl",
          "Indonesian_ReservedYoungMan",
          "Indonesian_CharmingGirl",
          "Russian_AmbitiousWoman",
          "Russian_ReliableMan",
          "Russian_CrazyQueen",
          "Russian_PessimisticGirl",
          "Indonesian_CalmWoman",
          "Indonesian_ConfidentWoman",
          "Indonesian_CaringMan",
          "Indonesian_BossyLeader",
          "Indonesian_DeterminedBoy",
          "Indonesian_GentleGirl",
          "Italian_BraveHeroine",
          "Italian_Narrator",
          "Italian_WanderingSorcerer",
          "Italian_DiligentLeader",
          "Italian_ReliableMan",
          "Italian_AthleticStudent",
          "Italian_ArrogantPrincess",
          "Japanese_Whisper_Belle",
          "Japanese_IntellectualSenior",
          "Japanese_DecisivePrincess",
          "Japanese_LoyalKnight",
          "Japanese_DominantMan",
          "Japanese_SeriousCommander",
          "Japanese_CalmLady",
          "Japanese_OptimisticYouth",
          "Japanese_GenerousIzakayaOwner",
          "Japanese_SportyStudent",
          "Japanese_InnocentBoy",
          "Japanese_GracefulMaiden",
          "Korean_PowerfulGirl",
          "Korean_BossyMan",
          "Korean_SweetGirl",
          "Korean_CheerfulBoyfriend",
          "Korean_EnchantingSister",
          "Korean_ShyGirl",
          "Korean_ReliableSister",
          "Korean_StrictBoss",
          "Korean_SassyGirl",
          "Korean_ChildhoodFriendGirl",
          "Korean_PlayboyCharmer",
          "Korean_ElegantPrincess",
          "English_energetic_male_1",
          "English_witty_female_1",
          "English_Lucky_Robot",
          "Korean_BraveFemaleWarrior",
          "Korean_BraveYouth",
          "Korean_CalmLady",
          "Korean_EnthusiasticTeen",
          "Korean_SoothingLady",
          "Korean_IntellectualSenior",
          "Korean_LonelyWarrior",
          "Korean_MatureLady",
          "Korean_InnocentBoy",
          "Korean_CharmingSister",
          "Korean_AthleticStudent",
          "Korean_BraveAdventurer",
          "Korean_CalmGentleman",
          "Korean_WiseElf",
          "Korean_CheerfulCoolJunior",
          "Korean_DecisiveQueen",
          "Korean_ColdYoungMan",
          "Korean_MysteriousGirl",
          "Korean_QuirkyGirl",
          "Korean_ConsiderateSenior",
          "Chinese (Mandarin)_Warm_HeartedGirl",
          "Korean_CheerfulLittleSister",
          "Korean_DominantMan",
          "Korean_AirheadedGirl",
          "Korean_ReliableYouth",
          "Korean_FriendlyBigSister",
          "Korean_GentleBoss",
          "Korean_ColdGirl",
          "Korean_HaughtyLady",
          "Korean_CharmingElderSister",
          "Korean_IntellectualMan",
          "Korean_CaringWoman",
          "Korean_WiseTeacher",
          "Korean_ConfidentBoss",
          "Korean_AthleticGirl",
          "Korean_PossessiveMan",
          "Korean_GentleWoman",
          "Korean_CockyGuy",
          "Korean_ThoughtfulWoman",
          "Korean_OptimisticYouth",
          "Portuguese_AnxiousMan",
          "Portuguese_Matureresearcher",
          "Portuguese_EnergeticGirl",
          "Portuguese_FunnyGuy",
          "Portuguese_Nuttylady",
          "Portuguese_Deep-tonedMan",
          "Portuguese_SentimentalLady",
          "Portuguese_BossyLeader",
          "Portuguese_Wiselady",
          "Portuguese_Strong-WilledBoy",
          "Portuguese_Deep-VoicedGentleman",
          "Portuguese_UpsetGirl",
          "Portuguese_PassionateWarrior",
          "Portuguese_AnimeCharacter",
          "Portuguese_ConfidentWoman",
          "Portuguese_AngryMan",
          "Portuguese_CaptivatingStoryteller",
          "Portuguese_Godfather",
          "Portuguese_ReservedYoungMan",
          "Portuguese_SmartYoungGirl",
          "Portuguese_Kind-heartedGirl",
          "Portuguese_Pompouslady",
          "Portuguese_Grinch",
          "Portuguese_Debator",
          "Portuguese_SweetGirl",
          "Portuguese_AttractiveGirl",
          "Portuguese_ThoughtfulMan",
          "Portuguese_PlayfulGirl",
          "Portuguese_GorgeousLady",
          "Portuguese_LovelyLady",
          "Portuguese_SereneWoman",
          "Portuguese_SadTeen",
          "Portuguese_MaturePartner",
          "Portuguese_Comedian",
          "Portuguese_NaughtySchoolgirl",
          "Portuguese_Narrator",
          "Portuguese_ToughBoss",
          "Portuguese_Fussyhostess",
          "Portuguese_Dramatist",
          "Portuguese_Steadymentor",
          "Portuguese_Jovialman",
          "Portuguese_CharmingQueen",
          "Portuguese_SantaClaus",
          "Portuguese_Rudolph",
          "Portuguese_Arnold",
          "Portuguese_CharmingSanta",
          "Portuguese_Ghost",
          "Portuguese_HumorousElder",
          "Portuguese_CalmLeader",
          "Portuguese_GentleTeacher",
          "Portuguese_EnergeticBoy",
          "Portuguese_ReliableMan",
          "Portuguese_SereneElder",
          "Portuguese_GrimReaper",
          "Portuguese_AssertiveQueen",
          "Portuguese_WhimsicalGirl",
          "Portuguese_StressedLady",
          "Portuguese_FriendlyNeighbor",
          "Portuguese_CaringGirlfriend",
          "Portuguese_InspiringLady",
          "Portuguese_PlayfulSpirit",
          "Portuguese_ElegantGirl",
          "Portuguese_CompellingGirl",
          "Portuguese_PowerfulVeteran",
          "Portuguese_SensibleManager",
          "Portuguese_ThoughtfulLady",
          "Portuguese_TheatricalActor",
          "Portuguese_FragileBoy",
          "Portuguese_ChattyGirl",
          "Portuguese_Conscientiousinstructor",
          "Portuguese_RationalMan",
          "Portuguese_WiseScholar",
          "Portuguese_FrankLady",
          "Portuguese_DeterminedManager",
          "Portuguese_CharmingLady",
          "Russian_HandsomeChildhoodFriend",
          "Russian_BrightHeroine",
          "Russian_AttractiveGuy",
          "Russian_Bad-temperedBoy",
          "Spanish_FriendlyNeighbor",
          "Spanish_FragileBoy",
          "Spanish_UpsetGirl",
          "Spanish_Soft-spokenGirl",
          "Spanish_CharmingQueen",
          "Spanish_Nuttylady",
          "Spanish_ElegantGirl",
          "Spanish_FascinatingBoy",
          "Spanish_FunnyGuy",
          "Spanish_PlayfulSpirit",
          "Spanish_TheatricalActor",
          "Spanish_SereneWoman",
          "Spanish_MaturePartner",
          "Spanish_CaptivatingStoryteller",
          "Spanish_Narrator",
          "Spanish_WiseScholar",
          "Spanish_Kind-heartedGirl",
          "Spanish_DeterminedManager",
          "Spanish_BossyLeader",
          "Spanish_ReservedYoungMan",
          "Spanish_ConfidentWoman",
          "Spanish_ThoughtfulMan",
          "Spanish_Strong-WilledBoy",
          "Spanish_SophisticatedLady",
          "Spanish_RationalMan",
          "Spanish_AnimeCharacter",
          "Spanish_Deep-tonedMan",
          "Spanish_Fussyhostess",
          "Spanish_SincereTeen",
          "Spanish_FrankLady",
          "Spanish_Comedian",
          "Spanish_Debator",
          "Spanish_ToughBoss",
          "Spanish_Wiselady",
          "Spanish_Steadymentor",
          "finnish_male_1_v2",
          "hindi_male_1_v2",
          "hindi_female_2_v1",
          "hindi_female_1_v2",
          "Spanish_Jovialman",
          "Spanish_SantaClaus",
          "Spanish_Rudolph",
          "Spanish_Intonategirl",
          "Spanish_Arnold",
          "Spanish_Ghost",
          "Spanish_HumorousElder",
          "Spanish_EnergeticBoy",
          "Spanish_WhimsicalGirl",
          "Spanish_StrictBoss",
          "Spanish_ReliableMan",
          "Spanish_SereneElder",
          "Spanish_AngryMan",
          "Spanish_AssertiveQueen",
          "Spanish_CaringGirlfriend",
          "Spanish_PowerfulSoldier",
          "Spanish_PassionateWarrior",
          "Spanish_ChattyGirl",
          "Spanish_RomanticHusband",
          "Spanish_CompellingGirl",
          "Spanish_PowerfulVeteran",
          "Spanish_SensibleManager",
          "Spanish_ThoughtfulLady",
          "Turkish_CalmWoman",
          "Turkish_Trustworthyman",
          "Ukrainian_CalmWoman",
          "Ukrainian_WiseScholar",
          "Vietnamese_Serene_Man",
          "Vietnamese_female_4_v1",
          "Vietnamese_male_1_v2",
          "Vietnamese_kindhearted_girl",
          "Thai_Optimistic_girl",
          "Thai_male_1_sample8",
          "Thai_Tender_Woman",
          "Thai_male_2_sample2",
          "Polish_male_1_sample4",
          "Polish_male_2_sample3",
          "Polish_female_1_sample1",
          "Polish_female_2_sample3",
          "Romanian_male_1_sample2",
          "Romanian_male_2_sample1",
          "Romanian_female_1_sample4",
          "Romanian_female_2_sample1",
          "Greek_female_1_sample1",
          "greek_male_1a_v1",
          "Greek_female_2_sample3",
          "czech_male_1_v1",
          "czech_female_5_v7",
          "czech_female_2_v2",
          "finnish_male_3_v1",
          "finnish_female_4_v1",
          "Bulgarian_male_2_v1",
          "Bulgarian_female_1_v1",
          "Danish_male_1_v1",
          "Danish_female_1_v1",
          "Hebrew_male_1_v1",
          "Hebrew_female_1_v1",
          "Malay_male_1_v1",
          "Malay_female_1_v1",
          "Malay_female_2_v1",
          "Persian_male_1_v1",
          "Persian_female_1_v1",
          "Slovak_male_1_v1",
          "Slovak_female_1_v1",
          "Swedish_male_1_v1",
          "Swedish_female_1_v1",
          "Croatian_male_1_v1",
          "Croatian_female_1_v1",
          "Filipino_male_1_v1",
          "Filipino_female_1_v1",
          "Hungarian_male_1_v1",
          "Hungarian_female_1_v1",
          "Norwegian_male_1_v1",
          "Norwegian_female_1_v1",
          "Slovenian_male_1_v1",
          "Slovenian_female_1_v2",
          "Catalan_male_1_v1",
          "Catalan_female_1_v1",
          "Nynorsk_male_1_v1",
          "Nynorsk_female_1_v1",
          "Tamil_male_1_v1",
          "Tamil_female_1_v1",
          "Afrikaans_male_1_v1",
          "Afrikaans_female_1_v1"
        ],
        "description": "Желаемый ID голоса. Используйте обученный вами ID голоса (https://muapi.ai/playground/minimax-voice-clone) или один из системных ID голосов ниже",
        "type": "string",
        "typing": true,
        "title": "ID голоса",
        "name": "voice_id",
        "default": "Friendly_Person"
      },
      "speed": {
        "title": "Скорость",
        "name": "speed",
        "type": "int",
        "description": "Скорость речи. Диапазон: 0.5–2.0, где 1.0 — обычная скорость.",
        "default": 1,
        "minValue": 0.5,
        "maxValue": 2,
        "step": 0.01
      },
      "volume": {
        "title": "Громкость",
        "name": "volume",
        "type": "int",
        "description": "Громкость речи. Диапазон: 0.1–10.0, где 1.0 — обычная громкость.",
        "default": 1,
        "minValue": 0.1,
        "maxValue": 10,
        "step": 0.01
      },
      "pitch": {
        "title": "Высота тона",
        "name": "pitch",
        "type": "int",
        "description": "Высота голоса. Диапазон: от -12 до 12, где 0 — обычная высота.",
        "default": 0,
        "minValue": -12,
        "maxValue": 12,
        "step": 1
      },
      "emotion": {
        "enum": [
          "happy",
          "sad",
          "angry",
          "fearful",
          "disgusted",
          "surprised",
          "neutral"
        ],
        "title": "Эмоция",
        "name": "emotion",
        "type": "string",
        "description": "Эмоция сгенерированной речи.",
        "default": "happy"
      },
      "english_normalization": {
        "type": "boolean",
        "title": "Нормализация английского",
        "name": "english_normalization",
        "description": "Этот параметр поддерживает нормализацию английского текста, что улучшает работу в сценариях чтения чисел.",
        "default": false
      },
      "sample_rate": {
        "enum": [
          8000,
          16000,
          22050,
          24000,
          32000,
          44100
        ],
        "type": "integer",
        "title": "Частота дискретизации",
        "name": "sample_rate",
        "description": "Частота дискретизации сгенерированного звука.",
        "default": 8000
      },
      "bitrate": {
        "enum": [
          32000,
          64000,
          128000,
          256000
        ],
        "type": "integer",
        "title": "Битрейт",
        "name": "bitrate",
        "description": "Битрейт сгенерированного звука.",
        "default": 32000
      },
      "channel": {
        "enum": [
          1,
          2
        ],
        "type": "integer",
        "title": "Канал",
        "name": "channel",
        "description": "Количество каналов сгенерированного аудио. 1: моно, 2: стерео.",
        "default": 1
      },
      "format": {
        "enum": [
          "mp3",
          "wav",
          "pcm",
          "flac"
        ],
        "type": "string",
        "title": "Формат",
        "name": "format",
        "description": "Формат сгенерированного звука.",
        "default": "mp3"
      },
      "language_boost": {
        "enum": [
          "Chinese",
          "Chinese,Yue",
          "English",
          "Arabic",
          "Russian",
          "Spanish",
          "French",
          "Portuguese",
          "German",
          "Turkish",
          "Dutch",
          "Ukrainian",
          "Vietnamese",
          "Indonesian",
          "Japanese",
          "Italian",
          "Korean",
          "Thai",
          "Polish",
          "Romanian",
          "Greek",
          "Czech",
          "Finnish",
          "Hindi",
          "Bulgarian",
          "Danish",
          "Hebrew",
          "Malay",
          "Persian",
          "Slovak",
          "Swedish",
          "Croatian",
          "Filipino",
          "Hungarian",
          "Norwegian",
          "Slovenian",
          "Catalan",
          "Nynorsk",
          "Tamil",
          "Afrikaans",
          "auto"
        ],
        "title": "Усиление языка",
        "name": "language_boost",
        "type": "string",
        "description": "Улучшить распознавание указанных языков и диалектов.",
        "default": "auto"
      }
    }
  },
  {
    "id": "minimax-speech-2.6-turbo",
    "name": "Minimax Speech Turbo",
    "endpoint": "minimax-speech-2.6-turbo",
    "family": "minimax-2.6",
    "description": "Speech-2.6-turbo — быстрая, лёгкая модель Minimax для преобразования текста в речь, созданная для быстрой генерации аудио с сохранением хорошего естественного качества голоса. Она создаёт чёткую речь с плавным темпом и минимальной задержкой.",
    "required": [
      "prompt",
      "voice_id"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Welcome to Minimax-Speech 2.6 by Muapiapp! Get ready for an audio revolution! We are thrilled to introduce a model so realistic, it's virtually indistinguishable from a human voice. You're going to be amazed by its lifelike delivery!"
        ],
        "description": "Текст для преобразования в речь. Каждый символ — 1 токен. Максимум 10000 символов. Используйте <#x#> между словами для управления длительностью паузы (0.01–99.99 сек).",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "voice_id": {
        "enum": [
          "Wise_Woman",
          "Friendly_Person",
          "Inspirational_girl",
          "Deep_Voice_Man",
          "Calm_Woman",
          "Casual_Guy",
          "Lively_Girl",
          "Patient_Man",
          "Young_Knight",
          "Determined_Man",
          "Lovely_Girl",
          "Decent_Boy",
          "Imposing_Manner",
          "Elegant_Man",
          "Abbess",
          "Sweet_Girl_2",
          "Exuberant_Girl",
          "English_expressive_narrator",
          "English_radiant_girl",
          "English_magnetic_voiced_man",
          "English_compelling_lady1",
          "English_Aussie_Bloke",
          "English_captivating_female1",
          "English_Upbeat_Woman",
          "English_Trustworth_Man",
          "English_CalmWoman",
          "English_UpsetGirl",
          "English_Gentle-voiced_man",
          "English_Whispering_girl_v3",
          "English_Diligent_Man",
          "English_Graceful_Lady",
          "English_Husky_MetalHead",
          "English_ReservedYoungMan",
          "Thai_female_1_sample1",
          "Thai_female_2_sample2",
          "English_PlayfulGirl",
          "English_ManWithDeepVoice",
          "English_GentleTeacher",
          "English_MaturePartner",
          "English_FriendlyPerson",
          "English_MatureBoss",
          "English_Debator",
          "whisper_man",
          "English_Abbess",
          "English_LovelyGirl",
          "whisper_woman_1",
          "English_Steadymentor",
          "English_Deep-VoicedGentleman",
          "English_DeterminedMan",
          "English_Wiselady",
          "English_CaptivatingStoryteller",
          "English_AttractiveGirl",
          "English_DecentYoungMan",
          "English_SentimentalLady",
          "English_ImposingManner",
          "English_SadTeen",
          "English_ThoughtfulMan",
          "English_PassionateWarrior",
          "English_DecentBoy",
          "English_WiseScholar",
          "English_Soft-spokenGirl",
          "English_SereneWoman",
          "English_ConfidentWoman",
          "English_PatientMan",
          "English_Comedian",
          "English_GorgeousLady",
          "English_BossyLeader",
          "English_LovelyLady",
          "English_Strong-WilledBoy",
          "English_Deep-tonedMan",
          "English_StressedLady",
          "English_AssertiveQueen",
          "English_AnimeCharacter",
          "Portuguese_Optimisticyouth",
          "Portuguese_CuteElf",
          "English_Jovialman",
          "English_WhimsicalGirl",
          "English_CharmingQueen",
          "English_Kind-heartedGirl",
          "English_FriendlyNeighbor",
          "English_Sweet_Female_4",
          "English_Magnetic_Male_2",
          "English_Lively_Male_11",
          "English_Friendly_Female_3",
          "English_Steady_Female_1",
          "English_Lively_Male_10",
          "English_Magnetic_Male_12",
          "English_Steady_Female_5",
          "English_Insightful_Speaker",
          "English_patient_man_v1",
          "English_Persuasive_Man",
          "English_Explanatory_Man",
          "English_intellect_female_1",
          "English_Cute_Girl",
          "English_Sharp_Commentator",
          "English_Honest_Man",
          "angry_pirate_1",
          "massive_kind_troll",
          "movie_trailer_deep",
          "peace_and_ease",
          "moss_audio_6dc281eb-713c-11f0-a447-9613c873494c",
          "moss_audio_c12a59b9-7115-11f0-a447-9613c873494c",
          "moss_audio_076697ad-7144-11f0-a447-9613c873494c",
          "moss_audio_737a299c-734a-11f0-918f-4e0486034804",
          "moss_audio_19dbb103-7350-11f0-ad20-f2bc95e89150",
          "moss_audio_7c7e7ae2-7356-11f0-9540-7ef9b4b62566",
          "moss_audio_570551b1-735c-11f0-b236-0adeeecad052",
          "conversational_female_1_v1",
          "conversational_female_2_v1",
          "socialmedia_female_1_v1",
          "BritishChild_male_1_v1",
          "BritishChild_female_1_v1",
          "Chinese (Mandarin)_Reliable_Executive",
          "Chinese (Mandarin)_News_Anchor",
          "Chinese (Mandarin)_Unrestrained_Young_Man",
          "Chinese (Mandarin)_Mature_Woman",
          "Arrogant_Miss",
          "Chinese (Mandarin)_Kind-hearted_Antie",
          "Robot_Armor",
          "hunyin_6",
          "Chinese (Mandarin)_HK_Flight_Attendant",
          "Chinese (Mandarin)_Humorous_Elder",
          "Chinese (Mandarin)_Gentleman",
          "Chinese (Mandarin)_Warm_Bestie",
          "Chinese (Mandarin)_Southern_Young_Man",
          "Chinese (Mandarin)_Wise_Women",
          "moss_audio_cedfd4d2-736d-11f0-99be-fe40dd2a5fe8",
          "moss_audio_a0d611da-737c-11f0-ad20-f2bc95e89150",
          "moss_audio_4f4172f4-737b-11f0-9540-7ef9b4b62566",
          "moss_audio_62ca20b0-7380-11f0-99be-fe40dd2a5fe8",
          "Portuguese_PowerfulSoldier",
          "Portuguese_FascinatingBoy",
          "Portuguese_RomanticHusband",
          "Portuguese_StrictBoss",
          "Chinese (Mandarin)_Stubborn_Friend",
          "Chinese (Mandarin)_Sweet_Lady",
          "moss_audio_ad5baf92-735f-11f0-8263-fe5a2fe98ec8",
          "Chinese (Mandarin)_Gentle_Youth",
          "Chinese (Mandarin)_Warm_Girl",
          "Chinese (Mandarin)_Male_Announcer",
          "Chinese (Mandarin)_Kind-hearted_Elder",
          "Chinese (Mandarin)_Cute_Spirit",
          "Chinese (Mandarin)_Radio_Host",
          "Chinese (Mandarin)_Lyrical_Voice",
          "Chinese (Mandarin)_Straightforward_Boy",
          "Chinese (Mandarin)_Sincere_Adult",
          "Chinese (Mandarin)_Gentle_Senior",
          "Chinese (Mandarin)_Crisp_Girl",
          "Chinese (Mandarin)_Pure-hearted_Boy",
          "Chinese (Mandarin)_Soft_Girl",
          "Chinese (Mandarin)_IntellectualGirl",
          "Chinese (Mandarin)_Laid_BackGirl",
          "Chinese (Mandarin)_ExplorativeGirl",
          "Chinese (Mandarin)_Warm-HeartedAunt",
          "Chinese (Mandarin)_BashfulGirl",
          "Arabic_CalmWoman",
          "Arabic_FriendlyGuy",
          "Cantonese_ProfessionalHost∩╝êF)",
          "Cantonese_GentleLady",
          "Cantonese_ProfessionalHost∩╝êM)",
          "Cantonese_PlayfulMan",
          "Cantonese_CuteGirl",
          "Cantonese_KindWoman",
          "Cantonese_Narrator",
          "Cantonese_WiselProfessor",
          "Cantonese_IndifferentStaff",
          "Japanese_ColdQueen",
          "Japanese_DependableWoman",
          "Japanese_GentleButler",
          "Japanese_KindLady",
          "Dutch_kindhearted_girl",
          "Dutch_bossy_leader",
          "French_Male_Speech_New",
          "French_Female_News Anchor",
          "French_CasualMan",
          "French_MovieLeadFemale",
          "French_FemaleAnchor",
          "French_MaleNarrator",
          "French_Female Journalist",
          "French_Female_Speech_New",
          "German_FriendlyMan",
          "German_SweetLady",
          "German_PlayfulMan",
          "Indonesian_SweetGirl",
          "Indonesian_ReservedYoungMan",
          "Indonesian_CharmingGirl",
          "Russian_AmbitiousWoman",
          "Russian_ReliableMan",
          "Russian_CrazyQueen",
          "Russian_PessimisticGirl",
          "Indonesian_CalmWoman",
          "Indonesian_ConfidentWoman",
          "Indonesian_CaringMan",
          "Indonesian_BossyLeader",
          "Indonesian_DeterminedBoy",
          "Indonesian_GentleGirl",
          "Italian_BraveHeroine",
          "Italian_Narrator",
          "Italian_WanderingSorcerer",
          "Italian_DiligentLeader",
          "Italian_ReliableMan",
          "Italian_AthleticStudent",
          "Italian_ArrogantPrincess",
          "Japanese_Whisper_Belle",
          "Japanese_IntellectualSenior",
          "Japanese_DecisivePrincess",
          "Japanese_LoyalKnight",
          "Japanese_DominantMan",
          "Japanese_SeriousCommander",
          "Japanese_CalmLady",
          "Japanese_OptimisticYouth",
          "Japanese_GenerousIzakayaOwner",
          "Japanese_SportyStudent",
          "Japanese_InnocentBoy",
          "Japanese_GracefulMaiden",
          "Korean_PowerfulGirl",
          "Korean_BossyMan",
          "Korean_SweetGirl",
          "Korean_CheerfulBoyfriend",
          "Korean_EnchantingSister",
          "Korean_ShyGirl",
          "Korean_ReliableSister",
          "Korean_StrictBoss",
          "Korean_SassyGirl",
          "Korean_ChildhoodFriendGirl",
          "Korean_PlayboyCharmer",
          "Korean_ElegantPrincess",
          "English_energetic_male_1",
          "English_witty_female_1",
          "English_Lucky_Robot",
          "Korean_BraveFemaleWarrior",
          "Korean_BraveYouth",
          "Korean_CalmLady",
          "Korean_EnthusiasticTeen",
          "Korean_SoothingLady",
          "Korean_IntellectualSenior",
          "Korean_LonelyWarrior",
          "Korean_MatureLady",
          "Korean_InnocentBoy",
          "Korean_CharmingSister",
          "Korean_AthleticStudent",
          "Korean_BraveAdventurer",
          "Korean_CalmGentleman",
          "Korean_WiseElf",
          "Korean_CheerfulCoolJunior",
          "Korean_DecisiveQueen",
          "Korean_ColdYoungMan",
          "Korean_MysteriousGirl",
          "Korean_QuirkyGirl",
          "Korean_ConsiderateSenior",
          "Chinese (Mandarin)_Warm_HeartedGirl",
          "Korean_CheerfulLittleSister",
          "Korean_DominantMan",
          "Korean_AirheadedGirl",
          "Korean_ReliableYouth",
          "Korean_FriendlyBigSister",
          "Korean_GentleBoss",
          "Korean_ColdGirl",
          "Korean_HaughtyLady",
          "Korean_CharmingElderSister",
          "Korean_IntellectualMan",
          "Korean_CaringWoman",
          "Korean_WiseTeacher",
          "Korean_ConfidentBoss",
          "Korean_AthleticGirl",
          "Korean_PossessiveMan",
          "Korean_GentleWoman",
          "Korean_CockyGuy",
          "Korean_ThoughtfulWoman",
          "Korean_OptimisticYouth",
          "Portuguese_AnxiousMan",
          "Portuguese_Matureresearcher",
          "Portuguese_EnergeticGirl",
          "Portuguese_FunnyGuy",
          "Portuguese_Nuttylady",
          "Portuguese_Deep-tonedMan",
          "Portuguese_SentimentalLady",
          "Portuguese_BossyLeader",
          "Portuguese_Wiselady",
          "Portuguese_Strong-WilledBoy",
          "Portuguese_Deep-VoicedGentleman",
          "Portuguese_UpsetGirl",
          "Portuguese_PassionateWarrior",
          "Portuguese_AnimeCharacter",
          "Portuguese_ConfidentWoman",
          "Portuguese_AngryMan",
          "Portuguese_CaptivatingStoryteller",
          "Portuguese_Godfather",
          "Portuguese_ReservedYoungMan",
          "Portuguese_SmartYoungGirl",
          "Portuguese_Kind-heartedGirl",
          "Portuguese_Pompouslady",
          "Portuguese_Grinch",
          "Portuguese_Debator",
          "Portuguese_SweetGirl",
          "Portuguese_AttractiveGirl",
          "Portuguese_ThoughtfulMan",
          "Portuguese_PlayfulGirl",
          "Portuguese_GorgeousLady",
          "Portuguese_LovelyLady",
          "Portuguese_SereneWoman",
          "Portuguese_SadTeen",
          "Portuguese_MaturePartner",
          "Portuguese_Comedian",
          "Portuguese_NaughtySchoolgirl",
          "Portuguese_Narrator",
          "Portuguese_ToughBoss",
          "Portuguese_Fussyhostess",
          "Portuguese_Dramatist",
          "Portuguese_Steadymentor",
          "Portuguese_Jovialman",
          "Portuguese_CharmingQueen",
          "Portuguese_SantaClaus",
          "Portuguese_Rudolph",
          "Portuguese_Arnold",
          "Portuguese_CharmingSanta",
          "Portuguese_Ghost",
          "Portuguese_HumorousElder",
          "Portuguese_CalmLeader",
          "Portuguese_GentleTeacher",
          "Portuguese_EnergeticBoy",
          "Portuguese_ReliableMan",
          "Portuguese_SereneElder",
          "Portuguese_GrimReaper",
          "Portuguese_AssertiveQueen",
          "Portuguese_WhimsicalGirl",
          "Portuguese_StressedLady",
          "Portuguese_FriendlyNeighbor",
          "Portuguese_CaringGirlfriend",
          "Portuguese_InspiringLady",
          "Portuguese_PlayfulSpirit",
          "Portuguese_ElegantGirl",
          "Portuguese_CompellingGirl",
          "Portuguese_PowerfulVeteran",
          "Portuguese_SensibleManager",
          "Portuguese_ThoughtfulLady",
          "Portuguese_TheatricalActor",
          "Portuguese_FragileBoy",
          "Portuguese_ChattyGirl",
          "Portuguese_Conscientiousinstructor",
          "Portuguese_RationalMan",
          "Portuguese_WiseScholar",
          "Portuguese_FrankLady",
          "Portuguese_DeterminedManager",
          "Portuguese_CharmingLady",
          "Russian_HandsomeChildhoodFriend",
          "Russian_BrightHeroine",
          "Russian_AttractiveGuy",
          "Russian_Bad-temperedBoy",
          "Spanish_FriendlyNeighbor",
          "Spanish_FragileBoy",
          "Spanish_UpsetGirl",
          "Spanish_Soft-spokenGirl",
          "Spanish_CharmingQueen",
          "Spanish_Nuttylady",
          "Spanish_ElegantGirl",
          "Spanish_FascinatingBoy",
          "Spanish_FunnyGuy",
          "Spanish_PlayfulSpirit",
          "Spanish_TheatricalActor",
          "Spanish_SereneWoman",
          "Spanish_MaturePartner",
          "Spanish_CaptivatingStoryteller",
          "Spanish_Narrator",
          "Spanish_WiseScholar",
          "Spanish_Kind-heartedGirl",
          "Spanish_DeterminedManager",
          "Spanish_BossyLeader",
          "Spanish_ReservedYoungMan",
          "Spanish_ConfidentWoman",
          "Spanish_ThoughtfulMan",
          "Spanish_Strong-WilledBoy",
          "Spanish_SophisticatedLady",
          "Spanish_RationalMan",
          "Spanish_AnimeCharacter",
          "Spanish_Deep-tonedMan",
          "Spanish_Fussyhostess",
          "Spanish_SincereTeen",
          "Spanish_FrankLady",
          "Spanish_Comedian",
          "Spanish_Debator",
          "Spanish_ToughBoss",
          "Spanish_Wiselady",
          "Spanish_Steadymentor",
          "finnish_male_1_v2",
          "hindi_male_1_v2",
          "hindi_female_2_v1",
          "hindi_female_1_v2",
          "Spanish_Jovialman",
          "Spanish_SantaClaus",
          "Spanish_Rudolph",
          "Spanish_Intonategirl",
          "Spanish_Arnold",
          "Spanish_Ghost",
          "Spanish_HumorousElder",
          "Spanish_EnergeticBoy",
          "Spanish_WhimsicalGirl",
          "Spanish_StrictBoss",
          "Spanish_ReliableMan",
          "Spanish_SereneElder",
          "Spanish_AngryMan",
          "Spanish_AssertiveQueen",
          "Spanish_CaringGirlfriend",
          "Spanish_PowerfulSoldier",
          "Spanish_PassionateWarrior",
          "Spanish_ChattyGirl",
          "Spanish_RomanticHusband",
          "Spanish_CompellingGirl",
          "Spanish_PowerfulVeteran",
          "Spanish_SensibleManager",
          "Spanish_ThoughtfulLady",
          "Turkish_CalmWoman",
          "Turkish_Trustworthyman",
          "Ukrainian_CalmWoman",
          "Ukrainian_WiseScholar",
          "Vietnamese_Serene_Man",
          "Vietnamese_female_4_v1",
          "Vietnamese_male_1_v2",
          "Vietnamese_kindhearted_girl",
          "Thai_Optimistic_girl",
          "Thai_male_1_sample8",
          "Thai_Tender_Woman",
          "Thai_male_2_sample2",
          "Polish_male_1_sample4",
          "Polish_male_2_sample3",
          "Polish_female_1_sample1",
          "Polish_female_2_sample3",
          "Romanian_male_1_sample2",
          "Romanian_male_2_sample1",
          "Romanian_female_1_sample4",
          "Romanian_female_2_sample1",
          "Greek_female_1_sample1",
          "greek_male_1a_v1",
          "Greek_female_2_sample3",
          "czech_male_1_v1",
          "czech_female_5_v7",
          "czech_female_2_v2",
          "finnish_male_3_v1",
          "finnish_female_4_v1",
          "Bulgarian_male_2_v1",
          "Bulgarian_female_1_v1",
          "Danish_male_1_v1",
          "Danish_female_1_v1",
          "Hebrew_male_1_v1",
          "Hebrew_female_1_v1",
          "Malay_male_1_v1",
          "Malay_female_1_v1",
          "Malay_female_2_v1",
          "Persian_male_1_v1",
          "Persian_female_1_v1",
          "Slovak_male_1_v1",
          "Slovak_female_1_v1",
          "Swedish_male_1_v1",
          "Swedish_female_1_v1",
          "Croatian_male_1_v1",
          "Croatian_female_1_v1",
          "Filipino_male_1_v1",
          "Filipino_female_1_v1",
          "Hungarian_male_1_v1",
          "Hungarian_female_1_v1",
          "Norwegian_male_1_v1",
          "Norwegian_female_1_v1",
          "Slovenian_male_1_v1",
          "Slovenian_female_1_v2",
          "Catalan_male_1_v1",
          "Catalan_female_1_v1",
          "Nynorsk_male_1_v1",
          "Nynorsk_female_1_v1",
          "Tamil_male_1_v1",
          "Tamil_female_1_v1",
          "Afrikaans_male_1_v1",
          "Afrikaans_female_1_v1"
        ],
        "description": "Желаемый ID голоса. Используйте обученный вами ID голоса (https://muapi.ai/playground/minimax-voice-clone) или один из системных ID голосов ниже",
        "type": "string",
        "typing": true,
        "title": "ID голоса",
        "name": "voice_id",
        "default": "Friendly_Person"
      },
      "speed": {
        "title": "Скорость",
        "name": "speed",
        "type": "int",
        "description": "Скорость речи. Диапазон: 0.5–2.0, где 1.0 — обычная скорость.",
        "default": 1,
        "minValue": 0.5,
        "maxValue": 2,
        "step": 0.01
      },
      "volume": {
        "title": "Громкость",
        "name": "volume",
        "type": "int",
        "description": "Громкость речи. Диапазон: 0.1–10.0, где 1.0 — обычная громкость.",
        "default": 1,
        "minValue": 0.1,
        "maxValue": 10,
        "step": 0.01
      },
      "pitch": {
        "title": "Высота тона",
        "name": "pitch",
        "type": "int",
        "description": "Высота голоса. Диапазон: от -12 до 12, где 0 — обычная высота.",
        "default": 0,
        "minValue": -12,
        "maxValue": 12,
        "step": 1
      },
      "emotion": {
        "enum": [
          "happy",
          "sad",
          "angry",
          "fearful",
          "disgusted",
          "surprised",
          "neutral"
        ],
        "title": "Эмоция",
        "name": "emotion",
        "type": "string",
        "description": "Эмоция сгенерированной речи.",
        "default": "surprised"
      },
      "english_normalization": {
        "type": "boolean",
        "title": "Нормализация английского",
        "name": "english_normalization",
        "description": "Этот параметр поддерживает нормализацию английского текста, что улучшает работу в сценариях чтения чисел.",
        "default": false
      },
      "sample_rate": {
        "enum": [
          8000,
          16000,
          22050,
          24000,
          32000,
          44100
        ],
        "type": "integer",
        "title": "Частота дискретизации",
        "name": "sample_rate",
        "description": "Частота дискретизации сгенерированного звука.",
        "default": 8000
      },
      "bitrate": {
        "enum": [
          32000,
          64000,
          128000,
          256000
        ],
        "type": "integer",
        "title": "Битрейт",
        "name": "bitrate",
        "description": "Битрейт сгенерированного звука.",
        "default": 32000
      },
      "channel": {
        "enum": [
          1,
          2
        ],
        "type": "integer",
        "title": "Канал",
        "name": "channel",
        "description": "Количество каналов сгенерированного аудио. 1: моно, 2: стерео.",
        "default": 1
      },
      "format": {
        "enum": [
          "mp3",
          "wav",
          "pcm",
          "flac"
        ],
        "type": "string",
        "title": "Формат",
        "name": "format",
        "description": "Формат сгенерированного звука.",
        "default": "mp3"
      },
      "language_boost": {
        "enum": [
          "Chinese",
          "Chinese,Yue",
          "English",
          "Arabic",
          "Russian",
          "Spanish",
          "French",
          "Portuguese",
          "German",
          "Turkish",
          "Dutch",
          "Ukrainian",
          "Vietnamese",
          "Indonesian",
          "Japanese",
          "Italian",
          "Korean",
          "Thai",
          "Polish",
          "Romanian",
          "Greek",
          "Czech",
          "Finnish",
          "Hindi",
          "Bulgarian",
          "Danish",
          "Hebrew",
          "Malay",
          "Persian",
          "Slovak",
          "Swedish",
          "Croatian",
          "Filipino",
          "Hungarian",
          "Norwegian",
          "Slovenian",
          "Catalan",
          "Nynorsk",
          "Tamil",
          "Afrikaans",
          "auto"
        ],
        "title": "Усиление языка",
        "name": "language_boost",
        "type": "string",
        "description": "Улучшить распознавание указанных языков и диалектов.",
        "default": "auto"
      }
    }
  },{
    "id": "mmaudio-v2-text-to-audio",
    "name": "MM Audio V2",
    "endpoint": "mmaudio-v2/text-to-audio",
    "family": "mmaudio",
    "description": "Преобразуйте текст в естественно звучащую речь с помощью mmAudio-v2. Идеально для озвучки, виртуальных ассистентов и дикторского текста с живой чёткостью и тоном.",
    "required": [
      "prompt"
    ],
    "inputs": {
      "prompt": {
        "examples": [
          "Indian holy music"
        ],
        "description": "Промпт для генерации аудио.",
        "type": "string",
        "title": "Промпт",
        "name": "prompt"
      },
      "duration": {
        "title": "Длительность",
        "name": "duration",
        "type": "int",
        "description": "Длительность генерируемого аудио.",
        "default": 8,
        "minValue": 1,
        "maxValue": 30,
        "step": 1
      }
    }
  }
,
  {
    "id": "elevenlabs-text-to-dialogue-v3",
    "name": "ElevenLabs Text to Dialogue V3",
    "endpoint": "elevenlabs-text-to-dialogue-v3",
    "family": "audio-generation",
    "description": "Генерируйте выразительный многоязычный диалог из текста с помощью модели ElevenLabs Text To Dialogue V3.",
    "required": [
      "dialogue"
    ],
    "inputs": {
      "dialogue": {
        "type": "array",
        "title": "Сценарий диалога",
        "description": "Список реплик дикторов.",
        "items": {
          "type": "object",
          "properties": {
            "text": {
              "type": "string",
              "title": "Текст",
              "description": "Текст речи для персонажа."
            },
            "voice_id": {
              "type": "string",
              "title": "ID голоса",
              "description": "ID голоса ElevenLabs. Выберите популярный голос или вставьте свой собственный ID голоса.",
              "typing": true,
              "enum": [
                {
                  "label": "James — хрипловатый, вовлекающий, смелый",
                  "value": "ZQe5CZNOzWyzPSCn5a3c"
                },
                {
                  "label": "Arabella — загадочный, эмоциональный",
                  "value": "Z3R5wn05IrDiVCyEkUrK"
                },
                {
                  "label": "Bradford — выразительный, чёткий",
                  "value": "NNl6r8mD7vthiJatiJt1"
                },
                {
                  "label": "Xavier — властный, металлический, дикторский",
                  "value": "YOq2y2Up4RgXP2HyXjE5"
                },
                {
                  "label": "Taksh — спокойный, серьёзный, плавный",
                  "value": "qDuRKMlYmrm8trt5QyBn"
                },
                {
                  "label": "Monika Sogam — глубокий, естественный",
                  "value": "iP95p4xoKVk53GoZ742B"
                },
                {
                  "label": "Mark — непринуждённый, расслабленный, лёгкий",
                  "value": "UgBBYS2sOqTuMpoF3BR0"
                },
                {
                  "label": "Adeline — женственный, разговорный",
                  "value": "5l5f8iK3YPeGga21rQIX"
                },
                {
                  "label": "Sam — агент поддержки",
                  "value": "yoZ06aMxZJJ28mfd3POQ"
                },
                {
                  "label": "Spuds Oxley — мудрый, располагающий",
                  "value": "NOpBlnGInO9m6vDvFkFC"
                },
                {
                  "label": "Eve — искренний, энергичный, жизнерадостный",
                  "value": "scOwDtmlLZohaFMFCHFe"
                },
                {
                  "label": "Callum — хрипловатый, плутоватый",
                  "value": "N2lVS1w4EtoT3dr4eOWO"
                },
                {
                  "label": "Laura — увлечённый, со своенравным характером",
                  "value": "FGY2WhTYpPnrIDTdsKH5"
                },
                {
                  "label": "Brian — глубокий, звучный, успокаивающий",
                  "value": "zPhCVfO2NBER7bRLIdbq"
                },
                {
                  "label": "Nathan — виртуальный радиоведущий",
                  "value": "nPczCjzI2devNBz1zQrb"
                },
                {
                  "label": "Charlie — естественный",
                  "value": "IKne3meq5aSn9XLyUdCD"
                },
                {
                  "label": "George — тёплый",
                  "value": "JBFqnCBsd6RMkjVDRZzb"
                },
                {
                  "label": "Sarah — мягкий",
                  "value": "EXAVITQu4vr4xnSDxMaL"
                },
                {
                  "label": "Charlotte — чистый",
                  "value": "XB0fDUnXU5powFXDhCwa"
                },
                {
                  "label": "Hope — бойкий, болтливый, девчачий",
                  "value": "tnSpp4vdxKPjI9w0GnoV"
                },
                {
                  "label": "Finn — молодой, увлечённый, энергичный",
                  "value": "DYkrAHD8iwork3YSUBbs"
                },
                {
                  "label": "Tom — для разговоров и книг",
                  "value": "56AoDkrOh6qfVPDXZ7Pt"
                },
                {
                  "label": "Lucy — свежий, непринуждённый",
                  "value": "lcMyyd2HUfFzxdCaC4Ta"
                },
                {
                  "label": "Tiffany — естественный, гостеприимный",
                  "value": "6aDn1KB0hjpdcocrUkmq"
                },
                {
                  "label": "Brock — властный, громкий, как у сержанта",
                  "value": "7ftFdxRlmR6Z9V3nTdUh"
                },
                {
                  "label": "Viraj — насыщенный, мягкий",
                  "value": "bajNon13EdhNMndG3z05"
                }
              ]
            }
          },
          "required": [
            "text",
            "voice_id"
          ]
        }
      },
      "stability": {
        "type": "number",
        "title": "Стабильность",
        "description": "Определяет стабильность и случайность голоса (от 0 до 1, по умолчанию 0.5).",
        "default": 0.5
      },
      "language_code": {
        "type": "string",
        "title": "Код языка",
        "description": "Целевой язык диалога. Оставьте пустым для автоматического определения языка.",
        "default": null,
        "enum": [
          "af",
          "ar",
          "hy",
          "as",
          "az",
          "be",
          "bn",
          "bs",
          "bg",
          "ca",
          "ceb",
          "ny",
          "hr",
          "cs",
          "da",
          "nl",
          "en",
          "et",
          "fil",
          "fi",
          "fr",
          "gl",
          "ka",
          "de",
          "el",
          "gu",
          "ha",
          "he",
          "hi",
          "hu",
          "is",
          "id",
          "ga",
          "it",
          "ja",
          "jv",
          "kn",
          "kk",
          "ky",
          "ko",
          "lv",
          "ln",
          "lt",
          "lb",
          "mk",
          "ms",
          "ml",
          "zh",
          "mr",
          "ne",
          "no",
          "ps",
          "fa",
          "pl",
          "pt",
          "pa",
          "ro",
          "ru",
          "sr",
          "sd",
          "sk",
          "sl",
          "so",
          "es",
          "sw",
          "sv",
          "ta",
          "te",
          "th",
          "tr",
          "uk",
          "ur",
          "vi",
          "cy"
        ]
      }
    }
  },
  {
    "id": "suno-convert-to-wav",
    "name": "Suno Convert to WAV",
    "endpoint": "suno-convert-to-wav",
    "family": "suno",
    "description": "Конвертирует существующий трек, сгенерированный Suno, в высококачественный несжатый WAV-формат для профессионального монтажа и обработки.",
    "required": [
      "task_id",
      "audio_id"
    ],
    "inputs": {
      "task_id": {
        "examples": [
          "5c79b5b3-1234-4a12-9f10-abcdef8be8e"
        ],
        "description": "request_id, возвращённый предыдущим запросом Generate Music / Remix Music / Extend Music, чей трек вы хотите конвертировать.",
        "type": "string",
        "title": "ID задачи",
        "name": "task_id"
      },
      "audio_id": {
        "examples": [
          "e231e123-4567-89ab-cdef-0123456789ab"
        ],
        "description": "ID конкретной аудиодорожки для конвертации, взятый из списка `audio_ids`, возвращённого в результате этой задачи.",
        "type": "string",
        "title": "ID аудио",
        "name": "audio_id"
      }
    }
  },
  {
    "id": "gemini-3-1-flash-tts",
    "name": "Gemini 3.1 Flash TTS",
    "endpoint": "gemini-3-1-flash-tts",
    "family": "gemini-tts",
    "description": "Gemini 3.1 Flash TTS превращает письменный диалог в выразительную, естественную многоголосую речь с тонким контролем голоса, акцента, эмоционального стиля и темпа.",
    "required": [
      "speakers",
      "dialogue_turns"
    ],
    "inputs": {
      "speakers": {
        "type": "array",
        "title": "Дикторы",
        "name": "speakers",
        "description": "Список конфигураций голосов дикторов. Каждая реплика диалога ссылается на диктора по его ID.",
        "examples": [
          [
            {
              "speaker_id": "Speaker 1",
              "voice_name": "Fenrir",
              "audio_profile": "A stern and weary gatekeeper",
              "accent": "British (RP)",
              "style": "Deadpan",
              "pace": "Natural"
            },
            {
              "speaker_id": "Speaker 2",
              "voice_name": "Puck",
              "audio_profile": "A determined and courageous traveler seeking answers.",
              "accent": "American (Gen)",
              "style": "Empathetic",
              "pace": "Staccato"
            }
          ]
        ],
        "items": {
          "type": "object",
          "properties": {
            "speaker_id": {
              "type": "string",
              "title": "ID диктора",
              "description": "Идентификатор диктора. Должен быть в формате «Speaker N» (например, «Speaker 1»)."
            },
            "voice_name": {
              "type": "string",
              "title": "Голос",
              "description": "Название готового голоса Gemini.",
              "enum": [
                "Achernar",
                "Achird",
                "Algenib",
                "Algieba",
                "Alnilam",
                "Aoede",
                "Autonoe",
                "Callirrhoe",
                "Charon",
                "Despina",
                "Enceladus",
                "Erinome",
                "Fenrir",
                "Gacrux",
                "Iapetus",
                "Kore",
                "Laomedeia",
                "Leda",
                "Orus",
                "Puck",
                "Pulcherrima",
                "Rasalgethi",
                "Sadachbia",
                "Sadaltager",
                "Schedar",
                "Sulafat",
                "Umbriel",
                "Vindemiatrix",
                "Zephyr",
                "Zubenelgenubi"
              ]
            },
            "audio_profile": {
              "type": "string",
              "title": "Аудио-профиль",
              "description": "Опциональное описание персоны на естественном языке, например «Тёплый и успокаивающий рассказчик»."
            },
            "accent": {
              "type": "string",
              "title": "Акцент",
              "description": "Акцент речи.",
              "enum": [
                "Neutral",
                "American (Gen)",
                "American (Valley)",
                "American (South)",
                "British (RP)",
                "British (Brixton)",
                "Transatlantic",
                "Australian"
              ],
              "default": "Neutral"
            },
            "style": {
              "type": "string",
              "title": "Стиль",
              "description": "Эмоциональный стиль подачи.",
              "enum": [
                "Vocal Smile",
                "Newscaster",
                "Whisper",
                "Empathetic",
                "Promo/Hype",
                "Deadpan"
              ],
              "default": "Empathetic"
            },
            "pace": {
              "type": "string",
              "title": "Темп",
              "description": "Темп речи.",
              "enum": [
                "Natural",
                "Rapid Fire",
                "The Drift",
                "Staccato"
              ],
              "default": "Natural"
            }
          },
          "required": [
            "speaker_id",
            "voice_name",
            "accent",
            "style",
            "pace"
          ]
        }
      },
      "dialogue_turns": {
        "type": "array",
        "title": "Реплики диалога",
        "name": "dialogue_turns",
        "description": "Упорядоченный список реплик диалога. speaker_id каждой реплики должен соответствовать диктору, определённому выше. Текст может включать теги тона, например [shouting] или [whispers].",
        "examples": [
          [
            {
              "speaker_id": "Speaker 1",
              "text": "[shouting] Halt, traveler! The northern pass is sealed by order of the council."
            },
            {
              "speaker_id": "Speaker 2",
              "text": "[determination] I carry a message for the elder. Step aside, or I will force my way through."
            },
            {
              "speaker_id": "Speaker 1",
              "text": "[caution] No one passes. [pensive] The elder is... he's no longer receiving visitors."
            },
            {
              "speaker_id": "Speaker 2",
              "text": "It's too late. [whispers] The shadow... it reached him first. [urgency] You need to leave. [shouting] Now."
            }
          ]
        ],
        "items": {
          "type": "object",
          "properties": {
            "speaker_id": {
              "type": "string",
              "title": "ID диктора",
              "description": "ID диктора, произносящего эту реплику (например, «Speaker 1»)."
            },
            "text": {
              "type": "string",
              "title": "Текст",
              "description": "Реплика для озвучивания. Поддерживает встроенные теги тона. Максимум 10000 символов."
            }
          },
          "required": [
            "speaker_id",
            "text"
          ]
        }
      },
      "scene": {
        "type": "string",
        "title": "Сцена",
        "name": "scene",
        "description": "Опциональное описание сцены, задающее акустическую обстановку, например «Тихая тёплая комната с тихо потрескивающим камином».",
        "default": ""
      },
      "sample_context": {
        "type": "string",
        "title": "Пример контекста",
        "name": "sample_context",
        "description": "Опциональный общий тон/стиль, например «Повествование в стиле аудиокниги. Тон мягкий и располагающий».",
        "default": ""
      },
      "temperature": {
        "type": "number",
        "title": "Температура",
        "name": "temperature",
        "description": "Температура сэмплирования (0–2). Более высокие значения дают более разнообразную подачу.",
        "default": 1,
        "minimum": 0,
        "maximum": 2
      }
    }
  },
  {
    "id": "gemini-2-5-pro-tts",
    "name": "Gemini 2.5 Pro TTS",
    "endpoint": "gemini-2-5-pro-tts",
    "family": "gemini-tts",
    "description": "Gemini 2.5 Pro TTS — премиальная модель Google для преобразования текста в речь студийного качества с несколькими дикторами и выразительным контролем голоса, акцента, эмоционального стиля и темпа.",
    "required": [
      "speakers",
      "dialogue_turns"
    ],
    "inputs": {
      "speakers": {
        "type": "array",
        "title": "Дикторы",
        "name": "speakers",
        "description": "Список конфигураций голосов дикторов. Каждая реплика диалога ссылается на диктора по его ID.",
        "examples": [
          [
            {
              "speaker_id": "Speaker 1",
              "voice_name": "Fenrir",
              "audio_profile": "A stern and weary gatekeeper",
              "accent": "British (RP)",
              "style": "Deadpan",
              "pace": "Natural"
            },
            {
              "speaker_id": "Speaker 2",
              "voice_name": "Puck",
              "audio_profile": "A determined and courageous traveler seeking answers.",
              "accent": "American (Gen)",
              "style": "Empathetic",
              "pace": "Staccato"
            }
          ]
        ],
        "items": {
          "type": "object",
          "properties": {
            "speaker_id": {
              "type": "string",
              "title": "ID диктора",
              "description": "Идентификатор диктора. Должен быть в формате «Speaker N» (например, «Speaker 1»)."
            },
            "voice_name": {
              "type": "string",
              "title": "Голос",
              "description": "Название готового голоса Gemini.",
              "enum": [
                "Achernar",
                "Achird",
                "Algenib",
                "Algieba",
                "Alnilam",
                "Aoede",
                "Autonoe",
                "Callirrhoe",
                "Charon",
                "Despina",
                "Enceladus",
                "Erinome",
                "Fenrir",
                "Gacrux",
                "Iapetus",
                "Kore",
                "Laomedeia",
                "Leda",
                "Orus",
                "Puck",
                "Pulcherrima",
                "Rasalgethi",
                "Sadachbia",
                "Sadaltager",
                "Schedar",
                "Sulafat",
                "Umbriel",
                "Vindemiatrix",
                "Zephyr",
                "Zubenelgenubi"
              ]
            },
            "audio_profile": {
              "type": "string",
              "title": "Аудио-профиль",
              "description": "Опциональное описание персоны на естественном языке, например «Тёплый и успокаивающий рассказчик»."
            },
            "accent": {
              "type": "string",
              "title": "Акцент",
              "description": "Акцент речи.",
              "enum": [
                "Neutral",
                "American (Gen)",
                "American (Valley)",
                "American (South)",
                "British (RP)",
                "British (Brixton)",
                "Transatlantic",
                "Australian"
              ],
              "default": "Neutral"
            },
            "style": {
              "type": "string",
              "title": "Стиль",
              "description": "Эмоциональный стиль подачи.",
              "enum": [
                "Vocal Smile",
                "Newscaster",
                "Whisper",
                "Empathetic",
                "Promo/Hype",
                "Deadpan"
              ],
              "default": "Empathetic"
            },
            "pace": {
              "type": "string",
              "title": "Темп",
              "description": "Темп речи.",
              "enum": [
                "Natural",
                "Rapid Fire",
                "The Drift",
                "Staccato"
              ],
              "default": "Natural"
            }
          },
          "required": [
            "speaker_id",
            "voice_name",
            "accent",
            "style",
            "pace"
          ]
        }
      },
      "dialogue_turns": {
        "type": "array",
        "title": "Реплики диалога",
        "name": "dialogue_turns",
        "description": "Упорядоченный список реплик диалога. speaker_id каждой реплики должен соответствовать диктору, определённому выше. Текст может включать теги тона, например [shouting] или [whispers].",
        "examples": [
          [
            {
              "speaker_id": "Speaker 1",
              "text": "[shouting] Halt, traveler! The northern pass is sealed by order of the council."
            },
            {
              "speaker_id": "Speaker 2",
              "text": "[determination] I carry a message for the elder. Step aside, or I will force my way through."
            },
            {
              "speaker_id": "Speaker 1",
              "text": "[caution] No one passes. [pensive] The elder is... he's no longer receiving visitors."
            },
            {
              "speaker_id": "Speaker 2",
              "text": "It's too late. [whispers] The shadow... it reached him first. [urgency] You need to leave. [shouting] Now."
            }
          ]
        ],
        "items": {
          "type": "object",
          "properties": {
            "speaker_id": {
              "type": "string",
              "title": "ID диктора",
              "description": "ID диктора, произносящего эту реплику (например, «Speaker 1»)."
            },
            "text": {
              "type": "string",
              "title": "Текст",
              "description": "Реплика для озвучивания. Поддерживает встроенные теги тона. Максимум 10000 символов."
            }
          },
          "required": [
            "speaker_id",
            "text"
          ]
        }
      },
      "scene": {
        "type": "string",
        "title": "Сцена",
        "name": "scene",
        "description": "Опциональное описание сцены, задающее акустическую обстановку, например «Тихая тёплая комната с тихо потрескивающим камином».",
        "default": ""
      },
      "sample_context": {
        "type": "string",
        "title": "Пример контекста",
        "name": "sample_context",
        "description": "Опциональный общий тон/стиль, например «Повествование в стиле аудиокниги. Тон мягкий и располагающий».",
        "default": ""
      },
      "temperature": {
        "type": "number",
        "title": "Температура",
        "name": "temperature",
        "description": "Температура сэмплирования (0–2). Более высокие значения дают более разнообразную подачу.",
        "default": 1,
        "minimum": 0,
        "maximum": 2
      }
    }
  },
  {
    "id": "elevenlabs-tts-turbo-2-5",
    "name": "ElevenLabs TTS Turbo 2.5",
    "endpoint": "elevenlabs-tts-turbo-2-5",
    "family": "audio-generation",
    "description": "Преобразуйте текст в естественно звучащую речь с настраиваемой стабильностью, схожестью голоса и скоростью.",
    "required": ["prompt"],
    "inputs": {
      "prompt": {
        "type": "string",
        "title": "Промпт",
        "name": "prompt",
        "description": "Текст для преобразования в речь."
      },
      "voice_id": {
        "type": "string",
        "title": "ID голоса",
        "name": "voice_id",
        "default": "21m00Tcm4TlvDq8ikWAM",
        "enum": [
          {"label": "James — хрипловатый, вовлекающий, смелый", "value": "ZQe5CZNOzWyzPSCn5a3c"},
          {"label": "Arabella — загадочный, эмоциональный", "value": "Z3R5wn05IrDiVCyEkUrK"},
          {"label": "Bradford — выразительный, чёткий", "value": "NNl6r8mD7vthiJatiJt1"},
          {"label": "Xavier — властный, металлический, дикторский", "value": "YOq2y2Up4RgXP2HyXjE5"},
          {"label": "Taksh — спокойный, серьёзный, плавный", "value": "qDuRKMlYmrm8trt5QyBn"},
          {"label": "Monika Sogam — глубокий, естественный", "value": "iP95p4xoKVk53GoZ742B"},
          {"label": "Mark — непринуждённый, расслабленный, лёгкий", "value": "UgBBYS2sOqTuMpoF3BR0"},
          {"label": "Adeline — женственный, разговорный", "value": "5l5f8iK3YPeGga21rQIX"},
          {"label": "Sam — агент поддержки", "value": "yoZ06aMxZJJ28mfd3POQ"},
          {"label": "Spuds Oxley — мудрый, располагающий", "value": "NOpBlnGInO9m6vDvFkFC"},
          {"label": "Eve — искренний, энергичный, жизнерадостный", "value": "scOwDtmlLZohaFMFCHFe"},
          {"label": "Callum — хрипловатый, плутоватый", "value": "N2lVS1w4EtoT3dr4eOWO"},
          {"label": "Laura — увлечённый, со своенравным характером", "value": "FGY2WhTYpPnrIDTdsKH5"},
          {"label": "Brian — глубокий, звучный, успокаивающий", "value": "zPhCVfO2NBER7bRLIdbq"},
          {"label": "Nathan — виртуальный радиоведущий", "value": "nPczCjzI2devNBz1zQrb"},
          {"label": "Charlie — естественный", "value": "IKne3meq5aSn9XLyUdCD"},
          {"label": "George — тёплый", "value": "JBFqnCBsd6RMkjVDRZzb"},
          {"label": "Sarah — мягкий", "value": "EXAVITQu4vr4xnSDxMaL"},
          {"label": "Charlotte — чистый", "value": "XB0fDUnXU5powFXDhCwa"},
          {"label": "Hope — бойкий, болтливый, девчачий", "value": "tnSpp4vdxKPjI9w0GnoV"},
          {"label": "Finn — молодой, увлечённый, энергичный", "value": "DYkrAHD8iwork3YSUBbs"},
          {"label": "Tom — для разговоров и книг", "value": "56AoDkrOh6qfVPDXZ7Pt"},
          {"label": "Lucy — свежий, непринуждённый", "value": "lcMyyd2HUfFzxdCaC4Ta"},
          {"label": "Tiffany — естественный, гостеприимный", "value": "6aDn1KB0hjpdcocrUkmq"},
          {"label": "Brock — властный, громкий, как у сержанта", "value": "7ftFdxRlmR6Z9V3nTdUh"},
          {"label": "Viraj — насыщенный, мягкий", "value": "bajNon13EdhNMndG3z05"}
        ]
      },
      "stability": {
        "type": "number",
        "title": "Стабильность",
        "name": "stability",
        "default": 0.5
      },
      "similarity_boost": {
        "type": "number",
        "title": "Усиление схожести",
        "name": "similarity_boost",
        "default": 0.75
      },
      "speed": {
        "type": "number",
        "title": "Скорость",
        "name": "speed",
        "default": 1
      },
      "language_code": {
        "enum": ["en", "fr", "de", "ja", "vi", "hu", "no"],
        "type": "string",
        "title": "Код языка",
        "name": "language_code"
      }
    }
  }
];

export const getAudioModelById = (id) => audioModels.find(m => m.id === id);
