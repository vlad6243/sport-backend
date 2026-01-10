import { Repository } from 'typeorm';
import {
  Exercise,
  MuscleGroup,
  DifficultyLevel,
  EquipmentType,
} from '../../library/entities/exercise.entity';

export async function seedExercises(exerciseRepository: Repository<Exercise>) {
  const exercises = [
    // CHEST EXERCISES
    {
      name: {
        ru: 'Отжимания от пола',
        en: 'Push-ups',
        ua: 'Віджимання від підлоги',
      },
      description: {
        ru: 'Базовое упражнение для развития грудных мышц, трицепсов и передних дельт',
        en: 'Basic exercise for developing chest muscles, triceps and front delts',
        ua: "Базова вправа для розвитку грудних м'язів, трицепсів та передніх дельт",
      },
      instructions: {
        ru: '1. Примите упор лежа, руки на ширине плеч\n2. Опуститесь вниз, сгибая локти\n3. Вернитесь в исходное положение',
        en: '1. Get into plank position, hands shoulder-width apart\n2. Lower yourself down by bending elbows\n3. Return to starting position',
        ua: '1. Прийміть упор лежачи, руки на ширині плечей\n2. Опустіться вниз, згинаючи лікті\n3. Поверніться у вихідне положення',
      },
      primaryMuscleGroup: MuscleGroup.CHEST,
      secondaryMuscleGroups: [MuscleGroup.ARMS, MuscleGroup.SHOULDERS],
      difficulty: DifficultyLevel.BEGINNER,
      equipment: EquipmentType.NONE,
      estimatedDuration: 3,
      caloriesBurnedPerMinute: 8,
      tips: {
        ru: 'Держите тело прямо, не прогибайтесь в пояснице',
        en: "Keep your body straight, don't arch your lower back",
        ua: 'Тримайте тіло прямо, не прогинайтеся в попереку',
      },
      commonMistakes: {
        ru: 'Разведение локтей в стороны, провисание бедер',
        en: 'Flaring elbows out to sides, sagging hips',
        ua: 'Розведення ліктів убік, провисання стегон',
      },
    },
    {
      name: {
        ru: 'Жим штанги лежа',
        en: 'Barbell Bench Press',
        ua: 'Жим штанги лежачи',
      },
      description: {
        ru: 'Классическое базовое упражнение для развития грудных мышц',
        en: 'Classic compound exercise for chest development',
        ua: "Класична базова вправа для розвитку грудних м'язів",
      },
      instructions: {
        ru: '1. Лягте на скамью, возьмите штангу хватом чуть шире плеч\n2. Опустите штангу до груди\n3. Выжмите штангу вверх',
        en: '1. Lie on bench, grip bar slightly wider than shoulders\n2. Lower bar to chest\n3. Press bar upward',
        ua: '1. Лягте на лаву, візьміть штангу хватом трохи ширше плечей\n2. Опустіть штангу до грудей\n3. Виджміть штангу вгору',
      },
      primaryMuscleGroup: MuscleGroup.CHEST,
      secondaryMuscleGroups: [MuscleGroup.ARMS, MuscleGroup.SHOULDERS],
      difficulty: DifficultyLevel.INTERMEDIATE,
      equipment: EquipmentType.BARBELL,
      estimatedDuration: 5,
      caloriesBurnedPerMinute: 6,
      tips: {
        ru: 'Используйте страховку, опускайте штангу медленно',
        en: 'Use a spotter, lower the bar slowly',
        ua: 'Використовуйте страховку, опускайте штангу повільно',
      },
      commonMistakes: {
        ru: 'Отрыв таза от скамьи, слишком быстрое опускание',
        en: 'Lifting hips off bench, lowering too quickly',
        ua: 'Відрив тазу від лави, занадто швидке опускання',
      },
    },
    {
      name: {
        ru: 'Жим гантелей на наклонной скамье',
        en: 'Incline Dumbbell Press',
        ua: 'Жим гантелей на похилій лаві',
      },
      description: {
        ru: 'Упражнение для верхней части грудных мышц',
        en: 'Exercise for upper chest muscles',
        ua: "Вправа для верхньої частини грудних м'язів",
      },
      instructions: {
        ru: '1. Установите скамью под углом 30-45 градусов\n2. Поднимите гантели вверх\n3. Опустите гантели к верхней части груди',
        en: '1. Set bench to 30-45 degree angle\n2. Press dumbbells upward\n3. Lower dumbbells to upper chest',
        ua: '1. Встановіть лаву під кутом 30-45 градусів\n2. Підніміть гантелі вгору\n3. Опустіть гантелі до верхньої частини грудей',
      },
      primaryMuscleGroup: MuscleGroup.CHEST,
      secondaryMuscleGroups: [MuscleGroup.SHOULDERS, MuscleGroup.ARMS],
      difficulty: DifficultyLevel.INTERMEDIATE,
      equipment: EquipmentType.DUMBBELLS,
      estimatedDuration: 4,
      caloriesBurnedPerMinute: 6,
      tips: {
        ru: 'Держите локти под углом 45 градусов к телу',
        en: 'Keep elbows at 45 degrees to body',
        ua: 'Тримайте лікті під кутом 45 градусів до тіла',
      },
      commonMistakes: {
        ru: 'Слишком большой угол наклона, неконтролируемое опускание',
        en: 'Too steep incline angle, uncontrolled descent',
        ua: 'Занадто великий кут нахилу, неконтрольоване опускання',
      },
    },

    // BACK EXERCISES
    {
      name: {
        ru: 'Подтягивания',
        en: 'Pull-ups',
        ua: 'Підтягування',
      },
      description: {
        ru: 'Базовое упражнение для развития мышц спины и бицепсов',
        en: 'Basic exercise for back and biceps development',
        ua: "Базова вправа для розвитку м'язів спини та біцепсів",
      },
      instructions: {
        ru: '1. Возьмитесь за перекладину хватом чуть шире плеч\n2. Подтянитесь вверх до уровня подбородка\n3. Медленно опуститесь вниз',
        en: '1. Grip bar slightly wider than shoulders\n2. Pull yourself up until chin over bar\n3. Lower slowly',
        ua: '1. Візьміться за перекладину хватом трохи ширше плечей\n2. Підтягніться вгору до рівня підборіддя\n3. Повільно опустіться вниз',
      },
      primaryMuscleGroup: MuscleGroup.BACK,
      secondaryMuscleGroups: [MuscleGroup.ARMS],
      difficulty: DifficultyLevel.INTERMEDIATE,
      equipment: EquipmentType.NONE,
      estimatedDuration: 4,
      caloriesBurnedPerMinute: 9,
      tips: {
        ru: 'Используйте резинку для помощи если нужно',
        en: 'Use resistance band for assistance if needed',
        ua: 'Використовуйте резинку для допомоги якщо потрібно',
      },
      commonMistakes: {
        ru: 'Раскачивание тела, неполная амплитуда движения',
        en: 'Swinging body, incomplete range of motion',
        ua: 'Розгойдування тіла, неповна амплітуда руху',
      },
    },
    {
      name: {
        ru: 'Тяга штанги в наклоне',
        en: 'Bent Over Barbell Row',
        ua: 'Тяга штанги в нахилі',
      },
      description: {
        ru: 'Базовое упражнение для развития широчайших мышц спины',
        en: 'Compound exercise for lat development',
        ua: "Базова вправа для розвитку найширших м'язів спини",
      },
      instructions: {
        ru: '1. Наклонитесь вперед, спина прямая\n2. Подтяните штангу к нижней части живота\n3. Опустите штангу в исходное положение',
        en: '1. Bend forward with straight back\n2. Pull bar to lower abs\n3. Lower bar to starting position',
        ua: '1. Нахиліться вперед, спина пряма\n2. Підтягніть штангу до нижньої частини живота\n3. Опустіть штангу у вихідне положення',
      },
      primaryMuscleGroup: MuscleGroup.BACK,
      secondaryMuscleGroups: [MuscleGroup.ARMS],
      difficulty: DifficultyLevel.INTERMEDIATE,
      equipment: EquipmentType.BARBELL,
      estimatedDuration: 5,
      caloriesBurnedPerMinute: 7,
      tips: {
        ru: 'Держите спину прямой, тяните локтями назад',
        en: 'Keep back straight, pull with elbows',
        ua: 'Тримайте спину прямою, тягніть ліктями назад',
      },
      commonMistakes: {
        ru: 'Округление спины, использование инерции',
        en: 'Rounding back, using momentum',
        ua: 'Округлення спини, використання інерції',
      },
    },

    // LEGS EXERCISES
    {
      name: {
        ru: 'Приседания со штангой',
        en: 'Barbell Squat',
        ua: 'Присідання зі штангою',
      },
      description: {
        ru: 'Король упражнений для ног, развивает квадрицепсы, ягодицы и заднюю поверхность бедра',
        en: 'King of leg exercises, develops quads, glutes and hamstrings',
        ua: 'Король вправ для ніг, розвиває квадрицепси, сідниці та задню поверхню стегна',
      },
      instructions: {
        ru: '1. Положите штангу на трапеции\n2. Опуститесь вниз до параллели бедер с полом\n3. Встаньте, выпрямляя ноги',
        en: '1. Place bar on traps\n2. Squat down until thighs parallel to floor\n3. Stand up by straightening legs',
        ua: '1. Покладіть штангу на трапеції\n2. Опустіться вниз до паралелі стегон з підлогою\n3. Встаньте, випрямляючи ноги',
      },
      primaryMuscleGroup: MuscleGroup.LEGS,
      secondaryMuscleGroups: [MuscleGroup.ABS],
      difficulty: DifficultyLevel.ADVANCED,
      equipment: EquipmentType.BARBELL,
      estimatedDuration: 6,
      caloriesBurnedPerMinute: 8,
      tips: {
        ru: 'Колени в направлении носков, спина прямая, взгляд прямо',
        en: 'Knees in line with toes, back straight, look forward',
        ua: 'Коліна в напрямку носків, спина пряма, погляд прямо',
      },
      commonMistakes: {
        ru: 'Колени выходят за носки, округление спины, подъем на носки',
        en: 'Knees past toes, rounding back, rising onto toes',
        ua: 'Коліна виходять за носки, округлення спини, підйом на носки',
      },
    },
    {
      name: {
        ru: 'Румынская тяга',
        en: 'Romanian Deadlift',
        ua: 'Румунська тяга',
      },
      description: {
        ru: 'Упражнение для задней поверхности бедра и ягодичных мышц',
        en: 'Exercise for hamstrings and glutes',
        ua: "Вправа для задньої поверхні стегна та сідничних м'язів",
      },
      instructions: {
        ru: '1. Держите штангу в руках, ноги на ширине плеч\n2. Наклонитесь вперед с прямой спиной\n3. Вернитесь в исходное положение',
        en: '1. Hold bar in hands, feet shoulder-width\n2. Hinge forward with straight back\n3. Return to starting position',
        ua: '1. Тримайте штангу в руках, ноги на ширині плечей\n2. Нахиліться вперед з прямою спиною\n3. Поверніться у вихідне положення',
      },
      primaryMuscleGroup: MuscleGroup.LEGS,
      secondaryMuscleGroups: [MuscleGroup.BACK],
      difficulty: DifficultyLevel.INTERMEDIATE,
      equipment: EquipmentType.BARBELL,
      estimatedDuration: 5,
      caloriesBurnedPerMinute: 7,
      tips: {
        ru: 'Держите штангу близко к ногам, чувствуйте растяжение задней поверхности',
        en: 'Keep bar close to legs, feel the hamstring stretch',
        ua: 'Тримайте штангу близько до ніг, відчувайте розтягнення задньої поверхні',
      },
      commonMistakes: {
        ru: 'Округление спины, сгибание коленей слишком сильно',
        en: 'Rounding back, bending knees too much',
        ua: 'Округлення спини, згинання колін занадто сильно',
      },
    },

    // SHOULDERS EXERCISES
    {
      name: {
        ru: 'Жим штанги стоя',
        en: 'Standing Barbell Press',
        ua: 'Жим штанги стоячи',
      },
      description: {
        ru: 'Базовое упражнение для развития дельтовидных мышц',
        en: 'Compound exercise for shoulder development',
        ua: "Базова вправа для розвитку дельтоподібних м'язів",
      },
      instructions: {
        ru: '1. Держите штангу на уровне плеч\n2. Выжмите штангу вверх над головой\n3. Опустите в исходное положение',
        en: '1. Hold bar at shoulder level\n2. Press bar overhead\n3. Lower to starting position',
        ua: '1. Тримайте штангу на рівні плечей\n2. Виджміть штангу вгору над головою\n3. Опустіть у вихідне положення',
      },
      primaryMuscleGroup: MuscleGroup.SHOULDERS,
      secondaryMuscleGroups: [MuscleGroup.ARMS],
      difficulty: DifficultyLevel.INTERMEDIATE,
      equipment: EquipmentType.BARBELL,
      estimatedDuration: 4,
      caloriesBurnedPerMinute: 6,
      tips: {
        ru: 'Напрягайте пресс для стабилизации, не прогибайтесь в пояснице',
        en: "Engage core for stability, don't arch lower back",
        ua: 'Напружуйте прес для стабілізації, не прогинайтеся в попереку',
      },
      commonMistakes: {
        ru: 'Чрезмерный прогиб в пояснице, подталкивание ногами',
        en: 'Excessive lower back arch, leg drive',
        ua: 'Надмірний прогин у попереку, підштовхування ногами',
      },
    },
    {
      name: {
        ru: 'Махи гантелями в стороны',
        en: 'Dumbbell Lateral Raises',
        ua: 'Махи гантелями убік',
      },
      description: {
        ru: 'Изолирующее упражнение для средних дельт',
        en: 'Isolation exercise for middle delts',
        ua: 'Ізолююча вправа для середніх дельт',
      },
      instructions: {
        ru: '1. Держите гантели по бокам\n2. Поднимите руки в стороны до уровня плеч\n3. Опустите в исходное положение',
        en: '1. Hold dumbbells at sides\n2. Raise arms to shoulder level\n3. Lower to starting position',
        ua: '1. Тримайте гантелі по боках\n2. Підніміть руки убік до рівня плечей\n3. Опустіть у вихідне положення',
      },
      primaryMuscleGroup: MuscleGroup.SHOULDERS,
      secondaryMuscleGroups: [],
      difficulty: DifficultyLevel.BEGINNER,
      equipment: EquipmentType.DUMBBELLS,
      estimatedDuration: 3,
      caloriesBurnedPerMinute: 5,
      tips: {
        ru: 'Небольшой наклон корпуса вперед, локти слегка согнуты',
        en: 'Slight forward lean, elbows slightly bent',
        ua: 'Невеликий нахил корпусу вперед, лікті злегка зігнуті',
      },
      commonMistakes: {
        ru: 'Подъем гантелей выше плеч, использование инерции',
        en: 'Raising dumbbells above shoulders, using momentum',
        ua: 'Підйом гантелей вище плечей, використання інерції',
      },
    },

    // ARMS EXERCISES
    {
      name: {
        ru: 'Подъем штанги на бицепс',
        en: 'Barbell Bicep Curl',
        ua: 'Підйом штанги на біцепс',
      },
      description: {
        ru: 'Классическое упражнение для развития бицепсов',
        en: 'Classic exercise for bicep development',
        ua: 'Класична вправа для розвитку біцепсів',
      },
      instructions: {
        ru: '1. Держите штангу хватом на ширине плеч\n2. Согните руки в локтях, поднимая штангу\n3. Медленно опустите штангу',
        en: '1. Hold bar with shoulder-width grip\n2. Curl bar up by bending elbows\n3. Slowly lower bar',
        ua: '1. Тримайте штангу хватом на ширині плечей\n2. Зігніть руки в ліктях, піднімаючи штангу\n3. Повільно опустіть штангу',
      },
      primaryMuscleGroup: MuscleGroup.ARMS,
      secondaryMuscleGroups: [],
      difficulty: DifficultyLevel.BEGINNER,
      equipment: EquipmentType.BARBELL,
      estimatedDuration: 3,
      caloriesBurnedPerMinute: 4,
      tips: {
        ru: 'Держите локти прижатыми к телу, не раскачивайтесь',
        en: "Keep elbows tucked to body, don't swing",
        ua: 'Тримайте лікті притиснутими до тіла, не розгойдуйтеся',
      },
      commonMistakes: {
        ru: 'Раскачивание корпуса, отведение локтей назад',
        en: 'Swinging body, moving elbows back',
        ua: 'Розгойдування корпусу, відведення ліктів назад',
      },
    },
    {
      name: {
        ru: 'Французский жим',
        en: 'Skull Crushers',
        ua: 'Французький жим',
      },
      description: {
        ru: 'Упражнение для развития трицепсов',
        en: 'Exercise for triceps development',
        ua: 'Вправа для розвитку трицепсів',
      },
      instructions: {
        ru: '1. Лягте на скамью, держите штангу над головой\n2. Согните руки, опуская штангу ко лбу\n3. Разогните руки в исходное положение',
        en: '1. Lie on bench, hold bar overhead\n2. Bend arms, lowering bar to forehead\n3. Extend arms to starting position',
        ua: '1. Лягте на лаву, тримайте штангу над головою\n2. Зігніть руки, опускаючи штангу до чола\n3. Розігніть руки у вихідне положення',
      },
      primaryMuscleGroup: MuscleGroup.ARMS,
      secondaryMuscleGroups: [],
      difficulty: DifficultyLevel.INTERMEDIATE,
      equipment: EquipmentType.BARBELL,
      estimatedDuration: 3,
      caloriesBurnedPerMinute: 4,
      tips: {
        ru: 'Держите локти неподвижными, работают только предплечья',
        en: 'Keep elbows stationary, only forearms move',
        ua: 'Тримайте лікті нерухомими, працюють тільки передпліччя',
      },
      commonMistakes: {
        ru: 'Разведение локтей в стороны, слишком большой вес',
        en: 'Flaring elbows out, too much weight',
        ua: 'Розведення ліктів убік, занадто велика вага',
      },
    },

    // ABS EXERCISES
    {
      name: {
        ru: 'Планка',
        en: 'Plank',
        ua: 'Планка',
      },
      description: {
        ru: 'Статическое упражнение для укрепления мышц кора',
        en: 'Static exercise for core strengthening',
        ua: "Статична вправа для зміцнення м'язів кора",
      },
      instructions: {
        ru: '1. Примите упор лежа на предплечьях\n2. Держите тело прямо\n3. Удерживайте положение',
        en: '1. Get into forearm plank position\n2. Keep body straight\n3. Hold the position',
        ua: '1. Прийміть упор лежачи на передпліччях\n2. Тримайте тіло прямо\n3. Утримуйте положення',
      },
      primaryMuscleGroup: MuscleGroup.ABS,
      secondaryMuscleGroups: [MuscleGroup.SHOULDERS],
      difficulty: DifficultyLevel.BEGINNER,
      equipment: EquipmentType.NONE,
      estimatedDuration: 2,
      caloriesBurnedPerMinute: 5,
      tips: {
        ru: 'Напрягайте ягодицы и пресс, дышите ровно',
        en: 'Engage glutes and abs, breathe steadily',
        ua: 'Напружуйте сідниці та прес, дихайте рівно',
      },
      commonMistakes: {
        ru: 'Провисание бедер, подъем таза вверх',
        en: 'Sagging hips, raising hips too high',
        ua: 'Провисання стегон, підйом тазу вгору',
      },
    },
    {
      name: {
        ru: 'Скручивания',
        en: 'Crunches',
        ua: 'Скручування',
      },
      description: {
        ru: 'Базовое упражнение для прямой мышцы живота',
        en: 'Basic exercise for rectus abdominis',
        ua: "Базова вправа для прямого м'яза живота",
      },
      instructions: {
        ru: '1. Лягте на спину, ноги согнуты\n2. Поднимите плечи от пола, скручивая корпус\n3. Вернитесь в исходное положение',
        en: '1. Lie on back, knees bent\n2. Lift shoulders off floor, curling torso\n3. Return to starting position',
        ua: '1. Лягте на спину, ноги зігнуті\n2. Підніміть плечі від підлоги, скручуючи корпус\n3. Поверніться у вихідне положення',
      },
      primaryMuscleGroup: MuscleGroup.ABS,
      secondaryMuscleGroups: [],
      difficulty: DifficultyLevel.BEGINNER,
      equipment: EquipmentType.NONE,
      estimatedDuration: 3,
      caloriesBurnedPerMinute: 6,
      tips: {
        ru: 'Не тяните голову руками, работайте прессом',
        en: "Don't pull on head with hands, use abs",
        ua: 'Не тягніть голову руками, працюйте пресом',
      },
      commonMistakes: {
        ru: 'Отрыв поясницы от пола, рывки',
        en: 'Lifting lower back off floor, jerking motions',
        ua: 'Відрив попереку від підлоги, ривки',
      },
    },

    // CARDIO EXERCISES
    {
      name: {
        ru: 'Берпи',
        en: 'Burpees',
        ua: 'Берпі',
      },
      description: {
        ru: 'Интенсивное кардио-упражнение для всего тела',
        en: 'Intense full-body cardio exercise',
        ua: 'Інтенсивна кардіо-вправа для всього тіла',
      },
      instructions: {
        ru: '1. Присядьте, руки на пол\n2. Прыжком примите упор лежа\n3. Отжимание (опционально)\n4. Прыжком вернитесь в присед\n5. Выпрыгните вверх',
        en: '1. Squat down, hands on floor\n2. Jump into plank position\n3. Push-up (optional)\n4. Jump back to squat\n5. Jump up',
        ua: '1. Присядьте, руки на підлогу\n2. Стрибком прийміть упор лежачи\n3. Віджимання (опціонально)\n4. Стрибком поверніться в присід\n5. Вистрибніть вгору',
      },
      primaryMuscleGroup: MuscleGroup.CARDIO,
      secondaryMuscleGroups: [
        MuscleGroup.CHEST,
        MuscleGroup.LEGS,
        MuscleGroup.ABS,
      ],
      difficulty: DifficultyLevel.INTERMEDIATE,
      equipment: EquipmentType.NONE,
      estimatedDuration: 3,
      caloriesBurnedPerMinute: 12,
      tips: {
        ru: 'Держите темп постоянным, дышите ритмично',
        en: 'Maintain steady pace, breathe rhythmically',
        ua: 'Тримайте темп постійним, дихайте ритмічно',
      },
      commonMistakes: {
        ru: 'Слишком быстрый темп в начале, неполная амплитуда',
        en: 'Too fast pace at start, incomplete range of motion',
        ua: 'Занадто швидкий темп на початку, неповна амплітуда',
      },
    },
    {
      name: {
        ru: 'Скакалка',
        en: 'Jump Rope',
        ua: 'Скакалка',
      },
      description: {
        ru: 'Кардио-упражнение для развития выносливости и координации',
        en: 'Cardio exercise for endurance and coordination',
        ua: 'Кардіо-вправа для розвитку витривалості та координації',
      },
      instructions: {
        ru: '1. Держите ручки скакалки в руках\n2. Вращайте скакалку, прыгая через нее\n3. Приземляйтесь на носки',
        en: '1. Hold jump rope handles\n2. Rotate rope, jumping over it\n3. Land on balls of feet',
        ua: '1. Тримайте ручки скакалки в руках\n2. Обертайте скакалку, стрибаючи через неї\n3. Приземляйтесь на носки',
      },
      primaryMuscleGroup: MuscleGroup.CARDIO,
      secondaryMuscleGroups: [MuscleGroup.LEGS],
      difficulty: DifficultyLevel.BEGINNER,
      equipment: EquipmentType.NONE,
      estimatedDuration: 5,
      caloriesBurnedPerMinute: 13,
      tips: {
        ru: 'Начинайте с медленного темпа, вращение от запястий',
        en: 'Start with slow pace, rotate from wrists',
        ua: "Починайте з повільного темпу, обертання від зап'ясть",
      },
      commonMistakes: {
        ru: 'Приземление на всю стопу, слишком высокие прыжки',
        en: 'Landing on full foot, jumping too high',
        ua: 'Приземлення на всю стопу, занадто високі стрибки',
      },
    },
  ];

  const createdExercises = [];
  for (const exerciseData of exercises) {
    const existing = await exerciseRepository.findOne({
      where: { name: exerciseData.name },
    });

    if (!existing) {
      const exercise = exerciseRepository.create(exerciseData);
      const saved = await exerciseRepository.save(exercise);
      createdExercises.push(saved);
    }
  }

  console.log(`✅ Создано ${createdExercises.length} упражнений`);
  return createdExercises;
}
