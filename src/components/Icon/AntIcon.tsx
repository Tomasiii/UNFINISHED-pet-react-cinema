import { TypeAntIconName } from "@Types/icons.types";
import * as AntIcons from "react-icons/ai";

interface IProps {
  icon: TypeAntIconName;
  className?: string;
  onClick: () => void;
}

const AntIcon = ({ icon, className, onClick }: IProps) => {
  const Icon = AntIcons[icon];
  return <Icon className={className} onClick={onClick} />;
};

export default AntIcon;
