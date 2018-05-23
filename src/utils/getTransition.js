const getTransitionStyles = (timeout) => {
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
};

const getTransition = ({timeout, status}) => {
  return getTransitionStyles(timeout)[status];
};

export default getTransition;