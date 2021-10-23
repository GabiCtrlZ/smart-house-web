import { useState, useEffect } from 'react'
import { UseWindowSizeFunction, WindowSize } from '../@types'


const useWindowSize: UseWindowSizeFunction = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 450,
    height: 650,
  })

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
