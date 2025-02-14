import ImageInput from './ImageInput';
import Image from 'next/image';

export interface FileInputProps {
  files: string[];
  setFiles: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function BannerImageInput({ files, setFiles }: FileInputProps) {
  const handleDeleteFile = (fileName: string) => {
    setFiles((prev) => prev.filter((file) => file !== fileName));
  };

  return (
    <>
      <div className="text-h2 text-black200">배너 이미지</div>
      <div className="w-full flex gap-6 tablet:gap-4 mobile:gap-2">
        <ImageInput files={files} setFiles={setFiles} type="banner" />
        {files.map((file) => (
          <div className="relative" key={`${file}_key`}>
            <div className="w-[180px] h-[180px] rounded-3xl overflow-hidden relative tablet:w-[206px] tablet:h-[206px] mobile:w-[167px] mobile:h-[167px]">
              <Image
                src={file}
                fill
                alt={file}
                placeholder="blur"
                blurDataURL={file}
              />
            </div>
            <div
              className="absolute right-[-10px] top-[-15px] z-1 w-10 h-10 tablet:w-8 tablet:h-8 tablet:top-[-10px] mobile:w-6 mobile:h-6 mobile:right-[2.5px] mobile:top-[-5px]"
              onClick={() => handleDeleteFile(file)}
            >
              <Image
                src="/icons/file-close-btn.svg"
                alt="파일삭제버튼"
                fill
                style={{ opacity: '0.8' }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray600 text-h4-regular">
        * 배너이미지는 최대 1개만 등록 가능합니다.
      </p>
    </>
  );
}
