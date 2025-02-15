'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const SearchBar = () => {


    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {

        // Используем FormDate вместо useState для разнообразия
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;

        if(name) {
            router.push(`/list?name=${name}`)
        }

    }
  return (
    <form action="" className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1' onSubmit={handleSearch}>
        <input type="text" name='name' placeholder='Search' className='flex-1 bg-transparent outline-none'/>
        <button className='cursor-pointer'>
            <Image src='/search.png' alt='' height={16} width={16}/>
        </button>
    </form>
  )
}

export default SearchBar