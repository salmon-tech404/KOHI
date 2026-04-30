import PropTypes from "prop-types";

export default function PageHero({ image, children }) {
  return (
    <section className='relative flex items-center justify-center h-screen overflow-hidden'>
      <div
        className='absolute inset-0 bg-center bg-cover'
        style={{ backgroundImage: `url('${image}')` }}
      />

      <div className='absolute inset-0 bg-linear-to-b from-coffee-950/70 via-coffee-950/50 to-coffee-950/80' />

      <div className='relative z-10 px-6 text-center text-white'>
        {children}
      </div>
    </section>
  );
}

PageHero.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
