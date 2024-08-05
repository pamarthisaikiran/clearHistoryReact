import './index.css'
const ListItems = props => {
  const {details, deleted} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details

  const onPressed = () => {
    deleted(id)
  }

  return (
    <li className="li">
      <p className="time-para">{timeAccessed}</p>
      <div className="logo-title-container">
        <div className="logo-title-box">
          <img className="img-log" src={logoUrl} alt="logo" />
          <p className="para">
            {title}: <span className="span">{domainUrl}</span>
          </p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            onClick={onPressed}
          />
        </div>
      </div>
    </li>
  )
}

export default ListItems
