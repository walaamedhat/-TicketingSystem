/* eslint-disable no-case-declarations */
import {
  GET_TICKETS,
  GET_TICKETS_FAIL,
  GET_TICKETS_SUCCESS,
  SELECT_TICKET_FAIL,
  SELECT_TICKET_SUCCESS,
  EDIT_TICKET_SUCCESS,
  EDIT_TICKET_FAIL,
  CLOSE_TICKET_FAIL,
  CLOSE_TICKET_SUCCESS,
  SNOOZED_TICKET_SUCCESS,
  SNOOZED_TICKET_FAIL
} from "./constants";

const initialState = {
  selectedTicket: {},
  loading: false,
  tickets: [],
  error: {
    type: "",
    message: "",
  },
};

const ticketsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TICKETS:
      return { ...state, loading: true, error: { ...initialState.error }};
    case GET_TICKETS_SUCCESS:
      const sortTickets = payload.map(ti => {
        return {
          ...ti,
          is_snoozed: ti.Status === "Snoozed",
        }
      }).sort(function(a,b){return !b.is_snoozed - !a.is_snoozed});
      return { ...state, loading: false, tickets: sortTickets };
    case GET_TICKETS_FAIL:
      return { ...state, loading: false, error: { ...payload }};
    case SELECT_TICKET_SUCCESS:
      return { ...state, loading: false, selectedTicket: payload };
    case SELECT_TICKET_FAIL:
      return { ...state, loading: false, error: { ...payload }};
    case EDIT_TICKET_SUCCESS:
      return {
        ...state,
        loading: false,
        tickets: [
          ...state.tickets.map(ticket =>
              ticket._id === payload._id
                  ? payload
                  : ticket
          ),
        ],
        selectedTicket: payload,
      };
    case EDIT_TICKET_FAIL:
      return { ...state, loading: false, error: { ...payload }}
    case CLOSE_TICKET_SUCCESS:
      return {
        ...state,
        loading: false,
        tickets: [
          ...state.tickets.map(ticket =>
              ticket._id === payload
                  ? {...ticket, Status: "Closed"}
                  : ticket
          ),
        ],
        selectedTicket: {},
      };
    case CLOSE_TICKET_FAIL:
      return { ...state, loading: false, error: { ...payload }};
    case SNOOZED_TICKET_SUCCESS:
      return {
        ...state,
        loading: false,
        tickets: [
          ...state.tickets.map(ticket =>
              ticket._id === payload
                  ? {...ticket, Status: "Snoozed", is_snoozed: true}
                  : ticket
          ),
        ].sort(function(a,b){return !b.is_snoozed - !a.is_snoozed}),
        selectedTicket: {},
      };
    case SNOOZED_TICKET_FAIL:
      return { ...state, loading: false, error: { ...payload }};
    default:
      return state;
  }
};

export default ticketsReducer;
