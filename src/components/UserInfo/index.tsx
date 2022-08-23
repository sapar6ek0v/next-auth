import React, { FC } from 'react'
import notfound from '../Images/notfound.png'

interface Props {
  user: {
    email: string | null | undefined
    id: string
    image: string | null | undefined
    name: string | null | undefined
  }
}

const UserInfo: FC<Props | any> = ({ user }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <img
          src={user.image || notfound}
          loading="lazy"
          className="w-20 "
          alt="tailus logo"
        />
      </div>
      <h2 className="mb-8 text-2xl text-cyan-900 font-bold text-center">
        You are signed in {user.name}
      </h2>
      <h2 className="mb-8 text-xl text-cyan-900 font-bold text-center">
        {user.email}
      </h2>
    </div>
  )
}

export default UserInfo
