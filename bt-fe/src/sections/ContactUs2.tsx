import React from "react";
import Text from "../components/text/TextComponent";
import Button from "../components/text/Button";

const ContactUs2: React.FC = () => {
  return (
    <>
      <div className="h-auto md:h-[90vh] w-screen bg-[#FFFFFF] flex flex-col justify-center">
        <div className="container max-w-7xl mx-auto px-4 py-8 md:py-16 lg:py-20 flex flex-col gap-6 md:gap-12 lg:gap-16">
          <Text
            variant="h2"
            color="text-[#2E4EA1]"
            className="text-2xl sm:text-3xl md:text-4xl"
          >
            Contact Us
          </Text>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 ">
            {/* Contact Form - Left Side */}
            <div className="w-full lg:w-3/5">
              <form className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E4EA1] transition-all"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E4EA1] transition-all"
                    required
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message"
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E4EA1] transition-all resize-y min-h-[120px]"
                    required
                  ></textarea>
                </div>

                <Button
                  variant="button3"
                  bgColor="bg-[#E00047]"
                  color="text-white"
                  className="w-fit"
                >
                  Submit Form
                </Button>
              </form>
            </div>

            {/* Contact Information - Right Side */}
            <div className="w-full lg:w-2/5 mt-8 lg:mt-0">
              {/* <Text
                variant="h4"
                color="text-[#535353]"
                className="mb-4 md:mb-6 text-xl sm:text-2xl"
              >
                Contact Information
              </Text> */}

              <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
                {/* Phone */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 rounded-full flex-shrink-0">
                    <img
                      src="/icons/phone-icon.svg"
                      alt="Phone"
                      className="w-5 h-5 md:w-6 md:h-6"
                      onError={(e) => {
                        // Fallback if custom icon fails to load
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232E4EA1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'%3E%3C/path%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div>
                    <Text
                      variant="body3"
                      color="text-[#535353]"
                      className="font-medium text-sm md:text-base"
                    >
                      Phone
                    </Text>
                    <Text
                      variant="body3"
                      color="text-[#535353]"
                      className="text-base md:text-lg break-words"
                    >
                      +1 (555) 123-4567
                    </Text>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2  rounded-full flex-shrink-0">
                    <img
                      src="/icons/email-icon.svg"
                      alt="Email"
                      className="w-5 h-5 md:w-6 md:h-6"
                      onError={(e) => {
                        // Fallback if custom icon fails to load
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232E4EA1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'%3E%3C/path%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div>
                    <Text
                      variant="body3"
                      color="text-[#535353]"
                      className="font-medium text-sm md:text-base"
                    >
                      Email
                    </Text>
                    <Text
                      variant="body3"
                      color="text-[#535353]"
                      className="text-base md:text-lg break-words"
                    >
                      contact@company.com
                    </Text>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2  rounded-full flex-shrink-0 mt-1">
                    <img
                      src="/icons/location-icon.svg"
                      alt="Address"
                      className="w-5 h-5 md:w-6 md:h-6"
                      onError={(e) => {
                        // Fallback if custom icon fails to load
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232E4EA1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'%3E%3C/path%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'%3E%3C/path%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div>
                    <Text
                      variant="body3"
                      color="text-[#535353]"
                      className="font-medium text-sm md:text-base"
                    >
                      Address
                    </Text>
                    <Text
                      variant="body3"
                      color="text-[#535353]"
                      className="text-base md:text-lg break-words"
                    >
                      Bryan Therapeutics Inc., 2407 South Congress Ave E134,
                      Austin, TX 78704
                    </Text>
                  </div>
                </div>
              </div>

              {/* Map or additional info could go here */}
              {/* <div className="mt-8 md:mt-10 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <Text variant="body2" color="text-gray-700" className="text-sm">
                  Our office hours:
                  <br />
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday - Sunday: Closed
                </Text>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs2;
