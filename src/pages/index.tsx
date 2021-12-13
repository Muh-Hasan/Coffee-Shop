import React, { useState } from "react"
import Button from "../components/Button"
import Navbar from "../components/Layout/navbar"

export default function Home() {
  const [isOpen, setOpen] = useState<Boolean>(false)
  return (
    <div>
      <Navbar />
      <div className="bg-hero min-h-[90vh] relative">
        <div className="flex items-center justify-center pt-24">
          <div className="w-2/5 text-center">
            <div className="">
              <h2 className="font-bold text-6xl leading-normal">
                Lorem ipsum dolor amet invidunt.
              </h2>
            </div>
            <div className="my-4">
              <h4 className="font-normal text-4xl leading-normal">
                Lorem ipsum dolor amet invidunt.
              </h4>
            </div>
            <div>
              <Button text="Start Free Trial" backgroundColor="black" />
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0">
          <img src="/images/coffee-cup.png" alt="" className="w-96" />
        </div>
      </div>
      <div className="py-20">
        <div className="text-center pb-12 tracking-wide">
          <h2 className="text-4xl uppercase">How it works</h2>
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-around flex-wrap items-center gap-8">
            <div className="text-center w-64">
              <div className="mx-auto my-0">
                <img
                  src="/images/image-2.png"
                  alt=""
                  className="w-48 h-48 object-contain "
                />
              </div>
              <div>
                <p className="font-medium text-xl leading-loose">Lorem Ipsum</p>
                <p className="text-para leading-normal text-[15px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing.
                </p>
              </div>
            </div>
            <div className="text-center w-64">
              <div className="mx-auto my-0">
                <img
                  src="/images/image-3.png"
                  alt=""
                  className="w-48 h-48 object-contain "
                />
              </div>
              <div>
                <p className="font-medium text-xl leading-loose">Lorem Ipsum</p>
                <p className="text-para leading-normal text-[15px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing.
                </p>
              </div>
            </div>
            <div className="text-center w-64">
              <div className="mx-auto my-0">
                <img
                  src="/images/image-4.png"
                  alt=""
                  className="w-48 h-48 object-contain "
                />
              </div>
              <div>
                <p className="font-medium text-xl leading-loose">Lorem Ipsum</p>
                <p className="text-para leading-normal text-[15px]">
                  Lorem ipsum dolor sit amet, consetetur sadipscing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-image-coffee">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="pb-12">
            <div className="pb-8">
              <h2 className="text-5xl font-bold text-white">
                7-day Free Trial
              </h2>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className="w-7">
                <img src="/images/tickMark.png" alt="" className="w-full" />
              </div>
              <div>
                <h4 className="text-2xl font-normal text-white">
                  Two 2oz bags of Coffee
                </h4>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <Button text="Start Free Trial" backgroundColor="white" />
          </div>
          <div className="pt-6">
            <p className="text-white text-sm">
              You will be charged after <b> 7-days </b>and can cancel anytime
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-52">
          <div>
            <img src="/images/decaf.png" />
          </div>
          <div>
            <h2>decaf</h2>
          </div>
          <div>
            <p> Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
