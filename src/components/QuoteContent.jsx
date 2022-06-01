import React from 'react'

const QuoteContent = ({quoteRandom,colorRandom}) => {
    return (
        <div className='quote-content'>
            <p className='quote-content-quote' style={{color: `#${colorRandom}`}}>{quoteRandom.quote}</p>

            <p className='quote-content-author' style={{color: `#${colorRandom}`}}>{quoteRandom.author}</p>
        </div>
    )
}

export default QuoteContent
