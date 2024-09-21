import './ContactFrom.scss'
const ContactFrom = () => {
  return (
   <>
    <div className="contact__form__content">
        <form>
            <div className="name__container">
                <input type="text" name="fistname" id="" placeholder='First Name' />
                <input type="text" name="lastname" id="" placeholder='Lasr Name' />
            </div>

            <input type="email" name="email" id="" placeholder='Email' />
            <textarea name="message" type="text" placeholder='Message' id="" rows={3}></textarea>

            <button>SEND</button>
        </form>
    </div>
   </>
  )
}

export default ContactFrom
