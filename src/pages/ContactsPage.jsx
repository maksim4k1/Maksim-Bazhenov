import React from "react";
import styled from "styled-components";
import GithubIcon from "../assets/icons/GithubIcon";
import GmailIcon from "../assets/icons/GmailIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import TelegramIcon from "../assets/icons/TelegramIcon";
import WhatsappIcon from "../assets/icons/WhatsappIcon";
import VkIcon from "../assets/icons/VkIcon";
import AppLink from "../components/UI/AppLink";
import Section from "../components/UI/Section";
import Title from "../components/UI/Title";
import { gap } from "../styles/mixins";
import Form from "../components/UI/Form";
import FormTitle from "../components/UI/Form/FormTitle";
import Input from "../components/UI/Form/Input";
import Button from "../components/UI/Button";
import TextArea from "../components/UI/Form/TextArea";
import bgImage from "../assets/gif/typing.gif";

const List = styled.ul`
  display: flex;
  flex-flow: column;
  ${gap("25px")}
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  ${gap("10px")}
  font-size: 18px;
  font-weight: 600;
  &>svg{
    width: 30px;
    height: 30px;
  }
`;
const FormTitleElement = styled(FormTitle)`
  color: var(--color-button-white);
`;

function ContactsPage () {
  return(
    <main className="content">
      <Section>
        <Title>Контакты</Title>
        <List>
          <Item><PhoneIcon/><AppLink href="tel:+996709395519">+996 709 39-55-19</AppLink></Item>
          <Item><WhatsappIcon/><AppLink target="_blank" rel="noreferrer" href="https://wa.me/+996709395519">+996 709 39-55-19</AppLink></Item>
          <Item><TelegramIcon/><AppLink target="_blank" rel="noreferrer" href="https://t.me/maksim4k1">maksim4k1</AppLink></Item>
          <Item><GithubIcon/><AppLink target="_blank" rel="noreferrer" href="https://github.com/maksim4k1">maksim4k1</AppLink></Item>
          <Item><VkIcon/><AppLink target="_blank" rel="noreferrer" href="https://vk.com/maks4k1">maks4k1</AppLink></Item>
          <Item><InstagramIcon/><AppLink target="_blank" rel="noreferrer" href="https://instagram.com/_maksim4k1">_maksim4k1</AppLink></Item>
          <Item><GmailIcon/><AppLink href="mailto:maksim4k1@gmail.com">maksim4k1@gmail.com</AppLink></Item>
        </List>
      </Section>
      <Section bgImage={bgImage}>
        <Form>
          <FormTitleElement>Свяжитесь со мной!</FormTitleElement>
          <Input placeholder="Ваше имя"/>
          <TextArea placeholder="Текст сообщения"></TextArea>
          <Button tyle="submit">Отправить</Button>
        </Form>
      </Section>
    </main>
  );
}

export default ContactsPage;