import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const menuData = [ { title: "Courses", icon: "/images/icons/courses.svg", link: "/courses" },
{
  title: "Tutorials",
  icon: "/images/icons/tutorials.svg",
  link: "/tutorials",
},
{ title: "Pricing", icon: "/images/icons/pricing.svg", link: "/pricing" },]

export default function Header() {
  return (
	<Wrapper>
     <img src="/images/logos/logo.svg" />
     <MenuWrapper>
		{menuData.map(item => (
            <Link to={item.link}>
            <img src={item.icon} alt={item.title} />
            {item.title}
            </Link>
        ))}
    </MenuWrapper>
    </Wrapper>
	)
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
	grid-template-columns: 44px auto;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0 30px;
`
const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 30px;
`
const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  align-items: center;
  padding: 10px;
`