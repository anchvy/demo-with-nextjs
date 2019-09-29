import { useState, useEffect, useMemo } from 'react'
import MOCK_DATA from '../json/data.json'

export const QUERY_TYPE = {
  ALL: 'ALL',
  LATEST: 'LATEST',
  CATEGORY_NAME: 'CATEGORY_NAME',
  CATEGORIES: 'CATEGORIES',
}

const filterData = () => {
  return MOCK_DATA
}

const useData = (type, options) => {
  // const [data, setData] = useState([])
  const data = useMemo(() => filterData(), [])

  // useEffect(() => {

  //   setData(newData)
  // }, [type, categoryName])

  return data
}

export default useData
