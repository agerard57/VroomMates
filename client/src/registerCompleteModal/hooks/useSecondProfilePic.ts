/** @jsxImportSource @emotion/react */
import { useState, useRef, ChangeEvent, useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { s3UrlBuilder } from "../../core";
import { postProfilePic } from "../services";
import { UseSecondProfilePicManager } from "../types";

export const useSecondProfilePic: UseSecondProfilePicManager = (
  setProfilePicFilled
) => {
  const { t } = useTranslation("RegisterCompleteModal");

  const defaultProfilePicSrc = s3UrlBuilder();

  const [profilePic, setProfilePic] = useState<string>(defaultProfilePicSrc);
  const [picObj, setPicObj] = useState<File | null>(null);
  const componentWillUnmount = useRef<boolean>(false);
  const inputFile = useRef<HTMLInputElement | null>(null);
  const inputClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const fileObj = e.target.files && e.target.files[0];

    if (fileObj && fileObj !== null) {
      if (fileObj.size > 3142728) {
        toast.error(t("messages.profilePic.max"));
        return;
      }
      const reader = new FileReader();

      setPicObj(fileObj);
      setProfilePicFilled(true);
      reader.onloadend = () => {
        setProfilePic(URL.createObjectURL(fileObj));
      };
      reader.readAsDataURL(fileObj);
    }
  };

  useEffect(() => {
    setProfilePicFilled(picObj !== null);
  }, [setProfilePicFilled, picObj]);

  useEffect(
    () => () => {
      componentWillUnmount.current = true;
    },
    []
  );

  useEffect(
    () => () => {
      if (componentWillUnmount.current)
        if (profilePic !== defaultProfilePicSrc && picObj !== null)
          postProfilePic(picObj).then((res) => {
            if (res.status === 200) toast.success(t(res.message));
            else toast.error(t(res.message));
          });
    },
    [defaultProfilePicSrc, picObj, profilePic, t]
  );

  return {
    profilePic,
    inputClickHandler,
    inputFile,
  };
};
