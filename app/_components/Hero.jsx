import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <Image
                            alt=""
                            src="/doctorgroup.jpg"
                            className="absolute inset-0 h-full w-full object-cover" width={800} height={800}
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl ">Get the <span className='text-primary'>Doctor</span> You Deserve: Easy Online <span className='text-primary'>Appointments</span>!!</h2>

                        <p className="mt-4 text-gray-600">
                            Welcome to your health hub! Schedule appointments with trusted doctors quickly and easily. Discover the right care tailored to your needs, all in one convenient place. Your well-being is just a click away!
                        </p>

                       <Link href={'/explore'}><Button className='mt-10'>Explore Now</Button></Link> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero