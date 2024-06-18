import Image from 'next/image';
import { Activity, MyActivitieType } from '@/types/myActivitiesType';
import {
  ReservationScheduleType,
  ReservationStatusCountType,
} from '@/types/activitiesReservationType';
import { useState } from 'react';

interface SelectBoxProps {
  myActivityes?: Activity[];
  reservations?: ReservationScheduleType[];
  onSelect: (id: number) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  myActivityes,
  reservations,
  onSelect,
}) => {
  //TODO : myActivityes, reservations별로 함수 구분?

  const [selectActivity, setSelectActivity] = useState<Activity | null>(null);
  const [selectReservation, setSelectReservation] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (activity: Activity) => {
    setSelectActivity(activity);
    setIsOpen(false);
    onSelect(activity.id); // 선택된 활동의 id 값을 상위 컴포넌트로 전달
  };

  const handleReservationSelect = (
    scheduleId: number,
    reservationTime: string,
  ) => {
    setSelectReservation(reservationTime);
    setIsOpen(false);
    onSelect(scheduleId); // 선택된 활동의 id 값을 상위 컴포넌트로 전달
  };

  return (
    <div
      className={`relative ${
        myActivityes
          ? 'w-[800px] tablet:w-[429px] mobile:w-[326px] mt-[42px]'
          : 'w-[381px] tablet:w-[381px] mobile:w-[303px] rounded-2xl '
      } h-[48px]`}
    >
      <div
        className={`px-4 py-3 border border-gray500 ${
          reservations && 'mobile:rounded-[15px]'
        } rounded-[4px] bg-white flex justify-between cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {myActivityes && (
          <p className="bg-white w-[45px] px-1 text-[14px] left-3 bottom-10 absolute">
            체험명
          </p>
        )}
        <p className="text-[16px]">
          {myActivityes
            ? selectActivity
              ? selectActivity.title
              : '체험을 선택하세요'
            : selectReservation
            ? selectReservation
            : '예약 시간을 선택하세요'}
        </p>
        <Image
          src="./icons/arrow_down.svg"
          alt="아래 화살표 아이콘"
          width={24}
          height={24}
        />
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray500 rounded-[4px] mt-1 max-h-60 overflow-auto">
          {myActivityes?.map((activity) => (
            <li
              key={activity.id}
              className="px-4 py-2 text-[16px] cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelect(activity)}
            >
              {activity.title}
            </li>
          ))}
          {reservations?.map((reservation) => {
            const reservationTime =
              reservation.startTime + '~ ' + reservation.endTime;
            return (
              <>
                <li
                  key={reservation.scheduleId}
                  className="px-4 py-2 text-[16px] cursor-pointer hover:bg-gray-200"
                  onClick={() =>
                    handleReservationSelect(
                      reservation.scheduleId,
                      reservationTime,
                    )
                  }
                >
                  {reservationTime}
                </li>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
};

// const;

export default SelectBox;
