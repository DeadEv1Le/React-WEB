import React  from 'react';



export class NavPhrases {
    static phrase_home = ["Home", "Главная", "Գլխավոր"];
    static phrase_log = ["Log", "Журнал", "Մատյան"];
    static lang_flag = [<p>English</p>, <p>Russian</p>, <p>Armenian</p>];
}

export class HomePhrases {
    static phrase_state = [ "State", "Состояние", "Կարգավիճակ" ];
    static phrase_stateoff = [ "Off", "Выкл", "Անջատված" ];
    static phrase_stateon = [ "On", "Вкл", "Միացված" ];
    static phrase_settings = [ "Settings", "Настройки", "Կարգավորումներ" ];
    static phrase_events = [ "Nearest events", "Ближайшие события", "Մոտակա միջոցառումները" ];
    static phrase_togglemask = [ "Mask access", "Вход c маской", "Մուտք դիմակով"];
    static phrase_toggleqr = [ "QR access", "Вход QR кодом", "Մուտք QR կոդով"];
    static phrase_savemaskphotos = [ "Save unmasked people's photos", "Сохранить картинки людей без маски", "Պահպանել առանց դիմակ մարդկանց լուսանկարները"];
    static phrase_saveqrphotos = [ "Save fake QR photos", "Сохранить картинки с неверными QR кодом", "Պահպանել սխալ QR ցույց տվողների լուսանկարները"];
    static phrase_unmaskedtoday = [ "Not entered | This session", "Не пройденные | За сессию", "Ներս չթողնված | Սեսիայի ընդացքում"];
    static phrase_attemptstoday = [ "Attempts | This session", "Попытки пройти | За сессию", "Մուտք գործելու փորձեր | Սեսիայի ընդացքում"];
    static phrase_unmaskedtotal = [ "Not entered | Total", "Не пройденные | За всё время", "Ներս չթողնված | Ամբողջ ընթացքում"];
    static phrase_attemptstotal = [ "Attempts | Total", "Попытки пройти | За всё время", "Մուտք գործելու փորձեր | Ամբողջ ընդացքում"];
}

export class LogPhrases {
    static phrase_image = [ "Image", "Картинка", "Լուսանկար" ];
    static phrase_date = [ "Info", "Информация", "Տեղեկություն" ];
}
