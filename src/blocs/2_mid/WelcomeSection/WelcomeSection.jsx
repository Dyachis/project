import WelcomeSectionContainer from '../../style/containers/WelcomeSectionContainer'
import WelcomeFormContainer from '../../style/containers/WelcomeFormContainer'
import InputButton from '../../../blocs/style/InputButton'

import Select from 'react-select';
import options from '../../../components/form/SelectOptions';
import FormPrice from '../../../components/form/FormPrice'
import FormRooms from '../../../components/form/FormRooms'

import {connect} from 'react-redux';
import * as Actions from '../../../redux/findStorage/actionCreator'

function WelcomeSection({arr,addArr}) {

  return (
    <>
      <WelcomeSectionContainer>
        <div className='cover'></div>
        <h1>Let Us Guite You Home</h1>
        <h2>Find the place of your dream</h2>
        <WelcomeFormContainer>
          <form action='#' onSubmit={(e) => Finder(e, addArr)}>
            <ul>
            <Select options={options} placeholder={'Enter city...'} className={'cityfield'} name='city' styles={{input: styles => ({ ...styles, minHeight: '40px' })}}/>
              <FormPrice />
              <FormRooms />
              <div className='inp'>
                <InputButton>
                  Find place
                  <input
                    className='search'
                    type='submit'
                    value='Search'
                  />
                </InputButton>
              </div>
            </ul>
          </form>
        </WelcomeFormContainer>
      </WelcomeSectionContainer>
    </>
  )
}

function Finder(e, addArr) {
  e.preventDefault();
  addArr({
      arr:{
          city: e.target.city.value,
          price: e.target.range.value,
          
          rooms:
          (e.target.oneroom.checked ? '1' : '') +
          (e.target.tworoom.checked ? ',2' : '') +
          (e.target.threeroom.checked ? ',3' : '') +
          (e.target.fourroom.checked ? ',4' : '') +
          (e.target.fiveroom.checked ? ',5' : '')
      }
    })
}

const mapStateToProps = ({arr}) => {
  return {
      arr:arr
  }
}

const mapDispatchToProps = dispatch => {
  return {
      addArr: obj => dispatch(Actions.addArr(obj)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(WelcomeSection)