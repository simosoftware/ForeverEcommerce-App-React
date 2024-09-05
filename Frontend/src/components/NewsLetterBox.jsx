const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="font-medium text-2xl text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 uppercase"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
