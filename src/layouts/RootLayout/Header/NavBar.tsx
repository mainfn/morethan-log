import styled from "@emotion/styled"
import Link from "next/link"

const GITHUB_URL = "https://github.com/mainfn";

const NavBar: React.FC = () => {
  // const links = [{ id: 1, name: "Github", to: "https://github.com/mainfn" }]
  // const links = [];
  return (
    <StyledWrapper className="">
      <a href={GITHUB_URL}>{link.name}</a>
{/*       <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={GITHUB_URL}>{link.name}</a>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul> */}
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`
