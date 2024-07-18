import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import SocialMediaContainer from "@/components/menu/SocialMediaContainer";

// Import Icons
import IconMenu from "/public/assets/icons/menu.svg";
import IconArrowDown from "/public/assets/icons/arrow_drop_down.svg";

import YumeKaiLogo from "/public/assets/logo/yumekai_color_font.svg";

const menuItems = [
  { name: "Startseite", path: "/" },
  {
    name: "Projekte",
    path: "/yumekai123",
    subItems: [
      { name: "YumeKai", path: "/projekte/sub-item-3" },
      { name: "YumeKai-Night", path: "/projekte/sub-item-4" },
    ],
  },
  { name: "Rückblick YumeKai", path: "/yumekai-2024" },
  { name: "Das sind wir", path: "/this-is-us" },
];

const StyledHeader = styled.header`
  position: relative;
  position: sticky;
  top: -160px;
`;

const MenuLogoBackground = styled.div`
  background-color: var(--background-color2);
  display: flex;
  justify-content: center;
  width: 100vw;
  position: relative;

  svg {
    height: 120px;
    width: 300px;
    padding: 20px;
  }
`;

const SocialMediaWrapper = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const StyledMenu = styled.nav`
  width: 100vw;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $backgroundcolor }) => $backgroundcolor == 1 && `box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) `};
  background-color: ${({ $backgroundcolor }) =>
    $backgroundcolor == 1 ? "var(--background-color2)" : "transparent"};
  z-index: 500;

  svg {
    fill: var(--text-color);
  }

  @media (max-width: 800px) {
    justify-content: flex-end;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  padding: 0 15px;
  color: var(--secondary-color);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease;

  ${({ $active }) =>
    $active == 1 &&
    `
      color: var(--primary-color);
    `}

  &:hover {
    color: var(--grey);
    transform: translateY(-3px);
    transition: transform 0.3s ease;
  }
`;

const HamburgerIcon = styled.div`
  position: fixed;
  right: 10px;
  top: 10px;
  display: none;
  @media (max-width: 800px) {
    display: block;
    cursor: pointer;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  width: 200px;
  background: var(--background-color2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 600;
  display: flex;
  flex-direction: column;
  font-size: large;

  @media (min-width: 801px) {
    display: none;
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: 18px;
  left: 0;
  background: var(--background-color2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 700;
  display: flex;
  flex-direction: column;
  display: none;
`;

const SubMenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: var(--background-color2);

  &:hover ${SubMenu} {
    display: flex;
  }
  a {
    padding-right: 5px;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const MobileSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background-color2);
  z-index: 700;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  padding: 5px 0 5px 15px;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export default function PageHeader() {
  const router = useRouter();
  const { pathname } = router;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);
  const [openSubMenus, setOpenSubMenus] = useState({});

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 800) {
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  function toggleSubMenu(index) {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  function openSubMenu(index) {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  }

  function closeSubMenu(index) {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  }

  if (!windowWidth) {
    return null;
  }

  return (
    <StyledHeader>
      <MenuLogoBackground>
        <YumeKaiLogo />
      </MenuLogoBackground>

      <StyledMenu $backgroundcolor={windowWidth > 800 ? 1 : 0}>
        {windowWidth > 800 &&
          menuItems.map((item, index) => (
            <SubMenuWrapper
              key={item.name}
              onMouseEnter={() => openSubMenu(index)}
              onMouseLeave={() => closeSubMenu(index)}
            >
              <MenuLink href={item.path} $active={pathname === item.path ? 1 : 0}>
                {item.name}
              </MenuLink>
              {item.subItems && (
                <>
                  <IconArrowDown style={{ cursor: "pointer" }} />
                  {openSubMenus[index] && (
                    <SubMenu onMouseLeave={() => closeSubMenu(index)}>
                      <br />
                      {item.subItems.map((subItem) => (
                        <MenuLink
                          key={subItem.name}
                          href={subItem.path}
                          $active={pathname === subItem.path ? 1 : 0}
                          onClick={() => closeSubMenu(index)}
                        >
                          {subItem.name}
                        </MenuLink>
                      ))}
                    </SubMenu>
                  )}
                </>
              )}
            </SubMenuWrapper>
          ))}

        <HamburgerIcon onClick={toggleMobileMenu}>
          <IconMenu />
        </HamburgerIcon>

        {isMobileMenuOpen && (
          <MobileMenu>
            {menuItems.map((item, index) => (
              <div key={item.name}>
                <MenuItemWrapper>
                  <MenuLink href={item.path} $active={pathname === item.path ? 1 : 0}>
                    {item.name}
                  </MenuLink>
                  {item.subItems && (
                    <IconArrowDown
                      style={{ marginLeft: "5px", cursor: "pointer" }}
                      onClick={() => toggleSubMenu(index)}
                    />
                  )}
                </MenuItemWrapper>
                {item.subItems && (
                  <MobileSubMenu $isOpen={openSubMenus[index]}>
                    {item.subItems.map((subItem) => (
                      <MenuLink
                        key={subItem.name}
                        href={subItem.path}
                        $active={pathname === subItem.path ? 1 : 0}
                      >
                        {subItem.name}
                      </MenuLink>
                    ))}
                  </MobileSubMenu>
                )}
              </div>
            ))}
          </MobileMenu>
        )}
      </StyledMenu>
    </StyledHeader>
  );
}
