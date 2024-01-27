import React, { useContext, useEffect, useState } from 'react'
import styles from '../styles/Details.module.css'
import stateOptions from '../utils/states.json'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../store/AuthContext'

interface UserData {
  rank: string
  category: string
  gender: string
  categoryRank: string
  state: string
  branch: string[]
  college: string[]
}

interface ApiRes {
  instituteList: string[],
  branchList: string[]
}

type StringSetter = React.Dispatch<React.SetStateAction<string>>

type ListSetter = React.Dispatch<React.SetStateAction<string[]>>

const Details: React.FC = () => {
  const yufaabInstance = useContext(AuthContext)
  const [apiData, setApiData] = useState<ApiRes>()
  const [instituteList, setInstituteList] = useState<string[]>([])
  const [branchList, setBranchList] = useState<string[]>([])
  const [stateList, setStateList] = useState<string[]>([])
  const [formData, setFormData] = useState<UserData>({
    rank: '',
    category: '',
    gender: '',
    categoryRank: '',
    state: '',
    branch: [],
    college: [],
  })
  const [branchData, setBranch] = useState<string>('')
  const [instituteData, setInstitute] = useState<string>('')
  const [stateData, setState] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      const data = await yufaabInstance?.getSearchQuery()
      if(data){
        setApiData(data)
      }
    }
    fetchData()
  }, [yufaabInstance, setInstituteList, setBranchList])

  const navigate = useNavigate()
  const [isRankValid, setIsRankValid] = useState<boolean>(true)
  const [isCategoryValid, setIsCategoryValid] = useState<boolean>(true)
  const [isGenderValid, setIsGenderValid] = useState<boolean>(true)
  const [isStateValid, setIsStateValid] = useState<boolean>(true)

  const handleInputChange = (name: string, value: string | number) => {
    setFormData({ ...formData, [name]: value })
    if (name === 'rank') {
      setIsRankValid(true)
    } else if (name === 'gender') {
      setIsGenderValid(true)
    } else if (name === 'state') {
      setIsStateValid(true)
    }
  }

  const handleCategoryChange = (name: string, value: string) => {
    setFormData({ ...formData, category: value })
    if (name === 'category') {
      setIsCategoryValid(true)
    }
  }

  const handleDynamicInput = (value: string, sourceData: string[] | undefined, LabelSetter: StringSetter, ListSetter: ListSetter) => {
    LabelSetter(value)
    if(value.length === 0){
      ListSetter([])
      return;
    }
    ListSetter(sourceData?.filter(data => data.toLowerCase().includes(value.toLowerCase())) || [])
  }

  const handleSubmit = () => {
    setIsRankValid(!!formData.rank)
    setIsCategoryValid(!!formData.category)
    setIsGenderValid(!!formData.gender)
    setIsStateValid(!!formData.state)

    const isFormValid =
      !!formData.rank &&
      !!formData.category &&
      !!formData.gender &&
      !!formData.state

    if (isFormValid) {
      console.log('Form data:', formData)
      // localStorage.setItem('formData', JSON.stringify(formData));
      navigate('/details/preview', { state: { formData } })
    }
  }

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsForm}>
        <h2 className={styles.yuFaabHeading}>YuFaab</h2>
        <div className={styles.formGroup}>
          <label htmlFor="rank">
            Rank<span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="rank"
            value={formData.rank}
            onChange={(e) => handleInputChange('rank', e.target.value)}
            className={!isRankValid ? styles.error : ''}
          />
          {!isRankValid && (
            <span className={styles.errorMessage}>Rank is required.</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>
            Category<span className={styles.required}>*</span>
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => handleCategoryChange('category', e.target.value)}
            className={!isCategoryValid ? styles.error : ''}
          >
            <option value="">Select Category</option>
            <option value="OPEN">OPEN</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="EWS">EWS</option>
            <option value="SC (pwd)">SC (pwd)</option>
            <option value="ST (pwd)">ST (pwd)</option>
            <option value="EWS (pwd)">EWS (pwd)</option>
          </select>
          {!isCategoryValid && (
            <span className={styles.errorMessage}>Category is required.</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>
            Gender<span className={styles.required}>*</span>
          </label>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={() => handleInputChange('gender', 'Male')}
              className={!isGenderValid ? styles.error : ''}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={() => handleInputChange('gender', 'Female')}
              className={!isGenderValid ? styles.error : ''}
            />
            <label htmlFor="female">Female</label>
          </div>
          {!isGenderValid && (
            <span className={styles.errorMessage}>Gender is required.</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="categoryRank">Category Rank</label>
          <input
            type="text"
            id="categoryRank"
            value={formData.categoryRank}
            onChange={(e) => handleInputChange('categoryRank', e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="state">
            State
          </label>
          <input
            type="text"
            id="state"
            value={stateData}
            onChange={(e) => handleDynamicInput(e.target.value, stateOptions.IndianStates, setState, setStateList)}
          />
          <div>
            {stateList.map((state, index )=> <p key={index}>{state}</p>)}
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="branch">
            Branch Preference
          </label>
          <input
            type="text"
            id="branch"
            value={branchData}
            onChange={(e) => handleDynamicInput(e.target.value, apiData?.branchList, setBranch, setBranchList)}
          />
          <ul>
            {branchList.map((branch, index )=> <p key={index}>{branch}</p>)}
          </ul>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="institute">
            Institute Preference
          </label>
          <input
            type="text"
            id="institute"
            value={instituteData}
            onChange={(e) => handleDynamicInput(e.target.value, apiData?.instituteList, setInstitute, setInstituteList)}
          />
          <div>
            {instituteList.map((institute, index )=> <p key={index}>{institute}</p>)}
          </div>
        </div>
        <button className={styles.submitButton} onClick={handleSubmit}>
          Save & Proceed
        </button>
      </div>
    </div>
  )
}

export default Details
