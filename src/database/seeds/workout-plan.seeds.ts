import { Repository } from 'typeorm';
import {
  WorkoutPlan,
  PlanType,
  PlanLevel,
} from '../../library/entities/workout-plan.entity';

export async function seedWorkoutPlans(
  workoutPlanRepository: Repository<WorkoutPlan>,
) {
  const plans = [
    {
      name: {
        ru: 'Программа для начинающих',
        en: 'Beginner Program',
        uk: 'Програма для початківців',
      },
      description: {
        ru: 'Базовая программа для новичков в зале. Фокус на изучение техники и адаптация организма к нагрузкам',
        en: 'Basic program for gym beginners. Focus on learning technique and body adaptation to loads',
        uk: 'Базова програма для новачків у залі. Фокус на вивчення техніки та адаптація організму до навантажень',
      },
      type: PlanType.STRENGTH,
      level: PlanLevel.BEGINNER,
      durationWeeks: 8,
      workoutsPerWeek: 3,
      averageWorkoutDuration: 45,
      weeklySchedule: [
        {
          day: 1,
          workoutType: {
            ru: 'Верх тела',
            en: 'Upper Body',
            uk: 'Верх тіла',
          },
          exercises: [
            {
              exerciseName: {
                ru: 'Жим штанги лежа',
                en: 'Barbell Bench Press',
                uk: 'Жим штанги лежачи',
              },
              sets: 3,
              reps: '10-12',
              rest: {
                ru: '90 сек',
                en: '90 sec',
                uk: '90 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Тяга верхнего блока',
                en: 'Lat Pulldown',
                uk: 'Тяга верхнього блоку',
              },
              sets: 3,
              reps: '10-12',
              rest: {
                ru: '90 сек',
                en: '90 sec',
                uk: '90 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Жим гантелей сидя',
                en: 'Seated Dumbbell Press',
                uk: 'Жим гантелей сидячи',
              },
              sets: 3,
              reps: '10-12',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Подъем штанги на бицепс',
                en: 'Barbell Bicep Curl',
                uk: 'Підйом штанги на біцепс',
              },
              sets: 3,
              reps: '10-12',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
          ],
        },
        {
          day: 3,
          workoutType: {
            ru: 'Низ тела',
            en: 'Lower Body',
            uk: 'Низ тіла',
          },
          exercises: [
            {
              exerciseName: {
                ru: 'Приседания со штангой',
                en: 'Barbell Squat',
                uk: 'Присідання зі штангою',
              },
              sets: 3,
              reps: '10-12',
              rest: {
                ru: '2 мин',
                en: '2 min',
                uk: '2 хв',
              },
            },
            {
              exerciseName: {
                ru: 'Румынская тяга',
                en: 'Romanian Deadlift',
                uk: 'Румунська тяга',
              },
              sets: 3,
              reps: '10-12',
              rest: {
                ru: '90 сек',
                en: '90 sec',
                uk: '90 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Жим ногами',
                en: 'Leg Press',
                uk: 'Жим ногами',
              },
              sets: 3,
              reps: '12-15',
              rest: {
                ru: '90 сек',
                en: '90 sec',
                uk: '90 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Планка',
                en: 'Plank',
                uk: 'Планка',
              },
              sets: 3,
              reps: '30-60 сек',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
          ],
        },
        {
          day: 5,
          workoutType: {
            ru: 'Все тело',
            en: 'Full Body',
            uk: 'Все тіло',
          },
          exercises: [
            {
              exerciseName: {
                ru: 'Подтягивания',
                en: 'Pull-ups',
                uk: 'Підтягування',
              },
              sets: 3,
              reps: '8-10',
              rest: {
                ru: '90 сек',
                en: '90 sec',
                uk: '90 сек',
              },
              notes: {
                ru: 'С помощью резинки если нужно',
                en: 'With resistance band if needed',
                uk: 'З допомогою резинки якщо потрібно',
              },
            },
            {
              exerciseName: {
                ru: 'Отжимания от пола',
                en: 'Push-ups',
                uk: 'Віджимання від підлоги',
              },
              sets: 3,
              reps: '12-15',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Выпады с гантелями',
                en: 'Dumbbell Lunges',
                uk: 'Випади з гантелями',
              },
              sets: 3,
              reps: '10-12',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Скручивания',
                en: 'Crunches',
                uk: 'Скручування',
              },
              sets: 3,
              reps: '15-20',
              rest: {
                ru: '45 сек',
                en: '45 sec',
                uk: '45 сек',
              },
            },
          ],
        },
      ],
      equipment: [
        { ru: 'Штанга', en: 'Barbell', uk: 'Штанга' },
        { ru: 'Гантели', en: 'Dumbbells', uk: 'Гантелі' },
        { ru: 'Скамья', en: 'Bench', uk: 'Лавка' },
        { ru: 'Тренажеры', en: 'Machines', uk: 'Тренажери' },
      ],
      goals: {
        ru: 'Изучение базовых упражнений, развитие мышечной массы, улучшение общей физической формы',
        en: 'Learning basic exercises, muscle mass development, improving overall physical fitness',
        uk: "Вивчення базових вправ, розвиток м'язової маси, поліпшення загальної фізичної форми",
      },
      tips: {
        ru: 'Начинайте с легких весов, фокусируйтесь на технике. Отдых между тренировками 1-2 дня обязателен',
        en: 'Start with light weights, focus on technique. Rest between workouts 1-2 days is mandatory',
        uk: "Починайте з легких ваг, фокусуйтеся на техніці. Відпочинок між тренуваннями 1-2 дні обов'язковий",
      },
      estimatedCaloriesBurn: 350,
    },
    {
      name: {
        ru: 'Жиросжигающая программа',
        en: 'Fat Burning Program',
        uk: 'Жироспалююча програма',
      },
      description: {
        ru: 'Интенсивная программа для похудения с элементами кардио и силовых тренировок',
        en: 'Intensive weight loss program with cardio and strength training elements',
        uk: 'Інтенсивна програма для схуднення з елементами кардіо та силових тренувань',
      },
      type: PlanType.WEIGHT_LOSS,
      level: PlanLevel.INTERMEDIATE,
      durationWeeks: 6,
      workoutsPerWeek: 4,
      averageWorkoutDuration: 50,
      weeklySchedule: [
        {
          day: 1,
          workoutType: {
            ru: 'HIIT + Верх',
            en: 'HIIT + Upper',
            uk: 'HIIT + Верх',
          },
          exercises: [
            {
              exerciseName: {
                ru: 'Берпи',
                en: 'Burpees',
                uk: 'Берпі',
              },
              sets: 4,
              reps: '15',
              rest: {
                ru: '30 сек',
                en: '30 sec',
                uk: '30 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Жим гантелей лежа',
                en: 'Dumbbell Bench Press',
                uk: 'Жим гантелей лежачи',
              },
              sets: 4,
              reps: '12-15',
              rest: {
                ru: '45 сек',
                en: '45 sec',
                uk: '45 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Тяга штанги в наклоне',
                en: 'Bent Over Barbell Row',
                uk: 'Тяга штанги в нахилі',
              },
              sets: 4,
              reps: '12-15',
              rest: {
                ru: '45 сек',
                en: '45 sec',
                uk: '45 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Скакалка',
                en: 'Jump Rope',
                uk: 'Скакалка',
              },
              sets: 3,
              reps: '1 мин',
              rest: {
                ru: '30 сек',
                en: '30 sec',
                uk: '30 сек',
              },
            },
          ],
        },
        {
          day: 2,
          workoutType: {
            ru: 'Кардио + Низ',
            en: 'Cardio + Lower',
            uk: 'Кардіо + Низ',
          },
          exercises: [
            {
              exerciseName: {
                ru: 'Бег',
                en: 'Running',
                uk: 'Біг',
              },
              sets: 1,
              reps: '20 мин',
              rest: {
                ru: '-',
                en: '-',
                uk: '-',
              },
            },
            {
              exerciseName: {
                ru: 'Приседания с гантелями',
                en: 'Dumbbell Squats',
                uk: 'Присідання з гантелями',
              },
              sets: 4,
              reps: '15-20',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Выпады',
                en: 'Lunges',
                uk: 'Випади',
              },
              sets: 4,
              reps: '12-15',
              rest: {
                ru: '45 сек',
                en: '45 sec',
                uk: '45 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Планка',
                en: 'Plank',
                uk: 'Планка',
              },
              sets: 3,
              reps: '45-60 сек',
              rest: {
                ru: '30 сек',
                en: '30 sec',
                uk: '30 сек',
              },
            },
          ],
        },
        {
          day: 4,
          workoutType: {
            ru: 'Силовое + Кардио',
            en: 'Strength + Cardio',
            uk: 'Силове + Кардіо',
          },
          exercises: [
            {
              exerciseName: {
                ru: 'Тяга верхнего блока',
                en: 'Lat Pulldown',
                uk: 'Тяга верхнього блоку',
              },
              sets: 4,
              reps: '12-15',
              rest: {
                ru: '45 сек',
                en: '45 sec',
                uk: '45 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Жим гантелей на наклонной',
                en: 'Incline Dumbbell Press',
                uk: 'Жим гантелей на похилій',
              },
              sets: 4,
              reps: '12-15',
              rest: {
                ru: '45 сек',
                en: '45 sec',
                uk: '45 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Махи гантелями в стороны',
                en: 'Lateral Dumbbell Raises',
                uk: 'Махи гантелями в сторони',
              },
              sets: 3,
              reps: '15',
              rest: {
                ru: '30 сек',
                en: '30 sec',
                uk: '30 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Берпи',
                en: 'Burpees',
                uk: 'Берпі',
              },
              sets: 4,
              reps: '12',
              rest: {
                ru: '30 сек',
                en: '30 sec',
                uk: '30 сек',
              },
            },
          ],
        },
        {
          day: 6,
          workoutType: {
            ru: 'Круговая тренировка',
            en: 'Circuit Training',
            uk: 'Кругове тренування',
          },
          exercises: [
            {
              exerciseName: {
                ru: 'Отжимания',
                en: 'Push-ups',
                uk: 'Віджимання',
              },
              sets: 5,
              reps: '15',
              rest: {
                ru: '20 сек',
                en: '20 sec',
                uk: '20 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Приседания',
                en: 'Squats',
                uk: 'Присідання',
              },
              sets: 5,
              reps: '20',
              rest: {
                ru: '20 сек',
                en: '20 sec',
                uk: '20 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Скручивания',
                en: 'Crunches',
                uk: 'Скручування',
              },
              sets: 5,
              reps: '20',
              rest: {
                ru: '20 сек',
                en: '20 sec',
                uk: '20 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Скакалка',
                en: 'Jump Rope',
                uk: 'Скакалка',
              },
              sets: 5,
              reps: '30 сек',
              rest: {
                ru: '60 сек между кругами',
                en: '60 sec between circuits',
                uk: '60 сек між колами',
              },
            },
          ],
        },
      ],
      equipment: [
        { ru: 'Гантели', en: 'Dumbbells', uk: 'Гантелі' },
        { ru: 'Скакалка', en: 'Jump Rope', uk: 'Скакалка' },
        { ru: 'Коврик', en: 'Mat', uk: 'Килимок' },
      ],
      goals: {
        ru: 'Снижение процента жира, улучшение выносливости, сохранение мышечной массы',
        en: 'Reducing body fat percentage, improving endurance, maintaining muscle mass',
        uk: "Зниження відсотка жиру, поліпшення витривалості, збереження м'язової маси",
      },
      tips: {
        ru: 'Следите за питанием - дефицит калорий обязателен. Пейте много воды. Кардио можно делать утром натощак',
        en: 'Monitor your nutrition - calorie deficit is mandatory. Drink plenty of water. Cardio can be done in the morning on an empty stomach',
        uk: "Слідкуйте за харчуванням - дефіцит калорій обов'язковий. Пийте багато води. Кардіо можна робити вранці натщесерце",
      },
      estimatedCaloriesBurn: 450,
    },
    {
      name: {
        ru: 'Набор мышечной массы',
        en: 'Muscle Gain Program',
        uk: "Набір м'язової маси",
      },
      description: {
        ru: 'Продвинутая программа для роста мышц с акцентом на базовые упражнения',
        en: 'Advanced muscle growth program with emphasis on basic exercises',
        uk: "Просунута програма для росту м'язів з акцентом на базові вправи",
      },
      type: PlanType.MUSCLE_GAIN,
      level: PlanLevel.ADVANCED,
      durationWeeks: 12,
      workoutsPerWeek: 4,
      averageWorkoutDuration: 70,
      weeklySchedule: [
        {
          day: 1,
          workoutType: {
            ru: 'Грудь + Трицепс',
            en: 'Chest + Triceps',
            uk: 'Груди + Тріцепс',
          },
          exercises: [
            {
              exerciseName: {
                ru: 'Жим штанги лежа',
                en: 'Barbell Bench Press',
                uk: 'Жим штанги лежачи',
              },
              sets: 4,
              reps: '6-8',
              rest: {
                ru: '2 мин',
                en: '2 min',
                uk: '2 хв',
              },
            },
            {
              exerciseName: {
                ru: 'Жим гантелей на наклонной',
                en: 'Incline Dumbbell Press',
                uk: 'Жим гантелей на похилій',
              },
              sets: 4,
              reps: '8-10',
              rest: {
                ru: '90 сек',
                en: '90 sec',
                uk: '90 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Разводка гантелей',
                en: 'Dumbbell Flyes',
                uk: 'Розведення гантелей',
              },
              sets: 3,
              reps: '10-12',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Французский жим',
                en: 'Skull Crushers',
                uk: 'Французький жим',
              },
              sets: 4,
              reps: '8-10',
              rest: {
                ru: '90 сек',
                en: '90 sec',
                uk: '90 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Разгибания на блоке',
                en: 'Cable Tricep Extensions',
                uk: 'Розгинання на блоці',
              },
              sets: 3,
              reps: '12-15',
              rest: {
                ru: '45 сек',
                en: '45 sec',
                uk: '45 сек',
              },
            },
          ],
        },
        {
          day: 2,
          workoutType: {
            ru: 'Спина + Бицепс',
            en: 'Back + Biceps',
            uk: 'Спина + Біцепс',
          },
          exercises: [
            {
              exerciseName: {
                ru: 'Подтягивания',
                en: 'Pull-ups',
                uk: 'Підтягування',
              },
              sets: 4,
              reps: '8-10',
              rest: {
                ru: '2 мин',
                en: '2 min',
                uk: '2 хв',
              },
              notes: {
                ru: 'С дополнительным весом',
                en: 'With additional weight',
                uk: 'З додатковою вагою',
              },
            },
            {
              exerciseName: {
                ru: 'Тяга штанги в наклоне',
                en: 'Bent Over Barbell Row',
                uk: 'Тяга штанги в нахилі',
              },
              sets: 4,
              reps: '6-8',
              rest: {
                ru: '2 мин',
                en: '2 min',
                uk: '2 хв',
              },
            },
            {
              exerciseName: {
                ru: 'Тяга Т-грифа',
                en: 'T-Bar Row',
                uk: 'Тяга Т-грифа',
              },
              sets: 3,
              reps: '8-10',
              rest: {
                ru: '90 сек',
                en: '90 sec',
                uk: '90 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Подъем штанги на бицепс',
                en: 'Barbell Bicep Curl',
                uk: 'Підйом штанги на біцепс',
              },
              sets: 4,
              reps: '8-10',
              rest: {
                ru: '90 сек',
                en: '90 sec',
                uk: '90 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Молотковые сгибания',
                en: 'Hammer Curls',
                uk: 'Молоткові згинання',
              },
              sets: 3,
              reps: '10-12',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
          ],
        },
        {
          day: 4,
          workoutType: {
            ru: 'Ноги',
            en: 'Legs',
            uk: 'Ноги',
          },
          exercises: [
            {
              exerciseName: {
                ru: 'Приседания со штангой',
                en: 'Barbell Squat',
                uk: 'Присідання зі штангою',
              },
              sets: 5,
              reps: '6-8',
              rest: {
                ru: '3 мин',
                en: '3 min',
                uk: '3 хв',
              },
            },
            {
              exerciseName: {
                ru: 'Румынская тяга',
                en: 'Romanian Deadlift',
                uk: 'Румунська тяга',
              },
              sets: 4,
              reps: '8-10',
              rest: {
                ru: '2 мин',
                en: '2 min',
                uk: '2 хв',
              },
            },
            {
              exerciseName: {
                ru: 'Жим ногами',
                en: 'Leg Press',
                uk: 'Жим ногами',
              },
              sets: 4,
              reps: '10-12',
              rest: {
                ru: '90 сек',
                en: '90 sec',
                uk: '90 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Сгибания ног',
                en: 'Leg Curls',
                uk: 'Згинання ніг',
              },
              sets: 3,
              reps: '12-15',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Подъемы на носки',
                en: 'Calf Raises',
                uk: 'Підйоми на носки',
              },
              sets: 4,
              reps: '15-20',
              rest: {
                ru: '45 сек',
                en: '45 sec',
                uk: '45 сек',
              },
            },
          ],
        },
        {
          day: 6,
          workoutType: {
            ru: 'Плечи + Пресс',
            en: 'Shoulders + Abs',
            uk: 'Плечі + Прес',
          },
          exercises: [
            {
              exerciseName: {
                ru: 'Жим штанги стоя',
                en: 'Standing Barbell Press',
                uk: 'Жим штанги стоячи',
              },
              sets: 4,
              reps: '6-8',
              rest: {
                ru: '2 мин',
                en: '2 min',
                uk: '2 хв',
              },
            },
            {
              exerciseName: {
                ru: 'Жим гантелей сидя',
                en: 'Seated Dumbbell Press',
                uk: 'Жим гантелей сидячи',
              },
              sets: 4,
              reps: '8-10',
              rest: {
                ru: '90 сек',
                en: '90 sec',
                uk: '90 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Махи в стороны',
                en: 'Lateral Raises',
                uk: 'Махи в сторони',
              },
              sets: 4,
              reps: '12-15',
              rest: {
                ru: '45 сек',
                en: '45 sec',
                uk: '45 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Тяга к подбородку',
                en: 'Upright Row',
                uk: 'Тяга до підборіддя',
              },
              sets: 3,
              reps: '10-12',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Подъем ног в висе',
                en: 'Hanging Leg Raises',
                uk: 'Підйом ніг у висі',
              },
              sets: 4,
              reps: '12-15',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
          ],
        },
      ],
      equipment: [
        { ru: 'Штанга', en: 'Barbell', uk: 'Штанга' },
        { ru: 'Гантели', en: 'Dumbbells', uk: 'Гантелі' },
        { ru: 'Тренажеры', en: 'Machines', uk: 'Тренажери' },
        { ru: 'Турник', en: 'Pull-up Bar', uk: 'Турнік' },
      ],
      goals: {
        ru: 'Максимальный набор мышечной массы, увеличение силовых показателей',
        en: 'Maximum muscle mass gain, increasing strength indicators',
        uk: "Максимальний набір м'язової маси, збільшення силових показників",
      },
      tips: {
        ru: 'Профицит калорий +300-500. Прогрессия нагрузки каждую неделю. Минимум 8 часов сна. Протеин 2г на кг веса',
        en: 'Calorie surplus +300-500. Load progression every week. Minimum 8 hours of sleep. Protein 2g per kg of body weight',
        uk: 'Профіцит калорій +300-500. Прогресія навантаження щотижня. Мінімум 8 годин сну. Протеїн 2г на кг ваги',
      },
      estimatedCaloriesBurn: 400,
    },
    {
      name: {
        ru: 'Домашние тренировки',
        en: 'Home Workouts',
        uk: 'Домашні тренування',
      },
      description: {
        ru: 'Эффективная программа для дома без оборудования',
        en: 'Effective home program without equipment',
        uk: 'Ефективна програма для дому без обладнання',
      },
      type: PlanType.STRENGTH,
      level: PlanLevel.BEGINNER,
      durationWeeks: 6,
      workoutsPerWeek: 3,
      averageWorkoutDuration: 35,
      weeklySchedule: [
        {
          day: 1,
          workoutType: {
            ru: 'Верх тела',
            en: 'Upper Body',
            uk: 'Верх тіла',
          },
          exercises: [
            {
              exerciseName: {
                ru: 'Отжимания от пола',
                en: 'Push-ups',
                uk: 'Віджимання від підлоги',
              },
              sets: 4,
              reps: '12-15',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Отжимания узким хватом',
                en: 'Close-grip Push-ups',
                uk: 'Віджимання вузьким хватом',
              },
              sets: 3,
              reps: '10-12',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Планка',
                en: 'Plank',
                uk: 'Планка',
              },
              sets: 3,
              reps: '45-60 сек',
              rest: {
                ru: '45 сек',
                en: '45 sec',
                uk: '45 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Обратные отжимания',
                en: 'Reverse Push-ups',
                uk: 'Зворотні віджимання',
              },
              sets: 3,
              reps: '12-15',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
          ],
        },
        {
          day: 3,
          workoutType: {
            ru: 'Низ тела',
            en: 'Lower Body',
            uk: 'Низ тіла',
          },
          exercises: [
            {
              exerciseName: {
                ru: 'Приседания',
                en: 'Squats',
                uk: 'Присідання',
              },
              sets: 4,
              reps: '20-25',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Выпады',
                en: 'Lunges',
                uk: 'Випади',
              },
              sets: 3,
              reps: '15 на каждую',
              rest: {
                ru: '60 сек',
                en: '60 sec',
                uk: '60 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Ягодичный мост',
                en: 'Glute Bridge',
                uk: 'Ягодичний міст',
              },
              sets: 3,
              reps: '20',
              rest: {
                ru: '45 сек',
                en: '45 sec',
                uk: '45 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Подъемы на носки',
                en: 'Calf Raises',
                uk: 'Підйоми на носки',
              },
              sets: 3,
              reps: '25',
              rest: {
                ru: '45 сек',
                en: '45 sec',
                uk: '45 сек',
              },
            },
          ],
        },
        {
          day: 5,
          workoutType: {
            ru: 'Все тело + Кардио',
            en: 'Full Body + Cardio',
            uk: 'Все тіло + Кардіо',
          },
          exercises: [
            {
              exerciseName: {
                ru: 'Берпи',
                en: 'Burpees',
                uk: 'Берпі',
              },
              sets: 4,
              reps: '10-12',
              rest: {
                ru: '45 сек',
                en: '45 sec',
                uk: '45 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Скалолаз',
                en: 'Mountain Climbers',
                uk: 'Скелелаз',
              },
              sets: 4,
              reps: '20',
              rest: {
                ru: '30 сек',
                en: '30 sec',
                uk: '30 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Скручивания',
                en: 'Crunches',
                uk: 'Скручування',
              },
              sets: 3,
              reps: '20',
              rest: {
                ru: '30 сек',
                en: '30 sec',
                uk: '30 сек',
              },
            },
            {
              exerciseName: {
                ru: 'Планка боковая',
                en: 'Side Plank',
                uk: 'Планка бокова',
              },
              sets: 3,
              reps: '30 сек на каждую',
              rest: {
                ru: '45 сек',
                en: '45 sec',
                uk: '45 сек',
              },
            },
          ],
        },
      ],
      equipment: [{ ru: 'Нет', en: 'None', uk: 'Немає' }],
      goals: {
        ru: 'Поддержание формы, развитие выносливости, укрепление мышц',
        en: 'Maintaining fitness, developing endurance, strengthening muscles',
        uk: "Підтримання форми, розвиток витривалості, зміцнення м'язів",
      },
      tips: {
        ru: 'Можно добавить рюкзак с книгами для дополнительной нагрузки. Следите за техникой',
        en: 'You can add a backpack with books for additional load. Monitor your technique',
        uk: 'Можна додати рюкзак з книгами для додаткового навантаження. Слідкуйте за технікою',
      },
      estimatedCaloriesBurn: 280,
    },
  ];

  const createdPlans = [];
  for (const planData of plans) {
    const existing = await workoutPlanRepository.findOne({
      where: { name: planData.name },
    });

    if (!existing) {
      const plan = workoutPlanRepository.create(planData);
      const saved = await workoutPlanRepository.save(plan);
      createdPlans.push(saved);
    }
  }

  console.log(`✅ Создано ${createdPlans.length} планов тренировок`);
  return createdPlans;
}
