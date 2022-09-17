type Props = (key: string, bucket?: "profile-pictures") => string;

export const s3UrlBuilder: Props = (key: string, bucket = "profile-pictures") =>
  key.includes("http://") || key.includes("https://")
    ? key
    : `https://vroommates-${bucket}.s3.eu-central-1.amazonaws.com/${key}`;
