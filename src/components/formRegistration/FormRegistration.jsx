import Button from '../button/Button'
import './FormRegistration.css'
import Card from '../card/Card'
import Titleh2 from '../titleH2/Titleh2'
import Text from '../text/Text'

function FormRegistration() {
    
    return (
        <Card>
            <Titleh2>Welcome to our site</Titleh2>
            <Text>Please register</Text>
            <form className='form-registration'>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Password"/>
                <Button>Submit</Button>
            </form>  
        </Card>
       
    )
}

export default FormRegistration