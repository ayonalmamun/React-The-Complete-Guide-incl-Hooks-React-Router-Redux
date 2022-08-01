import React, { useRef, useState } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const openingTextChangeHandler = (event) => {
    setOpeningText(event.target.value);
  };

  const releaseDateChangeHandler = (event) => {
    setReleaseDate(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);

    setTitle("");
    setOpeningText("");
    setReleaseDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          ref={titleRef}
          value={title}
          onChange={titleChangeHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          rows="5"
          id="opening-text"
          ref={openingTextRef}
          value={openingText}
          onChange={openingTextChangeHandler}
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input
          type="text"
          id="date"
          ref={releaseDateRef}
          value={releaseDate}
          onChange={releaseDateChangeHandler}
        />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
