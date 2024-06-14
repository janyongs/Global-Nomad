'use client';

import Image from 'next/image';
import Gnb from '@/components/commons/gnb/gnb';
import Footer from '@/components/commons/Footer';
import Calendar from '@/components/reservationHistory/Calendar';
import SideNavigationMenu from '@/components/commons/SideNavigationMenu';

import React from 'react';

export default function Page() {
  return (
    <div className="text-black200 bg-gray50">
      <Gnb />
      <div className="pt-[142px] tablet:pt-[94px] mobile:pt-[94px] w-full flex justify-center">
        <SideNavigationMenu />
        <div className="w-[800px] pl-[24px] tablet:w-[429px] mobile:w-[326px] mobile:px-4 text-[32px] mb-[142px] tablet:mb-[128px]">
          <p className="w-[800px] mobile:w-full font-bold">예약현황</p>
          <div className="w-[800px] tablet:w-[429px] mobile:w-[326px] h-[48px] mt-[42px] px-4 py-3 border border-gray500 rounded-[4px] bg-white relative flex justify-between">
            <p className="bg-white w-[45px] px-1 text-[14px] bottom-10 absolute">
              체험명
            </p>
            <p className="text-[16px]">함께 배우면 즐거운 스트릿 댄스</p>
            <Image
              src="./icons/arrow_down.svg"
              alt="아래 화살표 아이콘"
              width={24}
              height={24}
            />
          </div>
          <Calendar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
