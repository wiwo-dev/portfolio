import React, { useState } from "react";
import Heading from "components/ui/Heading";
import UnderlineText from "components/ui/UnderlineText";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useWindowWidth from "utils/useWindowWidth";

const phases = [
  {
    body: () => (
      <>
        The <UnderlineText>definition</UnderlineText> phase is to understand the business problem. I know what questions
        to ask to go smoothly through the process. I will propose possible solutions and walk you through those, so we
        can decide on the complexity and the final scope.
      </>
    ),
  },
  {
    body: () => (
      <>
        When we have a defined project I can get down to work. During the <UnderlineText>development</UnderlineText>{" "}
        phase, we can set regular checkups to make sure that the work is going in the right direction.
      </>
    ),
  },
  {
    body: () => (
      <>
        The <UnderlineText>delivery</UnderlineText> phase is for the final round of amendments after which the project
        goes live. I can help you buy a domain or connect the one you already have and set up analytic tools.
      </>
    ),
  },
];

export default function TheProcessSection({ id }) {
  const { windowWidth, currentScreen } = useWindowWidth();

  const [showSwiperNavigation, setShowSwiperNavigation] = useState(false);
  const [swiperIsEnd, setSwiperIsEnd] = useState(false);
  const [swiperIsBeginning, setSwiperIsBeginning] = useState(true);

  function SlideNextButton() {
    const swiper = useSwiper();
    return (
      <>
        {showSwiperNavigation && !swiperIsEnd && (
          <div className="absolute right-0 top-0 bottom-0 h-full flex items-center z-10">
            <button
              className="p-8 bg-salmon"
              onClick={() => {
                swiper.slideNext();
              }}>
              NEXT
            </button>
          </div>
        )}
      </>
    );
  }

  function SlidePrevButton() {
    const swiper = useSwiper();
    return (
      <>
        {showSwiperNavigation && !swiperIsBeginning && (
          <div className="absolute left-0 top-0 bottom-0 h-full flex items-center z-10">
            <button
              className="p-8 bg-salmon"
              onClick={() => {
                swiper.slidePrev();
              }}>
              PREV
            </button>
          </div>
        )}
      </>
    );
  }

  return (
    <section id={id} className="bg-yellow-base py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-[32px]">
        <Heading>The process</Heading>
        <p className="text-lg lg:text-xl mt-8">
          You have a project in mind but you are not sure how to start working on it? I’m here to help, let’s connect.
          Typical digital projects consist of three parts:
          <UnderlineText color="salmon">definition</UnderlineText>, <UnderlineText>development</UnderlineText> and{" "}
          <UnderlineText>delivery</UnderlineText>.
        </p>
      </div>
      <div className="py-8 relative">
        {windowWidth < 1024 ? (
          <div onMouseEnter={() => setShowSwiperNavigation(true)} onMouseLeave={() => setShowSwiperNavigation(false)}>
            <Swiper
              //navigation={true}
              //modules={[Navigation]}
              pagination={{
                clickable: true,
              }}
              spaceBetween={16}
              slidesPerView={1.2}
              centeredSlides={false}
              onSlideChange={(swiper) => {
                console.log("slide change");

                if (swiper.isBeginning) setSwiperIsBeginning(true);
                else setSwiperIsBeginning(false);
                if (swiper.isEnd) setSwiperIsEnd(true);
                else setSwiperIsEnd(false);
              }}
              onSwiper={(swiper) => console.log(swiper)}>
              {phases.map((el, ind) => (
                <SwiperSlide
                  key={ind}
                  style={{
                    height: "auto",
                    paddingLeft: ind === 0 ? "32px" : "0px",
                    paddingRight: ind === phases.length - 1 ? "32px" : "0px",
                  }}>
                  <p className="border-2 rounded-md border-gray-900 p-5 text-lg lg:text-xl pt-4 h-full">
                    <el.body />
                  </p>
                </SwiperSlide>
              ))}
              <SlidePrevButton />
              <SlideNextButton />
            </Swiper>
          </div>
        ) : (
          <div className="flex gap-3 max-w-screen-xl mx-auto px-[32px]">
            {phases.map((el, ind) => (
              <p
                key={ind}
                className={`flex-1 rounded-md border-gray-900 text-xl pt-8 ${ind !== 0 && "pl-12"} ${
                  ind !== phases.length - 1 && "pr-12"
                }`}>
                <el.body />
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="max-w-screen-xl mx-auto px-[32px]">
        <p className="text-lg lg:text-xl mt-8">
          I’m not a big digital agency so you can be sure, that you will have direct contact with me. I’m flexible. If
          you feel like your project needs a different structure or maybe you would like to involve me on even earlier,
          creative or strategy stages I’m open to that as well.
        </p>
      </div>
    </section>
  );
}
