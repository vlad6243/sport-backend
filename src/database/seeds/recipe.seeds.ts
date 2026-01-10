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
        ua: 'Вівсянка з бананом та горіхами',
      },
      description: {
        ru: 'Питательный завтрак для энергии на весь день',
        en: 'Nutritious breakfast for all-day energy',
        ua: 'Поживний сніданок для енергії на весь день',
      },
      category: RecipeCategory.BREAKFAST,
      dietTypes: [DietType.GENERAL, DietType.VEGETARIAN, DietType.BULKING],
      ingredients: [
        {
          name: {
            ru: 'Овсяные хлопья',
            en: 'Oat flakes',
            ua: 'Вівсяні пластівці',
          },
          amount: '80',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Банан', en: 'Banana', ua: 'Банан' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: { ru: 'Грецкие орехи', en: 'Walnuts', ua: 'Волоські горіхи' },
          amount: '30',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Мед', en: 'Honey', ua: 'Мед' },
          amount: '1',
          unit: { ru: 'ст.л.', en: 'tbsp', ua: 'ст.л.' },
        },
        {
          name: { ru: 'Молоко', en: 'Milk', ua: 'Молоко' },
          amount: '200',
          unit: { ru: 'мл', en: 'ml', ua: 'мл' },
        },
      ],
      instructions: [
        {
          ru: 'Залейте овсянку молоком и варите 5 минут',
          en: 'Pour milk over oatmeal and cook for 5 minutes',
          ua: 'Залийте вівсянку молоком і варіть 5 хвилин',
        },
        {
          ru: 'Нарежьте банан кружочками',
          en: 'Slice the banana into rounds',
          ua: 'Наріжте банан гуртками',
        },
        {
          ru: 'Измельчите орехи',
          en: 'Chop the nuts',
          ua: 'Подрібніть горіхи',
        },
        {
          ru: 'Выложите овсянку в тарелку',
          en: 'Place oatmeal in a bowl',
          ua: 'Викладіть вівсянку в тарілку',
        },
        {
          ru: 'Добавьте банан, орехи и мед',
          en: 'Add banana, nuts and honey',
          ua: 'Додайте банан, горіхи та мед',
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
        ua: 'Можна приготувати з вечора і поставити в холодильник',
      },
    },
    {
      name: {
        ru: 'Омлет с овощами',
        en: 'Vegetable Omelet',
        ua: 'Омлет з овочами',
      },
      description: {
        ru: 'Белковый завтрак для роста мышц',
        en: 'Protein breakfast for muscle growth',
        ua: "Білковий сніданок для росту м'язів",
      },
      category: RecipeCategory.BREAKFAST,
      dietTypes: [DietType.GENERAL, DietType.BULKING, DietType.CUTTING],
      ingredients: [
        {
          name: { ru: 'Яйца', en: 'Eggs', ua: 'Яйця' },
          amount: '3',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: { ru: 'Помидор', en: 'Tomato', ua: 'Помідор' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: {
            ru: 'Болгарский перец',
            en: 'Bell pepper',
            ua: 'Болгарський перець',
          },
          amount: '0.5',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: { ru: 'Шпинат', en: 'Spinach', ua: 'Шпинат' },
          amount: '50',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Сыр', en: 'Cheese', ua: 'Сир' },
          amount: '30',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Оливковое масло', en: 'Olive oil', ua: 'Оливкова олія' },
          amount: '1',
          unit: { ru: 'ст.л.', en: 'tbsp', ua: 'ст.л.' },
        },
      ],
      instructions: [
        {
          ru: 'Нарежьте овощи кубиками',
          en: 'Dice the vegetables',
          ua: 'Наріжте овочі кубиками',
        },
        {
          ru: 'Обжарьте овощи на масле 3 минуты',
          en: 'Sauté vegetables in oil for 3 minutes',
          ua: 'Обсмажте овочі на олії 3 хвилини',
        },
        {
          ru: 'Взбейте яйца с солью',
          en: 'Beat eggs with salt',
          ua: 'Збийте яйця з сіллю',
        },
        {
          ru: 'Вылейте яйца на овощи',
          en: 'Pour eggs over vegetables',
          ua: 'Вилийте яйця на овочі',
        },
        {
          ru: 'Готовьте на медленном огне 5 минут',
          en: 'Cook on low heat for 5 minutes',
          ua: 'Готуйте на повільному вогні 5 хвилин',
        },
        {
          ru: 'Посыпьте тертым сыром',
          en: 'Sprinkle with grated cheese',
          ua: 'Посипте тертим сиром',
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
        ua: 'Для зниження калорій використовуйте тільки білки',
      },
    },

    // LUNCH
    {
      name: {
        ru: 'Куриная грудка с рисом и овощами',
        en: 'Chicken Breast with Rice and Vegetables',
        ua: 'Куряча грудка з рисом та овочами',
      },
      description: {
        ru: 'Классический обед для набора массы',
        en: 'Classic lunch for bulking',
        ua: 'Класичний обід для набору маси',
      },
      category: RecipeCategory.LUNCH,
      dietTypes: [DietType.GENERAL, DietType.BULKING, DietType.MAINTENANCE],
      ingredients: [
        {
          name: {
            ru: 'Куриная грудка',
            en: 'Chicken breast',
            ua: 'Куряча грудка',
          },
          amount: '200',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Бурый рис', en: 'Brown rice', ua: 'Бурий рис' },
          amount: '100',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Брокколи', en: 'Broccoli', ua: 'Брокколі' },
          amount: '150',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Морковь', en: 'Carrot', ua: 'Морква' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: { ru: 'Соевый соус', en: 'Soy sauce', ua: 'Соєвий соус' },
          amount: '2',
          unit: { ru: 'ст.л.', en: 'tbsp', ua: 'ст.л.' },
        },
        {
          name: { ru: 'Чеснок', en: 'Garlic', ua: 'Часник' },
          amount: '2',
          unit: { ru: 'зубчика', en: 'cloves', ua: 'зубчики' },
        },
      ],
      instructions: [
        {
          ru: 'Отварите рис по инструкции',
          en: 'Cook rice according to instructions',
          ua: 'Відваріть рис за інструкцією',
        },
        {
          ru: 'Нарежьте курицу кубиками',
          en: 'Cut chicken into cubes',
          ua: 'Наріжте курку кубиками',
        },
        {
          ru: 'Обжарьте курицу с чесноком',
          en: 'Sauté chicken with garlic',
          ua: 'Обсмажте курку з часником',
        },
        {
          ru: 'Отварите брокколи и морковь',
          en: 'Boil broccoli and carrot',
          ua: 'Відваріть брокколі та моркву',
        },
        {
          ru: 'Смешайте все ингредиенты',
          en: 'Mix all ingredients',
          ua: 'Змішайте всі інгредієнти',
        },
        {
          ru: 'Добавьте соевый соус',
          en: 'Add soy sauce',
          ua: 'Додайте соєвий соус',
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
        ua: 'Можна замінити рис на кіноа для більшої користі',
      },
    },
    {
      name: {
        ru: 'Лосось с киноа и авокадо',
        en: 'Salmon with Quinoa and Avocado',
        ua: 'Лосось з кіноа та авокадо',
      },
      description: {
        ru: 'Богатый омега-3 обед',
        en: 'Omega-3 rich lunch',
        ua: 'Багатий омега-3 обід',
      },
      category: RecipeCategory.LUNCH,
      dietTypes: [DietType.GENERAL, DietType.CUTTING, DietType.MAINTENANCE],
      ingredients: [
        {
          name: { ru: 'Филе лосося', en: 'Salmon fillet', ua: 'Філе лосося' },
          amount: '180',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Киноа', en: 'Quinoa', ua: 'Кіноа' },
          amount: '80',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Авокадо', en: 'Avocado', ua: 'Авокадо' },
          amount: '0.5',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: { ru: 'Лимон', en: 'Lemon', ua: 'Лимон' },
          amount: '0.5',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: { ru: 'Шпинат', en: 'Spinach', ua: 'Шпинат' },
          amount: '100',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Оливковое масло', en: 'Olive oil', ua: 'Оливкова олія' },
          amount: '1',
          unit: { ru: 'ст.л.', en: 'tbsp', ua: 'ст.л.' },
        },
      ],
      instructions: [
        {
          ru: 'Отварите киноа 15 минут',
          en: 'Cook quinoa for 15 minutes',
          ua: 'Відваріть кіноа 15 хвилин',
        },
        {
          ru: 'Запеките лосось с лимоном 12 минут при 180°C',
          en: 'Bake salmon with lemon for 12 minutes at 180°C',
          ua: 'Запечіть лосось з лимоном 12 хвилин при 180°C',
        },
        {
          ru: 'Нарежьте авокадо',
          en: 'Slice the avocado',
          ua: 'Наріжте авокадо',
        },
        {
          ru: 'Выложите киноа, шпинат и авокадо',
          en: 'Arrange quinoa, spinach and avocado',
          ua: 'Викладіть кіноа, шпинат та авокадо',
        },
        {
          ru: 'Добавьте лосось',
          en: 'Add salmon',
          ua: 'Додайте лосось',
        },
        {
          ru: 'Полейте оливковым маслом',
          en: 'Drizzle with olive oil',
          ua: 'Полийте оливковою олією',
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
        ua: 'Лосось можна замінити на будь-яку жирну рибу',
      },
    },

    // DINNER
    {
      name: {
        ru: 'Индейка с овощами на гриле',
        en: 'Grilled Turkey with Vegetables',
        ua: 'Індичка з овочами на грилі',
      },
      description: {
        ru: 'Легкий белковый ужин',
        en: 'Light protein dinner',
        ua: 'Легка білкова вечеря',
      },
      category: RecipeCategory.DINNER,
      dietTypes: [DietType.GENERAL, DietType.CUTTING, DietType.MAINTENANCE],
      ingredients: [
        {
          name: {
            ru: 'Грудка индейки',
            en: 'Turkey breast',
            ua: 'Грудка індички',
          },
          amount: '200',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Цукини', en: 'Zucchini', ua: 'Цукіні' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: { ru: 'Баклажан', en: 'Eggplant', ua: 'Баклажан' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: {
            ru: 'Болгарский перец',
            en: 'Bell pepper',
            ua: 'Болгарський перець',
          },
          amount: '2',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: { ru: 'Оливковое масло', en: 'Olive oil', ua: 'Оливкова олія' },
          amount: '2',
          unit: { ru: 'ст.л.', en: 'tbsp', ua: 'ст.л.' },
        },
        {
          name: { ru: 'Специи', en: 'Spices', ua: 'Спеції' },
          amount: 'по вкусу',
          unit: { ru: '', en: 'to taste', ua: 'за смаком' },
        },
      ],
      instructions: [
        {
          ru: 'Нарежьте индейку и овощи',
          en: 'Cut turkey and vegetables',
          ua: 'Наріжте індичку та овочі',
        },
        {
          ru: 'Замаринуйте в масле и специях 15 минут',
          en: 'Marinate in oil and spices for 15 minutes',
          ua: 'Замаринуйте в олії та спеціях 15 хвилин',
        },
        {
          ru: 'Разогрейте гриль',
          en: 'Preheat the grill',
          ua: 'Розігрійте гриль',
        },
        {
          ru: 'Жарьте индейку 6-7 минут с каждой стороны',
          en: 'Grill turkey for 6-7 minutes on each side',
          ua: 'Смажте індичку 6-7 хвилин з кожного боку',
        },
        {
          ru: 'Жарьте овощи 4-5 минут',
          en: 'Grill vegetables for 4-5 minutes',
          ua: 'Смажте овочі 4-5 хвилин',
        },
        {
          ru: 'Подавайте вместе',
          en: 'Serve together',
          ua: 'Подавайте разом',
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
        ua: 'Овочі можна запекти в духовці якщо немає грилю',
      },
    },

    // SNACKS
    {
      name: {
        ru: 'Протеиновые панкейки',
        en: 'Protein Pancakes',
        ua: 'Протеїнові млинці',
      },
      description: {
        ru: 'Полезный перекус с высоким содержанием белка',
        en: 'Healthy snack with high protein content',
        ua: 'Корисний перекус з високим вмістом білка',
      },
      category: RecipeCategory.SNACK,
      dietTypes: [DietType.GENERAL, DietType.BULKING, DietType.MAINTENANCE],
      ingredients: [
        {
          name: {
            ru: 'Овсяные хлопья',
            en: 'Oat flakes',
            ua: 'Вівсяні пластівці',
          },
          amount: '50',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Яйца', en: 'Eggs', ua: 'Яйця' },
          amount: '2',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: { ru: 'Банан', en: 'Banana', ua: 'Банан' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: {
            ru: 'Протеин ванильный',
            en: 'Vanilla protein',
            ua: 'Протеїн ванільний',
          },
          amount: '30',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Разрыхлитель', en: 'Baking powder', ua: 'Розпушувач' },
          amount: '0.5',
          unit: { ru: 'ч.л.', en: 'tsp', ua: 'ч.л.' },
        },
      ],
      instructions: [
        {
          ru: 'Измельчите овсянку в блендере',
          en: 'Grind oats in a blender',
          ua: 'Подрібніть вівсянку в блендері',
        },
        {
          ru: 'Добавьте яйца, банан и протеин',
          en: 'Add eggs, banana and protein',
          ua: 'Додайте яйця, банан та протеїн',
        },
        {
          ru: 'Взбейте до однородности',
          en: 'Blend until smooth',
          ua: 'Збийте до однорідності',
        },
        {
          ru: 'Добавьте разрыхлитель',
          en: 'Add baking powder',
          ua: 'Додайте розпушувач',
        },
        {
          ru: 'Жарьте на антипригарной сковороде',
          en: 'Fry on a non-stick pan',
          ua: 'Смажте на антипригарній сковороді',
        },
        {
          ru: 'По 2-3 минуты с каждой стороны',
          en: '2-3 minutes on each side',
          ua: 'По 2-3 хвилини з кожного боку',
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
        ua: 'Подавайте з ягодами та медом',
      },
    },

    // PRE-WORKOUT
    {
      name: {
        ru: 'Энергетический смузи',
        en: 'Energy Smoothie',
        ua: 'Енергетичний смузі',
      },
      description: {
        ru: 'Быстрые углеводы перед тренировкой',
        en: 'Fast carbs before workout',
        ua: 'Швидкі вуглеводи перед тренуванням',
      },
      category: RecipeCategory.PRE_WORKOUT,
      dietTypes: [DietType.GENERAL, DietType.BULKING, DietType.MAINTENANCE],
      ingredients: [
        {
          name: { ru: 'Банан', en: 'Banana', ua: 'Банан' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: {
            ru: 'Овсяные хлопья',
            en: 'Oat flakes',
            ua: 'Вівсяні пластівці',
          },
          amount: '40',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: {
            ru: 'Миндальное масло',
            en: 'Almond butter',
            ua: 'Мигдальна олія',
          },
          amount: '1',
          unit: { ru: 'ст.л.', en: 'tbsp', ua: 'ст.л.' },
        },
        {
          name: { ru: 'Мед', en: 'Honey', ua: 'Мед' },
          amount: '1',
          unit: { ru: 'ст.л.', en: 'tbsp', ua: 'ст.л.' },
        },
        {
          name: { ru: 'Молоко', en: 'Milk', ua: 'Молоко' },
          amount: '250',
          unit: { ru: 'мл', en: 'ml', ua: 'мл' },
        },
        {
          name: { ru: 'Корица', en: 'Cinnamon', ua: 'Кориця' },
          amount: '0.5',
          unit: { ru: 'ч.л.', en: 'tsp', ua: 'ч.л.' },
        },
      ],
      instructions: [
        {
          ru: 'Поместите все ингредиенты в блендер',
          en: 'Place all ingredients in a blender',
          ua: 'Помістіть всі інгредієнти в блендер',
        },
        {
          ru: 'Взбивайте 30-40 секунд',
          en: 'Blend for 30-40 seconds',
          ua: 'Збивайте 30-40 секунд',
        },
        {
          ru: 'Перелейте в стакан',
          en: 'Pour into a glass',
          ua: 'Перелийте в склянку',
        },
        {
          ru: 'Пейте за 30-60 минут до тренировки',
          en: 'Drink 30-60 minutes before workout',
          ua: 'Пийте за 30-60 хвилин до тренування',
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
        ua: 'Можна додати каву для додаткової енергії',
      },
    },

    // POST-WORKOUT
    {
      name: {
        ru: 'Протеиновый шейк с творогом',
        en: 'Protein Shake with Cottage Cheese',
        ua: 'Протеїновий шейк з сиром',
      },
      description: {
        ru: 'Быстрое восстановление после тренировки',
        en: 'Fast recovery after workout',
        ua: 'Швидке відновлення після тренування',
      },
      category: RecipeCategory.POST_WORKOUT,
      dietTypes: [DietType.GENERAL, DietType.BULKING, DietType.CUTTING],
      ingredients: [
        {
          name: { ru: 'Творог 5%', en: 'Cottage cheese 5%', ua: 'Сир 5%' },
          amount: '150',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Протеин', en: 'Protein', ua: 'Протеїн' },
          amount: '30',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Банан', en: 'Banana', ua: 'Банан' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: { ru: 'Молоко', en: 'Milk', ua: 'Молоко' },
          amount: '200',
          unit: { ru: 'мл', en: 'ml', ua: 'мл' },
        },
        {
          name: { ru: 'Ягоды', en: 'Berries', ua: 'Ягоди' },
          amount: '50',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
      ],
      instructions: [
        {
          ru: 'Смешайте все ингредиенты в блендере',
          en: 'Mix all ingredients in a blender',
          ua: 'Змішайте всі інгредієнти в блендері',
        },
        {
          ru: 'Взбивайте до однородности',
          en: 'Blend until smooth',
          ua: 'Збивайте до однорідності',
        },
        {
          ru: 'Выпейте в течение 30 минут после тренировки',
          en: 'Drink within 30 minutes after workout',
          ua: 'Випийте протягом 30 хвилин після тренування',
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
        ua: 'Додайте креатин для кращого відновлення',
      },
    },

    // VEGAN OPTIONS
    {
      name: {
        ru: 'Чечевичная похлебка',
        en: 'Lentil Stew',
        ua: 'Сочевична юшка',
      },
      description: {
        ru: 'Богатый белком веганский обед',
        en: 'Protein-rich vegan lunch',
        ua: 'Багатий білком веганський обід',
      },
      category: RecipeCategory.LUNCH,
      dietTypes: [DietType.GENERAL, DietType.VEGAN, DietType.VEGETARIAN],
      ingredients: [
        {
          name: {
            ru: 'Красная чечевица',
            en: 'Red lentils',
            ua: 'Червона сочевиця',
          },
          amount: '200',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Помидоры', en: 'Tomatoes', ua: 'Помідори' },
          amount: '2',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: { ru: 'Лук', en: 'Onion', ua: 'Цибуля' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: { ru: 'Морковь', en: 'Carrot', ua: 'Морква' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: {
            ru: 'Кокосовое молоко',
            en: 'Coconut milk',
            ua: 'Кокосове молоко',
          },
          amount: '200',
          unit: { ru: 'мл', en: 'ml', ua: 'мл' },
        },
        {
          name: { ru: 'Карри', en: 'Curry', ua: 'Карі' },
          amount: '1',
          unit: { ru: 'ст.л.', en: 'tbsp', ua: 'ст.л.' },
        },
      ],
      instructions: [
        {
          ru: 'Обжарьте лук и морковь',
          en: 'Sauté onion and carrot',
          ua: 'Обсмажте цибулю та моркву',
        },
        {
          ru: 'Добавьте чечевицу и помидоры',
          en: 'Add lentils and tomatoes',
          ua: 'Додайте сочевицю та помідори',
        },
        {
          ru: 'Залейте водой, варите 20 минут',
          en: 'Cover with water, cook for 20 minutes',
          ua: 'Залийте водою, варіть 20 хвилин',
        },
        {
          ru: 'Добавьте кокосовое молоко и карри',
          en: 'Add coconut milk and curry',
          ua: 'Додайте кокосове молоко та карі',
        },
        {
          ru: 'Варите еще 5 минут',
          en: 'Cook for another 5 minutes',
          ua: 'Варіть ще 5 хвилин',
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
        ua: 'Подавайте з цільнозерновим хлібом',
      },
    },

    // KETO
    {
      name: {
        ru: 'Стейк с брокколи и маслом',
        en: 'Steak with Broccoli and Butter',
        ua: 'Стейк з брокколі та маслом',
      },
      description: {
        ru: 'Кето-дружественный ужин',
        en: 'Keto-friendly dinner',
        ua: 'Кето-дружній вечеря',
      },
      category: RecipeCategory.DINNER,
      dietTypes: [DietType.GENERAL, DietType.KETO, DietType.CUTTING],
      ingredients: [
        {
          name: { ru: 'Говяжий стейк', en: 'Beef steak', ua: 'Яловичий стейк' },
          amount: '250',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Брокколи', en: 'Broccoli', ua: 'Брокколі' },
          amount: '200',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Сливочное масло', en: 'Butter', ua: 'Вершкове масло' },
          amount: '30',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Чеснок', en: 'Garlic', ua: 'Часник' },
          amount: '2',
          unit: { ru: 'зубчика', en: 'cloves', ua: 'зубчики' },
        },
        {
          name: { ru: 'Специи', en: 'Spices', ua: 'Спеції' },
          amount: 'по вкусу',
          unit: { ru: '', en: 'to taste', ua: 'за смаком' },
        },
      ],
      instructions: [
        {
          ru: 'Разогрейте сковороду до максимума',
          en: 'Heat pan to maximum',
          ua: 'Розігрійте сковороду до максимуму',
        },
        {
          ru: 'Обжарьте стейк 3-4 минуты с каждой стороны',
          en: 'Sear steak for 3-4 minutes on each side',
          ua: 'Обсмажте стейк 3-4 хвилини з кожного боку',
        },
        {
          ru: 'Дайте отдохнуть 5 минут',
          en: 'Let rest for 5 minutes',
          ua: 'Дайте відпочити 5 хвилин',
        },
        {
          ru: 'Отварите брокколи',
          en: 'Boil broccoli',
          ua: 'Відваріть брокколі',
        },
        {
          ru: 'Растопите масло с чесноком',
          en: 'Melt butter with garlic',
          ua: 'Розтопіть масло з часником',
        },
        {
          ru: 'Полейте брокколи маслом, подавайте со стейком',
          en: 'Drizzle broccoli with butter, serve with steak',
          ua: 'Полийте брокколі маслом, подавайте зі стейком',
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
        ua: "Використовуйте термометр для м'яса для ідеального прожарювання",
      },
    },

    // DESSERT
    {
      name: {
        ru: 'Протеиновый брауни',
        en: 'Protein Brownies',
        ua: 'Протеїновий брауні',
      },
      description: {
        ru: 'Полезный десерт без сахара',
        en: 'Healthy sugar-free dessert',
        ua: 'Корисний десерт без цукру',
      },
      category: RecipeCategory.SNACK,
      dietTypes: [DietType.GENERAL, DietType.BULKING, DietType.MAINTENANCE],
      ingredients: [
        {
          name: {
            ru: 'Черный шоколад',
            en: 'Dark chocolate',
            ua: 'Чорний шоколад',
          },
          amount: '100',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: {
            ru: 'Протеин шоколадный',
            en: 'Chocolate protein',
            ua: 'Протеїн шоколадний',
          },
          amount: '50',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Яйца', en: 'Eggs', ua: 'Яйця' },
          amount: '2',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: {
            ru: 'Миндальная мука',
            en: 'Almond flour',
            ua: 'Мигдальне борошно',
          },
          amount: '80',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Стевия', en: 'Stevia', ua: 'Стевія' },
          amount: '2',
          unit: { ru: 'ч.л.', en: 'tsp', ua: 'ч.л.' },
        },
      ],
      instructions: [
        {
          ru: 'Растопите шоколад на водяной бане',
          en: 'Melt chocolate in a double boiler',
          ua: 'Розтопіть шоколад на водяній бані',
        },
        {
          ru: 'Смешайте все сухие ингредиенты',
          en: 'Mix all dry ingredients',
          ua: 'Змішайте всі сухі інгредієнти',
        },
        {
          ru: 'Добавьте яйца и шоколад',
          en: 'Add eggs and chocolate',
          ua: 'Додайте яйця та шоколад',
        },
        {
          ru: 'Вылейте в форму',
          en: 'Pour into a baking pan',
          ua: 'Вилийте у форму',
        },
        {
          ru: 'Выпекайте 20 минут при 180°C',
          en: 'Bake for 20 minutes at 180°C',
          ua: 'Випікайте 20 хвилин при 180°C',
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
        ua: 'Не передержуйте в духовці, щоб брауні залишились вологими',
      },
    },

    // SALAD
    {
      name: {
        ru: 'Греческий салат с курицей',
        en: 'Greek Salad with Chicken',
        ua: 'Грецький салат з куркою',
      },
      description: {
        ru: 'Свежий и сытный салат',
        en: 'Fresh and filling salad',
        ua: 'Свіжий та ситний салат',
      },
      category: RecipeCategory.LUNCH,
      dietTypes: [DietType.GENERAL, DietType.CUTTING, DietType.MAINTENANCE],
      ingredients: [
        {
          name: {
            ru: 'Куриная грудка',
            en: 'Chicken breast',
            ua: 'Куряча грудка',
          },
          amount: '150',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Помидоры', en: 'Tomatoes', ua: 'Помідори' },
          amount: '2',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: { ru: 'Огурцы', en: 'Cucumbers', ua: 'Огірки' },
          amount: '1',
          unit: { ru: 'шт', en: 'pc', ua: 'шт' },
        },
        {
          name: { ru: 'Фета', en: 'Feta cheese', ua: 'Фета' },
          amount: '50',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Оливки', en: 'Olives', ua: 'Оливки' },
          amount: '30',
          unit: { ru: 'г', en: 'g', ua: 'г' },
        },
        {
          name: { ru: 'Оливковое масло', en: 'Olive oil', ua: 'Оливкова олія' },
          amount: '2',
          unit: { ru: 'ст.л.', en: 'tbsp', ua: 'ст.л.' },
        },
      ],
      instructions: [
        {
          ru: 'Отварите или запеките курицу',
          en: 'Boil or bake chicken',
          ua: 'Відваріть або запечіть курку',
        },
        {
          ru: 'Нарежьте овощи кубиками',
          en: 'Dice vegetables',
          ua: 'Наріжте овочі кубиками',
        },
        {
          ru: 'Нарежьте курицу',
          en: 'Slice chicken',
          ua: 'Наріжте курку',
        },
        {
          ru: 'Смешайте все ингредиенты',
          en: 'Mix all ingredients',
          ua: 'Змішайте всі інгредієнти',
        },
        {
          ru: 'Добавьте фету и оливки',
          en: 'Add feta and olives',
          ua: 'Додайте фету та оливки',
        },
        {
          ru: 'Полейте оливковым маслом',
          en: 'Drizzle with olive oil',
          ua: 'Полийте оливковою олією',
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
        ua: 'Можна додати лимонний сік для кислинки',
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
