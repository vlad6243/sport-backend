# Translation Structure for Seeds

## Overview
All library entities now use JSONB columns for multi-language support (ru, en, uk).

## Entity Translation Fields

### Exercise
- `name`: TranslatedText
- `description`: TranslatedText
- `instructions`: TranslatedText
- `tips`: TranslatedText
- `commonMistakes`: TranslatedText

### Recipe
- `name`: TranslatedText
- `description`: TranslatedText
- `ingredients`: TranslatedIngredient[] (name and unit are translated)
- `instructions`: TranslatedText[]
- `tips`: TranslatedText

### WorkoutPlan
- `name`: TranslatedText
- `description`: TranslatedText
- `weeklySchedule`: WeeklyScheduleItem[] (workoutType, exerciseName, rest, notes are translated)
- `equipment`: TranslatedText[]
- `goals`: TranslatedText
- `tips`: TranslatedText

### TrainerTip
- `title`: TranslatedText
- `summary`: TranslatedText
- `content`: TranslatedText
- `tags`: TranslatedText[]
- `authorName`: TranslatedText

## Example Structure

```typescript
// TranslatedText
{
  ru: 'Текст на русском',
  en: 'English text',
  uk: 'Текст українською'
}

// TranslatedIngredient (for recipes)
{
  name: {
    ru: 'Куриная грудка',
    en: 'Chicken breast',
    uk: 'Куряча грудка'
  },
  amount: '200',
  unit: {
    ru: 'г',
    en: 'g',
    uk: 'г'
  }
}

// WorkoutExercise (for workout plans)
{
  exerciseName: {
    ru: 'Приседания',
    en: 'Squats',
    uk: 'Присідання'
  },
  sets: 3,
  reps: '10-12',
  rest: {
    ru: '60 сек',
    en: '60 sec',
    uk: '60 сек'
  }
}
```

## Migration
Run `npm run migration:run` to apply the database changes.

## Seed Data
- Exercise seeds: ✅ Complete (16 exercises with full translations)
- Recipe seeds: ⏳ TODO - Add translations
- Workout Plan seeds: ⏳ TODO - Add translations
- Trainer Tip seeds: ⏳ TODO - Add translations

## Frontend Integration
The mobile app will receive the full JSON object and select the appropriate language based on user preferences:

```typescript
const exercise = await api.getExercise(id);
const currentLang = i18n.language; // 'ru', 'en', or 'uk'
const displayName = exercise.name[currentLang];
```
