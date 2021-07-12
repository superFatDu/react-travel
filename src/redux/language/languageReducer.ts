import i18n from 'i18next'
import { CHANGE_LANGUAGE, ADD_LANGUAGE } from './languageActions'

// state时store中的旧数据，action则是只会state做出处理的指令
export interface LanguageState {
  language: 'en' | 'zh',
  languageList: { name: string, code: string }[]
}
const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    {
      name: "中文", code: 'zh'
    },
    {
      name: "English", code: 'en'
    }
  ]
}
export const languageReducer = (state = defaultState, action: any) => {
  const type = action.type
  switch (type) {
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(action.payload)
      return { ...state, language: action.payload }
    case ADD_LANGUAGE:
      return {
        ...state,
        languageList: [...state.languageList, action.payload]
      }
    default:
      return state
  }
}