import { useEffect } from 'react'

function useOutsideAlerter (sideBarRef, iconRef, action) {
  useEffect(() => {
    function handleClickOutside (event) {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        if (!iconRef.current.contains(event.target)) action(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [sideBarRef, iconRef, action])
}

export default useOutsideAlerter
