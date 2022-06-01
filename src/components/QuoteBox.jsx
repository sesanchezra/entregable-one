import React from 'react'
import QuoteContent from './QuoteContent'

const QuoteBox = ({quoteRandom,colorRandom}) => {
    return (
        <div>
            <QuoteContent
                quoteRandom={quoteRandom}
                colorRandom={colorRandom}
            />
        </div>
    )
}

export default QuoteBox
