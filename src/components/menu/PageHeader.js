import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// Import Icons
import IconMenu from "/public/assets/icons/menu.svg";
import IconArrow from "/public/assets/icons/email.svg";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Das sind wir", path: "/this-is-us" },
  {
    name: "YumeKai",
    path: "/yumekai",
    subItems: [
      { name: "Sub Item 1", path: "/yumekai/sub-item-1" },
      { name: "Sub Item 2", path: "/yumekai/sub-item-2" },
    ],
  },
  {
    name: "YumeKai1",
    path: "/yumekai1",
    subItems: [
      { name: "Sub Item 3", path: "/yumekai/sub-item-3" },
      { name: "Sub Item 4", path: "/yumekai/sub-item-4" },
    ],
  },
  { name: "Test", path: "/test" },
];

const MenuLogoBackground = styled.div`
  background-color: var(--background-color2);
`;

const StyledMenu = styled.nav`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $backgroundcolor }) => $backgroundcolor == 1 && "box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)"};
  background-color: ${({ $backgroundcolor }) =>
    $backgroundcolor == 1 ? "var(--background-color2)" : "transparent"};
  z-index: 500;

  @media (max-width: 800px) {
    justify-content: flex-end;
    padding-right: 20px;
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

  ${({ $active }) =>
    $active == 1 &&
    `
      color: var(--primary-color);
    `}
`;

const HamburgerIcon = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    cursor: pointer;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 56px;
  right: 0;
  width: 200px;
  background: var(--background-color2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 600;
  display: flex;
  flex-direction: column;

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

export default function PageHeader({}) {
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
    <>
      <MenuLogoBackground>
        <h1>Logo</h1>
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
                  <IconArrow style={{ cursor: "pointer" }} />
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
                    <IconArrow
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
    </>
  );
}
