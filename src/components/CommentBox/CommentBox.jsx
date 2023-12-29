import { useState, useEffect } from "react";
import "./CommentBox.scss";

const CommentBox = ({ commentsArr, setCommentsArr, articleID }) => {
  console.log(commentsArr);
  const [formData, setFormData] = useState({ name: "", comment: "", date: "" });
  const [errors, setErrors] = useState({ nameError: "", commentError: "" });

  const getCurrentDate = () => {
    let currentDate = new Date().toLocaleString("en-GB");
    currentDate = currentDate.replace(/\//g, ".");
    console.log(currentDate);
    return currentDate;
  };

  useEffect(() => {
    console.log(formData); // Виведення у консоль при зміні formData
  }, [formData]);

  const publishComment = async (event) => {
    event.preventDefault();
    let currentDate = getCurrentDate();

    setFormData((prevFormData) => ({
      ...prevFormData,
      date: currentDate,
    }));
    if (formData.date !== "") {
      try {
        const response = await fetch("http://localhost:3003/postComment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([articleID, formData]),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        let json = await response.json();
        console.log(json);
        // Очистка форми після успішної відправки
        setFormData({ name: "", comment: "", date: "" });
        if (json !== undefined) {
          setCommentsArr(json);
        }
        setCommentsArr(json);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Валідація
    if (name === "name") {
      if (!value) {
        setErrors({ ...errors, nameError: "Please enter a name" });
        event.target.className = "error";
      } else {
        setErrors({ ...errors, nameError: "" });
        event.target.className = "";
      }
    }

    if (name === "comment") {
      if (!value) {
        setErrors({ ...errors, commentError: "Please enter a comment" });
        event.target.className = "error";
      } else if (value.length > 200) {
        setErrors({
          ...errors,
          commentError: "Comment should not exceed 200 characters",
        });
        event.target.className = "error";
      } else {
        setErrors({ ...errors, commentError: "" });
        event.target.className = "";
      }
    }
  };

  // Визначення стану кнопки submit
  const isDisabled =
    !formData.name || !formData.comment || formData.comment.length > 200;

  return (
    <div className="comment-box">
      <div className="add-comment">
        <h2>Add comment</h2>
        <form className="add-comment-form" onSubmit={publishComment}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.nameError && <p className="error">{errors.nameError}</p>}
          <textarea
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleInputChange}
          ></textarea>
          {errors.commentError && (
            <p className="error">{errors.commentError}</p>
          )}
          <input type="submit" value="Publish comment" disabled={isDisabled} />
        </form>
      </div>
      <hr />
      <h2>Comments</h2>
      {Array.isArray(commentsArr) && commentsArr.length !== 0 ? (
        commentsArr.map((comment, index) => (
          <div className="comment" key={index}>
            <div className="comment-title">
              <span className="name">{comment.name}</span>
              <span className="time">published {comment.date}</span>
            </div>
            <div className="comment-text">{comment.comment}</div>
          </div>
        ))
      ) : (
        <p>There are no comments yet.</p>
      )}
    </div>
  );
};

export default CommentBox;
