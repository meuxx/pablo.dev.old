import useFathomGoal from './useFathomGoal'

describe('useFathomGoal hook', () => {
  describe('fathom not loaded', () => {
    beforeEach(() => {
      delete window.fathom
    })

    it('should not throw any error', () => {
      const trackGoal = useFathomGoal('code')
      trackGoal()

      expect(() => trackGoal()).not.toThrow()
    })
  })

  describe('fathom loaded', () => {
    beforeEach(() => {
      delete window.fathom
      window.fathom = {
        trackGoal: jest.fn(),
        blockTrackingForMe: jest.fn(),
        enableTrackingForMe: jest.fn(),
        trackPageview: jest.fn(),
      }
    })

    it('should call trackGoal with default cents', () => {
      const trackGoal = useFathomGoal('code')
      trackGoal()

      expect(window.fathom.trackGoal).toHaveBeenCalledWith('code', 0)
    })

    it('should call trackGoal with specified cents', () => {
      const trackGoal = useFathomGoal('code', 100)
      trackGoal()

      expect(window.fathom.trackGoal).toHaveBeenCalledWith('code', 100)
    })
  })
})
