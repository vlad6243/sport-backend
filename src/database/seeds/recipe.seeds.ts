import { Repository } from 'typeorm';
import {
  Recipe,
  RecipeCategory,
  DietType,
} from '../../library/entities/recipe.entity';

export async function seedRecipes(recipeRepository: Repository<Recipe>) {
  const recipes = [
    // BREAKFAST
    {
      name: {
        ru: 'Овсянка с бананом и орехами',
        en: 'Oatmeal with Banana and Nuts',
        uk: 'Вівсянка з бананом та горіхами',
      },
      description: {
        ru: 'Питательный завтрак для энергии на весь день',
        en: 'Nutritious breakfast for all-day energy',
        uk: 'Поживний сніданок для енергії на весь день',
      },
      category: RecipeCategory.BREAKFAST,
      dietTypes: [DietType.GENERAL, DietType.VEGETARIAN, DietType.BULKING],
      ingredients: [
        {
          name: {
            ru: 'Овсяные хлопья',
            en: 'Oat flakes',
            uk: 'Вівсяні пластівці',
          },
          amount: '80',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Банан', en: 'Banana', uk: 'Банан' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: { ru: 'Грецкие орехи', en: 'Walnuts', uk: 'Волоські горіхи' },
          amount: '30',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Мед', en: 'Honey', uk: 'Мед' },
          amount: '1',
          unit: { ru: 'ст.л.', en: 'tbsp', uk: 'ст.л.' },
        },
        {
          name: { ru: 'Молоко', en: 'Milk', uk: 'Молоко' },
          amount: '200',
          unit: { ru: 'мл', en: 'ml', uk: 'мл' },
        },
      ],
      instructions: [
        {
          ru: 'Залейте овсянку молоком и варите 5 минут',
          en: 'Pour milk over oatmeal and cook for 5 minutes',
          uk: 'Залийте вівсянку молоком і варіть 5 хвилин',
        },
        {
          ru: 'Нарежьте банан кружочками',
          en: 'Slice the banana into rounds',
          uk: 'Наріжте банан гуртками',
        },
        {
          ru: 'Измельчите орехи',
          en: 'Chop the nuts',
          uk: 'Подрібніть горіхи',
        },
        {
          ru: 'Выложите овсянку в тарелку',
          en: 'Place oatmeal in a bowl',
          uk: 'Викладіть вівсянку в тарілку',
        },
        {
          ru: 'Добавьте банан, орехи и мед',
          en: 'Add banana, nuts and honey',
          uk: 'Додайте банан, горіхи та мед',
        },
      ],
      preparationTime: 5,
      cookingTime: 5,
      servings: 1,
      calories: 450,
      protein: 15,
      carbs: 65,
      fat: 15,
      fiber: 8,
      difficulty: 1,
      tips: {
        ru: 'Можно приготовить с вечера и поставить в холодильник',
        en: 'Can be prepared in the evening and refrigerated',
        uk: 'Можна приготувати з вечора і поставити в холодильник',
      },
    },
    {
      name: {
        ru: 'Омлет с овощами',
        en: 'Vegetable Omelet',
        uk: 'Омлет з овочами',
      },
      description: {
        ru: 'Белковый завтрак для роста мышц',
        en: 'Protein breakfast for muscle growth',
        uk: "Білковий сніданок для росту м'язів",
      },
      category: RecipeCategory.BREAKFAST,
      dietTypes: [DietType.GENERAL, DietType.BULKING, DietType.CUTTING],
      ingredients: [
        {
          name: { ru: 'Яйца', en: 'Eggs', uk: 'Яйця' },
          amount: '3',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: { ru: 'Помидор', en: 'Tomato', uk: 'Помідор' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: {
            ru: 'Болгарский перец',
            en: 'Bell pepper',
            uk: 'Болгарський перець',
          },
          amount: '0.5',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: { ru: 'Шпинат', en: 'Spinach', uk: 'Шпинат' },
          amount: '50',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Сыр', en: 'Cheese', uk: 'Сир' },
          amount: '30',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Оливковое масло', en: 'Olive oil', uk: 'Оливкова олія' },
          amount: '1',
          unit: { ru: 'ст.л.', en: 'tbsp', uk: 'ст.л.' },
        },
      ],
      instructions: [
        {
          ru: 'Нарежьте овощи кубиками',
          en: 'Dice the vegetables',
          uk: 'Наріжте овочі кубиками',
        },
        {
          ru: 'Обжарьте овощи на масле 3 минуты',
          en: 'Sauté vegetables in oil for 3 minutes',
          uk: 'Обсмажте овочі на олії 3 хвилини',
        },
        {
          ru: 'Взбейте яйца с солью',
          en: 'Beat eggs with salt',
          uk: 'Збийте яйця з сіллю',
        },
        {
          ru: 'Вылейте яйца на овощи',
          en: 'Pour eggs over vegetables',
          uk: 'Вилийте яйця на овочі',
        },
        {
          ru: 'Готовьте на медленном огне 5 минут',
          en: 'Cook on low heat for 5 minutes',
          uk: 'Готуйте на повільному вогні 5 хвилин',
        },
        {
          ru: 'Посыпьте тертым сыром',
          en: 'Sprinkle with grated cheese',
          uk: 'Посипте тертим сиром',
        },
      ],
      preparationTime: 5,
      cookingTime: 8,
      servings: 1,
      calories: 380,
      protein: 28,
      carbs: 12,
      fat: 25,
      fiber: 3,
      difficulty: 2,
      tips: {
        ru: 'Для снижения калорий используйте только белки',
        en: 'Use only egg whites to reduce calories',
        uk: 'Для зниження калорій використовуйте тільки білки',
      },
    },

    // LUNCH
    {
      name: {
        ru: 'Куриная грудка с рисом и овощами',
        en: 'Chicken Breast with Rice and Vegetables',
        uk: 'Куряча грудка з рисом та овочами',
      },
      description: {
        ru: 'Классический обед для набора массы',
        en: 'Classic lunch for bulking',
        uk: 'Класичний обід для набору маси',
      },
      category: RecipeCategory.LUNCH,
      dietTypes: [DietType.GENERAL, DietType.BULKING, DietType.MAINTENANCE],
      ingredients: [
        {
          name: {
            ru: 'Куриная грудка',
            en: 'Chicken breast',
            uk: 'Куряча грудка',
          },
          amount: '200',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Бурый рис', en: 'Brown rice', uk: 'Бурий рис' },
          amount: '100',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Брокколи', en: 'Broccoli', uk: 'Брокколі' },
          amount: '150',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Морковь', en: 'Carrot', uk: 'Морква' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: { ru: 'Соевый соус', en: 'Soy sauce', uk: 'Соєвий соус' },
          amount: '2',
          unit: { ru: 'ст.л.', en: 'tbsp', uk: 'ст.л.' },
        },
        {
          name: { ru: 'Чеснок', en: 'Garlic', uk: 'Часник' },
          amount: '2',
          unit: { ru: 'зубчика', en: 'cloves', uk: 'зубчики' },
        },
      ],
      instructions: [
        {
          ru: 'Отварите рис по инструкции',
          en: 'Cook rice according to instructions',
          uk: 'Відваріть рис за інструкцією',
        },
        {
          ru: 'Нарежьте курицу кубиками',
          en: 'Cut chicken into cubes',
          uk: 'Наріжте курку кубиками',
        },
        {
          ru: 'Обжарьте курицу с чесноком',
          en: 'Sauté chicken with garlic',
          uk: 'Обсмажте курку з часником',
        },
        {
          ru: 'Отварите брокколи и морковь',
          en: 'Boil broccoli and carrot',
          uk: 'Відваріть брокколі та моркву',
        },
        {
          ru: 'Смешайте все ингредиенты',
          en: 'Mix all ingredients',
          uk: 'Змішайте всі інгредієнти',
        },
        {
          ru: 'Добавьте соевый соус',
          en: 'Add soy sauce',
          uk: 'Додайте соєвий соус',
        },
      ],
      preparationTime: 10,
      cookingTime: 25,
      servings: 2,
      calories: 520,
      protein: 48,
      carbs: 55,
      fat: 8,
      fiber: 6,
      difficulty: 2,
      tips: {
        ru: 'Можно заменить рис на киноа для большей пользы',
        en: 'Can substitute rice with quinoa for more benefits',
        uk: 'Можна замінити рис на кіноа для більшої користі',
      },
    },
    {
      name: {
        ru: 'Лосось с киноа и авокадо',
        en: 'Salmon with Quinoa and Avocado',
        uk: 'Лосось з кіноа та авокадо',
      },
      description: {
        ru: 'Богатый омега-3 обед',
        en: 'Omega-3 rich lunch',
        uk: 'Багатий омега-3 обід',
      },
      category: RecipeCategory.LUNCH,
      dietTypes: [DietType.GENERAL, DietType.CUTTING, DietType.MAINTENANCE],
      ingredients: [
        {
          name: { ru: 'Филе лосося', en: 'Salmon fillet', uk: 'Філе лосося' },
          amount: '180',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Киноа', en: 'Quinoa', uk: 'Кіноа' },
          amount: '80',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Авокадо', en: 'Avocado', uk: 'Авокадо' },
          amount: '0.5',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: { ru: 'Лимон', en: 'Lemon', uk: 'Лимон' },
          amount: '0.5',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: { ru: 'Шпинат', en: 'Spinach', uk: 'Шпинат' },
          amount: '100',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Оливковое масло', en: 'Olive oil', uk: 'Оливкова олія' },
          amount: '1',
          unit: { ru: 'ст.л.', en: 'tbsp', uk: 'ст.л.' },
        },
      ],
      instructions: [
        {
          ru: 'Отварите киноа 15 минут',
          en: 'Cook quinoa for 15 minutes',
          uk: 'Відваріть кіноа 15 хвилин',
        },
        {
          ru: 'Запеките лосось с лимоном 12 минут при 180°C',
          en: 'Bake salmon with lemon for 12 minutes at 180°C',
          uk: 'Запечіть лосось з лимоном 12 хвилин при 180°C',
        },
        {
          ru: 'Нарежьте авокадо',
          en: 'Slice the avocado',
          uk: 'Наріжте авокадо',
        },
        {
          ru: 'Выложите киноа, шпинат и авокадо',
          en: 'Arrange quinoa, spinach and avocado',
          uk: 'Викладіть кіноа, шпинат та авокадо',
        },
        {
          ru: 'Добавьте лосось',
          en: 'Add salmon',
          uk: 'Додайте лосось',
        },
        {
          ru: 'Полейте оливковым маслом',
          en: 'Drizzle with olive oil',
          uk: 'Полийте оливковою олією',
        },
      ],
      preparationTime: 10,
      cookingTime: 15,
      servings: 1,
      calories: 580,
      protein: 38,
      carbs: 42,
      fat: 28,
      fiber: 10,
      difficulty: 3,
      tips: {
        ru: 'Лосось можно заменить на любую жирную рыбу',
        en: 'Salmon can be replaced with any fatty fish',
        uk: 'Лосось можна замінити на будь-яку жирну рибу',
      },
    },

    // DINNER
    {
      name: {
        ru: 'Индейка с овощами на гриле',
        en: 'Grilled Turkey with Vegetables',
        uk: 'Індичка з овочами на грилі',
      },
      description: {
        ru: 'Легкий белковый ужин',
        en: 'Light protein dinner',
        uk: 'Легка білкова вечеря',
      },
      category: RecipeCategory.DINNER,
      dietTypes: [DietType.GENERAL, DietType.CUTTING, DietType.MAINTENANCE],
      ingredients: [
        {
          name: {
            ru: 'Грудка индейки',
            en: 'Turkey breast',
            uk: 'Грудка індички',
          },
          amount: '200',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Цукини', en: 'Zucchini', uk: 'Цукіні' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: { ru: 'Баклажан', en: 'Eggplant', uk: 'Баклажан' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: {
            ru: 'Болгарский перец',
            en: 'Bell pepper',
            uk: 'Болгарський перець',
          },
          amount: '2',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: { ru: 'Оливковое масло', en: 'Olive oil', uk: 'Оливкова олія' },
          amount: '2',
          unit: { ru: 'ст.л.', en: 'tbsp', uk: 'ст.л.' },
        },
        {
          name: { ru: 'Специи', en: 'Spices', uk: 'Спеції' },
          amount: 'по вкусу',
          unit: { ru: '', en: 'to taste', uk: 'за смаком' },
        },
      ],
      instructions: [
        {
          ru: 'Нарежьте индейку и овощи',
          en: 'Cut turkey and vegetables',
          uk: 'Наріжте індичку та овочі',
        },
        {
          ru: 'Замаринуйте в масле и специях 15 минут',
          en: 'Marinate in oil and spices for 15 minutes',
          uk: 'Замаринуйте в олії та спеціях 15 хвилин',
        },
        {
          ru: 'Разогрейте гриль',
          en: 'Preheat the grill',
          uk: 'Розігрійте гриль',
        },
        {
          ru: 'Жарьте индейку 6-7 минут с каждой стороны',
          en: 'Grill turkey for 6-7 minutes on each side',
          uk: 'Смажте індичку 6-7 хвилин з кожного боку',
        },
        {
          ru: 'Жарьте овощи 4-5 минут',
          en: 'Grill vegetables for 4-5 minutes',
          uk: 'Смажте овочі 4-5 хвилин',
        },
        {
          ru: 'Подавайте вместе',
          en: 'Serve together',
          uk: 'Подавайте разом',
        },
      ],
      preparationTime: 20,
      cookingTime: 15,
      servings: 2,
      calories: 320,
      protein: 42,
      carbs: 18,
      fat: 10,
      fiber: 6,
      difficulty: 2,
      tips: {
        ru: 'Овощи можно запечь в духовке если нет гриля',
        en: 'Vegetables can be baked in the oven if no grill available',
        uk: 'Овочі можна запекти в духовці якщо немає грилю',
      },
    },

    // SNACKS
    {
      name: {
        ru: 'Протеиновые панкейки',
        en: 'Protein Pancakes',
        uk: 'Протеїнові млинці',
      },
      description: {
        ru: 'Полезный перекус с высоким содержанием белка',
        en: 'Healthy snack with high protein content',
        uk: 'Корисний перекус з високим вмістом білка',
      },
      category: RecipeCategory.SNACK,
      dietTypes: [DietType.GENERAL, DietType.BULKING, DietType.MAINTENANCE],
      ingredients: [
        {
          name: {
            ru: 'Овсяные хлопья',
            en: 'Oat flakes',
            uk: 'Вівсяні пластівці',
          },
          amount: '50',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Яйца', en: 'Eggs', uk: 'Яйця' },
          amount: '2',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: { ru: 'Банан', en: 'Banana', uk: 'Банан' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: {
            ru: 'Протеин ванильный',
            en: 'Vanilla protein',
            uk: 'Протеїн ванільний',
          },
          amount: '30',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Разрыхлитель', en: 'Baking powder', uk: 'Розпушувач' },
          amount: '0.5',
          unit: { ru: 'ч.л.', en: 'tsp', uk: 'ч.л.' },
        },
      ],
      instructions: [
        {
          ru: 'Измельчите овсянку в блендере',
          en: 'Grind oats in a blender',
          uk: 'Подрібніть вівсянку в блендері',
        },
        {
          ru: 'Добавьте яйца, банан и протеин',
          en: 'Add eggs, banana and protein',
          uk: 'Додайте яйця, банан та протеїн',
        },
        {
          ru: 'Взбейте до однородности',
          en: 'Blend until smooth',
          uk: 'Збийте до однорідності',
        },
        {
          ru: 'Добавьте разрыхлитель',
          en: 'Add baking powder',
          uk: 'Додайте розпушувач',
        },
        {
          ru: 'Жарьте на антипригарной сковороде',
          en: 'Fry on a non-stick pan',
          uk: 'Смажте на антипригарній сковороді',
        },
        {
          ru: 'По 2-3 минуты с каждой стороны',
          en: '2-3 minutes on each side',
          uk: 'По 2-3 хвилини з кожного боку',
        },
      ],
      preparationTime: 5,
      cookingTime: 10,
      servings: 2,
      calories: 280,
      protein: 28,
      carbs: 32,
      fat: 6,
      fiber: 4,
      difficulty: 1,
      tips: {
        ru: 'Подавайте с ягодами и медом',
        en: 'Serve with berries and honey',
        uk: 'Подавайте з ягодами та медом',
      },
    },

    // PRE-WORKOUT
    {
      name: {
        ru: 'Энергетический смузи',
        en: 'Energy Smoothie',
        uk: 'Енергетичний смузі',
      },
      description: {
        ru: 'Быстрые углеводы перед тренировкой',
        en: 'Fast carbs before workout',
        uk: 'Швидкі вуглеводи перед тренуванням',
      },
      category: RecipeCategory.PRE_WORKOUT,
      dietTypes: [DietType.GENERAL, DietType.BULKING, DietType.MAINTENANCE],
      ingredients: [
        {
          name: { ru: 'Банан', en: 'Banana', uk: 'Банан' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: {
            ru: 'Овсяные хлопья',
            en: 'Oat flakes',
            uk: 'Вівсяні пластівці',
          },
          amount: '40',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: {
            ru: 'Миндальное масло',
            en: 'Almond butter',
            uk: 'Мигдальна олія',
          },
          amount: '1',
          unit: { ru: 'ст.л.', en: 'tbsp', uk: 'ст.л.' },
        },
        {
          name: { ru: 'Мед', en: 'Honey', uk: 'Мед' },
          amount: '1',
          unit: { ru: 'ст.л.', en: 'tbsp', uk: 'ст.л.' },
        },
        {
          name: { ru: 'Молоко', en: 'Milk', uk: 'Молоко' },
          amount: '250',
          unit: { ru: 'мл', en: 'ml', uk: 'мл' },
        },
        {
          name: { ru: 'Корица', en: 'Cinnamon', uk: 'Кориця' },
          amount: '0.5',
          unit: { ru: 'ч.л.', en: 'tsp', uk: 'ч.л.' },
        },
      ],
      instructions: [
        {
          ru: 'Поместите все ингредиенты в блендер',
          en: 'Place all ingredients in a blender',
          uk: 'Помістіть всі інгредієнти в блендер',
        },
        {
          ru: 'Взбивайте 30-40 секунд',
          en: 'Blend for 30-40 seconds',
          uk: 'Збивайте 30-40 секунд',
        },
        {
          ru: 'Перелейте в стакан',
          en: 'Pour into a glass',
          uk: 'Перелийте в склянку',
        },
        {
          ru: 'Пейте за 30-60 минут до тренировки',
          en: 'Drink 30-60 minutes before workout',
          uk: 'Пийте за 30-60 хвилин до тренування',
        },
      ],
      preparationTime: 3,
      cookingTime: 0,
      servings: 1,
      calories: 380,
      protein: 12,
      carbs: 62,
      fat: 12,
      fiber: 6,
      difficulty: 1,
      tips: {
        ru: 'Можно добавить кофе для дополнительной энергии',
        en: 'Can add coffee for extra energy',
        uk: 'Можна додати каву для додаткової енергії',
      },
    },

    // POST-WORKOUT
    {
      name: {
        ru: 'Протеиновый шейк с творогом',
        en: 'Protein Shake with Cottage Cheese',
        uk: 'Протеїновий шейк з сиром',
      },
      description: {
        ru: 'Быстрое восстановление после тренировки',
        en: 'Fast recovery after workout',
        uk: 'Швидке відновлення після тренування',
      },
      category: RecipeCategory.POST_WORKOUT,
      dietTypes: [DietType.GENERAL, DietType.BULKING, DietType.CUTTING],
      ingredients: [
        {
          name: { ru: 'Творог 5%', en: 'Cottage cheese 5%', uk: 'Сир 5%' },
          amount: '150',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Протеин', en: 'Protein', uk: 'Протеїн' },
          amount: '30',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Банан', en: 'Banana', uk: 'Банан' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: { ru: 'Молоко', en: 'Milk', uk: 'Молоко' },
          amount: '200',
          unit: { ru: 'мл', en: 'ml', uk: 'мл' },
        },
        {
          name: { ru: 'Ягоды', en: 'Berries', uk: 'Ягоди' },
          amount: '50',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
      ],
      instructions: [
        {
          ru: 'Смешайте все ингредиенты в блендере',
          en: 'Mix all ingredients in a blender',
          uk: 'Змішайте всі інгредієнти в блендері',
        },
        {
          ru: 'Взбивайте до однородности',
          en: 'Blend until smooth',
          uk: 'Збивайте до однорідності',
        },
        {
          ru: 'Выпейте в течение 30 минут после тренировки',
          en: 'Drink within 30 minutes after workout',
          uk: 'Випийте протягом 30 хвилин після тренування',
        },
      ],
      preparationTime: 2,
      cookingTime: 0,
      servings: 1,
      calories: 420,
      protein: 48,
      carbs: 42,
      fat: 8,
      fiber: 4,
      difficulty: 1,
      tips: {
        ru: 'Добавьте креатин для лучшего восстановления',
        en: 'Add creatine for better recovery',
        uk: 'Додайте креатин для кращого відновлення',
      },
    },

    // VEGAN OPTIONS
    {
      name: {
        ru: 'Чечевичная похлебка',
        en: 'Lentil Stew',
        uk: 'Сочевична юшка',
      },
      description: {
        ru: 'Богатый белком веганский обед',
        en: 'Protein-rich vegan lunch',
        uk: 'Багатий білком веганський обід',
      },
      category: RecipeCategory.LUNCH,
      dietTypes: [DietType.GENERAL, DietType.VEGAN, DietType.VEGETARIAN],
      ingredients: [
        {
          name: {
            ru: 'Красная чечевица',
            en: 'Red lentils',
            uk: 'Червона сочевиця',
          },
          amount: '200',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Помидоры', en: 'Tomatoes', uk: 'Помідори' },
          amount: '2',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: { ru: 'Лук', en: 'Onion', uk: 'Цибуля' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: { ru: 'Морковь', en: 'Carrot', uk: 'Морква' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: {
            ru: 'Кокосовое молоко',
            en: 'Coconut milk',
            uk: 'Кокосове молоко',
          },
          amount: '200',
          unit: { ru: 'мл', en: 'ml', uk: 'мл' },
        },
        {
          name: { ru: 'Карри', en: 'Curry', uk: 'Карі' },
          amount: '1',
          unit: { ru: 'ст.л.', en: 'tbsp', uk: 'ст.л.' },
        },
      ],
      instructions: [
        {
          ru: 'Обжарьте лук и морковь',
          en: 'Sauté onion and carrot',
          uk: 'Обсмажте цибулю та моркву',
        },
        {
          ru: 'Добавьте чечевицу и помидоры',
          en: 'Add lentils and tomatoes',
          uk: 'Додайте сочевицю та помідори',
        },
        {
          ru: 'Залейте водой, варите 20 минут',
          en: 'Cover with water, cook for 20 minutes',
          uk: 'Залийте водою, варіть 20 хвилин',
        },
        {
          ru: 'Добавьте кокосовое молоко и карри',
          en: 'Add coconut milk and curry',
          uk: 'Додайте кокосове молоко та карі',
        },
        {
          ru: 'Варите еще 5 минут',
          en: 'Cook for another 5 minutes',
          uk: 'Варіть ще 5 хвилин',
        },
      ],
      preparationTime: 10,
      cookingTime: 25,
      servings: 3,
      calories: 320,
      protein: 18,
      carbs: 48,
      fat: 8,
      fiber: 12,
      difficulty: 2,
      tips: {
        ru: 'Подавайте с цельнозерновым хлебом',
        en: 'Serve with whole grain bread',
        uk: 'Подавайте з цільнозерновим хлібом',
      },
    },

    // KETO
    {
      name: {
        ru: 'Стейк с брокколи и маслом',
        en: 'Steak with Broccoli and Butter',
        uk: 'Стейк з брокколі та маслом',
      },
      description: {
        ru: 'Кето-дружественный ужин',
        en: 'Keto-friendly dinner',
        uk: 'Кето-дружній вечеря',
      },
      category: RecipeCategory.DINNER,
      dietTypes: [DietType.GENERAL, DietType.KETO, DietType.CUTTING],
      ingredients: [
        {
          name: { ru: 'Говяжий стейк', en: 'Beef steak', uk: 'Яловичий стейк' },
          amount: '250',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Брокколи', en: 'Broccoli', uk: 'Брокколі' },
          amount: '200',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Сливочное масло', en: 'Butter', uk: 'Вершкове масло' },
          amount: '30',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Чеснок', en: 'Garlic', uk: 'Часник' },
          amount: '2',
          unit: { ru: 'зубчика', en: 'cloves', uk: 'зубчики' },
        },
        {
          name: { ru: 'Специи', en: 'Spices', uk: 'Спеції' },
          amount: 'по вкусу',
          unit: { ru: '', en: 'to taste', uk: 'за смаком' },
        },
      ],
      instructions: [
        {
          ru: 'Разогрейте сковороду до максимума',
          en: 'Heat pan to maximum',
          uk: 'Розігрійте сковороду до максимуму',
        },
        {
          ru: 'Обжарьте стейк 3-4 минуты с каждой стороны',
          en: 'Sear steak for 3-4 minutes on each side',
          uk: 'Обсмажте стейк 3-4 хвилини з кожного боку',
        },
        {
          ru: 'Дайте отдохнуть 5 минут',
          en: 'Let rest for 5 minutes',
          uk: 'Дайте відпочити 5 хвилин',
        },
        {
          ru: 'Отварите брокколи',
          en: 'Boil broccoli',
          uk: 'Відваріть брокколі',
        },
        {
          ru: 'Растопите масло с чесноком',
          en: 'Melt butter with garlic',
          uk: 'Розтопіть масло з часником',
        },
        {
          ru: 'Полейте брокколи маслом, подавайте со стейком',
          en: 'Drizzle broccoli with butter, serve with steak',
          uk: 'Полийте брокколі маслом, подавайте зі стейком',
        },
      ],
      preparationTime: 5,
      cookingTime: 15,
      servings: 1,
      calories: 580,
      protein: 52,
      carbs: 8,
      fat: 38,
      fiber: 4,
      difficulty: 3,
      tips: {
        ru: 'Используйте термометр для мяса для идеальной прожарки',
        en: 'Use a meat thermometer for perfect doneness',
        uk: "Використовуйте термометр для м'яса для ідеального прожарювання",
      },
    },

    // DESSERT
    {
      name: {
        ru: 'Протеиновый брауни',
        en: 'Protein Brownies',
        uk: 'Протеїновий брауні',
      },
      description: {
        ru: 'Полезный десерт без сахара',
        en: 'Healthy sugar-free dessert',
        uk: 'Корисний десерт без цукру',
      },
      category: RecipeCategory.SNACK,
      dietTypes: [DietType.GENERAL, DietType.BULKING, DietType.MAINTENANCE],
      ingredients: [
        {
          name: {
            ru: 'Черный шоколад',
            en: 'Dark chocolate',
            uk: 'Чорний шоколад',
          },
          amount: '100',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: {
            ru: 'Протеин шоколадный',
            en: 'Chocolate protein',
            uk: 'Протеїн шоколадний',
          },
          amount: '50',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Яйца', en: 'Eggs', uk: 'Яйця' },
          amount: '2',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: {
            ru: 'Миндальная мука',
            en: 'Almond flour',
            uk: 'Мигдальне борошно',
          },
          amount: '80',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Стевия', en: 'Stevia', uk: 'Стевія' },
          amount: '2',
          unit: { ru: 'ч.л.', en: 'tsp', uk: 'ч.л.' },
        },
      ],
      instructions: [
        {
          ru: 'Растопите шоколад на водяной бане',
          en: 'Melt chocolate in a double boiler',
          uk: 'Розтопіть шоколад на водяній бані',
        },
        {
          ru: 'Смешайте все сухие ингредиенты',
          en: 'Mix all dry ingredients',
          uk: 'Змішайте всі сухі інгредієнти',
        },
        {
          ru: 'Добавьте яйца и шоколад',
          en: 'Add eggs and chocolate',
          uk: 'Додайте яйця та шоколад',
        },
        {
          ru: 'Вылейте в форму',
          en: 'Pour into a baking pan',
          uk: 'Вилийте у форму',
        },
        {
          ru: 'Выпекайте 20 минут при 180°C',
          en: 'Bake for 20 minutes at 180°C',
          uk: 'Випікайте 20 хвилин при 180°C',
        },
      ],
      preparationTime: 10,
      cookingTime: 20,
      servings: 6,
      calories: 220,
      protein: 12,
      carbs: 18,
      fat: 14,
      fiber: 3,
      difficulty: 2,
      tips: {
        ru: 'Не передержите в духовке, чтобы брауни остались влажными',
        en: "Don't overbake to keep brownies moist",
        uk: 'Не передержуйте в духовці, щоб брауні залишились вологими',
      },
    },

    // SALAD
    {
      name: {
        ru: 'Греческий салат с курицей',
        en: 'Greek Salad with Chicken',
        uk: 'Грецький салат з куркою',
      },
      description: {
        ru: 'Свежий и сытный салат',
        en: 'Fresh and filling salad',
        uk: 'Свіжий та ситний салат',
      },
      category: RecipeCategory.LUNCH,
      dietTypes: [DietType.GENERAL, DietType.CUTTING, DietType.MAINTENANCE],
      ingredients: [
        {
          name: {
            ru: 'Куриная грудка',
            en: 'Chicken breast',
            uk: 'Куряча грудка',
          },
          amount: '150',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Помидоры', en: 'Tomatoes', uk: 'Помідори' },
          amount: '2',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: { ru: 'Огурцы', en: 'Cucumbers', uk: 'Огірки' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', uk: 'шт' },
        },
        {
          name: { ru: 'Фета', en: 'Feta cheese', uk: 'Фета' },
          amount: '50',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Оливки', en: 'Olives', uk: 'Оливки' },
          amount: '30',
          unit: { ru: 'г', en: 'g', uk: 'г' },
        },
        {
          name: { ru: 'Оливковое масло', en: 'Olive oil', uk: 'Оливкова олія' },
          amount: '2',
          unit: { ru: 'ст.л.', en: 'tbsp', uk: 'ст.л.' },
        },
      ],
      instructions: [
        {
          ru: 'Отварите или запеките курицу',
          en: 'Boil or bake chicken',
          uk: 'Відваріть або запечіть курку',
        },
        {
          ru: 'Нарежьте овощи кубиками',
          en: 'Dice vegetables',
          uk: 'Наріжте овочі кубиками',
        },
        {
          ru: 'Нарежьте курицу',
          en: 'Slice chicken',
          uk: 'Наріжте курку',
        },
        {
          ru: 'Смешайте все ингредиенты',
          en: 'Mix all ingredients',
          uk: 'Змішайте всі інгредієнти',
        },
        {
          ru: 'Добавьте фету и оливки',
          en: 'Add feta and olives',
          uk: 'Додайте фету та оливки',
        },
        {
          ru: 'Полейте оливковым маслом',
          en: 'Drizzle with olive oil',
          uk: 'Полийте оливковою олією',
        },
      ],
      preparationTime: 10,
      cookingTime: 15,
      servings: 2,
      calories: 340,
      protein: 32,
      carbs: 14,
      fat: 18,
      fiber: 4,
      difficulty: 1,
      tips: {
        ru: 'Можно добавить лимонный сок для кислинки',
        en: 'Can add lemon juice for tanginess',
        uk: 'Можна додати лимонний сік для кислинки',
      },
    },
  ];

  const createdRecipes = [];
  for (const recipeData of recipes) {
    const existing = await recipeRepository.findOne({
      where: { name: recipeData.name },
    });

    if (!existing) {
      const recipe = recipeRepository.create(recipeData);
      const saved = await recipeRepository.save(recipe);
      createdRecipes.push(saved);
    }
  }

  console.log(`✅ Создано ${createdRecipes.length} рецептов`);
  return createdRecipes;
}
