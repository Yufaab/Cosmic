import React, { useState } from 'react';
import styles from '../styles/Details.module.css';
import stateOptions from '../utils/states.json';
import branchOptions from '../utils/branch.json';
import collegeOptions from '../utils/institute.json';
import { useNavigate } from 'react-router-dom';

interface UserData {
  rank: string;
  category: string;
  gender: string;
  categoryRank: string;
  state: string;
  branch: string;
  college: string;
}

const Details: React.FC = () => {
  const [formData, setFormData] = useState<UserData>({
    rank: '',
    category: '',
    gender: '',
    categoryRank: '',
    state: '',
    branch: '',
    college: '',
  });

  // useEffect(() => {
  //   const storedFormDataString = localStorage.getItem('formData');
  //   if (storedFormDataString) {
  //     const storedFormData = JSON.parse(storedFormDataString);
  //     setFormData(storedFormData);
  //   }
  // }, []);

  const navigate = useNavigate();
  const [isRankValid, setIsRankValid] = useState<boolean>(true);
  const [isCategoryValid, setIsCategoryValid] = useState<boolean>(true);
  const [isGenderValid, setIsGenderValid] = useState<boolean>(true);
  const [isStateValid, setIsStateValid] = useState<boolean>(true);

  const handleInputChange = (name: string, value: string | number) => {
    setFormData({ ...formData, [name]: value });
    if (name === 'rank') {
      setIsRankValid(true);
    } else if (name === 'gender') {
      setIsGenderValid(true);
    } else if (name === 'state'){
      setIsStateValid(true);
    }
  };

  const handleCategoryChange = (name: string, value: string) => {
    setFormData({ ...formData, category: value });
    if (name === 'category'){
      setIsCategoryValid(true);
    }
  };

  const handleSubmit = () => {
    setIsRankValid(!!formData.rank);
    setIsCategoryValid(!!formData.category);
    setIsGenderValid(!!formData.gender);
    setIsStateValid(!!formData.state);

    const isFormValid =
      !!formData.rank &&
      !!formData.category &&
      !!formData.gender &&
      !!formData.state;

    if (isFormValid) {
      console.log('Form data:', formData);
      // localStorage.setItem('formData', JSON.stringify(formData));
      navigate('/details/preview', { state: { formData } });
    }
  };

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
          <label htmlFor="categoryRank">
            Category Rank
          </label>
          <input
            type="text"
            id="categoryRank"
            value={formData.categoryRank}
            onChange={(e) => handleInputChange('categoryRank', e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="state">
            State<span className={styles.required}>*</span>
          </label>
          <select
            id="state"
            value={formData.state}
            onChange={(e) => handleInputChange('state', e.target.value)}
            className={!isStateValid ? styles.error : ''}
          >
            {stateOptions.IndianStates.map((state: string, index: number) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
          {!isStateValid && (
            <span className={styles.errorMessage}>State is required.</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="branch">Branch</label>
          <select
            id="branch"
            value={formData.branch}
            onChange={(e) => handleInputChange('branch', e.target.value)}
          >
            {branchOptions.branches2022.map((branch: string, index: number) => (
              <option key={index} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="college">Colleges</label>
          <select
            id="college"
            value={formData.college}
            onChange={(e) => handleInputChange('college', e.target.value)}
          >
            {collegeOptions.institute2022.map((college: string, index: number) => (
              <option key={index} value={college}>
                {college}
              </option>
            ))}
          </select>
        </div>
        <button className={styles.submitButton} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Details;
