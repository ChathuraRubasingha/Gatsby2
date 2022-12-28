import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const menuData = [ { title: "Courses", icon: "/images/icons/courses.svg", link: "/courses" },
{
  title: "Tutorials",
  icon: "/images/icons/tutorials.svg",
  link: "/tutorials",
},
{ title: "Pricing", icon: "/images/icons/pricing.svg", link: "/pricing" },
{ title: "Pricing", icon: "/images/icons/pricing.svg", link: "/pricing" },
{ title: "", icon: "/images/icons/search.svg", link: "/search" },
{ title: "", icon: "/images/icons/account.svg", link: "/account" },]

export default function Header() {
  return (
	<Wrapper>
     <img src="/images/logos/logo.svg" />
     <MenuWrapper>
		{menuData.map(item => (
            <Link to={item.link}>
            <MenuItem>
            <img src={item.icon} alt={item.title} />
            {item.title}
            </MenuItem>
            </Link>
        ))}
    </MenuWrapper>
    </Wrapper>
	)
}

const Wrapper = styled.div`
    grid-template-columns: 44px auto;
	justify-content: space-between;
    position: absolute;
    top: 60px;
	align-items: center;
	width: 100%;
	padding: 0 30px;
`
const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 30px;
`
const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
transition: 0.5s ease-out;

:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
}
`