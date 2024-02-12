function PageLink({ href, title, itemClass }) {
  return (
    <li>
      <a href={href} className={itemClass}>
        {' '}
        {title}{' '}
      </a>
    </li>
  )
}

export default PageLink
