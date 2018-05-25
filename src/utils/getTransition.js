const transitionType = (timeout, path) => {
  if(path === '/about') {
    return (
      {
        entering: {
          transform: 'translateX(-80%)',
          opacity: 0
        },
        entered: {
          transform: 'translateX(0)',
          transition: `transform ${timeout}ms ease-in, opacity ${timeout}ms ease-in`,
          opacity: 1
        },
        exiting: {
          transform: 'translateX(80%)',
          transition: `transform ${timeout}ms ease-in,  opacity ${timeout}ms ease-in`,
          opacity: 0
        }
      }
    );
  } else if(path === '/blog') {
    return (
      {
        entering: {
          transform: 'translateY(80%)',
          opacity: 0
        },
        entered: {
          transform: 'translateY(0)',
          transition: `transform ${timeout}ms ease-in, opacity ${timeout}ms ease-in`,
          opacity: 1
        },
        exiting: {
          transform: 'translateY(80%)',
          transition: `transform ${timeout}ms ease-in,  opacity ${timeout}ms ease-in`,
          opacity: 0
        }
      }
    );
  }

  return (
    {
      entering: {
        transform: 'translateX(80%)',
        opacity: 0
      },
      entered: {
        transform: 'translateX(0)',
        transition: `transform ${timeout}ms ease-in, opacity ${timeout}ms ease-in`,
        opacity: 1
      },
      exiting: {
        transform: 'translateX(-80%)',
        transition: `transform ${timeout}ms ease-in,  opacity ${timeout}ms ease-in`,
        opacity: 0
      }
    }
  );
}

const getTransitionStyles = (timeout, paths) => {
  //console.log(paths);
  return transitionType(timeout, paths.next);
};

const getTransition = ({timeout, status, paths}) => {
  return getTransitionStyles(timeout, paths)[status];
};

export default getTransition;