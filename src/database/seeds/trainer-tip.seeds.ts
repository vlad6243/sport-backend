import { Repository } from 'typeorm';
import {
  TrainerTip,
  TipCategory,
} from '../../library/entities/trainer-tip.entity';

export async function seedTrainerTips(
  trainerTipRepository: Repository<TrainerTip>,
) {
  const tips = [
    // MOTIVATION
    {
      title: {
        ru: 'Секрет постоянства в тренировках',
        en: 'The Secret of Training Consistency',
        ua: 'Секрет постійності в тренуваннях',
      },
      summary: {
        ru: 'Как сделать тренировки привычкой и не бросать через неделю',
        en: 'How to make training a habit and not quit after a week',
        ua: 'Як зробити тренування звичкою і не кидати через тиждень',
      },
      content: {
        ru: `Главная ошибка новичков - пытаться изменить всё сразу. Вместо этого:

1. Начните с малого - 2-3 тренировки в неделю по 30 минут
2. Выберите удобное время и придерживайтесь его
3. Не пропускайте более 2 тренировок подряд
4. Отмечайте прогресс - ведите дневник тренировок
5. Найдите партнера или присоединитесь к группе

Помните: лучше тренироваться регулярно с меньшей интенсивностью, чем интенсивно, но редко. Постоянство важнее интенсивности.`,
        en: `The main mistake beginners make is trying to change everything at once. Instead:

1. Start small - 2-3 workouts per week for 30 minutes
2. Choose a convenient time and stick to it
3. Don't skip more than 2 workouts in a row
4. Track your progress - keep a training journal
5. Find a partner or join a group

Remember: it's better to train regularly with lower intensity than intensely but rarely. Consistency is more important than intensity.`,
        ua: `Головна помилка новачків - намагатися змінити все одразу. Замість цього:

1. Почніть з малого - 2-3 тренування на тиждень по 30 хвилин
2. Оберіть зручний час і дотримуйтесь його
3. Не пропускайте більше 2 тренувань підряд
4. Відзначайте прогрес - ведіть щоденник тренувань
5. Знайдіть партнера або приєднайтеся до групи

Пам'ятайте: краще тренуватися регулярно з меншою інтенсивністю, ніж інтенсивно, але рідко. Постійність важливіша за інтенсивність.`,
      },
      category: TipCategory.MOTIVATION,
      tags: [
        { ru: 'постоянство', en: 'consistency', ua: 'постійність' },
        { ru: 'привычки', en: 'habits', ua: 'звички' },
        { ru: 'новичкам', en: 'beginners', ua: 'новачкам' },
      ],
      authorName: {
        ru: 'Дмитрий Петров',
        en: 'Dmitry Petrov',
        ua: 'Дмитро Петров',
      },
      readingTime: 3,
    },
    {
      title: {
        ru: 'Как не потерять мотивацию',
        en: 'How to Stay Motivated',
        ua: 'Як не втратити мотивацію',
      },
      summary: {
        ru: 'Практические советы для поддержания мотивации на долгой дистанции',
        en: 'Practical tips for maintaining motivation in the long run',
        ua: 'Практичні поради для підтримки мотивації на довгій дистанції',
      },
      content: {
        ru: `Мотивация приходит и уходит. Вот что делать, когда она на нуле:

1. Вспомните свою начальную цель - почему вы начали
2. Пересмотрите фото "до" и сравните с текущими
3. Попробуйте новый вид тренировок
4. Возьмите 3-4 дня отдыха для восстановления
5. Поставьте новую краткосрочную цель

Мотивация - это не константа, это волна. Научитесь работать и без неё, опираясь на дисциплину.`,
        en: `Motivation comes and goes. Here's what to do when it's at zero:

1. Remember your initial goal - why you started
2. Review your "before" photos and compare with current ones
3. Try a new type of workout
4. Take 3-4 days of rest for recovery
5. Set a new short-term goal

Motivation is not a constant, it's a wave. Learn to work without it, relying on discipline.`,
        ua: `Мотивація приходить і йде. Ось що робити, коли вона на нулі:

1. Згадайте свою початкову мету - чому ви почали
2. Перегляньте фото "до" і порівняйте з поточними
3. Спробуйте новий вид тренувань
4. Візьміть 3-4 дні відпочинку для відновлення
5. Поставте нову короткострокову мету

Мотивація - це не константа, це хвиля. Навчіться працювати і без неї, спираючись на дисципліну.`,
      },
      category: TipCategory.MOTIVATION,
      tags: [
        { ru: 'мотивация', en: 'motivation', ua: 'мотивація' },
        { ru: 'цели', en: 'goals', ua: 'цілі' },
        { ru: 'психология', en: 'psychology', ua: 'психологія' },
      ],
      authorName: {
        ru: 'Дмитрий Петров',
        en: 'Dmitry Petrov',
        ua: 'Дмитро Петров',
      },
      readingTime: 2,
    },

    // TECHNIQUE
    {
      title: {
        ru: 'Правильная техника приседаний',
        en: 'Proper Squat Technique',
        ua: 'Правильна техніка присідань',
      },
      summary: {
        ru: 'Избегайте травм - научитесь приседать правильно',
        en: 'Avoid injuries - learn to squat correctly',
        ua: 'Уникайте травм - навчіться присідати правильно',
      },
      content: {
        ru: `Приседания - король упражнений, но только при правильной технике:

**Постановка:**
- Ноги на ширине плеч или чуть шире
- Носки слегка развернуты наружу (10-15 градусов)
- Штанга на трапециях, не на шее

**Выполнение:**
- Взгляд прямо или чуть вверх
- Колени идут в сторону носков, не внутрь
- Опускайтесь до параллели бедер с полом
- Пятки прижаты к полу
- Спина прямая на всей амплитуде

**Частые ошибки:**
- Колени выходят за носки - отводите таз назад
- Круглая спина - держите грудь колесом
- Подъем на носки - давите пятками

Начинайте без веса, отработайте технику на 100 повторений, только потом добавляйте нагрузку.`,
        en: `Squats are the king of exercises, but only with proper technique:

**Setup:**
- Feet shoulder-width apart or slightly wider
- Toes slightly turned outward (10-15 degrees)
- Bar on traps, not on neck

**Execution:**
- Look straight ahead or slightly up
- Knees track toward toes, not inward
- Lower until thighs are parallel to floor
- Heels pressed to floor
- Back straight throughout the movement

**Common mistakes:**
- Knees go past toes - push hips back
- Rounded back - keep chest up
- Rising on toes - press through heels

Start without weight, practice technique for 100 reps, only then add load.`,
        ua: `Присідання - король вправ, але тільки при правильній техніці:

**Постановка:**
- Ноги на ширині плечей або трохи ширше
- Носки злегка розгорнуті назовні (10-15 градусів)
- Штанга на трапеціях, не на шиї

**Виконання:**
- Погляд прямо або трохи вгору
- Коліна йдуть у бік носків, не всередину
- Опускайтеся до паралелі стегон з підлогою
- П'яти притиснуті до підлоги
- Спина пряма на всій амплітуді

**Часті помилки:**
- Коліна виходять за носки - відводьте таз назад
- Кругла спина - тримайте груди колесом
- Підйом на носки - тисніть п'ятами

Починайте без ваги, відпрацюйте техніку на 100 повторень, тільки потім додавайте навантаження.`,
      },
      category: TipCategory.TECHNIQUE,
      tags: [
        { ru: 'приседания', en: 'squats', ua: 'присідання' },
        { ru: 'техника', en: 'technique', ua: 'техніка' },
        { ru: 'базовые упражнения', en: 'basic exercises', ua: 'базові вправи' },
      ],
      authorName: {
        ru: 'Алексей Иванов',
        en: 'Alexey Ivanov',
        ua: 'Олексій Іванов',
      },
      readingTime: 4,
    },
    {
      title: {
        ru: 'Дыхание при выполнении упражнений',
        en: 'Breathing During Exercise',
        ua: 'Дихання при виконанні вправ',
      },
      summary: {
        ru: 'Как правильно дышать для максимальной эффективности',
        en: 'How to breathe correctly for maximum effectiveness',
        ua: 'Як правильно дихати для максимальної ефективності',
      },
      content: {
        ru: `Правильное дыхание увеличивает силу и снижает риск травм:

**Базовое правило:**
- Выдох на усилии (подъем веса)
- Вдох на расслаблении (опускание веса)

**Примеры:**
- Жим лежа: вдох при опускании штанги, выдох при подъеме
- Приседания: вдох при опускании, выдох при подъеме
- Тяга: вдох перед тягой, выдох при подтягивании к себе

**Важно:**
- Не задерживайте дыхание дольше 2-3 секунд
- При максимальных весах используйте пояс
- Дышите через нос при кардио

Освойте правильное дыхание - это добавит 10-15% к вашим результатам.`,
        en: `Proper breathing increases strength and reduces injury risk:

**Basic rule:**
- Exhale on exertion (lifting weight)
- Inhale on relaxation (lowering weight)

**Examples:**
- Bench press: inhale when lowering bar, exhale when lifting
- Squats: inhale when lowering, exhale when rising
- Rows: inhale before pull, exhale when pulling toward you

**Important:**
- Don't hold breath longer than 2-3 seconds
- Use a belt for maximum weights
- Breathe through nose during cardio

Master proper breathing - it will add 10-15% to your results.`,
        ua: `Правильне дихання збільшує силу та знижує ризик травм:

**Базове правило:**
- Видих на зусиллі (підйом ваги)
- Вдих на розслабленні (опускання ваги)

**Приклади:**
- Жим лежачи: вдих при опусканні штанги, видих при підйомі
- Присідання: вдих при опусканні, видих при підйомі
- Тяга: вдих перед тягою, видих при підтягуванні до себе

**Важливо:**
- Не затримуйте дихання довше 2-3 секунд
- При максимальних вагах використовуйте пояс
- Дихайте через ніс при кардіо

Опануйте правильне дихання - це додасть 10-15% до ваших результатів.`,
      },
      category: TipCategory.TECHNIQUE,
      tags: [
        { ru: 'дыхание', en: 'breathing', ua: 'дихання' },
        { ru: 'техника', en: 'technique', ua: 'техніка' },
        { ru: 'безопасность', en: 'safety', ua: 'безпека' },
      ],
      authorName: {
        ru: 'Алексей Иванов',
        en: 'Alexey Ivanov',
        ua: 'Олексій Іванов',
      },
      readingTime: 3,
    },

    // NUTRITION
    {
      title: {
        ru: 'Питание для набора массы',
        en: 'Nutrition for Muscle Gain',
        ua: 'Харчування для набору маси',
      },
      summary: {
        ru: 'Что есть, чтобы расти, а не толстеть',
        en: 'What to eat to grow muscle, not fat',
        ua: 'Що їсти, щоб рости, а не товстішати',
      },
      content: {
        ru: `Набор массы = профицит калорий + достаточно белка + правильный тренинг.

**Калории:**
- Рассчитайте свою норму (вес × 30-35 ккал)
- Добавьте 300-500 ккал для роста
- Не более 500 ккал профицита, иначе жир

**Макронутриенты:**
- Белки: 2-2.5г на кг веса
- Углеводы: 4-6г на кг веса
- Жиры: 0.8-1г на кг веса

**Приемы пищи:**
- 4-6 приемов в день
- Белок в каждом приеме
- Углеводы больше до и после тренировки

**Продукты:**
- Белок: курица, рыба, яйца, творог
- Углеводы: рис, гречка, овсянка, картофель
- Жиры: орехи, авокадо, масла

Взвешивайтесь раз в неделю. Прибавка 0.3-0.5 кг в неделю - идеально.`,
        en: `Muscle gain = calorie surplus + enough protein + proper training.

**Calories:**
- Calculate your baseline (weight × 30-35 kcal)
- Add 300-500 kcal for growth
- No more than 500 kcal surplus, or you'll gain fat

**Macronutrients:**
- Protein: 2-2.5g per kg body weight
- Carbs: 4-6g per kg body weight
- Fats: 0.8-1g per kg body weight

**Meals:**
- 4-6 meals per day
- Protein in every meal
- More carbs before and after training

**Foods:**
- Protein: chicken, fish, eggs, cottage cheese
- Carbs: rice, buckwheat, oatmeal, potatoes
- Fats: nuts, avocado, oils

Weigh yourself once a week. Gain of 0.3-0.5 kg per week is ideal.`,
        ua: `Набір маси = профіцит калорій + достатньо білка + правильний тренінг.

**Калорії:**
- Розрахуйте свою норму (вага × 30-35 ккал)
- Додайте 300-500 ккал для росту
- Не більше 500 ккал профіциту, інакше жир

**Макронутрієнти:**
- Білки: 2-2.5г на кг ваги
- Вуглеводи: 4-6г на кг ваги
- Жири: 0.8-1г на кг ваги

**Прийоми їжі:**
- 4-6 прийомів на день
- Білок у кожному прийомі
- Вуглеводи більше до і після тренування

**Продукти:**
- Білок: курка, риба, яйця, сир
- Вуглеводи: рис, гречка, вівсянка, картопля
- Жири: горіхи, авокадо, олії

Зважуйтеся раз на тиждень. Прибавка 0.3-0.5 кг на тиждень - ідеально.`,
      },
      category: TipCategory.NUTRITION,
      tags: [
        { ru: 'питание', en: 'nutrition', ua: 'харчування' },
        { ru: 'набор массы', en: 'muscle gain', ua: 'набір маси' },
        { ru: 'калории', en: 'calories', ua: 'калорії' },
      ],
      authorName: {
        ru: 'Мария Смирнова',
        en: 'Maria Smirnova',
        ua: 'Марія Смирнова',
      },
      readingTime: 5,
    },
    {
      title: {
        ru: 'Питание для похудения',
        en: 'Nutrition for Weight Loss',
        ua: 'Харчування для схуднення',
      },
      summary: {
        ru: 'Как правильно создать дефицит калорий',
        en: 'How to create a calorie deficit correctly',
        ua: 'Як правильно створити дефіцит калорій',
      },
      content: {
        ru: `Похудение = дефицит калорий, но с умом:

**Калории:**
- Норма: вес × 30 ккал
- Дефицит: минус 300-500 ккал
- Не менее 1200 ккал для женщин, 1500 для мужчин

**Макросы:**
- Белки: 2-2.5г на кг (важно сохранить мышцы!)
- Углеводы: 2-3г на кг
- Жиры: 0.7-1г на кг

**Стратегия:**
- Уберите жидкие калории (соки, газировки)
- Больше овощей - они насыщают
- Белок в каждом приеме - для сытости
- Углеводы вокруг тренировки

**Что есть:**
- Белок: курица, рыба, яйца, протеин
- Углеводы: гречка, рис, овсянка
- Овощи: все зеленые, капуста, огурцы
- Фрукты: ягоды, яблоки (ограничено)

Скорость: 0.5-1 кг в неделю. Быстрее = потеря мышц.`,
        en: `Weight loss = calorie deficit, but smart:

**Calories:**
- Baseline: weight × 30 kcal
- Deficit: minus 300-500 kcal
- No less than 1200 kcal for women, 1500 for men

**Macros:**
- Protein: 2-2.5g per kg (important to preserve muscle!)
- Carbs: 2-3g per kg
- Fats: 0.7-1g per kg

**Strategy:**
- Remove liquid calories (juices, sodas)
- More vegetables - they fill you up
- Protein in every meal - for satiety
- Carbs around training

**What to eat:**
- Protein: chicken, fish, eggs, protein powder
- Carbs: buckwheat, rice, oatmeal
- Vegetables: all greens, cabbage, cucumbers
- Fruits: berries, apples (limited)

Rate: 0.5-1 kg per week. Faster = muscle loss.`,
        ua: `Схуднення = дефіцит калорій, але з розумом:

**Калорії:**
- Норма: вага × 30 ккал
- Дефіцит: мінус 300-500 ккал
- Не менше 1200 ккал для жінок, 1500 для чоловіків

**Макроси:**
- Білки: 2-2.5г на кг (важливо зберегти м'язи!)
- Вуглеводи: 2-3г на кг
- Жири: 0.7-1г на кг

**Стратегія:**
- Приберіть рідкі калорії (соки, газовані напої)
- Більше овочів - вони насичують
- Білок у кожному прийомі - для ситості
- Вуглеводи навколо тренування

**Що їсти:**
- Білок: курка, риба, яйця, протеїн
- Вуглеводи: гречка, рис, вівсянка
- Овочі: всі зелені, капуста, огірки
- Фрукти: ягоди, яблука (обмежено)

Швидкість: 0.5-1 кг на тиждень. Швидше = втрата м'язів.`,
      },
      category: TipCategory.NUTRITION,
      tags: [
        { ru: 'похудение', en: 'weight loss', ua: 'схуднення' },
        { ru: 'дефицит калорий', en: 'calorie deficit', ua: 'дефіцит калорій' },
        { ru: 'диета', en: 'diet', ua: 'дієта' },
      ],
      authorName: {
        ru: 'Мария Смирнова',
        en: 'Maria Smirnova',
        ua: 'Марія Смирнова',
      },
      readingTime: 4,
    },

    // RECOVERY
    {
      title: {
        ru: 'Важность восстановления',
        en: 'The Importance of Recovery',
        ua: 'Важливість відновлення',
      },
      summary: {
        ru: 'Мышцы растут не в зале, а во время отдыха',
        en: 'Muscles grow not in the gym, but during rest',
        ua: 'М\'язи ростуть не в залі, а під час відпочинку',
      },
      content: {
        ru: `80% результата - это восстановление. Вот как делать это правильно:

**Сон:**
- Минимум 7-8 часов
- Ложитесь и вставайте в одно время
- Темнота и прохлада в комнате
- Нет телефона за час до сна

**Активное восстановление:**
- Легкое кардио в дни отдыха
- Растяжка 10-15 минут каждый день
- Массаж 1-2 раза в месяц
- Баня/сауна раз в неделю

**Питание:**
- Достаточно белка для восстановления
- Не урезайте калории слишком сильно
- Пейте 2-3 литра воды

**Перетренированность - признаки:**
- Плохой сон
- Отсутствие прогресса
- Постоянная усталость
- Снижение иммунитета

При признаках - возьмите неделю полного отдыха.`,
        en: `80% of results come from recovery. Here's how to do it right:

**Sleep:**
- Minimum 7-8 hours
- Go to bed and wake up at the same time
- Dark and cool room
- No phone an hour before bed

**Active recovery:**
- Light cardio on rest days
- Stretching 10-15 minutes daily
- Massage 1-2 times per month
- Sauna once a week

**Nutrition:**
- Enough protein for recovery
- Don't cut calories too drastically
- Drink 2-3 liters of water

**Overtraining - signs:**
- Poor sleep
- Lack of progress
- Constant fatigue
- Decreased immunity

If you see signs - take a full week of rest.`,
        ua: `80% результату - це відновлення. Ось як робити це правильно:

**Сон:**
- Мінімум 7-8 годин
- Лягайте і вставайте в один час
- Темрява і прохолода в кімнаті
- Ніяких телефонів за годину до сну

**Активне відновлення:**
- Легке кардіо в дні відпочинку
- Розтяжка 10-15 хвилин щодня
- Масаж 1-2 рази на місяць
- Лазня/сауна раз на тиждень

**Харчування:**
- Достатньо білка для відновлення
- Не скорочуйте калорії занадто сильно
- Пийте 2-3 літри води

**Перетренованість - ознаки:**
- Поганий сон
- Відсутність прогресу
- Постійна втома
- Зниження імунітету

При ознаках - візьміть тиждень повного відпочинку.`,
      },
      category: TipCategory.RECOVERY,
      tags: [
        { ru: 'восстановление', en: 'recovery', ua: 'відновлення' },
        { ru: 'сон', en: 'sleep', ua: 'сон' },
        { ru: 'отдых', en: 'rest', ua: 'відпочинок' },
      ],
      authorName: {
        ru: 'Сергей Волков',
        en: 'Sergey Volkov',
        ua: 'Сергій Волков',
      },
      readingTime: 4,
    },
    {
      title: {
        ru: 'Растяжка и гибкость',
        en: 'Stretching and Flexibility',
        ua: 'Розтяжка і гнучкість',
      },
      summary: {
        ru: 'Почему растяжка критически важна для роста',
        en: 'Why stretching is critically important for growth',
        ua: 'Чому розтяжка критично важлива для росту',
      },
      content: {
        ru: `Растяжка улучшает результаты и предотвращает травмы:

**Зачем растягиваться:**
- Увеличение амплитуды движения
- Лучшее кровоснабжение мышц
- Профилактика травм
- Улучшение осанки
- Снятие мышечного напряжения

**Когда:**
- Динамическая растяжка - перед тренировкой
- Статическая - после тренировки или в отдельный день
- Ежедневная - 10-15 минут

**Как растягиваться:**
- Разогрейтесь 5-10 минут
- Плавно, без резких движений
- Держите 20-30 секунд
- Дышите глубоко и ровно
- Без боли, только натяжение

**Фокус на:**
- Грудные мышцы (если сидите)
- Бицепс бедра
- Квадрицепс
- Ягодичные
- Плечевой пояс

5 минут растяжки = 30% меньше риск травмы.`,
        en: `Stretching improves results and prevents injuries:

**Why stretch:**
- Increased range of motion
- Better muscle blood supply
- Injury prevention
- Improved posture
- Relief of muscle tension

**When:**
- Dynamic stretching - before workout
- Static - after workout or on separate day
- Daily - 10-15 minutes

**How to stretch:**
- Warm up 5-10 minutes
- Smoothly, no jerky movements
- Hold 20-30 seconds
- Breathe deeply and evenly
- No pain, only tension

**Focus on:**
- Chest muscles (if you sit)
- Hamstrings
- Quadriceps
- Glutes
- Shoulder girdle

5 minutes of stretching = 30% less injury risk.`,
        ua: `Розтяжка покращує результати та запобігає травмам:

**Навіщо розтягуватися:**
- Збільшення амплітуди руху
- Краще кровопостачання м'язів
- Профілактика травм
- Покращення постави
- Зняття м'язового напруження

**Коли:**
- Динамічна розтяжка - перед тренуванням
- Статична - після тренування або в окремий день
- Щоденна - 10-15 хвилин

**Як розтягуватися:**
- Розігрійтеся 5-10 хвилин
- Плавно, без різких рухів
- Тримайте 20-30 секунд
- Дихайте глибоко і рівно
- Без болю, тільки натягнення

**Фокус на:**
- Грудні м'язи (якщо сидите)
- Біцепс стегна
- Квадрицепс
- Сідничні
- Плечовий пояс

5 хвилин розтяжки = 30% менше ризик травми.`,
      },
      category: TipCategory.RECOVERY,
      tags: [
        { ru: 'растяжка', en: 'stretching', ua: 'розтяжка' },
        { ru: 'гибкость', en: 'flexibility', ua: 'гнучкість' },
        { ru: 'профилактика', en: 'prevention', ua: 'профілактика' },
      ],
      authorName: {
        ru: 'Сергей Волков',
        en: 'Sergey Volkov',
        ua: 'Сергій Волков',
      },
      readingTime: 3,
    },

    // LIFESTYLE
    {
      title: {
        ru: 'Баланс между работой и спортом',
        en: 'Work-Life-Sport Balance',
        ua: 'Баланс між роботою та спортом',
      },
      summary: {
        ru: 'Как совмещать карьеру и регулярные тренировки',
        en: 'How to combine career and regular training',
        ua: 'Як поєднувати кар\'єру та регулярні тренування',
      },
      content: {
        ru: `Нехватка времени - главная отговорка. Вот решение:

**Планирование:**
- Тренировки в календаре как важные встречи
- Подготовка одежды с вечера
- Выбор зала по пути на работу/домой

**Оптимизация:**
- 3 тренировки по 45 минут лучше 5 по часу
- Домашние тренировки в плотные дни
- Объединяйте: подкасты во время кардио

**Приоритеты:**
- Утренние тренировки - меньше отговорок
- Обеденный перерыв - быстрая тренировка
- Выходные - длинные тренировки

**Работа сидя:**
- Вставайте каждый час на 5 минут
- Прогулка во время звонков
- Лестница вместо лифта

Вопрос не "когда найти время", а "как расставить приоритеты".`,
        en: `Lack of time is the main excuse. Here's the solution:

**Planning:**
- Workouts in calendar as important meetings
- Prepare clothes the night before
- Choose gym on the way to/from work

**Optimization:**
- 3 workouts of 45 minutes is better than 5 of an hour
- Home workouts on busy days
- Combine: podcasts during cardio

**Priorities:**
- Morning workouts - fewer excuses
- Lunch break - quick workout
- Weekends - longer sessions

**Desk work:**
- Stand up every hour for 5 minutes
- Walk during phone calls
- Stairs instead of elevator

The question is not "when to find time", but "how to prioritize".`,
        ua: `Нестача часу - головна відмовка. Ось рішення:

**Планування:**
- Тренування в календарі як важливі зустрічі
- Підготовка одягу з вечора
- Вибір залу по дорозі на роботу/додому

**Оптимізація:**
- 3 тренування по 45 хвилин краще 5 по годині
- Домашні тренування в щільні дні
- Об'єднуйте: подкасти під час кардіо

**Пріоритети:**
- Ранкові тренування - менше відмовок
- Обідня перерва - швидке тренування
- Вихідні - довгі тренування

**Робота сидячи:**
- Вставайте кожну годину на 5 хвилин
- Прогулянка під час дзвінків
- Сходи замість ліфта

Питання не "коли знайти час", а "як розставити пріоритети".`,
      },
      category: TipCategory.LIFESTYLE,
      tags: [
        { ru: 'баланс', en: 'balance', ua: 'баланс' },
        { ru: 'работа', en: 'work', ua: 'робота' },
        { ru: 'тайм-менеджмент', en: 'time management', ua: 'тайм-менеджмент' },
      ],
      authorName: {
        ru: 'Елена Николаева',
        en: 'Elena Nikolaeva',
        ua: 'Олена Ніколаєва',
      },
      readingTime: 4,
    },

    // MINDSET
    {
      title: {
        ru: 'Долгосрочное мышление',
        en: 'Long-term Mindset',
        ua: 'Довгострокове мислення',
      },
      summary: {
        ru: 'Как думать о фитнесе как о стиле жизни, а не диете',
        en: 'How to think about fitness as a lifestyle, not a diet',
        ua: 'Як думати про фітнес як про стиль життя, а не дієту',
      },
      content: {
        ru: `Фитнес - это марафон, а не спринт. Меняем мышление:

**От → К:**
- "Похудеть к лету" → "Быть здоровым всегда"
- "Сесть на диету" → "Изменить питание навсегда"
- "Позаниматься месяц" → "Сделать тренировки привычкой"

**Процесс важнее результата:**
- Наслаждайтесь тренировками
- Ищите любимые виды активности
- Экспериментируйте
- Не ждите быстрых результатов

**Ошибки и откаты - это норма:**
- Пропустили неделю? Вернитесь
- Переели? Продолжайте план
- Не прогрессируете? Измените подход

**Фокус на здоровье:**
- Энергия и самочувствие
- Качество сна
- Настроение
- Сила и выносливость

Через 5 лет вы не вспомните, как быстро достигли цели, но будете гордиться, что не бросили.`,
        en: `Fitness is a marathon, not a sprint. Change your mindset:

**From → To:**
- "Lose weight by summer" → "Be healthy always"
- "Go on a diet" → "Change eating forever"
- "Exercise for a month" → "Make training a habit"

**Process over outcome:**
- Enjoy the workouts
- Find activities you love
- Experiment
- Don't expect quick results

**Mistakes and setbacks are normal:**
- Missed a week? Come back
- Overate? Continue the plan
- Not progressing? Change approach

**Focus on health:**
- Energy and well-being
- Sleep quality
- Mood
- Strength and endurance

In 5 years you won't remember how fast you reached your goal, but you'll be proud you didn't quit.`,
        ua: `Фітнес - це марафон, а не спринт. Змінюємо мислення:

**Від → До:**
- "Схуднути до літа" → "Бути здоровим завжди"
- "Сісти на дієту" → "Змінити харчування назавжди"
- "Позайматися місяць" → "Зробити тренування звичкою"

**Процес важливіший за результат:**
- Насолоджуйтеся тренуваннями
- Шукайте улюблені види активності
- Експериментуйте
- Не чекайте швидких результатів

**Помилки та відкати - це норма:**
- Пропустили тиждень? Поверніться
- Переїли? Продовжуйте план
- Не прогресуєте? Змініть підхід

**Фокус на здоров'ї:**
- Енергія та самопочуття
- Якість сну
- Настрій
- Сила та витривалість

Через 5 років ви не згадаєте, як швидко досягли мети, але будете пишатися, що не кинули.`,
      },
      category: TipCategory.MINDSET,
      tags: [
        { ru: 'мышление', en: 'mindset', ua: 'мислення' },
        { ru: 'стиль жизни', en: 'lifestyle', ua: 'стиль життя' },
        { ru: 'философия', en: 'philosophy', ua: 'філософія' },
      ],
      authorName: {
        ru: 'Елена Николаева',
        en: 'Elena Nikolaeva',
        ua: 'Олена Ніколаєва',
      },
      readingTime: 3,
    },
  ];

  const createdTips = [];
  for (const tipData of tips) {
    const existing = await trainerTipRepository.findOne({
      where: { title: tipData.title },
    });

    if (!existing) {
      const tip = trainerTipRepository.create(tipData);
      const saved = await trainerTipRepository.save(tip);
      createdTips.push(saved);
    }
  }

  console.log(`✅ Создано ${createdTips.length} советов тренера`);
  return createdTips;
}
