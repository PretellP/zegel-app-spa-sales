import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "40px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/"
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between"
      }}
    >
      <Image src="/images/logos/logo.png" alt="logo" height={50} width={145} priority />
      <Image src="/images/gifs/gei.gif" alt='holland' height={50} width={45} priority/>
    </LinkStyled>
  );
};

export default Logo;
