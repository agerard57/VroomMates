/** @jsxImportSource @emotion/react */
import { useState, useRef, ChangeEvent, useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { s3UrlBuilder } from "../../core";
import { postProfilePic } from "../services";

type SecondPageProfilePicManager = () => {
  profilePic: string;
  inputClickHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  inputFile: React.MutableRefObject<HTMLInputElement | null>;
};

export const useSecondPageProfilePic: SecondPageProfilePicManager = () => {
  const { t } = useTranslation("RegisterCompleteModal");

  const defaultProfilePicSrc = s3UrlBuilder("e6f5576639004a105dc76a6d0bbfb0d0");
  const [profilePic, setProfilePic] = useState<string>(defaultProfilePicSrc);
  const [picObj, setPicObj] = useState<File | null>(null);
  const inputFile = useRef<HTMLInputElement | null>(null);
  const inputClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const fileObj = e.target.files && e.target.files[0];

    if (fileObj !== null) {
      if (fileObj !== null && fileObj.size > 3000000)
        console.log({ error: "File size cannot exceed more than 3MB" });
      else {
        const reader = new FileReader();

        setPicObj(fileObj);
        reader.onloadend = () => {
          setProfilePic(URL.createObjectURL(fileObj));
        };
        reader.readAsDataURL(fileObj);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (profilePic !== defaultProfilePicSrc && picObj !== null) {
        postProfilePic(picObj).then((res) => {
          if (res.status === 200) toast.success(t(res.message));
          else toast.error(t(res.message));
        });
      }
    };
  }, [defaultProfilePicSrc, picObj, profilePic, t]);

  return {
    profilePic,
    inputClickHandler,
    inputFile,
  };
};
