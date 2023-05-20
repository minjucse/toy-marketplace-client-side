
import { useEffect } from 'react'

const useTitle = title => {
 useEffect({
    document.title = `${title} - Arts Toy`
 },[title]);
}

export default useTitle