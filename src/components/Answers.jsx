import Checkbox from './Checkbox';
import classes from '../style/Answers.module.css';

export default function Answers() {
  return (
    <div className={classes.Answers}>
      <Checkbox className={classes.Answers} text="text ans"/>
    </div>
  
  )
}
