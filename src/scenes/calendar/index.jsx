import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import DayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import ListPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event")
  }

  return <Box>Calendar</Box>;
};

export default Calendar;
