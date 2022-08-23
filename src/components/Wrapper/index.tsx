import { useSession } from 'next-auth/react'
import React, { FC, ReactNode } from 'react'

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const { status } = useSession()

  if (status === 'loading') return <div>Loading...</div>

  return <div>{children}</div>
}

export default Wrapper
