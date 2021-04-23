import Select from 'react-select';

export default function SelectList(){
    const options = [
        { value: 'haifa', label: 'Haifa, Israel' },
        { value: 'ashqelon', label: 'Ashqelon, Israel' },
        { value: 'batumi', label: 'Batumi, Georgia' },
        { value: 'tbilisi', label: 'Tbilisi, Georgia' },
        { value: 'kharkiv', label: 'Kharkiv, Ukraine' },
        { value: 'jerusalem', label: 'Jerusalem, Israel' },
        { value: 'lviv', label: 'Lviv, Ukraine' },
        { value: 'odessa', label: 'Odessa, Ukraine' },
        { value: 'netanya', label: 'Netanya, Israel' },
        { value: 'poti', label: 'Poti, Georgia' },
        { value: 'zugdidi', label: 'Zugdidi, Georgia' },
        { value: 'sukhumi', label: 'Sukhumi, Georgia' },
        { value: 'kutaisi', label: 'Kutaisi, Georgia' },
    ]
    
    const dot = (color = '#ccc') => ({
        alignItems: 'center',
        display: 'flex',
        minHeight: '40px',
      });
      
      const Styles = {
        control: styles => ({ ...styles,}),
        input: styles => ({ ...styles, ...dot() }),
        placeholder: styles => ({ ...styles, ...dot() }),
        singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
      };

      return <li><Select options={options} placeholder={'Enter city...'} className={'cityfield'} name='city' styles={Styles}/></li>
}