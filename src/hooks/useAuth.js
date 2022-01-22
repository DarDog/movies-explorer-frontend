import {useContext} from 'react';
import {CurrentUserContext} from "../context/CurrentUserProvider";

export function useAuth() {
  return useContext(CurrentUserContext);
}
