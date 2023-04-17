# HTTP Request Header Override Chrome Extension

Расширение позволяет пользователю управлять заголовками запросов, которые будут внедряться в запросы, сделанные при просмотре веб-сайта в Chrome, где каждое переопределение содержит следующие свойства:

* Header: Header key.
* Header Value: Значение, связанное с ключом заголовка.
* AJAX Request URL sub-string: Имя заголовка: значение будет применяться только к запросам XHR/Fetch, где URL-адрес внешнего запроса содержит предоставленную подстроку.

Переопределения заголовков управляются во всплывающем окне расширения Chrome (простое приложение для реагирования), сохраняются в локальном хранилище Chrome и применяются к восходящим запросам страниц с помощью функции updateDynamicRules динамических правил запроса chrome declarativeNetRequest.

## Local Development

### Start Local Server

1. Run `npm install` to install the dependencies.
1. Run `npm start`
1. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   1. Check `Developer mode`
   1. Click on `Load unpacked extension`
   1. Select the `build` folder.

## Packing

После разработки вашего расширения выполните команду

```
$ NODE_ENV=production npm run build
```

## Resources:

|  Source  |      Description      |
|----------|-----------------------|
| [chrome-extension-boilerplate-react](https://github.com/lxieyang/chrome-extension-boilerplate-react) | A React Chrome Extension Boilerplate, используемый для проекта расширения переопределения заголовка HTTP-запроса. |
| [Chrome Extension documentation](https://developer.chrome.com/extensions/getstarted) | Main Google Docs for developing Chrome Extensions |

---
