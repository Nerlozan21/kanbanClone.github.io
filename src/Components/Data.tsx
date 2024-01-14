import { useState, useEffect } from "react";
import { Ticket } from "../Model/DataModal";
import "../Styles/DataStyles.css";

const CardData = () => {
  const [data, setData] = useState<{ tickets: Ticket[] }>({ tickets: [] });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
        );
        const fetchedData = await response.json();
        setData(fetchedData); // Set the fetched data to the state
      } catch (error) {
        alert("Error fetching data");
      }
    }
    fetchData();
  }, []);

  return (
    <div id="data-main-container">
      {data && data.tickets && data.tickets.length > 0 ? (
        <div id="data-secondary-container">
          {data.tickets.map((ticket: Ticket) => (
            <div id="component-wrapper" key={ticket.id}>
              <div id="status-grouping-section-main">
                <div id="container-main">
                  <div id="left"></div>
                  <div id="right"></div>
                </div>
              </div>
              <div id="ticket-container">
                <div id="ticket-main">
                  <div id="top-line">
                    <div id="">{ticket.id}</div>
                    <div id="user-icon">{ticket.userId}</div>
                  </div>
                  <div id="middle-line">{ticket.title}</div>
                  <div id="bottom-line">{ticket.tag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No ticket data available</p>
      )}
    </div>
  );
};

export default CardData;
