import Image from 'next/image'
import { client } from '../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

export default async function Home() {
  const query = `*[_type =='hijabie']
  {...,
  "imageSrc" : posterimage.asset->url,
  "imageUrl" : content[0].asset->url
}`

  const blogs: any[] = await client.fetch(query)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {blogs.map((item) => {
        return (
          <div key={item.id}>
            <Link href={`/blog/${item.id}`} key={item.id} className="shadow">
              <div
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                style={{ backgroundImage: `url(${item.imageSrc})`, height: 500, width: 500 }}
              >
                <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read More</span>
              </div>
                {item.imageUrl && 
                <Image
                src={item.imageUrl}
                alt=''
                width={300}
                height={300}
                className='w-full h-full'
                />}
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black">{item.name}</span>
                {/* <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span> */}
              </div>
            </Link>
          </div>
        );
      })}
    </main>
  )
}
