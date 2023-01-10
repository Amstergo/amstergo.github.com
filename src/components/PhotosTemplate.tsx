import * as React from "react";
import { PhotoPicker } from "@/components/PhotoPicker";
import { router } from "next/client";
import mergeImages from "merge-images";
// @ts-ignore
import { triggerBase64Download } from "react-base64-downloader";

type Props = {
  count: number;
};

const positionImg = [
  { x: 0, y: 0 },
  { x: 400, y: 0 },
  { x: 0, y: 400 },
  { x: 400, y: 400 },
];

export const PhotosTemplate = ({ count }: Props) => {
  const arr = [...Array(count).keys()];
  const [arrImages, setArrImages] = React.useState([]);
  const [test, setTest] = React.useState("");

  const createAlbumImagesHandler = () => {
    if (arrImages.length === count) {
      const arrPositionImages = positionImg.map((i, index) => {
        return {
          ...i,
          src: arrImages[index],
        };
      });

      mergeImages(arrPositionImages, {
        width: 2480,
        height: 3508,
      }).then((b64) => {
        setTest(b64);
        triggerBase64Download(b64, "album");
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        {arr.map((c, i) => {
          return (
            <PhotoPicker
              key={c}
              label={`drop-zone-${i + 1}`}
              setArrImages={setArrImages}
            />
          );
        })}
      </div>
      <h2> single template {router.query.id} </h2>
      {test && <img src={test} alt="" />}
      <button
        onClick={createAlbumImagesHandler}
        className="py-2 px-4 bg-gray-300 w-full hover:opacity-80"
      >
        Создать альбом
      </button>
    </>
  );
};
