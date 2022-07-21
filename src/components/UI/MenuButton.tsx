import { FC } from "react";

const MenuButton: FC = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default MenuButton;
