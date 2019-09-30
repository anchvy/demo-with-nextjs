import MOCK_DATA from '../json/data.json'

export const QUERY_TYPE = {
  ALL: 'ALL',
  LATEST: 'LATEST',
  CATEGORY_NAME: 'CATEGORY_NAME',
  CATEGORIES: 'CATEGORIES',
}

export const fetchMockData = (type, categoryName = 'All') => {
  switch (type) {
    case QUERY_TYPE.ALL:
      return MOCK_DATA
    case QUERY_TYPE.LATEST:
      return MOCK_DATA.slice(0, 4)
    case QUERY_TYPE.CATEGORY_NAME:
      if (categoryName === 'All') return MOCK_DATA
      return MOCK_DATA.filter(item => item.categoryName === categoryName)
    case QUERY_TYPE.CATEGORIES:
      return MOCK_DATA.reduce((result, item) => [...result, item.categoryName], [])
    default:
      return []
  }
}
