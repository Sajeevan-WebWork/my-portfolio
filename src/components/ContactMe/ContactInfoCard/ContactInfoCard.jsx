import "./ContactInfoCard.scss"
const ContactInfoCard = ({IconUrl, text}) => {
  return (
    <>
    <div className="contact__details__card">
        <figure className="icon">
            <img src={IconUrl} alt={text} />
        </figure>
        {/* <a href={`mailto:${text}`}>{text}</a> */}
        <p>{text}</p>
    </div>
    </>
  )
}

export default ContactInfoCard
