import Image from 'next/image';

interface AvatarProps {
  profileImageUrl?: string | null;
}

export default function Avatar({ profileImageUrl = null }: AvatarProps) {
  const imageUrl = profileImageUrl || 'images/mangom.jpeg';

  return (
    <div>
      <Image src={imageUrl} alt="프로필 이미지" height={45} width={45} />
    </div>
  );
}
