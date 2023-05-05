import Image from 'next/image'
import { IconAward, IconBulb, IconCircleMinus } from '@tabler/icons-react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
      <h1 className='text-5xl font-bold pb-20'>ArtGlit</h1>

      <div className='flex space-x-2 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
          <IconBulb  size={36}
            color="white" 
            stroke={1} 
            strokeLinejoin="miter" 
          />
            <h2>Examples</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>"Explain Something to me"</p>
            <p className='infoText'>"What is the difference between a dog and a cat?"</p>
            <p className='infoText'>"What is the color of the sun?"</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
          <IconAward  size={36}
            color="white" 
            stroke={1} 
            strokeLinejoin="miter" 
          />
            <h2>Capabilities</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>Change the ChatGPT Model to use</p>
            <p className='infoText'>Messages are stored in FIrebase's Firestore</p>
            <p className='infoText'>Hot Toast notification when ChatGPT is thinking</p>
          </div>
        </div>

        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
          <IconCircleMinus size={36}
            color="white" 
            stroke={1} 
            strokeLinejoin="miter" 
          />
            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>May ocacasionally generate incorrect information</p>
            <p className='infoText'>May ocacasionally produce harmful instruction</p>
            <p className='infoText'>Limited knowdleage of world and events after 2022</p>
          </div>
        </div>

      </div>

  
    </div>
    </>
  )
}
