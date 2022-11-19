const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "София",
            "id_2": "Анастасия",
            "id_3": "Дарья",
            "id_4": "Мария",
            "id_5": "Анна",
            "id_6": "Виктория",
            "id_7": "Полина",
            "id_8": "Елизавета",
            "id_9": "Екатерина",
            "id_10": "Ксения"
        }
    }`,

    middleNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Алексеевич",
            "id_7": "Михаилович",
            "id_8": "Данилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,

    birthDayJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11":"ноября",
            "id_12":"декабря"
        }
    }`,

    maleProfessionJson: `{
        "count": 5,
        "list": {     
            "id_1": "слесарь",
            "id_2": "солдат",
            "id_3": "шахтер",
            "id_4": "машинист",
            "id_5": "моряк"
        }
    }`,

    femaleProfessionJson: `{
        "count": 5,
        "list": {     
            "id_1": "стюардесса",
            "id_2": "медсестра",
            "id_3": "стилист",
            "id_4": "флорист",
            "id_5": "няня"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() {
        let gender = Math.floor(Math.random()*2)== 0 ? this.GENDER_MALE : this.GENDER_FEMALE;;
        return gender;
    },


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        let gender = this.person.gender;
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson)
        }
    },


    randomSurname: function() {
        let gender = this.person.gender;
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else {
            return (`${this.randomValue(this.surnameJson)}а`)
        }

    },

    randomMiddleName: function() {
        let gender = this.person.gender;
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.middleNameMaleJson);
        } else {
            middleName = this.randomValue(this.middleNameMaleJson);
            return middleName.replace('ич','на')
        }

    },

    randomBirthDate: function () {
        let day;
        let month =this.randomValue(this.birthDayJson);
        let year = this.randomIntNumber(2003, 1970);
        if (month == 'февраля') {
            day = this.randomIntNumber(1, 28);
        } else if (month == 'апреля' || 'июня' || 'сентября' || 'ноября') {
            day = this.randomIntNumber(1, 30);
        } else {
            day = this.randomIntNumber(1, 31);
        }
        return (`${day} ${month} ${year}`);
    },

    randomProfession: function() {
        let gender = this.person.gender;
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.maleProfessionJson);
        } else {
            return this.randomValue(this.femaleProfessionJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.middleName = this.randomMiddleName();
        this.person.birth = this.randomBirthDate();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
