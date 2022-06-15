const Form = () => {
  return (
    <form>
      <label htmlFor="author">Author:</label>
      <input id='author' type='text'></input>
      <label htmlFor="title">Title:</label>
      <input id='title' type='text'></input>
      <label htmlFor="body">Body:</label>
      <input type="text" name="body" id="body" />
      <button type="submit">Create</button>
    </form>
  );
};

export default Form;
