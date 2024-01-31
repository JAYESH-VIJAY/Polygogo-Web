// import { IMAGES } from "@/assets";
import { Outlet, useNavigate } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGES } from "@/assets";
import PgLogoDark from "@/assets/dashboard/PgLogoDark";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import "swiper/css";
import "swiper/css/pagination";
export default function AuthLayout() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    if (currentUser || localStorage.getItem("accessToken")) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <>
      <div className="w-full ">
        <div className="rounded-lg shadow-lg ">
          <div className="relative h-full g-0 lg:flex ">
            <div className="absolute hidden top-5 left-8 lg:block">
              <PgLogoDark />
            </div>
            <div className="items-center justify-center hidden rounded-b-lg lg:flex md:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
              <Swiper
                className="w-full"
                slidesPerView={1}
                loop={true}
                pagination={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
              >
                {[
                  {
                    img: IMAGES.SLIDE1,
                  },
                  {
                    img: IMAGES.SLIDE2,
                  },
                  {
                    img: IMAGES.SLIDE3,
                  },
                ].map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div>
                      <ImageSlide
                        img={slide.img}
                        title={`${
                          index === 0
                            ? "All messages one inbox"
                            : index === 2
                            ? ` ${" Customer Support"}`
                            : "Increase Daily Revenue"
                        }`}
                        index={index}
                        content="Schedule visit in just a few clicks visits in just a few clicks"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/*  */}
            </div>

            {/* Right column container with background and description*/}
            <div className=" flex flex-col md:justify-center  min-h-screen  pb-3 bg-white  lg:w-6/12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

const ImageSlide = ({ img }: any) => {
  return (
    <>
      <div className="flex flex-col justify-center rounded-md md:m-8 md:mb-8">
        <img loading="lazy" className="lazyload rounded-md " src={img} />
        {/* <div className="lg:ml-24 xl:mx-28 2xl:mx-32">
          <h4 className="mb-2 text-[28px] font-semibold text-primaryDark">
            {title}
          </h4>
          <p className=" max-w-[300px] text-sm text-[#667085] font-normal">
            {content}
          </p>
        </div> */}
      </div>
    </>
  );
};
