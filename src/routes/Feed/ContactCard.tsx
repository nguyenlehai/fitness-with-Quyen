import styled from "@emotion/styled"
import React from "react"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"
import Image from "next/image"
import Zalo from 'public/zalo.svg';
import Facebook from 'public/facebook.svg';
import Tiktok from 'public/tiktok.svg';

const ContactCard: React.FC = () => {
  return (
    <>
      <StyledTitle>
        <Emoji>💬</Emoji> Liên hệ với tôi
      </StyledTitle>
      <StyledWrapper>
        {CONFIG.profile.facebook && (
          <a
            href={CONFIG.profile.facebook}
            rel="noreferrer"
            target="_blank"
          >
            <Image src={Facebook} alt="facebook" width={45} />
            <div className="name">Tố Quyên</div>
          </a>
        )}
        {CONFIG.profile.tiktok && (
          <a
            href={CONFIG.profile.tiktok}
            rel="noreferrer"
            target="_blank"
          >
            <Image src={Tiktok} alt="tiktok" width={45} />
            <div className="name">Tố Quyên</div>
          </a>
        )}
        {CONFIG.profile.zalo && (
          <a
            href={CONFIG.profile.zalo}
            rel="noreferrer"
            target="_blank"
            css={{ overflow: "hidden" }}
          >
            <Image src={Zalo} alt="zalo" width={45} />
            <div className="name">Tố Quyên</div>
          </a>
        )}
      </StyledWrapper>
    </>
  )
}

export default ContactCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`
const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  a {
    display: flex;
    padding: 0.2rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
