import PropTypes from 'prop-types';

function Page({ section, refCallback }) {
  const { title, subtitle } = section;

  return (
    <>
      <section id={title} ref={refCallback}>
        <div className="content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </section>
    </>
  );
}

Page.propTypes = {
  section: PropTypes.object,
  refCallback: PropTypes.func,
};

export default Page;
