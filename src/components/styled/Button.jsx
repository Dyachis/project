import styled from 'styled-components'

const Button = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 5px;

    color: ${props => props.primary ? '#0F4C81' : '#ffff'};
    background: ${props => props.primary ? '#ffff' : '#0F4C81'};
    border: 1px solid ${props => props.primary ? '#0F4C81' : '#ffff'};
`

const theme = {
    color: '#0F4C81',
    background: '#ffff'
}

export default Button