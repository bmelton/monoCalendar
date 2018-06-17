import React from 'react';
import './index.css';

const monthNamesFull = [
  "January", "February", "March", "April", "May", 
  "June", "July", "August", "September", "October", 
  "November", "December"  
]

const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", 
  "Aug", "Sep", "Oct", "Nov", "Dec"
];

class CalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: props.month,
      currentYear:  props.year
    };
  };
  
  handleChange = (e, direction) => {
    nextMonth = new Date(this.state.currentYear, this.state.currentMonth);
    nextMonth.setMonth(this.state.currentMonth + direction)
    nm = nextMonth.getMonth();
    ny = nextMonth.getFullYear();
    this.setState({
      currentMonth: nm,
      currentYear: ny
    })
    this.props.monthChanged(month=nm, year=ny);
  }
  
  render() {
    return (
      <div id="calHeader">
        <div className="prevMonth" 
          onClick={(e) => this.handleChange(e, -1)}> &lang; </div>
        <div>
          <h1>
            { monthNames[this.state.currentMonth] }&nbsp;
            { this.state.currentYear }
          </h1>
        </div>
        <div className="nextMonth" 
          onClick={(e) => this.handleChange(e, 1)}> &rang;
        </div>
      </div>    
    )
  }
}

class MonoCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstOfMonth: null,
      daysInMonth:  null,
      daysArray: [],
      firstDayArray: []
    };
  }
  
  calculateFirstDay(month, year) {
    let firstOfMonth = new Date(year, month, 1);
    return firstOfMonth.getDay();
  }
  
  calcDaysInMonth(month, year) {
    let daysInMonth = new Date(year, month+1, 0).getDate();
    return daysInMonth;
  }
  

  monthChanged = (month, year) => {
    daysInMonth = new Date(year, month + 1, 0).getDate();
    daysArray = [...Array(daysInMonth).keys()];
    firstOfMonth = new Date(year, month, 1);
    firstDayArray = [...Array(firstOfMonth).keys()];
    
    this.setState({
      daysInMonth: daysInMonth,
      firstOfMonth: firstOfMonth.getDay(),
      daysArray: daysArray,
      firstDayArray: firstDayArray
    })
  }
  
  paddingDays = () => {
    x = [... Array(this.state.firstOfMonth).keys() ];
    output = [];
    x.map((day, index) => {
      output.push(<div key={index}></div>);
    })
    return output;
  }

  dt    = new Date();
  month = this.dt.getMonth();
  year  = this.dt.getFullYear();
  date = new Date();
  year = this.dt.getFullYear();
  currentYear = this.dt.getFullYear();
  month = this.dt.getMonth();
  day = this.dt.getDate();
  currentMonth = this.dt.getMonth();
  
  componentDidMount() {
    month = this.dt.getMonth();
    year  = this.dt.getFullYear();
    year = this.dt.getFullYear();
    currentYear = this.dt.getFullYear();
    month = this.dt.getMonth();
    day = this.dt.getDate();
    
    let daysInMonth = this.calcDaysInMonth(month, year);
    let firstDay    = this.calculateFirstDay(month, year);
    let daysArray   = [...Array(daysInMonth).keys()];
    let firstDayArray=[...Array(firstDay).keys()];
    
    this.setState({
      daysInMonth: daysInMonth,
      firstOfMonth: firstDay,
      daysArray: daysArray,
      firstDayArray: firstDayArray
    })
  }
  active = false;  
  render() {
    return (
      <div id="Calendar">
        <CalHeader 
          month={ this.month } year={ this.year } 
          monthChanged={ this.monthChanged } />
        <div id="calDayNames">
          { dayNames.map((day, index) => <div key={ index }>{ day }</div>)}
        </div>
        <div id="calDays">
          { this.paddingDays() }
          { this.state.daysArray.map((day, index) => {
            activeClass = "day";
            if(day+1 === this.day && month === this.month && year === this.currentYear) {
              activeClass = "day active";
            }
            
            return (
              <div className={ activeClass } key={ index }>
                { day + 1 }
              </div>
            )
          }) }
        </div>
      </div>
    )
  }
}

export default MonoCalendar;
