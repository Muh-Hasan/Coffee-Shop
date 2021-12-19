import React from "react"
import Button from "../components/Button"
import CoffeeForm from "../components/CoffeeForm"
import Layout from "../components/Layout"
import Footer from "../components/Layout/footer"
import Navbar from "../components/Layout/navbar"

export default function Home() {
  return (
    <Layout>
      <div className="bg-hero min-h-[90vh] relative">
        <div className="flex items-center justify-center pt-24">
          <div className="w-2/5 isXl:w-1/2 isLg:w-11/12 text-center">
            <div className="">
              <h2 className="font-bold text-6xl leading-normal isSm:text-5xl">
                Lorem ipsum dolor amet invidunt.
              </h2>
            </div>
            <div className="my-4">
              <h4 className="font-normal text-4xl leading-normal isSm:text-3xl">
                Lorem ipsum dolor amet invidunt.
              </h4>
            </div>
            <div className="pb-8">
              <a href="/#free-trial">
                <Button
                  text="Start Free Trial"
                  backgroundColor="bg-black"
                  type="button"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 isLg:static isLg:text-right overflow-hidden">
          <img src="/images/coffee-cup.png" alt="" className="w-96" />
        </div>
      </div>

      <div className="py-20">
        <div className="text-center pb-12 tracking-wide">
          <h2 className="text-5xl font-semibold isSm:text-2xl uppercase">
            How it works
          </h2>
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
                <h4 className="font-medium text-3xl isSm:text-lg isSm:mb-2 leading-loose">
                  Lorem Ipsum
                </h4>
                <p className="text-para leading-normal text-lg isSm:text-[15px]">
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
                <h4 className="font-medium text-3xl isSm:text-lg isSm:mb-2 leading-loose">
                  Lorem Ipsum
                </h4>
                <p className="text-para leading-normal text-lg isSm:text-[15px]">
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
                <h4 className="font-medium text-3xl  isSm:text-lg isSm:mb-2 leading-loose">
                  Lorem Ipsum
                </h4>
                <p className="text-para leading-normal text-lg isSm:text-[15px]">
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
              <h2 className="text-6xl isSm:text-3xl font-bold text-white">
                7-day Free Trial
              </h2>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className="w-7">
                <img src="/images/tickMark.png" alt="" className="w-full" />
              </div>
              <div>
                <h4 className="text-3xl isSm:text-base font-normal text-white">
                  Two 2oz bags of Coffee
                </h4>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <Button
              text="Start Free Trial"
              backgroundColor="bg-white"
              type="button"
            />
          </div>
          <div className="pt-6 isSm:hidden">
            <p className="text-white">
              You will be charged after <b> 7-days </b>and can cancel anytime
            </p>
          </div>
        </div>
      </div>
      <div className="text-center bg-secondary py-2">
        <h4 className="text-2xl font-normal text-white isSm:text-xs">
          You will be charged after <b>7-days</b> and can cancel anytime
        </h4>
      </div>
      <div id="free-trial">
        <CoffeeForm />
      </div>
    </Layout>
  )
}
