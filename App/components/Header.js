import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  color: 'white',
  marginLeft: 10,
  fontWeight: 600,
  textDecoration: 'none'
}

const headerStyle = {
  display: 'flex',
  justfyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#19a9ed',
  height: 50
}

export default function Header() {
  return (
    <div style={headerStyle}>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  )
}
