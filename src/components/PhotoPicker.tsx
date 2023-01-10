import * as React from "react";
import Resizer from "react-image-file-resizer";
import { useState } from "react";

type Props = {
  readonly label: string;
  readonly setArrImages: (value: any) => void;
};

const resizeFile = (file: Blob) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      350,
      450,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });
export const PhotoPicker = ({ label, setArrImages }: Props) => {
  const [previewPhoto, setPreviewPhoto] = useState<string>();

  React.useEffect(() => {
    setArrImages((prevState: string[]) =>
      [...prevState, previewPhoto].filter((i) => i && i.length > 0)
    );
  }, [previewPhoto]);
  const onChange = async (event: React.ChangeEvent) => {
    try {
      const target = event.target as HTMLInputElement;
      setPreviewPhoto("");

      if (!target.files?.length) {
        return;
      }

      const file = target.files[0];
      const image = await resizeFile(file);
      setPreviewPhoto(image as string);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <label
      htmlFor={label}
      className="flex flex-col m-1 items-center justify-center w-[350px] h-[450px] cursor-pointer bg-gray-500 hover:bg-gray-400 relative"
    >
      {previewPhoto ? (
        <img src={previewPhoto} alt="" className=" absolute left-0 top-0" />
      ) : null}
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <span className="text-6xl">+</span>
      </div>
      <input
        id={label}
        type="file"
        className="hidden"
        onChange={(e) => onChange(e)}
      />
    </label>
  );
};
