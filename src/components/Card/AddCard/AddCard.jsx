import React from 'react';
import { AddCard } from './AddCard.styled';

const Card = () => {
  return (
    <AddCard>
      <h4 className="title">Add Card</h4>
      <input
        type="text"
        className="titleInput"
        id="title"
        placeholder="Title"
      />
      <textarea
        className="descriptionInput"
        id="description"
        rows="4"
        placeholder="Description"
      ></textarea>
      <label for="filter">Label color</label>
      <input
        className="colorFilter"
        type="radio"
        name="filter"
        id="filter1"
        value="low"
      />
      <input
        className="colorFilter"
        type="radio"
        name="filter"
        id="filter2"
        value="medium"
      />
      <input
        className="colorFilter"
        type="radio"
        name="filter"
        id="filter3"
        value="high"
      />
      <input
        className="colorFilter"
        type="radio"
        name="filter"
        id="filter4"
        value="without"
        checked
      />
      <label for="due-date">Deadline</label>
      <input type="text" className="deadline" id="due-date" />
      <button type="button" className="addBtn" id="add-card">
        Add Card
      </button>
    </AddCard>
  );
};

export default Card;
