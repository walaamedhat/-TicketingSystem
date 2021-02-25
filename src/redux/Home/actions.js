const {
  GET_TICKETS,
  GET_TICKETS_SUCCESS,
  GET_TICKETS_FAIL,
  SELECT_TICKET_SUCCESS,
  SELECT_TICKET_FAIL,
  EDIT_TICKET_FAIL,
  EDIT_TICKET_SUCCESS,
  CLOSE_TICKET_FAIL,
  CLOSE_TICKET_SUCCESS,
  SNOOZED_TICKET_FAIL,
  SNOOZED_TICKET_SUCCESS
} = require("./constants");

const Tickets = [
  {
    _id: "5cdb6454107a752e479349f9",
    Title: "New Task",
    Assignee: "Razan Kiwan",
    Status: "New",
    Goal: "Buy a product"
  },{
    _id: "5cdb6454107a752e479349ff",
    Title: "New Task2",
    Assignee: "Walaa Medhat",
    Status: "New",
    Goal: "Buy a product"
  },{
    _id: "5cdb654107a752e47934gff",
    Title: "New Task3",
    Assignee: "Jessica",
    Status: "Snoozed",
    Goal: "Buy a product"
  },{
    _id: "5cdb645107a752e47934gff",
    Title: "New Task3",
    Assignee: "Abdallah Zain",
    Status: "Snoozed",
    Goal: "Buy a product"
  },{
    _id: "cdb6454107a752e47934gff",
    Title: "New Task3",
    Assignee: "Ahmed Medhat",
    Status: "Snoozed",
    Goal: "Buy a product"
  },{
    _id: "5cdb645107a752e479343ff",
    Title: "New Task3",
    Assignee: "Walaa Test",
    Status: "Snoozed",
    Goal: "Buy a product"
  },{
    _id: "5cdb6454101a752e47924gff",
    Title: "New Task3",
    Assignee: "Jessica Nash",
    Status: "New",
    Goal: "Buy a product"
  },{
    _id: "54db6454107a752e47934gff",
    Title: "New Task3",
    Assignee: "User Test",
    Status: "Snoozed",
    Goal: "Buy a product"
  },{
    _id: "5cd56454107a752e47934gff",
    Title: "New Task3",
    Assignee: "Alaa Kiwan3",
    Status: "Snoozed",
    Goal: "Buy a product"
  },{
    _id: "5cdb6754107a752e47934gff",
    Title: "New Task3",
    Assignee: "Walaa Kiwan3",
    Status: "Snoozed",
    Goal: "Buy a product"
  },{
    _id: "5cdb64541078752e47934gff",
    Title: "New Task3",
    Assignee: "Mohammed Kiwan3",
    Status: "Snoozed",
    Goal: "Buy a product"
  },{
    _id: "5cdb6454107a752e47934gff",
    Title: "New Task3",
    Assignee: "Zain Kiwan3",
    Status: "Closed",
    Goal: "Buy a product"
  },{
    _id: "5cdb6454457a752e47934gff",
    Title: "New Task3",
    Assignee: "Kamelia Test",
    Status: "Closed",
    Goal: "Buy a product"
  },{
    _id: "5cdb6454107a752e44934gff",
    Title: "New Task3",
    Assignee: "Maria Test",
    Status: "Closed",
    Goal: "Buy a product"
  },{
    _id: "5cdb6454107a7234e47934gff",
    Title: "New Task3",
    Assignee: "Razan Test",
    Status: "Closed",
    Goal: "Buy a product"
  }
];

// Get Tickets
export const getTickets = () => async dispatch => {
  try {
    dispatch({ type: GET_TICKETS });
    dispatch({ type: GET_TICKETS_SUCCESS, payload: Tickets });
  } catch (error) {
    dispatch({ type: GET_TICKETS_FAIL, payload: { type: "getTickets", message: error.message } });
  }
};

// Select Ticket
export const selectTicket = ticket => async dispatch => {
  try {
    dispatch({ type: SELECT_TICKET_SUCCESS, payload: ticket });
  } catch (error) {
    dispatch({ type: SELECT_TICKET_FAIL, payload: { type: "selectTicket", message: error.message } });
  }
};

// // Edit Ticket
export const editTicket = ticketData => async dispatch => {
  console.log(ticketData,'ticketData')
  try {
   dispatch({ type: EDIT_TICKET_SUCCESS, payload: ticketData })
  } catch (error) {
    dispatch({ type: EDIT_TICKET_FAIL, payload: { type: "editTicket", message: error.message } });
  }
};

// // Close Ticket
export const closeTicket = ticketId => async dispatch => {
  try {
   dispatch({ type: CLOSE_TICKET_SUCCESS, payload: ticketId })
  } catch (error) {
    dispatch({ type: CLOSE_TICKET_FAIL, payload: { type: "closeTicket", message: error.message } });
  }
};

// // Snoozed Ticket
export const snoozedTicket = ticketId => async dispatch => {
  try {
   dispatch({ type: SNOOZED_TICKET_SUCCESS, payload: ticketId })
  } catch (error) {
    dispatch({ type: SNOOZED_TICKET_FAIL, payload: { type: "snoozedTicket", message: error.message } });
  }
};
