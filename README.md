# Busy-hands

Веб-приложение, направленное на оптимизацию рабочего процесса. Основные плюсы приложения:

  - Минималистичный дизайн
  - Понятный и интуитивный интерфейс
  - Минимальный порог вхождения

### Установка

Для нормальной работы приложения желательно использовать NodeJS версии 4+

После скачивания репозитория установите все зависимости следующим путём:

```sh
$ npm install 
```

Для полноценной работы приложения (после его установки) необходимо прописать следующие команды

```sh
$ webpack --mode development
$ node ./dist/server/server.js
```

### Аккаунты для входа

На данный момент есть 2 тестовых аккаунта. В будущем планируется хранение аккаунтов в MongoDB Atlas

| Email | Password | Имя аккаунта
| ------ | ------ | ------ |
| defoltspam@gmail.com | 952863 | Максим |
| katya@gmail.com | 1234 | Катя |

### Проверка работы чата (для задания по тензору)

Создать две вкладки и зайти по одинаковой ссылке. Затем войти в два разных аккаунта (указаны выше) и попробовать отправить сообщение. Если всё работает правильно, то при отправке сообщения, другой пользователь получит его сразу.

Для работы чата, необходимо воспользоваться следующими npm скриптами (в том же порядке):
  - dev
  - NodeServer


### npm скрипты

На данный момент есть 4 скрипта для работы с приложением

| Скрипт | Описание |
| ------ | ------ |
| dev | Необходим для сборки проекта и выгрузку его в корне проекта, в папку dist (при скачивании репозитория его нет) |
| doc | Сборка всей документации с помощью JSdoc. Выгрузка будет в корень проекта, в папку out (при скачивании репозитория его нет) |
| NodeServer | Запускает рабочий локальный сервер на NodeJS. **ВНИМАНИЕ!** Его следует запускать только если вы собрали папку dist с помощью скрипта *dev*. По умолчанию работает на http://localhost:3000/ |
| devServer | Запускает только приложение без работы сервера. При таком запуске не будет работать база данных и отправка сообщений. По умолчанию работает на http://localhost:9000/ |

### Используемые технологии
html, css, javaScript, react, fancyBox, jsDoc, SocketIO, nodeJS, webpack, babel, express и т.д.. Полный список можно посмотреть в файле package.json в полях *dependencies*, *devDependencies* и *keywords*

### Планы на будущее
  - Добавить typeScript для строгой типизации
  - Добавить тесты с помощью Jest + Enzyme

### Макет приложения
https://www.figma.com/file/sPchO6hS0uoQhNrlG1xpRy/Untitled