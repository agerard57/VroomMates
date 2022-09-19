export interface SlideSpec {
  content: JSX.Element;
  message?: string;
  nextButtonText: string;
  nextButtonAction?: () => void;
  previousButtonText?: string;
  previousButtonAction?: () => void;
}
