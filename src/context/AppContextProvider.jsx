import React from 'react'
import AppContext from './context'

export default class AppContextProvider extends React.Component{

    state = {
        blur: false,
    }

    toggleBlur = () => {
        this.setState({blur: !this.state.blur}, console.log(this.state.blur))
    }

    render(){
        return <AppContext.Provider value={{
            isBlured: this.state.blur,
            toggleBlur: this.toggleBlur
        }}>
            {this.props.children}
        </AppContext.Provider>
    }
}