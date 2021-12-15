import React from "react"

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-12">
        <div className="my-9">
          <img src="/images/logo-footer.png" alt="logo" />
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="space-y-9">
            <div>
              <p className="text-white cursor-pointer">About</p>
            </div>
            <div>
              <p className="text-white cursor-pointer">Featured Coffees</p>
            </div>
            <div>
              <p className="text-white cursor-pointer">Coffee Subscriptions</p>
            </div>
          </div>
          <div className="space-y-9">
            <div>
              <p className="text-white cursor-pointer">Contact</p>
            </div>
            <div>
              <p className="text-white cursor-pointer">Blog</p>
            </div>
            <div>
              <p className="text-white cursor-pointer">Lorem Ipsum</p>
            </div>
          </div>
          <div className="space-y-9">
            <div>
              <p className="text-white cursor-pointer">Terms & Privacy</p>
            </div>
            <div>
              <p className="text-white cursor-pointer">FAQs</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-white text-xl font-semibold">
                Stay Caffeinated
              </p>
            </div>
            <div className="flex gap-x-2">
              <div>
                <input placeholder="Your Email" className="h-12 w-64 pl-4" />
              </div>
              <div>
                <button className="h-[52px] w-24 bg-transparent border-[1px] border-white border-solid text-white capitalize">
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
