type Props = (key?: string, bucket?: "profile-pictures") => string;

export const s3UrlBuilder: Props = (
  key = "e6f5576639004a105dc76a6d0bbfb0d0",
  bucket = "profile-pictures"
) =>
  key.includes("http://") || key.includes("https://")
    ? key
    : `https://vroommates-${bucket}.s3.eu-central-1.amazonaws.com/${
        key === "" ? "e6f5576639004a105dc76a6d0bbfb0d0" : key
      }`;
