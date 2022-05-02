import * as MaterialIcons from "react-icons/md";

import { TypeMaterialIconName } from "@types*";

interface IProps {
  icon: TypeMaterialIconName;
}

const MaterialIcon = ({ icon }: IProps) => {
  const Icon = MaterialIcons[icon];
  return <Icon />;
};

export default MaterialIcon;
