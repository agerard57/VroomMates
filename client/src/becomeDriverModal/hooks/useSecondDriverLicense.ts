import { useState, useRef, ChangeEvent, useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

import { DriverLicenseImage } from "../assets";
import { postDriversLicense } from "../services";
import { UseSecondDriverLicenseManager } from "../types";

export const useSecondDriverLicense: UseSecondDriverLicenseManager = (
  driverLicenseFilled,
  setDriverLicenseFilled
) => {
  const { t } = useTranslation("BecomeDriverModal");

  const defaultDriverLicenseSrc = DriverLicenseImage;

  const [driverLicense, setDriverLicense] = useState<string>(
    defaultDriverLicenseSrc
  );
  const [picObj, setPicObj] = useState<File | null>(null);
  const componentWillUnmount = useRef<boolean>(false);
  const inputFile = useRef<HTMLInputElement | null>(null);
  const inputClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const fileObj = e.target.files && e.target.files[0];

    if (fileObj && fileObj !== null) {
      if (fileObj.size > 5237880) {
        toast.error(t("messages.driverLicense.max"));
        return;
      } else {
        const reader = new FileReader();

        setPicObj(fileObj);
        setDriverLicenseFilled(true);
        reader.onloadend = () => {
          setDriverLicense(URL.createObjectURL(fileObj));
        };
        reader.readAsDataURL(fileObj);
      }
    }
  };

  useEffect(() => {
    setDriverLicenseFilled(picObj !== null);
  }, [setDriverLicenseFilled, picObj]);

  useEffect(() => {
    return () => {
      componentWillUnmount.current = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (componentWillUnmount.current)
        if (driverLicenseFilled && picObj !== null)
          postDriversLicense(picObj).then((res) => {
            if (res.status === 200) toast.success(t(res.message));
            else toast.error(t(res.message));
          });
    };
  }, [defaultDriverLicenseSrc, picObj, driverLicense, t, driverLicenseFilled]);

  return {
    driverLicense,
    inputClickHandler,
    inputFile,
  };
};
