"use client"
import Image from "next/image";
//@ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
import Nav from "@/src/components/Nav";
import { Play, Shopi, Start } from "@/src/components/Icons";
import people from '../src/Assets/people.jpg'
import Planta1 from '../src/Assets/Rose.svg'
import Tooltip from "@/src/components/Tooltip";
// ..

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <main className="bg-primary min-h-screen text-text overflow-hidden">
      <div className="fondo">
        <Nav />
        <section className="pb-[5rem] md:mt-[10rem] mt-[3rem] 2xl:w-[90rem] xl:w-[75rem] w-auto mx-auto">
          <div className="flex xl:flex-row flex-col items-center md:px-10 px-5 justify-between">
            <div className="w-full flex gap-32 flex-col">
              <div className="flex flex-col">
                <h1 className="md:text-8xl text-7xl font-semibold">Breath Natureal </h1>
                <p className="text-xl md:w-[45rem] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="px-4 py-2 cursor-pointer rounded-lg border ">Explore</span>
                  <div className="flex items-center gap-3">
                    <div className="border flex items-center justify-center rounded-full w-10 h-10 cursor-pointer">
                      <Play />
                    </div>
                    <span>Live Demo...</span>
                  </div>
                </div>
              </div>
              <div className="md:w-[23rem] w-full bg-[#ffffff0f] border-[#ffffff1a] backdrop-blur-lg border rounded-3xl py-5 px-7 flex flex-col gap-3">
                <div className="flex items-center gap-5	">
                  <Image className='cursor-pointer rounded-full' src={people} width={50} height={200} alt='img' />
                  <div className="flex flex-col justify-center items-start">
                    <h3 className="font-normal">Alena Patel</h3>
                    <div className="flex items-center">
                      <Start />
                      <Start />
                      <Start />
                      <Start />
                      <Start />
                    </div>
                  </div>
                </div>
                <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
              </div>
            </div>
            <div className="bg-[#ffffff0f] backdrop-blur-lg mt-[10rem] xl:mt-[3rem] md:mt-[14rem] gap-2 flex flex-col justify-end p-10 w-full md:w-[30rem] h-[27rem] relative border border-[#ffffff1a] rounded-3xl">
              <Image className='cursor-pointer -top-16 -left-4 absolute scale-150' src={Planta1} width={700} height={700} alt='img' />
              <p>Trendy House Plant</p>
              <h3 className="font-normal text-xl">Calathea plant</h3>
              <Tooltip texto='Add product to shopping list' Position="right">
                <span className="w-[8rem] text-center px-4 py-2 cursor-pointer rounded-lg border ">Buy Now</span>
              </Tooltip>
            </div>
          </div>
        </section>
        <section className="2xl:w-[90rem] xl:w-[75rem] md:px-10 px-5 w-auto mx-auto flex flex-col items-center gap-40 pb-[5rem]">
          <h2 className="font-semibold text-center text-5xl">Our Trendy plants</h2>
          <div className="bg-[#ffffff0f] backdrop-blur-lg rounded-3xl md:rounded-[6rem] border-[#ffffff1a] border relative w-full flex md:items-center items-end justify-end md:p-20 p-14 md:h-[25rem] h-[30rem]">
            <Image className='cursor-pointer -top-[10rem] xl:-left-4 md:-left-[191px] left-[0] absolute' src={Planta1} width={700} height={700} alt='img' />
            <div className="lg:w-[28rem]  xl:w-[35rem] flex flex-col gap-3">
              <h3 className="font-semibold text-3xl">For Small Decs Ai Plat</h3>
              <p className="font-light text-1xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <p className="font-semibold text-3xl">Rs. 599/-</p>
              <div className="flex items-center gap-3">
                <span className="w-[8rem] text-center px-4 py-2 cursor-pointer rounded-lg border ">Explore</span>
                <Tooltip texto='Add product to shopping list' Position="right">
                  <div className="border w-[3rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer">
                    <Shopi />
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff0f] backdrop-blur-lg  rounded-3xl md:rounded-[6rem] border-[#ffffff1a] border relative w-full flex md:items-center items-end justify-start md:p-20 p-14 md:h-[25rem] h-[30rem]">
            <Image className='cursor-pointer -top-[10rem] xl:-right-4 md:-right-[111px] right-[0] absolute' src={Planta1} width={700} height={700} alt='img' />
            <div className="lg:w-[28rem]  xl:w-[35rem] flex flex-col gap-3">
              <h3 className="font-semibold text-3xl">For Small Decs Ai Plat</h3>
              <p className="font-light text-1xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <p className="font-semibold text-3xl">Rs. 599/-</p>
              <div className="flex items-center gap-3">
                <span className="w-[8rem] text-center px-4 py-2 cursor-pointer rounded-lg border ">Explore</span>
                <Tooltip texto='Add product to shopping list' Position="right">
                  <div className="border w-[3rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer">
                    <Shopi />
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </section>
      </div>
        <section className="md:mt-[10rem] mt-10 2xl:w-[90rem] xl:w-[75rem] w-auto md:px-10 px-5 mx-auto flex flex-col items-center gap-40 pb-[5rem]">
          <h2 className="font-semibold text-5xl text-center">Our Top Selling</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols- grid-cols-1 w-full gap-4 gap-y-[11rem]">
            {[1,2,3,4,5,6].map(item => (
              <div key={item} className="bg-[#ffffff0f] backdrop-blur-lg md:rounded-[3rem] rounded-3xl border-[#ffffff1a] border relative 2xl:w-[28rem] flex flex-col items-center justify-end p-10 md:h-[28rem] h-[25rem]">
              <Image className='cursor-pointer -top-[10rem] md:-left-4 left-[-5px] absolute' src={Planta1} width={700} height={700} alt='img' />
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold xl:text-3xl text-2xl">For Small Decs Ai Plat</h3>
                <p className="font-light text-1xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <p className="font-semibold xl:text-3xl text-2xl">Rs. 599/-</p>
                <div className="flex items-center gap-3">
                  <span className="w-[8rem] text-center px-4 py-2 cursor-pointer rounded-lg border ">Explore</span>
                  <Tooltip texto='Add product to shopping list' Position="right">
                  <div className="border w-[3rem] h-[3rem] flex items-center justify-center rounded-lg cursor-pointer">
                    <Shopi />
                  </div>
                </Tooltip>
                </div>
              </div>
            </div>
            ))}
          
          </div>
        </section>
    </main>
  );
}
