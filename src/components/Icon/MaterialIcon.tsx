import { TypeMaterialIconName } from "@Types/icons.types";
import * as MaterialIcons from "react-icons/md";

interface IProps {
  icon: TypeMaterialIconName;
}

const MaterialIcon = ({ icon }: IProps) => {
  const Icon = MaterialIcons[icon];
  return <Icon />;
};

export default MaterialIcon;
