---
sidebar_position: 2
---

# Утилита командной строки

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

[NPM link](https://www.npmjs.com/package/rupilot)

### Команды CLI
* ```rupilot commit```
* ```rupilot branch``` Придумает название для бранчи.
* ```rupilot hook``` Привяжет хук для git commit команды и каждый раз будет подсказывать описание вашего коммита.
* ```rupilot config``` Настройка ключа доступа
```
