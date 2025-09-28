# Postman Collection для SportBackend API

## Описание
Коллекция содержит основные запросы для тестирования API SportBackend приложения.

## Структура коллекции

### 1. Auth (Аутентификация)
- **Register** - Регистрация нового пользователя
- **Login** - Вход пользователя (автоматически сохраняет токен)
- **Profile** - Получение профиля текущего пользователя

### 2. Users (Пользователи)
- **Get All Users** - Получить всех пользователей
- **Get User by ID** - Получить пользователя по ID
- **Update User** - Обновить данные пользователя
- **Delete User** - Удалить пользователя

### 3. Roles (Роли)
- **Get All Roles** - Получить все роли
- **Assign Role to User** - Назначить роль пользователю

## Переменные окружения

В environment файле настроены следующие переменные:
- `baseUrl` - базовый URL API (по умолчанию: http://localhost:3000)
- `authToken` - JWT токен (автоматически заполняется после логина)
- `userId` - ID пользователя
- `adminEmail` - email администратора
- `testUserEmail` - email тестового пользователя
- `password` - пароль по умолчанию

## Импорт в Postman

1. Откройте Postman
2. Нажмите Import
3. Выберите файлы:
   - `SportBackend.postman_collection.json`
   - `SportBackend.postman_environment.json`

## Использование Newman (CLI)

Установите Newman:
```bash
npm install -g newman
```

Запустите коллекцию:
```bash
newman run postman/SportBackend.postman_collection.json -e postman/SportBackend.postman_environment.json
```

## Примечания

- После успешного логина токен автоматически сохраняется в переменную `authToken`
- Все защищенные эндпоинты используют Bearer токен аутентификацию
- Замените placeholder значения (например, `user-id-here`) на реальные ID