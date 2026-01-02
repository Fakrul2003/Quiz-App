import Image from '../assets/images/success.png';
import classes from '../style/Summary.module.css';

export default function summary() {
  return (
    <div className={classes.container}>
        <div className={classes.summary}>
          <div className={classes.point}>
         
            <p className={classes.score}>
              Your score is <br />
              5 out of 10
            </p>
          </div>

          <div className={classes.badge}>
            <img src={Image} alt="Success" />
          </div>
        </div>
        </div>

  );
}
