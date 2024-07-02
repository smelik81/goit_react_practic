import { Formik, Form, Field } from "formik";

export default function SearchArticlesForm({ submit }) {
  const handleSubmit = (values, actions) => {
    submit(values.query);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
