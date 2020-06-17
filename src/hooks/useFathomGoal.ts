const useFathomGoal = (code: string, cents = 0): (() => void) => {
  return () => {
    if (window.fathom === undefined) {
      return
    }
    window.fathom.trackGoal(code, cents)
  }
}

export default useFathomGoal
