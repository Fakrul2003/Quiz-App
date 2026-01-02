import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Illustration from '../components/Illustration';
import From from '../components/From';
import TextInput from '../components/TextInput';
import classes from '../style/Signup.module.css';

export default function Signup() {
  return (
    <>
    <h1>Create an account</h1>
     
     <div className='column'>
        <Illustration/>
          <From className={`${classes.signup}`}>
             <TextInput type="text" 
             placeholder="Enter Nane"
             icon="person"/>

             <TextInput type="text" 
             placeholder="Enter email"
             icon="alternate_email"/>

             <TextInput type="password" 
             placeholder="Enter password"
             icon="lock"/>
                 
              <TextInput type="password" 
             placeholder="Confirm password"
             icon="lock_clock"/>

           <Checkbox text="I agree to the Terms & Conditions" />   
           <Button> <samp> Submit now </samp> </Button>
           <div className='info'>
            Already have an account?
            <a href='login.html'>Login</a>
            insteat.
           </div>
          </From>
            
     </div>
    </>
  )
}
