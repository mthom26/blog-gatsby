const getTransitionStyles = () => {
  return (
    {
      entering: {
        transform: 'translateX(80%)',
        opacity: 0
      },
      entered: {
        transform: 'translateX(0)',
        opacity: 1
      },
      exiting: {
        transform: 'translateX(-80%)',
        opacity: 0
      }
    }
  );
};

const getTransition = (status) => {
  return getTransitionStyles()[status];
};

export default getTransition;