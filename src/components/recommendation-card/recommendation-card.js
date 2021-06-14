import React from 'react'
import './recommendation-card.scss'
import CustomButton from '../custom-button/custom-button'

export const RecommendationCard = ({searchHistory, executeSearch, searchKeyword}) => {
    return (
        <div className="pc-recommendations-container">
            {searchHistory.map(keyword => <CustomButton selected={searchKeyword===keyword} key={keyword} text={keyword} action={() => {executeSearch(keyword)}} theme="roundedButton"/>)}
        </div>
    )
}

export default RecommendationCard;
