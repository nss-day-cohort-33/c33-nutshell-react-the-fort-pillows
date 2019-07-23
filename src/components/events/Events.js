import React, { Component } from 'react'
import EventCard from './EventCard';


export default class Events extends Component {
    render() {
        return (
            <div>
                {
                    this.props.events.map(event => 
                        <EventCard key={event.id} event={event} {...this.props}/>
                        )
                }
            </div>
        )
    }
}
