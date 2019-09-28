import { useState, useEffect, useMemo } from 'react'
import MOCK_DATA from '../json/data.json'

export const TYPE = {
  RECOMMEND: 'RECOMMEND',
  LATEST: 'LATEST',
  CATEGORY: 'CATEGORY',
}

const filterData = () => {
  return MOCK_DATA
}

const useData = type => {
  // const [data, setData] = useState([])
  const data = useMemo(() => filterData(), [type])

  // useEffect(() => {

  //   setData(newData)
  // }, [type, categoryName])

  return data
}

export default useData
