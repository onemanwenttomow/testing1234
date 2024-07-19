import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { SocialMediaContainerHeader } from "@/components/menu/SocialMediaContainer";
import ThemeToggle from "@/components/menu/DarkLightMode";

// Import Icons
import IconMenu from "/public/assets/icons/menu.svg";
import IconArrowDown from "/public/assets/icons/arrow_drop_down.svg";

import YumeKaiLogo from "/public/assets/logo/yumekai_color_font.svg";

const menuItems = [
  { name: "Startseite", path: "/" },
  {
    name: "Projekte",
    path: "/projekte",
    subItems: [
      { name: "YumeKai", path: "/projekte/yumekai" },
      { name: "YumeKai-Night", path: "/projekte/yumekai-night" },
    ],
  },
  { name: "Rückblick YumeKai", path: "/yumekai-2024" },
  { name: "Das sind wir", path: "/this-is-us" },
];

const StyledHeader = styled.header`
  position: relative;
  position: sticky;
  top: -160px;
  z-index: 500;
`;

const MenuLogoBackground = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor2};
  display: flex;
  justify-content: center;
  width: 100vw;
  position: relative;

  .logo {
    height: 120px;
    width: 300px;
    max-width: 45vw;
    padding: 20px;
  }
`;

const StyledMenu = styled.nav`
  position: relative;
  width: 100vw;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $backgroundcolor }) => $backgroundcolor == 1 && `box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) `};
  background-color: ${({ $backgroundcolor, theme }) =>
    $backgroundcolor == 1 ? theme.backgroundColor2 : "transparent"};

  svg {
    fill: ${({ theme }) => theme.text};
  }

  @media (max-width: 800px) {
    justify-content: flex-end;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  padding: 0 15px;
  color: ${({ theme }) => theme.secondaryColor};
  font-weight: bold;
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease;

  ${({ $active }) =>
    $active == 1 &&
    `
      color: ${({ theme }) => theme.secondaryColor};
    `}

  &:hover {
    color: var(--grey);
    transform: translateY(-3px);
    transition: transform 0.3s ease;
  }
`;

const HamburgerIcon = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  width: 30px;

  display: none;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  padding: 10px;
  border-radius: 0 0 0 10px;

  svg {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  width: 200px;
  background: ${({ theme }) => theme.backgroundColor2};
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
  background: ${({ theme }) => theme.backgroundColor2};
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
  background: ${({ theme }) => theme.backgroundColor2};

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
  background: ${({ theme }) => theme.backgroundColor2};
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

const DarkLightModeWrapper = styled.div`
  position: absolute;
  right: 30px;
`;

export default function PageHeader({ toggleTheme, theme }) {
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
        <YumeKaiLogo className="logo" />
        <SocialMediaContainerHeader />
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
        {windowWidth > 800 && (
          <DarkLightModeWrapper>
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
          </DarkLightModeWrapper>
        )}

        <HamburgerIcon>
          <IconMenu onClick={toggleMobileMenu} />
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
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
