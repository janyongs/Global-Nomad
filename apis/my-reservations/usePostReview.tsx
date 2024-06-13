import { useMutation } from '@tanstack/react-query';
import instance from '@/apis/axios';
import { AxiosError } from 'axios';

interface Request {
  reservationId: number;
  rating: number;
  content: string;
}

async function postReview({ reservationId, rating, content }: Request) {
  const response = await instance.post(
    `/my-reservations/${reservationId}/reviews`,
    {
      rating: rating,
      content: content,
    },
  );
  return response.data;
}

const usePostReview = () => {
  const { mutate, isError } = useMutation({
    mutationFn: (request: Request) => postReview(request),
    onError: (error: AxiosError) => {
      console.error('Error posting review:', error.message);
    },
  });

  return { mutate, isError };
};

export default usePostReview;
