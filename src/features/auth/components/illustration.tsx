import Image from 'next/image'
import type { StaticImageData } from 'next/image'

type Props = {
  title: string
  description: string
  illustration: StaticImageData
}

export default function Illustration({ title, description, illustration }: Props) {
  return (
    <div className="d flex w-2/4 flex-col items-center">
      <h1 className="mb-10 mt-3 text-center text-5xl font-bold">{title}</h1>
      <p className="mb-20 text-[#4F4F4F]">{description}</p>
      <Image priority src={illustration} alt="Illustration" />
    </div>
  )
}
