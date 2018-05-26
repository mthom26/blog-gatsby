import transitions from './transitions';

const getTransitionStyles = (timeout, paths) => {
  const path = paths.next;

  if(path === '/about') {
    return transitions(timeout).fadeIn
  } else if(path === '/blog') {
    return transitions(timeout).slideFromBottom
  } else {
    return transitions(timeout).fadeIn
  }
}

const getTransition = ({timeout, status, paths}) => {
  return getTransitionStyles(timeout, paths)[status];
};

export default getTransition;