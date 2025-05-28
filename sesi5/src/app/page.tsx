import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'

export default async function Page() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth()

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return <div>Sign in to view this page</div>
  }

  // Use `user` to render user details or create UI elements
  return <div className='min-h-screen flex flex-col justify-center items-center gap-4'>
    <span className='font-bold text-3xl'>Welcome to the home page!</span>

    <span className='text-sm italic text-gray-500'>Congrats, you have successfully logged in to my page.</span>
    <Image 
      src="/carlossainz.jpeg"
      alt="Dummy Welcome Image"
      width={5000}
      height={0}
      className='w-[400px] h-auto'
    />
  </div>
}