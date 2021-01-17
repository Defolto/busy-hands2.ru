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
        this.chats = objectUser.chats
    }
}