import { render } from '@testing-library/react'
import { Themed } from './styles/GlobalStyle'
import React from 'react'

const renderComponent: typeof render = (ui, options) => render(ui, { wrapper: Themed, ...options })

const mockComponent = (componentName: string): React.FC => (props) => {
  const { children, ...otherProps } = props
  return (
    <div data-component={componentName} data-props={JSON.stringify(otherProps, null, ' ')}>
      {children}
    </div>
  )
}

export { renderComponent, mockComponent }
