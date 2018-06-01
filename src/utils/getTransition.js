import transitions from './transitions';

const getTransitionType = (paths) => {
  let prev = paths.current.split('-')[0];
  
  if(prev === '/' || prev === '/blog' || prev === '/about') {
    return 'fadeIn';
  }
  prev = parseInt(prev.slice(1));
  
  const nextPath = paths.next;
  if(nextPath === '/' || nextPath === '/blog' || nextPath === '/about') {
    return 'fadeIn';
  }
  
  const next = parseInt(nextPath.split('-')[0].slice(1));
  // console.log(`prev: ${prev}`);
  // console.log(`next: ${next}`);
  
  if(next > prev) {
    return 'slideFromRight';
  } else {
    return 'slideFromLeft';
  }
  
}

const getTransitionStyles = (timeout, paths) => {
  const path = paths.next;
  //console.log(paths);
  
  if(path === '/about' || path === '/about/') {
    return transitions(timeout).fadeIn
  } else if((path === '/blog' || path === '/blog/') && paths.current === '/') {
    return transitions(timeout).slideFromBottom
  } else if(path === '/') {
    return transitions(timeout).fadeIn
  } else {
    // we are on a blog post so decide on left or right slide here
    // not going to work, the transition must be decided at the 
    // time of the user click (from gatsby-browser)
    const transitionType = getTransitionType(paths);
    //console.log(transitionType);
    return transitions(timeout)[transitionType];
  }
}

const getTransition = ({timeout, status, paths}) => {
  return getTransitionStyles(timeout, paths)[status];
};

export default getTransition;