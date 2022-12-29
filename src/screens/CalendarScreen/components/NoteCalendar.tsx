import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar, CalendarUtils } from "react-native-calendars";

const NoteCalendar = (props) => {
    const {noteList, selected, setSelected} = props

    const dot = { color: "blue", selectedDotColor: "red" };
  
    const getMarkerDays = () => {
      let markerDays: {} = {};
      let dotDay: { date: string; count: number }[] = [];
      let duplicateCount = {};
      noteList.forEach((note) => {
        const day = CalendarUtils.getCalendarDateString(note.date);
        duplicateCount[day] = (duplicateCount[day] || 0) + 1;
        dotDay = Object.keys(duplicateCount).map((e) => {
          return { date: e, count: duplicateCount[e] };
        });
      });
  
      dotDay.forEach((day) => {
        let dots: {}[] = [];
        for (let i = 0; i < day.count; i++) {
          dots.push(dot);
        }
        markerDays[day.date] = {
          dots,
        };
      });
      return markerDays
    }
  
    const onDayPress = useCallback((day) => {
      setSelected(day.dateString);
    }, []);
  
  
    const marked = useMemo(() => {
      return {
        ...getMarkerDays(),
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: "orange",
          selectedTextColor: "red",
        },
      };
      
    }, [selected, getMarkerDays]);
  
    return (
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: "gray",
          height: 350,
        }}
        onDayPress={onDayPress}
        markedDates={marked}
        markingType={"multi-dot"}
      />
    );
}

export default NoteCalendar
const styles = StyleSheet.create({})