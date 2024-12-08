import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (email) {
        handleSubmit(e);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      return;
    }

    if (form.current) {
      setIsSubmitting(true);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID, // Update for Next.js environment variable
          process.env.NEXT_PUBLIC_TEMPLATE_ID, // Update for Next.js environment variable
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY // Update for Next.js environment variable
        )
        .then(
          () => {
            setEmail("");
            toast.success(t("footer.successToast"));
          },
          (error) => {
            toast.error(t("footer.errorToast"));
            console.log(error);
          }
        )
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <div className="mb-8 w-full">
      <form action='#' ref={form} onSubmit={handleSubmit}>
        <div className='relative flex flex-col md:flex-row items-center'>
          <input
            required
            className='w-full md:w-[316px] xl:w-[412px] peer bg-[var(--color-gray-dark)] outline-none py-2 px-4 text-[var(--color-white)] sm rounded-full border-none focus:shadow-md'
            id='address'
            type='text'
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
            value={email}
            placeholder=" "
            autoComplete="off"
          />
          <label
            className='absolute top-5 translate-y-[-50%] bg-transparent left-4 px-2 text-sm peer-focus:top-0 peer-focus:left-3 font-light peer-focus:text-sm peer-focus:text-[var(--color-white)] peer-valid:left-3 peer-valid:text-sm peer-valid:text-[var(--color-white)] peer-valid:top-0 duration-150'
            htmlFor='address'
          >
            Email Address
          </label>

          <button
            type='submit'
            disabled={isSubmitting}
            className='w-auto mt-[24px] md:mt-0 md:ml-4 bg-transparent uppercase text-[var(--color-white)] px-8 py-[7px] border border-[var(--color-white)] rounded-full hover:bg-[var(--color-white)] hover:text-[var(--color-gray-dark)] transition focus:ring-2 focus:ring-white focus:outline-none'
          >
            Join
          </button>
        </div>
      </form>

      <ToastContainer
        position='bottom-center'
        autoClose={2000}
        hideProgressBar={true}
        rtl={false}
        theme='dark'
        transition={Bounce}
      />
    </div>
  );
};

export default ContactForm;
