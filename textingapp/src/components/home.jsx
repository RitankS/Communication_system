import React, { useState, useEffect } from "react";
import * as microsoftTeams from "@microsoft/teams-js";
import "./home.css";

const Home = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    // Conditional initialization within a try-catch block
    try {
      if (microsoftTeams && microsoftTeams.initialize) {
        microsoftTeams.initialize();
      }
    } catch (error) {
      console.error("Microsoft Teams initialization error:", error);
    }

    // Ensure that your app is running in Teams
    if (microsoftTeams && microsoftTeams.hostClientType === "teams") {
      microsoftTeams.getContext((context) => {
        console.log("Microsoft Teams context:", context);
      });
    } else {
      console.error("This app is not running in Microsoft Teams.");
    }
  }, []);

  const sendText = (e) => {
    setText(e.target.value);
  };

  const payload = {
    text,
  };

  const sendMessage = () => {
    alert("Your Message is: " + payload.text);
  };

  return (
    <>
      <form className="myForm">
        <div className="form-group col-md-6 mx-auto offset-md-3">
          <label htmlFor="exampleFormControlTextarea1">
            Enter Your Text here
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={sendText}
          />
        </div>
        <input
          className="btn btn-primary myForm mx-auto offset-md-3"
          value="Send"
          type="button"
          onClick={sendMessage}
        />
      </form>
    </>
  );
};

export default Home;
