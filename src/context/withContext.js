import AppContext from './context'

export default function withContext(Component){
    return props => {
        return <AppContext.Consumer>
            {context => <Component {...props} context={context}/>}
        </AppContext.Consumer>
    }
}