import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Footer = () => {
  const size = useBreakpoint()
  return (
    <div className="bg-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-12 pb-8">
        <div className="my-9">
          <img src="/images/logo-footer.png" alt="logo" />
        </div>
        <div className="flex justify-between flex-wrap isSm:flex-col isSm:gap-y-6">
          <div className="space-y-9 isSm:space-y-6">
            <div>
              <p className="text-white cursor-pointer text-lg isSm:text-base">
                About
              </p>
            </div>
            <div>
              <p className="text-white cursor-pointer text-lg isSm:text-base">
                Featured Coffees
              </p>
            </div>
            <div>
              <p className="text-white cursor-pointer text-lg isSm:text-base">
                Coffee Subscriptions
              </p>
            </div>
          </div>
          <div className="space-y-9 isSm:space-y-6">
            <div>
              <p className="text-white cursor-pointer text-lg isSm:text-base">
                Contact
              </p>
            </div>
            <div>
              <p className="text-white cursor-pointer text-lg isSm:text-base">
                Blog
              </p>
            </div>
            <div>
              <p className="text-white cursor-pointer text-lg isSm:text-base">
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="space-y-9 isSm:space-y-6">
            <div>
              <p className="text-white cursor-pointer text-lg isSm:text-base">
                Terms & Privacy
              </p>
            </div>
            <div>
              <p className="text-white cursor-pointer text-lg isSm:text-base">
                FAQs
              </p>
            </div>
          </div>
          <div className="space-y-4 isXl:pt-10 isSm:pt-4 isSm:pb-6">
            <div>
              <p className="text-white text-2xl isSm:text-xl font-bold">
                Stay Caffeinated
              </p>
            </div>
            <div className="flex gap-x-2">
              <div>
                <input
                  placeholder="Your Email"
                  className="h-12 w-64 isSm:w-48 pl-4"
                />
              </div>
              <div>
                <button className="h-[52px] w-24 bg-transparent border-[1px] border-white border-solid text-white capitalize cursor-pointer">
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {size.sm ? (
          <div className="pt-8">
            <h4 className="text-white text-base font-bold">Follow Us</h4>
          </div>
        ) : null}
        <div className="flex items-center justify-center gap-4 pt-20 pb-12 isSm:pt-4 isSm:justify-start">
          <div className="h-12 w-12 isSm:h-9 isSm:w-9 bg-form flex justify-center items-center cursor-pointer">
            <img src="/images/facebook.png" alt="" />
          </div>
          <div className="h-12 w-12 isSm:h-9 isSm:w-9 bg-form flex justify-center items-center cursor-pointer">
            <img src="/images/twitter.png" alt="" />
          </div>
          <div className="h-12 w-12 isSm:h-9 isSm:w-9 bg-form flex justify-center items-center cursor-pointer">
            <img src="/images/instagram.png" alt="" />
          </div>
          <div className="h-12 w-12 isSm:h-9 isSm:w-9 bg-form flex justify-center items-center cursor-pointer">
            <img src="/images/youtube.png" alt="" />
          </div>
        </div>
        <div className="text-center">
          <p className="text-para isSm:text-xs">
            <i>Copyright 2021 Lorem Ipsum. All rights reserved.</i>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
