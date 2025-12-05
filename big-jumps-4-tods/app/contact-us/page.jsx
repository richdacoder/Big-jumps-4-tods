// app/contacts.jsx
import '../styles/contact-us.css';

export default function ContactsPage() {
  return (
    <div className="contacts-page">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Reach out anytime:</p>

      <ul className="contact-list">
        <li>
          <strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a>
        </li>
        <li>
          <strong>Email:</strong> <a href="mailto:info@bigjumps4tods.com">info@bigjumps4tods.com</a>
        </li>
        <li>
          <strong>Instagram:</strong> <a href="https://www.instagram.com/bigjumps4tods?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">@bigjumps4tods</a>
        </li>
        <li>
          <strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=100082738546816" target="_blank" rel="noopener noreferrer">Big Jumps 4 Tods</a>
        </li>
      </ul>
    </div>
  );
}
