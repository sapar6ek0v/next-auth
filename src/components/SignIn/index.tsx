import { signIn, signOut, useSession } from 'next-auth/react'
import { FC } from 'react'
import Button from '../Button'
import FacebookImage from '../Images/facebook.image'
import GithubImage from '../Images/github.image'
import GoogleImage from '../Images/google.image'
import UserInfo from '../UserInfo'

const SignIn: FC = () => {
  const { data, status } = useSession()
  console.log(data)
  const handleGithub = () => {
    signIn('github')
  }

  const handleGoogle = () => {
    signIn('google')
  }

  const handleLogOut = () => {
    signOut()
  }

  return (
    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200 h-screen">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              {status === 'authenticated' ? (
                <>
                  <UserInfo user={data?.user} />
                  <div className="mt-16  grid space-y-4">
                    <Button onClick={handleLogOut} btnText="Log Out" />
                  </div>
                </>
              ) : (
                <div className="mt-16 mb-16 grid space-y-4">
                  <Button
                    onClick={handleGoogle}
                    btnText="Continue with Google"
                    img={<GoogleImage />}
                  />
                  <Button
                    onClick={handleGithub}
                    btnText="Continue with Github"
                    img={<GithubImage />}
                  />
                  <Button
                    onClick={handleGithub}
                    btnText="Continue with Facebook"
                    img={<FacebookImage />}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
