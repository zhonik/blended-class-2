import { FiSearch } from 'react-icons/fi';
import css from './SearchForm.module.css';
import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.error('Please fill in the search field!');

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    if (values.search.trim() === '') {
      notify();
      return;
    }
    onSubmit(values.search);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <Field
          className={css.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          <FiSearch size={16} />
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </Form>
    </Formik>
  );
};

export default SearchForm;
