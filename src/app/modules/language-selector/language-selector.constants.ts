export enum Languages {
  En = 'en',
  Ru = 'ru',
}

export const LANG_NAME_TO_TRANSLATION_KEY: { [key in Languages]: string } = {
  [Languages.En]: 'app.language.en',
  [Languages.Ru]: 'app.language.ru',
};
