module.exports = {
    SERVER_REQUEST_ERR: `Prázdna požiadavka`,
    SERVER_PAGE_NOT_FOUND: `Je nám ľúto, ale požadovaná stránka nebola nájdená`,
    SERVER_VALIDATION_ERR: `Údaje boli nesprávne vyplnené`,
    DATABASE_CONNECTED: `Mongo databáza pripojená, adresa:`,
    DATABASE_DISCONNECTED: `Mongo databáza odpojená adresa:`,
    DATABASE_CONNECTION_ERROR: `Pripojenie zlyhalo host: `,
    DATABASE_SEED: `Databáza bola úspešne naplnená údajmi`,
    DATABASE_SEED_ERR: `Databázu sa nepodarilo naplniť údajmi`,
    EUREKA_ERR: `Eureka service registrácia bola úspešná`,
    AUTH_REQUIRED: `Ľutujeme, ale stránka nie je k dispozícií`,
    AUTH_ERR: `Prístup odmietnutý`,

    CREATE_STATUS_ERR: `Vytvorenie nového státusu zásielky sa nepodarilo`,
    UPDATE_STATUS_ERR: `Aktualizácia státusu zásielky sa nepodarilo`,
    DELETE_STATUS_ERR: `Odstránenie státusu zásielky sa nepodarilo`,
    GET_STATUS_ERR: `Ľutujeme ale státus zásielky s identifikačním číslom neexistuje`,
    STATUS_NOT_FOUND: `Ľutujeme ale nenašiel sa žiadný státus zásielky`,

    CREATE_SHIPMENT_ERR: `Vytvorenie nového státusu balíka sa nepodarilo`,
    UPDATE_SHIPMENT_ERR: `Aktualizácia státusu balíka sa nepodarilo`,
    DELETE_SHIPMENT_ERR: `Odstránenie státusu balíka sa nepodarilo`,
    GET_SHIPMENT_ERR: `Ľutujeme ale státus balíka s identifikačním číslom neexistuje`,
    SHIPMENT_NOT_FOUND: `Ľutujeme ale nenašiel sa žiadný balík s státusom`,

    STATUS_NAME_LENGHT: `Minimálna dlžka státusu zásielky je 3 a maximalná je 64`,
    STATUS_NAME_ASCII: `Nesprávný formát státusu zásielky`,
    STATUS_MONGO_ID: `Nesprávný formát identifikacného čísla`,
    STATUS_PAGE_NUMBER_INT: `Nesprávný formát číslo strany`,
    STATUS_PAGE_SIZE_INT: `Nesprávný formát veľkosť strany`,
    STATUS_UNIQUE: `Státus zásielky už existuje`,


    SHIPMENT_MONGO_ID: `Nesprávný formát identifikacného čísla`,
    SHIPMENT_PAGE_NUMBER_INT: `Nesprávný formát číslo strany`,
    SHIPMENT_PAGE_SIZE_INT: `Nesprávný formát veľkosť strany`
};