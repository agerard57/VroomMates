import { FC } from "react";

type Props = { filled: boolean; color: string };

export const Star: FC<Props> = ({ filled, color }) => {
  return (
    <svg width={30} height={30} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.042 1.877a1.2 1.2 0 0 1 2.058 0l3.54 5.902a1.2 1.2 0 0 0 .758.552l6.695 1.555a1.2 1.2 0 0 1 .636 1.954l-4.51 5.212a1.2 1.2 0 0 0-.287.888l.594 6.872a1.2 1.2 0 0 1-1.665 1.207l-6.32-2.686a1.2 1.2 0 0 0-.94 0l-6.32 2.687a1.2 1.2 0 0 1-1.664-1.208l.594-6.872a1.2 1.2 0 0 0-.288-.888L2.414 11.84a1.2 1.2 0 0 1 .636-1.954l6.695-1.555a1.2 1.2 0 0 0 .757-.552l3.54-5.902Z"
        fill={filled ? color : "#fff"}
        stroke={color}
        strokeWidth={1.5}
      />
    </svg>
  );
};
