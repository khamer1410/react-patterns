import React, { Component } from 'react'

const ThemeContext = React.createContext()

export default class ThemeProvider extends Component {
  state = {
    theme: 'classic'
  }

  setTheme = (newTheme) => {
    this.setState({ theme: newTheme })
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          setTheme: this.setTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

// Direct consumer
export const ThemeConsumer = ThemeContext.Consumer

// HOC for passing theme to wrapped Component - usage: export default WithThemeConsumer(Component)
export const WithThemeConsumer = (Component) => (props) => (
  <ThemeConsumer>
    {({ theme, setTheme }) => (
      <Component theme={theme} setTheme={setTheme} {...props} />
    )}
  </ThemeConsumer>
)
