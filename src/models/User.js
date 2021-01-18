/**
 Класс для создания экземпляра пользователя
 */
export class User{
    /**
     * Записывает все необходимые поля из переданного объекта.
     * @constructor
     * @param {object} objectUser - передача пользователя в виде объекта
     * @this {User}
     */
    constructor(objectUser){
        this.name = objectUser.name,
        this.email = objectUser.email,
        this.password = objectUser.password,
        this.company = objectUser.company,
        this.chats = objectUser.chats,
        this.img = objectUser.img
    }

    /**
     * Метод для получения пути аватара
     * @param {Number} stepBack - из скольки папок нужно выйти, для оказания в корне
     * @this {User}
     */
    getUrlImg(stepBack){
        let url = '';
        for (let i = 0; i < stepBack; i++) {
            url = url + '../'
        };
        url = url + `server/img/${this.img}`;
        return url;
    }

    /**
     * Метод для получения последнего сообщения
     * @param {string} email - email пользователя, от которого нужно получить последнее сообщение
     * @this {User}
     */
    getLastMessage(email){
        let returnDate = 'Сообщений нет';
        this.chats.forEach(element => {
            if (email == element.id) {
                returnDate = element.story[element.story.length - 1]["text"];
            }
        });
        return returnDate;
    }
}