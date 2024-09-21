import ContactFrom from './ContactFrom/ContactFrom'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
// import mailIcon from './assets/Images/email-icon.png'
import './ContactMe.scss'
const ContactMe = () => {
  return (
    <>
    <section className="contact__container" id='ContactSection'>
        <h5>contact Me</h5>

        <div className='contact_content'>
            <aside style={{ flex: 1 }}>
            <ContactInfoCard IconUrl="../../../public/assets/Images/email-icon.png" text="Sajeevanvan19@gmail.com" />
            <ContactInfoCard IconUrl="../../../public/assets/Images/github-icon.png" text="https://github.com/sajeevan23" />
            </aside>
            <aside style={{ flex: 1 }}>
              <ContactFrom />
            </aside>
        </div>
    </section>
    </>
  )
}

export default ContactMe
