'use client';
import instance from '@/apis/axios';
import { API } from '@/utils/constants/API';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Activity } from './useGetActivities';

export interface ActivityDetail extends Activity {
  subImages: [];
}

const getActivities = (activityId: number): Promise<ActivityDetail> => {
  return instance.get(`${API.ACTIVITIE}/${activityId}`).then((res) => res.data);
};

export const useGetActivitiesDetail = (
  activityId: number,
): UseQueryResult<ActivityDetail> => {
  return useQuery({
    queryKey: ['activities', 'detail', activityId],
    queryFn: () => getActivities(activityId),
  });
};
