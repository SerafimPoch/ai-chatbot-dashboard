import { memo } from "react";
import Image from "next/image";
import { SidebarItemContainer, SidebarItemTitle } from "./styles";

interface SidebarItemProps {
  info: {
    id: number;
    icon: string;
    title: string;
    expanded?: boolean;
    chosenItemId?: number;
  };
  handleClick: (id: number) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = memo(
  ({ info, handleClick }) => {
    const { id, icon, title, expanded, chosenItemId } = info;
    const isActiveId = chosenItemId === id;

    return (
      <SidebarItemContainer
        isActiveId={isActiveId}
        onClick={() => handleClick(id)}
      >
        <Image src={icon} alt={icon} width={24} height={24} />
        {expanded && (
          <SidebarItemTitle isActiveId={isActiveId}>{title}</SidebarItemTitle>
        )}
      </SidebarItemContainer>
    );
  }
);

export default SidebarItem;

SidebarItem.displayName = "SidebarItem";
