## Ссылка на [поднятый сервер с проектом](http://188.92.28.217)
- login: admin
- password: 123

## Запуск проекта
```
yarn install - устанавливаем зависимости
yarn dev или yarn dev:vite - запуск сервера + frontend проекта в dev режиме
```

----

## Ссылка на [сгенерированные отчеты](https://malinichev.github.io/lern-react/)

## Скрипты

- `yarn deploy:production` - Деплой приложения
- `yarn start` - Запуск frontend проекта на webpack dev server
- `yarn dev:vite` - Запуск frontend проекта на vite
- `yarn dev` - Запуск frontend проекта на webpack dev server + backend
- `yarn dev:vite` - Запуск frontend проекта на vite + backend
- `yarn start:dev:server` - Запуск backend сервера
- `yarn build:prod` - Сборка в prod режиме
- `yarn build:dev` - Сборка в dev режиме (не минимизирован)
- `yarn lint:ts` - Проверка ts файлов линтером
- `yarn lint:ts:fix` - Исправление ts файлов линтером
- `yarn lint:scss` - Проверка scss файлов style линтером
- `yarn lint:scss:fix` - Исправление scss файлов style линтером
- `yarn test:unit` - Хапуск unit тестов с jest
- `yarn test:ui` - Хапуск скриншотных тестов с loki
- `yarn test:ui:ok` - Подтверждение новых скриншотов
- `yarn test:ui:ci` - Запуск скриншотных тестов в CI
- `yarn test:ui:report` - Генерация полного отчета для скриншотных тестов
- `yarn test:ui:json` - Генерация json отчета для скриншотных тестов
- `yarn test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `yarn storybook` - запуск Storybook
- `yarn storybook:build` - Сборка storybook билда
- `yarn prepare` - прекоммит хуки
- `yarn generate:slice` - Скрипт для генерации FSD слайсов

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

В проекте используются 4 вида тестов:
1) Обычные unit тесты на jest - `yarn test:unit`
2) Тесты на компоненты с React testing library -`yarn test:unit`
3) Скриншотное тестирование с loki `yarn test:ui`
4) e2e тестирование с Cypress `yarn test:e2e`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin *eslint-plugin-ulbi-tv-plugin*,
который содержит 3 правила
1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2) layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров
- `yarn lint:ts` - Проверка ts файлов линтером
- `yarn lint:ts:fix` - Исправление ts файлов линтером
- `yarn lint:scss` - Проверка scss файлов style линтером
- `yarn lint:scss:fix` - Исправление scss файлов style линтером

----
## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `yarn storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```


----

## Конфигурация проекта

Для разработки проект содержит 2 конфига:
1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Работа с feature-flags

Разрешено использование feature flags только с помощью хелпера toggleFeatures

в него передается объект с опциями

{
   name: название фича-флага,
   on: функция, которая отработает после Включения фичи
   off: функция, которая отработает после ВЫключения фичи
}

Для автоматического удаления фичи использовать скрипт remove-feature.ts,
который принимает 2 аргумента

"npx ts-node ./scripts/remove-feature.ts isCounterEnabled off"

1. Название удаляемого фича-флага
2. Состояние (on\off)

----

## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
