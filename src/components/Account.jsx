import classNamees from '../style/Account.module.css';
import { Link } from 'react-router-dom';
export default function Account() {
  return (
    <div className={classNamees.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <Link to="signup">Signup</Link>
        <Link to="login">Login</Link>
      </div>
  )
}
