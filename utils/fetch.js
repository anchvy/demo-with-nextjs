import MOCK_DATA from '../json/data.json'
import APP_CONFIG from '../json/config.json'

export const QUERY_TYPE = {
  ALL: 'ALL',
  LATEST: 'LATEST',
  CATEGORY_NAME: 'CATEGORY_NAME',
  CATEGORIES: 'CATEGORIES',
}

/**
 * Fetch mock data with given type, categoryname and limit
 * @param {string} type - QUERY_TYPE
 * @param {string} categoryName
 * @param {number} limit
 * @returns {object[]}
 */
export const fetchMockData = (type, categoryName = 'All', limit = 0) => {
  let data

  switch (type) {
    case QUERY_TYPE.ALL:
      data = MOCK_DATA
      break
    case QUERY_TYPE.LATEST:
      data = MOCK_DATA
      break
    case QUERY_TYPE.CATEGORY_NAME:
      data = categoryName === 'All' ? MOCK_DATA : MOCK_DATA.filter(item => item.categoryName === categoryName)
      break
    case QUERY_TYPE.CATEGORIES:
      data = Object.keys(
        MOCK_DATA.reduce((result, item) => ({ ...result, [item.categoryName]: item.categoryName }), {})
      )
      break
    default:
      data = []
  }

  return limit ? data.slice(0, limit) : data
}
/**
 * Fetch data from /json/config.json
 * @param {string} key
 * @returns {string}
 */
export const fetchConfig = key => {
  return APP_CONFIG[key] || ''
}
