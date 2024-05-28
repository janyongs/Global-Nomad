'use client';
import { useState } from 'react';
import Gnb from '@/components/commons/gnb/gnb';
import SideNavigationMenu from '@/components/commons/SideNavigationMenu';
import FilterDropdown from '@/components/commons/FilterDropdown';
import data from './mock.json';
import Image from 'next/image';

const MyReservations = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <Gnb />
      <main className="flex justify-center min-h-[100vh] max-h-[100%] bg-gray50">
        <div className="flex gap-6 w-[1200px] pt-[142px]">
          <SideNavigationMenu />
          <div className="flex flex-col flex-grow">
            <div className="flex justify-between">
              <p className="text-[2rem] font-bold">예약내역</p>
              {data.totalCount !== 0 && (
                <FilterDropdown type="bookingPage" onSelect={handleSelect} />
              )}
            </div>
            {data.totalCount === 0 ? (
              <div className="flex flex-col flex-grow gap-5 items-center mt-[90px]">
                <Image
                  src="/icons/empty.svg"
                  className="my-[31px] mx-[55px]"
                  width={130}
                  height={177}
                  alt="빈 예약 내역"
                />
                <p className="text-[1.5rem] font-medium text-gray500">
                  아직 등록한 체험이 없어요
                </p>
              </div>
            ) : (
              <div className="mt-[16px]">
                {data.reservations.map((item) => (
                  <div
                    key={item.id}
                    className="flex w-[792px] min-h-[204px] bg-white"
                  >
                    <div className="w-[204px] h-[100%] bg-gray200"></div>
                    <div>
                      <p>{item.activity.title}</p>
                      <p>{item.date}</p>
                      <p>₩{item.totalPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyReservations;
