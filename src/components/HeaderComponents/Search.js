import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchedTextActions } from "../../Store/index";
import Button from "../../UI/Button";
import { nanoid } from "nanoid";
import styles from "./Search.module.css";

const Search = () => {
  const [enteredText, setEnteredText] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [result, setResult] = useState({});
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();

  const queryFunction = useCallback(async () => {
    setIsTouched(false);
    const query =
      enteredText.length !== 0 && `?orderBy="city"&equalTo="${enteredText}"`;
    const response = await fetch(
      "https://mybooking-28176-default-rtdb.firebaseio.com/1/entries.json" +
        query
    );
    let data = await response.json();
    const result = [];
    data = Object.values(data);
    data.forEach(element =>
      result.push({
        key: nanoid(),
        city: element.city,
        filters: element.filters,
        guestrating: element.guestrating,
        hotelName: element.hotelName,
        mapurl: element.mapurl,
        price: element.price,
        rating: element.rating,
        ratings: element.ratings,
        thumbnail: element.thumbnail,
        roomtype: element.roomtype,
      })
    );
    setFlag(true);
    setResult(result);
  }, [enteredText]);

  useEffect(() => {
    queryFunction();
    if (isClicked) {
      dispatch(searchedTextActions.searchText({ result: result, flag: flag }));
    }
    return () => setIsClicked(false);
  }, [isClicked, queryFunction, dispatch]);

  const getSearchedText = event => {
    const { value } = event.target;
    setEnteredText(value);
  };

  return (
    <div className={styles.Search}>
      <p className={styles.title}>My Booking</p>
      <input
        type="text"
        className={styles.SearchBar}
        onChange={getSearchedText}
        onFocus={() => enteredText.length === 0 && setIsTouched(true)}
        value={(
          enteredText.charAt(0).toUpperCase() + enteredText.slice(1)
        ).trim()}
      />
      <Button
        title="Search"
        onClick={() => setIsClicked(true)}
        disabled={enteredText.length === 0}
      ></Button>
      {isTouched && (
        <p className={styles.attentionMessage}>
          Due to data limitations, results show up only for Paris, Toulouz and Marseille.
        </p>
      )}
    </div>
  );
};

export default Search;
