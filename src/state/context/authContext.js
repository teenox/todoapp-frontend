import createDataContext from '../../state/context/createDataContext';
import authReducer from '../../state/reducers/auth';
import { signUp, signIn, setCurrentUser } from '../../state/actions/index';

export const initialState = {
  user: null,
  isAuthenticated: false,
  signUpErr: '',
  signInErr: ''
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signUp, signIn, setCurrentUser },
  initialState,
)