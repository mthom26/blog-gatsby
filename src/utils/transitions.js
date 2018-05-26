const transitions = (timeout) => ({
  fadeIn: {
    entering: {
      opacity: 0
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in`,
      opacity: 1
    },
    exiting: {
      
      transition: `opacity ${timeout}ms ease-in`,
      opacity: 0
    }
  },
  slideFromBottom: {
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
  },
  slideFromRight: {
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
  },
  slideFromLeft: {
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
});

export default transitions;