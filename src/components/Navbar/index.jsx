import React from "react";
import { Container, Content, MainWrapper, Nav, Wrapper } from "./style";
import logo from "../../assets/img/Rectangle 56.png";
import img from "../../assets/img/image 4.png";
import ru from "../../assets/img/RUS.png";
import us from "../../assets/icons/us.png";
import fon from "../../assets/img/pngwing.com - 2023-08-16T122433 1.png";
import fon1 from "../../assets/img/pngwing.com - 2023-08-16T122433 1 (1).png";
import Button from "../../Generics/Button";
import { useTranslation } from "react-i18next";
import { Button as ButtonA, Dropdown } from "antd";

const Navbar = () => {
  const items = [
    {
      key: "1",
      label: (
        <button className={"btn"} onClick={() => changeLanguage("ru")}>
          <img className={'til'} src={ru} alt="" /> Русский
        </button>
      ),
    },
    {
      key: "2",
      label: (
        <button
        className={"btn"}
        onClick={() => changeLanguage("en")}
      >
        <img className={'til'} src={us} alt="" />
        English
      </button>
      ),
    },
  ];

  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const { t } = useTranslation();
  return (
    <MainWrapper>
      <img src={fon} className="fon" alt="" />
      <img src={fon1} className="fon1" alt="" />
      <Container>
        <Nav>
          <Nav.Column logo>
            <img src={logo} alt="rasm" />
          </Nav.Column>
          <Nav.Column menu>
            <ul>
              <li>
                <a href="#">{t("service")}</a>
              </li>
              <li>
                <a href="#">{t("about")}</a>
              </li>
              <li>
                <a href="#">{t("team")}</a>
              </li>
              <li>
                <a href="#">{t("contact")}</a>
              </li>
              <li>
                <div>
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottomRight"
                    arrow
                  >
                    <ButtonA> {t('lang')}</ButtonA>
                  </Dropdown>

                
                </div>
              </li>
            </ul>
          </Nav.Column>
        </Nav>
        <Wrapper>
          <Content>
            <h1>{t("title")}</h1>
            <p className={"contents"}>{t("textHero")}</p>
            <Button type={"primary"}>{t("contact")}</Button>
          </Content>

          <img src={img} alt="" />
        </Wrapper>
      </Container>
    </MainWrapper>
  );
};

export default Navbar;
