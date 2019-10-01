import MOCK_DATA from '../json/data.json'
import APP_CONFIG from '../json/config.json'

export const QUERY_TYPE = {
  ALL: 'ALL',
  LATEST: 'LATEST',
  CATEGORY_NAME: 'CATEGORY_NAME',
  CATEGORIES: 'CATEGORIES',
}

/**
 * Fetch mock data with given type and categoryname
 * @param {string} type - QUERY_TYPE
 * @param {string} categoryName
 * @returns {object[]}
 */
export const fetchMockData = (type, categoryName = 'All') => {
  switch (type) {
    case QUERY_TYPE.ALL:
      return MOCK_DATA
    case QUERY_TYPE.LATEST:
      return MOCK_DATA.slice(0, 3)
    case QUERY_TYPE.CATEGORY_NAME:
      if (categoryName === 'All') return MOCK_DATA
      return MOCK_DATA.filter(item => item.categoryName === categoryName)
    case QUERY_TYPE.CATEGORIES:
      return Object.keys(
        MOCK_DATA.reduce((result, item) => ({ ...result, [item.categoryName]: item.categoryName }), {})
      )
    default:
      return []
  }
}
/**
 * Fetch data from /json/config.json
 * @param {string} key
 * @returns {string}
 */
export const fetchConfig = key => {
  return APP_CONFIG[key] || ''
}
