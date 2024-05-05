---
sidebar_position: 1
slug: /
---

# Быстрый старт с Rupilot ИИ

Самый простой способ попробовать наш ИИ это [веб чат](https://rupilot.ru/chat).

Самый функциональный способ это наш CLI. Он поможет ответить на ваши вопросы, напишет 
описание вашего коммита и подскажет команду linux, которую вы могли подзабыть.

Для установки Rupilot CLI на ваш ОС.
Вам потребуется наличие Node >= v18.14.0

```bash
npm i -g rupilot
```
Еще нужно иметь ключ доступа, его можно получить на [дашборде сайта](https://rupilot.ru/dashboard)
```bash
rupilot config set TAZ_KEY={Ключ доступа с сайта}
```

```bash
rupilot chat "Напиши Hello World на Python"
```
```python print("Hello World") ```

[Подробней можно почитать тут](./tutorial-basics/cli-setup)
