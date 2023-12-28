import Image from "next/image";
import { Fragment, useCallback, useState } from "react";
import {
  SideBarContainer,
  SideBarLogoWrapper,
  SideBarListWrapper,
  SideBarLine,
} from "./SideBar.styles";
import logoIcon from "./ui/assets/sidebar-logo.svg?url";
import settingsIcon from "./ui/assets/settings.svg?url";
import arrowIcon from "./ui/assets/arrow.svg?url";
import scrollBackIcon from "./ui/assets/scroll-back.svg?url";
import { SIDE_BAR_LIST } from "./SideBar.constants";
import { SidebarItem } from "./ui/components/SidebarItem/SidebarItem";

export default function SideBar() {
  const [chosenItemId, setChosenItemId] = useState<any>(null);
  const [expanded, setExpanded] = useState(false);

  const handleExpand = useCallback(() => setExpanded(!expanded), [expanded]);

  const handleChooseItemId = (id: number) => setChosenItemId(id);

  return (
    <SideBarContainer expanded={expanded}>
      <div>
        <SideBarLogoWrapper>
          <Image src={logoIcon} alt="sidebar-logo" width={48} height={48} />
        </SideBarLogoWrapper>
        <SideBarListWrapper>
          {SIDE_BAR_LIST.map((e) => (
            <Fragment key={e.id}>
              <SidebarItem
                info={{ ...e, expanded, chosenItemId }}
                handleClick={handleChooseItemId}
              />
            </Fragment>
          ))}
        </SideBarListWrapper>
        <SideBarLine />
        <SidebarItem
          info={{
            id: 5,
            icon: settingsIcon,
            title: "Settings",
            expanded,
            chosenItemId,
          }}
          handleClick={handleChooseItemId}
        />
      </div>
      {expanded ? (
        <SidebarItem
          info={{ id: 6, icon: scrollBackIcon, title: "" }}
          handleClick={handleExpand}
        />
      ) : (
        <SidebarItem
          info={{ id: 7, icon: arrowIcon, title: "" }}
          handleClick={handleExpand}
        />
      )}
    </SideBarContainer>
  );
}
