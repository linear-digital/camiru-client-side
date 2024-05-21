
import React from 'react';
import dayjs from 'dayjs';
import moment from 'moment';
import 'moment/locale/en-gb';
import { Calendar, Col, Radio, Row, Select, theme, Typography } from 'antd';
import dayLocaleData from 'dayjs/plugin/localeData';
import { ConfigProvider } from 'antd';
dayjs.extend(dayLocaleData);
const customLocale = {
    locale: 'en-gb',
    lang: {
      locale: 'en-gb',
      ok: 'OK',
      today: 'Today',
      now: 'Now',
      backToToday: 'Back to today',
      timeSelect: 'Select time',
      dateSelect: 'Select date',
      weekSelect: 'Choose a week',
      clear: 'Clear',
      month: 'Month',
      year: 'Year',
      previousMonth: 'Previous month',
      nextMonth: 'Next month',
      monthSelect: 'Choose a month',
      yearSelect: 'Choose a year',
      decadeSelect: 'Choose a decade',
      yearFormat: 'YYYY',
      dateFormat: 'M/D/YYYY',
      dayFormat: 'D',
      dateTimeFormat: 'M/D/YYYY HH:mm:ss',
      monthFormat: 'MMMM',
      monthBeforeYear: true,
      previousYear: 'Previous year',
      nextYear: 'Next year',
      previousDecade: 'Previous decade',
      nextDecade: 'Next decade',
      previousCentury: 'Previous century',
      nextCentury: 'Next century',
      shortWeekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      // Full day names
      weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
  };
const EventCalendar = () => {
    const { token } = theme.useToken();
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    const wrapperStyle = {
        width: "100%",
        borderRadius: "15px",
    };
    const dateCellRender = (value) => {
        return (
            <div>
                {value.format('dddd, MMMM Do, YYYY')}
            </div>
        );
    };
    return (
        <div style={wrapperStyle} className="w-full p-7 bg-white">
            <ConfigProvider locale={customLocale}>
                <Calendar
                    fullscreen={true}
                    headerRender={({ value, type, onChange, onTypeChange }) => {
                        const start = 0;
                        const end = 12;
                        const monthOptions = [];
                        let current = value.clone();
                        const localeData = value.localeData();
                        const months = [];
                        for (let i = 0; i < 12; i++) {
                            current = current.month(i);
                            months.push(localeData.monthsShort(current));
                        }
                        for (let i = start; i < end; i++) {
                            monthOptions.push(
                                <Select.Option key={i} value={i} className="month-item">
                                    {months[i]}
                                </Select.Option>,
                            );
                        }
                        const year = value.year();
                        const month = value.month();
                        const options = [];
                        for (let i = year - 10; i < year + 10; i += 1) {
                            options.push(
                                <Select.Option key={i} value={i} className="year-item">
                                    {i}
                                </Select.Option>,
                            );
                        }
                        return (
                            <div
                                style={{
                                    padding: 8,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Row gutter={8}>
                                    <Col>
                                        <Select
                                            dropdownMatchSelectWidth={false}
                                            className="my-year-select"
                                            value={year}
                                            onChange={(newYear) => {
                                                const now = value.clone().year(newYear);
                                                onChange(now);
                                            }}
                                        >
                                            {options}
                                        </Select>
                                    </Col>
                                    <Col>
                                        <Select
                                            dropdownMatchSelectWidth={false}
                                            value={month}
                                            onChange={(newMonth) => {
                                                const now = value.clone().month(newMonth);
                                                onChange(now);
                                            }}
                                        >
                                            {monthOptions}
                                        </Select>
                                    </Col>
                                </Row>
                                <Row gutter={8}>
                                    <Col>
                                        <Radio.Group
                                            onChange={(e) => onTypeChange(e.target.value)}
                                            value={type}
                                        >
                                            <Radio.Button value="month">Monthly</Radio.Button>
                                            <Radio.Button value="year">Yearly</Radio.Button>
                                        </Radio.Group>
                                    </Col>
                                </Row>
                            </div>
                        );
                    }}
                    onPanelChange={onPanelChange}
                />
            </ConfigProvider>
        </div>
    );
};
export default EventCalendar;