import Select from 'react-select';

export default function SelectList(){
    const options = [
        { value: 'batumi', label: 'Batumi, Georgia' },
        { value: 'tbilisi', label: 'Tbilisi, Georgia' },
        { value: 'poti', label: 'Poti, Georgia' },
        { value: 'zugdidi', label: 'Zugdidi, Georgia' },
        { value: 'sukhumi', label: 'Sukhumi, Georgia' },
        { value: 'kutaisi', label: 'Kutaisi, Georgia' },
        { value: 'borjomi', label: 'Borjomi, Georgia' },
        { value: 'bakuriani', label: 'Bakuriani, Georgia' },
        { value: 'rustavi', label: 'Rustavi, Georgia' },
        { value: 'telavi', label: 'Telavi, Georgia' },
        { value: 'haifa', label: 'Haifa, Israel' },
        { value: 'ashqelon', label: 'Ashqelon, Israel' },
        { value: 'jerusalem', label: 'Jerusalem, Israel' },
        { value: 'netanya', label: 'Netanya, Israel' },
        { value: 'kharkiv', label: 'Kharkiv, Ukraine' },
        { value: 'lviv', label: 'Lviv, Ukraine' },
        { value: 'odessa', label: 'Odessa, Ukraine' },
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