import React from 'react';
import './errorComponent.scss'

const ErrorComponent: React.FC<{message: string, testid: string}> = ({message, testid}) => {
    return <div className="invalid-feedback" data-testid={testid}>{ message }</div>
}

export default ErrorComponent